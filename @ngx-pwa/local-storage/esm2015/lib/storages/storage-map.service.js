import { __decorate, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { throwError, of, ReplaySubject } from 'rxjs';
import { mergeMap, catchError, tap } from 'rxjs/operators';
import { ValidationError } from './exceptions';
import { JSONSchema, JSONSchemaBoolean, JSONSchemaInteger, JSONSchemaNumber, JSONSchemaString, JSONSchemaArrayOf, JSONValidator } from '../validation';
import { LocalDatabase, IDB_BROKEN_ERROR, LocalStorageDatabase, IndexedDBDatabase, MemoryDatabase } from '../databases';
import { LS_PREFIX } from '../tokens';
import * as i0 from "@angular/core";
import * as i1 from "../databases/local-database";
import * as i2 from "../validation/json-validator";
import * as i3 from "../tokens";
let StorageMap = class StorageMap {
    /**
     * Constructor params are provided by Angular (but can also be passed manually in tests)
     * @param database Storage to use
     * @param jsonValidator Validator service
     * @param LSPrefix Prefix for `localStorage` keys to avoid collision for multiple apps on the same subdomain or for interoperability
     */
    constructor(database, jsonValidator = new JSONValidator(), LSPrefix = '') {
        this.database = database;
        this.jsonValidator = jsonValidator;
        this.LSPrefix = LSPrefix;
        this.notifiers = new Map();
    }
    /**
     * **Number of items** in storage, wrapped in an `Observable`.
     *
     * @example
     * this.storageMap.size.subscribe((size) => {
     *   console.log(size);
     * });
     */
    get size() {
        return this.database.size
            /* Catch if `indexedDb` is broken */
            .pipe(this.catchIDBBroken(() => this.database.size));
    }
    /**
     * Tells you which storage engine is used. *Only useful for interoperability.*
     * Note that due to some browsers issues in some special contexts
     * (Firefox private mode and Safari cross-origin iframes),
     * **this information may be wrong at initialization,**
     * as the storage could fallback from `indexedDB` to `localStorage`
     * only after a first read or write operation.
     * @returns Storage engine used
     *
     * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/INTEROPERABILITY.md}
     *
     * @example
     * if (this.storageMap.backingEngine === 'indexedDB') {}
     */
    get backingEngine() {
        if (this.database instanceof IndexedDBDatabase) {
            return 'indexedDB';
        }
        else if (this.database instanceof LocalStorageDatabase) {
            return 'localStorage';
        }
        else if (this.database instanceof MemoryDatabase) {
            return 'memory';
        }
        else {
            return 'unknown';
        }
    }
    /**
     * Info about `indexedDB` database. *Only useful for interoperability.*
     * @returns `indexedDB` database name, store name and database version.
     * **Values will be empty if the storage is not `indexedDB`,**
     * **so it should be used after an engine check**.
     *
     * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/INTEROPERABILITY.md}
     *
     * @example
     * if (this.storageMap.backingEngine === 'indexedDB') {
     *   const { database, store, version } = this.storageMap.backingStore;
     * }
     */
    get backingStore() {
        return (this.database instanceof IndexedDBDatabase) ?
            this.database.backingStore :
            { database: '', store: '', version: 0 };
    }
    /**
     * Info about `localStorage` fallback storage. *Only useful for interoperability.*
     * @returns `localStorage` prefix.
     * **Values will be empty if the storage is not `localStorage`,**
     * **so it should be used after an engine check**.
     *
     * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/master/docs/INTEROPERABILITY.md}
     *
     * @example
     * if (this.storageMap.backingEngine === 'localStorage') {
     *   const { prefix } = this.storageMap.fallbackBackingStore;
     * }
     */
    get fallbackBackingStore() {
        return (this.database instanceof LocalStorageDatabase) ?
            { prefix: this.database.prefix } :
            { prefix: '' };
    }
    get(key, schema) {
        /* Get the data in storage */
        return this.database.get(key).pipe(
        /* Check if `indexedDb` is broken */
        this.catchIDBBroken(() => this.database.get(key)), mergeMap((data) => {
            /* No need to validate if the data is empty */
            if ((data === undefined) || (data === null)) {
                return of(undefined);
            }
            else if (schema) {
                /* Validate data against a JSON schema if provided */
                if (!this.jsonValidator.validate(data, schema)) {
                    return throwError(new ValidationError());
                }
                /* Data have been checked, so it's OK to cast */
                return of(data);
            }
            /* Cast to unknown as the data wasn't checked */
            return of(data);
        }));
    }
    /**
     * Set an item in storage.
     * Note that setting `null` or `undefined` will remove the item to avoid some browsers issues.
     * @param key The item's key
     * @param data The item's value
     * @param schema Optional JSON schema to validate the data
     * @returns A RxJS `Observable` to wait the end of the operation
     *
     * @example
     * this.storageMap.set('key', 'value').subscribe(() => {});
     */
    set(key, data, schema) {
        /* Storing `undefined` or `null` is useless and can cause issues in `indexedDb` in some browsers,
         * so removing item instead for all storages to have a consistent API */
        if ((data === undefined) || (data === null)) {
            return this.delete(key);
        }
        /* Validate data against a JSON schema if provided */
        if (schema && !this.jsonValidator.validate(data, schema)) {
            return throwError(new ValidationError());
        }
        return this.database.set(key, data).pipe(
        /* Catch if `indexedDb` is broken */
        this.catchIDBBroken(() => this.database.set(key, data)), 
        /* Notify watchers (must be last because it should only happen if the operation succeeds) */
        tap(() => { this.notify(key, data); }));
    }
    /**
     * Delete an item in storage
     * @param key The item's key
     * @returns A RxJS `Observable` to wait the end of the operation
     *
     * @example
     * this.storageMap.delete('key').subscribe(() => {});
     */
    delete(key) {
        return this.database.delete(key).pipe(
        /* Catch if `indexedDb` is broken */
        this.catchIDBBroken(() => this.database.delete(key)), 
        /* Notify watchers (must be last because it should only happen if the operation succeeds) */
        tap(() => { this.notify(key, undefined); }));
    }
    /**
     * Delete all items in storage
     * @returns A RxJS `Observable` to wait the end of the operation
     *
     * @example
     * this.storageMap.clear().subscribe(() => {});
     */
    clear() {
        return this.database.clear().pipe(
        /* Catch if `indexedDb` is broken */
        this.catchIDBBroken(() => this.database.clear()), 
        /* Notify watchers (must be last because it should only happen if the operation succeeds) */
        tap(() => {
            for (const key of this.notifiers.keys()) {
                this.notify(key, undefined);
            }
        }));
    }
    /**
     * Get all keys stored in storage. Note **this is an *iterating* `Observable`**:
     * * if there is no key, the `next` callback will not be invoked,
     * * if you need to wait the whole operation to end, be sure to act in the `complete` callback,
     * as this `Observable` can emit several values and so will invoke the `next` callback several times.
     * @returns A list of the keys wrapped in a RxJS `Observable`
     *
     * @example
     * this.storageMap.keys().subscribe({
     *   next: (key) => { console.log(key); },
     *   complete: () => { console.log('Done'); },
     * });
     */
    keys() {
        return this.database.keys()
            /* Catch if `indexedDb` is broken */
            .pipe(this.catchIDBBroken(() => this.database.keys()));
    }
    /**
     * Tells if a key exists in storage
     * @returns A RxJS `Observable` telling if the key exists
     *
     * @example
     * this.storageMap.has('key').subscribe((hasKey) => {
     *   if (hasKey) {}
     * });
     */
    has(key) {
        return this.database.has(key)
            /* Catch if `indexedDb` is broken */
            .pipe(this.catchIDBBroken(() => this.database.has(key)));
    }
    watch(key, schema) {
        /* Check if there is already a notifier and cast according to schema */
        let notifier = this.notifiers.get(key);
        if (!notifier) {
            /* Create a notifier and cast according to schema */
            notifier = new ReplaySubject(1);
            /* Memorize the notifier */
            this.notifiers.set(key, notifier);
            /* Get the current item value */
            this.get(key, schema).subscribe({
                next: (result) => notifier.next(result),
                error: (error) => notifier.error(error),
            });
        }
        /* Only the public API of the `Observable` should be returned */
        return notifier.asObservable();
    }
    /**
     * Notify when a value changes
     * @param key The item's key
     * @param data The new value
     */
    notify(key, value) {
        const notifier = this.notifiers.get(key);
        if (notifier) {
            notifier.next(value);
        }
    }
    /**
     * RxJS operator to catch if `indexedDB` is broken
     * @param operationCallback Callback with the operation to redo
     */
    catchIDBBroken(operationCallback) {
        return catchError((error) => {
            /* Check if `indexedDB` is broken based on error message (the specific error class seems to be lost in the process) */
            if ((error !== undefined) && (error !== null) && (error.message === IDB_BROKEN_ERROR)) {
                /* When storage is fully disabled in browser (via the "Block all cookies" option),
                 * just trying to check `localStorage` variable causes a security exception.
                 * Prevents https://github.com/cyrilletuzi/angular-async-local-storage/issues/118
                 */
                try {
                    if ('getItem' in localStorage) {
                        /* Fallback to `localStorage` if available */
                        this.database = new LocalStorageDatabase(this.LSPrefix);
                    }
                    else {
                        /* Fallback to memory storage otherwise */
                        this.database = new MemoryDatabase();
                    }
                }
                catch (_a) {
                    /* Fallback to memory storage otherwise */
                    this.database = new MemoryDatabase();
                }
                /* Redo the operation */
                return operationCallback();
            }
            else {
                /* Otherwise, rethrow the error */
                return throwError(error);
            }
        });
    }
};
StorageMap.ctorParameters = () => [
    { type: LocalDatabase },
    { type: JSONValidator },
    { type: undefined, decorators: [{ type: Inject, args: [LS_PREFIX,] }] }
];
StorageMap.ɵprov = i0.ɵɵdefineInjectable({ factory: function StorageMap_Factory() { return new StorageMap(i0.ɵɵinject(i1.LocalDatabase), i0.ɵɵinject(i2.JSONValidator), i0.ɵɵinject(i3.LS_PREFIX)); }, token: StorageMap, providedIn: "root" });
StorageMap = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(2, Inject(LS_PREFIX))
], StorageMap);
export { StorageMap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1tYXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtcHdhL2xvY2FsLXN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc3RvcmFnZXMvc3RvcmFnZS1tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxFQUFFLEVBQW9CLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFDTCxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQ2hELGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFDckUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFLdEMsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQUlyQjs7Ozs7T0FLRztJQUNILFlBQ1ksUUFBdUIsRUFDdkIsZ0JBQStCLElBQUksYUFBYSxFQUFFLEVBQy9CLFdBQVcsRUFBRTtRQUZoQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBWGxDLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztJQVk3RCxDQUFDO0lBRUo7Ozs7Ozs7T0FPRztJQUNILElBQUksSUFBSTtRQUVOLE9BQU8s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O2lCQUV0QztnQkFFRCx3QkFBd0I7Z0JBQ3hCLE9BQU8saUJBQWlCLEVBQUUsQ0FBQzthQUU1QjtpQkFBTTtnQkFFTCxrQ0FBa0M7Z0JBQ2xDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRTFCO1FBRUgsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0NBRUYsQ0FBQTs7WUF6WXVCLGFBQWE7WUFDUixhQUFhOzRDQUNyQyxNQUFNLFNBQUMsU0FBUzs7O0FBYlIsVUFBVTtJQUh0QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBY0csV0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7R0FiVCxVQUFVLENBb1p0QjtTQXBaWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yLCBvZiwgT3BlcmF0b3JGdW5jdGlvbiwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi9leGNlcHRpb25zJztcbmltcG9ydCB7XG4gIEpTT05TY2hlbWEsIEpTT05TY2hlbWFCb29sZWFuLCBKU09OU2NoZW1hSW50ZWdlcixcbiAgSlNPTlNjaGVtYU51bWJlciwgSlNPTlNjaGVtYVN0cmluZywgSlNPTlNjaGVtYUFycmF5T2YsIEpTT05WYWxpZGF0b3Jcbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBMb2NhbERhdGFiYXNlLCBJREJfQlJPS0VOX0VSUk9SLCBMb2NhbFN0b3JhZ2VEYXRhYmFzZSwgSW5kZXhlZERCRGF0YWJhc2UsIE1lbW9yeURhdGFiYXNlIH0gZnJvbSAnLi4vZGF0YWJhc2VzJztcbmltcG9ydCB7IExTX1BSRUZJWCB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VNYXAge1xuXG4gIHByb3RlY3RlZCBub3RpZmllcnMgPSBuZXcgTWFwPHN0cmluZywgUmVwbGF5U3ViamVjdDx1bmtub3duPj4oKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgcGFyYW1zIGFyZSBwcm92aWRlZCBieSBBbmd1bGFyIChidXQgY2FuIGFsc28gYmUgcGFzc2VkIG1hbnVhbGx5IGluIHRlc3RzKVxuICAgKiBAcGFyYW0gZGF0YWJhc2UgU3RvcmFnZSB0byB1c2VcbiAgICogQHBhcmFtIGpzb25WYWxpZGF0b3IgVmFsaWRhdG9yIHNlcnZpY2VcbiAgICogQHBhcmFtIExTUHJlZml4IFByZWZpeCBmb3IgYGxvY2FsU3RvcmFnZWAga2V5cyB0byBhdm9pZCBjb2xsaXNpb24gZm9yIG11bHRpcGxlIGFwcHMgb24gdGhlIHNhbWUgc3ViZG9tYWluIG9yIGZvciBpbnRlcm9wZXJhYmlsaXR5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZGF0YWJhc2U6IExvY2FsRGF0YWJhc2UsXG4gICAgcHJvdGVjdGVkIGpzb25WYWxpZGF0b3I6IEpTT05WYWxpZGF0b3IgPSBuZXcgSlNPTlZhbGlkYXRvcigpLFxuICAgIEBJbmplY3QoTFNfUFJFRklYKSBwcm90ZWN0ZWQgTFNQcmVmaXggPSAnJyxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiAqKk51bWJlciBvZiBpdGVtcyoqIGluIHN0b3JhZ2UsIHdyYXBwZWQgaW4gYW4gYE9ic2VydmFibGVgLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLnN0b3JhZ2VNYXAuc2l6ZS5zdWJzY3JpYmUoKHNpemUpID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhzaXplKTtcbiAgICogfSk7XG4gICAqL1xuICBnZXQgc2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2Uuc2l6ZVxuICAgICAgLyogQ2F0Y2ggaWYgYGluZGV4ZWREYmAgaXMgYnJva2VuICovXG4gICAgICAucGlwZSh0aGlzLmNhdGNoSURCQnJva2VuKCgpID0+IHRoaXMuZGF0YWJhc2Uuc2l6ZSkpO1xuXG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgeW91IHdoaWNoIHN0b3JhZ2UgZW5naW5lIGlzIHVzZWQuICpPbmx5IHVzZWZ1bCBmb3IgaW50ZXJvcGVyYWJpbGl0eS4qXG4gICAqIE5vdGUgdGhhdCBkdWUgdG8gc29tZSBicm93c2VycyBpc3N1ZXMgaW4gc29tZSBzcGVjaWFsIGNvbnRleHRzXG4gICAqIChGaXJlZm94IHByaXZhdGUgbW9kZSBhbmQgU2FmYXJpIGNyb3NzLW9yaWdpbiBpZnJhbWVzKSxcbiAgICogKip0aGlzIGluZm9ybWF0aW9uIG1heSBiZSB3cm9uZyBhdCBpbml0aWFsaXphdGlvbiwqKlxuICAgKiBhcyB0aGUgc3RvcmFnZSBjb3VsZCBmYWxsYmFjayBmcm9tIGBpbmRleGVkREJgIHRvIGBsb2NhbFN0b3JhZ2VgXG4gICAqIG9ubHkgYWZ0ZXIgYSBmaXJzdCByZWFkIG9yIHdyaXRlIG9wZXJhdGlvbi5cbiAgICogQHJldHVybnMgU3RvcmFnZSBlbmdpbmUgdXNlZFxuICAgKlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vY3lyaWxsZXR1emkvYW5ndWxhci1hc3luYy1sb2NhbC1zdG9yYWdlL2Jsb2IvbWFzdGVyL2RvY3MvSU5URVJPUEVSQUJJTElUWS5tZH1cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogaWYgKHRoaXMuc3RvcmFnZU1hcC5iYWNraW5nRW5naW5lID09PSAnaW5kZXhlZERCJykge31cbiAgICovXG4gIGdldCBiYWNraW5nRW5naW5lKCk6ICdpbmRleGVkREInIHwgJ2xvY2FsU3RvcmFnZScgfMKgJ21lbW9yeScgfCAndW5rbm93bicge1xuXG4gICAgaWYgKHRoaXMuZGF0YWJhc2UgaW5zdGFuY2VvZiBJbmRleGVkREJEYXRhYmFzZSkge1xuXG4gICAgICByZXR1cm4gJ2luZGV4ZWREQic7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YWJhc2UgaW5zdGFuY2VvZiBMb2NhbFN0b3JhZ2VEYXRhYmFzZSkge1xuXG4gICAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZSc7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YWJhc2UgaW5zdGFuY2VvZiBNZW1vcnlEYXRhYmFzZSkge1xuXG4gICAgICByZXR1cm4gJ21lbW9yeSc7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICByZXR1cm4gJ3Vua25vd24nO1xuXG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogSW5mbyBhYm91dCBgaW5kZXhlZERCYCBkYXRhYmFzZS4gKk9ubHkgdXNlZnVsIGZvciBpbnRlcm9wZXJhYmlsaXR5LipcbiAgICogQHJldHVybnMgYGluZGV4ZWREQmAgZGF0YWJhc2UgbmFtZSwgc3RvcmUgbmFtZSBhbmQgZGF0YWJhc2UgdmVyc2lvbi5cbiAgICogKipWYWx1ZXMgd2lsbCBiZSBlbXB0eSBpZiB0aGUgc3RvcmFnZSBpcyBub3QgYGluZGV4ZWREQmAsKipcbiAgICogKipzbyBpdCBzaG91bGQgYmUgdXNlZCBhZnRlciBhbiBlbmdpbmUgY2hlY2sqKi5cbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2N5cmlsbGV0dXppL2FuZ3VsYXItYXN5bmMtbG9jYWwtc3RvcmFnZS9ibG9iL21hc3Rlci9kb2NzL0lOVEVST1BFUkFCSUxJVFkubWR9XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGlmICh0aGlzLnN0b3JhZ2VNYXAuYmFja2luZ0VuZ2luZSA9PT0gJ2luZGV4ZWREQicpIHtcbiAgICogICBjb25zdCB7IGRhdGFiYXNlLCBzdG9yZSwgdmVyc2lvbiB9ID0gdGhpcy5zdG9yYWdlTWFwLmJhY2tpbmdTdG9yZTtcbiAgICogfVxuICAgKi9cbiAgZ2V0IGJhY2tpbmdTdG9yZSgpOiB7IGRhdGFiYXNlOiBzdHJpbmcsIHN0b3JlOiBzdHJpbmcsIHZlcnNpb246IG51bWJlciB9IHtcblxuICAgIHJldHVybiAodGhpcy5kYXRhYmFzZSBpbnN0YW5jZW9mIEluZGV4ZWREQkRhdGFiYXNlKSA/XG4gICAgICB0aGlzLmRhdGFiYXNlLmJhY2tpbmdTdG9yZSA6XG4gICAgICB7IGRhdGFiYXNlOiAnJywgc3RvcmU6ICcnLCB2ZXJzaW9uOiAwIH07XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmZvIGFib3V0IGBsb2NhbFN0b3JhZ2VgIGZhbGxiYWNrIHN0b3JhZ2UuICpPbmx5IHVzZWZ1bCBmb3IgaW50ZXJvcGVyYWJpbGl0eS4qXG4gICAqIEByZXR1cm5zIGBsb2NhbFN0b3JhZ2VgIHByZWZpeC5cbiAgICogKipWYWx1ZXMgd2lsbCBiZSBlbXB0eSBpZiB0aGUgc3RvcmFnZSBpcyBub3QgYGxvY2FsU3RvcmFnZWAsKipcbiAgICogKipzbyBpdCBzaG91bGQgYmUgdXNlZCBhZnRlciBhbiBlbmdpbmUgY2hlY2sqKi5cbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2N5cmlsbGV0dXppL2FuZ3VsYXItYXN5bmMtbG9jYWwtc3RvcmFnZS9ibG9iL21hc3Rlci9kb2NzL0lOVEVST1BFUkFCSUxJVFkubWR9XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGlmICh0aGlzLnN0b3JhZ2VNYXAuYmFja2luZ0VuZ2luZSA9PT0gJ2xvY2FsU3RvcmFnZScpIHtcbiAgICogICBjb25zdCB7IHByZWZpeCB9ID0gdGhpcy5zdG9yYWdlTWFwLmZhbGxiYWNrQmFja2luZ1N0b3JlO1xuICAgKiB9XG4gICAqL1xuICBnZXQgZmFsbGJhY2tCYWNraW5nU3RvcmUoKTogeyBwcmVmaXg6IHN0cmluZyB9IHtcblxuICAgIHJldHVybiAodGhpcy5kYXRhYmFzZSBpbnN0YW5jZW9mIExvY2FsU3RvcmFnZURhdGFiYXNlKSA/XG4gICAgICB7IHByZWZpeDogdGhpcy5kYXRhYmFzZS5wcmVmaXggfSA6XG4gICAgICB7IHByZWZpeDogJycgfTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpdGVtIHZhbHVlIGluIHN0b3JhZ2UuXG4gICAqIFRoZSBzaWduYXR1cmUgaGFzIG1hbnkgb3ZlcmxvYWRzIGR1ZSB0byB2YWxpZGF0aW9uLCAqKnBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbi4qKlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vY3lyaWxsZXR1emkvYW5ndWxhci1hc3luYy1sb2NhbC1zdG9yYWdlL2Jsb2IvbWFzdGVyL2RvY3MvVkFMSURBVElPTi5tZH1cbiAgICogQHBhcmFtIGtleSBUaGUgaXRlbSdzIGtleVxuICAgKiBAcGFyYW0gc2NoZW1hIE9wdGlvbmFsIEpTT04gc2NoZW1hIHRvIHZhbGlkYXRlIHRoZSBkYXRhXG4gICAqIEByZXR1cm5zIFRoZSBpdGVtJ3MgdmFsdWUgaWYgdGhlIGtleSBleGlzdHMsIGB1bmRlZmluZWRgIG90aGVyd2lzZSwgd3JhcHBlZCBpbiBhIFJ4SlMgYE9ic2VydmFibGVgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMuc3RvcmFnZU1hcC5nZXQoJ2tleScsIHsgdHlwZTogJ3N0cmluZycgfSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICogICByZXN1bHQ7IC8vIHN0cmluZyBvciB1bmRlZmluZWRcbiAgICogfSk7XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGludGVyZmFjZSBVc2VyIHtcbiAgICogICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICogICBsYXN0TmFtZT86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCBzY2hlbWEgPSB7XG4gICAqICAgdHlwZTogJ29iamVjdCcsXG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgZmlyc3ROYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAqICAgICBsYXN0TmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgKiAgIH0sXG4gICAqICAgcmVxdWlyZWQ6IFsnZmlyc3ROYW1lJ11cbiAgICogfTtcbiAgICpcbiAgICogdGhpcy5zdG9yYWdlTWFwLmdldDxVc2VyPigndXNlcicsIHNjaGVtYSkuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XG4gICAqICAgaWYgKHVzZXIpIHtcbiAgICogICAgIHVzZXIuZmlyc3ROYW1lO1xuICAgKiAgIH1cbiAgICogfSk7XG4gICAqL1xuICBnZXQ8VCA9IHN0cmluZz4oa2V5OiBzdHJpbmcsIHNjaGVtYTogSlNPTlNjaGVtYVN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPjtcbiAgZ2V0PFQgPSBudW1iZXI+KGtleTogc3RyaW5nLCBzY2hlbWE6IEpTT05TY2hlbWFJbnRlZ2VywqB8IEpTT05TY2hlbWFOdW1iZXIpOiBPYnNlcnZhYmxlPG51bWJlciB8IHVuZGVmaW5lZD47XG4gIGdldDxUID0gYm9vbGVhbj4oa2V5OiBzdHJpbmcsIHNjaGVtYTogSlNPTlNjaGVtYUJvb2xlYW4pOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuICBnZXQ8VCA9IHN0cmluZ1tdPihrZXk6IHN0cmluZywgc2NoZW1hOiBKU09OU2NoZW1hQXJyYXlPZjxKU09OU2NoZW1hU3RyaW5nPik6IE9ic2VydmFibGU8c3RyaW5nW10gfCB1bmRlZmluZWQ+O1xuICBnZXQ8VCA9IG51bWJlcltdPihrZXk6IHN0cmluZywgc2NoZW1hOiBKU09OU2NoZW1hQXJyYXlPZjxKU09OU2NoZW1hSW50ZWdlcsKgfCBKU09OU2NoZW1hTnVtYmVyPik6IE9ic2VydmFibGU8bnVtYmVyW10gfCB1bmRlZmluZWQ+O1xuICBnZXQ8VCA9IGJvb2xlYW5bXT4oa2V5OiBzdHJpbmcsIHNjaGVtYTogSlNPTlNjaGVtYUFycmF5T2Y8SlNPTlNjaGVtYUJvb2xlYW4+KTogT2JzZXJ2YWJsZTxib29sZWFuW10gfCB1bmRlZmluZWQ+O1xuICBnZXQ8VCA9IHVua25vd24+KGtleTogc3RyaW5nLCBzY2hlbWE6IEpTT05TY2hlbWEpOiBPYnNlcnZhYmxlPFQgfCB1bmRlZmluZWQ+O1xuICBnZXQ8VCA9IHVua25vd24+KGtleTogc3RyaW5nLCBzY2hlbWE/OiBKU09OU2NoZW1hKTogT2JzZXJ2YWJsZTx1bmtub3duPjtcbiAgZ2V0PFQgPSB1bmtub3duPihrZXk6IHN0cmluZywgc2NoZW1hPzogSlNPTlNjaGVtYSk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuXG4gICAgLyogR2V0IHRoZSBkYXRhIGluIHN0b3JhZ2UgKi9cbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS5nZXQ8VD4oa2V5KS5waXBlKFxuICAgICAgLyogQ2hlY2sgaWYgYGluZGV4ZWREYmAgaXMgYnJva2VuICovXG4gICAgICB0aGlzLmNhdGNoSURCQnJva2VuKCgpID0+IHRoaXMuZGF0YWJhc2UuZ2V0PFQ+KGtleSkpLFxuICAgICAgbWVyZ2VNYXAoKGRhdGEpID0+IHtcblxuICAgICAgICAvKiBObyBuZWVkIHRvIHZhbGlkYXRlIGlmIHRoZSBkYXRhIGlzIGVtcHR5ICovXG4gICAgICAgIGlmICgoZGF0YSA9PT0gdW5kZWZpbmVkKSB8fCAoZGF0YSA9PT0gbnVsbCkpIHtcblxuICAgICAgICAgIHJldHVybiBvZih1bmRlZmluZWQpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoc2NoZW1hKSB7XG5cbiAgICAgICAgICAvKiBWYWxpZGF0ZSBkYXRhIGFnYWluc3QgYSBKU09OIHNjaGVtYSBpZiBwcm92aWRlZCAqL1xuICAgICAgICAgIGlmICghdGhpcy5qc29uVmFsaWRhdG9yLnZhbGlkYXRlKGRhdGEsIHNjaGVtYSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKG5ldyBWYWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogRGF0YSBoYXZlIGJlZW4gY2hlY2tlZCwgc28gaXQncyBPSyB0byBjYXN0ICovXG4gICAgICAgICAgcmV0dXJuIG9mKGRhdGEgYXMgVCB8IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENhc3QgdG8gdW5rbm93biBhcyB0aGUgZGF0YSB3YXNuJ3QgY2hlY2tlZCAqL1xuICAgICAgICByZXR1cm4gb2YoZGF0YSBhcyB1bmtub3duKTtcblxuICAgICAgfSksXG4gICAgKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbiBpdGVtIGluIHN0b3JhZ2UuXG4gICAqIE5vdGUgdGhhdCBzZXR0aW5nIGBudWxsYCBvciBgdW5kZWZpbmVkYCB3aWxsIHJlbW92ZSB0aGUgaXRlbSB0byBhdm9pZCBzb21lIGJyb3dzZXJzIGlzc3Vlcy5cbiAgICogQHBhcmFtIGtleSBUaGUgaXRlbSdzIGtleVxuICAgKiBAcGFyYW0gZGF0YSBUaGUgaXRlbSdzIHZhbHVlXG4gICAqIEBwYXJhbSBzY2hlbWEgT3B0aW9uYWwgSlNPTiBzY2hlbWEgdG8gdmFsaWRhdGUgdGhlIGRhdGFcbiAgICogQHJldHVybnMgQSBSeEpTIGBPYnNlcnZhYmxlYCB0byB3YWl0IHRoZSBlbmQgb2YgdGhlIG9wZXJhdGlvblxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLnN0b3JhZ2VNYXAuc2V0KCdrZXknLCAndmFsdWUnKS5zdWJzY3JpYmUoKCkgPT4ge30pO1xuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCBkYXRhOiB1bmtub3duLCBzY2hlbWE/OiBKU09OU2NoZW1hKTogT2JzZXJ2YWJsZTx1bmRlZmluZWQ+IHtcblxuICAgIC8qIFN0b3JpbmcgYHVuZGVmaW5lZGAgb3IgYG51bGxgIGlzIHVzZWxlc3MgYW5kIGNhbiBjYXVzZSBpc3N1ZXMgaW4gYGluZGV4ZWREYmAgaW4gc29tZSBicm93c2VycyxcbiAgICAgKiBzbyByZW1vdmluZyBpdGVtIGluc3RlYWQgZm9yIGFsbCBzdG9yYWdlcyB0byBoYXZlIGEgY29uc2lzdGVudCBBUEkgKi9cbiAgICBpZiAoKGRhdGEgPT09IHVuZGVmaW5lZCkgfHwgKGRhdGEgPT09IG51bGwpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICAvKiBWYWxpZGF0ZSBkYXRhIGFnYWluc3QgYSBKU09OIHNjaGVtYSBpZiBwcm92aWRlZCAqL1xuICAgIGlmIChzY2hlbWEgJiYgIXRoaXMuanNvblZhbGlkYXRvci52YWxpZGF0ZShkYXRhLCBzY2hlbWEpKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgVmFsaWRhdGlvbkVycm9yKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLnNldChrZXksIGRhdGEpLnBpcGUoXG4gICAgICAvKiBDYXRjaCBpZiBgaW5kZXhlZERiYCBpcyBicm9rZW4gKi9cbiAgICAgIHRoaXMuY2F0Y2hJREJCcm9rZW4oKCkgPT4gdGhpcy5kYXRhYmFzZS5zZXQoa2V5LCBkYXRhKSksXG4gICAgICAvKiBOb3RpZnkgd2F0Y2hlcnMgKG11c3QgYmUgbGFzdCBiZWNhdXNlIGl0IHNob3VsZCBvbmx5IGhhcHBlbiBpZiB0aGUgb3BlcmF0aW9uIHN1Y2NlZWRzKSAqL1xuICAgICAgdGFwKCgpID0+IHsgdGhpcy5ub3RpZnkoa2V5LCBkYXRhKTsgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gaXRlbSBpbiBzdG9yYWdlXG4gICAqIEBwYXJhbSBrZXkgVGhlIGl0ZW0ncyBrZXlcbiAgICogQHJldHVybnMgQSBSeEpTIGBPYnNlcnZhYmxlYCB0byB3YWl0IHRoZSBlbmQgb2YgdGhlIG9wZXJhdGlvblxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLnN0b3JhZ2VNYXAuZGVsZXRlKCdrZXknKS5zdWJzY3JpYmUoKCkgPT4ge30pO1xuICAgKi9cbiAgZGVsZXRlKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTx1bmRlZmluZWQ+IHtcblxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmRlbGV0ZShrZXkpLnBpcGUoXG4gICAgICAvKiBDYXRjaCBpZiBgaW5kZXhlZERiYCBpcyBicm9rZW4gKi9cbiAgICAgIHRoaXMuY2F0Y2hJREJCcm9rZW4oKCkgPT4gdGhpcy5kYXRhYmFzZS5kZWxldGUoa2V5KSksXG4gICAgICAvKiBOb3RpZnkgd2F0Y2hlcnMgKG11c3QgYmUgbGFzdCBiZWNhdXNlIGl0IHNob3VsZCBvbmx5IGhhcHBlbiBpZiB0aGUgb3BlcmF0aW9uIHN1Y2NlZWRzKSAqL1xuICAgICAgdGFwKCgpID0+IHsgdGhpcy5ub3RpZnkoa2V5LCB1bmRlZmluZWQpOyB9KSxcbiAgICApO1xuXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBpdGVtcyBpbiBzdG9yYWdlXG4gICAqIEByZXR1cm5zIEEgUnhKUyBgT2JzZXJ2YWJsZWAgdG8gd2FpdCB0aGUgZW5kIG9mIHRoZSBvcGVyYXRpb25cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5zdG9yYWdlTWFwLmNsZWFyKCkuc3Vic2NyaWJlKCgpID0+IHt9KTtcbiAgICovXG4gIGNsZWFyKCk6IE9ic2VydmFibGU8dW5kZWZpbmVkPiB7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS5jbGVhcigpLnBpcGUoXG4gICAgICAvKiBDYXRjaCBpZiBgaW5kZXhlZERiYCBpcyBicm9rZW4gKi9cbiAgICAgIHRoaXMuY2F0Y2hJREJCcm9rZW4oKCkgPT4gdGhpcy5kYXRhYmFzZS5jbGVhcigpKSxcbiAgICAgIC8qIE5vdGlmeSB3YXRjaGVycyAobXVzdCBiZSBsYXN0IGJlY2F1c2UgaXQgc2hvdWxkIG9ubHkgaGFwcGVuIGlmIHRoZSBvcGVyYXRpb24gc3VjY2VlZHMpICovXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLm5vdGlmaWVycy5rZXlzKCkpIHtcbiAgICAgICAgICB0aGlzLm5vdGlmeShrZXksIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGtleXMgc3RvcmVkIGluIHN0b3JhZ2UuIE5vdGUgKip0aGlzIGlzIGFuICppdGVyYXRpbmcqIGBPYnNlcnZhYmxlYCoqOlxuICAgKiAqIGlmIHRoZXJlIGlzIG5vIGtleSwgdGhlIGBuZXh0YCBjYWxsYmFjayB3aWxsIG5vdCBiZSBpbnZva2VkLFxuICAgKiAqIGlmIHlvdSBuZWVkIHRvIHdhaXQgdGhlIHdob2xlIG9wZXJhdGlvbiB0byBlbmQsIGJlIHN1cmUgdG8gYWN0IGluIHRoZSBgY29tcGxldGVgIGNhbGxiYWNrLFxuICAgKiBhcyB0aGlzIGBPYnNlcnZhYmxlYCBjYW4gZW1pdCBzZXZlcmFsIHZhbHVlcyBhbmQgc28gd2lsbCBpbnZva2UgdGhlIGBuZXh0YCBjYWxsYmFjayBzZXZlcmFsIHRpbWVzLlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgdGhlIGtleXMgd3JhcHBlZCBpbiBhIFJ4SlMgYE9ic2VydmFibGVgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMuc3RvcmFnZU1hcC5rZXlzKCkuc3Vic2NyaWJlKHtcbiAgICogICBuZXh0OiAoa2V5KSA9PiB7IGNvbnNvbGUubG9nKGtleSk7IH0sXG4gICAqICAgY29tcGxldGU6ICgpID0+IHsgY29uc29sZS5sb2coJ0RvbmUnKTsgfSxcbiAgICogfSk7XG4gICAqL1xuICBrZXlzKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS5rZXlzKClcbiAgICAgIC8qIENhdGNoIGlmIGBpbmRleGVkRGJgIGlzIGJyb2tlbiAqL1xuICAgICAgLnBpcGUodGhpcy5jYXRjaElEQkJyb2tlbigoKSA9PiB0aGlzLmRhdGFiYXNlLmtleXMoKSkpO1xuXG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgaWYgYSBrZXkgZXhpc3RzIGluIHN0b3JhZ2VcbiAgICogQHJldHVybnMgQSBSeEpTIGBPYnNlcnZhYmxlYCB0ZWxsaW5nIGlmIHRoZSBrZXkgZXhpc3RzXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMuc3RvcmFnZU1hcC5oYXMoJ2tleScpLnN1YnNjcmliZSgoaGFzS2V5KSA9PiB7XG4gICAqICAgaWYgKGhhc0tleSkge31cbiAgICogfSk7XG4gICAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmhhcyhrZXkpXG4gICAgICAvKiBDYXRjaCBpZiBgaW5kZXhlZERiYCBpcyBicm9rZW4gKi9cbiAgICAgIC5waXBlKHRoaXMuY2F0Y2hJREJCcm9rZW4oKCkgPT4gdGhpcy5kYXRhYmFzZS5oYXMoa2V5KSkpO1xuXG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggYW4gaXRlbSB2YWx1ZSBpbiBzdG9yYWdlLlxuICAgKiAqKk5vdGUgb25seSBjaGFuZ2VzIGRvbmUgdmlhIHRoaXMgbGliIHdpbGwgYmUgd2F0Y2hlZCoqLCBleHRlcm5hbCBjaGFuZ2VzIGluIHN0b3JhZ2UgY2FuJ3QgYmUgZGV0ZWN0ZWQuXG4gICAqIFRoZSBzaWduYXR1cmUgaGFzIG1hbnkgb3ZlcmxvYWRzIGR1ZSB0byB2YWxpZGF0aW9uLCAqKnBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbi4qKlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jeXJpbGxldHV6aS9hbmd1bGFyLWFzeW5jLWxvY2FsLXN0b3JhZ2UvYmxvYi9tYXN0ZXIvZG9jcy9WQUxJREFUSU9OLm1kXG4gICAqIEBwYXJhbSBrZXkgVGhlIGl0ZW0ncyBrZXkgdG8gd2F0Y2hcbiAgICogQHBhcmFtIHNjaGVtYSBPcHRpb25hbCBKU09OIHNjaGVtYSB0byB2YWxpZGF0ZSB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgKiBAcmV0dXJucyBBbiBpbmZpbml0ZSBgT2JzZXJ2YWJsZWAgZ2l2aW5nIHRoZSBjdXJyZW50IHZhbHVlXG4gICAqL1xuICB3YXRjaDxUID0gc3RyaW5nPihrZXk6IHN0cmluZywgc2NoZW1hOiBKU09OU2NoZW1hU3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmcgfCB1bmRlZmluZWQ+O1xuICB3YXRjaDxUID0gbnVtYmVyPihrZXk6IHN0cmluZywgc2NoZW1hOiBKU09OU2NoZW1hSW50ZWdlciB8IEpTT05TY2hlbWFOdW1iZXIpOiBPYnNlcnZhYmxlPG51bWJlciB8IHVuZGVmaW5lZD47XG4gIHdhdGNoPFQgPSBib29sZWFuPihrZXk6IHN0cmluZywgc2NoZW1hOiBKU09OU2NoZW1hQm9vbGVhbik6IE9ic2VydmFibGU8Ym9vbGVhbiB8IHVuZGVmaW5lZD47XG4gIHdhdGNoPFQgPSBzdHJpbmdbXT4oa2V5OiBzdHJpbmcsIHNjaGVtYTogSlNPTlNjaGVtYUFycmF5T2Y8SlNPTlNjaGVtYVN0cmluZz4pOiBPYnNlcnZhYmxlPHN0cmluZ1tdIHwgdW5kZWZpbmVkPjtcbiAgd2F0Y2g8VCA9IG51bWJlcltdPihrZXk6IHN0cmluZywgc2NoZW1hOiBKU09OU2NoZW1hQXJyYXlPZjxKU09OU2NoZW1hSW50ZWdlciB8IEpTT05TY2hlbWFOdW1iZXI+KTogT2JzZXJ2YWJsZTxudW1iZXJbXSB8IHVuZGVmaW5lZD47XG4gIHdhdGNoPFQgPSBib29sZWFuW10+KGtleTogc3RyaW5nLCBzY2hlbWE6IEpTT05TY2hlbWFBcnJheU9mPEpTT05TY2hlbWFCb29sZWFuPik6IE9ic2VydmFibGU8Ym9vbGVhbltdIHwgdW5kZWZpbmVkPjtcbiAgd2F0Y2g8VCA9IHVua25vd24+KGtleTogc3RyaW5nLCBzY2hlbWE6IEpTT05TY2hlbWEpOiBPYnNlcnZhYmxlPFQgfCB1bmRlZmluZWQ+O1xuICB3YXRjaDxUID0gdW5rbm93bj4oa2V5OiBzdHJpbmcsIHNjaGVtYT86IEpTT05TY2hlbWEpOiBPYnNlcnZhYmxlPHVua25vd24+O1xuICB3YXRjaDxUID0gdW5rbm93bj4oa2V5OiBzdHJpbmcsIHNjaGVtYT86IEpTT05TY2hlbWEpOiBPYnNlcnZhYmxlPHVua25vd24+IHtcblxuICAgIC8qIENoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBub3RpZmllciBhbmQgY2FzdCBhY2NvcmRpbmcgdG8gc2NoZW1hICovXG4gICAgbGV0IG5vdGlmaWVyID0gdGhpcy5ub3RpZmllcnMuZ2V0KGtleSkgYXMgUmVwbGF5U3ViamVjdDx0eXBlb2Ygc2NoZW1hIGV4dGVuZHMgSlNPTlNjaGVtYSA/IChUIHwgdW5kZWZpbmVkKSA6IHVua25vd24+O1xuXG4gICAgaWYgKCFub3RpZmllcikge1xuXG4gICAgICAvKiBDcmVhdGUgYSBub3RpZmllciBhbmQgY2FzdCBhY2NvcmRpbmcgdG8gc2NoZW1hICovXG4gICAgICBub3RpZmllciA9IG5ldyBSZXBsYXlTdWJqZWN0PHR5cGVvZiBzY2hlbWEgZXh0ZW5kcyBKU09OU2NoZW1hID8gKFQgfCB1bmRlZmluZWQpIDogdW5rbm93bj4oMSk7XG5cbiAgICAgIC8qIE1lbW9yaXplIHRoZSBub3RpZmllciAqL1xuICAgICAgdGhpcy5ub3RpZmllcnMuc2V0KGtleSwgbm90aWZpZXIpO1xuXG4gICAgICAvKiBHZXQgdGhlIGN1cnJlbnQgaXRlbSB2YWx1ZSAqL1xuICAgICAgdGhpcy5nZXQ8VD4oa2V5LCBzY2hlbWEpLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChyZXN1bHQpID0+IG5vdGlmaWVyLm5leHQocmVzdWx0KSxcbiAgICAgICAgZXJyb3I6IChlcnJvcikgPT4gbm90aWZpZXIuZXJyb3IoZXJyb3IpLFxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiBPbmx5IHRoZSBwdWJsaWMgQVBJIG9mIHRoZSBgT2JzZXJ2YWJsZWAgc2hvdWxkIGJlIHJldHVybmVkICovXG4gICAgcmV0dXJuIG5vdGlmaWVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogTm90aWZ5IHdoZW4gYSB2YWx1ZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSBrZXkgVGhlIGl0ZW0ncyBrZXlcbiAgICogQHBhcmFtIGRhdGEgVGhlIG5ldyB2YWx1ZVxuICAgKi9cbiAgcHJvdGVjdGVkIG5vdGlmeShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcblxuICAgIGNvbnN0IG5vdGlmaWVyID0gdGhpcy5ub3RpZmllcnMuZ2V0KGtleSk7XG5cbiAgICBpZiAobm90aWZpZXIpIHtcbiAgICAgIG5vdGlmaWVyLm5leHQodmFsdWUpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFJ4SlMgb3BlcmF0b3IgdG8gY2F0Y2ggaWYgYGluZGV4ZWREQmAgaXMgYnJva2VuXG4gICAqIEBwYXJhbSBvcGVyYXRpb25DYWxsYmFjayBDYWxsYmFjayB3aXRoIHRoZSBvcGVyYXRpb24gdG8gcmVkb1xuICAgKi9cbiAgcHJvdGVjdGVkIGNhdGNoSURCQnJva2VuPFQ+KG9wZXJhdGlvbkNhbGxiYWNrOiAoKSA9PiBPYnNlcnZhYmxlPFQ+KTogT3BlcmF0b3JGdW5jdGlvbjxULCBUPiB7XG5cbiAgICByZXR1cm4gY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcblxuICAgICAgLyogQ2hlY2sgaWYgYGluZGV4ZWREQmAgaXMgYnJva2VuIGJhc2VkIG9uIGVycm9yIG1lc3NhZ2UgKHRoZSBzcGVjaWZpYyBlcnJvciBjbGFzcyBzZWVtcyB0byBiZSBsb3N0IGluIHRoZSBwcm9jZXNzKSAqL1xuICAgICAgaWYgKChlcnJvciAhPT0gdW5kZWZpbmVkKSAmJiAoZXJyb3IgIT09IG51bGwpICYmIChlcnJvci5tZXNzYWdlID09PSBJREJfQlJPS0VOX0VSUk9SKSkge1xuXG4gICAgICAgIC8qIFdoZW4gc3RvcmFnZSBpcyBmdWxseSBkaXNhYmxlZCBpbiBicm93c2VyICh2aWEgdGhlIFwiQmxvY2sgYWxsIGNvb2tpZXNcIiBvcHRpb24pLFxuICAgICAgICAgKiBqdXN0IHRyeWluZyB0byBjaGVjayBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSBjYXVzZXMgYSBzZWN1cml0eSBleGNlcHRpb24uXG4gICAgICAgICAqIFByZXZlbnRzIGh0dHBzOi8vZ2l0aHViLmNvbS9jeXJpbGxldHV6aS9hbmd1bGFyLWFzeW5jLWxvY2FsLXN0b3JhZ2UvaXNzdWVzLzExOFxuICAgICAgICAgKi9cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgIGlmICgnZ2V0SXRlbScgaW4gbG9jYWxTdG9yYWdlKSB7XG5cbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIGBsb2NhbFN0b3JhZ2VgIGlmIGF2YWlsYWJsZSAqL1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBMb2NhbFN0b3JhZ2VEYXRhYmFzZSh0aGlzLkxTUHJlZml4KTtcblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIG1lbW9yeSBzdG9yYWdlIG90aGVyd2lzZSAqL1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBNZW1vcnlEYXRhYmFzZSgpO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2gge1xuXG4gICAgICAgICAgLyogRmFsbGJhY2sgdG8gbWVtb3J5IHN0b3JhZ2Ugb3RoZXJ3aXNlICovXG4gICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBNZW1vcnlEYXRhYmFzZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvKiBSZWRvIHRoZSBvcGVyYXRpb24gKi9cbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbkNhbGxiYWNrKCk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLyogT3RoZXJ3aXNlLCByZXRocm93IHRoZSBlcnJvciAqL1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH1cblxufVxuIl19
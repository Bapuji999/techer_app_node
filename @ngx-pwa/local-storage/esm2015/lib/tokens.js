import { InjectionToken } from '@angular/core';
/**
 * Token to provide a prefix to `localStorage` keys.
 */
export const LS_PREFIX = new InjectionToken('localStoragePrefix', {
    providedIn: 'root',
    factory: () => ''
});
/**
 * Default name used for `indexedDB` database.
 */
export const DEFAULT_IDB_DB_NAME = 'ngStorage';
/**
 * Token to provide `indexedDB` database name.
 */
export const IDB_DB_NAME = new InjectionToken('localStorageIDBDBName', {
    providedIn: 'root',
    factory: () => DEFAULT_IDB_DB_NAME
});
/**
 * Default version used for `indexedDB` database.
 */
export const DEFAULT_IDB_DB_VERSION = 1;
/**
 * Token to provide `indexedDB` database version.
 * Must be an unsigned **integer**.
 */
export const IDB_DB_VERSION = new InjectionToken('localStorageIDBDBVersion', {
    providedIn: 'root',
    factory: () => DEFAULT_IDB_DB_VERSION
});
/**
 * Default name used for `indexedDB` object store.
 */
export const DEFAULT_IDB_STORE_NAME = 'localStorage';
/**
 * Token to provide `indexedDB` store name.
 * For backward compatibility, the default can't be set now, `IndexedDBDatabase` will do it at runtime.
 */
export const IDB_STORE_NAME = new InjectionToken('localStorageIDBStoreName', {
    providedIn: 'root',
    factory: () => DEFAULT_IDB_STORE_NAME
});
/**
 * Default value for interoperability with native `indexedDB` and other storage libs,
 * by changing how values are stored in `indexedDB` database.
 */
export const DEFAULT_IDB_NO_WRAP = true;
/**
 * Token to allow interoperability with native `indexedDB` and other storage libs,
 * by changing how values are stored in `indexedDB` database.
 * Defaults to `true`. Change to `false` for backward compatiblity in existing applications.
 * **DO NOT CHANGE THIS BEHAVIOR ONCE IN PRODUCTION**, as it would break with existing data.
 */
export const IDB_NO_WRAP = new InjectionToken('localStorageIDBWrap', {
    providedIn: 'root',
    factory: () => DEFAULT_IDB_NO_WRAP
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1wd2EvbG9jYWwtc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi90b2tlbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGNBQWMsQ0FBUyxvQkFBb0IsRUFBRTtJQUN4RSxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtDQUNsQixDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztBQUUvQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBUyx1QkFBdUIsRUFBRTtJQUM3RSxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsbUJBQW1CO0NBQ25DLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0FBRXhDOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBUywwQkFBMEIsRUFBRTtJQUNuRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQXNCO0NBQ3RDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsY0FBYyxDQUFDO0FBRXJEOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBUywwQkFBMEIsRUFBRTtJQUNuRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQXNCO0NBQ3RDLENBQUMsQ0FBQztBQUVIOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQztBQUV4Qzs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBVSxxQkFBcUIsRUFBRTtJQUM1RSxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsbUJBQW1CO0NBQ25DLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVG9rZW4gdG8gcHJvdmlkZSBhIHByZWZpeCB0byBgbG9jYWxTdG9yYWdlYCBrZXlzLlxuICovXG5leHBvcnQgY29uc3QgTFNfUFJFRklYID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2xvY2FsU3RvcmFnZVByZWZpeCcsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiAoKSA9PiAnJ1xufSk7XG5cbi8qKlxuICogRGVmYXVsdCBuYW1lIHVzZWQgZm9yIGBpbmRleGVkREJgIGRhdGFiYXNlLlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9JREJfREJfTkFNRSA9ICduZ1N0b3JhZ2UnO1xuXG4vKipcbiAqIFRva2VuIHRvIHByb3ZpZGUgYGluZGV4ZWREQmAgZGF0YWJhc2UgbmFtZS5cbiAqL1xuZXhwb3J0IGNvbnN0IElEQl9EQl9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2xvY2FsU3RvcmFnZUlEQkRCTmFtZScsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiAoKSA9PiBERUZBVUxUX0lEQl9EQl9OQU1FXG59KTtcblxuLyoqXG4gKiBEZWZhdWx0IHZlcnNpb24gdXNlZCBmb3IgYGluZGV4ZWREQmAgZGF0YWJhc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lEQl9EQl9WRVJTSU9OID0gMTtcblxuLyoqXG4gKiBUb2tlbiB0byBwcm92aWRlIGBpbmRleGVkREJgIGRhdGFiYXNlIHZlcnNpb24uXG4gKiBNdXN0IGJlIGFuIHVuc2lnbmVkICoqaW50ZWdlcioqLlxuICovXG5leHBvcnQgY29uc3QgSURCX0RCX1ZFUlNJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPignbG9jYWxTdG9yYWdlSURCREJWZXJzaW9uJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6ICgpID0+IERFRkFVTFRfSURCX0RCX1ZFUlNJT05cbn0pO1xuXG4vKipcbiAqIERlZmF1bHQgbmFtZSB1c2VkIGZvciBgaW5kZXhlZERCYCBvYmplY3Qgc3RvcmUuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lEQl9TVE9SRV9OQU1FID0gJ2xvY2FsU3RvcmFnZSc7XG5cbi8qKlxuICogVG9rZW4gdG8gcHJvdmlkZSBgaW5kZXhlZERCYCBzdG9yZSBuYW1lLlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRoZSBkZWZhdWx0IGNhbid0IGJlIHNldCBub3csIGBJbmRleGVkREJEYXRhYmFzZWAgd2lsbCBkbyBpdCBhdCBydW50aW1lLlxuICovXG5leHBvcnQgY29uc3QgSURCX1NUT1JFX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbG9jYWxTdG9yYWdlSURCU3RvcmVOYW1lJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6ICgpID0+IERFRkFVTFRfSURCX1NUT1JFX05BTUVcbn0pO1xuXG4vKipcbiAqIERlZmF1bHQgdmFsdWUgZm9yIGludGVyb3BlcmFiaWxpdHkgd2l0aCBuYXRpdmUgYGluZGV4ZWREQmAgYW5kIG90aGVyIHN0b3JhZ2UgbGlicyxcbiAqIGJ5IGNoYW5naW5nIGhvdyB2YWx1ZXMgYXJlIHN0b3JlZCBpbiBgaW5kZXhlZERCYCBkYXRhYmFzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSURCX05PX1dSQVAgPSB0cnVlO1xuXG4vKipcbiAqIFRva2VuIHRvIGFsbG93IGludGVyb3BlcmFiaWxpdHkgd2l0aCBuYXRpdmUgYGluZGV4ZWREQmAgYW5kIG90aGVyIHN0b3JhZ2UgbGlicyxcbiAqIGJ5IGNoYW5naW5nIGhvdyB2YWx1ZXMgYXJlIHN0b3JlZCBpbiBgaW5kZXhlZERCYCBkYXRhYmFzZS5cbiAqIERlZmF1bHRzIHRvIGB0cnVlYC4gQ2hhbmdlIHRvIGBmYWxzZWAgZm9yIGJhY2t3YXJkIGNvbXBhdGlibGl0eSBpbiBleGlzdGluZyBhcHBsaWNhdGlvbnMuXG4gKiAqKkRPIE5PVCBDSEFOR0UgVEhJUyBCRUhBVklPUiBPTkNFIElOIFBST0RVQ1RJT04qKiwgYXMgaXQgd291bGQgYnJlYWsgd2l0aCBleGlzdGluZyBkYXRhLlxuICovXG5leHBvcnQgY29uc3QgSURCX05PX1dSQVAgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ2xvY2FsU3RvcmFnZUlEQldyYXAnLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogKCkgPT4gREVGQVVMVF9JREJfTk9fV1JBUFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZUNvbmZpZyB7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBhZGQgYSBwcmVmaXggYmVmb3JlIGBsb2NhbFN0b3JhZ2VgIGtleXMuXG4gICAqICpVc2Ugb25seSogZm9yIGludGVyb3BlcmFiaWxpdHkgd2l0aCBvdGhlciBBUElzIG9yIHRvIGF2b2lkIGNvbGxpc2lvbiBmb3IgbXVsdGlwbGUgYXBwcyBvbiB0aGUgc2FtZSBzdWJkb21haW4uXG4gICAqICoqV0FSTklORzogZG8gbm90IGNoYW5nZSB0aGlzIG9wdGlvbiBpbiBhbiBhcHAgYWxyZWFkeSBkZXBsb3llZCBpbiBwcm9kdWN0aW9uLCBhcyBwcmV2aW91c2x5IHN0b3JlZCBkYXRhIHdvdWxkIGJlIGxvc3QuKipcbiAgICovXG4gIExTUHJlZml4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gY2hhbmdlIHRoZSBuYW1lIHVzZWQgZm9yIGBpbmRleGVkREJgIGRhdGFiYXNlLlxuICAgKiAqVXNlIG9ubHkqIGZvciBpbnRlcm9wZXJhYmlsaXR5IHdpdGggb3RoZXIgQVBJcyBvciB0byBhdm9pZCBjb2xsaXNpb24gZm9yIG11bHRpcGxlIGFwcHMgb24gdGhlIHNhbWUgc3ViZG9tYWluLlxuICAgKiAqKldBUk5JTkc6IGRvIG5vdCBjaGFuZ2UgdGhpcyBvcHRpb24gaW4gYW4gYXBwIGFscmVhZHkgZGVwbG95ZWQgaW4gcHJvZHVjdGlvbiwgYXMgcHJldmlvdXNseSBzdG9yZWQgZGF0YSB3b3VsZCBiZSBsb3N0LioqXG4gICAqL1xuICBJREJEQk5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBjaGFuZ2UgdGhlIG5hbWUgdXNlZCBmb3IgYGluZGV4ZWREQmAgb2JqZWN0IHN0b3JlLlxuICAgKiAqVXNlIG9ubHkqIGZvciBpbnRlcm9wZXJhYmlsaXR5IHdpdGggb3RoZXIgQVBJcy5cbiAgICogKipXQVJOSU5HOiBkbyBub3QgY2hhbmdlIHRoaXMgb3B0aW9uIGluIGFuIGFwcCBhbHJlYWR5IGRlcGxveWVkIGluIHByb2R1Y3Rpb24sIGFzIHByZXZpb3VzbHkgc3RvcmVkIGRhdGEgd291bGQgYmUgbG9zdC4qKlxuICAgKi9cbiAgSURCU3RvcmVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gY2hhbmdlIHRoZSBkYXRhYmFzZSB2ZXJzaW9uIHVzZWQgZm9yIGBpbmRleGVkREJgIGRhdGFiYXNlLlxuICAgKiBNdXN0IGJlIGFuIHVuc2lnbmVkICoqaW50ZWdlcioqLlxuICAgKiAqKlVzZSB3aXRoIGNhdXRpb24gYXMgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdG9yZSBkZXBlbmRzIG9uIHRoZSB2ZXJzaW9uLioqXG4gICAqICpVc2Ugb25seSogZm9yIGludGVyb3BlcmFiaWxpdHkgd2l0aCBvdGhlciBBUElzIG9yIHRvIGF2b2lkIGNvbGxpc2lvbiBmb3IgbXVsdGlwbGUgYXBwcyBvbiB0aGUgc2FtZSBzdWJkb21haW4uXG4gICAqICoqV0FSTklORzogZG8gbm90IGNoYW5nZSB0aGlzIG9wdGlvbiBpbiBhbiBhcHAgYWxyZWFkeSBkZXBsb3llZCBpbiBwcm9kdWN0aW9uLCBhcyBwcmV2aW91c2x5IHN0b3JlZCBkYXRhIHdvdWxkIGJlIGxvc3QuKipcbiAgICovXG4gIElEQkRCVmVyc2lvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogQWxsb3dzIGludGVyb3BlcmFiaWxpdHkgd2l0aCBuYXRpdmUgYGluZGV4ZWREQmAgYW5kIG90aGVyIHN0b3JhZ2UgbGlicyxcbiAgICogYnkgY2hhbmdpbmcgaG93IHZhbHVlcyBhcmUgc3RvcmVkIGluIGBpbmRleGVkREJgIGRhdGFiYXNlLlxuICAgKiBEZWZhdWx0cyB0byBgdHJ1ZWAuIENoYW5nZSB0byBgZmFsc2VgIGZvciBiYWNrd2FyZCBjb21wYXRpYmxpdHkgaW4gZXhpc3RpbmcgYXBwbGljYXRpb25zLlxuICAgKiAqKkRPIE5PVCBDSEFOR0UgVEhJUyBCRUhBVklPUiBPTkNFIElOIFBST0RVQ1RJT04qKiwgYXMgaXQgd291bGQgYnJlYWsgd2l0aCBleGlzdGluZyBkYXRhLlxuICAgKi9cbiAgSURCTm9XcmFwPzogYm9vbGVhbjtcblxufVxuIl19
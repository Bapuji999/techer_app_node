var StorageModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { LS_PREFIX, IDB_DB_NAME, IDB_STORE_NAME, IDB_DB_VERSION, IDB_NO_WRAP } from './tokens';
/**
 * This module does not contain anything, it's only useful to provide options via `.forRoot()`.
 */
let StorageModule = StorageModule_1 = class StorageModule {
    /**
     * Only useful to provide options, otherwise it does nothing.
     * **Must be used at initialization, ie. in `AppModule`, and must not be loaded again in another module.**
     *
     * @example
     * NgModule({
     *   imports: [StorageModule.forRoot({
     *     LSPrefix: 'custom_',
     *   })]
     * })
     * export class AppModule
     */
    static forRoot(config) {
        return {
            ngModule: StorageModule_1,
            providers: [
                config.LSPrefix ? { provide: LS_PREFIX, useValue: config.LSPrefix } : [],
                config.IDBDBName ? { provide: IDB_DB_NAME, useValue: config.IDBDBName } : [],
                config.IDBStoreName ? { provide: IDB_STORE_NAME, useValue: config.IDBStoreName } : [],
                config.IDBDBVersion ? { provide: IDB_DB_VERSION, useValue: config.IDBDBVersion } : [],
                (config.IDBNoWrap === false) ? { provide: IDB_NO_WRAP, useValue: config.IDBNoWrap } : [],
            ],
        };
    }
};
StorageModule = StorageModule_1 = __decorate([
    NgModule()
], StorageModule);
export { StorageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXB3YS9sb2NhbC1zdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQWlCLE1BQU0sVUFBVSxDQUFDO0FBRTlHOztHQUVHO0FBRUgsSUFBYSxhQUFhLHFCQUExQixNQUFhLGFBQWE7SUFFeEI7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXFCO1FBQ2xDLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1RSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckYsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JGLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDekY7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUE7QUEzQlksYUFBYTtJQUR6QixRQUFRLEVBQUU7R0FDRSxhQUFhLENBMkJ6QjtTQTNCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTFNfUFJFRklYLCBJREJfREJfTkFNRSwgSURCX1NUT1JFX05BTUUsIElEQl9EQl9WRVJTSU9OLCBJREJfTk9fV1JBUCwgU3RvcmFnZUNvbmZpZyB9IGZyb20gJy4vdG9rZW5zJztcblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBkb2VzIG5vdCBjb250YWluIGFueXRoaW5nLCBpdCdzIG9ubHkgdXNlZnVsIHRvIHByb3ZpZGUgb3B0aW9ucyB2aWEgYC5mb3JSb290KClgLlxuICovXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VNb2R1bGUge1xuXG4gIC8qKlxuICAgKiBPbmx5IHVzZWZ1bCB0byBwcm92aWRlIG9wdGlvbnMsIG90aGVyd2lzZSBpdCBkb2VzIG5vdGhpbmcuXG4gICAqICoqTXVzdCBiZSB1c2VkIGF0IGluaXRpYWxpemF0aW9uLCBpZS4gaW4gYEFwcE1vZHVsZWAsIGFuZCBtdXN0IG5vdCBiZSBsb2FkZWQgYWdhaW4gaW4gYW5vdGhlciBtb2R1bGUuKipcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogTmdNb2R1bGUoe1xuICAgKiAgIGltcG9ydHM6IFtTdG9yYWdlTW9kdWxlLmZvclJvb3Qoe1xuICAgKiAgICAgTFNQcmVmaXg6ICdjdXN0b21fJyxcbiAgICogICB9KV1cbiAgICogfSlcbiAgICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZVxuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBTdG9yYWdlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdG9yYWdlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGNvbmZpZy5MU1ByZWZpeCA/IHsgcHJvdmlkZTogTFNfUFJFRklYLCB1c2VWYWx1ZTogY29uZmlnLkxTUHJlZml4IH0gOiBbXSxcbiAgICAgICAgY29uZmlnLklEQkRCTmFtZSA/IHsgcHJvdmlkZTogSURCX0RCX05BTUUsIHVzZVZhbHVlOiBjb25maWcuSURCREJOYW1lIH0gOiBbXSxcbiAgICAgICAgY29uZmlnLklEQlN0b3JlTmFtZSA/IHsgcHJvdmlkZTogSURCX1NUT1JFX05BTUUsIHVzZVZhbHVlOiBjb25maWcuSURCU3RvcmVOYW1lIH0gOiBbXSxcbiAgICAgICAgY29uZmlnLklEQkRCVmVyc2lvbiA/IHsgcHJvdmlkZTogSURCX0RCX1ZFUlNJT04sIHVzZVZhbHVlOiBjb25maWcuSURCREJWZXJzaW9uIH0gOiBbXSxcbiAgICAgICAgKGNvbmZpZy5JREJOb1dyYXAgPT09IGZhbHNlKSA/IHsgcHJvdmlkZTogSURCX05PX1dSQVAsIHVzZVZhbHVlOiBjb25maWcuSURCTm9XcmFwIH0gOiBbXSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=
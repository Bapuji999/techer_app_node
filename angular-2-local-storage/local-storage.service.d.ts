import { Observable } from 'rxjs';
import { ILocalStorageEvent } from './local-storage-events.interface';
import { ILocalStorageServiceConfig } from './local-storage.config.interface';
import * as ɵngcc0 from '@angular/core';
export declare class LocalStorageService {
    isSupported: boolean;
    errors$: Observable<string>;
    removeItems$: Observable<ILocalStorageEvent>;
    setItems$: Observable<ILocalStorageEvent>;
    warnings$: Observable<string>;
    private notifyOptions;
    private prefix;
    private storageType;
    private webStorage;
    private errors;
    private removeItems;
    private setItems;
    private warnings;
    constructor(config?: ILocalStorageServiceConfig);
    add(key: string, value: any): boolean;
    clearAll(regularExpression?: string): boolean;
    deriveKey(key: string): string;
    get<T>(key: string): T;
    getStorageType(): string;
    keys(): Array<string>;
    length(): number;
    remove(...keys: Array<string>): boolean;
    set(key: string, value: any): boolean;
    private checkSupport;
    private setPrefix;
    private setStorageType;
    private setNotify;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LocalStorageService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LocalStorageService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImxvY2FsLXN0b3JhZ2Uuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElMb2NhbFN0b3JhZ2VFdmVudCB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS1ldmVudHMuaW50ZXJmYWNlJztcbmltcG9ydCB7IElMb2NhbFN0b3JhZ2VTZXJ2aWNlQ29uZmlnIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmNvbmZpZy5pbnRlcmZhY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XG4gICAgaXNTdXBwb3J0ZWQ6IGJvb2xlYW47XG4gICAgZXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHJlbW92ZUl0ZW1zJDogT2JzZXJ2YWJsZTxJTG9jYWxTdG9yYWdlRXZlbnQ+O1xuICAgIHNldEl0ZW1zJDogT2JzZXJ2YWJsZTxJTG9jYWxTdG9yYWdlRXZlbnQ+O1xuICAgIHdhcm5pbmdzJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHByaXZhdGUgbm90aWZ5T3B0aW9ucztcbiAgICBwcml2YXRlIHByZWZpeDtcbiAgICBwcml2YXRlIHN0b3JhZ2VUeXBlO1xuICAgIHByaXZhdGUgd2ViU3RvcmFnZTtcbiAgICBwcml2YXRlIGVycm9ycztcbiAgICBwcml2YXRlIHJlbW92ZUl0ZW1zO1xuICAgIHByaXZhdGUgc2V0SXRlbXM7XG4gICAgcHJpdmF0ZSB3YXJuaW5ncztcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJTG9jYWxTdG9yYWdlU2VydmljZUNvbmZpZyk7XG4gICAgYWRkKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogYm9vbGVhbjtcbiAgICBjbGVhckFsbChyZWd1bGFyRXhwcmVzc2lvbj86IHN0cmluZyk6IGJvb2xlYW47XG4gICAgZGVyaXZlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nO1xuICAgIGdldDxUPihrZXk6IHN0cmluZyk6IFQ7XG4gICAgZ2V0U3RvcmFnZVR5cGUoKTogc3RyaW5nO1xuICAgIGtleXMoKTogQXJyYXk8c3RyaW5nPjtcbiAgICBsZW5ndGgoKTogbnVtYmVyO1xuICAgIHJlbW92ZSguLi5rZXlzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbjtcbiAgICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBib29sZWFuO1xuICAgIHByaXZhdGUgY2hlY2tTdXBwb3J0O1xuICAgIHByaXZhdGUgc2V0UHJlZml4O1xuICAgIHByaXZhdGUgc2V0U3RvcmFnZVR5cGU7XG4gICAgcHJpdmF0ZSBzZXROb3RpZnk7XG59XG4iXX0=
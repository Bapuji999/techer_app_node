import { ComponentRef, Injector, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Overlay } from '../overlay/overlay';
import { ToastRef } from './toast-injector';
import { ToastContainerDirective } from './toast.directive';
import { GlobalConfig, IndividualConfig, ToastToken } from './toastr-config';
import * as ɵngcc0 from '@angular/core';
export interface ActiveToast<C> {
    /** Your Toast ID. Use this to close it individually */
    toastId: number;
    /** the message of your toast. Stored to prevent duplicates */
    message: string;
    /** a reference to the component see portal.ts */
    portal: ComponentRef<C>;
    /** a reference to your toast */
    toastRef: ToastRef<C>;
    /** triggered when toast is active */
    onShown: Observable<any>;
    /** triggered when toast is destroyed */
    onHidden: Observable<any>;
    /** triggered on toast click */
    onTap: Observable<any>;
    /** available for your use in custom toast */
    onAction: Observable<any>;
}
export declare class ToastrService {
    private overlay;
    private _injector;
    private sanitizer;
    private ngZone;
    toastrConfig: GlobalConfig;
    currentlyActive: number;
    toasts: ActiveToast<any>[];
    overlayContainer: ToastContainerDirective;
    previousToastMessage: string | undefined;
    private index;
    constructor(token: ToastToken, overlay: Overlay, _injector: Injector, sanitizer: DomSanitizer, ngZone: NgZone);
    /** show toast */
    show(message?: string, title?: string, override?: Partial<IndividualConfig>, type?: string): ActiveToast<any>;
    /** show successful toast */
    success(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /** show error toast */
    error(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /** show info toast */
    info(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /** show warning toast */
    warning(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /**
     * Remove all or a single toast by id
     */
    clear(toastId?: number): void;
    /**
     * Remove and destroy a single toast by id
     */
    remove(toastId: number): boolean;
    /**
     * Determines if toast message is already shown
     */
    findDuplicate(message: string, resetOnDuplicate: boolean, countDuplicates: boolean): ActiveToast<any>;
    /** create a clone of global config and apply individual settings */
    private applyConfig;
    /**
     * Find toast object by id
     */
    private _findToast;
    /**
     * Determines the need to run inside angular's zone then builds the toast
     */
    private _preBuildNotification;
    /**
     * Creates and attaches toast data to component
     * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
     */
    private _buildNotification;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastrService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidG9hc3RyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdG9yLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QtaW5qZWN0b3InO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIEluZGl2aWR1YWxDb25maWcsIFRvYXN0VG9rZW4gfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVUb2FzdDxDPiB7XG4gICAgLyoqIFlvdXIgVG9hc3QgSUQuIFVzZSB0aGlzIHRvIGNsb3NlIGl0IGluZGl2aWR1YWxseSAqL1xuICAgIHRvYXN0SWQ6IG51bWJlcjtcbiAgICAvKiogdGhlIG1lc3NhZ2Ugb2YgeW91ciB0b2FzdC4gU3RvcmVkIHRvIHByZXZlbnQgZHVwbGljYXRlcyAqL1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICAvKiogYSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBzZWUgcG9ydGFsLnRzICovXG4gICAgcG9ydGFsOiBDb21wb25lbnRSZWY8Qz47XG4gICAgLyoqIGEgcmVmZXJlbmNlIHRvIHlvdXIgdG9hc3QgKi9cbiAgICB0b2FzdFJlZjogVG9hc3RSZWY8Qz47XG4gICAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGFjdGl2ZSAqL1xuICAgIG9uU2hvd246IE9ic2VydmFibGU8YW55PjtcbiAgICAvKiogdHJpZ2dlcmVkIHdoZW4gdG9hc3QgaXMgZGVzdHJveWVkICovXG4gICAgb25IaWRkZW46IE9ic2VydmFibGU8YW55PjtcbiAgICAvKiogdHJpZ2dlcmVkIG9uIHRvYXN0IGNsaWNrICovXG4gICAgb25UYXA6IE9ic2VydmFibGU8YW55PjtcbiAgICAvKiogYXZhaWxhYmxlIGZvciB5b3VyIHVzZSBpbiBjdXN0b20gdG9hc3QgKi9cbiAgICBvbkFjdGlvbjogT2JzZXJ2YWJsZTxhbnk+O1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVG9hc3RyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBvdmVybGF5O1xuICAgIHByaXZhdGUgX2luamVjdG9yO1xuICAgIHByaXZhdGUgc2FuaXRpemVyO1xuICAgIHByaXZhdGUgbmdab25lO1xuICAgIHRvYXN0ckNvbmZpZzogR2xvYmFsQ29uZmlnO1xuICAgIGN1cnJlbnRseUFjdGl2ZTogbnVtYmVyO1xuICAgIHRvYXN0czogQWN0aXZlVG9hc3Q8YW55PltdO1xuICAgIG92ZXJsYXlDb250YWluZXI6IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlO1xuICAgIHByZXZpb3VzVG9hc3RNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBpbmRleDtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlbjogVG9hc3RUb2tlbiwgb3ZlcmxheTogT3ZlcmxheSwgX2luamVjdG9yOiBJbmplY3Rvciwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIG5nWm9uZTogTmdab25lKTtcbiAgICAvKiogc2hvdyB0b2FzdCAqL1xuICAgIHNob3cobWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiwgdHlwZT86IHN0cmluZyk6IEFjdGl2ZVRvYXN0PGFueT47XG4gICAgLyoqIHNob3cgc3VjY2Vzc2Z1bCB0b2FzdCAqL1xuICAgIHN1Y2Nlc3MobWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPik6IEFjdGl2ZVRvYXN0PGFueT47XG4gICAgLyoqIHNob3cgZXJyb3IgdG9hc3QgKi9cbiAgICBlcnJvcihtZXNzYWdlPzogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+KTogQWN0aXZlVG9hc3Q8YW55PjtcbiAgICAvKiogc2hvdyBpbmZvIHRvYXN0ICovXG4gICAgaW5mbyhtZXNzYWdlPzogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+KTogQWN0aXZlVG9hc3Q8YW55PjtcbiAgICAvKiogc2hvdyB3YXJuaW5nIHRvYXN0ICovXG4gICAgd2FybmluZyhtZXNzYWdlPzogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+KTogQWN0aXZlVG9hc3Q8YW55PjtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIG9yIGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAgICovXG4gICAgY2xlYXIodG9hc3RJZD86IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuZCBkZXN0cm95IGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAgICovXG4gICAgcmVtb3ZlKHRvYXN0SWQ6IG51bWJlcik6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0b2FzdCBtZXNzYWdlIGlzIGFscmVhZHkgc2hvd25cbiAgICAgKi9cbiAgICBmaW5kRHVwbGljYXRlKG1lc3NhZ2U6IHN0cmluZywgcmVzZXRPbkR1cGxpY2F0ZTogYm9vbGVhbiwgY291bnREdXBsaWNhdGVzOiBib29sZWFuKTogQWN0aXZlVG9hc3Q8YW55PjtcbiAgICAvKiogY3JlYXRlIGEgY2xvbmUgb2YgZ2xvYmFsIGNvbmZpZyBhbmQgYXBwbHkgaW5kaXZpZHVhbCBzZXR0aW5ncyAqL1xuICAgIHByaXZhdGUgYXBwbHlDb25maWc7XG4gICAgLyoqXG4gICAgICogRmluZCB0b2FzdCBvYmplY3QgYnkgaWRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kVG9hc3Q7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgbmVlZCB0byBydW4gaW5zaWRlIGFuZ3VsYXIncyB6b25lIHRoZW4gYnVpbGRzIHRoZSB0b2FzdFxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByZUJ1aWxkTm90aWZpY2F0aW9uO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIGF0dGFjaGVzIHRvYXN0IGRhdGEgdG8gY29tcG9uZW50XG4gICAgICogcmV0dXJucyB0aGUgYWN0aXZlIHRvYXN0LCBvciBpbiBjYXNlIHByZXZlbnREdXBsaWNhdGVzIGlzIGVuYWJsZWQgdGhlIG9yaWdpbmFsL25vbi1kdXBsaWNhdGUgYWN0aXZlIHRvYXN0LlxuICAgICAqL1xuICAgIHByaXZhdGUgX2J1aWxkTm90aWZpY2F0aW9uO1xufVxuIl19
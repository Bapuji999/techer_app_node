import { ModuleWithProviders } from '@angular/core';
import { ApplicationRef, OnDestroy } from '@angular/core';
import { GlobalConfig, IndividualConfig, ToastPackage } from './toastr-config';
import { ToastrService } from './toastr.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class ToastNoAnimation implements OnDestroy {
    protected toastrService: ToastrService;
    toastPackage: ToastPackage;
    protected appRef: ApplicationRef;
    message?: string | null;
    title?: string;
    options: IndividualConfig;
    duplicatesCount: number;
    originalTimeout: number;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** hides component when waiting to be displayed */
    get displayStyle(): string;
    /** controls animation */
    state: string;
    private timeout;
    private intervalId;
    private hideTime;
    private sub;
    private sub1;
    private sub2;
    private sub3;
    constructor(toastrService: ToastrService, toastPackage: ToastPackage, appRef: ApplicationRef);
    ngOnDestroy(): void;
    /**
     * activates toast and sets timeout
     */
    activateToast(): void;
    /**
     * updates progress bar width
     */
    updateProgress(): void;
    resetTimeout(): void;
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastNoAnimation>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ToastNoAnimation, "[toast-component]", never, {}, {}, never>;
}
export declare const DefaultNoAnimationsGlobalConfig: GlobalConfig;
export declare class ToastNoAnimationModule {
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders<ToastNoAnimationModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ToastNoAnimationModule, [typeof ToastNoAnimation], [typeof ɵngcc1.CommonModule], [typeof ToastNoAnimation]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ToastNoAnimationModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm9hbmltYXRpb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRvYXN0LW5vYW5pbWF0aW9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7Ozs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVG9hc3ROb0FuaW1hdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHRvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2U7XG4gICAgdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2U7XG4gICAgcHJvdGVjdGVkIGFwcFJlZjogQXBwbGljYXRpb25SZWY7XG4gICAgbWVzc2FnZT86IHN0cmluZyB8IG51bGw7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgb3B0aW9uczogSW5kaXZpZHVhbENvbmZpZztcbiAgICBkdXBsaWNhdGVzQ291bnQ6IG51bWJlcjtcbiAgICBvcmlnaW5hbFRpbWVvdXQ6IG51bWJlcjtcbiAgICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cbiAgICB0b2FzdENsYXNzZXM6IHN0cmluZztcbiAgICAvKiogaGlkZXMgY29tcG9uZW50IHdoZW4gd2FpdGluZyB0byBiZSBkaXNwbGF5ZWQgKi9cbiAgICBnZXQgZGlzcGxheVN0eWxlKCk6IHN0cmluZztcbiAgICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gICAgc3RhdGU6IHN0cmluZztcbiAgICBwcml2YXRlIHRpbWVvdXQ7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbElkO1xuICAgIHByaXZhdGUgaGlkZVRpbWU7XG4gICAgcHJpdmF0ZSBzdWI7XG4gICAgcHJpdmF0ZSBzdWIxO1xuICAgIHByaXZhdGUgc3ViMjtcbiAgICBwcml2YXRlIHN1YjM7XG4gICAgY29uc3RydWN0b3IodG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSwgdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsIGFwcFJlZjogQXBwbGljYXRpb25SZWYpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcbiAgICAgKi9cbiAgICBhY3RpdmF0ZVRvYXN0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogdXBkYXRlcyBwcm9ncmVzcyBiYXIgd2lkdGhcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9ncmVzcygpOiB2b2lkO1xuICAgIHJlc2V0VGltZW91dCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHRlbGxzIHRvYXN0clNlcnZpY2UgdG8gcmVtb3ZlIHRoaXMgdG9hc3QgYWZ0ZXIgYW5pbWF0aW9uIHRpbWVcbiAgICAgKi9cbiAgICByZW1vdmUoKTogdm9pZDtcbiAgICB0YXBUb2FzdCgpOiB2b2lkO1xuICAgIHN0aWNrQXJvdW5kKCk6IHZvaWQ7XG4gICAgZGVsYXllZEhpZGVUb2FzdCgpOiB2b2lkO1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgRGVmYXVsdE5vQW5pbWF0aW9uc0dsb2JhbENvbmZpZzogR2xvYmFsQ29uZmlnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVG9hc3ROb0FuaW1hdGlvbk1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogUGFydGlhbDxHbG9iYWxDb25maWc+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUb2FzdE5vQW5pbWF0aW9uTW9kdWxlPjtcbn1cbiJdfQ==
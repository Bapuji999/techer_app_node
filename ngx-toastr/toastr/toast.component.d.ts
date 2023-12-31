import { NgZone, OnDestroy } from '@angular/core';
import { IndividualConfig, ToastPackage } from './toastr-config';
import { ToastrService } from './toastr.service';
import * as ɵngcc0 from '@angular/core';
export declare class Toast implements OnDestroy {
    protected toastrService: ToastrService;
    toastPackage: ToastPackage;
    protected ngZone?: NgZone;
    message?: string | null;
    title?: string;
    options: IndividualConfig;
    duplicatesCount: number;
    originalTimeout: number;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** controls animation */
    state: {
        value: string;
        params: {
            easeTime: string | number;
            easing: string;
        };
    };
    /** hides component when waiting to be displayed */
    get displayStyle(): string;
    private timeout;
    private intervalId;
    private hideTime;
    private sub;
    private sub1;
    private sub2;
    private sub3;
    constructor(toastrService: ToastrService, toastPackage: ToastPackage, ngZone?: NgZone);
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
    outsideTimeout(func: () => any, timeout: number): void;
    outsideInterval(func: () => any, timeout: number): void;
    private runInsideAngular;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Toast>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Toast, "[toast-component]", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRvYXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdHIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUb2FzdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHRvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2U7XG4gICAgdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2U7XG4gICAgcHJvdGVjdGVkIG5nWm9uZT86IE5nWm9uZTtcbiAgICBtZXNzYWdlPzogc3RyaW5nIHwgbnVsbDtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBvcHRpb25zOiBJbmRpdmlkdWFsQ29uZmlnO1xuICAgIGR1cGxpY2F0ZXNDb3VudDogbnVtYmVyO1xuICAgIG9yaWdpbmFsVGltZW91dDogbnVtYmVyO1xuICAgIC8qKiB3aWR0aCBvZiBwcm9ncmVzcyBiYXIgKi9cbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIC8qKiBhIGNvbWJpbmF0aW9uIG9mIHRvYXN0IHR5cGUgYW5kIG9wdGlvbnMudG9hc3RDbGFzcyAqL1xuICAgIHRvYXN0Q2xhc3Nlczogc3RyaW5nO1xuICAgIC8qKiBjb250cm9scyBhbmltYXRpb24gKi9cbiAgICBzdGF0ZToge1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGVhc2VUaW1lOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICAgICAgICBlYXNpbmc6IHN0cmluZztcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKiBoaWRlcyBjb21wb25lbnQgd2hlbiB3YWl0aW5nIHRvIGJlIGRpc3BsYXllZCAqL1xuICAgIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nO1xuICAgIHByaXZhdGUgdGltZW91dDtcbiAgICBwcml2YXRlIGludGVydmFsSWQ7XG4gICAgcHJpdmF0ZSBoaWRlVGltZTtcbiAgICBwcml2YXRlIHN1YjtcbiAgICBwcml2YXRlIHN1YjE7XG4gICAgcHJpdmF0ZSBzdWIyO1xuICAgIHByaXZhdGUgc3ViMztcbiAgICBjb25zdHJ1Y3Rvcih0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLCB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSwgbmdab25lPzogTmdab25lKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIGFjdGl2YXRlcyB0b2FzdCBhbmQgc2V0cyB0aW1lb3V0XG4gICAgICovXG4gICAgYWN0aXZhdGVUb2FzdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHVwZGF0ZXMgcHJvZ3Jlc3MgYmFyIHdpZHRoXG4gICAgICovXG4gICAgdXBkYXRlUHJvZ3Jlc3MoKTogdm9pZDtcbiAgICByZXNldFRpbWVvdXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiB0ZWxscyB0b2FzdHJTZXJ2aWNlIHRvIHJlbW92ZSB0aGlzIHRvYXN0IGFmdGVyIGFuaW1hdGlvbiB0aW1lXG4gICAgICovXG4gICAgcmVtb3ZlKCk6IHZvaWQ7XG4gICAgdGFwVG9hc3QoKTogdm9pZDtcbiAgICBzdGlja0Fyb3VuZCgpOiB2b2lkO1xuICAgIGRlbGF5ZWRIaWRlVG9hc3QoKTogdm9pZDtcbiAgICBvdXRzaWRlVGltZW91dChmdW5jOiAoKSA9PiBhbnksIHRpbWVvdXQ6IG51bWJlcik6IHZvaWQ7XG4gICAgb3V0c2lkZUludGVydmFsKGZ1bmM6ICgpID0+IGFueSwgdGltZW91dDogbnVtYmVyKTogdm9pZDtcbiAgICBwcml2YXRlIHJ1bkluc2lkZUFuZ3VsYXI7XG59XG4iXX0=
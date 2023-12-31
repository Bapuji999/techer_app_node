import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NgbModalWindow implements OnInit, AfterViewInit, OnDestroy {
    private _document;
    private _elRef;
    private _zone;
    private _closed$;
    private _elWithFocus;
    private _dialogEl;
    ariaLabelledBy: string;
    backdrop: boolean | string;
    centered: string;
    keyboard: boolean;
    scrollable: string;
    size: string;
    windowClass: string;
    dismissEvent: EventEmitter<any>;
    constructor(_document: any, _elRef: ElementRef<HTMLElement>, _zone: NgZone);
    dismiss(reason: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbModalWindow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbModalWindow, "ngb-modal-window", never, {
    "backdrop": "backdrop";
    "keyboard": "keyboard";
    "ariaLabelledBy": "ariaLabelledBy";
    "centered": "centered";
    "scrollable": "scrollable";
    "size": "size";
    "windowClass": "windowClass";
}, {
    "dismissEvent": "dismiss";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtd2luZG93LmQudHMiLCJzb3VyY2VzIjpbIm1vZGFsLXdpbmRvdy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiTW9kYWxXaW5kb3cgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfZWxSZWY7XG4gICAgcHJpdmF0ZSBfem9uZTtcbiAgICBwcml2YXRlIF9jbG9zZWQkO1xuICAgIHByaXZhdGUgX2VsV2l0aEZvY3VzO1xuICAgIHByaXZhdGUgX2RpYWxvZ0VsO1xuICAgIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG4gICAgYmFja2Ryb3A6IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgY2VudGVyZWQ6IHN0cmluZztcbiAgICBrZXlib2FyZDogYm9vbGVhbjtcbiAgICBzY3JvbGxhYmxlOiBzdHJpbmc7XG4gICAgc2l6ZTogc3RyaW5nO1xuICAgIHdpbmRvd0NsYXNzOiBzdHJpbmc7XG4gICAgZGlzbWlzc0V2ZW50OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihfZG9jdW1lbnQ6IGFueSwgX2VsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgX3pvbmU6IE5nWm9uZSk7XG4gICAgZGlzbWlzcyhyZWFzb246IGFueSk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19
import { InjectionToken, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare type ARIA_LIVE_DELAY_TYPE = number | null;
export declare const ARIA_LIVE_DELAY: InjectionToken<number | null>;
export declare function ARIA_LIVE_DELAY_FACTORY(): number;
export declare class Live implements OnDestroy {
    private _document;
    private _delay;
    constructor(_document: any, _delay: any);
    ngOnDestroy(): void;
    say(message: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Live>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS5kLnRzIiwic291cmNlcyI6WyJsaXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIHR5cGUgQVJJQV9MSVZFX0RFTEFZX1RZUEUgPSBudW1iZXIgfCBudWxsO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgQVJJQV9MSVZFX0RFTEFZOiBJbmplY3Rpb25Ub2tlbjxudW1iZXIgfCBudWxsPjtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIEFSSUFfTElWRV9ERUxBWV9GQUNUT1JZKCk6IG51bWJlcjtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIHByaXZhdGUgX2RlbGF5O1xuICAgIGNvbnN0cnVjdG9yKF9kb2N1bWVudDogYW55LCBfZGVsYXk6IGFueSk7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBzYXkobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==
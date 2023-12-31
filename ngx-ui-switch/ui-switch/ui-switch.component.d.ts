import { ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UiSwitchModuleConfig } from './ui-switch.config';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class UiSwitchComponent implements ControlValueAccessor, OnDestroy {
    private cdr;
    private _checked;
    private _disabled;
    private _reverse;
    private _loading;
    private _beforeChange;
    size: any;
    color: any;
    switchOffColor: any;
    switchColor: any;
    defaultBgColor: any;
    defaultBoColor: any;
    checkedLabel: any;
    uncheckedLabel: any;
    checkedTextColor: any;
    uncheckedTextColor: any;
    beforeChange: Observable<boolean>;
    set checked(v: boolean);
    get checked(): boolean;
    set disabled(v: boolean);
    get disabled(): boolean;
    set reverse(v: boolean);
    get reverse(): boolean;
    set loading(v: boolean);
    get loading(): boolean;
    /**
     * Emits changed value
     */
    change: EventEmitter<boolean>;
    /**
     * Emits DOM event
     */
    changeEvent: EventEmitter<MouseEvent>;
    /**
     * Emits changed value
     */
    valueChange: EventEmitter<boolean>;
    constructor(config: UiSwitchModuleConfig | undefined, cdr: ChangeDetectorRef);
    getColor(flag?: string): any;
    onClick(event: MouseEvent): void;
    onToggle(event: MouseEvent): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private onTouchedCallback;
    private onChangeCallback;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UiSwitchComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UiSwitchComponent, "ui-switch", never, {
    "size": "size";
    "color": "color";
    "switchOffColor": "switchOffColor";
    "switchColor": "switchColor";
    "defaultBgColor": "defaultBgColor";
    "defaultBoColor": "defaultBoColor";
    "checkedLabel": "checkedLabel";
    "uncheckedLabel": "uncheckedLabel";
    "checkedTextColor": "checkedTextColor";
    "uncheckedTextColor": "uncheckedTextColor";
    "checked": "checked";
    "disabled": "disabled";
    "reverse": "reverse";
    "loading": "loading";
    "beforeChange": "beforeChange";
}, {
    "change": "change";
    "changeEvent": "changeEvent";
    "valueChange": "valueChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc3dpdGNoLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ1aS1zd2l0Y2guY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFVpU3dpdGNoTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi91aS1zd2l0Y2guY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVpU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjZHI7XG4gICAgcHJpdmF0ZSBfY2hlY2tlZDtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICBwcml2YXRlIF9yZXZlcnNlO1xuICAgIHByaXZhdGUgX2xvYWRpbmc7XG4gICAgcHJpdmF0ZSBfYmVmb3JlQ2hhbmdlO1xuICAgIHNpemU6IGFueTtcbiAgICBjb2xvcjogYW55O1xuICAgIHN3aXRjaE9mZkNvbG9yOiBhbnk7XG4gICAgc3dpdGNoQ29sb3I6IGFueTtcbiAgICBkZWZhdWx0QmdDb2xvcjogYW55O1xuICAgIGRlZmF1bHRCb0NvbG9yOiBhbnk7XG4gICAgY2hlY2tlZExhYmVsOiBhbnk7XG4gICAgdW5jaGVja2VkTGFiZWw6IGFueTtcbiAgICBjaGVja2VkVGV4dENvbG9yOiBhbnk7XG4gICAgdW5jaGVja2VkVGV4dENvbG9yOiBhbnk7XG4gICAgYmVmb3JlQ2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNldCBjaGVja2VkKHY6IGJvb2xlYW4pO1xuICAgIGdldCBjaGVja2VkKCk6IGJvb2xlYW47XG4gICAgc2V0IGRpc2FibGVkKHY6IGJvb2xlYW4pO1xuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuO1xuICAgIHNldCByZXZlcnNlKHY6IGJvb2xlYW4pO1xuICAgIGdldCByZXZlcnNlKCk6IGJvb2xlYW47XG4gICAgc2V0IGxvYWRpbmcodjogYm9vbGVhbik7XG4gICAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyBjaGFuZ2VkIHZhbHVlXG4gICAgICovXG4gICAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogRW1pdHMgRE9NIGV2ZW50XG4gICAgICovXG4gICAgY2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyBjaGFuZ2VkIHZhbHVlXG4gICAgICovXG4gICAgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFVpU3dpdGNoTW9kdWxlQ29uZmlnIHwgdW5kZWZpbmVkLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBnZXRDb2xvcihmbGFnPzogc3RyaW5nKTogYW55O1xuICAgIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIG9uVG9nZ2xlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkO1xuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjaztcbiAgICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==
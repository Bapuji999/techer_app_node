import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbButtonLabel } from './label';
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbRadioGroup implements ControlValueAccessor {
    private _radios;
    private _value;
    private _disabled;
    get disabled(): boolean;
    set disabled(isDisabled: boolean);
    /**
     * Name of the radio group applied to radio input elements.
     *
     * Will be applied to all radio input elements inside the group,
     * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
     *
     * If not provided, will be generated in the `ngb-radio-xx` format.
     */
    name: string;
    onChange: (_: any) => void;
    onTouched: () => void;
    onRadioChange(radio: NgbRadio): void;
    onRadioValueUpdate(): void;
    register(radio: NgbRadio): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    unregister(radio: NgbRadio): void;
    writeValue(value: any): void;
    private _updateRadiosValue;
    private _updateRadiosDisabled;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbRadioGroup>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbRadioGroup, "[ngbRadioGroup]", never, {
    "name": "name";
}, {}, never>;
}
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */
export declare class NgbRadio implements OnDestroy {
    private _group;
    private _label;
    private _renderer;
    private _element;
    private _cd;
    static ngAcceptInputType_disabled: boolean | '';
    private _checked;
    private _disabled;
    private _value;
    /**
     * The value for the 'name' property of the input element.
     *
     * All inputs of the radio group should have the same name. If not specified,
     * the name of the enclosing group is used.
     */
    name: string;
    /**
     * The form control value when current radio button is checked.
     */
    set value(value: any);
    /**
     * If `true`, current radio button will be disabled.
     */
    set disabled(isDisabled: boolean);
    set focused(isFocused: boolean);
    get checked(): boolean;
    get disabled(): boolean;
    get value(): any;
    get nameAttr(): string;
    constructor(_group: NgbRadioGroup, _label: NgbButtonLabel, _renderer: Renderer2, _element: ElementRef<HTMLInputElement>, _cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    onChange(): void;
    updateValue(value: any): void;
    updateDisabled(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbRadio>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbRadio, "[ngbButton][type=radio]", never, {
    "value": "value";
    "disabled": "disabled";
    "name": "name";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uZC50cyIsInNvdXJjZXMiOlsicmFkaW8uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYkJ1dHRvbkxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG4vKipcbiAqIEFsbG93cyB0byBlYXNpbHkgY3JlYXRlIEJvb3RzdHJhcC1zdHlsZSByYWRpbyBidXR0b25zLlxuICpcbiAqIEludGVncmF0ZXMgd2l0aCBmb3Jtcywgc28gdGhlIHZhbHVlIG9mIGEgY2hlY2tlZCBidXR0b24gaXMgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgZm9ybSBjb250cm9sXG4gKiBlaXRoZXIgaW4gYSByZWFjdGl2ZSBvciB0ZW1wbGF0ZS1kcml2ZW4gd2F5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JSYWRpb0dyb3VwIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIHByaXZhdGUgX3JhZGlvcztcbiAgICBwcml2YXRlIF92YWx1ZTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbjtcbiAgICBzZXQgZGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbik7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgcmFkaW8gZ3JvdXAgYXBwbGllZCB0byByYWRpbyBpbnB1dCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIFdpbGwgYmUgYXBwbGllZCB0byBhbGwgcmFkaW8gaW5wdXQgZWxlbWVudHMgaW5zaWRlIHRoZSBncm91cCxcbiAgICAgKiB1bmxlc3MgW2BOZ2JSYWRpb2BdKCMvY29tcG9uZW50cy9idXR0b25zL2FwaSNOZ2JSYWRpbykncyBzcGVjaWZ5IG5hbWVzIHRoZW1zZWx2ZXMuXG4gICAgICpcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIHdpbGwgYmUgZ2VuZXJhdGVkIGluIHRoZSBgbmdiLXJhZGlvLXh4YCBmb3JtYXQuXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAoXzogYW55KSA9PiB2b2lkO1xuICAgIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcbiAgICBvblJhZGlvQ2hhbmdlKHJhZGlvOiBOZ2JSYWRpbyk6IHZvaWQ7XG4gICAgb25SYWRpb1ZhbHVlVXBkYXRlKCk6IHZvaWQ7XG4gICAgcmVnaXN0ZXIocmFkaW86IE5nYlJhZGlvKTogdm9pZDtcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZDtcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIHVucmVnaXN0ZXIocmFkaW86IE5nYlJhZGlvKTogdm9pZDtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xuICAgIHByaXZhdGUgX3VwZGF0ZVJhZGlvc1ZhbHVlO1xuICAgIHByaXZhdGUgX3VwZGF0ZVJhZGlvc0Rpc2FibGVkO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IG1hcmtzIGFuIGlucHV0IG9mIHR5cGUgXCJyYWRpb1wiIGFzIGEgcGFydCBvZiB0aGVcbiAqIFtgTmdiUmFkaW9Hcm91cGBdKCMvY29tcG9uZW50cy9idXR0b25zL2FwaSNOZ2JSYWRpb0dyb3VwKS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUmFkaW8gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2dyb3VwO1xuICAgIHByaXZhdGUgX2xhYmVsO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyO1xuICAgIHByaXZhdGUgX2VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY2Q7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBib29sZWFuIHwgJyc7XG4gICAgcHJpdmF0ZSBfY2hlY2tlZDtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICBwcml2YXRlIF92YWx1ZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoZSAnbmFtZScgcHJvcGVydHkgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBBbGwgaW5wdXRzIG9mIHRoZSByYWRpbyBncm91cCBzaG91bGQgaGF2ZSB0aGUgc2FtZSBuYW1lLiBJZiBub3Qgc3BlY2lmaWVkLFxuICAgICAqIHRoZSBuYW1lIG9mIHRoZSBlbmNsb3NpbmcgZ3JvdXAgaXMgdXNlZC5cbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGZvcm0gY29udHJvbCB2YWx1ZSB3aGVuIGN1cnJlbnQgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgY3VycmVudCByYWRpbyBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBzZXQgZGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbik7XG4gICAgc2V0IGZvY3VzZWQoaXNGb2N1c2VkOiBib29sZWFuKTtcbiAgICBnZXQgY2hlY2tlZCgpOiBib29sZWFuO1xuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuO1xuICAgIGdldCB2YWx1ZSgpOiBhbnk7XG4gICAgZ2V0IG5hbWVBdHRyKCk6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihfZ3JvdXA6IE5nYlJhZGlvR3JvdXAsIF9sYWJlbDogTmdiQnV0dG9uTGFiZWwsIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBfZWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PiwgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBvbkNoYW5nZSgpOiB2b2lkO1xuICAgIHVwZGF0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xuICAgIHVwZGF0ZURpc2FibGVkKCk6IHZvaWQ7XG59XG4iXX0=
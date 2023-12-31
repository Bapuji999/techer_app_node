import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbButtonLabel } from './label';
/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbCheckBox implements ControlValueAccessor {
    private _label;
    private _cd;
    static ngAcceptInputType_disabled: boolean | '';
    checked: any;
    /**
     * If `true`, the checkbox button will be disabled
     */
    disabled: boolean;
    /**
     * The form control value when the checkbox is checked.
     */
    valueChecked: boolean;
    /**
     * The form control value when the checkbox is unchecked.
     */
    valueUnChecked: boolean;
    onChange: (_: any) => void;
    onTouched: () => void;
    set focused(isFocused: boolean);
    constructor(_label: NgbButtonLabel, _cd: ChangeDetectorRef);
    onInputChange($event: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCheckBox>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbCheckBox, "[ngbButton][type=checkbox]", never, {
    "disabled": "disabled";
    "valueChecked": "valueChecked";
    "valueUnChecked": "valueUnChecked";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guZC50cyIsInNvdXJjZXMiOlsiY2hlY2tib3guZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYkJ1dHRvbkxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG4vKipcbiAqIEFsbG93cyB0byBlYXNpbHkgY3JlYXRlIEJvb3RzdHJhcC1zdHlsZSBjaGVja2JveCBidXR0b25zLlxuICpcbiAqIEludGVncmF0ZXMgd2l0aCBmb3Jtcywgc28gdGhlIHZhbHVlIG9mIGEgY2hlY2tlZCBidXR0b24gaXMgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgZm9ybSBjb250cm9sXG4gKiBlaXRoZXIgaW4gYSByZWFjdGl2ZSBvciB0ZW1wbGF0ZS1kcml2ZW4gd2F5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JDaGVja0JveCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgICBwcml2YXRlIF9sYWJlbDtcbiAgICBwcml2YXRlIF9jZDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IGJvb2xlYW4gfCAnJztcbiAgICBjaGVja2VkOiBhbnk7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgY2hlY2tib3ggYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWRcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSBjb250cm9sIHZhbHVlIHdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgdmFsdWVDaGVja2VkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIGNvbnRyb2wgdmFsdWUgd2hlbiB0aGUgY2hlY2tib3ggaXMgdW5jaGVja2VkLlxuICAgICAqL1xuICAgIHZhbHVlVW5DaGVja2VkOiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAoXzogYW55KSA9PiB2b2lkO1xuICAgIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcbiAgICBzZXQgZm9jdXNlZChpc0ZvY3VzZWQ6IGJvb2xlYW4pO1xuICAgIGNvbnN0cnVjdG9yKF9sYWJlbDogTmdiQnV0dG9uTGFiZWwsIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIG9uSW5wdXRDaGFuZ2UoJGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkO1xuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDtcbn1cbiJdfQ==
import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export interface SelectOption {
    label: string;
    value: string;
}
export declare class AeSelectComponent implements OnInit, ControlValueAccessor {
    private elRef;
    private r;
    options: SelectOption[];
    isHidden: boolean;
    selectedOption: SelectOption;
    disabled: boolean;
    optionId: number;
    readonly label: string;
    opened: boolean;
    readonly value: string;
    hidden: string;
    changeEvent: EventEmitter<any>;
    labelButton: ElementRef;
    constructor(elRef: ElementRef, r: Renderer2);
    ngOnInit(): void;
    hide(): void;
    optionSelect(option: SelectOption, event: MouseEvent): void;
    toggleOpen(event: MouseEvent): void;
    onClick($event: MouseEvent): void;
    close(): void;
    readonly isOpen: boolean;
    writeValue(value: any): void;
    setValue(value: any): void;
    onChange: any;
    onTouched: any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    handleKeyDown($event: KeyboardEvent): void;
    _handleArrowDown($event: any): void;
    _handleArrowUp($event: any): void;
    _handleSpace($event: any): void;
    _handleEnter($event: any): void;
    _handleTab($event: any): void;
    _handleBackspace(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AeSelectComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AeSelectComponent, "ae-select", never, {
    "options": "options";
    "isHidden": "hidden";
}, {
    "changeEvent": "change";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWUtc2VsZWN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZS1zZWxlY3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RPcHRpb24ge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFlU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSBlbFJlZjtcbiAgICBwcml2YXRlIHI7XG4gICAgb3B0aW9uczogU2VsZWN0T3B0aW9uW107XG4gICAgaXNIaWRkZW46IGJvb2xlYW47XG4gICAgc2VsZWN0ZWRPcHRpb246IFNlbGVjdE9wdGlvbjtcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBvcHRpb25JZDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gICAgb3BlbmVkOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG4gICAgaGlkZGVuOiBzdHJpbmc7XG4gICAgY2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGxhYmVsQnV0dG9uOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmLCByOiBSZW5kZXJlcjIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgaGlkZSgpOiB2b2lkO1xuICAgIG9wdGlvblNlbGVjdChvcHRpb246IFNlbGVjdE9wdGlvbiwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIHRvZ2dsZU9wZW4oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIG9uQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBjbG9zZSgpOiB2b2lkO1xuICAgIHJlYWRvbmx5IGlzT3BlbjogYm9vbGVhbjtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xuICAgIHNldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xuICAgIG9uQ2hhbmdlOiBhbnk7XG4gICAgb25Ub3VjaGVkOiBhbnk7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZDtcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIGhhbmRsZUtleURvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBfaGFuZGxlQXJyb3dEb3duKCRldmVudDogYW55KTogdm9pZDtcbiAgICBfaGFuZGxlQXJyb3dVcCgkZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgX2hhbmRsZVNwYWNlKCRldmVudDogYW55KTogdm9pZDtcbiAgICBfaGFuZGxlRW50ZXIoJGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIF9oYW5kbGVUYWIoJGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIF9oYW5kbGVCYWNrc3BhY2UoKTogdm9pZDtcbn1cbiJdfQ==
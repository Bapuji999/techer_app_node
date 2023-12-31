import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { ListItem, IDropdownSettings } from "./multiselect.model";
import * as ɵngcc0 from '@angular/core';
export declare const DROPDOWN_CONTROL_VALUE_ACCESSOR: any;
export declare class MultiSelectComponent implements ControlValueAccessor {
    private cdr;
    _settings: IDropdownSettings;
    _data: Array<ListItem>;
    selectedItems: Array<ListItem>;
    isDropdownOpen: boolean;
    _placeholder: string;
    private _sourceDataType;
    private _sourceDataFields;
    filter: ListItem;
    defaultSettings: IDropdownSettings;
    placeholder: string;
    disabled: boolean;
    settings: IDropdownSettings;
    data: Array<any>;
    onFilterChange: EventEmitter<ListItem>;
    onDropDownClose: EventEmitter<ListItem>;
    onSelect: EventEmitter<ListItem>;
    onDeSelect: EventEmitter<ListItem>;
    onSelectAll: EventEmitter<Array<ListItem>>;
    onDeSelectAll: EventEmitter<Array<ListItem>>;
    private onTouchedCallback;
    private onChangeCallback;
    onFilterTextChange($event: any): void;
    constructor(cdr: ChangeDetectorRef);
    onItemClick($event: any, item: ListItem): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouched(): void;
    trackByFn(index: any, item: any): any;
    isSelected(clickedItem: ListItem): boolean;
    isLimitSelectionReached(): boolean;
    isAllItemsSelected(): boolean;
    showButton(): boolean;
    itemShowRemaining(): number;
    addSelected(item: ListItem): void;
    removeSelected(itemSel: ListItem): void;
    emittedValue(val: any): any;
    objectify(val: ListItem): {};
    toggleDropdown(evt: any): void;
    closeDropdown(): void;
    toggleSelectAll(): boolean;
    getFields(inputData: any): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiSelectComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MultiSelectComponent, "ng-multiselect-dropdown", never, {
    "disabled": "disabled";
    "placeholder": "placeholder";
    "settings": "settings";
    "data": "data";
}, {
    "onFilterChange": "onFilterChange";
    "onDropDownClose": "onDropDownClose";
    "onSelect": "onSelect";
    "onDeSelect": "onDeSelect";
    "onSelectAll": "onSelectAll";
    "onDeSelectAll": "onDeSelectAll";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm11bHRpc2VsZWN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IExpc3RJdGVtLCBJRHJvcGRvd25TZXR0aW5ncyB9IGZyb20gXCIuL211bHRpc2VsZWN0Lm1vZGVsXCI7XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IERST1BET1dOX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueTtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBwcml2YXRlIGNkcjtcclxuICAgIF9zZXR0aW5nczogSURyb3Bkb3duU2V0dGluZ3M7XHJcbiAgICBfZGF0YTogQXJyYXk8TGlzdEl0ZW0+O1xyXG4gICAgc2VsZWN0ZWRJdGVtczogQXJyYXk8TGlzdEl0ZW0+O1xyXG4gICAgaXNEcm9wZG93bk9wZW46IGJvb2xlYW47XHJcbiAgICBfcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3NvdXJjZURhdGFUeXBlO1xyXG4gICAgcHJpdmF0ZSBfc291cmNlRGF0YUZpZWxkcztcclxuICAgIGZpbHRlcjogTGlzdEl0ZW07XHJcbiAgICBkZWZhdWx0U2V0dGluZ3M6IElEcm9wZG93blNldHRpbmdzO1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgc2V0dGluZ3M6IElEcm9wZG93blNldHRpbmdzO1xyXG4gICAgZGF0YTogQXJyYXk8YW55PjtcclxuICAgIG9uRmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+O1xyXG4gICAgb25Ecm9wRG93bkNsb3NlOiBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+O1xyXG4gICAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT47XHJcbiAgICBvbkRlU2VsZWN0OiBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+O1xyXG4gICAgb25TZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbT4+O1xyXG4gICAgb25EZVNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtPj47XHJcbiAgICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrO1xyXG4gICAgb25GaWx0ZXJUZXh0Q2hhbmdlKCRldmVudDogYW55KTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgb25JdGVtQ2xpY2soJGV2ZW50OiBhbnksIGl0ZW06IExpc3RJdGVtKTogYm9vbGVhbjtcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XHJcbiAgICBvblRvdWNoZWQoKTogdm9pZDtcclxuICAgIHRyYWNrQnlGbihpbmRleDogYW55LCBpdGVtOiBhbnkpOiBhbnk7XHJcbiAgICBpc1NlbGVjdGVkKGNsaWNrZWRJdGVtOiBMaXN0SXRlbSk6IGJvb2xlYW47XHJcbiAgICBpc0xpbWl0U2VsZWN0aW9uUmVhY2hlZCgpOiBib29sZWFuO1xyXG4gICAgaXNBbGxJdGVtc1NlbGVjdGVkKCk6IGJvb2xlYW47XHJcbiAgICBzaG93QnV0dG9uKCk6IGJvb2xlYW47XHJcbiAgICBpdGVtU2hvd1JlbWFpbmluZygpOiBudW1iZXI7XHJcbiAgICBhZGRTZWxlY3RlZChpdGVtOiBMaXN0SXRlbSk6IHZvaWQ7XHJcbiAgICByZW1vdmVTZWxlY3RlZChpdGVtU2VsOiBMaXN0SXRlbSk6IHZvaWQ7XHJcbiAgICBlbWl0dGVkVmFsdWUodmFsOiBhbnkpOiBhbnk7XHJcbiAgICBvYmplY3RpZnkodmFsOiBMaXN0SXRlbSk6IHt9O1xyXG4gICAgdG9nZ2xlRHJvcGRvd24oZXZ0OiBhbnkpOiB2b2lkO1xyXG4gICAgY2xvc2VEcm9wZG93bigpOiB2b2lkO1xyXG4gICAgdG9nZ2xlU2VsZWN0QWxsKCk6IGJvb2xlYW47XHJcbiAgICBnZXRGaWVsZHMoaW5wdXREYXRhOiBhbnkpOiBhbnlbXTtcclxufVxyXG4iXX0=
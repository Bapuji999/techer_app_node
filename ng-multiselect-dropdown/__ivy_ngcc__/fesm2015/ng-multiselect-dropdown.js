import { __decorate } from 'tslib';
import { forwardRef, EventEmitter, ChangeDetectorRef, Input, Output, HostListener, Component, ChangeDetectionStrategy, ElementRef, Directive, Pipe, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function MultiSelectComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r10._placeholder);
} }
function MultiSelectComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "a", 15);
    ɵngcc0.ɵɵlistener("click", function MultiSelectComponent_span_4_Template_a_click_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const item_r17 = ctx.$implicit; const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onItemClick($event, item_r17); });
    ɵngcc0.ɵɵtext(3, "x");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const k_r18 = ctx.index;
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("hidden", k_r18 > ctx_r11._settings.itemsShowLimit - 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r17.text, " ");
} }
function MultiSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("+", ctx_r12.itemShowRemaining(), "");
} }
function MultiSelectComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 17);
    ɵngcc0.ɵɵlistener("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.toggleSelectAll(); });
    ɵngcc0.ɵɵelement(1, "input", 18);
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("checked", ctx_r13.isAllItemsSelected())("disabled", ctx_r13.disabled || ctx_r13.isLimitSelectionReached());
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(!ctx_r13.isAllItemsSelected() ? ctx_r13._settings.selectAllText : ctx_r13._settings.unSelectAllText);
} }
function MultiSelectComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 19);
    ɵngcc0.ɵɵelementStart(1, "input", 20);
    ɵngcc0.ɵɵlistener("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.filter.text = $event; })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onFilterTextChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("readOnly", ctx_r14.disabled)("placeholder", ctx_r14._settings.searchPlaceholderText)("ngModel", ctx_r14.filter.text);
} }
function MultiSelectComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 21);
    ɵngcc0.ɵɵlistener("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const item_r26 = ctx.$implicit; const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.onItemClick($event, item_r26); });
    ɵngcc0.ɵɵelement(1, "input", 22);
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r15 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("checked", ctx_r15.isSelected(item_r26))("disabled", ctx_r15.disabled || ctx_r15.isLimitSelectionReached() && !ctx_r15.isSelected(item_r26) || item_r26.isDisabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(item_r26.text);
} }
function MultiSelectComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 23);
    ɵngcc0.ɵɵelementStart(1, "h5");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r16._settings.noDataAvailablePlaceholderText);
} }
class ListItem {
    constructor(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
}

const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelectComponent),
    multi: true
};
const noop = () => { };
const ɵ0 = noop;
let MultiSelectComponent = class MultiSelectComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
        };
        this.disabled = false;
        this.onFilterChange = new EventEmitter();
        this.onDropDownClose = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onDeSelect = new EventEmitter();
        this.onSelectAll = new EventEmitter();
        this.onDeSelectAll = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    set placeholder(value) {
        if (value) {
            this._placeholder = value;
        }
        else {
            this._placeholder = "Select";
        }
    }
    set settings(value) {
        if (value) {
            this._settings = Object.assign(this.defaultSettings, value);
        }
        else {
            this._settings = Object.assign(this.defaultSettings);
        }
    }
    set data(value) {
        if (!value) {
            this._data = [];
        }
        else {
            const firstItem = value[0];
            this._sourceDataType = typeof firstItem;
            this._sourceDataFields = this.getFields(firstItem);
            this._data = value.map((item) => typeof item === "string" || typeof item === "number"
                ? new ListItem(item)
                : new ListItem({
                    id: item[this._settings.idField],
                    text: item[this._settings.textField],
                    isDisabled: item[this._settings.disabledField]
                }));
        }
    }
    onFilterTextChange($event) {
        this.onFilterChange.emit($event);
    }
    onItemClick($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        const found = this.isSelected(item);
        const allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    }
    writeValue(value) {
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        const firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField]
                                })
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                const _data = value.map((item) => typeof item === "string" || typeof item === "number"
                    ? new ListItem(item)
                    : new ListItem({
                        id: item[this._settings.idField],
                        text: item[this._settings.textField],
                        isDisabled: item[this._settings.disabledField]
                    }));
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    // Set touched on blur
    onTouched() {
        this.closeDropdown();
        this.onTouchedCallback();
    }
    trackByFn(index, item) {
        return item.id;
    }
    isSelected(clickedItem) {
        let found = false;
        this.selectedItems.forEach(item => {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    }
    isLimitSelectionReached() {
        return this._settings.limitSelection === this.selectedItems.length;
    }
    isAllItemsSelected() {
        // get disabld item count
        const itemDisabledCount = this._data.filter(item => item.isDisabled).length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
            return false;
        }
        return this._data.length === this.selectedItems.length + itemDisabledCount;
    }
    showButton() {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    }
    itemShowRemaining() {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    }
    addSelected(item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    }
    removeSelected(itemSel) {
        this.selectedItems.forEach(item => {
            if (itemSel.id === item.id) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    }
    emittedValue(val) {
        const selected = [];
        if (Array.isArray(val)) {
            val.map(item => {
                selected.push(this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    }
    objectify(val) {
        if (this._sourceDataType === 'object') {
            const obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === 'number') {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    }
    toggleDropdown(evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    }
    closeDropdown() {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    }
    toggleSelectAll() {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this._data.filter(item => !item.isDisabled).slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    }
    getFields(inputData) {
        const fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (const prop in inputData) {
            fields.push(prop);
        }
        return fields;
    }
};
MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) { return new (t || MultiSelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MultiSelectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MultiSelectComponent, selectors: [["ng-multiselect-dropdown"]], hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function MultiSelectComponent_blur_HostBindingHandler() { return ctx.onTouched(); });
    } }, inputs: { disabled: "disabled", placeholder: "placeholder", settings: "settings", data: "data" }, outputs: { onFilterChange: "onFilterChange", onDropDownClose: "onDropDownClose", onSelect: "onSelect", onDeSelect: "onDeSelect", onSelectAll: "onSelectAll", onDeSelectAll: "onDeSelectAll" }, features: [ɵngcc0.ɵɵProvidersFeature([DROPDOWN_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 17, consts: [["tabindex", "=0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px"], ["style", "padding-right: 6px;", 4, "ngIf"], [3, "ngClass"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-item", 3, "checked", "disabled"], [1, "no-data"]], template: function MultiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("blur", function MultiSelectComponent_Template_div_blur_0_listener() { return ctx.onTouched(); })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() { return ctx.closeDropdown(); });
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "span", 1);
        ɵngcc0.ɵɵlistener("click", function MultiSelectComponent_Template_span_click_2_listener($event) { return ctx.toggleDropdown($event); });
        ɵngcc0.ɵɵtemplate(3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵtemplate(4, MultiSelectComponent_span_4_Template, 4, 2, "span", 3);
        ɵngcc0.ɵɵelementStart(5, "span", 4);
        ɵngcc0.ɵɵtemplate(6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
        ɵngcc0.ɵɵelement(7, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵelementStart(9, "ul", 8);
        ɵngcc0.ɵɵtemplate(10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);
        ɵngcc0.ɵɵtemplate(11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "ul", 11);
        ɵngcc0.ɵɵtemplate(13, MultiSelectComponent_li_13_Template, 4, 3, "li", 12);
        ɵngcc0.ɵɵpipe(14, "multiSelectFilter");
        ɵngcc0.ɵɵtemplate(15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.selectedItems.length == 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.itemShowRemaining() > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx._settings.defaultOpen ? "dropdown-up" : "dropdown-down");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("hidden", !ctx._settings.defaultOpen);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === 0 - 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("max-height", ctx._settings.maxHeight + "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind2(14, 14, ctx._data, ctx.filter));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
    } }, directives: function () { return [ClickOutsideDirective, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel]; }, pipes: function () { return [ListFilterPipe]; }, styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%]{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"], changeDetection: 0 });
MultiSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], MultiSelectComponent.prototype, "placeholder", null);
__decorate([
    Input()
], MultiSelectComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "settings", null);
__decorate([
    Input()
], MultiSelectComponent.prototype, "data", null);
__decorate([
    Output("onFilterChange")
], MultiSelectComponent.prototype, "onFilterChange", void 0);
__decorate([
    Output("onDropDownClose")
], MultiSelectComponent.prototype, "onDropDownClose", void 0);
__decorate([
    Output("onSelect")
], MultiSelectComponent.prototype, "onSelect", void 0);
__decorate([
    Output("onDeSelect")
], MultiSelectComponent.prototype, "onDeSelect", void 0);
__decorate([
    Output("onSelectAll")
], MultiSelectComponent.prototype, "onSelectAll", void 0);
__decorate([
    Output("onDeSelectAll")
], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
__decorate([
    HostListener("blur")
], MultiSelectComponent.prototype, "onTouched", null);

let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new EventEmitter();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
};
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ClickOutsideDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, ɵngcc0.ɵɵresolveDocument);
    } }, outputs: { clickOutside: "clickOutside" } });
ClickOutsideDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Output()
], ClickOutsideDirective.prototype, "clickOutside", void 0);
__decorate([
    HostListener('document:click', ['$event', '$event.target'])
], ClickOutsideDirective.prototype, "onClick", null);

let ListFilterPipe = class ListFilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item) => this.applyFilter(item, filter));
    }
    applyFilter(item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    }
};
ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) { return new (t || ListFilterPipe)(); };
ListFilterPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "multiSelectFilter", type: ListFilterPipe, pure: false });

var NgMultiSelectDropDownModule_1;
let NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = class NgMultiSelectDropDownModule {
    static forRoot() {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    }
};
NgMultiSelectDropDownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgMultiSelectDropDownModule });
NgMultiSelectDropDownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgMultiSelectDropDownModule_Factory(t) { return new (t || NgMultiSelectDropDownModule)(); }, imports: [[CommonModule, FormsModule]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MultiSelectComponent, [{
        type: Component,
        args: [{
                selector: "ng-multiselect-dropdown",
                template: "<div tabindex=\"=0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\r\n  <div [class.disabled]=\"disabled\">\r\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\r\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\r\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\r\n        {{item.text}}\r\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\r\n      </span>\r\n      <span style=\"float:right !important;padding-right:4px\">\r\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\r\n        <span [ngClass]=\"_settings.defaultOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\r\n      </span>\r\n    </span>\r\n  </div>\r\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\r\n    <ul class=\"item1\">\r\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\r\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\r\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\r\n      </li>\r\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\r\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\r\n      </li>\r\n    </ul>\r\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\r\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\r\n        <input type=\"checkbox\" aria-label=\"multiselect-item\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\r\n        <div>{{item.text}}</div>\r\n      </li>\r\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\r\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n",
                providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], onFilterChange: [{
            type: Output,
            args: ["onFilterChange"]
        }], onDropDownClose: [{
            type: Output,
            args: ["onDropDownClose"]
        }], onSelect: [{
            type: Output,
            args: ["onSelect"]
        }], onDeSelect: [{
            type: Output,
            args: ["onDeSelect"]
        }], onSelectAll: [{
            type: Output,
            args: ["onSelectAll"]
        }], onDeSelectAll: [{
            type: Output,
            args: ["onDeSelectAll"]
        }], placeholder: [{
            type: Input
        }], settings: [{
            type: Input
        }], data: [{
            type: Input
        }], onTouched: [{
            type: HostListener,
            args: ["blur"]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { clickOutside: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListFilterPipe, [{
        type: Pipe,
        args: [{
                name: 'multiSelectFilter',
                pure: false
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgMultiSelectDropDownModule, { declarations: function () { return [MultiSelectComponent,
        ClickOutsideDirective,
        ListFilterPipe]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [MultiSelectComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgMultiSelectDropDownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                exports: [MultiSelectComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { MultiSelectComponent, NgMultiSelectDropDownModule, DROPDOWN_CONTROL_VALUE_ACCESSOR as ɵa, ClickOutsideDirective as ɵb, ListFilterPipe as ɵc };

//# sourceMappingURL=ng-multiselect-dropdown.js.map
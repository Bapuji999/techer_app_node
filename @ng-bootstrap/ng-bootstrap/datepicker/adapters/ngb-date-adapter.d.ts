import { NgbDateStruct } from '../ngb-date-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_DATE_ADAPTER_FACTORY(): NgbDateStructAdapter;
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */
export declare abstract class NgbDateAdapter<D> {
    /**
     * Converts a user-model date of type `D` to an `NgbDateStruct` for internal use.
     */
    abstract fromModel(value: D | null): NgbDateStruct | null;
    /**
     * Converts an internal `NgbDateStruct` date to a user-model date of type `D`.
     */
    abstract toModel(date: NgbDateStruct | null): D | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateAdapter<any>>;
}
export declare class NgbDateStructAdapter extends NgbDateAdapter<NgbDateStruct> {
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    fromModel(date: NgbDateStruct | null): NgbDateStruct | null;
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    toModel(date: NgbDateStruct | null): NgbDateStruct | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateStructAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateStructAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJuZ2ItZGF0ZS1hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTkdCX0RBVEVQSUNLRVJfREFURV9BREFQVEVSX0ZBQ1RPUlkoKTogTmdiRGF0ZVN0cnVjdEFkYXB0ZXI7XG4vKipcbiAqIEFuIGFic3RyYWN0IHNlcnZpY2UgdGhhdCBkb2VzIHRoZSBjb252ZXJzaW9uIGJldHdlZW4gdGhlIGludGVybmFsIGRhdGVwaWNrZXIgYE5nYkRhdGVTdHJ1Y3RgIG1vZGVsIGFuZFxuICogYW55IHByb3ZpZGVkIHVzZXIgZGF0ZSBtb2RlbCBgRGAsIGV4LiBhIHN0cmluZywgYSBuYXRpdmUgZGF0ZSwgZXRjLlxuICpcbiAqIFRoZSBhZGFwdGVyIGlzIHVzZWQgKipvbmx5KiogZm9yIGNvbnZlcnNpb24gd2hlbiBiaW5kaW5nIGRhdGVwaWNrZXIgdG8gYSBmb3JtIGNvbnRyb2wsXG4gKiBleC4gYFsobmdNb2RlbCldPVwidXNlckRhdGVNb2RlbFwiYC4gSGVyZSBgdXNlckRhdGVNb2RlbGAgY2FuIGJlIG9mIGFueSB0eXBlLlxuICpcbiAqIFRoZSBkZWZhdWx0IGRhdGVwaWNrZXIgaW1wbGVtZW50YXRpb24gYXNzdW1lcyB3ZSB1c2UgYE5nYkRhdGVTdHJ1Y3RgIGFzIGEgdXNlciBtb2RlbC5cbiAqXG4gKiBTZWUgdGhlIFtkYXRlIGZvcm1hdCBvdmVydmlld10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvb3ZlcnZpZXcjZGF0ZS1tb2RlbCkgZm9yIG1vcmUgZGV0YWlsc1xuICogYW5kIHRoZSBbY3VzdG9tIGFkYXB0ZXIgZGVtb10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvZXhhbXBsZXMjYWRhcHRlcikgZm9yIGFuIGV4YW1wbGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE5nYkRhdGVBZGFwdGVyPEQ+IHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHVzZXItbW9kZWwgZGF0ZSBvZiB0eXBlIGBEYCB0byBhbiBgTmdiRGF0ZVN0cnVjdGAgZm9yIGludGVybmFsIHVzZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBmcm9tTW9kZWwodmFsdWU6IEQgfCBudWxsKTogTmdiRGF0ZVN0cnVjdCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW4gaW50ZXJuYWwgYE5nYkRhdGVTdHJ1Y3RgIGRhdGUgdG8gYSB1c2VyLW1vZGVsIGRhdGUgb2YgdHlwZSBgRGAuXG4gICAgICovXG4gICAgYWJzdHJhY3QgdG9Nb2RlbChkYXRlOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCk6IEQgfCBudWxsO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZVN0cnVjdEFkYXB0ZXIgZXh0ZW5kcyBOZ2JEYXRlQWRhcHRlcjxOZ2JEYXRlU3RydWN0PiB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBOZ2JEYXRlU3RydWN0IHZhbHVlIGludG8gTmdiRGF0ZVN0cnVjdCB2YWx1ZVxuICAgICAqL1xuICAgIGZyb21Nb2RlbChkYXRlOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgTmdiRGF0ZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYkRhdGVTdHJ1Y3QgdmFsdWVcbiAgICAgKi9cbiAgICB0b01vZGVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogTmdiRGF0ZVN0cnVjdCB8IG51bGw7XG59XG4iXX0=
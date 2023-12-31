import { NgbTimeStruct } from './ngb-time-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_TIME_ADAPTER_FACTORY(): NgbTimeStructAdapter;
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */
export declare abstract class NgbTimeAdapter<T> {
    /**
     * Converts a user-model time of type `T` to an `NgbTimeStruct` for internal use.
     */
    abstract fromModel(value: T | null): NgbTimeStruct | null;
    /**
     * Converts an internal `NgbTimeStruct` time to a user-model time of type `T`.
     */
    abstract toModel(time: NgbTimeStruct | null): T | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimeAdapter<any>>;
}
export declare class NgbTimeStructAdapter extends NgbTimeAdapter<NgbTimeStruct> {
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    fromModel(time: NgbTimeStruct | null): NgbTimeStruct | null;
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    toModel(time: NgbTimeStruct | null): NgbTimeStruct | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimeStructAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbTimeStructAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLXRpbWUtYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJuZ2ItdGltZS1hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JUaW1lU3RydWN0IH0gZnJvbSAnLi9uZ2ItdGltZS1zdHJ1Y3QnO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTkdCX0RBVEVQSUNLRVJfVElNRV9BREFQVEVSX0ZBQ1RPUlkoKTogTmdiVGltZVN0cnVjdEFkYXB0ZXI7XG4vKipcbiAqIEFuIGFic3RyYWN0IHNlcnZpY2UgdGhhdCBkb2VzIHRoZSBjb252ZXJzaW9uIGJldHdlZW4gdGhlIGludGVybmFsIHRpbWVwaWNrZXIgYE5nYlRpbWVTdHJ1Y3RgIG1vZGVsIGFuZFxuICogYW55IHByb3ZpZGVkIHVzZXIgdGltZSBtb2RlbCBgVGAsIGV4LiBhIHN0cmluZywgYSBuYXRpdmUgZGF0ZSwgZXRjLlxuICpcbiAqIFRoZSBhZGFwdGVyIGlzIHVzZWQgKipvbmx5KiogZm9yIGNvbnZlcnNpb24gd2hlbiBiaW5kaW5nIHRpbWVwaWNrZXIgdG8gYSBmb3JtIGNvbnRyb2wsXG4gKiBleC4gYFsobmdNb2RlbCldPVwidXNlclRpbWVNb2RlbFwiYC4gSGVyZSBgdXNlclRpbWVNb2RlbGAgY2FuIGJlIG9mIGFueSB0eXBlLlxuICpcbiAqIFRoZSBkZWZhdWx0IHRpbWVwaWNrZXIgaW1wbGVtZW50YXRpb24gYXNzdW1lcyB3ZSB1c2UgYE5nYlRpbWVTdHJ1Y3RgIGFzIGEgdXNlciBtb2RlbC5cbiAqXG4gKiBTZWUgdGhlIFtjdXN0b20gdGltZSBhZGFwdGVyIGRlbW9dKCMvY29tcG9uZW50cy90aW1lcGlja2VyL2V4YW1wbGVzI2FkYXB0ZXIpIGZvciBhbiBleGFtcGxlLlxuICpcbiAqIEBzaW5jZSAyLjIuMFxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOZ2JUaW1lQWRhcHRlcjxUPiB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSB1c2VyLW1vZGVsIHRpbWUgb2YgdHlwZSBgVGAgdG8gYW4gYE5nYlRpbWVTdHJ1Y3RgIGZvciBpbnRlcm5hbCB1c2UuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZnJvbU1vZGVsKHZhbHVlOiBUIHwgbnVsbCk6IE5nYlRpbWVTdHJ1Y3QgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFuIGludGVybmFsIGBOZ2JUaW1lU3RydWN0YCB0aW1lIHRvIGEgdXNlci1tb2RlbCB0aW1lIG9mIHR5cGUgYFRgLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHRvTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCB8IG51bGwpOiBUIHwgbnVsbDtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRpbWVTdHJ1Y3RBZGFwdGVyIGV4dGVuZHMgTmdiVGltZUFkYXB0ZXI8TmdiVGltZVN0cnVjdD4ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgTmdiVGltZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYlRpbWVTdHJ1Y3QgdmFsdWVcbiAgICAgKi9cbiAgICBmcm9tTW9kZWwodGltZTogTmdiVGltZVN0cnVjdCB8IG51bGwpOiBOZ2JUaW1lU3RydWN0IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIE5nYlRpbWVTdHJ1Y3QgdmFsdWUgaW50byBOZ2JUaW1lU3RydWN0IHZhbHVlXG4gICAgICovXG4gICAgdG9Nb2RlbCh0aW1lOiBOZ2JUaW1lU3RydWN0IHwgbnVsbCk6IE5nYlRpbWVTdHJ1Y3QgfCBudWxsO1xufVxuIl19
import { NgbDateStruct } from './ngb-date-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY(): NgbDateISOParserFormatter;
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 */
export declare abstract class NgbDateParserFormatter {
    /**
     * Parses the given `string` to an `NgbDateStruct`.
     *
     * Implementations should try their best to provide a result, even
     * partial. They must return `null` if the value can't be parsed.
     */
    abstract parse(value: string): NgbDateStruct | null;
    /**
     * Formats the given `NgbDateStruct` to a `string`.
     *
     * Implementations should return an empty string if the given date is `null`,
     * and try their best to provide a partial result if the given date is incomplete or invalid.
     */
    abstract format(date: NgbDateStruct | null): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateParserFormatter>;
}
export declare class NgbDateISOParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct | null;
    format(date: NgbDateStruct | null): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateISOParserFormatter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateISOParserFormatter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtcGFyc2VyLWZvcm1hdHRlci5kLnRzIiwic291cmNlcyI6WyJuZ2ItZGF0ZS1wYXJzZXItZm9ybWF0dGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBOzs7Ozs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBOR0JfREFURVBJQ0tFUl9QQVJTRVJfRk9STUFUVEVSX0ZBQ1RPUlkoKTogTmdiRGF0ZUlTT1BhcnNlckZvcm1hdHRlcjtcbi8qKlxuICogQW4gYWJzdHJhY3Qgc2VydmljZSBmb3IgcGFyc2luZyBhbmQgZm9ybWF0dGluZyBkYXRlcyBmb3IgdGhlXG4gKiBbYE5nYklucHV0RGF0ZXBpY2tlcmBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNOZ2JJbnB1dERhdGVwaWNrZXIpIGRpcmVjdGl2ZS5cbiAqIENvbnZlcnRzIGJldHdlZW4gdGhlIGludGVybmFsIGBOZ2JEYXRlU3RydWN0YCBtb2RlbCBwcmVzZW50YXRpb24gYW5kIGEgYHN0cmluZ2AgdGhhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlXG4gKiBpbnB1dCBlbGVtZW50LlxuICpcbiAqIFdoZW4gdXNlciB0eXBlcyBzb21ldGhpbmcgaW4gdGhlIGlucHV0IHRoaXMgc2VydmljZSBhdHRlbXB0cyB0byBwYXJzZSBpdCBpbnRvIGEgYE5nYkRhdGVTdHJ1Y3RgIG9iamVjdC5cbiAqIEFuZCB2aWNlIHZlcnNhLCB3aGVuIHVzZXJzIHNlbGVjdHMgYSBkYXRlIGluIHRoZSBjYWxlbmRhciB3aXRoIHRoZSBtb3VzZSwgaXQgbXVzdCBiZSBkaXNwbGF5ZWQgYXMgYSBgc3RyaW5nYFxuICogaW4gdGhlIGlucHV0LlxuICpcbiAqIERlZmF1bHQgaW1wbGVtZW50YXRpb24gdXNlcyB0aGUgSVNPIDg2MDEgZm9ybWF0LCBidXQgeW91IGNhbiBwcm92aWRlIGFub3RoZXIgaW1wbGVtZW50YXRpb24gdmlhIERJXG4gKiB0byB1c2UgYW4gYWx0ZXJuYXRpdmUgc3RyaW5nIGZvcm1hdCBvciBhIGN1c3RvbSBwYXJzaW5nIGxvZ2ljLlxuICpcbiAqIFNlZSB0aGUgW2RhdGUgZm9ybWF0IG92ZXJ2aWV3XSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9vdmVydmlldyNkYXRlLW1vZGVsKSBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIHtcbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdpdmVuIGBzdHJpbmdgIHRvIGFuIGBOZ2JEYXRlU3RydWN0YC5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudGF0aW9ucyBzaG91bGQgdHJ5IHRoZWlyIGJlc3QgdG8gcHJvdmlkZSBhIHJlc3VsdCwgZXZlblxuICAgICAqIHBhcnRpYWwuIFRoZXkgbXVzdCByZXR1cm4gYG51bGxgIGlmIHRoZSB2YWx1ZSBjYW4ndCBiZSBwYXJzZWQuXG4gICAgICovXG4gICAgYWJzdHJhY3QgcGFyc2UodmFsdWU6IHN0cmluZyk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgdGhlIGdpdmVuIGBOZ2JEYXRlU3RydWN0YCB0byBhIGBzdHJpbmdgLlxuICAgICAqXG4gICAgICogSW1wbGVtZW50YXRpb25zIHNob3VsZCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBnaXZlbiBkYXRlIGlzIGBudWxsYCxcbiAgICAgKiBhbmQgdHJ5IHRoZWlyIGJlc3QgdG8gcHJvdmlkZSBhIHBhcnRpYWwgcmVzdWx0IGlmIHRoZSBnaXZlbiBkYXRlIGlzIGluY29tcGxldGUgb3IgaW52YWxpZC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBmb3JtYXQoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEYXRlSVNPUGFyc2VyRm9ybWF0dGVyIGV4dGVuZHMgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB7XG4gICAgcGFyc2UodmFsdWU6IHN0cmluZyk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsO1xuICAgIGZvcm1hdChkYXRlOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCk6IHN0cmluZztcbn1cbiJdfQ==
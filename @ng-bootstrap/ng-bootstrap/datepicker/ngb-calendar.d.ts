import { NgbDate } from './ngb-date';
import * as ɵngcc0 from '@angular/core';
export declare function fromJSDate(jsDate: Date): NgbDate;
export declare function toJSDate(date: NgbDate): Date;
export declare type NgbPeriod = 'y' | 'm' | 'd';
export declare function NGB_DATEPICKER_CALENDAR_FACTORY(): NgbCalendarGregorian;
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 */
export declare abstract class NgbCalendar {
    /**
     * Returns the number of days per week.
     */
    abstract getDaysPerWeek(): number;
    /**
     * Returns an array of months per year.
     *
     * With default calendar we use ISO 8601 and return [1, 2, ..., 12];
     */
    abstract getMonths(year?: number): number[];
    /**
     * Returns the number of weeks per month.
     */
    abstract getWeeksPerMonth(): number;
    /**
     * Returns the weekday number for a given day.
     *
     * With the default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
     */
    abstract getWeekday(date: NgbDate): number;
    /**
     * Adds a number of years, months or days to a given date.
     *
     * * `period` can be `y`, `m` or `d` and defaults to day.
     * * `number` defaults to 1.
     *
     * Always returns a new date.
     */
    abstract getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    /**
     * Subtracts a number of years, months or days from a given date.
     *
     * * `period` can be `y`, `m` or `d` and defaults to day.
     * * `number` defaults to 1.
     *
     * Always returns a new date.
     */
    abstract getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    /**
     * Returns the week number for a given week.
     */
    abstract getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    /**
     * Returns the today's date.
     */
    abstract getToday(): NgbDate;
    /**
     * Checks if a date is valid in the current calendar.
     */
    abstract isValid(date?: NgbDate | null): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendar>;
}
export declare class NgbCalendarGregorian extends NgbCalendar {
    getDaysPerWeek(): number;
    getMonths(): number[];
    getWeeksPerMonth(): number;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    getToday(): NgbDate;
    isValid(date?: NgbDate | null): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendarGregorian>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendarGregorian>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLmQudHMiLCJzb3VyY2VzIjpbIm5nYi1jYWxlbmRhci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQTs7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4vbmdiLWRhdGUnO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZnJvbUpTRGF0ZShqc0RhdGU6IERhdGUpOiBOZ2JEYXRlO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gdG9KU0RhdGUoZGF0ZTogTmdiRGF0ZSk6IERhdGU7XG5leHBvcnQgZGVjbGFyZSB0eXBlIE5nYlBlcmlvZCA9ICd5JyB8ICdtJyB8ICdkJztcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSX0NBTEVOREFSX0ZBQ1RPUlkoKTogTmdiQ2FsZW5kYXJHcmVnb3JpYW47XG4vKipcbiAqIEEgc2VydmljZSB0aGF0IHJlcHJlc2VudHMgdGhlIGNhbGVuZGFyIHVzZWQgYnkgdGhlIGRhdGVwaWNrZXIuXG4gKlxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gdXNlcyB0aGUgR3JlZ29yaWFuIGNhbGVuZGFyLiBZb3UgY2FuIGluamVjdCBpdCBpbiB5b3VyIG93blxuICogaW1wbGVtZW50YXRpb25zIGlmIG5lY2Vzc2FyeSB0byBzaW1wbGlmeSBgTmdiRGF0ZWAgY2FsY3VsYXRpb25zLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOZ2JDYWxlbmRhciB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgcGVyIHdlZWsuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0RGF5c1BlcldlZWsoKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgbW9udGhzIHBlciB5ZWFyLlxuICAgICAqXG4gICAgICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMSBhbmQgcmV0dXJuIFsxLCAyLCAuLi4sIDEyXTtcbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRNb250aHMoeWVhcj86IG51bWJlcik6IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3ZWVrcyBwZXIgbW9udGguXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0V2Vla3NQZXJNb250aCgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2Vla2RheSBudW1iZXIgZm9yIGEgZ2l2ZW4gZGF5LlxuICAgICAqXG4gICAgICogV2l0aCB0aGUgZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICd3ZWVrZGF5JyBpcyAxPU1vbiAuLi4gNz1TdW5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRXZWVrZGF5KGRhdGU6IE5nYkRhdGUpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIG51bWJlciBvZiB5ZWFycywgbW9udGhzIG9yIGRheXMgdG8gYSBnaXZlbiBkYXRlLlxuICAgICAqXG4gICAgICogKiBgcGVyaW9kYCBjYW4gYmUgYHlgLCBgbWAgb3IgYGRgIGFuZCBkZWZhdWx0cyB0byBkYXkuXG4gICAgICogKiBgbnVtYmVyYCBkZWZhdWx0cyB0byAxLlxuICAgICAqXG4gICAgICogQWx3YXlzIHJldHVybnMgYSBuZXcgZGF0ZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXROZXh0KGRhdGU6IE5nYkRhdGUsIHBlcmlvZD86IE5nYlBlcmlvZCwgbnVtYmVyPzogbnVtYmVyKTogTmdiRGF0ZTtcbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgYSBudW1iZXIgb2YgeWVhcnMsIG1vbnRocyBvciBkYXlzIGZyb20gYSBnaXZlbiBkYXRlLlxuICAgICAqXG4gICAgICogKiBgcGVyaW9kYCBjYW4gYmUgYHlgLCBgbWAgb3IgYGRgIGFuZCBkZWZhdWx0cyB0byBkYXkuXG4gICAgICogKiBgbnVtYmVyYCBkZWZhdWx0cyB0byAxLlxuICAgICAqXG4gICAgICogQWx3YXlzIHJldHVybnMgYSBuZXcgZGF0ZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRQcmV2KGRhdGU6IE5nYkRhdGUsIHBlcmlvZD86IE5nYlBlcmlvZCwgbnVtYmVyPzogbnVtYmVyKTogTmdiRGF0ZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3ZWVrIG51bWJlciBmb3IgYSBnaXZlbiB3ZWVrLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldFdlZWtOdW1iZXIod2VlazogcmVhZG9ubHkgTmdiRGF0ZVtdLCBmaXJzdERheU9mV2VlazogbnVtYmVyKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRvZGF5J3MgZGF0ZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRUb2RheSgpOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGRhdGUgaXMgdmFsaWQgaW4gdGhlIGN1cnJlbnQgY2FsZW5kYXIuXG4gICAgICovXG4gICAgYWJzdHJhY3QgaXNWYWxpZChkYXRlPzogTmdiRGF0ZSB8IG51bGwpOiBib29sZWFuO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiQ2FsZW5kYXJHcmVnb3JpYW4gZXh0ZW5kcyBOZ2JDYWxlbmRhciB7XG4gICAgZ2V0RGF5c1BlcldlZWsoKTogbnVtYmVyO1xuICAgIGdldE1vbnRocygpOiBudW1iZXJbXTtcbiAgICBnZXRXZWVrc1Blck1vbnRoKCk6IG51bWJlcjtcbiAgICBnZXROZXh0KGRhdGU6IE5nYkRhdGUsIHBlcmlvZD86IE5nYlBlcmlvZCwgbnVtYmVyPzogbnVtYmVyKTogTmdiRGF0ZTtcbiAgICBnZXRQcmV2KGRhdGU6IE5nYkRhdGUsIHBlcmlvZD86IE5nYlBlcmlvZCwgbnVtYmVyPzogbnVtYmVyKTogTmdiRGF0ZTtcbiAgICBnZXRXZWVrZGF5KGRhdGU6IE5nYkRhdGUpOiBudW1iZXI7XG4gICAgZ2V0V2Vla051bWJlcih3ZWVrOiByZWFkb25seSBOZ2JEYXRlW10sIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIpOiBudW1iZXI7XG4gICAgZ2V0VG9kYXkoKTogTmdiRGF0ZTtcbiAgICBpc1ZhbGlkKGRhdGU/OiBOZ2JEYXRlIHwgbnVsbCk6IGJvb2xlYW47XG59XG4iXX0=
import { NgbDate } from '../ngb-date';
import { NgbPeriod, NgbCalendar } from '../ngb-calendar';
import * as ɵngcc0 from '@angular/core';
export declare abstract class NgbCalendarHijri extends NgbCalendar {
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    abstract getDaysPerMonth(month: number, year: number): number;
    /**
     * Returns the equivalent Hijri date value for a give input Gregorian date.
     * `gDate` is s JS Date to be converted to Hijri.
     */
    abstract fromGregorian(gDate: Date): NgbDate;
    /**
     * Converts the current Hijri date to Gregorian.
     */
    abstract toGregorian(hDate: NgbDate): Date;
    getDaysPerWeek(): number;
    getMonths(): number[];
    getWeeksPerMonth(): number;
    getNext(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getPrev(date: NgbDate, period?: NgbPeriod, number?: number): NgbDate;
    getWeekday(date: NgbDate): number;
    getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number;
    getToday(): NgbDate;
    isValid(date?: NgbDate | null): boolean;
    private _setDay;
    private _setMonth;
    private _setYear;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCalendarHijri>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbCalendarHijri>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWhpanJpLmQudHMiLCJzb3VyY2VzIjpbIm5nYi1jYWxlbmRhci1oaWpyaS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4uL25nYi1kYXRlJztcbmltcG9ydCB7IE5nYlBlcmlvZCwgTmdiQ2FsZW5kYXIgfSBmcm9tICcuLi9uZ2ItY2FsZW5kYXInO1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTmdiQ2FsZW5kYXJIaWpyaSBleHRlbmRzIE5nYkNhbGVuZGFyIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHNwZWNpZmljIEhpanJpIG1vbnRoLlxuICAgICAqIGBtb250aGAgaXMgMSBmb3IgTXVoYXJyYW0sIDIgZm9yIFNhZmFyLCBldGMuXG4gICAgICogYHllYXJgIGlzIGFueSBIaWpyaSB5ZWFyLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldERheXNQZXJNb250aChtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZXF1aXZhbGVudCBIaWpyaSBkYXRlIHZhbHVlIGZvciBhIGdpdmUgaW5wdXQgR3JlZ29yaWFuIGRhdGUuXG4gICAgICogYGdEYXRlYCBpcyBzIEpTIERhdGUgdG8gYmUgY29udmVydGVkIHRvIEhpanJpLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGZyb21HcmVnb3JpYW4oZ0RhdGU6IERhdGUpOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSBjdXJyZW50IEhpanJpIGRhdGUgdG8gR3JlZ29yaWFuLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHRvR3JlZ29yaWFuKGhEYXRlOiBOZ2JEYXRlKTogRGF0ZTtcbiAgICBnZXREYXlzUGVyV2VlaygpOiBudW1iZXI7XG4gICAgZ2V0TW9udGhzKCk6IG51bWJlcltdO1xuICAgIGdldFdlZWtzUGVyTW9udGgoKTogbnVtYmVyO1xuICAgIGdldE5leHQoZGF0ZTogTmdiRGF0ZSwgcGVyaW9kPzogTmdiUGVyaW9kLCBudW1iZXI/OiBudW1iZXIpOiBOZ2JEYXRlO1xuICAgIGdldFByZXYoZGF0ZTogTmdiRGF0ZSwgcGVyaW9kPzogTmdiUGVyaW9kLCBudW1iZXI/OiBudW1iZXIpOiBOZ2JEYXRlO1xuICAgIGdldFdlZWtkYXkoZGF0ZTogTmdiRGF0ZSk6IG51bWJlcjtcbiAgICBnZXRXZWVrTnVtYmVyKHdlZWs6IHJlYWRvbmx5IE5nYkRhdGVbXSwgZmlyc3REYXlPZldlZWs6IG51bWJlcik6IG51bWJlcjtcbiAgICBnZXRUb2RheSgpOiBOZ2JEYXRlO1xuICAgIGlzVmFsaWQoZGF0ZT86IE5nYkRhdGUgfCBudWxsKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zZXREYXk7XG4gICAgcHJpdmF0ZSBfc2V0TW9udGg7XG4gICAgcHJpdmF0ZSBfc2V0WWVhcjtcbn1cbiJdfQ==
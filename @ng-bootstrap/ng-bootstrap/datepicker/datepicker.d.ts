import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDatepickerService } from './datepicker-service';
import { DatepickerViewModel, NavigationEvent } from './datepicker-view-model';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgbDatepickerConfig } from './datepicker-config';
import { NgbDateAdapter } from './adapters/ngb-date-adapter';
import { NgbDateStruct } from './ngb-date-struct';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as ɵngcc0 from '@angular/core';
export declare const NGB_DATEPICKER_VALUE_ACCESSOR: {
    provide: import("@angular/core").InjectionToken<ControlValueAccessor>;
    useExisting: import("@angular/core").Type<any>;
    multi: boolean;
};
/**
 * An event emitted right before the navigation happens and the month displayed by the datepicker changes.
 */
export interface NgbDatepickerNavigateEvent {
    /**
     * The currently displayed month.
     */
    current: {
        year: number;
        month: number;
    } | null;
    /**
     * The month we're navigating to.
     */
    next: {
        year: number;
        month: number;
    };
    /**
     * Calling this function will prevent navigation from happening.
     *
     * @since 4.1.0
     */
    preventDefault: () => void;
}
/**
 * An interface that represents the readonly public state of the datepicker.
 *
 * Accessible via the `datepicker.state` getter
 *
 * @since 5.2.0
 */
export interface NgbDatepickerState {
    /**
     * The earliest date that can be displayed or selected
     */
    readonly minDate: NgbDate | null;
    /**
     * The latest date that can be displayed or selected
     */
    readonly maxDate: NgbDate | null;
    /**
     * The first visible date of currently displayed months
     */
    readonly firstDate: NgbDate;
    /**
     * The last visible date of currently displayed months
     */
    readonly lastDate: NgbDate;
    /**
     * The date currently focused by the datepicker
     */
    readonly focusedDate: NgbDate;
    /**
     * First dates of months currently displayed by the datepicker
     *
     * @since 5.3.0
     */
    readonly months: NgbDate[];
}
/**
 * A directive that marks the content template that customizes the way datepicker months are displayed
 *
 * @since 5.3.0
 */
export declare class NgbDatepickerContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerContent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDatepickerContent, "ng-template[ngbDatepickerContent]", never, {}, {}, never>;
}
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
export declare class NgbDatepicker implements OnDestroy, OnChanges, OnInit, ControlValueAccessor {
    private _service;
    private _calendar;
    i18n: NgbDatepickerI18n;
    private _elementRef;
    private _ngbDateAdapter;
    private _ngZone;
    static ngAcceptInputType_autoClose: boolean | string;
    static ngAcceptInputType_navigation: string;
    static ngAcceptInputType_outsideDays: string;
    model: DatepickerViewModel;
    private _defaultDayTemplate;
    private _contentEl;
    contentTemplate: NgbDatepickerContent;
    private _controlValue;
    private _destroyed$;
    private _publicState;
    /**
     * The reference to a custom template for the day.
     *
     * Allows to completely override the way a day 'cell' in the calendar is displayed.
     *
     * See [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext) for the data you get inside.
     */
    dayTemplate: TemplateRef<DayTemplateContext>;
    /**
     * The callback to pass any arbitrary data to the template cell via the
     * [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext)'s `data` parameter.
     *
     * `current` is the month that is currently displayed by the datepicker.
     *
     * @since 3.3.0
     */
    dayTemplateData: (date: NgbDate, current?: {
        year: number;
        month: number;
    }) => any;
    /**
     * The number of months to display.
     */
    displayMonths: number;
    /**
     * The first day of the week.
     *
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
     */
    firstDayOfWeek: number;
    /**
     * The reference to the custom template for the datepicker footer.
     *
     * @since 3.3.0
     */
    footerTemplate: TemplateRef<any>;
    /**
     * The callback to mark some dates as disabled.
     *
     * It is called for each new date when navigating to a different month.
     *
     * `current` is the month that is currently displayed by the datepicker.
     */
    markDisabled: (date: NgbDate, current?: {
        year: number;
        month: number;
    }) => boolean;
    /**
     * The latest date that can be displayed or selected.
     *
     * If not provided, 'year' select box will display 10 years after the current month.
     */
    maxDate: NgbDateStruct;
    /**
     * The earliest date that can be displayed or selected.
     *
     * If not provided, 'year' select box will display 10 years before the current month.
     */
    minDate: NgbDateStruct;
    /**
     * Navigation type.
     *
     * * `"select"` - select boxes for month and navigation arrows
     * * `"arrows"` - only navigation arrows
     * * `"none"` - no navigation visible at all
     */
    navigation: 'select' | 'arrows' | 'none';
    /**
     * The way of displaying days that don't belong to the current month.
     *
     * * `"visible"` - days are visible
     * * `"hidden"` - days are hidden, white space preserved
     * * `"collapsed"` - days are collapsed, so the datepicker height might change between months
     *
     * For the 2+ months view, days in between months are never shown.
     */
    outsideDays: 'visible' | 'collapsed' | 'hidden';
    /**
     * If `true`, weekdays will be displayed.
     */
    showWeekdays: boolean;
    /**
     * If `true`, week numbers will be displayed.
     */
    showWeekNumbers: boolean;
    /**
     * The date to open calendar with.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date is provided, calendar will open with current month.
     *
     * You could use `navigateTo(date)` method as an alternative.
     */
    startDate: {
        year: number;
        month: number;
        day?: number;
    };
    /**
     * An event emitted right before the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */
    navigate: EventEmitter<NgbDatepickerNavigateEvent>;
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @since 5.2.0
     */
    dateSelect: EventEmitter<NgbDate>;
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @deprecated 6.0.0 Please use 'dateSelect' output instead due to collision with native
     * 'select' event.
     */
    select: EventEmitter<NgbDate>;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_service: NgbDatepickerService, _calendar: NgbCalendar, i18n: NgbDatepickerI18n, config: NgbDatepickerConfig, cd: ChangeDetectorRef, _elementRef: ElementRef<HTMLElement>, _ngbDateAdapter: NgbDateAdapter<any>, _ngZone: NgZone);
    /**
     *  Returns the readonly public state of the datepicker
     *
     * @since 5.2.0
     */
    get state(): NgbDatepickerState;
    /**
     *  Returns the calendar service used in the specific datepicker instance.
     *
     *  @since 5.3.0
     */
    get calendar(): NgbCalendar;
    /**
     *  Focuses on given date.
     */
    focusDate(date?: NgbDateStruct | null): void;
    /**
     *  Selects focused date.
     */
    focusSelect(): void;
    focus(): void;
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    navigateTo(date?: {
        year: number;
        month: number;
        day?: number;
    }): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onDateSelect(date: NgbDate): void;
    onNavigateDateSelect(date: NgbDate): void;
    onNavigateEvent(event: NavigationEvent): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepicker>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbDatepicker, "ngb-datepicker", ["ngbDatepicker"], {
    "dayTemplate": "dayTemplate";
    "dayTemplateData": "dayTemplateData";
    "displayMonths": "displayMonths";
    "firstDayOfWeek": "firstDayOfWeek";
    "footerTemplate": "footerTemplate";
    "markDisabled": "markDisabled";
    "maxDate": "maxDate";
    "minDate": "minDate";
    "navigation": "navigation";
    "outsideDays": "outsideDays";
    "showWeekdays": "showWeekdays";
    "showWeekNumbers": "showWeekNumbers";
    "startDate": "startDate";
}, {
    "navigate": "navigate";
    "dateSelect": "dateSelect";
    "select": "select";
}, ["contentTemplate"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kLnRzIiwic291cmNlcyI6WyJkYXRlcGlja2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ01BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JDYWxlbmRhciB9IGZyb20gJy4vbmdiLWNhbGVuZGFyJztcbmltcG9ydCB7IE5nYkRhdGUgfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlcGlja2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlclZpZXdNb2RlbCwgTmF2aWdhdGlvbkV2ZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgRGF5VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi9kYXRlcGlja2VyLWRheS10ZW1wbGF0ZS1jb250ZXh0JztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItY29uZmlnJztcbmltcG9ydCB7IE5nYkRhdGVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9uZ2ItZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VySTE4biB9IGZyb20gJy4vZGF0ZXBpY2tlci1pMThuJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE5HQl9EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiB7XG4gICAgcHJvdmlkZTogaW1wb3J0KFwiQGFuZ3VsYXIvY29yZVwiKS5JbmplY3Rpb25Ub2tlbjxDb250cm9sVmFsdWVBY2Nlc3Nvcj47XG4gICAgdXNlRXhpc3Rpbmc6IGltcG9ydChcIkBhbmd1bGFyL2NvcmVcIikuVHlwZTxhbnk+O1xuICAgIG11bHRpOiBib29sZWFuO1xufTtcbi8qKlxuICogQW4gZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdGhlIG5hdmlnYXRpb24gaGFwcGVucyBhbmQgdGhlIG1vbnRoIGRpc3BsYXllZCBieSB0aGUgZGF0ZXBpY2tlciBjaGFuZ2VzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYkRhdGVwaWNrZXJOYXZpZ2F0ZUV2ZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBtb250aC5cbiAgICAgKi9cbiAgICBjdXJyZW50OiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICB9IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGUgbW9udGggd2UncmUgbmF2aWdhdGluZyB0by5cbiAgICAgKi9cbiAgICBuZXh0OiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIHByZXZlbnQgbmF2aWdhdGlvbiBmcm9tIGhhcHBlbmluZy5cbiAgICAgKlxuICAgICAqIEBzaW5jZSA0LjEuMFxuICAgICAqL1xuICAgIHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkO1xufVxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHRoZSByZWFkb25seSBwdWJsaWMgc3RhdGUgb2YgdGhlIGRhdGVwaWNrZXIuXG4gKlxuICogQWNjZXNzaWJsZSB2aWEgdGhlIGBkYXRlcGlja2VyLnN0YXRlYCBnZXR0ZXJcbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JEYXRlcGlja2VyU3RhdGUge1xuICAgIC8qKlxuICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1pbkRhdGU6IE5nYkRhdGUgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhEYXRlOiBOZ2JEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGUgZmlyc3QgdmlzaWJsZSBkYXRlIG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGhzXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlyc3REYXRlOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXN0IHZpc2libGUgZGF0ZSBvZiBjdXJyZW50bHkgZGlzcGxheWVkIG1vbnRoc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGxhc3REYXRlOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGN1cnJlbnRseSBmb2N1c2VkIGJ5IHRoZSBkYXRlcGlja2VyXG4gICAgICovXG4gICAgcmVhZG9ubHkgZm9jdXNlZERhdGU6IE5nYkRhdGU7XG4gICAgLyoqXG4gICAgICogRmlyc3QgZGF0ZXMgb2YgbW9udGhzIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXJcbiAgICAgKlxuICAgICAqIEBzaW5jZSA1LjMuMFxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vbnRoczogTmdiRGF0ZVtdO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IG1hcmtzIHRoZSBjb250ZW50IHRlbXBsYXRlIHRoYXQgY3VzdG9taXplcyB0aGUgd2F5IGRhdGVwaWNrZXIgbW9udGhzIGFyZSBkaXNwbGF5ZWRcbiAqXG4gKiBAc2luY2UgNS4zLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZXBpY2tlckNvbnRlbnQge1xuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KTtcbn1cbi8qKlxuICogQSBoaWdobHkgY29uZmlndXJhYmxlIGNvbXBvbmVudCB0aGF0IGhlbHBzIHlvdSB3aXRoIHNlbGVjdGluZyBjYWxlbmRhciBkYXRlcy5cbiAqXG4gKiBgTmdiRGF0ZXBpY2tlcmAgaXMgbWVhbnQgdG8gYmUgZGlzcGxheWVkIGlubGluZSBvbiBhIHBhZ2Ugb3IgcHV0IGluc2lkZSBhIHBvcHVwLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEYXRlcGlja2VyIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIHByaXZhdGUgX3NlcnZpY2U7XG4gICAgcHJpdmF0ZSBfY2FsZW5kYXI7XG4gICAgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG47XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9uZ2JEYXRlQWRhcHRlcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9DbG9zZTogYm9vbGVhbiB8IHN0cmluZztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbmF2aWdhdGlvbjogc3RyaW5nO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vdXRzaWRlRGF5czogc3RyaW5nO1xuICAgIG1vZGVsOiBEYXRlcGlja2VyVmlld01vZGVsO1xuICAgIHByaXZhdGUgX2RlZmF1bHREYXlUZW1wbGF0ZTtcbiAgICBwcml2YXRlIF9jb250ZW50RWw7XG4gICAgY29udGVudFRlbXBsYXRlOiBOZ2JEYXRlcGlja2VyQ29udGVudDtcbiAgICBwcml2YXRlIF9jb250cm9sVmFsdWU7XG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkJDtcbiAgICBwcml2YXRlIF9wdWJsaWNTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVmZXJlbmNlIHRvIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgZGF5LlxuICAgICAqXG4gICAgICogQWxsb3dzIHRvIGNvbXBsZXRlbHkgb3ZlcnJpZGUgdGhlIHdheSBhIGRheSAnY2VsbCcgaW4gdGhlIGNhbGVuZGFyIGlzIGRpc3BsYXllZC5cbiAgICAgKlxuICAgICAqIFNlZSBbYERheVRlbXBsYXRlQ29udGV4dGBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNEYXlUZW1wbGF0ZUNvbnRleHQpIGZvciB0aGUgZGF0YSB5b3UgZ2V0IGluc2lkZS5cbiAgICAgKi9cbiAgICBkYXlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8RGF5VGVtcGxhdGVDb250ZXh0PjtcbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgdG8gcGFzcyBhbnkgYXJiaXRyYXJ5IGRhdGEgdG8gdGhlIHRlbXBsYXRlIGNlbGwgdmlhIHRoZVxuICAgICAqIFtgRGF5VGVtcGxhdGVDb250ZXh0YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI0RheVRlbXBsYXRlQ29udGV4dCkncyBgZGF0YWAgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogYGN1cnJlbnRgIGlzIHRoZSBtb250aCB0aGF0IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXIuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4zLjBcbiAgICAgKi9cbiAgICBkYXlUZW1wbGF0ZURhdGE6IChkYXRlOiBOZ2JEYXRlLCBjdXJyZW50Pzoge1xuICAgICAgICB5ZWFyOiBudW1iZXI7XG4gICAgICAgIG1vbnRoOiBudW1iZXI7XG4gICAgfSkgPT4gYW55O1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgbW9udGhzIHRvIGRpc3BsYXkuXG4gICAgICovXG4gICAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICpcbiAgICAgKiBXaXRoIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnd2Vla2RheScgaXMgMT1Nb24gLi4uIDc9U3VuLlxuICAgICAqL1xuICAgIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgZGF0ZXBpY2tlciBmb290ZXIuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4zLjBcbiAgICAgKi9cbiAgICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgdG8gbWFyayBzb21lIGRhdGVzIGFzIGRpc2FibGVkLlxuICAgICAqXG4gICAgICogSXQgaXMgY2FsbGVkIGZvciBlYWNoIG5ldyBkYXRlIHdoZW4gbmF2aWdhdGluZyB0byBhIGRpZmZlcmVudCBtb250aC5cbiAgICAgKlxuICAgICAqIGBjdXJyZW50YCBpcyB0aGUgbW9udGggdGhhdCBpcyBjdXJyZW50bHkgZGlzcGxheWVkIGJ5IHRoZSBkYXRlcGlja2VyLlxuICAgICAqL1xuICAgIG1hcmtEaXNhYmxlZDogKGRhdGU6IE5nYkRhdGUsIGN1cnJlbnQ/OiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICB9KSA9PiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsICd5ZWFyJyBzZWxlY3QgYm94IHdpbGwgZGlzcGxheSAxMCB5ZWFycyBhZnRlciB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKi9cbiAgICBtYXhEYXRlOiBOZ2JEYXRlU3RydWN0O1xuICAgIC8qKlxuICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgJ3llYXInIHNlbGVjdCBib3ggd2lsbCBkaXNwbGF5IDEwIHllYXJzIGJlZm9yZSB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKi9cbiAgICBtaW5EYXRlOiBOZ2JEYXRlU3RydWN0O1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqICogYFwic2VsZWN0XCJgIC0gc2VsZWN0IGJveGVzIGZvciBtb250aCBhbmQgbmF2aWdhdGlvbiBhcnJvd3NcbiAgICAgKiAqIGBcImFycm93c1wiYCAtIG9ubHkgbmF2aWdhdGlvbiBhcnJvd3NcbiAgICAgKiAqIGBcIm5vbmVcImAgLSBubyBuYXZpZ2F0aW9uIHZpc2libGUgYXQgYWxsXG4gICAgICovXG4gICAgbmF2aWdhdGlvbjogJ3NlbGVjdCcgfCAnYXJyb3dzJyB8ICdub25lJztcbiAgICAvKipcbiAgICAgKiBUaGUgd2F5IG9mIGRpc3BsYXlpbmcgZGF5cyB0aGF0IGRvbid0IGJlbG9uZyB0byB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKlxuICAgICAqICogYFwidmlzaWJsZVwiYCAtIGRheXMgYXJlIHZpc2libGVcbiAgICAgKiAqIGBcImhpZGRlblwiYCAtIGRheXMgYXJlIGhpZGRlbiwgd2hpdGUgc3BhY2UgcHJlc2VydmVkXG4gICAgICogKiBgXCJjb2xsYXBzZWRcImAgLSBkYXlzIGFyZSBjb2xsYXBzZWQsIHNvIHRoZSBkYXRlcGlja2VyIGhlaWdodCBtaWdodCBjaGFuZ2UgYmV0d2VlbiBtb250aHNcbiAgICAgKlxuICAgICAqIEZvciB0aGUgMisgbW9udGhzIHZpZXcsIGRheXMgaW4gYmV0d2VlbiBtb250aHMgYXJlIG5ldmVyIHNob3duLlxuICAgICAqL1xuICAgIG91dHNpZGVEYXlzOiAndmlzaWJsZScgfCAnY29sbGFwc2VkJyB8ICdoaWRkZW4nO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgd2Vla2RheXMgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAgICovXG4gICAgc2hvd1dlZWtkYXlzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgd2VlayBudW1iZXJzIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICAqL1xuICAgIHNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSB0byBvcGVuIGNhbGVuZGFyIHdpdGguXG4gICAgICpcbiAgICAgKiBXaXRoIHRoZSBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuICAgICAqIElmIG5vdGhpbmcgb3IgaW52YWxpZCBkYXRlIGlzIHByb3ZpZGVkLCBjYWxlbmRhciB3aWxsIG9wZW4gd2l0aCBjdXJyZW50IG1vbnRoLlxuICAgICAqXG4gICAgICogWW91IGNvdWxkIHVzZSBgbmF2aWdhdGVUbyhkYXRlKWAgbWV0aG9kIGFzIGFuIGFsdGVybmF0aXZlLlxuICAgICAqL1xuICAgIHN0YXJ0RGF0ZToge1xuICAgICAgICB5ZWFyOiBudW1iZXI7XG4gICAgICAgIG1vbnRoOiBudW1iZXI7XG4gICAgICAgIGRheT86IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRoZSBuYXZpZ2F0aW9uIGhhcHBlbnMgYW5kIGRpc3BsYXllZCBtb250aCBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogU2VlIFtgTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnRgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQpIGZvciB0aGUgcGF5bG9hZCBpbmZvLlxuICAgICAqL1xuICAgIG5hdmlnYXRlOiBFdmVudEVtaXR0ZXI8TmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIHNlbGVjdHMgYSBkYXRlIHVzaW5nIGtleWJvYXJkIG9yIG1vdXNlLlxuICAgICAqXG4gICAgICogVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50IGlzIGN1cnJlbnRseSBzZWxlY3RlZCBgTmdiRGF0ZWAuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNS4yLjBcbiAgICAgKi9cbiAgICBkYXRlU2VsZWN0OiBFdmVudEVtaXR0ZXI8TmdiRGF0ZT47XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgc2VsZWN0cyBhIGRhdGUgdXNpbmcga2V5Ym9hcmQgb3IgbW91c2UuXG4gICAgICpcbiAgICAgKiBUaGUgcGF5bG9hZCBvZiB0aGUgZXZlbnQgaXMgY3VycmVudGx5IHNlbGVjdGVkIGBOZ2JEYXRlYC5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIDYuMC4wIFBsZWFzZSB1c2UgJ2RhdGVTZWxlY3QnIG91dHB1dCBpbnN0ZWFkIGR1ZSB0byBjb2xsaXNpb24gd2l0aCBuYXRpdmVcbiAgICAgKiAnc2VsZWN0JyBldmVudC5cbiAgICAgKi9cbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxOZ2JEYXRlPjtcbiAgICBvbkNoYW5nZTogKF86IGFueSkgPT4gdm9pZDtcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoX3NlcnZpY2U6IE5nYkRhdGVwaWNrZXJTZXJ2aWNlLCBfY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBpMThuOiBOZ2JEYXRlcGlja2VySTE4biwgY29uZmlnOiBOZ2JEYXRlcGlja2VyQ29uZmlnLCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgX25nYkRhdGVBZGFwdGVyOiBOZ2JEYXRlQWRhcHRlcjxhbnk+LCBfbmdab25lOiBOZ1pvbmUpO1xuICAgIC8qKlxuICAgICAqICBSZXR1cm5zIHRoZSByZWFkb25seSBwdWJsaWMgc3RhdGUgb2YgdGhlIGRhdGVwaWNrZXJcbiAgICAgKlxuICAgICAqIEBzaW5jZSA1LjIuMFxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpOiBOZ2JEYXRlcGlja2VyU3RhdGU7XG4gICAgLyoqXG4gICAgICogIFJldHVybnMgdGhlIGNhbGVuZGFyIHNlcnZpY2UgdXNlZCBpbiB0aGUgc3BlY2lmaWMgZGF0ZXBpY2tlciBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqICBAc2luY2UgNS4zLjBcbiAgICAgKi9cbiAgICBnZXQgY2FsZW5kYXIoKTogTmdiQ2FsZW5kYXI7XG4gICAgLyoqXG4gICAgICogIEZvY3VzZXMgb24gZ2l2ZW4gZGF0ZS5cbiAgICAgKi9cbiAgICBmb2N1c0RhdGUoZGF0ZT86IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiAgU2VsZWN0cyBmb2N1c2VkIGRhdGUuXG4gICAgICovXG4gICAgZm9jdXNTZWxlY3QoKTogdm9pZDtcbiAgICBmb2N1cygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byB0aGUgcHJvdmlkZWQgZGF0ZS5cbiAgICAgKlxuICAgICAqIFdpdGggdGhlIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnbW9udGgnIGlzIDE9SmFuIC4uLiAxMj1EZWMuXG4gICAgICogSWYgbm90aGluZyBvciBpbnZhbGlkIGRhdGUgcHJvdmlkZWQgY2FsZW5kYXIgd2lsbCBvcGVuIGN1cnJlbnQgbW9udGguXG4gICAgICpcbiAgICAgKiBVc2UgdGhlIGBbc3RhcnREYXRlXWAgaW5wdXQgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gICAgICovXG4gICAgbmF2aWdhdGVUbyhkYXRlPzoge1xuICAgICAgICB5ZWFyOiBudW1iZXI7XG4gICAgICAgIG1vbnRoOiBudW1iZXI7XG4gICAgICAgIGRheT86IG51bWJlcjtcbiAgICB9KTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgb25EYXRlU2VsZWN0KGRhdGU6IE5nYkRhdGUpOiB2b2lkO1xuICAgIG9uTmF2aWdhdGVEYXRlU2VsZWN0KGRhdGU6IE5nYkRhdGUpOiB2b2lkO1xuICAgIG9uTmF2aWdhdGVFdmVudChldmVudDogTmF2aWdhdGlvbkV2ZW50KTogdm9pZDtcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZDtcbiAgICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xufVxuIl19
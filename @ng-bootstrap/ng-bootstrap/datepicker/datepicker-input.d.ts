import { ChangeDetectorRef, ComponentFactoryResolver, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { PlacementArray } from '../util/positioning';
import { NgbDateAdapter } from './adapters/ngb-date-adapter';
import { NgbDatepickerNavigateEvent } from './datepicker';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDateParserFormatter } from './ngb-date-parser-formatter';
import { NgbDateStruct } from './ngb-date-struct';
import { NgbInputDatepickerConfig } from './datepicker-input-config';
/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbInputDatepicker implements OnChanges, OnDestroy, ControlValueAccessor, Validator {
    private _parserFormatter;
    private _elRef;
    private _vcRef;
    private _renderer;
    private _cfr;
    private _ngZone;
    private _calendar;
    private _dateAdapter;
    private _document;
    private _changeDetector;
    static ngAcceptInputType_autoClose: boolean | string;
    static ngAcceptInputType_disabled: boolean | '';
    static ngAcceptInputType_navigation: string;
    static ngAcceptInputType_outsideDays: string;
    private _cRef;
    private _disabled;
    private _elWithFocus;
    private _model;
    private _inputValue;
    private _zoneSubscription;
    /**
     * Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.
     *
     * * `true` - the popup will close on both date selection and outside click.
     * * `false` - the popup can only be closed manually via `close()` or `toggle()` methods.
     * * `"inside"` - the popup will close on date selection, but not outside clicks.
     * * `"outside"` - the popup will close only on the outside click and not on date selection/inside clicks.
     *
     * @since 3.0.0
     */
    autoClose: boolean | 'inside' | 'outside';
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
     * The earliest date that can be displayed or selected. Also used for form validation.
     *
     * If not provided, 'year' select box will display 10 years before the current month.
     */
    minDate: NgbDateStruct;
    /**
     * The latest date that can be displayed or selected. Also used for form validation.
     *
     * If not provided, 'year' select box will display 10 years after the current month.
     */
    maxDate: NgbDateStruct;
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
     * The preferred placement of the datepicker popup.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    placement: PlacementArray;
    /**
     * If `true`, when closing datepicker will focus element that was focused before datepicker was opened.
     *
     * Alternatively you could provide a selector or an `HTMLElement` to focus. If the element doesn't exist or invalid,
     * we'll fallback to focus document body.
     *
     * @since 5.2.0
     */
    restoreFocus: true | string | HTMLElement;
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
     * A selector specifying the element the datepicker popup should be appended to.
     *
     * Currently only supports `"body"`.
     */
    container: string;
    /**
     * A css selector or html element specifying the element the datepicker popup should be positioned against.
     *
     * By default the input is used as a target.
     *
     * @since 4.2.0
     */
    positionTarget: string | HTMLElement;
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @since 1.1.1
     */
    dateSelect: EventEmitter<NgbDate>;
    /**
     * Event emitted right after the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */
    navigate: EventEmitter<NgbDatepickerNavigateEvent>;
    /**
     * An event fired after closing datepicker window.
     *
     * @since 4.2.0
     */
    closed: EventEmitter<void>;
    get disabled(): any;
    set disabled(value: any);
    private _onChange;
    private _onTouched;
    private _validatorChange;
    constructor(_parserFormatter: NgbDateParserFormatter, _elRef: ElementRef<HTMLInputElement>, _vcRef: ViewContainerRef, _renderer: Renderer2, _cfr: ComponentFactoryResolver, _ngZone: NgZone, _calendar: NgbCalendar, _dateAdapter: NgbDateAdapter<any>, _document: any, _changeDetector: ChangeDetectorRef, config: NgbInputDatepickerConfig);
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    registerOnValidatorChange(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: AbstractControl): ValidationErrors | null;
    writeValue(value: any): void;
    manualDateChange(value: string, updateView?: boolean): void;
    isOpen(): boolean;
    /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     */
    open(): void;
    /**
     * Closes the datepicker popup.
     */
    close(): void;
    /**
     * Toggles the datepicker popup.
     */
    toggle(): void;
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
    onBlur(): void;
    onFocus(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private _applyDatepickerInputs;
    private _applyPopupStyling;
    private _subscribeForDatepickerOutputs;
    private _writeModelValue;
    private _fromDateStruct;
    private _updatePopupPosition;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbInputDatepicker>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbInputDatepicker, "input[ngbDatepicker]", ["ngbDatepicker"], {
    "disabled": "disabled";
    "autoClose": "autoClose";
    "dayTemplate": "dayTemplate";
    "dayTemplateData": "dayTemplateData";
    "displayMonths": "displayMonths";
    "firstDayOfWeek": "firstDayOfWeek";
    "footerTemplate": "footerTemplate";
    "markDisabled": "markDisabled";
    "minDate": "minDate";
    "maxDate": "maxDate";
    "navigation": "navigation";
    "outsideDays": "outsideDays";
    "placement": "placement";
    "restoreFocus": "restoreFocus";
    "showWeekdays": "showWeekdays";
    "showWeekNumbers": "showWeekNumbers";
    "startDate": "startDate";
    "container": "container";
    "positionTarget": "positionTarget";
}, {
    "dateSelect": "dateSelect";
    "navigate": "navigate";
    "closed": "closed";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5kLnRzIiwic291cmNlcyI6WyJkYXRlcGlja2VyLWlucHV0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4T0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAnLi4vdXRpbC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBOZ2JEYXRlQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMvbmdiLWRhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyTmF2aWdhdGVFdmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBEYXlUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2RhdGVwaWNrZXItZGF5LXRlbXBsYXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgTmdiQ2FsZW5kYXIgfSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnLi9uZ2ItZGF0ZS1wYXJzZXItZm9ybWF0dGVyJztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQgeyBOZ2JJbnB1dERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQtY29uZmlnJztcbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBhbGxvd3MgdG8gc3RpY2sgYSBkYXRlcGlja2VyIHBvcHVwIHRvIGFuIGlucHV0IGZpZWxkLlxuICpcbiAqIE1hbmFnZXMgaW50ZXJhY3Rpb24gd2l0aCB0aGUgaW5wdXQgZmllbGQgaXRzZWxmLCBkb2VzIHZhbHVlIGZvcm1hdHRpbmcgYW5kIHByb3ZpZGVzIGZvcm1zIGludGVncmF0aW9uLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JJbnB1dERhdGVwaWNrZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gICAgcHJpdmF0ZSBfcGFyc2VyRm9ybWF0dGVyO1xuICAgIHByaXZhdGUgX2VsUmVmO1xuICAgIHByaXZhdGUgX3ZjUmVmO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyO1xuICAgIHByaXZhdGUgX2NmcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfY2FsZW5kYXI7XG4gICAgcHJpdmF0ZSBfZGF0ZUFkYXB0ZXI7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9DbG9zZTogYm9vbGVhbiB8IHN0cmluZztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IGJvb2xlYW4gfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbmF2aWdhdGlvbjogc3RyaW5nO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vdXRzaWRlRGF5czogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NSZWY7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ7XG4gICAgcHJpdmF0ZSBfZWxXaXRoRm9jdXM7XG4gICAgcHJpdmF0ZSBfbW9kZWw7XG4gICAgcHJpdmF0ZSBfaW5wdXRWYWx1ZTtcbiAgICBwcml2YXRlIF96b25lU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkYXRlcGlja2VyIHBvcHVwIHNob3VsZCBiZSBjbG9zZWQgYXV0b21hdGljYWxseSBhZnRlciBkYXRlIHNlbGVjdGlvbiAvIG91dHNpZGUgY2xpY2sgb3Igbm90LlxuICAgICAqXG4gICAgICogKiBgdHJ1ZWAgLSB0aGUgcG9wdXAgd2lsbCBjbG9zZSBvbiBib3RoIGRhdGUgc2VsZWN0aW9uIGFuZCBvdXRzaWRlIGNsaWNrLlxuICAgICAqICogYGZhbHNlYCAtIHRoZSBwb3B1cCBjYW4gb25seSBiZSBjbG9zZWQgbWFudWFsbHkgdmlhIGBjbG9zZSgpYCBvciBgdG9nZ2xlKClgIG1ldGhvZHMuXG4gICAgICogKiBgXCJpbnNpZGVcImAgLSB0aGUgcG9wdXAgd2lsbCBjbG9zZSBvbiBkYXRlIHNlbGVjdGlvbiwgYnV0IG5vdCBvdXRzaWRlIGNsaWNrcy5cbiAgICAgKiAqIGBcIm91dHNpZGVcImAgLSB0aGUgcG9wdXAgd2lsbCBjbG9zZSBvbmx5IG9uIHRoZSBvdXRzaWRlIGNsaWNrIGFuZCBub3Qgb24gZGF0ZSBzZWxlY3Rpb24vaW5zaWRlIGNsaWNrcy5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjAuMFxuICAgICAqL1xuICAgIGF1dG9DbG9zZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnO1xuICAgIC8qKlxuICAgICAqIFRoZSByZWZlcmVuY2UgdG8gYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBkYXkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgdG8gY29tcGxldGVseSBvdmVycmlkZSB0aGUgd2F5IGEgZGF5ICdjZWxsJyBpbiB0aGUgY2FsZW5kYXIgaXMgZGlzcGxheWVkLlxuICAgICAqXG4gICAgICogU2VlIFtgRGF5VGVtcGxhdGVDb250ZXh0YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI0RheVRlbXBsYXRlQ29udGV4dCkgZm9yIHRoZSBkYXRhIHlvdSBnZXQgaW5zaWRlLlxuICAgICAqL1xuICAgIGRheVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxEYXlUZW1wbGF0ZUNvbnRleHQ+O1xuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayB0byBwYXNzIGFueSBhcmJpdHJhcnkgZGF0YSB0byB0aGUgdGVtcGxhdGUgY2VsbCB2aWEgdGhlXG4gICAgICogW2BEYXlUZW1wbGF0ZUNvbnRleHRgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjRGF5VGVtcGxhdGVDb250ZXh0KSdzIGBkYXRhYCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBgY3VycmVudGAgaXMgdGhlIG1vbnRoIHRoYXQgaXMgY3VycmVudGx5IGRpc3BsYXllZCBieSB0aGUgZGF0ZXBpY2tlci5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjMuMFxuICAgICAqL1xuICAgIGRheVRlbXBsYXRlRGF0YTogKGRhdGU6IE5nYkRhdGUsIGN1cnJlbnQ/OiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICB9KSA9PiBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBtb250aHMgdG8gZGlzcGxheS5cbiAgICAgKi9cbiAgICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgKlxuICAgICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICd3ZWVrZGF5JyBpcyAxPU1vbiAuLi4gNz1TdW4uXG4gICAgICovXG4gICAgZmlyc3REYXlPZldlZWs6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBkYXRlcGlja2VyIGZvb3Rlci5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjMuMFxuICAgICAqL1xuICAgIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayB0byBtYXJrIHNvbWUgZGF0ZXMgYXMgZGlzYWJsZWQuXG4gICAgICpcbiAgICAgKiBJdCBpcyBjYWxsZWQgZm9yIGVhY2ggbmV3IGRhdGUgd2hlbiBuYXZpZ2F0aW5nIHRvIGEgZGlmZmVyZW50IG1vbnRoLlxuICAgICAqXG4gICAgICogYGN1cnJlbnRgIGlzIHRoZSBtb250aCB0aGF0IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXIuXG4gICAgICovXG4gICAgbWFya0Rpc2FibGVkOiAoZGF0ZTogTmdiRGF0ZSwgY3VycmVudD86IHtcbiAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICBtb250aDogbnVtYmVyO1xuICAgIH0pID0+IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgZGlzcGxheWVkIG9yIHNlbGVjdGVkLiBBbHNvIHVzZWQgZm9yIGZvcm0gdmFsaWRhdGlvbi5cbiAgICAgKlxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgJ3llYXInIHNlbGVjdCBib3ggd2lsbCBkaXNwbGF5IDEwIHllYXJzIGJlZm9yZSB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKi9cbiAgICBtaW5EYXRlOiBOZ2JEYXRlU3RydWN0O1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWQuIEFsc28gdXNlZCBmb3IgZm9ybSB2YWxpZGF0aW9uLlxuICAgICAqXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCAneWVhcicgc2VsZWN0IGJveCB3aWxsIGRpc3BsYXkgMTAgeWVhcnMgYWZ0ZXIgdGhlIGN1cnJlbnQgbW9udGguXG4gICAgICovXG4gICAgbWF4RGF0ZTogTmdiRGF0ZVN0cnVjdDtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW9uIHR5cGUuXG4gICAgICpcbiAgICAgKiAqIGBcInNlbGVjdFwiYCAtIHNlbGVjdCBib3hlcyBmb3IgbW9udGggYW5kIG5hdmlnYXRpb24gYXJyb3dzXG4gICAgICogKiBgXCJhcnJvd3NcImAgLSBvbmx5IG5hdmlnYXRpb24gYXJyb3dzXG4gICAgICogKiBgXCJub25lXCJgIC0gbm8gbmF2aWdhdGlvbiB2aXNpYmxlIGF0IGFsbFxuICAgICAqL1xuICAgIG5hdmlnYXRpb246ICdzZWxlY3QnIHwgJ2Fycm93cycgfCAnbm9uZSc7XG4gICAgLyoqXG4gICAgICogVGhlIHdheSBvZiBkaXNwbGF5aW5nIGRheXMgdGhhdCBkb24ndCBiZWxvbmcgdG8gdGhlIGN1cnJlbnQgbW9udGguXG4gICAgICpcbiAgICAgKiAqIGBcInZpc2libGVcImAgLSBkYXlzIGFyZSB2aXNpYmxlXG4gICAgICogKiBgXCJoaWRkZW5cImAgLSBkYXlzIGFyZSBoaWRkZW4sIHdoaXRlIHNwYWNlIHByZXNlcnZlZFxuICAgICAqICogYFwiY29sbGFwc2VkXCJgIC0gZGF5cyBhcmUgY29sbGFwc2VkLCBzbyB0aGUgZGF0ZXBpY2tlciBoZWlnaHQgbWlnaHQgY2hhbmdlIGJldHdlZW4gbW9udGhzXG4gICAgICpcbiAgICAgKiBGb3IgdGhlIDIrIG1vbnRocyB2aWV3LCBkYXlzIGluIGJldHdlZW4gbW9udGhzIGFyZSBuZXZlciBzaG93bi5cbiAgICAgKi9cbiAgICBvdXRzaWRlRGF5czogJ3Zpc2libGUnIHwgJ2NvbGxhcHNlZCcgfCAnaGlkZGVuJztcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkIHBsYWNlbWVudCBvZiB0aGUgZGF0ZXBpY2tlciBwb3B1cC5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYFwidG9wXCJgLCBgXCJ0b3AtbGVmdFwiYCwgYFwidG9wLXJpZ2h0XCJgLCBgXCJib3R0b21cImAsIGBcImJvdHRvbS1sZWZ0XCJgLFxuICAgICAqIGBcImJvdHRvbS1yaWdodFwiYCwgYFwibGVmdFwiYCwgYFwibGVmdC10b3BcImAsIGBcImxlZnQtYm90dG9tXCJgLCBgXCJyaWdodFwiYCwgYFwicmlnaHQtdG9wXCJgLFxuICAgICAqIGBcInJpZ2h0LWJvdHRvbVwiYFxuICAgICAqXG4gICAgICogQWNjZXB0cyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc3RyaW5nIHdpdGggc3BhY2Ugc2VwYXJhdGVkIHBvc3NpYmxlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IG9yZGVyIG9mIHByZWZlcmVuY2UgaXMgYFwiYm90dG9tLWxlZnQgYm90dG9tLXJpZ2h0IHRvcC1sZWZ0IHRvcC1yaWdodFwiYFxuICAgICAqXG4gICAgICogUGxlYXNlIHNlZSB0aGUgW3Bvc2l0aW9uaW5nIG92ZXJ2aWV3XSgjL3Bvc2l0aW9uaW5nKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB3aGVuIGNsb3NpbmcgZGF0ZXBpY2tlciB3aWxsIGZvY3VzIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgZGF0ZXBpY2tlciB3YXMgb3BlbmVkLlxuICAgICAqXG4gICAgICogQWx0ZXJuYXRpdmVseSB5b3UgY291bGQgcHJvdmlkZSBhIHNlbGVjdG9yIG9yIGFuIGBIVE1MRWxlbWVudGAgdG8gZm9jdXMuIElmIHRoZSBlbGVtZW50IGRvZXNuJ3QgZXhpc3Qgb3IgaW52YWxpZCxcbiAgICAgKiB3ZSdsbCBmYWxsYmFjayB0byBmb2N1cyBkb2N1bWVudCBib2R5LlxuICAgICAqXG4gICAgICogQHNpbmNlIDUuMi4wXG4gICAgICovXG4gICAgcmVzdG9yZUZvY3VzOiB0cnVlIHwgc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB3ZWVrZGF5cyB3aWxsIGJlIGRpc3BsYXllZC5cbiAgICAgKi9cbiAgICBzaG93V2Vla2RheXM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB3ZWVrIG51bWJlcnMgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAgICovXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIHRvIG9wZW4gY2FsZW5kYXIgd2l0aC5cbiAgICAgKlxuICAgICAqIFdpdGggdGhlIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnbW9udGgnIGlzIDE9SmFuIC4uLiAxMj1EZWMuXG4gICAgICogSWYgbm90aGluZyBvciBpbnZhbGlkIGRhdGUgaXMgcHJvdmlkZWQsIGNhbGVuZGFyIHdpbGwgb3BlbiB3aXRoIGN1cnJlbnQgbW9udGguXG4gICAgICpcbiAgICAgKiBZb3UgY291bGQgdXNlIGBuYXZpZ2F0ZVRvKGRhdGUpYCBtZXRob2QgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gICAgICovXG4gICAgc3RhcnREYXRlOiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICAgICAgZGF5PzogbnVtYmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBkYXRlcGlja2VyIHBvcHVwIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICAgKlxuICAgICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGBcImJvZHlcImAuXG4gICAgICovXG4gICAgY29udGFpbmVyOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBjc3Mgc2VsZWN0b3Igb3IgaHRtbCBlbGVtZW50IHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRhdGVwaWNrZXIgcG9wdXAgc2hvdWxkIGJlIHBvc2l0aW9uZWQgYWdhaW5zdC5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGlucHV0IGlzIHVzZWQgYXMgYSB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNC4yLjBcbiAgICAgKi9cbiAgICBwb3NpdGlvblRhcmdldDogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgc2VsZWN0cyBhIGRhdGUgdXNpbmcga2V5Ym9hcmQgb3IgbW91c2UuXG4gICAgICpcbiAgICAgKiBUaGUgcGF5bG9hZCBvZiB0aGUgZXZlbnQgaXMgY3VycmVudGx5IHNlbGVjdGVkIGBOZ2JEYXRlYC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjEuMVxuICAgICAqL1xuICAgIGRhdGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxOZ2JEYXRlPjtcbiAgICAvKipcbiAgICAgKiBFdmVudCBlbWl0dGVkIHJpZ2h0IGFmdGVyIHRoZSBuYXZpZ2F0aW9uIGhhcHBlbnMgYW5kIGRpc3BsYXllZCBtb250aCBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogU2VlIFtgTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnRgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQpIGZvciB0aGUgcGF5bG9hZCBpbmZvLlxuICAgICAqL1xuICAgIG5hdmlnYXRlOiBFdmVudEVtaXR0ZXI8TmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGZpcmVkIGFmdGVyIGNsb3NpbmcgZGF0ZXBpY2tlciB3aW5kb3cuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNC4yLjBcbiAgICAgKi9cbiAgICBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBnZXQgZGlzYWJsZWQoKTogYW55O1xuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KTtcbiAgICBwcml2YXRlIF9vbkNoYW5nZTtcbiAgICBwcml2YXRlIF9vblRvdWNoZWQ7XG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yQ2hhbmdlO1xuICAgIGNvbnN0cnVjdG9yKF9wYXJzZXJGb3JtYXR0ZXI6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIF9lbFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PiwgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgX2NmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBfbmdab25lOiBOZ1pvbmUsIF9jYWxlbmRhcjogTmdiQ2FsZW5kYXIsIF9kYXRlQWRhcHRlcjogTmdiRGF0ZUFkYXB0ZXI8YW55PiwgX2RvY3VtZW50OiBhbnksIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGNvbmZpZzogTmdiSW5wdXREYXRlcGlja2VyQ29uZmlnKTtcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZDtcbiAgICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsO1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgbWFudWFsRGF0ZUNoYW5nZSh2YWx1ZTogc3RyaW5nLCB1cGRhdGVWaWV3PzogYm9vbGVhbik6IHZvaWQ7XG4gICAgaXNPcGVuKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGRhdGVwaWNrZXIgcG9wdXAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgcmVsYXRlZCBmb3JtIGNvbnRyb2wgY29udGFpbnMgYSB2YWxpZCBkYXRlLCB0aGUgY29ycmVzcG9uZGluZyBtb250aCB3aWxsIGJlIG9wZW5lZC5cbiAgICAgKi9cbiAgICBvcGVuKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBkYXRlcGlja2VyIHBvcHVwLlxuICAgICAqL1xuICAgIGNsb3NlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZGF0ZXBpY2tlciBwb3B1cC5cbiAgICAgKi9cbiAgICB0b2dnbGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHByb3ZpZGVkIGRhdGUuXG4gICAgICpcbiAgICAgKiBXaXRoIHRoZSBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuICAgICAqIElmIG5vdGhpbmcgb3IgaW52YWxpZCBkYXRlIHByb3ZpZGVkIGNhbGVuZGFyIHdpbGwgb3BlbiBjdXJyZW50IG1vbnRoLlxuICAgICAqXG4gICAgICogVXNlIHRoZSBgW3N0YXJ0RGF0ZV1gIGlucHV0IGFzIGFuIGFsdGVybmF0aXZlLlxuICAgICAqL1xuICAgIG5hdmlnYXRlVG8oZGF0ZT86IHtcbiAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICBtb250aDogbnVtYmVyO1xuICAgICAgICBkYXk/OiBudW1iZXI7XG4gICAgfSk6IHZvaWQ7XG4gICAgb25CbHVyKCk6IHZvaWQ7XG4gICAgb25Gb2N1cygpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfYXBwbHlEYXRlcGlja2VySW5wdXRzO1xuICAgIHByaXZhdGUgX2FwcGx5UG9wdXBTdHlsaW5nO1xuICAgIHByaXZhdGUgX3N1YnNjcmliZUZvckRhdGVwaWNrZXJPdXRwdXRzO1xuICAgIHByaXZhdGUgX3dyaXRlTW9kZWxWYWx1ZTtcbiAgICBwcml2YXRlIF9mcm9tRGF0ZVN0cnVjdDtcbiAgICBwcml2YXRlIF91cGRhdGVQb3B1cFBvc2l0aW9uO1xufVxuIl19
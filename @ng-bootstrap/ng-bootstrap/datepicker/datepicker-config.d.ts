import { TemplateRef } from '@angular/core';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgbDateStruct } from './ngb-date-struct';
/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbDatepickerConfig {
    dayTemplate: TemplateRef<DayTemplateContext>;
    dayTemplateData: (date: NgbDateStruct, current?: {
        year: number;
        month: number;
    }) => any;
    footerTemplate: TemplateRef<any>;
    displayMonths: number;
    firstDayOfWeek: number;
    markDisabled: (date: NgbDateStruct, current?: {
        year: number;
        month: number;
    }) => boolean;
    minDate: NgbDateStruct;
    maxDate: NgbDateStruct;
    navigation: 'select' | 'arrows' | 'none';
    outsideDays: 'visible' | 'collapsed' | 'hidden';
    showWeekdays: boolean;
    showWeekNumbers: boolean;
    startDate: {
        year: number;
        month: number;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jb25maWcuZC50cyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci1jb25maWcuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF5VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi9kYXRlcGlja2VyLWRheS10ZW1wbGF0ZS1jb250ZXh0JztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JEYXRlcGlja2VyYF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI05nYkRhdGVwaWNrZXIpIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW5cbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgZGF0ZXBpY2tlcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRhdGVwaWNrZXJDb25maWcge1xuICAgIGRheVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxEYXlUZW1wbGF0ZUNvbnRleHQ+O1xuICAgIGRheVRlbXBsYXRlRGF0YTogKGRhdGU6IE5nYkRhdGVTdHJ1Y3QsIGN1cnJlbnQ/OiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICB9KSA9PiBhbnk7XG4gICAgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICAgIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXI7XG4gICAgbWFya0Rpc2FibGVkOiAoZGF0ZTogTmdiRGF0ZVN0cnVjdCwgY3VycmVudD86IHtcbiAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICBtb250aDogbnVtYmVyO1xuICAgIH0pID0+IGJvb2xlYW47XG4gICAgbWluRGF0ZTogTmdiRGF0ZVN0cnVjdDtcbiAgICBtYXhEYXRlOiBOZ2JEYXRlU3RydWN0O1xuICAgIG5hdmlnYXRpb246ICdzZWxlY3QnIHwgJ2Fycm93cycgfCAnbm9uZSc7XG4gICAgb3V0c2lkZURheXM6ICd2aXNpYmxlJyB8ICdjb2xsYXBzZWQnIHwgJ2hpZGRlbic7XG4gICAgc2hvd1dlZWtkYXlzOiBib29sZWFuO1xuICAgIHNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcbiAgICBzdGFydERhdGU6IHtcbiAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICBtb250aDogbnVtYmVyO1xuICAgIH07XG59XG4iXX0=
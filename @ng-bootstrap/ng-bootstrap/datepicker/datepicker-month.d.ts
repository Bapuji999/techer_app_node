import { NgbDatepicker } from './datepicker';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
import { NgbDatepickerService } from './datepicker-service';
import { MonthViewModel, DayViewModel } from './datepicker-view-model';
import { NgbDateStruct } from './ngb-date-struct';
/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbDatepickerMonth {
    i18n: NgbDatepickerI18n;
    datepicker: NgbDatepicker;
    private _keyboardService;
    private _service;
    /**
     * The first date of month to be rendered.
     *
     * This month must one of the months present in the
     * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
     */
    set month(month: NgbDateStruct);
    viewModel: MonthViewModel;
    constructor(i18n: NgbDatepickerI18n, datepicker: NgbDatepicker, _keyboardService: NgbDatepickerKeyboardService, _service: NgbDatepickerService);
    onKeyDown(event: KeyboardEvent): void;
    doSelect(day: DayViewModel): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerMonth>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbDatepickerMonth, "ngb-datepicker-month", never, {
    "month": "month";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb250aC5kLnRzIiwic291cmNlcyI6WyJkYXRlcGlja2VyLW1vbnRoLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYkRhdGVwaWNrZXIgfSBmcm9tICcuL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlckkxOG4gfSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyS2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlcGlja2VyLWtleWJvYXJkLXNlcnZpY2UnO1xuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGVwaWNrZXItc2VydmljZSc7XG5pbXBvcnQgeyBNb250aFZpZXdNb2RlbCwgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJy4vbmdiLWRhdGUtc3RydWN0Jztcbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCByZW5kZXJzIG9uZSBtb250aCBpbmNsdWRpbmcgYWxsIHRoZSBkYXlzLCB3ZWVrZGF5cyBhbmQgd2VlayBudW1iZXJzLiBDYW4gYmUgdXNlZCBpbnNpZGVcbiAqIHRoZSBgPG5nLXRlbXBsYXRlIG5nYkRhdGVwaWNrZXJNb250aHM+PC9uZy10ZW1wbGF0ZT5gIHdoZW4geW91IHdhbnQgdG8gY3VzdG9taXplIG1vbnRocyBsYXlvdXQuXG4gKlxuICogRm9yIGEgdXNhZ2UgZXhhbXBsZSwgc2VlIFtjdXN0b20gbW9udGggbGF5b3V0IGRlbW9dKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2V4YW1wbGVzI2N1c3RvbW1vbnRoKVxuICpcbiAqIEBzaW5jZSA1LjMuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEYXRlcGlja2VyTW9udGgge1xuICAgIGkxOG46IE5nYkRhdGVwaWNrZXJJMThuO1xuICAgIGRhdGVwaWNrZXI6IE5nYkRhdGVwaWNrZXI7XG4gICAgcHJpdmF0ZSBfa2V5Ym9hcmRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3NlcnZpY2U7XG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IGRhdGUgb2YgbW9udGggdG8gYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1vbnRoIG11c3Qgb25lIG9mIHRoZSBtb250aHMgcHJlc2VudCBpbiB0aGVcbiAgICAgKiBbZGF0ZXBpY2tlciBzdGF0ZV0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI05nYkRhdGVwaWNrZXJTdGF0ZSkuXG4gICAgICovXG4gICAgc2V0IG1vbnRoKG1vbnRoOiBOZ2JEYXRlU3RydWN0KTtcbiAgICB2aWV3TW9kZWw6IE1vbnRoVmlld01vZGVsO1xuICAgIGNvbnN0cnVjdG9yKGkxOG46IE5nYkRhdGVwaWNrZXJJMThuLCBkYXRlcGlja2VyOiBOZ2JEYXRlcGlja2VyLCBfa2V5Ym9hcmRTZXJ2aWNlOiBOZ2JEYXRlcGlja2VyS2V5Ym9hcmRTZXJ2aWNlLCBfc2VydmljZTogTmdiRGF0ZXBpY2tlclNlcnZpY2UpO1xuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgZG9TZWxlY3QoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkO1xufVxuIl19
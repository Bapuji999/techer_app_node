import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDateStruct } from './ngb-date-struct';
import { DatepickerViewModel } from './datepicker-view-model';
import { Observable } from 'rxjs';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as ɵngcc0 from '@angular/core';
export interface DatepickerServiceInputs extends Partial<Required<Pick<DatepickerViewModel, 'dayTemplateData' | 'displayMonths' | 'disabled' | 'firstDayOfWeek' | 'focusVisible' | 'markDisabled' | 'maxDate' | 'minDate' | 'navigation' | 'outsideDays'>>> {
}
export declare class NgbDatepickerService {
    private _calendar;
    private _i18n;
    private _VALIDATORS;
    private _model$;
    private _dateSelect$;
    private _state;
    get model$(): Observable<DatepickerViewModel>;
    get dateSelect$(): Observable<NgbDate>;
    set(options: DatepickerServiceInputs): void;
    constructor(_calendar: NgbCalendar, _i18n: NgbDatepickerI18n);
    focus(date?: NgbDate | null): void;
    focusSelect(): void;
    open(date?: NgbDate | null): void;
    select(date?: NgbDate | null, options?: {
        emitEvent?: boolean;
    }): void;
    toValidDate(date?: NgbDateStruct | null, defaultValue?: NgbDate | null): NgbDate | null;
    getMonth(struct: NgbDateStruct): import("./datepicker-view-model").MonthViewModel;
    private _nextState;
    private _patchContexts;
    private _updateState;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDatepickerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiQ2FsZW5kYXIgfSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlclZpZXdNb2RlbCB9IGZyb20gJy4vZGF0ZXBpY2tlci12aWV3LW1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJJMThuIH0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyU2VydmljZUlucHV0cyBleHRlbmRzIFBhcnRpYWw8UmVxdWlyZWQ8UGljazxEYXRlcGlja2VyVmlld01vZGVsLCAnZGF5VGVtcGxhdGVEYXRhJyB8ICdkaXNwbGF5TW9udGhzJyB8ICdkaXNhYmxlZCcgfCAnZmlyc3REYXlPZldlZWsnIHwgJ2ZvY3VzVmlzaWJsZScgfCAnbWFya0Rpc2FibGVkJyB8ICdtYXhEYXRlJyB8ICdtaW5EYXRlJyB8ICduYXZpZ2F0aW9uJyB8ICdvdXRzaWRlRGF5cyc+Pj4ge1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZXBpY2tlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2NhbGVuZGFyO1xuICAgIHByaXZhdGUgX2kxOG47XG4gICAgcHJpdmF0ZSBfVkFMSURBVE9SUztcbiAgICBwcml2YXRlIF9tb2RlbCQ7XG4gICAgcHJpdmF0ZSBfZGF0ZVNlbGVjdCQ7XG4gICAgcHJpdmF0ZSBfc3RhdGU7XG4gICAgZ2V0IG1vZGVsJCgpOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJWaWV3TW9kZWw+O1xuICAgIGdldCBkYXRlU2VsZWN0JCgpOiBPYnNlcnZhYmxlPE5nYkRhdGU+O1xuICAgIHNldChvcHRpb25zOiBEYXRlcGlja2VyU2VydmljZUlucHV0cyk6IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoX2NhbGVuZGFyOiBOZ2JDYWxlbmRhciwgX2kxOG46IE5nYkRhdGVwaWNrZXJJMThuKTtcbiAgICBmb2N1cyhkYXRlPzogTmdiRGF0ZSB8IG51bGwpOiB2b2lkO1xuICAgIGZvY3VzU2VsZWN0KCk6IHZvaWQ7XG4gICAgb3BlbihkYXRlPzogTmdiRGF0ZSB8IG51bGwpOiB2b2lkO1xuICAgIHNlbGVjdChkYXRlPzogTmdiRGF0ZSB8IG51bGwsIG9wdGlvbnM/OiB7XG4gICAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSk6IHZvaWQ7XG4gICAgdG9WYWxpZERhdGUoZGF0ZT86IE5nYkRhdGVTdHJ1Y3QgfCBudWxsLCBkZWZhdWx0VmFsdWU/OiBOZ2JEYXRlIHwgbnVsbCk6IE5nYkRhdGUgfCBudWxsO1xuICAgIGdldE1vbnRoKHN0cnVjdDogTmdiRGF0ZVN0cnVjdCk6IGltcG9ydChcIi4vZGF0ZXBpY2tlci12aWV3LW1vZGVsXCIpLk1vbnRoVmlld01vZGVsO1xuICAgIHByaXZhdGUgX25leHRTdGF0ZTtcbiAgICBwcml2YXRlIF9wYXRjaENvbnRleHRzO1xuICAgIHByaXZhdGUgX3VwZGF0ZVN0YXRlO1xufVxuIl19
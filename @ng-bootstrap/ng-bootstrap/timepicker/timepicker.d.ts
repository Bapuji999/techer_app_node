import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbTime } from './ngb-time';
import { NgbTimepickerConfig } from './timepicker-config';
import { NgbTimeAdapter } from './ngb-time-adapter';
import { NgbTimepickerI18n } from './timepicker-i18n';
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbTimepicker implements ControlValueAccessor, OnChanges {
    private readonly _config;
    private _ngbTimeAdapter;
    private _cd;
    i18n: NgbTimepickerI18n;
    static ngAcceptInputType_size: string;
    disabled: boolean;
    model: NgbTime;
    private _hourStep;
    private _minuteStep;
    private _secondStep;
    /**
     * Whether to display 12H or 24H mode.
     */
    meridian: boolean;
    /**
     * If `true`, the spinners above and below inputs are visible.
     */
    spinners: boolean;
    /**
     * If `true`, it is possible to select seconds.
     */
    seconds: boolean;
    /**
     * The number of hours to add/subtract when clicking hour spinners.
     */
    set hourStep(step: number);
    get hourStep(): number;
    /**
     * The number of minutes to add/subtract when clicking minute spinners.
     */
    set minuteStep(step: number);
    get minuteStep(): number;
    /**
     * The number of seconds to add/subtract when clicking second spinners.
     */
    set secondStep(step: number);
    get secondStep(): number;
    /**
     * If `true`, the timepicker is readonly and can't be changed.
     */
    readonlyInputs: boolean;
    /**
     * The size of inputs and buttons.
     */
    size: 'small' | 'medium' | 'large';
    constructor(_config: NgbTimepickerConfig, _ngbTimeAdapter: NgbTimeAdapter<any>, _cd: ChangeDetectorRef, i18n: NgbTimepickerI18n);
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    changeHour(step: number): void;
    changeMinute(step: number): void;
    changeSecond(step: number): void;
    updateHour(newVal: string): void;
    updateMinute(newVal: string): void;
    updateSecond(newVal: string): void;
    toggleMeridian(): void;
    formatInput(input: HTMLInputElement): void;
    formatHour(value?: number): string;
    formatMinSec(value?: number): string;
    get isSmallSize(): boolean;
    get isLargeSize(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    private propagateModelChange;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTimepicker>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbTimepicker, "ngb-timepicker", never, {
    "meridian": "meridian";
    "spinners": "spinners";
    "seconds": "seconds";
    "hourStep": "hourStep";
    "minuteStep": "minuteStep";
    "secondStep": "secondStep";
    "readonlyInputs": "readonlyInputs";
    "size": "size";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5kLnRzIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JUaW1lIH0gZnJvbSAnLi9uZ2ItdGltZSc7XG5pbXBvcnQgeyBOZ2JUaW1lcGlja2VyQ29uZmlnIH0gZnJvbSAnLi90aW1lcGlja2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ2JUaW1lQWRhcHRlciB9IGZyb20gJy4vbmdiLXRpbWUtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ2JUaW1lcGlja2VySTE4biB9IGZyb20gJy4vdGltZXBpY2tlci1pMThuJztcbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBoZWxwcyB3aXRoIHd0aCBwaWNraW5nIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUaW1lcGlja2VyIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29uZmlnO1xuICAgIHByaXZhdGUgX25nYlRpbWVBZGFwdGVyO1xuICAgIHByaXZhdGUgX2NkO1xuICAgIGkxOG46IE5nYlRpbWVwaWNrZXJJMThuO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaXplOiBzdHJpbmc7XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgbW9kZWw6IE5nYlRpbWU7XG4gICAgcHJpdmF0ZSBfaG91clN0ZXA7XG4gICAgcHJpdmF0ZSBfbWludXRlU3RlcDtcbiAgICBwcml2YXRlIF9zZWNvbmRTdGVwO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZGlzcGxheSAxMkggb3IgMjRIIG1vZGUuXG4gICAgICovXG4gICAgbWVyaWRpYW46IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgc3Bpbm5lcnMgYWJvdmUgYW5kIGJlbG93IGlucHV0cyBhcmUgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzcGlubmVyczogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGl0IGlzIHBvc3NpYmxlIHRvIHNlbGVjdCBzZWNvbmRzLlxuICAgICAqL1xuICAgIHNlY29uZHM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBob3VycyB0byBhZGQvc3VidHJhY3Qgd2hlbiBjbGlja2luZyBob3VyIHNwaW5uZXJzLlxuICAgICAqL1xuICAgIHNldCBob3VyU3RlcChzdGVwOiBudW1iZXIpO1xuICAgIGdldCBob3VyU3RlcCgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBtaW51dGVzIHRvIGFkZC9zdWJ0cmFjdCB3aGVuIGNsaWNraW5nIG1pbnV0ZSBzcGlubmVycy5cbiAgICAgKi9cbiAgICBzZXQgbWludXRlU3RlcChzdGVwOiBudW1iZXIpO1xuICAgIGdldCBtaW51dGVTdGVwKCk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gYWRkL3N1YnRyYWN0IHdoZW4gY2xpY2tpbmcgc2Vjb25kIHNwaW5uZXJzLlxuICAgICAqL1xuICAgIHNldCBzZWNvbmRTdGVwKHN0ZXA6IG51bWJlcik7XG4gICAgZ2V0IHNlY29uZFN0ZXAoKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHRpbWVwaWNrZXIgaXMgcmVhZG9ubHkgYW5kIGNhbid0IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHlJbnB1dHM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgaW5wdXRzIGFuZCBidXR0b25zLlxuICAgICAqL1xuICAgIHNpemU6ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG4gICAgY29uc3RydWN0b3IoX2NvbmZpZzogTmdiVGltZXBpY2tlckNvbmZpZywgX25nYlRpbWVBZGFwdGVyOiBOZ2JUaW1lQWRhcHRlcjxhbnk+LCBfY2Q6IENoYW5nZURldGVjdG9yUmVmLCBpMThuOiBOZ2JUaW1lcGlja2VySTE4bik7XG4gICAgb25DaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQ7XG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQ7XG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICBjaGFuZ2VIb3VyKHN0ZXA6IG51bWJlcik6IHZvaWQ7XG4gICAgY2hhbmdlTWludXRlKHN0ZXA6IG51bWJlcik6IHZvaWQ7XG4gICAgY2hhbmdlU2Vjb25kKHN0ZXA6IG51bWJlcik6IHZvaWQ7XG4gICAgdXBkYXRlSG91cihuZXdWYWw6IHN0cmluZyk6IHZvaWQ7XG4gICAgdXBkYXRlTWludXRlKG5ld1ZhbDogc3RyaW5nKTogdm9pZDtcbiAgICB1cGRhdGVTZWNvbmQobmV3VmFsOiBzdHJpbmcpOiB2b2lkO1xuICAgIHRvZ2dsZU1lcmlkaWFuKCk6IHZvaWQ7XG4gICAgZm9ybWF0SW5wdXQoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkO1xuICAgIGZvcm1hdEhvdXIodmFsdWU/OiBudW1iZXIpOiBzdHJpbmc7XG4gICAgZm9ybWF0TWluU2VjKHZhbHVlPzogbnVtYmVyKTogc3RyaW5nO1xuICAgIGdldCBpc1NtYWxsU2l6ZSgpOiBib29sZWFuO1xuICAgIGdldCBpc0xhcmdlU2l6ZSgpOiBib29sZWFuO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHByaXZhdGUgcHJvcGFnYXRlTW9kZWxDaGFuZ2U7XG59XG4iXX0=
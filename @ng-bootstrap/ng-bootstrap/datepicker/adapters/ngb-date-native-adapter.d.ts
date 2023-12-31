import { NgbDateAdapter } from './ngb-date-adapter';
import { NgbDateStruct } from '../ngb-date-struct';
/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     */
    fromModel(date: Date | null): NgbDateStruct | null;
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     */
    toModel(date: NgbDateStruct | null): Date | null;
    protected _fromNativeDate(date: Date): NgbDateStruct;
    protected _toNativeDate(date: NgbDateStruct): Date;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateNativeAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateNativeAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtbmF0aXZlLWFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsibmdiLWRhdGUtbmF0aXZlLWFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JEYXRlQWRhcHRlciB9IGZyb20gJy4vbmdiLWRhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi4vbmdiLWRhdGUtc3RydWN0Jztcbi8qKlxuICogW2BOZ2JEYXRlQWRhcHRlcmBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNOZ2JEYXRlQWRhcHRlcikgaW1wbGVtZW50YXRpb24gdGhhdCB1c2VzXG4gKiBuYXRpdmUgamF2YXNjcmlwdCBkYXRlcyBhcyBhIHVzZXIgZGF0ZSBtb2RlbC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZU5hdGl2ZUFkYXB0ZXIgZXh0ZW5kcyBOZ2JEYXRlQWRhcHRlcjxEYXRlPiB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBuYXRpdmUgYERhdGVgIHRvIGEgYE5nYkRhdGVTdHJ1Y3RgLlxuICAgICAqL1xuICAgIGZyb21Nb2RlbChkYXRlOiBEYXRlIHwgbnVsbCk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgYE5nYkRhdGVTdHJ1Y3RgIHRvIGEgbmF0aXZlIGBEYXRlYC5cbiAgICAgKi9cbiAgICB0b01vZGVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogRGF0ZSB8IG51bGw7XG4gICAgcHJvdGVjdGVkIF9mcm9tTmF0aXZlRGF0ZShkYXRlOiBEYXRlKTogTmdiRGF0ZVN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgX3RvTmF0aXZlRGF0ZShkYXRlOiBOZ2JEYXRlU3RydWN0KTogRGF0ZTtcbn1cbiJdfQ==
import { ECalendarValue } from '../common/types/calendar-value-enum';
import { SingleCalendarValue } from '../common/types/single-calendar-value';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, ValidationErrors, Validator } from '@angular/forms';
import { Moment } from 'moment';
import { CalendarValue } from '../common/types/calendar-value';
import { UtilsService } from '../common/services/utils/utils.service';
import { IDate } from '../common/models/date.model';
import { IDayTimeCalendarConfig } from './day-time-calendar-config.model';
import { DayTimeCalendarService } from './day-time-calendar.service';
import { DateValidator } from '../common/types/validator.type';
import { DayCalendarComponent } from '../day-calendar/day-calendar.component';
import { INavEvent } from '../common/models/navigation-event.model';
export declare class DayTimeCalendarComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    dayTimeCalendarService: DayTimeCalendarService;
    utilsService: UtilsService;
    cd: ChangeDetectorRef;
    get selected(): Moment;
    set selected(selected: Moment);
    config: IDayTimeCalendarConfig;
    displayDate: SingleCalendarValue;
    minDate: SingleCalendarValue;
    maxDate: SingleCalendarValue;
    theme: string;
    onChange: EventEmitter<IDate>;
    onGoToCurrent: EventEmitter<void>;
    onLeftNav: EventEmitter<INavEvent>;
    onRightNav: EventEmitter<INavEvent>;
    dayCalendarRef: DayCalendarComponent;
    isInited: boolean;
    componentConfig: IDayTimeCalendarConfig;
    inputValue: CalendarValue;
    inputValueType: ECalendarValue;
    validateFn: DateValidator;
    api: {
        moveCalendarTo: any;
    };
    _selected: Moment;
    constructor(dayTimeCalendarService: DayTimeCalendarService, utilsService: UtilsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    init(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: CalendarValue): void;
    registerOnChange(fn: any): void;
    onChangeCallback(_: any): void;
    registerOnTouched(fn: any): void;
    validate(formControl: FormControl): ValidationErrors | any;
    processOnChangeCallback(value: Moment): CalendarValue;
    initValidators(): void;
    dateSelected(day: IDate): void;
    timeChange(time: IDate): void;
    emitChange(): void;
    moveCalendarTo(to: SingleCalendarValue): void;
    onLeftNavClick(change: INavEvent): void;
    onRightNavClick(change: INavEvent): void;
}

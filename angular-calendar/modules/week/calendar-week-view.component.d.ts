import { EventEmitter, ChangeDetectorRef, OnChanges, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { WeekDay, CalendarEvent, WeekViewAllDayEvent, WeekView, WeekViewHourColumn, WeekViewTimeEvent, WeekViewHourSegment, WeekViewHour, WeekViewAllDayEventRow } from 'calendar-utils';
import { ResizeEvent } from 'angular-resizable-element';
import { CalendarEventTimesChangedEvent } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { DragEndEvent, DropEvent, DragMoveEvent, ValidateDrag } from 'angular-draggable-droppable';
import { PlacementArray } from 'positioning';
import * as ɵngcc0 from '@angular/core';
export interface WeekViewAllDayEventResize {
    originalOffset: number;
    originalSpan: number;
    edge: string;
}
export interface CalendarWeekViewBeforeRenderEvent extends WeekView {
    header: WeekDay[];
}
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
export declare class CalendarWeekViewComponent implements OnChanges, OnInit, OnDestroy {
    protected cdr: ChangeDetectorRef;
    protected utils: CalendarUtils;
    protected dateAdapter: DateAdapter;
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * An array of events to display on view
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */
    events: CalendarEvent[];
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */
    excludeDays: number[];
    /**
     * An observable that when emitted on will re-render the current view
     */
    refresh: Subject<any>;
    /**
     * The locale used to format dates
     */
    locale: string;
    /**
     * The placement of the event tooltip
     */
    tooltipPlacement: PlacementArray;
    /**
     * A custom template to use for the event tooltips
     */
    tooltipTemplate: TemplateRef<any>;
    /**
     * Whether to append tooltips to the body or next to the trigger element
     */
    tooltipAppendToBody: boolean;
    /**
     * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
     * will be displayed immediately.
     */
    tooltipDelay: number | null;
    /**
     * The start number of the week.
     * This is ignored when the `daysInWeek` input is also set as the `viewDate` will be used as the start of the week instead.
     * Note, you should also pass this to the calendar title pipe so it shows the same days: {{ viewDate | calendarDate:(view + 'ViewTitle'):locale:weekStartsOn }}
     * If using the moment date adapter this option won't do anything and you'll need to set it globally like so:
     * ```
     * moment.updateLocale('en', {
     *   week: {
     *     dow: 1, // set start of week to monday instead
     *     doy: 0,
     *   },
     * });
     * ```
     */
    weekStartsOn: number;
    /**
     * A custom template to use to replace the header
     */
    headerTemplate: TemplateRef<any>;
    /**
     * A custom template to use for week view events
     */
    eventTemplate: TemplateRef<any>;
    /**
     * A custom template to use for event titles
     */
    eventTitleTemplate: TemplateRef<any>;
    /**
     * A custom template to use for event actions
     */
    eventActionsTemplate: TemplateRef<any>;
    /**
     * The precision to display events.
     * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
     */
    precision: 'days' | 'minutes';
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that indicate which days are weekends
     */
    weekendDays: number[];
    /**
     * Whether to snap events to a grid when dragging
     */
    snapDraggedEvents: boolean;
    /**
     * The number of segments in an hour. Must divide equally into 60.
     */
    hourSegments: number;
    /**
     * The height in pixels of each hour segment
     */
    hourSegmentHeight: number;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     */
    dayStartHour: number;
    /**
     * The day start minutes. Must be 0-59
     */
    dayStartMinute: number;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     */
    dayEndHour: number;
    /**
     * The day end minutes. Must be 0-59
     */
    dayEndMinute: number;
    /**
     * A custom template to use to replace the hour segment
     */
    hourSegmentTemplate: TemplateRef<any>;
    /**
     * The grid size to snap resizing and dragging of hourly events to
     */
    eventSnapSize: number;
    /**
     * A custom template to use for the all day events label text
     */
    allDayEventsLabelTemplate: TemplateRef<any>;
    /**
     * The number of days in a week. Can be used to create a shorter or longer week view.
     * The first day of the week will always be the `viewDate` and `weekStartsOn` if set will be ignored
     */
    daysInWeek: number;
    /**
     * A custom template to use for the current time marker
     */
    currentTimeMarkerTemplate: TemplateRef<any>;
    /**
     * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
     */
    dayHeaderClicked: EventEmitter<{
        day: WeekDay;
        sourceEvent: MouseEvent;
    }>;
    /**
     * Called when the event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent<any>;
        sourceEvent: any;
    }>;
    /**
     * Called when an event is resized or dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent<any>>;
    /**
     * An output that will be called before the view is rendered for the current week.
     * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
     */
    beforeViewRender: EventEmitter<CalendarWeekViewBeforeRenderEvent>;
    /**
     * Called when an hour segment is clicked
     */
    hourSegmentClicked: EventEmitter<{
        date: Date;
        sourceEvent: MouseEvent;
    }>;
    /**
     * @hidden
     */
    days: WeekDay[];
    /**
     * @hidden
     */
    view: WeekView;
    /**
     * @hidden
     */
    refreshSubscription: Subscription;
    /**
     * @hidden
     */
    allDayEventResizes: Map<WeekViewAllDayEvent, WeekViewAllDayEventResize>;
    /**
     * @hidden
     */
    timeEventResizes: Map<CalendarEvent, ResizeEvent>;
    /**
     * @hidden
     */
    eventDragEnterByType: {
        allDay: number;
        time: number;
    };
    /**
     * @hidden
     */
    dragActive: boolean;
    /**
     * @hidden
     */
    dragAlreadyMoved: boolean;
    /**
     * @hidden
     */
    validateDrag: ValidateDrag;
    /**
     * @hidden
     */
    validateResize: (args: any) => boolean;
    /**
     * @hidden
     */
    dayColumnWidth: number;
    /**
     * @hidden
     */
    calendarId: symbol;
    /**
     * @hidden
     */
    lastDraggedEvent: CalendarEvent;
    /**
     * @hidden
     */
    trackByWeekDayHeaderDate: (index: number, day: WeekDay) => string;
    /**
     * @hidden
     */
    trackByHourSegment: (index: number, segment: WeekViewHourSegment) => string;
    /**
     * @hidden
     */
    trackByHour: (index: number, hour: WeekViewHour) => string;
    /**
     * @hidden
     */
    trackByWeekAllDayEvent: (index: number, weekEvent: WeekViewAllDayEvent) => string | number | CalendarEvent<any>;
    /**
     * @hidden
     */
    trackByWeekTimeEvent: (index: number, weekEvent: WeekViewTimeEvent) => string | number | CalendarEvent<any>;
    /**
     * @hidden
     */
    private lastDragEnterDate;
    /**
     * @hidden
     */
    constructor(cdr: ChangeDetectorRef, utils: CalendarUtils, locale: string, dateAdapter: DateAdapter);
    /**
     * @hidden
     */
    trackByHourColumn: (index: number, column: WeekViewHourColumn) => string | WeekViewHourColumn;
    /**
     * @hidden
     */
    trackById: (index: number, row: WeekViewAllDayEventRow) => string;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    timeEventResizeStarted(eventsContainer: HTMLElement, timeEvent: WeekViewTimeEvent, resizeEvent: ResizeEvent): void;
    /**
     * @hidden
     */
    timeEventResizing(timeEvent: WeekViewTimeEvent, resizeEvent: ResizeEvent): void;
    /**
     * @hidden
     */
    timeEventResizeEnded(timeEvent: WeekViewTimeEvent): void;
    /**
     * @hidden
     */
    allDayEventResizeStarted(allDayEventsContainer: HTMLElement, allDayEvent: WeekViewAllDayEvent, resizeEvent: ResizeEvent): void;
    /**
     * @hidden
     */
    allDayEventResizing(allDayEvent: WeekViewAllDayEvent, resizeEvent: ResizeEvent, dayWidth: number): void;
    /**
     * @hidden
     */
    allDayEventResizeEnded(allDayEvent: WeekViewAllDayEvent): void;
    /**
     * @hidden
     */
    getDayColumnWidth(eventRowContainer: HTMLElement): number;
    /**
     * @hidden
     */
    dateDragEnter(date: Date): void;
    /**
     * @hidden
     */
    eventDropped(dropEvent: DropEvent<{
        event?: CalendarEvent;
        calendarId?: symbol;
    }>, date: Date, allDay: boolean): void;
    /**
     * @hidden
     */
    dragEnter(type: 'allDay' | 'time'): void;
    /**
     * @hidden
     */
    dragLeave(type: 'allDay' | 'time'): void;
    /**
     * @hidden
     */
    dragStarted(eventsContainer: HTMLElement, event: HTMLElement, dayEvent?: WeekViewTimeEvent): void;
    /**
     * @hidden
     */
    dragMove(dayEvent: WeekViewTimeEvent, dragEvent: DragMoveEvent): void;
    /**
     * @hidden
     */
    allDayEventDragMove(): void;
    /**
     * @hidden
     */
    dragEnded(weekEvent: WeekViewAllDayEvent | WeekViewTimeEvent, dragEndEvent: DragEndEvent, dayWidth: number, useY?: boolean): void;
    protected refreshHeader(): void;
    protected refreshBody(): void;
    protected refreshAll(): void;
    protected emitBeforeViewRender(): void;
    protected getWeekView(events: CalendarEvent[]): WeekView;
    protected getDragMovedEventTimes(weekEvent: WeekViewAllDayEvent | WeekViewTimeEvent, dragEndEvent: DragEndEvent | DragMoveEvent, dayWidth: number, useY: boolean): {
        start: Date;
        end: Date;
    };
    protected restoreOriginalEvents(tempEvents: CalendarEvent[], adjustedEvents: Map<CalendarEvent, CalendarEvent>, snapDraggedEvents?: boolean): void;
    protected getTimeEventResizedDates(calendarEvent: CalendarEvent, resizeEvent: ResizeEvent): {
        start: Date;
        end: Date;
    };
    protected resizeStarted(eventsContainer: HTMLElement, minWidth?: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarWeekViewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarWeekViewComponent, "mwl-calendar-week-view", never, {
    "events": "events";
    "excludeDays": "excludeDays";
    "tooltipPlacement": "tooltipPlacement";
    "tooltipAppendToBody": "tooltipAppendToBody";
    "tooltipDelay": "tooltipDelay";
    "precision": "precision";
    "snapDraggedEvents": "snapDraggedEvents";
    "hourSegments": "hourSegments";
    "hourSegmentHeight": "hourSegmentHeight";
    "dayStartHour": "dayStartHour";
    "dayStartMinute": "dayStartMinute";
    "dayEndHour": "dayEndHour";
    "dayEndMinute": "dayEndMinute";
    "locale": "locale";
    "viewDate": "viewDate";
    "refresh": "refresh";
    "tooltipTemplate": "tooltipTemplate";
    "weekStartsOn": "weekStartsOn";
    "headerTemplate": "headerTemplate";
    "eventTemplate": "eventTemplate";
    "eventTitleTemplate": "eventTitleTemplate";
    "eventActionsTemplate": "eventActionsTemplate";
    "weekendDays": "weekendDays";
    "hourSegmentTemplate": "hourSegmentTemplate";
    "eventSnapSize": "eventSnapSize";
    "allDayEventsLabelTemplate": "allDayEventsLabelTemplate";
    "daysInWeek": "daysInWeek";
    "currentTimeMarkerTemplate": "currentTimeMarkerTemplate";
}, {
    "dayHeaderClicked": "dayHeaderClicked";
    "eventClicked": "eventClicked";
    "eventTimesChanged": "eventTimesChanged";
    "beforeViewRender": "beforeViewRender";
    "hourSegmentClicked": "hourSegmentClicked";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci13ZWVrLXZpZXcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdlZWtEYXksIENhbGVuZGFyRXZlbnQsIFdlZWtWaWV3QWxsRGF5RXZlbnQsIFdlZWtWaWV3LCBXZWVrVmlld0hvdXJDb2x1bW4sIFdlZWtWaWV3VGltZUV2ZW50LCBXZWVrVmlld0hvdXJTZWdtZW50LCBXZWVrVmlld0hvdXIsIFdlZWtWaWV3QWxsRGF5RXZlbnRSb3cgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBSZXNpemVFdmVudCB9IGZyb20gJ2FuZ3VsYXItcmVzaXphYmxlLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWV2ZW50LXRpbWVzLWNoYW5nZWQtZXZlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyVXRpbHMgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItdXRpbHMucHJvdmlkZXInO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBEcmFnRW5kRXZlbnQsIERyb3BFdmVudCwgRHJhZ01vdmVFdmVudCwgVmFsaWRhdGVEcmFnIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuZXhwb3J0IGludGVyZmFjZSBXZWVrVmlld0FsbERheUV2ZW50UmVzaXplIHtcbiAgICBvcmlnaW5hbE9mZnNldDogbnVtYmVyO1xuICAgIG9yaWdpbmFsU3BhbjogbnVtYmVyO1xuICAgIGVkZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJXZWVrVmlld0JlZm9yZVJlbmRlckV2ZW50IGV4dGVuZHMgV2Vla1ZpZXcge1xuICAgIGhlYWRlcjogV2Vla0RheVtdO1xufVxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gd2Vlay4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8bXdsLWNhbGVuZGFyLXdlZWstdmlld1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIj5cbiAqIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldz5cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgcHJvdGVjdGVkIHV0aWxzOiBDYWxlbmRhclV0aWxzO1xuICAgIHByb3RlY3RlZCBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAgICovXG4gICAgdmlld0RhdGU6IERhdGU7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgICAqL1xuICAgIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCB3aWxsIGJlIGhpZGRlbiBvbiB0aGUgdmlld1xuICAgICAqL1xuICAgIGV4Y2x1ZGVEYXlzOiBudW1iZXJbXTtcbiAgICAvKipcbiAgICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgd2hlbiBlbWl0dGVkIG9uIHdpbGwgcmUtcmVuZGVyIHRoZSBjdXJyZW50IHZpZXdcbiAgICAgKi9cbiAgICByZWZyZXNoOiBTdWJqZWN0PGFueT47XG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsZSB1c2VkIHRvIGZvcm1hdCBkYXRlc1xuICAgICAqL1xuICAgIGxvY2FsZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICAgKi9cbiAgICB0b29sdGlwUGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheTtcbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBldmVudCB0b29sdGlwc1xuICAgICAqL1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGFwcGVuZCB0b29sdGlwcyB0byB0aGUgYm9keSBvciBuZXh0IHRvIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbiAgICAgKi9cbiAgICB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIHRoZSB0b29sdGlwIHNob3VsZCBiZSBkaXNwbGF5ZWQuIElmIG5vdCBwcm92aWRlZCB0aGUgdG9vbHRpcFxuICAgICAqIHdpbGwgYmUgZGlzcGxheWVkIGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIHRvb2x0aXBEZWxheTogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RhcnQgbnVtYmVyIG9mIHRoZSB3ZWVrLlxuICAgICAqIFRoaXMgaXMgaWdub3JlZCB3aGVuIHRoZSBgZGF5c0luV2Vla2AgaW5wdXQgaXMgYWxzbyBzZXQgYXMgdGhlIGB2aWV3RGF0ZWAgd2lsbCBiZSB1c2VkIGFzIHRoZSBzdGFydCBvZiB0aGUgd2VlayBpbnN0ZWFkLlxuICAgICAqIE5vdGUsIHlvdSBzaG91bGQgYWxzbyBwYXNzIHRoaXMgdG8gdGhlIGNhbGVuZGFyIHRpdGxlIHBpcGUgc28gaXQgc2hvd3MgdGhlIHNhbWUgZGF5czoge3sgdmlld0RhdGUgfCBjYWxlbmRhckRhdGU6KHZpZXcgKyAnVmlld1RpdGxlJyk6bG9jYWxlOndlZWtTdGFydHNPbiB9fVxuICAgICAqIElmIHVzaW5nIHRoZSBtb21lbnQgZGF0ZSBhZGFwdGVyIHRoaXMgb3B0aW9uIHdvbid0IGRvIGFueXRoaW5nIGFuZCB5b3UnbGwgbmVlZCB0byBzZXQgaXQgZ2xvYmFsbHkgbGlrZSBzbzpcbiAgICAgKiBgYGBcbiAgICAgKiBtb21lbnQudXBkYXRlTG9jYWxlKCdlbicsIHtcbiAgICAgKiAgIHdlZWs6IHtcbiAgICAgKiAgICAgZG93OiAxLCAvLyBzZXQgc3RhcnQgb2Ygd2VlayB0byBtb25kYXkgaW5zdGVhZFxuICAgICAqICAgICBkb3k6IDAsXG4gICAgICogICB9LFxuICAgICAqIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBoZWFkZXJcbiAgICAgKi9cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHdlZWsgdmlldyBldmVudHNcbiAgICAgKi9cbiAgICBldmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgdGl0bGVzXG4gICAgICovXG4gICAgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgYWN0aW9uc1xuICAgICAqL1xuICAgIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRoZSBwcmVjaXNpb24gdG8gZGlzcGxheSBldmVudHMuXG4gICAgICogYGRheXNgIHdpbGwgcm91bmQgZXZlbnQgc3RhcnQgYW5kIGVuZCBkYXRlcyB0byB0aGUgbmVhcmVzdCBkYXkgYW5kIGBtaW51dGVzYCB3aWxsIG5vdCBkbyB0aGlzIHJvdW5kaW5nXG4gICAgICovXG4gICAgcHJlY2lzaW9uOiAnZGF5cycgfCAnbWludXRlcyc7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IGluZGljYXRlIHdoaWNoIGRheXMgYXJlIHdlZWtlbmRzXG4gICAgICovXG4gICAgd2Vla2VuZERheXM6IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc25hcCBldmVudHMgdG8gYSBncmlkIHdoZW4gZHJhZ2dpbmdcbiAgICAgKi9cbiAgICBzbmFwRHJhZ2dlZEV2ZW50czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHNlZ21lbnRzIGluIGFuIGhvdXIuIE11c3QgZGl2aWRlIGVxdWFsbHkgaW50byA2MC5cbiAgICAgKi9cbiAgICBob3VyU2VnbWVudHM6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IGluIHBpeGVscyBvZiBlYWNoIGhvdXIgc2VnbWVudFxuICAgICAqL1xuICAgIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGRheSBzdGFydCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgICAqL1xuICAgIGRheVN0YXJ0SG91cjogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXkgc3RhcnQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAgICovXG4gICAgZGF5U3RhcnRNaW51dGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IGVuZCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgICAqL1xuICAgIGRheUVuZEhvdXI6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IGVuZCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICAgKi9cbiAgICBkYXlFbmRNaW51dGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaG91ciBzZWdtZW50XG4gICAgICovXG4gICAgaG91clNlZ21lbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGUgZ3JpZCBzaXplIHRvIHNuYXAgcmVzaXppbmcgYW5kIGRyYWdnaW5nIG9mIGhvdXJseSBldmVudHMgdG9cbiAgICAgKi9cbiAgICBldmVudFNuYXBTaXplOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgYWxsIGRheSBldmVudHMgbGFiZWwgdGV4dFxuICAgICAqL1xuICAgIGFsbERheUV2ZW50c0xhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBkYXlzIGluIGEgd2Vlay4gQ2FuIGJlIHVzZWQgdG8gY3JlYXRlIGEgc2hvcnRlciBvciBsb25nZXIgd2VlayB2aWV3LlxuICAgICAqIFRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgd2lsbCBhbHdheXMgYmUgdGhlIGB2aWV3RGF0ZWAgYW5kIGB3ZWVrU3RhcnRzT25gIGlmIHNldCB3aWxsIGJlIGlnbm9yZWRcbiAgICAgKi9cbiAgICBkYXlzSW5XZWVrOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgY3VycmVudCB0aW1lIG1hcmtlclxuICAgICAqL1xuICAgIGN1cnJlbnRUaW1lTWFya2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBoZWFkZXIgd2VlayBkYXkgaXMgY2xpY2tlZC4gQWRkaW5nIGEgYGNzc0NsYXNzYCBwcm9wZXJ0eSBvbiBgJGV2ZW50LmRheWAgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgaGVhZGVyIGVsZW1lbnRcbiAgICAgKi9cbiAgICBkYXlIZWFkZXJDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBkYXk6IFdlZWtEYXk7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAgICovXG4gICAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBldmVudDogQ2FsZW5kYXJFdmVudDxhbnk+O1xuICAgICAgICBzb3VyY2VFdmVudDogYW55O1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgICAqL1xuICAgIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PGFueT4+O1xuICAgIC8qKlxuICAgICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgd2Vlay5cbiAgICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIGEgZGF5IGluIHRoZSBoZWFkZXIgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgY2VsbCBlbGVtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVZpZXdSZW5kZXI6IEV2ZW50RW1pdHRlcjxDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAgICovXG4gICAgaG91clNlZ21lbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBkYXRlOiBEYXRlO1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgICB9PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZGF5czogV2Vla0RheVtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2aWV3OiBXZWVrVmlldztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBhbGxEYXlFdmVudFJlc2l6ZXM6IE1hcDxXZWVrVmlld0FsbERheUV2ZW50LCBXZWVrVmlld0FsbERheUV2ZW50UmVzaXplPjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdGltZUV2ZW50UmVzaXplczogTWFwPENhbGVuZGFyRXZlbnQsIFJlc2l6ZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZXZlbnREcmFnRW50ZXJCeVR5cGU6IHtcbiAgICAgICAgYWxsRGF5OiBudW1iZXI7XG4gICAgICAgIHRpbWU6IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBkcmFnQWN0aXZlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBkcmFnQWxyZWFkeU1vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2YWxpZGF0ZURyYWc6IFZhbGlkYXRlRHJhZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdmFsaWRhdGVSZXNpemU6IChhcmdzOiBhbnkpID0+IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRheUNvbHVtbldpZHRoOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNhbGVuZGFySWQ6IHN5bWJvbDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbGFzdERyYWdnZWRFdmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlOiAoaW5kZXg6IG51bWJlciwgZGF5OiBXZWVrRGF5KSA9PiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHRyYWNrQnlIb3VyU2VnbWVudDogKGluZGV4OiBudW1iZXIsIHNlZ21lbnQ6IFdlZWtWaWV3SG91clNlZ21lbnQpID0+IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeUhvdXI6IChpbmRleDogbnVtYmVyLCBob3VyOiBXZWVrVmlld0hvdXIpID0+IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeVdlZWtBbGxEYXlFdmVudDogKGluZGV4OiBudW1iZXIsIHdlZWtFdmVudDogV2Vla1ZpZXdBbGxEYXlFdmVudCkgPT4gc3RyaW5nIHwgbnVtYmVyIHwgQ2FsZW5kYXJFdmVudDxhbnk+O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0cmFja0J5V2Vla1RpbWVFdmVudDogKGluZGV4OiBudW1iZXIsIHdlZWtFdmVudDogV2Vla1ZpZXdUaW1lRXZlbnQpID0+IHN0cmluZyB8IG51bWJlciB8IENhbGVuZGFyRXZlbnQ8YW55PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsYXN0RHJhZ0VudGVyRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgdXRpbHM6IENhbGVuZGFyVXRpbHMsIGxvY2FsZTogc3RyaW5nLCBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0cmFja0J5SG91ckNvbHVtbjogKGluZGV4OiBudW1iZXIsIGNvbHVtbjogV2Vla1ZpZXdIb3VyQ29sdW1uKSA9PiBzdHJpbmcgfCBXZWVrVmlld0hvdXJDb2x1bW47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHRyYWNrQnlJZDogKGluZGV4OiBudW1iZXIsIHJvdzogV2Vla1ZpZXdBbGxEYXlFdmVudFJvdykgPT4gc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0aW1lRXZlbnRSZXNpemVTdGFydGVkKGV2ZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRpbWVFdmVudDogV2Vla1ZpZXdUaW1lRXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHRpbWVFdmVudFJlc2l6aW5nKHRpbWVFdmVudDogV2Vla1ZpZXdUaW1lRXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHRpbWVFdmVudFJlc2l6ZUVuZGVkKHRpbWVFdmVudDogV2Vla1ZpZXdUaW1lRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBhbGxEYXlFdmVudFJlc2l6ZVN0YXJ0ZWQoYWxsRGF5RXZlbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCwgYWxsRGF5RXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGFsbERheUV2ZW50UmVzaXppbmcoYWxsRGF5RXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQsIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCwgZGF5V2lkdGg6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGFsbERheUV2ZW50UmVzaXplRW5kZWQoYWxsRGF5RXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXREYXlDb2x1bW5XaWR0aChldmVudFJvd0NvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRhdGVEcmFnRW50ZXIoZGF0ZTogRGF0ZSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGV2ZW50RHJvcHBlZChkcm9wRXZlbnQ6IERyb3BFdmVudDx7XG4gICAgICAgIGV2ZW50PzogQ2FsZW5kYXJFdmVudDtcbiAgICAgICAgY2FsZW5kYXJJZD86IHN5bWJvbDtcbiAgICB9PiwgZGF0ZTogRGF0ZSwgYWxsRGF5OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZHJhZ0VudGVyKHR5cGU6ICdhbGxEYXknIHwgJ3RpbWUnKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZHJhZ0xlYXZlKHR5cGU6ICdhbGxEYXknIHwgJ3RpbWUnKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZHJhZ1N0YXJ0ZWQoZXZlbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCwgZXZlbnQ6IEhUTUxFbGVtZW50LCBkYXlFdmVudD86IFdlZWtWaWV3VGltZUV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZHJhZ01vdmUoZGF5RXZlbnQ6IFdlZWtWaWV3VGltZUV2ZW50LCBkcmFnRXZlbnQ6IERyYWdNb3ZlRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBhbGxEYXlFdmVudERyYWdNb3ZlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRyYWdFbmRlZCh3ZWVrRXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQgfCBXZWVrVmlld1RpbWVFdmVudCwgZHJhZ0VuZEV2ZW50OiBEcmFnRW5kRXZlbnQsIGRheVdpZHRoOiBudW1iZXIsIHVzZVk/OiBib29sZWFuKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaEhlYWRlcigpOiB2b2lkO1xuICAgIHByb3RlY3RlZCByZWZyZXNoQm9keSgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCByZWZyZXNoQWxsKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGVtaXRCZWZvcmVWaWV3UmVuZGVyKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldFdlZWtWaWV3KGV2ZW50czogQ2FsZW5kYXJFdmVudFtdKTogV2Vla1ZpZXc7XG4gICAgcHJvdGVjdGVkIGdldERyYWdNb3ZlZEV2ZW50VGltZXMod2Vla0V2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50IHwgV2Vla1ZpZXdUaW1lRXZlbnQsIGRyYWdFbmRFdmVudDogRHJhZ0VuZEV2ZW50IHwgRHJhZ01vdmVFdmVudCwgZGF5V2lkdGg6IG51bWJlciwgdXNlWTogYm9vbGVhbik6IHtcbiAgICAgICAgc3RhcnQ6IERhdGU7XG4gICAgICAgIGVuZDogRGF0ZTtcbiAgICB9O1xuICAgIHByb3RlY3RlZCByZXN0b3JlT3JpZ2luYWxFdmVudHModGVtcEV2ZW50czogQ2FsZW5kYXJFdmVudFtdLCBhZGp1c3RlZEV2ZW50czogTWFwPENhbGVuZGFyRXZlbnQsIENhbGVuZGFyRXZlbnQ+LCBzbmFwRHJhZ2dlZEV2ZW50cz86IGJvb2xlYW4pOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRUaW1lRXZlbnRSZXNpemVkRGF0ZXMoY2FsZW5kYXJFdmVudDogQ2FsZW5kYXJFdmVudCwgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50KToge1xuICAgICAgICBzdGFydDogRGF0ZTtcbiAgICAgICAgZW5kOiBEYXRlO1xuICAgIH07XG4gICAgcHJvdGVjdGVkIHJlc2l6ZVN0YXJ0ZWQoZXZlbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCwgbWluV2lkdGg/OiBudW1iZXIpOiB2b2lkO1xufVxuIl19
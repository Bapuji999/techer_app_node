import { ModuleWithProviders, Provider } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './calendar-event-actions.component';
import * as ɵngcc2 from './calendar-event-title.component';
import * as ɵngcc3 from './calendar-tooltip.directive';
import * as ɵngcc4 from './calendar-previous-view.directive';
import * as ɵngcc5 from './calendar-next-view.directive';
import * as ɵngcc6 from './calendar-today.directive';
import * as ɵngcc7 from './calendar-date.pipe';
import * as ɵngcc8 from './calendar-event-title.pipe';
import * as ɵngcc9 from './calendar-a11y.pipe';
import * as ɵngcc10 from './click.directive';
import * as ɵngcc11 from './keydown-enter.directive';
import * as ɵngcc12 from '@angular/common';
export interface CalendarModuleConfig {
    eventTitleFormatter?: Provider;
    dateFormatter?: Provider;
    utils?: Provider;
    a11y?: Provider;
}
export * from './calendar-event-title-formatter.provider';
export * from './calendar-moment-date-formatter.provider';
export * from './calendar-native-date-formatter.provider';
export * from './calendar-angular-date-formatter.provider';
export * from './calendar-date-formatter.provider';
export * from './calendar-utils.provider';
export * from './calendar-a11y.provider';
export * from './calendar-a11y.interface';
export * from './calendar-date-formatter.interface';
export * from './calendar-event-times-changed-event.interface';
export * from '../../date-adapters/date-adapter';
export * from './calendar-view.enum';
export { CalendarEvent, EventAction as CalendarEventAction, DAYS_OF_WEEK, ViewPeriod as CalendarViewPeriod, } from 'calendar-utils';
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
export declare class CalendarCommonModule {
    static forRoot(dateAdapter: Provider, config?: CalendarModuleConfig): ModuleWithProviders<CalendarCommonModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CalendarCommonModule, [typeof ɵngcc1.CalendarEventActionsComponent, typeof ɵngcc2.CalendarEventTitleComponent, typeof ɵngcc3.CalendarTooltipWindowComponent, typeof ɵngcc3.CalendarTooltipDirective, typeof ɵngcc4.CalendarPreviousViewDirective, typeof ɵngcc5.CalendarNextViewDirective, typeof ɵngcc6.CalendarTodayDirective, typeof ɵngcc7.CalendarDatePipe, typeof ɵngcc8.CalendarEventTitlePipe, typeof ɵngcc9.CalendarA11yPipe, typeof ɵngcc10.ClickDirective, typeof ɵngcc11.KeydownEnterDirective], [typeof ɵngcc12.CommonModule], [typeof ɵngcc1.CalendarEventActionsComponent, typeof ɵngcc2.CalendarEventTitleComponent, typeof ɵngcc3.CalendarTooltipWindowComponent, typeof ɵngcc3.CalendarTooltipDirective, typeof ɵngcc4.CalendarPreviousViewDirective, typeof ɵngcc5.CalendarNextViewDirective, typeof ɵngcc6.CalendarTodayDirective, typeof ɵngcc7.CalendarDatePipe, typeof ɵngcc8.CalendarEventTitlePipe, typeof ɵngcc9.CalendarA11yPipe, typeof ɵngcc10.ClickDirective, typeof ɵngcc11.KeydownEnterDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CalendarCommonModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY29tbW9uLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1jb21tb24ubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyTW9kdWxlQ29uZmlnIHtcbiAgICBldmVudFRpdGxlRm9ybWF0dGVyPzogUHJvdmlkZXI7XG4gICAgZGF0ZUZvcm1hdHRlcj86IFByb3ZpZGVyO1xuICAgIHV0aWxzPzogUHJvdmlkZXI7XG4gICAgYTExeT86IFByb3ZpZGVyO1xufVxuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1tb21lbnQtZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1uYXRpdmUtZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1hbmd1bGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWExMXkucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1hMTF5LmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpbWVzLWNoYW5nZWQtZXZlbnQuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItdmlldy5lbnVtJztcbmV4cG9ydCB7IENhbGVuZGFyRXZlbnQsIEV2ZW50QWN0aW9uIGFzIENhbGVuZGFyRXZlbnRBY3Rpb24sIERBWVNfT0ZfV0VFSywgVmlld1BlcmlvZCBhcyBDYWxlbmRhclZpZXdQZXJpb2QsIH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuLyoqXG4gKiBJbXBvcnQgdGhpcyBtb2R1bGUgdG8gaWYgeW91J3JlIGp1c3QgdXNpbmcgYSBzaW5ndWxhciB2aWV3IGFuZCB3YW50IHRvIHNhdmUgb24gYnVuZGxlIHNpemUuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kYXJDb21tb25Nb2R1bGUsIENhbGVuZGFyTW9udGhNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQ2FsZW5kYXJDb21tb25Nb2R1bGUuZm9yUm9vdCgpLFxuICogICAgIENhbGVuZGFyTW9udGhNb2R1bGVcbiAqICAgXVxuICogfSlcbiAqIGNsYXNzIE15TW9kdWxlIHt9XG4gKiBgYGBcbiAqXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyQ29tbW9uTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChkYXRlQWRhcHRlcjogUHJvdmlkZXIsIGNvbmZpZz86IENhbGVuZGFyTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYWxlbmRhckNvbW1vbk1vZHVsZT47XG59XG4iXX0=
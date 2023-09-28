import { ModuleWithProviders, Provider } from '@angular/core';
import { CalendarModuleConfig } from './common/calendar-common.module';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './common/calendar-common.module';
import * as ɵngcc2 from './month/calendar-month.module';
import * as ɵngcc3 from './week/calendar-week.module';
import * as ɵngcc4 from './day/calendar-day.module';
export * from './common/calendar-common.module';
export * from './month/calendar-month.module';
export * from './week/calendar-week.module';
export * from './day/calendar-day.module';
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
export declare class CalendarModule {
    static forRoot(dateAdapter: Provider, config?: CalendarModuleConfig): ModuleWithProviders<CalendarModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CalendarModule, never, [typeof ɵngcc1.CalendarCommonModule, typeof ɵngcc2.CalendarMonthModule, typeof ɵngcc3.CalendarWeekModule, typeof ɵngcc4.CalendarDayModule], [typeof ɵngcc1.CalendarCommonModule, typeof ɵngcc2.CalendarMonthModule, typeof ɵngcc3.CalendarWeekModule, typeof ɵngcc4.CalendarDayModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CalendarModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLm1vZHVsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb21tb24vY2FsZW5kYXItY29tbW9uLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbW9udGgvY2FsZW5kYXItbW9udGgubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vd2Vlay9jYWxlbmRhci13ZWVrLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2RheS9jYWxlbmRhci1kYXkubW9kdWxlJztcbi8qKlxuICogVGhlIG1haW4gbW9kdWxlIG9mIHRoaXMgbGlicmFyeS4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxlbmRlck1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICBDYWxlbmRlck1vZHVsZS5mb3JSb290KClcbiAqICAgXVxuICogfSlcbiAqIGNsYXNzIE15TW9kdWxlIHt9XG4gKiBgYGBcbiAqXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChkYXRlQWRhcHRlcjogUHJvdmlkZXIsIGNvbmZpZz86IENhbGVuZGFyTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYWxlbmRhck1vZHVsZT47XG59XG4iXX0=
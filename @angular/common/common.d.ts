/**
 * @license Angular v9.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { ChangeDetectorRef } from '@angular/core';
import { DoCheck } from '@angular/core';
import { ElementRef } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { IterableDiffers } from '@angular/core';
import { KeyValueDiffers } from '@angular/core';
import { NgIterable } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { TrackByFunction } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

/**
 * A predefined [DI token](guide/glossary#di-token) for the base href
 * to be used with the `PathLocationStrategy`.
 * The base href is the URL prefix that should be preserved when generating
 * and recognizing URLs.
 *
 * @usageNotes
 *
 * The following example shows how to use this token to configure the root app injector
 * with a base href value, so that the DI framework can supply the dependency anywhere in the app.
 *
 * ```typescript
 * import {Component, NgModule} from '@angular/core';
 * import {APP_BASE_HREF} from '@angular/common';
 *
 * @NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare const APP_BASE_HREF: InjectionToken<string>;

/**
 * @ngModule CommonModule
 * @description
 *
 * Unwraps a value from an asynchronous primitive.
 *
 * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
 * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
 * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 * @usageNotes
 *
 * ### Examples
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. The Observable continuously updates the view with the current time.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
 *
 * @publicApi
 */
export declare class AsyncPipe implements OnDestroy, PipeTransform {
    private _ref;
    private _latestValue;
    private _latestReturnedValue;
    private _subscription;
    private _obj;
    private _strategy;
    constructor(_ref: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform<T>(obj: null): null;
    transform<T>(obj: undefined): undefined;
    transform<T>(obj: Observable<T> | null | undefined): T | null;
    transform<T>(obj: Promise<T> | null | undefined): T | null;
    private _subscribe;
    private _selectStrategy;
    private _dispose;
    private _updateLatestValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsyncPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<AsyncPipe, "async">;
}


/**
 * Exports all the basic Angular directives and pipes,
 * such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
 * Re-exported by `BrowserModule`, which is included automatically in the root
 * `AppModule` when you create a new app with the CLI `new` command.
 *
 * * The `providers` options configure the NgModule's injector to provide
 * localization dependencies to members.
 * * The `exports` options make the declared directives and pipes available for import
 * by other NgModules.
 *
 * @publicApi
 */
export declare class CommonModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CommonModule, [typeof NgClass, typeof NgComponentOutlet, typeof NgForOf, typeof NgIf, typeof NgTemplateOutlet, typeof NgStyle, typeof NgSwitch, typeof NgSwitchCase, typeof NgSwitchDefault, typeof NgPlural, typeof NgPluralCase, typeof AsyncPipe, typeof UpperCasePipe, typeof LowerCasePipe, typeof JsonPipe, typeof SlicePipe, typeof DecimalPipe, typeof PercentPipe, typeof TitleCasePipe, typeof CurrencyPipe, typeof DatePipe, typeof I18nPluralPipe, typeof I18nSelectPipe, typeof KeyValuePipe], never, [typeof NgClass, typeof NgComponentOutlet, typeof NgForOf, typeof NgIf, typeof NgTemplateOutlet, typeof NgStyle, typeof NgSwitch, typeof NgSwitchCase, typeof NgSwitchDefault, typeof NgPlural, typeof NgPluralCase, typeof AsyncPipe, typeof UpperCasePipe, typeof LowerCasePipe, typeof JsonPipe, typeof SlicePipe, typeof DecimalPipe, typeof PercentPipe, typeof TitleCasePipe, typeof CurrencyPipe, typeof DatePipe, typeof I18nPluralPipe, typeof I18nSelectPipe, typeof KeyValuePipe]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CommonModule>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a currency string, formatted according to locale rules
 * that determine group sizing and separator, decimal-point character,
 * and other locale-specific configurations.
 *
 * {@a currency-code-deprecation}
 * <div class="alert is-helpful">
 *
 * **Deprecation notice:**
 *
 * The default currency code is currently always `USD` but this is deprecated from v9.
 *
 * **In v11 the default currency code will be taken from the current locale identified by
 * the `LOCAL_ID` token. See the [i18n guide](guide/i18n#setting-up-the-locale-of-your-app) for
 * more information.**
 *
 * If you need the previous behavior then set it by creating a `DEFAULT_CURRENCY_CODE` provider in
 * your application `NgModule`:
 *
 * ```ts
 * {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
 * ```
 *
 * </div>
 *
 * @see `getCurrencySymbol()`
 * @see `formatCurrency()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>
 *
 * @publicApi
 */
export declare class CurrencyPipe implements PipeTransform {
    private _locale;
    private _defaultCurrencyCode;
    constructor(_locale: string, _defaultCurrencyCode?: string);
    /**
     *
     * @param value The number to be formatted as currency.
     * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
     * such as `USD` for the US dollar and `EUR` for the euro. The default currency code can be
     * configured using the `DEFAULT_CURRENCY_CODE` injection token.
     * @param display The format for the currency indicator. One of the following:
     *   - `code`: Show the code (such as `USD`).
     *   - `symbol`(default): Show the symbol (such as `$`).
     *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
     * currency.
     * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
     * locale has no narrow symbol, uses the standard symbol for the locale.
     *   - String: Use the given string value instead of a code or a symbol.
     * For example, an empty string will suppress the currency & symbol.
     *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
     *
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `2`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `2`.
     * If not provided, the number will be formatted with the proper amount of digits,
     * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
     * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrencyPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CurrencyPipe, "currency">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date value according to locale rules.
 *
 * Only the `en-US` locale data comes with Angular. To localize dates
 * in another language, you must import the corresponding locale data.
 * See the [I18n guide](guide/i18n#i18n-pipes) for more information.
 *
 * @see `formatDate()`
 *
 *
 * @usageNotes
 *
 * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
 * reformat the date on every change-detection cycle, treat the date as an immutable object
 * and change the reference when the pipe needs to run again.
 *
 * ### Pre-defined format options
 *
 * Examples are given in `en-US` locale.
 *
 * - `'short'`: equivalent to `'M/d/yy, h:mm a'` (`6/15/15, 9:03 AM`).
 * - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (`Jun 15, 2015, 9:03:01 AM`).
 * - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (`June 15, 2015 at 9:03:01 AM
 * GMT+1`).
 * - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (`Monday, June 15, 2015 at
 * 9:03:01 AM GMT+01:00`).
 * - `'shortDate'`: equivalent to `'M/d/yy'` (`6/15/15`).
 * - `'mediumDate'`: equivalent to `'MMM d, y'` (`Jun 15, 2015`).
 * - `'longDate'`: equivalent to `'MMMM d, y'` (`June 15, 2015`).
 * - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (`Monday, June 15, 2015`).
 * - `'shortTime'`: equivalent to `'h:mm a'` (`9:03 AM`).
 * - `'mediumTime'`: equivalent to `'h:mm:ss a'` (`9:03:01 AM`).
 * - `'longTime'`: equivalent to `'h:mm:ss a z'` (`9:03:01 AM GMT+1`).
 * - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (`9:03:01 AM GMT+01:00`).
 *
 * ### Custom format options
 *
 * You can construct a format string using symbols to specify the components
 * of a date-time value, as described in the following table.
 * Format details depend on the locale.
 * Fields marked with (*) are only available in the extra data set for the given locale.
 *
 *  | Field type         | Format      | Description                                                   | Example Value                                              |
 *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
 *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
 *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
 *  |                    | GGGGG       | Narrow                                                        | A                                                          |
 *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
 *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
 *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
 *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
 *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
 *  |                    | MMMM        | Wide                                                          | September                                                  |
 *  |                    | MMMMM       | Narrow                                                        | S                                                          |
 *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
 *  |                    | LLLL        | Wide                                                          | September                                                  |
 *  |                    | LLLLL       | Narrow                                                        | S                                                          |
 *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
 *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
 *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
 *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
 *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
 *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
 *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
 *  |                    | EEEEE       | Narrow                                                        | T                                                          |
 *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
 *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
 *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
 *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
 *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
 *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | BBBBB       | Narrow                                                        | md                                                         |
 *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
 *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | bbbbb       | Narrow                                                        | md                                                         |
 *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
 *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
 *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
 *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
 *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
 *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
 *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
 *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
 *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
 *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
 *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
 *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
 *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
 *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
 *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
 *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
 *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
 *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
 *
 * Note that timezone correction is not applied to an ISO string that has no time component, such as "2016-09-19"
 *
 * ### Format examples
 *
 * These examples transform a date into various formats,
 * assuming that `dateObj` is a JavaScript `Date` object for
 * year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
 * given in the local time for the `en-US` locale.
 *
 * ```
 * {{ dateObj | date }}               // output is 'Jun 15, 2015'
 * {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
 * {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
 * {{ dateObj | date:'mm:ss' }}       // output is '43:11'
 * ```
 *
 * ### Usage example
 *
 * The following component uses a date pipe to display the current date in different formats.
 *
 * ```
 * @Component({
 *  selector: 'date-pipe',
 *  template: `<div>
 *    <p>Today is {{today | date}}</p>
 *    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
 *    <p>The time is {{today | date:'h:mm a z'}}</p>
 *  </div>`
 * })
 * // Get the current date and time as a date-time value.
 * export class DatePipeComponent {
 *   today: number = Date.now();
 * }
 * ```
 *
 * @publicApi
 */
export declare class DatePipe implements PipeTransform {
    private locale;
    constructor(locale: string);
    /**
     * @param value The date expression: a `Date` object,  a number
     * (milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).
     * @param format The date/time components to include, using predefined options or a
     * custom format string.
     * @param timezone A timezone offset (such as `'+0430'`), or a standard
     * UTC/GMT or continental US timezone abbreviation.
     * When not supplied, uses the end-user's local system timezone.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     * @returns A date string in the desired format.
     */
    transform(value: any, format?: string, timezone?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DatePipe, "date">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number into a string,
 * formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * If no parameters are specified, the function rounds off to the nearest value using this
 * [rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
 * The behavior differs from that of the JavaScript ```Math.round()``` function.
 * In the following case for example, the pipe rounds down where
 * ```Math.round()``` rounds up:
 *
 * ```html
 * -2.5 | number:'1.0-0'
 * > -3
 * Math.round(-2.5)
 * > -2
 * ```
 *
 * @see `formatNumber()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * ### Example
 *
 * <code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>
 *
 * @publicApi
 */
export declare class DecimalPipe implements PipeTransform {
    private _locale;
    constructor(_locale: string);
    /**
     * @param value The number to be formatted.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `3`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DecimalPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DecimalPipe, "number">;
}

/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application in a Web Worker).
 *
 * @publicApi
 */
export declare const DOCUMENT: InjectionToken<Document>;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as currency using locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param currency A string containing the currency symbol or its name,
 * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
 * of the function.
 * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 * currency code, such as `USD` for the US dollar and `EUR` for the euro.
 * Used to determine the number of digits in the decimal part.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted currency value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatCurrency(value: number, locale: string, currency: string, currencyCode?: string, digitsInfo?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date according to locale rules.
 *
 * @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
 * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
 * @param format The date-time components to include. See `DatePipe` for details.
 * @param locale A locale code for the locale format rules to use.
 * @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
 * or a standard UTC/GMT or continental US time zone abbreviation.
 * If not specified, uses host system settings.
 *
 * @returns The formatted date string.
 *
 * @see `DatePipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatDate(value: string | number | Date, format: string, locale: string, timezone?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as text, with group sizing, separator, and other
 * parameters based on the locale.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted text string.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function formatNumber(value: number, locale: string, digitsInfo?: string): string;

/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as a percentage according to locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted percentage value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 *
 */
export declare function formatPercent(value: number, locale: string, digitsInfo?: string): string;

/**
 * String widths available for date-time formats.
 * The specific character widths are locale-specific.
 * Examples are given for `en-US`.
 *
 * @see `getLocaleDateFormat()`
 * @see `getLocaleTimeFormat()``
 * @see `getLocaleDateTimeFormat()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 */
export declare enum FormatWidth {
    /**
     * For `en-US`, 'M/d/yy, h:mm a'`
     * (Example: `6/15/15, 9:03 AM`)
     */
    Short = 0,
    /**
     * For `en-US`, `'MMM d, y, h:mm:ss a'`
     * (Example: `Jun 15, 2015, 9:03:01 AM`)
     */
    Medium = 1,
    /**
     * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
     * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
     */
    Long = 2,
    /**
     * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
     * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
     */
    Full = 3
}

/**
 * Context-dependant translation forms for strings.
 * Typically the standalone version is for the nominative form of the word,
 * and the format version is used for the genitive case.
 * @see [CLDR website](http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum FormStyle {
    Format = 0,
    Standalone = 1
}

/**
 * Retrieves the currency symbol for a given currency code.
 *
 * For example, for the default `en-US` locale, the code `USD` can
 * be represented by the narrow symbol `$` or the wide symbol `US$`.
 *
 * @param code The currency code.
 * @param format The format, `wide` or `narrow`.
 * @param locale A locale code for the locale format rules to use.
 *
 * @returns The symbol, or the currency code if no symbol is available.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getCurrencySymbol(code: string, format: 'wide' | 'narrow', locale?: string): string;

/**
 * Retrieves the default currency code for the given locale.
 *
 * The default is defined as the first currency which is still in use.
 *
 * @param locale The code of the locale whose currency code we want.
 * @returns The code of the default currency for the given locale.
 *
 * @publicApi
 */
export declare function getLocaleCurrencyCode(locale: string): string | null;

/**
 * Retrieves the name of the currency for the main country corresponding
 * to a given locale. For example, 'US Dollar' for `en-US`.
 * @param locale A locale code for the locale format rules to use.
 * @returns The currency name,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleCurrencyName(locale: string): string | null;

/**
 * Retrieves the symbol used to represent the currency for the main country
 * corresponding to a given locale. For example, '$' for `en-US`.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The localized symbol character,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleCurrencySymbol(locale: string): string | null;

/**
 * Retrieves a localized date-value formating string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formating string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDateFormat(locale: string, width: FormatWidth): string;

/**
 * Retrieves a localized date-time formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDateTimeFormat(locale: string, width: FormatWidth): string;

/**
 * Retrieves days of the week for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDayNames(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves day period strings for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized period strings. For example, `[AM, PM]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleDayPeriods(locale: string, formStyle: FormStyle, width: TranslationWidth): [string, string];

/**
 * Retrieves Gregorian-calendar eras for the given locale.
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.

 * @returns An array of localized era strings.
 * For example, `[AD, BC]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleEraNames(locale: string, width: TranslationWidth): [string, string];

/**
 * Retrieves locale-specific rules used to determine which day period to use
 * when more than one period is defined for a locale.
 *
 * There is a rule for each defined day period. The
 * first rule is applied to the first day period and so on.
 * Fall back to AM/PM when no rules are available.
 *
 * A rule can specify a period as time range, or as a single time value.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The rules for the locale, a single time value or array of *from-time, to-time*,
 * or null if no periods are available.
 *
 * @see `getLocaleExtraDayPeriods()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleExtraDayPeriodRules(locale: string): (Time | [Time, Time])[];

/**
 * Retrieves locale-specific day periods, which indicate roughly how a day is broken up
 * in different languages.
 * For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns The translated day-period strings.
 * @see `getLocaleExtraDayPeriodRules()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleExtraDayPeriods(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves the first day of the week for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns A day index number, using the 0-based week-day index for `en-US`
 * (Sunday = 0, Monday = 1, ...).
 * For example, for `fr-FR`, returns 1 to indicate that the first day is Monday.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleFirstDayOfWeek(locale: string): WeekDay;

/**
 * Retrieves the locale ID from the currently loaded locale.
 * The loaded locale could be, for example, a global one rather than a regional one.
 * @param locale A locale code, such as `fr-FR`.
 * @returns The locale code. For example, `fr`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleId(locale: string): string;

/**
 * Retrieves months of the year for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,  `[January, February, ...]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleMonthNames(locale: string, formStyle: FormStyle, width: TranslationWidth): string[];

/**
 * Retrieves a number format for a given locale.
 *
 * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
 * when used to format the number 12345.678 could result in "12'345,678". That would happen if the
 * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
 *
 * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
 * that stand for the decimal separator, and so on, and are NOT real characters.
 * You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
 * your language the decimal point is written with a comma. The symbols should be replaced by the
 * local equivalents, using the appropriate `NumberSymbol` for your language.
 *
 * Here are the special characters used in number patterns:
 *
 * | Symbol | Meaning |
 * |--------|---------|
 * | . | Replaced automatically by the character used for the decimal point. |
 * | , | Replaced by the "grouping" (thousands) separator. |
 * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
 * | # | Replaced by a digit (or nothing if there aren't enough). |
 * | ¤ | Replaced by a currency symbol, such as $ or USD. |
 * | % | Marks a percent format. The % symbol may change position, but must be retained. |
 * | E | Marks a scientific format. The E symbol may change position, but must be retained. |
 * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
 *
 * @param locale A locale code for the locale format rules to use.
 * @param type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
 * @returns The localized format string.
 * @see `NumberFormatStyle`
 * @see [CLDR website](http://cldr.unicode.org/translation/number-patterns)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleNumberFormat(locale: string, type: NumberFormatStyle): string;

/**
 * Retrieves a localized number symbol that can be used to replace placeholders in number formats.
 * @param locale The locale code.
 * @param symbol The symbol to localize.
 * @returns The character for the localized symbol.
 * @see `NumberSymbol`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleNumberSymbol(locale: string, symbol: NumberSymbol): string;

/**
 * @alias core/ɵgetLocalePluralCase
 * @publicApi
 */
export declare const getLocalePluralCase: (locale: string) => ((value: number) => Plural);

/**
 * Retrieves a localized time-value formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)

 * @publicApi
 */
export declare function getLocaleTimeFormat(locale: string, width: FormatWidth): string;

/**
 * Range of week days that are considered the week-end for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The range of day values, `[startDay, endDay]`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getLocaleWeekEndRange(locale: string): [WeekDay, WeekDay];

/**
 * Reports the number of decimal digits for a given currency.
 * The value depends upon the presence of cents in that particular currency.
 *
 * @param code The currency code.
 * @returns The number of decimal digits, typically 0 or 2.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare function getNumberOfCurrencyDigits(code: string): number;

/**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */
export declare class HashLocationStrategy extends LocationStrategy {
    private _platformLocation;
    private _baseHref;
    constructor(_platformLocation: PlatformLocation, _baseHref?: string);
    onPopState(fn: LocationChangeListener): void;
    getBaseHref(): string;
    path(includeHash?: boolean): string;
    prepareExternalUrl(internal: string): string;
    pushState(state: any, title: string, path: string, queryParams: string): void;
    replaceState(state: any, title: string, path: string, queryParams: string): void;
    forward(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HashLocationStrategy>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<HashLocationStrategy>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Maps a value to a string that pluralizes the value according to locale rules.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
 *
 * @publicApi
 */
export declare class I18nPluralPipe implements PipeTransform {
    private _localization;
    constructor(_localization: NgLocalization);
    /**
     * @param value the number to be formatted
     * @param pluralMap an object that mimics the ICU format, see
     * http://userguide.icu-project.org/formatparse/messages.
     * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
     * default).
     */
    transform(value: number, pluralMap: {
        [count: string]: string;
    }, locale?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nPluralPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<I18nPluralPipe, "i18nPlural">;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Generic selector that displays the string that matches the current value.
 *
 * If none of the keys of the `mapping` match the `value`, then the content
 * of the `other` key is returned when present, otherwise an empty string is returned.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
 *
 * @publicApi
 */
export declare class I18nSelectPipe implements PipeTransform {
    /**
     * @param value a string to be internationalized.
     * @param mapping an object that indicates the text that should be displayed
     * for different values of the provided `value`.
     */
    transform(value: string | null | undefined, mapping: {
        [key: string]: string;
    }): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nSelectPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<I18nSelectPipe, "i18nSelect">;
}

/**
 * Returns whether a platform id represents a browser platform.
 * @publicApi
 */
export declare function isPlatformBrowser(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a server platform.
 * @publicApi
 */
export declare function isPlatformServer(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a web worker app platform.
 * @publicApi
 */
export declare function isPlatformWorkerApp(platformId: Object): boolean;

/**
 * Returns whether a platform id represents a web worker UI platform.
 * @publicApi
 */
export declare function isPlatformWorkerUi(platformId: Object): boolean;

/**
 * @ngModule CommonModule
 * @description
 *
 * Converts a value into its JSON-format representation.  Useful for debugging.
 *
 * @usageNotes
 *
 * The following component uses a JSON pipe to convert an object
 * to JSON format, and displays the string in both formats for comparison.
 *
 * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 * @publicApi
 */
export declare class JsonPipe implements PipeTransform {
    /**
     * @param value A value of any type to convert into a JSON-format string.
     */
    transform(value: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<JsonPipe, "json">;
}

/**
 * A key value pair.
 * Usually used to represent the key value pairs from a Map or Object.
 *
 * @publicApi
 */
export declare interface KeyValue<K, V> {
    key: K;
    value: V;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms Object or Map into an array of key value pairs.
 *
 * The output array will be ordered by keys.
 * By default the comparator will be by Unicode point value.
 * You can optionally pass a compareFn if your keys are complex types.
 *
 * @usageNotes
 * ### Examples
 *
 * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
 * pipe.
 *
 * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
 *
 * @publicApi
 */
export declare class KeyValuePipe implements PipeTransform {
    private readonly differs;
    constructor(differs: KeyValueDiffers);
    private differ;
    private keyValues;
    transform<K, V>(input: null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): null;
    transform<V>(input: {
        [key: string]: V;
    } | Map<string, V>, compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number): Array<KeyValue<string, V>>;
    transform<V>(input: {
        [key: number]: V;
    } | Map<number, V>, compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number): Array<KeyValue<number, V>>;
    transform<K, V>(input: Map<K, V>, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KeyValuePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<KeyValuePipe, "keyvalue">;
}

/**
 * @description
 *
 * A service that applications can use to interact with a browser's URL.
 *
 * Depending on the `LocationStrategy` used, `Location` persists
 * to the URL's path or the URL's hash segment.
 *
 * @usageNotes
 *
 * It's better to use the `Router#navigate` service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 *
 * <code-example path='common/location/ts/path_location_component.ts'
 * region='LocationComponent'></code-example>
 *
 * @publicApi
 */
export declare class Location {
    constructor(platformStrategy: LocationStrategy, platformLocation: PlatformLocation);
    /**
     * Normalizes the URL path for this location.
     *
     * @param includeHash True to include an anchor fragment in the path.
     *
     * @returns The normalized URL path.
     */
    path(includeHash?: boolean): string;
    /**
     * Reports the current state of the location history.
     * @returns The current value of the `history.state` object.
     */
    getState(): unknown;
    /**
     * Normalizes the given path and compares to the current normalized path.
     *
     * @param path The given URL path.
     * @param query Query parameters.
     *
     * @returns True if the given URL path is equal to the current normalized path, false
     * otherwise.
     */
    isCurrentPathEqualTo(path: string, query?: string): boolean;
    /**
     * Normalizes a URL path by stripping any trailing slashes.
     *
     * @param url String representing a URL.
     *
     * @returns The normalized URL string.
     */
    normalize(url: string): string;
    /**
     * Normalizes an external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), adds one
     * before normalizing. Adds a hash if `HashLocationStrategy` is
     * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     *
     * @param url String representing a URL.
     *
     * @returns  A normalized platform-specific URL.
     */
    prepareExternalUrl(url: string): string;
    /**
     * Changes the browser's URL to a normalized version of a given URL, and pushes a
     * new item onto the platform's history.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     *
     */
    go(path: string, query?: string, state?: any): void;
    /**
     * Changes the browser's URL to a normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     *
     * @param path  URL path to normalize.
     * @param query Query parameters.
     * @param state Location history state.
     */
    replaceState(path: string, query?: string, state?: any): void;
    /**
     * Navigates forward in the platform's history.
     */
    forward(): void;
    /**
     * Navigates back in the platform's history.
     */
    back(): void;
    /**
     * Registers a URL change listener. Use to catch updates performed by the Angular
     * framework that are not detectible through "popstate" or "hashchange" events.
     *
     * @param fn The change handler function, which take a URL and a location history state.
     */
    onUrlChange(fn: (url: string, state: unknown) => void): void;
    /**
     * Subscribes to the platform's `popState` events.
     *
     * @param value Event that is triggered when the state history changes.
     * @param exception The exception to throw.
     *
     * @returns Subscribed events.
     */
    subscribe(onNext: (value: PopStateEvent) => void, onThrow?: ((exception: any) => void) | null, onReturn?: (() => void) | null): SubscriptionLike;
    /**
     * Normalizes URL parameters by prepending with `?` if needed.
     *
     * @param  params String of URL parameters.
     *
     * @returns The normalized URL parameters string.
     */
    static normalizeQueryParams: (params: string) => string;
    /**
     * Joins two parts of a URL with a slash if needed.
     *
     * @param start  URL string
     * @param end    URL string
     *
     *
     * @returns The joined URL string.
     */
    static joinWithSlash: (start: string, end: string) => string;
    /**
     * Removes a trailing slash from a URL string if needed.
     * Looks for the first occurrence of either `#`, `?`, or the end of the
     * line as `/` characters and removes the trailing slash if one exists.
     *
     * @param url URL string.
     *
     * @returns The URL string, modified if needed.
     */
    static stripTrailingSlash: (url: string) => string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Location>;
}

/**
 * @description
 * Indicates when a location is initialized.
 *
 * @publicApi
 */
export declare const LOCATION_INITIALIZED: InjectionToken<Promise<any>>;

/**
 * @description
 * A serializable version of the event from `onPopState` or `onHashChange`
 *
 * @publicApi
 */
export declare interface LocationChangeEvent {
    type: string;
    state: any;
}

/**
 * @publicApi
 */
export declare interface LocationChangeListener {
    (event: LocationChangeEvent): any;
}

/**
 * Enables the `Location` service to read route state from the browser's URL.
 * Angular provides two strategies:
 * `HashLocationStrategy` and `PathLocationStrategy`.
 *
 * Applications should use the `Router` or `Location` services to
 * interact with application route state.
 *
 * For instance, `HashLocationStrategy` produces URLs like
 * <code class="no-auto-link">http://example.com#/foo</code>,
 * and `PathLocationStrategy` produces
 * <code class="no-auto-link">http://example.com/foo</code> as an equivalent URL.
 *
 * See these two classes for more.
 *
 * @publicApi
 */
export declare abstract class LocationStrategy {
    abstract path(includeHash?: boolean): string;
    abstract prepareExternalUrl(internal: string): string;
    abstract pushState(state: any, title: string, url: string, queryParams: string): void;
    abstract replaceState(state: any, title: string, url: string, queryParams: string): void;
    abstract forward(): void;
    abstract back(): void;
    abstract onPopState(fn: LocationChangeListener): void;
    abstract getBaseHref(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LocationStrategy>;
}

/**
 * Transforms text to all lower case.
 *
 * @see `UpperCasePipe`
 * @see `TitleCasePipe`
 * @usageNotes
 *
 * The following example defines a view that allows the user to enter
 * text, and then uses the pipe to convert the input text to all lower case.
 *
 * <code-example path="common/pipes/ts/lowerupper_pipe.ts" region='LowerUpperPipe'></code-example>
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class LowerCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to lower case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LowerCasePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<LowerCasePipe, "lowercase">;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * @description
 *
 * Adds and removes CSS classes on an HTML element.
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * @publicApi
 */
export declare class NgClass implements DoCheck {
    private _iterableDiffers;
    private _keyValueDiffers;
    private _ngEl;
    private _renderer;
    private _iterableDiffer;
    private _keyValueDiffer;
    private _initialClasses;
    private _rawClass;
    constructor(_iterableDiffers: IterableDiffers, _keyValueDiffers: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2);
    set klass(value: string);
    set ngClass(value: string | string[] | Set<string> | {
        [klass: string]: any;
    });
    ngDoCheck(): void;
    private _applyKeyValueChanges;
    private _applyIterableChanges;
    /**
     * Applies a collection of CSS classes to the DOM element.
     *
     * For argument of type Set and Array CSS class names contained in those collections are always
     * added.
     * For argument of type Map CSS class name in the map's key is toggled based on the value (added
     * for truthy and removed for falsy).
     */
    private _applyClasses;
    /**
     * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
     * purposes.
     */
    private _removeClasses;
    private _toggleClass;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgClass>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgClass, "[ngClass]", never, {
    "klass": "class";
    "ngClass": "ngClass";
}, {}, never>;
}

/**
 * Instantiates a single {@link Component} type and inserts its Host View into current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will get destroyed.
 *
 * @usageNotes
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if exists.
 *
 * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
 * module, then load a component from that module.
 *
 * ### Syntax
 *
 * Simple
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * Customized injector/content
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized ngModuleFactory
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModuleFactory: moduleFactory;">
 * </ng-container>
 * ```
 *
 * ### A simple example
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 *
 * @publicApi
 * @ngModule CommonModule
 */
export declare class NgComponentOutlet implements OnChanges, OnDestroy {
    private _viewContainerRef;
    ngComponentOutlet: Type<any>;
    ngComponentOutletInjector: Injector;
    ngComponentOutletContent: any[][];
    ngComponentOutletNgModuleFactory: NgModuleFactory<any>;
    private _componentRef;
    private _moduleRef;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgComponentOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgComponentOutlet, "[ngComponentOutlet]", never, {
    "ngComponentOutlet": "ngComponentOutlet";
    "ngComponentOutletInjector": "ngComponentOutletInjector";
    "ngComponentOutletContent": "ngComponentOutletContent";
    "ngComponentOutletNgModuleFactory": "ngComponentOutletNgModuleFactory";
}, {}, never>;
}

/**
 * A [structural directive](guide/structural-directives) that renders
 * a template for each item in a collection.
 * The directive is placed on an element, which becomes the parent
 * of the cloned templates.
 *
 * The `ngForOf` directive is generally used in the
 * [shorthand form](guide/structural-directives#the-asterisk--prefix) `*ngFor`.
 * In this form, the template to be rendered for each iteration is the content
 * of an anchor element containing the directive.
 *
 * The following example shows the shorthand syntax with some options,
 * contained in an `<li>` element.
 *
 * ```
 * <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
 * ```
 *
 * The shorthand form expands into a long form that uses the `ngForOf` selector
 * on an `<ng-template>` element.
 * The content of the `<ng-template>` element is the `<li>` element that held the
 * short-form directive.
 *
 * Here is the expanded version of the short-form example.
 *
 * ```
 * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
 *   <li>...</li>
 * </ng-template>
 * ```
 *
 * Angular automatically expands the shorthand syntax as it compiles the template.
 * The context for each embedded view is logically merged to the current component
 * context according to its lexical position.
 *
 * When using the shorthand syntax, Angular allows only [one structural directive
 * on an element](guide/structural-directives#one-structural-directive-per-host-element).
 * If you want to iterate conditionally, for example,
 * put the `*ngIf` on a container element that wraps the `*ngFor` element.
 * For futher discussion, see
 * [Structural Directives](guide/structural-directives#one-per-element).
 *
 * @usageNotes
 *
 * ### Local variables
 *
 * `NgForOf` provides exported values that can be aliased to local variables.
 * For example:
 *
 *  ```
 * <li *ngFor="let user of users; index as i; first as isFirst">
 *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
 * </li>
 * ```
 *
 * The following exported values can be aliased to local variables:
 *
 * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
 * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
 * more complex then a property access, for example when using the async pipe (`userStreams |
 * async`).
 * - `index: number`: The index of the current item in the iterable.
 * - `first: boolean`: True when the item is the first item in the iterable.
 * - `last: boolean`: True when the item is the last item in the iterable.
 * - `even: boolean`: True when the item has an even index in the iterable.
 * - `odd: boolean`: True when the item has an odd index in the iterable.
 *
 * ### Change propagation
 *
 * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
 *
 * * When an item is added, a new instance of the template is added to the DOM.
 * * When an item is removed, its template instance is removed from the DOM.
 * * When items are reordered, their respective templates are reordered in the DOM.
 *
 * Angular uses object identity to track insertions and deletions within the iterator and reproduce
 * those changes in the DOM. This has important implications for animations and any stateful
 * controls that are present, such as `<input>` elements that accept user input. Inserted rows can
 * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
 * such as user input.
 * For more on animations, see [Transitions and Triggers](guide/transition-and-triggers).
 *
 * The identities of elements in the iterator can change while the data does not.
 * This can happen, for example, if the iterator is produced from an RPC to the server, and that
 * RPC is re-run. Even if the data hasn't changed, the second response produces objects with
 * different identities, and Angular must tear down the entire DOM and rebuild it (as if all old
 * elements were deleted and all new elements inserted).
 *
 * To avoid this expensive operation, you can customize the default tracking algorithm.
 * by supplying the `trackBy` option to `NgForOf`.
 * `trackBy` takes a function that has two arguments: `index` and `item`.
 * If `trackBy` is given, Angular tracks changes by the return value of the function.
 *
 * @see [Structural Directives](guide/structural-directives)
 * @ngModule CommonModule
 * @publicApi
 */
export declare class NgForOf<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck {
    private _viewContainer;
    private _template;
    private _differs;
    /**
     * The value of the iterable expression, which can be used as a
     * [template input variable](guide/structural-directives#template-input-variable).
     */
    set ngForOf(ngForOf: (U & NgIterable<T>) | undefined | null);
    /**
     * A function that defines how to track changes for items in the iterable.
     *
     * When items are added, moved, or removed in the iterable,
     * the directive must re-render the appropriate DOM nodes.
     * To minimize churn in the DOM, only nodes that have changed
     * are re-rendered.
     *
     * By default, the change detector assumes that
     * the object instance identifies the node in the iterable.
     * When this function is supplied, the directive uses
     * the result of calling this function to identify the item node,
     * rather than the identity of the object itself.
     *
     * The function receives two inputs,
     * the iteration index and the node object ID.
     */
    set ngForTrackBy(fn: TrackByFunction<T>);
    get ngForTrackBy(): TrackByFunction<T>;
    private _ngForOf;
    private _ngForOfDirty;
    private _differ;
    private _trackByFn;
    constructor(_viewContainer: ViewContainerRef, _template: TemplateRef<NgForOfContext<T, U>>, _differs: IterableDiffers);
    /**
     * A reference to the template that is stamped out for each item in the iterable.
     * @see [template reference variable](guide/template-syntax#template-reference-variables--var-)
     */
    set ngForTemplate(value: TemplateRef<NgForOfContext<T, U>>);
    /**
     * Applies the changes when needed.
     */
    ngDoCheck(): void;
    private _applyChanges;
    private _perViewChange;
    /**
     * Asserts the correct type of the context for the template that `NgForOf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgForOf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T, U extends NgIterable<T>>(dir: NgForOf<T, U>, ctx: any): ctx is NgForOfContext<T, U>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgForOf<any, any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgForOf<any, any>, "[ngFor][ngForOf]", never, {
    "ngForOf": "ngForOf";
    "ngForTrackBy": "ngForTrackBy";
    "ngForTemplate": "ngForTemplate";
}, {}, never>;
}

/**
 * @publicApi
 */
export declare class NgForOfContext<T, U extends NgIterable<T> = NgIterable<T>> {
    $implicit: T;
    ngForOf: U;
    index: number;
    count: number;
    constructor($implicit: T, ngForOf: U, index: number, count: number);
    get first(): boolean;
    get last(): boolean;
    get even(): boolean;
    get odd(): boolean;
}

/**
 * A structural directive that conditionally includes a template based on the value of
 * an expression coerced to Boolean.
 * When the expression evaluates to true, Angular renders the template
 * provided in a `then` clause, and when  false or null,
 * Angular renders the template provided in an optional `else` clause. The default
 * template for the `else` clause is blank.
 *
 * A [shorthand form](guide/structural-directives#the-asterisk--prefix) of the directive,
 * `*ngIf="condition"`, is generally used, provided
 * as an attribute of the anchor element for the inserted template.
 * Angular expands this into a more explicit version, in which the anchor element
 * is contained in an `<ng-template>` element.
 *
 * Simple form with shorthand syntax:
 *
 * ```
 * <div *ngIf="condition">Content to render when condition is true.</div>
 * ```
 *
 * Simple form with expanded syntax:
 *
 * ```
 * <ng-template [ngIf]="condition"><div>Content to render when condition is
 * true.</div></ng-template>
 * ```
 *
 * Form with an "else" block:
 *
 * ```
 * <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Shorthand form with "then" and "else" blocks:
 *
 * ```
 * <div *ngIf="condition; then thenBlock else elseBlock"></div>
 * <ng-template #thenBlock>Content to render when condition is true.</ng-template>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Form with storing the value locally:
 *
 * ```
 * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
 * <ng-template #elseBlock>Content to render when value is null.</ng-template>
 * ```
 *
 * @usageNotes
 *
 * The `*ngIf` directive is most commonly used to conditionally show an inline template,
 * as seen in the following  example.
 * The default `else` template is blank.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfSimple'}
 *
 * ### Showing an alternative template using `else`
 *
 * To display a template when `expression` evaluates to false, use an `else` template
 * binding as shown in the following example.
 * The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
 * The template can be defined anywhere in the component view, but is typically placed right after
 * `ngIf` for readability.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfElse'}
 *
 * ### Using an external `then` template
 *
 * In the previous example, the then-clause template is specified inline, as the content of the
 * tag that contains the `ngIf` directive. You can also specify a template that is defined
 * externally, by referencing a labeled `<ng-template>` element. When you do this, you can
 * change which template to use at runtime, as shown in the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
 *
 * ### Storing a conditional result in a variable
 *
 * You might want to show a set of properties from the same object. If you are waiting
 * for asynchronous data, the object can be undefined.
 * In this case, you can use `ngIf` and store the result of the condition in a local
 * variable as shown in the the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfAs'}
 *
 * This code uses only one `AsyncPipe`, so only one subscription is created.
 * The conditional statement stores the result of `userStream|async` in the local variable `user`.
 * You can then bind the local `user` repeatedly.
 *
 * The conditional displays the data only if `userStream` returns a value,
 * so you don't need to use the
 * [safe-navigation-operator](guide/template-syntax#safe-navigation-operator) (`?.`)
 * to guard against null values when accessing properties.
 * You can display an alternative template while waiting for the data.
 *
 * ### Shorthand syntax
 *
 * The shorthand syntax `*ngIf` expands into two separate template specifications
 * for the "then" and "else" clauses. For example, consider the following shorthand statement,
 * that is meant to show a loading page while waiting for data to be loaded.
 *
 * ```
 * <div class="hero-list" *ngIf="heroes else loading">
 *  ...
 * </div>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * You can see that the "else" clause references the `<ng-template>`
 * with the `#loading` label, and the template for the "then" clause
 * is provided as the content of the anchor element.
 *
 * However, when Angular expands the shorthand syntax, it creates
 * another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
 * The anchor element containing the template for the "then" clause becomes
 * the content of this unlabeled `<ng-template>` tag.
 *
 * ```
 * <ng-template [ngIf]="heroes" [ngIfElse]="loading">
 *  <div class="hero-list">
 *   ...
 *  </div>
 * </ng-template>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * The presence of the implicit template object has implications for the nesting of
 * structural directives. For more on this subject, see
 * [Structural Directives](https://angular.io/guide/structural-directives#one-per-element).
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class NgIf<T = unknown> {
    private _viewContainer;
    private _context;
    private _thenTemplateRef;
    private _elseTemplateRef;
    private _thenViewRef;
    private _elseViewRef;
    constructor(_viewContainer: ViewContainerRef, templateRef: TemplateRef<NgIfContext<T>>);
    /**
     * The Boolean expression to evaluate as the condition for showing a template.
     */
    set ngIf(condition: T);
    /**
     * A template to show if the condition expression evaluates to true.
     */
    set ngIfThen(templateRef: TemplateRef<NgIfContext<T>> | null);
    /**
     * A template to show if the condition expression evaluates to false.
     */
    set ngIfElse(templateRef: TemplateRef<NgIfContext<T>> | null);
    private _updateView;
    /**
     * Assert the correct type of the expression bound to the `ngIf` input within the template.
     *
     * The presence of this static field is a signal to the Ivy template type check compiler that
     * when the `NgIf` structural directive renders its template, the type of the expression bound
     * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
     * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
     */
    static ngTemplateGuard_ngIf: 'binding';
    /**
     * Asserts the correct type of the context for the template that `NgIf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgIf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(dir: NgIf<T>, ctx: any): ctx is NgIfContext<NonNullable<T>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgIf<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgIf<any>, "[ngIf]", never, {
    "ngIf": "ngIf";
    "ngIfThen": "ngIfThen";
    "ngIfElse": "ngIfElse";
}, {}, never>;
}

/**
 * @publicApi
 */
export declare class NgIfContext<T = unknown> {
    $implicit: T;
    ngIf: T;
}

/**
 * Returns the plural case based on the locale
 *
 * @publicApi
 */
export declare class NgLocaleLocalization extends NgLocalization {
    protected locale: string;
    constructor(locale: string);
    getPluralCategory(value: any, locale?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgLocaleLocalization>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgLocaleLocalization>;
}


/**
 * @publicApi
 */
export declare abstract class NgLocalization {
    abstract getPluralCategory(value: any, locale?: string): string;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
 *   <ng-template ngPluralCase="=1">there is one</ng-template>
 *   <ng-template ngPluralCase="few">there are a few</ng-template>
 * </some-element>
 * ```
 *
 * @description
 *
 * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * @publicApi
 */
export declare class NgPlural {
    private _localization;
    private _switchValue;
    private _activeView;
    private _caseViews;
    constructor(_localization: NgLocalization);
    set ngPlural(value: number);
    addCase(value: string, switchView: SwitchView): void;
    private _updateView;
    private _clearViews;
    private _activateView;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgPlural>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgPlural, "[ngPlural]", never, {
    "ngPlural": "ngPlural";
}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that will be added/removed from the parent {@link NgPlural} when the
 * given expression matches the plural expression according to CLDR rules.
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">...</ng-template>
 *   <ng-template ngPluralCase="other">...</ng-template>
 * </some-element>
 *```
 *
 * See {@link NgPlural} for more details and example.
 *
 * @publicApi
 */
export declare class NgPluralCase {
    value: string;
    constructor(value: string, template: TemplateRef<Object>, viewContainer: ViewContainerRef, ngPlural: NgPlural);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgPluralCase>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgPluralCase, "[ngPluralCase]", never, {}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @usageNotes
 *
 * Set the font of the containing element to the result of an expression.
 *
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 * ```
 *
 * Set the width of the containing element to a pixel value returned by an expression.
 *
 * ```
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 * ```
 *
 * Set a collection of style values using an expression that returns key-value pairs.
 *
 * ```
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * @description
 *
 * An attribute directive that updates styles for the containing HTML element.
 * Sets one or more style properties, specified as colon-separated key-value pairs.
 * The key is a style name, with an optional `.<unit>` suffix
 * (such as 'top.px', 'font-style.em').
 * The value is an expression to be evaluated.
 * The resulting non-null value, expressed in the given unit,
 * is assigned to the given style property.
 * If the result of evaluation is null, the corresponding style is removed.
 *
 * @publicApi
 */
export declare class NgStyle implements DoCheck {
    private _ngEl;
    private _differs;
    private _renderer;
    private _ngStyle;
    private _differ;
    constructor(_ngEl: ElementRef, _differs: KeyValueDiffers, _renderer: Renderer2);
    set ngStyle(values: {
        [klass: string]: any;
    } | null);
    ngDoCheck(): void;
    private _setStyle;
    private _applyChanges;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgStyle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgStyle, "[ngStyle]", never, {
    "ngStyle": "ngStyle";
}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description A structural directive that adds or removes templates (displaying or hiding views)
 * when the next match expression matches the switch expression.
 *
 * The `[ngSwitch]` directive on a container specifies an expression to match against.
 * The expressions to match are provided by `ngSwitchCase` directives on views within the container.
 * - Every view that matches is rendered.
 * - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
 * - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
 * or `ngSwitchDefault` directive are preserved at the location.
 *
 * @usageNotes
 * Define a container element for the directive, and specify the switch expression
 * to match against as an attribute:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 * ```
 *
 * Within the container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *    <some-element *ngSwitchCase="match_expression_1">...</some-element>
 * ...
 *    <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * ### Usage Examples
 *
 * The following example shows how to use more than one case to display the same view:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <!-- the same view can be shown in more than one case -->
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *   <!--default case when there are no matches -->
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * The following example shows how cases can be nested:
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *       <ng-container *ngSwitchCase="match_expression_3">
 *         <!-- use a ng-container to group multiple root nodes -->
 *         <inner-element></inner-element>
 *         <inner-other-element></inner-other-element>
 *       </ng-container>
 *       <some-element *ngSwitchDefault>...</some-element>
 *     </container-element>
 * ```
 *
 * @publicApi
 * @see `NgSwitchCase`
 * @see `NgSwitchDefault`
 * @see [Structural Directives](guide/structural-directives)
 *
 */
export declare class NgSwitch {
    private _defaultViews;
    private _defaultUsed;
    private _caseCount;
    private _lastCaseCheckIndex;
    private _lastCasesMatched;
    private _ngSwitch;
    set ngSwitch(newValue: any);
    private _updateDefaultCases;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitch>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitch, "[ngSwitch]", never, {
    "ngSwitch": "ngSwitch";
}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 * Provides a switch case expression to match against an enclosing `ngSwitch` expression.
 * When the expressions match, the given `NgSwitchCase` template is rendered.
 * If multiple match expressions match the switch expression value, all of them are displayed.
 *
 * @usageNotes
 *
 * Within a switch container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   ...
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * Each switch-case statement contains an in-line HTML template or template reference
 * that defines the subtree to be selected if the value of the match expression
 * matches the value of the switch expression.
 *
 * Unlike JavaScript, which uses strict equality, Angular uses loose equality.
 * This means that the empty string, `""` matches 0.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchDefault`
 *
 */
export declare class NgSwitchCase implements DoCheck {
    private ngSwitch;
    private _view;
    /**
     * Stores the HTML template to be selected on match.
     */
    ngSwitchCase: any;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<Object>, ngSwitch: NgSwitch);
    /**
     * Performs case matching. For internal use only.
     */
    ngDoCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitchCase>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitchCase, "[ngSwitchCase]", never, {
    "ngSwitchCase": "ngSwitchCase";
}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that is rendered when no `NgSwitchCase` expressions
 * match the `NgSwitch` expression.
 * This statement should be the final case in an `NgSwitch`.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchCase`
 *
 */
export declare class NgSwitchDefault {
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<Object>, ngSwitch: NgSwitch);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgSwitchDefault>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgSwitchDefault, "[ngSwitchDefault]", never, {}, {}, never>;
}

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Inserts an embedded view from a prepared `TemplateRef`.
 *
 * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
 * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
 * by the local template `let` declarations.
 *
 * @usageNotes
 * ```
 * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
 * ```
 *
 * Using the key `$implicit` in the context object will set its value as default.
 *
 * ### Example
 *
 * {@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
 *
 * @publicApi
 */
export declare class NgTemplateOutlet implements OnChanges {
    private _viewContainerRef;
    private _viewRef;
    /**
     * A context object to attach to the {@link EmbeddedViewRef}. This should be an
     * object, the object's keys will be available for binding by the local template `let`
     * declarations.
     * Using the key `$implicit` in the context object will set its value as default.
     */
    ngTemplateOutletContext: Object | null;
    /**
     * A string defining the template reference and optionally the context object for the template.
     */
    ngTemplateOutlet: TemplateRef<any> | null;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * We need to re-create existing embedded view if:
     * - templateRef has changed
     * - context has changes
     *
     * We mark context object as changed when the corresponding object
     * shape changes (new properties are added or existing properties are removed).
     * In other words we consider context with the same properties as "the same" even
     * if object reference changes (see https://github.com/angular/angular/issues/13407).
     */
    private _shouldRecreateView;
    private _hasContextShapeChanged;
    private _updateExistingContext;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgTemplateOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgTemplateOutlet, "[ngTemplateOutlet]", never, {
    "ngTemplateOutletContext": "ngTemplateOutletContext";
    "ngTemplateOutlet": "ngTemplateOutlet";
}, {}, never>;
}


/**
 * Format styles that can be used to represent numbers.
 * @see `getLocaleNumberFormat()`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum NumberFormatStyle {
    Decimal = 0,
    Percent = 1,
    Currency = 2,
    Scientific = 3
}

/**
 * Symbols that can be used to replace placeholders in number patterns.
 * Examples are based on `en-US` values.
 *
 * @see `getLocaleNumberSymbol()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum NumberSymbol {
    /**
     * Decimal separator.
     * For `en-US`, the dot character.
     * Example : 2,345`.`67
     */
    Decimal = 0,
    /**
     * Grouping separator, typically for thousands.
     * For `en-US`, the comma character.
     * Example: 2`,`345.67
     */
    Group = 1,
    /**
     * List-item separator.
     * Example: "one, two, and three"
     */
    List = 2,
    /**
     * Sign for percentage (out of 100).
     * Example: 23.4%
     */
    PercentSign = 3,
    /**
     * Sign for positive numbers.
     * Example: +23
     */
    PlusSign = 4,
    /**
     * Sign for negative numbers.
     * Example: -23
     */
    MinusSign = 5,
    /**
     * Computer notation for exponential value (n times a power of 10).
     * Example: 1.2E3
     */
    Exponential = 6,
    /**
     * Human-readable format of exponential.
     * Example: 1.2x103
     */
    SuperscriptingExponent = 7,
    /**
     * Sign for permille (out of 1000).
     * Example: 23.4‰
     */
    PerMille = 8,
    /**
     * Infinity, can be used with plus and minus.
     * Example: ∞, +∞, -∞
     */
    Infinity = 9,
    /**
     * Not a number.
     * Example: NaN
     */
    NaN = 10,
    /**
     * Symbol used between time units.
     * Example: 10:52
     */
    TimeSeparator = 11,
    /**
     * Decimal separator for currency values (fallback to `Decimal`).
     * Example: $2,345.67
     */
    CurrencyDecimal = 12,
    /**
     * Group separator for currency values (fallback to `Group`).
     * Example: $2,345.67
     */
    CurrencyGroup = 13
}

/**
 * @description
 * A {@link LocationStrategy} used to configure the {@link Location} service to
 * represent its state in the
 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
 * browser's URL.
 *
 * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
 * or add a base element to the document. This URL prefix that will be preserved
 * when generating and recognizing URLs.
 *
 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * Similarly, if you add `<base href='/my/app'/>` to the document and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
 *
 * @publicApi
 */
export declare class PathLocationStrategy extends LocationStrategy {
    private _platformLocation;
    private _baseHref;
    constructor(_platformLocation: PlatformLocation, href?: string);
    onPopState(fn: LocationChangeListener): void;
    getBaseHref(): string;
    prepareExternalUrl(internal: string): string;
    path(includeHash?: boolean): string;
    pushState(state: any, title: string, url: string, queryParams: string): void;
    replaceState(state: any, title: string, url: string, queryParams: string): void;
    forward(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PathLocationStrategy>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PathLocationStrategy>;
}

/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a percentage
 * string, formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * @see `formatPercent()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>
 *
 * @publicApi
 */
export declare class PercentPipe implements PipeTransform {
    private _locale;
    constructor(_locale: string);
    /**
     *
     * @param value The number to be formatted as a percentage.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `0`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value: any, digitsInfo?: string, locale?: string): string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PercentPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<PercentPipe, "percent">;
}

/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
 * agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms that angular supports. For example, `@angular/platform-browser` provides an
 * implementation specific to the browser environment, while `@angular/platform-webworker` provides
 * one suitable for use with web workers.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when they need to interact with the DOM apis like pushState, popState, etc...
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
 * class they are all platform independent.
 *
 * @publicApi
 */
export declare abstract class PlatformLocation {
    abstract getBaseHrefFromDOM(): string;
    abstract getState(): unknown;
    abstract onPopState(fn: LocationChangeListener): void;
    abstract onHashChange(fn: LocationChangeListener): void;
    abstract get href(): string;
    abstract get protocol(): string;
    abstract get hostname(): string;
    abstract get port(): string;
    abstract get pathname(): string;
    abstract get search(): string;
    abstract get hash(): string;
    abstract replaceState(state: any, title: string, url: string): void;
    abstract pushState(state: any, title: string, url: string): void;
    abstract forward(): void;
    abstract back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlatformLocation>;
}

/**
 * Plurality cases used for translating plurals to different languages.
 *
 * @see `NgPlural`
 * @see `NgPluralCase`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export declare enum Plural {
    Zero = 0,
    One = 1,
    Two = 2,
    Few = 3,
    Many = 4,
    Other = 5
}

/** @publicApi */
export declare interface PopStateEvent {
    pop?: boolean;
    state?: any;
    type?: string;
    url?: string;
}


/**
 * Register global data to be used internally by Angular. See the
 * ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.
 *
 * The signature registerLocaleData(data: any, extraData?: any) is deprecated since v5.1
 *
 * @publicApi
 */
export declare function registerLocaleData(data: any, localeId?: string | any, extraData?: any): void;

/**
 * @ngModule CommonModule
 * @description
 *
 * Creates a new `Array` or `String` containing a subset (slice) of the elements.
 *
 * @usageNotes
 *
 * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
 * and `String.prototype.slice()`.
 *
 * When operating on an `Array`, the returned `Array` is always a copy even when all
 * the elements are being returned.
 *
 * When operating on a blank value, the pipe returns the blank value.
 *
 * ### List Example
 *
 * This `ngFor` example:
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
 *
 * produces the following:
 *
 * ```html
 * <li>b</li>
 * <li>c</li>
 * ```
 *
 * ### String Examples
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
 *
 * @publicApi
 */
export declare class SlicePipe implements PipeTransform {
    /**
     * @param value a list or a string to be sliced.
     * @param start the starting index of the subset to return:
     *   - **a positive integer**: return the item at `start` index and all items after
     *     in the list or string expression.
     *   - **a negative integer**: return the item at `start` index from the end and all items after
     *     in the list or string expression.
     *   - **if positive and greater than the size of the expression**: return an empty list or
     * string.
     *   - **if negative and greater than the size of the expression**: return entire list or string.
     * @param end the ending index of the subset to return:
     *   - **omitted**: return all items until the end.
     *   - **if positive**: return all items before `end` index of the list or string.
     *   - **if negative**: return all items before `end` index from the end of the list or string.
     */
    transform<T>(value: ReadonlyArray<T>, start: number, end?: number): Array<T>;
    transform(value: string, start: number, end?: number): string;
    transform(value: null, start: number, end?: number): null;
    transform(value: undefined, start: number, end?: number): undefined;
    private supports;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SlicePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<SlicePipe, "slice">;
}

declare class SwitchView {
    private _viewContainerRef;
    private _templateRef;
    private _created;
    constructor(_viewContainerRef: ViewContainerRef, _templateRef: TemplateRef<Object>);
    create(): void;
    destroy(): void;
    enforceState(created: boolean): void;
}

/**
 * Represents a time value with hours and minutes.
 *
 * @publicApi
 */
export declare type Time = {
    hours: number;
    minutes: number;
};

/**
 * Transforms text to title case.
 * Capitalizes the first letter of each word, and transforms the
 * rest of the word to lower case.
 * Words are delimited by any whitespace character, such as a space, tab, or line-feed character.
 *
 * @see `LowerCasePipe`
 * @see `UpperCasePipe`
 *
 * @usageNotes
 * The following example shows the result of transforming various strings into title case.
 *
 * <code-example path="common/pipes/ts/titlecase_pipe.ts" region='TitleCasePipe'></code-example>
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class TitleCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to title case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TitleCasePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TitleCasePipe, "titlecase">;
}

/**
 * String widths available for translations.
 * The specific character widths are locale-specific.
 * Examples are given for the word "Sunday" in English.
 *
 * @publicApi
 */
export declare enum TranslationWidth {
    /** 1 character for `en-US`. For example: 'S' */
    Narrow = 0,
    /** 3 characters for `en-US`. For example: 'Sun' */
    Abbreviated = 1,
    /** Full length for `en-US`. For example: "Sunday" */
    Wide = 2,
    /** 2 characters for `en-US`, For example: "Su" */
    Short = 3
}

/**
 * Transforms text to all upper case.
 * @see `LowerCasePipe`
 * @see `TitleCasePipe`
 *
 * @ngModule CommonModule
 * @publicApi
 */
export declare class UpperCasePipe implements PipeTransform {
    /**
     * @param value The string to transform to upper case.
     */
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpperCasePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<UpperCasePipe, "uppercase">;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
 *
 * @publicApi
 */
export declare abstract class ViewportScroller {
    /** @nocollapse */
    static ɵprov: never;
    /**
     * Configures the top offset used when scrolling to an anchor.
     * @param offset A position in screen coordinates (a tuple with x and y values)
     * or a function that returns the top offset position.
     *
     */
    abstract setOffset(offset: [number, number] | (() => [number, number])): void;
    /**
     * Retrieves the current scroll position.
     * @returns A position in screen coordinates (a tuple with x and y values).
     */
    abstract getScrollPosition(): [number, number];
    /**
     * Scrolls to a specified position.
     * @param position A position in screen coordinates (a tuple with x and y values).
     */
    abstract scrollToPosition(position: [number, number]): void;
    /**
     * Scrolls to an anchor element.
     * @param anchor The ID of the anchor element.
     */
    abstract scrollToAnchor(anchor: string): void;
    /**
     * Disables automatic scroll restoration provided by the browser.
     * See also [window.history.scrollRestoration
     * info](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration).
     */
    abstract setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void;
}

/**
 * The value for each day of the week, based on the `en-US` locale
 *
 * @publicApi
 */
export declare enum WeekDay {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

export declare function ɵangular_packages_common_common_a(): ɵBrowserPlatformLocation;

export declare function ɵangular_packages_common_common_b(): ɵBrowserPlatformLocation;

export declare function ɵangular_packages_common_common_c(): Location;

export declare function ɵangular_packages_common_common_d(platformLocation: PlatformLocation): PathLocationStrategy;

/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 */
export declare const ɵangular_packages_common_common_e: Provider[];

/**
 * A collection of Angular pipes that are likely to be used in each and every application.
 */
export declare const ɵangular_packages_common_common_f: (typeof AsyncPipe | typeof SlicePipe | typeof DecimalPipe | typeof PercentPipe | typeof CurrencyPipe | typeof DatePipe | typeof I18nPluralPipe | typeof I18nSelectPipe | typeof KeyValuePipe)[];

/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 */
export declare class ɵBrowserPlatformLocation extends PlatformLocation {
    private _doc;
    readonly location: Location;
    private _history;
    constructor(_doc: any);
    getBaseHrefFromDOM(): string;
    onPopState(fn: LocationChangeListener): void;
    onHashChange(fn: LocationChangeListener): void;
    get href(): string;
    get protocol(): string;
    get hostname(): string;
    get port(): string;
    get pathname(): string;
    get search(): string;
    get hash(): string;
    set pathname(newPath: string);
    pushState(state: any, title: string, url: string): void;
    replaceState(state: any, title: string, url: string): void;
    forward(): void;
    back(): void;
    getState(): unknown;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵBrowserPlatformLocation>;
}

/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare abstract class ɵDomAdapter {
    abstract getProperty(el: Element, name: string): any;
    abstract dispatchEvent(el: any, evt: any): any;
    abstract log(error: any): any;
    abstract logGroup(error: any): any;
    abstract logGroupEnd(): any;
    abstract remove(el: any): Node;
    abstract createElement(tagName: any, doc?: any): HTMLElement;
    abstract createHtmlDocument(): HTMLDocument;
    abstract getDefaultDocument(): Document;
    abstract isElementNode(node: any): boolean;
    abstract isShadowRoot(node: any): boolean;
    abstract onAndCancel(el: any, evt: any, listener: any): Function;
    abstract supportsDOMEvents(): boolean;
    abstract getGlobalEventTarget(doc: Document, target: string): any;
    abstract getHistory(): History;
    abstract getLocation(): any; /** This is the ambient Location definition, NOT Location from @angular/common.  */
    abstract getBaseHref(doc: Document): string | null;
    abstract resetBaseElement(): void;
    abstract getUserAgent(): string;
    abstract performanceNow(): number;
    abstract supportsCookies(): boolean;
    abstract getCookie(name: string): string | null;
}


export declare function ɵgetDOM(): ɵDomAdapter;

/**
 * Provides an empty implementation of the viewport scroller. This will
 * live in @angular/common as it will be used by both platform-server and platform-webworker.
 */
export declare class ɵNullViewportScroller implements ViewportScroller {
    /**
     * Empty implementation
     */
    setOffset(offset: [number, number] | (() => [number, number])): void;
    /**
     * Empty implementation
     */
    getScrollPosition(): [number, number];
    /**
     * Empty implementation
     */
    scrollToPosition(position: [number, number]): void;
    /**
     * Empty implementation
     */
    scrollToAnchor(anchor: string): void;
    /**
     * Empty implementation
     */
    setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void;
}


export declare function ɵparseCookieValue(cookieStr: string, name: string): string | null;


export declare const ɵPLATFORM_BROWSER_ID = "browser";

export declare const ɵPLATFORM_SERVER_ID = "server";

export declare const ɵPLATFORM_WORKER_APP_ID = "browserWorkerApp";

export declare const ɵPLATFORM_WORKER_UI_ID = "browserWorkerUi";

export declare function ɵsetRootDomAdapter(adapter: ɵDomAdapter): void;

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmQudHMiLCJzb3VyY2VzIjpbImNvbW1vbi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5ZEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5R0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMC43XG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVyYWJsZURpZmZlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5VmFsdWVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nSXRlcmFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGVGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkxpa2UgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQSBwcmVkZWZpbmVkIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkjZGktdG9rZW4pIGZvciB0aGUgYmFzZSBocmVmXHJcbiAqIHRvIGJlIHVzZWQgd2l0aCB0aGUgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YC5cclxuICogVGhlIGJhc2UgaHJlZiBpcyB0aGUgVVJMIHByZWZpeCB0aGF0IHNob3VsZCBiZSBwcmVzZXJ2ZWQgd2hlbiBnZW5lcmF0aW5nXHJcbiAqIGFuZCByZWNvZ25pemluZyBVUkxzLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgaG93IHRvIHVzZSB0aGlzIHRva2VuIHRvIGNvbmZpZ3VyZSB0aGUgcm9vdCBhcHAgaW5qZWN0b3JcclxuICogd2l0aCBhIGJhc2UgaHJlZiB2YWx1ZSwgc28gdGhhdCB0aGUgREkgZnJhbWV3b3JrIGNhbiBzdXBwbHkgdGhlIGRlcGVuZGVuY3kgYW55d2hlcmUgaW4gdGhlIGFwcC5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQge0NvbXBvbmVudCwgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gKiBpbXBvcnQge0FQUF9CQVNFX0hSRUZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiAnL215L2FwcCd9XVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEFQUF9CQVNFX0hSRUY6IEluamVjdGlvblRva2VuPHN0cmluZz47XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVW53cmFwcyBhIHZhbHVlIGZyb20gYW4gYXN5bmNocm9ub3VzIHByaW1pdGl2ZS5cclxuICpcclxuICogVGhlIGBhc3luY2AgcGlwZSBzdWJzY3JpYmVzIHRvIGFuIGBPYnNlcnZhYmxlYCBvciBgUHJvbWlzZWAgYW5kIHJldHVybnMgdGhlIGxhdGVzdCB2YWx1ZSBpdCBoYXNcclxuICogZW1pdHRlZC4gV2hlbiBhIG5ldyB2YWx1ZSBpcyBlbWl0dGVkLCB0aGUgYGFzeW5jYCBwaXBlIG1hcmtzIHRoZSBjb21wb25lbnQgdG8gYmUgY2hlY2tlZCBmb3JcclxuICogY2hhbmdlcy4gV2hlbiB0aGUgY29tcG9uZW50IGdldHMgZGVzdHJveWVkLCB0aGUgYGFzeW5jYCBwaXBlIHVuc3Vic2NyaWJlcyBhdXRvbWF0aWNhbGx5IHRvIGF2b2lkXHJcbiAqIHBvdGVudGlhbCBtZW1vcnkgbGVha3MuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlc1xyXG4gKlxyXG4gKiBUaGlzIGV4YW1wbGUgYmluZHMgYSBgUHJvbWlzZWAgdG8gdGhlIHZpZXcuIENsaWNraW5nIHRoZSBgUmVzb2x2ZWAgYnV0dG9uIHJlc29sdmVzIHRoZVxyXG4gKiBwcm9taXNlLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2FzeW5jX3BpcGUudHMgcmVnaW9uPSdBc3luY1BpcGVQcm9taXNlJ31cclxuICpcclxuICogSXQncyBhbHNvIHBvc3NpYmxlIHRvIHVzZSBgYXN5bmNgIHdpdGggT2JzZXJ2YWJsZXMuIFRoZSBleGFtcGxlIGJlbG93IGJpbmRzIHRoZSBgdGltZWAgT2JzZXJ2YWJsZVxyXG4gKiB0byB0aGUgdmlldy4gVGhlIE9ic2VydmFibGUgY29udGludW91c2x5IHVwZGF0ZXMgdGhlIHZpZXcgd2l0aCB0aGUgY3VycmVudCB0aW1lLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2FzeW5jX3BpcGUudHMgcmVnaW9uPSdBc3luY1BpcGVPYnNlcnZhYmxlJ31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXN5bmNQaXBlIGltcGxlbWVudHMgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHByaXZhdGUgX3JlZjtcclxuICAgIHByaXZhdGUgX2xhdGVzdFZhbHVlO1xyXG4gICAgcHJpdmF0ZSBfbGF0ZXN0UmV0dXJuZWRWYWx1ZTtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX29iajtcclxuICAgIHByaXZhdGUgX3N0cmF0ZWd5O1xyXG4gICAgY29uc3RydWN0b3IoX3JlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHRyYW5zZm9ybTxUPihvYmo6IG51bGwpOiBudWxsO1xyXG4gICAgdHJhbnNmb3JtPFQ+KG9iajogdW5kZWZpbmVkKTogdW5kZWZpbmVkO1xyXG4gICAgdHJhbnNmb3JtPFQ+KG9iajogT2JzZXJ2YWJsZTxUPiB8IG51bGwgfCB1bmRlZmluZWQpOiBUIHwgbnVsbDtcclxuICAgIHRyYW5zZm9ybTxUPihvYmo6IFByb21pc2U8VD4gfCBudWxsIHwgdW5kZWZpbmVkKTogVCB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpYmU7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RTdHJhdGVneTtcclxuICAgIHByaXZhdGUgX2Rpc3Bvc2U7XHJcbiAgICBwcml2YXRlIF91cGRhdGVMYXRlc3RWYWx1ZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBFeHBvcnRzIGFsbCB0aGUgYmFzaWMgQW5ndWxhciBkaXJlY3RpdmVzIGFuZCBwaXBlcyxcclxuICogc3VjaCBhcyBgTmdJZmAsIGBOZ0Zvck9mYCwgYERlY2ltYWxQaXBlYCwgYW5kIHNvIG9uLlxyXG4gKiBSZS1leHBvcnRlZCBieSBgQnJvd3Nlck1vZHVsZWAsIHdoaWNoIGlzIGluY2x1ZGVkIGF1dG9tYXRpY2FsbHkgaW4gdGhlIHJvb3RcclxuICogYEFwcE1vZHVsZWAgd2hlbiB5b3UgY3JlYXRlIGEgbmV3IGFwcCB3aXRoIHRoZSBDTEkgYG5ld2AgY29tbWFuZC5cclxuICpcclxuICogKiBUaGUgYHByb3ZpZGVyc2Agb3B0aW9ucyBjb25maWd1cmUgdGhlIE5nTW9kdWxlJ3MgaW5qZWN0b3IgdG8gcHJvdmlkZVxyXG4gKiBsb2NhbGl6YXRpb24gZGVwZW5kZW5jaWVzIHRvIG1lbWJlcnMuXHJcbiAqICogVGhlIGBleHBvcnRzYCBvcHRpb25zIG1ha2UgdGhlIGRlY2xhcmVkIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIGF2YWlsYWJsZSBmb3IgaW1wb3J0XHJcbiAqIGJ5IG90aGVyIE5nTW9kdWxlcy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29tbW9uTW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFRyYW5zZm9ybXMgYSBudW1iZXIgdG8gYSBjdXJyZW5jeSBzdHJpbmcsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzXHJcbiAqIHRoYXQgZGV0ZXJtaW5lIGdyb3VwIHNpemluZyBhbmQgc2VwYXJhdG9yLCBkZWNpbWFsLXBvaW50IGNoYXJhY3RlcixcclxuICogYW5kIG90aGVyIGxvY2FsZS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucy5cclxuICpcclxuICoge0BhIGN1cnJlbmN5LWNvZGUtZGVwcmVjYXRpb259XHJcbiAqIDxkaXYgY2xhc3M9XCJhbGVydCBpcy1oZWxwZnVsXCI+XHJcbiAqXHJcbiAqICoqRGVwcmVjYXRpb24gbm90aWNlOioqXHJcbiAqXHJcbiAqIFRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgaXMgY3VycmVudGx5IGFsd2F5cyBgVVNEYCBidXQgdGhpcyBpcyBkZXByZWNhdGVkIGZyb20gdjkuXHJcbiAqXHJcbiAqICoqSW4gdjExIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgd2lsbCBiZSB0YWtlbiBmcm9tIHRoZSBjdXJyZW50IGxvY2FsZSBpZGVudGlmaWVkIGJ5XHJcbiAqIHRoZSBgTE9DQUxfSURgIHRva2VuLiBTZWUgdGhlIFtpMThuIGd1aWRlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkgZm9yXHJcbiAqIG1vcmUgaW5mb3JtYXRpb24uKipcclxuICpcclxuICogSWYgeW91IG5lZWQgdGhlIHByZXZpb3VzIGJlaGF2aW9yIHRoZW4gc2V0IGl0IGJ5IGNyZWF0aW5nIGEgYERFRkFVTFRfQ1VSUkVOQ1lfQ09ERWAgcHJvdmlkZXIgaW5cclxuICogeW91ciBhcHBsaWNhdGlvbiBgTmdNb2R1bGVgOlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiB7cHJvdmlkZTogREVGQVVMVF9DVVJSRU5DWV9DT0RFLCB1c2VWYWx1ZTogJ1VTRCd9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiA8L2Rpdj5cclxuICpcclxuICogQHNlZSBgZ2V0Q3VycmVuY3lTeW1ib2woKWBcclxuICogQHNlZSBgZm9ybWF0Q3VycmVuY3koKWBcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIGZvbGxvd2luZyBjb2RlIHNob3dzIGhvdyB0aGUgcGlwZSB0cmFuc2Zvcm1zIG51bWJlcnNcclxuICogaW50byB0ZXh0IHN0cmluZ3MsIGFjY29yZGluZyB0byB2YXJpb3VzIGZvcm1hdCBzcGVjaWZpY2F0aW9ucyxcclxuICogd2hlcmUgdGhlIGNhbGxlcidzIGRlZmF1bHQgbG9jYWxlIGlzIGBlbi1VU2AuXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy9jdXJyZW5jeV9waXBlLnRzXCIgcmVnaW9uPSdDdXJyZW5jeVBpcGUnPjwvY29kZS1leGFtcGxlPlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDdXJyZW5jeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHByaXZhdGUgX2xvY2FsZTtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDdXJyZW5jeUNvZGU7XHJcbiAgICBjb25zdHJ1Y3RvcihfbG9jYWxlOiBzdHJpbmcsIF9kZWZhdWx0Q3VycmVuY3lDb2RlPzogc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGJlIGZvcm1hdHRlZCBhcyBjdXJyZW5jeS5cclxuICAgICAqIEBwYXJhbSBjdXJyZW5jeUNvZGUgVGhlIFtJU08gNDIxN10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpIGN1cnJlbmN5IGNvZGUsXHJcbiAgICAgKiBzdWNoIGFzIGBVU0RgIGZvciB0aGUgVVMgZG9sbGFyIGFuZCBgRVVSYCBmb3IgdGhlIGV1cm8uIFRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgY2FuIGJlXHJcbiAgICAgKiBjb25maWd1cmVkIHVzaW5nIHRoZSBgREVGQVVMVF9DVVJSRU5DWV9DT0RFYCBpbmplY3Rpb24gdG9rZW4uXHJcbiAgICAgKiBAcGFyYW0gZGlzcGxheSBUaGUgZm9ybWF0IGZvciB0aGUgY3VycmVuY3kgaW5kaWNhdG9yLiBPbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICAgICAqICAgLSBgY29kZWA6IFNob3cgdGhlIGNvZGUgKHN1Y2ggYXMgYFVTRGApLlxyXG4gICAgICogICAtIGBzeW1ib2xgKGRlZmF1bHQpOiBTaG93IHRoZSBzeW1ib2wgKHN1Y2ggYXMgYCRgKS5cclxuICAgICAqICAgLSBgc3ltYm9sLW5hcnJvd2A6IFVzZSB0aGUgbmFycm93IHN5bWJvbCBmb3IgbG9jYWxlcyB0aGF0IGhhdmUgdHdvIHN5bWJvbHMgZm9yIHRoZWlyXHJcbiAgICAgKiBjdXJyZW5jeS5cclxuICAgICAqIEZvciBleGFtcGxlLCB0aGUgQ2FuYWRpYW4gZG9sbGFyIENBRCBoYXMgdGhlIHN5bWJvbCBgQ0EkYCBhbmQgdGhlIHN5bWJvbC1uYXJyb3cgYCRgLiBJZiB0aGVcclxuICAgICAqIGxvY2FsZSBoYXMgbm8gbmFycm93IHN5bWJvbCwgdXNlcyB0aGUgc3RhbmRhcmQgc3ltYm9sIGZvciB0aGUgbG9jYWxlLlxyXG4gICAgICogICAtIFN0cmluZzogVXNlIHRoZSBnaXZlbiBzdHJpbmcgdmFsdWUgaW5zdGVhZCBvZiBhIGNvZGUgb3IgYSBzeW1ib2wuXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgc3VwcHJlc3MgdGhlIGN1cnJlbmN5ICYgc3ltYm9sLlxyXG4gICAgICogICAtIEJvb2xlYW4gKG1hcmtlZCBkZXByZWNhdGVkIGluIHY1KTogYHRydWVgIGZvciBzeW1ib2wgYW5kIGZhbHNlIGZvciBgY29kZWAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRpZ2l0c0luZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmdcclxuICAgICAqIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0Ojxicj5cclxuICAgICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxyXG4gICAgICogICAtIGBtaW5JbnRlZ2VyRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDFgLlxyXG4gICAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAyYC5cclxuICAgICAqICAgLSBgbWF4RnJhY3Rpb25EaWdpdHNgOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgMmAuXHJcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIHRoZSBudW1iZXIgd2lsbCBiZSBmb3JtYXR0ZWQgd2l0aCB0aGUgcHJvcGVyIGFtb3VudCBvZiBkaWdpdHMsXHJcbiAgICAgKiBkZXBlbmRpbmcgb24gd2hhdCB0aGUgW0lTTyA0MjE3XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fNDIxNykgc3BlY2lmaWVzLlxyXG4gICAgICogRm9yIGV4YW1wbGUsIHRoZSBDYW5hZGlhbiBkb2xsYXIgaGFzIDIgZGlnaXRzLCB3aGVyZWFzIHRoZSBDaGlsZWFuIHBlc28gaGFzIG5vbmUuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxyXG4gICAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgY3VycmVuY3lDb2RlPzogc3RyaW5nLCBkaXNwbGF5PzogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBzdHJpbmcgfCBib29sZWFuLCBkaWdpdHNJbmZvPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRm9ybWF0cyBhIGRhdGUgdmFsdWUgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cclxuICpcclxuICogT25seSB0aGUgYGVuLVVTYCBsb2NhbGUgZGF0YSBjb21lcyB3aXRoIEFuZ3VsYXIuIFRvIGxvY2FsaXplIGRhdGVzXHJcbiAqIGluIGFub3RoZXIgbGFuZ3VhZ2UsIHlvdSBtdXN0IGltcG9ydCB0aGUgY29ycmVzcG9uZGluZyBsb2NhbGUgZGF0YS5cclxuICogU2VlIHRoZSBbSTE4biBndWlkZV0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICpcclxuICogQHNlZSBgZm9ybWF0RGF0ZSgpYFxyXG4gKlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgcmVzdWx0IG9mIHRoaXMgcGlwZSBpcyBub3QgcmVldmFsdWF0ZWQgd2hlbiB0aGUgaW5wdXQgaXMgbXV0YXRlZC4gVG8gYXZvaWQgdGhlIG5lZWQgdG9cclxuICogcmVmb3JtYXQgdGhlIGRhdGUgb24gZXZlcnkgY2hhbmdlLWRldGVjdGlvbiBjeWNsZSwgdHJlYXQgdGhlIGRhdGUgYXMgYW4gaW1tdXRhYmxlIG9iamVjdFxyXG4gKiBhbmQgY2hhbmdlIHRoZSByZWZlcmVuY2Ugd2hlbiB0aGUgcGlwZSBuZWVkcyB0byBydW4gYWdhaW4uXHJcbiAqXHJcbiAqICMjIyBQcmUtZGVmaW5lZCBmb3JtYXQgb3B0aW9uc1xyXG4gKlxyXG4gKiBFeGFtcGxlcyBhcmUgZ2l2ZW4gaW4gYGVuLVVTYCBsb2NhbGUuXHJcbiAqXHJcbiAqIC0gYCdzaG9ydCdgOiBlcXVpdmFsZW50IHRvIGAnTS9kL3l5LCBoOm1tIGEnYCAoYDYvMTUvMTUsIDk6MDMgQU1gKS5cclxuICogLSBgJ21lZGl1bSdgOiBlcXVpdmFsZW50IHRvIGAnTU1NIGQsIHksIGg6bW06c3MgYSdgIChgSnVuIDE1LCAyMDE1LCA5OjAzOjAxIEFNYCkuXHJcbiAqIC0gYCdsb25nJ2A6IGVxdWl2YWxlbnQgdG8gYCdNTU1NIGQsIHksIGg6bW06c3MgYSB6J2AgKGBKdW5lIDE1LCAyMDE1IGF0IDk6MDM6MDEgQU1cclxuICogR01UKzFgKS5cclxuICogLSBgJ2Z1bGwnYDogZXF1aXZhbGVudCB0byBgJ0VFRUUsIE1NTU0gZCwgeSwgaDptbTpzcyBhIHp6enonYCAoYE1vbmRheSwgSnVuZSAxNSwgMjAxNSBhdFxyXG4gKiA5OjAzOjAxIEFNIEdNVCswMTowMGApLlxyXG4gKiAtIGAnc2hvcnREYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdNL2QveXknYCAoYDYvMTUvMTVgKS5cclxuICogLSBgJ21lZGl1bURhdGUnYDogZXF1aXZhbGVudCB0byBgJ01NTSBkLCB5J2AgKGBKdW4gMTUsIDIwMTVgKS5cclxuICogLSBgJ2xvbmdEYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdNTU1NIGQsIHknYCAoYEp1bmUgMTUsIDIwMTVgKS5cclxuICogLSBgJ2Z1bGxEYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdFRUVFLCBNTU1NIGQsIHknYCAoYE1vbmRheSwgSnVuZSAxNSwgMjAxNWApLlxyXG4gKiAtIGAnc2hvcnRUaW1lJ2A6IGVxdWl2YWxlbnQgdG8gYCdoOm1tIGEnYCAoYDk6MDMgQU1gKS5cclxuICogLSBgJ21lZGl1bVRpbWUnYDogZXF1aXZhbGVudCB0byBgJ2g6bW06c3MgYSdgIChgOTowMzowMSBBTWApLlxyXG4gKiAtIGAnbG9uZ1RpbWUnYDogZXF1aXZhbGVudCB0byBgJ2g6bW06c3MgYSB6J2AgKGA5OjAzOjAxIEFNIEdNVCsxYCkuXHJcbiAqIC0gYCdmdWxsVGltZSdgOiBlcXVpdmFsZW50IHRvIGAnaDptbTpzcyBhIHp6enonYCAoYDk6MDM6MDEgQU0gR01UKzAxOjAwYCkuXHJcbiAqXHJcbiAqICMjIyBDdXN0b20gZm9ybWF0IG9wdGlvbnNcclxuICpcclxuICogWW91IGNhbiBjb25zdHJ1Y3QgYSBmb3JtYXQgc3RyaW5nIHVzaW5nIHN5bWJvbHMgdG8gc3BlY2lmeSB0aGUgY29tcG9uZW50c1xyXG4gKiBvZiBhIGRhdGUtdGltZSB2YWx1ZSwgYXMgZGVzY3JpYmVkIGluIHRoZSBmb2xsb3dpbmcgdGFibGUuXHJcbiAqIEZvcm1hdCBkZXRhaWxzIGRlcGVuZCBvbiB0aGUgbG9jYWxlLlxyXG4gKiBGaWVsZHMgbWFya2VkIHdpdGggKCopIGFyZSBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgZXh0cmEgZGF0YSBzZXQgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqICB8IEZpZWxkIHR5cGUgICAgICAgICB8IEZvcm1hdCAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEV4YW1wbGUgVmFsdWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcclxuICogIHwgRXJhICAgICAgICAgICAgICAgIHwgRywgR0cgJiBHR0cgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQUQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEFubm8gRG9taW5pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBBICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgWWVhciAgICAgICAgICAgICAgIHwgeSAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiwgMjAsIDIwMSwgMjAxNywgMjAxNzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAyLCAyMCwgMDEsIDE3LCA3MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgICAgICB8IE51bWVyaWM6IDMgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMDIsIDAyMCwgMjAxLCAyMDE3LCAyMDE3MyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICAgICAgfCBOdW1lcmljOiA0IGRpZ2l0cyBvciBtb3JlICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgIHwgMDAwMiwgMDAyMCwgMDIwMSwgMjAxNywgMjAxNzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IE1vbnRoICAgICAgICAgICAgICB8IE0gICAgICAgICAgIHwgTnVtZXJpYzogMSBkaWdpdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDksIDEyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwOSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICAgICAgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU2VwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNlcHRlbWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgTW9udGggc3RhbmRhbG9uZSAgIHwgTCAgICAgICAgICAgfCBOdW1lcmljOiAxIGRpZ2l0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgOSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDA5LCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgICAgICB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTZXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU2VwdGVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBXZWVrIG9mIHllYXIgICAgICAgfCB3ICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxLi4uIDUzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDEuLi4gNTMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IFdlZWsgb2YgbW9udGggICAgICB8IFcgICAgICAgICAgIHwgTnVtZXJpYzogMSBkaWdpdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEuLi4gNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBEYXkgb2YgbW9udGggICAgICAgfCBkICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBXZWVrIGRheSAgICAgICAgICAgfCBFLCBFRSAmIEVFRSB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUdWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVHVlc2RheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgICAgICB8IFNob3J0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUdSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgUGVyaW9kICAgICAgICAgICAgIHwgYSwgYWEgJiBhYWEgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYW0vcG0gb3IgQU0vUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgICAgIHwgV2lkZSAoZmFsbGJhY2sgdG8gYGFgIHdoZW4gbWlzc2luZykgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFudGUgbWVyaWRpZW0vcG9zdCBtZXJpZGllbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhL3AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgUGVyaW9kKiAgICAgICAgICAgIHwgQiwgQkIgJiBCQkIgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbWlkLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFtLCBwbSwgbWlkbmlnaHQsIG5vb24sIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgbmlnaHQgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgUGVyaW9kIHN0YW5kYWxvbmUqIHwgYiwgYmIgJiBiYmIgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbWlkLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFtLCBwbSwgbWlkbmlnaHQsIG5vb24sIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgbmlnaHQgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgSG91ciAxLTEyICAgICAgICAgIHwgaCAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAxLCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBIb3VyIDAtMjMgICAgICAgICAgfCBIICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwLCAyMyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDAsIDIzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8IE1pbnV0ZSAgICAgICAgICAgICB8IG0gICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDgsIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwOCwgNTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgU2Vjb25kICAgICAgICAgICAgIHwgcyAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMC4uLiA1OSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAwLi4uIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBGcmFjdGlvbmFsIHNlY29uZHMgfCBTICAgICAgICAgICB8IE51bWVyaWM6IDEgZGlnaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwLi4uIDkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDAuLi4gOTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgICAgIHwgTnVtZXJpYzogMyBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAoPSBtaWxsaXNlY29uZHMpICAgICAgICAgICAgICB8IDAwMC4uLiA5OTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCBab25lICAgICAgICAgICAgICAgfCB6LCB6eiAmIHp6eiB8IFNob3J0IHNwZWNpZmljIG5vbiBsb2NhdGlvbiBmb3JtYXQgKGZhbGxiYWNrIHRvIE8pICAgICAgICAgICAgfCBHTVQtOCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICAgICAgfCBMb25nIHNwZWNpZmljIG5vbiBsb2NhdGlvbiBmb3JtYXQgKGZhbGxiYWNrIHRvIE9PT08pICAgICAgICAgIHwgR01ULTA4OjAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IFosIFpaICYgWlpaIHwgSVNPODYwMSBiYXNpYyBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IC0wODAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBaWlpaICAgICAgICB8IExvbmcgbG9jYWxpemVkIEdNVCBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHTVQtODowMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgWlpaWlogICAgICAgfCBJU084NjAxIGV4dGVuZGVkIGZvcm1hdCArIFogaW5kaWNhdG9yIGZvciBvZmZzZXQgMCAoPSBYWFhYWCkgIHwgLTA4OjAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE8sIE9PICYgT09PIHwgU2hvcnQgbG9jYWxpemVkIEdNVCBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdNVC04ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgICAgICB8IExvbmcgbG9jYWxpemVkIEdNVCBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHTVQtMDg6MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICpcclxuICogTm90ZSB0aGF0IHRpbWV6b25lIGNvcnJlY3Rpb24gaXMgbm90IGFwcGxpZWQgdG8gYW4gSVNPIHN0cmluZyB0aGF0IGhhcyBubyB0aW1lIGNvbXBvbmVudCwgc3VjaCBhcyBcIjIwMTYtMDktMTlcIlxyXG4gKlxyXG4gKiAjIyMgRm9ybWF0IGV4YW1wbGVzXHJcbiAqXHJcbiAqIFRoZXNlIGV4YW1wbGVzIHRyYW5zZm9ybSBhIGRhdGUgaW50byB2YXJpb3VzIGZvcm1hdHMsXHJcbiAqIGFzc3VtaW5nIHRoYXQgYGRhdGVPYmpgIGlzIGEgSmF2YVNjcmlwdCBgRGF0ZWAgb2JqZWN0IGZvclxyXG4gKiB5ZWFyOiAyMDE1LCBtb250aDogNiwgZGF5OiAxNSwgaG91cjogMjEsIG1pbnV0ZTogNDMsIHNlY29uZDogMTEsXHJcbiAqIGdpdmVuIGluIHRoZSBsb2NhbCB0aW1lIGZvciB0aGUgYGVuLVVTYCBsb2NhbGUuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZSB9fSAgICAgICAgICAgICAgIC8vIG91dHB1dCBpcyAnSnVuIDE1LCAyMDE1J1xyXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZTonbWVkaXVtJyB9fSAgICAgIC8vIG91dHB1dCBpcyAnSnVuIDE1LCAyMDE1LCA5OjQzOjExIFBNJ1xyXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZTonc2hvcnRUaW1lJyB9fSAgIC8vIG91dHB1dCBpcyAnOTo0MyBQTSdcclxuICoge3sgZGF0ZU9iaiB8IGRhdGU6J21tOnNzJyB9fSAgICAgICAvLyBvdXRwdXQgaXMgJzQzOjExJ1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFVzYWdlIGV4YW1wbGVcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBjb21wb25lbnQgdXNlcyBhIGRhdGUgcGlwZSB0byBkaXNwbGF5IHRoZSBjdXJyZW50IGRhdGUgaW4gZGlmZmVyZW50IGZvcm1hdHMuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHtcclxuICogIHNlbGVjdG9yOiAnZGF0ZS1waXBlJyxcclxuICogIHRlbXBsYXRlOiBgPGRpdj5cclxuICogICAgPHA+VG9kYXkgaXMge3t0b2RheSB8IGRhdGV9fTwvcD5cclxuICogICAgPHA+T3IgaWYgeW91IHByZWZlciwge3t0b2RheSB8IGRhdGU6J2Z1bGxEYXRlJ319PC9wPlxyXG4gKiAgICA8cD5UaGUgdGltZSBpcyB7e3RvZGF5IHwgZGF0ZTonaDptbSBhIHonfX08L3A+XHJcbiAqICA8L2Rpdj5gXHJcbiAqIH0pXHJcbiAqIC8vIEdldCB0aGUgY3VycmVudCBkYXRlIGFuZCB0aW1lIGFzIGEgZGF0ZS10aW1lIHZhbHVlLlxyXG4gKiBleHBvcnQgY2xhc3MgRGF0ZVBpcGVDb21wb25lbnQge1xyXG4gKiAgIHRvZGF5OiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBsb2NhbGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGU6IHN0cmluZyk7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZGF0ZSBleHByZXNzaW9uOiBhIGBEYXRlYCBvYmplY3QsICBhIG51bWJlclxyXG4gICAgICogKG1pbGxpc2Vjb25kcyBzaW5jZSBVVEMgZXBvY2gpLCBvciBhbiBJU08gc3RyaW5nIChodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZSkuXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFRoZSBkYXRlL3RpbWUgY29tcG9uZW50cyB0byBpbmNsdWRlLCB1c2luZyBwcmVkZWZpbmVkIG9wdGlvbnMgb3IgYVxyXG4gICAgICogY3VzdG9tIGZvcm1hdCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdGltZXpvbmUgQSB0aW1lem9uZSBvZmZzZXQgKHN1Y2ggYXMgYCcrMDQzMCdgKSwgb3IgYSBzdGFuZGFyZFxyXG4gICAgICogVVRDL0dNVCBvciBjb250aW5lbnRhbCBVUyB0aW1lem9uZSBhYmJyZXZpYXRpb24uXHJcbiAgICAgKiBXaGVuIG5vdCBzdXBwbGllZCwgdXNlcyB0aGUgZW5kLXVzZXIncyBsb2NhbCBzeXN0ZW0gdGltZXpvbmUuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxyXG4gICAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxyXG4gICAgICogQHJldHVybnMgQSBkYXRlIHN0cmluZyBpbiB0aGUgZGVzaXJlZCBmb3JtYXQuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogVHJhbnNmb3JtcyBhIG51bWJlciBpbnRvIGEgc3RyaW5nLFxyXG4gKiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcyB0aGF0IGRldGVybWluZSBncm91cCBzaXppbmcgYW5kXHJcbiAqIHNlcGFyYXRvciwgZGVjaW1hbC1wb2ludCBjaGFyYWN0ZXIsIGFuZCBvdGhlciBsb2NhbGUtc3BlY2lmaWNcclxuICogY29uZmlndXJhdGlvbnMuXHJcbiAqXHJcbiAqIElmIG5vIHBhcmFtZXRlcnMgYXJlIHNwZWNpZmllZCwgdGhlIGZ1bmN0aW9uIHJvdW5kcyBvZmYgdG8gdGhlIG5lYXJlc3QgdmFsdWUgdXNpbmcgdGhpc1xyXG4gKiBbcm91bmRpbmcgbWV0aG9kXShodHRwczovL2VuLndpa2lib29rcy5vcmcvd2lraS9Bcml0aG1ldGljL1JvdW5kaW5nKS5cclxuICogVGhlIGJlaGF2aW9yIGRpZmZlcnMgZnJvbSB0aGF0IG9mIHRoZSBKYXZhU2NyaXB0IGBgYE1hdGgucm91bmQoKWBgYCBmdW5jdGlvbi5cclxuICogSW4gdGhlIGZvbGxvd2luZyBjYXNlIGZvciBleGFtcGxlLCB0aGUgcGlwZSByb3VuZHMgZG93biB3aGVyZVxyXG4gKiBgYGBNYXRoLnJvdW5kKClgYGAgcm91bmRzIHVwOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIC0yLjUgfCBudW1iZXI6JzEuMC0wJ1xyXG4gKiA+IC0zXHJcbiAqIE1hdGgucm91bmQoLTIuNSlcclxuICogPiAtMlxyXG4gKiBgYGBcclxuICpcclxuICogQHNlZSBgZm9ybWF0TnVtYmVyKClgXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBzaG93cyBob3cgdGhlIHBpcGUgdHJhbnNmb3JtcyBudW1iZXJzXHJcbiAqIGludG8gdGV4dCBzdHJpbmdzLCBhY2NvcmRpbmcgdG8gdmFyaW91cyBmb3JtYXQgc3BlY2lmaWNhdGlvbnMsXHJcbiAqIHdoZXJlIHRoZSBjYWxsZXIncyBkZWZhdWx0IGxvY2FsZSBpcyBgZW4tVVNgLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb21tb24vcGlwZXMvdHMvbnVtYmVyX3BpcGUudHNcIiByZWdpb249J051bWJlclBpcGUnPjwvY29kZS1leGFtcGxlPlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWNpbWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxlO1xyXG4gICAgY29uc3RydWN0b3IoX2xvY2FsZTogc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkLlxyXG4gICAgICogQHBhcmFtIGRpZ2l0c0luZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmdcclxuICAgICAqIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0Ojxicj5cclxuICAgICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxyXG4gICAgICogICAtIGBtaW5JbnRlZ2VyRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDFgLlxyXG4gICAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAwYC5cclxuICAgICAqICAgLSBgbWF4RnJhY3Rpb25EaWdpdHNgOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgM2AuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICAgICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxyXG4gICAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGlnaXRzSW5mbz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgREkgVG9rZW4gcmVwcmVzZW50aW5nIHRoZSBtYWluIHJlbmRlcmluZyBjb250ZXh0LiBJbiBhIGJyb3dzZXIgdGhpcyBpcyB0aGUgRE9NIERvY3VtZW50LlxyXG4gKlxyXG4gKiBOb3RlOiBEb2N1bWVudCBtaWdodCBub3QgYmUgYXZhaWxhYmxlIGluIHRoZSBBcHBsaWNhdGlvbiBDb250ZXh0IHdoZW4gQXBwbGljYXRpb24gYW5kIFJlbmRlcmluZ1xyXG4gKiBDb250ZXh0cyBhcmUgbm90IHRoZSBzYW1lIChlLmcuIHdoZW4gcnVubmluZyB0aGUgYXBwbGljYXRpb24gaW4gYSBXZWIgV29ya2VyKS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgRE9DVU1FTlQ6IEluamVjdGlvblRva2VuPERvY3VtZW50PjtcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIGN1cnJlbmN5IHVzaW5nIGxvY2FsZSBydWxlcy5cclxuICpcclxuICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gZm9ybWF0LlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIGN1cnJlbmN5IEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGN1cnJlbmN5IHN5bWJvbCBvciBpdHMgbmFtZSxcclxuICogc3VjaCBhcyBcIiRcIiBvciBcIkNhbmFkaWFuIERvbGxhclwiLiBVc2VkIGluIG91dHB1dCBzdHJpbmcsIGJ1dCBkb2VzIG5vdCBhZmZlY3QgdGhlIG9wZXJhdGlvblxyXG4gKiBvZiB0aGUgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBjdXJyZW5jeUNvZGUgVGhlIFtJU08gNDIxN10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpXHJcbiAqIGN1cnJlbmN5IGNvZGUsIHN1Y2ggYXMgYFVTRGAgZm9yIHRoZSBVUyBkb2xsYXIgYW5kIGBFVVJgIGZvciB0aGUgZXVyby5cclxuICogVXNlZCB0byBkZXRlcm1pbmUgdGhlIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGRlY2ltYWwgcGFydC5cclxuICogQHBhcmFtIGRpZ2l0SW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuICogYHttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c31gLiBTZWUgYERlY2ltYWxQaXBlYCBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGN1cnJlbmN5IHZhbHVlLlxyXG4gKlxyXG4gKiBAc2VlIGBmb3JtYXROdW1iZXIoKWBcclxuICogQHNlZSBgRGVjaW1hbFBpcGVgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlOiBudW1iZXIsIGxvY2FsZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBjdXJyZW5jeUNvZGU/OiBzdHJpbmcsIGRpZ2l0c0luZm8/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRm9ybWF0cyBhIGRhdGUgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cclxuICpcclxuICogQHBhcmFtIHZhbHVlIFRoZSBkYXRlIHRvIGZvcm1hdCwgYXMgYSBEYXRlLCBvciBhIG51bWJlciAobWlsbGlzZWNvbmRzIHNpbmNlIFVUQyBlcG9jaClcclxuICogb3IgYW4gW0lTTyBkYXRlLXRpbWUgc3RyaW5nXShodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZSkuXHJcbiAqIEBwYXJhbSBmb3JtYXQgVGhlIGRhdGUtdGltZSBjb21wb25lbnRzIHRvIGluY2x1ZGUuIFNlZSBgRGF0ZVBpcGVgIGZvciBkZXRhaWxzLlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIHRpbWV6b25lIFRoZSB0aW1lIHpvbmUuIEEgdGltZSB6b25lIG9mZnNldCBmcm9tIEdNVCAoc3VjaCBhcyBgJyswNDMwJ2ApLFxyXG4gKiBvciBhIHN0YW5kYXJkIFVUQy9HTVQgb3IgY29udGluZW50YWwgVVMgdGltZSB6b25lIGFiYnJldmlhdGlvbi5cclxuICogSWYgbm90IHNwZWNpZmllZCwgdXNlcyBob3N0IHN5c3RlbSBzZXR0aW5ncy5cclxuICpcclxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZy5cclxuICpcclxuICogQHNlZSBgRGF0ZVBpcGVgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZvcm1hdERhdGUodmFsdWU6IHN0cmluZyB8IG51bWJlciB8IERhdGUsIGZvcm1hdDogc3RyaW5nLCBsb2NhbGU6IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRm9ybWF0cyBhIG51bWJlciBhcyB0ZXh0LCB3aXRoIGdyb3VwIHNpemluZywgc2VwYXJhdG9yLCBhbmQgb3RoZXJcclxuICogcGFyYW1ldGVycyBiYXNlZCBvbiB0aGUgbG9jYWxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBmb3JtYXQuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZGlnaXRJbmZvIERlY2ltYWwgcmVwcmVzZW50YXRpb24gb3B0aW9ucywgc3BlY2lmaWVkIGJ5IGEgc3RyaW5nIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBge21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfWAuIFNlZSBgRGVjaW1hbFBpcGVgIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgdGV4dCBzdHJpbmcuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGZvcm1hdE51bWJlcih2YWx1ZTogbnVtYmVyLCBsb2NhbGU6IHN0cmluZywgZGlnaXRzSW5mbz86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgcGVyY2VudGFnZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBmb3JtYXQuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZGlnaXRJbmZvIERlY2ltYWwgcmVwcmVzZW50YXRpb24gb3B0aW9ucywgc3BlY2lmaWVkIGJ5IGEgc3RyaW5nIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBge21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfWAuIFNlZSBgRGVjaW1hbFBpcGVgIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgcGVyY2VudGFnZSB2YWx1ZS5cclxuICpcclxuICogQHNlZSBgZm9ybWF0TnVtYmVyKClgXHJcbiAqIEBzZWUgYERlY2ltYWxQaXBlYFxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKiBAcHVibGljQXBpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBmb3JtYXRQZXJjZW50KHZhbHVlOiBudW1iZXIsIGxvY2FsZTogc3RyaW5nLCBkaWdpdHNJbmZvPzogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFN0cmluZyB3aWR0aHMgYXZhaWxhYmxlIGZvciBkYXRlLXRpbWUgZm9ybWF0cy5cclxuICogVGhlIHNwZWNpZmljIGNoYXJhY3RlciB3aWR0aHMgYXJlIGxvY2FsZS1zcGVjaWZpYy5cclxuICogRXhhbXBsZXMgYXJlIGdpdmVuIGZvciBgZW4tVVNgLlxyXG4gKlxyXG4gKiBAc2VlIGBnZXRMb2NhbGVEYXRlRm9ybWF0KClgXHJcbiAqIEBzZWUgYGdldExvY2FsZVRpbWVGb3JtYXQoKWBgXHJcbiAqIEBzZWUgYGdldExvY2FsZURhdGVUaW1lRm9ybWF0KClgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gRm9ybWF0V2lkdGgge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgYGVuLVVTYCwgJ00vZC95eSwgaDptbSBhJ2BcclxuICAgICAqIChFeGFtcGxlOiBgNi8xNS8xNSwgOTowMyBBTWApXHJcbiAgICAgKi9cclxuICAgIFNob3J0ID0gMCxcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGBlbi1VU2AsIGAnTU1NIGQsIHksIGg6bW06c3MgYSdgXHJcbiAgICAgKiAoRXhhbXBsZTogYEp1biAxNSwgMjAxNSwgOTowMzowMSBBTWApXHJcbiAgICAgKi9cclxuICAgIE1lZGl1bSA9IDEsXHJcbiAgICAvKipcclxuICAgICAqIEZvciBgZW4tVVNgLCBgJ01NTU0gZCwgeSwgaDptbTpzcyBhIHonYFxyXG4gICAgICogKEV4YW1wbGU6IGBKdW5lIDE1LCAyMDE1IGF0IDk6MDM6MDEgQU0gR01UKzFgKVxyXG4gICAgICovXHJcbiAgICBMb25nID0gMixcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGBlbi1VU2AsIGAnRUVFRSwgTU1NTSBkLCB5LCBoOm1tOnNzIGEgenp6eidgXHJcbiAgICAgKiAoRXhhbXBsZTogYE1vbmRheSwgSnVuZSAxNSwgMjAxNSBhdCA5OjAzOjAxIEFNIEdNVCswMTowMGApXHJcbiAgICAgKi9cclxuICAgIEZ1bGwgPSAzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250ZXh0LWRlcGVuZGFudCB0cmFuc2xhdGlvbiBmb3JtcyBmb3Igc3RyaW5ncy5cclxuICogVHlwaWNhbGx5IHRoZSBzdGFuZGFsb25lIHZlcnNpb24gaXMgZm9yIHRoZSBub21pbmF0aXZlIGZvcm0gb2YgdGhlIHdvcmQsXHJcbiAqIGFuZCB0aGUgZm9ybWF0IHZlcnNpb24gaXMgdXNlZCBmb3IgdGhlIGdlbml0aXZlIGNhc2UuXHJcbiAqIEBzZWUgW0NMRFIgd2Vic2l0ZV0oaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lI1RPQy1TdGFuZC1BbG9uZS12cy4tRm9ybWF0LVN0eWxlcylcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBGb3JtU3R5bGUge1xyXG4gICAgRm9ybWF0ID0gMCxcclxuICAgIFN0YW5kYWxvbmUgPSAxXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbmN5IHN5bWJvbCBmb3IgYSBnaXZlbiBjdXJyZW5jeSBjb2RlLlxyXG4gKlxyXG4gKiBGb3IgZXhhbXBsZSwgZm9yIHRoZSBkZWZhdWx0IGBlbi1VU2AgbG9jYWxlLCB0aGUgY29kZSBgVVNEYCBjYW5cclxuICogYmUgcmVwcmVzZW50ZWQgYnkgdGhlIG5hcnJvdyBzeW1ib2wgYCRgIG9yIHRoZSB3aWRlIHN5bWJvbCBgVVMkYC5cclxuICpcclxuICogQHBhcmFtIGNvZGUgVGhlIGN1cnJlbmN5IGNvZGUuXHJcbiAqIEBwYXJhbSBmb3JtYXQgVGhlIGZvcm1hdCwgYHdpZGVgIG9yIGBuYXJyb3dgLlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICpcclxuICogQHJldHVybnMgVGhlIHN5bWJvbCwgb3IgdGhlIGN1cnJlbmN5IGNvZGUgaWYgbm8gc3ltYm9sIGlzIGF2YWlsYWJsZS5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0Q3VycmVuY3lTeW1ib2woY29kZTogc3RyaW5nLCBmb3JtYXQ6ICd3aWRlJyB8ICduYXJyb3cnLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqIFRoZSBkZWZhdWx0IGlzIGRlZmluZWQgYXMgdGhlIGZpcnN0IGN1cnJlbmN5IHdoaWNoIGlzIHN0aWxsIGluIHVzZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBUaGUgY29kZSBvZiB0aGUgbG9jYWxlIHdob3NlIGN1cnJlbmN5IGNvZGUgd2Ugd2FudC5cclxuICogQHJldHVybnMgVGhlIGNvZGUgb2YgdGhlIGRlZmF1bHQgY3VycmVuY3kgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUN1cnJlbmN5Q29kZShsb2NhbGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW5jeSBmb3IgdGhlIG1haW4gY291bnRyeSBjb3JyZXNwb25kaW5nXHJcbiAqIHRvIGEgZ2l2ZW4gbG9jYWxlLiBGb3IgZXhhbXBsZSwgJ1VTIERvbGxhcicgZm9yIGBlbi1VU2AuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcmV0dXJucyBUaGUgY3VycmVuY3kgbmFtZSxcclxuICogb3IgYG51bGxgIGlmIHRoZSBtYWluIGNvdW50cnkgY2Fubm90IGJlIGRldGVybWluZWQuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUN1cnJlbmN5TmFtZShsb2NhbGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBzeW1ib2wgdXNlZCB0byByZXByZXNlbnQgdGhlIGN1cnJlbmN5IGZvciB0aGUgbWFpbiBjb3VudHJ5XHJcbiAqIGNvcnJlc3BvbmRpbmcgdG8gYSBnaXZlbiBsb2NhbGUuIEZvciBleGFtcGxlLCAnJCcgZm9yIGBlbi1VU2AuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxpemVkIHN5bWJvbCBjaGFyYWN0ZXIsXHJcbiAqIG9yIGBudWxsYCBpZiB0aGUgbWFpbiBjb3VudHJ5IGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVDdXJyZW5jeVN5bWJvbChsb2NhbGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGEgbG9jYWxpemVkIGRhdGUtdmFsdWUgZm9ybWF0aW5nIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgZm9ybWF0IHR5cGUuXHJcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgZm9ybWF0aW5nIHN0cmluZy5cclxuICogQHNlZSBgRm9ybWF0V2lkdGhgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZURhdGVGb3JtYXQobG9jYWxlOiBzdHJpbmcsIHdpZHRoOiBGb3JtYXRXaWR0aCk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgYSBsb2NhbGl6ZWQgZGF0ZS10aW1lIGZvcm1hdHRpbmcgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSBmb3JtYXQgdHlwZS5cclxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBmb3JtYXR0aW5nIHN0cmluZy5cclxuICogQHNlZSBgRm9ybWF0V2lkdGhgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZURhdGVUaW1lRm9ybWF0KGxvY2FsZTogc3RyaW5nLCB3aWR0aDogRm9ybWF0V2lkdGgpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGRheXMgb2YgdGhlIHdlZWsgZm9yIHRoZSBnaXZlbiBsb2NhbGUsIHVzaW5nIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gZm9ybVN0eWxlIFRoZSByZXF1aXJlZCBncmFtbWF0aWNhbCBmb3JtLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIHJlcXVpcmVkIGNoYXJhY3RlciB3aWR0aC5cclxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbG9jYWxpemVkIG5hbWUgc3RyaW5ncy5cclxuICogRm9yIGV4YW1wbGUsYFtTdW5kYXksIE1vbmRheSwgLi4uIFNhdHVyZGF5XWAgZm9yIGBlbi1VU2AuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZURheU5hbWVzKGxvY2FsZTogc3RyaW5nLCBmb3JtU3R5bGU6IEZvcm1TdHlsZSwgd2lkdGg6IFRyYW5zbGF0aW9uV2lkdGgpOiBzdHJpbmdbXTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgZGF5IHBlcmlvZCBzdHJpbmdzIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSByZXF1aXJlZCBjaGFyYWN0ZXIgd2lkdGguXHJcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGxvY2FsaXplZCBwZXJpb2Qgc3RyaW5ncy4gRm9yIGV4YW1wbGUsIGBbQU0sIFBNXWAgZm9yIGBlbi1VU2AuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZURheVBlcmlvZHMobG9jYWxlOiBzdHJpbmcsIGZvcm1TdHlsZTogRm9ybVN0eWxlLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCk6IFtzdHJpbmcsIHN0cmluZ107XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIEdyZWdvcmlhbi1jYWxlbmRhciBlcmFzIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSByZXF1aXJlZCBjaGFyYWN0ZXIgd2lkdGguXHJcblxyXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBsb2NhbGl6ZWQgZXJhIHN0cmluZ3MuXHJcbiAqIEZvciBleGFtcGxlLCBgW0FELCBCQ11gIGZvciBgZW4tVVNgLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVFcmFOYW1lcyhsb2NhbGU6IHN0cmluZywgd2lkdGg6IFRyYW5zbGF0aW9uV2lkdGgpOiBbc3RyaW5nLCBzdHJpbmddO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBsb2NhbGUtc3BlY2lmaWMgcnVsZXMgdXNlZCB0byBkZXRlcm1pbmUgd2hpY2ggZGF5IHBlcmlvZCB0byB1c2VcclxuICogd2hlbiBtb3JlIHRoYW4gb25lIHBlcmlvZCBpcyBkZWZpbmVkIGZvciBhIGxvY2FsZS5cclxuICpcclxuICogVGhlcmUgaXMgYSBydWxlIGZvciBlYWNoIGRlZmluZWQgZGF5IHBlcmlvZC4gVGhlXHJcbiAqIGZpcnN0IHJ1bGUgaXMgYXBwbGllZCB0byB0aGUgZmlyc3QgZGF5IHBlcmlvZCBhbmQgc28gb24uXHJcbiAqIEZhbGwgYmFjayB0byBBTS9QTSB3aGVuIG5vIHJ1bGVzIGFyZSBhdmFpbGFibGUuXHJcbiAqXHJcbiAqIEEgcnVsZSBjYW4gc3BlY2lmeSBhIHBlcmlvZCBhcyB0aW1lIHJhbmdlLCBvciBhcyBhIHNpbmdsZSB0aW1lIHZhbHVlLlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uYWxpdHkgaXMgb25seSBhdmFpbGFibGUgd2hlbiB5b3UgaGF2ZSBsb2FkZWQgdGhlIGZ1bGwgbG9jYWxlIGRhdGEuXHJcbiAqIFNlZSB0aGUgW1wiSTE4biBndWlkZVwiXShndWlkZS9pMThuI2kxOG4tcGlwZXMpLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHJldHVybnMgVGhlIHJ1bGVzIGZvciB0aGUgbG9jYWxlLCBhIHNpbmdsZSB0aW1lIHZhbHVlIG9yIGFycmF5IG9mICpmcm9tLXRpbWUsIHRvLXRpbWUqLFxyXG4gKiBvciBudWxsIGlmIG5vIHBlcmlvZHMgYXJlIGF2YWlsYWJsZS5cclxuICpcclxuICogQHNlZSBgZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RzKClgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUV4dHJhRGF5UGVyaW9kUnVsZXMobG9jYWxlOiBzdHJpbmcpOiAoVGltZSB8IFtUaW1lLCBUaW1lXSlbXTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgbG9jYWxlLXNwZWNpZmljIGRheSBwZXJpb2RzLCB3aGljaCBpbmRpY2F0ZSByb3VnaGx5IGhvdyBhIGRheSBpcyBicm9rZW4gdXBcclxuICogaW4gZGlmZmVyZW50IGxhbmd1YWdlcy5cclxuICogRm9yIGV4YW1wbGUsIGZvciBgZW4tVVNgLCBwZXJpb2RzIGFyZSBtb3JuaW5nLCBub29uLCBhZnRlcm5vb24sIGV2ZW5pbmcsIGFuZCBtaWRuaWdodC5cclxuICpcclxuICogVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4geW91IGhhdmUgbG9hZGVkIHRoZSBmdWxsIGxvY2FsZSBkYXRhLlxyXG4gKiBTZWUgdGhlIFtcIkkxOG4gZ3VpZGVcIl0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSBmb3JtU3R5bGUgVGhlIHJlcXVpcmVkIGdyYW1tYXRpY2FsIGZvcm0uXHJcbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxyXG4gKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRlZCBkYXktcGVyaW9kIHN0cmluZ3MuXHJcbiAqIEBzZWUgYGdldExvY2FsZUV4dHJhRGF5UGVyaW9kUnVsZXMoKWBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RzKGxvY2FsZTogc3RyaW5nLCBmb3JtU3R5bGU6IEZvcm1TdHlsZSwgd2lkdGg6IFRyYW5zbGF0aW9uV2lkdGgpOiBzdHJpbmdbXTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEByZXR1cm5zIEEgZGF5IGluZGV4IG51bWJlciwgdXNpbmcgdGhlIDAtYmFzZWQgd2Vlay1kYXkgaW5kZXggZm9yIGBlbi1VU2BcclxuICogKFN1bmRheSA9IDAsIE1vbmRheSA9IDEsIC4uLikuXHJcbiAqIEZvciBleGFtcGxlLCBmb3IgYGZyLUZSYCwgcmV0dXJucyAxIHRvIGluZGljYXRlIHRoYXQgdGhlIGZpcnN0IGRheSBpcyBNb25kYXkuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZUZpcnN0RGF5T2ZXZWVrKGxvY2FsZTogc3RyaW5nKTogV2Vla0RheTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIGxvY2FsZSBJRCBmcm9tIHRoZSBjdXJyZW50bHkgbG9hZGVkIGxvY2FsZS5cclxuICogVGhlIGxvYWRlZCBsb2NhbGUgY291bGQgYmUsIGZvciBleGFtcGxlLCBhIGdsb2JhbCBvbmUgcmF0aGVyIHRoYW4gYSByZWdpb25hbCBvbmUuXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSwgc3VjaCBhcyBgZnItRlJgLlxyXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxlIGNvZGUuIEZvciBleGFtcGxlLCBgZnJgLlxyXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRMb2NhbGVJZChsb2NhbGU6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgbW9udGhzIG9mIHRoZSB5ZWFyIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLCB1c2luZyB0aGUgR3JlZ29yaWFuIGNhbGVuZGFyLlxyXG4gKlxyXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cclxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cclxuICogQHBhcmFtIHdpZHRoIFRoZSByZXF1aXJlZCBjaGFyYWN0ZXIgd2lkdGguXHJcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGxvY2FsaXplZCBuYW1lIHN0cmluZ3MuXHJcbiAqIEZvciBleGFtcGxlLCAgYFtKYW51YXJ5LCBGZWJydWFyeSwgLi4uXWAgZm9yIGBlbi1VU2AuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZU1vbnRoTmFtZXMobG9jYWxlOiBzdHJpbmcsIGZvcm1TdHlsZTogRm9ybVN0eWxlLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCk6IHN0cmluZ1tdO1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIG51bWJlciBmb3JtYXQgZm9yIGEgZ2l2ZW4gbG9jYWxlLlxyXG4gKlxyXG4gKiBOdW1iZXJzIGFyZSBmb3JtYXR0ZWQgdXNpbmcgcGF0dGVybnMsIGxpa2UgYCMsIyMjLjAwYC4gRm9yIGV4YW1wbGUsIHRoZSBwYXR0ZXJuIGAjLCMjIy4wMGBcclxuICogd2hlbiB1c2VkIHRvIGZvcm1hdCB0aGUgbnVtYmVyIDEyMzQ1LjY3OCBjb3VsZCByZXN1bHQgaW4gXCIxMiczNDUsNjc4XCIuIFRoYXQgd291bGQgaGFwcGVuIGlmIHRoZVxyXG4gKiBncm91cGluZyBzZXBhcmF0b3IgZm9yIHlvdXIgbGFuZ3VhZ2UgaXMgYW4gYXBvc3Ryb3BoZSwgYW5kIHRoZSBkZWNpbWFsIHNlcGFyYXRvciBpcyBhIGNvbW1hLlxyXG4gKlxyXG4gKiA8Yj5JbXBvcnRhbnQ6PC9iPiBUaGUgY2hhcmFjdGVycyBgLmAgYCxgIGAwYCBgI2AgKGFuZCBvdGhlcnMgYmVsb3cpIGFyZSBzcGVjaWFsIHBsYWNlaG9sZGVyc1xyXG4gKiB0aGF0IHN0YW5kIGZvciB0aGUgZGVjaW1hbCBzZXBhcmF0b3IsIGFuZCBzbyBvbiwgYW5kIGFyZSBOT1QgcmVhbCBjaGFyYWN0ZXJzLlxyXG4gKiBZb3UgbXVzdCBOT1QgXCJ0cmFuc2xhdGVcIiB0aGUgcGxhY2Vob2xkZXJzLiBGb3IgZXhhbXBsZSwgZG9uJ3QgY2hhbmdlIGAuYCB0byBgLGAgZXZlbiB0aG91Z2ggaW5cclxuICogeW91ciBsYW5ndWFnZSB0aGUgZGVjaW1hbCBwb2ludCBpcyB3cml0dGVuIHdpdGggYSBjb21tYS4gVGhlIHN5bWJvbHMgc2hvdWxkIGJlIHJlcGxhY2VkIGJ5IHRoZVxyXG4gKiBsb2NhbCBlcXVpdmFsZW50cywgdXNpbmcgdGhlIGFwcHJvcHJpYXRlIGBOdW1iZXJTeW1ib2xgIGZvciB5b3VyIGxhbmd1YWdlLlxyXG4gKlxyXG4gKiBIZXJlIGFyZSB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHVzZWQgaW4gbnVtYmVyIHBhdHRlcm5zOlxyXG4gKlxyXG4gKiB8IFN5bWJvbCB8IE1lYW5pbmcgfFxyXG4gKiB8LS0tLS0tLS18LS0tLS0tLS0tfFxyXG4gKiB8IC4gfCBSZXBsYWNlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBjaGFyYWN0ZXIgdXNlZCBmb3IgdGhlIGRlY2ltYWwgcG9pbnQuIHxcclxuICogfCAsIHwgUmVwbGFjZWQgYnkgdGhlIFwiZ3JvdXBpbmdcIiAodGhvdXNhbmRzKSBzZXBhcmF0b3IuIHxcclxuICogfCAwIHwgUmVwbGFjZWQgYnkgYSBkaWdpdCAob3IgemVybyBpZiB0aGVyZSBhcmVuJ3QgZW5vdWdoIGRpZ2l0cykuIHxcclxuICogfCAjIHwgUmVwbGFjZWQgYnkgYSBkaWdpdCAob3Igbm90aGluZyBpZiB0aGVyZSBhcmVuJ3QgZW5vdWdoKS4gfFxyXG4gKiB8IMKkIHwgUmVwbGFjZWQgYnkgYSBjdXJyZW5jeSBzeW1ib2wsIHN1Y2ggYXMgJCBvciBVU0QuIHxcclxuICogfCAlIHwgTWFya3MgYSBwZXJjZW50IGZvcm1hdC4gVGhlICUgc3ltYm9sIG1heSBjaGFuZ2UgcG9zaXRpb24sIGJ1dCBtdXN0IGJlIHJldGFpbmVkLiB8XHJcbiAqIHwgRSB8IE1hcmtzIGEgc2NpZW50aWZpYyBmb3JtYXQuIFRoZSBFIHN5bWJvbCBtYXkgY2hhbmdlIHBvc2l0aW9uLCBidXQgbXVzdCBiZSByZXRhaW5lZC4gfFxyXG4gKiB8ICcgfCBTcGVjaWFsIGNoYXJhY3RlcnMgdXNlZCBhcyBsaXRlcmFsIGNoYXJhY3RlcnMgYXJlIHF1b3RlZCB3aXRoIEFTQ0lJIHNpbmdsZSBxdW90ZXMuIHxcclxuICpcclxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXHJcbiAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIG51bWVyaWMgdmFsdWUgdG8gYmUgZm9ybWF0dGVkIChzdWNoIGFzIGBEZWNpbWFsYCBvciBgQ3VycmVuY3lgLilcclxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBmb3JtYXQgc3RyaW5nLlxyXG4gKiBAc2VlIGBOdW1iZXJGb3JtYXRTdHlsZWBcclxuICogQHNlZSBbQ0xEUiB3ZWJzaXRlXShodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9udW1iZXItcGF0dGVybnMpXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZU51bWJlckZvcm1hdChsb2NhbGU6IHN0cmluZywgdHlwZTogTnVtYmVyRm9ybWF0U3R5bGUpOiBzdHJpbmc7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGEgbG9jYWxpemVkIG51bWJlciBzeW1ib2wgdGhhdCBjYW4gYmUgdXNlZCB0byByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBudW1iZXIgZm9ybWF0cy5cclxuICogQHBhcmFtIGxvY2FsZSBUaGUgbG9jYWxlIGNvZGUuXHJcbiAqIEBwYXJhbSBzeW1ib2wgVGhlIHN5bWJvbCB0byBsb2NhbGl6ZS5cclxuICogQHJldHVybnMgVGhlIGNoYXJhY3RlciBmb3IgdGhlIGxvY2FsaXplZCBzeW1ib2wuXHJcbiAqIEBzZWUgYE51bWJlclN5bWJvbGBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZTogc3RyaW5nLCBzeW1ib2w6IE51bWJlclN5bWJvbCk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBAYWxpYXMgY29yZS/JtWdldExvY2FsZVBsdXJhbENhc2VcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgZ2V0TG9jYWxlUGx1cmFsQ2FzZTogKGxvY2FsZTogc3RyaW5nKSA9PiAoKHZhbHVlOiBudW1iZXIpID0+IFBsdXJhbCk7XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIGEgbG9jYWxpemVkIHRpbWUtdmFsdWUgZm9ybWF0dGluZyBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcGFyYW0gd2lkdGggVGhlIGZvcm1hdCB0eXBlLlxyXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxpemVkIGZvcm1hdHRpbmcgc3RyaW5nLlxyXG4gKiBAc2VlIGBGb3JtYXRXaWR0aGBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZVRpbWVGb3JtYXQobG9jYWxlOiBzdHJpbmcsIHdpZHRoOiBGb3JtYXRXaWR0aCk6IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBSYW5nZSBvZiB3ZWVrIGRheXMgdGhhdCBhcmUgY29uc2lkZXJlZCB0aGUgd2Vlay1lbmQgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gKiBAcmV0dXJucyBUaGUgcmFuZ2Ugb2YgZGF5IHZhbHVlcywgYFtzdGFydERheSwgZW5kRGF5XWAuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldExvY2FsZVdlZWtFbmRSYW5nZShsb2NhbGU6IHN0cmluZyk6IFtXZWVrRGF5LCBXZWVrRGF5XTtcclxuXHJcbi8qKlxyXG4gKiBSZXBvcnRzIHRoZSBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMgZm9yIGEgZ2l2ZW4gY3VycmVuY3kuXHJcbiAqIFRoZSB2YWx1ZSBkZXBlbmRzIHVwb24gdGhlIHByZXNlbmNlIG9mIGNlbnRzIGluIHRoYXQgcGFydGljdWxhciBjdXJyZW5jeS5cclxuICpcclxuICogQHBhcmFtIGNvZGUgVGhlIGN1cnJlbmN5IGNvZGUuXHJcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMsIHR5cGljYWxseSAwIG9yIDIuXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldE51bWJlck9mQ3VycmVuY3lEaWdpdHMoY29kZTogc3RyaW5nKTogbnVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUge0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlIHRvXHJcbiAqIHJlcHJlc2VudCBpdHMgc3RhdGUgaW4gdGhlXHJcbiAqIFtoYXNoIGZyYWdtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmlmb3JtX1Jlc291cmNlX0xvY2F0b3IjU3ludGF4KVxyXG4gKiBvZiB0aGUgYnJvd3NlcidzIFVSTC5cclxuICpcclxuICogRm9yIGluc3RhbmNlLCBpZiB5b3UgY2FsbCBgbG9jYXRpb24uZ28oJy9mb28nKWAsIHRoZSBicm93c2VyJ3MgVVJMIHdpbGwgYmVjb21lXHJcbiAqIGBleGFtcGxlLmNvbSMvZm9vYC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9sb2NhdGlvbi90cy9oYXNoX2xvY2F0aW9uX2NvbXBvbmVudC50cyByZWdpb249J0xvY2F0aW9uQ29tcG9uZW50J31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSGFzaExvY2F0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBMb2NhdGlvblN0cmF0ZWd5IHtcclxuICAgIHByaXZhdGUgX3BsYXRmb3JtTG9jYXRpb247XHJcbiAgICBwcml2YXRlIF9iYXNlSHJlZjtcclxuICAgIGNvbnN0cnVjdG9yKF9wbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLCBfYmFzZUhyZWY/OiBzdHJpbmcpO1xyXG4gICAgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBnZXRCYXNlSHJlZigpOiBzdHJpbmc7XHJcbiAgICBwYXRoKGluY2x1ZGVIYXNoPzogYm9vbGVhbik6IHN0cmluZztcclxuICAgIHByZXBhcmVFeHRlcm5hbFVybChpbnRlcm5hbDogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICByZXBsYWNlU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcclxuICAgIGZvcndhcmQoKTogdm9pZDtcclxuICAgIGJhY2soKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE1hcHMgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IHBsdXJhbGl6ZXMgdGhlIHZhbHVlIGFjY29yZGluZyB0byBsb2NhbGUgcnVsZXMuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvaTE4bl9waXBlLnRzIHJlZ2lvbj0nSTE4blBsdXJhbFBpcGVDb21wb25lbnQnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJMThuUGx1cmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxpemF0aW9uO1xyXG4gICAgY29uc3RydWN0b3IoX2xvY2FsaXphdGlvbjogTmdMb2NhbGl6YXRpb24pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIG51bWJlciB0byBiZSBmb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSBwbHVyYWxNYXAgYW4gb2JqZWN0IHRoYXQgbWltaWNzIHRoZSBJQ1UgZm9ybWF0LCBzZWVcclxuICAgICAqIGh0dHA6Ly91c2VyZ3VpZGUuaWN1LXByb2plY3Qub3JnL2Zvcm1hdHBhcnNlL21lc3NhZ2VzLlxyXG4gICAgICogQHBhcmFtIGxvY2FsZSBhIGBzdHJpbmdgIGRlZmluaW5nIHRoZSBsb2NhbGUgdG8gdXNlICh1c2VzIHRoZSBjdXJyZW50IHtAbGluayBMT0NBTEVfSUR9IGJ5XHJcbiAgICAgKiBkZWZhdWx0KS5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIHBsdXJhbE1hcDoge1xyXG4gICAgICAgIFtjb3VudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgfSwgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogR2VuZXJpYyBzZWxlY3RvciB0aGF0IGRpc3BsYXlzIHRoZSBzdHJpbmcgdGhhdCBtYXRjaGVzIHRoZSBjdXJyZW50IHZhbHVlLlxyXG4gKlxyXG4gKiBJZiBub25lIG9mIHRoZSBrZXlzIG9mIHRoZSBgbWFwcGluZ2AgbWF0Y2ggdGhlIGB2YWx1ZWAsIHRoZW4gdGhlIGNvbnRlbnRcclxuICogb2YgdGhlIGBvdGhlcmAga2V5IGlzIHJldHVybmVkIHdoZW4gcHJlc2VudCwgb3RoZXJ3aXNlIGFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9pMThuX3BpcGUudHMgcmVnaW9uPSdJMThuU2VsZWN0UGlwZUNvbXBvbmVudCd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEkxOG5TZWxlY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBhIHN0cmluZyB0byBiZSBpbnRlcm5hdGlvbmFsaXplZC5cclxuICAgICAqIEBwYXJhbSBtYXBwaW5nIGFuIG9iamVjdCB0aGF0IGluZGljYXRlcyB0aGUgdGV4dCB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWRcclxuICAgICAqIGZvciBkaWZmZXJlbnQgdmFsdWVzIG9mIHRoZSBwcm92aWRlZCBgdmFsdWVgLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIG1hcHBpbmc6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9KTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIGJyb3dzZXIgcGxhdGZvcm0uXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQ6IE9iamVjdCk6IGJvb2xlYW47XHJcblxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIGEgcGxhdGZvcm0gaWQgcmVwcmVzZW50cyBhIHNlcnZlciBwbGF0Zm9ybS5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBhIHBsYXRmb3JtIGlkIHJlcHJlc2VudHMgYSB3ZWIgd29ya2VyIGFwcCBwbGF0Zm9ybS5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gaXNQbGF0Zm9ybVdvcmtlckFwcChwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBhIHBsYXRmb3JtIGlkIHJlcHJlc2VudHMgYSB3ZWIgd29ya2VyIFVJIHBsYXRmb3JtLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBpc1BsYXRmb3JtV29ya2VyVWkocGxhdGZvcm1JZDogT2JqZWN0KTogYm9vbGVhbjtcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIGludG8gaXRzIEpTT04tZm9ybWF0IHJlcHJlc2VudGF0aW9uLiAgVXNlZnVsIGZvciBkZWJ1Z2dpbmcuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgY29tcG9uZW50IHVzZXMgYSBKU09OIHBpcGUgdG8gY29udmVydCBhbiBvYmplY3RcclxuICogdG8gSlNPTiBmb3JtYXQsIGFuZCBkaXNwbGF5cyB0aGUgc3RyaW5nIGluIGJvdGggZm9ybWF0cyBmb3IgY29tcGFyaXNvbi5cclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9qc29uX3BpcGUudHMgcmVnaW9uPSdKc29uUGlwZSd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEpzb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHZhbHVlIG9mIGFueSB0eXBlIHRvIGNvbnZlcnQgaW50byBhIEpTT04tZm9ybWF0IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGtleSB2YWx1ZSBwYWlyLlxyXG4gKiBVc3VhbGx5IHVzZWQgdG8gcmVwcmVzZW50IHRoZSBrZXkgdmFsdWUgcGFpcnMgZnJvbSBhIE1hcCBvciBPYmplY3QuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBLZXlWYWx1ZTxLLCBWPiB7XHJcbiAgICBrZXk6IEs7XHJcbiAgICB2YWx1ZTogVjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFRyYW5zZm9ybXMgT2JqZWN0IG9yIE1hcCBpbnRvIGFuIGFycmF5IG9mIGtleSB2YWx1ZSBwYWlycy5cclxuICpcclxuICogVGhlIG91dHB1dCBhcnJheSB3aWxsIGJlIG9yZGVyZWQgYnkga2V5cy5cclxuICogQnkgZGVmYXVsdCB0aGUgY29tcGFyYXRvciB3aWxsIGJlIGJ5IFVuaWNvZGUgcG9pbnQgdmFsdWUuXHJcbiAqIFlvdSBjYW4gb3B0aW9uYWxseSBwYXNzIGEgY29tcGFyZUZuIGlmIHlvdXIga2V5cyBhcmUgY29tcGxleCB0eXBlcy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIyMjIEV4YW1wbGVzXHJcbiAqXHJcbiAqIFRoaXMgZXhhbXBsZXMgc2hvdyBob3cgYW4gT2JqZWN0IG9yIGEgTWFwIGNhbiBiZSBpdGVyYXRlZCBieSBuZ0ZvciB3aXRoIHRoZSB1c2Ugb2YgdGhpcyBrZXl2YWx1ZVxyXG4gKiBwaXBlLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2tleXZhbHVlX3BpcGUudHMgcmVnaW9uPSdLZXlWYWx1ZVBpcGUnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBLZXlWYWx1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlmZmVycztcclxuICAgIGNvbnN0cnVjdG9yKGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyk7XHJcbiAgICBwcml2YXRlIGRpZmZlcjtcclxuICAgIHByaXZhdGUga2V5VmFsdWVzO1xyXG4gICAgdHJhbnNmb3JtPEssIFY+KGlucHV0OiBudWxsLCBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8SywgVj4sIGI6IEtleVZhbHVlPEssIFY+KSA9PiBudW1iZXIpOiBudWxsO1xyXG4gICAgdHJhbnNmb3JtPFY+KGlucHV0OiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogVjtcclxuICAgIH0gfCBNYXA8c3RyaW5nLCBWPiwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPHN0cmluZywgVj4sIGI6IEtleVZhbHVlPHN0cmluZywgVj4pID0+IG51bWJlcik6IEFycmF5PEtleVZhbHVlPHN0cmluZywgVj4+O1xyXG4gICAgdHJhbnNmb3JtPFY+KGlucHV0OiB7XHJcbiAgICAgICAgW2tleTogbnVtYmVyXTogVjtcclxuICAgIH0gfCBNYXA8bnVtYmVyLCBWPiwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPG51bWJlciwgVj4sIGI6IEtleVZhbHVlPG51bWJlciwgVj4pID0+IG51bWJlcik6IEFycmF5PEtleVZhbHVlPG51bWJlciwgVj4+O1xyXG4gICAgdHJhbnNmb3JtPEssIFY+KGlucHV0OiBNYXA8SywgVj4sIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxLLCBWPiwgYjogS2V5VmFsdWU8SywgVj4pID0+IG51bWJlcik6IEFycmF5PEtleVZhbHVlPEssIFY+PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBIHNlcnZpY2UgdGhhdCBhcHBsaWNhdGlvbnMgY2FuIHVzZSB0byBpbnRlcmFjdCB3aXRoIGEgYnJvd3NlcidzIFVSTC5cclxuICpcclxuICogRGVwZW5kaW5nIG9uIHRoZSBgTG9jYXRpb25TdHJhdGVneWAgdXNlZCwgYExvY2F0aW9uYCBwZXJzaXN0c1xyXG4gKiB0byB0aGUgVVJMJ3MgcGF0aCBvciB0aGUgVVJMJ3MgaGFzaCBzZWdtZW50LlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBJdCdzIGJldHRlciB0byB1c2UgdGhlIGBSb3V0ZXIjbmF2aWdhdGVgIHNlcnZpY2UgdG8gdHJpZ2dlciByb3V0ZSBjaGFuZ2VzLiBVc2VcclxuICogYExvY2F0aW9uYCBvbmx5IGlmIHlvdSBuZWVkIHRvIGludGVyYWN0IHdpdGggb3IgY3JlYXRlIG5vcm1hbGl6ZWQgVVJMcyBvdXRzaWRlIG9mXHJcbiAqIHJvdXRpbmcuXHJcbiAqXHJcbiAqIGBMb2NhdGlvbmAgaXMgcmVzcG9uc2libGUgZm9yIG5vcm1hbGl6aW5nIHRoZSBVUkwgYWdhaW5zdCB0aGUgYXBwbGljYXRpb24ncyBiYXNlIGhyZWYuXHJcbiAqIEEgbm9ybWFsaXplZCBVUkwgaXMgYWJzb2x1dGUgZnJvbSB0aGUgVVJMIGhvc3QsIGluY2x1ZGVzIHRoZSBhcHBsaWNhdGlvbidzIGJhc2UgaHJlZiwgYW5kIGhhcyBub1xyXG4gKiB0cmFpbGluZyBzbGFzaDpcclxuICogLSBgL215L2FwcC91c2VyLzEyM2AgaXMgbm9ybWFsaXplZFxyXG4gKiAtIGBteS9hcHAvdXNlci8xMjNgICoqaXMgbm90Kiogbm9ybWFsaXplZFxyXG4gKiAtIGAvbXkvYXBwL3VzZXIvMTIzL2AgKippcyBub3QqKiBub3JtYWxpemVkXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD0nY29tbW9uL2xvY2F0aW9uL3RzL3BhdGhfbG9jYXRpb25fY29tcG9uZW50LnRzJ1xyXG4gKiByZWdpb249J0xvY2F0aW9uQ29tcG9uZW50Jz48L2NvZGUtZXhhbXBsZT5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9jYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSwgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbik7XHJcbiAgICAvKipcclxuICAgICAqIE5vcm1hbGl6ZXMgdGhlIFVSTCBwYXRoIGZvciB0aGlzIGxvY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbmNsdWRlSGFzaCBUcnVlIHRvIGluY2x1ZGUgYW4gYW5jaG9yIGZyYWdtZW50IGluIHRoZSBwYXRoLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIFVSTCBwYXRoLlxyXG4gICAgICovXHJcbiAgICBwYXRoKGluY2x1ZGVIYXNoPzogYm9vbGVhbik6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgbG9jYXRpb24gaGlzdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBgaGlzdG9yeS5zdGF0ZWAgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpOiB1bmtub3duO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBwYXRoIGFuZCBjb21wYXJlcyB0byB0aGUgY3VycmVudCBub3JtYWxpemVkIHBhdGguXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhdGggVGhlIGdpdmVuIFVSTCBwYXRoLlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5IFF1ZXJ5IHBhcmFtZXRlcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gVVJMIHBhdGggaXMgZXF1YWwgdG8gdGhlIGN1cnJlbnQgbm9ybWFsaXplZCBwYXRoLCBmYWxzZVxyXG4gICAgICogb3RoZXJ3aXNlLlxyXG4gICAgICovXHJcbiAgICBpc0N1cnJlbnRQYXRoRXF1YWxUbyhwYXRoOiBzdHJpbmcsIHF1ZXJ5Pzogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogTm9ybWFsaXplcyBhIFVSTCBwYXRoIGJ5IHN0cmlwcGluZyBhbnkgdHJhaWxpbmcgc2xhc2hlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIFN0cmluZyByZXByZXNlbnRpbmcgYSBVUkwuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIG5vcm1hbGl6ZWQgVVJMIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgbm9ybWFsaXplKHVybDogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVzIGFuIGV4dGVybmFsIFVSTCBwYXRoLlxyXG4gICAgICogSWYgdGhlIGdpdmVuIFVSTCBkb2Vzbid0IGJlZ2luIHdpdGggYSBsZWFkaW5nIHNsYXNoIChgJy8nYCksIGFkZHMgb25lXHJcbiAgICAgKiBiZWZvcmUgbm9ybWFsaXppbmcuIEFkZHMgYSBoYXNoIGlmIGBIYXNoTG9jYXRpb25TdHJhdGVneWAgaXNcclxuICAgICAqIGluIHVzZSwgb3IgdGhlIGBBUFBfQkFTRV9IUkVGYCBpZiB0aGUgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YCBpcyBpbiB1c2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBTdHJpbmcgcmVwcmVzZW50aW5nIGEgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zICBBIG5vcm1hbGl6ZWQgcGxhdGZvcm0tc3BlY2lmaWMgVVJMLlxyXG4gICAgICovXHJcbiAgICBwcmVwYXJlRXh0ZXJuYWxVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgdGhlIGJyb3dzZXIncyBVUkwgdG8gYSBub3JtYWxpemVkIHZlcnNpb24gb2YgYSBnaXZlbiBVUkwsIGFuZCBwdXNoZXMgYVxyXG4gICAgICogbmV3IGl0ZW0gb250byB0aGUgcGxhdGZvcm0ncyBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXRoICBVUkwgcGF0aCB0byBub3JtYWxpemUuXHJcbiAgICAgKiBAcGFyYW0gcXVlcnkgUXVlcnkgcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBMb2NhdGlvbiBoaXN0b3J5IHN0YXRlLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ28ocGF0aDogc3RyaW5nLCBxdWVyeT86IHN0cmluZywgc3RhdGU/OiBhbnkpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2VzIHRoZSBicm93c2VyJ3MgVVJMIHRvIGEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBVUkwsIGFuZCByZXBsYWNlc1xyXG4gICAgICogdGhlIHRvcCBpdGVtIG9uIHRoZSBwbGF0Zm9ybSdzIGhpc3Rvcnkgc3RhY2suXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhdGggIFVSTCBwYXRoIHRvIG5vcm1hbGl6ZS5cclxuICAgICAqIEBwYXJhbSBxdWVyeSBRdWVyeSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIExvY2F0aW9uIGhpc3Rvcnkgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VTdGF0ZShwYXRoOiBzdHJpbmcsIHF1ZXJ5Pzogc3RyaW5nLCBzdGF0ZT86IGFueSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE5hdmlnYXRlcyBmb3J3YXJkIGluIHRoZSBwbGF0Zm9ybSdzIGhpc3RvcnkuXHJcbiAgICAgKi9cclxuICAgIGZvcndhcmQoKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGVzIGJhY2sgaW4gdGhlIHBsYXRmb3JtJ3MgaGlzdG9yeS5cclxuICAgICAqL1xyXG4gICAgYmFjaygpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBVUkwgY2hhbmdlIGxpc3RlbmVyLiBVc2UgdG8gY2F0Y2ggdXBkYXRlcyBwZXJmb3JtZWQgYnkgdGhlIEFuZ3VsYXJcclxuICAgICAqIGZyYW1ld29yayB0aGF0IGFyZSBub3QgZGV0ZWN0aWJsZSB0aHJvdWdoIFwicG9wc3RhdGVcIiBvciBcImhhc2hjaGFuZ2VcIiBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZuIFRoZSBjaGFuZ2UgaGFuZGxlciBmdW5jdGlvbiwgd2hpY2ggdGFrZSBhIFVSTCBhbmQgYSBsb2NhdGlvbiBoaXN0b3J5IHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBvblVybENoYW5nZShmbjogKHVybDogc3RyaW5nLCBzdGF0ZTogdW5rbm93bikgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZXMgdG8gdGhlIHBsYXRmb3JtJ3MgYHBvcFN0YXRlYCBldmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEV2ZW50IHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIGhpc3RvcnkgY2hhbmdlcy5cclxuICAgICAqIEBwYXJhbSBleGNlcHRpb24gVGhlIGV4Y2VwdGlvbiB0byB0aHJvdy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBTdWJzY3JpYmVkIGV2ZW50cy5cclxuICAgICAqL1xyXG4gICAgc3Vic2NyaWJlKG9uTmV4dDogKHZhbHVlOiBQb3BTdGF0ZUV2ZW50KSA9PiB2b2lkLCBvblRocm93PzogKChleGNlcHRpb246IGFueSkgPT4gdm9pZCkgfCBudWxsLCBvblJldHVybj86ICgoKSA9PiB2b2lkKSB8IG51bGwpOiBTdWJzY3JpcHRpb25MaWtlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVzIFVSTCBwYXJhbWV0ZXJzIGJ5IHByZXBlbmRpbmcgd2l0aCBgP2AgaWYgbmVlZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgcGFyYW1zIFN0cmluZyBvZiBVUkwgcGFyYW1ldGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCBVUkwgcGFyYW1ldGVycyBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBub3JtYWxpemVRdWVyeVBhcmFtczogKHBhcmFtczogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEpvaW5zIHR3byBwYXJ0cyBvZiBhIFVSTCB3aXRoIGEgc2xhc2ggaWYgbmVlZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzdGFydCAgVVJMIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGVuZCAgICBVUkwgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBqb2luZWQgVVJMIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGpvaW5XaXRoU2xhc2g6IChzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZykgPT4gc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgdHJhaWxpbmcgc2xhc2ggZnJvbSBhIFVSTCBzdHJpbmcgaWYgbmVlZGVkLlxyXG4gICAgICogTG9va3MgZm9yIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGVpdGhlciBgI2AsIGA/YCwgb3IgdGhlIGVuZCBvZiB0aGVcclxuICAgICAqIGxpbmUgYXMgYC9gIGNoYXJhY3RlcnMgYW5kIHJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIGlmIG9uZSBleGlzdHMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBVUkwgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBVUkwgc3RyaW5nLCBtb2RpZmllZCBpZiBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpcFRyYWlsaW5nU2xhc2g6ICh1cmw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEluZGljYXRlcyB3aGVuIGEgbG9jYXRpb24gaXMgaW5pdGlhbGl6ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IExPQ0FUSU9OX0lOSVRJQUxJWkVEOiBJbmplY3Rpb25Ub2tlbjxQcm9taXNlPGFueT4+O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSBldmVudCBmcm9tIGBvblBvcFN0YXRlYCBvciBgb25IYXNoQ2hhbmdlYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgTG9jYXRpb25DaGFuZ2VFdmVudCB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBzdGF0ZTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIge1xyXG4gICAgKGV2ZW50OiBMb2NhdGlvbkNoYW5nZUV2ZW50KTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogRW5hYmxlcyB0aGUgYExvY2F0aW9uYCBzZXJ2aWNlIHRvIHJlYWQgcm91dGUgc3RhdGUgZnJvbSB0aGUgYnJvd3NlcidzIFVSTC5cclxuICogQW5ndWxhciBwcm92aWRlcyB0d28gc3RyYXRlZ2llczpcclxuICogYEhhc2hMb2NhdGlvblN0cmF0ZWd5YCBhbmQgYFBhdGhMb2NhdGlvblN0cmF0ZWd5YC5cclxuICpcclxuICogQXBwbGljYXRpb25zIHNob3VsZCB1c2UgdGhlIGBSb3V0ZXJgIG9yIGBMb2NhdGlvbmAgc2VydmljZXMgdG9cclxuICogaW50ZXJhY3Qgd2l0aCBhcHBsaWNhdGlvbiByb3V0ZSBzdGF0ZS5cclxuICpcclxuICogRm9yIGluc3RhbmNlLCBgSGFzaExvY2F0aW9uU3RyYXRlZ3lgIHByb2R1Y2VzIFVSTHMgbGlrZVxyXG4gKiA8Y29kZSBjbGFzcz1cIm5vLWF1dG8tbGlua1wiPmh0dHA6Ly9leGFtcGxlLmNvbSMvZm9vPC9jb2RlPixcclxuICogYW5kIGBQYXRoTG9jYXRpb25TdHJhdGVneWAgcHJvZHVjZXNcclxuICogPGNvZGUgY2xhc3M9XCJuby1hdXRvLWxpbmtcIj5odHRwOi8vZXhhbXBsZS5jb20vZm9vPC9jb2RlPiBhcyBhbiBlcXVpdmFsZW50IFVSTC5cclxuICpcclxuICogU2VlIHRoZXNlIHR3byBjbGFzc2VzIGZvciBtb3JlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBMb2NhdGlvblN0cmF0ZWd5IHtcclxuICAgIGFic3RyYWN0IHBhdGgoaW5jbHVkZUhhc2g/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgcHJlcGFyZUV4dGVybmFsVXJsKGludGVybmFsOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGZvcndhcmQoKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGJhY2soKTogdm9pZDtcclxuICAgIGFic3RyYWN0IG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyB0ZXh0IHRvIGFsbCBsb3dlciBjYXNlLlxyXG4gKlxyXG4gKiBAc2VlIGBVcHBlckNhc2VQaXBlYFxyXG4gKiBAc2VlIGBUaXRsZUNhc2VQaXBlYFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZGVmaW5lcyBhIHZpZXcgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXJcclxuICogdGV4dCwgYW5kIHRoZW4gdXNlcyB0aGUgcGlwZSB0byBjb252ZXJ0IHRoZSBpbnB1dCB0ZXh0IHRvIGFsbCBsb3dlciBjYXNlLlxyXG4gKlxyXG4gKiA8Y29kZS1leGFtcGxlIHBhdGg9XCJjb21tb24vcGlwZXMvdHMvbG93ZXJ1cHBlcl9waXBlLnRzXCIgcmVnaW9uPSdMb3dlclVwcGVyUGlwZSc+PC9jb2RlLWV4YW1wbGU+XHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG93ZXJDYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB0byB0cmFuc2Zvcm0gdG8gbG93ZXIgY2FzZS5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIGBgYFxyXG4gKiAgICAgPHNvbWUtZWxlbWVudCBbbmdDbGFzc109XCInZmlyc3Qgc2Vjb25kJ1wiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKlxyXG4gKiAgICAgPHNvbWUtZWxlbWVudCBbbmdDbGFzc109XCJbJ2ZpcnN0JywgJ3NlY29uZCddXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqXHJcbiAqICAgICA8c29tZS1lbGVtZW50IFtuZ0NsYXNzXT1cInsnZmlyc3QnOiB0cnVlLCAnc2Vjb25kJzogdHJ1ZSwgJ3RoaXJkJzogZmFsc2V9XCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqXHJcbiAqICAgICA8c29tZS1lbGVtZW50IFtuZ0NsYXNzXT1cInN0cmluZ0V4cHxhcnJheUV4cHxvYmpFeHBcIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICpcclxuICogICAgIDxzb21lLWVsZW1lbnQgW25nQ2xhc3NdPVwieydjbGFzczEgY2xhc3MyIGNsYXNzMycgOiB0cnVlfVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEFkZHMgYW5kIHJlbW92ZXMgQ1NTIGNsYXNzZXMgb24gYW4gSFRNTCBlbGVtZW50LlxyXG4gKlxyXG4gKiBUaGUgQ1NTIGNsYXNzZXMgYXJlIHVwZGF0ZWQgYXMgZm9sbG93cywgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHRoZSBleHByZXNzaW9uIGV2YWx1YXRpb246XHJcbiAqIC0gYHN0cmluZ2AgLSB0aGUgQ1NTIGNsYXNzZXMgbGlzdGVkIGluIHRoZSBzdHJpbmcgKHNwYWNlIGRlbGltaXRlZCkgYXJlIGFkZGVkLFxyXG4gKiAtIGBBcnJheWAgLSB0aGUgQ1NTIGNsYXNzZXMgZGVjbGFyZWQgYXMgQXJyYXkgZWxlbWVudHMgYXJlIGFkZGVkLFxyXG4gKiAtIGBPYmplY3RgIC0ga2V5cyBhcmUgQ1NTIGNsYXNzZXMgdGhhdCBnZXQgYWRkZWQgd2hlbiB0aGUgZXhwcmVzc2lvbiBnaXZlbiBpbiB0aGUgdmFsdWVcclxuICogICAgICAgICAgICAgIGV2YWx1YXRlcyB0byBhIHRydXRoeSB2YWx1ZSwgb3RoZXJ3aXNlIHRoZXkgYXJlIHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nQ2xhc3MgaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuICAgIHByaXZhdGUgX2l0ZXJhYmxlRGlmZmVycztcclxuICAgIHByaXZhdGUgX2tleVZhbHVlRGlmZmVycztcclxuICAgIHByaXZhdGUgX25nRWw7XHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcclxuICAgIHByaXZhdGUgX2l0ZXJhYmxlRGlmZmVyO1xyXG4gICAgcHJpdmF0ZSBfa2V5VmFsdWVEaWZmZXI7XHJcbiAgICBwcml2YXRlIF9pbml0aWFsQ2xhc3NlcztcclxuICAgIHByaXZhdGUgX3Jhd0NsYXNzO1xyXG4gICAgY29uc3RydWN0b3IoX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIF9uZ0VsOiBFbGVtZW50UmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMik7XHJcbiAgICBzZXQga2xhc3ModmFsdWU6IHN0cmluZyk7XHJcbiAgICBzZXQgbmdDbGFzcyh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHtcclxuICAgICAgICBba2xhc3M6IHN0cmluZ106IGFueTtcclxuICAgIH0pO1xyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9hcHBseUtleVZhbHVlQ2hhbmdlcztcclxuICAgIHByaXZhdGUgX2FwcGx5SXRlcmFibGVDaGFuZ2VzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIGEgY29sbGVjdGlvbiBvZiBDU1MgY2xhc3NlcyB0byB0aGUgRE9NIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogRm9yIGFyZ3VtZW50IG9mIHR5cGUgU2V0IGFuZCBBcnJheSBDU1MgY2xhc3MgbmFtZXMgY29udGFpbmVkIGluIHRob3NlIGNvbGxlY3Rpb25zIGFyZSBhbHdheXNcclxuICAgICAqIGFkZGVkLlxyXG4gICAgICogRm9yIGFyZ3VtZW50IG9mIHR5cGUgTWFwIENTUyBjbGFzcyBuYW1lIGluIHRoZSBtYXAncyBrZXkgaXMgdG9nZ2xlZCBiYXNlZCBvbiB0aGUgdmFsdWUgKGFkZGVkXHJcbiAgICAgKiBmb3IgdHJ1dGh5IGFuZCByZW1vdmVkIGZvciBmYWxzeSkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2FwcGx5Q2xhc3NlcztcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIGNvbGxlY3Rpb24gb2YgQ1NTIGNsYXNzZXMgZnJvbSB0aGUgRE9NIGVsZW1lbnQuIFRoaXMgaXMgbW9zdGx5IHVzZWZ1bCBmb3IgY2xlYW51cFxyXG4gICAgICogcHVycG9zZXMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlbW92ZUNsYXNzZXM7XHJcbiAgICBwcml2YXRlIF90b2dnbGVDbGFzcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEluc3RhbnRpYXRlcyBhIHNpbmdsZSB7QGxpbmsgQ29tcG9uZW50fSB0eXBlIGFuZCBpbnNlcnRzIGl0cyBIb3N0IFZpZXcgaW50byBjdXJyZW50IFZpZXcuXHJcbiAqIGBOZ0NvbXBvbmVudE91dGxldGAgcHJvdmlkZXMgYSBkZWNsYXJhdGl2ZSBhcHByb2FjaCBmb3IgZHluYW1pYyBjb21wb25lbnQgY3JlYXRpb24uXHJcbiAqXHJcbiAqIGBOZ0NvbXBvbmVudE91dGxldGAgcmVxdWlyZXMgYSBjb21wb25lbnQgdHlwZSwgaWYgYSBmYWxzeSB2YWx1ZSBpcyBzZXQgdGhlIHZpZXcgd2lsbCBjbGVhciBhbmRcclxuICogYW55IGV4aXN0aW5nIGNvbXBvbmVudCB3aWxsIGdldCBkZXN0cm95ZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBGaW5lIHR1bmUgY29udHJvbFxyXG4gKlxyXG4gKiBZb3UgY2FuIGNvbnRyb2wgdGhlIGNvbXBvbmVudCBjcmVhdGlvbiBwcm9jZXNzIGJ5IHVzaW5nIHRoZSBmb2xsb3dpbmcgb3B0aW9uYWwgYXR0cmlidXRlczpcclxuICpcclxuICogKiBgbmdDb21wb25lbnRPdXRsZXRJbmplY3RvcmA6IE9wdGlvbmFsIGN1c3RvbSB7QGxpbmsgSW5qZWN0b3J9IHRoYXQgd2lsbCBiZSB1c2VkIGFzIHBhcmVudCBmb3JcclxuICogdGhlIENvbXBvbmVudC4gRGVmYXVsdHMgdG8gdGhlIGluamVjdG9yIG9mIHRoZSBjdXJyZW50IHZpZXcgY29udGFpbmVyLlxyXG4gKlxyXG4gKiAqIGBuZ0NvbXBvbmVudE91dGxldENvbnRlbnRgOiBPcHRpb25hbCBsaXN0IG9mIHByb2plY3RhYmxlIG5vZGVzIHRvIGluc2VydCBpbnRvIHRoZSBjb250ZW50XHJcbiAqIHNlY3Rpb24gb2YgdGhlIGNvbXBvbmVudCwgaWYgZXhpc3RzLlxyXG4gKlxyXG4gKiAqIGBuZ0NvbXBvbmVudE91dGxldE5nTW9kdWxlRmFjdG9yeWA6IE9wdGlvbmFsIG1vZHVsZSBmYWN0b3J5IHRvIGFsbG93IGR5bmFtaWNhbGx5IGxvYWRpbmcgb3RoZXJcclxuICogbW9kdWxlLCB0aGVuIGxvYWQgYSBjb21wb25lbnQgZnJvbSB0aGF0IG1vZHVsZS5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBTaW1wbGVcclxuICogYGBgXHJcbiAqIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50VHlwZUV4cHJlc3Npb25cIj48L25nLWNvbnRhaW5lcj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEN1c3RvbWl6ZWQgaW5qZWN0b3IvY29udGVudFxyXG4gKiBgYGBcclxuICogPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRUeXBlRXhwcmVzc2lvbjtcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdG9yOiBpbmplY3RvckV4cHJlc3Npb247XHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50Tm9kZXNFeHByZXNzaW9uO1wiPlxyXG4gKiA8L25nLWNvbnRhaW5lcj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEN1c3RvbWl6ZWQgbmdNb2R1bGVGYWN0b3J5XHJcbiAqIGBgYFxyXG4gKiA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudFR5cGVFeHByZXNzaW9uO1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdNb2R1bGVGYWN0b3J5OiBtb2R1bGVGYWN0b3J5O1wiPlxyXG4gKiA8L25nLWNvbnRhaW5lcj5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBBIHNpbXBsZSBleGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdDb21wb25lbnRPdXRsZXQvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nU2ltcGxlRXhhbXBsZSd9XHJcbiAqXHJcbiAqIEEgbW9yZSBjb21wbGV0ZSBleGFtcGxlIHdpdGggYWRkaXRpb25hbCBvcHRpb25zOlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nQ29tcG9uZW50T3V0bGV0L3RzL21vZHVsZS50cyByZWdpb249J0NvbXBsZXRlRXhhbXBsZSd9XHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdDb21wb25lbnRPdXRsZXQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgbmdDb21wb25lbnRPdXRsZXQ6IFR5cGU8YW55PjtcclxuICAgIG5nQ29tcG9uZW50T3V0bGV0SW5qZWN0b3I6IEluamVjdG9yO1xyXG4gICAgbmdDb21wb25lbnRPdXRsZXRDb250ZW50OiBhbnlbXVtdO1xyXG4gICAgbmdDb21wb25lbnRPdXRsZXROZ01vZHVsZUZhY3Rvcnk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlUmVmO1xyXG4gICAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBbc3RydWN0dXJhbCBkaXJlY3RpdmVdKGd1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcykgdGhhdCByZW5kZXJzXHJcbiAqIGEgdGVtcGxhdGUgZm9yIGVhY2ggaXRlbSBpbiBhIGNvbGxlY3Rpb24uXHJcbiAqIFRoZSBkaXJlY3RpdmUgaXMgcGxhY2VkIG9uIGFuIGVsZW1lbnQsIHdoaWNoIGJlY29tZXMgdGhlIHBhcmVudFxyXG4gKiBvZiB0aGUgY2xvbmVkIHRlbXBsYXRlcy5cclxuICpcclxuICogVGhlIGBuZ0Zvck9mYCBkaXJlY3RpdmUgaXMgZ2VuZXJhbGx5IHVzZWQgaW4gdGhlXHJcbiAqIFtzaG9ydGhhbmQgZm9ybV0oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI3RoZS1hc3Rlcmlzay0tcHJlZml4KSBgKm5nRm9yYC5cclxuICogSW4gdGhpcyBmb3JtLCB0aGUgdGVtcGxhdGUgdG8gYmUgcmVuZGVyZWQgZm9yIGVhY2ggaXRlcmF0aW9uIGlzIHRoZSBjb250ZW50XHJcbiAqIG9mIGFuIGFuY2hvciBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGRpcmVjdGl2ZS5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIHRoZSBzaG9ydGhhbmQgc3ludGF4IHdpdGggc29tZSBvcHRpb25zLFxyXG4gKiBjb250YWluZWQgaW4gYW4gYDxsaT5gIGVsZW1lbnQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGluZGV4IGFzIGk7IHRyYWNrQnk6IHRyYWNrQnlGblwiPi4uLjwvbGk+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgc2hvcnRoYW5kIGZvcm0gZXhwYW5kcyBpbnRvIGEgbG9uZyBmb3JtIHRoYXQgdXNlcyB0aGUgYG5nRm9yT2ZgIHNlbGVjdG9yXHJcbiAqIG9uIGFuIGA8bmctdGVtcGxhdGU+YCBlbGVtZW50LlxyXG4gKiBUaGUgY29udGVudCBvZiB0aGUgYDxuZy10ZW1wbGF0ZT5gIGVsZW1lbnQgaXMgdGhlIGA8bGk+YCBlbGVtZW50IHRoYXQgaGVsZCB0aGVcclxuICogc2hvcnQtZm9ybSBkaXJlY3RpdmUuXHJcbiAqXHJcbiAqIEhlcmUgaXMgdGhlIGV4cGFuZGVkIHZlcnNpb24gb2YgdGhlIHNob3J0LWZvcm0gZXhhbXBsZS5cclxuICpcclxuICogYGBgXHJcbiAqIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJpdGVtc1wiIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlGblwiPlxyXG4gKiAgIDxsaT4uLi48L2xpPlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogQW5ndWxhciBhdXRvbWF0aWNhbGx5IGV4cGFuZHMgdGhlIHNob3J0aGFuZCBzeW50YXggYXMgaXQgY29tcGlsZXMgdGhlIHRlbXBsYXRlLlxyXG4gKiBUaGUgY29udGV4dCBmb3IgZWFjaCBlbWJlZGRlZCB2aWV3IGlzIGxvZ2ljYWxseSBtZXJnZWQgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50XHJcbiAqIGNvbnRleHQgYWNjb3JkaW5nIHRvIGl0cyBsZXhpY2FsIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBXaGVuIHVzaW5nIHRoZSBzaG9ydGhhbmQgc3ludGF4LCBBbmd1bGFyIGFsbG93cyBvbmx5IFtvbmUgc3RydWN0dXJhbCBkaXJlY3RpdmVcclxuICogb24gYW4gZWxlbWVudF0oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI29uZS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZS1wZXItaG9zdC1lbGVtZW50KS5cclxuICogSWYgeW91IHdhbnQgdG8gaXRlcmF0ZSBjb25kaXRpb25hbGx5LCBmb3IgZXhhbXBsZSxcclxuICogcHV0IHRoZSBgKm5nSWZgIG9uIGEgY29udGFpbmVyIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgYCpuZ0ZvcmAgZWxlbWVudC5cclxuICogRm9yIGZ1dGhlciBkaXNjdXNzaW9uLCBzZWVcclxuICogW1N0cnVjdHVyYWwgRGlyZWN0aXZlc10oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzI29uZS1wZXItZWxlbWVudCkuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBMb2NhbCB2YXJpYWJsZXNcclxuICpcclxuICogYE5nRm9yT2ZgIHByb3ZpZGVzIGV4cG9ydGVkIHZhbHVlcyB0aGF0IGNhbiBiZSBhbGlhc2VkIHRvIGxvY2FsIHZhcmlhYmxlcy5cclxuICogRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqICBgYGBcclxuICogPGxpICpuZ0Zvcj1cImxldCB1c2VyIG9mIHVzZXJzOyBpbmRleCBhcyBpOyBmaXJzdCBhcyBpc0ZpcnN0XCI+XHJcbiAqICAgIHt7aX19L3t7dXNlcnMubGVuZ3RofX0uIHt7dXNlcn19IDxzcGFuICpuZ0lmPVwiaXNGaXJzdFwiPmRlZmF1bHQ8L3NwYW4+XHJcbiAqIDwvbGk+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4cG9ydGVkIHZhbHVlcyBjYW4gYmUgYWxpYXNlZCB0byBsb2NhbCB2YXJpYWJsZXM6XHJcbiAqXHJcbiAqIC0gYCRpbXBsaWNpdDogVGA6IFRoZSB2YWx1ZSBvZiB0aGUgaW5kaXZpZHVhbCBpdGVtcyBpbiB0aGUgaXRlcmFibGUgKGBuZ0Zvck9mYCkuXHJcbiAqIC0gYG5nRm9yT2Y6IE5nSXRlcmFibGU8VD5gOiBUaGUgdmFsdWUgb2YgdGhlIGl0ZXJhYmxlIGV4cHJlc3Npb24uIFVzZWZ1bCB3aGVuIHRoZSBleHByZXNzaW9uIGlzXHJcbiAqIG1vcmUgY29tcGxleCB0aGVuIGEgcHJvcGVydHkgYWNjZXNzLCBmb3IgZXhhbXBsZSB3aGVuIHVzaW5nIHRoZSBhc3luYyBwaXBlIChgdXNlclN0cmVhbXMgfFxyXG4gKiBhc3luY2ApLlxyXG4gKiAtIGBpbmRleDogbnVtYmVyYDogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gaW4gdGhlIGl0ZXJhYmxlLlxyXG4gKiAtIGBmaXJzdDogYm9vbGVhbmA6IFRydWUgd2hlbiB0aGUgaXRlbSBpcyB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgaXRlcmFibGUuXHJcbiAqIC0gYGxhc3Q6IGJvb2xlYW5gOiBUcnVlIHdoZW4gdGhlIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgaXRlcmFibGUuXHJcbiAqIC0gYGV2ZW46IGJvb2xlYW5gOiBUcnVlIHdoZW4gdGhlIGl0ZW0gaGFzIGFuIGV2ZW4gaW5kZXggaW4gdGhlIGl0ZXJhYmxlLlxyXG4gKiAtIGBvZGQ6IGJvb2xlYW5gOiBUcnVlIHdoZW4gdGhlIGl0ZW0gaGFzIGFuIG9kZCBpbmRleCBpbiB0aGUgaXRlcmFibGUuXHJcbiAqXHJcbiAqICMjIyBDaGFuZ2UgcHJvcGFnYXRpb25cclxuICpcclxuICogV2hlbiB0aGUgY29udGVudHMgb2YgdGhlIGl0ZXJhdG9yIGNoYW5nZXMsIGBOZ0Zvck9mYCBtYWtlcyB0aGUgY29ycmVzcG9uZGluZyBjaGFuZ2VzIHRvIHRoZSBET006XHJcbiAqXHJcbiAqICogV2hlbiBhbiBpdGVtIGlzIGFkZGVkLCBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgdGVtcGxhdGUgaXMgYWRkZWQgdG8gdGhlIERPTS5cclxuICogKiBXaGVuIGFuIGl0ZW0gaXMgcmVtb3ZlZCwgaXRzIHRlbXBsYXRlIGluc3RhbmNlIGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NLlxyXG4gKiAqIFdoZW4gaXRlbXMgYXJlIHJlb3JkZXJlZCwgdGhlaXIgcmVzcGVjdGl2ZSB0ZW1wbGF0ZXMgYXJlIHJlb3JkZXJlZCBpbiB0aGUgRE9NLlxyXG4gKlxyXG4gKiBBbmd1bGFyIHVzZXMgb2JqZWN0IGlkZW50aXR5IHRvIHRyYWNrIGluc2VydGlvbnMgYW5kIGRlbGV0aW9ucyB3aXRoaW4gdGhlIGl0ZXJhdG9yIGFuZCByZXByb2R1Y2VcclxuICogdGhvc2UgY2hhbmdlcyBpbiB0aGUgRE9NLiBUaGlzIGhhcyBpbXBvcnRhbnQgaW1wbGljYXRpb25zIGZvciBhbmltYXRpb25zIGFuZCBhbnkgc3RhdGVmdWxcclxuICogY29udHJvbHMgdGhhdCBhcmUgcHJlc2VudCwgc3VjaCBhcyBgPGlucHV0PmAgZWxlbWVudHMgdGhhdCBhY2NlcHQgdXNlciBpbnB1dC4gSW5zZXJ0ZWQgcm93cyBjYW5cclxuICogYmUgYW5pbWF0ZWQgaW4sIGRlbGV0ZWQgcm93cyBjYW4gYmUgYW5pbWF0ZWQgb3V0LCBhbmQgdW5jaGFuZ2VkIHJvd3MgcmV0YWluIGFueSB1bnNhdmVkIHN0YXRlXHJcbiAqIHN1Y2ggYXMgdXNlciBpbnB1dC5cclxuICogRm9yIG1vcmUgb24gYW5pbWF0aW9ucywgc2VlIFtUcmFuc2l0aW9ucyBhbmQgVHJpZ2dlcnNdKGd1aWRlL3RyYW5zaXRpb24tYW5kLXRyaWdnZXJzKS5cclxuICpcclxuICogVGhlIGlkZW50aXRpZXMgb2YgZWxlbWVudHMgaW4gdGhlIGl0ZXJhdG9yIGNhbiBjaGFuZ2Ugd2hpbGUgdGhlIGRhdGEgZG9lcyBub3QuXHJcbiAqIFRoaXMgY2FuIGhhcHBlbiwgZm9yIGV4YW1wbGUsIGlmIHRoZSBpdGVyYXRvciBpcyBwcm9kdWNlZCBmcm9tIGFuIFJQQyB0byB0aGUgc2VydmVyLCBhbmQgdGhhdFxyXG4gKiBSUEMgaXMgcmUtcnVuLiBFdmVuIGlmIHRoZSBkYXRhIGhhc24ndCBjaGFuZ2VkLCB0aGUgc2Vjb25kIHJlc3BvbnNlIHByb2R1Y2VzIG9iamVjdHMgd2l0aFxyXG4gKiBkaWZmZXJlbnQgaWRlbnRpdGllcywgYW5kIEFuZ3VsYXIgbXVzdCB0ZWFyIGRvd24gdGhlIGVudGlyZSBET00gYW5kIHJlYnVpbGQgaXQgKGFzIGlmIGFsbCBvbGRcclxuICogZWxlbWVudHMgd2VyZSBkZWxldGVkIGFuZCBhbGwgbmV3IGVsZW1lbnRzIGluc2VydGVkKS5cclxuICpcclxuICogVG8gYXZvaWQgdGhpcyBleHBlbnNpdmUgb3BlcmF0aW9uLCB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgZGVmYXVsdCB0cmFja2luZyBhbGdvcml0aG0uXHJcbiAqIGJ5IHN1cHBseWluZyB0aGUgYHRyYWNrQnlgIG9wdGlvbiB0byBgTmdGb3JPZmAuXHJcbiAqIGB0cmFja0J5YCB0YWtlcyBhIGZ1bmN0aW9uIHRoYXQgaGFzIHR3byBhcmd1bWVudHM6IGBpbmRleGAgYW5kIGBpdGVtYC5cclxuICogSWYgYHRyYWNrQnlgIGlzIGdpdmVuLCBBbmd1bGFyIHRyYWNrcyBjaGFuZ2VzIGJ5IHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAc2VlIFtTdHJ1Y3R1cmFsIERpcmVjdGl2ZXNdKGd1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcylcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ0Zvck9mPFQsIFUgZXh0ZW5kcyBOZ0l0ZXJhYmxlPFQ+ID0gTmdJdGVyYWJsZTxUPj4gaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI7XHJcbiAgICBwcml2YXRlIF90ZW1wbGF0ZTtcclxuICAgIHByaXZhdGUgX2RpZmZlcnM7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgaXRlcmFibGUgZXhwcmVzc2lvbiwgd2hpY2ggY2FuIGJlIHVzZWQgYXMgYVxyXG4gICAgICogW3RlbXBsYXRlIGlucHV0IHZhcmlhYmxlXShndWlkZS9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMjdGVtcGxhdGUtaW5wdXQtdmFyaWFibGUpLlxyXG4gICAgICovXHJcbiAgICBzZXQgbmdGb3JPZihuZ0Zvck9mOiAoVSAmIE5nSXRlcmFibGU8VD4pIHwgdW5kZWZpbmVkIHwgbnVsbCk7XHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyB0byB0cmFjayBjaGFuZ2VzIGZvciBpdGVtcyBpbiB0aGUgaXRlcmFibGUuXHJcbiAgICAgKlxyXG4gICAgICogV2hlbiBpdGVtcyBhcmUgYWRkZWQsIG1vdmVkLCBvciByZW1vdmVkIGluIHRoZSBpdGVyYWJsZSxcclxuICAgICAqIHRoZSBkaXJlY3RpdmUgbXVzdCByZS1yZW5kZXIgdGhlIGFwcHJvcHJpYXRlIERPTSBub2Rlcy5cclxuICAgICAqIFRvIG1pbmltaXplIGNodXJuIGluIHRoZSBET00sIG9ubHkgbm9kZXMgdGhhdCBoYXZlIGNoYW5nZWRcclxuICAgICAqIGFyZSByZS1yZW5kZXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgY2hhbmdlIGRldGVjdG9yIGFzc3VtZXMgdGhhdFxyXG4gICAgICogdGhlIG9iamVjdCBpbnN0YW5jZSBpZGVudGlmaWVzIHRoZSBub2RlIGluIHRoZSBpdGVyYWJsZS5cclxuICAgICAqIFdoZW4gdGhpcyBmdW5jdGlvbiBpcyBzdXBwbGllZCwgdGhlIGRpcmVjdGl2ZSB1c2VzXHJcbiAgICAgKiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiB0byBpZGVudGlmeSB0aGUgaXRlbSBub2RlLFxyXG4gICAgICogcmF0aGVyIHRoYW4gdGhlIGlkZW50aXR5IG9mIHRoZSBvYmplY3QgaXRzZWxmLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0d28gaW5wdXRzLFxyXG4gICAgICogdGhlIGl0ZXJhdGlvbiBpbmRleCBhbmQgdGhlIG5vZGUgb2JqZWN0IElELlxyXG4gICAgICovXHJcbiAgICBzZXQgbmdGb3JUcmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pO1xyXG4gICAgZ2V0IG5nRm9yVHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD47XHJcbiAgICBwcml2YXRlIF9uZ0Zvck9mO1xyXG4gICAgcHJpdmF0ZSBfbmdGb3JPZkRpcnR5O1xyXG4gICAgcHJpdmF0ZSBfZGlmZmVyO1xyXG4gICAgcHJpdmF0ZSBfdHJhY2tCeUZuO1xyXG4gICAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8VCwgVT4+LCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKTtcclxuICAgIC8qKlxyXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHRlbXBsYXRlIHRoYXQgaXMgc3RhbXBlZCBvdXQgZm9yIGVhY2ggaXRlbSBpbiB0aGUgaXRlcmFibGUuXHJcbiAgICAgKiBAc2VlIFt0ZW1wbGF0ZSByZWZlcmVuY2UgdmFyaWFibGVdKGd1aWRlL3RlbXBsYXRlLXN5bnRheCN0ZW1wbGF0ZS1yZWZlcmVuY2UtdmFyaWFibGVzLS12YXItKVxyXG4gICAgICovXHJcbiAgICBzZXQgbmdGb3JUZW1wbGF0ZSh2YWx1ZTogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8VCwgVT4+KTtcclxuICAgIC8qKlxyXG4gICAgICogQXBwbGllcyB0aGUgY2hhbmdlcyB3aGVuIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9hcHBseUNoYW5nZXM7XHJcbiAgICBwcml2YXRlIF9wZXJWaWV3Q2hhbmdlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBc3NlcnRzIHRoZSBjb3JyZWN0IHR5cGUgb2YgdGhlIGNvbnRleHQgZm9yIHRoZSB0ZW1wbGF0ZSB0aGF0IGBOZ0Zvck9mYCB3aWxsIHJlbmRlci5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBtZXRob2QgaXMgYSBzaWduYWwgdG8gdGhlIEl2eSB0ZW1wbGF0ZSB0eXBlLWNoZWNrIGNvbXBpbGVyIHRoYXQgdGhlXHJcbiAgICAgKiBgTmdGb3JPZmAgc3RydWN0dXJhbCBkaXJlY3RpdmUgcmVuZGVycyBpdHMgdGVtcGxhdGUgd2l0aCBhIHNwZWNpZmljIGNvbnRleHQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VCwgVSBleHRlbmRzIE5nSXRlcmFibGU8VD4+KGRpcjogTmdGb3JPZjxULCBVPiwgY3R4OiBhbnkpOiBjdHggaXMgTmdGb3JPZkNvbnRleHQ8VCwgVT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ0Zvck9mQ29udGV4dDxULCBVIGV4dGVuZHMgTmdJdGVyYWJsZTxUPiA9IE5nSXRlcmFibGU8VD4+IHtcclxuICAgICRpbXBsaWNpdDogVDtcclxuICAgIG5nRm9yT2Y6IFU7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKCRpbXBsaWNpdDogVCwgbmdGb3JPZjogVSwgaW5kZXg6IG51bWJlciwgY291bnQ6IG51bWJlcik7XHJcbiAgICBnZXQgZmlyc3QoKTogYm9vbGVhbjtcclxuICAgIGdldCBsYXN0KCk6IGJvb2xlYW47XHJcbiAgICBnZXQgZXZlbigpOiBib29sZWFuO1xyXG4gICAgZ2V0IG9kZCgpOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSB0aGF0IGNvbmRpdGlvbmFsbHkgaW5jbHVkZXMgYSB0ZW1wbGF0ZSBiYXNlZCBvbiB0aGUgdmFsdWUgb2ZcclxuICogYW4gZXhwcmVzc2lvbiBjb2VyY2VkIHRvIEJvb2xlYW4uXHJcbiAqIFdoZW4gdGhlIGV4cHJlc3Npb24gZXZhbHVhdGVzIHRvIHRydWUsIEFuZ3VsYXIgcmVuZGVycyB0aGUgdGVtcGxhdGVcclxuICogcHJvdmlkZWQgaW4gYSBgdGhlbmAgY2xhdXNlLCBhbmQgd2hlbiAgZmFsc2Ugb3IgbnVsbCxcclxuICogQW5ndWxhciByZW5kZXJzIHRoZSB0ZW1wbGF0ZSBwcm92aWRlZCBpbiBhbiBvcHRpb25hbCBgZWxzZWAgY2xhdXNlLiBUaGUgZGVmYXVsdFxyXG4gKiB0ZW1wbGF0ZSBmb3IgdGhlIGBlbHNlYCBjbGF1c2UgaXMgYmxhbmsuXHJcbiAqXHJcbiAqIEEgW3Nob3J0aGFuZCBmb3JtXShndWlkZS9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMjdGhlLWFzdGVyaXNrLS1wcmVmaXgpIG9mIHRoZSBkaXJlY3RpdmUsXHJcbiAqIGAqbmdJZj1cImNvbmRpdGlvblwiYCwgaXMgZ2VuZXJhbGx5IHVzZWQsIHByb3ZpZGVkXHJcbiAqIGFzIGFuIGF0dHJpYnV0ZSBvZiB0aGUgYW5jaG9yIGVsZW1lbnQgZm9yIHRoZSBpbnNlcnRlZCB0ZW1wbGF0ZS5cclxuICogQW5ndWxhciBleHBhbmRzIHRoaXMgaW50byBhIG1vcmUgZXhwbGljaXQgdmVyc2lvbiwgaW4gd2hpY2ggdGhlIGFuY2hvciBlbGVtZW50XHJcbiAqIGlzIGNvbnRhaW5lZCBpbiBhbiBgPG5nLXRlbXBsYXRlPmAgZWxlbWVudC5cclxuICpcclxuICogU2ltcGxlIGZvcm0gd2l0aCBzaG9ydGhhbmQgc3ludGF4OlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGRpdiAqbmdJZj1cImNvbmRpdGlvblwiPkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gY29uZGl0aW9uIGlzIHRydWUuPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBTaW1wbGUgZm9ybSB3aXRoIGV4cGFuZGVkIHN5bnRheDpcclxuICpcclxuICogYGBgXHJcbiAqIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJjb25kaXRpb25cIj48ZGl2PkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gY29uZGl0aW9uIGlzXHJcbiAqIHRydWUuPC9kaXY+PC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqXHJcbiAqIEZvcm0gd2l0aCBhbiBcImVsc2VcIiBibG9jazpcclxuICpcclxuICogYGBgXHJcbiAqIDxkaXYgKm5nSWY9XCJjb25kaXRpb247IGVsc2UgZWxzZUJsb2NrXCI+Q29udGVudCB0byByZW5kZXIgd2hlbiBjb25kaXRpb24gaXMgdHJ1ZS48L2Rpdj5cclxuICogPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+Q29udGVudCB0byByZW5kZXIgd2hlbiBjb25kaXRpb24gaXMgZmFsc2UuPC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFNob3J0aGFuZCBmb3JtIHdpdGggXCJ0aGVuXCIgYW5kIFwiZWxzZVwiIGJsb2NrczpcclxuICpcclxuICogYGBgXHJcbiAqIDxkaXYgKm5nSWY9XCJjb25kaXRpb247IHRoZW4gdGhlbkJsb2NrIGVsc2UgZWxzZUJsb2NrXCI+PC9kaXY+XHJcbiAqIDxuZy10ZW1wbGF0ZSAjdGhlbkJsb2NrPkNvbnRlbnQgdG8gcmVuZGVyIHdoZW4gY29uZGl0aW9uIGlzIHRydWUuPC9uZy10ZW1wbGF0ZT5cclxuICogPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+Q29udGVudCB0byByZW5kZXIgd2hlbiBjb25kaXRpb24gaXMgZmFsc2UuPC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqXHJcbiAqIEZvcm0gd2l0aCBzdG9yaW5nIHRoZSB2YWx1ZSBsb2NhbGx5OlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGRpdiAqbmdJZj1cImNvbmRpdGlvbiBhcyB2YWx1ZTsgZWxzZSBlbHNlQmxvY2tcIj57e3ZhbHVlfX08L2Rpdj5cclxuICogPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+Q29udGVudCB0byByZW5kZXIgd2hlbiB2YWx1ZSBpcyBudWxsLjwvbmctdGVtcGxhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgYCpuZ0lmYCBkaXJlY3RpdmUgaXMgbW9zdCBjb21tb25seSB1c2VkIHRvIGNvbmRpdGlvbmFsbHkgc2hvdyBhbiBpbmxpbmUgdGVtcGxhdGUsXHJcbiAqIGFzIHNlZW4gaW4gdGhlIGZvbGxvd2luZyAgZXhhbXBsZS5cclxuICogVGhlIGRlZmF1bHQgYGVsc2VgIHRlbXBsYXRlIGlzIGJsYW5rLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nSWYvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nTmdJZlNpbXBsZSd9XHJcbiAqXHJcbiAqICMjIyBTaG93aW5nIGFuIGFsdGVybmF0aXZlIHRlbXBsYXRlIHVzaW5nIGBlbHNlYFxyXG4gKlxyXG4gKiBUbyBkaXNwbGF5IGEgdGVtcGxhdGUgd2hlbiBgZXhwcmVzc2lvbmAgZXZhbHVhdGVzIHRvIGZhbHNlLCB1c2UgYW4gYGVsc2VgIHRlbXBsYXRlXHJcbiAqIGJpbmRpbmcgYXMgc2hvd24gaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLlxyXG4gKiBUaGUgYGVsc2VgIGJpbmRpbmcgcG9pbnRzIHRvIGFuIGA8bmctdGVtcGxhdGU+YCAgZWxlbWVudCBsYWJlbGVkIGAjZWxzZUJsb2NrYC5cclxuICogVGhlIHRlbXBsYXRlIGNhbiBiZSBkZWZpbmVkIGFueXdoZXJlIGluIHRoZSBjb21wb25lbnQgdmlldywgYnV0IGlzIHR5cGljYWxseSBwbGFjZWQgcmlnaHQgYWZ0ZXJcclxuICogYG5nSWZgIGZvciByZWFkYWJpbGl0eS5cclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9uZ0lmL3RzL21vZHVsZS50cyByZWdpb249J05nSWZFbHNlJ31cclxuICpcclxuICogIyMjIFVzaW5nIGFuIGV4dGVybmFsIGB0aGVuYCB0ZW1wbGF0ZVxyXG4gKlxyXG4gKiBJbiB0aGUgcHJldmlvdXMgZXhhbXBsZSwgdGhlIHRoZW4tY2xhdXNlIHRlbXBsYXRlIGlzIHNwZWNpZmllZCBpbmxpbmUsIGFzIHRoZSBjb250ZW50IG9mIHRoZVxyXG4gKiB0YWcgdGhhdCBjb250YWlucyB0aGUgYG5nSWZgIGRpcmVjdGl2ZS4gWW91IGNhbiBhbHNvIHNwZWNpZnkgYSB0ZW1wbGF0ZSB0aGF0IGlzIGRlZmluZWRcclxuICogZXh0ZXJuYWxseSwgYnkgcmVmZXJlbmNpbmcgYSBsYWJlbGVkIGA8bmctdGVtcGxhdGU+YCBlbGVtZW50LiBXaGVuIHlvdSBkbyB0aGlzLCB5b3UgY2FuXHJcbiAqIGNoYW5nZSB3aGljaCB0ZW1wbGF0ZSB0byB1c2UgYXQgcnVudGltZSwgYXMgc2hvd24gaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nSWYvdHMvbW9kdWxlLnRzIHJlZ2lvbj0nTmdJZlRoZW5FbHNlJ31cclxuICpcclxuICogIyMjIFN0b3JpbmcgYSBjb25kaXRpb25hbCByZXN1bHQgaW4gYSB2YXJpYWJsZVxyXG4gKlxyXG4gKiBZb3UgbWlnaHQgd2FudCB0byBzaG93IGEgc2V0IG9mIHByb3BlcnRpZXMgZnJvbSB0aGUgc2FtZSBvYmplY3QuIElmIHlvdSBhcmUgd2FpdGluZ1xyXG4gKiBmb3IgYXN5bmNocm9ub3VzIGRhdGEsIHRoZSBvYmplY3QgY2FuIGJlIHVuZGVmaW5lZC5cclxuICogSW4gdGhpcyBjYXNlLCB5b3UgY2FuIHVzZSBgbmdJZmAgYW5kIHN0b3JlIHRoZSByZXN1bHQgb2YgdGhlIGNvbmRpdGlvbiBpbiBhIGxvY2FsXHJcbiAqIHZhcmlhYmxlIGFzIHNob3duIGluIHRoZSB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdJZi90cy9tb2R1bGUudHMgcmVnaW9uPSdOZ0lmQXMnfVxyXG4gKlxyXG4gKiBUaGlzIGNvZGUgdXNlcyBvbmx5IG9uZSBgQXN5bmNQaXBlYCwgc28gb25seSBvbmUgc3Vic2NyaXB0aW9uIGlzIGNyZWF0ZWQuXHJcbiAqIFRoZSBjb25kaXRpb25hbCBzdGF0ZW1lbnQgc3RvcmVzIHRoZSByZXN1bHQgb2YgYHVzZXJTdHJlYW18YXN5bmNgIGluIHRoZSBsb2NhbCB2YXJpYWJsZSBgdXNlcmAuXHJcbiAqIFlvdSBjYW4gdGhlbiBiaW5kIHRoZSBsb2NhbCBgdXNlcmAgcmVwZWF0ZWRseS5cclxuICpcclxuICogVGhlIGNvbmRpdGlvbmFsIGRpc3BsYXlzIHRoZSBkYXRhIG9ubHkgaWYgYHVzZXJTdHJlYW1gIHJldHVybnMgYSB2YWx1ZSxcclxuICogc28geW91IGRvbid0IG5lZWQgdG8gdXNlIHRoZVxyXG4gKiBbc2FmZS1uYXZpZ2F0aW9uLW9wZXJhdG9yXShndWlkZS90ZW1wbGF0ZS1zeW50YXgjc2FmZS1uYXZpZ2F0aW9uLW9wZXJhdG9yKSAoYD8uYClcclxuICogdG8gZ3VhcmQgYWdhaW5zdCBudWxsIHZhbHVlcyB3aGVuIGFjY2Vzc2luZyBwcm9wZXJ0aWVzLlxyXG4gKiBZb3UgY2FuIGRpc3BsYXkgYW4gYWx0ZXJuYXRpdmUgdGVtcGxhdGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIGRhdGEuXHJcbiAqXHJcbiAqICMjIyBTaG9ydGhhbmQgc3ludGF4XHJcbiAqXHJcbiAqIFRoZSBzaG9ydGhhbmQgc3ludGF4IGAqbmdJZmAgZXhwYW5kcyBpbnRvIHR3byBzZXBhcmF0ZSB0ZW1wbGF0ZSBzcGVjaWZpY2F0aW9uc1xyXG4gKiBmb3IgdGhlIFwidGhlblwiIGFuZCBcImVsc2VcIiBjbGF1c2VzLiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhlIGZvbGxvd2luZyBzaG9ydGhhbmQgc3RhdGVtZW50LFxyXG4gKiB0aGF0IGlzIG1lYW50IHRvIHNob3cgYSBsb2FkaW5nIHBhZ2Ugd2hpbGUgd2FpdGluZyBmb3IgZGF0YSB0byBiZSBsb2FkZWQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8ZGl2IGNsYXNzPVwiaGVyby1saXN0XCIgKm5nSWY9XCJoZXJvZXMgZWxzZSBsb2FkaW5nXCI+XHJcbiAqICAuLi5cclxuICogPC9kaXY+XHJcbiAqXHJcbiAqIDxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cclxuICogIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBzZWUgdGhhdCB0aGUgXCJlbHNlXCIgY2xhdXNlIHJlZmVyZW5jZXMgdGhlIGA8bmctdGVtcGxhdGU+YFxyXG4gKiB3aXRoIHRoZSBgI2xvYWRpbmdgIGxhYmVsLCBhbmQgdGhlIHRlbXBsYXRlIGZvciB0aGUgXCJ0aGVuXCIgY2xhdXNlXHJcbiAqIGlzIHByb3ZpZGVkIGFzIHRoZSBjb250ZW50IG9mIHRoZSBhbmNob3IgZWxlbWVudC5cclxuICpcclxuICogSG93ZXZlciwgd2hlbiBBbmd1bGFyIGV4cGFuZHMgdGhlIHNob3J0aGFuZCBzeW50YXgsIGl0IGNyZWF0ZXNcclxuICogYW5vdGhlciBgPG5nLXRlbXBsYXRlPmAgdGFnLCB3aXRoIGBuZ0lmYCBhbmQgYG5nSWZFbHNlYCBkaXJlY3RpdmVzLlxyXG4gKiBUaGUgYW5jaG9yIGVsZW1lbnQgY29udGFpbmluZyB0aGUgdGVtcGxhdGUgZm9yIHRoZSBcInRoZW5cIiBjbGF1c2UgYmVjb21lc1xyXG4gKiB0aGUgY29udGVudCBvZiB0aGlzIHVubGFiZWxlZCBgPG5nLXRlbXBsYXRlPmAgdGFnLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImhlcm9lc1wiIFtuZ0lmRWxzZV09XCJsb2FkaW5nXCI+XHJcbiAqICA8ZGl2IGNsYXNzPVwiaGVyby1saXN0XCI+XHJcbiAqICAgLi4uXHJcbiAqICA8L2Rpdj5cclxuICogPC9uZy10ZW1wbGF0ZT5cclxuICpcclxuICogPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxyXG4gKiAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAqIDwvbmctdGVtcGxhdGU+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgcHJlc2VuY2Ugb2YgdGhlIGltcGxpY2l0IHRlbXBsYXRlIG9iamVjdCBoYXMgaW1wbGljYXRpb25zIGZvciB0aGUgbmVzdGluZyBvZlxyXG4gKiBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZXMuIEZvciBtb3JlIG9uIHRoaXMgc3ViamVjdCwgc2VlXHJcbiAqIFtTdHJ1Y3R1cmFsIERpcmVjdGl2ZXNdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMjb25lLXBlci1lbGVtZW50KS5cclxuICpcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ0lmPFQgPSB1bmtub3duPiB7XHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyO1xyXG4gICAgcHJpdmF0ZSBfY29udGV4dDtcclxuICAgIHByaXZhdGUgX3RoZW5UZW1wbGF0ZVJlZjtcclxuICAgIHByaXZhdGUgX2Vsc2VUZW1wbGF0ZVJlZjtcclxuICAgIHByaXZhdGUgX3RoZW5WaWV3UmVmO1xyXG4gICAgcHJpdmF0ZSBfZWxzZVZpZXdSZWY7XHJcbiAgICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5nSWZDb250ZXh0PFQ+Pik7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBCb29sZWFuIGV4cHJlc3Npb24gdG8gZXZhbHVhdGUgYXMgdGhlIGNvbmRpdGlvbiBmb3Igc2hvd2luZyBhIHRlbXBsYXRlLlxyXG4gICAgICovXHJcbiAgICBzZXQgbmdJZihjb25kaXRpb246IFQpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHRlbXBsYXRlIHRvIHNob3cgaWYgdGhlIGNvbmRpdGlvbiBleHByZXNzaW9uIGV2YWx1YXRlcyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBzZXQgbmdJZlRoZW4odGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5nSWZDb250ZXh0PFQ+PiB8IG51bGwpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHRlbXBsYXRlIHRvIHNob3cgaWYgdGhlIGNvbmRpdGlvbiBleHByZXNzaW9uIGV2YWx1YXRlcyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgc2V0IG5nSWZFbHNlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOZ0lmQ29udGV4dDxUPj4gfCBudWxsKTtcclxuICAgIHByaXZhdGUgX3VwZGF0ZVZpZXc7XHJcbiAgICAvKipcclxuICAgICAqIEFzc2VydCB0aGUgY29ycmVjdCB0eXBlIG9mIHRoZSBleHByZXNzaW9uIGJvdW5kIHRvIHRoZSBgbmdJZmAgaW5wdXQgd2l0aGluIHRoZSB0ZW1wbGF0ZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgcHJlc2VuY2Ugb2YgdGhpcyBzdGF0aWMgZmllbGQgaXMgYSBzaWduYWwgdG8gdGhlIEl2eSB0ZW1wbGF0ZSB0eXBlIGNoZWNrIGNvbXBpbGVyIHRoYXRcclxuICAgICAqIHdoZW4gdGhlIGBOZ0lmYCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSByZW5kZXJzIGl0cyB0ZW1wbGF0ZSwgdGhlIHR5cGUgb2YgdGhlIGV4cHJlc3Npb24gYm91bmRcclxuICAgICAqIHRvIGBuZ0lmYCBzaG91bGQgYmUgbmFycm93ZWQgaW4gc29tZSB3YXkuIEZvciBgTmdJZmAsIHRoZSBiaW5kaW5nIGV4cHJlc3Npb24gaXRzZWxmIGlzIHVzZWQgdG9cclxuICAgICAqIG5hcnJvdyBpdHMgdHlwZSwgd2hpY2ggYWxsb3dzIHRoZSBzdHJpY3ROdWxsQ2hlY2tzIGZlYXR1cmUgb2YgVHlwZVNjcmlwdCB0byB3b3JrIHdpdGggYE5nSWZgLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbmdUZW1wbGF0ZUd1YXJkX25nSWY6ICdiaW5kaW5nJztcclxuICAgIC8qKlxyXG4gICAgICogQXNzZXJ0cyB0aGUgY29ycmVjdCB0eXBlIG9mIHRoZSBjb250ZXh0IGZvciB0aGUgdGVtcGxhdGUgdGhhdCBgTmdJZmAgd2lsbCByZW5kZXIuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHByZXNlbmNlIG9mIHRoaXMgbWV0aG9kIGlzIGEgc2lnbmFsIHRvIHRoZSBJdnkgdGVtcGxhdGUgdHlwZS1jaGVjayBjb21waWxlciB0aGF0IHRoZVxyXG4gICAgICogYE5nSWZgIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHJlbmRlcnMgaXRzIHRlbXBsYXRlIHdpdGggYSBzcGVjaWZpYyBjb250ZXh0IHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KGRpcjogTmdJZjxUPiwgY3R4OiBhbnkpOiBjdHggaXMgTmdJZkNvbnRleHQ8Tm9uTnVsbGFibGU8VD4+O1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdJZkNvbnRleHQ8VCA9IHVua25vd24+IHtcclxuICAgICRpbXBsaWNpdDogVDtcclxuICAgIG5nSWY6IFQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwbHVyYWwgY2FzZSBiYXNlZCBvbiB0aGUgbG9jYWxlXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nTG9jYWxlTG9jYWxpemF0aW9uIGV4dGVuZHMgTmdMb2NhbGl6YXRpb24ge1xyXG4gICAgcHJvdGVjdGVkIGxvY2FsZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IobG9jYWxlOiBzdHJpbmcpO1xyXG4gICAgZ2V0UGx1cmFsQ2F0ZWdvcnkodmFsdWU6IGFueSwgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE5nTG9jYWxpemF0aW9uIHtcclxuICAgIGFic3RyYWN0IGdldFBsdXJhbENhdGVnb3J5KHZhbHVlOiBhbnksIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogYGBgXHJcbiAqIDxzb21lLWVsZW1lbnQgW25nUGx1cmFsXT1cInZhbHVlXCI+XHJcbiAqICAgPG5nLXRlbXBsYXRlIG5nUGx1cmFsQ2FzZT1cIj0wXCI+dGhlcmUgaXMgbm90aGluZzwvbmctdGVtcGxhdGU+XHJcbiAqICAgPG5nLXRlbXBsYXRlIG5nUGx1cmFsQ2FzZT1cIj0xXCI+dGhlcmUgaXMgb25lPC9uZy10ZW1wbGF0ZT5cclxuICogICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwiZmV3XCI+dGhlcmUgYXJlIGEgZmV3PC9uZy10ZW1wbGF0ZT5cclxuICogPC9zb21lLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQWRkcyAvIHJlbW92ZXMgRE9NIHN1Yi10cmVlcyBiYXNlZCBvbiBhIG51bWVyaWMgdmFsdWUuIFRhaWxvcmVkIGZvciBwbHVyYWxpemF0aW9uLlxyXG4gKlxyXG4gKiBEaXNwbGF5cyBET00gc3ViLXRyZWVzIHRoYXQgbWF0Y2ggdGhlIHN3aXRjaCBleHByZXNzaW9uIHZhbHVlLCBvciBmYWlsaW5nIHRoYXQsIERPTSBzdWItdHJlZXNcclxuICogdGhhdCBtYXRjaCB0aGUgc3dpdGNoIGV4cHJlc3Npb24ncyBwbHVyYWxpemF0aW9uIGNhdGVnb3J5LlxyXG4gKlxyXG4gKiBUbyB1c2UgdGhpcyBkaXJlY3RpdmUgeW91IG11c3QgcHJvdmlkZSBhIGNvbnRhaW5lciBlbGVtZW50IHRoYXQgc2V0cyB0aGUgYFtuZ1BsdXJhbF1gIGF0dHJpYnV0ZVxyXG4gKiB0byBhIHN3aXRjaCBleHByZXNzaW9uLiBJbm5lciBlbGVtZW50cyB3aXRoIGEgYFtuZ1BsdXJhbENhc2VdYCB3aWxsIGRpc3BsYXkgYmFzZWQgb24gdGhlaXJcclxuICogZXhwcmVzc2lvbjpcclxuICogLSBpZiBgW25nUGx1cmFsQ2FzZV1gIGlzIHNldCB0byBhIHZhbHVlIHN0YXJ0aW5nIHdpdGggYD1gLCBpdCB3aWxsIG9ubHkgZGlzcGxheSBpZiB0aGUgdmFsdWVcclxuICogICBtYXRjaGVzIHRoZSBzd2l0Y2ggZXhwcmVzc2lvbiBleGFjdGx5LFxyXG4gKiAtIG90aGVyd2lzZSwgdGhlIHZpZXcgd2lsbCBiZSB0cmVhdGVkIGFzIGEgXCJjYXRlZ29yeSBtYXRjaFwiLCBhbmQgd2lsbCBvbmx5IGRpc3BsYXkgaWYgZXhhY3RcclxuICogICB2YWx1ZSBtYXRjaGVzIGFyZW4ndCBmb3VuZCBhbmQgdGhlIHZhbHVlIG1hcHMgdG8gaXRzIGNhdGVnb3J5IGZvciB0aGUgZGVmaW5lZCBsb2NhbGUuXHJcbiAqXHJcbiAqIFNlZSBodHRwOi8vY2xkci51bmljb2RlLm9yZy9pbmRleC9jbGRyLXNwZWMvcGx1cmFsLXJ1bGVzXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nUGx1cmFsIHtcclxuICAgIHByaXZhdGUgX2xvY2FsaXphdGlvbjtcclxuICAgIHByaXZhdGUgX3N3aXRjaFZhbHVlO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZlVmlldztcclxuICAgIHByaXZhdGUgX2Nhc2VWaWV3cztcclxuICAgIGNvbnN0cnVjdG9yKF9sb2NhbGl6YXRpb246IE5nTG9jYWxpemF0aW9uKTtcclxuICAgIHNldCBuZ1BsdXJhbCh2YWx1ZTogbnVtYmVyKTtcclxuICAgIGFkZENhc2UodmFsdWU6IHN0cmluZywgc3dpdGNoVmlldzogU3dpdGNoVmlldyk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF91cGRhdGVWaWV3O1xyXG4gICAgcHJpdmF0ZSBfY2xlYXJWaWV3cztcclxuICAgIHByaXZhdGUgX2FjdGl2YXRlVmlldztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENyZWF0ZXMgYSB2aWV3IHRoYXQgd2lsbCBiZSBhZGRlZC9yZW1vdmVkIGZyb20gdGhlIHBhcmVudCB7QGxpbmsgTmdQbHVyYWx9IHdoZW4gdGhlXHJcbiAqIGdpdmVuIGV4cHJlc3Npb24gbWF0Y2hlcyB0aGUgcGx1cmFsIGV4cHJlc3Npb24gYWNjb3JkaW5nIHRvIENMRFIgcnVsZXMuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIGBgYFxyXG4gKiA8c29tZS1lbGVtZW50IFtuZ1BsdXJhbF09XCJ2YWx1ZVwiPlxyXG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCI9MFwiPi4uLjwvbmctdGVtcGxhdGU+XHJcbiAqICAgPG5nLXRlbXBsYXRlIG5nUGx1cmFsQ2FzZT1cIm90aGVyXCI+Li4uPC9uZy10ZW1wbGF0ZT5cclxuICogPC9zb21lLWVsZW1lbnQ+XHJcbiAqYGBgXHJcbiAqXHJcbiAqIFNlZSB7QGxpbmsgTmdQbHVyYWx9IGZvciBtb3JlIGRldGFpbHMgYW5kIGV4YW1wbGUuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nUGx1cmFsQ2FzZSB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZywgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPE9iamVjdD4sIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIG5nUGx1cmFsOiBOZ1BsdXJhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFNldCB0aGUgZm9udCBvZiB0aGUgY29udGFpbmluZyBlbGVtZW50IHRvIHRoZSByZXN1bHQgb2YgYW4gZXhwcmVzc2lvbi5cclxuICpcclxuICogYGBgXHJcbiAqIDxzb21lLWVsZW1lbnQgW25nU3R5bGVdPVwieydmb250LXN0eWxlJzogc3R5bGVFeHB9XCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBjb250YWluaW5nIGVsZW1lbnQgdG8gYSBwaXhlbCB2YWx1ZSByZXR1cm5lZCBieSBhbiBleHByZXNzaW9uLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPHNvbWUtZWxlbWVudCBbbmdTdHlsZV09XCJ7J21heC13aWR0aC5weCc6IHdpZHRoRXhwfVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogU2V0IGEgY29sbGVjdGlvbiBvZiBzdHlsZSB2YWx1ZXMgdXNpbmcgYW4gZXhwcmVzc2lvbiB0aGF0IHJldHVybnMga2V5LXZhbHVlIHBhaXJzLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPHNvbWUtZWxlbWVudCBbbmdTdHlsZV09XCJvYmpFeHBcIj4uLi48L3NvbWUtZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBbiBhdHRyaWJ1dGUgZGlyZWN0aXZlIHRoYXQgdXBkYXRlcyBzdHlsZXMgZm9yIHRoZSBjb250YWluaW5nIEhUTUwgZWxlbWVudC5cclxuICogU2V0cyBvbmUgb3IgbW9yZSBzdHlsZSBwcm9wZXJ0aWVzLCBzcGVjaWZpZWQgYXMgY29sb24tc2VwYXJhdGVkIGtleS12YWx1ZSBwYWlycy5cclxuICogVGhlIGtleSBpcyBhIHN0eWxlIG5hbWUsIHdpdGggYW4gb3B0aW9uYWwgYC48dW5pdD5gIHN1ZmZpeFxyXG4gKiAoc3VjaCBhcyAndG9wLnB4JywgJ2ZvbnQtc3R5bGUuZW0nKS5cclxuICogVGhlIHZhbHVlIGlzIGFuIGV4cHJlc3Npb24gdG8gYmUgZXZhbHVhdGVkLlxyXG4gKiBUaGUgcmVzdWx0aW5nIG5vbi1udWxsIHZhbHVlLCBleHByZXNzZWQgaW4gdGhlIGdpdmVuIHVuaXQsXHJcbiAqIGlzIGFzc2lnbmVkIHRvIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eS5cclxuICogSWYgdGhlIHJlc3VsdCBvZiBldmFsdWF0aW9uIGlzIG51bGwsIHRoZSBjb3JyZXNwb25kaW5nIHN0eWxlIGlzIHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nU3R5bGUgaW1wbGVtZW50cyBEb0NoZWNrIHtcclxuICAgIHByaXZhdGUgX25nRWw7XHJcbiAgICBwcml2YXRlIF9kaWZmZXJzO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIF9uZ1N0eWxlO1xyXG4gICAgcHJpdmF0ZSBfZGlmZmVyO1xyXG4gICAgY29uc3RydWN0b3IoX25nRWw6IEVsZW1lbnRSZWYsIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIF9yZW5kZXJlcjogUmVuZGVyZXIyKTtcclxuICAgIHNldCBuZ1N0eWxlKHZhbHVlczoge1xyXG4gICAgICAgIFtrbGFzczogc3RyaW5nXTogYW55O1xyXG4gICAgfSB8IG51bGwpO1xyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9zZXRTdHlsZTtcclxuICAgIHByaXZhdGUgX2FwcGx5Q2hhbmdlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uIEEgc3RydWN0dXJhbCBkaXJlY3RpdmUgdGhhdCBhZGRzIG9yIHJlbW92ZXMgdGVtcGxhdGVzIChkaXNwbGF5aW5nIG9yIGhpZGluZyB2aWV3cylcclxuICogd2hlbiB0aGUgbmV4dCBtYXRjaCBleHByZXNzaW9uIG1hdGNoZXMgdGhlIHN3aXRjaCBleHByZXNzaW9uLlxyXG4gKlxyXG4gKiBUaGUgYFtuZ1N3aXRjaF1gIGRpcmVjdGl2ZSBvbiBhIGNvbnRhaW5lciBzcGVjaWZpZXMgYW4gZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0LlxyXG4gKiBUaGUgZXhwcmVzc2lvbnMgdG8gbWF0Y2ggYXJlIHByb3ZpZGVkIGJ5IGBuZ1N3aXRjaENhc2VgIGRpcmVjdGl2ZXMgb24gdmlld3Mgd2l0aGluIHRoZSBjb250YWluZXIuXHJcbiAqIC0gRXZlcnkgdmlldyB0aGF0IG1hdGNoZXMgaXMgcmVuZGVyZWQuXHJcbiAqIC0gSWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMsIGEgdmlldyB3aXRoIHRoZSBgbmdTd2l0Y2hEZWZhdWx0YCBkaXJlY3RpdmUgaXMgcmVuZGVyZWQuXHJcbiAqIC0gRWxlbWVudHMgd2l0aGluIHRoZSBgW05nU3dpdGNoXWAgc3RhdGVtZW50IGJ1dCBvdXRzaWRlIG9mIGFueSBgTmdTd2l0Y2hDYXNlYFxyXG4gKiBvciBgbmdTd2l0Y2hEZWZhdWx0YCBkaXJlY3RpdmUgYXJlIHByZXNlcnZlZCBhdCB0aGUgbG9jYXRpb24uXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIERlZmluZSBhIGNvbnRhaW5lciBlbGVtZW50IGZvciB0aGUgZGlyZWN0aXZlLCBhbmQgc3BlY2lmeSB0aGUgc3dpdGNoIGV4cHJlc3Npb25cclxuICogdG8gbWF0Y2ggYWdhaW5zdCBhcyBhbiBhdHRyaWJ1dGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoaW4gdGhlIGNvbnRhaW5lciwgYCpuZ1N3aXRjaENhc2VgIHN0YXRlbWVudHMgc3BlY2lmeSB0aGUgbWF0Y2ggZXhwcmVzc2lvbnNcclxuICogYXMgYXR0cmlidXRlcy4gSW5jbHVkZSBgKm5nU3dpdGNoRGVmYXVsdGAgYXMgdGhlIGZpbmFsIGNhc2UuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XHJcbiAqICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAuLi5cclxuICogICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hEZWZhdWx0Pi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiA8L2NvbnRhaW5lci1lbGVtZW50PlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFVzYWdlIEV4YW1wbGVzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgdG8gdXNlIG1vcmUgdGhhbiBvbmUgY2FzZSB0byBkaXNwbGF5IHRoZSBzYW1lIHZpZXc6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XHJcbiAqICAgPCEtLSB0aGUgc2FtZSB2aWV3IGNhbiBiZSBzaG93biBpbiBtb3JlIHRoYW4gb25lIGNhc2UgLS0+XHJcbiAqICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8xXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8yXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqICAgPHNvbWUtb3RoZXItZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8zXCI+Li4uPC9zb21lLW90aGVyLWVsZW1lbnQ+XHJcbiAqICAgPCEtLWRlZmF1bHQgY2FzZSB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGVzIC0tPlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cclxuICogPC9jb250YWluZXItZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgY2FzZXMgY2FuIGJlIG5lc3RlZDpcclxuICogYGBgXHJcbiAqIDxjb250YWluZXItZWxlbWVudCBbbmdTd2l0Y2hdPVwic3dpdGNoX2V4cHJlc3Npb25cIj5cclxuICogICAgICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8xXCI+Li4uPC9zb21lLWVsZW1lbnQ+XHJcbiAqICAgICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMlwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgICAgICA8c29tZS1vdGhlci1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzNcIj4uLi48L3NvbWUtb3RoZXItZWxlbWVudD5cclxuICogICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8zXCI+XHJcbiAqICAgICAgICAgPCEtLSB1c2UgYSBuZy1jb250YWluZXIgdG8gZ3JvdXAgbXVsdGlwbGUgcm9vdCBub2RlcyAtLT5cclxuICogICAgICAgICA8aW5uZXItZWxlbWVudD48L2lubmVyLWVsZW1lbnQ+XHJcbiAqICAgICAgICAgPGlubmVyLW90aGVyLWVsZW1lbnQ+PC9pbm5lci1vdGhlci1lbGVtZW50PlxyXG4gKiAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICogICAgICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hEZWZhdWx0Pi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgICAgPC9jb250YWluZXItZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQHNlZSBgTmdTd2l0Y2hDYXNlYFxyXG4gKiBAc2VlIGBOZ1N3aXRjaERlZmF1bHRgXHJcbiAqIEBzZWUgW1N0cnVjdHVyYWwgRGlyZWN0aXZlc10oZ3VpZGUvc3RydWN0dXJhbC1kaXJlY3RpdmVzKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdTd2l0Y2gge1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFZpZXdzO1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFVzZWQ7XHJcbiAgICBwcml2YXRlIF9jYXNlQ291bnQ7XHJcbiAgICBwcml2YXRlIF9sYXN0Q2FzZUNoZWNrSW5kZXg7XHJcbiAgICBwcml2YXRlIF9sYXN0Q2FzZXNNYXRjaGVkO1xyXG4gICAgcHJpdmF0ZSBfbmdTd2l0Y2g7XHJcbiAgICBzZXQgbmdTd2l0Y2gobmV3VmFsdWU6IGFueSk7XHJcbiAgICBwcml2YXRlIF91cGRhdGVEZWZhdWx0Q2FzZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQcm92aWRlcyBhIHN3aXRjaCBjYXNlIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdCBhbiBlbmNsb3NpbmcgYG5nU3dpdGNoYCBleHByZXNzaW9uLlxyXG4gKiBXaGVuIHRoZSBleHByZXNzaW9ucyBtYXRjaCwgdGhlIGdpdmVuIGBOZ1N3aXRjaENhc2VgIHRlbXBsYXRlIGlzIHJlbmRlcmVkLlxyXG4gKiBJZiBtdWx0aXBsZSBtYXRjaCBleHByZXNzaW9ucyBtYXRjaCB0aGUgc3dpdGNoIGV4cHJlc3Npb24gdmFsdWUsIGFsbCBvZiB0aGVtIGFyZSBkaXNwbGF5ZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFdpdGhpbiBhIHN3aXRjaCBjb250YWluZXIsIGAqbmdTd2l0Y2hDYXNlYCBzdGF0ZW1lbnRzIHNwZWNpZnkgdGhlIG1hdGNoIGV4cHJlc3Npb25zXHJcbiAqIGFzIGF0dHJpYnV0ZXMuIEluY2x1ZGUgYCpuZ1N3aXRjaERlZmF1bHRgIGFzIHRoZSBmaW5hbCBjYXNlLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGNvbnRhaW5lci1lbGVtZW50IFtuZ1N3aXRjaF09XCJzd2l0Y2hfZXhwcmVzc2lvblwiPlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMVwiPi4uLjwvc29tZS1lbGVtZW50PlxyXG4gKiAgIC4uLlxyXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cclxuICogPC9jb250YWluZXItZWxlbWVudD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEVhY2ggc3dpdGNoLWNhc2Ugc3RhdGVtZW50IGNvbnRhaW5zIGFuIGluLWxpbmUgSFRNTCB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZSByZWZlcmVuY2VcclxuICogdGhhdCBkZWZpbmVzIHRoZSBzdWJ0cmVlIHRvIGJlIHNlbGVjdGVkIGlmIHRoZSB2YWx1ZSBvZiB0aGUgbWF0Y2ggZXhwcmVzc2lvblxyXG4gKiBtYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUgc3dpdGNoIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIFVubGlrZSBKYXZhU2NyaXB0LCB3aGljaCB1c2VzIHN0cmljdCBlcXVhbGl0eSwgQW5ndWxhciB1c2VzIGxvb3NlIGVxdWFsaXR5LlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGVtcHR5IHN0cmluZywgYFwiXCJgIG1hdGNoZXMgMC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAc2VlIGBOZ1N3aXRjaGBcclxuICogQHNlZSBgTmdTd2l0Y2hEZWZhdWx0YFxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdTd2l0Y2hDYXNlIGltcGxlbWVudHMgRG9DaGVjayB7XHJcbiAgICBwcml2YXRlIG5nU3dpdGNoO1xyXG4gICAgcHJpdmF0ZSBfdmlldztcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBIVE1MIHRlbXBsYXRlIHRvIGJlIHNlbGVjdGVkIG9uIG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBuZ1N3aXRjaENhc2U6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LCBuZ1N3aXRjaDogTmdTd2l0Y2gpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyBjYXNlIG1hdGNoaW5nLiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXHJcbiAgICAgKi9cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ3JlYXRlcyBhIHZpZXcgdGhhdCBpcyByZW5kZXJlZCB3aGVuIG5vIGBOZ1N3aXRjaENhc2VgIGV4cHJlc3Npb25zXHJcbiAqIG1hdGNoIHRoZSBgTmdTd2l0Y2hgIGV4cHJlc3Npb24uXHJcbiAqIFRoaXMgc3RhdGVtZW50IHNob3VsZCBiZSB0aGUgZmluYWwgY2FzZSBpbiBhbiBgTmdTd2l0Y2hgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBzZWUgYE5nU3dpdGNoYFxyXG4gKiBAc2VlIGBOZ1N3aXRjaENhc2VgXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ1N3aXRjaERlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sIG5nU3dpdGNoOiBOZ1N3aXRjaCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBJbnNlcnRzIGFuIGVtYmVkZGVkIHZpZXcgZnJvbSBhIHByZXBhcmVkIGBUZW1wbGF0ZVJlZmAuXHJcbiAqXHJcbiAqIFlvdSBjYW4gYXR0YWNoIGEgY29udGV4dCBvYmplY3QgdG8gdGhlIGBFbWJlZGRlZFZpZXdSZWZgIGJ5IHNldHRpbmcgYFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF1gLlxyXG4gKiBgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XWAgc2hvdWxkIGJlIGFuIG9iamVjdCwgdGhlIG9iamVjdCdzIGtleXMgd2lsbCBiZSBhdmFpbGFibGUgZm9yIGJpbmRpbmdcclxuICogYnkgdGhlIGxvY2FsIHRlbXBsYXRlIGBsZXRgIGRlY2xhcmF0aW9ucy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogYGBgXHJcbiAqIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVJlZkV4cDsgY29udGV4dDogY29udGV4dEV4cFwiPjwvbmctY29udGFpbmVyPlxyXG4gKiBgYGBcclxuICpcclxuICogVXNpbmcgdGhlIGtleSBgJGltcGxpY2l0YCBpbiB0aGUgY29udGV4dCBvYmplY3Qgd2lsbCBzZXQgaXRzIHZhbHVlIGFzIGRlZmF1bHQuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSBjb21tb24vbmdUZW1wbGF0ZU91dGxldC90cy9tb2R1bGUudHMgcmVnaW9uPSdOZ1RlbXBsYXRlT3V0bGV0J31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdUZW1wbGF0ZU91dGxldCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgcHJpdmF0ZSBfdmlld1JlZjtcclxuICAgIC8qKlxyXG4gICAgICogQSBjb250ZXh0IG9iamVjdCB0byBhdHRhY2ggdG8gdGhlIHtAbGluayBFbWJlZGRlZFZpZXdSZWZ9LiBUaGlzIHNob3VsZCBiZSBhblxyXG4gICAgICogb2JqZWN0LCB0aGUgb2JqZWN0J3Mga2V5cyB3aWxsIGJlIGF2YWlsYWJsZSBmb3IgYmluZGluZyBieSB0aGUgbG9jYWwgdGVtcGxhdGUgYGxldGBcclxuICAgICAqIGRlY2xhcmF0aW9ucy5cclxuICAgICAqIFVzaW5nIHRoZSBrZXkgYCRpbXBsaWNpdGAgaW4gdGhlIGNvbnRleHQgb2JqZWN0IHdpbGwgc2V0IGl0cyB2YWx1ZSBhcyBkZWZhdWx0LlxyXG4gICAgICovXHJcbiAgICBuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dDogT2JqZWN0IHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIHRlbXBsYXRlIHJlZmVyZW5jZSBhbmQgb3B0aW9uYWxseSB0aGUgY29udGV4dCBvYmplY3QgZm9yIHRoZSB0ZW1wbGF0ZS5cclxuICAgICAqL1xyXG4gICAgbmdUZW1wbGF0ZU91dGxldDogVGVtcGxhdGVSZWY8YW55PiB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZik7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogV2UgbmVlZCB0byByZS1jcmVhdGUgZXhpc3RpbmcgZW1iZWRkZWQgdmlldyBpZjpcclxuICAgICAqIC0gdGVtcGxhdGVSZWYgaGFzIGNoYW5nZWRcclxuICAgICAqIC0gY29udGV4dCBoYXMgY2hhbmdlc1xyXG4gICAgICpcclxuICAgICAqIFdlIG1hcmsgY29udGV4dCBvYmplY3QgYXMgY2hhbmdlZCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIG9iamVjdFxyXG4gICAgICogc2hhcGUgY2hhbmdlcyAobmV3IHByb3BlcnRpZXMgYXJlIGFkZGVkIG9yIGV4aXN0aW5nIHByb3BlcnRpZXMgYXJlIHJlbW92ZWQpLlxyXG4gICAgICogSW4gb3RoZXIgd29yZHMgd2UgY29uc2lkZXIgY29udGV4dCB3aXRoIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgXCJ0aGUgc2FtZVwiIGV2ZW5cclxuICAgICAqIGlmIG9iamVjdCByZWZlcmVuY2UgY2hhbmdlcyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEzNDA3KS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2hvdWxkUmVjcmVhdGVWaWV3O1xyXG4gICAgcHJpdmF0ZSBfaGFzQ29udGV4dFNoYXBlQ2hhbmdlZDtcclxuICAgIHByaXZhdGUgX3VwZGF0ZUV4aXN0aW5nQ29udGV4dDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXQgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVwcmVzZW50IG51bWJlcnMuXHJcbiAqIEBzZWUgYGdldExvY2FsZU51bWJlckZvcm1hdCgpYC5cclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBOdW1iZXJGb3JtYXRTdHlsZSB7XHJcbiAgICBEZWNpbWFsID0gMCxcclxuICAgIFBlcmNlbnQgPSAxLFxyXG4gICAgQ3VycmVuY3kgPSAyLFxyXG4gICAgU2NpZW50aWZpYyA9IDNcclxufVxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbHMgdGhhdCBjYW4gYmUgdXNlZCB0byByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBudW1iZXIgcGF0dGVybnMuXHJcbiAqIEV4YW1wbGVzIGFyZSBiYXNlZCBvbiBgZW4tVVNgIHZhbHVlcy5cclxuICpcclxuICogQHNlZSBgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKClgXHJcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gTnVtYmVyU3ltYm9sIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVjaW1hbCBzZXBhcmF0b3IuXHJcbiAgICAgKiBGb3IgYGVuLVVTYCwgdGhlIGRvdCBjaGFyYWN0ZXIuXHJcbiAgICAgKiBFeGFtcGxlIDogMiwzNDVgLmA2N1xyXG4gICAgICovXHJcbiAgICBEZWNpbWFsID0gMCxcclxuICAgIC8qKlxyXG4gICAgICogR3JvdXBpbmcgc2VwYXJhdG9yLCB0eXBpY2FsbHkgZm9yIHRob3VzYW5kcy5cclxuICAgICAqIEZvciBgZW4tVVNgLCB0aGUgY29tbWEgY2hhcmFjdGVyLlxyXG4gICAgICogRXhhbXBsZTogMmAsYDM0NS42N1xyXG4gICAgICovXHJcbiAgICBHcm91cCA9IDEsXHJcbiAgICAvKipcclxuICAgICAqIExpc3QtaXRlbSBzZXBhcmF0b3IuXHJcbiAgICAgKiBFeGFtcGxlOiBcIm9uZSwgdHdvLCBhbmQgdGhyZWVcIlxyXG4gICAgICovXHJcbiAgICBMaXN0ID0gMixcclxuICAgIC8qKlxyXG4gICAgICogU2lnbiBmb3IgcGVyY2VudGFnZSAob3V0IG9mIDEwMCkuXHJcbiAgICAgKiBFeGFtcGxlOiAyMy40JVxyXG4gICAgICovXHJcbiAgICBQZXJjZW50U2lnbiA9IDMsXHJcbiAgICAvKipcclxuICAgICAqIFNpZ24gZm9yIHBvc2l0aXZlIG51bWJlcnMuXHJcbiAgICAgKiBFeGFtcGxlOiArMjNcclxuICAgICAqL1xyXG4gICAgUGx1c1NpZ24gPSA0LFxyXG4gICAgLyoqXHJcbiAgICAgKiBTaWduIGZvciBuZWdhdGl2ZSBudW1iZXJzLlxyXG4gICAgICogRXhhbXBsZTogLTIzXHJcbiAgICAgKi9cclxuICAgIE1pbnVzU2lnbiA9IDUsXHJcbiAgICAvKipcclxuICAgICAqIENvbXB1dGVyIG5vdGF0aW9uIGZvciBleHBvbmVudGlhbCB2YWx1ZSAobiB0aW1lcyBhIHBvd2VyIG9mIDEwKS5cclxuICAgICAqIEV4YW1wbGU6IDEuMkUzXHJcbiAgICAgKi9cclxuICAgIEV4cG9uZW50aWFsID0gNixcclxuICAgIC8qKlxyXG4gICAgICogSHVtYW4tcmVhZGFibGUgZm9ybWF0IG9mIGV4cG9uZW50aWFsLlxyXG4gICAgICogRXhhbXBsZTogMS4yeDEwM1xyXG4gICAgICovXHJcbiAgICBTdXBlcnNjcmlwdGluZ0V4cG9uZW50ID0gNyxcclxuICAgIC8qKlxyXG4gICAgICogU2lnbiBmb3IgcGVybWlsbGUgKG91dCBvZiAxMDAwKS5cclxuICAgICAqIEV4YW1wbGU6IDIzLjTigLBcclxuICAgICAqL1xyXG4gICAgUGVyTWlsbGUgPSA4LFxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmZpbml0eSwgY2FuIGJlIHVzZWQgd2l0aCBwbHVzIGFuZCBtaW51cy5cclxuICAgICAqIEV4YW1wbGU6IOKIniwgK+KIniwgLeKInlxyXG4gICAgICovXHJcbiAgICBJbmZpbml0eSA9IDksXHJcbiAgICAvKipcclxuICAgICAqIE5vdCBhIG51bWJlci5cclxuICAgICAqIEV4YW1wbGU6IE5hTlxyXG4gICAgICovXHJcbiAgICBOYU4gPSAxMCxcclxuICAgIC8qKlxyXG4gICAgICogU3ltYm9sIHVzZWQgYmV0d2VlbiB0aW1lIHVuaXRzLlxyXG4gICAgICogRXhhbXBsZTogMTA6NTJcclxuICAgICAqL1xyXG4gICAgVGltZVNlcGFyYXRvciA9IDExLFxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNpbWFsIHNlcGFyYXRvciBmb3IgY3VycmVuY3kgdmFsdWVzIChmYWxsYmFjayB0byBgRGVjaW1hbGApLlxyXG4gICAgICogRXhhbXBsZTogJDIsMzQ1LjY3XHJcbiAgICAgKi9cclxuICAgIEN1cnJlbmN5RGVjaW1hbCA9IDEyLFxyXG4gICAgLyoqXHJcbiAgICAgKiBHcm91cCBzZXBhcmF0b3IgZm9yIGN1cnJlbmN5IHZhbHVlcyAoZmFsbGJhY2sgdG8gYEdyb3VwYCkuXHJcbiAgICAgKiBFeGFtcGxlOiAkMiwzNDUuNjdcclxuICAgICAqL1xyXG4gICAgQ3VycmVuY3lHcm91cCA9IDEzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gdXNlZCB0byBjb25maWd1cmUgdGhlIHtAbGluayBMb2NhdGlvbn0gc2VydmljZSB0b1xyXG4gKiByZXByZXNlbnQgaXRzIHN0YXRlIGluIHRoZVxyXG4gKiBbcGF0aF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9SZXNvdXJjZV9Mb2NhdG9yI1N5bnRheCkgb2YgdGhlXHJcbiAqIGJyb3dzZXIncyBVUkwuXHJcbiAqXHJcbiAqIElmIHlvdSdyZSB1c2luZyBgUGF0aExvY2F0aW9uU3RyYXRlZ3lgLCB5b3UgbXVzdCBwcm92aWRlIGEge0BsaW5rIEFQUF9CQVNFX0hSRUZ9XHJcbiAqIG9yIGFkZCBhIGJhc2UgZWxlbWVudCB0byB0aGUgZG9jdW1lbnQuIFRoaXMgVVJMIHByZWZpeCB0aGF0IHdpbGwgYmUgcHJlc2VydmVkXHJcbiAqIHdoZW4gZ2VuZXJhdGluZyBhbmQgcmVjb2duaXppbmcgVVJMcy5cclxuICpcclxuICogRm9yIGluc3RhbmNlLCBpZiB5b3UgcHJvdmlkZSBhbiBgQVBQX0JBU0VfSFJFRmAgb2YgYCcvbXkvYXBwJ2AgYW5kIGNhbGxcclxuICogYGxvY2F0aW9uLmdvKCcvZm9vJylgLCB0aGUgYnJvd3NlcidzIFVSTCB3aWxsIGJlY29tZVxyXG4gKiBgZXhhbXBsZS5jb20vbXkvYXBwL2Zvb2AuXHJcbiAqXHJcbiAqIFNpbWlsYXJseSwgaWYgeW91IGFkZCBgPGJhc2UgaHJlZj0nL215L2FwcCcvPmAgdG8gdGhlIGRvY3VtZW50IGFuZCBjYWxsXHJcbiAqIGBsb2NhdGlvbi5nbygnL2ZvbycpYCwgdGhlIGJyb3dzZXIncyBVUkwgd2lsbCBiZWNvbWVcclxuICogYGV4YW1wbGUuY29tL215L2FwcC9mb29gLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL2xvY2F0aW9uL3RzL3BhdGhfbG9jYXRpb25fY29tcG9uZW50LnRzIHJlZ2lvbj0nTG9jYXRpb25Db21wb25lbnQnfVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYXRoTG9jYXRpb25TdHJhdGVneSBleHRlbmRzIExvY2F0aW9uU3RyYXRlZ3kge1xyXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1Mb2NhdGlvbjtcclxuICAgIHByaXZhdGUgX2Jhc2VIcmVmO1xyXG4gICAgY29uc3RydWN0b3IoX3BsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sIGhyZWY/OiBzdHJpbmcpO1xyXG4gICAgb25Qb3BTdGF0ZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBnZXRCYXNlSHJlZigpOiBzdHJpbmc7XHJcbiAgICBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZztcclxuICAgIHBhdGgoaW5jbHVkZUhhc2g/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gICAgcHVzaFN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogc3RyaW5nKTogdm9pZDtcclxuICAgIHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBmb3J3YXJkKCk6IHZvaWQ7XHJcbiAgICBiYWNrKCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBUcmFuc2Zvcm1zIGEgbnVtYmVyIHRvIGEgcGVyY2VudGFnZVxyXG4gKiBzdHJpbmcsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzIHRoYXQgZGV0ZXJtaW5lIGdyb3VwIHNpemluZyBhbmRcclxuICogc2VwYXJhdG9yLCBkZWNpbWFsLXBvaW50IGNoYXJhY3RlciwgYW5kIG90aGVyIGxvY2FsZS1zcGVjaWZpY1xyXG4gKiBjb25maWd1cmF0aW9ucy5cclxuICpcclxuICogQHNlZSBgZm9ybWF0UGVyY2VudCgpYFxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgc2hvd3MgaG93IHRoZSBwaXBlIHRyYW5zZm9ybXMgbnVtYmVyc1xyXG4gKiBpbnRvIHRleHQgc3RyaW5ncywgYWNjb3JkaW5nIHRvIHZhcmlvdXMgZm9ybWF0IHNwZWNpZmljYXRpb25zLFxyXG4gKiB3aGVyZSB0aGUgY2FsbGVyJ3MgZGVmYXVsdCBsb2NhbGUgaXMgYGVuLVVTYC5cclxuICpcclxuICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiY29tbW9uL3BpcGVzL3RzL3BlcmNlbnRfcGlwZS50c1wiIHJlZ2lvbj0nUGVyY2VudFBpcGUnPjwvY29kZS1leGFtcGxlPlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQZXJjZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxlO1xyXG4gICAgY29uc3RydWN0b3IoX2xvY2FsZTogc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGJlIGZvcm1hdHRlZCBhcyBhIHBlcmNlbnRhZ2UuXHJcbiAgICAgKiBAcGFyYW0gZGlnaXRzSW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZ1xyXG4gICAgICogaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6PGJyPlxyXG4gICAgICogPGNvZGU+e21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfTwvY29kZT4uXHJcbiAgICAgKiAgIC0gYG1pbkludGVnZXJEaWdpdHNgOiBUaGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50LlxyXG4gICAgICogRGVmYXVsdCBpcyBgMWAuXHJcbiAgICAgKiAgIC0gYG1pbkZyYWN0aW9uRGlnaXRzYDogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC5cclxuICAgICAqIERlZmF1bHQgaXMgYDBgLlxyXG4gICAgICogICAtIGBtYXhGcmFjdGlvbkRpZ2l0c2A6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGAwYC5cclxuICAgICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxyXG4gICAgICogV2hlbiBub3Qgc3VwcGxpZWQsIHVzZXMgdGhlIHZhbHVlIG9mIGBMT0NBTEVfSURgLCB3aGljaCBpcyBgZW4tVVNgIGJ5IGRlZmF1bHQuXHJcbiAgICAgKiBTZWUgW1NldHRpbmcgeW91ciBhcHAgbG9jYWxlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkuXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBkaWdpdHNJbmZvPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgYW4gYXBwbGljYXRpb24gZGV2ZWxvcGVyLiBJbnN0ZWFkLCB1c2VcclxuICoge0BsaW5rIExvY2F0aW9ufS5cclxuICpcclxuICogYFBsYXRmb3JtTG9jYXRpb25gIGVuY2Fwc3VsYXRlcyBhbGwgY2FsbHMgdG8gRE9NIGFwaXMsIHdoaWNoIGFsbG93cyB0aGUgUm91dGVyIHRvIGJlIHBsYXRmb3JtXHJcbiAqIGFnbm9zdGljLlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgd2UgY2FuIGhhdmUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9uIG9mIGBQbGF0Zm9ybUxvY2F0aW9uYCBmb3IgdGhlIGRpZmZlcmVudFxyXG4gKiBwbGF0Zm9ybXMgdGhhdCBhbmd1bGFyIHN1cHBvcnRzLiBGb3IgZXhhbXBsZSwgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJgIHByb3ZpZGVzIGFuXHJcbiAqIGltcGxlbWVudGF0aW9uIHNwZWNpZmljIHRvIHRoZSBicm93c2VyIGVudmlyb25tZW50LCB3aGlsZSBgQGFuZ3VsYXIvcGxhdGZvcm0td2Vid29ya2VyYCBwcm92aWRlc1xyXG4gKiBvbmUgc3VpdGFibGUgZm9yIHVzZSB3aXRoIHdlYiB3b3JrZXJzLlxyXG4gKlxyXG4gKiBUaGUgYFBsYXRmb3JtTG9jYXRpb25gIGNsYXNzIGlzIHVzZWQgZGlyZWN0bHkgYnkgYWxsIGltcGxlbWVudGF0aW9ucyBvZiB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX1cclxuICogd2hlbiB0aGV5IG5lZWQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgRE9NIGFwaXMgbGlrZSBwdXNoU3RhdGUsIHBvcFN0YXRlLCBldGMuLi5cclxuICpcclxuICoge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IGluIHR1cm4gaXMgdXNlZCBieSB0aGUge0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlIHdoaWNoIGlzIHVzZWQgZGlyZWN0bHlcclxuICogYnkgdGhlIHtAbGluayBSb3V0ZXJ9IGluIG9yZGVyIHRvIG5hdmlnYXRlIGJldHdlZW4gcm91dGVzLiBTaW5jZSBhbGwgaW50ZXJhY3Rpb25zIGJldHdlZW4ge0BsaW5rXHJcbiAqIFJvdXRlcn0gL1xyXG4gKiB7QGxpbmsgTG9jYXRpb259IC8ge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IGFuZCBET00gYXBpcyBmbG93IHRocm91Z2ggdGhlIGBQbGF0Zm9ybUxvY2F0aW9uYFxyXG4gKiBjbGFzcyB0aGV5IGFyZSBhbGwgcGxhdGZvcm0gaW5kZXBlbmRlbnQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFBsYXRmb3JtTG9jYXRpb24ge1xyXG4gICAgYWJzdHJhY3QgZ2V0QmFzZUhyZWZGcm9tRE9NKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldFN0YXRlKCk6IHVua25vd247XHJcbiAgICBhYnN0cmFjdCBvblBvcFN0YXRlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcclxuICAgIGFic3RyYWN0IG9uSGFzaENoYW5nZShmbjogTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBnZXQgaHJlZigpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgcHJvdG9jb2woKTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgZ2V0IGhvc3RuYW1lKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldCBwb3J0KCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldCBwYXRobmFtZSgpOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgc2VhcmNoKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGdldCBoYXNoKCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZm9yd2FyZCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgYmFjaygpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogUGx1cmFsaXR5IGNhc2VzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIHBsdXJhbHMgdG8gZGlmZmVyZW50IGxhbmd1YWdlcy5cclxuICpcclxuICogQHNlZSBgTmdQbHVyYWxgXHJcbiAqIEBzZWUgYE5nUGx1cmFsQ2FzZWBcclxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBQbHVyYWwge1xyXG4gICAgWmVybyA9IDAsXHJcbiAgICBPbmUgPSAxLFxyXG4gICAgVHdvID0gMixcclxuICAgIEZldyA9IDMsXHJcbiAgICBNYW55ID0gNCxcclxuICAgIE90aGVyID0gNVxyXG59XHJcblxyXG4vKiogQHB1YmxpY0FwaSAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUG9wU3RhdGVFdmVudCB7XHJcbiAgICBwb3A/OiBib29sZWFuO1xyXG4gICAgc3RhdGU/OiBhbnk7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGdsb2JhbCBkYXRhIHRvIGJlIHVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyLiBTZWUgdGhlXHJcbiAqIFtcIkkxOG4gZ3VpZGVcIl0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKSB0byBrbm93IGhvdyB0byBpbXBvcnQgYWRkaXRpb25hbCBsb2NhbGUgZGF0YS5cclxuICpcclxuICogVGhlIHNpZ25hdHVyZSByZWdpc3RlckxvY2FsZURhdGEoZGF0YTogYW55LCBleHRyYURhdGE/OiBhbnkpIGlzIGRlcHJlY2F0ZWQgc2luY2UgdjUuMVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiByZWdpc3RlckxvY2FsZURhdGEoZGF0YTogYW55LCBsb2NhbGVJZD86IHN0cmluZyB8IGFueSwgZXh0cmFEYXRhPzogYW55KTogdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheWAgb3IgYFN0cmluZ2AgY29udGFpbmluZyBhIHN1YnNldCAoc2xpY2UpIG9mIHRoZSBlbGVtZW50cy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogQWxsIGJlaGF2aW9yIGlzIGJhc2VkIG9uIHRoZSBleHBlY3RlZCBiZWhhdmlvciBvZiB0aGUgSmF2YVNjcmlwdCBBUEkgYEFycmF5LnByb3RvdHlwZS5zbGljZSgpYFxyXG4gKiBhbmQgYFN0cmluZy5wcm90b3R5cGUuc2xpY2UoKWAuXHJcbiAqXHJcbiAqIFdoZW4gb3BlcmF0aW5nIG9uIGFuIGBBcnJheWAsIHRoZSByZXR1cm5lZCBgQXJyYXlgIGlzIGFsd2F5cyBhIGNvcHkgZXZlbiB3aGVuIGFsbFxyXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJldHVybmVkLlxyXG4gKlxyXG4gKiBXaGVuIG9wZXJhdGluZyBvbiBhIGJsYW5rIHZhbHVlLCB0aGUgcGlwZSByZXR1cm5zIHRoZSBibGFuayB2YWx1ZS5cclxuICpcclxuICogIyMjIExpc3QgRXhhbXBsZVxyXG4gKlxyXG4gKiBUaGlzIGBuZ0ZvcmAgZXhhbXBsZTpcclxuICpcclxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9zbGljZV9waXBlLnRzIHJlZ2lvbj0nU2xpY2VQaXBlX2xpc3QnfVxyXG4gKlxyXG4gKiBwcm9kdWNlcyB0aGUgZm9sbG93aW5nOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxsaT5iPC9saT5cclxuICogPGxpPmM8L2xpPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFN0cmluZyBFeGFtcGxlc1xyXG4gKlxyXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL3NsaWNlX3BpcGUudHMgcmVnaW9uPSdTbGljZVBpcGVfc3RyaW5nJ31cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xpY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBhIGxpc3Qgb3IgYSBzdHJpbmcgdG8gYmUgc2xpY2VkLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IHRoZSBzdGFydGluZyBpbmRleCBvZiB0aGUgc3Vic2V0IHRvIHJldHVybjpcclxuICAgICAqICAgLSAqKmEgcG9zaXRpdmUgaW50ZWdlcioqOiByZXR1cm4gdGhlIGl0ZW0gYXQgYHN0YXJ0YCBpbmRleCBhbmQgYWxsIGl0ZW1zIGFmdGVyXHJcbiAgICAgKiAgICAgaW4gdGhlIGxpc3Qgb3Igc3RyaW5nIGV4cHJlc3Npb24uXHJcbiAgICAgKiAgIC0gKiphIG5lZ2F0aXZlIGludGVnZXIqKjogcmV0dXJuIHRoZSBpdGVtIGF0IGBzdGFydGAgaW5kZXggZnJvbSB0aGUgZW5kIGFuZCBhbGwgaXRlbXMgYWZ0ZXJcclxuICAgICAqICAgICBpbiB0aGUgbGlzdCBvciBzdHJpbmcgZXhwcmVzc2lvbi5cclxuICAgICAqICAgLSAqKmlmIHBvc2l0aXZlIGFuZCBncmVhdGVyIHRoYW4gdGhlIHNpemUgb2YgdGhlIGV4cHJlc3Npb24qKjogcmV0dXJuIGFuIGVtcHR5IGxpc3Qgb3JcclxuICAgICAqIHN0cmluZy5cclxuICAgICAqICAgLSAqKmlmIG5lZ2F0aXZlIGFuZCBncmVhdGVyIHRoYW4gdGhlIHNpemUgb2YgdGhlIGV4cHJlc3Npb24qKjogcmV0dXJuIGVudGlyZSBsaXN0IG9yIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSBlbmQgdGhlIGVuZGluZyBpbmRleCBvZiB0aGUgc3Vic2V0IHRvIHJldHVybjpcclxuICAgICAqICAgLSAqKm9taXR0ZWQqKjogcmV0dXJuIGFsbCBpdGVtcyB1bnRpbCB0aGUgZW5kLlxyXG4gICAgICogICAtICoqaWYgcG9zaXRpdmUqKjogcmV0dXJuIGFsbCBpdGVtcyBiZWZvcmUgYGVuZGAgaW5kZXggb2YgdGhlIGxpc3Qgb3Igc3RyaW5nLlxyXG4gICAgICogICAtICoqaWYgbmVnYXRpdmUqKjogcmV0dXJuIGFsbCBpdGVtcyBiZWZvcmUgYGVuZGAgaW5kZXggZnJvbSB0aGUgZW5kIG9mIHRoZSBsaXN0IG9yIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtPFQ+KHZhbHVlOiBSZWFkb25seUFycmF5PFQ+LCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpOiBBcnJheTxUPjtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpOiBzdHJpbmc7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bGwsIHN0YXJ0OiBudW1iZXIsIGVuZD86IG51bWJlcik6IG51bGw7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHVuZGVmaW5lZCwgc3RhcnQ6IG51bWJlciwgZW5kPzogbnVtYmVyKTogdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzdXBwb3J0cztcclxufVxyXG5cclxuZGVjbGFyZSBjbGFzcyBTd2l0Y2hWaWV3IHtcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY7XHJcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjtcclxuICAgIHByaXZhdGUgX2NyZWF0ZWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KTtcclxuICAgIGNyZWF0ZSgpOiB2b2lkO1xyXG4gICAgZGVzdHJveSgpOiB2b2lkO1xyXG4gICAgZW5mb3JjZVN0YXRlKGNyZWF0ZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRpbWUgdmFsdWUgd2l0aCBob3VycyBhbmQgbWludXRlcy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBUaW1lID0ge1xyXG4gICAgaG91cnM6IG51bWJlcjtcclxuICAgIG1pbnV0ZXM6IG51bWJlcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRleHQgdG8gdGl0bGUgY2FzZS5cclxuICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQsIGFuZCB0cmFuc2Zvcm1zIHRoZVxyXG4gKiByZXN0IG9mIHRoZSB3b3JkIHRvIGxvd2VyIGNhc2UuXHJcbiAqIFdvcmRzIGFyZSBkZWxpbWl0ZWQgYnkgYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVyLCBzdWNoIGFzIGEgc3BhY2UsIHRhYiwgb3IgbGluZS1mZWVkIGNoYXJhY3Rlci5cclxuICpcclxuICogQHNlZSBgTG93ZXJDYXNlUGlwZWBcclxuICogQHNlZSBgVXBwZXJDYXNlUGlwZWBcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIHRoZSByZXN1bHQgb2YgdHJhbnNmb3JtaW5nIHZhcmlvdXMgc3RyaW5ncyBpbnRvIHRpdGxlIGNhc2UuXHJcbiAqXHJcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy90aXRsZWNhc2VfcGlwZS50c1wiIHJlZ2lvbj0nVGl0bGVDYXNlUGlwZSc+PC9jb2RlLWV4YW1wbGU+XHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGl0bGVDYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB0byB0cmFuc2Zvcm0gdG8gdGl0bGUgY2FzZS5cclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdHJpbmcgd2lkdGhzIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxyXG4gKiBUaGUgc3BlY2lmaWMgY2hhcmFjdGVyIHdpZHRocyBhcmUgbG9jYWxlLXNwZWNpZmljLlxyXG4gKiBFeGFtcGxlcyBhcmUgZ2l2ZW4gZm9yIHRoZSB3b3JkIFwiU3VuZGF5XCIgaW4gRW5nbGlzaC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBUcmFuc2xhdGlvbldpZHRoIHtcclxuICAgIC8qKiAxIGNoYXJhY3RlciBmb3IgYGVuLVVTYC4gRm9yIGV4YW1wbGU6ICdTJyAqL1xyXG4gICAgTmFycm93ID0gMCxcclxuICAgIC8qKiAzIGNoYXJhY3RlcnMgZm9yIGBlbi1VU2AuIEZvciBleGFtcGxlOiAnU3VuJyAqL1xyXG4gICAgQWJicmV2aWF0ZWQgPSAxLFxyXG4gICAgLyoqIEZ1bGwgbGVuZ3RoIGZvciBgZW4tVVNgLiBGb3IgZXhhbXBsZTogXCJTdW5kYXlcIiAqL1xyXG4gICAgV2lkZSA9IDIsXHJcbiAgICAvKiogMiBjaGFyYWN0ZXJzIGZvciBgZW4tVVNgLCBGb3IgZXhhbXBsZTogXCJTdVwiICovXHJcbiAgICBTaG9ydCA9IDNcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGV4dCB0byBhbGwgdXBwZXIgY2FzZS5cclxuICogQHNlZSBgTG93ZXJDYXNlUGlwZWBcclxuICogQHNlZSBgVGl0bGVDYXNlUGlwZWBcclxuICpcclxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcHBlckNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHRvIHRyYW5zZm9ybSB0byB1cHBlciBjYXNlLlxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFZFUlNJT046IFZlcnNpb247XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIHNjcm9sbCBwb3NpdGlvbiBtYW5hZ2VyLiBJbXBsZW1lbnRlZCBieSBgQnJvd3NlclZpZXdwb3J0U2Nyb2xsZXJgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBWaWV3cG9ydFNjcm9sbGVyIHtcclxuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xyXG4gICAgc3RhdGljIMm1cHJvdjogbmV2ZXI7XHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgdGhlIHRvcCBvZmZzZXQgdXNlZCB3aGVuIHNjcm9sbGluZyB0byBhbiBhbmNob3IuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IEEgcG9zaXRpb24gaW4gc2NyZWVuIGNvb3JkaW5hdGVzIChhIHR1cGxlIHdpdGggeCBhbmQgeSB2YWx1ZXMpXHJcbiAgICAgKiBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdG9wIG9mZnNldCBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNldE9mZnNldChvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl0gfCAoKCkgPT4gW251bWJlciwgbnVtYmVyXSkpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxyXG4gICAgICogQHJldHVybnMgQSBwb3NpdGlvbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMgKGEgdHVwbGUgd2l0aCB4IGFuZCB5IHZhbHVlcykuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldFNjcm9sbFBvc2l0aW9uKCk6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvKipcclxuICAgICAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpZWQgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gQSBwb3NpdGlvbiBpbiBzY3JlZW4gY29vcmRpbmF0ZXMgKGEgdHVwbGUgd2l0aCB4IGFuZCB5IHZhbHVlcykuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNjcm9sbFRvUG9zaXRpb24ocG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGxzIHRvIGFuIGFuY2hvciBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGFuY2hvciBUaGUgSUQgb2YgdGhlIGFuY2hvciBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBzY3JvbGxUb0FuY2hvcihhbmNob3I6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGVzIGF1dG9tYXRpYyBzY3JvbGwgcmVzdG9yYXRpb24gcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIuXHJcbiAgICAgKiBTZWUgYWxzbyBbd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb25cclxuICAgICAqIGluZm9dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTUvMDkvaGlzdG9yeS1hcGktc2Nyb2xsLXJlc3RvcmF0aW9uKS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2V0SGlzdG9yeVNjcm9sbFJlc3RvcmF0aW9uKHNjcm9sbFJlc3RvcmF0aW9uOiAnYXV0bycgfCAnbWFudWFsJyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdmFsdWUgZm9yIGVhY2ggZGF5IG9mIHRoZSB3ZWVrLCBiYXNlZCBvbiB0aGUgYGVuLVVTYCBsb2NhbGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBXZWVrRGF5IHtcclxuICAgIFN1bmRheSA9IDAsXHJcbiAgICBNb25kYXkgPSAxLFxyXG4gICAgVHVlc2RheSA9IDIsXHJcbiAgICBXZWRuZXNkYXkgPSAzLFxyXG4gICAgVGh1cnNkYXkgPSA0LFxyXG4gICAgRnJpZGF5ID0gNSxcclxuICAgIFNhdHVyZGF5ID0gNlxyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9hKCk6IMm1QnJvd3NlclBsYXRmb3JtTG9jYXRpb247XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9iKCk6IMm1QnJvd3NlclBsYXRmb3JtTG9jYXRpb247XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfY29tbW9uX2NvbW1vbl9jKCk6IExvY2F0aW9uO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9jb21tb25fZChwbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uKTogUGF0aExvY2F0aW9uU3RyYXRlZ3k7XHJcblxyXG4vKipcclxuICogQSBjb2xsZWN0aW9uIG9mIEFuZ3VsYXIgZGlyZWN0aXZlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBlYWNoIGFuZCBldmVyeSBBbmd1bGFyXHJcbiAqIGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX2NvbW1vbl9jb21tb25fZTogUHJvdmlkZXJbXTtcclxuXHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgQW5ndWxhciBwaXBlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBlYWNoIGFuZCBldmVyeSBhcHBsaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1YW5ndWxhcl9wYWNrYWdlc19jb21tb25fY29tbW9uX2Y6ICh0eXBlb2YgQXN5bmNQaXBlIHwgdHlwZW9mIFNsaWNlUGlwZSB8IHR5cGVvZiBEZWNpbWFsUGlwZSB8IHR5cGVvZiBQZXJjZW50UGlwZSB8IHR5cGVvZiBDdXJyZW5jeVBpcGUgfCB0eXBlb2YgRGF0ZVBpcGUgfCB0eXBlb2YgSTE4blBsdXJhbFBpcGUgfCB0eXBlb2YgSTE4blNlbGVjdFBpcGUgfCB0eXBlb2YgS2V5VmFsdWVQaXBlKVtdO1xyXG5cclxuLyoqXHJcbiAqIGBQbGF0Zm9ybUxvY2F0aW9uYCBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSBkaXJlY3QgY2FsbHMgdG8gcGxhdGZvcm0gQVBJcy5cclxuICogVGhpcyBjbGFzcyBzaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgYnkgYW4gYXBwbGljYXRpb24gZGV2ZWxvcGVyLiBJbnN0ZWFkLCB1c2VcclxuICoge0BsaW5rIExvY2F0aW9ufS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1QnJvd3NlclBsYXRmb3JtTG9jYXRpb24gZXh0ZW5kcyBQbGF0Zm9ybUxvY2F0aW9uIHtcclxuICAgIHByaXZhdGUgX2RvYztcclxuICAgIHJlYWRvbmx5IGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICAgIHByaXZhdGUgX2hpc3Rvcnk7XHJcbiAgICBjb25zdHJ1Y3RvcihfZG9jOiBhbnkpO1xyXG4gICAgZ2V0QmFzZUhyZWZGcm9tRE9NKCk6IHN0cmluZztcclxuICAgIG9uUG9wU3RhdGUoZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xyXG4gICAgb25IYXNoQ2hhbmdlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcclxuICAgIGdldCBocmVmKCk6IHN0cmluZztcclxuICAgIGdldCBwcm90b2NvbCgpOiBzdHJpbmc7XHJcbiAgICBnZXQgaG9zdG5hbWUoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHBvcnQoKTogc3RyaW5nO1xyXG4gICAgZ2V0IHBhdGhuYW1lKCk6IHN0cmluZztcclxuICAgIGdldCBzZWFyY2goKTogc3RyaW5nO1xyXG4gICAgZ2V0IGhhc2goKTogc3RyaW5nO1xyXG4gICAgc2V0IHBhdGhuYW1lKG5ld1BhdGg6IHN0cmluZyk7XHJcbiAgICBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZDtcclxuICAgIGZvcndhcmQoKTogdm9pZDtcclxuICAgIGJhY2soKTogdm9pZDtcclxuICAgIGdldFN0YXRlKCk6IHVua25vd247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBET00gb3BlcmF0aW9ucyBpbiBhbiBlbnZpcm9ubWVudC1hZ25vc3RpYyB3YXkuXHJcbiAqXHJcbiAqIEBzZWN1cml0eSBUcmVhZCBjYXJlZnVsbHkhIEludGVyYWN0aW5nIHdpdGggdGhlIERPTSBkaXJlY3RseSBpcyBkYW5nZXJvdXMgYW5kXHJcbiAqIGNhbiBpbnRyb2R1Y2UgWFNTIHJpc2tzLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgybVEb21BZGFwdGVyIHtcclxuICAgIGFic3RyYWN0IGdldFByb3BlcnR5KGVsOiBFbGVtZW50LCBuYW1lOiBzdHJpbmcpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBkaXNwYXRjaEV2ZW50KGVsOiBhbnksIGV2dDogYW55KTogYW55O1xyXG4gICAgYWJzdHJhY3QgbG9nKGVycm9yOiBhbnkpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBsb2dHcm91cChlcnJvcjogYW55KTogYW55O1xyXG4gICAgYWJzdHJhY3QgbG9nR3JvdXBFbmQoKTogYW55O1xyXG4gICAgYWJzdHJhY3QgcmVtb3ZlKGVsOiBhbnkpOiBOb2RlO1xyXG4gICAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudCh0YWdOYW1lOiBhbnksIGRvYz86IGFueSk6IEhUTUxFbGVtZW50O1xyXG4gICAgYWJzdHJhY3QgY3JlYXRlSHRtbERvY3VtZW50KCk6IEhUTUxEb2N1bWVudDtcclxuICAgIGFic3RyYWN0IGdldERlZmF1bHREb2N1bWVudCgpOiBEb2N1bWVudDtcclxuICAgIGFic3RyYWN0IGlzRWxlbWVudE5vZGUobm9kZTogYW55KTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IGlzU2hhZG93Um9vdChub2RlOiBhbnkpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3Qgb25BbmRDYW5jZWwoZWw6IGFueSwgZXZ0OiBhbnksIGxpc3RlbmVyOiBhbnkpOiBGdW5jdGlvbjtcclxuICAgIGFic3RyYWN0IHN1cHBvcnRzRE9NRXZlbnRzKCk6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBnZXRHbG9iYWxFdmVudFRhcmdldChkb2M6IERvY3VtZW50LCB0YXJnZXQ6IHN0cmluZyk6IGFueTtcclxuICAgIGFic3RyYWN0IGdldEhpc3RvcnkoKTogSGlzdG9yeTtcclxuICAgIGFic3RyYWN0IGdldExvY2F0aW9uKCk6IGFueTsgLyoqIFRoaXMgaXMgdGhlIGFtYmllbnQgTG9jYXRpb24gZGVmaW5pdGlvbiwgTk9UIExvY2F0aW9uIGZyb20gQGFuZ3VsYXIvY29tbW9uLiAgKi9cclxuICAgIGFic3RyYWN0IGdldEJhc2VIcmVmKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYWJzdHJhY3QgcmVzZXRCYXNlRWxlbWVudCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgZ2V0VXNlckFnZW50KCk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IHBlcmZvcm1hbmNlTm93KCk6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IHN1cHBvcnRzQ29va2llcygpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWdldERPTSgpOiDJtURvbUFkYXB0ZXI7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYW4gZW1wdHkgaW1wbGVtZW50YXRpb24gb2YgdGhlIHZpZXdwb3J0IHNjcm9sbGVyLiBUaGlzIHdpbGxcclxuICogbGl2ZSBpbiBAYW5ndWxhci9jb21tb24gYXMgaXQgd2lsbCBiZSB1c2VkIGJ5IGJvdGggcGxhdGZvcm0tc2VydmVyIGFuZCBwbGF0Zm9ybS13ZWJ3b3JrZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtU51bGxWaWV3cG9ydFNjcm9sbGVyIGltcGxlbWVudHMgVmlld3BvcnRTY3JvbGxlciB7XHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHNldE9mZnNldChvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl0gfCAoKCkgPT4gW251bWJlciwgbnVtYmVyXSkpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbXB0eSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBnZXRTY3JvbGxQb3NpdGlvbigpOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbXB0eSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUb1Bvc2l0aW9uKHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogRW1wdHkgaW1wbGVtZW50YXRpb25cclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9yOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbXB0eSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICovXHJcbiAgICBzZXRIaXN0b3J5U2Nyb2xsUmVzdG9yYXRpb24oc2Nyb2xsUmVzdG9yYXRpb246ICdhdXRvJyB8ICdtYW51YWwnKTogdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1cGFyc2VDb29raWVWYWx1ZShjb29raWVTdHI6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtVBMQVRGT1JNX0JST1dTRVJfSUQgPSBcImJyb3dzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1UExBVEZPUk1fU0VSVkVSX0lEID0gXCJzZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1UExBVEZPUk1fV09SS0VSX0FQUF9JRCA9IFwiYnJvd3NlcldvcmtlckFwcFwiO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVQTEFURk9STV9XT1JLRVJfVUlfSUQgPSBcImJyb3dzZXJXb3JrZXJVaVwiO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVzZXRSb290RG9tQWRhcHRlcihhZGFwdGVyOiDJtURvbUFkYXB0ZXIpOiB2b2lkO1xyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=
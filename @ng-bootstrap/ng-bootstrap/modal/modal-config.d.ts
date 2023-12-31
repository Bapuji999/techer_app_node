import { Injector } from '@angular/core';
/**
 * Options available when opening new modal windows with `NgbModal.open()` method.
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbModalOptions {
    /**
     * `aria-labelledby` attribute value to set on the modal window.
     *
     * @since 2.2.0
     */
    ariaLabelledBy?: string;
    /**
     * If `true`, the backdrop element will be created for a given modal.
     *
     * Alternatively, specify `'static'` for a backdrop which doesn't close the modal on click.
     *
     * Default value is `true`.
     */
    backdrop?: boolean | 'static';
    /**
     * Callback right before the modal will be dismissed.
     *
     * If this function returns:
     * * `false`
     * * a promise resolved with `false`
     * * a promise that is rejected
     *
     * then the modal won't be dismissed.
     */
    beforeDismiss?: () => boolean | Promise<boolean>;
    /**
     * If `true`, the modal will be centered vertically.
     *
     * Default value is `false`.
     *
     * @since 1.1.0
     */
    centered?: boolean;
    /**
     * A selector specifying the element all new modal windows should be appended to.
     * Since v5.3.0 it is also possible to pass the reference to an `HTMLElement`.
     *
     * If not specified, will be `body`.
     */
    container?: string | HTMLElement;
    /**
     * The `Injector` to use for modal content.
     */
    injector?: Injector;
    /**
     * If `true`, the modal will be closed when `Escape` key is pressed
     *
     * Default value is `true`.
     */
    keyboard?: boolean;
    /**
     * Scrollable modal content (false by default).
     *
     * @since 5.0.0
     */
    scrollable?: boolean;
    /**
     * Size of a new modal window.
     */
    size?: 'sm' | 'lg' | 'xl' | string;
    /**
     * A custom class to append to the modal window.
     */
    windowClass?: string;
    /**
     * A custom class to append to the modal backdrop.
     *
     * @since 1.1.0
     */
    backdropClass?: string;
}
/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
*
* @since 3.1.0
*/
export declare class NgbModalConfig implements Required<NgbModalOptions> {
    ariaLabelledBy: string;
    backdrop: boolean | 'static';
    beforeDismiss: () => boolean | Promise<boolean>;
    centered: boolean;
    container: string;
    injector: Injector;
    keyboard: boolean;
    scrollable: boolean;
    size: 'sm' | 'lg' | 'xl' | string;
    windowClass: string;
    backdropClass: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbModalConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbIm1vZGFsLWNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBPcHRpb25zIGF2YWlsYWJsZSB3aGVuIG9wZW5pbmcgbmV3IG1vZGFsIHdpbmRvd3Mgd2l0aCBgTmdiTW9kYWwub3BlbigpYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiTW9kYWxPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBtb2RhbCB3aW5kb3cuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMi4yLjBcbiAgICAgKi9cbiAgICBhcmlhTGFiZWxsZWRCeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCBmb3IgYSBnaXZlbiBtb2RhbC5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHNwZWNpZnkgYCdzdGF0aWMnYCBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICAgKlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgLlxuICAgICAqL1xuICAgIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHJpZ2h0IGJlZm9yZSB0aGUgbW9kYWwgd2lsbCBiZSBkaXNtaXNzZWQuXG4gICAgICpcbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnM6XG4gICAgICogKiBgZmFsc2VgXG4gICAgICogKiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBgZmFsc2VgXG4gICAgICogKiBhIHByb21pc2UgdGhhdCBpcyByZWplY3RlZFxuICAgICAqXG4gICAgICogdGhlbiB0aGUgbW9kYWwgd29uJ3QgYmUgZGlzbWlzc2VkLlxuICAgICAqL1xuICAgIGJlZm9yZURpc21pc3M/OiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHkuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBjZW50ZXJlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IGFsbCBuZXcgbW9kYWwgd2luZG93cyBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICogU2luY2UgdjUuMy4wIGl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyB0aGUgcmVmZXJlbmNlIHRvIGFuIGBIVE1MRWxlbWVudGAuXG4gICAgICpcbiAgICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIGJlIGBib2R5YC5cbiAgICAgKi9cbiAgICBjb250YWluZXI/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBUaGUgYEluamVjdG9yYCB0byB1c2UgZm9yIG1vZGFsIGNvbnRlbnQuXG4gICAgICovXG4gICAgaW5qZWN0b3I/OiBJbmplY3RvcjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGNsb3NlZCB3aGVuIGBFc2NhcGVgIGtleSBpcyBwcmVzc2VkXG4gICAgICpcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICAgKi9cbiAgICBrZXlib2FyZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU2Nyb2xsYWJsZSBtb2RhbCBjb250ZW50IChmYWxzZSBieSBkZWZhdWx0KS5cbiAgICAgKlxuICAgICAqIEBzaW5jZSA1LjAuMFxuICAgICAqL1xuICAgIHNjcm9sbGFibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNpemUgb2YgYSBuZXcgbW9kYWwgd2luZG93LlxuICAgICAqL1xuICAgIHNpemU/OiAnc20nIHwgJ2xnJyB8ICd4bCcgfCBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYXBwZW5kIHRvIHRoZSBtb2RhbCB3aW5kb3cuXG4gICAgICovXG4gICAgd2luZG93Q2xhc3M/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYXBwZW5kIHRvIHRoZSBtb2RhbCBiYWNrZHJvcC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjEuMFxuICAgICAqL1xuICAgIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmc7XG59XG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JNb2RhbGBdKCMvY29tcG9uZW50cy9tb2RhbC9hcGkjTmdiTW9kYWwpIHNlcnZpY2UuXG4gKlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZSB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluXG4gKiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgbW9kYWxzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuKlxuKiBAc2luY2UgMy4xLjBcbiovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JNb2RhbENvbmZpZyBpbXBsZW1lbnRzIFJlcXVpcmVkPE5nYk1vZGFsT3B0aW9ucz4ge1xuICAgIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmc7XG4gICAgYmFja2Ryb3A6IGJvb2xlYW4gfCAnc3RhdGljJztcbiAgICBiZWZvcmVEaXNtaXNzOiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcbiAgICBjZW50ZXJlZDogYm9vbGVhbjtcbiAgICBjb250YWluZXI6IHN0cmluZztcbiAgICBpbmplY3RvcjogSW5qZWN0b3I7XG4gICAga2V5Ym9hcmQ6IGJvb2xlYW47XG4gICAgc2Nyb2xsYWJsZTogYm9vbGVhbjtcbiAgICBzaXplOiAnc20nIHwgJ2xnJyB8ICd4bCcgfCBzdHJpbmc7XG4gICAgd2luZG93Q2xhc3M6IHN0cmluZztcbiAgICBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XG59XG4iXX0=
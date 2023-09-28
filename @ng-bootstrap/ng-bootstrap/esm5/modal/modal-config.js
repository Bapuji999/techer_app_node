import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
*
* @since 3.1.0
*/
var NgbModalConfig = /** @class */ (function () {
    function NgbModalConfig() {
        this.backdrop = true;
        this.keyboard = true;
    }
    NgbModalConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(); }, token: NgbModalConfig, providedIn: "root" });
    NgbModalConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbModalConfig);
    return NgbModalConfig;
}());
export { NgbModalConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7O0FBd0ZuRDs7Ozs7OztFQU9FO0FBRUY7SUFBQTtRQUVFLGFBQVEsR0FBdUIsSUFBSSxDQUFDO1FBS3BDLGFBQVEsR0FBRyxJQUFJLENBQUM7S0FLakI7O0lBWlksY0FBYztRQUQxQixVQUFVLENBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLENBQUM7T0FDcEIsY0FBYyxDQVkxQjt5QkE3R0Q7Q0E2R0MsQUFaRCxJQVlDO1NBWlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIE9wdGlvbnMgYXZhaWxhYmxlIHdoZW4gb3BlbmluZyBuZXcgbW9kYWwgd2luZG93cyB3aXRoIGBOZ2JNb2RhbC5vcGVuKClgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JNb2RhbE9wdGlvbnMge1xuICAvKipcbiAgICogYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlIHZhbHVlIHRvIHNldCBvbiB0aGUgbW9kYWwgd2luZG93LlxuICAgKlxuICAgKiBAc2luY2UgMi4yLjBcbiAgICovXG4gIGFyaWFMYWJlbGxlZEJ5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCBmb3IgYSBnaXZlbiBtb2RhbC5cbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgc3BlY2lmeSBgJ3N0YXRpYydgIGZvciBhIGJhY2tkcm9wIHdoaWNoIGRvZXNuJ3QgY2xvc2UgdGhlIG1vZGFsIG9uIGNsaWNrLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayByaWdodCBiZWZvcmUgdGhlIG1vZGFsIHdpbGwgYmUgZGlzbWlzc2VkLlxuICAgKlxuICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnM6XG4gICAqICogYGZhbHNlYFxuICAgKiAqIGEgcHJvbWlzZSByZXNvbHZlZCB3aXRoIGBmYWxzZWBcbiAgICogKiBhIHByb21pc2UgdGhhdCBpcyByZWplY3RlZFxuICAgKlxuICAgKiB0aGVuIHRoZSBtb2RhbCB3b24ndCBiZSBkaXNtaXNzZWQuXG4gICAqL1xuICBiZWZvcmVEaXNtaXNzPzogKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgYmUgY2VudGVyZWQgdmVydGljYWxseS5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgKlxuICAgKiBAc2luY2UgMS4xLjBcbiAgICovXG4gIGNlbnRlcmVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IGFsbCBuZXcgbW9kYWwgd2luZG93cyBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIFNpbmNlIHY1LjMuMCBpdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgdGhlIHJlZmVyZW5jZSB0byBhbiBgSFRNTEVsZW1lbnRgLlxuICAgKlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIGJlIGBib2R5YC5cbiAgICovXG4gIGNvbnRhaW5lcj86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgYEluamVjdG9yYCB0byB1c2UgZm9yIG1vZGFsIGNvbnRlbnQuXG4gICAqL1xuICBpbmplY3Rvcj86IEluamVjdG9yO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGNsb3NlZCB3aGVuIGBFc2NhcGVgIGtleSBpcyBwcmVzc2VkXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgLlxuICAgKi9cbiAga2V5Ym9hcmQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTY3JvbGxhYmxlIG1vZGFsIGNvbnRlbnQgKGZhbHNlIGJ5IGRlZmF1bHQpLlxuICAgKlxuICAgKiBAc2luY2UgNS4wLjBcbiAgICovXG4gIHNjcm9sbGFibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIGEgbmV3IG1vZGFsIHdpbmRvdy5cbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ2xnJyB8ICd4bCcgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIGNsYXNzIHRvIGFwcGVuZCB0byB0aGUgbW9kYWwgd2luZG93LlxuICAgKi9cbiAgd2luZG93Q2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIGNsYXNzIHRvIGFwcGVuZCB0byB0aGUgbW9kYWwgYmFja2Ryb3AuXG4gICAqXG4gICAqIEBzaW5jZSAxLjEuMFxuICAgKi9cbiAgYmFja2Ryb3BDbGFzcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGNvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFtgTmdiTW9kYWxgXSgjL2NvbXBvbmVudHMvbW9kYWwvYXBpI05nYk1vZGFsKSBzZXJ2aWNlLlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpblxuICogb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIG1vZGFscyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbipcbiogQHNpbmNlIDMuMS4wXG4qL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTmdiTW9kYWxDb25maWcgaW1wbGVtZW50cyBSZXF1aXJlZDxOZ2JNb2RhbE9wdGlvbnM+IHtcbiAgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcbiAgYmFja2Ryb3A6IGJvb2xlYW4gfCAnc3RhdGljJyA9IHRydWU7XG4gIGJlZm9yZURpc21pc3M6ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xuICBjZW50ZXJlZDogYm9vbGVhbjtcbiAgY29udGFpbmVyOiBzdHJpbmc7XG4gIGluamVjdG9yOiBJbmplY3RvcjtcbiAga2V5Ym9hcmQgPSB0cnVlO1xuICBzY3JvbGxhYmxlOiBib29sZWFuO1xuICBzaXplOiAnc20nIHwgJ2xnJyB8ICd4bCcgfCBzdHJpbmc7XG4gIHdpbmRvd0NsYXNzOiBzdHJpbmc7XG4gIGJhY2tkcm9wQ2xhc3M6IHN0cmluZztcbn1cbiJdfQ==
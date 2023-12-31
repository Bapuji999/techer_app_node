import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ExistingProvider } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class PendingRequestsInterceptor implements HttpInterceptor {
    private _pendingRequests;
    private _pendingRequestsStatus$;
    private _filteredUrlPatterns;
    private _filteredMethods;
    private _filteredHeaders;
    private _forceByPass;
    get pendingRequestsStatus$(): Observable<boolean>;
    get pendingRequests(): number;
    get filteredUrlPatterns(): RegExp[];
    set filteredMethods(httpMethods: string[]);
    set filteredHeaders(value: string[]);
    set forceByPass(value: boolean);
    private shouldBypassUrl;
    private shouldBypassMethod;
    private shouldBypassHeader;
    private shouldBypass;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PendingRequestsInterceptor>;
}
export declare const PendingRequestsInterceptorProvider: ExistingProvider[];

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy1yZXF1ZXN0cy1pbnRlcmNlcHRvci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInBlbmRpbmctcmVxdWVzdHMtaW50ZXJjZXB0b3Iuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXhpc3RpbmdQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIHByaXZhdGUgX3BlbmRpbmdSZXF1ZXN0cztcbiAgICBwcml2YXRlIF9wZW5kaW5nUmVxdWVzdHNTdGF0dXMkO1xuICAgIHByaXZhdGUgX2ZpbHRlcmVkVXJsUGF0dGVybnM7XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRNZXRob2RzO1xuICAgIHByaXZhdGUgX2ZpbHRlcmVkSGVhZGVycztcbiAgICBwcml2YXRlIF9mb3JjZUJ5UGFzcztcbiAgICBnZXQgcGVuZGluZ1JlcXVlc3RzU3RhdHVzJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGdldCBwZW5kaW5nUmVxdWVzdHMoKTogbnVtYmVyO1xuICAgIGdldCBmaWx0ZXJlZFVybFBhdHRlcm5zKCk6IFJlZ0V4cFtdO1xuICAgIHNldCBmaWx0ZXJlZE1ldGhvZHMoaHR0cE1ldGhvZHM6IHN0cmluZ1tdKTtcbiAgICBzZXQgZmlsdGVyZWRIZWFkZXJzKHZhbHVlOiBzdHJpbmdbXSk7XG4gICAgc2V0IGZvcmNlQnlQYXNzKHZhbHVlOiBib29sZWFuKTtcbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzc1VybDtcbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzc01ldGhvZDtcbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzc0hlYWRlcjtcbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzcztcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgUGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3JQcm92aWRlcjogRXhpc3RpbmdQcm92aWRlcltdO1xuIl19
import { __decorate } from "tslib";
/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
let PendingRequestsInterceptor = class PendingRequestsInterceptor {
    constructor() {
        this._pendingRequests = 0;
        this._pendingRequestsStatus$ = new ReplaySubject(1);
        this._filteredUrlPatterns = [];
        this._filteredMethods = [];
        this._filteredHeaders = [];
    }
    get pendingRequestsStatus$() {
        return this._pendingRequestsStatus$.asObservable();
    }
    get pendingRequests() {
        return this._pendingRequests;
    }
    get filteredUrlPatterns() {
        return this._filteredUrlPatterns;
    }
    set filteredMethods(httpMethods) {
        this._filteredMethods = httpMethods;
    }
    set filteredHeaders(value) {
        this._filteredHeaders = value;
    }
    set forceByPass(value) {
        this._forceByPass = value;
    }
    shouldBypassUrl(url) {
        return this._filteredUrlPatterns.some(e => {
            return e.test(url);
        });
    }
    shouldBypassMethod(req) {
        return this._filteredMethods.some(e => {
            return e.toUpperCase() === req.method.toUpperCase();
        });
    }
    shouldBypassHeader(req) {
        return this._filteredHeaders.some(e => {
            return req.headers.has(e);
        });
    }
    shouldBypass(req) {
        return this._forceByPass
            || this.shouldBypassUrl(req.urlWithParams)
            || this.shouldBypassMethod(req)
            || this.shouldBypassHeader(req);
    }
    intercept(req, next) {
        const shouldBypass = this.shouldBypass(req);
        if (!shouldBypass) {
            this._pendingRequests++;
            if (1 === this._pendingRequests) {
                this._pendingRequestsStatus$.next(true);
            }
        }
        return next.handle(req).pipe(finalize(() => {
            if (!shouldBypass) {
                this._pendingRequests--;
                if (0 === this._pendingRequests) {
                    this._pendingRequestsStatus$.next(false);
                }
            }
        }));
    }
};
PendingRequestsInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function PendingRequestsInterceptor_Factory() { return new PendingRequestsInterceptor(); }, token: PendingRequestsInterceptor, providedIn: "root" });
PendingRequestsInterceptor = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PendingRequestsInterceptor);
export { PendingRequestsInterceptor };
export const PendingRequestsInterceptorProvider = [{
        provide: HTTP_INTERCEPTORS,
        useExisting: PendingRequestsInterceptor,
        multi: true
    }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy1yZXF1ZXN0cy1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaHR0cC1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcGVuZGluZy1yZXF1ZXN0cy1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztHQU9HO0FBRUgsT0FBTyxFQUFFLGlCQUFpQixFQUF3RCxNQUFNLHNCQUFzQixDQUFDO0FBQy9HLE9BQU8sRUFBb0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUsxQyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUF2QztRQUVZLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQiw0QkFBdUIsR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUN4RCx5QkFBb0IsR0FBYSxFQUFFLENBQUM7UUFDcEMscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztLQTJFM0M7SUF4RUcsSUFBSSxzQkFBc0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxlQUFlLENBQUMsV0FBcUI7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxlQUFlLENBQUMsS0FBZTtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTyxlQUFlLENBQUMsR0FBVztRQUMvQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEdBQXFCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEdBQXFCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLFlBQVksQ0FBQyxHQUFxQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxZQUFZO2VBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztlQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDO2VBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDckQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFeEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUN4QixRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFFeEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUM3QixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QzthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBOztBQWpGWSwwQkFBMEI7SUFIdEMsVUFBVSxDQUFDO1FBQ1IsVUFBVSxFQUFFLE1BQU07S0FDckIsQ0FBQztHQUNXLDBCQUEwQixDQWlGdEM7U0FqRlksMEJBQTBCO0FBbUZ2QyxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBdUIsQ0FBQztRQUNuRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsS0FBSyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEV4aXN0aW5nUHJvdmlkZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIHByaXZhdGUgX3BlbmRpbmdSZXF1ZXN0cyA9IDA7XG4gICAgcHJpdmF0ZSBfcGVuZGluZ1JlcXVlc3RzU3RhdHVzJCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICAgIHByaXZhdGUgX2ZpbHRlcmVkVXJsUGF0dGVybnM6IFJlZ0V4cFtdID0gW107XG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRNZXRob2RzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpbHRlcmVkSGVhZGVyczogc3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIF9mb3JjZUJ5UGFzczogYm9vbGVhbjtcblxuICAgIGdldCBwZW5kaW5nUmVxdWVzdHNTdGF0dXMkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVuZGluZ1JlcXVlc3RzU3RhdHVzJC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBnZXQgcGVuZGluZ1JlcXVlc3RzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZW5kaW5nUmVxdWVzdHM7XG4gICAgfVxuXG4gICAgZ2V0IGZpbHRlcmVkVXJsUGF0dGVybnMoKTogUmVnRXhwW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRVcmxQYXR0ZXJucztcbiAgICB9XG5cbiAgICBzZXQgZmlsdGVyZWRNZXRob2RzKGh0dHBNZXRob2RzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZE1ldGhvZHMgPSBodHRwTWV0aG9kcztcbiAgICB9XG5cbiAgICBzZXQgZmlsdGVyZWRIZWFkZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZEhlYWRlcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZm9yY2VCeVBhc3ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZm9yY2VCeVBhc3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRVcmxQYXR0ZXJucy5zb21lKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUudGVzdCh1cmwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzc01ldGhvZChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkTWV0aG9kcy5zb21lKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUudG9VcHBlckNhc2UoKSA9PT0gcmVxLm1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZEJ5cGFzc0hlYWRlcihyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSGVhZGVycy5zb21lKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcS5oZWFkZXJzLmhhcyhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG91bGRCeXBhc3MocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JjZUJ5UGFzc1xuICAgICAgICAgICAgfHwgdGhpcy5zaG91bGRCeXBhc3NVcmwocmVxLnVybFdpdGhQYXJhbXMpXG4gICAgICAgICAgICB8fCB0aGlzLnNob3VsZEJ5cGFzc01ldGhvZChyZXEpXG4gICAgICAgICAgICB8fCB0aGlzLnNob3VsZEJ5cGFzc0hlYWRlcihyZXEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQnlwYXNzID0gdGhpcy5zaG91bGRCeXBhc3MocmVxKTtcblxuICAgICAgICBpZiAoIXNob3VsZEJ5cGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzKys7XG5cbiAgICAgICAgICAgIGlmICgxID09PSB0aGlzLl9wZW5kaW5nUmVxdWVzdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nUmVxdWVzdHNTdGF0dXMkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxuICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc2hvdWxkQnlwYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0cy0tO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09PSB0aGlzLl9wZW5kaW5nUmVxdWVzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0c1N0YXR1cyQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yUHJvdmlkZXI6IEV4aXN0aW5nUHJvdmlkZXJbXSA9IFt7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IFBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlXG59XTtcbiJdfQ==
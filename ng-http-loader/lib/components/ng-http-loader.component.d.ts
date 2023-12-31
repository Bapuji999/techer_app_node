import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PendingRequestsInterceptor } from '../services/pending-requests-interceptor.service';
import { SpinnerVisibilityService } from '../services/spinner-visibility.service';
import * as ɵngcc0 from '@angular/core';
export declare class NgHttpLoaderComponent implements OnInit {
    private pendingRequestsInterceptor;
    private spinnerVisibility;
    spinkit: {
        skChasingDots: string;
        skCubeGrid: string;
        skDoubleBounce: string;
        skRotatingPlane: string;
        skSpinnerPulse: string;
        skThreeBounce: string;
        skWanderingCubes: string;
        skWave: string;
    };
    isVisible$: Observable<boolean>;
    private visibleUntil;
    backdrop: boolean;
    backgroundColor: string;
    debounceDelay: number;
    entryComponent: any;
    extraDuration: number;
    filteredHeaders: string[];
    filteredMethods: string[];
    filteredUrlPatterns: string[];
    minDuration: number;
    opacity: string;
    spinner: string;
    constructor(pendingRequestsInterceptor: PendingRequestsInterceptor, spinnerVisibility: SpinnerVisibilityService);
    private initIsvisibleObservable;
    ngOnInit(): void;
    private nullifySpinnerIfEntryComponentIsDefined;
    private initFilters;
    private initFilteredUrlPatterns;
    private initFilteredMethods;
    private initFilteredHeaders;
    private updateExpirationDelay;
    private getVisibilityTimer$;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgHttpLoaderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgHttpLoaderComponent, "ng-http-loader", never, {
    "backdrop": "backdrop";
    "debounceDelay": "debounceDelay";
    "entryComponent": "entryComponent";
    "extraDuration": "extraDuration";
    "filteredHeaders": "filteredHeaders";
    "filteredMethods": "filteredMethods";
    "filteredUrlPatterns": "filteredUrlPatterns";
    "minDuration": "minDuration";
    "opacity": "opacity";
    "spinner": "spinner";
    "backgroundColor": "backgroundColor";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaHR0cC1sb2FkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm5nLWh0dHAtbG9hZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9zZXJ2aWNlcy9wZW5kaW5nLXJlcXVlc3RzLWludGVyY2VwdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Bpbm5lclZpc2liaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3Bpbm5lci12aXNpYmlsaXR5LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdIdHRwTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yO1xuICAgIHByaXZhdGUgc3Bpbm5lclZpc2liaWxpdHk7XG4gICAgc3BpbmtpdDoge1xuICAgICAgICBza0NoYXNpbmdEb3RzOiBzdHJpbmc7XG4gICAgICAgIHNrQ3ViZUdyaWQ6IHN0cmluZztcbiAgICAgICAgc2tEb3VibGVCb3VuY2U6IHN0cmluZztcbiAgICAgICAgc2tSb3RhdGluZ1BsYW5lOiBzdHJpbmc7XG4gICAgICAgIHNrU3Bpbm5lclB1bHNlOiBzdHJpbmc7XG4gICAgICAgIHNrVGhyZWVCb3VuY2U6IHN0cmluZztcbiAgICAgICAgc2tXYW5kZXJpbmdDdWJlczogc3RyaW5nO1xuICAgICAgICBza1dhdmU6IHN0cmluZztcbiAgICB9O1xuICAgIGlzVmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSB2aXNpYmxlVW50aWw7XG4gICAgYmFja2Ryb3A6IGJvb2xlYW47XG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgZGVib3VuY2VEZWxheTogbnVtYmVyO1xuICAgIGVudHJ5Q29tcG9uZW50OiBhbnk7XG4gICAgZXh0cmFEdXJhdGlvbjogbnVtYmVyO1xuICAgIGZpbHRlcmVkSGVhZGVyczogc3RyaW5nW107XG4gICAgZmlsdGVyZWRNZXRob2RzOiBzdHJpbmdbXTtcbiAgICBmaWx0ZXJlZFVybFBhdHRlcm5zOiBzdHJpbmdbXTtcbiAgICBtaW5EdXJhdGlvbjogbnVtYmVyO1xuICAgIG9wYWNpdHk6IHN0cmluZztcbiAgICBzcGlubmVyOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocGVuZGluZ1JlcXVlc3RzSW50ZXJjZXB0b3I6IFBlbmRpbmdSZXF1ZXN0c0ludGVyY2VwdG9yLCBzcGlubmVyVmlzaWJpbGl0eTogU3Bpbm5lclZpc2liaWxpdHlTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGluaXRJc3Zpc2libGVPYnNlcnZhYmxlO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBudWxsaWZ5U3Bpbm5lcklmRW50cnlDb21wb25lbnRJc0RlZmluZWQ7XG4gICAgcHJpdmF0ZSBpbml0RmlsdGVycztcbiAgICBwcml2YXRlIGluaXRGaWx0ZXJlZFVybFBhdHRlcm5zO1xuICAgIHByaXZhdGUgaW5pdEZpbHRlcmVkTWV0aG9kcztcbiAgICBwcml2YXRlIGluaXRGaWx0ZXJlZEhlYWRlcnM7XG4gICAgcHJpdmF0ZSB1cGRhdGVFeHBpcmF0aW9uRGVsYXk7XG4gICAgcHJpdmF0ZSBnZXRWaXNpYmlsaXR5VGltZXIkO1xufVxuIl19
import { EventEmitter, OnInit, OnDestroy, Injector, Renderer2, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver, NgZone, ChangeDetectorRef, ApplicationRef, OnChanges, SimpleChanges } from '@angular/core';
import { PlacementArray } from '../util/positioning';
import { NgbTooltipConfig } from './tooltip-config';
import * as ɵngcc0 from '@angular/core';
export declare class NgbTooltipWindow {
    id: string;
    tooltipClass: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTooltipWindow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbTooltipWindow, "ngb-tooltip-window", never, {
    "id": "id";
    "tooltipClass": "tooltipClass";
}, {}, never>;
}
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */
export declare class NgbTooltip implements OnInit, OnDestroy, OnChanges {
    private _elementRef;
    private _renderer;
    private _ngZone;
    private _document;
    private _changeDetector;
    static ngAcceptInputType_autoClose: boolean | string;
    /**
     * Indicates whether the tooltip should be closed on `Escape` key and inside/outside clicks:
     *
     * * `true` - closes on both outside and inside clicks as well as `Escape` presses
     * * `false` - disables the autoClose feature (NB: triggers still apply)
     * * `"inside"` - closes on inside clicks as well as Escape presses
     * * `"outside"` - closes on outside clicks (sometimes also achievable through triggers)
     * as well as `Escape` presses
     *
     * @since 3.0.0
     */
    autoClose: boolean | 'inside' | 'outside';
    /**
     * The preferred placement of the tooltip.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"auto"` (same as the sequence above).
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    placement: PlacementArray;
    /**
     * Specifies events that should trigger the tooltip.
     *
     * Supports a space separated list of event names.
     * For more details see the [triggers demo](#/components/tooltip/examples#triggers).
     */
    triggers: string;
    /**
     * A selector specifying the element the tooltip should be appended to.
     *
     * Currently only supports `"body"`.
     */
    container: string;
    /**
     * If `true`, tooltip is disabled and won't be displayed.
     *
     * @since 1.1.0
     */
    disableTooltip: boolean;
    /**
     * An optional class applied to the tooltip window element.
     *
     * @since 3.2.0
     */
    tooltipClass: string;
    /**
     * The opening delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
     *
     * @since 4.1.0
     */
    openDelay: number;
    /**
     * The closing delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
     *
     * @since 4.1.0
     */
    closeDelay: number;
    /**
     * An event emitted when the tooltip is shown. Contains no payload.
     */
    shown: EventEmitter<any>;
    /**
     * An event emitted when the popover is hidden. Contains no payload.
     */
    hidden: EventEmitter<any>;
    private _ngbTooltip;
    private _ngbTooltipWindowId;
    private _popupService;
    private _windowRef;
    private _unregisterListenersFn;
    private _zoneSubscription;
    constructor(_elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, config: NgbTooltipConfig, _ngZone: NgZone, _document: any, _changeDetector: ChangeDetectorRef, applicationRef: ApplicationRef);
    /**
     * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
     *
     * If the content if falsy, the tooltip won't open.
     */
    set ngbTooltip(value: string | TemplateRef<any>);
    get ngbTooltip(): string | TemplateRef<any>;
    /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     */
    open(context?: any): void;
    /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    close(): void;
    /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    toggle(): void;
    /**
     * Returns `true`, if the popover is currently shown.
     */
    isOpen(): boolean;
    ngOnInit(): void;
    ngOnChanges({ tooltipClass }: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTooltip>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTooltip, "[ngbTooltip]", ["ngbTooltip"], {
    "autoClose": "autoClose";
    "placement": "placement";
    "triggers": "triggers";
    "container": "container";
    "disableTooltip": "disableTooltip";
    "tooltipClass": "tooltipClass";
    "openDelay": "openDelay";
    "closeDelay": "closeDelay";
    "ngbTooltip": "ngbTooltip";
}, {
    "shown": "shown";
    "hidden": "hidden";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kLnRzIiwic291cmNlcyI6WyJ0b29sdGlwLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSEEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3RvciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmLCBBcHBsaWNhdGlvblJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnRBcnJheSB9IGZyb20gJy4uL3V0aWwvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgTmdiVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiVG9vbHRpcFdpbmRvdyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0b29sdGlwQ2xhc3M6IHN0cmluZztcbn1cbi8qKlxuICogQSBsaWdodHdlaWdodCBhbmQgZXh0ZW5zaWJsZSBkaXJlY3RpdmUgZm9yIGZhbmN5IHRvb2x0aXAgY3JlYXRpb24uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRvb2x0aXAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyO1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0Nsb3NlOiBib29sZWFuIHwgc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB0b29sdGlwIHNob3VsZCBiZSBjbG9zZWQgb24gYEVzY2FwZWAga2V5IGFuZCBpbnNpZGUvb3V0c2lkZSBjbGlja3M6XG4gICAgICpcbiAgICAgKiAqIGB0cnVlYCAtIGNsb3NlcyBvbiBib3RoIG91dHNpZGUgYW5kIGluc2lkZSBjbGlja3MgYXMgd2VsbCBhcyBgRXNjYXBlYCBwcmVzc2VzXG4gICAgICogKiBgZmFsc2VgIC0gZGlzYWJsZXMgdGhlIGF1dG9DbG9zZSBmZWF0dXJlIChOQjogdHJpZ2dlcnMgc3RpbGwgYXBwbHkpXG4gICAgICogKiBgXCJpbnNpZGVcImAgLSBjbG9zZXMgb24gaW5zaWRlIGNsaWNrcyBhcyB3ZWxsIGFzIEVzY2FwZSBwcmVzc2VzXG4gICAgICogKiBgXCJvdXRzaWRlXCJgIC0gY2xvc2VzIG9uIG91dHNpZGUgY2xpY2tzIChzb21ldGltZXMgYWxzbyBhY2hpZXZhYmxlIHRocm91Z2ggdHJpZ2dlcnMpXG4gICAgICogYXMgd2VsbCBhcyBgRXNjYXBlYCBwcmVzc2VzXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4wLjBcbiAgICAgKi9cbiAgICBhdXRvQ2xvc2U6IGJvb2xlYW4gfCAnaW5zaWRlJyB8ICdvdXRzaWRlJztcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkIHBsYWNlbWVudCBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYFwidG9wXCJgLCBgXCJ0b3AtbGVmdFwiYCwgYFwidG9wLXJpZ2h0XCJgLCBgXCJib3R0b21cImAsIGBcImJvdHRvbS1sZWZ0XCJgLFxuICAgICAqIGBcImJvdHRvbS1yaWdodFwiYCwgYFwibGVmdFwiYCwgYFwibGVmdC10b3BcImAsIGBcImxlZnQtYm90dG9tXCJgLCBgXCJyaWdodFwiYCwgYFwicmlnaHQtdG9wXCJgLFxuICAgICAqIGBcInJpZ2h0LWJvdHRvbVwiYFxuICAgICAqXG4gICAgICogQWNjZXB0cyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc3RyaW5nIHdpdGggc3BhY2Ugc2VwYXJhdGVkIHBvc3NpYmxlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IG9yZGVyIG9mIHByZWZlcmVuY2UgaXMgYFwiYXV0b1wiYCAoc2FtZSBhcyB0aGUgc2VxdWVuY2UgYWJvdmUpLlxuICAgICAqXG4gICAgICogUGxlYXNlIHNlZSB0aGUgW3Bvc2l0aW9uaW5nIG92ZXJ2aWV3XSgjL3Bvc2l0aW9uaW5nKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBldmVudCBuYW1lcy5cbiAgICAgKiBGb3IgbW9yZSBkZXRhaWxzIHNlZSB0aGUgW3RyaWdnZXJzIGRlbW9dKCMvY29tcG9uZW50cy90b29sdGlwL2V4YW1wbGVzI3RyaWdnZXJzKS5cbiAgICAgKi9cbiAgICB0cmlnZ2Vyczogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdG9vbHRpcCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICpcbiAgICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBgXCJib2R5XCJgLlxuICAgICAqL1xuICAgIGNvbnRhaW5lcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdG9vbHRpcCBpcyBkaXNhYmxlZCBhbmQgd29uJ3QgYmUgZGlzcGxheWVkLlxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMS4wXG4gICAgICovXG4gICAgZGlzYWJsZVRvb2x0aXA6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgY2xhc3MgYXBwbGllZCB0byB0aGUgdG9vbHRpcCB3aW5kb3cgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjIuMFxuICAgICAqL1xuICAgIHRvb2x0aXBDbGFzczogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBvcGVuaW5nIGRlbGF5IGluIG1zLiBXb3JrcyBvbmx5IGZvciBcIm5vbi1tYW51YWxcIiBvcGVuaW5nIHRyaWdnZXJzIGRlZmluZWQgYnkgdGhlIGB0cmlnZ2Vyc2AgaW5wdXQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNC4xLjBcbiAgICAgKi9cbiAgICBvcGVuRGVsYXk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY2xvc2luZyBkZWxheSBpbiBtcy4gV29ya3Mgb25seSBmb3IgXCJub24tbWFudWFsXCIgb3BlbmluZyB0cmlnZ2VycyBkZWZpbmVkIGJ5IHRoZSBgdHJpZ2dlcnNgIGlucHV0LlxuICAgICAqXG4gICAgICogQHNpbmNlIDQuMS4wXG4gICAgICovXG4gICAgY2xvc2VEZWxheTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93bi4gQ29udGFpbnMgbm8gcGF5bG9hZC5cbiAgICAgKi9cbiAgICBzaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwb3BvdmVyIGlzIGhpZGRlbi4gQ29udGFpbnMgbm8gcGF5bG9hZC5cbiAgICAgKi9cbiAgICBoaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHByaXZhdGUgX25nYlRvb2x0aXA7XG4gICAgcHJpdmF0ZSBfbmdiVG9vbHRpcFdpbmRvd0lkO1xuICAgIHByaXZhdGUgX3BvcHVwU2VydmljZTtcbiAgICBwcml2YXRlIF93aW5kb3dSZWY7XG4gICAgcHJpdmF0ZSBfdW5yZWdpc3Rlckxpc3RlbmVyc0ZuO1xuICAgIHByaXZhdGUgX3pvbmVTdWJzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgaW5qZWN0b3I6IEluamVjdG9yLCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgY29uZmlnOiBOZ2JUb29sdGlwQ29uZmlnLCBfbmdab25lOiBOZ1pvbmUsIF9kb2N1bWVudDogYW55LCBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdHJpbmcgY29udGVudCBvciBhIGBUZW1wbGF0ZVJlZmAgZm9yIHRoZSBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBjb250ZW50IGlmIGZhbHN5LCB0aGUgdG9vbHRpcCB3b24ndCBvcGVuLlxuICAgICAqL1xuICAgIHNldCBuZ2JUb29sdGlwKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KTtcbiAgICBnZXQgbmdiVG9vbHRpcCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBjb25zaWRlcmVkIHRvIGJlIGEgXCJtYW51YWxcIiB0cmlnZ2VyaW5nLlxuICAgICAqIFRoZSBgY29udGV4dGAgaXMgYW4gb3B0aW9uYWwgdmFsdWUgdG8gYmUgaW5qZWN0ZWQgaW50byB0aGUgdG9vbHRpcCB0ZW1wbGF0ZSB3aGVuIGl0IGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgb3Blbihjb250ZXh0PzogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIHRvb2x0aXAuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGNvbnNpZGVyZWQgdG8gYmUgYSBcIm1hbnVhbFwiIHRyaWdnZXJpbmcgb2YgdGhlIHRvb2x0aXAuXG4gICAgICovXG4gICAgY2xvc2UoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBjb25zaWRlcmVkIHRvIGJlIGEgXCJtYW51YWxcIiB0cmlnZ2VyaW5nIG9mIHRoZSB0b29sdGlwLlxuICAgICAqL1xuICAgIHRvZ2dsZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgLCBpZiB0aGUgcG9wb3ZlciBpcyBjdXJyZW50bHkgc2hvd24uXG4gICAgICovXG4gICAgaXNPcGVuKCk6IGJvb2xlYW47XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyh7IHRvb2x0aXBDbGFzcyB9OiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19
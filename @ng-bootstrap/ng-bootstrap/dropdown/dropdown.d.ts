import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, AfterContentInit, OnDestroy, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Placement, PlacementArray } from '../util/positioning';
import { NgbDropdownConfig } from './dropdown-config';
import * as ɵngcc0 from '@angular/core';
export declare class NgbNavbar {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbNavbar>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbNavbar, ".navbar", never, {}, {}, never>;
}
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */
export declare class NgbDropdownItem {
    elementRef: ElementRef<HTMLElement>;
    static ngAcceptInputType_disabled: boolean | '';
    private _disabled;
    set disabled(value: boolean);
    get disabled(): boolean;
    constructor(elementRef: ElementRef<HTMLElement>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownItem>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownItem, "[ngbDropdownItem]", never, {
    "disabled": "disabled";
}, {}, never>;
}
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
export declare class NgbDropdownMenu {
    dropdown: any;
    placement: Placement | null;
    isOpen: boolean;
    menuItems: QueryList<NgbDropdownItem>;
    constructor(dropdown: any);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownMenu>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownMenu, "[ngbDropdownMenu]", never, {}, {}, ["menuItems"]>;
}
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */
export declare class NgbDropdownAnchor {
    dropdown: any;
    private _elementRef;
    anchorEl: any;
    constructor(dropdown: any, _elementRef: ElementRef<HTMLElement>);
    getNativeElement(): HTMLElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownAnchor>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownAnchor, "[ngbDropdownAnchor]", never, {}, {}, never>;
}
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
export declare class NgbDropdownToggle extends NgbDropdownAnchor {
    constructor(dropdown: any, elementRef: ElementRef<HTMLElement>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdownToggle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdownToggle, "[ngbDropdownToggle]", never, {}, {}, never>;
}
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
export declare class NgbDropdown implements AfterContentInit, OnDestroy {
    private _changeDetector;
    private _document;
    private _ngZone;
    private _elementRef;
    private _renderer;
    static ngAcceptInputType_autoClose: boolean | string;
    static ngAcceptInputType_display: string;
    private _closed$;
    private _zoneSubscription;
    private _bodyContainer;
    private _menu;
    private _menuElement;
    private _anchor;
    /**
     * Indicates whether the dropdown should be closed when clicking one of dropdown items or pressing ESC.
     *
     * * `true` - the dropdown will close on both outside and inside (menu) clicks.
     * * `false` - the dropdown can only be closed manually via `close()` or `toggle()` methods.
     * * `"inside"` - the dropdown will close on inside menu clicks, but not outside clicks.
     * * `"outside"` - the dropdown will close only on the outside clicks and not on menu clicks.
     */
    autoClose: boolean | 'outside' | 'inside';
    /**
     * Defines whether or not the dropdown menu is opened initially.
     */
    _open: boolean;
    /**
     * The preferred placement of the dropdown.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    placement: PlacementArray;
    /**
    * A selector specifying the element the dropdown should be appended to.
    * Currently only supports "body".
    *
    * @since 4.1.0
    */
    container: null | 'body';
    /**
     * Enable or disable the dynamic positioning. The default value is dynamic unless the dropdown is used
     * inside a Bootstrap navbar. If you need custom placement for a dropdown in a navbar, set it to
     * dynamic explicitly. See the [positioning of dropdown](#/positioning#dropdown)
     * and the [navbar demo](/#/components/dropdown/examples#navbar) for more details.
     *
     * @since 4.2.0
     */
    display: 'dynamic' | 'static';
    /**
     * An event fired when the dropdown is opened or closed.
     *
     * The event payload is a `boolean`:
     * * `true` - the dropdown was opened
     * * `false` - the dropdown was closed
     */
    openChange: EventEmitter<boolean>;
    constructor(_changeDetector: ChangeDetectorRef, config: NgbDropdownConfig, _document: any, _ngZone: NgZone, _elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, ngbNavbar: NgbNavbar);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Checks if the dropdown menu is open.
     */
    isOpen(): boolean;
    /**
     * Opens the dropdown menu.
     */
    open(): void;
    private _setCloseHandlers;
    /**
     * Closes the dropdown menu.
     */
    close(): void;
    /**
     * Toggles the dropdown menu.
     */
    toggle(): void;
    ngOnDestroy(): void;
    onKeyDown(event: KeyboardEvent): void;
    private _isDropup;
    private _isEventFromToggle;
    private _getMenuElements;
    private _positionMenu;
    private _getFirstPlacement;
    private _resetContainer;
    private _applyContainer;
    private _applyPlacementClasses;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDropdown>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbDropdown, "[ngbDropdown]", ["ngbDropdown"], {
    "_open": "open";
    "placement": "placement";
    "container": "container";
    "autoClose": "autoClose";
    "display": "display";
}, {
    "openChange": "openChange";
}, ["_menu", "_menuElement", "_anchor"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZC50cyIsInNvdXJjZXMiOlsiZHJvcGRvd24uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1HQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2VtZW50LCBQbGFjZW1lbnRBcnJheSB9IGZyb20gJy4uL3V0aWwvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgTmdiRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2Ryb3Bkb3duLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JOYXZiYXIge1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB5b3Ugc2hvdWxkIHB1dCBvbiBhIGRyb3Bkb3duIGl0ZW0gdG8gZW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gKiBBcnJvdyBrZXlzIHdpbGwgbW92ZSBmb2N1cyBiZXR3ZWVuIGl0ZW1zIG1hcmtlZCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEcm9wZG93bkl0ZW0ge1xuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogYm9vbGVhbiB8ICcnO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkO1xuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik7XG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIGRyb3Bkb3duIG1lbnUgY29udGVudCBhbmQgZHJvcGRvd24gaXRlbXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRyb3Bkb3duTWVudSB7XG4gICAgZHJvcGRvd246IGFueTtcbiAgICBwbGFjZW1lbnQ6IFBsYWNlbWVudCB8IG51bGw7XG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIG1lbnVJdGVtczogUXVlcnlMaXN0PE5nYkRyb3Bkb3duSXRlbT47XG4gICAgY29uc3RydWN0b3IoZHJvcGRvd246IGFueSk7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIG1hcmsgYW4gZWxlbWVudCB0byB3aGljaCBkcm9wZG93biBtZW51IHdpbGwgYmUgYW5jaG9yZWQuXG4gKlxuICogVGhpcyBpcyBhIHNpbXBsZSB2ZXJzaW9uIG9mIHRoZSBgTmdiRHJvcGRvd25Ub2dnbGVgIGRpcmVjdGl2ZS5cbiAqIEl0IHBsYXlzIHRoZSBzYW1lIHJvbGUsIGJ1dCBkb2Vzbid0IGxpc3RlbiB0byBjbGljayBldmVudHMgdG8gdG9nZ2xlIGRyb3Bkb3duIG1lbnUgdGh1cyBlbmFibGluZyBzdXBwb3J0XG4gKiBmb3IgZXZlbnRzIG90aGVyIHRoYW4gY2xpY2suXG4gKlxuICogQHNpbmNlIDEuMS4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRyb3Bkb3duQW5jaG9yIHtcbiAgICBkcm9wZG93bjogYW55O1xuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY7XG4gICAgYW5jaG9yRWw6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihkcm9wZG93bjogYW55LCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pO1xuICAgIGdldE5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIG1hcmsgYW4gZWxlbWVudCB0aGF0IHdpbGwgdG9nZ2xlIGRyb3Bkb3duIHZpYSB0aGUgYGNsaWNrYCBldmVudC5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIGBOZ2JEcm9wZG93bkFuY2hvcmAgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRyb3Bkb3duVG9nZ2xlIGV4dGVuZHMgTmdiRHJvcGRvd25BbmNob3Ige1xuICAgIGNvbnN0cnVjdG9yKGRyb3Bkb3duOiBhbnksIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBjb250ZXh0dWFsIG92ZXJsYXlzIGZvciBkaXNwbGF5aW5nIGxpc3RzIG9mIGxpbmtzIGFuZCBtb3JlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEcm9wZG93biBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9DbG9zZTogYm9vbGVhbiB8IHN0cmluZztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzcGxheTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2Nsb3NlZCQ7XG4gICAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9ib2R5Q29udGFpbmVyO1xuICAgIHByaXZhdGUgX21lbnU7XG4gICAgcHJpdmF0ZSBfbWVudUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfYW5jaG9yO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkcm9wZG93biBzaG91bGQgYmUgY2xvc2VkIHdoZW4gY2xpY2tpbmcgb25lIG9mIGRyb3Bkb3duIGl0ZW1zIG9yIHByZXNzaW5nIEVTQy5cbiAgICAgKlxuICAgICAqICogYHRydWVgIC0gdGhlIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYm90aCBvdXRzaWRlIGFuZCBpbnNpZGUgKG1lbnUpIGNsaWNrcy5cbiAgICAgKiAqIGBmYWxzZWAgLSB0aGUgZHJvcGRvd24gY2FuIG9ubHkgYmUgY2xvc2VkIG1hbnVhbGx5IHZpYSBgY2xvc2UoKWAgb3IgYHRvZ2dsZSgpYCBtZXRob2RzLlxuICAgICAqICogYFwiaW5zaWRlXCJgIC0gdGhlIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gaW5zaWRlIG1lbnUgY2xpY2tzLCBidXQgbm90IG91dHNpZGUgY2xpY2tzLlxuICAgICAqICogYFwib3V0c2lkZVwiYCAtIHRoZSBkcm9wZG93biB3aWxsIGNsb3NlIG9ubHkgb24gdGhlIG91dHNpZGUgY2xpY2tzIGFuZCBub3Qgb24gbWVudSBjbGlja3MuXG4gICAgICovXG4gICAgYXV0b0Nsb3NlOiBib29sZWFuIHwgJ291dHNpZGUnIHwgJ2luc2lkZSc7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgZHJvcGRvd24gbWVudSBpcyBvcGVuZWQgaW5pdGlhbGx5LlxuICAgICAqL1xuICAgIF9vcGVuOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQgcGxhY2VtZW50IG9mIHRoZSBkcm9wZG93bi5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYFwidG9wXCJgLCBgXCJ0b3AtbGVmdFwiYCwgYFwidG9wLXJpZ2h0XCJgLCBgXCJib3R0b21cImAsIGBcImJvdHRvbS1sZWZ0XCJgLFxuICAgICAqIGBcImJvdHRvbS1yaWdodFwiYCwgYFwibGVmdFwiYCwgYFwibGVmdC10b3BcImAsIGBcImxlZnQtYm90dG9tXCJgLCBgXCJyaWdodFwiYCwgYFwicmlnaHQtdG9wXCJgLFxuICAgICAqIGBcInJpZ2h0LWJvdHRvbVwiYFxuICAgICAqXG4gICAgICogQWNjZXB0cyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc3RyaW5nIHdpdGggc3BhY2Ugc2VwYXJhdGVkIHBvc3NpYmxlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIFRoZSBkZWZhdWx0IG9yZGVyIG9mIHByZWZlcmVuY2UgaXMgYFwiYm90dG9tLWxlZnQgYm90dG9tLXJpZ2h0IHRvcC1sZWZ0IHRvcC1yaWdodFwiYFxuICAgICAqXG4gICAgICogUGxlYXNlIHNlZSB0aGUgW3Bvc2l0aW9uaW5nIG92ZXJ2aWV3XSgjL3Bvc2l0aW9uaW5nKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG4gICAgLyoqXG4gICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRyb3Bkb3duIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgICpcbiAgICAqIEBzaW5jZSA0LjEuMFxuICAgICovXG4gICAgY29udGFpbmVyOiBudWxsIHwgJ2JvZHknO1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBkeW5hbWljIHBvc2l0aW9uaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBkeW5hbWljIHVubGVzcyB0aGUgZHJvcGRvd24gaXMgdXNlZFxuICAgICAqIGluc2lkZSBhIEJvb3RzdHJhcCBuYXZiYXIuIElmIHlvdSBuZWVkIGN1c3RvbSBwbGFjZW1lbnQgZm9yIGEgZHJvcGRvd24gaW4gYSBuYXZiYXIsIHNldCBpdCB0b1xuICAgICAqIGR5bmFtaWMgZXhwbGljaXRseS4gU2VlIHRoZSBbcG9zaXRpb25pbmcgb2YgZHJvcGRvd25dKCMvcG9zaXRpb25pbmcjZHJvcGRvd24pXG4gICAgICogYW5kIHRoZSBbbmF2YmFyIGRlbW9dKC8jL2NvbXBvbmVudHMvZHJvcGRvd24vZXhhbXBsZXMjbmF2YmFyKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQHNpbmNlIDQuMi4wXG4gICAgICovXG4gICAgZGlzcGxheTogJ2R5bmFtaWMnIHwgJ3N0YXRpYyc7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbmVkIG9yIGNsb3NlZC5cbiAgICAgKlxuICAgICAqIFRoZSBldmVudCBwYXlsb2FkIGlzIGEgYGJvb2xlYW5gOlxuICAgICAqICogYHRydWVgIC0gdGhlIGRyb3Bkb3duIHdhcyBvcGVuZWRcbiAgICAgKiAqIGBmYWxzZWAgLSB0aGUgZHJvcGRvd24gd2FzIGNsb3NlZFxuICAgICAqL1xuICAgIG9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3RvcihfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBjb25maWc6IE5nYkRyb3Bkb3duQ29uZmlnLCBfZG9jdW1lbnQ6IGFueSwgX25nWm9uZTogTmdab25lLCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBuZ2JOYXZiYXI6IE5nYk5hdmJhcik7XG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBkcm9wZG93biBtZW51IGlzIG9wZW4uXG4gICAgICovXG4gICAgaXNPcGVuKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAgICovXG4gICAgb3BlbigpOiB2b2lkO1xuICAgIHByaXZhdGUgX3NldENsb3NlSGFuZGxlcnM7XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBkcm9wZG93biBtZW51LlxuICAgICAqL1xuICAgIGNsb3NlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZHJvcGRvd24gbWVudS5cbiAgICAgKi9cbiAgICB0b2dnbGUoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfaXNEcm9wdXA7XG4gICAgcHJpdmF0ZSBfaXNFdmVudEZyb21Ub2dnbGU7XG4gICAgcHJpdmF0ZSBfZ2V0TWVudUVsZW1lbnRzO1xuICAgIHByaXZhdGUgX3Bvc2l0aW9uTWVudTtcbiAgICBwcml2YXRlIF9nZXRGaXJzdFBsYWNlbWVudDtcbiAgICBwcml2YXRlIF9yZXNldENvbnRhaW5lcjtcbiAgICBwcml2YXRlIF9hcHBseUNvbnRhaW5lcjtcbiAgICBwcml2YXRlIF9hcHBseVBsYWNlbWVudENsYXNzZXM7XG59XG4iXX0=
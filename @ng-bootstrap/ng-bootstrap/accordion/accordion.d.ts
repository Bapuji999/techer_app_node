import { AfterContentChecked, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { NgbAccordionConfig } from './accordion-config';
/**
 * The context for the [NgbPanelHeader](#/components/accordion/api#NgbPanelHeader) template
 *
 * @since 4.1.0
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbPanelHeaderContext {
    /**
     * `True` if current panel is opened
     */
    opened: boolean;
}
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
export declare class NgbPanelHeader {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelHeader>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelHeader, "ng-template[ngbPanelHeader]", never, {}, {}, never>;
}
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
export declare class NgbPanelTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelTitle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelTitle, "ng-template[ngbPanelTitle]", never, {}, {}, never>;
}
/**
 * A directive that wraps the accordion panel content.
 */
export declare class NgbPanelContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelContent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelContent, "ng-template[ngbPanelContent]", never, {}, {}, never>;
}
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
export declare class NgbPanel implements AfterContentChecked {
    /**
     *  If `true`, the panel is disabled an can't be toggled.
     */
    disabled: boolean;
    /**
     *  An optional id for the panel that must be unique on the page.
     *
     *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
     */
    id: string;
    isOpen: boolean;
    /**
     *  The panel title.
     *
     *  You can alternatively use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to set panel title.
     */
    title: string;
    /**
     * Type of the current panel.
     *
     * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
     * `'secondary'`, `'light'` and `'dark'`.
     */
    type: string;
    /**
     * An optional class applied to the accordion card element that wraps both panel title and content.
     *
     * @since 5.3.0
     */
    cardClass: string;
    titleTpl: NgbPanelTitle;
    headerTpl: NgbPanelHeader;
    contentTpl: NgbPanelContent;
    titleTpls: QueryList<NgbPanelTitle>;
    headerTpls: QueryList<NgbPanelHeader>;
    contentTpls: QueryList<NgbPanelContent>;
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanel>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanel, "ngb-panel", never, {
    "disabled": "disabled";
    "id": "id";
    "title": "title";
    "type": "type";
    "cardClass": "cardClass";
}, {}, ["titleTpls", "headerTpls", "contentTpls"]>;
}
/**
 * An event emitted right before toggling an accordion panel.
 */
export interface NgbPanelChangeEvent {
    /**
     * The id of the accordion panel that is being toggled.
     */
    panelId: string;
    /**
     * The next state of the panel.
     *
     * `true` if it will be opened, `false` if closed.
     */
    nextState: boolean;
    /**
     * Calling this function will prevent panel toggling.
     */
    preventDefault: () => void;
}
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
export declare class NgbAccordion implements AfterContentChecked {
    panels: QueryList<NgbPanel>;
    /**
     * An array or comma separated strings of panel ids that should be opened **initially**.
     *
     * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
     * the `(panelChange)` event.
     */
    activeIds: string | readonly string[];
    /**
     *  If `true`, only one panel could be opened at a time.
     *
     *  Opening a new panel will close others.
     */
    closeOtherPanels: boolean;
    /**
     * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
     */
    destroyOnHide: boolean;
    /**
     * Type of panels.
     *
     * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
     * `'secondary'`, `'light'` and `'dark'`.
     */
    type: string;
    /**
     * Event emitted right before the panel toggle happens.
     *
     * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
     */
    panelChange: EventEmitter<NgbPanelChangeEvent>;
    constructor(config: NgbAccordionConfig);
    /**
     * Checks if a panel with a given id is expanded.
     */
    isExpanded(panelId: string): boolean;
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    expand(panelId: string): void;
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    expandAll(): void;
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    collapse(panelId: string): void;
    /**
     * Collapses all opened panels.
     */
    collapseAll(): void;
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    toggle(panelId: string): void;
    ngAfterContentChecked(): void;
    private _changeOpenState;
    private _closeOthers;
    private _findPanelById;
    private _updateActiveIds;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbAccordion>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbAccordion, "ngb-accordion", ["ngbAccordion"], {
    "activeIds": "activeIds";
    "destroyOnHide": "destroyOnHide";
    "type": "type";
    "closeOtherPanels": "closeOthers";
}, {
    "panelChange": "panelChange";
}, ["panels"]>;
}
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */
export declare class NgbPanelToggle {
    accordion: NgbAccordion;
    panel: NgbPanel;
    static ngAcceptInputType_ngbPanelToggle: NgbPanel | '';
    set ngbPanelToggle(panel: NgbPanel);
    constructor(accordion: NgbAccordion, panel: NgbPanel);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPanelToggle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbPanelToggle, "button[ngbPanelToggle]", never, {
    "ngbPanelToggle": "ngbPanelToggle";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmQudHMiLCJzb3VyY2VzIjpbImFjY29yZGlvbi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgRXZlbnRFbWl0dGVyLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY2NvcmRpb25Db25maWcgfSBmcm9tICcuL2FjY29yZGlvbi1jb25maWcnO1xuLyoqXG4gKiBUaGUgY29udGV4dCBmb3IgdGhlIFtOZ2JQYW5lbEhlYWRlcl0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxIZWFkZXIpIHRlbXBsYXRlXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiUGFuZWxIZWFkZXJDb250ZXh0IHtcbiAgICAvKipcbiAgICAgKiBgVHJ1ZWAgaWYgY3VycmVudCBwYW5lbCBpcyBvcGVuZWRcbiAgICAgKi9cbiAgICBvcGVuZWQ6IGJvb2xlYW47XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgd3JhcHMgYW4gYWNjb3JkaW9uIHBhbmVsIGhlYWRlciB3aXRoIGFueSBIVE1MIG1hcmt1cCBhbmQgYSB0b2dnbGluZyBidXR0b25cbiAqIG1hcmtlZCB3aXRoIFtgTmdiUGFuZWxUb2dnbGVgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbFRvZ2dsZSkuXG4gKiBTZWUgdGhlIFtoZWFkZXIgY3VzdG9taXphdGlvbiBkZW1vXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2V4YW1wbGVzI2hlYWRlcikgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIFtgTmdiUGFuZWxUaXRsZWBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsVGl0bGUpIHRvIGN1c3RvbWl6ZSBvbmx5IHRoZSBwYW5lbCB0aXRsZS5cbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUGFuZWxIZWFkZXIge1xuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KTtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyBvbmx5IHRoZSBwYW5lbCB0aXRsZSB3aXRoIEhUTUwgbWFya3VwIGluc2lkZS5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIFtgTmdiUGFuZWxIZWFkZXJgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbEhlYWRlcikgdG8gY3VzdG9taXplIHRoZSBmdWxsIHBhbmVsIGhlYWRlci5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUGFuZWxUaXRsZSB7XG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIHRoZSBhY2NvcmRpb24gcGFuZWwgY29udGVudC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUGFuZWxDb250ZW50IHtcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pik7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgd3JhcHMgYW4gaW5kaXZpZHVhbCBhY2NvcmRpb24gcGFuZWwgd2l0aCB0aXRsZSBhbmQgY29sbGFwc2libGUgY29udGVudC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiUGFuZWwgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgICAvKipcbiAgICAgKiAgSWYgYHRydWVgLCB0aGUgcGFuZWwgaXMgZGlzYWJsZWQgYW4gY2FuJ3QgYmUgdG9nZ2xlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiAgQW4gb3B0aW9uYWwgaWQgZm9yIHRoZSBwYW5lbCB0aGF0IG11c3QgYmUgdW5pcXVlIG9uIHRoZSBwYWdlLlxuICAgICAqXG4gICAgICogIElmIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBhdXRvLWdlbmVyYXRlZCBpbiB0aGUgYG5nYi1wYW5lbC14eHhgIGZvcm1hdC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIGlzT3BlbjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiAgVGhlIHBhbmVsIHRpdGxlLlxuICAgICAqXG4gICAgICogIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSB1c2UgW2BOZ2JQYW5lbFRpdGxlYF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxUaXRsZSkgdG8gc2V0IHBhbmVsIHRpdGxlLlxuICAgICAqL1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVHlwZSBvZiB0aGUgY3VycmVudCBwYW5lbC5cbiAgICAgKlxuICAgICAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuICAgICAqIGAnc2Vjb25kYXJ5J2AsIGAnbGlnaHQnYCBhbmQgYCdkYXJrJ2AuXG4gICAgICovXG4gICAgdHlwZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGFjY29yZGlvbiBjYXJkIGVsZW1lbnQgdGhhdCB3cmFwcyBib3RoIHBhbmVsIHRpdGxlIGFuZCBjb250ZW50LlxuICAgICAqXG4gICAgICogQHNpbmNlIDUuMy4wXG4gICAgICovXG4gICAgY2FyZENsYXNzOiBzdHJpbmc7XG4gICAgdGl0bGVUcGw6IE5nYlBhbmVsVGl0bGU7XG4gICAgaGVhZGVyVHBsOiBOZ2JQYW5lbEhlYWRlcjtcbiAgICBjb250ZW50VHBsOiBOZ2JQYW5lbENvbnRlbnQ7XG4gICAgdGl0bGVUcGxzOiBRdWVyeUxpc3Q8TmdiUGFuZWxUaXRsZT47XG4gICAgaGVhZGVyVHBsczogUXVlcnlMaXN0PE5nYlBhbmVsSGVhZGVyPjtcbiAgICBjb250ZW50VHBsczogUXVlcnlMaXN0PE5nYlBhbmVsQ29udGVudD47XG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQ7XG59XG4vKipcbiAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRvZ2dsaW5nIGFuIGFjY29yZGlvbiBwYW5lbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JQYW5lbENoYW5nZUV2ZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbiBwYW5lbCB0aGF0IGlzIGJlaW5nIHRvZ2dsZWQuXG4gICAgICovXG4gICAgcGFuZWxJZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBuZXh0IHN0YXRlIG9mIHRoZSBwYW5lbC5cbiAgICAgKlxuICAgICAqIGB0cnVlYCBpZiBpdCB3aWxsIGJlIG9wZW5lZCwgYGZhbHNlYCBpZiBjbG9zZWQuXG4gICAgICovXG4gICAgbmV4dFN0YXRlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIENhbGxpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIHByZXZlbnQgcGFuZWwgdG9nZ2xpbmcuXG4gICAgICovXG4gICAgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG4vKipcbiAqIEFjY29yZGlvbiBpcyBhIGNvbGxlY3Rpb24gb2YgY29sbGFwc2libGUgcGFuZWxzIChib290c3RyYXAgY2FyZHMpLlxuICpcbiAqIEl0IGNhbiBlbnN1cmUgb25seSBvbmUgcGFuZWwgaXMgb3BlbmVkIGF0IGEgdGltZSBhbmQgYWxsb3dzIHRvIGN1c3RvbWl6ZSBwYW5lbFxuICogaGVhZGVycy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiQWNjb3JkaW9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gICAgcGFuZWxzOiBRdWVyeUxpc3Q8TmdiUGFuZWw+O1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9yIGNvbW1hIHNlcGFyYXRlZCBzdHJpbmdzIG9mIHBhbmVsIGlkcyB0aGF0IHNob3VsZCBiZSBvcGVuZWQgKippbml0aWFsbHkqKi5cbiAgICAgKlxuICAgICAqIEZvciBzdWJzZXF1ZW50IGNoYW5nZXMgdXNlIG1ldGhvZHMgbGlrZSBgZXhwYW5kKClgLCBgY29sbGFwc2UoKWAsIGV0Yy4gYW5kXG4gICAgICogdGhlIGAocGFuZWxDaGFuZ2UpYCBldmVudC5cbiAgICAgKi9cbiAgICBhY3RpdmVJZHM6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqICBJZiBgdHJ1ZWAsIG9ubHkgb25lIHBhbmVsIGNvdWxkIGJlIG9wZW5lZCBhdCBhIHRpbWUuXG4gICAgICpcbiAgICAgKiAgT3BlbmluZyBhIG5ldyBwYW5lbCB3aWxsIGNsb3NlIG90aGVycy5cbiAgICAgKi9cbiAgICBjbG9zZU90aGVyUGFuZWxzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgcGFuZWwgY29udGVudCB3aWxsIGJlIGRldGFjaGVkIGZyb20gRE9NIGFuZCBub3Qgc2ltcGx5IGhpZGRlbiB3aGVuIHRoZSBwYW5lbCBpcyBjb2xsYXBzZWQuXG4gICAgICovXG4gICAgZGVzdHJveU9uSGlkZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUeXBlIG9mIHBhbmVscy5cbiAgICAgKlxuICAgICAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuICAgICAqIGAnc2Vjb25kYXJ5J2AsIGAnbGlnaHQnYCBhbmQgYCdkYXJrJ2AuXG4gICAgICovXG4gICAgdHlwZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRoZSBwYW5lbCB0b2dnbGUgaGFwcGVucy5cbiAgICAgKlxuICAgICAqIFNlZSBbTmdiUGFuZWxDaGFuZ2VFdmVudF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxDaGFuZ2VFdmVudCkgZm9yIHBheWxvYWQgZGV0YWlscy5cbiAgICAgKi9cbiAgICBwYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPE5nYlBhbmVsQ2hhbmdlRXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiQWNjb3JkaW9uQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBwYW5lbCB3aXRoIGEgZ2l2ZW4gaWQgaXMgZXhwYW5kZWQuXG4gICAgICovXG4gICAgaXNFeHBhbmRlZChwYW5lbElkOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYSBwYW5lbCB3aXRoIGEgZ2l2ZW4gaWQuXG4gICAgICpcbiAgICAgKiBIYXMgbm8gZWZmZWN0IGlmIHRoZSBwYW5lbCBpcyBhbHJlYWR5IGV4cGFuZGVkIG9yIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGV4cGFuZChwYW5lbElkOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHBhbmVscywgaWYgYFtjbG9zZU90aGVyc11gIGlzIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBJZiBgW2Nsb3NlT3RoZXJzXWAgaXMgYHRydWVgLCBpdCB3aWxsIGV4cGFuZCB0aGUgZmlyc3QgcGFuZWwsIHVubGVzcyB0aGVyZSBpcyBhbHJlYWR5IGEgcGFuZWwgb3BlbmVkLlxuICAgICAqL1xuICAgIGV4cGFuZEFsbCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyBhIHBhbmVsIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgICAqXG4gICAgICogSGFzIG5vIGVmZmVjdCBpZiB0aGUgcGFuZWwgaXMgYWxyZWFkeSBjb2xsYXBzZWQgb3IgZGlzYWJsZWQuXG4gICAgICovXG4gICAgY29sbGFwc2UocGFuZWxJZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgYWxsIG9wZW5lZCBwYW5lbHMuXG4gICAgICovXG4gICAgY29sbGFwc2VBbGwoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIGEgcGFuZWwgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAgICpcbiAgICAgKiBIYXMgbm8gZWZmZWN0IGlmIHRoZSBwYW5lbCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICB0b2dnbGUocGFuZWxJZDogc3RyaW5nKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcbiAgICBwcml2YXRlIF9jaGFuZ2VPcGVuU3RhdGU7XG4gICAgcHJpdmF0ZSBfY2xvc2VPdGhlcnM7XG4gICAgcHJpdmF0ZSBfZmluZFBhbmVsQnlJZDtcbiAgICBwcml2YXRlIF91cGRhdGVBY3RpdmVJZHM7XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHB1dCBvbiBhIGJ1dHRvbiB0aGF0IHRvZ2dsZXMgcGFuZWwgb3BlbmluZyBhbmQgY2xvc2luZy5cbiAqXG4gKiBUbyBiZSB1c2VkIGluc2lkZSB0aGUgW2BOZ2JQYW5lbEhlYWRlcmBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsSGVhZGVyKVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JQYW5lbFRvZ2dsZSB7XG4gICAgYWNjb3JkaW9uOiBOZ2JBY2NvcmRpb247XG4gICAgcGFuZWw6IE5nYlBhbmVsO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uZ2JQYW5lbFRvZ2dsZTogTmdiUGFuZWwgfCAnJztcbiAgICBzZXQgbmdiUGFuZWxUb2dnbGUocGFuZWw6IE5nYlBhbmVsKTtcbiAgICBjb25zdHJ1Y3RvcihhY2NvcmRpb246IE5nYkFjY29yZGlvbiwgcGFuZWw6IE5nYlBhbmVsKTtcbn1cbiJdfQ==
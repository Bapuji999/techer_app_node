import { AfterContentChecked, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { NgbTabsetConfig } from './tabset-config';
/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgbTab.title` input for string titles.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbTabTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTabTitle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTabTitle, "ng-template[ngbTabTitle]", never, {}, {}, never>;
}
/**
 * A directive to wrap content to be displayed in a tab.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export declare class NgbTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTabContent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTabContent, "ng-template[ngbTabContent]", never, {}, {}, never>;
}
/**
 * A directive representing an individual tab.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export declare class NgbTab implements AfterContentChecked {
    /**
     * The tab identifier.
     *
     * Must be unique for the entire document for proper accessibility support.
     */
    id: string;
    /**
     * The tab title.
     *
     * Use the [`NgbTabTitle`](#/components/tabset/api#NgbTabTitle) directive for non-string titles.
     */
    title: string;
    /**
     * If `true`, the current tab is disabled and can't be toggled.
     */
    disabled: boolean;
    titleTpl: NgbTabTitle | null;
    contentTpl: NgbTabContent | null;
    titleTpls: QueryList<NgbTabTitle>;
    contentTpls: QueryList<NgbTabContent>;
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTab>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTab, "ngb-tab", never, {
    "id": "id";
    "disabled": "disabled";
    "title": "title";
}, {}, ["titleTpls", "contentTpls"]>;
}
/**
 * The payload of the change event fired right before the tab change.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export interface NgbTabChangeEvent {
    /**
     * The id of the currently active tab.
     */
    activeId: string;
    /**
     * The id of the newly selected tab.
     */
    nextId: string;
    /**
     * Calling this function will prevent tab switching.
     */
    preventDefault: () => void;
}
/**
 * A component that makes it easy to create tabbed interface.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export declare class NgbTabset implements AfterContentChecked {
    static ngAcceptInputType_justify: string;
    static ngAcceptInputType_orientation: string;
    justifyClass: string;
    tabs: QueryList<NgbTab>;
    /**
     * The identifier of the tab that should be opened **initially**.
     *
     * For subsequent tab switches use the `.select()` method and the `(tabChange)` event.
     */
    activeId: string;
    /**
     * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
     */
    destroyOnHide: boolean;
    /**
     * The horizontal alignment of the tabs with flexbox utilities.
     */
    set justify(className: 'start' | 'center' | 'end' | 'fill' | 'justified');
    /**
     * The orientation of the tabset.
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Type of navigation to be used for tabs.
     *
     * Currently Bootstrap supports only `"tabs"` and `"pills"`.
     *
     * Since `3.0.0` can also be an arbitrary string (ex. for custom themes).
     */
    type: 'tabs' | 'pills' | string;
    /**
     * A tab change event emitted right before the tab change happens.
     *
     * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
     */
    tabChange: EventEmitter<NgbTabChangeEvent>;
    constructor(config: NgbTabsetConfig);
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     */
    select(tabId: string): void;
    ngAfterContentChecked(): void;
    private _getTabById;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTabset>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbTabset, "ngb-tabset", ["ngbTabset"], {
    "destroyOnHide": "destroyOnHide";
    "type": "type";
    "justify": "justify";
    "orientation": "orientation";
    "activeId": "activeId";
}, {
    "tabChange": "tabChange";
}, ["tabs"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmQudHMiLCJzb3VyY2VzIjpbInRhYnNldC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LWNvbmZpZyc7XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIHdyYXAgdGFiIHRpdGxlcyB0aGF0IG5lZWQgdG8gY29udGFpbiBIVE1MIG1hcmt1cCBvciBvdGhlciBkaXJlY3RpdmVzLlxuICpcbiAqIEFsdGVybmF0aXZlbHkgeW91IGNvdWxkIHVzZSB0aGUgYE5nYlRhYi50aXRsZWAgaW5wdXQgZm9yIHN0cmluZyB0aXRsZXMuXG4gKlxuICogQGRlcHJlY2F0ZWQgNi4wLjAgUGxlYXNlIHVzZSBOZ2JOYXYgaW5zdGVhZFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUYWJUaXRsZSB7XG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byB3cmFwIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIGEgdGFiLlxuICpcbiAqIEBkZXByZWNhdGVkIDYuMC4wIFBsZWFzZSB1c2UgTmdiTmF2IGluc3RlYWRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiVGFiQ29udGVudCB7XG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSByZXByZXNlbnRpbmcgYW4gaW5kaXZpZHVhbCB0YWIuXG4gKlxuICogQGRlcHJlY2F0ZWQgNi4wLjAgUGxlYXNlIHVzZSBOZ2JOYXYgaW5zdGVhZFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUYWIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGFiIGlkZW50aWZpZXIuXG4gICAgICpcbiAgICAgKiBNdXN0IGJlIHVuaXF1ZSBmb3IgdGhlIGVudGlyZSBkb2N1bWVudCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkgc3VwcG9ydC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0YWIgdGl0bGUuXG4gICAgICpcbiAgICAgKiBVc2UgdGhlIFtgTmdiVGFiVGl0bGVgXSgjL2NvbXBvbmVudHMvdGFic2V0L2FwaSNOZ2JUYWJUaXRsZSkgZGlyZWN0aXZlIGZvciBub24tc3RyaW5nIHRpdGxlcy5cbiAgICAgKi9cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGN1cnJlbnQgdGFiIGlzIGRpc2FibGVkIGFuZCBjYW4ndCBiZSB0b2dnbGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHRpdGxlVHBsOiBOZ2JUYWJUaXRsZSB8IG51bGw7XG4gICAgY29udGVudFRwbDogTmdiVGFiQ29udGVudCB8IG51bGw7XG4gICAgdGl0bGVUcGxzOiBRdWVyeUxpc3Q8TmdiVGFiVGl0bGU+O1xuICAgIGNvbnRlbnRUcGxzOiBRdWVyeUxpc3Q8TmdiVGFiQ29udGVudD47XG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQ7XG59XG4vKipcbiAqIFRoZSBwYXlsb2FkIG9mIHRoZSBjaGFuZ2UgZXZlbnQgZmlyZWQgcmlnaHQgYmVmb3JlIHRoZSB0YWIgY2hhbmdlLlxuICpcbiAqIEBkZXByZWNhdGVkIDYuMC4wIFBsZWFzZSB1c2UgTmdiTmF2IGluc3RlYWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JUYWJDaGFuZ2VFdmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYi5cbiAgICAgKi9cbiAgICBhY3RpdmVJZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgdGFiLlxuICAgICAqL1xuICAgIG5leHRJZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIENhbGxpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIHByZXZlbnQgdGFiIHN3aXRjaGluZy5cbiAgICAgKi9cbiAgICBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDtcbn1cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSB0YWJiZWQgaW50ZXJmYWNlLlxuICpcbiAqIEBkZXByZWNhdGVkIDYuMC4wIFBsZWFzZSB1c2UgTmdiTmF2IGluc3RlYWRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiVGFic2V0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2p1c3RpZnk6IHN0cmluZztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3JpZW50YXRpb246IHN0cmluZztcbiAgICBqdXN0aWZ5Q2xhc3M6IHN0cmluZztcbiAgICB0YWJzOiBRdWVyeUxpc3Q8TmdiVGFiPjtcbiAgICAvKipcbiAgICAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgdGFiIHRoYXQgc2hvdWxkIGJlIG9wZW5lZCAqKmluaXRpYWxseSoqLlxuICAgICAqXG4gICAgICogRm9yIHN1YnNlcXVlbnQgdGFiIHN3aXRjaGVzIHVzZSB0aGUgYC5zZWxlY3QoKWAgbWV0aG9kIGFuZCB0aGUgYCh0YWJDaGFuZ2UpYCBldmVudC5cbiAgICAgKi9cbiAgICBhY3RpdmVJZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgbm9uLXZpc2libGUgdGFicyBjb250ZW50IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIERPTS4gT3RoZXJ3aXNlIGl0IHdpbGwganVzdCBiZSBoaWRkZW4uXG4gICAgICovXG4gICAgZGVzdHJveU9uSGlkZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgaG9yaXpvbnRhbCBhbGlnbm1lbnQgb2YgdGhlIHRhYnMgd2l0aCBmbGV4Ym94IHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBzZXQganVzdGlmeShjbGFzc05hbWU6ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2ZpbGwnIHwgJ2p1c3RpZmllZCcpO1xuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBvZiB0aGUgdGFic2V0LlxuICAgICAqL1xuICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuICAgIC8qKlxuICAgICAqIFR5cGUgb2YgbmF2aWdhdGlvbiB0byBiZSB1c2VkIGZvciB0YWJzLlxuICAgICAqXG4gICAgICogQ3VycmVudGx5IEJvb3RzdHJhcCBzdXBwb3J0cyBvbmx5IGBcInRhYnNcImAgYW5kIGBcInBpbGxzXCJgLlxuICAgICAqXG4gICAgICogU2luY2UgYDMuMC4wYCBjYW4gYWxzbyBiZSBhbiBhcmJpdHJhcnkgc3RyaW5nIChleC4gZm9yIGN1c3RvbSB0aGVtZXMpLlxuICAgICAqL1xuICAgIHR5cGU6ICd0YWJzJyB8ICdwaWxscycgfCBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSB0YWIgY2hhbmdlIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRoZSB0YWIgY2hhbmdlIGhhcHBlbnMuXG4gICAgICpcbiAgICAgKiBTZWUgW2BOZ2JUYWJDaGFuZ2VFdmVudGBdKCMvY29tcG9uZW50cy90YWJzZXQvYXBpI05nYlRhYkNoYW5nZUV2ZW50KSBmb3IgcGF5bG9hZCBkZXRhaWxzLlxuICAgICAqL1xuICAgIHRhYkNoYW5nZTogRXZlbnRFbWl0dGVyPE5nYlRhYkNoYW5nZUV2ZW50PjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE5nYlRhYnNldENvbmZpZyk7XG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgdGFiIHdpdGggdGhlIGdpdmVuIGlkIGFuZCBzaG93cyBpdHMgYXNzb2NpYXRlZCBjb250ZW50IHBhbmVsLlxuICAgICAqXG4gICAgICogQW55IG90aGVyIHRhYiB0aGF0IHdhcyBwcmV2aW91c2x5IHNlbGVjdGVkIGJlY29tZXMgdW5zZWxlY3RlZCBhbmQgaXRzIGFzc29jaWF0ZWQgcGFuZSBpcyByZW1vdmVkIGZyb20gRE9NIG9yXG4gICAgICogaGlkZGVuIGRlcGVuZGluZyBvbiB0aGUgYGRlc3Ryb3lPbkhpZGVgIHZhbHVlLlxuICAgICAqL1xuICAgIHNlbGVjdCh0YWJJZDogc3RyaW5nKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcbiAgICBwcml2YXRlIF9nZXRUYWJCeUlkO1xufVxuIl19
import { __decorate, __param, __read, __extends, __assign, __values } from 'tslib';
import { ɵɵdefineInjectable, Injectable, TemplateRef, Directive, Input, ContentChildren, EventEmitter, Output, Component, ViewEncapsulation, Optional, Host, NgModule, Renderer2, ElementRef, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef, Inject, PLATFORM_ID, NgZone, HostListener, ɵɵinject, LOCALE_ID, ViewChild, ContentChild, ViewContainerRef, ComponentFactoryResolver, Injector, ApplicationRef, RendererFactory2, INJECTOR, Attribute, InjectionToken } from '@angular/core';
import { CommonModule, isPlatformBrowser, getLocaleDayNames, FormStyle, TranslationWidth, getLocaleMonthNames, formatDate, DOCUMENT, getLocaleDayPeriods } from '@angular/common';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { Subject, BehaviorSubject, combineLatest, timer, NEVER, fromEvent, merge, race, Observable } from 'rxjs';
import { map, startWith, distinctUntilChanged, switchMap, takeUntil, filter, take, tap, withLatestFrom, delay, share } from 'rxjs/operators';

function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
function hasClassName(element, className) {
    return element && element.className && element.className.split &&
        element.className.split(/\s+/).indexOf(className) >= 0;
}
if (typeof Element !== 'undefined' && !Element.prototype.closest) {
    // Polyfill for ie10+
    if (!Element.prototype.matches) {
        // IE uses the non-standard name: msMatchesSelector
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (el.matches(s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}
function closest(element, selector) {
    if (!selector) {
        return null;
    }
    return element.closest(selector);
}

/**
 * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */
var NgbAccordionConfig = /** @class */ (function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    NgbAccordionConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbAccordionConfig_Factory() { return new NgbAccordionConfig(); }, token: NgbAccordionConfig, providedIn: "root" });
    NgbAccordionConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbAccordionConfig);
    return NgbAccordionConfig;
}());

var nextId = 0;
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
var NgbPanelHeader = /** @class */ (function () {
    function NgbPanelHeader(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelHeader.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPanelHeader = __decorate([
        Directive({ selector: 'ng-template[ngbPanelHeader]' })
    ], NgbPanelHeader);
    return NgbPanelHeader;
}());
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
var NgbPanelTitle = /** @class */ (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelTitle.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPanelTitle = __decorate([
        Directive({ selector: 'ng-template[ngbPanelTitle]' })
    ], NgbPanelTitle);
    return NgbPanelTitle;
}());
/**
 * A directive that wraps the accordion panel content.
 */
var NgbPanelContent = /** @class */ (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPanelContent = __decorate([
        Directive({ selector: 'ng-template[ngbPanelContent]' })
    ], NgbPanelContent);
    return NgbPanelContent;
}());
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
var NgbPanel = /** @class */ (function () {
    function NgbPanel() {
        /**
         *  If `true`, the panel is disabled an can't be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel that must be unique on the page.
         *
         *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
         */
        this.id = "ngb-panel-" + nextId++;
        this.isOpen = false;
    }
    NgbPanel.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.headerTpl = this.headerTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    __decorate([
        Input()
    ], NgbPanel.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbPanel.prototype, "id", void 0);
    __decorate([
        Input()
    ], NgbPanel.prototype, "title", void 0);
    __decorate([
        Input()
    ], NgbPanel.prototype, "type", void 0);
    __decorate([
        Input()
    ], NgbPanel.prototype, "cardClass", void 0);
    __decorate([
        ContentChildren(NgbPanelTitle, { descendants: false })
    ], NgbPanel.prototype, "titleTpls", void 0);
    __decorate([
        ContentChildren(NgbPanelHeader, { descendants: false })
    ], NgbPanel.prototype, "headerTpls", void 0);
    __decorate([
        ContentChildren(NgbPanelContent, { descendants: false })
    ], NgbPanel.prototype, "contentTpls", void 0);
    NgbPanel = __decorate([
        Directive({ selector: 'ngb-panel' })
    ], NgbPanel);
    return NgbPanel;
}());
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
var NgbAccordion = /** @class */ (function () {
    function NgbAccordion(config) {
        /**
         * An array or comma separated strings of panel ids that should be opened **initially**.
         *
         * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
         * the `(panelChange)` event.
         */
        this.activeIds = [];
        /**
         * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
         */
        this.destroyOnHide = true;
        /**
         * Event emitted right before the panel toggle happens.
         *
         * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
         */
        this.panelChange = new EventEmitter();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Checks if a panel with a given id is expanded.
     */
    NgbAccordion.prototype.isExpanded = function (panelId) { return this.activeIds.indexOf(panelId) > -1; };
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    NgbAccordion.prototype.expand = function (panelId) { this._changeOpenState(this._findPanelById(panelId), true); };
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    NgbAccordion.prototype.expandAll = function () {
        var _this = this;
        if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
                this._changeOpenState(this.panels.first, true);
            }
        }
        else {
            this.panels.forEach(function (panel) { return _this._changeOpenState(panel, true); });
        }
    };
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    NgbAccordion.prototype.collapse = function (panelId) { this._changeOpenState(this._findPanelById(panelId), false); };
    /**
     * Collapses all opened panels.
     */
    NgbAccordion.prototype.collapseAll = function () {
        var _this = this;
        this.panels.forEach(function (panel) { _this._changeOpenState(panel, false); });
    };
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    NgbAccordion.prototype.toggle = function (panelId) {
        var panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(function (panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    NgbAccordion.prototype._changeOpenState = function (panel, nextState) {
        if (panel != null && !panel.disabled && panel.isOpen !== nextState) {
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panel.id, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                panel.isOpen = nextState;
                if (nextState && this.closeOtherPanels) {
                    this._closeOthers(panel.id);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        this.panels.forEach(function (panel) {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        });
    };
    NgbAccordion.prototype._findPanelById = function (panelId) { return this.panels.find(function (p) { return p.id === panelId; }) || null; };
    NgbAccordion.prototype._updateActiveIds = function () {
        this.activeIds = this.panels.filter(function (panel) { return panel.isOpen && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    NgbAccordion.ctorParameters = function () { return [
        { type: NgbAccordionConfig }
    ]; };
    __decorate([
        ContentChildren(NgbPanel)
    ], NgbAccordion.prototype, "panels", void 0);
    __decorate([
        Input()
    ], NgbAccordion.prototype, "activeIds", void 0);
    __decorate([
        Input('closeOthers')
    ], NgbAccordion.prototype, "closeOtherPanels", void 0);
    __decorate([
        Input()
    ], NgbAccordion.prototype, "destroyOnHide", void 0);
    __decorate([
        Input()
    ], NgbAccordion.prototype, "type", void 0);
    __decorate([
        Output()
    ], NgbAccordion.prototype, "panelChange", void 0);
    NgbAccordion = __decorate([
        Component({
            selector: 'ngb-accordion',
            exportAs: 'ngbAccordion',
            encapsulation: ViewEncapsulation.None,
            host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
            template: "\n    <ng-template #t ngbPanelHeader let-panel>\n      <button class=\"btn btn-link\" [ngbPanelToggle]=\"panel\">\n        {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n      </button>\n    </ng-template>\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div [class]=\"'card ' + (panel.cardClass || '')\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <ng-template [ngTemplateOutlet]=\"panel.headerTpl?.templateRef || t\"\n                       [ngTemplateOutletContext]=\"{$implicit: panel, opened: panel.isOpen}\"></ng-template>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"collapse\" [class.show]=\"panel.isOpen\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n          <div class=\"card-body\">\n               <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef || null\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
        })
    ], NgbAccordion);
    return NgbAccordion;
}());
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */
var NgbPanelToggle = /** @class */ (function () {
    function NgbPanelToggle(accordion, panel) {
        this.accordion = accordion;
        this.panel = panel;
    }
    Object.defineProperty(NgbPanelToggle.prototype, "ngbPanelToggle", {
        set: function (panel) {
            if (panel) {
                this.panel = panel;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbPanelToggle.ctorParameters = function () { return [
        { type: NgbAccordion },
        { type: NgbPanel, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    __decorate([
        Input()
    ], NgbPanelToggle.prototype, "ngbPanelToggle", null);
    NgbPanelToggle = __decorate([
        Directive({
            selector: 'button[ngbPanelToggle]',
            host: {
                'type': 'button',
                '[disabled]': 'panel.disabled',
                '[class.collapsed]': '!panel.isOpen',
                '[attr.aria-expanded]': 'panel.isOpen',
                '[attr.aria-controls]': 'panel.id',
                '(click)': 'accordion.toggle(panel.id)'
            }
        }),
        __param(1, Optional()), __param(1, Host())
    ], NgbPanelToggle);
    return NgbPanelToggle;
}());

var NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
var NgbAccordionModule = /** @class */ (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule = __decorate([
        NgModule({ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [CommonModule] })
    ], NgbAccordionModule);
    return NgbAccordionModule;
}());

/**
 * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */
var NgbAlertConfig = /** @class */ (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    NgbAlertConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbAlertConfig_Factory() { return new NgbAlertConfig(); }, token: NgbAlertConfig, providedIn: "root" });
    NgbAlertConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbAlertConfig);
    return NgbAlertConfig;
}());

/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */
var NgbAlert = /** @class */ (function () {
    function NgbAlert(config, _renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        /**
         * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
         */
        this.close = new EventEmitter();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(); };
    NgbAlert.prototype.ngOnChanges = function (changes) {
        var typeChange = changes['type'];
        if (typeChange && !typeChange.firstChange) {
            this._renderer.removeClass(this._element.nativeElement, "alert-" + typeChange.previousValue);
            this._renderer.addClass(this._element.nativeElement, "alert-" + typeChange.currentValue);
        }
    };
    NgbAlert.prototype.ngOnInit = function () { this._renderer.addClass(this._element.nativeElement, "alert-" + this.type); };
    NgbAlert.ctorParameters = function () { return [
        { type: NgbAlertConfig },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], NgbAlert.prototype, "dismissible", void 0);
    __decorate([
        Input()
    ], NgbAlert.prototype, "type", void 0);
    __decorate([
        Output()
    ], NgbAlert.prototype, "close", void 0);
    NgbAlert = __decorate([
        Component({
            selector: 'ngb-alert',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            host: { 'role': 'alert', 'class': 'alert', '[class.alert-dismissible]': 'dismissible' },
            template: "\n    <ng-content></ng-content>\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.alert.close\"\n      (click)=\"closeHandler()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    ",
            styles: ["ngb-alert{display:block}"]
        })
    ], NgbAlert);
    return NgbAlert;
}());

var NgbAlertModule = /** @class */ (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule = __decorate([
        NgModule({ declarations: [NgbAlert], exports: [NgbAlert], imports: [CommonModule], entryComponents: [NgbAlert] })
    ], NgbAlertModule);
    return NgbAlertModule;
}());

var NgbButtonLabel = /** @class */ (function () {
    function NgbButtonLabel() {
    }
    NgbButtonLabel = __decorate([
        Directive({
            selector: '[ngbButtonLabel]',
            host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
        })
    ], NgbButtonLabel);
    return NgbButtonLabel;
}());

var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbCheckBox; }),
    multi: true
};
/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
var NgbCheckBox = /** @class */ (function () {
    function NgbCheckBox(_label, _cd) {
        this._label = _label;
        this._cd = _cd;
        /**
         * If `true`, the checkbox button will be disabled
         */
        this.disabled = false;
        /**
         * The form control value when the checkbox is checked.
         */
        this.valueChecked = true;
        /**
         * The form control value when the checkbox is unchecked.
         */
        this.valueUnChecked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbCheckBox.prototype, "focused", {
        set: function (isFocused) {
            this._label.focused = isFocused;
            if (!isFocused) {
                this.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbCheckBox.prototype.onInputChange = function ($event) {
        var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
        this.onChange(modelToPropagate);
        this.onTouched();
        this.writeValue(modelToPropagate);
    };
    NgbCheckBox.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbCheckBox.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbCheckBox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._label.disabled = isDisabled;
    };
    NgbCheckBox.prototype.writeValue = function (value) {
        this.checked = value === this.valueChecked;
        this._label.active = this.checked;
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        this._cd.markForCheck();
    };
    NgbCheckBox.ctorParameters = function () { return [
        { type: NgbButtonLabel },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], NgbCheckBox.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbCheckBox.prototype, "valueChecked", void 0);
    __decorate([
        Input()
    ], NgbCheckBox.prototype, "valueUnChecked", void 0);
    NgbCheckBox = __decorate([
        Directive({
            selector: '[ngbButton][type=checkbox]',
            host: {
                '[checked]': 'checked',
                '[disabled]': 'disabled',
                '(change)': 'onInputChange($event)',
                '(focus)': 'focused = true',
                '(blur)': 'focused = false'
            },
            providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
        })
    ], NgbCheckBox);
    return NgbCheckBox;
}());

var NGB_RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbRadioGroup; }),
    multi: true
};
var nextId$1 = 0;
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
var NgbRadioGroup = /** @class */ (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        /**
         * Name of the radio group applied to radio input elements.
         *
         * Will be applied to all radio input elements inside the group,
         * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
         *
         * If not provided, will be generated in the `ngb-radio-xx` format.
         */
        this.name = "ngb-radio-" + nextId$1++;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (isDisabled) { this.setDisabledState(isDisabled); },
        enumerable: true,
        configurable: true
    });
    NgbRadioGroup.prototype.onRadioChange = function (radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    };
    NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadiosValue(); };
    NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
    NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    };
    NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
    NgbRadioGroup.prototype.writeValue = function (value) {
        this._value = value;
        this._updateRadiosValue();
    };
    NgbRadioGroup.prototype._updateRadiosValue = function () {
        var _this = this;
        this._radios.forEach(function (radio) { return radio.updateValue(_this._value); });
    };
    NgbRadioGroup.prototype._updateRadiosDisabled = function () { this._radios.forEach(function (radio) { return radio.updateDisabled(); }); };
    __decorate([
        Input()
    ], NgbRadioGroup.prototype, "name", void 0);
    NgbRadioGroup = __decorate([
        Directive({ selector: '[ngbRadioGroup]', host: { 'role': 'radiogroup' }, providers: [NGB_RADIO_VALUE_ACCESSOR] })
    ], NgbRadioGroup);
    return NgbRadioGroup;
}());
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */
var NgbRadio = /** @class */ (function () {
    function NgbRadio(_group, _label, _renderer, _element, _cd) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._cd = _cd;
        this._value = null;
        this._group.register(this);
        this.updateDisabled();
    }
    Object.defineProperty(NgbRadio.prototype, "value", {
        get: function () { return this._value; },
        /**
         * The form control value when current radio button is checked.
         */
        set: function (value) {
            this._value = value;
            var stringValue = value ? value.toString() : '';
            this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
            this._group.onRadioValueUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "disabled", {
        get: function () { return this._group.disabled || this._disabled; },
        /**
         * If `true`, current radio button will be disabled.
         */
        set: function (isDisabled) {
            this._disabled = isDisabled !== false;
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "focused", {
        set: function (isFocused) {
            if (this._label) {
                this._label.focused = isFocused;
            }
            if (!isFocused) {
                this._group.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "checked", {
        get: function () { return this._checked; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "nameAttr", {
        get: function () { return this.name || this._group.name; },
        enumerable: true,
        configurable: true
    });
    NgbRadio.prototype.ngOnDestroy = function () { this._group.unregister(this); };
    NgbRadio.prototype.onChange = function () { this._group.onRadioChange(this); };
    NgbRadio.prototype.updateValue = function (value) {
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        if (this.value !== value) {
            this._cd.markForCheck();
        }
        this._checked = this.value === value;
        this._label.active = this._checked;
    };
    NgbRadio.prototype.updateDisabled = function () { this._label.disabled = this.disabled; };
    NgbRadio.ctorParameters = function () { return [
        { type: NgbRadioGroup },
        { type: NgbButtonLabel },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], NgbRadio.prototype, "name", void 0);
    __decorate([
        Input('value')
    ], NgbRadio.prototype, "value", null);
    __decorate([
        Input('disabled')
    ], NgbRadio.prototype, "disabled", null);
    NgbRadio = __decorate([
        Directive({
            selector: '[ngbButton][type=radio]',
            host: {
                '[checked]': 'checked',
                '[disabled]': 'disabled',
                '[name]': 'nameAttr',
                '(change)': 'onChange()',
                '(focus)': 'focused = true',
                '(blur)': 'focused = false'
            }
        })
    ], NgbRadio);
    return NgbRadio;
}());

var NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];
var NgbButtonsModule = /** @class */ (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule = __decorate([
        NgModule({ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES })
    ], NgbButtonsModule);
    return NgbButtonsModule;
}());

/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */
var NgbCarouselConfig = /** @class */ (function () {
    function NgbCarouselConfig() {
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
        this.pauseOnHover = true;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
    }
    NgbCarouselConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbCarouselConfig_Factory() { return new NgbCarouselConfig(); }, token: NgbCarouselConfig, providedIn: "root" });
    NgbCarouselConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbCarouselConfig);
    return NgbCarouselConfig;
}());

var nextId$2 = 0;
/**
 * A directive that wraps the individual carousel slide.
 */
var NgbSlide = /** @class */ (function () {
    function NgbSlide(tplRef) {
        this.tplRef = tplRef;
        /**
         * Slide id that must be unique for the entire document.
         *
         * If not provided, will be generated in the `ngb-slide-xx` format.
         */
        this.id = "ngb-slide-" + nextId$2++;
    }
    NgbSlide.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    __decorate([
        Input()
    ], NgbSlide.prototype, "id", void 0);
    NgbSlide = __decorate([
        Directive({ selector: 'ng-template[ngbSlide]' })
    ], NgbSlide);
    return NgbSlide;
}());
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
var NgbCarousel = /** @class */ (function () {
    function NgbCarousel(config, _platformId, _ngZone, _cd) {
        this._platformId = _platformId;
        this._ngZone = _ngZone;
        this._cd = _cd;
        this.NgbSlideEventSource = NgbSlideEventSource;
        this._destroy$ = new Subject();
        this._interval$ = new BehaviorSubject(0);
        this._mouseHover$ = new BehaviorSubject(false);
        this._pauseOnHover$ = new BehaviorSubject(false);
        this._pause$ = new BehaviorSubject(false);
        this._wrap$ = new BehaviorSubject(false);
        /**
         * An event emitted right after the slide transition is completed.
         *
         * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
         */
        this.slide = new EventEmitter();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
        this.pauseOnHover = config.pauseOnHover;
        this.showNavigationArrows = config.showNavigationArrows;
        this.showNavigationIndicators = config.showNavigationIndicators;
    }
    Object.defineProperty(NgbCarousel.prototype, "interval", {
        get: function () { return this._interval$.value; },
        /**
         * Time in milliseconds before the next slide is shown.
         */
        set: function (value) {
            this._interval$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbCarousel.prototype, "wrap", {
        get: function () { return this._wrap$.value; },
        /**
         * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
         */
        set: function (value) {
            this._wrap$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbCarousel.prototype, "pauseOnHover", {
        get: function () { return this._pauseOnHover$.value; },
        /**
         * If `true`, will pause slide switching when mouse cursor hovers the slide.
         *
         * @since 2.2.0
         */
        set: function (value) {
            this._pauseOnHover$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    NgbCarousel.prototype.mouseEnter = function () {
        this._mouseHover$.next(true);
    };
    NgbCarousel.prototype.mouseLeave = function () {
        this._mouseHover$.next(false);
    };
    NgbCarousel.prototype.ngAfterContentInit = function () {
        var _this = this;
        // setInterval() doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if (isPlatformBrowser(this._platformId)) {
            this._ngZone.runOutsideAngular(function () {
                var hasNextSlide$ = combineLatest([
                    _this.slide.pipe(map(function (slideEvent) { return slideEvent.current; }), startWith(_this.activeId)),
                    _this._wrap$, _this.slides.changes.pipe(startWith(null))
                ])
                    .pipe(map(function (_a) {
                    var _b = __read(_a, 2), currentSlideId = _b[0], wrap = _b[1];
                    var slideArr = _this.slides.toArray();
                    var currentSlideIdx = _this._getSlideIdxById(currentSlideId);
                    return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
                }), distinctUntilChanged());
                combineLatest([_this._pause$, _this._pauseOnHover$, _this._mouseHover$, _this._interval$, hasNextSlide$])
                    .pipe(map(function (_a) {
                    var _b = __read(_a, 5), pause = _b[0], pauseOnHover = _b[1], mouseHover = _b[2], interval = _b[3], hasNextSlide = _b[4];
                    return ((pause || (pauseOnHover && mouseHover) || !hasNextSlide) ? 0 : interval);
                }), distinctUntilChanged(), switchMap(function (interval) { return interval > 0 ? timer(interval, interval) : NEVER; }), takeUntil(_this._destroy$))
                    .subscribe(function () { return _this._ngZone.run(function () { return _this.next(NgbSlideEventSource.TIMER); }); });
            });
        }
        this.slides.changes.pipe(takeUntil(this._destroy$)).subscribe(function () { return _this._cd.markForCheck(); });
    };
    NgbCarousel.prototype.ngAfterContentChecked = function () {
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : '');
    };
    NgbCarousel.prototype.ngOnDestroy = function () { this._destroy$.next(); };
    /**
     * Navigates to a slide with the specified identifier.
     */
    NgbCarousel.prototype.select = function (slideId, source) {
        this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
    };
    /**
     * Navigates to the previous slide.
     */
    NgbCarousel.prototype.prev = function (source) {
        this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT, source);
    };
    /**
     * Navigates to the next slide.
     */
    NgbCarousel.prototype.next = function (source) {
        this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT, source);
    };
    /**
     * Pauses cycling through the slides.
     */
    NgbCarousel.prototype.pause = function () { this._pause$.next(true); };
    /**
     * Restarts cycling through the slides from left to right.
     */
    NgbCarousel.prototype.cycle = function () { this._pause$.next(false); };
    NgbCarousel.prototype._cycleToSelected = function (slideIdx, direction, source) {
        var selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide && selectedSlide.id !== this.activeId) {
            this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction, paused: this._pause$.value, source: source });
            this.activeId = selectedSlide.id;
        }
        // we get here after the interval fires or any external API call like next(), prev() or select()
        this._cd.markForCheck();
    };
    NgbCarousel.prototype._getSlideEventDirection = function (currentActiveSlideId, nextActiveSlideId) {
        var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
        var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
        return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
    };
    NgbCarousel.prototype._getSlideById = function (slideId) {
        return this.slides.find(function (slide) { return slide.id === slideId; }) || null;
    };
    NgbCarousel.prototype._getSlideIdxById = function (slideId) {
        var slide = this._getSlideById(slideId);
        return slide != null ? this.slides.toArray().indexOf(slide) : -1;
    };
    NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    };
    NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    };
    NgbCarousel.ctorParameters = function () { return [
        { type: NgbCarouselConfig },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        ContentChildren(NgbSlide)
    ], NgbCarousel.prototype, "slides", void 0);
    __decorate([
        Input()
    ], NgbCarousel.prototype, "activeId", void 0);
    __decorate([
        Input()
    ], NgbCarousel.prototype, "interval", null);
    __decorate([
        Input()
    ], NgbCarousel.prototype, "wrap", null);
    __decorate([
        Input()
    ], NgbCarousel.prototype, "keyboard", void 0);
    __decorate([
        Input()
    ], NgbCarousel.prototype, "pauseOnHover", null);
    __decorate([
        Input()
    ], NgbCarousel.prototype, "showNavigationArrows", void 0);
    __decorate([
        Input()
    ], NgbCarousel.prototype, "showNavigationIndicators", void 0);
    __decorate([
        Output()
    ], NgbCarousel.prototype, "slide", void 0);
    __decorate([
        HostListener('mouseenter')
    ], NgbCarousel.prototype, "mouseEnter", null);
    __decorate([
        HostListener('mouseleave')
    ], NgbCarousel.prototype, "mouseLeave", null);
    NgbCarousel = __decorate([
        Component({
            selector: 'ngb-carousel',
            exportAs: 'ngbCarousel',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            host: {
                'class': 'carousel slide',
                '[style.display]': '"block"',
                'tabIndex': '0',
                '(keydown.arrowLeft)': 'keyboard && prev(NgbSlideEventSource.ARROW_LEFT)',
                '(keydown.arrowRight)': 'keyboard && next(NgbSlideEventSource.ARROW_RIGHT)'
            },
            template: "\n    <ol class=\"carousel-indicators\" *ngIf=\"showNavigationIndicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"select(slide.id, NgbSlideEventSource.INDICATOR)\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"prev(NgbSlideEventSource.ARROW_LEFT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.previous\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"next(NgbSlideEventSource.ARROW_RIGHT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.next\">Next</span>\n    </a>\n  "
        }),
        __param(1, Inject(PLATFORM_ID))
    ], NgbCarousel);
    return NgbCarousel;
}());
/**
 * Defines the carousel slide transition direction.
 */
var NgbSlideEventDirection;
(function (NgbSlideEventDirection) {
    NgbSlideEventDirection[NgbSlideEventDirection["LEFT"] = 'left'] = "LEFT";
    NgbSlideEventDirection[NgbSlideEventDirection["RIGHT"] = 'right'] = "RIGHT";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
var NgbSlideEventSource;
(function (NgbSlideEventSource) {
    NgbSlideEventSource["TIMER"] = "timer";
    NgbSlideEventSource["ARROW_LEFT"] = "arrowLeft";
    NgbSlideEventSource["ARROW_RIGHT"] = "arrowRight";
    NgbSlideEventSource["INDICATOR"] = "indicator";
})(NgbSlideEventSource || (NgbSlideEventSource = {}));
var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];

var NgbCarouselModule = /** @class */ (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule = __decorate([
        NgModule({ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [CommonModule] })
    ], NgbCarouselModule);
    return NgbCarouselModule;
}());

/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */
var NgbCollapse = /** @class */ (function () {
    function NgbCollapse() {
        /**
         * If `true`, will collapse the element or show it otherwise.
         */
        this.collapsed = false;
    }
    __decorate([
        Input('ngbCollapse')
    ], NgbCollapse.prototype, "collapsed", void 0);
    NgbCollapse = __decorate([
        Directive({
            selector: '[ngbCollapse]',
            exportAs: 'ngbCollapse',
            host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
        })
    ], NgbCollapse);
    return NgbCollapse;
}());

var NgbCollapseModule = /** @class */ (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule = __decorate([
        NgModule({ declarations: [NgbCollapse], exports: [NgbCollapse] })
    ], NgbCollapseModule);
    return NgbCollapseModule;
}());

/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * @since 3.0.0
 */
var NgbDate = /** @class */ (function () {
    function NgbDate(year, month, day) {
        this.year = isInteger(year) ? year : null;
        this.month = isInteger(month) ? month : null;
        this.day = isInteger(day) ? day : null;
    }
    /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     */
    NgbDate.from = function (date) {
        if (date instanceof NgbDate) {
            return date;
        }
        return date ? new NgbDate(date.year, date.month, date.day) : null;
    };
    /**
     * Checks if the current date is equal to another date.
     */
    NgbDate.prototype.equals = function (other) {
        return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    /**
     * Checks if the current date is before another date.
     */
    NgbDate.prototype.before = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    /**
     * Checks if the current date is after another date.
     */
    NgbDate.prototype.after = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    return NgbDate;
}());

function fromJSDate(jsDate) {
    return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
function NGB_DATEPICKER_CALENDAR_FACTORY() {
    return new NgbCalendarGregorian();
}
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 */
var NgbCalendar = /** @class */ (function () {
    function NgbCalendar() {
    }
    NgbCalendar.ɵprov = ɵɵdefineInjectable({ factory: NGB_DATEPICKER_CALENDAR_FACTORY, token: NgbCalendar, providedIn: "root" });
    NgbCalendar = __decorate([
        Injectable({ providedIn: 'root', useFactory: NGB_DATEPICKER_CALENDAR_FACTORY })
    ], NgbCalendar);
    return NgbCalendar;
}());
var NgbCalendarGregorian = /** @class */ (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        var checkMonth = true;
        var expectedMonth = jsDate.getMonth();
        switch (period) {
            case 'y':
                jsDate.setFullYear(jsDate.getFullYear() + number);
                break;
            case 'm':
                expectedMonth += number;
                jsDate.setMonth(expectedMonth);
                expectedMonth = expectedMonth % 12;
                if (expectedMonth < 0) {
                    expectedMonth = expectedMonth + 12;
                }
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                checkMonth = false;
                break;
            default:
                return date;
        }
        if (checkMonth && jsDate.getMonth() !== expectedMonth) {
            // this means the destination month has less days than the initial month
            // let's go back to the end of the previous month:
            jsDate.setDate(0);
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
            return false;
        }
        // year 0 doesn't exist in Gregorian calendar
        if (date.year === 0) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    NgbCalendarGregorian = __decorate([
        Injectable()
    ], NgbCalendarGregorian);
    return NgbCalendarGregorian;
}(NgbCalendar));

function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
function isChangedMonth(prev, next) {
    return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
    }
}
function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return minDate;
    }
    if (date && maxDate && date.after(maxDate)) {
        return maxDate;
    }
    return date || null;
}
function isDateSelectable(date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
    // clang-format off
    return !(date === null ||
        date === undefined ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var months = calendar.getMonths(date.year);
    if (minDate && date.year === minDate.year) {
        var index = months.findIndex(function (month) { return month === minDate.month; });
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        var index = months.findIndex(function (month) { return month === maxDate.month; });
        months = months.slice(0, index + 1);
    }
    return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
    var end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
    var length = end - start + 1;
    var numbers = Array(length);
    for (var i = 0; i < length; i++) {
        numbers[i] = start + i;
    }
    return numbers;
}
function nextMonthDisabled(calendar, date, maxDate) {
    var nextDate = Object.assign(calendar.getNext(date, 'm'), { day: 1 });
    return maxDate != null && nextDate.after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
    var prevDate = Object.assign(calendar.getPrev(date, 'm'), { day: 1 });
    return minDate != null && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
    var displayMonths = state.displayMonths, months = state.months;
    // move old months to a temporary array
    var monthsToReuse = months.splice(0, months.length);
    // generate new first dates, nullify or reuse months
    var firstDates = Array.from({ length: displayMonths }, function (_, i) {
        var firstDate = Object.assign(calendar.getNext(date, 'm', i), { day: 1 });
        months[i] = null;
        if (!force) {
            var reusedIndex = monthsToReuse.findIndex(function (month) { return month.firstDate.equals(firstDate); });
            // move reused month back to months
            if (reusedIndex !== -1) {
                months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
            }
        }
        return firstDate;
    });
    // rebuild nullified months
    firstDates.forEach(function (firstDate, i) {
        if (months[i] === null) {
            months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {});
        }
    });
    return months;
}
function buildMonth(calendar, date, state, i18n, month) {
    if (month === void 0) { month = {}; }
    var dayTemplateData = state.dayTemplateData, minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled, outsideDays = state.outsideDays;
    var calendarToday = calendar.getToday();
    month.firstDate = null;
    month.lastDate = null;
    month.number = date.month;
    month.year = date.year;
    month.weeks = month.weeks || [];
    month.weekdays = month.weekdays || [];
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        var weekObject = month.weeks[week];
        if (!weekObject) {
            weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
        }
        var days = weekObject.days;
        // week has days
        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays[day] = calendar.getWeekday(date);
            }
            var newDate = new NgbDate(date.year, date.month, date.day);
            var nextDate = calendar.getNext(newDate);
            var ariaLabel = i18n.getDayAriaLabel(newDate);
            // marking date as disabled
            var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // today
            var today = newDate.equals(calendarToday);
            // adding user-provided data to the context
            var contextUserData = dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            var dayObject = days[day];
            if (!dayObject) {
                dayObject = days[day] = {};
            }
            dayObject.date = newDate;
            dayObject.context = Object.assign(dayObject.context || {}, {
                $implicit: newDate,
                date: newDate,
                data: contextUserData,
                currentMonth: month.number,
                currentYear: month.year, disabled: disabled,
                focused: false,
                selected: false, today: today
            });
            dayObject.tabindex = -1;
            dayObject.ariaLabel = ariaLabel;
            dayObject.hidden = false;
            date = nextDate;
        }
        weekObject.number = calendar.getWeekNumber(days.map(function (day) { return day.date; }), firstDayOfWeek);
        // marking week as collapsed
        weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
            days[days.length - 1].date.month !== month.number;
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    var daysPerWeek = calendar.getDaysPerWeek();
    var firstMonthDate = new NgbDate(date.year, date.month, 1);
    var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}

function NGB_DATEPICKER_18N_FACTORY(locale) {
    return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */
var NgbDatepickerI18n = /** @class */ (function () {
    function NgbDatepickerI18n() {
    }
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    NgbDatepickerI18n.prototype.getDayNumerals = function (date) { return "" + date.day; };
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    NgbDatepickerI18n.prototype.getWeekNumerals = function (weekNumber) { return "" + weekNumber; };
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    NgbDatepickerI18n.prototype.getYearNumerals = function (year) { return "" + year; };
    NgbDatepickerI18n.ɵprov = ɵɵdefineInjectable({ factory: function NgbDatepickerI18n_Factory() { return NGB_DATEPICKER_18N_FACTORY(ɵɵinject(LOCALE_ID)); }, token: NgbDatepickerI18n, providedIn: "root" });
    NgbDatepickerI18n = __decorate([
        Injectable({ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [LOCALE_ID] })
    ], NgbDatepickerI18n);
    return NgbDatepickerI18n;
}());
var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault(_locale) {
        var _this = _super.call(this) || this;
        _this._locale = _locale;
        var weekdaysStartingOnSunday = getLocaleDayNames(_locale, FormStyle.Standalone, TranslationWidth.Short);
        _this._weekdaysShort = weekdaysStartingOnSunday.map(function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; });
        _this._monthsShort = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
        _this._monthsFull = getLocaleMonthNames(_locale, FormStyle.Standalone, TranslationWidth.Wide);
        return _this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return this._weekdaysShort[weekday - 1] || ''; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return this._monthsShort[month - 1] || ''; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return this._monthsFull[month - 1] || ''; };
    NgbDatepickerI18nDefault.prototype.getDayAriaLabel = function (date) {
        var jsDate = new Date(date.year, date.month - 1, date.day);
        return formatDate(jsDate, 'fullDate', this._locale);
    };
    NgbDatepickerI18nDefault.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgbDatepickerI18nDefault = __decorate([
        Injectable(),
        __param(0, Inject(LOCALE_ID))
    ], NgbDatepickerI18nDefault);
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

var NgbDatepickerService = /** @class */ (function () {
    function NgbDatepickerService(_calendar, _i18n) {
        var _this = this;
        this._calendar = _calendar;
        this._i18n = _i18n;
        this._VALIDATORS = {
            dayTemplateData: function (dayTemplateData) {
                if (_this._state.dayTemplateData !== dayTemplateData) {
                    return { dayTemplateData: dayTemplateData };
                }
            },
            displayMonths: function (displayMonths) {
                displayMonths = toInteger(displayMonths);
                if (isInteger(displayMonths) && displayMonths > 0 && _this._state.displayMonths !== displayMonths) {
                    return { displayMonths: displayMonths };
                }
            },
            disabled: function (disabled) {
                if (_this._state.disabled !== disabled) {
                    return { disabled: disabled };
                }
            },
            firstDayOfWeek: function (firstDayOfWeek) {
                firstDayOfWeek = toInteger(firstDayOfWeek);
                if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && _this._state.firstDayOfWeek !== firstDayOfWeek) {
                    return { firstDayOfWeek: firstDayOfWeek };
                }
            },
            focusVisible: function (focusVisible) {
                if (_this._state.focusVisible !== focusVisible && !_this._state.disabled) {
                    return { focusVisible: focusVisible };
                }
            },
            markDisabled: function (markDisabled) {
                if (_this._state.markDisabled !== markDisabled) {
                    return { markDisabled: markDisabled };
                }
            },
            maxDate: function (date) {
                var maxDate = _this.toValidDate(date, null);
                if (isChangedDate(_this._state.maxDate, maxDate)) {
                    return { maxDate: maxDate };
                }
            },
            minDate: function (date) {
                var minDate = _this.toValidDate(date, null);
                if (isChangedDate(_this._state.minDate, minDate)) {
                    return { minDate: minDate };
                }
            },
            navigation: function (navigation) {
                if (_this._state.navigation !== navigation) {
                    return { navigation: navigation };
                }
            },
            outsideDays: function (outsideDays) {
                if (_this._state.outsideDays !== outsideDays) {
                    return { outsideDays: outsideDays };
                }
            }
        };
        this._model$ = new Subject();
        this._dateSelect$ = new Subject();
        this._state = {
            dayTemplateData: null,
            markDisabled: null,
            maxDate: null,
            minDate: null,
            disabled: false,
            displayMonths: 1,
            firstDate: null,
            firstDayOfWeek: 1,
            lastDate: null,
            focusDate: null,
            focusVisible: false,
            months: [],
            navigation: 'select',
            outsideDays: 'visible',
            prevDisabled: false,
            nextDisabled: false,
            selectedDate: null,
            selectBoxes: { years: [], months: [] }
        };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: function () { return this._model$.pipe(filter(function (model) { return model.months.length > 0; })); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "dateSelect$", {
        get: function () { return this._dateSelect$.pipe(filter(function (date) { return date !== null; })); },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerService.prototype.set = function (options) {
        var _this = this;
        var patch = Object.keys(options)
            .map(function (key) { return _this._VALIDATORS[key](options[key]); })
            .reduce(function (obj, part) { return (__assign(__assign({}, obj), part)); }, {});
        if (Object.keys(patch).length > 0) {
            this._nextState(patch);
        }
    };
    NgbDatepickerService.prototype.focus = function (date) {
        var focusedDate = this.toValidDate(date, null);
        if (focusedDate != null && !this._state.disabled && isChangedDate(this._state.focusDate, focusedDate)) {
            this._nextState({ focusDate: date });
        }
    };
    NgbDatepickerService.prototype.focusSelect = function () {
        if (isDateSelectable(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    };
    NgbDatepickerService.prototype.open = function (date) {
        var firstDate = this.toValidDate(date, this._calendar.getToday());
        if (firstDate != null && !this._state.disabled &&
            (!this._state.firstDate || isChangedMonth(this._state.firstDate, firstDate))) {
            this._nextState({ firstDate: firstDate });
        }
    };
    NgbDatepickerService.prototype.select = function (date, options) {
        if (options === void 0) { options = {}; }
        var selectedDate = this.toValidDate(date, null);
        if (selectedDate != null && !this._state.disabled) {
            if (isChangedDate(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate: selectedDate });
            }
            if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
                this._dateSelect$.next(selectedDate);
            }
        }
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = NgbDate.from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    NgbDatepickerService.prototype.getMonth = function (struct) {
        var e_1, _a;
        try {
            for (var _b = __values(this._state.months), _c = _b.next(); !_c.done; _c = _b.next()) {
                var month = _c.value;
                if (struct.month === month.number && struct.year === month.year) {
                    return month;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        throw new Error("month " + struct.month + " of year " + struct.year + " not found");
    };
    NgbDatepickerService.prototype._nextState = function (patch) {
        var newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    };
    NgbDatepickerService.prototype._patchContexts = function (state) {
        var months = state.months, displayMonths = state.displayMonths, selectedDate = state.selectedDate, focusDate = state.focusDate, focusVisible = state.focusVisible, disabled = state.disabled, outsideDays = state.outsideDays;
        state.months.forEach(function (month) {
            month.weeks.forEach(function (week) {
                week.days.forEach(function (day) {
                    // patch focus flag
                    if (focusDate) {
                        day.context.focused = focusDate.equals(day.date) && focusVisible;
                    }
                    // calculating tabindex
                    day.tabindex =
                        !disabled && focusDate && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
                    // override context disabled
                    if (disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (selectedDate !== undefined) {
                        day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
                    }
                    // visibility
                    if (month.number !== day.date.month) {
                        day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' ||
                            (displayMonths > 1 && day.date.after(months[0].firstDate) &&
                                day.date.before(months[displayMonths - 1].lastDate));
                    }
                });
            });
        });
    };
    NgbDatepickerService.prototype._updateState = function (patch) {
        // patching fields
        var state = Object.assign({}, this._state, patch);
        var startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            checkMinBeforeMax(state.minDate, state.maxDate);
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // terminate early if only focus visibility was changed
        if ('focusVisible' in patch) {
            return state;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && state.focusDate && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            var forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch ||
                'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch;
            var months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months[0].firstDate;
            state.lastDate = months[months.length - 1].lastDate;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (!state.focusDate || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    };
    NgbDatepickerService.ctorParameters = function () { return [
        { type: NgbCalendar },
        { type: NgbDatepickerI18n }
    ]; };
    NgbDatepickerService = __decorate([
        Injectable()
    ], NgbDatepickerService);
    return NgbDatepickerService;
}());

// clang-format on
var NavigationEvent;
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));

/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = /** @class */ (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    NgbDatepickerConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbDatepickerConfig_Factory() { return new NgbDatepickerConfig(); }, token: NgbDatepickerConfig, providedIn: "root" });
    NgbDatepickerConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbDatepickerConfig);
    return NgbDatepickerConfig;
}());

function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
    return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.ɵprov = ɵɵdefineInjectable({ factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY, token: NgbDateAdapter, providedIn: "root" });
    NgbDateAdapter = __decorate([
        Injectable({ providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY })
    ], NgbDateAdapter);
    return NgbDateAdapter;
}());
var NgbDateStructAdapter = /** @class */ (function (_super) {
    __extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    NgbDateStructAdapter.prototype.fromModel = function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    NgbDateStructAdapter.prototype.toModel = function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    NgbDateStructAdapter = __decorate([
        Injectable()
    ], NgbDateStructAdapter);
    return NgbDateStructAdapter;
}(NgbDateAdapter));

var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A directive that marks the content template that customizes the way datepicker months are displayed
 *
 * @since 5.3.0
 */
var NgbDatepickerContent = /** @class */ (function () {
    function NgbDatepickerContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbDatepickerContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbDatepickerContent = __decorate([
        Directive({ selector: 'ng-template[ngbDatepickerContent]' })
    ], NgbDatepickerContent);
    return NgbDatepickerContent;
}());
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
var NgbDatepicker = /** @class */ (function () {
    function NgbDatepicker(_service, _calendar, i18n, config, cd, _elementRef, _ngbDateAdapter, _ngZone) {
        var _this = this;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        this._controlValue = null;
        this._destroyed$ = new Subject();
        this._publicState = {};
        /**
         * An event emitted right before the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new EventEmitter();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * @since 5.2.0
         */
        this.dateSelect = new EventEmitter();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * @deprecated 6.0.0 Please use 'dateSelect' output instead due to collision with native
         * 'select' event.
         */
        this.select = this.dateSelect;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
            'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
            .forEach(function (input) { return _this[input] = config[input]; });
        _service.dateSelect$.pipe(takeUntil(this._destroyed$)).subscribe(function (date) { _this.dateSelect.emit(date); });
        _service.model$.pipe(takeUntil(this._destroyed$)).subscribe(function (model) {
            var newDate = model.firstDate;
            var oldDate = _this.model ? _this.model.firstDate : null;
            // update public state
            _this._publicState = {
                maxDate: model.maxDate,
                minDate: model.minDate,
                firstDate: model.firstDate,
                lastDate: model.lastDate,
                focusedDate: model.focusDate,
                months: model.months.map(function (viewModel) { return viewModel.firstDate; })
            };
            var navigationPrevented = false;
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                _this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month },
                    preventDefault: function () { return navigationPrevented = true; }
                });
                // can't prevent the very first navigation
                if (navigationPrevented && oldDate !== null) {
                    _this._service.open(oldDate);
                    return;
                }
            }
            var newSelectedDate = model.selectedDate;
            var newFocusedDate = model.focusDate;
            var oldFocusedDate = _this.model ? _this.model.focusDate : null;
            _this.model = model;
            // handling selection change
            if (isChangedDate(newSelectedDate, _this._controlValue)) {
                _this._controlValue = newSelectedDate;
                _this.onTouched();
                _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                _this.focus();
            }
            cd.markForCheck();
        });
    }
    Object.defineProperty(NgbDatepicker.prototype, "state", {
        /**
         *  Returns the readonly public state of the datepicker
         *
         * @since 5.2.0
         */
        get: function () { return this._publicState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepicker.prototype, "calendar", {
        /**
         *  Returns the calendar service used in the specific datepicker instance.
         *
         *  @since 5.3.0
         */
        get: function () { return this._calendar; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Focuses on given date.
     */
    NgbDatepicker.prototype.focusDate = function (date) { this._service.focus(NgbDate.from(date)); };
    /**
     *  Selects focused date.
     */
    NgbDatepicker.prototype.focusSelect = function () { this._service.focusSelect(); };
    NgbDatepicker.prototype.focus = function () {
        var _this = this;
        this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(function () {
            var elementToFocus = _this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
            if (elementToFocus) {
                elementToFocus.focus();
            }
        });
    };
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    NgbDatepicker.prototype.navigateTo = function (date) {
        this._service.open(NgbDate.from(date ? date.day ? date : __assign(__assign({}, date), { day: 1 }) : null));
    };
    NgbDatepicker.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            var focusIns$ = fromEvent(_this._contentEl.nativeElement, 'focusin');
            var focusOuts$ = fromEvent(_this._contentEl.nativeElement, 'focusout');
            var nativeElement = _this._elementRef.nativeElement;
            // we're changing 'focusVisible' only when entering or leaving months view
            // and ignoring all focus events where both 'target' and 'related' target are day cells
            merge(focusIns$, focusOuts$)
                .pipe(filter(function (_a) {
                var target = _a.target, relatedTarget = _a.relatedTarget;
                return !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day') &&
                    nativeElement.contains(target) && nativeElement.contains(relatedTarget));
            }), takeUntil(_this._destroyed$))
                .subscribe(function (_a) {
                var type = _a.type;
                return _this._ngZone.run(function () { return _this._service.set({ focusVisible: type === 'focusin' }); });
            });
        });
    };
    NgbDatepicker.prototype.ngOnDestroy = function () { this._destroyed$.next(); };
    NgbDatepicker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model === undefined) {
            var inputs_1 = {};
            ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                'outsideDays']
                .forEach(function (name) { return inputs_1[name] = _this[name]; });
            this._service.set(inputs_1);
            this.navigateTo(this.startDate);
        }
        if (!this.dayTemplate) {
            this.dayTemplate = this._defaultDayTemplate;
        }
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var inputs = {};
        ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
            'outsideDays']
            .filter(function (name) { return name in changes; })
            .forEach(function (name) { return inputs[name] = _this[name]; });
        this._service.set(inputs);
        if ('startDate' in changes) {
            var _a = changes.startDate, currentValue = _a.currentValue, previousValue = _a.previousValue;
            if (isChangedMonth(previousValue, currentValue)) {
                this.navigateTo(this.startDate);
            }
        }
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) { this._service.open(date); };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case NavigationEvent.PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case NavigationEvent.NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.setDisabledState = function (disabled) { this._service.set({ disabled: disabled }); };
    NgbDatepicker.prototype.writeValue = function (value) {
        this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
        this._service.select(this._controlValue);
    };
    NgbDatepicker.ctorParameters = function () { return [
        { type: NgbDatepickerService },
        { type: NgbCalendar },
        { type: NgbDatepickerI18n },
        { type: NgbDatepickerConfig },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgbDateAdapter },
        { type: NgZone }
    ]; };
    __decorate([
        ViewChild('defaultDayTemplate', { static: true })
    ], NgbDatepicker.prototype, "_defaultDayTemplate", void 0);
    __decorate([
        ViewChild('content', { static: true })
    ], NgbDatepicker.prototype, "_contentEl", void 0);
    __decorate([
        ContentChild(NgbDatepickerContent, { static: true })
    ], NgbDatepicker.prototype, "contentTemplate", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "dayTemplate", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "dayTemplateData", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "displayMonths", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "firstDayOfWeek", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "footerTemplate", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "markDisabled", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "maxDate", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "minDate", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "navigation", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "outsideDays", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "showWeekdays", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "showWeekNumbers", void 0);
    __decorate([
        Input()
    ], NgbDatepicker.prototype, "startDate", void 0);
    __decorate([
        Output()
    ], NgbDatepicker.prototype, "navigate", void 0);
    __decorate([
        Output()
    ], NgbDatepicker.prototype, "dateSelect", void 0);
    __decorate([
        Output()
    ], NgbDatepicker.prototype, "select", void 0);
    NgbDatepicker = __decorate([
        Component({
            exportAs: 'ngbDatepicker',
            selector: 'ngb-datepicker',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "\n    <ng-template #defaultDayTemplate let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\"\n                 let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <ng-template #defaultContentTemplate>\n      <div *ngFor=\"let month of model.months; let i = index;\" class=\"ngb-dp-month\">\n        <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\" class=\"ngb-dp-month-name\">\n          {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n        </div>\n        <ngb-datepicker-month [month]=\"month.firstDate\"></ngb-datepicker-month>\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate!\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-content\" [class.ngb-dp-months]=\"!contentTemplate\" #content>\n      <ng-template [ngTemplateOutlet]=\"contentTemplate?.templateRef || defaultContentTemplate\"></ng-template>\n    </div>\n\n    <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n  ",
            providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService],
            styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"]
        })
    ], NgbDatepicker);
    return NgbDatepicker;
}());

var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["PageUp"] = 33] = "PageUp";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));

/**
 * A service that represents the keyboard navigation.
 *
 * Default keyboard shortcuts [are documented in the overview](#/components/datepicker/overview#keyboard-shortcuts)
 *
 * @since 5.2.0
 */
var NgbDatepickerKeyboardService = /** @class */ (function () {
    function NgbDatepickerKeyboardService() {
    }
    /**
     * Processes a keyboard event.
     */
    NgbDatepickerKeyboardService.prototype.processKey = function (event, datepicker) {
        var state = datepicker.state, calendar = datepicker.calendar;
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.PageUp:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
                break;
            case Key.PageDown:
                datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
                break;
            case Key.End:
                datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
                break;
            case Key.Home:
                datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
                break;
            case Key.ArrowLeft:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', 1));
                break;
            case Key.ArrowUp:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', calendar.getDaysPerWeek()));
                break;
            case Key.ArrowRight:
                datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', 1));
                break;
            case Key.ArrowDown:
                datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', calendar.getDaysPerWeek()));
                break;
            case Key.Enter:
            case Key.Space:
                datepicker.focusSelect();
                break;
            default:
                return;
        }
        event.preventDefault();
        event.stopPropagation();
    };
    NgbDatepickerKeyboardService.ɵprov = ɵɵdefineInjectable({ factory: function NgbDatepickerKeyboardService_Factory() { return new NgbDatepickerKeyboardService(); }, token: NgbDatepickerKeyboardService, providedIn: "root" });
    NgbDatepickerKeyboardService = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbDatepickerKeyboardService);
    return NgbDatepickerKeyboardService;
}());

/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */
var NgbDatepickerMonth = /** @class */ (function () {
    function NgbDatepickerMonth(i18n, datepicker, _keyboardService, _service) {
        this.i18n = i18n;
        this.datepicker = datepicker;
        this._keyboardService = _keyboardService;
        this._service = _service;
    }
    Object.defineProperty(NgbDatepickerMonth.prototype, "month", {
        /**
         * The first date of month to be rendered.
         *
         * This month must one of the months present in the
         * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
         */
        set: function (month) {
            this.viewModel = this._service.getMonth(month);
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerMonth.prototype.onKeyDown = function (event) { this._keyboardService.processKey(event, this.datepicker); };
    NgbDatepickerMonth.prototype.doSelect = function (day) {
        if (!day.context.disabled && !day.hidden) {
            this.datepicker.onDateSelect(day.date);
        }
    };
    NgbDatepickerMonth.ctorParameters = function () { return [
        { type: NgbDatepickerI18n },
        { type: NgbDatepicker },
        { type: NgbDatepickerKeyboardService },
        { type: NgbDatepickerService }
    ]; };
    __decorate([
        Input()
    ], NgbDatepickerMonth.prototype, "month", null);
    NgbDatepickerMonth = __decorate([
        Component({
            selector: 'ngb-datepicker-month',
            host: { 'role': 'grid', '(keydown)': 'onKeyDown($event)' },
            encapsulation: ViewEncapsulation.None,
            template: "\n    <div *ngIf=\"datepicker.showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays\" role=\"row\">\n      <div *ngIf=\"datepicker.showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of viewModel.weekdays\" class=\"ngb-dp-weekday small\" role=\"columnheader\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"viewModel.weeks\">\n      <div *ngIf=\"!week.collapsed\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"datepicker.showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ i18n.getWeekNumerals(week.number) }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day); $event.preventDefault()\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"day.hidden\"\n          [class.ngb-dp-today]=\"day.context.today\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!day.hidden\">\n            <ng-template [ngTemplateOutlet]=\"datepicker.dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  ",
            styles: ["ngb-datepicker-month{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}"]
        })
    ], NgbDatepickerMonth);
    return NgbDatepickerMonth;
}());

var NgbDatepickerNavigation = /** @class */ (function () {
    function NgbDatepickerNavigation(i18n) {
        this.i18n = i18n;
        this.navigation = NavigationEvent;
        this.months = [];
        this.navigate = new EventEmitter();
        this.select = new EventEmitter();
    }
    NgbDatepickerNavigation.prototype.onClickPrev = function (event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.PREV);
    };
    NgbDatepickerNavigation.prototype.onClickNext = function (event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.NEXT);
    };
    NgbDatepickerNavigation.ctorParameters = function () { return [
        { type: NgbDatepickerI18n }
    ]; };
    __decorate([
        Input()
    ], NgbDatepickerNavigation.prototype, "date", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigation.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigation.prototype, "months", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigation.prototype, "showSelect", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigation.prototype, "prevDisabled", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigation.prototype, "nextDisabled", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigation.prototype, "selectBoxes", void 0);
    __decorate([
        Output()
    ], NgbDatepickerNavigation.prototype, "navigate", void 0);
    __decorate([
        Output()
    ], NgbDatepickerNavigation.prototype, "select", void 0);
    NgbDatepickerNavigation = __decorate([
        Component({
            selector: 'ngb-datepicker-navigation',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "\n    <div class=\"ngb-dp-arrow\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickPrev($event)\" [disabled]=\"prevDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.previous-month\" aria-label=\"Previous month\"\n              i18n-title=\"@@ngb.datepicker.previous-month\" title=\"Previous month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name\">\n        {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickNext($event)\" [disabled]=\"nextDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.next-month\" aria-label=\"Next month\"\n              i18n-title=\"@@ngb.datepicker.next-month\" title=\"Next month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    ",
            styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"]
        })
    ], NgbDatepickerNavigation);
    return NgbDatepickerNavigation;
}());

var isContainedIn = function (element, array) {
    return array ? array.some(function (item) { return item.contains(element); }) : false;
};
var ɵ0 = isContainedIn;
var matchesSelectorIfAny = function (element, selector) {
    return !selector || closest(element, selector) != null;
};
var ɵ1 = matchesSelectorIfAny;
var ɵ2 = function () {
    var isIOS = function () { return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2); };
    var isAndroid = function () { return /Android/.test(navigator.userAgent); };
    return typeof navigator !== 'undefined' ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
};
// we have to add a more significant delay to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
var isMobile = (ɵ2)();
// setting 'ngbAutoClose' synchronously on mobile results in immediate popup closing
// when tapping on the triggering element
var wrapAsyncForMobile = function (fn) { return isMobile ? function () { return setTimeout(function () { return fn(); }, 100); } : fn; };
var ɵ3 = wrapAsyncForMobile;
function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
    // closing on ESC and outside clicks
    if (type) {
        zone.runOutsideAngular(wrapAsyncForMobile(function () {
            var shouldCloseOnClick = function (event) {
                var element = event.target;
                if (event.button === 2 || isContainedIn(element, ignoreElements)) {
                    return false;
                }
                if (type === 'inside') {
                    return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
                }
                else if (type === 'outside') {
                    return !isContainedIn(element, insideElements);
                }
                else /* if (type === true) */ {
                    return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
                }
            };
            var escapes$ = fromEvent(document, 'keydown')
                .pipe(takeUntil(closed$), 
            // tslint:disable-next-line:deprecation
            filter(function (e) { return e.which === Key.Escape; }), tap(function (e) { return e.preventDefault(); }));
            // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown',
            // because on 'mouseup' DOM nodes might be detached
            var mouseDowns$ = fromEvent(document, 'mousedown').pipe(map(shouldCloseOnClick), takeUntil(closed$));
            var closeableClicks$ = fromEvent(document, 'mouseup')
                .pipe(withLatestFrom(mouseDowns$), filter(function (_a) {
                var _b = __read(_a, 2), _ = _b[0], shouldClose = _b[1];
                return shouldClose;
            }), delay(0), takeUntil(closed$));
            race([escapes$, closeableClicks$]).subscribe(function () { return zone.run(close); });
        }));
    }
}

var FOCUSABLE_ELEMENTS_SELECTOR = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
    'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
].join(', ');
/**
 * Returns first and last focusable elements inside of a given element based on specific CSS selector
 */
function getFocusableBoundaryElements(element) {
    var list = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR))
        .filter(function (el) { return el.tabIndex !== -1; });
    return [list[0], list[list.length - 1]];
}
/**
 * Function that enforces browser focus to be trapped inside a DOM element.
 *
 * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
 *
 * @param zone Angular zone
 * @param element The element around which focus will be trapped inside
 * @param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
 * and free internal resources
 * @param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
 * false)
 */
var ngbFocusTrap = function (zone, element, stopFocusTrap$, refocusOnClick) {
    if (refocusOnClick === void 0) { refocusOnClick = false; }
    zone.runOutsideAngular(function () {
        // last focused element
        var lastFocusedElement$ = fromEvent(element, 'focusin').pipe(takeUntil(stopFocusTrap$), map(function (e) { return e.target; }));
        // 'tab' / 'shift+tab' stream
        fromEvent(element, 'keydown')
            .pipe(takeUntil(stopFocusTrap$), 
        // tslint:disable:deprecation
        filter(function (e) { return e.which === Key.Tab; }), 
        // tslint:enable:deprecation
        withLatestFrom(lastFocusedElement$))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), tabEvent = _b[0], focusedElement = _b[1];
            var _c = __read(getFocusableBoundaryElements(element), 2), first = _c[0], last = _c[1];
            if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
                last.focus();
                tabEvent.preventDefault();
            }
            if (focusedElement === last && !tabEvent.shiftKey) {
                first.focus();
                tabEvent.preventDefault();
            }
        });
        // inside click
        if (refocusOnClick) {
            fromEvent(element, 'click')
                .pipe(takeUntil(stopFocusTrap$), withLatestFrom(lastFocusedElement$), map(function (arr) { return arr[1]; }))
                .subscribe(function (lastFocusedElement) { return lastFocusedElement.focus(); });
        }
    });
};

// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /*
      Return false if the element to position is outside the viewport
    */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var _a = __read(placement.split('-'), 2), _b = _a[0], placementPrimary = _b === void 0 ? 'top' : _b, _c = _a[1], placementSecondary = _c === void 0 ? 'center' : _c;
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var marginTop = parseFloat(targetElStyles.marginTop);
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        var marginRight = parseFloat(targetElStyles.marginRight);
        var topPosition = 0;
        var leftPosition = 0;
        switch (placementPrimary) {
            case 'top':
                topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                break;
            case 'bottom':
                topPosition = (hostElPosition.top + hostElPosition.height);
                break;
            case 'left':
                leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                break;
            case 'right':
                leftPosition = (hostElPosition.left + hostElPosition.width);
                break;
        }
        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                }
                else {
                    topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                }
                break;
        }
        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
        // Check if the targetElement is inside the viewport
        var targetElBCR = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight;
    };
    return Positioning;
}());
var placementSeparator = /\s+/;
var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
    var e_1, _a;
    var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
    var allowedPlacements = [
        'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
        'right-top', 'right-bottom'
    ];
    var classList = targetElement.classList;
    var addClassesToTarget = function (targetPlacement) {
        var _a = __read(targetPlacement.split('-'), 2), primary = _a[0], secondary = _a[1];
        var classes = [];
        if (baseClass) {
            classes.push(baseClass + "-" + primary);
            if (secondary) {
                classes.push(baseClass + "-" + primary + "-" + secondary);
            }
            classes.forEach(function (classname) { classList.add(classname); });
        }
        return classes;
    };
    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach(function (placementToRemove) { classList.remove(baseClass + "-" + placementToRemove); });
    }
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    // Required for transform:
    var style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';
    var testPlacement = null;
    var isInViewport = false;
    try {
        for (var placementVals_1 = __values(placementVals), placementVals_1_1 = placementVals_1.next(); !placementVals_1_1.done; placementVals_1_1 = placementVals_1.next()) {
            testPlacement = placementVals_1_1.value;
            var addedClasses = addClassesToTarget(testPlacement);
            if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
                isInViewport = true;
                break;
            }
            // Remove the baseClasses for further calculation
            if (baseClass) {
                addedClasses.forEach(function (classname) { classList.remove(classname); });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (placementVals_1_1 && !placementVals_1_1.done && (_a = placementVals_1.return)) _a.call(placementVals_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }
    return testPlacement;
}

function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
    return new NgbDateISOParserFormatter();
}
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 */
var NgbDateParserFormatter = /** @class */ (function () {
    function NgbDateParserFormatter() {
    }
    NgbDateParserFormatter.ɵprov = ɵɵdefineInjectable({ factory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY, token: NgbDateParserFormatter, providedIn: "root" });
    NgbDateParserFormatter = __decorate([
        Injectable({ providedIn: 'root', useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY })
    ], NgbDateParserFormatter);
    return NgbDateParserFormatter;
}());
var NgbDateISOParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value != null) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ?
            date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '') :
            '';
    };
    NgbDateISOParserFormatter = __decorate([
        Injectable()
    ], NgbDateISOParserFormatter);
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));

/**
 * A configuration service for the [`NgbDatepickerInput`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepicker inputs used in the application.
 *
 * @since 5.2.0
 */
var NgbInputDatepickerConfig = /** @class */ (function (_super) {
    __extends(NgbInputDatepickerConfig, _super);
    function NgbInputDatepickerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoClose = true;
        _this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        _this.restoreFocus = true;
        return _this;
    }
    NgbInputDatepickerConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbInputDatepickerConfig_Factory() { return new NgbInputDatepickerConfig(); }, token: NgbInputDatepickerConfig, providedIn: "root" });
    NgbInputDatepickerConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbInputDatepickerConfig);
    return NgbInputDatepickerConfig;
}(NgbDatepickerConfig));

var NGB_DATEPICKER_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbInputDatepicker; }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return NgbInputDatepicker; }),
    multi: true
};
/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */
var NgbInputDatepicker = /** @class */ (function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, _ngZone, _calendar, _dateAdapter, _document, _changeDetector, config) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._ngZone = _ngZone;
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._document = _document;
        this._changeDetector = _changeDetector;
        this._cRef = null;
        this._disabled = false;
        this._elWithFocus = null;
        this._model = null;
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * @since 1.1.1
         */
        this.dateSelect = new EventEmitter();
        /**
         * Event emitted right after the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new EventEmitter();
        /**
         * An event fired after closing datepicker window.
         *
         * @since 4.2.0
         */
        this.closed = new EventEmitter();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this._validatorChange = function () { };
        ['autoClose', 'container', 'positionTarget', 'placement'].forEach(function (input) { return _this[input] = config[input]; });
        this._zoneSubscription = _ngZone.onStable.subscribe(function () { return _this._updatePopupPosition(); });
    }
    Object.defineProperty(NgbInputDatepicker.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value === '' || (value && value !== 'false');
            if (this.isOpen()) {
                this._cRef.instance.setDisabledState(this._disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbInputDatepicker.prototype.validate = function (c) {
        var value = c.value;
        if (value != null) {
            var ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
            if (!ngbDate) {
                return { 'ngbDate': { invalid: value } };
            }
            if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
                return { 'ngbDate': { minDate: { minDate: this.minDate, actual: value } } };
            }
            if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
                return { 'ngbDate': { maxDate: { maxDate: this.maxDate, actual: value } } };
            }
        }
        return null;
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value, updateView) {
        if (updateView === void 0) { updateView = false; }
        var inputValueChanged = value !== this._inputValue;
        if (inputValueChanged) {
            this._inputValue = value;
            this._model = this._fromDateStruct(this._parserFormatter.parse(value));
        }
        if (inputValueChanged || !updateView) {
            this._onChange(this._model ? this._dateAdapter.toModel(this._model) : (value === '' ? null : value));
        }
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    };
    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
    /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     */
    NgbInputDatepicker.prototype.open = function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(NgbDatepicker);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
            // date selection event handling
            this._cRef.instance.registerOnChange(function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
                _this._onTouched();
            });
            this._cRef.changeDetectorRef.detectChanges();
            this._cRef.instance.setDisabledState(this.disabled);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
            }
            // focus handling
            this._elWithFocus = this._document.activeElement;
            ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
            this._cRef.instance.focus();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this.closed, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
        }
    };
    /**
     * Closes the datepicker popup.
     */
    NgbInputDatepicker.prototype.close = function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
            this.closed.emit();
            this._changeDetector.markForCheck();
            // restore focus
            var elementToFocus = this._elWithFocus;
            if (isString(this.restoreFocus)) {
                elementToFocus = this._document.querySelector(this.restoreFocus);
            }
            else if (this.restoreFocus !== undefined) {
                elementToFocus = this.restoreFocus;
            }
            // in IE document.activeElement can contain an object without 'focus()' sometimes
            if (elementToFocus && elementToFocus['focus']) {
                elementToFocus.focus();
            }
            else {
                this._document.body.focus();
            }
        }
    };
    /**
     * Toggles the datepicker popup.
     */
    NgbInputDatepicker.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    NgbInputDatepicker.prototype.navigateTo = function (date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    };
    NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
    NgbInputDatepicker.prototype.onFocus = function () { this._elWithFocus = this._elRef.nativeElement; };
    NgbInputDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
            if (this.isOpen()) {
                if (changes['minDate']) {
                    this._cRef.instance.minDate = this._dateAdapter.toModel(changes.minDate.currentValue);
                }
                if (changes['maxDate']) {
                    this._cRef.instance.maxDate = this._dateAdapter.toModel(changes.maxDate.currentValue);
                }
                this._cRef.instance.ngOnChanges(changes);
            }
        }
    };
    NgbInputDatepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._zoneSubscription.unsubscribe();
    };
    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
        var _this = this;
        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
            'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach(function (optionName) {
            if (_this[optionName] !== undefined) {
                datepickerInstance[optionName] = _this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    };
    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
        this._renderer.addClass(nativeElement, 'dropdown-menu');
        this._renderer.addClass(nativeElement, 'show');
        if (this.container === 'body') {
            this._renderer.addClass(nativeElement, 'ngb-dp-body');
        }
    };
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe(function (navigateEvent) { return _this.navigate.emit(navigateEvent); });
        datepickerInstance.dateSelect.subscribe(function (date) {
            _this.dateSelect.emit(date);
            if (_this.autoClose === true || _this.autoClose === 'inside') {
                _this.close();
            }
        });
    };
    NgbInputDatepicker.prototype._writeModelValue = function (model) {
        var value = this._parserFormatter.format(model);
        this._inputValue = value;
        this._renderer.setProperty(this._elRef.nativeElement, 'value', value);
        if (this.isOpen()) {
            this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
            this._onTouched();
        }
    };
    NgbInputDatepicker.prototype._fromDateStruct = function (date) {
        var ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
        return this._calendar.isValid(ngbDate) ? ngbDate : null;
    };
    NgbInputDatepicker.prototype._updatePopupPosition = function () {
        if (!this._cRef) {
            return;
        }
        var hostElement;
        if (isString(this.positionTarget)) {
            hostElement = this._document.querySelector(this.positionTarget);
        }
        else if (this.positionTarget instanceof HTMLElement) {
            hostElement = this.positionTarget;
        }
        else {
            hostElement = this._elRef.nativeElement;
        }
        if (this.positionTarget && !hostElement) {
            throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
        }
        positionElements(hostElement, this._cRef.location.nativeElement, this.placement, this.container === 'body');
    };
    NgbInputDatepicker.ctorParameters = function () { return [
        { type: NgbDateParserFormatter },
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: ComponentFactoryResolver },
        { type: NgZone },
        { type: NgbCalendar },
        { type: NgbDateAdapter },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: NgbInputDatepickerConfig }
    ]; };
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "autoClose", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "dayTemplate", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "dayTemplateData", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "displayMonths", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "firstDayOfWeek", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "footerTemplate", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "markDisabled", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "minDate", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "maxDate", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "navigation", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "outsideDays", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "placement", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "restoreFocus", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "showWeekdays", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "showWeekNumbers", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "startDate", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "container", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "positionTarget", void 0);
    __decorate([
        Output()
    ], NgbInputDatepicker.prototype, "dateSelect", void 0);
    __decorate([
        Output()
    ], NgbInputDatepicker.prototype, "navigate", void 0);
    __decorate([
        Output()
    ], NgbInputDatepicker.prototype, "closed", void 0);
    __decorate([
        Input()
    ], NgbInputDatepicker.prototype, "disabled", null);
    NgbInputDatepicker = __decorate([
        Directive({
            selector: 'input[ngbDatepicker]',
            exportAs: 'ngbDatepicker',
            host: {
                '(input)': 'manualDateChange($event.target.value)',
                '(change)': 'manualDateChange($event.target.value, true)',
                '(focus)': 'onFocus()',
                '(blur)': 'onBlur()',
                '[disabled]': 'disabled'
            },
            providers: [
                NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR,
                { provide: NgbDatepickerConfig, useExisting: NgbInputDatepickerConfig }
            ],
        }),
        __param(8, Inject(DOCUMENT))
    ], NgbInputDatepicker);
    return NgbInputDatepicker;
}());

var NgbDatepickerDayView = /** @class */ (function () {
    function NgbDatepickerDayView(i18n) {
        this.i18n = i18n;
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    NgbDatepickerDayView.ctorParameters = function () { return [
        { type: NgbDatepickerI18n }
    ]; };
    __decorate([
        Input()
    ], NgbDatepickerDayView.prototype, "currentMonth", void 0);
    __decorate([
        Input()
    ], NgbDatepickerDayView.prototype, "date", void 0);
    __decorate([
        Input()
    ], NgbDatepickerDayView.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbDatepickerDayView.prototype, "focused", void 0);
    __decorate([
        Input()
    ], NgbDatepickerDayView.prototype, "selected", void 0);
    NgbDatepickerDayView = __decorate([
        Component({
            selector: '[ngbDatepickerDayView]',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            host: {
                'class': 'btn-light',
                '[class.bg-primary]': 'selected',
                '[class.text-white]': 'selected',
                '[class.text-muted]': 'isMuted()',
                '[class.outside]': 'isMuted()',
                '[class.active]': 'focused'
            },
            template: "{{ i18n.getDayNumerals(date) }}",
            styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"]
        })
    ], NgbDatepickerDayView);
    return NgbDatepickerDayView;
}());

var NgbDatepickerNavigationSelect = /** @class */ (function () {
    function NgbDatepickerNavigationSelect(i18n, _renderer) {
        this.i18n = i18n;
        this._renderer = _renderer;
        this.select = new EventEmitter();
        this._month = -1;
        this._year = -1;
    }
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.prototype.ngAfterViewChecked = function () {
        if (this.date) {
            if (this.date.month !== this._month) {
                this._month = this.date.month;
                this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
            }
            if (this.date.year !== this._year) {
                this._year = this.date.year;
                this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
            }
        }
    };
    NgbDatepickerNavigationSelect.ctorParameters = function () { return [
        { type: NgbDatepickerI18n },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], NgbDatepickerNavigationSelect.prototype, "date", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigationSelect.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigationSelect.prototype, "months", void 0);
    __decorate([
        Input()
    ], NgbDatepickerNavigationSelect.prototype, "years", void 0);
    __decorate([
        Output()
    ], NgbDatepickerNavigationSelect.prototype, "select", void 0);
    __decorate([
        ViewChild('month', { static: true, read: ElementRef })
    ], NgbDatepickerNavigationSelect.prototype, "monthSelect", void 0);
    __decorate([
        ViewChild('year', { static: true, read: ElementRef })
    ], NgbDatepickerNavigationSelect.prototype, "yearSelect", void 0);
    NgbDatepickerNavigationSelect = __decorate([
        Component({
            selector: 'ngb-datepicker-navigation-select',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "\n    <select #month\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-month\" aria-label=\"Select month\"\n      i18n-title=\"@@ngb.datepicker.select-month\" title=\"Select month\"\n      (change)=\"changeMonth($any($event).target.value)\">\n        <option *ngFor=\"let m of months\" [attr.aria-label]=\"i18n.getMonthFullName(m, date?.year)\"\n                [value]=\"m\">{{ i18n.getMonthShortName(m, date?.year) }}</option>\n    </select><select #year\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-year\" aria-label=\"Select year\"\n      i18n-title=\"@@ngb.datepicker.select-year\" title=\"Select year\"\n      (change)=\"changeYear($any($event).target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ i18n.getYearNumerals(y) }}</option>\n    </select>\n  ",
            styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"]
        })
    ], NgbDatepickerNavigationSelect);
    return NgbDatepickerNavigationSelect;
}());

var NgbCalendarHijri = /** @class */ (function (_super) {
    __extends(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHijri.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date = this._setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this._setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this._setDay(date, date.day + number);
            default:
                return date;
        }
    };
    NgbCalendarHijri.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarHijri.prototype.getWeekday = function (date) {
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarHijri.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarHijri.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    NgbCalendarHijri.prototype.isValid = function (date) {
        return date != null && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
            !isNaN(this.toGregorian(date).getTime());
    };
    NgbCalendarHijri.prototype._setDay = function (date, day) {
        day = +day;
        var mDays = this.getDaysPerMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = this._setMonth(date, date.month - 1);
                mDays = this.getDaysPerMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = this._setMonth(date, date.month + 1);
                mDays = this.getDaysPerMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    };
    NgbCalendarHijri.prototype._setMonth = function (date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    };
    NgbCalendarHijri.prototype._setYear = function (date, year) {
        date.year = +year;
        return date;
    };
    NgbCalendarHijri = __decorate([
        Injectable()
    ], NgbCalendarHijri);
    return NgbCalendarHijri;
}(NgbCalendar));

/**
 * Checks if islamic year is a leap year
 */
function isIslamicLeapYear(hYear) {
    return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 */
function isGregorianLeapYear(gDate) {
    var year = gDate.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 */
function getIslamicMonthStart(hYear, hMonth) {
    return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 */
function getIslamicYearStart(year) {
    return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */
var GREGORIAN_EPOCH = 1721425.5;
var ISLAMIC_EPOCH = 1948439.5;
var NgbCalendarIslamicCivil = /** @class */ (function (_super) {
    __extends(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     */
    NgbCalendarIslamicCivil.prototype.fromGregorian = function (gDate) {
        var gYear = gDate.getFullYear(), gMonth = gDate.getMonth(), gDay = gDate.getDate();
        var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        var days = julianDay - ISLAMIC_EPOCH;
        var hYear = Math.floor((30 * days + 10646) / 10631.0);
        var hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        var hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
        return new NgbDate(hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     */
    NgbCalendarIslamicCivil.prototype.toGregorian = function (hDate) {
        var hYear = hDate.year;
        var hMonth = hDate.month - 1;
        var hDay = hDate.day;
        var julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        var wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH, quadricent = Math.floor(depoch / 146097), dqc = mod(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod(dcent, 1461), yindex = Math.floor(dquad / 365);
        var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        var yearday = wjd - gYearStart;
        var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        var day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    };
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    NgbCalendarIslamicCivil.prototype.getDaysPerMonth = function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        var length = 29 + month % 2;
        if (month === 12 && isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil = __decorate([
        Injectable()
    ], NgbCalendarIslamicCivil);
    return NgbCalendarIslamicCivil;
}(NgbCalendarHijri));

/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
var HIJRI_BEGIN = 1300;
var HIJRI_END = 1600;
var ONE_DAY = 1000 * 60 * 60 * 24;
var MONTH_LENGTH = [
    // 1300-1304
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    // 1305-1309
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    // 1310-1314
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    // 1315-1319
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    // 1320-1324
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    // 1325-1329
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    // 1330-1334
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    // 1335-1339
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    // 1340-1344
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    // 1345-1349
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    // 1350-1354
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    // 1355-1359
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    // 1360-1364
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    // 1365-1369
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    // 1370-1374
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    // 1375-1379
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    // 1380-1384
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    // 1385-1389
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    // 1390-1394
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    // 1395-1399
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    // 1400-1404
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    // 1405-1409
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    // 1410-1414
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    // 1415-1419
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    // 1420-1424
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    // 1425-1429
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    // 1430-1434
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    // 1435-1439
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    // 1440-1444
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    // 1445-1449
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    // 1450-1454
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    // 1455-1459
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    // 1460-1464
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    // 1465-1469
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    // 1470-1474
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    // 1475-1479
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    // 1480-1484
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    // 1485-1489
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    // 1490-1494
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    // 1495-1499
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    // 1500-1504
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    // 1505-1509
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    // 1510-1514
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    // 1515-1519
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    // 1520-1524
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    // 1525-1529
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    // 1530-1534
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    // 1535-1539
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    // 1540-1544
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    // 1545-1549
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    // 1550-1554
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    // 1555-1559
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    // 1560-1564
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    // 1565-1569
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    // 1570-1574
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    // 1575-1579
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    // 1580-1584
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    // 1585-1589
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    // 1590-1594
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    // 1595-1599
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    // 1600
    '001010011101'
];
function getDaysDiff(date1, date2) {
    // Ignores the time part in date1 and date2:
    var time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    var diff = Math.abs(time1 - time2);
    return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
    __extends(NgbCalendarIslamicUmalqura, _super);
    function NgbCalendarIslamicUmalqura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    NgbCalendarIslamicUmalqura.prototype.fromGregorian = function (gDate) {
        var hDay = 1, hMonth = 0, hYear = 1300;
        var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            var year = 1300;
            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (var j = 0; j < 12; j++) {
                    var numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new NgbDate(hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
            return null;
        }
        else {
            return _super.prototype.fromGregorian.call(this, gDate);
        }
    };
    /**
    * Converts the current Hijri date to Gregorian.
    */
    NgbCalendarIslamicUmalqura.prototype.toGregorian = function (hDate) {
        var hYear = hDate.year;
        var hMonth = hDate.month - 1;
        var hDay = hDate.day;
        var gDate = new Date(GREGORIAN_FIRST_DATE);
        var dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (var m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (var m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = _super.prototype.toGregorian.call(this, hDate);
        }
        return gDate;
    };
    /**
    * Returns the number of days in a specific Hijri hMonth.
    * `hMonth` is 1 for Muharram, 2 for Safar, etc.
    * `hYear` is any Hijri hYear.
    */
    NgbCalendarIslamicUmalqura.prototype.getDaysPerMonth = function (hMonth, hYear) {
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            var pos = hYear - HIJRI_BEGIN;
            return +MONTH_LENGTH[pos][hMonth - 1] + 29;
        }
        return _super.prototype.getDaysPerMonth.call(this, hMonth, hYear);
    };
    NgbCalendarIslamicUmalqura = __decorate([
        Injectable()
    ], NgbCalendarIslamicUmalqura);
    return NgbCalendarIslamicUmalqura;
}(NgbCalendarIslamicCivil));

/**
 * Returns the equivalent JS date value for a give input Jalali date.
 * `jalaliDate` is an Jalali date to be converted to Gregorian.
 */
function toGregorian(jalaliDate) {
    var jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
    var date = julianToGregorian(jdn);
    date.setHours(6, 30, 3, 200);
    return date;
}
/**
 * Returns the equivalent jalali date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to jalali.
 * utc to local
 */
function fromGregorian(gdate) {
    var g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
    return julianToJalali(g2d);
}
function setJalaliYear(date, yearValue) {
    date.year = +yearValue;
    return date;
}
function setJalaliMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
}
function setJalaliDay(date, day) {
    var mDays = getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
        while (day <= 0) {
            date = setJalaliMonth(date, date.month - 1);
            mDays = getDaysPerMonth(date.month, date.year);
            day += mDays;
        }
    }
    else if (day > mDays) {
        while (day > mDays) {
            day -= mDays;
            date = setJalaliMonth(date, date.month + 1);
            mDays = getDaysPerMonth(date.month, date.year);
        }
    }
    date.day = day;
    return date;
}
function mod$1(a, b) {
    return a - b * Math.floor(a / b);
}
function div(a, b) {
    return Math.trunc(a / b);
}
/*
 This function determines if the Jalali (Persian) year is
 leap (366-day long) or is the common year (365 days), and
 finds the day in March (Gregorian calendar) of the first
 day of the Jalali year (jalaliYear).
 @param jalaliYear Jalali calendar year (-61 to 3177)
 @return
 leap: number of years since the last leap year (0 to 4)
 gYear: Gregorian year of the beginning of Jalali year
 march: the March day of Farvardin the 1st (1st day of jalaliYear)
 @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 @see: http://www.fourmilab.ch/documents/calendar/
 */
function jalCal(jalaliYear) {
    // Jalali years starting the 33-year rule.
    var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
    var breaksLength = breaks.length;
    var gYear = jalaliYear + 621;
    var leapJ = -14;
    var jp = breaks[0];
    if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
        throw new Error('Invalid Jalali year ' + jalaliYear);
    }
    // Find the limiting years for the Jalali year jalaliYear.
    var jump;
    for (var i = 1; i < breaksLength; i += 1) {
        var jm = breaks[i];
        jump = jm - jp;
        if (jalaliYear < jm) {
            break;
        }
        leapJ = leapJ + div(jump, 33) * 8 + div(mod$1(jump, 33), 4);
        jp = jm;
    }
    var n = jalaliYear - jp;
    // Find the number of leap years from AD 621 to the beginning
    // of the current Jalali year in the Persian calendar.
    leapJ = leapJ + div(n, 33) * 8 + div(mod$1(n, 33) + 3, 4);
    if (mod$1(jump, 33) === 4 && jump - n === 4) {
        leapJ += 1;
    }
    // And the same in the Gregorian calendar (until the year gYear).
    var leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
    // Determine the Gregorian date of Farvardin the 1st.
    var march = 20 + leapJ - leapG;
    // Find how many years have passed since the last leap year.
    if (jump - n < 6) {
        n = n - jump + div(jump + 4, 33) * 33;
    }
    var leap = mod$1(mod$1(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return { leap: leap, gy: gYear, march: march };
}
/*
 Calculates Gregorian and Julian calendar dates from the Julian Day number
 (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 calendars) to some millions years ahead of the present.
 @param jdn Julian Day number
 @return
 gYear: Calendar year (years BC numbered 0, -1, -2, ...)
 gMonth: Calendar month (1 to 12)
 gDay: Calendar day of the month M (1 to 28/29/30/31)
 */
function julianToGregorian(julianDayNumber) {
    var j = 4 * julianDayNumber + 139361631;
    j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
    var i = div(mod$1(j, 1461), 4) * 5 + 308;
    var gDay = div(mod$1(i, 153), 5) + 1;
    var gMonth = mod$1(div(i, 153), 12) + 1;
    var gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
    return new Date(gYear, gMonth - 1, gDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jy Jalali year (1 to 3100)
 @param jm Jalali month (1 to 12)
 @param jd Jalali day (1 to 29/31)
 @return Julian Day number
 */
function gregorianToJulian(gy, gm, gd) {
    var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod$1(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
}
/*
 Converts the Julian Day number to a date in the Jalali calendar.
 @param julianDayNumber Julian Day number
 @return
 jalaliYear: Jalali year (1 to 3100)
 jalaliMonth: Jalali month (1 to 12)
 jalaliDay: Jalali day (1 to 29/31)
 */
function julianToJalali(julianDayNumber) {
    var gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
    , jalaliYear = gy - 621, r = jalCal(jalaliYear), gregorianDay = gregorianToJulian(gy, 3, r.march), jalaliDay, jalaliMonth, numberOfDays;
    // Find number of days that passed since 1 Farvardin.
    numberOfDays = julianDayNumber - gregorianDay;
    if (numberOfDays >= 0) {
        if (numberOfDays <= 185) {
            // The first 6 months.
            jalaliMonth = 1 + div(numberOfDays, 31);
            jalaliDay = mod$1(numberOfDays, 31) + 1;
            return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
        }
        else {
            // The remaining months.
            numberOfDays -= 186;
        }
    }
    else {
        // Previous Jalali year.
        jalaliYear -= 1;
        numberOfDays += 179;
        if (r.leap === 1) {
            numberOfDays += 1;
        }
    }
    jalaliMonth = 7 + div(numberOfDays, 30);
    jalaliDay = mod$1(numberOfDays, 30) + 1;
    return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jYear Jalali year (1 to 3100)
 @param jMonth Jalali month (1 to 12)
 @param jDay Jalali day (1 to 29/31)
 @return Julian Day number
 */
function jalaliToJulian(jYear, jMonth, jDay) {
    var r = jalCal(jYear);
    return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
/**
 * Returns the number of days in a specific jalali month.
 */
function getDaysPerMonth(month, year) {
    if (month <= 6) {
        return 31;
    }
    if (month <= 11) {
        return 30;
    }
    if (jalCal(year).leap === 0) {
        return 30;
    }
    return 29;
}

var NgbCalendarPersian = /** @class */ (function (_super) {
    __extends(NgbCalendarPersian, _super);
    function NgbCalendarPersian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarPersian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarPersian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarPersian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarPersian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date = setJalaliYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = setJalaliMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return setJalaliDay(date, date.day + number);
            default:
                return date;
        }
    };
    NgbCalendarPersian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarPersian.prototype.getWeekday = function (date) {
        var day = toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarPersian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var startDate = toGregorian(new NgbDate(date.year, 1, 1));
        return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarPersian.prototype.getToday = function () { return fromGregorian(new Date()); };
    NgbCalendarPersian.prototype.isValid = function (date) {
        return date != null && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) &&
            !isNaN(toGregorian(date).getTime());
    };
    NgbCalendarPersian = __decorate([
        Injectable()
    ], NgbCalendarPersian);
    return NgbCalendarPersian;
}(NgbCalendar));

var PARTS_PER_HOUR = 1080;
var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
var BAHARAD = 11 * PARTS_PER_HOUR + 204;
var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
var GREGORIAN_EPOCH$1 = 1721425.5;
function isGregorianLeapYear$1(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function numberOfFirstDayInYear(year) {
    var monthsBeforeYear = Math.floor((235 * year - 234) / 19);
    var fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
    var dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
    var timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
    var dayOfWeek = dayNumber % 7; // 0 == Monday
    if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
        dayNumber++;
        dayOfWeek = dayNumber % 7;
    }
    if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
        dayNumber += 2;
    }
    else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
        dayNumber++;
    }
    return dayNumber;
}
function getDaysInGregorianMonth(month, year) {
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isGregorianLeapYear$1(year)) {
        days[1]++;
    }
    return days[month - 1];
}
function getHebrewMonths(year) {
    return isHebrewLeapYear(year) ? 13 : 12;
}
/**
 * Returns the number of days in a specific Hebrew year.
 * `year` is any Hebrew year.
 */
function getDaysInHebrewYear(year) {
    return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
function isHebrewLeapYear(year) {
    if (year != null) {
        var b = (year * 12 + 17) % 19;
        return b >= ((b < 0) ? -7 : 12);
    }
    return false;
}
/**
 * Returns the number of days in a specific Hebrew month.
 * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
 * `year` is any Hebrew year.
 */
function getDaysInHebrewMonth(month, year) {
    var yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
    var yearType = (yearLength <= 380 ? yearLength : (yearLength - 30)) - 353;
    var leapYear = isHebrewLeapYear(year);
    var daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] :
        [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
    if (yearType > 0) {
        daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
    }
    if (yearType > 1) {
        daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
    }
    return daysInMonth[month - 1];
}
function getDayNumberInHebrewYear(date) {
    var numberOfDay = 0;
    for (var i = 1; i < date.month; i++) {
        numberOfDay += getDaysInHebrewMonth(i, date.year);
    }
    return numberOfDay + date.day;
}
function setHebrewMonth(date, val) {
    var after = val >= 0;
    if (!after) {
        val = -val;
    }
    while (val > 0) {
        if (after) {
            if (val > getHebrewMonths(date.year) - date.month) {
                val -= getHebrewMonths(date.year) - date.month + 1;
                date.year++;
                date.month = 1;
            }
            else {
                date.month += val;
                val = 0;
            }
        }
        else {
            if (val >= date.month) {
                date.year--;
                val -= date.month;
                date.month = getHebrewMonths(date.year);
            }
            else {
                date.month -= val;
                val = 0;
            }
        }
    }
    return date;
}
function setHebrewDay(date, val) {
    var after = val >= 0;
    if (!after) {
        val = -val;
    }
    while (val > 0) {
        if (after) {
            if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
                val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
                date.year++;
                date.month = 1;
                date.day = 1;
            }
            else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
                val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
                date.month++;
                date.day = 1;
            }
            else {
                date.day += val;
                val = 0;
            }
        }
        else {
            if (val >= date.day) {
                val -= date.day;
                date.month--;
                if (date.month === 0) {
                    date.year--;
                    date.month = getHebrewMonths(date.year);
                }
                date.day = getDaysInHebrewMonth(date.month, date.year);
            }
            else {
                date.day -= val;
                val = 0;
            }
        }
    }
    return date;
}
/**
 * Returns the equivalent Hebrew date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Hebrew date.
 */
function fromGregorian$1(gdate) {
    var date = new Date(gdate);
    var gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
    var julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) -
        Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
        Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gYear) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay + 0.5);
    var daysSinceHebEpoch = julianDay - 347997;
    var monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
    var hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
    var firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    var dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
    while (dayOfYear < 1) {
        hYear--;
        firstDayOfThisYear = numberOfFirstDayInYear(hYear);
        dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
    }
    var hMonth = 1;
    var hDay = dayOfYear;
    while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
        hDay -= getDaysInHebrewMonth(hMonth, hYear);
        hMonth++;
    }
    return new NgbDate(hYear, hMonth, hDay);
}
/**
 * Returns the equivalent JS date value for a given Hebrew date.
 * `hebrewDate` is an Hebrew date to be converted to Gregorian.
 */
function toGregorian$1(hebrewDate) {
    var hYear = hebrewDate.year;
    var hMonth = hebrewDate.month;
    var hDay = hebrewDate.day;
    var days = numberOfFirstDayInYear(hYear);
    for (var i = 1; i < hMonth; i++) {
        days += getDaysInHebrewMonth(i, hYear);
    }
    days += hDay;
    var diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
    var after = diffDays >= 0;
    if (!after) {
        diffDays = -diffDays;
    }
    var gYear = 1970;
    var gMonth = 1;
    var gDay = 1;
    while (diffDays > 0) {
        if (after) {
            if (diffDays >= (isGregorianLeapYear$1(gYear) ? 366 : 365)) {
                diffDays -= isGregorianLeapYear$1(gYear) ? 366 : 365;
                gYear++;
            }
            else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                gMonth++;
            }
            else {
                gDay += diffDays;
                diffDays = 0;
            }
        }
        else {
            if (diffDays >= (isGregorianLeapYear$1(gYear - 1) ? 366 : 365)) {
                diffDays -= isGregorianLeapYear$1(gYear - 1) ? 366 : 365;
                gYear--;
            }
            else {
                if (gMonth > 1) {
                    gMonth--;
                }
                else {
                    gMonth = 12;
                    gYear--;
                }
                if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                    diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                }
                else {
                    gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
                    diffDays = 0;
                }
            }
        }
    }
    return new Date(gYear, gMonth - 1, gDay);
}
function hebrewNumerals(numerals) {
    if (!numerals) {
        return '';
    }
    var hArray0_9 = ['', '\u05d0', '\u05d1', '\u05d2', '\u05d3', '\u05d4', '\u05d5', '\u05d6', '\u05d7', '\u05d8'];
    var hArray10_19 = [
        '\u05d9', '\u05d9\u05d0', '\u05d9\u05d1', '\u05d9\u05d2', '\u05d9\u05d3', '\u05d8\u05d5', '\u05d8\u05d6',
        '\u05d9\u05d6', '\u05d9\u05d7', '\u05d9\u05d8'
    ];
    var hArray20_90 = ['', '', '\u05db', '\u05dc', '\u05de', '\u05e0', '\u05e1', '\u05e2', '\u05e4', '\u05e6'];
    var hArray100_900 = [
        '', '\u05e7', '\u05e8', '\u05e9', '\u05ea', '\u05ea\u05e7', '\u05ea\u05e8', '\u05ea\u05e9', '\u05ea\u05ea',
        '\u05ea\u05ea\u05e7'
    ];
    var hArray1000_9000 = [
        '', '\u05d0', '\u05d1', '\u05d1\u05d0', '\u05d1\u05d1', '\u05d4', '\u05d4\u05d0', '\u05d4\u05d1',
        '\u05d4\u05d1\u05d0', '\u05d4\u05d1\u05d1'
    ];
    var geresh = '\u05f3', gershaim = '\u05f4';
    var mem = 0;
    var result = [];
    var step = 0;
    while (numerals > 0) {
        var m = numerals % 10;
        if (step === 0) {
            mem = m;
        }
        else if (step === 1) {
            if (m !== 1) {
                result.unshift(hArray20_90[m], hArray0_9[mem]);
            }
            else {
                result.unshift(hArray10_19[mem]);
            }
        }
        else if (step === 2) {
            result.unshift(hArray100_900[m]);
        }
        else {
            if (m !== 5) {
                result.unshift(hArray1000_9000[m], geresh, ' ');
            }
            break;
        }
        numerals = Math.floor(numerals / 10);
        if (step === 0 && numerals === 0) {
            result.unshift(hArray0_9[m]);
        }
        step++;
    }
    result = result.join('').split('');
    if (result.length === 1) {
        result.push(geresh);
    }
    else if (result.length > 1) {
        result.splice(result.length - 1, 0, gershaim);
    }
    return result.join('');
}

/**
 * @since 3.2.0
 */
var NgbCalendarHebrew = /** @class */ (function (_super) {
    __extends(NgbCalendarHebrew, _super);
    function NgbCalendarHebrew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHebrew.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHebrew.prototype.getMonths = function (year) {
        if (year && isHebrewLeapYear(year)) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        }
        else {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
    };
    NgbCalendarHebrew.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHebrew.prototype.isValid = function (date) {
        if (date != null) {
            var b = isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
            b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
            b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
            return b && !isNaN(toGregorian$1(date).getTime());
        }
        return false;
    };
    NgbCalendarHebrew.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = new NgbDate(date.year, date.month, date.day);
        switch (period) {
            case 'y':
                date.year += number;
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = setHebrewMonth(date, number);
                date.day = 1;
                return date;
            case 'd':
                return setHebrewDay(date, number);
            default:
                return date;
        }
    };
    NgbCalendarHebrew.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarHebrew.prototype.getWeekday = function (date) {
        var day = toGregorian$1(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarHebrew.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        var date = week[week.length - 1];
        return Math.ceil(getDayNumberInHebrewYear(date) / 7);
    };
    NgbCalendarHebrew.prototype.getToday = function () { return fromGregorian$1(new Date()); };
    /**
     * @since 3.4.0
     */
    NgbCalendarHebrew.prototype.toGregorian = function (date) { return fromJSDate(toGregorian$1(date)); };
    /**
     * @since 3.4.0
     */
    NgbCalendarHebrew.prototype.fromGregorian = function (date) { return fromGregorian$1(toJSDate(date)); };
    NgbCalendarHebrew = __decorate([
        Injectable()
    ], NgbCalendarHebrew);
    return NgbCalendarHebrew;
}(NgbCalendar));

var WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
var MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
var MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * @since 3.2.0
 */
var NgbDatepickerI18nHebrew = /** @class */ (function (_super) {
    __extends(NgbDatepickerI18nHebrew, _super);
    function NgbDatepickerI18nHebrew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nHebrew.prototype.getMonthShortName = function (month, year) { return this.getMonthFullName(month, year); };
    NgbDatepickerI18nHebrew.prototype.getMonthFullName = function (month, year) {
        return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || '' : MONTHS[month - 1] || '';
    };
    NgbDatepickerI18nHebrew.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS[weekday - 1] || ''; };
    NgbDatepickerI18nHebrew.prototype.getDayAriaLabel = function (date) {
        return hebrewNumerals(date.day) + " " + this.getMonthFullName(date.month, date.year) + " " + hebrewNumerals(date.year);
    };
    NgbDatepickerI18nHebrew.prototype.getDayNumerals = function (date) { return hebrewNumerals(date.day); };
    NgbDatepickerI18nHebrew.prototype.getWeekNumerals = function (weekNumber) { return hebrewNumerals(weekNumber); };
    NgbDatepickerI18nHebrew.prototype.getYearNumerals = function (year) { return hebrewNumerals(year); };
    NgbDatepickerI18nHebrew = __decorate([
        Injectable()
    ], NgbDatepickerI18nHebrew);
    return NgbDatepickerI18nHebrew;
}(NgbDatepickerI18n));

/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
var NgbDateNativeAdapter = /** @class */ (function (_super) {
    __extends(NgbDateNativeAdapter, _super);
    function NgbDateNativeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     */
    NgbDateNativeAdapter.prototype.fromModel = function (date) {
        return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
    };
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     */
    NgbDateNativeAdapter.prototype.toModel = function (date) {
        return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
            null;
    };
    NgbDateNativeAdapter.prototype._fromNativeDate = function (date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    NgbDateNativeAdapter.prototype._toNativeDate = function (date) {
        var jsDate = new Date(date.year, date.month - 1, date.day, 12);
        // avoid 30 -> 1930 conversion
        jsDate.setFullYear(date.year);
        return jsDate;
    };
    NgbDateNativeAdapter = __decorate([
        Injectable()
    ], NgbDateNativeAdapter);
    return NgbDateNativeAdapter;
}(NgbDateAdapter));

/**
 * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
 *
 * @since 3.2.0
 */
var NgbDateNativeUTCAdapter = /** @class */ (function (_super) {
    __extends(NgbDateNativeUTCAdapter, _super);
    function NgbDateNativeUTCAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateNativeUTCAdapter.prototype._fromNativeDate = function (date) {
        return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
    };
    NgbDateNativeUTCAdapter.prototype._toNativeDate = function (date) {
        var jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
        // avoid 30 -> 1930 conversion
        jsDate.setUTCFullYear(date.year);
        return jsDate;
    };
    NgbDateNativeUTCAdapter = __decorate([
        Injectable()
    ], NgbDateNativeUTCAdapter);
    return NgbDateNativeUTCAdapter;
}(NgbDateNativeAdapter));

var NgbDatepickerModule = /** @class */ (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule = __decorate([
        NgModule({
            declarations: [
                NgbDatepicker, NgbDatepickerContent, NgbDatepickerMonth, NgbDatepickerNavigation, NgbDatepickerNavigationSelect,
                NgbDatepickerDayView, NgbInputDatepicker
            ],
            exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth],
            imports: [CommonModule, FormsModule],
            entryComponents: [NgbDatepicker]
        })
    ], NgbDatepickerModule);
    return NgbDatepickerModule;
}());

/**
 * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = /** @class */ (function () {
    function NgbDropdownConfig() {
        this.autoClose = true;
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
    NgbDropdownConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbDropdownConfig_Factory() { return new NgbDropdownConfig(); }, token: NgbDropdownConfig, providedIn: "root" });
    NgbDropdownConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbDropdownConfig);
    return NgbDropdownConfig;
}());

var NgbNavbar = /** @class */ (function () {
    function NgbNavbar() {
    }
    NgbNavbar = __decorate([
        Directive({ selector: '.navbar' })
    ], NgbNavbar);
    return NgbNavbar;
}());
/**
 * A directive you should put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * @since 4.1.0
 */
var NgbDropdownItem = /** @class */ (function () {
    function NgbDropdownItem(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
    }
    Object.defineProperty(NgbDropdownItem.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = value === '' || value === true; // accept an empty attribute as true
        },
        enumerable: true,
        configurable: true
    });
    NgbDropdownItem.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], NgbDropdownItem.prototype, "disabled", null);
    NgbDropdownItem = __decorate([
        Directive({ selector: '[ngbDropdownItem]', host: { 'class': 'dropdown-item', '[class.disabled]': 'disabled' } })
    ], NgbDropdownItem);
    return NgbDropdownItem;
}());
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */
var NgbDropdownMenu = /** @class */ (function () {
    function NgbDropdownMenu(dropdown) {
        this.dropdown = dropdown;
        this.placement = 'bottom';
        this.isOpen = false;
    }
    NgbDropdownMenu.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return NgbDropdown; }),] }] }
    ]; };
    __decorate([
        ContentChildren(NgbDropdownItem)
    ], NgbDropdownMenu.prototype, "menuItems", void 0);
    NgbDropdownMenu = __decorate([
        Directive({
            selector: '[ngbDropdownMenu]',
            host: {
                '[class.dropdown-menu]': 'true',
                '[class.show]': 'dropdown.isOpen()',
                '[attr.x-placement]': 'placement',
                '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                '(keydown.Home)': 'dropdown.onKeyDown($event)',
                '(keydown.End)': 'dropdown.onKeyDown($event)',
                '(keydown.Enter)': 'dropdown.onKeyDown($event)',
                '(keydown.Space)': 'dropdown.onKeyDown($event)'
            }
        }),
        __param(0, Inject(forwardRef(function () { return NgbDropdown; })))
    ], NgbDropdownMenu);
    return NgbDropdownMenu;
}());
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * @since 1.1.0
 */
var NgbDropdownAnchor = /** @class */ (function () {
    function NgbDropdownAnchor(dropdown, _elementRef) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this.anchorEl = _elementRef.nativeElement;
    }
    NgbDropdownAnchor.prototype.getNativeElement = function () { return this._elementRef.nativeElement; };
    NgbDropdownAnchor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return NgbDropdown; }),] }] },
        { type: ElementRef }
    ]; };
    NgbDropdownAnchor = __decorate([
        Directive({
            selector: '[ngbDropdownAnchor]',
            host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
        }),
        __param(0, Inject(forwardRef(function () { return NgbDropdown; })))
    ], NgbDropdownAnchor);
    return NgbDropdownAnchor;
}());
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */
var NgbDropdownToggle = /** @class */ (function (_super) {
    __extends(NgbDropdownToggle, _super);
    function NgbDropdownToggle(dropdown, elementRef) {
        return _super.call(this, dropdown, elementRef) || this;
    }
    NgbDropdownToggle_1 = NgbDropdownToggle;
    var NgbDropdownToggle_1;
    NgbDropdownToggle.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return NgbDropdown; }),] }] },
        { type: ElementRef }
    ]; };
    NgbDropdownToggle = NgbDropdownToggle_1 = __decorate([
        Directive({
            selector: '[ngbDropdownToggle]',
            host: {
                'class': 'dropdown-toggle',
                'aria-haspopup': 'true',
                '[attr.aria-expanded]': 'dropdown.isOpen()',
                '(click)': 'dropdown.toggle()',
                '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                '(keydown.Home)': 'dropdown.onKeyDown($event)',
                '(keydown.End)': 'dropdown.onKeyDown($event)'
            },
            providers: [{ provide: NgbDropdownAnchor, useExisting: forwardRef(function () { return NgbDropdownToggle_1; }) }]
        }),
        __param(0, Inject(forwardRef(function () { return NgbDropdown; })))
    ], NgbDropdownToggle);
    return NgbDropdownToggle;
}(NgbDropdownAnchor));
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */
var NgbDropdown = /** @class */ (function () {
    function NgbDropdown(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, ngbNavbar) {
        var _this = this;
        this._changeDetector = _changeDetector;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._closed$ = new Subject();
        this._bodyContainer = null;
        /**
         * Defines whether or not the dropdown menu is opened initially.
         */
        this._open = false;
        /**
         * An event fired when the dropdown is opened or closed.
         *
         * The event payload is a `boolean`:
         * * `true` - the dropdown was opened
         * * `false` - the dropdown was closed
         */
        this.openChange = new EventEmitter();
        this.placement = config.placement;
        this.container = config.container;
        this.autoClose = config.autoClose;
        this.display = ngbNavbar ? 'static' : 'dynamic';
        this._zoneSubscription = _ngZone.onStable.subscribe(function () { _this._positionMenu(); });
    }
    NgbDropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._ngZone.onStable.pipe(take(1)).subscribe(function () {
            _this._applyPlacementClasses();
            if (_this._open) {
                _this._setCloseHandlers();
            }
        });
    };
    NgbDropdown.prototype.ngOnChanges = function (changes) {
        if (changes.container && this._open) {
            this._applyContainer(this.container);
        }
        if (changes.placement && !changes.placement.isFirstChange) {
            this._applyPlacementClasses();
        }
    };
    /**
     * Checks if the dropdown menu is open.
     */
    NgbDropdown.prototype.isOpen = function () { return this._open; };
    /**
     * Opens the dropdown menu.
     */
    NgbDropdown.prototype.open = function () {
        if (!this._open) {
            this._open = true;
            this._applyContainer(this.container);
            this.openChange.emit(true);
            this._setCloseHandlers();
        }
    };
    NgbDropdown.prototype._setCloseHandlers = function () {
        var _this = this;
        var anchor = this._anchor;
        ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this._closed$, this._menu ? [this._menuElement.nativeElement] : [], anchor ? [anchor.getNativeElement()] : [], '.dropdown-item,.dropdown-divider');
    };
    /**
     * Closes the dropdown menu.
     */
    NgbDropdown.prototype.close = function () {
        if (this._open) {
            this._open = false;
            this._resetContainer();
            this._closed$.next();
            this.openChange.emit(false);
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Toggles the dropdown menu.
     */
    NgbDropdown.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgbDropdown.prototype.ngOnDestroy = function () {
        this._resetContainer();
        this._closed$.next();
        this._zoneSubscription.unsubscribe();
    };
    NgbDropdown.prototype.onKeyDown = function (event) {
        var _this = this;
        // tslint:disable-next-line:deprecation
        var key = event.which;
        var itemElements = this._getMenuElements();
        var position = -1;
        var itemElement = null;
        var isEventFromToggle = this._isEventFromToggle(event);
        if (!isEventFromToggle && itemElements.length) {
            itemElements.forEach(function (item, index) {
                if (item.contains(event.target)) {
                    itemElement = item;
                }
                if (item === _this._document.activeElement) {
                    position = index;
                }
            });
        }
        // closing on Enter / Space
        if (key === Key.Space || key === Key.Enter) {
            if (itemElement && (this.autoClose === true || this.autoClose === 'inside')) {
                // Item is either a button or a link, so click will be triggered by the browser on Enter or Space.
                // So we have to register a one-time click handler that will fire after any user defined click handlers
                // to close the dropdown
                fromEvent(itemElement, 'click').pipe(take(1)).subscribe(function () { return _this.close(); });
            }
            return;
        }
        // opening / navigating
        if (isEventFromToggle || itemElement) {
            this.open();
            if (itemElements.length) {
                switch (key) {
                    case Key.ArrowDown:
                        position = Math.min(position + 1, itemElements.length - 1);
                        break;
                    case Key.ArrowUp:
                        if (this._isDropup() && position === -1) {
                            position = itemElements.length - 1;
                            break;
                        }
                        position = Math.max(position - 1, 0);
                        break;
                    case Key.Home:
                        position = 0;
                        break;
                    case Key.End:
                        position = itemElements.length - 1;
                        break;
                }
                itemElements[position].focus();
            }
            event.preventDefault();
        }
    };
    NgbDropdown.prototype._isDropup = function () { return this._elementRef.nativeElement.classList.contains('dropup'); };
    NgbDropdown.prototype._isEventFromToggle = function (event) {
        return this._anchor.getNativeElement().contains(event.target);
    };
    NgbDropdown.prototype._getMenuElements = function () {
        var menu = this._menu;
        if (menu == null) {
            return [];
        }
        return menu.menuItems.filter(function (item) { return !item.disabled; }).map(function (item) { return item.elementRef.nativeElement; });
    };
    NgbDropdown.prototype._positionMenu = function () {
        var menu = this._menu;
        if (this.isOpen() && menu) {
            this._applyPlacementClasses(this.display === 'dynamic' ?
                positionElements(this._anchor.anchorEl, this._bodyContainer || this._menuElement.nativeElement, this.placement, this.container === 'body') :
                this._getFirstPlacement(this.placement));
        }
    };
    NgbDropdown.prototype._getFirstPlacement = function (placement) {
        return Array.isArray(placement) ? placement[0] : placement.split(' ')[0];
    };
    NgbDropdown.prototype._resetContainer = function () {
        var renderer = this._renderer;
        var menuElement = this._menuElement;
        if (menuElement) {
            var dropdownElement = this._elementRef.nativeElement;
            var dropdownMenuElement = menuElement.nativeElement;
            renderer.appendChild(dropdownElement, dropdownMenuElement);
            renderer.removeStyle(dropdownMenuElement, 'position');
            renderer.removeStyle(dropdownMenuElement, 'transform');
        }
        if (this._bodyContainer) {
            renderer.removeChild(this._document.body, this._bodyContainer);
            this._bodyContainer = null;
        }
    };
    NgbDropdown.prototype._applyContainer = function (container) {
        if (container === void 0) { container = null; }
        this._resetContainer();
        if (container === 'body') {
            var renderer = this._renderer;
            var dropdownMenuElement = this._menuElement.nativeElement;
            var bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div');
            // Override some styles to have the positionning working
            renderer.setStyle(bodyContainer, 'position', 'absolute');
            renderer.setStyle(dropdownMenuElement, 'position', 'static');
            renderer.setStyle(bodyContainer, 'z-index', '1050');
            renderer.appendChild(bodyContainer, dropdownMenuElement);
            renderer.appendChild(this._document.body, bodyContainer);
        }
    };
    NgbDropdown.prototype._applyPlacementClasses = function (placement) {
        var menu = this._menu;
        if (menu) {
            if (!placement) {
                placement = this._getFirstPlacement(this.placement);
            }
            var renderer = this._renderer;
            var dropdownElement = this._elementRef.nativeElement;
            // remove the current placement classes
            renderer.removeClass(dropdownElement, 'dropup');
            renderer.removeClass(dropdownElement, 'dropdown');
            menu.placement = this.display === 'static' ? null : placement;
            /*
            * apply the new placement
            * in case of top use up-arrow or down-arrow otherwise
            */
            var dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
            renderer.addClass(dropdownElement, dropdownClass);
            var bodyContainer = this._bodyContainer;
            if (bodyContainer) {
                renderer.removeClass(bodyContainer, 'dropup');
                renderer.removeClass(bodyContainer, 'dropdown');
                renderer.addClass(bodyContainer, dropdownClass);
            }
        }
    };
    NgbDropdown.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgbDropdownConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgbNavbar, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        ContentChild(NgbDropdownMenu, { static: false })
    ], NgbDropdown.prototype, "_menu", void 0);
    __decorate([
        ContentChild(NgbDropdownMenu, { read: ElementRef, static: false })
    ], NgbDropdown.prototype, "_menuElement", void 0);
    __decorate([
        ContentChild(NgbDropdownAnchor, { static: false })
    ], NgbDropdown.prototype, "_anchor", void 0);
    __decorate([
        Input()
    ], NgbDropdown.prototype, "autoClose", void 0);
    __decorate([
        Input('open')
    ], NgbDropdown.prototype, "_open", void 0);
    __decorate([
        Input()
    ], NgbDropdown.prototype, "placement", void 0);
    __decorate([
        Input()
    ], NgbDropdown.prototype, "container", void 0);
    __decorate([
        Input()
    ], NgbDropdown.prototype, "display", void 0);
    __decorate([
        Output()
    ], NgbDropdown.prototype, "openChange", void 0);
    NgbDropdown = __decorate([
        Directive({ selector: '[ngbDropdown]', exportAs: 'ngbDropdown', host: { '[class.show]': 'isOpen()' } }),
        __param(2, Inject(DOCUMENT)),
        __param(6, Optional())
    ], NgbDropdown);
    return NgbDropdown;
}());

var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar];
var NgbDropdownModule = /** @class */ (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule = __decorate([
        NgModule({ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES })
    ], NgbDropdownModule);
    return NgbDropdownModule;
}());

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
    NgbModalConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(); }, token: NgbModalConfig, providedIn: "root" });
    NgbModalConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbModalConfig);
    return NgbModalConfig;
}());

var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
var PopupService = /** @class */ (function () {
    function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver, _applicationRef) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._windowRef = null;
        this._contentRef = null;
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), this._viewContainerRef.length, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    PopupService.prototype.close = function () {
        var _a;
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if ((_a = this._contentRef) === null || _a === void 0 ? void 0 : _a.viewRef) {
                this._applicationRef.detachView(this._contentRef.viewRef);
                this._contentRef.viewRef.destroy();
                this._contentRef = null;
            }
        }
    };
    PopupService.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

var noop = function () { };
var ɵ0$1 = noop;
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */
var ScrollBar = /** @class */ (function () {
    function ScrollBar(_document) {
        this._document = _document;
    }
    /**
     * To be called right before a potential vertical scrollbar would be removed:
     *
     * - if there was a scrollbar, adds some compensation padding to the body
     * to keep the same layout as when the scrollbar is there
     * - if there was none, there is nothing to do
     *
     * @return a callback used to revert the compensation (noop if there was none,
     * otherwise a function removing the padding)
     */
    ScrollBar.prototype.compensate = function () {
        var width = this._getWidth();
        return !this._isPresent(width) ? noop : this._adjustBody(width);
    };
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @return a callback used to revert the padding to its previous value
     */
    ScrollBar.prototype._adjustBody = function (scrollbarWidth) {
        var body = this._document.body;
        var userSetPaddingStyle = body.style.paddingRight;
        var actualPadding = parseFloat(window.getComputedStyle(body)['padding-right']);
        body.style['padding-right'] = actualPadding + scrollbarWidth + "px";
        return function () { return body.style['padding-right'] = userSetPaddingStyle; };
    };
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return true if scrollbar is present, false otherwise
     */
    ScrollBar.prototype._isPresent = function (scrollbarWidth) {
        var rect = this._document.body.getBoundingClientRect();
        var bodyToViewportGap = window.innerWidth - (rect.left + rect.right);
        var uncertainty = 0.1 * scrollbarWidth;
        return bodyToViewportGap >= scrollbarWidth - uncertainty;
    };
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return the width of a scrollbar on this page
     */
    ScrollBar.prototype._getWidth = function () {
        var measurer = this._document.createElement('div');
        measurer.className = 'modal-scrollbar-measure';
        var body = this._document.body;
        body.appendChild(measurer);
        var width = measurer.getBoundingClientRect().width - measurer.clientWidth;
        body.removeChild(measurer);
        return width;
    };
    ScrollBar.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ScrollBar.ɵprov = ɵɵdefineInjectable({ factory: function ScrollBar_Factory() { return new ScrollBar(ɵɵinject(DOCUMENT)); }, token: ScrollBar, providedIn: "root" });
    ScrollBar = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(0, Inject(DOCUMENT))
    ], ScrollBar);
    return ScrollBar;
}());

var NgbModalBackdrop = /** @class */ (function () {
    function NgbModalBackdrop() {
    }
    __decorate([
        Input()
    ], NgbModalBackdrop.prototype, "backdropClass", void 0);
    NgbModalBackdrop = __decorate([
        Component({
            selector: 'ngb-modal-backdrop',
            encapsulation: ViewEncapsulation.None,
            template: '',
            host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")', 'style': 'z-index: 1050' }
        })
    ], NgbModalBackdrop);
    return NgbModalBackdrop;
}());

/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
var NgbActiveModal = /** @class */ (function () {
    function NgbActiveModal() {
    }
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    NgbActiveModal.prototype.close = function (result) { };
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    NgbActiveModal.prototype.dismiss = function (reason) { };
    return NgbActiveModal;
}());
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
var NgbModalRef = /** @class */ (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.result.then(null, function () { });
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of a component used for the modal content.
         *
         * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
         */
        get: function () {
            if (this._contentRef && this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    NgbModalRef.prototype.close = function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    NgbModalRef.prototype._dismiss = function (reason) {
        this._reject(reason);
        this._removeModalElements();
    };
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    NgbModalRef.prototype.dismiss = function (reason) {
        var _this = this;
        if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
                this._dismiss(reason);
            }
            else {
                var dismiss = this._beforeDismiss();
                if (dismiss && dismiss.then) {
                    dismiss.then(function (result) {
                        if (result !== false) {
                            _this._dismiss(reason);
                        }
                    }, function () { });
                }
                else if (dismiss !== false) {
                    this._dismiss(reason);
                }
            }
        }
    };
    NgbModalRef.prototype._removeModalElements = function () {
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}());

var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));

var NgbModalWindow = /** @class */ (function () {
    function NgbModalWindow(_document, _elRef, _zone) {
        this._document = _document;
        this._elRef = _elRef;
        this._zone = _zone;
        this._closed$ = new Subject();
        this._elWithFocus = null; // element that is focused prior to modal opening
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new EventEmitter();
    }
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () { this._elWithFocus = this._document.activeElement; };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        var _this = this;
        var nativeElement = this._elRef.nativeElement;
        this._zone.runOutsideAngular(function () {
            fromEvent(nativeElement, 'keydown')
                .pipe(takeUntil(_this._closed$), 
            // tslint:disable-next-line:deprecation
            filter(function (e) { return e.which === Key.Escape && _this.keyboard; }))
                .subscribe(function (event) { return requestAnimationFrame(function () {
                if (!event.defaultPrevented) {
                    _this._zone.run(function () { return _this.dismiss(ModalDismissReasons.ESC); });
                }
            }); });
            // We're listening to 'mousedown' and 'mouseup' to prevent modal from closing when pressing the mouse
            // inside the modal dialog and releasing it outside
            var preventClose = false;
            fromEvent(_this._dialogEl.nativeElement, 'mousedown')
                .pipe(takeUntil(_this._closed$), tap(function () { return preventClose = false; }), switchMap(function () { return fromEvent(nativeElement, 'mouseup').pipe(takeUntil(_this._closed$), take(1)); }), filter(function (_a) {
                var target = _a.target;
                return nativeElement === target;
            }))
                .subscribe(function () { preventClose = true; });
            // We're listening to 'click' to dismiss modal on modal window click, except when:
            // 1. clicking on modal dialog itself
            // 2. closing was prevented by mousedown/up handlers
            // 3. clicking on scrollbar when the viewport is too small and modal doesn't fit (click is not triggered at all)
            fromEvent(nativeElement, 'click').pipe(takeUntil(_this._closed$)).subscribe(function (_a) {
                var target = _a.target;
                if (_this.backdrop === true && nativeElement === target && !preventClose) {
                    _this._zone.run(function () { return _this.dismiss(ModalDismissReasons.BACKDROP_CLICK); });
                }
                preventClose = false;
            });
        });
        if (!nativeElement.contains(document.activeElement)) {
            var autoFocusable = nativeElement.querySelector("[ngbAutofocus]");
            var firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
            var elementToFocus = autoFocusable || firstFocusable || nativeElement;
            elementToFocus.focus();
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        var _this = this;
        var body = this._document.body;
        var elWithFocus = this._elWithFocus;
        var elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        this._zone.runOutsideAngular(function () {
            setTimeout(function () { return elementToFocus.focus(); });
            _this._elWithFocus = null;
        });
        this._closed$.next();
    };
    NgbModalWindow.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    __decorate([
        ViewChild('dialog', { static: true })
    ], NgbModalWindow.prototype, "_dialogEl", void 0);
    __decorate([
        Input()
    ], NgbModalWindow.prototype, "ariaLabelledBy", void 0);
    __decorate([
        Input()
    ], NgbModalWindow.prototype, "backdrop", void 0);
    __decorate([
        Input()
    ], NgbModalWindow.prototype, "centered", void 0);
    __decorate([
        Input()
    ], NgbModalWindow.prototype, "keyboard", void 0);
    __decorate([
        Input()
    ], NgbModalWindow.prototype, "scrollable", void 0);
    __decorate([
        Input()
    ], NgbModalWindow.prototype, "size", void 0);
    __decorate([
        Input()
    ], NgbModalWindow.prototype, "windowClass", void 0);
    __decorate([
        Output('dismiss')
    ], NgbModalWindow.prototype, "dismissEvent", void 0);
    NgbModalWindow = __decorate([
        Component({
            selector: 'ngb-modal-window',
            host: {
                '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                'role': 'dialog',
                'tabindex': '-1',
                '[attr.aria-modal]': 'true',
                '[attr.aria-labelledby]': 'ariaLabelledBy',
            },
            template: "\n    <div #dialog [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') +\n     (scrollable ? ' modal-dialog-scrollable' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    ",
            encapsulation: ViewEncapsulation.None,
            styles: ["ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}"]
        }),
        __param(0, Inject(DOCUMENT))
    ], NgbModalWindow);
    return NgbModalWindow;
}());

var NgbModalStack = /** @class */ (function () {
    function NgbModalStack(_applicationRef, _injector, _document, _scrollBar, _rendererFactory, _ngZone) {
        var _this = this;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._document = _document;
        this._scrollBar = _scrollBar;
        this._rendererFactory = _rendererFactory;
        this._ngZone = _ngZone;
        this._activeWindowCmptHasChanged = new Subject();
        this._ariaHiddenValues = new Map();
        this._backdropAttributes = ['backdropClass'];
        this._modalRefs = [];
        this._windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size', 'windowClass'];
        this._windowCmpts = [];
        // Trap focus on active WindowCmpt
        this._activeWindowCmptHasChanged.subscribe(function () {
            if (_this._windowCmpts.length) {
                var activeWindowCmpt = _this._windowCmpts[_this._windowCmpts.length - 1];
                ngbFocusTrap(_this._ngZone, activeWindowCmpt.location.nativeElement, _this._activeWindowCmptHasChanged);
                _this._revertAriaHidden();
                _this._setAriaHidden(activeWindowCmpt.location.nativeElement);
            }
        });
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var _this = this;
        var containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ?
            this._document.querySelector(options.container) :
            this._document.body;
        var renderer = this._rendererFactory.createRenderer(null, null);
        var revertPaddingForScrollBar = this._scrollBar.compensate();
        var removeBodyClass = function () {
            if (!_this._modalRefs.length) {
                renderer.removeClass(_this._document.body, 'modal-open');
                _this._revertAriaHidden();
            }
        };
        if (!containerEl) {
            throw new Error("The specified modal container \"" + (options.container || 'body') + "\" was not found in the DOM.");
        }
        var activeModal = new NgbActiveModal();
        var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);
        var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : undefined;
        var windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
        var ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        this._registerModalRef(ngbModalRef);
        this._registerWindowCmpt(windowCmptRef);
        ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
        ngbModalRef.result.then(removeBodyClass, removeBodyClass);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        if (this._modalRefs.length === 1) {
            renderer.addClass(this._document.body, 'modal-open');
        }
        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
        }
        return ngbModalRef;
    };
    NgbModalStack.prototype.dismissAll = function (reason) { this._modalRefs.forEach(function (ngbModalRef) { return ngbModalRef.dismiss(reason); }); };
    NgbModalStack.prototype.hasOpenModals = function () { return this._modalRefs.length > 0; };
    NgbModalStack.prototype._attachBackdrop = function (moduleCFR, containerEl) {
        var backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
        var backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    };
    NgbModalStack.prototype._attachWindowComponent = function (moduleCFR, containerEl, contentRef) {
        var windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
        var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        this._windowAttributes.forEach(function (optionName) {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._applyBackdropOptions = function (backdropInstance, options) {
        this._backdropAttributes.forEach(function (optionName) {
            if (isDefined(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, activeModal, options) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            return this._createFromTemplateRef(content, activeModal);
        }
        else if (isString(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
        }
    };
    NgbModalStack.prototype._createFromTemplateRef = function (content, activeModal) {
        var context = {
            $implicit: activeModal,
            close: function (result) { activeModal.close(result); },
            dismiss: function (reason) { activeModal.dismiss(reason); }
        };
        var viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new ContentRef([viewRef.rootNodes], viewRef);
    };
    NgbModalStack.prototype._createFromString = function (content) {
        var component = this._document.createTextNode("" + content);
        return new ContentRef([[component]]);
    };
    NgbModalStack.prototype._createFromComponent = function (moduleCFR, contentInjector, content, context, options) {
        var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
        var modalContentInjector = Injector.create({ providers: [{ provide: NgbActiveModal, useValue: context }], parent: contentInjector });
        var componentRef = contentCmptFactory.create(modalContentInjector);
        var componentNativeEl = componentRef.location.nativeElement;
        if (options.scrollable) {
            componentNativeEl.classList.add('component-host-scrollable');
        }
        this._applicationRef.attachView(componentRef.hostView);
        // FIXME: we should here get rid of the component nativeElement
        // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.
        return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
    };
    NgbModalStack.prototype._setAriaHidden = function (element) {
        var _this = this;
        var parent = element.parentElement;
        if (parent && element !== this._document.body) {
            Array.from(parent.children).forEach(function (sibling) {
                if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
                    _this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            });
            this._setAriaHidden(parent);
        }
    };
    NgbModalStack.prototype._revertAriaHidden = function () {
        this._ariaHiddenValues.forEach(function (value, element) {
            if (value) {
                element.setAttribute('aria-hidden', value);
            }
            else {
                element.removeAttribute('aria-hidden');
            }
        });
        this._ariaHiddenValues.clear();
    };
    NgbModalStack.prototype._registerModalRef = function (ngbModalRef) {
        var _this = this;
        var unregisterModalRef = function () {
            var index = _this._modalRefs.indexOf(ngbModalRef);
            if (index > -1) {
                _this._modalRefs.splice(index, 1);
            }
        };
        this._modalRefs.push(ngbModalRef);
        ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
    };
    NgbModalStack.prototype._registerWindowCmpt = function (ngbWindowCmpt) {
        var _this = this;
        this._windowCmpts.push(ngbWindowCmpt);
        this._activeWindowCmptHasChanged.next();
        ngbWindowCmpt.onDestroy(function () {
            var index = _this._windowCmpts.indexOf(ngbWindowCmpt);
            if (index > -1) {
                _this._windowCmpts.splice(index, 1);
                _this._activeWindowCmptHasChanged.next();
            }
        });
    };
    NgbModalStack.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ScrollBar },
        { type: RendererFactory2 },
        { type: NgZone }
    ]; };
    NgbModalStack.ɵprov = ɵɵdefineInjectable({ factory: function NgbModalStack_Factory() { return new NgbModalStack(ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR), ɵɵinject(DOCUMENT), ɵɵinject(ScrollBar), ɵɵinject(RendererFactory2), ɵɵinject(NgZone)); }, token: NgbModalStack, providedIn: "root" });
    NgbModalStack = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(2, Inject(DOCUMENT))
    ], NgbModalStack);
    return NgbModalStack;
}());

/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
var NgbModal = /** @class */ (function () {
    function NgbModal(_moduleCFR, _injector, _modalStack, _config) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
        this._config = _config;
    }
    /**
     * Opens a new modal window with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
     * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
     *
     * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
     */
    NgbModal.prototype.open = function (content, options) {
        if (options === void 0) { options = {}; }
        var combinedOptions = Object.assign({}, this._config, options);
        return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
    };
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * @since 3.1.0
     */
    NgbModal.prototype.dismissAll = function (reason) { this._modalStack.dismissAll(reason); };
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * @since 3.3.0
     */
    NgbModal.prototype.hasOpenModals = function () { return this._modalStack.hasOpenModals(); };
    NgbModal.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: NgbModalStack },
        { type: NgbModalConfig }
    ]; };
    NgbModal.ɵprov = ɵɵdefineInjectable({ factory: function NgbModal_Factory() { return new NgbModal(ɵɵinject(ComponentFactoryResolver), ɵɵinject(INJECTOR), ɵɵinject(NgbModalStack), ɵɵinject(NgbModalConfig)); }, token: NgbModal, providedIn: "root" });
    NgbModal = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbModal);
    return NgbModal;
}());

var NgbModalModule = /** @class */ (function () {
    function NgbModalModule() {
    }
    NgbModalModule = __decorate([
        NgModule({
            declarations: [NgbModalBackdrop, NgbModalWindow],
            entryComponents: [NgbModalBackdrop, NgbModalWindow],
            providers: [NgbModal]
        })
    ], NgbModalModule);
    return NgbModalModule;
}());

/**
 * A configuration service for the [`NgbNav`](#/components/nav/api#NgbNav) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the navs used in the application.
 *
 * @since 5.2.0
 */
var NgbNavConfig = /** @class */ (function () {
    function NgbNavConfig() {
        this.destroyOnHide = true;
        this.orientation = 'horizontal';
        this.roles = 'tablist';
    }
    NgbNavConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbNavConfig_Factory() { return new NgbNavConfig(); }, token: NgbNavConfig, providedIn: "root" });
    NgbNavConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbNavConfig);
    return NgbNavConfig;
}());

var isValidNavId = function (id) { return isDefined(id) && id !== ''; };
var ɵ0$2 = isValidNavId;
var navCounter = 0;
/**
 * This directive must be used to wrap content to be displayed in the nav.
 *
 * @since 5.2.0
 */
var NgbNavContent = /** @class */ (function () {
    function NgbNavContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbNavContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbNavContent = __decorate([
        Directive({ selector: 'ng-template[ngbNavContent]' })
    ], NgbNavContent);
    return NgbNavContent;
}());
/**
 * The directive used to group nav link and related nav content. As well as set nav identifier and some options.
 *
 * @since 5.2.0
 */
var NgbNavItem = /** @class */ (function () {
    function NgbNavItem(nav, elementRef) {
        this.elementRef = elementRef;
        /**
         * If `true`, the current nav item is disabled and can't be toggled by user.
         *
         * Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
         */
        this.disabled = false;
        // TODO: cf https://github.com/angular/angular/issues/30106
        this._nav = nav;
    }
    NgbNavItem.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.contentTpl = this.contentTpls.first;
    };
    NgbNavItem.prototype.ngOnInit = function () {
        if (!isDefined(this.domId)) {
            this.domId = "ngb-nav-" + navCounter++;
        }
    };
    Object.defineProperty(NgbNavItem.prototype, "active", {
        get: function () { return this._nav.activeId === this.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbNavItem.prototype, "id", {
        get: function () { return isValidNavId(this._id) ? this._id : this.domId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbNavItem.prototype, "panelDomId", {
        get: function () { return this.domId + "-panel"; },
        enumerable: true,
        configurable: true
    });
    NgbNavItem.prototype.isPanelInDom = function () {
        return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
    };
    NgbNavItem.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return NgbNav; }),] }] },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], NgbNavItem.prototype, "destroyOnHide", void 0);
    __decorate([
        Input()
    ], NgbNavItem.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbNavItem.prototype, "domId", void 0);
    __decorate([
        Input('ngbNavItem')
    ], NgbNavItem.prototype, "_id", void 0);
    __decorate([
        ContentChildren(NgbNavContent, { descendants: false })
    ], NgbNavItem.prototype, "contentTpls", void 0);
    NgbNavItem = __decorate([
        Directive({ selector: '[ngbNavItem]', exportAs: 'ngbNavItem', host: { '[class.nav-item]': 'true' } }),
        __param(0, Inject(forwardRef(function () { return NgbNav; })))
    ], NgbNavItem);
    return NgbNavItem;
}());
/**
 * A nav directive that helps with implementing tabbed navigation components.
 *
 * @since 5.2.0
 */
var NgbNav = /** @class */ (function () {
    function NgbNav(role, config, _cd) {
        this.role = role;
        this._cd = _cd;
        /**
         * The event emitted after the active nav changes
         * The payload of the event is the newly active nav id
         *
         * If you want to prevent nav change, you should use `(navChange)` event
         */
        this.activeIdChange = new EventEmitter();
        /**
         * The nav change event emitted right before the nav change happens on user click.
         *
         * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
         *
         * See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
         */
        this.navChange = new EventEmitter();
        this.destroyOnHide = config.destroyOnHide;
        this.orientation = config.orientation;
        this.roles = config.roles;
    }
    NgbNav.prototype.click = function (item) {
        if (!item.disabled) {
            this._updateActiveId(item.id);
        }
    };
    /**
     * Selects the nav with the given id and shows its associated pane.
     * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
     */
    NgbNav.prototype.select = function (id) { this._updateActiveId(id, false); };
    NgbNav.prototype.ngAfterContentInit = function () {
        if (!isDefined(this.activeId)) {
            var nextId = this.items.first ? this.items.first.id : null;
            if (isValidNavId(nextId)) {
                this._updateActiveId(nextId, false);
                this._cd.detectChanges();
            }
        }
    };
    NgbNav.prototype._updateActiveId = function (nextId, emitNavChange) {
        if (emitNavChange === void 0) { emitNavChange = true; }
        if (this.activeId !== nextId) {
            var defaultPrevented_1 = false;
            if (emitNavChange) {
                this.navChange.emit({ activeId: this.activeId, nextId: nextId, preventDefault: function () { defaultPrevented_1 = true; } });
            }
            if (!defaultPrevented_1) {
                this.activeId = nextId;
                this.activeIdChange.emit(nextId);
            }
        }
    };
    NgbNav.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
        { type: NgbNavConfig },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], NgbNav.prototype, "activeId", void 0);
    __decorate([
        Output()
    ], NgbNav.prototype, "activeIdChange", void 0);
    __decorate([
        Input()
    ], NgbNav.prototype, "destroyOnHide", void 0);
    __decorate([
        Input()
    ], NgbNav.prototype, "orientation", void 0);
    __decorate([
        Input()
    ], NgbNav.prototype, "roles", void 0);
    __decorate([
        ContentChildren(NgbNavItem)
    ], NgbNav.prototype, "items", void 0);
    __decorate([
        Output()
    ], NgbNav.prototype, "navChange", void 0);
    NgbNav = __decorate([
        Directive({
            selector: '[ngbNav]',
            exportAs: 'ngbNav',
            host: {
                '[class.nav]': 'true',
                '[class.flex-column]': "orientation === 'vertical'",
                '[attr.aria-orientation]': "orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined",
                '[attr.role]': "role ? role : roles ? 'tablist' : undefined",
            }
        }),
        __param(0, Attribute('role'))
    ], NgbNav);
    return NgbNav;
}());
/**
 * A directive to put on the nav link.
 *
 * @since 5.2.0
 */
var NgbNavLink = /** @class */ (function () {
    function NgbNavLink(role, navItem, nav) {
        this.role = role;
        this.navItem = navItem;
        this.nav = nav;
    }
    NgbNavLink.prototype.hasNavItemClass = function () {
        // with alternative markup we have to add `.nav-item` class, because `ngbNavItem` is on the ng-container
        return this.navItem.elementRef.nativeElement.nodeType === Node.COMMENT_NODE;
    };
    NgbNavLink.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
        { type: NgbNavItem },
        { type: NgbNav }
    ]; };
    NgbNavLink = __decorate([
        Directive({
            selector: 'a[ngbNavLink]',
            host: {
                '[id]': 'navItem.domId',
                '[class.nav-link]': 'true',
                '[class.nav-item]': 'hasNavItemClass()',
                '[attr.role]': "role ? role : nav.roles ? 'tab' : undefined",
                'href': '',
                '[class.active]': 'navItem.active',
                '[class.disabled]': 'navItem.disabled',
                '[attr.tabindex]': 'navItem.disabled ? -1 : undefined',
                '[attr.aria-controls]': 'navItem.isPanelInDom() ? navItem.panelDomId : null',
                '[attr.aria-selected]': 'navItem.active',
                '[attr.aria-disabled]': 'navItem.disabled',
                '(click)': 'nav.click(navItem); $event.preventDefault()'
            }
        }),
        __param(0, Attribute('role'))
    ], NgbNavLink);
    return NgbNavLink;
}());

/**
 * The outlet where currently active nav content will be displayed.
 *
 * @since 5.2.0
 */
var NgbNavOutlet = /** @class */ (function () {
    function NgbNavOutlet() {
    }
    __decorate([
        Input()
    ], NgbNavOutlet.prototype, "paneRole", void 0);
    __decorate([
        Input('ngbNavOutlet')
    ], NgbNavOutlet.prototype, "nav", void 0);
    NgbNavOutlet = __decorate([
        Component({
            selector: '[ngbNavOutlet]',
            host: { '[class.tab-content]': 'true' },
            encapsulation: ViewEncapsulation.None,
            template: "\n      <ng-template ngFor let-item [ngForOf]=\"nav.items\">\n          <div class=\"tab-pane\"\n               *ngIf=\"item.isPanelInDom()\"\n               [id]=\"item.panelDomId\"\n               [class.active]=\"item.active\"\n               [attr.role]=\"paneRole ? paneRole : nav.roles ? 'tabpanel' : undefined\"\n               [attr.aria-labelledby]=\"item.domId\">\n              <ng-template [ngTemplateOutlet]=\"item.contentTpl?.templateRef || null\"\n                           [ngTemplateOutletContext]=\"{$implicit: item.active}\"></ng-template>\n          </div>\n      </ng-template>\n  "
        })
    ], NgbNavOutlet);
    return NgbNavOutlet;
}());

var NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet];
var NgbNavModule = /** @class */ (function () {
    function NgbNavModule() {
    }
    NgbNavModule = __decorate([
        NgModule({ declarations: NGB_NAV_DIRECTIVES, exports: NGB_NAV_DIRECTIVES, imports: [CommonModule] })
    ], NgbNavModule);
    return NgbNavModule;
}());

/**
 * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = /** @class */ (function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    NgbPaginationConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbPaginationConfig_Factory() { return new NgbPaginationConfig(); }, token: NgbPaginationConfig, providedIn: "root" });
    NgbPaginationConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbPaginationConfig);
    return NgbPaginationConfig;
}());

/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
var NgbPaginationEllipsis = /** @class */ (function () {
    function NgbPaginationEllipsis(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationEllipsis.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPaginationEllipsis = __decorate([
        Directive({ selector: 'ng-template[ngbPaginationEllipsis]' })
    ], NgbPaginationEllipsis);
    return NgbPaginationEllipsis;
}());
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
var NgbPaginationFirst = /** @class */ (function () {
    function NgbPaginationFirst(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationFirst.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPaginationFirst = __decorate([
        Directive({ selector: 'ng-template[ngbPaginationFirst]' })
    ], NgbPaginationFirst);
    return NgbPaginationFirst;
}());
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
var NgbPaginationLast = /** @class */ (function () {
    function NgbPaginationLast(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationLast.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPaginationLast = __decorate([
        Directive({ selector: 'ng-template[ngbPaginationLast]' })
    ], NgbPaginationLast);
    return NgbPaginationLast;
}());
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
var NgbPaginationNext = /** @class */ (function () {
    function NgbPaginationNext(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationNext.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPaginationNext = __decorate([
        Directive({ selector: 'ng-template[ngbPaginationNext]' })
    ], NgbPaginationNext);
    return NgbPaginationNext;
}());
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
var NgbPaginationNumber = /** @class */ (function () {
    function NgbPaginationNumber(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationNumber.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPaginationNumber = __decorate([
        Directive({ selector: 'ng-template[ngbPaginationNumber]' })
    ], NgbPaginationNumber);
    return NgbPaginationNumber;
}());
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
var NgbPaginationPrevious = /** @class */ (function () {
    function NgbPaginationPrevious(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPaginationPrevious.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbPaginationPrevious = __decorate([
        Directive({ selector: 'ng-template[ngbPaginationPrevious]' })
    ], NgbPaginationPrevious);
    return NgbPaginationPrevious;
}());
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
var NgbPagination = /** @class */ (function () {
    function NgbPagination(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new EventEmitter(true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
    NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
    NgbPagination.prototype.nextDisabled = function () { return !this.hasNext() || this.disabled; };
    NgbPagination.prototype.previousDisabled = function () { return !this.hasPrevious() || this.disabled; };
    NgbPagination.prototype.selectPage = function (pageNumber) { this._updatePages(pageNumber); };
    NgbPagination.prototype.ngOnChanges = function (changes) { this._updatePages(this.page); };
    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    NgbPagination.prototype._applyEllipses = function (start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    };
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    NgbPagination.prototype._applyRotation = function () {
        var start = 0;
        var end = this.pageCount;
        var leftOffset = Math.floor(this.maxSize / 2);
        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    };
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    NgbPagination.prototype._applyPagination = function () {
        var page = Math.ceil(this.page / this.maxSize) - 1;
        var start = page * this.maxSize;
        var end = start + this.maxSize;
        return [start, end];
    };
    NgbPagination.prototype._setPageInRange = function (newPageNo) {
        var prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    };
    NgbPagination.prototype._updatePages = function (newPage) {
        var _a, _b;
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            var start = 0;
            var end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                _a = __read(this._applyRotation(), 2), start = _a[0], end = _a[1];
            }
            else {
                _b = __read(this._applyPagination(), 2), start = _b[0], end = _b[1];
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    };
    NgbPagination.ctorParameters = function () { return [
        { type: NgbPaginationConfig }
    ]; };
    __decorate([
        ContentChild(NgbPaginationEllipsis, { static: false })
    ], NgbPagination.prototype, "tplEllipsis", void 0);
    __decorate([
        ContentChild(NgbPaginationFirst, { static: false })
    ], NgbPagination.prototype, "tplFirst", void 0);
    __decorate([
        ContentChild(NgbPaginationLast, { static: false })
    ], NgbPagination.prototype, "tplLast", void 0);
    __decorate([
        ContentChild(NgbPaginationNext, { static: false })
    ], NgbPagination.prototype, "tplNext", void 0);
    __decorate([
        ContentChild(NgbPaginationNumber, { static: false })
    ], NgbPagination.prototype, "tplNumber", void 0);
    __decorate([
        ContentChild(NgbPaginationPrevious, { static: false })
    ], NgbPagination.prototype, "tplPrevious", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "boundaryLinks", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "directionLinks", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "ellipses", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "rotate", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "collectionSize", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "maxSize", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "page", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "pageSize", void 0);
    __decorate([
        Output()
    ], NgbPagination.prototype, "pageChange", void 0);
    __decorate([
        Input()
    ], NgbPagination.prototype, "size", void 0);
    NgbPagination = __decorate([
        Component({
            selector: 'ngb-pagination',
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: { 'role': 'navigation' },
            template: "\n    <ng-template #first><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.first\">&laquo;&laquo;</span></ng-template>\n    <ng-template #previous><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.previous\">&laquo;</span></ng-template>\n    <ng-template #next><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.next\">&raquo;</span></ng-template>\n    <ng-template #last><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.last\">&raquo;&raquo;</span></ng-template>\n    <ng-template #ellipsis>...</ng-template>\n    <ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\n      {{ page }}\n      <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\n    </ng-template>\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"First\" i18n-aria-label=\"@@ngb.pagination.first-aria\" class=\"page-link\" href\n          (click)=\"selectPage(1); $event.preventDefault()\" [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"Previous\" i18n-aria-label=\"@@ngb.pagination.previous-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page-1); $event.preventDefault()\" [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled()}\"></ng-template>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\" [attr.aria-current]=\"(pageNumber === page ? 'page' : null)\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\" tabindex=\"-1\" aria-disabled=\"true\">\n          <ng-template [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\n                       [ngTemplateOutletContext]=\"{disabled: true, currentPage: page}\"></ng-template>\n        </a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"selectPage(pageNumber); $event.preventDefault()\"\n          [attr.tabindex]=\"disabled ? '-1' : null\" [attr.aria-disabled]=\"disabled ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\n                       [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pageNumber, currentPage: page}\"></ng-template>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Next\" i18n-aria-label=\"@@ngb.pagination.next-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page+1); $event.preventDefault()\" [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Last\" i18n-aria-label=\"@@ngb.pagination.last-aria\" class=\"page-link\" href\n          (click)=\"selectPage(pageCount); $event.preventDefault()\" [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n    </ul>\n  "
        })
    ], NgbPagination);
    return NgbPagination;
}());

var DIRECTIVES = [
    NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber,
    NgbPaginationPrevious
];
var NgbPaginationModule = /** @class */ (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule = __decorate([
        NgModule({ declarations: DIRECTIVES, exports: DIRECTIVES, imports: [CommonModule] })
    ], NgbPaginationModule);
    return NgbPaginationModule;
}());

var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
var DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave'],
    'focus': ['focusin', 'focusout'],
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
    return new Observable(function (subscriber) {
        var listeners = [];
        var openFn = function () { return subscriber.next(true); };
        var closeFn = function () { return subscriber.next(false); };
        var toggleFn = function () { return subscriber.next(!isOpenedFn()); };
        triggers.forEach(function (trigger) {
            if (trigger.open === trigger.close) {
                listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
            }
            else {
                listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
            }
        });
        return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
    });
}
var delayOrNoop = function (time) { return time > 0 ? delay(time) : function (a) { return a; }; };
var ɵ0$3 = delayOrNoop;
function triggerDelay(openDelay, closeDelay, isOpenedFn) {
    return function (input$) {
        var pending = null;
        var filteredInput$ = input$.pipe(map(function (open) { return ({ open: open }); }), filter(function (event) {
            var currentlyOpen = isOpenedFn();
            if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
                pending = event;
                return true;
            }
            if (pending && pending.open !== event.open) {
                pending = null;
            }
            return false;
        }), share());
        var delayedOpen$ = filteredInput$.pipe(filter(function (event) { return event.open; }), delayOrNoop(openDelay));
        var delayedClose$ = filteredInput$.pipe(filter(function (event) { return !event.open; }), delayOrNoop(closeDelay));
        return merge(delayedOpen$, delayedClose$)
            .pipe(filter(function (event) {
            if (event === pending) {
                pending = null;
                return event.open !== isOpenedFn();
            }
            return false;
        }), map(function (event) { return event.open; }));
    };
}
function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay, closeDelay) {
    if (openDelay === void 0) { openDelay = 0; }
    if (closeDelay === void 0) { closeDelay = 0; }
    var parsedTriggers = parseTriggers(triggers);
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return function () { };
    }
    var subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn)
        .pipe(triggerDelay(openDelay, closeDelay, isOpenedFn))
        .subscribe(function (open) { return (open ? openFn() : closeFn()); });
    return function () { return subscription.unsubscribe(); };
}

/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = /** @class */ (function () {
    function NgbPopoverConfig() {
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'click';
        this.disablePopover = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    NgbPopoverConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbPopoverConfig_Factory() { return new NgbPopoverConfig(); }, token: NgbPopoverConfig, providedIn: "root" });
    NgbPopoverConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbPopoverConfig);
    return NgbPopoverConfig;
}());

var nextId$3 = 0;
var NgbPopoverWindow = /** @class */ (function () {
    function NgbPopoverWindow() {
    }
    NgbPopoverWindow.prototype.isTitleTemplate = function () { return this.title instanceof TemplateRef; };
    __decorate([
        Input()
    ], NgbPopoverWindow.prototype, "title", void 0);
    __decorate([
        Input()
    ], NgbPopoverWindow.prototype, "id", void 0);
    __decorate([
        Input()
    ], NgbPopoverWindow.prototype, "popoverClass", void 0);
    __decorate([
        Input()
    ], NgbPopoverWindow.prototype, "context", void 0);
    NgbPopoverWindow = __decorate([
        Component({
            selector: 'ngb-popover-window',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            host: { '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")', 'role': 'tooltip', '[id]': 'id' },
            template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\" *ngIf=\"title != null\">\n      <ng-template #simpleTitle>{{title}}</ng-template>\n      <ng-template [ngTemplateOutlet]=\"isTitleTemplate() ? $any(title) : simpleTitle\" [ngTemplateOutletContext]=\"context\"></ng-template>\n    </h3>\n    <div class=\"popover-body\"><ng-content></ng-content></div>",
            styles: ["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}"]
        })
    ], NgbPopoverWindow);
    return NgbPopoverWindow;
}());
/**
 * A lightweight and extensible directive for fancy popover creation.
 */
var NgbPopover = /** @class */ (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        /**
         * An event emitted when the popover is shown. Contains no payload.
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the popover is hidden. Contains no payload.
         */
        this.hidden = new EventEmitter();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId$3++;
        this._windowRef = null;
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this.popoverClass = config.popoverClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-popover');
            }
        });
    }
    NgbPopover.prototype._isDisabled = function () {
        if (this.disablePopover) {
            return true;
        }
        if (!this.ngbPopover && !this.popoverTitle) {
            return true;
        }
        return false;
    };
    /**
     * Opens the popover.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the popover template when it is created.
     */
    NgbPopover.prototype.open = function (context) {
        var _this = this;
        if (!this._windowRef && !this._isDisabled()) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.context = context;
            this._windowRef.instance.popoverClass = this.popoverClass;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening popover from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
            this._windowRef.changeDetectorRef.detectChanges();
            // We need to mark for check, because popover won't work inside the OnPush component.
            // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the popover from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.
            this._windowRef.changeDetectorRef.markForCheck();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this.hidden, [this._windowRef.location.nativeElement]);
            this.shown.emit();
        }
    };
    /**
     * Closes the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    NgbPopover.prototype.close = function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Toggles the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     */
    NgbPopover.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns `true`, if the popover is currently shown.
     */
    NgbPopover.prototype.isOpen = function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    };
    NgbPopover.prototype.ngOnChanges = function (_a) {
        var ngbPopover = _a.ngbPopover, popoverTitle = _a.popoverTitle, disablePopover = _a.disablePopover, popoverClass = _a.popoverClass;
        if (popoverClass && this.isOpen()) {
            this._windowRef.instance.popoverClass = popoverClass.currentValue;
        }
        // close popover if title and content become empty, or disablePopover set to true
        if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
            this.close();
        }
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbPopover.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: NgbPopoverConfig },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: ApplicationRef }
    ]; };
    __decorate([
        Input()
    ], NgbPopover.prototype, "autoClose", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "ngbPopover", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "popoverTitle", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "placement", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "triggers", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "container", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "disablePopover", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "popoverClass", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "openDelay", void 0);
    __decorate([
        Input()
    ], NgbPopover.prototype, "closeDelay", void 0);
    __decorate([
        Output()
    ], NgbPopover.prototype, "shown", void 0);
    __decorate([
        Output()
    ], NgbPopover.prototype, "hidden", void 0);
    NgbPopover = __decorate([
        Directive({ selector: '[ngbPopover]', exportAs: 'ngbPopover' }),
        __param(7, Inject(DOCUMENT))
    ], NgbPopover);
    return NgbPopover;
}());

var NgbPopoverModule = /** @class */ (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule = __decorate([
        NgModule({
            declarations: [NgbPopover, NgbPopoverWindow],
            exports: [NgbPopover],
            imports: [CommonModule],
            entryComponents: [NgbPopoverWindow]
        })
    ], NgbPopoverModule);
    return NgbPopoverModule;
}());

/**
 * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
var NgbProgressbarConfig = /** @class */ (function () {
    function NgbProgressbarConfig() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
    NgbProgressbarConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbProgressbarConfig_Factory() { return new NgbProgressbarConfig(); }, token: NgbProgressbarConfig, providedIn: "root" });
    NgbProgressbarConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbProgressbarConfig);
    return NgbProgressbarConfig;
}());

/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = /** @class */ (function () {
    function NgbProgressbar(config) {
        /**
         * The current value for the progress bar.
         *
         * Should be in the `[0, max]` range.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.textType = config.textType;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    Object.defineProperty(NgbProgressbar.prototype, "max", {
        get: function () { return this._max; },
        /**
         * The maximal value to be displayed in the progress bar.
         *
         * Should be a positive number. Will default to 100 otherwise.
         */
        set: function (max) {
            this._max = !isNumber(max) || max <= 0 ? 100 : max;
        },
        enumerable: true,
        configurable: true
    });
    NgbProgressbar.prototype.getValue = function () { return getValueInRange(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    NgbProgressbar.ctorParameters = function () { return [
        { type: NgbProgressbarConfig }
    ]; };
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "max", null);
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "animated", void 0);
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "striped", void 0);
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "showValue", void 0);
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "textType", void 0);
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "type", void 0);
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "value", void 0);
    __decorate([
        Input()
    ], NgbProgressbar.prototype, "height", void 0);
    NgbProgressbar = __decorate([
        Component({
            selector: 'ngb-progressbar',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{textType ? ' text-' + textType : ''}}\n      {{animated ? ' progress-bar-animated' : ''}}{{striped ? ' progress-bar-striped' : ''}}\"\n      role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n      [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\" i18n=\"@@ngb.progressbar.value\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
        })
    ], NgbProgressbar);
    return NgbProgressbar;
}());

var NgbProgressbarModule = /** @class */ (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule = __decorate([
        NgModule({ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [CommonModule] })
    ], NgbProgressbarModule);
    return NgbProgressbarModule;
}());

/**
 * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = /** @class */ (function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
    NgbRatingConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbRatingConfig_Factory() { return new NgbRatingConfig(); }, token: NgbRatingConfig, providedIn: "root" });
    NgbRatingConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbRatingConfig);
    return NgbRatingConfig;
}());

var NGB_RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbRating; }),
    multi: true
};
/**
 * A directive that helps visualising and interacting with a star rating bar.
 */
var NgbRating = /** @class */ (function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload equals to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload equals to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event emitted when the user selects a new rating.
         *
         * Event payload equals to the newly selected rating.
         */
        this.rateChange = new EventEmitter(true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    NgbRating.prototype.ariaValueText = function () { return this.nextRate + " out of " + this.max; };
    NgbRating.prototype.enter = function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    NgbRating.prototype.handleBlur = function () { this.onTouched(); };
    NgbRating.prototype.handleClick = function (value) {
        if (!this.readonly && !this.disabled) {
            this.update(this.resettable && this.rate === value ? 0 : value);
        }
    };
    NgbRating.prototype.handleKeyDown = function (event) {
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.ArrowDown:
            case Key.ArrowLeft:
                this.update(this.rate - 1);
                break;
            case Key.ArrowUp:
            case Key.ArrowRight:
                this.update(this.rate + 1);
                break;
            case Key.Home:
                this.update(0);
                break;
            case Key.End:
                this.update(this.max);
                break;
            default:
                return;
        }
        // note 'return' in default case
        event.preventDefault();
    };
    NgbRating.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    NgbRating.prototype.ngOnInit = function () {
        this.contexts = Array.from({ length: this.max }, function (v, k) { return ({ fill: 0, index: k }); });
        this._updateState(this.rate);
    };
    NgbRating.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRating.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRating.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    NgbRating.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbRating.prototype.update = function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        var newRate = getValueInRange(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    };
    NgbRating.prototype.writeValue = function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    NgbRating.prototype._getFillValue = function (index) {
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return parseInt((diff * 100).toFixed(2), 10);
        }
        return 0;
    };
    NgbRating.prototype._updateState = function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach(function (context, index) { return context.fill = _this._getFillValue(index); });
    };
    NgbRating.ctorParameters = function () { return [
        { type: NgbRatingConfig },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], NgbRating.prototype, "max", void 0);
    __decorate([
        Input()
    ], NgbRating.prototype, "rate", void 0);
    __decorate([
        Input()
    ], NgbRating.prototype, "readonly", void 0);
    __decorate([
        Input()
    ], NgbRating.prototype, "resettable", void 0);
    __decorate([
        Input()
    ], NgbRating.prototype, "starTemplate", void 0);
    __decorate([
        ContentChild(TemplateRef, { static: false })
    ], NgbRating.prototype, "starTemplateFromContent", void 0);
    __decorate([
        Output()
    ], NgbRating.prototype, "hover", void 0);
    __decorate([
        Output()
    ], NgbRating.prototype, "leave", void 0);
    __decorate([
        Output()
    ], NgbRating.prototype, "rateChange", void 0);
    NgbRating = __decorate([
        Component({
            selector: 'ngb-rating',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            host: {
                'class': 'd-inline-flex',
                '[tabindex]': 'disabled ? -1 : 0',
                'role': 'slider',
                'aria-valuemin': '0',
                '[attr.aria-valuemax]': 'max',
                '[attr.aria-valuenow]': 'nextRate',
                '[attr.aria-valuetext]': 'ariaValueText()',
                '[attr.aria-disabled]': 'readonly ? true : null',
                '(blur)': 'handleBlur()',
                '(keydown)': 'handleKeyDown($event)',
                '(mouseleave)': 'reset()'
            },
            template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || starTemplateFromContent || t\" [ngTemplateOutletContext]=\"contexts[index]\">\n        </ng-template>\n      </span>\n    </ng-template>\n  ",
            providers: [NGB_RATING_VALUE_ACCESSOR]
        })
    ], NgbRating);
    return NgbRating;
}());

var NgbRatingModule = /** @class */ (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule = __decorate([
        NgModule({ declarations: [NgbRating], exports: [NgbRating], imports: [CommonModule] })
    ], NgbRatingModule);
    return NgbRatingModule;
}());

/**
 * A configuration service for the [`NgbTabset`](#/components/tabset/api#NgbTabset) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
var NgbTabsetConfig = /** @class */ (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.orientation = 'horizontal';
        this.type = 'tabs';
    }
    NgbTabsetConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbTabsetConfig_Factory() { return new NgbTabsetConfig(); }, token: NgbTabsetConfig, providedIn: "root" });
    NgbTabsetConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbTabsetConfig);
    return NgbTabsetConfig;
}());

var nextId$4 = 0;
/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgbTab.title` input for string titles.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
var NgbTabTitle = /** @class */ (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabTitle.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbTabTitle = __decorate([
        Directive({ selector: 'ng-template[ngbTabTitle]' })
    ], NgbTabTitle);
    return NgbTabTitle;
}());
/**
 * A directive to wrap content to be displayed in a tab.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
var NgbTabContent = /** @class */ (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    NgbTabContent = __decorate([
        Directive({ selector: 'ng-template[ngbTabContent]' })
    ], NgbTabContent);
    return NgbTabContent;
}());
/**
 * A directive representing an individual tab.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
var NgbTab = /** @class */ (function () {
    function NgbTab() {
        /**
         * The tab identifier.
         *
         * Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-" + nextId$4++;
        /**
         * If `true`, the current tab is disabled and can't be toggled.
         */
        this.disabled = false;
    }
    NgbTab.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    __decorate([
        Input()
    ], NgbTab.prototype, "id", void 0);
    __decorate([
        Input()
    ], NgbTab.prototype, "title", void 0);
    __decorate([
        Input()
    ], NgbTab.prototype, "disabled", void 0);
    __decorate([
        ContentChildren(NgbTabTitle, { descendants: false })
    ], NgbTab.prototype, "titleTpls", void 0);
    __decorate([
        ContentChildren(NgbTabContent, { descendants: false })
    ], NgbTab.prototype, "contentTpls", void 0);
    NgbTab = __decorate([
        Directive({ selector: 'ngb-tab' })
    ], NgbTab);
    return NgbTab;
}());
/**
 * A component that makes it easy to create tabbed interface.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
var NgbTabset = /** @class */ (function () {
    function NgbTabset(config) {
        /**
         * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
         */
        this.destroyOnHide = true;
        /**
         * A tab change event emitted right before the tab change happens.
         *
         * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
         */
        this.tabChange = new EventEmitter();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
    }
    Object.defineProperty(NgbTabset.prototype, "justify", {
        /**
         * The horizontal alignment of the tabs with flexbox utilities.
         */
        set: function (className) {
            if (className === 'fill' || className === 'justified') {
                this.justifyClass = "nav-" + className;
            }
            else {
                this.justifyClass = "justify-content-" + className;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     */
    NgbTabset.prototype.select = function (tabId) {
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    NgbTabset.prototype.ngAfterContentChecked = function () {
        // auto-correct activeId that might have been set incorrectly as input
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    NgbTabset.prototype._getTabById = function (id) {
        var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    NgbTabset.ctorParameters = function () { return [
        { type: NgbTabsetConfig }
    ]; };
    __decorate([
        ContentChildren(NgbTab)
    ], NgbTabset.prototype, "tabs", void 0);
    __decorate([
        Input()
    ], NgbTabset.prototype, "activeId", void 0);
    __decorate([
        Input()
    ], NgbTabset.prototype, "destroyOnHide", void 0);
    __decorate([
        Input()
    ], NgbTabset.prototype, "justify", null);
    __decorate([
        Input()
    ], NgbTabset.prototype, "orientation", void 0);
    __decorate([
        Input()
    ], NgbTabset.prototype, "type", void 0);
    __decorate([
        Output()
    ], NgbTabset.prototype, "tabChange", void 0);
    NgbTabset = __decorate([
        Component({
            selector: 'ngb-tabset',
            exportAs: 'ngbTabset',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"select(tab.id); $event.preventDefault()\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-selected]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef || null\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef || null\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
        })
    ], NgbTabset);
    return NgbTabset;
}());

var NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
/**
 * @deprecated 6.0.0 Please use NgbNavModule instead
 */
var NgbTabsetModule = /** @class */ (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule = __decorate([
        NgModule({ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [CommonModule] })
    ], NgbTabsetModule);
    return NgbTabsetModule;
}());

var NgbTime = /** @class */ (function () {
    function NgbTime(hour, minute, second) {
        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    };
    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());

/**
 * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
var NgbTimepickerConfig = /** @class */ (function () {
    function NgbTimepickerConfig() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
    NgbTimepickerConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbTimepickerConfig_Factory() { return new NgbTimepickerConfig(); }, token: NgbTimepickerConfig, providedIn: "root" });
    NgbTimepickerConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbTimepickerConfig);
    return NgbTimepickerConfig;
}());

function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
    return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * @since 2.2.0
 */
var NgbTimeAdapter = /** @class */ (function () {
    function NgbTimeAdapter() {
    }
    NgbTimeAdapter.ɵprov = ɵɵdefineInjectable({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
    NgbTimeAdapter = __decorate([
        Injectable({ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY })
    ], NgbTimeAdapter);
    return NgbTimeAdapter;
}());
var NgbTimeStructAdapter = /** @class */ (function (_super) {
    __extends(NgbTimeStructAdapter, _super);
    function NgbTimeStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    NgbTimeStructAdapter.prototype.fromModel = function (time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    };
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     */
    NgbTimeStructAdapter.prototype.toModel = function (time) {
        return (time && isInteger(time.hour) && isInteger(time.minute)) ?
            { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
            null;
    };
    NgbTimeStructAdapter = __decorate([
        Injectable()
    ], NgbTimeStructAdapter);
    return NgbTimeStructAdapter;
}(NgbTimeAdapter));

function NGB_TIMEPICKER_I18N_FACTORY(locale) {
    return new NgbTimepickerI18nDefault(locale);
}
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 */
var NgbTimepickerI18n = /** @class */ (function () {
    function NgbTimepickerI18n() {
    }
    NgbTimepickerI18n.ɵprov = ɵɵdefineInjectable({ factory: function NgbTimepickerI18n_Factory() { return NGB_TIMEPICKER_I18N_FACTORY(ɵɵinject(LOCALE_ID)); }, token: NgbTimepickerI18n, providedIn: "root" });
    NgbTimepickerI18n = __decorate([
        Injectable({ providedIn: 'root', useFactory: NGB_TIMEPICKER_I18N_FACTORY, deps: [LOCALE_ID] })
    ], NgbTimepickerI18n);
    return NgbTimepickerI18n;
}());
var NgbTimepickerI18nDefault = /** @class */ (function (_super) {
    __extends(NgbTimepickerI18nDefault, _super);
    function NgbTimepickerI18nDefault(locale) {
        var _this = _super.call(this) || this;
        _this._periods = getLocaleDayPeriods(locale, FormStyle.Standalone, TranslationWidth.Narrow);
        return _this;
    }
    NgbTimepickerI18nDefault.prototype.getMorningPeriod = function () { return this._periods[0]; };
    NgbTimepickerI18nDefault.prototype.getAfternoonPeriod = function () { return this._periods[1]; };
    NgbTimepickerI18nDefault.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgbTimepickerI18nDefault = __decorate([
        Injectable(),
        __param(0, Inject(LOCALE_ID))
    ], NgbTimepickerI18nDefault);
    return NgbTimepickerI18nDefault;
}(NgbTimepickerI18n));

var FILTER_REGEX = /[^0-9]/g;
var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbTimepicker; }),
    multi: true
};
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
var NgbTimepicker = /** @class */ (function () {
    function NgbTimepicker(_config, _ngbTimeAdapter, _cd, i18n) {
        this._config = _config;
        this._ngbTimeAdapter = _ngbTimeAdapter;
        this._cd = _cd;
        this.i18n = i18n;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.meridian = _config.meridian;
        this.spinners = _config.spinners;
        this.seconds = _config.seconds;
        this.hourStep = _config.hourStep;
        this.minuteStep = _config.minuteStep;
        this.secondStep = _config.secondStep;
        this.disabled = _config.disabled;
        this.readonlyInputs = _config.readonlyInputs;
        this.size = _config.size;
    }
    Object.defineProperty(NgbTimepicker.prototype, "hourStep", {
        get: function () { return this._hourStep; },
        /**
         * The number of hours to add/subtract when clicking hour spinners.
         */
        set: function (step) {
            this._hourStep = isInteger(step) ? step : this._config.hourStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbTimepicker.prototype, "minuteStep", {
        get: function () { return this._minuteStep; },
        /**
         * The number of minutes to add/subtract when clicking minute spinners.
         */
        set: function (step) {
            this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbTimepicker.prototype, "secondStep", {
        get: function () { return this._secondStep; },
        /**
         * The number of seconds to add/subtract when clicking second spinners.
         */
        set: function (step) {
            this._secondStep = isInteger(step) ? step : this._config.secondStep;
        },
        enumerable: true,
        configurable: true
    });
    NgbTimepicker.prototype.writeValue = function (value) {
        var structValue = this._ngbTimeAdapter.fromModel(value);
        this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
        if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
            this.model.second = 0;
        }
        this._cd.markForCheck();
    };
    NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbTimepicker.prototype.changeHour = function (step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeMinute = function (step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeSecond = function (step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateHour = function (newVal) {
        var isPM = this.model.hour >= 12;
        var enteredHour = toInteger(newVal);
        if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
        }
        else {
            this.model.updateHour(enteredHour);
        }
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateMinute = function (newVal) {
        this.model.updateMinute(toInteger(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateSecond = function (newVal) {
        this.model.updateSecond(toInteger(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.toggleMeridian = function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    NgbTimepicker.prototype.formatInput = function (input) { input.value = input.value.replace(FILTER_REGEX, ''); };
    NgbTimepicker.prototype.formatHour = function (value) {
        if (isNumber(value)) {
            if (this.meridian) {
                return padNumber(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return padNumber(value % 24);
            }
        }
        else {
            return padNumber(NaN);
        }
    };
    NgbTimepicker.prototype.formatMinSec = function (value) { return padNumber(isNumber(value) ? value : NaN); };
    Object.defineProperty(NgbTimepicker.prototype, "isSmallSize", {
        get: function () { return this.size === 'small'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbTimepicker.prototype, "isLargeSize", {
        get: function () { return this.size === 'large'; },
        enumerable: true,
        configurable: true
    });
    NgbTimepicker.prototype.ngOnChanges = function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    NgbTimepicker.prototype.propagateModelChange = function (touched) {
        if (touched === void 0) { touched = true; }
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second }));
        }
        else {
            this.onChange(this._ngbTimeAdapter.toModel(null));
        }
    };
    NgbTimepicker.ctorParameters = function () { return [
        { type: NgbTimepickerConfig },
        { type: NgbTimeAdapter },
        { type: ChangeDetectorRef },
        { type: NgbTimepickerI18n }
    ]; };
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "meridian", void 0);
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "spinners", void 0);
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "seconds", void 0);
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "hourStep", null);
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "minuteStep", null);
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "secondStep", null);
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "readonlyInputs", void 0);
    __decorate([
        Input()
    ], NgbTimepicker.prototype, "size", void 0);
    NgbTimepicker = __decorate([
        Component({
            selector: 'ngb-timepicker',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-input-container ngb-tp-hour\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-hours\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\"\n            [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" inputmode=\"numeric\" placeholder=\"HH\" i18n-placeholder=\"@@ngb.timepicker.HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($any($event).target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\" i18n-aria-label=\"@@ngb.timepicker.hours\"\n            (input)=\"formatInput($any($event).target)\"\n            (keydown.ArrowUp)=\"changeHour(hourStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeHour(-hourStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(-hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-hours\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-input-container ngb-tp-minute\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-minutes\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" inputmode=\"numeric\" placeholder=\"MM\" i18n-placeholder=\"@@ngb.timepicker.MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($any($event).target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\" i18n-aria-label=\"@@ngb.timepicker.minutes\"\n            (input)=\"formatInput($any($event).target)\"\n            (keydown.ArrowUp)=\"changeMinute(minuteStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeMinute(-minuteStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(-minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\"  i18n=\"@@ngb.timepicker.decrement-minutes\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-input-container ngb-tp-second\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-seconds\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" inputmode=\"numeric\" placeholder=\"SS\" i18n-placeholder=\"@@ngb.timepicker.SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($any($event).target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\" i18n-aria-label=\"@@ngb.timepicker.seconds\"\n            (input)=\"formatInput($any($event).target)\"\n            (keydown.ArrowUp)=\"changeSecond(secondStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeSecond(-secondStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(-secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-seconds\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n                  (click)=\"toggleMeridian()\">\n            <ng-container *ngIf=\"model && model.hour >= 12; else am\"\n                          i18n=\"@@ngb.timepicker.PM\">{{ i18n.getAfternoonPeriod() }}</ng-container>\n            <ng-template #am i18n=\"@@ngb.timepicker.AM\">{{ i18n.getMorningPeriod() }}</ng-template>\n          </button>\n        </div>\n      </div>\n    </fieldset>\n  ",
            providers: [NGB_TIMEPICKER_VALUE_ACCESSOR],
            styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"]
        })
    ], NgbTimepicker);
    return NgbTimepicker;
}());

var NgbTimepickerModule = /** @class */ (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule = __decorate([
        NgModule({ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [CommonModule] })
    ], NgbTimepickerModule);
    return NgbTimepickerModule;
}());

/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */
var NgbToastConfig = /** @class */ (function () {
    function NgbToastConfig() {
        this.autohide = true;
        this.delay = 500;
        this.ariaLive = 'polite';
    }
    NgbToastConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbToastConfig_Factory() { return new NgbToastConfig(); }, token: NgbToastConfig, providedIn: "root" });
    NgbToastConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbToastConfig);
    return NgbToastConfig;
}());

/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * @since 5.0.0
 */
var NgbToastHeader = /** @class */ (function () {
    function NgbToastHeader() {
    }
    NgbToastHeader = __decorate([
        Directive({ selector: '[ngbToastHeader]' })
    ], NgbToastHeader);
    return NgbToastHeader;
}());
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * @since 5.0.0
 */
var NgbToast = /** @class */ (function () {
    function NgbToast(ariaLive, config) {
        this.ariaLive = ariaLive;
        /**
         * A template like `<ng-template ngbToastHeader></ng-template>` can be
         * used in the projected content to allow markup usage.
         */
        this.contentHeaderTpl = null;
        /**
         * An event fired immediately when toast's `hide()` method has been called.
         * It can only occur in 2 different scenarios:
         * - `autohide` timeout fires
         * - user clicks on a closing cross (&times)
         *
         * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
         * that.
         */
        this.hideOutput = new EventEmitter();
        if (this.ariaLive == null) {
            this.ariaLive = config.ariaLive;
        }
        this.delay = config.delay;
        this.autohide = config.autohide;
    }
    NgbToast.prototype.ngAfterContentInit = function () { this._init(); };
    NgbToast.prototype.ngOnChanges = function (changes) {
        if ('autohide' in changes) {
            this._clearTimeout();
            this._init();
        }
    };
    NgbToast.prototype.hide = function () {
        this._clearTimeout();
        this.hideOutput.emit();
    };
    NgbToast.prototype._init = function () {
        var _this = this;
        if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout(function () { return _this.hide(); }, this.delay);
        }
    };
    NgbToast.prototype._clearTimeout = function () {
        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    };
    NgbToast.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['aria-live',] }] },
        { type: NgbToastConfig }
    ]; };
    __decorate([
        Input()
    ], NgbToast.prototype, "delay", void 0);
    __decorate([
        Input()
    ], NgbToast.prototype, "autohide", void 0);
    __decorate([
        Input()
    ], NgbToast.prototype, "header", void 0);
    __decorate([
        ContentChild(NgbToastHeader, { read: TemplateRef, static: true })
    ], NgbToast.prototype, "contentHeaderTpl", void 0);
    __decorate([
        Output('hide')
    ], NgbToast.prototype, "hideOutput", void 0);
    NgbToast = __decorate([
        Component({
            selector: 'ngb-toast',
            exportAs: 'ngbToast',
            encapsulation: ViewEncapsulation.None,
            host: {
                'role': 'alert',
                '[attr.aria-live]': 'ariaLive',
                'aria-atomic': 'true',
                '[class.toast]': 'true',
                '[class.show]': 'true',
            },
            template: "\n    <ng-template #headerTpl>\n      <strong class=\"mr-auto\">{{header}}</strong>\n    </ng-template>\n    <ng-template [ngIf]=\"contentHeaderTpl || header\">\n      <div class=\"toast-header\">\n        <ng-template [ngTemplateOutlet]=\"contentHeaderTpl || headerTpl\"></ng-template>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.toast.close-aria\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </ng-template>\n    <div class=\"toast-body\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
        }),
        __param(0, Attribute('aria-live'))
    ], NgbToast);
    return NgbToast;
}());

var NgbToastModule = /** @class */ (function () {
    function NgbToastModule() {
    }
    NgbToastModule = __decorate([
        NgModule({ declarations: [NgbToast, NgbToastHeader], imports: [CommonModule], exports: [NgbToast, NgbToastHeader] })
    ], NgbToastModule);
    return NgbToastModule;
}());

/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = /** @class */ (function () {
    function NgbTooltipConfig() {
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'hover focus';
        this.disableTooltip = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    NgbTooltipConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbTooltipConfig_Factory() { return new NgbTooltipConfig(); }, token: NgbTooltipConfig, providedIn: "root" });
    NgbTooltipConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbTooltipConfig);
    return NgbTooltipConfig;
}());

var nextId$5 = 0;
var NgbTooltipWindow = /** @class */ (function () {
    function NgbTooltipWindow() {
    }
    __decorate([
        Input()
    ], NgbTooltipWindow.prototype, "id", void 0);
    __decorate([
        Input()
    ], NgbTooltipWindow.prototype, "tooltipClass", void 0);
    NgbTooltipWindow = __decorate([
        Component({
            selector: 'ngb-tooltip-window',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            host: { '[class]': '"tooltip show" + (tooltipClass ? " " + tooltipClass : "")', 'role': 'tooltip', '[id]': 'id' },
            template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
            styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"]
        })
    ], NgbTooltipWindow);
    return NgbTooltipWindow;
}());
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */
var NgbTooltip = /** @class */ (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        /**
         * An event emitted when the tooltip is shown. Contains no payload.
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the popover is hidden. Contains no payload.
         */
        this.hidden = new EventEmitter();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId$5++;
        this._windowRef = null;
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this.tooltipClass = config.tooltipClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-tooltip');
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        /**
         * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
         *
         * If the content if falsy, the tooltip won't open.
         */
        set: function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     */
    NgbTooltip.prototype.open = function (context) {
        var _this = this;
        if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.tooltipClass = this.tooltipClass;
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening tooltip from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
            this._windowRef.changeDetectorRef.detectChanges();
            // We need to mark for check, because tooltip won't work inside the OnPush component.
            // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the tooltip from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.
            this._windowRef.changeDetectorRef.markForCheck();
            ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this.hidden, [this._windowRef.location.nativeElement]);
            this.shown.emit();
        }
    };
    /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    NgbTooltip.prototype.close = function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    NgbTooltip.prototype.toggle = function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns `true`, if the popover is currently shown.
     */
    NgbTooltip.prototype.isOpen = function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    };
    NgbTooltip.prototype.ngOnChanges = function (_a) {
        var tooltipClass = _a.tooltipClass;
        if (tooltipClass && this.isOpen()) {
            this._windowRef.instance.tooltipClass = tooltipClass.currentValue;
        }
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbTooltip.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: NgbTooltipConfig },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: ApplicationRef }
    ]; };
    __decorate([
        Input()
    ], NgbTooltip.prototype, "autoClose", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "placement", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "triggers", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "container", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "disableTooltip", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "tooltipClass", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "openDelay", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "closeDelay", void 0);
    __decorate([
        Output()
    ], NgbTooltip.prototype, "shown", void 0);
    __decorate([
        Output()
    ], NgbTooltip.prototype, "hidden", void 0);
    __decorate([
        Input()
    ], NgbTooltip.prototype, "ngbTooltip", null);
    NgbTooltip = __decorate([
        Directive({ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' }),
        __param(7, Inject(DOCUMENT))
    ], NgbTooltip);
    return NgbTooltip;
}());

var NgbTooltipModule = /** @class */ (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule = __decorate([
        NgModule({ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] })
    ], NgbTooltipModule);
    return NgbTooltipModule;
}());

/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */
var NgbHighlight = /** @class */ (function () {
    function NgbHighlight() {
        /**
         * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
         */
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var result = toString(this.result);
        var terms = Array.isArray(this.term) ? this.term : [this.term];
        var escapedTerms = terms.map(function (term) { return regExpEscape(toString(term)); }).filter(function (term) { return term; });
        this.parts = escapedTerms.length ? result.split(new RegExp("(" + escapedTerms.join('|') + ")", 'gmi')) : [result];
    };
    __decorate([
        Input()
    ], NgbHighlight.prototype, "highlightClass", void 0);
    __decorate([
        Input()
    ], NgbHighlight.prototype, "result", void 0);
    __decorate([
        Input()
    ], NgbHighlight.prototype, "term", void 0);
    NgbHighlight = __decorate([
        Component({
            selector: 'ngb-highlight',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                "<span *ngIf=\"isOdd; else even\" [class]=\"highlightClass\">{{part}}</span><ng-template #even>{{part}}</ng-template>" +
                "</ng-template>",
            styles: [".ngb-highlight{font-weight:700}"]
        })
    ], NgbHighlight);
    return NgbHighlight;
}());

var NgbTypeaheadWindow = /** @class */ (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */
        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */
        this.formatter = toString;
        /**
         * Event raised when user selects a particular result row
         */
        this.selectEvent = new EventEmitter();
        this.activeChangeEvent = new EventEmitter();
    }
    NgbTypeaheadWindow.prototype.hasActive = function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.resetActive = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () { this.resetActive(); };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    __decorate([
        Input()
    ], NgbTypeaheadWindow.prototype, "id", void 0);
    __decorate([
        Input()
    ], NgbTypeaheadWindow.prototype, "focusFirst", void 0);
    __decorate([
        Input()
    ], NgbTypeaheadWindow.prototype, "results", void 0);
    __decorate([
        Input()
    ], NgbTypeaheadWindow.prototype, "term", void 0);
    __decorate([
        Input()
    ], NgbTypeaheadWindow.prototype, "formatter", void 0);
    __decorate([
        Input()
    ], NgbTypeaheadWindow.prototype, "resultTemplate", void 0);
    __decorate([
        Output('select')
    ], NgbTypeaheadWindow.prototype, "selectEvent", void 0);
    __decorate([
        Output('activeChange')
    ], NgbTypeaheadWindow.prototype, "activeChangeEvent", void 0);
    NgbTypeaheadWindow = __decorate([
        Component({
            selector: 'ngb-typeahead-window',
            exportAs: 'ngbTypeaheadWindow',
            encapsulation: ViewEncapsulation.None,
            host: { '(mousedown)': '$event.preventDefault()', 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
            template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
        })
    ], NgbTypeaheadWindow);
    return NgbTypeaheadWindow;
}());

var ARIA_LIVE_DELAY = new InjectionToken('live announcer delay', { providedIn: 'root', factory: ARIA_LIVE_DELAY_FACTORY });
function ARIA_LIVE_DELAY_FACTORY() {
    return 100;
}
function getLiveElement(document, lazyCreate) {
    if (lazyCreate === void 0) { lazyCreate = false; }
    var element = document.body.querySelector('#ngb-live');
    if (element == null && lazyCreate) {
        element = document.createElement('div');
        element.setAttribute('id', 'ngb-live');
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-atomic', 'true');
        element.classList.add('sr-only');
        document.body.appendChild(element);
    }
    return element;
}
var Live = /** @class */ (function () {
    function Live(_document, _delay) {
        this._document = _document;
        this._delay = _delay;
    }
    Live.prototype.ngOnDestroy = function () {
        var element = getLiveElement(this._document);
        if (element) {
            // if exists, it will always be attached to the <body>
            element.parentElement.removeChild(element);
        }
    };
    Live.prototype.say = function (message) {
        var element = getLiveElement(this._document, true);
        var delay = this._delay;
        if (element != null) {
            element.textContent = '';
            var setText = function () { return element.textContent = message; };
            if (delay === null) {
                setText();
            }
            else {
                setTimeout(setText, delay);
            }
        }
    };
    Live.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ARIA_LIVE_DELAY,] }] }
    ]; };
    Live.ɵprov = ɵɵdefineInjectable({ factory: function Live_Factory() { return new Live(ɵɵinject(DOCUMENT), ɵɵinject(ARIA_LIVE_DELAY)); }, token: Live, providedIn: "root" });
    Live = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(0, Inject(DOCUMENT)), __param(1, Inject(ARIA_LIVE_DELAY))
    ], Live);
    return Live;
}());

/**
 * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = /** @class */ (function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
        this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
    NgbTypeaheadConfig.ɵprov = ɵɵdefineInjectable({ factory: function NgbTypeaheadConfig_Factory() { return new NgbTypeaheadConfig(); }, token: NgbTypeaheadConfig, providedIn: "root" });
    NgbTypeaheadConfig = __decorate([
        Injectable({ providedIn: 'root' })
    ], NgbTypeaheadConfig);
    return NgbTypeaheadConfig;
}());

var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbTypeahead; }),
    multi: true
};
var nextWindowId = 0;
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */
var NgbTypeahead = /** @class */ (function () {
    function NgbTypeahead(_elementRef, viewContainerRef, _renderer, injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector, applicationRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._live = _live;
        this._document = _document;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        this._subscription = null;
        this._closed$ = new Subject();
        this._inputValueBackup = null;
        this._windowRef = null;
        /**
         * The value for the `autocomplete` attribute for the `<input>` element.
         *
         * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
         *
         * @since 2.1.0
         */
        this.autocomplete = 'off';
        /**
         * The preferred placement of the typeahead.
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
        this.placement = 'bottom-left';
        /**
         * An event emitted right before an item is selected from the result list.
         *
         * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
         */
        this.selectItem = new EventEmitter();
        this.activeDescendant = null;
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = function () { };
        this._onChange = function (_) { };
        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = fromEvent(_elementRef.nativeElement, 'input')
            .pipe(map(function ($event) { return $event.target.value; }));
        this._resubscribeTypeahead = new BehaviorSubject(null);
        this._popupService = new PopupService(NgbTypeaheadWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, applicationRef);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this.isPopupOpen()) {
                positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    NgbTypeahead.prototype.ngOnInit = function () {
        var _this = this;
        var inputValues$ = this._valueChanges.pipe(tap(function (value) {
            _this._inputValueBackup = _this.showHint ? value : null;
            _this._onChange(_this.editable ? value : undefined);
        }));
        var results$ = inputValues$.pipe(this.ngbTypeahead);
        var userInput$ = this._resubscribeTypeahead.pipe(switchMap(function () { return results$; }));
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    NgbTypeahead.prototype.ngOnDestroy = function () {
        this._closePopup();
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    };
    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbTypeahead.prototype.writeValue = function (value) {
        this._writeInputValue(this._formatItemForInput(value));
        if (this.showHint) {
            this._inputValueBackup = value;
        }
    };
    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * Dismisses typeahead popup window
     */
    NgbTypeahead.prototype.dismissPopup = function () {
        if (this.isPopupOpen()) {
            this._resubscribeTypeahead.next(null);
            this._closePopup();
            if (this.showHint && this._inputValueBackup !== null) {
                this._writeInputValue(this._inputValueBackup);
            }
            this._changeDetector.markForCheck();
        }
    };
    /**
     * Returns true if the typeahead popup window is displayed
     */
    NgbTypeahead.prototype.isPopupOpen = function () { return this._windowRef != null; };
    NgbTypeahead.prototype.handleBlur = function () {
        this._resubscribeTypeahead.next(null);
        this._onTouched();
    };
    NgbTypeahead.prototype.handleKeyDown = function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.ArrowDown:
                event.preventDefault();
                this._windowRef.instance.next();
                this._showHint();
                break;
            case Key.ArrowUp:
                event.preventDefault();
                this._windowRef.instance.prev();
                this._showHint();
                break;
            case Key.Enter:
            case Key.Tab:
                var result = this._windowRef.instance.getActive();
                if (isDefined(result)) {
                    event.preventDefault();
                    event.stopPropagation();
                    this._selectResult(result);
                }
                this._closePopup();
                break;
        }
    };
    NgbTypeahead.prototype._openPopup = function () {
        var _this = this;
        if (!this.isPopupOpen()) {
            this._inputValueBackup = this._elementRef.nativeElement.value;
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
            this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) { return _this.activeDescendant = activeId; });
            if (this.container === 'body') {
                this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._changeDetector.markForCheck();
            ngbAutoClose(this._ngZone, this._document, 'outside', function () { return _this.dismissPopup(); }, this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
        }
    };
    NgbTypeahead.prototype._closePopup = function () {
        this._closed$.next();
        this._popupService.close();
        this._windowRef = null;
        this.activeDescendant = null;
    };
    NgbTypeahead.prototype._selectResult = function (result) {
        var defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
        this._resubscribeTypeahead.next(null);
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    };
    NgbTypeahead.prototype._selectResultClosePopup = function (result) {
        this._selectResult(result);
        this._closePopup();
    };
    NgbTypeahead.prototype._showHint = function () {
        var _a;
        if (this.showHint && ((_a = this._windowRef) === null || _a === void 0 ? void 0 : _a.instance.hasActive()) && this._inputValueBackup != null) {
            var userInputLowerCase = this._inputValueBackup.toLowerCase();
            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
            }
            else {
                this._writeInputValue(formattedVal);
            }
        }
    };
    NgbTypeahead.prototype._formatItemForInput = function (item) {
        return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
    };
    NgbTypeahead.prototype._writeInputValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
    };
    NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
        var _this = this;
        return userInput$.subscribe(function (results) {
            if (!results || results.length === 0) {
                _this._closePopup();
            }
            else {
                _this._openPopup();
                _this._windowRef.instance.focusFirst = _this.focusFirst;
                _this._windowRef.instance.results = results;
                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                if (_this.resultFormatter) {
                    _this._windowRef.instance.formatter = _this.resultFormatter;
                }
                if (_this.resultTemplate) {
                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                }
                _this._windowRef.instance.resetActive();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                _this._windowRef.changeDetectorRef.detectChanges();
                _this._showHint();
            }
            // live announcer
            var count = results ? results.length : 0;
            _this._live.say(count === 0 ? 'No results available' : count + " result" + (count === 1 ? '' : 's') + " available");
        });
    };
    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    };
    NgbTypeahead.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: NgbTypeaheadConfig },
        { type: NgZone },
        { type: Live },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: ApplicationRef }
    ]; };
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "autocomplete", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "container", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "editable", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "focusFirst", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "inputFormatter", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "ngbTypeahead", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "resultFormatter", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "resultTemplate", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "showHint", void 0);
    __decorate([
        Input()
    ], NgbTypeahead.prototype, "placement", void 0);
    __decorate([
        Output()
    ], NgbTypeahead.prototype, "selectItem", void 0);
    NgbTypeahead = __decorate([
        Directive({
            selector: 'input[ngbTypeahead]',
            exportAs: 'ngbTypeahead',
            host: {
                '(blur)': 'handleBlur()',
                '[class.open]': 'isPopupOpen()',
                '(keydown)': 'handleKeyDown($event)',
                '[autocomplete]': 'autocomplete',
                'autocapitalize': 'off',
                'autocorrect': 'off',
                'role': 'combobox',
                'aria-multiline': 'false',
                '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                '[attr.aria-activedescendant]': 'activeDescendant',
                '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                '[attr.aria-expanded]': 'isPopupOpen()'
            },
            providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
        }),
        __param(8, Inject(DOCUMENT))
    ], NgbTypeahead);
    return NgbTypeahead;
}());

var NgbTypeaheadModule = /** @class */ (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule = __decorate([
        NgModule({
            declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
            exports: [NgbTypeahead, NgbHighlight],
            imports: [CommonModule],
            entryComponents: [NgbTypeaheadWindow]
        })
    ], NgbTypeaheadModule);
    return NgbTypeaheadModule;
}());

var NGB_MODULES = [
    NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
    NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule,
    NgbRatingModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule,
    // tslint:disable-next-line:deprecation
    NgbTabsetModule
];
var NgbModule = /** @class */ (function () {
    function NgbModule() {
    }
    NgbModule = __decorate([
        NgModule({ imports: NGB_MODULES, exports: NGB_MODULES })
    ], NgbModule);
    return NgbModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ModalDismissReasons, NgbAccordion, NgbAccordionConfig, NgbAccordionModule, NgbActiveModal, NgbAlert, NgbAlertConfig, NgbAlertModule, NgbButtonLabel, NgbButtonsModule, NgbCalendar, NgbCalendarGregorian, NgbCalendarHebrew, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbCalendarPersian, NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbCheckBox, NgbCollapse, NgbCollapseModule, NgbDate, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbDatepicker, NgbDatepickerConfig, NgbDatepickerContent, NgbDatepickerI18n, NgbDatepickerI18nHebrew, NgbDatepickerKeyboardService, NgbDatepickerModule, NgbDatepickerMonth, NgbDropdown, NgbDropdownAnchor, NgbDropdownConfig, NgbDropdownItem, NgbDropdownMenu, NgbDropdownModule, NgbDropdownToggle, NgbHighlight, NgbInputDatepicker, NgbInputDatepickerConfig, NgbModal, NgbModalConfig, NgbModalModule, NgbModalRef, NgbModule, NgbNav, NgbNavConfig, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavModule, NgbNavOutlet, NgbNavbar, NgbPagination, NgbPaginationConfig, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationModule, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPanel, NgbPanelContent, NgbPanelHeader, NgbPanelTitle, NgbPanelToggle, NgbPopover, NgbPopoverConfig, NgbPopoverModule, NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule, NgbRadio, NgbRadioGroup, NgbRating, NgbRatingConfig, NgbRatingModule, NgbSlide, NgbSlideEventDirection, NgbSlideEventSource, NgbTab, NgbTabContent, NgbTabTitle, NgbTabset, NgbTabsetConfig, NgbTabsetModule, NgbTimeAdapter, NgbTimepicker, NgbTimepickerConfig, NgbTimepickerI18n, NgbTimepickerModule, NgbToast, NgbToastConfig, NgbToastHeader, NgbToastModule, NgbTooltip, NgbTooltipConfig, NgbTooltipModule, NgbTypeahead, NgbTypeaheadConfig, NgbTypeaheadModule, NGB_CAROUSEL_DIRECTIVES as ɵa, NGB_DATEPICKER_VALUE_ACCESSOR as ɵb, Live as ɵba, NgbCalendarHijri as ɵbb, ContentRef as ɵbc, NGB_DATEPICKER_CALENDAR_FACTORY as ɵc, NgbDatepickerDayView as ɵd, NgbDatepickerNavigation as ɵe, NgbDatepickerNavigationSelect as ɵf, NGB_DATEPICKER_18N_FACTORY as ɵg, NgbDatepickerI18nDefault as ɵh, NGB_DATEPICKER_DATE_ADAPTER_FACTORY as ɵi, NgbDateStructAdapter as ɵj, NGB_DATEPICKER_PARSER_FORMATTER_FACTORY as ɵk, NgbDateISOParserFormatter as ɵl, NgbPopoverWindow as ɵm, NGB_DATEPICKER_TIME_ADAPTER_FACTORY as ɵn, NgbTimeStructAdapter as ɵo, NGB_TIMEPICKER_I18N_FACTORY as ɵp, NgbTimepickerI18nDefault as ɵq, NgbTooltipWindow as ɵr, NgbTypeaheadWindow as ɵs, NgbDatepickerService as ɵt, NgbModalBackdrop as ɵu, NgbModalWindow as ɵv, NgbModalStack as ɵw, ScrollBar as ɵx, ARIA_LIVE_DELAY as ɵy, ARIA_LIVE_DELAY_FACTORY as ɵz };
//# sourceMappingURL=ng-bootstrap.js.map

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata, __param } from "tslib";
import { ContentChildren, Directive, ElementRef, Input, Optional, QueryList, Renderer2 } from '@angular/core';
import { NavigationEnd } from '../events';
import { Router } from '../router';
import { RouterLink, RouterLinkWithHref } from './router_link';
/**
 *
 * @description
 *
 * Lets you add a CSS class to an element when the link's route becomes active.
 *
 * This directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
var RouterLinkActive = /** @class */ (function () {
    function RouterLinkActive(router, element, renderer, link, linkWithHref) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.link = link;
        this.linkWithHref = linkWithHref;
        this.classes = [];
        this.isActive = false;
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                _this.update();
            }
        });
    }
    RouterLinkActive.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.links.changes.subscribe(function (_) { return _this.update(); });
        this.linksWithHrefs.changes.subscribe(function (_) { return _this.update(); });
        this.update();
    };
    Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
        set: function (data) {
            var classes = Array.isArray(data) ? data : data.split(' ');
            this.classes = classes.filter(function (c) { return !!c; });
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
    RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    RouterLinkActive.prototype.update = function () {
        var _this = this;
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        Promise.resolve().then(function () {
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.isActive !== hasActiveLinks) {
                _this.isActive = hasActiveLinks;
                _this.classes.forEach(function (c) {
                    if (hasActiveLinks) {
                        _this.renderer.addClass(_this.element.nativeElement, c);
                    }
                    else {
                        _this.renderer.removeClass(_this.element.nativeElement, c);
                    }
                });
            }
        });
    };
    RouterLinkActive.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) {
            return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
        };
    };
    RouterLinkActive.prototype.hasActiveLinks = function () {
        var isActiveCheckFn = this.isLinkActive(this.router);
        return this.link && isActiveCheckFn(this.link) ||
            this.linkWithHref && isActiveCheckFn(this.linkWithHref) ||
            this.links.some(isActiveCheckFn) || this.linksWithHrefs.some(isActiveCheckFn);
    };
    __decorate([
        ContentChildren(RouterLink, { descendants: true }),
        __metadata("design:type", QueryList)
    ], RouterLinkActive.prototype, "links", void 0);
    __decorate([
        ContentChildren(RouterLinkWithHref, { descendants: true }),
        __metadata("design:type", QueryList)
    ], RouterLinkActive.prototype, "linksWithHrefs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RouterLinkActive.prototype, "routerLinkActiveOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RouterLinkActive.prototype, "routerLinkActive", null);
    RouterLinkActive = __decorate([
        Directive({
            selector: '[routerLinkActive]',
            exportAs: 'routerLinkActive',
        }),
        __param(3, Optional()),
        __param(4, Optional()),
        __metadata("design:paramtypes", [Router, ElementRef, Renderer2,
            RouterLink,
            RouterLinkWithHref])
    ], RouterLinkActive);
    return RouterLinkActive;
}());
export { RouterLinkActive };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX2xpbmtfYWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9kaXJlY3RpdmVzL3JvdXRlcl9saW5rX2FjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFtQixlQUFlLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXdCLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUduSyxPQUFPLEVBQVEsYUFBYSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFakMsT0FBTyxFQUFDLFVBQVUsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUc3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3REc7QUFLSDtJQWVFLDBCQUNZLE1BQWMsRUFBVSxPQUFtQixFQUFVLFFBQW1CLEVBQzVELElBQWlCLEVBQ2pCLFlBQWlDO1FBSHpELGlCQVNDO1FBUlcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzVELFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBVGpELFlBQU8sR0FBYSxFQUFFLENBQUM7UUFFZixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWpDLDRCQUF1QixHQUFxQixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztRQU1sRSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBUTtZQUNuRCxJQUFJLENBQUMsWUFBWSxhQUFh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QUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFqRUQ7UUFEQyxlQUFlLENBQUMsVUFBVSxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDO2tDQUN4QyxTQUFTO21EQUFhO0lBRy9CO1FBREMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDO2tDQUN2QyxTQUFTOzREQUFxQjtJQU12QztRQUFSLEtBQUssRUFBRTs7cUVBQTREO0lBcUJwRTtRQURDLEtBQUssRUFBRTs7OzREQUlQO0lBckNVLGdCQUFnQjtRQUo1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQztRQWtCSyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTt5Q0FGSyxNQUFNLEVBQW1CLFVBQVUsRUFBb0IsU0FBUztZQUNyRCxVQUFVO1lBQ0Ysa0JBQWtCO09BbEI5QyxnQkFBZ0IsQ0FzRTVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRFRCxJQXNFQztTQXRFWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtFdmVudCwgTmF2aWdhdGlvbkVuZH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXInO1xuXG5pbXBvcnQge1JvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZn0gZnJvbSAnLi9yb3V0ZXJfbGluayc7XG5cblxuLyoqXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogTGV0cyB5b3UgYWRkIGEgQ1NTIGNsYXNzIHRvIGFuIGVsZW1lbnQgd2hlbiB0aGUgbGluaydzIHJvdXRlIGJlY29tZXMgYWN0aXZlLlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGxldHMgeW91IGFkZCBhIENTUyBjbGFzcyB0byBhbiBlbGVtZW50IHdoZW4gdGhlIGxpbmsncyByb3V0ZVxuICogYmVjb21lcyBhY3RpdmUuXG4gKlxuICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqIGBgYFxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiPkJvYjwvYT5cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIHVybCBpcyBlaXRoZXIgJy91c2VyJyBvciAnL3VzZXIvYm9iJywgdGhlIGFjdGl2ZS1saW5rIGNsYXNzIHdpbGxcbiAqIGJlIGFkZGVkIHRvIHRoZSBgYWAgdGFnLiBJZiB0aGUgdXJsIGNoYW5nZXMsIHRoZSBjbGFzcyB3aWxsIGJlIHJlbW92ZWQuXG4gKlxuICogWW91IGNhbiBzZXQgbW9yZSB0aGFuIG9uZSBjbGFzcywgYXMgZm9sbG93czpcbiAqXG4gKiBgYGBcbiAqIDxhIHJvdXRlckxpbms9XCIvdXNlci9ib2JcIiByb3V0ZXJMaW5rQWN0aXZlPVwiY2xhc3MxIGNsYXNzMlwiPkJvYjwvYT5cbiAqIDxhIHJvdXRlckxpbms9XCIvdXNlci9ib2JcIiBbcm91dGVyTGlua0FjdGl2ZV09XCJbJ2NsYXNzMScsICdjbGFzczInXVwiPkJvYjwvYT5cbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gY29uZmlndXJlIFJvdXRlckxpbmtBY3RpdmUgYnkgcGFzc2luZyBgZXhhY3Q6IHRydWVgLiBUaGlzIHdpbGwgYWRkIHRoZSBjbGFzc2VzXG4gKiBvbmx5IHdoZW4gdGhlIHVybCBtYXRjaGVzIHRoZSBsaW5rIGV4YWN0bHkuXG4gKlxuICogYGBgXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDpcbiAqIHRydWV9XCI+Qm9iPC9hPlxuICogYGBgXG4gKlxuICogWW91IGNhbiBhc3NpZ24gdGhlIFJvdXRlckxpbmtBY3RpdmUgaW5zdGFuY2UgdG8gYSB0ZW1wbGF0ZSB2YXJpYWJsZSBhbmQgZGlyZWN0bHkgY2hlY2tcbiAqIHRoZSBgaXNBY3RpdmVgIHN0YXR1cy5cbiAqIGBgYFxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmUgI3JsYT1cInJvdXRlckxpbmtBY3RpdmVcIj5cbiAqICAgQm9iIHt7IHJsYS5pc0FjdGl2ZSA/ICcoYWxyZWFkeSBvcGVuKScgOiAnJ319XG4gKiA8L2E+XG4gKiBgYGBcbiAqXG4gKiBGaW5hbGx5LCB5b3UgY2FuIGFwcGx5IHRoZSBSb3V0ZXJMaW5rQWN0aXZlIGRpcmVjdGl2ZSB0byBhbiBhbmNlc3RvciBvZiBhIFJvdXRlckxpbmsuXG4gKlxuICogYGBgXG4gKiA8ZGl2IHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7ZXhhY3Q6IHRydWV9XCI+XG4gKiAgIDxhIHJvdXRlckxpbms9XCIvdXNlci9qaW1cIj5KaW08L2E+XG4gKiAgIDxhIHJvdXRlckxpbms9XCIvdXNlci9ib2JcIj5Cb2I8L2E+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFRoaXMgd2lsbCBzZXQgdGhlIGFjdGl2ZS1saW5rIGNsYXNzIG9uIHRoZSBkaXYgdGFnIGlmIHRoZSB1cmwgaXMgZWl0aGVyICcvdXNlci9qaW0nIG9yXG4gKiAnL3VzZXIvYm9iJy5cbiAqXG4gKiBAbmdNb2R1bGUgUm91dGVyTW9kdWxlXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcm91dGVyTGlua0FjdGl2ZV0nLFxuICBleHBvcnRBczogJ3JvdXRlckxpbmtBY3RpdmUnLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZXJMaW5rQWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmssIHtkZXNjZW5kYW50czogdHJ1ZX0pXG4gIGxpbmtzICE6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rPjtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuICBsaW5rc1dpdGhIcmVmcyAhOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcblxuICBwcml2YXRlIGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyByZWFkb25seSBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHJvdXRlckxpbmtBY3RpdmVPcHRpb25zOiB7ZXhhY3Q6IGJvb2xlYW59ID0ge2V4YWN0OiBmYWxzZX07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbGluaz86IFJvdXRlckxpbmssXG4gICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZikge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHM6IEV2ZW50KSA9PiB7XG4gICAgICBpZiAocyBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MuY2hhbmdlcy5zdWJzY3JpYmUoXyA9PiB0aGlzLnVwZGF0ZSgpKTtcbiAgICB0aGlzLmxpbmtzV2l0aEhyZWZzLmNoYW5nZXMuc3Vic2NyaWJlKF8gPT4gdGhpcy51cGRhdGUoKSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByb3V0ZXJMaW5rQWN0aXZlKGRhdGE6IHN0cmluZ1tdfHN0cmluZykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IGRhdGEuc3BsaXQoJyAnKTtcbiAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcihjID0+ICEhYyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7IHRoaXMudXBkYXRlKCk7IH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7IHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7IH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlua3MgfHwgIXRoaXMubGlua3NXaXRoSHJlZnMgfHwgIXRoaXMucm91dGVyLm5hdmlnYXRlZCkgcmV0dXJuO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFzQWN0aXZlTGlua3MgPSB0aGlzLmhhc0FjdGl2ZUxpbmtzKCk7XG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSAhPT0gaGFzQWN0aXZlTGlua3MpIHtcbiAgICAgICAgKHRoaXMgYXMgYW55KS5pc0FjdGl2ZSA9IGhhc0FjdGl2ZUxpbmtzO1xuICAgICAgICB0aGlzLmNsYXNzZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgIGlmIChoYXNBY3RpdmVMaW5rcykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rOiAoUm91dGVyTGlua3xSb3V0ZXJMaW5rV2l0aEhyZWYpKSA9PiBib29sZWFuIHtcbiAgICByZXR1cm4gKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+XG4gICAgICAgICAgICAgICByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zLmV4YWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQWN0aXZlTGlua3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNBY3RpdmVDaGVja0ZuID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIpO1xuICAgIHJldHVybiB0aGlzLmxpbmsgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMubGluaykgfHxcbiAgICAgICAgdGhpcy5saW5rV2l0aEhyZWYgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMubGlua1dpdGhIcmVmKSB8fFxuICAgICAgICB0aGlzLmxpbmtzLnNvbWUoaXNBY3RpdmVDaGVja0ZuKSB8fCB0aGlzLmxpbmtzV2l0aEhyZWZzLnNvbWUoaXNBY3RpdmVDaGVja0ZuKTtcbiAgfVxufVxuIl19
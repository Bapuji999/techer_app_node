/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
var SafeValueImpl = /** @class */ (function () {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
    }
    SafeValueImpl.prototype.toString = function () {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)";
    };
    return SafeValueImpl;
}());
var SafeHtmlImpl = /** @class */ (function (_super) {
    __extends(SafeHtmlImpl, _super);
    function SafeHtmlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeHtmlImpl.prototype.getTypeName = function () { return "HTML" /* Html */; };
    return SafeHtmlImpl;
}(SafeValueImpl));
var SafeStyleImpl = /** @class */ (function (_super) {
    __extends(SafeStyleImpl, _super);
    function SafeStyleImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeStyleImpl.prototype.getTypeName = function () { return "Style" /* Style */; };
    return SafeStyleImpl;
}(SafeValueImpl));
var SafeScriptImpl = /** @class */ (function (_super) {
    __extends(SafeScriptImpl, _super);
    function SafeScriptImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeScriptImpl.prototype.getTypeName = function () { return "Script" /* Script */; };
    return SafeScriptImpl;
}(SafeValueImpl));
var SafeUrlImpl = /** @class */ (function (_super) {
    __extends(SafeUrlImpl, _super);
    function SafeUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeUrlImpl.prototype.getTypeName = function () { return "URL" /* Url */; };
    return SafeUrlImpl;
}(SafeValueImpl));
var SafeResourceUrlImpl = /** @class */ (function (_super) {
    __extends(SafeResourceUrlImpl, _super);
    function SafeResourceUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeResourceUrlImpl.prototype.getTypeName = function () { return "ResourceURL" /* ResourceUrl */; };
    return SafeResourceUrlImpl;
}(SafeValueImpl));
export function unwrapSafeValue(value) {
    return value instanceof SafeValueImpl ? value.changingThisBreaksApplicationSecurity :
        value;
}
export function allowSanitizationBypassAndThrow(value, type) {
    var actualType = getSanitizationBypassType(value);
    if (actualType != null && actualType !== type) {
        // Allow ResourceURLs in URL contexts, they are strictly more trusted.
        if (actualType === "ResourceURL" /* ResourceUrl */ && type === "URL" /* Url */)
            return true;
        throw new Error("Required a safe " + type + ", got a " + actualType + " (see http://g.co/ng/security#xss)");
    }
    return actualType === type;
}
export function getSanitizationBypassType(value) {
    return value instanceof SafeValueImpl && value.getTypeName() || null;
}
/**
 * Mark `html` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link htmlSanitizer} to be trusted implicitly.
 *
 * @param trustedHtml `html` string which needs to be implicitly trusted.
 * @returns a `html` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustHtml(trustedHtml) {
    return new SafeHtmlImpl(trustedHtml);
}
/**
 * Mark `style` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link styleSanitizer} to be trusted implicitly.
 *
 * @param trustedStyle `style` string which needs to be implicitly trusted.
 * @returns a `style` hich has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustStyle(trustedStyle) {
    return new SafeStyleImpl(trustedStyle);
}
/**
 * Mark `script` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link scriptSanitizer} to be trusted implicitly.
 *
 * @param trustedScript `script` string which needs to be implicitly trusted.
 * @returns a `script` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustScript(trustedScript) {
    return new SafeScriptImpl(trustedScript);
}
/**
 * Mark `url` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link urlSanitizer} to be trusted implicitly.
 *
 * @param trustedUrl `url` string which needs to be implicitly trusted.
 * @returns a `url`  which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustUrl(trustedUrl) {
    return new SafeUrlImpl(trustedUrl);
}
/**
 * Mark `url` string as trusted.
 *
 * This function wraps the trusted string in `String` and brands it in a way which makes it
 * recognizable to {@link resourceUrlSanitizer} to be trusted implicitly.
 *
 * @param trustedResourceUrl `url` string which needs to be implicitly trusted.
 * @returns a `url` which has been branded to be implicitly trusted.
 */
export function bypassSanitizationTrustResourceUrl(trustedResourceUrl) {
    return new SafeResourceUrlImpl(trustedResourceUrl);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnlwYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL2J5cGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBc0RIO0lBQ0UsdUJBQW1CLHFDQUE2QztRQUE3QywwQ0FBcUMsR0FBckMscUNBQXFDLENBQVE7SUFBRyxDQUFDO0lBSXBFLGdDQUFRLEdBQVI7UUFDRSxPQUFPLDRDQUEwQyxJQUFJLENBQUMscUNBQXVDO1lBQ3pGLG9DQUFvQyxDQUFDO0lBQzNDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBRUQ7SUFBMkIsZ0NBQWE7SUFBeEM7O0lBRUEsQ0FBQztJQURDLGtDQUFXLEdBQVgsY0FBZ0IseUJBQXVCLENBQUMsQ0FBQztJQUMzQyxtQkFBQztBQUFELENBQUMsQUFGRCxDQUEyQixhQUFhLEdBRXZDO0FBQ0Q7SUFBNEIsaUNBQWE7SUFBekM7O0lBRUEsQ0FBQztJQURDLG1DQUFXLEdBQVgsY0FBZ0IsMkJBQXdCLENBQUMsQ0FBQztJQUM1QyxvQkFBQztBQUFELENBQUMsQUFGRCxDQUE0QixhQUFhLEdBRXhDO0FBQ0Q7SUFBNkIsa0NBQWE7SUFBMUM7O0lBRUEsQ0FBQztJQURDLG9DQUFXLEdBQVgsY0FBZ0IsNkJBQXlCLENBQUMsQ0FBQztJQUM3QyxxQkFBQztBQUFELENBQUMsQUFGRCxDQUE2QixhQUFhLEdBRXpDO0FBQ0Q7SUFBMEIsK0JBQWE7SUFBdkM7O0lBRUEsQ0FBQztJQURDLGlDQUFXLEdBQVgsY0FBZ0IsdUJBQXNCLENBQUMsQ0FBQztJQUMxQyxrQkFBQztBQUFELENBQUMsQUFGRCxDQUEwQixhQUFhLEdBRXRDO0FBQ0Q7SUFBa0MsdUNBQWE7SUFBL0M7O0lBRUEsQ0FBQztJQURDLHlDQUFXLEdBQVgsY0FBZ0IsdUNBQThCLENBQUMsQ0FBQztJQUNsRCwwQkFBQztBQUFELENBQUMsQUFGRCxDQUFrQyxhQUFhLEdBRTlDO0FBSUQsTUFBTSxVQUFVLGVBQWUsQ0FBSSxLQUFvQjtJQUNyRCxPQUFPLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQ0FBaUQsQ0FBQyxDQUFDO1FBQ3pELEtBQWlCLENBQUM7QUFDNUQsQ0FBQztBQWFELE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFVLEVBQUUsSUFBZ0I7SUFDMUUsSUFBTSxVQUFVLEdBQUcseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDN0Msc0VBQXNFO1FBQ3RFLElBQUksVUFBVSxvQ0FBMkIsSUFBSSxJQUFJLG9CQUFtQjtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxLQUFLLENBQ1gscUJBQW1CLElBQUksZ0JBQVcsVUFBVSx1Q0FBb0MsQ0FBQyxDQUFDO0tBQ3ZGO0lBQ0QsT0FBTyxVQUFVLEtBQUssSUFBSSxDQUFDO0FBQzdCLENBQUM7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsS0FBVTtJQUNsRCxPQUFPLEtBQUssWUFBWSxhQUFhLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBZ0IsSUFBSSxJQUFJLENBQUM7QUFDckYsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFdBQW1CO0lBQzdELE9BQU8sSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUNEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLDRCQUE0QixDQUFDLFlBQW9CO0lBQy9ELE9BQU8sSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUNEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLDZCQUE2QixDQUFDLGFBQXFCO0lBQ2pFLE9BQU8sSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUNEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFVBQWtCO0lBQzNELE9BQU8sSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUNEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLGtDQUFrQyxDQUFDLGtCQUEwQjtJQUMzRSxPQUFPLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmV4cG9ydCBjb25zdCBlbnVtIEJ5cGFzc1R5cGUge1xuICBVcmwgPSAnVVJMJyxcbiAgSHRtbCA9ICdIVE1MJyxcbiAgUmVzb3VyY2VVcmwgPSAnUmVzb3VyY2VVUkwnLFxuICBTY3JpcHQgPSAnU2NyaXB0JyxcbiAgU3R5bGUgPSAnU3R5bGUnLFxufVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGluIGEgcGFydGljdWxhciBjb250ZXh0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBIVE1MLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlSHRtbCBleHRlbmRzIFNhZmVWYWx1ZSB7fVxuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2UgZm9yIGEgdmFsdWUgdGhhdCdzIHNhZmUgdG8gdXNlIGFzIHN0eWxlIChDU1MpLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlU3R5bGUgZXh0ZW5kcyBTYWZlVmFsdWUge31cblxuLyoqXG4gKiBNYXJrZXIgaW50ZXJmYWNlIGZvciBhIHZhbHVlIHRoYXQncyBzYWZlIHRvIHVzZSBhcyBKYXZhU2NyaXB0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlU2NyaXB0IGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgbGlua2luZyB0byBhIGRvY3VtZW50LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTYWZlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cbi8qKlxuICogTWFya2VyIGludGVyZmFjZSBmb3IgYSB2YWx1ZSB0aGF0J3Mgc2FmZSB0byB1c2UgYXMgYSBVUkwgdG8gbG9hZCBleGVjdXRhYmxlIGNvZGUgZnJvbS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVJlc291cmNlVXJsIGV4dGVuZHMgU2FmZVZhbHVlIHt9XG5cblxuYWJzdHJhY3QgY2xhc3MgU2FmZVZhbHVlSW1wbCBpbXBsZW1lbnRzIFNhZmVWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5OiBzdHJpbmcpIHt9XG5cbiAgYWJzdHJhY3QgZ2V0VHlwZU5hbWUoKTogc3RyaW5nO1xuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgU2FmZVZhbHVlIG11c3QgdXNlIFtwcm9wZXJ0eV09YmluZGluZzogJHt0aGlzLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHl9YCArXG4gICAgICAgIGAgKHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MpYDtcbiAgfVxufVxuXG5jbGFzcyBTYWZlSHRtbEltcGwgZXh0ZW5kcyBTYWZlVmFsdWVJbXBsIGltcGxlbWVudHMgU2FmZUh0bWwge1xuICBnZXRUeXBlTmFtZSgpIHsgcmV0dXJuIEJ5cGFzc1R5cGUuSHRtbDsgfVxufVxuY2xhc3MgU2FmZVN0eWxlSW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlU3R5bGUge1xuICBnZXRUeXBlTmFtZSgpIHsgcmV0dXJuIEJ5cGFzc1R5cGUuU3R5bGU7IH1cbn1cbmNsYXNzIFNhZmVTY3JpcHRJbXBsIGV4dGVuZHMgU2FmZVZhbHVlSW1wbCBpbXBsZW1lbnRzIFNhZmVTY3JpcHQge1xuICBnZXRUeXBlTmFtZSgpIHsgcmV0dXJuIEJ5cGFzc1R5cGUuU2NyaXB0OyB9XG59XG5jbGFzcyBTYWZlVXJsSW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlVXJsIHtcbiAgZ2V0VHlwZU5hbWUoKSB7IHJldHVybiBCeXBhc3NUeXBlLlVybDsgfVxufVxuY2xhc3MgU2FmZVJlc291cmNlVXJsSW1wbCBleHRlbmRzIFNhZmVWYWx1ZUltcGwgaW1wbGVtZW50cyBTYWZlUmVzb3VyY2VVcmwge1xuICBnZXRUeXBlTmFtZSgpIHsgcmV0dXJuIEJ5cGFzc1R5cGUuUmVzb3VyY2VVcmw7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcFNhZmVWYWx1ZSh2YWx1ZTogU2FmZVZhbHVlKTogc3RyaW5nO1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcFNhZmVWYWx1ZTxUPih2YWx1ZTogVCk6IFQ7XG5leHBvcnQgZnVuY3Rpb24gdW53cmFwU2FmZVZhbHVlPFQ+KHZhbHVlOiBUIHwgU2FmZVZhbHVlKTogVCB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFNhZmVWYWx1ZUltcGwgPyB2YWx1ZS5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5IGFzIGFueSBhcyBUIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIGFzIGFueSBhcyBUO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KFxuICAgIHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUuSHRtbCk6IHZhbHVlIGlzIFNhZmVIdG1sO1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3coXG4gICAgdmFsdWU6IGFueSwgdHlwZTogQnlwYXNzVHlwZS5SZXNvdXJjZVVybCk6IHZhbHVlIGlzIFNhZmVSZXNvdXJjZVVybDtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KFxuICAgIHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUuU2NyaXB0KTogdmFsdWUgaXMgU2FmZVNjcmlwdDtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KFxuICAgIHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUuU3R5bGUpOiB2YWx1ZSBpcyBTYWZlU3R5bGU7XG5leHBvcnQgZnVuY3Rpb24gYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyh2YWx1ZTogYW55LCB0eXBlOiBCeXBhc3NUeXBlLlVybCk6IHZhbHVlIGlzIFNhZmVVcmw7XG5leHBvcnQgZnVuY3Rpb24gYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyh2YWx1ZTogYW55LCB0eXBlOiBCeXBhc3NUeXBlKTogYm9vbGVhbjtcbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KHZhbHVlOiBhbnksIHR5cGU6IEJ5cGFzc1R5cGUpOiBib29sZWFuIHtcbiAgY29uc3QgYWN0dWFsVHlwZSA9IGdldFNhbml0aXphdGlvbkJ5cGFzc1R5cGUodmFsdWUpO1xuICBpZiAoYWN0dWFsVHlwZSAhPSBudWxsICYmIGFjdHVhbFR5cGUgIT09IHR5cGUpIHtcbiAgICAvLyBBbGxvdyBSZXNvdXJjZVVSTHMgaW4gVVJMIGNvbnRleHRzLCB0aGV5IGFyZSBzdHJpY3RseSBtb3JlIHRydXN0ZWQuXG4gICAgaWYgKGFjdHVhbFR5cGUgPT09IEJ5cGFzc1R5cGUuUmVzb3VyY2VVcmwgJiYgdHlwZSA9PT0gQnlwYXNzVHlwZS5VcmwpIHJldHVybiB0cnVlO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFJlcXVpcmVkIGEgc2FmZSAke3R5cGV9LCBnb3QgYSAke2FjdHVhbFR5cGV9IChzZWUgaHR0cDovL2cuY28vbmcvc2VjdXJpdHkjeHNzKWApO1xuICB9XG4gIHJldHVybiBhY3R1YWxUeXBlID09PSB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FuaXRpemF0aW9uQnlwYXNzVHlwZSh2YWx1ZTogYW55KTogQnlwYXNzVHlwZXxudWxsIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgU2FmZVZhbHVlSW1wbCAmJiB2YWx1ZS5nZXRUeXBlTmFtZSgpIGFzIEJ5cGFzc1R5cGUgfHwgbnVsbDtcbn1cblxuLyoqXG4gKiBNYXJrIGBodG1sYCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIGh0bWxTYW5pdGl6ZXJ9IHRvIGJlIHRydXN0ZWQgaW1wbGljaXRseS5cbiAqXG4gKiBAcGFyYW0gdHJ1c3RlZEh0bWwgYGh0bWxgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGBodG1sYCB3aGljaCBoYXMgYmVlbiBicmFuZGVkIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0SHRtbCh0cnVzdGVkSHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xuICByZXR1cm4gbmV3IFNhZmVIdG1sSW1wbCh0cnVzdGVkSHRtbCk7XG59XG4vKipcbiAqIE1hcmsgYHN0eWxlYCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIHN0eWxlU2FuaXRpemVyfSB0byBiZSB0cnVzdGVkIGltcGxpY2l0bHkuXG4gKlxuICogQHBhcmFtIHRydXN0ZWRTdHlsZSBgc3R5bGVgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGBzdHlsZWAgaGljaCBoYXMgYmVlbiBicmFuZGVkIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0U3R5bGUodHJ1c3RlZFN0eWxlOiBzdHJpbmcpOiBTYWZlU3R5bGUge1xuICByZXR1cm4gbmV3IFNhZmVTdHlsZUltcGwodHJ1c3RlZFN0eWxlKTtcbn1cbi8qKlxuICogTWFyayBgc2NyaXB0YCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIHNjcmlwdFNhbml0aXplcn0gdG8gYmUgdHJ1c3RlZCBpbXBsaWNpdGx5LlxuICpcbiAqIEBwYXJhbSB0cnVzdGVkU2NyaXB0IGBzY3JpcHRgIHN0cmluZyB3aGljaCBuZWVkcyB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKiBAcmV0dXJucyBhIGBzY3JpcHRgIHdoaWNoIGhhcyBiZWVuIGJyYW5kZWQgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnlwYXNzU2FuaXRpemF0aW9uVHJ1c3RTY3JpcHQodHJ1c3RlZFNjcmlwdDogc3RyaW5nKTogU2FmZVNjcmlwdCB7XG4gIHJldHVybiBuZXcgU2FmZVNjcmlwdEltcGwodHJ1c3RlZFNjcmlwdCk7XG59XG4vKipcbiAqIE1hcmsgYHVybGAgc3RyaW5nIGFzIHRydXN0ZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3cmFwcyB0aGUgdHJ1c3RlZCBzdHJpbmcgaW4gYFN0cmluZ2AgYW5kIGJyYW5kcyBpdCBpbiBhIHdheSB3aGljaCBtYWtlcyBpdFxuICogcmVjb2duaXphYmxlIHRvIHtAbGluayB1cmxTYW5pdGl6ZXJ9IHRvIGJlIHRydXN0ZWQgaW1wbGljaXRseS5cbiAqXG4gKiBAcGFyYW0gdHJ1c3RlZFVybCBgdXJsYCBzdHJpbmcgd2hpY2ggbmVlZHMgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICogQHJldHVybnMgYSBgdXJsYCAgd2hpY2ggaGFzIGJlZW4gYnJhbmRlZCB0byBiZSBpbXBsaWNpdGx5IHRydXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFVybCh0cnVzdGVkVXJsOiBzdHJpbmcpOiBTYWZlVXJsIHtcbiAgcmV0dXJuIG5ldyBTYWZlVXJsSW1wbCh0cnVzdGVkVXJsKTtcbn1cbi8qKlxuICogTWFyayBgdXJsYCBzdHJpbmcgYXMgdHJ1c3RlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdyYXBzIHRoZSB0cnVzdGVkIHN0cmluZyBpbiBgU3RyaW5nYCBhbmQgYnJhbmRzIGl0IGluIGEgd2F5IHdoaWNoIG1ha2VzIGl0XG4gKiByZWNvZ25pemFibGUgdG8ge0BsaW5rIHJlc291cmNlVXJsU2FuaXRpemVyfSB0byBiZSB0cnVzdGVkIGltcGxpY2l0bHkuXG4gKlxuICogQHBhcmFtIHRydXN0ZWRSZXNvdXJjZVVybCBgdXJsYCBzdHJpbmcgd2hpY2ggbmVlZHMgdG8gYmUgaW1wbGljaXRseSB0cnVzdGVkLlxuICogQHJldHVybnMgYSBgdXJsYCB3aGljaCBoYXMgYmVlbiBicmFuZGVkIHRvIGJlIGltcGxpY2l0bHkgdHJ1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0UmVzb3VyY2VVcmwodHJ1c3RlZFJlc291cmNlVXJsOiBzdHJpbmcpOiBTYWZlUmVzb3VyY2VVcmwge1xuICByZXR1cm4gbmV3IFNhZmVSZXNvdXJjZVVybEltcGwodHJ1c3RlZFJlc291cmNlVXJsKTtcbn1cbiJdfQ==
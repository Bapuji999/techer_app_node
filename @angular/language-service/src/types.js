/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/src/types", ["require", "exports", "@angular/compiler", "@angular/language-service/src/symbols"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compiler_1 = require("@angular/compiler");
    exports.StaticSymbol = compiler_1.StaticSymbol;
    var symbols_1 = require("@angular/language-service/src/symbols");
    exports.BuiltinType = symbols_1.BuiltinType;
    /**
     * The type of Angular directive. Used for QuickInfo in template.
     */
    var DirectiveKind;
    (function (DirectiveKind) {
        DirectiveKind["COMPONENT"] = "component";
        DirectiveKind["DIRECTIVE"] = "directive";
        DirectiveKind["EVENT"] = "event";
    })(DirectiveKind = exports.DirectiveKind || (exports.DirectiveKind = {}));
    /**
     * ScriptElementKind for completion.
     */
    var CompletionKind;
    (function (CompletionKind) {
        CompletionKind["ANGULAR_ELEMENT"] = "angular element";
        CompletionKind["ATTRIBUTE"] = "attribute";
        CompletionKind["COMPONENT"] = "component";
        CompletionKind["ELEMENT"] = "element";
        CompletionKind["ENTITY"] = "entity";
        CompletionKind["HTML_ATTRIBUTE"] = "html attribute";
        CompletionKind["HTML_ELEMENT"] = "html element";
        CompletionKind["KEY"] = "key";
        CompletionKind["METHOD"] = "method";
        CompletionKind["PIPE"] = "pipe";
        CompletionKind["PROPERTY"] = "property";
        CompletionKind["REFERENCE"] = "reference";
        CompletionKind["TYPE"] = "type";
        CompletionKind["VARIABLE"] = "variable";
    })(CompletionKind = exports.CompletionKind || (exports.CompletionKind = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDhDQUE0RjtJQWExRix1QkFibUQsdUJBQVksQ0FhbkQ7SUFWZCxpRUFBMEo7SUFHeEosc0JBSE0scUJBQVcsQ0FHTjtJQStOYjs7T0FFRztJQUNILElBQVksYUFJWDtJQUpELFdBQVksYUFBYTtRQUN2Qix3Q0FBdUIsQ0FBQTtRQUN2Qix3Q0FBdUIsQ0FBQTtRQUN2QixnQ0FBZSxDQUFBO0lBQ2pCLENBQUMsRUFKVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUl4QjtJQUVEOztPQUVHO0lBQ0gsSUFBWSxjQWVYO0lBZkQsV0FBWSxjQUFjO1FBQ3hCLHFEQUFtQyxDQUFBO1FBQ25DLHlDQUF1QixDQUFBO1FBQ3ZCLHlDQUF1QixDQUFBO1FBQ3ZCLHFDQUFtQixDQUFBO1FBQ25CLG1DQUFpQixDQUFBO1FBQ2pCLG1EQUFpQyxDQUFBO1FBQ2pDLCtDQUE2QixDQUFBO1FBQzdCLDZCQUFXLENBQUE7UUFDWCxtQ0FBaUIsQ0FBQTtRQUNqQiwrQkFBYSxDQUFBO1FBQ2IsdUNBQXFCLENBQUE7UUFDckIseUNBQXVCLENBQUE7UUFDdkIsK0JBQWEsQ0FBQTtRQUNiLHVDQUFxQixDQUFBO0lBQ3ZCLENBQUMsRUFmVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQWV6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsIE5nQW5hbHl6ZWRNb2R1bGVzLCBTdGF0aWNTeW1ib2x9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtBc3RSZXN1bHR9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7QnVpbHRpblR5cGUsIERlY2xhcmF0aW9uS2luZCwgRGVmaW5pdGlvbiwgUGlwZUluZm8sIFBpcGVzLCBTaWduYXR1cmUsIFNwYW4sIFN5bWJvbCwgU3ltYm9sRGVjbGFyYXRpb24sIFN5bWJvbFF1ZXJ5LCBTeW1ib2xUYWJsZX0gZnJvbSAnLi9zeW1ib2xzJztcblxuZXhwb3J0IHtcbiAgQnVpbHRpblR5cGUsXG4gIERlY2xhcmF0aW9uS2luZCxcbiAgRGVmaW5pdGlvbixcbiAgUGlwZUluZm8sXG4gIFBpcGVzLFxuICBTaWduYXR1cmUsXG4gIFNwYW4sXG4gIFN0YXRpY1N5bWJvbCxcbiAgU3ltYm9sLFxuICBTeW1ib2xEZWNsYXJhdGlvbixcbiAgU3ltYm9sUXVlcnksXG4gIFN5bWJvbFRhYmxlXG59O1xuXG5cbi8qKlxuICogVGhlIGluZm9ybWF0aW9uIGBMYW5ndWFnZVNlcnZpY2VgIG5lZWRzIGZyb20gdGhlIGBMYW5ndWFnZVNlcnZpY2VIb3N0YCB0byBkZXNjcmliZSB0aGUgY29udGVudCBvZlxuICogYSB0ZW1wbGF0ZSBhbmQgdGhlIGxhbmd1YWdlIGNvbnRleHQgdGhlIHRlbXBsYXRlIGlzIGluLlxuICpcbiAqIEEgaG9zdCBpbnRlcmZhY2U7IHNlZSBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlU291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSBzb3VyY2Ugb2YgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcmVhZG9ubHkgc291cmNlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzcGFuIG9mIHRoZSB0ZW1wbGF0ZSB3aXRoaW4gdGhlIHNvdXJjZSBmaWxlLlxuICAgKi9cbiAgcmVhZG9ubHkgc3BhbjogU3BhbjtcblxuICAvKipcbiAgICogQSBzdGF0aWMgc3ltYm9sIGZvciB0aGUgdGVtcGxhdGUncyBjb21wb25lbnQuXG4gICAqL1xuICByZWFkb25seSB0eXBlOiBTdGF0aWNTeW1ib2w7XG5cbiAgLyoqXG4gICAqIFRoZSBgU3ltYm9sVGFibGVgIGZvciB0aGUgbWVtYmVycyBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVyczogU3ltYm9sVGFibGU7XG5cbiAgLyoqXG4gICAqIEEgYFN5bWJvbFF1ZXJ5YCBmb3IgdGhlIGNvbnRleHQgb2YgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcmVhZG9ubHkgcXVlcnk6IFN5bWJvbFF1ZXJ5O1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBmaWxlIHRoYXQgY29udGFpbnMgdGhlIHRlbXBsYXRlLiBDb3VsZCBiZSBgLmh0bWxgIG9yIGAudHNgLlxuICAgKi9cbiAgcmVhZG9ubHkgZmlsZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHNlcXVlbmNlIG9mIHRlbXBsYXRlIHNvdXJjZXMuXG4gKlxuICogQSBob3N0IHR5cGU7IHNlZSBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVNvdXJjZXMgPSBUZW1wbGF0ZVNvdXJjZVtdIHwgdW5kZWZpbmVkO1xuXG4vKipcbiAqIEVycm9yIGluZm9ybWF0aW9uIGZvdW5kIGdldHRpbmcgZGVjbGFyYXRpb24gaW5mb3JtYXRpb25cbiAqXG4gKiBBIGhvc3QgdHlwZTsgc2VlIGBMYW5ndWFnZVNlcnZpY2VIb3N0YC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVjbGFyYXRpb25FcnJvciB7XG4gIC8qKlxuICAgKiBUaGUgc3BhbiBvZiB0aGUgZXJyb3IgaW4gdGhlIGRlY2xhcmF0aW9uJ3MgbW9kdWxlLlxuICAgKi9cbiAgcmVhZG9ubHkgc3BhbjogU3BhbjtcblxuICAvKipcbiAgICogVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBkZXNjcmliaW5nIHRoZSBlcnJvciBvciBhIGNoYWluXG4gICAqIG9mIG1lc3NhZ2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nfERpYWdub3N0aWNNZXNzYWdlQ2hhaW47XG59XG5cbi8qKlxuICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbXBvbmVudCBkZWNsYXJhdGlvbnMuXG4gKlxuICogQSBmaWxlIG1pZ2h0IGNvbnRhaW4gYSBkZWNsYXJhdGlvbiB3aXRob3V0IGEgdGVtcGxhdGUgYmVjYXVzZSB0aGUgZmlsZSBjb250YWlucyBvbmx5XG4gKiB0ZW1wbGF0ZVVybCByZWZlcmVuY2VzLiBIb3dldmVyLCB0aGUgY29tcG9uZW50IGRlY2xhcmF0aW9uIG1pZ2h0IGNvbnRhaW4gZXJyb3JzIHRoYXRcbiAqIG5lZWQgdG8gYmUgcmVwb3J0ZWQgc3VjaCBhcyB0aGUgdGVtcGxhdGUgc3RyaW5nIGlzIG1pc3Npbmcgb3IgdGhlIGNvbXBvbmVudCBpcyBub3RcbiAqIGRlY2xhcmVkIGluIGEgbW9kdWxlLiBUaGVzZSBlcnJvciBzaG91bGQgYmUgcmVwb3J0ZWQgb24gdGhlIGRlY2xhcmF0aW9uLCBub3QgdGhlXG4gKiB0ZW1wbGF0ZS5cbiAqXG4gKiBBIGhvc3QgdHlwZTsgc2VlIGBMYW5ndWFnZVNlcnZpY2VIb3N0YC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVjbGFyYXRpb24ge1xuICAvKipcbiAgICogVGhlIHN0YXRpYyBzeW1ib2wgb2YgdGhlIGNvbXBwb25lbnQgYmVpbmcgZGVjbGFyZWQuXG4gICAqL1xuICByZWFkb25seSB0eXBlOiBTdGF0aWNTeW1ib2w7XG5cbiAgLyoqXG4gICAqIFRoZSBzcGFuIG9mIHRoZSBkZWNsYXJhdGlvbiBhbm5vdGF0aW9uIHJlZmVyZW5jZSAoZS5nLiB0aGUgJ0NvbXBvbmVudCcgb3IgJ0RpcmVjdGl2ZSdcbiAgICogcmVmZXJlbmNlKS5cbiAgICovXG4gIHJlYWRvbmx5IGRlY2xhcmF0aW9uU3BhbjogU3BhbjtcblxuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBjb21waWxlciBkaXJlY3RpdmUgbWV0YWRhdGEgZm9yIHRoZSBkZWNsYXJhdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IG1ldGFkYXRhOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGE7XG5cbiAgLyoqXG4gICAqIEVycm9yIHJlcG9ydGVkIHRyeWluZyB0byBnZXQgdGhlIG1ldGFkYXRhLlxuICAgKi9cbiAgcmVhZG9ubHkgZXJyb3JzOiBEZWNsYXJhdGlvbkVycm9yW107XG59XG5cbi8qKlxuICogQSBzZXF1ZW5jZSBvZiBkZWNsYXJhdGlvbnMuXG4gKlxuICogQSBob3N0IHR5cGU7IHNlZSBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBEZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbltdO1xuXG4vKipcbiAqIFRoZSBob3N0IGZvciBhIGBMYW5ndWFnZVNlcnZpY2VgLiBUaGlzIHByb3ZpZGVzIGFsbCB0aGUgYExhbmd1YWdlU2VydmljZWAgcmVxdWlyZXMgdG8gcmVzcG9uZFxuICogdG8gdGhlIGBMYW5ndWFnZVNlcnZpY2VgIHJlcXVlc3RzLlxuICpcbiAqIFRoaXMgaW50ZXJmYWNlIGRlc2NyaWJlcyB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBgTGFuZ3VhZ2VTZXJ2aWNlYCBvbiBpdHMgaG9zdC5cbiAqXG4gKiBUaGUgaG9zdCBpbnRlcmZhY2UgaXMgaG9zdCBsYW5ndWFnZSBhZ25vc3RpYy5cbiAqXG4gKiBBZGRpbmcgb3B0aW9uYWwgbWVtYmVyIHRvIHRoaXMgaW50ZXJmYWNlIG9yIGFueSBpbnRlcmZhY2UgdGhhdCBpcyBkZXNjcmliZWQgYXMgYVxuICogYExhbmd1YWdlU2VydmljZUhvc3RgIGludGVyZmFjZSBpcyBub3QgY29uc2lkZXJlZCBhIGJyZWFraW5nIGNoYW5nZSBhcyBkZWZpbmVkIGJ5IFNlbVZlci5cbiAqIFJlbW92aW5nIGEgbWV0aG9kIG9yIGNoYW5naW5nIGEgbWVtYmVyIGZyb20gcmVxdWlyZWQgdG8gb3B0aW9uYWwgd2lsbCBhbHNvIG5vdCBiZSBjb25zaWRlcmVkIGFcbiAqIGJyZWFraW5nIGNoYW5nZS5cbiAqXG4gKiBJZiBhIG1lbWJlciBpcyBkZXByZWNhdGVkIGl0IHdpbGwgYmUgY2hhbmdlZCB0byBvcHRpb25hbCBpbiBhIG1pbm9yIHJlbGVhc2UgYmVmb3JlIGl0IGlzXG4gKiByZW1vdmVkIGluIGEgbWFqb3IgcmVsZWFzZS5cbiAqXG4gKiBBZGRpbmcgYSByZXF1aXJlZCBtZW1iZXIgb3IgY2hhbmdpbmcgYSBtZXRob2QncyBwYXJhbWV0ZXJzLCBpcyBjb25zaWRlcmVkIGEgYnJlYWtpbmcgY2hhbmdlIGFuZFxuICogd2lsbCBvbmx5IGJlIGRvbmUgd2hlbiBicmVha2luZyBjaGFuZ2VzIGFyZSBhbGxvd2VkLiBXaGVuIHBvc3NpYmxlLCBhIG5ldyBvcHRpb25hbCBtZW1iZXIgd2lsbFxuICogYmUgYWRkZWQgYW5kIHRoZSBvbGQgbWVtYmVyIHdpbGwgYmUgZGVwcmVjYXRlZC4gVGhlIG5ldyBtZW1iZXIgd2lsbCB0aGVuIGJlIG1hZGUgcmVxdWlyZWQgaW5cbiAqIGFuZCB0aGUgb2xkIG1lbWJlciB3aWxsIGJlIHJlbW92ZWQgb25seSB3aGVuIGJyZWFraW5nIGNoYW5nZXMgYXJlIGFsbG93ZWQuXG4gKlxuICogV2hpbGUgYW4gaW50ZXJmYWNlIGlzIG1hcmtlZCBhcyBleHBlcmltZW50YWwgYnJlYWtpbmctY2hhbmdlcyB3aWxsIGJlIGFsbG93ZWQgYmV0d2VlbiBtaW5vclxuICogcmVsZWFzZXMuIEFmdGVyIGFuIGludGVyZmFjZSBpcyBtYXJrZWQgYXMgc3RhYmxlIGJyZWFraW5nLWNoYW5nZXMgd2lsbCBvbmx5IGJlIGFsbG93ZWQgYmV0d2VlblxuICogbWFqb3IgcmVsZWFzZXMuIE5vIGJyZWFraW5nIGNoYW5nZXMgYXJlIGFsbG93ZWQgYmV0d2VlbiBwYXRjaCByZWxlYXNlcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VTZXJ2aWNlSG9zdCB7XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHRlbXBsYXRlIHNvdXJjZSBpbmZvcm1hdGlvbiBmb3IgYWxsIHRlbXBsYXRlcyBpbiBgZmlsZU5hbWVgIG9yIGZvciBgZmlsZU5hbWVgIGlmXG4gICAqIGl0IGlzIGEgdGVtcGxhdGUgZmlsZS5cbiAgICovXG4gIGdldFRlbXBsYXRlcyhmaWxlTmFtZTogc3RyaW5nKTogVGVtcGxhdGVTb3VyY2VbXTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgQW5ndWxhciBkZWNsYXJhdGlvbnMgaW4gdGhlIGdpdmVuIGZpbGUuXG4gICAqL1xuICBnZXREZWNsYXJhdGlvbnMoZmlsZU5hbWU6IHN0cmluZyk6IERlY2xhcmF0aW9ucztcblxuICAvKipcbiAgICogUmV0dXJuIGEgc3VtbWFyeSBvZiBhbGwgQW5ndWxhciBtb2R1bGVzIGluIHRoZSBwcm9qZWN0LlxuICAgKi9cbiAgZ2V0QW5hbHl6ZWRNb2R1bGVzKCk6IE5nQW5hbHl6ZWRNb2R1bGVzO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIEFTVCBmb3IgYm90aCBIVE1MIGFuZCB0ZW1wbGF0ZSBmb3IgdGhlIGNvbnRleHRGaWxlLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVBc3QodGVtcGxhdGU6IFRlbXBsYXRlU291cmNlKTogQXN0UmVzdWx0fHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB0ZW1wbGF0ZSBBU1QgZm9yIHRoZSBub2RlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHBvc2l0aW9uLlxuICAgKi9cbiAgZ2V0VGVtcGxhdGVBc3RBdFBvc2l0aW9uKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiBBc3RSZXN1bHR8dW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEFuIGl0ZW0gb2YgdGhlIGNvbXBsZXRpb24gcmVzdWx0IHRvIGJlIGRpc3BsYXllZCBieSBhbiBlZGl0b3IuXG4gKlxuICogQSBgTGFuZ3VhZ2VTZXJ2aWNlYCBpbnRlcmZhY2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRpb24ge1xuICAvKipcbiAgICogVGhlIGtpbmQgb2YgY29tcGxldGlvbi5cbiAgICovXG4gIGtpbmQ6IERlY2xhcmF0aW9uS2luZDtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGNvbXBsZXRpb24gdG8gYmUgZGlzcGxheWVkXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBrZXkgdG8gdXNlIHRvIHNvcnQgdGhlIGNvbXBsZXRpb25zIGZvciBkaXNwbGF5LlxuICAgKi9cbiAgc29ydDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgc2VxdWVuY2Ugb2YgY29tcGxldGlvbnMuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IHR5cGUgQ29tcGxldGlvbnMgPSBDb21wbGV0aW9uW107XG5cbi8qKlxuICogQSBmaWxlIGFuZCBzcGFuLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgZmlsZU5hbWU6IHN0cmluZztcbiAgc3BhbjogU3Bhbjtcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBBbmd1bGFyIGRpcmVjdGl2ZS4gVXNlZCBmb3IgUXVpY2tJbmZvIGluIHRlbXBsYXRlLlxuICovXG5leHBvcnQgZW51bSBEaXJlY3RpdmVLaW5kIHtcbiAgQ09NUE9ORU5UID0gJ2NvbXBvbmVudCcsXG4gIERJUkVDVElWRSA9ICdkaXJlY3RpdmUnLFxuICBFVkVOVCA9ICdldmVudCcsXG59XG5cbi8qKlxuICogU2NyaXB0RWxlbWVudEtpbmQgZm9yIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBlbnVtIENvbXBsZXRpb25LaW5kIHtcbiAgQU5HVUxBUl9FTEVNRU5UID0gJ2FuZ3VsYXIgZWxlbWVudCcsXG4gIEFUVFJJQlVURSA9ICdhdHRyaWJ1dGUnLFxuICBDT01QT05FTlQgPSAnY29tcG9uZW50JyxcbiAgRUxFTUVOVCA9ICdlbGVtZW50JyxcbiAgRU5USVRZID0gJ2VudGl0eScsXG4gIEhUTUxfQVRUUklCVVRFID0gJ2h0bWwgYXR0cmlidXRlJyxcbiAgSFRNTF9FTEVNRU5UID0gJ2h0bWwgZWxlbWVudCcsXG4gIEtFWSA9ICdrZXknLFxuICBNRVRIT0QgPSAnbWV0aG9kJyxcbiAgUElQRSA9ICdwaXBlJyxcbiAgUFJPUEVSVFkgPSAncHJvcGVydHknLFxuICBSRUZFUkVOQ0UgPSAncmVmZXJlbmNlJyxcbiAgVFlQRSA9ICd0eXBlJyxcbiAgVkFSSUFCTEUgPSAndmFyaWFibGUnLFxufVxuXG5leHBvcnQgdHlwZSBDb21wbGV0aW9uRW50cnkgPSBPbWl0PHRzLkNvbXBsZXRpb25FbnRyeSwgJ2tpbmQnPiYge1xuICBraW5kOiBDb21wbGV0aW9uS2luZCxcbn07XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBkaWFnbm9zdGljcyBtZXNzYWdlIGNoYWluLiBUaGlzIGlzIHNpbWlsYXIgdG8gdGhlIFR5cGVTY3JpcHRcbiAqIERpYWdub3N0aWNNZXNzYWdlQ2hhaW4uIFRoZSBtZXNzYWdlcyBhcmUgaW50ZW5kZWQgdG8gYmUgZm9ybWF0dGVkIGFzIHNlcGFyYXRlXG4gKiBzZW50ZW5jZSBmcmFnbWVudHMgYW5kIGluZGVudGVkLlxuICpcbiAqIEZvciBjb21wYXRpYmlsaXR5IHByZXZpb3VzIGltcGxlbWVudGF0aW9uLCB0aGUgdmFsdWVzIGFyZSBleHBlY3RlZCB0byBvdmVycmlkZVxuICogdG9TdHJpbmcoKSB0byByZXR1cm4gYSBmb3JtYXR0ZWQgbWVzc2FnZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ25vc3RpY01lc3NhZ2VDaGFpbiB7XG4gIC8qKlxuICAgKiBUaGUgdGV4dCBvZiB0aGUgZGlhZ25vc3RpYyBtZXNzYWdlIHRvIGRpc3BsYXkuXG4gICAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuZXh0IG1lc3NhZ2UgaW4gdGhlIGNoYWluLlxuICAgKi9cbiAgbmV4dD86IERpYWdub3N0aWNNZXNzYWdlQ2hhaW5bXTtcbn1cblxuLyoqXG4gKiBBbiB0ZW1wbGF0ZSBkaWFnbm9zdGljIG1lc3NhZ2UgdG8gZGlzcGxheS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ25vc3RpYyB7XG4gIC8qKlxuICAgKiBUaGUga2luZCBvZiBkaWFnbm9zdGljIG1lc3NhZ2VcbiAgICovXG4gIGtpbmQ6IHRzLkRpYWdub3N0aWNDYXRlZ29yeTtcblxuICAvKipcbiAgICogVGhlIHNvdXJjZSBzcGFuIHRoYXQgc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgKi9cbiAgc3BhbjogU3BhbjtcblxuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGRpYWdub3N0aWMgbWVzc2FnZSB0byBkaXNwbGF5IG9yIGEgY2hhaW4gb2YgbWVzc2FnZXMuXG4gICAqL1xuICBtZXNzYWdlOiBzdHJpbmd8RGlhZ25vc3RpY01lc3NhZ2VDaGFpbjtcbn1cblxuLyoqXG4gKiBBIHNlcXVlbmNlIG9mIGRpYWdub3N0aWMgbWVzc2FnZS5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgdHlwZSBEaWFnbm9zdGljcyA9IERpYWdub3N0aWNbXTtcblxuLyoqXG4gKiBBIHNlY3Rpb24gb2YgaG92ZXIgdGV4dC4gSWYgdGhlIHRleHQgaXMgY29kZSB0aGVuIGxhbmd1YWdlIHNob3VsZCBiZSBwcm92aWRlZC5cbiAqIE90aGVyd2lzZSB0aGUgdGV4dCBpcyBhc3N1bWVkIHRvIGJlIE1hcmtkb3duIHRleHQgdGhhdCB3aWxsIGJlIHNhbml0aXplZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIb3ZlclRleHRTZWN0aW9uIHtcbiAgLyoqXG4gICAqIFNvdXJjZSBjb2RlIG9yIG1hcmtkb3duIHRleHQgZGVzY3JpYmluZyB0aGUgc3ltYm9sIGEgdGhlIGhvdmVyIGxvY2F0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHNvdXJjZSBpZiBgdGV4dGAgaXMgYSBzb3VyY2UgY29kZSBmcmFnbWVudC5cbiAgICovXG4gIHJlYWRvbmx5IGxhbmd1YWdlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEhvdmVyIGluZm9ybWF0aW9uIGZvciBhIHN5bWJvbCBhdCB0aGUgaG92ZXIgbG9jYXRpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSG92ZXIge1xuICAvKipcbiAgICogVGhlIGhvdmVyIHRleHQgdG8gZGlzcGxheSBmb3IgdGhlIHN5bWJvbCBhdCB0aGUgaG92ZXIgbG9jYXRpb24uIElmIHRoZSB0ZXh0IGluY2x1ZGVzXG4gICAqIHNvdXJjZSBjb2RlLCB0aGUgc2VjdGlvbiB3aWxsIHNwZWNpZnkgd2hpY2ggbGFuZ3VhZ2UgaXQgc2hvdWxkIGJlIGludGVycHJldGVkIGFzLlxuICAgKi9cbiAgcmVhZG9ubHkgdGV4dDogSG92ZXJUZXh0U2VjdGlvbltdO1xuXG4gIC8qKlxuICAgKiBUaGUgc3BhbiBvZiBzb3VyY2UgdGhlIGhvdmVyIGNvdmVycy5cbiAgICovXG4gIHJlYWRvbmx5IHNwYW46IFNwYW47XG59XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYW4gQW5ndWxhciBsYW5ndWFnZSBzZXJ2aWNlIGNyZWF0ZWQgYnkgYGNyZWF0ZUxhbmd1YWdlU2VydmljZSgpYC5cbiAqXG4gKiBUaGUgQW5ndWxhciBsYW5ndWFnZSBzZXJ2aWNlIGltcGxlbWVudHMgYSBzdWJzZXQgb2YgbWV0aG9kcyBkZWZpbmVkIGluXG4gKiBUaGUgQW5ndWxhciBsYW5ndWFnZSBzZXJ2aWNlIGltcGxlbWVudHMgYSBzdWJzZXQgb2YgbWV0aG9kcyBkZWZpbmVkIGJ5XG4gKiB0aGUgVHlwZVNjcmlwdCBsYW5ndWFnZSBzZXJ2aWNlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VTZXJ2aWNlID0gUGljazxcbiAgICB0cy5MYW5ndWFnZVNlcnZpY2UsICdnZXRDb21wbGV0aW9uc0F0UG9zaXRpb24nfCdnZXREZWZpbml0aW9uQW5kQm91bmRTcGFuJ3xcbiAgICAnZ2V0UXVpY2tJbmZvQXRQb3NpdGlvbid8J2dldFNlbWFudGljRGlhZ25vc3RpY3MnPjtcbiJdfQ==
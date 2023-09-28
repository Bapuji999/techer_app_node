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
        define("@angular/compiler-cli/src/ngtsc/reflection/src/host", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    exports.Decorator = {
        nodeForError: function (decorator) {
            if (decorator.node !== null) {
                return decorator.node;
            }
            else {
                // TODO(alxhub): we can't rely on narrowing until TS 3.6 is in g3.
                return decorator.synthesizedFor;
            }
        },
    };
    function isDecoratorIdentifier(exp) {
        return ts.isIdentifier(exp) ||
            ts.isPropertyAccessExpression(exp) && ts.isIdentifier(exp.expression);
    }
    exports.isDecoratorIdentifier = isDecoratorIdentifier;
    /**
     * An enumeration of possible kinds of class members.
     */
    var ClassMemberKind;
    (function (ClassMemberKind) {
        ClassMemberKind[ClassMemberKind["Constructor"] = 0] = "Constructor";
        ClassMemberKind[ClassMemberKind["Getter"] = 1] = "Getter";
        ClassMemberKind[ClassMemberKind["Setter"] = 2] = "Setter";
        ClassMemberKind[ClassMemberKind["Property"] = 3] = "Property";
        ClassMemberKind[ClassMemberKind["Method"] = 4] = "Method";
    })(ClassMemberKind = exports.ClassMemberKind || (exports.ClassMemberKind = {}));
    /**
     * Possible declarations of known values, such as built-in objects/functions or TypeScript helpers.
     */
    var KnownDeclaration;
    (function (KnownDeclaration) {
        /**
         * Indicates the JavaScript global `Object` class.
         */
        KnownDeclaration[KnownDeclaration["JsGlobalObject"] = 0] = "JsGlobalObject";
        /**
         * Indicates the `__assign` TypeScript helper function.
         */
        KnownDeclaration[KnownDeclaration["TsHelperAssign"] = 1] = "TsHelperAssign";
        /**
         * Indicates the `__spread` TypeScript helper function.
         */
        KnownDeclaration[KnownDeclaration["TsHelperSpread"] = 2] = "TsHelperSpread";
        /**
         * Indicates the `__spreadArrays` TypeScript helper function.
         */
        KnownDeclaration[KnownDeclaration["TsHelperSpreadArrays"] = 3] = "TsHelperSpreadArrays";
    })(KnownDeclaration = exports.KnownDeclaration || (exports.KnownDeclaration = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcmVmbGVjdGlvbi9zcmMvaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQWtFcEIsUUFBQSxTQUFTLEdBQUc7UUFDdkIsWUFBWSxFQUFFLFVBQUMsU0FBb0I7WUFDakMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDM0IsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLGtFQUFrRTtnQkFDbEUsT0FBUSxTQUFnQyxDQUFDLGNBQWMsQ0FBQzthQUN6RDtRQUNILENBQUM7S0FDRixDQUFDO0lBUUYsU0FBZ0IscUJBQXFCLENBQUMsR0FBa0I7UUFDdEQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUN2QixFQUFFLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUhELHNEQUdDO0lBbUJEOztPQUVHO0lBQ0gsSUFBWSxlQU1YO0lBTkQsV0FBWSxlQUFlO1FBQ3pCLG1FQUFXLENBQUE7UUFDWCx5REFBTSxDQUFBO1FBQ04seURBQU0sQ0FBQTtRQUNOLDZEQUFRLENBQUE7UUFDUix5REFBTSxDQUFBO0lBQ1IsQ0FBQyxFQU5XLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBTTFCO0lBME1EOztPQUVHO0lBQ0gsSUFBWSxnQkFvQlg7SUFwQkQsV0FBWSxnQkFBZ0I7UUFDMUI7O1dBRUc7UUFDSCwyRUFBYyxDQUFBO1FBRWQ7O1dBRUc7UUFDSCwyRUFBYyxDQUFBO1FBRWQ7O1dBRUc7UUFDSCwyRUFBYyxDQUFBO1FBRWQ7O1dBRUc7UUFDSCx1RkFBb0IsQ0FBQTtJQUN0QixDQUFDLEVBcEJXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBb0IzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbi8qKlxuICogTWV0YWRhdGEgZXh0cmFjdGVkIGZyb20gYW4gaW5zdGFuY2Ugb2YgYSBkZWNvcmF0b3Igb24gYW5vdGhlciBkZWNsYXJhdGlvbiwgb3Igc3ludGhlc2l6ZWQgZnJvbVxuICogb3RoZXIgaW5mb3JtYXRpb24gYWJvdXQgYSBjbGFzcy5cbiAqL1xuZXhwb3J0IHR5cGUgRGVjb3JhdG9yID0gQ29uY3JldGVEZWNvcmF0b3IgfCBTeW50aGV0aWNEZWNvcmF0b3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZURlY29yYXRvciB7XG4gIC8qKlxuICAgKiBOYW1lIGJ5IHdoaWNoIHRoZSBkZWNvcmF0b3Igd2FzIGludm9rZWQgaW4gdGhlIHVzZXIncyBjb2RlLlxuICAgKlxuICAgKiBUaGlzIGlzIGRpc3RpbmN0IGZyb20gdGhlIG5hbWUgYnkgd2hpY2ggdGhlIGRlY29yYXRvciB3YXMgaW1wb3J0ZWQgKHRob3VnaCBpbiBwcmFjdGljZSB0aGV5XG4gICAqIHdpbGwgdXN1YWxseSBiZSB0aGUgc2FtZSkuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElkZW50aWZpZXIgd2hpY2ggcmVmZXJzIHRvIHRoZSBkZWNvcmF0b3IgaW4gdGhlIHVzZXIncyBjb2RlLlxuICAgKi9cbiAgaWRlbnRpZmllcjogRGVjb3JhdG9ySWRlbnRpZmllcnxudWxsO1xuXG4gIC8qKlxuICAgKiBgSW1wb3J0YCBieSB3aGljaCB0aGUgZGVjb3JhdG9yIHdhcyBicm91Z2h0IGludG8gdGhlIG1vZHVsZSBpbiB3aGljaCBpdCB3YXMgaW52b2tlZCwgb3IgYG51bGxgXG4gICAqIGlmIHRoZSBkZWNvcmF0b3Igd2FzIGRlY2xhcmVkIGluIHRoZSBzYW1lIG1vZHVsZSBhbmQgbm90IGltcG9ydGVkLlxuICAgKi9cbiAgaW1wb3J0IDogSW1wb3J0IHwgbnVsbDtcblxuICAvKipcbiAgICogVHlwZVNjcmlwdCByZWZlcmVuY2UgdG8gdGhlIGRlY29yYXRvciBpdHNlbGYsIG9yIGBudWxsYCBpZiB0aGUgZGVjb3JhdG9yIGlzIHN5bnRoZXNpemVkIChlLmcuXG4gICAqIGluIG5nY2MpLlxuICAgKi9cbiAgbm9kZTogdHMuTm9kZXxudWxsO1xuXG4gIC8qKlxuICAgKiBBcmd1bWVudHMgb2YgdGhlIGludm9jYXRpb24gb2YgdGhlIGRlY29yYXRvciwgaWYgdGhlIGRlY29yYXRvciBpcyBpbnZva2VkLCBvciBgbnVsbGBcbiAgICogb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXJnczogdHMuRXhwcmVzc2lvbltdfG51bGw7XG59XG5cbi8qKlxuICogTWV0YWRhdGEgZXh0cmFjdGVkIGZyb20gYW4gaW5zdGFuY2Ugb2YgYSBkZWNvcmF0b3Igb24gYW5vdGhlciBkZWNsYXJhdGlvbiwgd2hpY2ggd2FzIGFjdHVhbGx5XG4gKiBwcmVzZW50IGluIGEgZmlsZS5cbiAqXG4gKiBDb25jcmV0ZSBkZWNvcmF0b3JzIGFsd2F5cyBoYXZlIGFuIGBpZGVudGlmaWVyYCBhbmQgYSBgbm9kZWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uY3JldGVEZWNvcmF0b3IgZXh0ZW5kcyBCYXNlRGVjb3JhdG9yIHtcbiAgaWRlbnRpZmllcjogRGVjb3JhdG9ySWRlbnRpZmllcjtcbiAgbm9kZTogdHMuTm9kZTtcbn1cblxuLyoqXG4gKiBTeW50aGV0aWMgZGVjb3JhdG9ycyBuZXZlciBoYXZlIGFuIGBpZGVudGlmaWVyYCBvciBhIGBub2RlYCwgYnV0IGtub3cgdGhlIG5vZGUgZm9yIHdoaWNoIHRoZXlcbiAqIHdlcmUgc3ludGhlc2l6ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ludGhldGljRGVjb3JhdG9yIGV4dGVuZHMgQmFzZURlY29yYXRvciB7XG4gIGlkZW50aWZpZXI6IG51bGw7XG4gIG5vZGU6IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBgdHMuTm9kZWAgZm9yIHdoaWNoIHRoaXMgZGVjb3JhdG9yIHdhcyBjcmVhdGVkLlxuICAgKi9cbiAgc3ludGhlc2l6ZWRGb3I6IHRzLk5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBEZWNvcmF0b3IgPSB7XG4gIG5vZGVGb3JFcnJvcjogKGRlY29yYXRvcjogRGVjb3JhdG9yKTogdHMuTm9kZSA9PiB7XG4gICAgaWYgKGRlY29yYXRvci5ub2RlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZGVjb3JhdG9yLm5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8oYWx4aHViKTogd2UgY2FuJ3QgcmVseSBvbiBuYXJyb3dpbmcgdW50aWwgVFMgMy42IGlzIGluIGczLlxuICAgICAgcmV0dXJuIChkZWNvcmF0b3IgYXMgU3ludGhldGljRGVjb3JhdG9yKS5zeW50aGVzaXplZEZvcjtcbiAgICB9XG4gIH0sXG59O1xuXG4vKipcbiAqIEEgZGVjb3JhdG9yIGlzIGlkZW50aWZpZWQgYnkgZWl0aGVyIGEgc2ltcGxlIGlkZW50aWZpZXIgKGUuZy4gYERlY29yYXRvcmApIG9yLCBpbiBzb21lIGNhc2VzLFxuICogYSBuYW1lc3BhY2VkIHByb3BlcnR5IGFjY2VzcyAoZS5nLiBgY29yZS5EZWNvcmF0b3JgKS5cbiAqL1xuZXhwb3J0IHR5cGUgRGVjb3JhdG9ySWRlbnRpZmllciA9IHRzLklkZW50aWZpZXIgfCBOYW1lc3BhY2VkSWRlbnRpZmllcjtcbmV4cG9ydCB0eXBlIE5hbWVzcGFjZWRJZGVudGlmaWVyID0gdHMuUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uICYge2V4cHJlc3Npb246IHRzLklkZW50aWZpZXJ9O1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjb3JhdG9ySWRlbnRpZmllcihleHA6IHRzLkV4cHJlc3Npb24pOiBleHAgaXMgRGVjb3JhdG9ySWRlbnRpZmllciB7XG4gIHJldHVybiB0cy5pc0lkZW50aWZpZXIoZXhwKSB8fFxuICAgICAgdHMuaXNQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oZXhwKSAmJiB0cy5pc0lkZW50aWZpZXIoZXhwLmV4cHJlc3Npb24pO1xufVxuXG4vKipcbiAqIFRoZSBgdHMuRGVjbGFyYXRpb25gIG9mIGEgXCJjbGFzc1wiLlxuICpcbiAqIENsYXNzZXMgYXJlIHJlcHJlc2VudGVkIGRpZmZlcmVudGx5IGluIGRpZmZlcmVudCBjb2RlIGZvcm1hdHM6XG4gKiAtIEluIFRTIGNvZGUsIHRoZXkgYXJlIHR5cGljYWxseSBkZWZpbmVkIHVzaW5nIHRoZSBgY2xhc3NgIGtleXdvcmQuXG4gKiAtIEluIEVTMjAxNSBjb2RlLCB0aGV5IGFyZSB1c3VhbGx5IGRlZmluZWQgdXNpbmcgdGhlIGBjbGFzc2Aga2V5d29yZCwgYnV0IHRoZXkgY2FuIGFsc28gYmVcbiAqICAgdmFyaWFibGUgZGVjbGFyYXRpb25zLCB3aGljaCBhcmUgaW5pdGlhbGl6ZWQgdG8gYSBjbGFzcyBleHByZXNzaW9uIChlLmcuXG4gKiAgIGBsZXQgRm9vID0gRm9vMSA9IGNsYXNzIEZvbyB7fWApLlxuICogLSBJbiBFUzUgY29kZSwgdGhleSBhcmUgdHlwaWNhbGx5IGRlZmluZWQgYXMgdmFyaWFibGUgZGVjbGFyYXRpb25zIGJlaW5nIGFzc2lnbmVkIHRoZSByZXR1cm5cbiAqICAgdmFsdWUgb2YgYW4gSUlGRS4gVGhlIGFjdHVhbCBcImNsYXNzXCIgaXMgaW1wbGVtZW50ZWQgYXMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpbnNpZGUgdGhlIElJRkUsXG4gKiAgIGJ1dCB0aGUgb3V0ZXIgdmFyaWFibGUgZGVjbGFyYXRpb24gcmVwcmVzZW50cyB0aGUgXCJjbGFzc1wiIHRvIHRoZSByZXN0IG9mIHRoZSBwcm9ncmFtLlxuICpcbiAqIEZvciBgUmVmbGVjdGlvbkhvc3RgIHB1cnBvc2VzLCBhIGNsYXNzIGRlY2xhcmF0aW9uIHNob3VsZCBhbHdheXMgaGF2ZSBhIGBuYW1lYCBpZGVudGlmaWVyLFxuICogYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gcmVmZXJlbmNlIGl0IGluIG90aGVyIHBhcnRzIG9mIHRoZSBwcm9ncmFtLlxuICovXG5leHBvcnQgdHlwZSBDbGFzc0RlY2xhcmF0aW9uPFQgZXh0ZW5kcyB0cy5EZWNsYXJhdGlvbiA9IHRzLkRlY2xhcmF0aW9uPiA9IFQgJiB7bmFtZTogdHMuSWRlbnRpZmllcn07XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gb2YgcG9zc2libGUga2luZHMgb2YgY2xhc3MgbWVtYmVycy5cbiAqL1xuZXhwb3J0IGVudW0gQ2xhc3NNZW1iZXJLaW5kIHtcbiAgQ29uc3RydWN0b3IsXG4gIEdldHRlcixcbiAgU2V0dGVyLFxuICBQcm9wZXJ0eSxcbiAgTWV0aG9kLFxufVxuXG4vKipcbiAqIEEgbWVtYmVyIG9mIGEgY2xhc3MsIHN1Y2ggYXMgYSBwcm9wZXJ0eSwgbWV0aG9kLCBvciBjb25zdHJ1Y3Rvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbGFzc01lbWJlciB7XG4gIC8qKlxuICAgKiBUeXBlU2NyaXB0IHJlZmVyZW5jZSB0byB0aGUgY2xhc3MgbWVtYmVyIGl0c2VsZiwgb3IgbnVsbCBpZiBpdCBpcyBub3QgYXBwbGljYWJsZS5cbiAgICovXG4gIG5vZGU6IHRzLk5vZGV8bnVsbDtcblxuICAvKipcbiAgICogSW5kaWNhdGlvbiBvZiB3aGljaCB0eXBlIG9mIG1lbWJlciB0aGlzIGlzIChwcm9wZXJ0eSwgbWV0aG9kLCBldGMpLlxuICAgKi9cbiAga2luZDogQ2xhc3NNZW1iZXJLaW5kO1xuXG4gIC8qKlxuICAgKiBUeXBlU2NyaXB0IGB0cy5UeXBlTm9kZWAgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG9mIHRoZSBtZW1iZXIsIG9yIGBudWxsYCBpZiBub3QgcHJlc2VudCBvclxuICAgKiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgdHlwZTogdHMuVHlwZU5vZGV8bnVsbDtcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgY2xhc3MgbWVtYmVyLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUeXBlU2NyaXB0IGB0cy5JZGVudGlmaWVyYCByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIG1lbWJlciwgb3IgYG51bGxgIGlmIG5vIHN1Y2ggbm9kZVxuICAgKiBpcyBwcmVzZW50LlxuICAgKlxuICAgKiBUaGUgYG5hbWVOb2RlYCBpcyB1c2VmdWwgaW4gd3JpdGluZyByZWZlcmVuY2VzIHRvIHRoaXMgbWVtYmVyIHRoYXQgd2lsbCBiZSBjb3JyZWN0bHkgc291cmNlLVxuICAgKiBtYXBwZWQgYmFjayB0byB0aGUgb3JpZ2luYWwgZmlsZS5cbiAgICovXG4gIG5hbWVOb2RlOiB0cy5JZGVudGlmaWVyfG51bGw7XG5cbiAgLyoqXG4gICAqIFR5cGVTY3JpcHQgYHRzLkV4cHJlc3Npb25gIHdoaWNoIHJlcHJlc2VudHMgdGhlIHZhbHVlIG9mIHRoZSBtZW1iZXIuXG4gICAqXG4gICAqIElmIHRoZSBtZW1iZXIgaXMgYSBwcm9wZXJ0eSwgdGhpcyB3aWxsIGJlIHRoZSBwcm9wZXJ0eSBpbml0aWFsaXplciBpZiB0aGVyZSBpcyBvbmUsIG9yIG51bGxcbiAgICogb3RoZXJ3aXNlLlxuICAgKi9cbiAgdmFsdWU6IHRzLkV4cHJlc3Npb258bnVsbDtcblxuICAvKipcbiAgICogVHlwZVNjcmlwdCBgdHMuRGVjbGFyYXRpb25gIHdoaWNoIHJlcHJlc2VudHMgdGhlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBtZW1iZXIuXG4gICAqXG4gICAqIEluIFR5cGVTY3JpcHQgY29kZSB0aGlzIGlzIGlkZW50aWNhbCB0byB0aGUgbm9kZSwgYnV0IGluIGRvd25sZXZlbGVkIGNvZGUgdGhpcyBzaG91bGQgYWx3YXlzIGJlXG4gICAqIHRoZSBEZWNsYXJhdGlvbiB3aGljaCBhY3R1YWxseSByZXByZXNlbnRzIHRoZSBtZW1iZXIncyBydW50aW1lIHZhbHVlLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgdGhlIFRTIGNvZGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBjbGFzcyBDbGF6eiB7XG4gICAqICAgc3RhdGljIGdldCBwcm9wZXJ0eSgpOiBzdHJpbmcge1xuICAgKiAgICAgcmV0dXJuICd2YWx1ZSc7XG4gICAqICAgfVxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBEb3dubGV2ZWxzIHRvOlxuICAgKlxuICAgKiBgYGBcbiAgICogdmFyIENsYXp6ID0gKGZ1bmN0aW9uICgpIHtcbiAgICogICBmdW5jdGlvbiBDbGF6eigpIHtcbiAgICogICB9XG4gICAqICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENsYXp6LCBcInByb3BlcnR5XCIsIHtcbiAgICogICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAqICAgICAgICAgICByZXR1cm4gJ3ZhbHVlJztcbiAgICogICAgICAgfSxcbiAgICogICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICogICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAqICAgfSk7XG4gICAqICAgcmV0dXJuIENsYXp6O1xuICAgKiB9KCkpO1xuICAgKiBgYGBcbiAgICpcbiAgICogSW4gdGhpcyBleGFtcGxlLCBmb3IgdGhlIHByb3BlcnR5IFwicHJvcGVydHlcIiwgdGhlIG5vZGUgd291bGQgYmUgdGhlIGVudGlyZVxuICAgKiBPYmplY3QuZGVmaW5lUHJvcGVydHkgRXhwcmVzc2lvblN0YXRlbWVudCwgYnV0IHRoZSBpbXBsZW1lbnRhdGlvbiB3b3VsZCBiZSB0aGlzXG4gICAqIEZ1bmN0aW9uRGVjbGFyYXRpb246XG4gICAqXG4gICAqIGBgYFxuICAgKiBmdW5jdGlvbiAoKSB7XG4gICAqICAgcmV0dXJuICd2YWx1ZSc7XG4gICAqIH0sXG4gICAqIGBgYFxuICAgKi9cbiAgaW1wbGVtZW50YXRpb246IHRzLkRlY2xhcmF0aW9ufG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIG1lbWJlciBpcyBzdGF0aWMgb3Igbm90LlxuICAgKi9cbiAgaXNTdGF0aWM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFueSBgRGVjb3JhdG9yYHMgd2hpY2ggYXJlIHByZXNlbnQgb24gdGhlIG1lbWJlciwgb3IgYG51bGxgIGlmIG5vbmUgYXJlIHByZXNlbnQuXG4gICAqL1xuICBkZWNvcmF0b3JzOiBEZWNvcmF0b3JbXXxudWxsO1xufVxuXG4vKipcbiAqIEEgcmVmZXJlbmNlIHRvIGEgdmFsdWUgdGhhdCBvcmlnaW5hdGVkIGZyb20gYSB0eXBlIHBvc2l0aW9uLlxuICpcbiAqIEZvciBleGFtcGxlLCBhIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBjb3VsZCBiZSBkZWNsYXJlZCBhcyBgZm9vOiBGb29gLiBBIGBUeXBlVmFsdWVSZWZlcmVuY2VgXG4gKiBleHRyYWN0ZWQgZnJvbSB0aGlzIHdvdWxkIHJlZmVyIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY2xhc3MgYEZvb2AgKGFzc3VtaW5nIGl0IHdhcyBhY3R1YWxseSBhXG4gKiB0eXBlKS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGtpbmRzIG9mIHN1Y2ggcmVmZXJlbmNlcy4gQSByZWZlcmVuY2Ugd2l0aCBgbG9jYWw6IGZhbHNlYCByZWZlcnMgdG8gYSB0eXBlIHRoYXQgd2FzXG4gKiBpbXBvcnRlZCwgYW5kIGdpdmVzIHRoZSBzeW1ib2wgYG5hbWVgIGFuZCB0aGUgYG1vZHVsZU5hbWVgIG9mIHRoZSBpbXBvcnQuIE5vdGUgdGhhdCB0aGlzXG4gKiBgbW9kdWxlTmFtZWAgbWF5IGJlIGEgcmVsYXRpdmUgcGF0aCwgYW5kIHRodXMgaXMgbGlrZWx5IG9ubHkgdmFsaWQgd2l0aGluIHRoZSBjb250ZXh0IG9mIHRoZSBmaWxlXG4gKiB3aGljaCBjb250YWluZWQgdGhlIG9yaWdpbmFsIHR5cGUgcmVmZXJlbmNlLlxuICpcbiAqIEEgcmVmZXJlbmNlIHdpdGggYGxvY2FsOiB0cnVlYCByZWZlcnMgdG8gYW55IG90aGVyIGtpbmQgb2YgdHlwZSB2aWEgYSBgdHMuRXhwcmVzc2lvbmAgdGhhdCdzXG4gKiB2YWxpZCB3aXRoaW4gdGhlIGxvY2FsIGZpbGUgd2hlcmUgdGhlIHR5cGUgd2FzIHJlZmVyZW5jZWQuXG4gKi9cbmV4cG9ydCB0eXBlIFR5cGVWYWx1ZVJlZmVyZW5jZSA9IHtcbiAgbG9jYWw6IHRydWU7IGV4cHJlc3Npb246IHRzLkV4cHJlc3Npb247IGRlZmF1bHRJbXBvcnRTdGF0ZW1lbnQ6IHRzLkltcG9ydERlY2xhcmF0aW9uIHwgbnVsbDtcbn0gfFxue1xuICBsb2NhbDogZmFsc2U7XG4gIG5hbWU6IHN0cmluZztcbiAgbW9kdWxlTmFtZTogc3RyaW5nO1xuICB2YWx1ZURlY2xhcmF0aW9uOiB0cy5EZWNsYXJhdGlvbjtcbn07XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdG8gYSBjb25zdHJ1Y3Rvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDdG9yUGFyYW1ldGVyIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHBhcmFtZXRlciwgaWYgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBTb21lIHBhcmFtZXRlcnMgZG9uJ3QgaGF2ZSBhIHNpbXBsZSBzdHJpbmcgbmFtZSAoZm9yIGV4YW1wbGUsIHBhcmFtZXRlcnMgd2hpY2ggYXJlIGRlc3RydWN0dXJlZFxuICAgKiBpbnRvIG11bHRpcGxlIHZhcmlhYmxlcykuIEluIHRoZXNlIGNhc2VzLCBgbmFtZWAgY2FuIGJlIGBudWxsYC5cbiAgICovXG4gIG5hbWU6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBUeXBlU2NyaXB0IGB0cy5CaW5kaW5nTmFtZWAgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIFRoZSBgbmFtZU5vZGVgIGlzIHVzZWZ1bCBpbiB3cml0aW5nIHJlZmVyZW5jZXMgdG8gdGhpcyBtZW1iZXIgdGhhdCB3aWxsIGJlIGNvcnJlY3RseSBzb3VyY2UtXG4gICAqIG1hcHBlZCBiYWNrIHRvIHRoZSBvcmlnaW5hbCBmaWxlLlxuICAgKi9cbiAgbmFtZU5vZGU6IHRzLkJpbmRpbmdOYW1lO1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIncyB0eXBlIGFubm90YXRpb24sIGlmIGl0J3MgcG9zc2libGUgdG8gcmVmZXIgdG8gdGhlXG4gICAqIHBhcmFtZXRlcidzIHR5cGUgYXMgYSB2YWx1ZS5cbiAgICpcbiAgICogVGhpcyBjYW4gZWl0aGVyIGJlIGEgcmVmZXJlbmNlIHRvIGEgbG9jYWwgdmFsdWUsIGluIHdoaWNoIGNhc2UgaXQgaGFzIGBsb2NhbGAgc2V0IHRvIGB0cnVlYCBhbmRcbiAgICogY29udGFpbnMgYSBgdHMuRXhwcmVzc2lvbmAsIG9yIGl0J3MgYSByZWZlcmVuY2UgdG8gYW4gaW1wb3J0ZWQgdmFsdWUsIGluIHdoaWNoIGNhc2UgYGxvY2FsYCBpc1xuICAgKiBzZXQgdG8gYGZhbHNlYCBhbmQgdGhlIHN5bWJvbCBhbmQgbW9kdWxlIG5hbWUgb2YgdGhlIGltcG9ydGVkIHZhbHVlIGFyZSBwcm92aWRlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBJZiB0aGUgdHlwZSBpcyBub3QgcHJlc2VudCBvciBjYW5ub3QgYmUgcmVwcmVzZW50ZWQgYXMgYW4gZXhwcmVzc2lvbiwgYHR5cGVWYWx1ZVJlZmVyZW5jZWAgaXNcbiAgICogYG51bGxgLlxuICAgKi9cbiAgdHlwZVZhbHVlUmVmZXJlbmNlOiBUeXBlVmFsdWVSZWZlcmVuY2V8bnVsbDtcblxuICAvKipcbiAgICogVHlwZVNjcmlwdCBgdHMuVHlwZU5vZGVgIHJlcHJlc2VudGluZyB0aGUgdHlwZSBub2RlIGZvdW5kIGluIHRoZSB0eXBlIHBvc2l0aW9uLlxuICAgKlxuICAgKiBUaGlzIGZpZWxkIGNhbiBiZSB1c2VkIGZvciBkaWFnbm9zdGljcyByZXBvcnRpbmcgaWYgYHR5cGVWYWx1ZVJlZmVyZW5jZWAgaXMgYG51bGxgLlxuICAgKlxuICAgKiBDYW4gYmUgbnVsbCwgaWYgdGhlIHBhcmFtIGhhcyBubyB0eXBlIGRlY2xhcmVkLlxuICAgKi9cbiAgdHlwZU5vZGU6IHRzLlR5cGVOb2RlfG51bGw7XG5cbiAgLyoqXG4gICAqIEFueSBgRGVjb3JhdG9yYHMgd2hpY2ggYXJlIHByZXNlbnQgb24gdGhlIHBhcmFtZXRlciwgb3IgYG51bGxgIGlmIG5vbmUgYXJlIHByZXNlbnQuXG4gICAqL1xuICBkZWNvcmF0b3JzOiBEZWNvcmF0b3JbXXxudWxsO1xufVxuXG4vKipcbiAqIERlZmluaXRpb24gb2YgYSBmdW5jdGlvbiBvciBtZXRob2QsIGluY2x1ZGluZyBpdHMgYm9keSBpZiBwcmVzZW50IGFuZCBhbnkgcGFyYW1ldGVycy5cbiAqXG4gKiBJbiBUeXBlU2NyaXB0IGNvZGUgdGhpcyBtZXRhZGF0YSB3aWxsIGJlIGEgc2ltcGxlIHJlZmxlY3Rpb24gb2YgdGhlIGRlY2xhcmF0aW9ucyBpbiB0aGUgbm9kZVxuICogaXRzZWxmLiBJbiBFUzUgY29kZSB0aGlzIGNhbiBiZSBtb3JlIGNvbXBsaWNhdGVkLCBhcyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHBhcmFtZXRlcnMgbWF5XG4gKiBiZSBleHRyYWN0ZWQgZnJvbSBjZXJ0YWluIGJvZHkgc3RhdGVtZW50cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvbkRlZmluaXRpb24ge1xuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG5vZGUgd2hpY2ggZGVjbGFyZXMgdGhlIGZ1bmN0aW9uLlxuICAgKi9cbiAgbm9kZTogdHMuTWV0aG9kRGVjbGFyYXRpb258dHMuRnVuY3Rpb25EZWNsYXJhdGlvbnx0cy5GdW5jdGlvbkV4cHJlc3Npb258dHMuVmFyaWFibGVEZWNsYXJhdGlvbjtcblxuICAvKipcbiAgICogU3RhdGVtZW50cyBvZiB0aGUgZnVuY3Rpb24gYm9keSwgaWYgYSBib2R5IGlzIHByZXNlbnQsIG9yIG51bGwgaWYgbm8gYm9keSBpcyBwcmVzZW50IG9yIHRoZVxuICAgKiBmdW5jdGlvbiBpcyBpZGVudGlmaWVkIHRvIHJlcHJlc2VudCBhIHRzbGliIGhlbHBlciBmdW5jdGlvbiwgaW4gd2hpY2ggY2FzZSBgaGVscGVyYCB3aWxsXG4gICAqIGluZGljYXRlIHdoaWNoIGhlbHBlciB0aGlzIGZ1bmN0aW9uIHJlcHJlc2VudHMuXG4gICAqXG4gICAqIFRoaXMgbGlzdCBtYXkgaGF2ZSBiZWVuIGZpbHRlcmVkIHRvIGV4Y2x1ZGUgc3RhdGVtZW50cyB3aGljaCBwZXJmb3JtIHBhcmFtZXRlciBkZWZhdWx0IHZhbHVlXG4gICAqIGluaXRpYWxpemF0aW9uLlxuICAgKi9cbiAgYm9keTogdHMuU3RhdGVtZW50W118bnVsbDtcblxuICAvKipcbiAgICogTWV0YWRhdGEgcmVnYXJkaW5nIHRoZSBmdW5jdGlvbidzIHBhcmFtZXRlcnMsIGluY2x1ZGluZyBwb3NzaWJsZSBkZWZhdWx0IHZhbHVlIGV4cHJlc3Npb25zLlxuICAgKi9cbiAgcGFyYW1ldGVyczogUGFyYW1ldGVyW107XG59XG5cbi8qKlxuICogUG9zc2libGUgZGVjbGFyYXRpb25zIG9mIGtub3duIHZhbHVlcywgc3VjaCBhcyBidWlsdC1pbiBvYmplY3RzL2Z1bmN0aW9ucyBvciBUeXBlU2NyaXB0IGhlbHBlcnMuXG4gKi9cbmV4cG9ydCBlbnVtIEtub3duRGVjbGFyYXRpb24ge1xuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBKYXZhU2NyaXB0IGdsb2JhbCBgT2JqZWN0YCBjbGFzcy5cbiAgICovXG4gIEpzR2xvYmFsT2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGBfX2Fzc2lnbmAgVHlwZVNjcmlwdCBoZWxwZXIgZnVuY3Rpb24uXG4gICAqL1xuICBUc0hlbHBlckFzc2lnbixcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBgX19zcHJlYWRgIFR5cGVTY3JpcHQgaGVscGVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgVHNIZWxwZXJTcHJlYWQsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgYF9fc3ByZWFkQXJyYXlzYCBUeXBlU2NyaXB0IGhlbHBlciBmdW5jdGlvbi5cbiAgICovXG4gIFRzSGVscGVyU3ByZWFkQXJyYXlzLFxufVxuXG4vKipcbiAqIEEgcGFyYW1ldGVyIHRvIGEgZnVuY3Rpb24gb3IgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtZXRlciB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBwYXJhbWV0ZXIsIGlmIGF2YWlsYWJsZS5cbiAgICovXG4gIG5hbWU6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBEZWNsYXJhdGlvbiB3aGljaCBjcmVhdGVkIHRoaXMgcGFyYW1ldGVyLlxuICAgKi9cbiAgbm9kZTogdHMuUGFyYW1ldGVyRGVjbGFyYXRpb247XG5cbiAgLyoqXG4gICAqIEV4cHJlc3Npb24gd2hpY2ggcmVwcmVzZW50cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyLCBpZiBhbnkuXG4gICAqL1xuICBpbml0aWFsaXplcjogdHMuRXhwcmVzc2lvbnxudWxsO1xufVxuXG4vKipcbiAqIFRoZSBzb3VyY2Ugb2YgYW4gaW1wb3J0ZWQgc3ltYm9sLCBpbmNsdWRpbmcgdGhlIG9yaWdpbmFsIHN5bWJvbCBuYW1lIGFuZCB0aGUgbW9kdWxlIGZyb20gd2hpY2ggaXRcbiAqIHdhcyBpbXBvcnRlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbXBvcnQge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGltcG9ydGVkIHN5bWJvbCB1bmRlciB3aGljaCBpdCB3YXMgZXhwb3J0ZWQgKG5vdCBpbXBvcnRlZCkuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBtb2R1bGUgZnJvbSB3aGljaCB0aGUgc3ltYm9sIHdhcyBpbXBvcnRlZC5cbiAgICpcbiAgICogVGhpcyBjb3VsZCBlaXRoZXIgYmUgYW4gYWJzb2x1dGUgbW9kdWxlIG5hbWUgKEBhbmd1bGFyL2NvcmUgZm9yIGV4YW1wbGUpIG9yIGEgcmVsYXRpdmUgcGF0aC5cbiAgICovXG4gIGZyb206IHN0cmluZztcbn1cblxuLyoqXG4gKiBCYXNlIHR5cGUgZm9yIGFsbCBgRGVjbGFyYXRpb25gcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYXNlRGVjbGFyYXRpb248VCBleHRlbmRzIHRzLkRlY2xhcmF0aW9uID0gdHMuRGVjbGFyYXRpb24+IHtcbiAgLyoqXG4gICAqIFRoZSBhYnNvbHV0ZSBtb2R1bGUgcGF0aCBmcm9tIHdoaWNoIHRoZSBzeW1ib2wgd2FzIGltcG9ydGVkIGludG8gdGhlIGFwcGxpY2F0aW9uLCBpZiB0aGUgc3ltYm9sXG4gICAqIHdhcyBpbXBvcnRlZCB2aWEgYW4gYWJzb2x1dGUgbW9kdWxlIChldmVuIHRocm91Z2ggYSBjaGFpbiBvZiByZS1leHBvcnRzKS4gSWYgdGhlIHN5bWJvbCBpcyBwYXJ0XG4gICAqIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgd2FzIG5vdCBpbXBvcnRlZCBmcm9tIGFuIGFic29sdXRlIHBhdGgsIHRoaXMgd2lsbCBiZSBgbnVsbGAuXG4gICAqL1xuICB2aWFNb2R1bGU6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBUeXBlU2NyaXB0IHJlZmVyZW5jZSB0byB0aGUgZGVjbGFyYXRpb24gaXRzZWxmLCBpZiBvbmUgZXhpc3RzLlxuICAgKi9cbiAgbm9kZTogVHxudWxsO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQsIGRlc2NyaWJlcyB0aGUgdHlwZSBvZiB0aGUga25vd24gZGVjbGFyYXRpb24gdGhpcyBkZWNsYXJhdGlvbiByZXNvbHZlcyB0by5cbiAgICovXG4gIGtub3duOiBLbm93bkRlY2xhcmF0aW9ufG51bGw7XG59XG5cbi8qKlxuICogQSBkZWNsYXJhdGlvbiB0aGF0IGhhcyBhbiBhc3NvY2lhdGVkIFR5cGVTY3JpcHQgYHRzLkRlY2xhcmF0aW9uYC5cbiAqXG4gKiBUaGUgYWx0ZXJuYXRpdmUgaXMgYW4gYElubGluZURlY2xhcmF0aW9uYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25jcmV0ZURlY2xhcmF0aW9uPFQgZXh0ZW5kcyB0cy5EZWNsYXJhdGlvbiA9IHRzLkRlY2xhcmF0aW9uPiBleHRlbmRzXG4gICAgQmFzZURlY2xhcmF0aW9uPFQ+IHtcbiAgbm9kZTogVDtcbn1cblxuLyoqXG4gKiBBIGRlY2xhcmF0aW9uIHRoYXQgZG9lcyBub3QgaGF2ZSBhbiBhc3NvY2lhdGVkIFR5cGVTY3JpcHQgYHRzLkRlY2xhcmF0aW9uYCwgb25seSBhXG4gKiBgdHMuRXhwcmVzc2lvbmAuXG4gKlxuICogVGhpcyBjYW4gb2NjdXIgaW4gc29tZSBkb3dubGV2ZWxpbmdzIHdoZW4gYW4gYGV4cG9ydCBjb25zdCBWQVIgPSAuLi47YCAoYSBgdHMuRGVjbGFyYXRpb25gKSBpc1xuICogdHJhbnNwaWxlZCB0byBhbiBhc3NpZ25tZW50IHN0YXRlbWVudCAoZS5nLiBgZXhwb3J0cy5WQVIgPSAuLi47YCkuIFRoZXJlIGlzIG5vIGB0cy5EZWNsYXJhdGlvbmBcbiAqIGFzc29jaWF0ZWQgd2l0aCBgVkFSYCBpbiB0aGF0IGNhc2UsIG9ubHkgYW4gZXhwcmVzc2lvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmxpbmVEZWNsYXJhdGlvbiBleHRlbmRzIEJhc2VEZWNsYXJhdGlvbiB7XG4gIG5vZGU6IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBgdHMuRXhwcmVzc2lvbmAgd2hpY2ggY29uc3RpdHV0ZXMgdGhlIHZhbHVlIG9mIHRoZSBkZWNsYXJhdGlvbi5cbiAgICovXG4gIGV4cHJlc3Npb246IHRzLkV4cHJlc3Npb247XG59XG5cbi8qKlxuICogVGhlIGRlY2xhcmF0aW9uIG9mIGEgc3ltYm9sLCBhbG9uZyB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGhvdyBpdCB3YXMgaW1wb3J0ZWQgaW50byB0aGVcbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIFRoaXMgY2FuIGVpdGhlciBiZSBhIGBDb25jcmV0ZURlY2xhcmF0aW9uYCBpZiB0aGUgdW5kZXJseWluZyBUeXBlU2NyaXB0IG5vZGUgZm9yIHRoZSBzeW1ib2wgaXMgYW5cbiAqIGFjdHVhbCBgdHMuRGVjbGFyYXRpb25gLCBvciBhbiBgSW5saW5lRGVjbGFyYXRpb25gIGlmIHRoZSBkZWNsYXJhdGlvbiB3YXMgdHJhbnNwaWxlZCBpbiBjZXJ0YWluXG4gKiBkb3dubGV2ZWxpbmdzIHRvIGEgYHRzLkV4cHJlc3Npb25gIGluc3RlYWQuXG4gKi9cbmV4cG9ydCB0eXBlIERlY2xhcmF0aW9uPFQgZXh0ZW5kcyB0cy5EZWNsYXJhdGlvbiA9IHRzLkRlY2xhcmF0aW9uPiA9XG4gICAgQ29uY3JldGVEZWNsYXJhdGlvbjxUPnwgSW5saW5lRGVjbGFyYXRpb247XG5cbi8qKlxuICogQWJzdHJhY3RzIHJlZmxlY3Rpb24gb3BlcmF0aW9ucyBvbiBhIFR5cGVTY3JpcHQgQVNULlxuICpcbiAqIERlcGVuZGluZyBvbiB0aGUgZm9ybWF0IG9mIHRoZSBjb2RlIGJlaW5nIGludGVycHJldGVkLCBkaWZmZXJlbnQgY29uY2VwdHMgYXJlIHJlcHJlc2VudGVkXG4gKiB3aXRoIGRpZmZlcmVudCBzeW50YWN0aWNhbCBzdHJ1Y3R1cmVzLiBUaGUgYFJlZmxlY3Rpb25Ib3N0YCBhYnN0cmFjdHMgb3ZlciB0aG9zZSBkaWZmZXJlbmNlcyBhbmRcbiAqIHByZXNlbnRzIGEgc2luZ2xlIEFQSSBieSB3aGljaCB0aGUgY29tcGlsZXIgY2FuIHF1ZXJ5IHNwZWNpZmljIGluZm9ybWF0aW9uIGFib3V0IHRoZSBBU1QuXG4gKlxuICogQWxsIG9wZXJhdGlvbnMgb24gdGhlIGBSZWZsZWN0aW9uSG9zdGAgcmVxdWlyZSB0aGUgdXNlIG9mIFR5cGVTY3JpcHQgYHRzLk5vZGVgcyB3aXRoIGJpbmRpbmdcbiAqIGluZm9ybWF0aW9uIGFscmVhZHkgYXZhaWxhYmxlICh0aGF0IGlzLCBub2RlcyB0aGF0IGNvbWUgZnJvbSBhIGB0cy5Qcm9ncmFtYCB0aGF0IGhhcyBiZWVuXG4gKiB0eXBlLWNoZWNrZWQsIGFuZCBhcmUgbm90IHN5bnRoZXRpY2FsbHkgY3JlYXRlZCkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmbGVjdGlvbkhvc3Qge1xuICAvKipcbiAgICogRXhhbWluZSBhIGRlY2xhcmF0aW9uIChmb3IgZXhhbXBsZSwgb2YgYSBjbGFzcyBvciBmdW5jdGlvbikgYW5kIHJldHVybiBtZXRhZGF0YSBhYm91dCBhbnlcbiAgICogZGVjb3JhdG9ycyBwcmVzZW50IG9uIHRoZSBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRlY2xhcmF0aW9uIGEgVHlwZVNjcmlwdCBgdHMuRGVjbGFyYXRpb25gIG5vZGUgcmVwcmVzZW50aW5nIHRoZSBjbGFzcyBvciBmdW5jdGlvbiBvdmVyXG4gICAqIHdoaWNoIHRvIHJlZmxlY3QuIEZvciBleGFtcGxlLCBpZiB0aGUgaW50ZW50IGlzIHRvIHJlZmxlY3QgdGhlIGRlY29yYXRvcnMgb2YgYSBjbGFzcyBhbmQgdGhlXG4gICAqIHNvdXJjZSBpcyBpbiBFUzYgZm9ybWF0LCB0aGlzIHdpbGwgYmUgYSBgdHMuQ2xhc3NEZWNsYXJhdGlvbmAgbm9kZS4gSWYgdGhlIHNvdXJjZSBpcyBpbiBFUzVcbiAgICogZm9ybWF0LCB0aGlzIG1pZ2h0IGJlIGEgYHRzLlZhcmlhYmxlRGVjbGFyYXRpb25gIGFzIGNsYXNzZXMgaW4gRVM1IGFyZSByZXByZXNlbnRlZCBhcyB0aGVcbiAgICogcmVzdWx0IG9mIGFuIElJRkUgZXhlY3V0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBhbiBhcnJheSBvZiBgRGVjb3JhdG9yYCBtZXRhZGF0YSBpZiBkZWNvcmF0b3JzIGFyZSBwcmVzZW50IG9uIHRoZSBkZWNsYXJhdGlvbiwgb3JcbiAgICogYG51bGxgIGlmIGVpdGhlciBubyBkZWNvcmF0b3JzIHdlcmUgcHJlc2VudCBvciBpZiB0aGUgZGVjbGFyYXRpb24gaXMgbm90IG9mIGEgZGVjb3JhdGFibGUgdHlwZS5cbiAgICovXG4gIGdldERlY29yYXRvcnNPZkRlY2xhcmF0aW9uKGRlY2xhcmF0aW9uOiB0cy5EZWNsYXJhdGlvbik6IERlY29yYXRvcltdfG51bGw7XG5cbiAgLyoqXG4gICAqIEV4YW1pbmUgYSBkZWNsYXJhdGlvbiB3aGljaCBzaG91bGQgYmUgb2YgYSBjbGFzcywgYW5kIHJldHVybiBtZXRhZGF0YSBhYm91dCB0aGUgbWVtYmVycyBvZiB0aGVcbiAgICogY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBjbGF6eiBhIGBDbGFzc0RlY2xhcmF0aW9uYCByZXByZXNlbnRpbmcgdGhlIGNsYXNzIG92ZXIgd2hpY2ggdG8gcmVmbGVjdC5cbiAgICpcbiAgICogQHJldHVybnMgYW4gYXJyYXkgb2YgYENsYXNzTWVtYmVyYCBtZXRhZGF0YSByZXByZXNlbnRpbmcgdGhlIG1lbWJlcnMgb2YgdGhlIGNsYXNzLlxuICAgKlxuICAgKiBAdGhyb3dzIGlmIGBkZWNsYXJhdGlvbmAgZG9lcyBub3QgcmVzb2x2ZSB0byBhIGNsYXNzIGRlY2xhcmF0aW9uLlxuICAgKi9cbiAgZ2V0TWVtYmVyc09mQ2xhc3MoY2xheno6IENsYXNzRGVjbGFyYXRpb24pOiBDbGFzc01lbWJlcltdO1xuXG4gIC8qKlxuICAgKiBSZWZsZWN0IG92ZXIgdGhlIGNvbnN0cnVjdG9yIG9mIGEgY2xhc3MgYW5kIHJldHVybiBtZXRhZGF0YSBhYm91dCBpdHMgcGFyYW1ldGVycy5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgb25seSBsb29rcyBhdCB0aGUgY29uc3RydWN0b3Igb2YgYSBjbGFzcyBkaXJlY3RseSBhbmQgbm90IGF0IGFueSBpbmhlcml0ZWRcbiAgICogY29uc3RydWN0b3JzLlxuICAgKlxuICAgKiBAcGFyYW0gY2xhenogYSBgQ2xhc3NEZWNsYXJhdGlvbmAgcmVwcmVzZW50aW5nIHRoZSBjbGFzcyBvdmVyIHdoaWNoIHRvIHJlZmxlY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIGBQYXJhbWV0ZXJgIG1ldGFkYXRhIHJlcHJlc2VudGluZyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgY29uc3RydWN0b3IsIGlmXG4gICAqIGEgY29uc3RydWN0b3IgZXhpc3RzLiBJZiB0aGUgY29uc3RydWN0b3IgZXhpc3RzIGFuZCBoYXMgMCBwYXJhbWV0ZXJzLCB0aGlzIGFycmF5IHdpbGwgYmUgZW1wdHkuXG4gICAqIElmIHRoZSBjbGFzcyBoYXMgbm8gY29uc3RydWN0b3IsIHRoaXMgbWV0aG9kIHJldHVybnMgYG51bGxgLlxuICAgKi9cbiAgZ2V0Q29uc3RydWN0b3JQYXJhbWV0ZXJzKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogQ3RvclBhcmFtZXRlcltdfG51bGw7XG5cbiAgLyoqXG4gICAqIFJlZmxlY3Qgb3ZlciBhIGZ1bmN0aW9uIGFuZCByZXR1cm4gbWV0YWRhdGEgYWJvdXQgaXRzIHBhcmFtZXRlcnMgYW5kIGJvZHkuXG4gICAqXG4gICAqIEZ1bmN0aW9ucyBpbiBUeXBlU2NyaXB0IGFuZCBFUzUgY29kZSBoYXZlIGRpZmZlcmVudCBBU1QgcmVwcmVzZW50YXRpb25zLCBpbiBwYXJ0aWN1bGFyIGFyb3VuZFxuICAgKiBkZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVycy4gQSBUeXBlU2NyaXB0IGZ1bmN0aW9uIGhhcyBpdHMgZGVmYXVsdCB2YWx1ZSBhcyB0aGUgaW5pdGlhbGl6ZXJcbiAgICogb24gdGhlIHBhcmFtZXRlciBkZWNsYXJhdGlvbiwgd2hlcmVhcyBhbiBFUzUgZnVuY3Rpb24gaGFzIGl0cyBkZWZhdWx0IHZhbHVlIHNldCBpbiBhIHN0YXRlbWVudFxuICAgKiBvZiB0aGUgZm9ybTpcbiAgICpcbiAgICogaWYgKHBhcmFtID09PSB2b2lkIDApIHsgcGFyYW0gPSAzOyB9XG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFic3RyYWN0cyBvdmVyIHRoZXNlIGRldGFpbHMsIGFuZCBpbnRlcnByZXRzIHRoZSBmdW5jdGlvbiBkZWNsYXJhdGlvbiBhbmQgYm9keSB0b1xuICAgKiBleHRyYWN0IHBhcmFtZXRlciBkZWZhdWx0IHZhbHVlcyBhbmQgdGhlIFwicmVhbFwiIGJvZHkuXG4gICAqXG4gICAqIEEgY3VycmVudCBsaW1pdGF0aW9uIGlzIHRoYXQgdGhpcyBtZXRhZGF0YSBoYXMgbm8gcmVwcmVzZW50YXRpb24gZm9yIHNob3J0aGFuZCBhc3NpZ25tZW50IG9mXG4gICAqIHBhcmFtZXRlciBvYmplY3RzIGluIHRoZSBmdW5jdGlvbiBzaWduYXR1cmUuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBhIFR5cGVTY3JpcHQgYHRzLkRlY2xhcmF0aW9uYCBub2RlIHJlcHJlc2VudGluZyB0aGUgZnVuY3Rpb24gb3ZlciB3aGljaCB0byByZWZsZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBhIGBGdW5jdGlvbkRlZmluaXRpb25gIGdpdmluZyBtZXRhZGF0YSBhYm91dCB0aGUgZnVuY3Rpb24gZGVmaW5pdGlvbi5cbiAgICovXG4gIGdldERlZmluaXRpb25PZkZ1bmN0aW9uKGZuOiB0cy5Ob2RlKTogRnVuY3Rpb25EZWZpbml0aW9ufG51bGw7XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhbiBpZGVudGlmaWVyIHdhcyBpbXBvcnRlZCBmcm9tIGFub3RoZXIgbW9kdWxlIGFuZCByZXR1cm4gYEltcG9ydGAgbWV0YWRhdGFcbiAgICogZGVzY3JpYmluZyBpdHMgb3JpZ2luLlxuICAgKlxuICAgKiBAcGFyYW0gaWQgYSBUeXBlU2NyaXB0IGB0cy5JZGVudGlmZXJgIHRvIHJlZmxlY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIG1ldGFkYXRhIGFib3V0IHRoZSBgSW1wb3J0YCBpZiB0aGUgaWRlbnRpZmllciB3YXMgaW1wb3J0ZWQgZnJvbSBhbm90aGVyIG1vZHVsZSwgb3JcbiAgICogYG51bGxgIGlmIHRoZSBpZGVudGlmaWVyIGRvZXNuJ3QgcmVzb2x2ZSB0byBhbiBpbXBvcnQgYnV0IGluc3RlYWQgaXMgbG9jYWxseSBkZWZpbmVkLlxuICAgKi9cbiAgZ2V0SW1wb3J0T2ZJZGVudGlmaWVyKGlkOiB0cy5JZGVudGlmaWVyKTogSW1wb3J0fG51bGw7XG5cbiAgLyoqXG4gICAqIFRyYWNlIGFuIGlkZW50aWZpZXIgdG8gaXRzIGRlY2xhcmF0aW9uLCBpZiBwb3NzaWJsZS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgYXR0ZW1wdHMgdG8gcmVzb2x2ZSB0aGUgZGVjbGFyYXRpb24gb2YgdGhlIGdpdmVuIGlkZW50aWZpZXIsIHRyYWNpbmcgYmFjayB0aHJvdWdoXG4gICAqIGltcG9ydHMgYW5kIHJlLWV4cG9ydHMgdW50aWwgdGhlIG9yaWdpbmFsIGRlY2xhcmF0aW9uIHN0YXRlbWVudCBpcyBmb3VuZC4gQSBgRGVjbGFyYXRpb25gXG4gICAqIG9iamVjdCBpcyByZXR1cm5lZCBpZiB0aGUgb3JpZ2luYWwgZGVjbGFyYXRpb24gaXMgZm91bmQsIG9yIGBudWxsYCBpcyByZXR1cm5lZCBvdGhlcndpc2UuXG4gICAqXG4gICAqIElmIHRoZSBkZWNsYXJhdGlvbiBpcyBpbiBhIGRpZmZlcmVudCBtb2R1bGUsIGFuZCB0aGF0IG1vZHVsZSBpcyBpbXBvcnRlZCB2aWEgYW4gYWJzb2x1dGUgcGF0aCxcbiAgICogdGhpcyBtZXRob2QgYWxzbyByZXR1cm5zIHRoZSBhYnNvbHV0ZSBwYXRoIG9mIHRoZSBpbXBvcnRlZCBtb2R1bGUuIEZvciBleGFtcGxlLCBpZiB0aGUgY29kZSBpczpcbiAgICpcbiAgICogYGBgXG4gICAqIGltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAgICpcbiAgICogZXhwb3J0IGNvbnN0IFJPVVRFUyA9IFJvdXRlck1vZHVsZS5mb3JSb290KFsuLi5dKTtcbiAgICogYGBgXG4gICAqXG4gICAqIGFuZCBpZiBgZ2V0RGVjbGFyYXRpb25PZklkZW50aWZpZXJgIGlzIGNhbGxlZCBvbiBgUm91dGVyTW9kdWxlYCBpbiB0aGUgYFJPVVRFU2AgZXhwcmVzc2lvbixcbiAgICogdGhlbiBpdCB3b3VsZCB0cmFjZSBgUm91dGVyTW9kdWxlYCB2aWEgaXRzIGltcG9ydCBmcm9tIGBAYW5ndWxhci9jb3JlYCwgYW5kIG5vdGUgdGhhdCB0aGVcbiAgICogZGVmaW5pdGlvbiB3YXMgaW1wb3J0ZWQgZnJvbSBgQGFuZ3VsYXIvY29yZWAgaW50byB0aGUgYXBwbGljYXRpb24gd2hlcmUgaXQgd2FzIHJlZmVyZW5jZWQuXG4gICAqXG4gICAqIElmIHRoZSBkZWZpbml0aW9uIGlzIHJlLWV4cG9ydGVkIHNldmVyYWwgdGltZXMgZnJvbSBkaWZmZXJlbnQgYWJzb2x1dGUgbW9kdWxlIG5hbWVzLCBvbmx5XG4gICAqIHRoZSBmaXJzdCBvbmUgKHRoZSBvbmUgYnkgd2hpY2ggdGhlIGFwcGxpY2F0aW9uIHJlZmVycyB0byB0aGUgbW9kdWxlKSBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogVGhpcyBtb2R1bGUgbmFtZSBpcyByZXR1cm5lZCBpbiB0aGUgYHZpYU1vZHVsZWAgZmllbGQgb2YgdGhlIGBEZWNsYXJhdGlvbmAuIElmIFRoZSBkZWNsYXJhdGlvblxuICAgKiBpcyByZWxhdGl2ZSB0byB0aGUgYXBwbGljYXRpb24gaXRzZWxmIGFuZCB0aGVyZSB3YXMgbm8gaW1wb3J0IHRocm91Z2ggYW4gYWJzb2x1dGUgcGF0aCwgdGhlblxuICAgKiBgdmlhTW9kdWxlYCBpcyBgbnVsbGAuXG4gICAqXG4gICAqIEBwYXJhbSBpZCBhIFR5cGVTY3JpcHQgYHRzLklkZW50aWZpZXJgIHRvIHRyYWNlIGJhY2sgdG8gYSBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgbWV0YWRhdGEgYWJvdXQgdGhlIGBEZWNsYXJhdGlvbmAgaWYgdGhlIG9yaWdpbmFsIGRlY2xhcmF0aW9uIGlzIGZvdW5kLCBvciBgbnVsbGBcbiAgICogb3RoZXJ3aXNlLlxuICAgKi9cbiAgZ2V0RGVjbGFyYXRpb25PZklkZW50aWZpZXIoaWQ6IHRzLklkZW50aWZpZXIpOiBEZWNsYXJhdGlvbnxudWxsO1xuXG4gIC8qKlxuICAgKiBDb2xsZWN0IHRoZSBkZWNsYXJhdGlvbnMgZXhwb3J0ZWQgZnJvbSBhIG1vZHVsZSBieSBuYW1lLlxuICAgKlxuICAgKiBJdGVyYXRlcyBvdmVyIHRoZSBleHBvcnRzIG9mIGEgbW9kdWxlIChpbmNsdWRpbmcgcmUtZXhwb3J0cykgYW5kIHJldHVybnMgYSBtYXAgb2YgZXhwb3J0XG4gICAqIG5hbWUgdG8gaXRzIGBEZWNsYXJhdGlvbmAuIElmIGFuIGV4cG9ydGVkIHZhbHVlIGlzIGl0c2VsZiByZS1leHBvcnRlZCBmcm9tIGFub3RoZXIgbW9kdWxlLFxuICAgKiB0aGUgYERlY2xhcmF0aW9uYCdzIGB2aWFNb2R1bGVgIHdpbGwgcmVmbGVjdCB0aGF0LlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZSBhIFR5cGVTY3JpcHQgYHRzLk5vZGVgIHJlcHJlc2VudGluZyB0aGUgbW9kdWxlIChmb3IgZXhhbXBsZSBhIGB0cy5Tb3VyY2VGaWxlYCkgZm9yXG4gICAqIHdoaWNoIHRvIGNvbGxlY3QgZXhwb3J0cy5cbiAgICpcbiAgICogQHJldHVybnMgYSBtYXAgb2YgYERlY2xhcmF0aW9uYHMgZm9yIHRoZSBtb2R1bGUncyBleHBvcnRzLCBieSBuYW1lLlxuICAgKi9cbiAgZ2V0RXhwb3J0c09mTW9kdWxlKG1vZHVsZTogdHMuTm9kZSk6IE1hcDxzdHJpbmcsIERlY2xhcmF0aW9uPnxudWxsO1xuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiBub2RlIGFjdHVhbGx5IHJlcHJlc2VudHMgYSBjbGFzcy5cbiAgICovXG4gIGlzQ2xhc3Mobm9kZTogdHMuTm9kZSk6IG5vZGUgaXMgQ2xhc3NEZWNsYXJhdGlvbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBkZWNsYXJhdGlvbiwgd2hpY2ggc2hvdWxkIGJlIGEgY2xhc3MsIGhhcyBhIGJhc2UgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBjbGF6eiBhIGBDbGFzc0RlY2xhcmF0aW9uYCByZXByZXNlbnRpbmcgdGhlIGNsYXNzIG92ZXIgd2hpY2ggdG8gcmVmbGVjdC5cbiAgICovXG4gIGhhc0Jhc2VDbGFzcyhjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbik6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEdldCBhbiBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgYmFzZSBjbGFzcyAoaWYgYW55KSBvZiB0aGUgZ2l2ZW4gYGNsYXp6YC5cbiAgICpcbiAgICogVGhpcyBleHByZXNzaW9uIGlzIG1vc3QgY29tbW9ubHkgYW4gSWRlbnRpZmllciwgYnV0IGlzIHBvc3NpYmxlIHRvIGluaGVyaXQgZnJvbSBhIG1vcmUgZHluYW1pY1xuICAgKiBleHByZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gY2xhenogdGhlIGNsYXNzIHdob3NlIGJhc2Ugd2Ugd2FudCB0byBnZXQuXG4gICAqL1xuICBnZXRCYXNlQ2xhc3NFeHByZXNzaW9uKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogdHMuRXhwcmVzc2lvbnxudWxsO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiBnZW5lcmljIHR5cGUgcGFyYW1ldGVycyBvZiBhIGdpdmVuIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0gY2xhenogYSBgQ2xhc3NEZWNsYXJhdGlvbmAgcmVwcmVzZW50aW5nIHRoZSBjbGFzcyBvdmVyIHdoaWNoIHRvIHJlZmxlY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBudW1iZXIgb2YgdHlwZSBwYXJhbWV0ZXJzIG9mIHRoZSBjbGFzcywgaWYga25vd24sIG9yIGBudWxsYCBpZiB0aGUgZGVjbGFyYXRpb25cbiAgICogaXMgbm90IGEgY2xhc3Mgb3IgaGFzIGFuIHVua25vd24gbnVtYmVyIG9mIHR5cGUgcGFyYW1ldGVycy5cbiAgICovXG4gIGdldEdlbmVyaWNBcml0eU9mQ2xhc3MoY2xheno6IENsYXNzRGVjbGFyYXRpb24pOiBudW1iZXJ8bnVsbDtcblxuICAvKipcbiAgICogRmluZCB0aGUgYXNzaWduZWQgdmFsdWUgb2YgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogTm9ybWFsbHkgdGhpcyB3aWxsIGJlIHRoZSBpbml0aWFsaXplciBvZiB0aGUgZGVjbGFyYXRpb24sIGJ1dCB3aGVyZSB0aGUgdmFyaWFibGUgaXNcbiAgICogbm90IGEgYGNvbnN0YCB3ZSBtYXkgbmVlZCB0byBsb29rIGVsc2V3aGVyZSBmb3IgdGhlIHZhcmlhYmxlJ3MgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSBkZWNsYXJhdGlvbiBhIFR5cGVTY3JpcHQgdmFyaWFibGUgZGVjbGFyYXRpb24sIHdob3NlIHZhbHVlIHdlIHdhbnQuXG4gICAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUsIGFzIGEgVHlwZVNjcmlwdCBleHByZXNzaW9uIG5vZGUsIG9yIGB1bmRlZmluZWRgXG4gICAqIGlmIHRoZSB2YWx1ZSBjYW5ub3QgYmUgY29tcHV0ZWQuXG4gICAqL1xuICBnZXRWYXJpYWJsZVZhbHVlKGRlY2xhcmF0aW9uOiB0cy5WYXJpYWJsZURlY2xhcmF0aW9uKTogdHMuRXhwcmVzc2lvbnxudWxsO1xuXG4gIC8qKlxuICAgKiBUYWtlIGFuIGV4cG9ydGVkIGRlY2xhcmF0aW9uIChtYXliZSBhIGNsYXNzIGRvd24tbGV2ZWxlZCB0byBhIHZhcmlhYmxlKSBhbmQgbG9vayB1cCB0aGVcbiAgICogZGVjbGFyYXRpb24gb2YgaXRzIHR5cGUgaW4gYSBzZXBhcmF0ZSAuZC50cyB0cmVlLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGFsbG93ZWQgdG8gcmV0dXJuIGBudWxsYCBpZiB0aGUgY3VycmVudCBjb21waWxhdGlvbiB1bml0IGRvZXMgbm90IGhhdmUgYVxuICAgKiBzZXBhcmF0ZSAuZC50cyB0cmVlLiBXaGVuIGNvbXBpbGluZyBUeXBlU2NyaXB0IGNvZGUgdGhpcyBpcyBhbHdheXMgdGhlIGNhc2UsIHNpbmNlIC5kLnRzIGZpbGVzXG4gICAqIGFyZSBwcm9kdWNlZCBvbmx5IGR1cmluZyB0aGUgZW1pdCBvZiBzdWNoIGEgY29tcGlsYXRpb24uIFdoZW4gY29tcGlsaW5nIC5qcyBjb2RlLCBob3dldmVyLFxuICAgKiB0aGVyZSBpcyBmcmVxdWVudGx5IGEgcGFyYWxsZWwgLmQudHMgdHJlZSB3aGljaCB0aGlzIG1ldGhvZCBleHBvc2VzLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIGB0cy5EZWNsYXJhdGlvbmAgcmV0dXJuZWQgZnJvbSB0aGlzIGZ1bmN0aW9uIG1heSBub3QgYmUgZnJvbSB0aGUgc2FtZVxuICAgKiBgdHMuUHJvZ3JhbWAgYXMgdGhlIGlucHV0IGRlY2xhcmF0aW9uLlxuICAgKi9cbiAgZ2V0RHRzRGVjbGFyYXRpb24oZGVjbGFyYXRpb246IHRzLkRlY2xhcmF0aW9uKTogdHMuRGVjbGFyYXRpb258bnVsbDtcblxuICAvKipcbiAgICogR2V0IGEgYHRzLklkZW50aWZpZXJgIGZvciBhIGdpdmVuIGBDbGFzc0RlY2xhcmF0aW9uYCB3aGljaCBjYW4gYmUgdXNlZCB0byByZWZlciB0byB0aGUgY2xhc3NcbiAgICogd2l0aGluIGl0cyBkZWZpbml0aW9uIChzdWNoIGFzIGluIHN0YXRpYyBmaWVsZHMpLlxuICAgKlxuICAgKiBUaGlzIGNhbiBkaWZmZXIgZnJvbSBgY2xhenoubmFtZWAgd2hlbiBuZ2NjIHJ1bnMgb3ZlciBFUzUgY29kZSwgc2luY2UgdGhlIGNsYXNzIG1heSBoYXZlIGFcbiAgICogZGlmZmVyZW50IG5hbWUgd2l0aGluIGl0cyBJSUZFIHdyYXBwZXIgdGhhbiBpdCBkb2VzIGV4dGVybmFsbHkuXG4gICAqL1xuICBnZXRJbnRlcm5hbE5hbWVPZkNsYXNzKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogdHMuSWRlbnRpZmllcjtcblxuICAvKipcbiAgICogR2V0IGEgYHRzLklkZW50aWZpZXJgIGZvciBhIGdpdmVuIGBDbGFzc0RlY2xhcmF0aW9uYCB3aGljaCBjYW4gYmUgdXNlZCB0byByZWZlciB0byB0aGUgY2xhc3NcbiAgICogZnJvbSBzdGF0ZW1lbnRzIHRoYXQgYXJlIFwiYWRqYWNlbnRcIiwgYW5kIGNvbmNlcHR1YWxseSB0aWdodGx5IGJvdW5kLCB0byB0aGUgY2xhc3MgYnV0IG5vdFxuICAgKiBhY3R1YWxseSBpbnNpZGUgaXQuXG4gICAqXG4gICAqIFNpbWlsYXIgdG8gYGdldEludGVybmFsTmFtZU9mQ2xhc3MoKWAsIHRoaXMgbmFtZSBjYW4gZGlmZmVyIGZyb20gYGNsYXp6Lm5hbWVgIHdoZW4gbmdjYyBydW5zXG4gICAqIG92ZXIgRVM1IGNvZGUsIHNpbmNlIHRoZXNlIFwiYWRqYWNlbnRcIiBzdGF0ZW1lbnRzIG5lZWQgdG8gZXhpc3QgaW4gdGhlIElJRkUgd2hlcmUgdGhlIGNsYXNzIG1heVxuICAgKiBoYXZlIGEgZGlmZmVyZW50IG5hbWUgdGhhbiBpdCBkb2VzIGV4dGVybmFsbHkuXG4gICAqL1xuICBnZXRBZGphY2VudE5hbWVPZkNsYXNzKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogdHMuSWRlbnRpZmllcjtcbn1cbiJdfQ==
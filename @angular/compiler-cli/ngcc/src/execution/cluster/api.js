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
        define("@angular/compiler-cli/ngcc/src/execution/cluster/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2V4ZWN1dGlvbi9jbHVzdGVyL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGh9IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gJy4uLy4uL3BhY2thZ2VzL2VudHJ5X3BvaW50JztcbmltcG9ydCB7UGFja2FnZUpzb25DaGFuZ2V9IGZyb20gJy4uLy4uL3dyaXRpbmcvcGFja2FnZV9qc29uX3VwZGF0ZXInO1xuaW1wb3J0IHtUYXNrLCBUYXNrUHJvY2Vzc2luZ091dGNvbWV9IGZyb20gJy4uL2FwaSc7XG5cblxuLyoqIEEgbWVzc2FnZSByZXBvcnRpbmcgdGhhdCBhbiB1bnJlY292ZXJhYmxlIGVycm9yIG9jY3VycmVkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcnJvck1lc3NhZ2UgZXh0ZW5kcyBKc29uT2JqZWN0IHtcbiAgdHlwZTogJ2Vycm9yJztcbiAgZXJyb3I6IHN0cmluZztcbn1cblxuLyoqIEEgbWVzc2FnZSByZXF1ZXN0aW5nIHRoZSBwcm9jZXNzaW5nIG9mIGEgdGFzay4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvY2Vzc1Rhc2tNZXNzYWdlIGV4dGVuZHMgSnNvbk9iamVjdCB7XG4gIHR5cGU6ICdwcm9jZXNzLXRhc2snO1xuICB0YXNrOiBUYXNrO1xufVxuXG4vKipcbiAqIEEgbWVzc2FnZSByZXBvcnRpbmcgdGhlIHJlc3VsdCBvZiBwcm9jZXNzaW5nIHRoZSBjdXJyZW50bHkgYXNzaWduZWQgdGFzay5cbiAqXG4gKiBOT1RFOiBUbyBhdm9pZCB0aGUgY29tbXVuaWNhdGlvbiBvdmVyaGVhZCwgdGhlIHRhc2sgaXMgbm90IGluY2x1ZGVkIGluIHRoZSBtZXNzYWdlLiBJbnN0ZWFkLCB0aGVcbiAqICAgICAgIG1hc3RlciBpcyByZXNwb25zaWJsZSBmb3Iga2VlcGluZyBhIG1hcHBpbmcgb2Ygd29ya2VycyB0byB0aGVpciBjdXJyZW50bHkgYXNzaWduZWQgdGFza3MuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFza0NvbXBsZXRlZE1lc3NhZ2UgZXh0ZW5kcyBKc29uT2JqZWN0IHtcbiAgdHlwZTogJ3Rhc2stY29tcGxldGVkJztcbiAgb3V0Y29tZTogVGFza1Byb2Nlc3NpbmdPdXRjb21lO1xufVxuXG4vKiogQSBtZXNzYWdlIHJlcXVlc3RpbmcgdGhlIHVwZGF0ZSBvZiBhIGBwYWNrYWdlLmpzb25gIGZpbGUuICovXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVBhY2thZ2VKc29uTWVzc2FnZSBleHRlbmRzIEpzb25PYmplY3Qge1xuICB0eXBlOiAndXBkYXRlLXBhY2thZ2UtanNvbic7XG4gIHBhY2thZ2VKc29uUGF0aDogQWJzb2x1dGVGc1BhdGg7XG4gIGNoYW5nZXM6IFBhY2thZ2VKc29uQ2hhbmdlW107XG59XG5cbi8qKiBUaGUgdHlwZSBvZiBtZXNzYWdlcyBzZW50IGZyb20gY2x1c3RlciB3b3JrZXJzIHRvIHRoZSBjbHVzdGVyIG1hc3Rlci4gKi9cbmV4cG9ydCB0eXBlIE1lc3NhZ2VGcm9tV29ya2VyID0gRXJyb3JNZXNzYWdlIHwgVGFza0NvbXBsZXRlZE1lc3NhZ2UgfCBVcGRhdGVQYWNrYWdlSnNvbk1lc3NhZ2U7XG5cbi8qKiBUaGUgdHlwZSBvZiBtZXNzYWdlcyBzZW50IGZyb20gdGhlIGNsdXN0ZXIgbWFzdGVyIHRvIGNsdXN0ZXIgd29ya2Vycy4gKi9cbmV4cG9ydCB0eXBlIE1lc3NhZ2VUb1dvcmtlciA9IFByb2Nlc3NUYXNrTWVzc2FnZTtcbiJdfQ==
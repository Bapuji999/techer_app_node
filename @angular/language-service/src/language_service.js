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
        define("@angular/language-service/src/language_service", ["require", "exports", "tslib", "typescript/lib/tsserverlibrary", "@angular/language-service/src/completions", "@angular/language-service/src/definitions", "@angular/language-service/src/diagnostics", "@angular/language-service/src/hover"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var tss = require("typescript/lib/tsserverlibrary");
    var completions_1 = require("@angular/language-service/src/completions");
    var definitions_1 = require("@angular/language-service/src/definitions");
    var diagnostics_1 = require("@angular/language-service/src/diagnostics");
    var hover_1 = require("@angular/language-service/src/hover");
    /**
     * Create an instance of an Angular `LanguageService`.
     *
     * @publicApi
     */
    function createLanguageService(host) {
        return new LanguageServiceImpl(host);
    }
    exports.createLanguageService = createLanguageService;
    var LanguageServiceImpl = /** @class */ (function () {
        function LanguageServiceImpl(host) {
            this.host = host;
        }
        LanguageServiceImpl.prototype.getSemanticDiagnostics = function (fileName) {
            var e_1, _a;
            var analyzedModules = this.host.getAnalyzedModules(); // same role as 'synchronizeHostData'
            var ngDiagnostics = [];
            var templates = this.host.getTemplates(fileName);
            try {
                for (var templates_1 = tslib_1.__values(templates), templates_1_1 = templates_1.next(); !templates_1_1.done; templates_1_1 = templates_1.next()) {
                    var template = templates_1_1.value;
                    var ast = this.host.getTemplateAst(template);
                    if (ast) {
                        ngDiagnostics.push.apply(ngDiagnostics, tslib_1.__spread(diagnostics_1.getTemplateDiagnostics(ast)));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (templates_1_1 && !templates_1_1.done && (_a = templates_1.return)) _a.call(templates_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var declarations = this.host.getDeclarations(fileName);
            ngDiagnostics.push.apply(ngDiagnostics, tslib_1.__spread(diagnostics_1.getDeclarationDiagnostics(declarations, analyzedModules, this.host)));
            var sourceFile = fileName.endsWith('.ts') ? this.host.getSourceFile(fileName) : undefined;
            var tsDiagnostics = ngDiagnostics.map(function (d) { return diagnostics_1.ngDiagnosticToTsDiagnostic(d, sourceFile); });
            return tslib_1.__spread(tss.sortAndDeduplicateDiagnostics(tsDiagnostics));
        };
        LanguageServiceImpl.prototype.getCompletionsAtPosition = function (fileName, position, options) {
            this.host.getAnalyzedModules(); // same role as 'synchronizeHostData'
            var ast = this.host.getTemplateAstAtPosition(fileName, position);
            if (!ast) {
                return;
            }
            var results = completions_1.getTemplateCompletions(ast, position);
            if (!results || !results.length) {
                return;
            }
            return {
                isGlobalCompletion: false,
                isMemberCompletion: false,
                isNewIdentifierLocation: false,
                // Cast CompletionEntry.kind from ng.CompletionKind to ts.ScriptElementKind
                entries: results,
            };
        };
        LanguageServiceImpl.prototype.getDefinitionAndBoundSpan = function (fileName, position) {
            this.host.getAnalyzedModules(); // same role as 'synchronizeHostData'
            var templateInfo = this.host.getTemplateAstAtPosition(fileName, position);
            if (templateInfo) {
                return definitions_1.getDefinitionAndBoundSpan(templateInfo, position);
            }
            // Attempt to get Angular-specific definitions in a TypeScript file, like templates defined
            // in a `templateUrl` property.
            if (fileName.endsWith('.ts')) {
                var sf = this.host.getSourceFile(fileName);
                if (sf) {
                    return definitions_1.getTsDefinitionAndBoundSpan(sf, position, this.host.tsLsHost);
                }
            }
        };
        LanguageServiceImpl.prototype.getQuickInfoAtPosition = function (fileName, position) {
            var analyzedModules = this.host.getAnalyzedModules(); // same role as 'synchronizeHostData'
            var templateInfo = this.host.getTemplateAstAtPosition(fileName, position);
            if (templateInfo) {
                return hover_1.getTemplateHover(templateInfo, position, analyzedModules);
            }
            // Attempt to get Angular-specific hover information in a TypeScript file, the NgModule a
            // directive belongs to.
            var declarations = this.host.getDeclarations(fileName);
            return hover_1.getTsHover(position, declarations, analyzedModules);
        };
        return LanguageServiceImpl;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Vfc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2Uvc3JjL2xhbmd1YWdlX3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsb0RBQXNEO0lBRXRELHlFQUFxRDtJQUNyRCx5RUFBcUY7SUFDckYseUVBQTRHO0lBQzVHLDZEQUFxRDtJQUlyRDs7OztPQUlHO0lBQ0gsU0FBZ0IscUJBQXFCLENBQUMsSUFBMkI7UUFDL0QsT0FBTyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFGRCxzREFFQztJQUVEO1FBQ0UsNkJBQTZCLElBQTJCO1lBQTNCLFNBQUksR0FBSixJQUFJLENBQXVCO1FBQUcsQ0FBQztRQUU1RCxvREFBc0IsR0FBdEIsVUFBdUIsUUFBZ0I7O1lBQ3JDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFFLHFDQUFxQztZQUM5RixJQUFNLGFBQWEsR0FBb0IsRUFBRSxDQUFDO1lBRTFDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztnQkFDbkQsS0FBdUIsSUFBQSxjQUFBLGlCQUFBLFNBQVMsQ0FBQSxvQ0FBQSwyREFBRTtvQkFBN0IsSUFBTSxRQUFRLHNCQUFBO29CQUNqQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsYUFBYSxDQUFDLElBQUksT0FBbEIsYUFBYSxtQkFBUyxvQ0FBc0IsQ0FBQyxHQUFHLENBQUMsR0FBRTtxQkFDcEQ7aUJBQ0Y7Ozs7Ozs7OztZQUVELElBQU0sWUFBWSxHQUFHLElBQUksQ0FB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Q0FBQztZQUN6RCxPQUFPLGtCQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0gsMEJBQUM7SUFBRCxDQUFDLEFBMUVELElBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0c3MgZnJvbSAndHlwZXNjcmlwdC9saWIvdHNzZXJ2ZXJsaWJyYXJ5JztcblxuaW1wb3J0IHtnZXRUZW1wbGF0ZUNvbXBsZXRpb25zfSBmcm9tICcuL2NvbXBsZXRpb25zJztcbmltcG9ydCB7Z2V0RGVmaW5pdGlvbkFuZEJvdW5kU3BhbiwgZ2V0VHNEZWZpbml0aW9uQW5kQm91bmRTcGFufSBmcm9tICcuL2RlZmluaXRpb25zJztcbmltcG9ydCB7Z2V0RGVjbGFyYXRpb25EaWFnbm9zdGljcywgZ2V0VGVtcGxhdGVEaWFnbm9zdGljcywgbmdEaWFnbm9zdGljVG9Uc0RpYWdub3N0aWN9IGZyb20gJy4vZGlhZ25vc3RpY3MnO1xuaW1wb3J0IHtnZXRUZW1wbGF0ZUhvdmVyLCBnZXRUc0hvdmVyfSBmcm9tICcuL2hvdmVyJztcbmltcG9ydCAqIGFzIG5nIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtUeXBlU2NyaXB0U2VydmljZUhvc3R9IGZyb20gJy4vdHlwZXNjcmlwdF9ob3N0JztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gQW5ndWxhciBgTGFuZ3VhZ2VTZXJ2aWNlYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5ndWFnZVNlcnZpY2UoaG9zdDogVHlwZVNjcmlwdFNlcnZpY2VIb3N0KSB7XG4gIHJldHVybiBuZXcgTGFuZ3VhZ2VTZXJ2aWNlSW1wbChob3N0KTtcbn1cblxuY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIG5nLkxhbmd1YWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaG9zdDogVHlwZVNjcmlwdFNlcnZpY2VIb3N0KSB7fVxuXG4gIGdldFNlbWFudGljRGlhZ25vc3RpY3MoZmlsZU5hbWU6IHN0cmluZyk6IHRzcy5EaWFnbm9zdGljW10ge1xuICAgIGNvbnN0IGFuYWx5emVkTW9kdWxlcyA9IHRoaXMuaG9zdC5nZXRBbmFseXplZE1vZHVsZXMoKTsgIC8vIHNhbWUgcm9sZSBhcyAnc3luY2hyb25pemVIb3N0RGF0YSdcbiAgICBjb25zdCBuZ0RpYWdub3N0aWNzOiBuZy5EaWFnbm9zdGljW10gPSBbXTtcblxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRoaXMuaG9zdC5nZXRUZW1wbGF0ZXMoZmlsZU5hbWUpO1xuICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICBjb25zdCBhc3QgPSB0aGlzLmhvc3QuZ2V0VGVtcGxhdGVBc3QodGVtcGxhdGUpO1xuICAgICAgaWYgKGFzdCkge1xuICAgICAgICBuZ0RpYWdub3N0aWNzLnB1c2goLi4uZ2V0VGVtcGxhdGVEaWFnbm9zdGljcyhhc3QpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSB0aGlzLmhvc3QuZ2V0RGVjbGFyYXRpb25zKGZpbGVOYW1lKTtcbiAgICBuZ0RpYWdub3N0aWNzLnB1c2goLi4uZ2V0RGVjbGFyYXRpb25EaWFnbm9zdGljcyhkZWNsYXJhdGlvbnMsIGFuYWx5emVkTW9kdWxlcywgdGhpcy5ob3N0KSk7XG5cbiAgICBjb25zdCBzb3VyY2VGaWxlID0gZmlsZU5hbWUuZW5kc1dpdGgoJy50cycpID8gdGhpcy5ob3N0LmdldFNvdXJjZUZpbGUoZmlsZU5hbWUpIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHRzRGlhZ25vc3RpY3MgPSBuZ0RpYWdub3N0aWNzLm1hcChkID0+IG5nRGlhZ25vc3RpY1RvVHNEaWFnbm9zdGljKGQsIHNvdXJjZUZpbGUpKTtcbiAgICByZXR1cm4gWy4uLnRzcy5zb3J0QW5kRGVkdXBsaWNhdGVEaWFnbm9zdGljcyh0c0RpYWdub3N0aWNzKV07XG4gIH1cblxuICBnZXRDb21wbGV0aW9uc0F0UG9zaXRpb24oXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyLFxuICAgICAgb3B0aW9ucz86IHRzcy5HZXRDb21wbGV0aW9uc0F0UG9zaXRpb25PcHRpb25zKTogdHNzLkNvbXBsZXRpb25JbmZvfHVuZGVmaW5lZCB7XG4gICAgdGhpcy5ob3N0LmdldEFuYWx5emVkTW9kdWxlcygpOyAgLy8gc2FtZSByb2xlIGFzICdzeW5jaHJvbml6ZUhvc3REYXRhJ1xuICAgIGNvbnN0IGFzdCA9IHRoaXMuaG9zdC5nZXRUZW1wbGF0ZUFzdEF0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICBpZiAoIWFzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHRzID0gZ2V0VGVtcGxhdGVDb21wbGV0aW9ucyhhc3QsIHBvc2l0aW9uKTtcbiAgICBpZiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc0dsb2JhbENvbXBsZXRpb246IGZhbHNlLFxuICAgICAgaXNNZW1iZXJDb21wbGV0aW9uOiBmYWxzZSxcbiAgICAgIGlzTmV3SWRlbnRpZmllckxvY2F0aW9uOiBmYWxzZSxcbiAgICAgIC8vIENhc3QgQ29tcGxldGlvbkVudHJ5LmtpbmQgZnJvbSBuZy5Db21wbGV0aW9uS2luZCB0byB0cy5TY3JpcHRFbGVtZW50S2luZFxuICAgICAgZW50cmllczogcmVzdWx0cyBhcyB1bmtub3duIGFzIHRzLkNvbXBsZXRpb25FbnRyeVtdLFxuICAgIH07XG4gIH1cblxuICBnZXREZWZpbml0aW9uQW5kQm91bmRTcGFuKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB0c3MuRGVmaW5pdGlvbkluZm9BbmRCb3VuZFNwYW5cbiAgICAgIHx1bmRlZmluZWQge1xuICAgIHRoaXMuaG9zdC5nZXRBbmFseXplZE1vZHVsZXMoKTsgIC8vIHNhbWUgcm9sZSBhcyAnc3luY2hyb25pemVIb3N0RGF0YSdcbiAgICBjb25zdCB0ZW1wbGF0ZUluZm8gPSB0aGlzLmhvc3QuZ2V0VGVtcGxhdGVBc3RBdFBvc2l0aW9uKGZpbGVOYW1lLCBwb3NpdGlvbik7XG4gICAgaWYgKHRlbXBsYXRlSW5mbykge1xuICAgICAgcmV0dXJuIGdldERlZmluaXRpb25BbmRCb3VuZFNwYW4odGVtcGxhdGVJbmZvLCBwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gQXR0ZW1wdCB0byBnZXQgQW5ndWxhci1zcGVjaWZpYyBkZWZpbml0aW9ucyBpbiBhIFR5cGVTY3JpcHQgZmlsZSwgbGlrZSB0ZW1wbGF0ZXMgZGVmaW5lZFxuICAgIC8vIGluIGEgYHRlbXBsYXRlVXJsYCBwcm9wZXJ0eS5cbiAgICBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoJy50cycpKSB7XG4gICAgICBjb25zdCBzZiA9IHRoaXMuaG9zdC5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKTtcbiAgICAgIGlmIChzZikge1xuICAgICAgICByZXR1cm4gZ2V0VHNEZWZpbml0aW9uQW5kQm91bmRTcGFuKHNmLCBwb3NpdGlvbiwgdGhpcy5ob3N0LnRzTHNIb3N0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRRdWlja0luZm9BdFBvc2l0aW9uKGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB0c3MuUXVpY2tJbmZvfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgYW5hbHl6ZWRNb2R1bGVzID0gdGhpcy5ob3N0LmdldEFuYWx5emVkTW9kdWxlcygpOyAgLy8gc2FtZSByb2xlIGFzICdzeW5jaHJvbml6ZUhvc3REYXRhJ1xuICAgIGNvbnN0IHRlbXBsYXRlSW5mbyA9IHRoaXMuaG9zdC5nZXRUZW1wbGF0ZUFzdEF0UG9zaXRpb24oZmlsZU5hbWUsIHBvc2l0aW9uKTtcbiAgICBpZiAodGVtcGxhdGVJbmZvKSB7XG4gICAgICByZXR1cm4gZ2V0VGVtcGxhdGVIb3Zlcih0ZW1wbGF0ZUluZm8sIHBvc2l0aW9uLCBhbmFseXplZE1vZHVsZXMpO1xuICAgIH1cblxuICAgIC8vIEF0dGVtcHQgdG8gZ2V0IEFuZ3VsYXItc3BlY2lmaWMgaG92ZXIgaW5mb3JtYXRpb24gaW4gYSBUeXBlU2NyaXB0IGZpbGUsIHRoZSBOZ01vZHVsZSBhXG4gICAgLy8gZGlyZWN0aXZlIGJlbG9uZ3MgdG8uXG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gdGhpcy5ob3N0LmdldERlY2xhcmF0aW9ucyhmaWxlTmFtZSk7XG4gICAgcmV0dXJuIGdldFRzSG92ZXIocG9zaXRpb24sIGRlY2xhcmF0aW9ucywgYW5hbHl6ZWRNb2R1bGVzKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/src/compiler_reflector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Identifiers, getUrlScheme, syntaxError } from '@angular/compiler';
import { ANALYZE_FOR_ENTRY_COMPONENTS, ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, LOCALE_ID, NgModuleFactory, NgModuleRef, QueryList, Renderer2, SecurityContext, TRANSLATIONS_FORMAT, TemplateRef, ViewContainerRef, ViewEncapsulation, ɵCodegenComponentFactoryResolver, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵReflectionCapabilities as ReflectionCapabilities, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpad, ɵpid, ɵpod, ɵppd, ɵprd, ɵqud, ɵregisterModuleFactory, ɵstringify as stringify, ɵted, ɵunv, ɵvid } from '@angular/core';
/** @type {?} */
export const MODULE_SUFFIX = '';
/** @type {?} */
const builtinExternalReferences = createBuiltinExternalReferencesMap();
export class JitReflector {
    constructor() {
        this.reflectionCapabilities = new ReflectionCapabilities();
    }
    /**
     * @param {?} type
     * @param {?} cmpMetadata
     * @return {?}
     */
    componentModuleUrl(type, cmpMetadata) {
        /** @type {?} */
        const moduleId = cmpMetadata.moduleId;
        if (typeof moduleId === 'string') {
            /** @type {?} */
            const scheme = getUrlScheme(moduleId);
            return scheme ? moduleId : `package:${moduleId}${MODULE_SUFFIX}`;
        }
        else if (moduleId !== null && moduleId !== void 0) {
            throw syntaxError(`moduleId should be a string in "${stringify(type)}". See https://goo.gl/wIDDiL for more information.\n` +
                `If you're using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.`);
        }
        return `./${stringify(type)}`;
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    parameters(typeOrFunc) {
        return this.reflectionCapabilities.parameters(typeOrFunc);
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    tryAnnotations(typeOrFunc) { return this.annotations(typeOrFunc); }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    annotations(typeOrFunc) {
        return this.reflectionCapabilities.annotations(typeOrFunc);
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    shallowAnnotations(typeOrFunc) {
        throw new Error('Not supported in JIT mode');
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    propMetadata(typeOrFunc) {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
    }
    /**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */
    hasLifecycleHook(type, lcProperty) {
        return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    guards(type) { return this.reflectionCapabilities.guards(type); }
    /**
     * @param {?} ref
     * @return {?}
     */
    resolveExternalReference(ref) {
        return builtinExternalReferences.get(ref) || ref.runtime;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    JitReflector.prototype.reflectionCapabilities;
}
/**
 * @return {?}
 */
function createBuiltinExternalReferencesMap() {
    /** @type {?} */
    const map = new Map();
    map.set(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS, ANALYZE_FOR_ENTRY_COMPONENTS);
    map.set(Identifiers.ElementRef, ElementRef);
    map.set(Identifiers.NgModuleRef, NgModuleRef);
    map.set(Identifiers.ViewContainerRef, ViewContainerRef);
    map.set(Identifiers.ChangeDetectorRef, ChangeDetectorRef);
    map.set(Identifiers.Renderer2, Renderer2);
    map.set(Identifiers.QueryList, QueryList);
    map.set(Identifiers.TemplateRef, TemplateRef);
    map.set(Identifiers.CodegenComponentFactoryResolver, ɵCodegenComponentFactoryResolver);
    map.set(Identifiers.ComponentFactoryResolver, ComponentFactoryResolver);
    map.set(Identifiers.ComponentFactory, ComponentFactory);
    map.set(Identifiers.ComponentRef, ComponentRef);
    map.set(Identifiers.NgModuleFactory, NgModuleFactory);
    map.set(Identifiers.createModuleFactory, ɵcmf);
    map.set(Identifiers.moduleDef, ɵmod);
    map.set(Identifiers.moduleProviderDef, ɵmpd);
    map.set(Identifiers.RegisterModuleFactoryFn, ɵregisterModuleFactory);
    map.set(Identifiers.Injector, Injector);
    map.set(Identifiers.ViewEncapsulation, ViewEncapsulation);
    map.set(Identifiers.ChangeDetectionStrategy, ChangeDetectionStrategy);
    map.set(Identifiers.SecurityContext, SecurityContext);
    map.set(Identifiers.LOCALE_ID, LOCALE_ID);
    map.set(Identifiers.TRANSLATIONS_FORMAT, TRANSLATIONS_FORMAT);
    map.set(Identifiers.inlineInterpolate, ɵinlineInterpolate);
    map.set(Identifiers.interpolate, ɵinterpolate);
    map.set(Identifiers.EMPTY_ARRAY, ɵEMPTY_ARRAY);
    map.set(Identifiers.EMPTY_MAP, ɵEMPTY_MAP);
    map.set(Identifiers.viewDef, ɵvid);
    map.set(Identifiers.elementDef, ɵeld);
    map.set(Identifiers.anchorDef, ɵand);
    map.set(Identifiers.textDef, ɵted);
    map.set(Identifiers.directiveDef, ɵdid);
    map.set(Identifiers.providerDef, ɵprd);
    map.set(Identifiers.queryDef, ɵqud);
    map.set(Identifiers.pureArrayDef, ɵpad);
    map.set(Identifiers.pureObjectDef, ɵpod);
    map.set(Identifiers.purePipeDef, ɵppd);
    map.set(Identifiers.pipeDef, ɵpid);
    map.set(Identifiers.nodeValue, ɵnov);
    map.set(Identifiers.ngContentDef, ɵncd);
    map.set(Identifiers.unwrapValue, ɵunv);
    map.set(Identifiers.createRendererType2, ɵcrt);
    map.set(Identifiers.createComponentFactory, ɵccf);
    return map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfcmVmbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9jb21waWxlcl9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFzQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlHLE9BQU8sRUFBQyw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBYSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsSUFBSSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLFVBQVUsSUFBSSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRTdvQixNQUFNLE9BQU8sYUFBYSxHQUFHLEVBQUU7O01BQ3pCLHlCQUF5QixHQUFHLGtDQUFrQyxFQUFFO0FBRXRFLE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBQ1UsMkJBQXNCLEdBQUcsSUFBSSxzQkFBc0IsRUFB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QUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3IsIEV4dGVybmFsUmVmZXJlbmNlLCBJZGVudGlmaWVycywgZ2V0VXJsU2NoZW1lLCBzeW50YXhFcnJvcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBMT0NBTEVfSUQsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVSZWYsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBTZWN1cml0eUNvbnRleHQsIFRSQU5TTEFUSU9OU19GT1JNQVQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgybVDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCDJtUVNUFRZX0FSUkFZLCDJtUVNUFRZX01BUCwgybVSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIGFzIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMsIMm1YW5kLCDJtWNjZiwgybVjbWYsIMm1Y3J0LCDJtWRpZCwgybVlbGQsIMm1aW5saW5lSW50ZXJwb2xhdGUsIMm1aW50ZXJwb2xhdGUsIMm1bW9kLCDJtW1wZCwgybVuY2QsIMm1bm92LCDJtXBhZCwgybVwaWQsIMm1cG9kLCDJtXBwZCwgybVwcmQsIMm1cXVkLCDJtXJlZ2lzdGVyTW9kdWxlRmFjdG9yeSwgybVzdHJpbmdpZnkgYXMgc3RyaW5naWZ5LCDJtXRlZCwgybV1bnYsIMm1dmlkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IE1PRFVMRV9TVUZGSVggPSAnJztcbmNvbnN0IGJ1aWx0aW5FeHRlcm5hbFJlZmVyZW5jZXMgPSBjcmVhdGVCdWlsdGluRXh0ZXJuYWxSZWZlcmVuY2VzTWFwKCk7XG5cbmV4cG9ydCBjbGFzcyBKaXRSZWZsZWN0b3IgaW1wbGVtZW50cyBDb21waWxlUmVmbGVjdG9yIHtcbiAgcHJpdmF0ZSByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzID0gbmV3IFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMoKTtcblxuICBjb21wb25lbnRNb2R1bGVVcmwodHlwZTogYW55LCBjbXBNZXRhZGF0YTogQ29tcG9uZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBtb2R1bGVJZCA9IGNtcE1ldGFkYXRhLm1vZHVsZUlkO1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHNjaGVtZSA9IGdldFVybFNjaGVtZShtb2R1bGVJZCk7XG4gICAgICByZXR1cm4gc2NoZW1lID8gbW9kdWxlSWQgOiBgcGFja2FnZToke21vZHVsZUlkfSR7TU9EVUxFX1NVRkZJWH1gO1xuICAgIH0gZWxzZSBpZiAobW9kdWxlSWQgIT09IG51bGwgJiYgbW9kdWxlSWQgIT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3IoXG4gICAgICAgICAgYG1vZHVsZUlkIHNob3VsZCBiZSBhIHN0cmluZyBpbiBcIiR7c3RyaW5naWZ5KHR5cGUpfVwiLiBTZWUgaHR0cHM6Ly9nb28uZ2wvd0lERGlMIGZvciBtb3JlIGluZm9ybWF0aW9uLlxcbmAgK1xuICAgICAgICAgIGBJZiB5b3UncmUgdXNpbmcgV2VicGFjayB5b3Ugc2hvdWxkIGlubGluZSB0aGUgdGVtcGxhdGUgYW5kIHRoZSBzdHlsZXMsIHNlZSBodHRwczovL2dvby5nbC9YMko4emMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAuLyR7c3RyaW5naWZ5KHR5cGUpfWA7XG4gIH1cbiAgcGFyYW1ldGVycyh0eXBlT3JGdW5jOiAvKlR5cGUqLyBhbnkpOiBhbnlbXVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnBhcmFtZXRlcnModHlwZU9yRnVuYyk7XG4gIH1cbiAgdHJ5QW5ub3RhdGlvbnModHlwZU9yRnVuYzogLypUeXBlKi8gYW55KTogYW55W10geyByZXR1cm4gdGhpcy5hbm5vdGF0aW9ucyh0eXBlT3JGdW5jKTsgfVxuICBhbm5vdGF0aW9ucyh0eXBlT3JGdW5jOiAvKlR5cGUqLyBhbnkpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5hbm5vdGF0aW9ucyh0eXBlT3JGdW5jKTtcbiAgfVxuICBzaGFsbG93QW5ub3RhdGlvbnModHlwZU9yRnVuYzogLypUeXBlKi8gYW55KTogYW55W10ge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IHN1cHBvcnRlZCBpbiBKSVQgbW9kZScpO1xuICB9XG4gIHByb3BNZXRhZGF0YSh0eXBlT3JGdW5jOiAvKlR5cGUqLyBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55W119IHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnByb3BNZXRhZGF0YSh0eXBlT3JGdW5jKTtcbiAgfVxuICBoYXNMaWZlY3ljbGVIb29rKHR5cGU6IGFueSwgbGNQcm9wZXJ0eTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5oYXNMaWZlY3ljbGVIb29rKHR5cGUsIGxjUHJvcGVydHkpO1xuICB9XG4gIGd1YXJkcyh0eXBlOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55fSB7IHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuZ3VhcmRzKHR5cGUpOyB9XG4gIHJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShyZWY6IEV4dGVybmFsUmVmZXJlbmNlKTogYW55IHtcbiAgICByZXR1cm4gYnVpbHRpbkV4dGVybmFsUmVmZXJlbmNlcy5nZXQocmVmKSB8fCByZWYucnVudGltZTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1aWx0aW5FeHRlcm5hbFJlZmVyZW5jZXNNYXAoKSB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXA8RXh0ZXJuYWxSZWZlcmVuY2UsIGFueT4oKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5BTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5FbGVtZW50UmVmLCBFbGVtZW50UmVmKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5OZ01vZHVsZVJlZiwgTmdNb2R1bGVSZWYpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLlZpZXdDb250YWluZXJSZWYsIFZpZXdDb250YWluZXJSZWYpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkNoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3RvclJlZik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuUmVuZGVyZXIyLCBSZW5kZXJlcjIpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLlF1ZXJ5TGlzdCwgUXVlcnlMaXN0KTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5UZW1wbGF0ZVJlZiwgVGVtcGxhdGVSZWYpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIMm1Q29kZWdlbkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkNvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnkpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkNvbXBvbmVudFJlZiwgQ29tcG9uZW50UmVmKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5OZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlRmFjdG9yeSk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuY3JlYXRlTW9kdWxlRmFjdG9yeSwgybVjbWYpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLm1vZHVsZURlZiwgybVtb2QpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLm1vZHVsZVByb3ZpZGVyRGVmLCDJtW1wZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuUmVnaXN0ZXJNb2R1bGVGYWN0b3J5Rm4sIMm1cmVnaXN0ZXJNb2R1bGVGYWN0b3J5KTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5JbmplY3RvciwgSW5qZWN0b3IpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLlZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3RW5jYXBzdWxhdGlvbik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5KTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5TZWN1cml0eUNvbnRleHQsIFNlY3VyaXR5Q29udGV4dCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuTE9DQUxFX0lELCBMT0NBTEVfSUQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLlRSQU5TTEFUSU9OU19GT1JNQVQsIFRSQU5TTEFUSU9OU19GT1JNQVQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLmlubGluZUludGVycG9sYXRlLCDJtWlubGluZUludGVycG9sYXRlKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5pbnRlcnBvbGF0ZSwgybVpbnRlcnBvbGF0ZSk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuRU1QVFlfQVJSQVksIMm1RU1QVFlfQVJSQVkpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkVNUFRZX01BUCwgybVFTVBUWV9NQVApO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLnZpZXdEZWYsIMm1dmlkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5lbGVtZW50RGVmLCDJtWVsZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuYW5jaG9yRGVmLCDJtWFuZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMudGV4dERlZiwgybV0ZWQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLmRpcmVjdGl2ZURlZiwgybVkaWQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLnByb3ZpZGVyRGVmLCDJtXByZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMucXVlcnlEZWYsIMm1cXVkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5wdXJlQXJyYXlEZWYsIMm1cGFkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5wdXJlT2JqZWN0RGVmLCDJtXBvZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMucHVyZVBpcGVEZWYsIMm1cHBkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5waXBlRGVmLCDJtXBpZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMubm9kZVZhbHVlLCDJtW5vdik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMubmdDb250ZW50RGVmLCDJtW5jZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMudW53cmFwVmFsdWUsIMm1dW52KTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5jcmVhdGVSZW5kZXJlclR5cGUyLCDJtWNydCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuY3JlYXRlQ29tcG9uZW50RmFjdG9yeSwgybVjY2YpO1xuICByZXR1cm4gbWFwO1xufVxuIl19
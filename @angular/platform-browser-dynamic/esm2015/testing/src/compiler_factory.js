/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser-dynamic/testing/src/compiler_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileReflector, DirectiveResolver, ERROR_COMPONENT_TYPE, NgModuleResolver, PipeResolver } from '@angular/compiler';
import { MockDirectiveResolver, MockNgModuleResolver, MockPipeResolver } from '@angular/compiler/testing';
import { Component, Directive, NgModule, Pipe, ɵstringify as stringify } from '@angular/core';
import { MetadataOverrider } from './metadata_overrider';
/** @type {?} */
export const COMPILER_PROVIDERS = [
    { provide: MockPipeResolver, deps: [CompileReflector] },
    { provide: PipeResolver, useExisting: MockPipeResolver },
    { provide: MockDirectiveResolver, deps: [CompileReflector] },
    { provide: DirectiveResolver, useExisting: MockDirectiveResolver },
    { provide: MockNgModuleResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, useExisting: MockNgModuleResolver },
];
export class TestingCompilerFactoryImpl {
    /**
     * @param {?} _injector
     * @param {?} _compilerFactory
     */
    constructor(_injector, _compilerFactory) {
        this._injector = _injector;
        this._compilerFactory = _compilerFactory;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    createTestingCompiler(options) {
        /** @type {?} */
        const compiler = (/** @type {?} */ (this._compilerFactory.createCompiler(options)));
        return new TestingCompilerImpl(compiler, compiler.injector.get(MockDirectiveResolver), compiler.injector.get(MockPipeResolver), compiler.injector.get(MockNgModuleResolver));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TestingCompilerFactoryImpl.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerFactoryImpl.prototype._compilerFactory;
}
export class TestingCompilerImpl {
    /**
     * @param {?} _compiler
     * @param {?} _directiveResolver
     * @param {?} _pipeResolver
     * @param {?} _moduleResolver
     */
    constructor(_compiler, _directiveResolver, _pipeResolver, _moduleResolver) {
        this._compiler = _compiler;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._moduleResolver = _moduleResolver;
        this._overrider = new MetadataOverrider();
    }
    /**
     * @return {?}
     */
    get injector() { return this._compiler.injector; }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleSync(moduleType) {
        return this._compiler.compileModuleSync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAsync(moduleType) {
        return this._compiler.compileModuleAsync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsSync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsSync(moduleType);
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._compiler.compileModuleAndAllComponentsAsync(moduleType);
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    getComponentFactory(component) {
        return this._compiler.getComponentFactory(component);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    checkOverrideAllowed(type) {
        if (this._compiler.hasAotSummary(type)) {
            throw new Error(`${stringify(type)} was AOT compiled, so its metadata cannot be changed.`);
        }
    }
    /**
     * @param {?} ngModule
     * @param {?} override
     * @return {?}
     */
    overrideModule(ngModule, override) {
        this.checkOverrideAllowed(ngModule);
        /** @type {?} */
        const oldMetadata = this._moduleResolver.resolve(ngModule, false);
        this._moduleResolver.setNgModule(ngModule, this._overrider.overrideMetadata(NgModule, oldMetadata, override));
        this.clearCacheFor(ngModule);
    }
    /**
     * @param {?} directive
     * @param {?} override
     * @return {?}
     */
    overrideDirective(directive, override) {
        this.checkOverrideAllowed(directive);
        /** @type {?} */
        const oldMetadata = this._directiveResolver.resolve(directive, false);
        this._directiveResolver.setDirective(directive, this._overrider.overrideMetadata(Directive, (/** @type {?} */ (oldMetadata)), override));
        this.clearCacheFor(directive);
    }
    /**
     * @param {?} component
     * @param {?} override
     * @return {?}
     */
    overrideComponent(component, override) {
        this.checkOverrideAllowed(component);
        /** @type {?} */
        const oldMetadata = this._directiveResolver.resolve(component, false);
        this._directiveResolver.setDirective(component, this._overrider.overrideMetadata(Component, (/** @type {?} */ (oldMetadata)), override));
        this.clearCacheFor(component);
    }
    /**
     * @param {?} pipe
     * @param {?} override
     * @return {?}
     */
    overridePipe(pipe, override) {
        this.checkOverrideAllowed(pipe);
        /** @type {?} */
        const oldMetadata = this._pipeResolver.resolve(pipe, false);
        this._pipeResolver.setPipe(pipe, this._overrider.overrideMetadata(Pipe, oldMetadata, override));
        this.clearCacheFor(pipe);
    }
    /**
     * @param {?} summaries
     * @return {?}
     */
    loadAotSummaries(summaries) { this._compiler.loadAotSummaries(summaries); }
    /**
     * @return {?}
     */
    clearCache() { this._compiler.clearCache(); }
    /**
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) { this._compiler.clearCacheFor(type); }
    /**
     * @param {?} error
     * @return {?}
     */
    getComponentFromError(error) { return ((/** @type {?} */ (error)))[ERROR_COMPONENT_TYPE] || null; }
    /**
     * @param {?} moduleType
     * @return {?}
     */
    getModuleId(moduleType) {
        return this._moduleResolver.resolve(moduleType, true).id;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._overrider;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._compiler;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._directiveResolver;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._pipeResolver;
    /**
     * @type {?}
     * @private
     */
    TestingCompilerImpl.prototype._moduleResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nL3NyYy9jb21waWxlcl9mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1SCxPQUFPLEVBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RyxPQUFPLEVBQW1DLFNBQVMsRUFBb0IsU0FBUyxFQUEwQyxRQUFRLEVBQW1CLElBQUksRUFBd0IsVUFBVSxJQUFJLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUkvTixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLGtCQUFrQixHQUFxQjtJQUNsRCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO0lBQ3JELEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUM7SUFDdEQsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUMxRCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUM7SUFDaEUsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUN6RCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUM7Q0FDL0Q7QUFFRCxNQUFNLE9B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O0lBQzNCLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsU0FBc0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztJQUN4RixVQUFVLEtBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ25ELGFBQWEsQ0FBQyxJQUFlLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUV0RSxxQkFBcUIsQ0FBQyxLQUFZLElBQUksT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztJQUU1RixXQUFXLENBQUMsVUFBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELENBQUM7Q0FDRjs7Ozs7O0lBcEVDLHlDQUE2Qzs7Ozs7SUFFekMsd0NBQStCOzs7OztJQUFFLGlEQUFpRDs7Ozs7SUFDbEYsNENBQXVDOzs7OztJQUFFLDhDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yLCBEaXJlY3RpdmVSZXNvbHZlciwgRVJST1JfQ09NUE9ORU5UX1RZUEUsIE5nTW9kdWxlUmVzb2x2ZXIsIFBpcGVSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtNb2NrRGlyZWN0aXZlUmVzb2x2ZXIsIE1vY2tOZ01vZHVsZVJlc29sdmVyLCBNb2NrUGlwZVJlc29sdmVyfSBmcm9tICdAYW5ndWxhci9jb21waWxlci90ZXN0aW5nJztcbmltcG9ydCB7Q29tcGlsZXJGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgRGlyZWN0aXZlLCBJbmplY3RvciwgTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllcywgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeSwgUGlwZSwgU3RhdGljUHJvdmlkZXIsIFR5cGUsIMm1c3RyaW5naWZ5IGFzIHN0cmluZ2lmeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01ldGFkYXRhT3ZlcnJpZGUsIMm1VGVzdGluZ0NvbXBpbGVyIGFzIFRlc3RpbmdDb21waWxlciwgybVUZXN0aW5nQ29tcGlsZXJGYWN0b3J5IGFzIFRlc3RpbmdDb21waWxlckZhY3Rvcnl9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge8m1Q29tcGlsZXJJbXBsIGFzIENvbXBpbGVySW1wbH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHtNZXRhZGF0YU92ZXJyaWRlcn0gZnJvbSAnLi9tZXRhZGF0YV9vdmVycmlkZXInO1xuXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogTW9ja1BpcGVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAge3Byb3ZpZGU6IFBpcGVSZXNvbHZlciwgdXNlRXhpc3Rpbmc6IE1vY2tQaXBlUmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogTW9ja0RpcmVjdGl2ZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogRGlyZWN0aXZlUmVzb2x2ZXIsIHVzZUV4aXN0aW5nOiBNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogTW9ja05nTW9kdWxlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBOZ01vZHVsZVJlc29sdmVyLCB1c2VFeGlzdGluZzogTW9ja05nTW9kdWxlUmVzb2x2ZXJ9LFxuXTtcblxuZXhwb3J0IGNsYXNzIFRlc3RpbmdDb21waWxlckZhY3RvcnlJbXBsIGltcGxlbWVudHMgVGVzdGluZ0NvbXBpbGVyRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfY29tcGlsZXJGYWN0b3J5OiBDb21waWxlckZhY3RvcnkpIHt9XG5cbiAgY3JlYXRlVGVzdGluZ0NvbXBpbGVyKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdKTogVGVzdGluZ0NvbXBpbGVyIHtcbiAgICBjb25zdCBjb21waWxlciA9IDxDb21waWxlckltcGw+dGhpcy5fY29tcGlsZXJGYWN0b3J5LmNyZWF0ZUNvbXBpbGVyKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgVGVzdGluZ0NvbXBpbGVySW1wbChcbiAgICAgICAgY29tcGlsZXIsIGNvbXBpbGVyLmluamVjdG9yLmdldChNb2NrRGlyZWN0aXZlUmVzb2x2ZXIpLFxuICAgICAgICBjb21waWxlci5pbmplY3Rvci5nZXQoTW9ja1BpcGVSZXNvbHZlciksIGNvbXBpbGVyLmluamVjdG9yLmdldChNb2NrTmdNb2R1bGVSZXNvbHZlcikpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXN0aW5nQ29tcGlsZXJJbXBsIGltcGxlbWVudHMgVGVzdGluZ0NvbXBpbGVyIHtcbiAgcHJpdmF0ZSBfb3ZlcnJpZGVyID0gbmV3IE1ldGFkYXRhT3ZlcnJpZGVyKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY29tcGlsZXI6IENvbXBpbGVySW1wbCwgcHJpdmF0ZSBfZGlyZWN0aXZlUmVzb2x2ZXI6IE1vY2tEaXJlY3RpdmVSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgX3BpcGVSZXNvbHZlcjogTW9ja1BpcGVSZXNvbHZlciwgcHJpdmF0ZSBfbW9kdWxlUmVzb2x2ZXI6IE1vY2tOZ01vZHVsZVJlc29sdmVyKSB7fVxuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3IgeyByZXR1cm4gdGhpcy5fY29tcGlsZXIuaW5qZWN0b3I7IH1cblxuICBjb21waWxlTW9kdWxlU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTmdNb2R1bGVGYWN0b3J5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuY29tcGlsZU1vZHVsZVN5bmMobW9kdWxlVHlwZSk7XG4gIH1cblxuICBjb21waWxlTW9kdWxlQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyhtb2R1bGVUeXBlKTtcbiAgfVxuICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmMobW9kdWxlVHlwZSk7XG4gIH1cblxuICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOlxuICAgICAgUHJvbWlzZTxNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVHlwZSk7XG4gIH1cblxuICBnZXRDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZhY3Rvcnk8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5nZXRDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gIH1cblxuICBjaGVja092ZXJyaWRlQWxsb3dlZCh0eXBlOiBUeXBlPGFueT4pIHtcbiAgICBpZiAodGhpcy5fY29tcGlsZXIuaGFzQW90U3VtbWFyeSh0eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3N0cmluZ2lmeSh0eXBlKX0gd2FzIEFPVCBjb21waWxlZCwgc28gaXRzIG1ldGFkYXRhIGNhbm5vdCBiZSBjaGFuZ2VkLmApO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlTW9kdWxlKG5nTW9kdWxlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPE5nTW9kdWxlPik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tPdmVycmlkZUFsbG93ZWQobmdNb2R1bGUpO1xuICAgIGNvbnN0IG9sZE1ldGFkYXRhID0gdGhpcy5fbW9kdWxlUmVzb2x2ZXIucmVzb2x2ZShuZ01vZHVsZSwgZmFsc2UpO1xuICAgIHRoaXMuX21vZHVsZVJlc29sdmVyLnNldE5nTW9kdWxlKFxuICAgICAgICBuZ01vZHVsZSwgdGhpcy5fb3ZlcnJpZGVyLm92ZXJyaWRlTWV0YWRhdGEoTmdNb2R1bGUsIG9sZE1ldGFkYXRhLCBvdmVycmlkZSkpO1xuICAgIHRoaXMuY2xlYXJDYWNoZUZvcihuZ01vZHVsZSk7XG4gIH1cbiAgb3ZlcnJpZGVEaXJlY3RpdmUoZGlyZWN0aXZlOiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPERpcmVjdGl2ZT4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrT3ZlcnJpZGVBbGxvd2VkKGRpcmVjdGl2ZSk7XG4gICAgY29uc3Qgb2xkTWV0YWRhdGEgPSB0aGlzLl9kaXJlY3RpdmVSZXNvbHZlci5yZXNvbHZlKGRpcmVjdGl2ZSwgZmFsc2UpO1xuICAgIHRoaXMuX2RpcmVjdGl2ZVJlc29sdmVyLnNldERpcmVjdGl2ZShcbiAgICAgICAgZGlyZWN0aXZlLCB0aGlzLl9vdmVycmlkZXIub3ZlcnJpZGVNZXRhZGF0YShEaXJlY3RpdmUsIG9sZE1ldGFkYXRhICEsIG92ZXJyaWRlKSk7XG4gICAgdGhpcy5jbGVhckNhY2hlRm9yKGRpcmVjdGl2ZSk7XG4gIH1cbiAgb3ZlcnJpZGVDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPGFueT4sIG92ZXJyaWRlOiBNZXRhZGF0YU92ZXJyaWRlPENvbXBvbmVudD4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrT3ZlcnJpZGVBbGxvd2VkKGNvbXBvbmVudCk7XG4gICAgY29uc3Qgb2xkTWV0YWRhdGEgPSB0aGlzLl9kaXJlY3RpdmVSZXNvbHZlci5yZXNvbHZlKGNvbXBvbmVudCwgZmFsc2UpO1xuICAgIHRoaXMuX2RpcmVjdGl2ZVJlc29sdmVyLnNldERpcmVjdGl2ZShcbiAgICAgICAgY29tcG9uZW50LCB0aGlzLl9vdmVycmlkZXIub3ZlcnJpZGVNZXRhZGF0YShDb21wb25lbnQsIG9sZE1ldGFkYXRhICEsIG92ZXJyaWRlKSk7XG4gICAgdGhpcy5jbGVhckNhY2hlRm9yKGNvbXBvbmVudCk7XG4gIH1cbiAgb3ZlcnJpZGVQaXBlKHBpcGU6IFR5cGU8YW55Piwgb3ZlcnJpZGU6IE1ldGFkYXRhT3ZlcnJpZGU8UGlwZT4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrT3ZlcnJpZGVBbGxvd2VkKHBpcGUpO1xuICAgIGNvbnN0IG9sZE1ldGFkYXRhID0gdGhpcy5fcGlwZVJlc29sdmVyLnJlc29sdmUocGlwZSwgZmFsc2UpO1xuICAgIHRoaXMuX3BpcGVSZXNvbHZlci5zZXRQaXBlKHBpcGUsIHRoaXMuX292ZXJyaWRlci5vdmVycmlkZU1ldGFkYXRhKFBpcGUsIG9sZE1ldGFkYXRhLCBvdmVycmlkZSkpO1xuICAgIHRoaXMuY2xlYXJDYWNoZUZvcihwaXBlKTtcbiAgfVxuICBsb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllczogKCkgPT4gYW55W10pIHsgdGhpcy5fY29tcGlsZXIubG9hZEFvdFN1bW1hcmllcyhzdW1tYXJpZXMpOyB9XG4gIGNsZWFyQ2FjaGUoKTogdm9pZCB7IHRoaXMuX2NvbXBpbGVyLmNsZWFyQ2FjaGUoKTsgfVxuICBjbGVhckNhY2hlRm9yKHR5cGU6IFR5cGU8YW55PikgeyB0aGlzLl9jb21waWxlci5jbGVhckNhY2hlRm9yKHR5cGUpOyB9XG5cbiAgZ2V0Q29tcG9uZW50RnJvbUVycm9yKGVycm9yOiBFcnJvcikgeyByZXR1cm4gKGVycm9yIGFzIGFueSlbRVJST1JfQ09NUE9ORU5UX1RZUEVdIHx8IG51bGw7IH1cblxuICBnZXRNb2R1bGVJZChtb2R1bGVUeXBlOiBUeXBlPGFueT4pOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kdWxlUmVzb2x2ZXIucmVzb2x2ZShtb2R1bGVUeXBlLCB0cnVlKS5pZDtcbiAgfVxufVxuIl19
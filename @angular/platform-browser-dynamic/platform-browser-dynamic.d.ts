/**
 * @license Angular v9.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { CompileMetadataResolver } from '@angular/compiler';
import { Compiler } from '@angular/core';
import { CompilerConfig } from '@angular/compiler';
import { CompileReflector } from '@angular/compiler';
import { CompilerFactory } from '@angular/core';
import { CompilerOptions } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { Injector } from '@angular/core';
import { JitEvaluator } from '@angular/compiler';
import { ModuleWithComponentFactories } from '@angular/core';
import { NgModuleCompiler } from '@angular/compiler';
import { NgModuleFactory } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { Provider } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';
import { StaticProvider } from '@angular/core';
import { StyleCompiler } from '@angular/compiler';
import { SummaryResolver } from '@angular/compiler';
import { TemplateParser } from '@angular/compiler';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewCompiler } from '@angular/compiler';
import { ɵConsole } from '@angular/core';

/**
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare class JitCompilerFactory implements CompilerFactory {
    private _defaultOptions;
    createCompiler(options?: CompilerOptions[]): Compiler;
}

/**
 * @publicApi
 */
export declare const platformBrowserDynamic: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

/**
 * @publicApi
 */
export declare const RESOURCE_CACHE_PROVIDER: Provider[];

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 *
 * @publicApi
 */
export declare class ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a extends ResourceLoader {
    private _cache;
    constructor();
    get(url: string): Promise<string>;
}

export declare const ɵCOMPILER_PROVIDERS__POST_R3__: StaticProvider[];

export declare class ɵCompilerImpl implements Compiler {
    private _metadataResolver;
    private _delegate;
    readonly injector: Injector;
    constructor(injector: Injector, _metadataResolver: CompileMetadataResolver, templateParser: TemplateParser, styleCompiler: StyleCompiler, viewCompiler: ViewCompiler, ngModuleCompiler: NgModuleCompiler, summaryResolver: SummaryResolver<Type<any>>, compileReflector: CompileReflector, jitEvaluator: JitEvaluator, compilerConfig: CompilerConfig, console: ɵConsole);
    private getExtraNgModuleProviders;
    compileModuleSync<T>(moduleType: Type<T>): NgModuleFactory<T>;
    compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>>;
    compileModuleAndAllComponentsSync<T>(moduleType: Type<T>): ModuleWithComponentFactories<T>;
    compileModuleAndAllComponentsAsync<T>(moduleType: Type<T>): Promise<ModuleWithComponentFactories<T>>;
    loadAotSummaries(summaries: () => any[]): void;
    hasAotSummary(ref: Type<any>): boolean;
    getComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
    clearCache(): void;
    clearCacheFor(type: Type<any>): void;
    getModuleId(moduleType: Type<any>): string | undefined;
}

/**
 * @publicApi
 */
export declare const ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS: StaticProvider[];

/**
 * A platform that included corePlatform and the compiler.
 *
 * @publicApi
 */
export declare const ɵplatformCoreDynamic: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

export declare class ɵResourceLoaderImpl extends ResourceLoader {
    get(url: string): Promise<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵResourceLoaderImpl>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵResourceLoaderImpl>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLmQudHMiLCJzb3VyY2VzIjpbInBsYXRmb3JtLWJyb3dzZXItZHluYW1pYy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4wLjdcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcbmltcG9ydCB7IENvbXBpbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBpbGVyQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xyXG5pbXBvcnQgeyBDb21waWxlUmVmbGVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xyXG5pbXBvcnQgeyBDb21waWxlckZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcGlsZXJPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSml0RXZhbHVhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlQ29tcGlsZXIgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZUxvYWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3R5bGVDb21waWxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgU3VtbWFyeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBhcnNlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZpZXdDb21waWxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgybVDb25zb2xlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSml0Q29tcGlsZXJGYWN0b3J5IGltcGxlbWVudHMgQ29tcGlsZXJGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zO1xyXG4gICAgY3JlYXRlQ29tcGlsZXIob3B0aW9ucz86IENvbXBpbGVyT3B0aW9uc1tdKTogQ29tcGlsZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljOiAoZXh0cmFQcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdIHwgdW5kZWZpbmVkKSA9PiBQbGF0Zm9ybVJlZjtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBSRVNPVVJDRV9DQUNIRV9QUk9WSURFUjogUHJvdmlkZXJbXTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBWRVJTSU9OOiBWZXJzaW9uO1xyXG5cclxuLyoqXHJcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIFJlc291cmNlTG9hZGVyIHRoYXQgdXNlcyBhIHRlbXBsYXRlIGNhY2hlIHRvIGF2b2lkIGRvaW5nIGFuIGFjdHVhbFxyXG4gKiBSZXNvdXJjZUxvYWRlci5cclxuICpcclxuICogVGhlIHRlbXBsYXRlIGNhY2hlIG5lZWRzIHRvIGJlIGJ1aWx0IGFuZCBsb2FkZWQgaW50byB3aW5kb3cuJHRlbXBsYXRlQ2FjaGVcclxuICogdmlhIGEgc2VwYXJhdGUgbWVjaGFuaXNtLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9keW5hbWljX3BsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY19hIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBfY2FjaGU7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtUNPTVBJTEVSX1BST1ZJREVSU19fUE9TVF9SM19fOiBTdGF0aWNQcm92aWRlcltdO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVDb21waWxlckltcGwgaW1wbGVtZW50cyBDb21waWxlciB7XHJcbiAgICBwcml2YXRlIF9tZXRhZGF0YVJlc29sdmVyO1xyXG4gICAgcHJpdmF0ZSBfZGVsZWdhdGU7XHJcbiAgICByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3I7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIF9tZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgdGVtcGxhdGVQYXJzZXI6IFRlbXBsYXRlUGFyc2VyLCBzdHlsZUNvbXBpbGVyOiBTdHlsZUNvbXBpbGVyLCB2aWV3Q29tcGlsZXI6IFZpZXdDb21waWxlciwgbmdNb2R1bGVDb21waWxlcjogTmdNb2R1bGVDb21waWxlciwgc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8VHlwZTxhbnk+PiwgY29tcGlsZVJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvciwgaml0RXZhbHVhdG9yOiBKaXRFdmFsdWF0b3IsIGNvbXBpbGVyQ29uZmlnOiBDb21waWxlckNvbmZpZywgY29uc29sZTogybVDb25zb2xlKTtcclxuICAgIHByaXZhdGUgZ2V0RXh0cmFOZ01vZHVsZVByb3ZpZGVycztcclxuICAgIGNvbXBpbGVNb2R1bGVTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBOZ01vZHVsZUZhY3Rvcnk8VD47XHJcbiAgICBjb21waWxlTW9kdWxlQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PFQ+PjtcclxuICAgIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPjtcclxuICAgIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IFByb21pc2U8TW9kdWxlV2l0aENvbXBvbmVudEZhY3RvcmllczxUPj47XHJcbiAgICBsb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllczogKCkgPT4gYW55W10pOiB2b2lkO1xyXG4gICAgaGFzQW90U3VtbWFyeShyZWY6IFR5cGU8YW55Pik6IGJvb2xlYW47XHJcbiAgICBnZXRDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZhY3Rvcnk8VD47XHJcbiAgICBjbGVhckNhY2hlKCk6IHZvaWQ7XHJcbiAgICBjbGVhckNhY2hlRm9yKHR5cGU6IFR5cGU8YW55Pik6IHZvaWQ7XHJcbiAgICBnZXRNb2R1bGVJZChtb2R1bGVUeXBlOiBUeXBlPGFueT4pOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtUlOVEVSTkFMX0JST1dTRVJfRFlOQU1JQ19QTEFURk9STV9QUk9WSURFUlM6IFN0YXRpY1Byb3ZpZGVyW107XHJcblxyXG4vKipcclxuICogQSBwbGF0Zm9ybSB0aGF0IGluY2x1ZGVkIGNvcmVQbGF0Zm9ybSBhbmQgdGhlIGNvbXBpbGVyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtXBsYXRmb3JtQ29yZUR5bmFtaWM6IChleHRyYVByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW10gfCB1bmRlZmluZWQpID0+IFBsYXRmb3JtUmVmO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVSZXNvdXJjZUxvYWRlckltcGwgZXh0ZW5kcyBSZXNvdXJjZUxvYWRlciB7XHJcbiAgICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCB7IH1cclxuIl19
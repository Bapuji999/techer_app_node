/**
 * @license Angular v9.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AnimationBuilder } from '@angular/animations';
import { AnimationDriver } from '@angular/animations/browser';
import { AnimationFactory } from '@angular/animations';
import { AnimationMetadata } from '@angular/animations';
import { AnimationOptions } from '@angular/animations';
import { AnimationPlayer } from '@angular/animations';
import { InjectionToken } from '@angular/core';
import { NgZone } from '@angular/core';
import { Provider } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { RendererStyleFlags2 } from '@angular/core';
import { RendererType2 } from '@angular/core';
import { ɵAnimationEngine } from '@angular/animations/browser';
import { ɵAnimationStyleNormalizer } from '@angular/animations/browser';
import { ɵCssKeyframesDriver } from '@angular/animations/browser';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';
import { ɵWebAnimationsDriver } from '@angular/animations/browser';
import { ɵWebAnimationsStyleNormalizer } from '@angular/animations/browser';

/**
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
export declare const ANIMATION_MODULE_TYPE: InjectionToken<"NoopAnimations" | "BrowserAnimations">;

/**
 * Exports `BrowserModule` with additional [dependency-injection providers](guide/glossary#provider)
 * for use with animations. See [Animations](guide/animations).
 * @publicApi
 */
export declare class BrowserAnimationsModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BrowserAnimationsModule, never, never, [typeof ɵngcc1.BrowserModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BrowserAnimationsModule>;
}

/**
 * A null player that must be imported to allow disabling of animations.
 * @publicApi
 */
export declare class NoopAnimationsModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<NoopAnimationsModule, never, never, [typeof ɵngcc1.BrowserModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<NoopAnimationsModule>;
}

export declare function ɵangular_packages_platform_browser_animations_animations_a(): ɵWebAnimationsDriver | ɵCssKeyframesDriver;

export declare function ɵangular_packages_platform_browser_animations_animations_b(): ɵWebAnimationsStyleNormalizer;

export declare function ɵangular_packages_platform_browser_animations_animations_c(renderer: ɵDomRendererFactory2, engine: ɵAnimationEngine, zone: NgZone): ɵAnimationRendererFactory;

/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export declare const ɵangular_packages_platform_browser_animations_animations_d: Provider[];

/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export declare const ɵangular_packages_platform_browser_animations_animations_e: Provider[];

export declare class ɵangular_packages_platform_browser_animations_animations_f implements Renderer2 {
    protected namespaceId: string;
    delegate: Renderer2;
    engine: ɵAnimationEngine;
    constructor(namespaceId: string, delegate: Renderer2, engine: ɵAnimationEngine);
    get data(): {
        [key: string]: any;
    };
    destroyNode: ((n: any) => void) | null;
    destroy(): void;
    createElement(name: string, namespace?: string | null | undefined): any;
    createComment(value: string): any;
    createText(value: string): any;
    appendChild(parent: any, newChild: any): void;
    insertBefore(parent: any, newChild: any, refChild: any): void;
    removeChild(parent: any, oldChild: any, isHostElement: boolean): void;
    selectRootElement(selectorOrNode: any, preserveContent?: boolean): any;
    parentNode(node: any): any;
    nextSibling(node: any): any;
    setAttribute(el: any, name: string, value: string, namespace?: string | null | undefined): void;
    removeAttribute(el: any, name: string, namespace?: string | null | undefined): void;
    addClass(el: any, name: string): void;
    removeClass(el: any, name: string): void;
    setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2 | undefined): void;
    removeStyle(el: any, style: string, flags?: RendererStyleFlags2 | undefined): void;
    setProperty(el: any, name: string, value: any): void;
    setValue(node: any, value: string): void;
    listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => void;
    protected disableAnimations(element: any, value: boolean): void;
}

export declare class ɵAnimationRenderer extends ɵangular_packages_platform_browser_animations_animations_f implements Renderer2 {
    factory: ɵAnimationRendererFactory;
    constructor(factory: ɵAnimationRendererFactory, namespaceId: string, delegate: Renderer2, engine: ɵAnimationEngine);
    setProperty(el: any, name: string, value: any): void;
    listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => any): () => void;
}

export declare class ɵAnimationRendererFactory implements RendererFactory2 {
    private delegate;
    private engine;
    private _zone;
    private _currentId;
    private _microtaskId;
    private _animationCallbacksBuffer;
    private _rendererCache;
    private _cdRecurDepth;
    private promise;
    constructor(delegate: RendererFactory2, engine: ɵAnimationEngine, _zone: NgZone);
    createRenderer(hostElement: any, type: RendererType2): Renderer2;
    begin(): void;
    private _scheduleCountTask;
    end(): void;
    whenRenderingDone(): Promise<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵAnimationRendererFactory>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵAnimationRendererFactory>;
}

export declare class ɵBrowserAnimationBuilder extends AnimationBuilder {
    private _nextAnimationId;
    private _renderer;
    constructor(rootRenderer: RendererFactory2, doc: any);
    build(animation: AnimationMetadata | AnimationMetadata[]): AnimationFactory;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵBrowserAnimationBuilder>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵBrowserAnimationBuilder>;
}

export declare class ɵBrowserAnimationFactory extends AnimationFactory {
    private _id;
    private _renderer;
    constructor(_id: string, _renderer: ɵAnimationRenderer);
    create(element: any, options?: AnimationOptions): AnimationPlayer;
}

export declare class ɵInjectableAnimationEngine extends ɵAnimationEngine {
    constructor(doc: any, driver: AnimationDriver, normalizer: ɵAnimationStyleNormalizer);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵInjectableAnimationEngine>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵInjectableAnimationEngine>;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5kLnRzIiwic291cmNlcyI6WyJhbmltYXRpb25zLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7Ozs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUE7Ozs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMC43XG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uRHJpdmVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25NZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvblBsYXllciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVuZGVyZXJTdHlsZUZsYWdzMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJlclR5cGUyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IMm1QW5pbWF0aW9uRW5naW5lIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyJztcclxuaW1wb3J0IHsgybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXInO1xyXG5pbXBvcnQgeyDJtUNzc0tleWZyYW1lc0RyaXZlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3Nlcic7XHJcbmltcG9ydCB7IMm1RG9tUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyDJtVdlYkFuaW1hdGlvbnNEcml2ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXInO1xyXG5pbXBvcnQgeyDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXInO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEFOSU1BVElPTl9NT0RVTEVfVFlQRTogSW5qZWN0aW9uVG9rZW48XCJOb29wQW5pbWF0aW9uc1wiIHwgXCJCcm93c2VyQW5pbWF0aW9uc1wiPjtcclxuXHJcbi8qKlxyXG4gKiBFeHBvcnRzIGBCcm93c2VyTW9kdWxlYCB3aXRoIGFkZGl0aW9uYWwgW2RlcGVuZGVuY3ktaW5qZWN0aW9uIHByb3ZpZGVyc10oZ3VpZGUvZ2xvc3NhcnkjcHJvdmlkZXIpXHJcbiAqIGZvciB1c2Ugd2l0aCBhbmltYXRpb25zLiBTZWUgW0FuaW1hdGlvbnNdKGd1aWRlL2FuaW1hdGlvbnMpLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIG51bGwgcGxheWVyIHRoYXQgbXVzdCBiZSBpbXBvcnRlZCB0byBhbGxvdyBkaXNhYmxpbmcgb2YgYW5pbWF0aW9ucy5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTm9vcEFuaW1hdGlvbnNNb2R1bGUge1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9hbmltYXRpb25zX2FuaW1hdGlvbnNfYSgpOiDJtVdlYkFuaW1hdGlvbnNEcml2ZXIgfCDJtUNzc0tleWZyYW1lc0RyaXZlcjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX2FuaW1hdGlvbnNfYW5pbWF0aW9uc19iKCk6IMm1V2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplcjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX2FuaW1hdGlvbnNfYW5pbWF0aW9uc19jKHJlbmRlcmVyOiDJtURvbVJlbmRlcmVyRmFjdG9yeTIsIGVuZ2luZTogybVBbmltYXRpb25FbmdpbmUsIHpvbmU6IE5nWm9uZSk6IMm1QW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5O1xyXG5cclxuLyoqXHJcbiAqIFNlcGFyYXRlIHByb3ZpZGVycyBmcm9tIHRoZSBhY3R1YWwgbW9kdWxlIHNvIHRoYXQgd2UgY2FuIGRvIGEgbG9jYWwgbW9kaWZpY2F0aW9uIGluIEdvb2dsZTMgdG9cclxuICogaW5jbHVkZSB0aGVtIGluIHRoZSBCcm93c2VyTW9kdWxlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9uc19hbmltYXRpb25zX2Q6IFByb3ZpZGVyW107XHJcblxyXG4vKipcclxuICogU2VwYXJhdGUgcHJvdmlkZXJzIGZyb20gdGhlIGFjdHVhbCBtb2R1bGUgc28gdGhhdCB3ZSBjYW4gZG8gYSBsb2NhbCBtb2RpZmljYXRpb24gaW4gR29vZ2xlMyB0b1xyXG4gKiBpbmNsdWRlIHRoZW0gaW4gdGhlIEJyb3dzZXJUZXN0aW5nTW9kdWxlLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9uc19hbmltYXRpb25zX2U6IFByb3ZpZGVyW107XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9hbmltYXRpb25zX2FuaW1hdGlvbnNfZiBpbXBsZW1lbnRzIFJlbmRlcmVyMiB7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZXNwYWNlSWQ6IHN0cmluZztcclxuICAgIGRlbGVnYXRlOiBSZW5kZXJlcjI7XHJcbiAgICBlbmdpbmU6IMm1QW5pbWF0aW9uRW5naW5lO1xyXG4gICAgY29uc3RydWN0b3IobmFtZXNwYWNlSWQ6IHN0cmluZywgZGVsZWdhdGU6IFJlbmRlcmVyMiwgZW5naW5lOiDJtUFuaW1hdGlvbkVuZ2luZSk7XHJcbiAgICBnZXQgZGF0YSgpOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIGRlc3Ryb3lOb2RlOiAoKG46IGFueSkgPT4gdm9pZCkgfCBudWxsO1xyXG4gICAgZGVzdHJveSgpOiB2b2lkO1xyXG4gICAgY3JlYXRlRWxlbWVudChuYW1lOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBhbnk7XHJcbiAgICBjcmVhdGVDb21tZW50KHZhbHVlOiBzdHJpbmcpOiBhbnk7XHJcbiAgICBjcmVhdGVUZXh0KHZhbHVlOiBzdHJpbmcpOiBhbnk7XHJcbiAgICBhcHBlbmRDaGlsZChwYXJlbnQ6IGFueSwgbmV3Q2hpbGQ6IGFueSk6IHZvaWQ7XHJcbiAgICBpbnNlcnRCZWZvcmUocGFyZW50OiBhbnksIG5ld0NoaWxkOiBhbnksIHJlZkNoaWxkOiBhbnkpOiB2b2lkO1xyXG4gICAgcmVtb3ZlQ2hpbGQocGFyZW50OiBhbnksIG9sZENoaWxkOiBhbnksIGlzSG9zdEVsZW1lbnQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgc2VsZWN0Um9vdEVsZW1lbnQoc2VsZWN0b3JPck5vZGU6IGFueSwgcHJlc2VydmVDb250ZW50PzogYm9vbGVhbik6IGFueTtcclxuICAgIHBhcmVudE5vZGUobm9kZTogYW55KTogYW55O1xyXG4gICAgbmV4dFNpYmxpbmcobm9kZTogYW55KTogYW55O1xyXG4gICAgc2V0QXR0cmlidXRlKGVsOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWQ7XHJcbiAgICByZW1vdmVBdHRyaWJ1dGUoZWw6IGFueSwgbmFtZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogdm9pZDtcclxuICAgIGFkZENsYXNzKGVsOiBhbnksIG5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICByZW1vdmVDbGFzcyhlbDogYW55LCBuYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgc2V0U3R5bGUoZWw6IGFueSwgc3R5bGU6IHN0cmluZywgdmFsdWU6IGFueSwgZmxhZ3M/OiBSZW5kZXJlclN0eWxlRmxhZ3MyIHwgdW5kZWZpbmVkKTogdm9pZDtcclxuICAgIHJlbW92ZVN0eWxlKGVsOiBhbnksIHN0eWxlOiBzdHJpbmcsIGZsYWdzPzogUmVuZGVyZXJTdHlsZUZsYWdzMiB8IHVuZGVmaW5lZCk6IHZvaWQ7XHJcbiAgICBzZXRQcm9wZXJ0eShlbDogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG4gICAgc2V0VmFsdWUobm9kZTogYW55LCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICAgIGxpc3Rlbih0YXJnZXQ6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYm9vbGVhbiB8IHZvaWQpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHJvdGVjdGVkIGRpc2FibGVBbmltYXRpb25zKGVsZW1lbnQ6IGFueSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUFuaW1hdGlvblJlbmRlcmVyIGV4dGVuZHMgybVhbmd1bGFyX3BhY2thZ2VzX3BsYXRmb3JtX2Jyb3dzZXJfYW5pbWF0aW9uc19hbmltYXRpb25zX2YgaW1wbGVtZW50cyBSZW5kZXJlcjIge1xyXG4gICAgZmFjdG9yeTogybVBbmltYXRpb25SZW5kZXJlckZhY3Rvcnk7XHJcbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5OiDJtUFuaW1hdGlvblJlbmRlcmVyRmFjdG9yeSwgbmFtZXNwYWNlSWQ6IHN0cmluZywgZGVsZWdhdGU6IFJlbmRlcmVyMiwgZW5naW5lOiDJtUFuaW1hdGlvbkVuZ2luZSk7XHJcbiAgICBzZXRQcm9wZXJ0eShlbDogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG4gICAgbGlzdGVuKHRhcmdldDogJ3dpbmRvdycgfCAnZG9jdW1lbnQnIHwgJ2JvZHknIHwgYW55LCBldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiBhbnkpOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUFuaW1hdGlvblJlbmRlcmVyRmFjdG9yeSBpbXBsZW1lbnRzIFJlbmRlcmVyRmFjdG9yeTIge1xyXG4gICAgcHJpdmF0ZSBkZWxlZ2F0ZTtcclxuICAgIHByaXZhdGUgZW5naW5lO1xyXG4gICAgcHJpdmF0ZSBfem9uZTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRJZDtcclxuICAgIHByaXZhdGUgX21pY3JvdGFza0lkO1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uQ2FsbGJhY2tzQnVmZmVyO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXJDYWNoZTtcclxuICAgIHByaXZhdGUgX2NkUmVjdXJEZXB0aDtcclxuICAgIHByaXZhdGUgcHJvbWlzZTtcclxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBSZW5kZXJlckZhY3RvcnkyLCBlbmdpbmU6IMm1QW5pbWF0aW9uRW5naW5lLCBfem9uZTogTmdab25lKTtcclxuICAgIGNyZWF0ZVJlbmRlcmVyKGhvc3RFbGVtZW50OiBhbnksIHR5cGU6IFJlbmRlcmVyVHlwZTIpOiBSZW5kZXJlcjI7XHJcbiAgICBiZWdpbigpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVDb3VudFRhc2s7XHJcbiAgICBlbmQoKTogdm9pZDtcclxuICAgIHdoZW5SZW5kZXJpbmdEb25lKCk6IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVCcm93c2VyQW5pbWF0aW9uQnVpbGRlciBleHRlbmRzIEFuaW1hdGlvbkJ1aWxkZXIge1xyXG4gICAgcHJpdmF0ZSBfbmV4dEFuaW1hdGlvbklkO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb290UmVuZGVyZXI6IFJlbmRlcmVyRmFjdG9yeTIsIGRvYzogYW55KTtcclxuICAgIGJ1aWxkKGFuaW1hdGlvbjogQW5pbWF0aW9uTWV0YWRhdGEgfCBBbmltYXRpb25NZXRhZGF0YVtdKTogQW5pbWF0aW9uRmFjdG9yeTtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVCcm93c2VyQW5pbWF0aW9uRmFjdG9yeSBleHRlbmRzIEFuaW1hdGlvbkZhY3Rvcnkge1xyXG4gICAgcHJpdmF0ZSBfaWQ7XHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcclxuICAgIGNvbnN0cnVjdG9yKF9pZDogc3RyaW5nLCBfcmVuZGVyZXI6IMm1QW5pbWF0aW9uUmVuZGVyZXIpO1xyXG4gICAgY3JlYXRlKGVsZW1lbnQ6IGFueSwgb3B0aW9ucz86IEFuaW1hdGlvbk9wdGlvbnMpOiBBbmltYXRpb25QbGF5ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1SW5qZWN0YWJsZUFuaW1hdGlvbkVuZ2luZSBleHRlbmRzIMm1QW5pbWF0aW9uRW5naW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGRvYzogYW55LCBkcml2ZXI6IEFuaW1hdGlvbkRyaXZlciwgbm9ybWFsaXplcjogybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyB9XHJcbiJdfQ==
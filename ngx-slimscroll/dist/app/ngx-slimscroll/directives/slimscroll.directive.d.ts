import { ViewContainerRef, OnChanges, OnDestroy, OnInit, Renderer2, EventEmitter, SimpleChanges } from '@angular/core';
import { SlimScrollOptions, ISlimScrollOptions } from '../classes/slimscroll-options.class';
import { ISlimScrollEvent, SlimScrollEvent } from '../classes/slimscroll-event.class';
import { ISlimScrollState } from '../classes/slimscroll-state.class';
import { Subscription } from 'rxjs';
export declare const easing: {
    [key: string]: Function;
};
export declare class SlimScrollDirective implements OnInit, OnChanges, OnDestroy {
    private viewContainer;
    private renderer;
    private document;
    private optionsDefaults;
    enabled: boolean;
    options: SlimScrollOptions;
    scrollEvents: EventEmitter<ISlimScrollEvent>;
    scrollChanged: EventEmitter<ISlimScrollState>;
    barVisibilityChange: EventEmitter<boolean>;
    el: HTMLElement;
    wrapper: HTMLElement;
    grid: HTMLElement;
    bar: HTMLElement;
    body: HTMLElement;
    pageY: number;
    top: number;
    dragging: boolean;
    mutationThrottleTimeout: number;
    mutationObserver: MutationObserver;
    lastTouchPositionY: number;
    visibleTimeout: any;
    interactionSubscriptions: Subscription;
    constructor(viewContainer: ViewContainerRef, renderer: Renderer2, document: any, optionsDefaults: ISlimScrollOptions);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    setup(): void;
    handleEvent(e: SlimScrollEvent): void;
    setStyle(): void;
    onMutation(): void;
    wrapContainer(): void;
    initGrid(): void;
    initBar(): void;
    getBarHeight(): void;
    scrollTo(y: number, duration: number, easingFunc: string): void;
    scrollContent(y: number, isWheel: boolean, isJump: boolean): null | number;
    initWheel: () => void;
    initDrag: () => void;
    showBarAndGrid(): void;
    hideBarAndGrid(): void;
    preventDefaultEvent: (e: MouseEvent) => void;
    destroy(): void;
    unwrap(wrapper: HTMLElement): void;
    onResize($event: any): void;
}

/**
 * @license Angular v9.0.7
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AfterContentInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Compiler } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { NgModuleFactoryLoader } from '@angular/core';
import { NgProbeToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { Provider } from '@angular/core';
import { QueryList } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

/**
 * Provides access to information about a route associated with a component
 * that is loaded in an outlet.
 * Use to traverse the `RouterState` tree and extract information from nodes.
 *
 * {@example router/activated-route/module.ts region="activated-route"
 *     header="activated-route.component.ts"}
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare class ActivatedRoute {
    /** An observable of the URL segments matched by this route. */
    url: Observable<UrlSegment[]>;
    /** An observable of the matrix parameters scoped to this route. */
    params: Observable<Params>;
    /** An observable of the query parameters shared by all the routes. */
    queryParams: Observable<Params>;
    /** An observable of the URL fragment shared by all the routes. */
    fragment: Observable<string>;
    /** An observable of the static and resolved data of this route. */
    data: Observable<Data>;
    /** The outlet name of the route, a constant. */
    outlet: string;
    /** The component of the route, a constant. */
    component: Type<any> | string | null;
    /** The current snapshot of this route */
    snapshot: ActivatedRouteSnapshot;
    /** The configuration used to match this route. */
    get routeConfig(): Route | null;
    /** The root of the router state. */
    get root(): ActivatedRoute;
    /** The parent of this route in the router state tree. */
    get parent(): ActivatedRoute | null;
    /** The first child of this route in the router state tree. */
    get firstChild(): ActivatedRoute | null;
    /** The children of this route in the router state tree. */
    get children(): ActivatedRoute[];
    /** The path from the root of the router state tree to this route. */
    get pathFromRoot(): ActivatedRoute[];
    /** An Observable that contains a map of the required and optional parameters
     * specific to the route.
     * The map supports retrieving single and multiple values from the same parameter. */
    get paramMap(): Observable<ParamMap>;
    /**
     * An Observable that contains a map of the query parameters available to all routes.
     * The map supports retrieving single and multiple values from the query parameter.
     */
    get queryParamMap(): Observable<ParamMap>;
    toString(): string;
}

/**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * ```
 * @Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class ActivatedRouteSnapshot {
    /** The URL segments matched by this route */
    url: UrlSegment[];
    /** The matrix parameters scoped to this route */
    params: Params;
    /** The query parameters shared by all the routes */
    queryParams: Params;
    /** The URL fragment shared by all the routes */
    fragment: string;
    /** The static and resolved data of this route */
    data: Data;
    /** The outlet name of the route */
    outlet: string;
    /** The component of the route */
    component: Type<any> | string | null;
    /** The configuration used to match this route **/
    readonly routeConfig: Route | null;
    /** The root of the router state */
    get root(): ActivatedRouteSnapshot;
    /** The parent of this route in the router state tree */
    get parent(): ActivatedRouteSnapshot | null;
    /** The first child of this route in the router state tree */
    get firstChild(): ActivatedRouteSnapshot | null;
    /** The children of this route in the router state tree */
    get children(): ActivatedRouteSnapshot[];
    /** The path from the root of the router state tree to this route */
    get pathFromRoot(): ActivatedRouteSnapshot[];
    get paramMap(): ParamMap;
    get queryParamMap(): ParamMap;
    toString(): string;
}

/**
 * An event triggered at the end of the activation part
 * of the Resolve phase of routing.
 * @see `ActivationStart`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ActivationEnd {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * An event triggered at the start of the activation part
 * of the Resolve phase of routing.
 * @see ActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ActivationStart {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a route can be activated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canActivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanActivateTeam implements CanActivate {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canActivate(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canActivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canActivate: [CanActivateTeam]
 *       }
 *     ])
 *   ],
 *   providers: [CanActivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canActivate` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canActivate: ['canActivateTeam']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canActivateTeam',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a child route can be activated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canActivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanActivateTeam implements CanActivateChild {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canActivateChild(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canActivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'root',
 *         canActivateChild: [CanActivateTeam],
 *         children: [
 *           {
 *              path: 'team/:id',
 *              component: TeamComponent
 *           }
 *         ]
 *       }
 *     ])
 *   ],
 *   providers: [CanActivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canActivateChild` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'root',
 *         canActivateChild: ['canActivateTeam'],
 *         children: [
 *           {
 *             path: 'team/:id',
 *             component: TeamComponent
 *           }
 *         ]
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canActivateTeam',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a route can be deactivated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canDeactivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanDeactivateTeam implements CanDeactivate<TeamComponent> {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canDeactivate(
 *     component: TeamComponent,
 *     currentRoute: ActivatedRouteSnapshot,
 *     currentState: RouterStateSnapshot,
 *     nextState: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canDeactivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canDeactivate: [CanDeactivateTeam]
 *       }
 *     ])
 *   ],
 *   providers: [CanDeactivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canDeactivate` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canDeactivate: ['canDeactivateTeam']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canDeactivateTeam',
 *       useValue: (component: TeamComponent, currentRoute: ActivatedRouteSnapshot, currentState:
 * RouterStateSnapshot, nextState: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanDeactivate<T> {
    canDeactivate(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if children can be loaded.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canLoadChildren(user: UserToken, id: string, segments: UrlSegment[]): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanLoadTeamSection implements CanLoad {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
 *     return this.permissions.canLoadChildren(this.currentUser, route, segments);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         loadChildren: 'team.js',
 *         canLoad: [CanLoadTeamSection]
 *       }
 *     ])
 *   ],
 *   providers: [CanLoadTeamSection, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canLoad` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         loadChildren: 'team.js',
 *         canLoad: ['canLoadTeamSection']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canLoadTeamSection',
 *       useValue: (route: Route, segments: UrlSegment[]) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanLoad {
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * An event triggered at the end of the child-activation part
 * of the Resolve phase of routing.
 * @see `ChildActivationStart`
 * @see `ResolveStart` *
 * @publicApi
 */
export declare class ChildActivationEnd {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * An event triggered at the start of the child-activation
 * part of the Resolve phase of routing.
 * @see  `ChildActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ChildActivationStart {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * Store contextual information about the children (= nested) `RouterOutlet`
 *
 * @publicApi
 */
export declare class ChildrenOutletContexts {
    private contexts;
    /** Called when a `RouterOutlet` directive is instantiated */
    onChildOutletCreated(childName: string, outlet: RouterOutlet): void;
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
    onChildOutletDestroyed(childName: string): void;
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
    onOutletDeactivated(): Map<string, OutletContext>;
    onOutletReAttached(contexts: Map<string, OutletContext>): void;
    getOrCreateContext(childName: string): OutletContext;
    getContext(childName: string): OutletContext | null;
}

/**
 * Converts a `Params` instance to a `ParamMap`.
 * @param params The instance to convert.
 * @returns The new map instance.
 *
 * @publicApi
 */
export declare function convertToParamMap(params: Params): ParamMap;

/**
 *
 * Represents static data associated with a particular route.
 *
 * @see `Route#data`
 *
 * @publicApi
 */
export declare type Data = {
    [name: string]: any;
};

/**
 * @description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * @publicApi
 */
export declare class DefaultUrlSerializer implements UrlSerializer {
    /** Parses a url into a `UrlTree` */
    parse(url: string): UrlTree;
    /** Converts a `UrlTree` into a url */
    serialize(tree: UrlTree): string;
}

/**
 * A string of the form `path/to/file#exportName` that acts as a URL for a set of routes to load.
 *
 * @see `Route#loadChildren`
 * @publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated in favor of the proposed ES dynamic
 * `import()` expression, which offers a more natural and standards-based mechanism to dynamically
 * load an ES module at runtime.
 */
export declare type DeprecatedLoadChildren = string;

/**
 * @description
 *
 * Represents the detached route tree.
 *
 * This is an opaque value the router will give to a custom route reuse strategy
 * to store and retrieve later on.
 *
 * @publicApi
 */
export declare type DetachedRouteHandle = {};

/**
 * Error handler that is invoked when a navigation error occurs.
 *
 * If the handler returns a value, the navigation promise is resolved with this value.
 * If the handler throws an exception, the navigation promise is rejected with
 * the exception.
 *
 * @publicApi
 */
declare type ErrorHandler = (error: any) => any;

/**
 * Router events that allow you to track the lifecycle of the router.
 *
 * The sequence of router events is as follows:
 *
 * - `NavigationStart`,
 * - `RouteConfigLoadStart`,
 * - `RouteConfigLoadEnd`,
 * - `RoutesRecognized`,
 * - `GuardsCheckStart`,
 * - `ChildActivationStart`,
 * - `ActivationStart`,
 * - `GuardsCheckEnd`,
 * - `ResolveStart`,
 * - `ResolveEnd`,
 * - `ActivationEnd`
 * - `ChildActivationEnd`
 * - `NavigationEnd`,
 * - `NavigationCancel`,
 * - `NavigationError`
 * - `Scroll`
 *
 * @publicApi
 */
export declare type Event = RouterEvent | RouteConfigLoadStart | RouteConfigLoadEnd | ChildActivationStart | ChildActivationEnd | ActivationStart | ActivationEnd | Scroll;

/**
 * A set of configuration options for a router module, provided in the
 * `forRoot()` method.
 *
 * @publicApi
 */
export declare interface ExtraOptions {
    /**
     * When true, log all internal navigation events to the console.
     * Use for debugging.
     */
    enableTracing?: boolean;
    /**
     * When true, enable the location strategy that uses the URL fragment
     * instead of the history API.
     */
    useHash?: boolean;
    /**
     * One of `enabled` or `disabled`.
     * When set to `enabled`, the initial navigation starts before the root component is created.
     * The bootstrap is blocked until the initial navigation is complete. This value is required for
     * [server-side rendering](guide/universal) to work.
     * When set to `disabled`, the initial navigation is not performed.
     * The location listener is set up before the root component gets created.
     * Use if there is a reason to have more control over when the router
     * starts its initial navigation due to some complex initialization logic.
     *
     * Legacy values are deprecated since v4 and should not be used for new applications:
     *
     * * `legacy_enabled` - Default for compatibility.
     * The initial navigation starts after the root component has been created,
     * but the bootstrap is not blocked until the initial navigation is complete.
     * * `legacy_disabled` - The initial navigation is not performed.
     * The location listener is set up after the root component gets created.
     * * `true` - same as `legacy_enabled`.
     * * `false` - same as `legacy_disabled`.
     */
    initialNavigation?: InitialNavigation;
    /**
     * A custom error handler for failed navigations.
     */
    errorHandler?: ErrorHandler;
    /**
     * Configures a preloading strategy.
     * One of `PreloadAllModules` or `NoPreloading` (the default).
     */
    preloadingStrategy?: any;
    /**
     * Define what the router should do if it receives a navigation request to the current URL.
     * Default is `ignore`, which causes the router ignores the navigation.
     * This can disable features such as a "refresh" button.
     * Use this option to configure the behavior when navigating to the
     * current URL. Default is 'ignore'.
     */
    onSameUrlNavigation?: 'reload' | 'ignore';
    /**
     * Configures if the scroll position needs to be restored when navigating back.
     *
     * * 'disabled'- (Default) Does nothing. Scroll position is maintained on navigation.
     * * 'top'- Sets the scroll position to x = 0, y = 0 on all navigation.
     * * 'enabled'- Restores the previous scroll position on backward navigation, else sets the
     * position to the anchor if one is provided, or sets the scroll position to [0, 0] (forward
     * navigation). This option will be the default in the future.
     *
     * You can implement custom scroll restoration behavior by adapting the enabled behavior as
     * in the following example.
     *
     * ```typescript
     * class AppModule {
     *   constructor(router: Router, viewportScroller: ViewportScroller) {
     *     router.events.pipe(
     *       filter((e: Event): e is Scroll => e instanceof Scroll)
     *     ).subscribe(e => {
     *       if (e.position) {
     *         // backward navigation
     *         viewportScroller.scrollToPosition(e.position);
     *       } else if (e.anchor) {
     *         // anchor navigation
     *         viewportScroller.scrollToAnchor(e.anchor);
     *       } else {
     *         // forward navigation
     *         viewportScroller.scrollToPosition([0, 0]);
     *       }
     *     });
     *   }
     * }
     * ```
     */
    scrollPositionRestoration?: 'disabled' | 'enabled' | 'top';
    /**
     * When set to 'enabled', scrolls to the anchor element when the URL has a fragment.
     * Anchor scrolling is disabled by default.
     *
     * Anchor scrolling does not happen on 'popstate'. Instead, we restore the position
     * that we stored or scroll to the top.
     */
    anchorScrolling?: 'disabled' | 'enabled';
    /**
     * Configures the scroll offset the router will use when scrolling to an element.
     *
     * When given a tuple with x and y position value,
     * the router uses that offset each time it scrolls.
     * When given a function, the router invokes the function every time
     * it restores scroll position.
     */
    scrollOffset?: [number, number] | (() => [number, number]);
    /**
     * Defines how the router merges parameters, data, and resolved data from parent to child
     * routes. By default ('emptyOnly'), inherits parent parameters only for
     * path-less or component-less routes.
     * Set to 'always' to enable unconditional inheritance of parent parameters.
     */
    paramsInheritanceStrategy?: 'emptyOnly' | 'always';
    /**
     * A custom handler for malformed URI errors. The handler is invoked when `encodedURI` contains
     * invalid character sequences.
     * The default implementation is to redirect to the root URL, dropping
     * any path or parameter information. The function takes three parameters:
     *
     * - `'URIError'` - Error thrown when parsing a bad URL.
     * - `'UrlSerializer'` - UrlSerializer that’s configured with the router.
     * - `'url'` -  The malformed URL that caused the URIError
     * */
    malformedUriErrorHandler?: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree;
    /**
     * Defines when the router updates the browser URL. By default ('deferred'),
     * update after successful navigation.
     * Set to 'eager' if prefer to update the URL at the beginning of navigation.
     * Updating the URL early allows you to handle a failure of navigation by
     * showing an error message with the URL that failed.
     */
    urlUpdateStrategy?: 'deferred' | 'eager';
    /**
     * Enables a bug fix that corrects relative link resolution in components with empty paths.
     * Example:
     *
     * ```
     * const routes = [
     *   {
     *     path: '',
     *     component: ContainerComponent,
     *     children: [
     *       { path: 'a', component: AComponent },
     *       { path: 'b', component: BComponent },
     *     ]
     *   }
     * ];
     * ```
     *
     * From the `ContainerComponent`, this will not work:
     *
     * `<a [routerLink]="['./a']">Link to A</a>`
     *
     * However, this will work:
     *
     * `<a [routerLink]="['../a']">Link to A</a>`
     *
     * In other words, you're required to use `../` rather than `./`. This is currently the default
     * behavior. Setting this option to `corrected` enables the fix.
     */
    relativeLinkResolution?: 'legacy' | 'corrected';
}

/**
 * An event triggered at the end of the Guard phase of routing.
 *
 * @publicApi
 */
export declare class GuardsCheckEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    /** @docsNotRequired */
    shouldActivate: boolean;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot, 
    /** @docsNotRequired */
    shouldActivate: boolean);
    toString(): string;
}

/**
 * An event triggered at the start of the Guard phase of routing.
 *
 * @publicApi
 */
export declare class GuardsCheckStart extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * Allowed values in an `ExtraOptions` object that configure
 * when the router performs the initial navigation operation.
 *
 * * 'enabled' - The initial navigation starts before the root component is created.
 * The bootstrap is blocked until the initial navigation is complete. This value is required
 * for [server-side rendering](guide/universal) to work.
 * * 'disabled' - The initial navigation is not performed. The location listener is set up before
 * the root component gets created. Use if there is a reason to have
 * more control over when the router starts its initial navigation due to some complex
 * initialization logic.
 * * 'legacy_enabled'- (Default, for compatibility.) The initial navigation starts after the root component has been created.
 * The bootstrap is not blocked until the initial navigation is complete. @deprecated
 * * 'legacy_disabled'- The initial navigation is not performed. The location listener is set up
 * after the root component gets created. @deprecated since v4
 * * `true` - same as 'legacy_enabled'. @deprecated since v4
 * * `false` - same as 'legacy_disabled'. @deprecated since v4
 *
 * The 'legacy_enabled' and 'legacy_disabled' should not be used for new applications.
 *
 * @see `forRoot()`
 *
 * @publicApi
 */
export declare type InitialNavigation = true | false | 'enabled' | 'disabled' | 'legacy_enabled' | 'legacy_disabled';

/**
 *
 * A string of the form `path/to/file#exportName` that acts as a URL for a set of routes to load,
 * or a function that returns such a set.
 *
 * The string form of `LoadChildren` is deprecated (see `DeprecatedLoadChildren`). The function
 * form (`LoadChildrenCallback`) should be used instead.
 *
 * @see `Route#loadChildren`.
 * @publicApi
 */
export declare type LoadChildren = LoadChildrenCallback | DeprecatedLoadChildren;

/**
 *
 * A function that is called to resolve a collection of lazy-loaded routes.
 *
 * Often this function will be implemented using an ES dynamic `import()` expression. For example:
 *
 * ```
 * [{
 *   path: 'lazy',
 *   loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
 * }];
 * ```
 *
 * This function _must_ match the form above: an arrow function of the form
 * `() => import('...').then(mod => mod.MODULE)`.
 *
 * @see `Route#loadChildren`.
 * @publicApi
 */
export declare type LoadChildrenCallback = () => Type<any> | NgModuleFactory<any> | Observable<Type<any>> | Promise<NgModuleFactory<any> | Type<any> | any>;

/**
 * Information about a navigation operation. Retrieve the most recent
 * navigation object with the `router.getCurrentNavigation()` method.
 *
 * @publicApi
 */
export declare type Navigation = {
    /**
     * The ID of the current navigation.
     */
    id: number;
    /**
     * The target URL passed into the `Router#navigateByUrl()` call before navigation. This is
     * the value before the router has parsed or applied redirects to it.
     */
    initialUrl: string | UrlTree;
    /**
     * The initial target URL after being parsed with `UrlSerializer.extract()`.
     */
    extractedUrl: UrlTree;
    /**
     * The extracted URL after redirects have been applied.
     * This URL may not be available immediately, therefore this property can be `undefined`.
     * It is guaranteed to be set after the `RoutesRecognized` event fires.
     */
    finalUrl?: UrlTree;
    /**
     * Identifies how this navigation was triggered.
     *
     * * 'imperative'--Triggered by `router.navigateByUrl` or `router.navigate`.
     * * 'popstate'--Triggered by a popstate event.
     * * 'hashchange'--Triggered by a hashchange event.
     */
    trigger: 'imperative' | 'popstate' | 'hashchange';
    /**
     * Options that controlled the strategy used for this navigation.
     * See `NavigationExtras`.
     */
    extras: NavigationExtras;
    /**
     * The previously successful `Navigation` object. Only one previous navigation
     * is available, therefore this previous `Navigation` object has a `null` value
     * for its own `previousNavigation`.
     */
    previousNavigation: Navigation | null;
};

/**
 * An event triggered when a navigation is canceled, directly or indirectly.
 *
 * This can happen when a [route guard](guide/router#milestone-5-route-guards)
 * returns `false` or initiates a redirect by returning a `UrlTree`.
 *
 * @publicApi
 */
export declare class NavigationCancel extends RouterEvent {
    /** @docsNotRequired */
    reason: string;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    reason: string);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * An event triggered when a navigation ends successfully.
 *
 * @publicApi
 */
export declare class NavigationEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * An event triggered when a navigation fails due to an unexpected error.
 *
 * @publicApi
 */
export declare class NavigationError extends RouterEvent {
    /** @docsNotRequired */
    error: any;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    error: any);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Options that modify the navigation strategy.
 *
 * @publicApi
 */
export declare interface NavigationExtras {
    /**
     * Specifies a root URI to use for relative navigation.
     *
     * For example, consider the following route configuration where the parent route
     * has two children.
     *
     * ```
     * [{
    *   path: 'parent',
    *   component: ParentComponent,
    *   children: [{
    *     path: 'list',
    *     component: ListComponent
    *   },{
    *     path: 'child',
    *     component: ChildComponent
    *   }]
    * }]
     * ```
     *
     * The following `go()` function navigates to the `list` route by
     * interpreting the destination URI as relative to the activated `child`  route
     *
     * ```
     *  @Component({...})
     *  class ChildComponent {
    *    constructor(private router: Router, private route: ActivatedRoute) {}
    *
    *    go() {
    *      this.router.navigate(['../list'], { relativeTo: this.route });
    *    }
    *  }
     * ```
     */
    relativeTo?: ActivatedRoute | null;
    /**
     * Sets query parameters to the URL.
     *
     * ```
     * // Navigate to /results?page=1
     * this.router.navigate(['/results'], { queryParams: { page: 1 } });
     * ```
     */
    queryParams?: Params | null;
    /**
     * Sets the hash fragment for the URL.
     *
     * ```
     * // Navigate to /results#top
     * this.router.navigate(['/results'], { fragment: 'top' });
     * ```
     */
    fragment?: string;
    /**
     * **DEPRECATED**: Use `queryParamsHandling: "preserve"` instead to preserve
     * query parameters for the next navigation.
     *
     * @deprecated since v4
     */
    preserveQueryParams?: boolean;
    /**
     * How to handle query parameters in the router link for the next navigation.
     * One of:
     * * `merge` : Merge new with current parameters.
     * * `preserve` : Preserve current parameters.
     *
     * ```
     * // from /results?page=1 to /view?page=1&page=2
     * this.router.navigate(['/view'], { queryParams: { page: 2 },  queryParamsHandling: "merge" });
     * ```
     */
    queryParamsHandling?: QueryParamsHandling | null;
    /**
     * When true, preserves the URL fragment for the next navigation
     *
     * ```
     * // Preserve fragment from /results#top to /view#top
     * this.router.navigate(['/view'], { preserveFragment: true });
     * ```
     */
    preserveFragment?: boolean;
    /**
     * When true, navigates without pushing a new state into history.
     *
     * ```
     * // Navigate silently to /view
     * this.router.navigate(['/view'], { skipLocationChange: true });
     * ```
     */
    skipLocationChange?: boolean;
    /**
     * When true, navigates while replacing the current state in history.
     *
     * ```
     * // Navigate to /view
     * this.router.navigate(['/view'], { replaceUrl: true });
     * ```
     */
    replaceUrl?: boolean;
    /**
     * Developer-defined state that can be passed to any navigation.
     * Access this value through the `Navigation.extras` object
     * returned from `router.getCurrentNavigation()` while a navigation is executing.
     *
     * After a navigation completes, the router writes an object containing this
     * value together with a `navigationId` to `history.state`.
     * The value is written when `location.go()` or `location.replaceState()`
     * is called before activating this route.
     *
     * Note that `history.state` does not pass an object equality test because
     * the router adds the `navigationId` on each navigation.
     */
    state?: {
        [k: string]: any;
    };
}

/**
 * An event triggered when a navigation starts.
 *
 * @publicApi
 */
export declare class NavigationStart extends RouterEvent {
    /**
     * Identifies the call or event that triggered the navigation.
     * An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`.
     *
     */
    navigationTrigger?: 'imperative' | 'popstate' | 'hashchange';
    /**
     * The navigation state that was previously supplied to the `pushState` call,
     * when the navigation is triggered by a `popstate` event. Otherwise null.
     *
     * The state object is defined by `NavigationExtras`, and contains any
     * developer-defined state value, as well as a unique ID that
     * the router assigns to every router transition/navigation.
     *
     * From the perspective of the router, the router never "goes back".
     * When the user clicks on the back button in the browser,
     * a new navigation ID is created.
     *
     * Use the ID in this previous-state object to differentiate between a newly created
     * state and one returned to by a `popstate` event, so that you can restore some
     * remembered state, such as scroll position.
     *
     */
    restoredState?: {
        [k: string]: any;
        navigationId: number;
    } | null;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    navigationTrigger?: 'imperative' | 'popstate' | 'hashchange', 
    /** @docsNotRequired */
    restoredState?: {
        [k: string]: any;
        navigationId: number;
    } | null);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Provides a preloading strategy that does not preload any modules.
 *
 * This strategy is enabled by default.
 *
 * @publicApi
 */
export declare class NoPreloading implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * Store contextual information about a `RouterOutlet`
 *
 * @publicApi
 */
export declare class OutletContext {
    outlet: RouterOutlet | null;
    route: ActivatedRoute | null;
    resolver: ComponentFactoryResolver | null;
    children: ChildrenOutletContexts;
    attachRef: ComponentRef<any> | null;
}

/**
 * A map that provides access to the required and optional parameters
 * specific to a route.
 * The map supports retrieving a single value with `get()`
 * or multiple values with `getAll()`.
 *
 * @see [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 *
 * @publicApi
 */
export declare interface ParamMap {
    /**
     * Reports whether the map contains a given parameter.
     * @param name The parameter name.
     * @returns True if the map contains the given parameter, false otherwise.
     */
    has(name: string): boolean;
    /**
     * Retrieves a single value for a parameter.
     * @param name The parameter name.
     * @return The parameter's single value,
     * or the first value if the parameter has multiple values,
     * or `null` when there is no such parameter.
     */
    get(name: string): string | null;
    /**
     * Retrieves multiple values for a parameter.
     * @param name The parameter name.
     * @return An array containing one or more values,
     * or an empty array if there is no such parameter.
     *
     */
    getAll(name: string): string[];
    /** Names of the parameters in the map. */
    readonly keys: string[];
}

/**
 * A collection of matrix and query URL parameters.
 * @see `convertToParamMap()`
 * @see `ParamMap`
 *
 * @publicApi
 */
export declare type Params = {
    [key: string]: any;
};

/**
 * @description
 *
 * Provides a preloading strategy that preloads all modules as quickly as possible.
 *
 * ```
 * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * @publicApi
 */
export declare class PreloadAllModules implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * @description
 *
 * Provides a preloading strategy.
 *
 * @publicApi
 */
export declare abstract class PreloadingStrategy {
    abstract preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * The primary routing outlet.
 *
 * @publicApi
 */
export declare const PRIMARY_OUTLET = "primary";

/**
 * Registers a [DI provider](guide/glossary#provider) for a set of routes.
 * @param routes The route configuration to provide.
 *
 * @usageNotes
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @publicApi
 */
export declare function provideRoutes(routes: Routes): any;

/**
 *
 * How to handle query parameters in a router link.
 * One of:
 * - `merge` : Merge new with current parameters.
 * - `preserve` : Preserve current parameters.
 *
 * @see `NavigationExtras#queryParamsHandling`
 * @see `RouterLink`
 * @publicApi
 */
export declare type QueryParamsHandling = 'merge' | 'preserve' | '';

/**
 * @description
 *
 * Interface that classes can implement to be a data provider.
 * A data provider class can be used with the router to resolve data during navigation.
 * The interface defines a `resolve()` method that will be invoked when the navigation starts.
 * The router will then wait for the data to be resolved before the route is finally activated.
 *
 * ```
 * @Injectable({ providedIn: 'root' })
 * export class HeroResolver implements Resolve<Hero> {
 *   constructor(private service: HeroService) {}
 *
 *   resolve(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<any>|Promise<any>|any {
 *     return this.service.getHero(route.paramMap.get('id'));
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'detail/:id',
 *         component: HeroDetailComponent,
 *         resolve: {
 *           hero: HeroResolver
 *         }
 *       }
 *     ])
 *   ],
 *   exports: [RouterModule]
 * })
 * export class AppRoutingModule {}
 * ```
 *
 * You can alternatively provide a function with the `resolve` signature:
 *
 * ```
 * export const myHero: Hero = {
 *   // ...
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'detail/:id',
 *         component: HeroComponent,
 *         resolve: {
 *           hero: 'heroResolver'
 *         }
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'heroResolver',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => myHero
 *     }
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface Resolve<T> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T;
}

/**
 *
 * Represents the resolved data associated with a particular route.
 *
 * @see `Route#resolve`.
 *
 * @publicApi
 */
export declare type ResolveData = {
    [name: string]: any;
};

/**
 * An event triggered at the end of the Resolve phase of routing.
 * @see `ResolveStart`.
 *
 * @publicApi
 */
export declare class ResolveEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * An event triggered at the the start of the Resolve phase of routing.
 *
 * Runs in the "resolve" phase whether or not there is anything to resolve.
 * In future, may change to only run when there are things to be resolved.
 *
 * @publicApi
 */
export declare class ResolveStart extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * A configuration object that defines a single route.
 * A set of routes are collected in a `Routes` array to define a `Router` configuration.
 * The router attempts to match segments of a given URL against each route,
 * using the configuration options defined in this object.
 *
 * Supports static, parameterized, redirect, and wildcard routes, as well as
 * custom route data and resolve methods.
 *
 * For detailed usage information, see the [Routing Guide](guide/router).
 *
 * @usageNotes
 *
 * ### Simple Configuration
 *
 * The following route specifies that when navigating to, for example,
 * `/team/11/user/bob`, the router creates the 'Team' component
 * with the 'User' child component in it.
 *
 * ```
 * [{
 *   path: 'team/:id',
  *  component: Team,
 *   children: [{
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * ### Multiple Outlets
 *
 * The following route creates sibling components with multiple outlets.
 * When navigating to `/team/11(aux:chat/jim)`, the router creates the 'Team' component next to
 * the 'Chat' component. The 'Chat' component is placed into the 'aux' outlet.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team
 * }, {
 *   path: 'chat/:user',
 *   component: Chat
 *   outlet: 'aux'
 * }]
 * ```
 *
 * ### Wild Cards
 *
 * The following route uses wild-card notation to specify a component
 * that is always instantiated regardless of where you navigate to.
 *
 * ```
 * [{
 *   path: '**',
 *   component: WildcardComponent
 * }]
 * ```
 *
 * ### Redirects
 *
 * The following route uses the `redirectTo` property to ignore a segment of
 * a given URL when looking for a child path.
 *
 * When navigating to '/team/11/legacy/user/jim', the router changes the URL segment
 * '/team/11/legacy/user/jim' to '/team/11/user/jim', and then instantiates
 * the Team component with the User child component in it.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: 'legacy/user/:name',
 *     redirectTo: 'user/:name'
 *   }, {
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * The redirect path can be relative, as shown in this example, or absolute.
 * If we change the `redirectTo` value in the example to the absolute URL segment '/user/:name',
 * the result URL is also absolute, '/user/jim'.

 * ### Empty Path
 *
 * Empty-path route configurations can be used to instantiate components that do not 'consume'
 * any URL segments.
 *
 * In the following configuration, when navigating to
 * `/team/11`, the router instantiates the 'AllUsers' component.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: '',
 *     component: AllUsers
 *   }, {
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * Empty-path routes can have children. In the following example, when navigating
 * to `/team/11/user/jim`, the router instantiates the wrapper component with
 * the user component in it.
 *
 * Note that an empty path route inherits its parent's parameters and data.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: '',
 *     component: WrapperCmp,
 *     children: [{
 *       path: 'user/:name',
 *       component: User
 *     }]
 *   }]
 * }]
 * ```
 *
 * ### Matching Strategy
 *
 * The default path-match strategy is 'prefix', which means that the router
 * checks URL elements from the left to see if the URL matches a specified path.
 * For example, '/team/11/user' matches 'team/:id'.
 *
 * ```
 * [{
 *   path: '',
 *   pathMatch: 'prefix', //default
 *   redirectTo: 'main'
 * }, {
 *   path: 'main',
 *   component: Main
 * }]
 * ```
 *
 * You can specify the path-match strategy 'full' to make sure that the path
 * covers the whole unconsumed URL. It is important to do this when redirecting
 * empty-path routes. Otherwise, because an empty path is a prefix of any URL,
 * the router would apply the redirect even when navigating to the redirect destination,
 * creating an endless loop.
 *
 * In the following example, supplying the 'full' `pathMatch` strategy ensures
 * that the router applies the redirect if and only if navigating to '/'.
 *
 * ```
 * [{
 *   path: '',
 *   pathMatch: 'full',
 *   redirectTo: 'main'
 * }, {
 *   path: 'main',
 *   component: Main
 * }]
 * ```
 *
 * ### Componentless Routes
 *
 * You can share parameters between sibling components.
 * For example, suppose that two sibling components should go next to each other,
 * and both of them require an ID parameter. You can accomplish this using a route
 * that does not specify a component at the top level.
 *
 * In the following example, 'MainChild' and 'AuxChild' are siblings.
 * When navigating to 'parent/10/(a//aux:b)', the route instantiates
 * the main child and aux child components next to each other.
 * For this to work, the application component must have the primary and aux outlets defined.
 *
 * ```
 * [{
 *    path: 'parent/:id',
 *    children: [
 *      { path: 'a', component: MainChild },
 *      { path: 'b', component: AuxChild, outlet: 'aux' }
 *    ]
 * }]
 * ```
 *
 * The router merges the parameters, data, and resolve of the componentless
 * parent into the parameters, data, and resolve of the children.
 *
 * This is especially useful when child components are defined
 * with an empty path string, as in the following example.
 * With this configuration, navigating to '/parent/10' creates
 * the main child and aux components.
 *
 * ```
 * [{
 *    path: 'parent/:id',
 *    children: [
 *      { path: '', component: MainChild },
 *      { path: '', component: AuxChild, outlet: 'aux' }
 *    ]
 * }]
 * ```
 *
 * ### Lazy Loading
 *
 * Lazy loading speeds up application load time by splitting the application
 * into multiple bundles and loading them on demand.
 * To use lazy loading, provide the `loadChildren` property  instead of the `children` property.
 *
 * Given the following example route, the router will lazy load
 * the associated module on demand using the browser native import system.
 *
 * ```
 * [{
 *   path: 'lazy',
 *   loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
 * }];
 * ```
 *
 * @publicApi
 */
export declare interface Route {
    /**
     * The path to match against. Cannot be used together with a custom `matcher` function.
     * A URL string that uses router matching notation.
     * Can be a wild card (`**`) that matches any URL (see Usage Notes below).
     * Default is "/" (the root path).
     *
     */
    path?: string;
    /**
     * The path-matching strategy, one of 'prefix' or 'full'.
     * Default is 'prefix'.
     *
     * By default, the router checks URL elements from the left to see if the URL
     * matches a given  path, and stops when there is a match. For example,
     * '/team/11/user' matches 'team/:id'.
     *
     * The path-match strategy 'full' matches against the entire URL.
     * It is important to do this when redirecting empty-path routes.
     * Otherwise, because an empty path is a prefix of any URL,
     * the router would apply the redirect even when navigating
     * to the redirect destination, creating an endless loop.
     *
     */
    pathMatch?: string;
    /**
     * A custom URL-matching function. Cannot be used together with `path`.
     */
    matcher?: UrlMatcher;
    /**
     * The component to instantiate when the path matches.
     * Can be empty if child routes specify components.
     */
    component?: Type<any>;
    /**
     * A URL to which to redirect when a the path matches.
     * Absolute if the URL begins with a slash (/), otherwise relative to the path URL.
     * When not present, router does not redirect.
     */
    redirectTo?: string;
    /**
     * Name of a `RouterOutlet` object where the component can be placed
     * when the path matches.
     */
    outlet?: string;
    /**
     * An array of dependency-injection tokens used to look up `CanActivate()`
     * handlers, in order to determine if the current user is allowed to
     * activate the component. By default, any user can activate.
     */
    canActivate?: any[];
    /**
     * An array of DI tokens used to look up `CanActivateChild()` handlers,
     * in order to determine if the current user is allowed to activate
     * a child of the component. By default, any user can activate a child.
     */
    canActivateChild?: any[];
    /**
     * An array of DI tokens used to look up `CanDeactivate()`
     * handlers, in order to determine if the current user is allowed to
     * deactivate the component. By default, any user can deactivate.
     *
     */
    canDeactivate?: any[];
    /**
     * An array of DI tokens used to look up `CanLoad()`
     * handlers, in order to determine if the current user is allowed to
     * load the component. By default, any user can load.
     */
    canLoad?: any[];
    /**
     * Additional developer-defined data provided to the component via
     * `ActivatedRoute`. By default, no additional data is passed.
     */
    data?: Data;
    /**
     * A map of DI tokens used to look up data resolvers. See `Resolve`.
     */
    resolve?: ResolveData;
    /**
     * An array of child `Route` objects that specifies a nested route
     * configuration.
     */
    children?: Routes;
    /**
     * A `LoadChildren` object specifying lazy-loaded child routes.
     */
    loadChildren?: LoadChildren;
    /**
     * Defines when guards and resolvers will be run. One of
     * - `paramsOrQueryParamsChange` : Run when query parameters change.
     * - `always` : Run on every execution.
     * By default, guards and resolvers run only when the matrix
     * parameters of the route change.
     */
    runGuardsAndResolvers?: RunGuardsAndResolvers;
}

/**
 * An event triggered when a route has been lazy loaded.
 *
 * @publicApi
 */
export declare class RouteConfigLoadEnd {
    /** @docsNotRequired */
    route: Route;
    constructor(
    /** @docsNotRequired */
    route: Route);
    toString(): string;
}

/**
 * An event triggered before lazy loading a route configuration.
 *
 * @publicApi
 */
export declare class RouteConfigLoadStart {
    /** @docsNotRequired */
    route: Route;
    constructor(
    /** @docsNotRequired */
    route: Route);
    toString(): string;
}

/**
 * @description
 *
 * A service that provides navigation and URL manipulation capabilities.
 *
 * @see `Route`.
 * @see [Routing and Navigation Guide](guide/router).
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class Router {
    private rootComponentType;
    private urlSerializer;
    private rootContexts;
    private location;
    config: Routes;
    private currentUrlTree;
    private rawUrlTree;
    private browserUrlTree;
    private readonly transitions;
    private navigations;
    private lastSuccessfulNavigation;
    private currentNavigation;
    private locationSubscription;
    private navigationId;
    private configLoader;
    private ngModule;
    private console;
    private isNgZoneEnabled;
    /**
     * An event stream for routing events in this NgModule.
     */
    readonly events: Observable<Event>;
    /**
     * The current state of routing in this NgModule.
     */
    readonly routerState: RouterState;
    /**
     * A handler for navigation errors in this NgModule.
     */
    errorHandler: ErrorHandler;
    /**
     * A handler for errors thrown by `Router.parseUrl(url)`
     * when `url` contains an invalid character.
     * The most common case is a `%` sign
     * that's not encoded and is not part of a percent encoded sequence.
     */
    malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree;
    /**
     * True if at least one navigation event has occurred,
     * false otherwise.
     */
    navigated: boolean;
    private lastSuccessfulId;
    /**
     * A strategy for extracting and merging URLs.
     * Used for AngularJS to Angular migrations.
     */
    urlHandlingStrategy: UrlHandlingStrategy;
    /**
     * A strategy for re-using routes.
     */
    routeReuseStrategy: RouteReuseStrategy;
    /**
     * How to handle a navigation request to the current URL. One of:
     * - `'ignore'` :  The router ignores the request.
     * - `'reload'` : The router reloads the URL. Use to implement a "refresh" feature.
     */
    onSameUrlNavigation: 'reload' | 'ignore';
    /**
     * How to merge parameters, data, and resolved data from parent to child
     * routes. One of:
     *
     * - `'emptyOnly'` : Inherit parent parameters, data, and resolved data
     * for path-less or component-less routes.
     * - `'always'` : Inherit parent parameters, data, and resolved data
     * for all child routes.
     */
    paramsInheritanceStrategy: 'emptyOnly' | 'always';
    /**
     * Determines when the router updates the browser URL.
     * By default (`"deferred"`), updates the browser URL after navigation has finished.
     * Set to `'eager'` to update the browser URL at the beginning of navigation.
     * You can choose to update early so that, if navigation fails,
     * you can show an error message with the URL that failed.
     */
    urlUpdateStrategy: 'deferred' | 'eager';
    /**
     * Enables a bug fix that corrects relative link resolution in components with empty paths.
     * @see `RouterModule`
     */
    relativeLinkResolution: 'legacy' | 'corrected';
    /**
     * Creates the router service.
     */
    constructor(rootComponentType: Type<any> | null, urlSerializer: UrlSerializer, rootContexts: ChildrenOutletContexts, location: Location, injector: Injector, loader: NgModuleFactoryLoader, compiler: Compiler, config: Routes);
    private setupNavigations;
    private getTransition;
    private setTransition;
    /**
     * Sets up the location change listener and performs the initial navigation.
     */
    initialNavigation(): void;
    /**
     * Sets up the location change listener.
     */
    setUpLocationChangeListener(): void;
    /** The current URL. */
    get url(): string;
    /** The current Navigation object if one exists */
    getCurrentNavigation(): Navigation | null;
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * @param config The route array for the new configuration.
     *
     * @usageNotes
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
    resetConfig(config: Routes): void;
    /** @docsNotRequired */
    ngOnDestroy(): void;
    /** Disposes of the router. */
    dispose(): void;
    /**
     * Applies an array of commands to the current URL tree and creates a new URL tree.
     *
     * When given an activated route, applies the given commands starting from the route.
     * Otherwise, applies the given command starting from the root.
     *
     * @param commands An array of commands to apply.
     * @param navigationExtras Options that control the navigation strategy. This function
     * only utilizes properties in `NavigationExtras` that would change the provided URL.
     * @returns The new URL tree.
     *
     * @usageNotes
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it,
     * // you can do the following:
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     */
    createUrlTree(commands: any[], navigationExtras?: NavigationExtras): UrlTree;
    /**
     * Navigate based on the provided URL, which must be absolute.
     *
     * @param url An absolute URL. The function does not apply any delta to the current URL.
     * @param extras An object containing properties that modify the navigation strategy.
     * The function ignores any properties in the `NavigationExtras` that would change the
     * provided URL.
     *
     * @returns A Promise that resolves to 'true' when navigation succeeds,
     * to 'false' when navigation fails, or is rejected on error.
     *
     * @usageNotes
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     */
    navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean>;
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * @usageNotes
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * The first parameter of `navigate()` is a delta to be applied to the current URL
     * or the one provided in the `relativeTo` property of the second parameter (the
     * `NavigationExtras`).
     *
     * In order to affect this browser's `history.state` entry, the `state`
     * parameter can be passed. This must be an object because the router
     * will add the `navigationId` property to this object before creating
     * the new history item.
     */
    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>;
    /** Serializes a `UrlTree` into a string */
    serializeUrl(url: UrlTree): string;
    /** Parses a string into a `UrlTree` */
    parseUrl(url: string): UrlTree;
    /** Returns whether the url is activated */
    isActive(url: string | UrlTree, exact: boolean): boolean;
    private removeEmptyProps;
    private processNavigations;
    private scheduleNavigation;
    private setBrowserUrl;
    private resetStateAndUrl;
    private resetUrlToCurrentUrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Router>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Router, never, never, {}, {}, never>;
}

/**
 * A [DI token](guide/glossary/#di-token) for the router service.
 *
 * @publicApi
 */
export declare const ROUTER_CONFIGURATION: InjectionToken<ExtraOptions>;

/**
 * A [DI token](guide/glossary/#di-token) for the router initializer that
 * is called after the app is bootstrapped.
 *
 * @publicApi
 */
export declare const ROUTER_INITIALIZER: InjectionToken<(compRef: ComponentRef<any>) => void>;

/**
 * @description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * @publicApi
 */
export declare abstract class RouteReuseStrategy {
    /** Determines if this route (and its subtree) should be detached to be reused later */
    abstract shouldDetach(route: ActivatedRouteSnapshot): boolean;
    /**
     * Stores the detached route.
     *
     * Storing a `null` value should erase the previously stored value.
     */
    abstract store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void;
    /** Determines if this route (and its subtree) should be reattached */
    abstract shouldAttach(route: ActivatedRouteSnapshot): boolean;
    /** Retrieves the previously stored route */
    abstract retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null;
    /** Determines if a route should be reused */
    abstract shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}

/**
 * Base for events the router goes through, as opposed to events tied to a specific
 * route. Fired one time for any given navigation.
 *
 * @usageNotes
 *
 * ```ts
 * class MyService {
 *   constructor(public router: Router, logger: Logger) {
 *     router.events.pipe(
 *       filter(e => e instanceof RouterEvent)
 *     ).subscribe(e => {
 *       logger.log(e.id, e.url);
 *     });
 *   }
 * }
 * ```
 *
 * @see `Event`
 * @publicApi
 */
export declare class RouterEvent {
    /** A unique ID that the router assigns to every router navigation. */
    id: number;
    /** The URL that is the destination for this navigation. */
    url: string;
    constructor(
    /** A unique ID that the router assigns to every router navigation. */
    id: number, 
    /** The URL that is the destination for this navigation. */
    url: string);
}

/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`.
 * When linking to this `user/:name` route, you use the `RouterLink` directive.
 *
 * If the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
 * directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * You can tell the directive how to handle queryParams. Available options are:
 *  - `'merge'`: merge the queryParams into the current queryParams
 *  - `'preserve'`: preserve the current queryParams
 *  - default/`''`: use the queryParams only
 *
 * Same options for {@link NavigationExtras#queryParamsHandling
 * NavigationExtras#queryParamsHandling}.
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * You can provide a `state` value to be persisted to the browser's History.state
 * property (See https://developer.mozilla.org/en-US/docs/Web/API/History#Properties). It's
 * used as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [state]="{tracingId: 123}">
 *   link to user component
 * </a>
 * ```
 *
 * And later the value can be read from the router through `router.getCurrentNavigation`.
 * For example, to capture the `tracingId` above during the `NavigationStart` event:
 *
 * ```
 * // Get NavigationStart events
 * router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
 *   const navigation = router.getCurrentNavigation();
 *   tracingService.trace({id: navigation.extras.state.tracingId});
 * });
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * See {@link Router#createUrlTree createUrlTree} for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLink {
    private router;
    private route;
    queryParams: {
        [k: string]: any;
    };
    fragment: string;
    queryParamsHandling: QueryParamsHandling;
    preserveFragment: boolean;
    skipLocationChange: boolean;
    replaceUrl: boolean;
    state?: {
        [k: string]: any;
    };
    private commands;
    private preserve;
    constructor(router: Router, route: ActivatedRoute, tabIndex: string, renderer: Renderer2, el: ElementRef);
    set routerLink(commands: any[] | string);
    /**
     * @deprecated 4.0.0 use `queryParamsHandling` instead.
     */
    set preserveQueryParams(value: boolean);
    onClick(): boolean;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLink>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLink, ":not(a):not(area)[routerLink]", never, {
    "routerLink": "routerLink";
    "preserveQueryParams": "preserveQueryParams";
    "queryParams": "queryParams";
    "fragment": "fragment";
    "queryParamsHandling": "queryParamsHandling";
    "preserveFragment": "preserveFragment";
    "skipLocationChange": "skipLocationChange";
    "replaceUrl": "replaceUrl";
    "state": "state";
}, {}, never>;
}

/**
 *
 * @description
 *
 * Lets you add a CSS class to an element when the link's route becomes active.
 *
 * This directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLinkActive implements OnChanges, OnDestroy, AfterContentInit {
    private router;
    private element;
    private renderer;
    private link?;
    private linkWithHref?;
    links: QueryList<RouterLink>;
    linksWithHrefs: QueryList<RouterLinkWithHref>;
    private classes;
    private subscription;
    readonly isActive: boolean;
    routerLinkActiveOptions: {
        exact: boolean;
    };
    constructor(router: Router, element: ElementRef, renderer: Renderer2, link?: RouterLink | undefined, linkWithHref?: RouterLinkWithHref | undefined);
    ngAfterContentInit(): void;
    set routerLinkActive(data: string[] | string);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private update;
    private isLinkActive;
    private hasActiveLinks;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLinkActive>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLinkActive, "[routerLinkActive]", ["routerLinkActive"], {
    "routerLinkActiveOptions": "routerLinkActiveOptions";
    "routerLinkActive": "routerLinkActive";
}, {}, ["links", "linksWithHrefs"]>;
}

/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLinkWithHref implements OnChanges, OnDestroy {
    private router;
    private route;
    private locationStrategy;
    target: string;
    queryParams: {
        [k: string]: any;
    };
    fragment: string;
    queryParamsHandling: QueryParamsHandling;
    preserveFragment: boolean;
    skipLocationChange: boolean;
    replaceUrl: boolean;
    state?: {
        [k: string]: any;
    };
    private commands;
    private subscription;
    private preserve;
    href: string;
    constructor(router: Router, route: ActivatedRoute, locationStrategy: LocationStrategy);
    set routerLink(commands: any[] | string);
    set preserveQueryParams(value: boolean);
    ngOnChanges(changes: {}): any;
    ngOnDestroy(): any;
    onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean;
    private updateTargetUrlAndHref;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLinkWithHref>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLinkWithHref, "a[routerLink],area[routerLink]", never, {
    "routerLink": "routerLink";
    "preserveQueryParams": "preserveQueryParams";
    "target": "target";
    "queryParams": "queryParams";
    "fragment": "fragment";
    "queryParamsHandling": "queryParamsHandling";
    "preserveFragment": "preserveFragment";
    "skipLocationChange": "skipLocationChange";
    "replaceUrl": "replaceUrl";
    "state": "state";
}, {}, never>;
}

/**
 * @usageNotes
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @description
 *
 * Adds router directives and providers.
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular router service solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * @see [Routing and Navigation](guide/router.html) for an
 * overview of how the router service should be used.
 *
 * @publicApi
 */
export declare class RouterModule {
    constructor(guard: any, router: Router);
    /**
     * Creates and configures a module with all the router providers and directives.
     * Optionally sets up an application listener to perform an initial navigation.
     *
     * @param routes An array of `Route` objects that define the navigation paths for the application.
     * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
     * @return The new router module.
    */
    static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterModule>;
    /**
     * Creates a module with all the router directives and a provider registering routes.
     */
    static forChild(routes: Routes): ModuleWithProviders<RouterModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<RouterModule, [typeof RouterOutlet, typeof RouterLink, typeof RouterLinkWithHref, typeof RouterLinkActive, typeof ɵEmptyOutletComponent], never, [typeof RouterOutlet, typeof RouterLink, typeof RouterLinkWithHref, typeof RouterLinkActive, typeof ɵEmptyOutletComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<RouterModule>;
}

/**
 * @description
 *
 * Acts as a placeholder that Angular dynamically fills based on the current router state.
 *
 * Each outlet can have a unique name, determined by the optional `name` attribute.
 * The name cannot be set or changed dynamically. If not set, default value is "primary".
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet emits an activate event when a new component is instantiated,
 * and a deactivate event when a component is destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterOutlet implements OnDestroy, OnInit {
    private parentContexts;
    private location;
    private resolver;
    private changeDetector;
    private activated;
    private _activatedRoute;
    private name;
    activateEvents: EventEmitter<any>;
    deactivateEvents: EventEmitter<any>;
    constructor(parentContexts: ChildrenOutletContexts, location: ViewContainerRef, resolver: ComponentFactoryResolver, name: string, changeDetector: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    get isActivated(): boolean;
    get component(): Object;
    get activatedRoute(): ActivatedRoute;
    get activatedRouteData(): Data;
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach(): ComponentRef<any>;
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute): void;
    deactivate(): void;
    activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver | null): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterOutlet, "router-outlet", ["outlet"], {}, {
    "activateEvents": "activate";
    "deactivateEvents": "deactivate";
}, never>;
}

/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 * @publicApi
 */
export declare class RouterPreloader implements OnDestroy {
    private router;
    private injector;
    private preloadingStrategy;
    private loader;
    private subscription;
    constructor(router: Router, moduleLoader: NgModuleFactoryLoader, compiler: Compiler, injector: Injector, preloadingStrategy: PreloadingStrategy);
    setUpPreloading(): void;
    preload(): Observable<any>;
    ngOnDestroy(): void;
    private processRoutes;
    private preloadConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterPreloader>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RouterPreloader>;
}

/**
 * Represents the state of the router as a tree of activated routes.
 *
 * @usageNotes
 *
 * Every node in the route tree is an `ActivatedRoute` instance
 * that knows about the "consumed" URL segments, the extracted parameters,
 * and the resolved data.
 * Use the `ActivatedRoute` properties to traverse the tree from any node.
 *
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @see `ActivatedRoute`
 *
 * @publicApi
 */
export declare class RouterState extends ɵangular_packages_router_router_m<ActivatedRoute> {
    /** The current snapshot of the router state */
    snapshot: RouterStateSnapshot;
    toString(): string;
}

/**
 * @description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class RouterStateSnapshot extends ɵangular_packages_router_router_m<ActivatedRouteSnapshot> {
    /** The url from which this snapshot was created */
    url: string;
    toString(): string;
}

/**
 * The [DI token](guide/glossary/#di-token) for a router configuration.
 * @see `ROUTES`
 * @publicApi
 */
export declare const ROUTES: InjectionToken<Route[][]>;

/**
 * Represents a route configuration for the Router service.
 * An array of `Route` objects, used in `Router.config` and for nested route configurations
 * in `Route.children`.
 *
 * @see `Route`
 * @see `Router`
 * @publicApi
 */
export declare type Routes = Route[];

/**
 *An event triggered when routes are recognized.
 *
 * @publicApi
 */
export declare class RoutesRecognized extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    /** @docsNotRequired */
    toString(): string;
}

/**
 *
 * A policy for when to run guards and resolvers on a route.
 *
 * @see `Route#runGuardsAndResolvers`
 * @publicApi
 */
export declare type RunGuardsAndResolvers = 'pathParamsChange' | 'pathParamsOrQueryParamsChange' | 'paramsChange' | 'paramsOrQueryParamsChange' | 'always' | ((from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean);

/**
 * An event triggered by scrolling.
 *
 * @publicApi
 */
export declare class Scroll {
    /** @docsNotRequired */
    readonly routerEvent: NavigationEnd;
    /** @docsNotRequired */
    readonly position: [number, number] | null;
    /** @docsNotRequired */
    readonly anchor: string | null;
    constructor(
    /** @docsNotRequired */
    routerEvent: NavigationEnd, 
    /** @docsNotRequired */
    position: [number, number] | null, 
    /** @docsNotRequired */
    anchor: string | null);
    toString(): string;
}

/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @publicApi
 */
export declare abstract class UrlHandlingStrategy {
    /**
     * Tells the router if this URL should be processed.
     *
     * When it returns true, the router will execute the regular navigation.
     * When it returns false, the router will set the router state to an empty state.
     * As a result, all the active components will be destroyed.
     *
     */
    abstract shouldProcessUrl(url: UrlTree): boolean;
    /**
     * Extracts the part of the URL that should be handled by the router.
     * The rest of the URL will remain untouched.
     */
    abstract extract(url: UrlTree): UrlTree;
    /**
     * Merges the URL fragment with the rest of the URL.
     */
    abstract merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree;
}

/**
 * A function for matching a route against URLs. Implement a custom URL matcher
 * for `Route.matcher` when a combination of `path` and `pathMatch`
 * is not expressive enough. Cannot be used together with `path` and `pathMatch`.
 *
 * @param segments An array of URL segments.
 * @param group A segment group.
 * @param route The route to match against.
 * @returns The match-result.
 *
 * @usageNotes
 *
 * The following matcher matches HTML files.
 *
 * ```
 * export function htmlFiles(url: UrlSegment[]) {
 *   return url.length === 1 && url[0].path.endsWith('.html') ? ({consumed: url}) : null;
 * }
 *
 * export const routes = [{ matcher: htmlFiles, component: AnyComponent }];
 * ```
 *
 * @publicApi
 */
export declare type UrlMatcher = (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => UrlMatchResult;

/**
 * Represents the result of matching URLs with a custom matching function.
 *
 * * `consumed` is an array of the consumed URL segments.
 * * `posParams` is a map of positional parameters.
 *
 * @see `UrlMatcher()`
 * @publicApi
 */
export declare type UrlMatchResult = {
    consumed: UrlSegment[];
    posParams?: {
        [name: string]: UrlSegment;
    };
};

/**
 * @description
 *
 * Represents a single URL segment.
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class UrlSegment {
    /** The path part of a URL segment */
    path: string;
    /** The matrix parameters associated with a segment */
    parameters: {
        [name: string]: string;
    };
    constructor(
    /** The path part of a URL segment */
    path: string, 
    /** The matrix parameters associated with a segment */
    parameters: {
        [name: string]: string;
    });
    get parameterMap(): ParamMap;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 * @publicApi
 */
export declare class UrlSegmentGroup {
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments: UrlSegment[];
    /** The list of children of this group */
    children: {
        [key: string]: UrlSegmentGroup;
    };
    /** The parent node in the url tree */
    parent: UrlSegmentGroup | null;
    constructor(
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments: UrlSegment[], 
    /** The list of children of this group */
    children: {
        [key: string]: UrlSegmentGroup;
    });
    /** Whether the segment has child segments */
    hasChildren(): boolean;
    /** Number of child segments */
    get numberOfChildren(): number;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 * @publicApi
 */
export declare abstract class UrlSerializer {
    /** Parse a url into a `UrlTree` */
    abstract parse(url: string): UrlTree;
    /** Converts a `UrlTree` into a url */
    abstract serialize(tree: UrlTree): string;
}

/**
 * @description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class UrlTree {
    /** The root segment group of the URL tree */
    root: UrlSegmentGroup;
    /** The query params of the URL */
    queryParams: Params;
    /** The fragment of the URL */
    fragment: string | null;
    get queryParamMap(): ParamMap;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * @docsNotRequired
 */
export declare const ɵangular_packages_router_router_a: InjectionToken<void>;

export declare function ɵangular_packages_router_router_b(): NgProbeToken;

export declare function ɵangular_packages_router_router_c(router: Router, viewportScroller: ViewportScroller, config: ExtraOptions): ɵangular_packages_router_router_o;

export declare function ɵangular_packages_router_router_d(platformLocationStrategy: PlatformLocation, baseHref: string, options?: ExtraOptions): HashLocationStrategy | PathLocationStrategy;

export declare function ɵangular_packages_router_router_e(router: Router): any;

export declare function ɵangular_packages_router_router_f(urlSerializer: UrlSerializer, contexts: ChildrenOutletContexts, location: Location, injector: Injector, loader: NgModuleFactoryLoader, compiler: Compiler, config: Route[][], opts?: ExtraOptions, urlHandlingStrategy?: UrlHandlingStrategy, routeReuseStrategy?: RouteReuseStrategy): Router;

export declare function ɵangular_packages_router_router_g(router: Router): ActivatedRoute;

/**
 * Router initialization requires two steps:
 *
 * First, we start the navigation in a `APP_INITIALIZER` to block the bootstrap if
 * a resolver or a guard executes asynchronously.
 *
 * Next, we actually run activation in a `BOOTSTRAP_LISTENER`, using the
 * `afterPreactivation` hook provided by the router.
 * The router navigation starts, reaches the point when preactivation is done, and then
 * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
 */
export declare class ɵangular_packages_router_router_h {
    private injector;
    private initNavigation;
    private resultOfPreactivationDone;
    constructor(injector: Injector);
    appInitializer(): Promise<any>;
    bootstrapListener(bootstrappedComponentRef: ComponentRef<any>): void;
    private isLegacyEnabled;
    private isLegacyDisabled;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_router_router_h>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_router_router_h>;
}

export declare function ɵangular_packages_router_router_i(r: ɵangular_packages_router_router_h): () => Promise<any>;

export declare function ɵangular_packages_router_router_j(r: ɵangular_packages_router_router_h): (bootstrappedComponentRef: ComponentRef<any>) => void;

export declare function ɵangular_packages_router_router_k(): (typeof ɵangular_packages_router_router_h | {
    provide: InjectionToken<(() => void)[]>;
    multi: boolean;
    useFactory: typeof ɵangular_packages_router_router_i;
    deps: (typeof ɵangular_packages_router_router_h)[];
    useExisting?: undefined;
} | {
    provide: InjectionToken<(compRef: ComponentRef<any>) => void>;
    useFactory: typeof ɵangular_packages_router_router_j;
    deps: (typeof ɵangular_packages_router_router_h)[];
    multi?: undefined;
    useExisting?: undefined;
} | {
    provide: InjectionToken<((compRef: ComponentRef<any>) => void)[]>;
    multi: boolean;
    useExisting: InjectionToken<(compRef: ComponentRef<any>) => void>;
    useFactory?: undefined;
    deps?: undefined;
})[];


export declare class ɵangular_packages_router_router_m<T> {
    constructor(root: ɵangular_packages_router_router_n<T>);
    get root(): T;
}

export declare class ɵangular_packages_router_router_n<T> {
    value: T;
    children: ɵangular_packages_router_router_n<T>[];
    constructor(value: T, children: ɵangular_packages_router_router_n<T>[]);
    toString(): string;
}

export declare class ɵangular_packages_router_router_o implements OnDestroy {
    private router;
    /** @docsNotRequired */ readonly viewportScroller: ViewportScroller;
    private options;
    private routerEventsSubscription;
    private scrollEventsSubscription;
    private lastId;
    private lastSource;
    private restoredId;
    private store;
    constructor(router: Router, 
    /** @docsNotRequired */ viewportScroller: ViewportScroller, options?: {
        scrollPositionRestoration?: 'disabled' | 'enabled' | 'top';
        anchorScrolling?: 'disabled' | 'enabled';
    });
    init(): void;
    private createScrollEvents;
    private consumeScrollEvents;
    private scheduleScrollEvent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_router_router_o>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ɵangular_packages_router_router_o, never, never, {}, {}, never>;
}


/**
 * This component is used internally within the router to be a placeholder when an empty
 * router-outlet is needed. For example, with a config such as:
 *
 * `{path: 'parent', outlet: 'nav', children: [...]}`
 *
 * In order to render, there needs to be a component on this config, which will default
 * to this `EmptyOutletComponent`.
 */
declare class ɵEmptyOutletComponent {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵEmptyOutletComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ɵEmptyOutletComponent, "ng-component", never, {}, {}, never>;
}
export { ɵEmptyOutletComponent }
export { ɵEmptyOutletComponent as ɵangular_packages_router_router_l }

/**
 * Flattens single-level nested arrays.
 */
export declare function ɵflatten<T>(arr: T[][]): T[];

export declare const ɵROUTER_PROVIDERS: Provider[];

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmQudHMiLCJzb3VyY2VzIjpbInJvdXRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzOURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5WUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7Ozs7Ozs7Ozs7Ozs7OztBQWFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY5LjAuN1xuICogKGMpIDIwMTAtMjAyMCBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBpbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdQcm9iZVRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGF0aExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybUxvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZpZXdwb3J0U2Nyb2xsZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBpbmZvcm1hdGlvbiBhYm91dCBhIHJvdXRlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbXBvbmVudFxyXG4gKiB0aGF0IGlzIGxvYWRlZCBpbiBhbiBvdXRsZXQuXHJcbiAqIFVzZSB0byB0cmF2ZXJzZSB0aGUgYFJvdXRlclN0YXRlYCB0cmVlIGFuZCBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20gbm9kZXMuXHJcbiAqXHJcbiAqIHtAZXhhbXBsZSByb3V0ZXIvYWN0aXZhdGVkLXJvdXRlL21vZHVsZS50cyByZWdpb249XCJhY3RpdmF0ZWQtcm91dGVcIlxyXG4gKiAgICAgaGVhZGVyPVwiYWN0aXZhdGVkLXJvdXRlLmNvbXBvbmVudC50c1wifVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmF0ZWRSb3V0ZSB7XHJcbiAgICAvKiogQW4gb2JzZXJ2YWJsZSBvZiB0aGUgVVJMIHNlZ21lbnRzIG1hdGNoZWQgYnkgdGhpcyByb3V0ZS4gKi9cclxuICAgIHVybDogT2JzZXJ2YWJsZTxVcmxTZWdtZW50W10+O1xyXG4gICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIG1hdHJpeCBwYXJhbWV0ZXJzIHNjb3BlZCB0byB0aGlzIHJvdXRlLiAqL1xyXG4gICAgcGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XHJcbiAgICAvKiogQW4gb2JzZXJ2YWJsZSBvZiB0aGUgcXVlcnkgcGFyYW1ldGVycyBzaGFyZWQgYnkgYWxsIHRoZSByb3V0ZXMuICovXHJcbiAgICBxdWVyeVBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xyXG4gICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIFVSTCBmcmFnbWVudCBzaGFyZWQgYnkgYWxsIHRoZSByb3V0ZXMuICovXHJcbiAgICBmcmFnbWVudDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIHN0YXRpYyBhbmQgcmVzb2x2ZWQgZGF0YSBvZiB0aGlzIHJvdXRlLiAqL1xyXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxEYXRhPjtcclxuICAgIC8qKiBUaGUgb3V0bGV0IG5hbWUgb2YgdGhlIHJvdXRlLCBhIGNvbnN0YW50LiAqL1xyXG4gICAgb3V0bGV0OiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIGNvbXBvbmVudCBvZiB0aGUgcm91dGUsIGEgY29uc3RhbnQuICovXHJcbiAgICBjb21wb25lbnQ6IFR5cGU8YW55PiB8IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVGhlIGN1cnJlbnQgc25hcHNob3Qgb2YgdGhpcyByb3V0ZSAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgICAvKiogVGhlIGNvbmZpZ3VyYXRpb24gdXNlZCB0byBtYXRjaCB0aGlzIHJvdXRlLiAqL1xyXG4gICAgZ2V0IHJvdXRlQ29uZmlnKCk6IFJvdXRlIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlLiAqL1xyXG4gICAgZ2V0IHJvb3QoKTogQWN0aXZhdGVkUm91dGU7XHJcbiAgICAvKiogVGhlIHBhcmVudCBvZiB0aGlzIHJvdXRlIGluIHRoZSByb3V0ZXIgc3RhdGUgdHJlZS4gKi9cclxuICAgIGdldCBwYXJlbnQoKTogQWN0aXZhdGVkUm91dGUgfCBudWxsO1xyXG4gICAgLyoqIFRoZSBmaXJzdCBjaGlsZCBvZiB0aGlzIHJvdXRlIGluIHRoZSByb3V0ZXIgc3RhdGUgdHJlZS4gKi9cclxuICAgIGdldCBmaXJzdENoaWxkKCk6IEFjdGl2YXRlZFJvdXRlIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgY2hpbGRyZW4gb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUuICovXHJcbiAgICBnZXQgY2hpbGRyZW4oKTogQWN0aXZhdGVkUm91dGVbXTtcclxuICAgIC8qKiBUaGUgcGF0aCBmcm9tIHRoZSByb290IG9mIHRoZSByb3V0ZXIgc3RhdGUgdHJlZSB0byB0aGlzIHJvdXRlLiAqL1xyXG4gICAgZ2V0IHBhdGhGcm9tUm9vdCgpOiBBY3RpdmF0ZWRSb3V0ZVtdO1xyXG4gICAgLyoqIEFuIE9ic2VydmFibGUgdGhhdCBjb250YWlucyBhIG1hcCBvZiB0aGUgcmVxdWlyZWQgYW5kIG9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAqIHNwZWNpZmljIHRvIHRoZSByb3V0ZS5cclxuICAgICAqIFRoZSBtYXAgc3VwcG9ydHMgcmV0cmlldmluZyBzaW5nbGUgYW5kIG11bHRpcGxlIHZhbHVlcyBmcm9tIHRoZSBzYW1lIHBhcmFtZXRlci4gKi9cclxuICAgIGdldCBwYXJhbU1hcCgpOiBPYnNlcnZhYmxlPFBhcmFtTWFwPjtcclxuICAgIC8qKlxyXG4gICAgICogQW4gT2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIGEgbWFwIG9mIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIGF2YWlsYWJsZSB0byBhbGwgcm91dGVzLlxyXG4gICAgICogVGhlIG1hcCBzdXBwb3J0cyByZXRyaWV2aW5nIHNpbmdsZSBhbmQgbXVsdGlwbGUgdmFsdWVzIGZyb20gdGhlIHF1ZXJ5IHBhcmFtZXRlci5cclxuICAgICAqL1xyXG4gICAgZ2V0IHF1ZXJ5UGFyYW1NYXAoKTogT2JzZXJ2YWJsZTxQYXJhbU1hcD47XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29udGFpbnMgdGhlIGluZm9ybWF0aW9uIGFib3V0IGEgcm91dGUgYXNzb2NpYXRlZCB3aXRoIGEgY29tcG9uZW50IGxvYWRlZCBpbiBhblxyXG4gKiBvdXRsZXQgYXQgYSBwYXJ0aWN1bGFyIG1vbWVudCBpbiB0aW1lLiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IGNhbiBhbHNvIGJlIHVzZWQgdG9cclxuICogdHJhdmVyc2UgdGhlIHJvdXRlciBzdGF0ZSB0cmVlLlxyXG4gKlxyXG4gKiBgYGBcclxuICogQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6Jy4vbXktY29tcG9uZW50Lmh0bWwnfSlcclxuICogY2xhc3MgTXlDb21wb25lbnQge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gKiAgICAgY29uc3QgaWQ6IHN0cmluZyA9IHJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcclxuICogICAgIGNvbnN0IHVybDogc3RyaW5nID0gcm91dGUuc25hcHNob3QudXJsLmpvaW4oJycpO1xyXG4gKiAgICAgY29uc3QgdXNlciA9IHJvdXRlLnNuYXBzaG90LmRhdGEudXNlcjtcclxuICogICB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFjdGl2YXRlZFJvdXRlU25hcHNob3Qge1xyXG4gICAgLyoqIFRoZSBVUkwgc2VnbWVudHMgbWF0Y2hlZCBieSB0aGlzIHJvdXRlICovXHJcbiAgICB1cmw6IFVybFNlZ21lbnRbXTtcclxuICAgIC8qKiBUaGUgbWF0cml4IHBhcmFtZXRlcnMgc2NvcGVkIHRvIHRoaXMgcm91dGUgKi9cclxuICAgIHBhcmFtczogUGFyYW1zO1xyXG4gICAgLyoqIFRoZSBxdWVyeSBwYXJhbWV0ZXJzIHNoYXJlZCBieSBhbGwgdGhlIHJvdXRlcyAqL1xyXG4gICAgcXVlcnlQYXJhbXM6IFBhcmFtcztcclxuICAgIC8qKiBUaGUgVVJMIGZyYWdtZW50IHNoYXJlZCBieSBhbGwgdGhlIHJvdXRlcyAqL1xyXG4gICAgZnJhZ21lbnQ6IHN0cmluZztcclxuICAgIC8qKiBUaGUgc3RhdGljIGFuZCByZXNvbHZlZCBkYXRhIG9mIHRoaXMgcm91dGUgKi9cclxuICAgIGRhdGE6IERhdGE7XHJcbiAgICAvKiogVGhlIG91dGxldCBuYW1lIG9mIHRoZSByb3V0ZSAqL1xyXG4gICAgb3V0bGV0OiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIGNvbXBvbmVudCBvZiB0aGUgcm91dGUgKi9cclxuICAgIGNvbXBvbmVudDogVHlwZTxhbnk+IHwgc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgY29uZmlndXJhdGlvbiB1c2VkIHRvIG1hdGNoIHRoaXMgcm91dGUgKiovXHJcbiAgICByZWFkb25seSByb3V0ZUNvbmZpZzogUm91dGUgfCBudWxsO1xyXG4gICAgLyoqIFRoZSByb290IG9mIHRoZSByb3V0ZXIgc3RhdGUgKi9cclxuICAgIGdldCByb290KCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgICAvKiogVGhlIHBhcmVudCBvZiB0aGlzIHJvdXRlIGluIHRoZSByb3V0ZXIgc3RhdGUgdHJlZSAqL1xyXG4gICAgZ2V0IHBhcmVudCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHwgbnVsbDtcclxuICAgIC8qKiBUaGUgZmlyc3QgY2hpbGQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgKi9cclxuICAgIGdldCBmaXJzdENoaWxkKCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfCBudWxsO1xyXG4gICAgLyoqIFRoZSBjaGlsZHJlbiBvZiB0aGlzIHJvdXRlIGluIHRoZSByb3V0ZXIgc3RhdGUgdHJlZSAqL1xyXG4gICAgZ2V0IGNoaWxkcmVuKCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3RbXTtcclxuICAgIC8qKiBUaGUgcGF0aCBmcm9tIHRoZSByb290IG9mIHRoZSByb3V0ZXIgc3RhdGUgdHJlZSB0byB0aGlzIHJvdXRlICovXHJcbiAgICBnZXQgcGF0aEZyb21Sb290KCk6IEFjdGl2YXRlZFJvdXRlU25hcHNob3RbXTtcclxuICAgIGdldCBwYXJhbU1hcCgpOiBQYXJhbU1hcDtcclxuICAgIGdldCBxdWVyeVBhcmFtTWFwKCk6IFBhcmFtTWFwO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBlbmQgb2YgdGhlIGFjdGl2YXRpb24gcGFydFxyXG4gKiBvZiB0aGUgUmVzb2x2ZSBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKiBAc2VlIGBBY3RpdmF0aW9uU3RhcnRgXHJcbiAqIEBzZWUgYFJlc29sdmVTdGFydGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWN0aXZhdGlvbkVuZCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBhY3RpdmF0aW9uIHBhcnRcclxuICogb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICogQHNlZSBBY3RpdmF0aW9uRW5kYFxyXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFjdGl2YXRpb25TdGFydCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogSW50ZXJmYWNlIHRoYXQgYSBjbGFzcyBjYW4gaW1wbGVtZW50IHRvIGJlIGEgZ3VhcmQgZGVjaWRpbmcgaWYgYSByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkLlxyXG4gKiBJZiBhbGwgZ3VhcmRzIHJldHVybiBgdHJ1ZWAsIG5hdmlnYXRpb24gd2lsbCBjb250aW51ZS4gSWYgYW55IGd1YXJkIHJldHVybnMgYGZhbHNlYCxcclxuICogbmF2aWdhdGlvbiB3aWxsIGJlIGNhbmNlbGxlZC4gSWYgYW55IGd1YXJkIHJldHVybnMgYSBgVXJsVHJlZWAsIGN1cnJlbnQgbmF2aWdhdGlvbiB3aWxsXHJcbiAqIGJlIGNhbmNlbGxlZCBhbmQgYSBuZXcgbmF2aWdhdGlvbiB3aWxsIGJlIGtpY2tlZCBvZmYgdG8gdGhlIGBVcmxUcmVlYCByZXR1cm5lZCBmcm9tIHRoZVxyXG4gKiBndWFyZC5cclxuICpcclxuICogYGBgXHJcbiAqIGNsYXNzIFVzZXJUb2tlbiB7fVxyXG4gKiBjbGFzcyBQZXJtaXNzaW9ucyB7XHJcbiAqICAgY2FuQWN0aXZhdGUodXNlcjogVXNlclRva2VuLCBpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAqICAgICByZXR1cm4gdHJ1ZTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQEluamVjdGFibGUoKVxyXG4gKiBjbGFzcyBDYW5BY3RpdmF0ZVRlYW0gaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbnMsIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXJUb2tlbikge31cclxuICpcclxuICogICBjYW5BY3RpdmF0ZShcclxuICogICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gKiAgICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICogICApOiBPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT58UHJvbWlzZTxib29sZWFufFVybFRyZWU+fGJvb2xlYW58VXJsVHJlZSB7XHJcbiAqICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy5jYW5BY3RpdmF0ZSh0aGlzLmN1cnJlbnRVc2VyLCByb3V0ZS5wYXJhbXMuaWQpO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50LFxyXG4gKiAgICAgICAgIGNhbkFjdGl2YXRlOiBbQ2FuQWN0aXZhdGVUZWFtXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbQ2FuQWN0aXZhdGVUZWFtLCBVc2VyVG9rZW4sIFBlcm1pc3Npb25zXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYGNhbkFjdGl2YXRlYCBzaWduYXR1cmU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50LFxyXG4gKiAgICAgICAgIGNhbkFjdGl2YXRlOiBbJ2NhbkFjdGl2YXRlVGVhbSddXHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIHtcclxuICogICAgICAgcHJvdmlkZTogJ2NhbkFjdGl2YXRlVGVhbScsXHJcbiAqICAgICAgIHVzZVZhbHVlOiAocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSA9PiB0cnVlXHJcbiAqICAgICB9XHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBDYW5BY3RpdmF0ZSB7XHJcbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogSW50ZXJmYWNlIHRoYXQgYSBjbGFzcyBjYW4gaW1wbGVtZW50IHRvIGJlIGEgZ3VhcmQgZGVjaWRpbmcgaWYgYSBjaGlsZCByb3V0ZSBjYW4gYmUgYWN0aXZhdGVkLlxyXG4gKiBJZiBhbGwgZ3VhcmRzIHJldHVybiBgdHJ1ZWAsIG5hdmlnYXRpb24gd2lsbCBjb250aW51ZS4gSWYgYW55IGd1YXJkIHJldHVybnMgYGZhbHNlYCxcclxuICogbmF2aWdhdGlvbiB3aWxsIGJlIGNhbmNlbGxlZC4gSWYgYW55IGd1YXJkIHJldHVybnMgYSBgVXJsVHJlZWAsIGN1cnJlbnQgbmF2aWdhdGlvbiB3aWxsXHJcbiAqIGJlIGNhbmNlbGxlZCBhbmQgYSBuZXcgbmF2aWdhdGlvbiB3aWxsIGJlIGtpY2tlZCBvZmYgdG8gdGhlIGBVcmxUcmVlYCByZXR1cm5lZCBmcm9tIHRoZVxyXG4gKiBndWFyZC5cclxuICpcclxuICogYGBgXHJcbiAqIGNsYXNzIFVzZXJUb2tlbiB7fVxyXG4gKiBjbGFzcyBQZXJtaXNzaW9ucyB7XHJcbiAqICAgY2FuQWN0aXZhdGUodXNlcjogVXNlclRva2VuLCBpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAqICAgICByZXR1cm4gdHJ1ZTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQEluamVjdGFibGUoKVxyXG4gKiBjbGFzcyBDYW5BY3RpdmF0ZVRlYW0gaW1wbGVtZW50cyBDYW5BY3RpdmF0ZUNoaWxkIHtcclxuICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9ucywgcHJpdmF0ZSBjdXJyZW50VXNlcjogVXNlclRva2VuKSB7fVxyXG4gKlxyXG4gKiAgIGNhbkFjdGl2YXRlQ2hpbGQoXHJcbiAqICAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICogICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAqICAgKTogT2JzZXJ2YWJsZTxib29sZWFufFVybFRyZWU+fFByb21pc2U8Ym9vbGVhbnxVcmxUcmVlPnxib29sZWFufFVybFRyZWUge1xyXG4gKiAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnMuY2FuQWN0aXZhdGUodGhpcy5jdXJyZW50VXNlciwgcm91dGUucGFyYW1zLmlkKTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAncm9vdCcsXHJcbiAqICAgICAgICAgY2FuQWN0aXZhdGVDaGlsZDogW0NhbkFjdGl2YXRlVGVhbV0sXHJcbiAqICAgICAgICAgY2hpbGRyZW46IFtcclxuICogICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgICAgICAgICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnRcclxuICogICAgICAgICAgIH1cclxuICogICAgICAgICBdXHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtDYW5BY3RpdmF0ZVRlYW0sIFVzZXJUb2tlbiwgUGVybWlzc2lvbnNdXHJcbiAqIH0pXHJcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBhbHRlcm5hdGl2ZWx5IHByb3ZpZGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBgY2FuQWN0aXZhdGVDaGlsZGAgc2lnbmF0dXJlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAncm9vdCcsXHJcbiAqICAgICAgICAgY2FuQWN0aXZhdGVDaGlsZDogWydjYW5BY3RpdmF0ZVRlYW0nXSxcclxuICogICAgICAgICBjaGlsZHJlbjogW1xyXG4gKiAgICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnRcclxuICogICAgICAgICAgIH1cclxuICogICAgICAgICBdXHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIHtcclxuICogICAgICAgcHJvdmlkZTogJ2NhbkFjdGl2YXRlVGVhbScsXHJcbiAqICAgICAgIHVzZVZhbHVlOiAocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSA9PiB0cnVlXHJcbiAqICAgICB9XHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBDYW5BY3RpdmF0ZUNoaWxkIHtcclxuICAgIGNhbkFjdGl2YXRlQ2hpbGQoY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogSW50ZXJmYWNlIHRoYXQgYSBjbGFzcyBjYW4gaW1wbGVtZW50IHRvIGJlIGEgZ3VhcmQgZGVjaWRpbmcgaWYgYSByb3V0ZSBjYW4gYmUgZGVhY3RpdmF0ZWQuXHJcbiAqIElmIGFsbCBndWFyZHMgcmV0dXJuIGB0cnVlYCwgbmF2aWdhdGlvbiB3aWxsIGNvbnRpbnVlLiBJZiBhbnkgZ3VhcmQgcmV0dXJucyBgZmFsc2VgLFxyXG4gKiBuYXZpZ2F0aW9uIHdpbGwgYmUgY2FuY2VsbGVkLiBJZiBhbnkgZ3VhcmQgcmV0dXJucyBhIGBVcmxUcmVlYCwgY3VycmVudCBuYXZpZ2F0aW9uIHdpbGxcclxuICogYmUgY2FuY2VsbGVkIGFuZCBhIG5ldyBuYXZpZ2F0aW9uIHdpbGwgYmUga2lja2VkIG9mZiB0byB0aGUgYFVybFRyZWVgIHJldHVybmVkIGZyb20gdGhlXHJcbiAqIGd1YXJkLlxyXG4gKlxyXG4gKiBgYGBcclxuICogY2xhc3MgVXNlclRva2VuIHt9XHJcbiAqIGNsYXNzIFBlcm1pc3Npb25zIHtcclxuICogICBjYW5EZWFjdGl2YXRlKHVzZXI6IFVzZXJUb2tlbiwgaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gKiAgICAgcmV0dXJuIHRydWU7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBJbmplY3RhYmxlKClcclxuICogY2xhc3MgQ2FuRGVhY3RpdmF0ZVRlYW0gaW1wbGVtZW50cyBDYW5EZWFjdGl2YXRlPFRlYW1Db21wb25lbnQ+IHtcclxuICogICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9ucywgcHJpdmF0ZSBjdXJyZW50VXNlcjogVXNlclRva2VuKSB7fVxyXG4gKlxyXG4gKiAgIGNhbkRlYWN0aXZhdGUoXHJcbiAqICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsXHJcbiAqICAgICBjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAqICAgICBjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAqICAgICBuZXh0U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICogICApOiBPYnNlcnZhYmxlPGJvb2xlYW58VXJsVHJlZT58UHJvbWlzZTxib29sZWFufFVybFRyZWU+fGJvb2xlYW58VXJsVHJlZSB7XHJcbiAqICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy5jYW5EZWFjdGl2YXRlKHRoaXMuY3VycmVudFVzZXIsIHJvdXRlLnBhcmFtcy5pZCk7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICAgICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsXHJcbiAqICAgICAgICAgY2FuRGVhY3RpdmF0ZTogW0NhbkRlYWN0aXZhdGVUZWFtXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbQ2FuRGVhY3RpdmF0ZVRlYW0sIFVzZXJUb2tlbiwgUGVybWlzc2lvbnNdXHJcbiAqIH0pXHJcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBhbHRlcm5hdGl2ZWx5IHByb3ZpZGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBgY2FuRGVhY3RpdmF0ZWAgc2lnbmF0dXJlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBjYW5EZWFjdGl2YXRlOiBbJ2NhbkRlYWN0aXZhdGVUZWFtJ11cclxuICogICAgICAgfVxyXG4gKiAgICAgXSlcclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW1xyXG4gKiAgICAge1xyXG4gKiAgICAgICBwcm92aWRlOiAnY2FuRGVhY3RpdmF0ZVRlYW0nLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCwgY3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyZW50U3RhdGU6XHJcbiAqIFJvdXRlclN0YXRlU25hcHNob3QsIG5leHRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4gdHJ1ZVxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ2FuRGVhY3RpdmF0ZTxUPiB7XHJcbiAgICBjYW5EZWFjdGl2YXRlKGNvbXBvbmVudDogVCwgY3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsIG5leHRTdGF0ZT86IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogSW50ZXJmYWNlIHRoYXQgYSBjbGFzcyBjYW4gaW1wbGVtZW50IHRvIGJlIGEgZ3VhcmQgZGVjaWRpbmcgaWYgY2hpbGRyZW4gY2FuIGJlIGxvYWRlZC5cclxuICpcclxuICogYGBgXHJcbiAqIGNsYXNzIFVzZXJUb2tlbiB7fVxyXG4gKiBjbGFzcyBQZXJtaXNzaW9ucyB7XHJcbiAqICAgY2FuTG9hZENoaWxkcmVuKHVzZXI6IFVzZXJUb2tlbiwgaWQ6IHN0cmluZywgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IGJvb2xlYW4ge1xyXG4gKiAgICAgcmV0dXJuIHRydWU7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBJbmplY3RhYmxlKClcclxuICogY2xhc3MgQ2FuTG9hZFRlYW1TZWN0aW9uIGltcGxlbWVudHMgQ2FuTG9hZCB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbnMsIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXJUb2tlbikge31cclxuICpcclxuICogICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj58UHJvbWlzZTxib29sZWFuPnxib29sZWFuIHtcclxuICogICAgIHJldHVybiB0aGlzLnBlcm1pc3Npb25zLmNhbkxvYWRDaGlsZHJlbih0aGlzLmN1cnJlbnRVc2VyLCByb3V0ZSwgc2VnbWVudHMpO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50LFxyXG4gKiAgICAgICAgIGxvYWRDaGlsZHJlbjogJ3RlYW0uanMnLFxyXG4gKiAgICAgICAgIGNhbkxvYWQ6IFtDYW5Mb2FkVGVhbVNlY3Rpb25dXHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtDYW5Mb2FkVGVhbVNlY3Rpb24sIFVzZXJUb2tlbiwgUGVybWlzc2lvbnNdXHJcbiAqIH0pXHJcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBhbHRlcm5hdGl2ZWx5IHByb3ZpZGUgYSBmdW5jdGlvbiB3aXRoIHRoZSBgY2FuTG9hZGAgc2lnbmF0dXJlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBsb2FkQ2hpbGRyZW46ICd0ZWFtLmpzJyxcclxuICogICAgICAgICBjYW5Mb2FkOiBbJ2NhbkxvYWRUZWFtU2VjdGlvbiddXHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIHtcclxuICogICAgICAgcHJvdmlkZTogJ2NhbkxvYWRUZWFtU2VjdGlvbicsXHJcbiAqICAgICAgIHVzZVZhbHVlOiAocm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdKSA9PiB0cnVlXHJcbiAqICAgICB9XHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBDYW5Mb2FkIHtcclxuICAgIGNhbkxvYWQocm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBlbmQgb2YgdGhlIGNoaWxkLWFjdGl2YXRpb24gcGFydFxyXG4gKiBvZiB0aGUgUmVzb2x2ZSBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKiBAc2VlIGBDaGlsZEFjdGl2YXRpb25TdGFydGBcclxuICogQHNlZSBgUmVzb2x2ZVN0YXJ0YCAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoaWxkQWN0aXZhdGlvbkVuZCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBjaGlsZC1hY3RpdmF0aW9uXHJcbiAqIHBhcnQgb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICogQHNlZSAgYENoaWxkQWN0aXZhdGlvbkVuZGBcclxuICogQHNlZSBgUmVzb2x2ZVN0YXJ0YFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGlsZEFjdGl2YXRpb25TdGFydCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdG9yZSBjb250ZXh0dWFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjaGlsZHJlbiAoPSBuZXN0ZWQpIGBSb3V0ZXJPdXRsZXRgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoaWxkcmVuT3V0bGV0Q29udGV4dHMge1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0cztcclxuICAgIC8qKiBDYWxsZWQgd2hlbiBhIGBSb3V0ZXJPdXRsZXRgIGRpcmVjdGl2ZSBpcyBpbnN0YW50aWF0ZWQgKi9cclxuICAgIG9uQ2hpbGRPdXRsZXRDcmVhdGVkKGNoaWxkTmFtZTogc3RyaW5nLCBvdXRsZXQ6IFJvdXRlck91dGxldCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIGEgYFJvdXRlck91dGxldGAgZGlyZWN0aXZlIGlzIGRlc3Ryb3llZC5cclxuICAgICAqIFdlIG5lZWQgdG8ga2VlcCB0aGUgY29udGV4dCBhcyB0aGUgb3V0bGV0IGNvdWxkIGJlIGRlc3Ryb3llZCBpbnNpZGUgYSBOZ0lmIGFuZCBtaWdodCBiZVxyXG4gICAgICogcmUtY3JlYXRlZCBsYXRlci5cclxuICAgICAqL1xyXG4gICAgb25DaGlsZE91dGxldERlc3Ryb3llZChjaGlsZE5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIHJvdXRlIGlzIGRlYWN0aXZhdGVkIGR1cmluZyBuYXZpZ2F0aW9uLlxyXG4gICAgICogQmVjYXVzZSB0aGUgY29tcG9uZW50IGdldCBkZXN0cm95ZWQsIGFsbCBjaGlsZHJlbiBvdXRsZXQgYXJlIGRlc3Ryb3llZC5cclxuICAgICAqL1xyXG4gICAgb25PdXRsZXREZWFjdGl2YXRlZCgpOiBNYXA8c3RyaW5nLCBPdXRsZXRDb250ZXh0PjtcclxuICAgIG9uT3V0bGV0UmVBdHRhY2hlZChjb250ZXh0czogTWFwPHN0cmluZywgT3V0bGV0Q29udGV4dD4pOiB2b2lkO1xyXG4gICAgZ2V0T3JDcmVhdGVDb250ZXh0KGNoaWxkTmFtZTogc3RyaW5nKTogT3V0bGV0Q29udGV4dDtcclxuICAgIGdldENvbnRleHQoY2hpbGROYW1lOiBzdHJpbmcpOiBPdXRsZXRDb250ZXh0IHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgYFBhcmFtc2AgaW5zdGFuY2UgdG8gYSBgUGFyYW1NYXBgLlxyXG4gKiBAcGFyYW0gcGFyYW1zIFRoZSBpbnN0YW5jZSB0byBjb252ZXJ0LlxyXG4gKiBAcmV0dXJucyBUaGUgbmV3IG1hcCBpbnN0YW5jZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gY29udmVydFRvUGFyYW1NYXAocGFyYW1zOiBQYXJhbXMpOiBQYXJhbU1hcDtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBSZXByZXNlbnRzIHN0YXRpYyBkYXRhIGFzc29jaWF0ZWQgd2l0aCBhIHBhcnRpY3VsYXIgcm91dGUuXHJcbiAqXHJcbiAqIEBzZWUgYFJvdXRlI2RhdGFgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgRGF0YSA9IHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEEgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYFVybFNlcmlhbGl6ZXJgLlxyXG4gKlxyXG4gKiBFeGFtcGxlIFVSTHM6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAvaW5ib3gvMzMocG9wdXA6Y29tcG9zZSlcclxuICogL2luYm94LzMzO29wZW49dHJ1ZS9tZXNzYWdlcy80NFxyXG4gKiBgYGBcclxuICpcclxuICogRGVmYXVsdFVybFNlcmlhbGl6ZXIgdXNlcyBwYXJlbnRoZXNlcyB0byBzZXJpYWxpemUgc2Vjb25kYXJ5IHNlZ21lbnRzIChlLmcuLCBwb3B1cDpjb21wb3NlKSwgdGhlXHJcbiAqIGNvbG9uIHN5bnRheCB0byBzcGVjaWZ5IHRoZSBvdXRsZXQsIGFuZCB0aGUgJztwYXJhbWV0ZXI9dmFsdWUnIHN5bnRheCAoZS5nLiwgb3Blbj10cnVlKSB0b1xyXG4gKiBzcGVjaWZ5IHJvdXRlIHNwZWNpZmljIHBhcmFtZXRlcnMuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERlZmF1bHRVcmxTZXJpYWxpemVyIGltcGxlbWVudHMgVXJsU2VyaWFsaXplciB7XHJcbiAgICAvKiogUGFyc2VzIGEgdXJsIGludG8gYSBgVXJsVHJlZWAgKi9cclxuICAgIHBhcnNlKHVybDogc3RyaW5nKTogVXJsVHJlZTtcclxuICAgIC8qKiBDb252ZXJ0cyBhIGBVcmxUcmVlYCBpbnRvIGEgdXJsICovXHJcbiAgICBzZXJpYWxpemUodHJlZTogVXJsVHJlZSk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtIGBwYXRoL3RvL2ZpbGUjZXhwb3J0TmFtZWAgdGhhdCBhY3RzIGFzIGEgVVJMIGZvciBhIHNldCBvZiByb3V0ZXMgdG8gbG9hZC5cclxuICpcclxuICogQHNlZSBgUm91dGUjbG9hZENoaWxkcmVuYFxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXByZWNhdGVkIHRoZSBgc3RyaW5nYCBmb3JtIG9mIGBsb2FkQ2hpbGRyZW5gIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgdGhlIHByb3Bvc2VkIEVTIGR5bmFtaWNcclxuICogYGltcG9ydCgpYCBleHByZXNzaW9uLCB3aGljaCBvZmZlcnMgYSBtb3JlIG5hdHVyYWwgYW5kIHN0YW5kYXJkcy1iYXNlZCBtZWNoYW5pc20gdG8gZHluYW1pY2FsbHlcclxuICogbG9hZCBhbiBFUyBtb2R1bGUgYXQgcnVudGltZS5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgRGVwcmVjYXRlZExvYWRDaGlsZHJlbiA9IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVwcmVzZW50cyB0aGUgZGV0YWNoZWQgcm91dGUgdHJlZS5cclxuICpcclxuICogVGhpcyBpcyBhbiBvcGFxdWUgdmFsdWUgdGhlIHJvdXRlciB3aWxsIGdpdmUgdG8gYSBjdXN0b20gcm91dGUgcmV1c2Ugc3RyYXRlZ3lcclxuICogdG8gc3RvcmUgYW5kIHJldHJpZXZlIGxhdGVyIG9uLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIERldGFjaGVkUm91dGVIYW5kbGUgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIGEgbmF2aWdhdGlvbiBlcnJvciBvY2N1cnMuXHJcbiAqXHJcbiAqIElmIHRoZSBoYW5kbGVyIHJldHVybnMgYSB2YWx1ZSwgdGhlIG5hdmlnYXRpb24gcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoaXMgdmFsdWUuXHJcbiAqIElmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24sIHRoZSBuYXZpZ2F0aW9uIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aFxyXG4gKiB0aGUgZXhjZXB0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5kZWNsYXJlIHR5cGUgRXJyb3JIYW5kbGVyID0gKGVycm9yOiBhbnkpID0+IGFueTtcclxuXHJcbi8qKlxyXG4gKiBSb3V0ZXIgZXZlbnRzIHRoYXQgYWxsb3cgeW91IHRvIHRyYWNrIHRoZSBsaWZlY3ljbGUgb2YgdGhlIHJvdXRlci5cclxuICpcclxuICogVGhlIHNlcXVlbmNlIG9mIHJvdXRlciBldmVudHMgaXMgYXMgZm9sbG93czpcclxuICpcclxuICogLSBgTmF2aWdhdGlvblN0YXJ0YCxcclxuICogLSBgUm91dGVDb25maWdMb2FkU3RhcnRgLFxyXG4gKiAtIGBSb3V0ZUNvbmZpZ0xvYWRFbmRgLFxyXG4gKiAtIGBSb3V0ZXNSZWNvZ25pemVkYCxcclxuICogLSBgR3VhcmRzQ2hlY2tTdGFydGAsXHJcbiAqIC0gYENoaWxkQWN0aXZhdGlvblN0YXJ0YCxcclxuICogLSBgQWN0aXZhdGlvblN0YXJ0YCxcclxuICogLSBgR3VhcmRzQ2hlY2tFbmRgLFxyXG4gKiAtIGBSZXNvbHZlU3RhcnRgLFxyXG4gKiAtIGBSZXNvbHZlRW5kYCxcclxuICogLSBgQWN0aXZhdGlvbkVuZGBcclxuICogLSBgQ2hpbGRBY3RpdmF0aW9uRW5kYFxyXG4gKiAtIGBOYXZpZ2F0aW9uRW5kYCxcclxuICogLSBgTmF2aWdhdGlvbkNhbmNlbGAsXHJcbiAqIC0gYE5hdmlnYXRpb25FcnJvcmBcclxuICogLSBgU2Nyb2xsYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIEV2ZW50ID0gUm91dGVyRXZlbnQgfCBSb3V0ZUNvbmZpZ0xvYWRTdGFydCB8IFJvdXRlQ29uZmlnTG9hZEVuZCB8IENoaWxkQWN0aXZhdGlvblN0YXJ0IHwgQ2hpbGRBY3RpdmF0aW9uRW5kIHwgQWN0aXZhdGlvblN0YXJ0IHwgQWN0aXZhdGlvbkVuZCB8IFNjcm9sbDtcclxuXHJcbi8qKlxyXG4gKiBBIHNldCBvZiBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGEgcm91dGVyIG1vZHVsZSwgcHJvdmlkZWQgaW4gdGhlXHJcbiAqIGBmb3JSb290KClgIG1ldGhvZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEV4dHJhT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdHJ1ZSwgbG9nIGFsbCBpbnRlcm5hbCBuYXZpZ2F0aW9uIGV2ZW50cyB0byB0aGUgY29uc29sZS5cclxuICAgICAqIFVzZSBmb3IgZGVidWdnaW5nLlxyXG4gICAgICovXHJcbiAgICBlbmFibGVUcmFjaW5nPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0cnVlLCBlbmFibGUgdGhlIGxvY2F0aW9uIHN0cmF0ZWd5IHRoYXQgdXNlcyB0aGUgVVJMIGZyYWdtZW50XHJcbiAgICAgKiBpbnN0ZWFkIG9mIHRoZSBoaXN0b3J5IEFQSS5cclxuICAgICAqL1xyXG4gICAgdXNlSGFzaD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIE9uZSBvZiBgZW5hYmxlZGAgb3IgYGRpc2FibGVkYC5cclxuICAgICAqIFdoZW4gc2V0IHRvIGBlbmFibGVkYCwgdGhlIGluaXRpYWwgbmF2aWdhdGlvbiBzdGFydHMgYmVmb3JlIHRoZSByb290IGNvbXBvbmVudCBpcyBjcmVhdGVkLlxyXG4gICAgICogVGhlIGJvb3RzdHJhcCBpcyBibG9ja2VkIHVudGlsIHRoZSBpbml0aWFsIG5hdmlnYXRpb24gaXMgY29tcGxldGUuIFRoaXMgdmFsdWUgaXMgcmVxdWlyZWQgZm9yXHJcbiAgICAgKiBbc2VydmVyLXNpZGUgcmVuZGVyaW5nXShndWlkZS91bml2ZXJzYWwpIHRvIHdvcmsuXHJcbiAgICAgKiBXaGVuIHNldCB0byBgZGlzYWJsZWRgLCB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIG5vdCBwZXJmb3JtZWQuXHJcbiAgICAgKiBUaGUgbG9jYXRpb24gbGlzdGVuZXIgaXMgc2V0IHVwIGJlZm9yZSB0aGUgcm9vdCBjb21wb25lbnQgZ2V0cyBjcmVhdGVkLlxyXG4gICAgICogVXNlIGlmIHRoZXJlIGlzIGEgcmVhc29uIHRvIGhhdmUgbW9yZSBjb250cm9sIG92ZXIgd2hlbiB0aGUgcm91dGVyXHJcbiAgICAgKiBzdGFydHMgaXRzIGluaXRpYWwgbmF2aWdhdGlvbiBkdWUgdG8gc29tZSBjb21wbGV4IGluaXRpYWxpemF0aW9uIGxvZ2ljLlxyXG4gICAgICpcclxuICAgICAqIExlZ2FjeSB2YWx1ZXMgYXJlIGRlcHJlY2F0ZWQgc2luY2UgdjQgYW5kIHNob3VsZCBub3QgYmUgdXNlZCBmb3IgbmV3IGFwcGxpY2F0aW9uczpcclxuICAgICAqXHJcbiAgICAgKiAqIGBsZWdhY3lfZW5hYmxlZGAgLSBEZWZhdWx0IGZvciBjb21wYXRpYmlsaXR5LlxyXG4gICAgICogVGhlIGluaXRpYWwgbmF2aWdhdGlvbiBzdGFydHMgYWZ0ZXIgdGhlIHJvb3QgY29tcG9uZW50IGhhcyBiZWVuIGNyZWF0ZWQsXHJcbiAgICAgKiBidXQgdGhlIGJvb3RzdHJhcCBpcyBub3QgYmxvY2tlZCB1bnRpbCB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIGNvbXBsZXRlLlxyXG4gICAgICogKiBgbGVnYWN5X2Rpc2FibGVkYCAtIFRoZSBpbml0aWFsIG5hdmlnYXRpb24gaXMgbm90IHBlcmZvcm1lZC5cclxuICAgICAqIFRoZSBsb2NhdGlvbiBsaXN0ZW5lciBpcyBzZXQgdXAgYWZ0ZXIgdGhlIHJvb3QgY29tcG9uZW50IGdldHMgY3JlYXRlZC5cclxuICAgICAqICogYHRydWVgIC0gc2FtZSBhcyBgbGVnYWN5X2VuYWJsZWRgLlxyXG4gICAgICogKiBgZmFsc2VgIC0gc2FtZSBhcyBgbGVnYWN5X2Rpc2FibGVkYC5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbE5hdmlnYXRpb24/OiBJbml0aWFsTmF2aWdhdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogQSBjdXN0b20gZXJyb3IgaGFuZGxlciBmb3IgZmFpbGVkIG5hdmlnYXRpb25zLlxyXG4gICAgICovXHJcbiAgICBlcnJvckhhbmRsZXI/OiBFcnJvckhhbmRsZXI7XHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgYSBwcmVsb2FkaW5nIHN0cmF0ZWd5LlxyXG4gICAgICogT25lIG9mIGBQcmVsb2FkQWxsTW9kdWxlc2Agb3IgYE5vUHJlbG9hZGluZ2AgKHRoZSBkZWZhdWx0KS5cclxuICAgICAqL1xyXG4gICAgcHJlbG9hZGluZ1N0cmF0ZWd5PzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgd2hhdCB0aGUgcm91dGVyIHNob3VsZCBkbyBpZiBpdCByZWNlaXZlcyBhIG5hdmlnYXRpb24gcmVxdWVzdCB0byB0aGUgY3VycmVudCBVUkwuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGBpZ25vcmVgLCB3aGljaCBjYXVzZXMgdGhlIHJvdXRlciBpZ25vcmVzIHRoZSBuYXZpZ2F0aW9uLlxyXG4gICAgICogVGhpcyBjYW4gZGlzYWJsZSBmZWF0dXJlcyBzdWNoIGFzIGEgXCJyZWZyZXNoXCIgYnV0dG9uLlxyXG4gICAgICogVXNlIHRoaXMgb3B0aW9uIHRvIGNvbmZpZ3VyZSB0aGUgYmVoYXZpb3Igd2hlbiBuYXZpZ2F0aW5nIHRvIHRoZVxyXG4gICAgICogY3VycmVudCBVUkwuIERlZmF1bHQgaXMgJ2lnbm9yZScuXHJcbiAgICAgKi9cclxuICAgIG9uU2FtZVVybE5hdmlnYXRpb24/OiAncmVsb2FkJyB8ICdpZ25vcmUnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gbmVlZHMgdG8gYmUgcmVzdG9yZWQgd2hlbiBuYXZpZ2F0aW5nIGJhY2suXHJcbiAgICAgKlxyXG4gICAgICogKiAnZGlzYWJsZWQnLSAoRGVmYXVsdCkgRG9lcyBub3RoaW5nLiBTY3JvbGwgcG9zaXRpb24gaXMgbWFpbnRhaW5lZCBvbiBuYXZpZ2F0aW9uLlxyXG4gICAgICogKiAndG9wJy0gU2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIHggPSAwLCB5ID0gMCBvbiBhbGwgbmF2aWdhdGlvbi5cclxuICAgICAqICogJ2VuYWJsZWQnLSBSZXN0b3JlcyB0aGUgcHJldmlvdXMgc2Nyb2xsIHBvc2l0aW9uIG9uIGJhY2t3YXJkIG5hdmlnYXRpb24sIGVsc2Ugc2V0cyB0aGVcclxuICAgICAqIHBvc2l0aW9uIHRvIHRoZSBhbmNob3IgaWYgb25lIGlzIHByb3ZpZGVkLCBvciBzZXRzIHRoZSBzY3JvbGwgcG9zaXRpb24gdG8gWzAsIDBdIChmb3J3YXJkXHJcbiAgICAgKiBuYXZpZ2F0aW9uKS4gVGhpcyBvcHRpb24gd2lsbCBiZSB0aGUgZGVmYXVsdCBpbiB0aGUgZnV0dXJlLlxyXG4gICAgICpcclxuICAgICAqIFlvdSBjYW4gaW1wbGVtZW50IGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gYmVoYXZpb3IgYnkgYWRhcHRpbmcgdGhlIGVuYWJsZWQgYmVoYXZpb3IgYXNcclxuICAgICAqIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZS5cclxuICAgICAqXHJcbiAgICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICAgKiBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgICogICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgdmlld3BvcnRTY3JvbGxlcjogVmlld3BvcnRTY3JvbGxlcikge1xyXG4gICAgICogICAgIHJvdXRlci5ldmVudHMucGlwZShcclxuICAgICAqICAgICAgIGZpbHRlcigoZTogRXZlbnQpOiBlIGlzIFNjcm9sbCA9PiBlIGluc3RhbmNlb2YgU2Nyb2xsKVxyXG4gICAgICogICAgICkuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICogICAgICAgaWYgKGUucG9zaXRpb24pIHtcclxuICAgICAqICAgICAgICAgLy8gYmFja3dhcmQgbmF2aWdhdGlvblxyXG4gICAgICogICAgICAgICB2aWV3cG9ydFNjcm9sbGVyLnNjcm9sbFRvUG9zaXRpb24oZS5wb3NpdGlvbik7XHJcbiAgICAgKiAgICAgICB9IGVsc2UgaWYgKGUuYW5jaG9yKSB7XHJcbiAgICAgKiAgICAgICAgIC8vIGFuY2hvciBuYXZpZ2F0aW9uXHJcbiAgICAgKiAgICAgICAgIHZpZXdwb3J0U2Nyb2xsZXIuc2Nyb2xsVG9BbmNob3IoZS5hbmNob3IpO1xyXG4gICAgICogICAgICAgfSBlbHNlIHtcclxuICAgICAqICAgICAgICAgLy8gZm9yd2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgKiAgICAgICAgIHZpZXdwb3J0U2Nyb2xsZXIuc2Nyb2xsVG9Qb3NpdGlvbihbMCwgMF0pO1xyXG4gICAgICogICAgICAgfVxyXG4gICAgICogICAgIH0pO1xyXG4gICAgICogICB9XHJcbiAgICAgKiB9XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbj86ICdkaXNhYmxlZCcgfCAnZW5hYmxlZCcgfCAndG9wJztcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBzZXQgdG8gJ2VuYWJsZWQnLCBzY3JvbGxzIHRvIHRoZSBhbmNob3IgZWxlbWVudCB3aGVuIHRoZSBVUkwgaGFzIGEgZnJhZ21lbnQuXHJcbiAgICAgKiBBbmNob3Igc2Nyb2xsaW5nIGlzIGRpc2FibGVkIGJ5IGRlZmF1bHQuXHJcbiAgICAgKlxyXG4gICAgICogQW5jaG9yIHNjcm9sbGluZyBkb2VzIG5vdCBoYXBwZW4gb24gJ3BvcHN0YXRlJy4gSW5zdGVhZCwgd2UgcmVzdG9yZSB0aGUgcG9zaXRpb25cclxuICAgICAqIHRoYXQgd2Ugc3RvcmVkIG9yIHNjcm9sbCB0byB0aGUgdG9wLlxyXG4gICAgICovXHJcbiAgICBhbmNob3JTY3JvbGxpbmc/OiAnZGlzYWJsZWQnIHwgJ2VuYWJsZWQnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBzY3JvbGwgb2Zmc2V0IHRoZSByb3V0ZXIgd2lsbCB1c2Ugd2hlbiBzY3JvbGxpbmcgdG8gYW4gZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBXaGVuIGdpdmVuIGEgdHVwbGUgd2l0aCB4IGFuZCB5IHBvc2l0aW9uIHZhbHVlLFxyXG4gICAgICogdGhlIHJvdXRlciB1c2VzIHRoYXQgb2Zmc2V0IGVhY2ggdGltZSBpdCBzY3JvbGxzLlxyXG4gICAgICogV2hlbiBnaXZlbiBhIGZ1bmN0aW9uLCB0aGUgcm91dGVyIGludm9rZXMgdGhlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWVcclxuICAgICAqIGl0IHJlc3RvcmVzIHNjcm9sbCBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgc2Nyb2xsT2Zmc2V0PzogW251bWJlciwgbnVtYmVyXSB8ICgoKSA9PiBbbnVtYmVyLCBudW1iZXJdKTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBob3cgdGhlIHJvdXRlciBtZXJnZXMgcGFyYW1ldGVycywgZGF0YSwgYW5kIHJlc29sdmVkIGRhdGEgZnJvbSBwYXJlbnQgdG8gY2hpbGRcclxuICAgICAqIHJvdXRlcy4gQnkgZGVmYXVsdCAoJ2VtcHR5T25seScpLCBpbmhlcml0cyBwYXJlbnQgcGFyYW1ldGVycyBvbmx5IGZvclxyXG4gICAgICogcGF0aC1sZXNzIG9yIGNvbXBvbmVudC1sZXNzIHJvdXRlcy5cclxuICAgICAqIFNldCB0byAnYWx3YXlzJyB0byBlbmFibGUgdW5jb25kaXRpb25hbCBpbmhlcml0YW5jZSBvZiBwYXJlbnQgcGFyYW1ldGVycy5cclxuICAgICAqL1xyXG4gICAgcGFyYW1zSW5oZXJpdGFuY2VTdHJhdGVneT86ICdlbXB0eU9ubHknIHwgJ2Fsd2F5cyc7XHJcbiAgICAvKipcclxuICAgICAqIEEgY3VzdG9tIGhhbmRsZXIgZm9yIG1hbGZvcm1lZCBVUkkgZXJyb3JzLiBUaGUgaGFuZGxlciBpcyBpbnZva2VkIHdoZW4gYGVuY29kZWRVUklgIGNvbnRhaW5zXHJcbiAgICAgKiBpbnZhbGlkIGNoYXJhY3RlciBzZXF1ZW5jZXMuXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBpcyB0byByZWRpcmVjdCB0byB0aGUgcm9vdCBVUkwsIGRyb3BwaW5nXHJcbiAgICAgKiBhbnkgcGF0aCBvciBwYXJhbWV0ZXIgaW5mb3JtYXRpb24uIFRoZSBmdW5jdGlvbiB0YWtlcyB0aHJlZSBwYXJhbWV0ZXJzOlxyXG4gICAgICpcclxuICAgICAqIC0gYCdVUklFcnJvcidgIC0gRXJyb3IgdGhyb3duIHdoZW4gcGFyc2luZyBhIGJhZCBVUkwuXHJcbiAgICAgKiAtIGAnVXJsU2VyaWFsaXplcidgIC0gVXJsU2VyaWFsaXplciB0aGF04oCZcyBjb25maWd1cmVkIHdpdGggdGhlIHJvdXRlci5cclxuICAgICAqIC0gYCd1cmwnYCAtICBUaGUgbWFsZm9ybWVkIFVSTCB0aGF0IGNhdXNlZCB0aGUgVVJJRXJyb3JcclxuICAgICAqICovXHJcbiAgICBtYWxmb3JtZWRVcmlFcnJvckhhbmRsZXI/OiAoZXJyb3I6IFVSSUVycm9yLCB1cmxTZXJpYWxpemVyOiBVcmxTZXJpYWxpemVyLCB1cmw6IHN0cmluZykgPT4gVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGVuIHRoZSByb3V0ZXIgdXBkYXRlcyB0aGUgYnJvd3NlciBVUkwuIEJ5IGRlZmF1bHQgKCdkZWZlcnJlZCcpLFxyXG4gICAgICogdXBkYXRlIGFmdGVyIHN1Y2Nlc3NmdWwgbmF2aWdhdGlvbi5cclxuICAgICAqIFNldCB0byAnZWFnZXInIGlmIHByZWZlciB0byB1cGRhdGUgdGhlIFVSTCBhdCB0aGUgYmVnaW5uaW5nIG9mIG5hdmlnYXRpb24uXHJcbiAgICAgKiBVcGRhdGluZyB0aGUgVVJMIGVhcmx5IGFsbG93cyB5b3UgdG8gaGFuZGxlIGEgZmFpbHVyZSBvZiBuYXZpZ2F0aW9uIGJ5XHJcbiAgICAgKiBzaG93aW5nIGFuIGVycm9yIG1lc3NhZ2Ugd2l0aCB0aGUgVVJMIHRoYXQgZmFpbGVkLlxyXG4gICAgICovXHJcbiAgICB1cmxVcGRhdGVTdHJhdGVneT86ICdkZWZlcnJlZCcgfCAnZWFnZXInO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGVzIGEgYnVnIGZpeCB0aGF0IGNvcnJlY3RzIHJlbGF0aXZlIGxpbmsgcmVzb2x1dGlvbiBpbiBjb21wb25lbnRzIHdpdGggZW1wdHkgcGF0aHMuXHJcbiAgICAgKiBFeGFtcGxlOlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogY29uc3Qgcm91dGVzID0gW1xyXG4gICAgICogICB7XHJcbiAgICAgKiAgICAgcGF0aDogJycsXHJcbiAgICAgKiAgICAgY29tcG9uZW50OiBDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgKiAgICAgY2hpbGRyZW46IFtcclxuICAgICAqICAgICAgIHsgcGF0aDogJ2EnLCBjb21wb25lbnQ6IEFDb21wb25lbnQgfSxcclxuICAgICAqICAgICAgIHsgcGF0aDogJ2InLCBjb21wb25lbnQ6IEJDb21wb25lbnQgfSxcclxuICAgICAqICAgICBdXHJcbiAgICAgKiAgIH1cclxuICAgICAqIF07XHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBGcm9tIHRoZSBgQ29udGFpbmVyQ29tcG9uZW50YCwgdGhpcyB3aWxsIG5vdCB3b3JrOlxyXG4gICAgICpcclxuICAgICAqIGA8YSBbcm91dGVyTGlua109XCJbJy4vYSddXCI+TGluayB0byBBPC9hPmBcclxuICAgICAqXHJcbiAgICAgKiBIb3dldmVyLCB0aGlzIHdpbGwgd29yazpcclxuICAgICAqXHJcbiAgICAgKiBgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9hJ11cIj5MaW5rIHRvIEE8L2E+YFxyXG4gICAgICpcclxuICAgICAqIEluIG90aGVyIHdvcmRzLCB5b3UncmUgcmVxdWlyZWQgdG8gdXNlIGAuLi9gIHJhdGhlciB0aGFuIGAuL2AuIFRoaXMgaXMgY3VycmVudGx5IHRoZSBkZWZhdWx0XHJcbiAgICAgKiBiZWhhdmlvci4gU2V0dGluZyB0aGlzIG9wdGlvbiB0byBgY29ycmVjdGVkYCBlbmFibGVzIHRoZSBmaXguXHJcbiAgICAgKi9cclxuICAgIHJlbGF0aXZlTGlua1Jlc29sdXRpb24/OiAnbGVnYWN5JyB8ICdjb3JyZWN0ZWQnO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBlbmQgb2YgdGhlIEd1YXJkIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEd1YXJkc0NoZWNrRW5kIGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmc7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc2hvdWxkQWN0aXZhdGU6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNob3VsZEFjdGl2YXRlOiBib29sZWFuKTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIEd1YXJkIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEd1YXJkc0NoZWNrU3RhcnQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZztcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvd2VkIHZhbHVlcyBpbiBhbiBgRXh0cmFPcHRpb25zYCBvYmplY3QgdGhhdCBjb25maWd1cmVcclxuICogd2hlbiB0aGUgcm91dGVyIHBlcmZvcm1zIHRoZSBpbml0aWFsIG5hdmlnYXRpb24gb3BlcmF0aW9uLlxyXG4gKlxyXG4gKiAqICdlbmFibGVkJyAtIFRoZSBpbml0aWFsIG5hdmlnYXRpb24gc3RhcnRzIGJlZm9yZSB0aGUgcm9vdCBjb21wb25lbnQgaXMgY3JlYXRlZC5cclxuICogVGhlIGJvb3RzdHJhcCBpcyBibG9ja2VkIHVudGlsIHRoZSBpbml0aWFsIG5hdmlnYXRpb24gaXMgY29tcGxldGUuIFRoaXMgdmFsdWUgaXMgcmVxdWlyZWRcclxuICogZm9yIFtzZXJ2ZXItc2lkZSByZW5kZXJpbmddKGd1aWRlL3VuaXZlcnNhbCkgdG8gd29yay5cclxuICogKiAnZGlzYWJsZWQnIC0gVGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBub3QgcGVyZm9ybWVkLiBUaGUgbG9jYXRpb24gbGlzdGVuZXIgaXMgc2V0IHVwIGJlZm9yZVxyXG4gKiB0aGUgcm9vdCBjb21wb25lbnQgZ2V0cyBjcmVhdGVkLiBVc2UgaWYgdGhlcmUgaXMgYSByZWFzb24gdG8gaGF2ZVxyXG4gKiBtb3JlIGNvbnRyb2wgb3ZlciB3aGVuIHRoZSByb3V0ZXIgc3RhcnRzIGl0cyBpbml0aWFsIG5hdmlnYXRpb24gZHVlIHRvIHNvbWUgY29tcGxleFxyXG4gKiBpbml0aWFsaXphdGlvbiBsb2dpYy5cclxuICogKiAnbGVnYWN5X2VuYWJsZWQnLSAoRGVmYXVsdCwgZm9yIGNvbXBhdGliaWxpdHkuKSBUaGUgaW5pdGlhbCBuYXZpZ2F0aW9uIHN0YXJ0cyBhZnRlciB0aGUgcm9vdCBjb21wb25lbnQgaGFzIGJlZW4gY3JlYXRlZC5cclxuICogVGhlIGJvb3RzdHJhcCBpcyBub3QgYmxvY2tlZCB1bnRpbCB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIGNvbXBsZXRlLiBAZGVwcmVjYXRlZFxyXG4gKiAqICdsZWdhY3lfZGlzYWJsZWQnLSBUaGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIG5vdCBwZXJmb3JtZWQuIFRoZSBsb2NhdGlvbiBsaXN0ZW5lciBpcyBzZXQgdXBcclxuICogYWZ0ZXIgdGhlIHJvb3QgY29tcG9uZW50IGdldHMgY3JlYXRlZC4gQGRlcHJlY2F0ZWQgc2luY2UgdjRcclxuICogKiBgdHJ1ZWAgLSBzYW1lIGFzICdsZWdhY3lfZW5hYmxlZCcuIEBkZXByZWNhdGVkIHNpbmNlIHY0XHJcbiAqICogYGZhbHNlYCAtIHNhbWUgYXMgJ2xlZ2FjeV9kaXNhYmxlZCcuIEBkZXByZWNhdGVkIHNpbmNlIHY0XHJcbiAqXHJcbiAqIFRoZSAnbGVnYWN5X2VuYWJsZWQnIGFuZCAnbGVnYWN5X2Rpc2FibGVkJyBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG5ldyBhcHBsaWNhdGlvbnMuXHJcbiAqXHJcbiAqIEBzZWUgYGZvclJvb3QoKWBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBJbml0aWFsTmF2aWdhdGlvbiA9IHRydWUgfCBmYWxzZSB8ICdlbmFibGVkJyB8ICdkaXNhYmxlZCcgfCAnbGVnYWN5X2VuYWJsZWQnIHwgJ2xlZ2FjeV9kaXNhYmxlZCc7XHJcblxyXG4vKipcclxuICpcclxuICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gYHBhdGgvdG8vZmlsZSNleHBvcnROYW1lYCB0aGF0IGFjdHMgYXMgYSBVUkwgZm9yIGEgc2V0IG9mIHJvdXRlcyB0byBsb2FkLFxyXG4gKiBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBzdWNoIGEgc2V0LlxyXG4gKlxyXG4gKiBUaGUgc3RyaW5nIGZvcm0gb2YgYExvYWRDaGlsZHJlbmAgaXMgZGVwcmVjYXRlZCAoc2VlIGBEZXByZWNhdGVkTG9hZENoaWxkcmVuYCkuIFRoZSBmdW5jdGlvblxyXG4gKiBmb3JtIChgTG9hZENoaWxkcmVuQ2FsbGJhY2tgKSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZSNsb2FkQ2hpbGRyZW5gLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIExvYWRDaGlsZHJlbiA9IExvYWRDaGlsZHJlbkNhbGxiYWNrIHwgRGVwcmVjYXRlZExvYWRDaGlsZHJlbjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHRvIHJlc29sdmUgYSBjb2xsZWN0aW9uIG9mIGxhenktbG9hZGVkIHJvdXRlcy5cclxuICpcclxuICogT2Z0ZW4gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkIHVzaW5nIGFuIEVTIGR5bmFtaWMgYGltcG9ydCgpYCBleHByZXNzaW9uLiBGb3IgZXhhbXBsZTpcclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJ2xhenknLFxyXG4gKiAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2xhenktcm91dGUvbGF6eS5tb2R1bGUnKS50aGVuKG1vZCA9PiBtb2QuTGF6eU1vZHVsZSksXHJcbiAqIH1dO1xyXG4gKiBgYGBcclxuICpcclxuICogVGhpcyBmdW5jdGlvbiBfbXVzdF8gbWF0Y2ggdGhlIGZvcm0gYWJvdmU6IGFuIGFycm93IGZ1bmN0aW9uIG9mIHRoZSBmb3JtXHJcbiAqIGAoKSA9PiBpbXBvcnQoJy4uLicpLnRoZW4obW9kID0+IG1vZC5NT0RVTEUpYC5cclxuICpcclxuICogQHNlZSBgUm91dGUjbG9hZENoaWxkcmVuYC5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBMb2FkQ2hpbGRyZW5DYWxsYmFjayA9ICgpID0+IFR5cGU8YW55PiB8IE5nTW9kdWxlRmFjdG9yeTxhbnk+IHwgT2JzZXJ2YWJsZTxUeXBlPGFueT4+IHwgUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8YW55PiB8IFR5cGU8YW55PiB8IGFueT47XHJcblxyXG4vKipcclxuICogSW5mb3JtYXRpb24gYWJvdXQgYSBuYXZpZ2F0aW9uIG9wZXJhdGlvbi4gUmV0cmlldmUgdGhlIG1vc3QgcmVjZW50XHJcbiAqIG5hdmlnYXRpb24gb2JqZWN0IHdpdGggdGhlIGByb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKWAgbWV0aG9kLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIE5hdmlnYXRpb24gPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCBvZiB0aGUgY3VycmVudCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFyZ2V0IFVSTCBwYXNzZWQgaW50byB0aGUgYFJvdXRlciNuYXZpZ2F0ZUJ5VXJsKClgIGNhbGwgYmVmb3JlIG5hdmlnYXRpb24uIFRoaXMgaXNcclxuICAgICAqIHRoZSB2YWx1ZSBiZWZvcmUgdGhlIHJvdXRlciBoYXMgcGFyc2VkIG9yIGFwcGxpZWQgcmVkaXJlY3RzIHRvIGl0LlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsVXJsOiBzdHJpbmcgfCBVcmxUcmVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaW5pdGlhbCB0YXJnZXQgVVJMIGFmdGVyIGJlaW5nIHBhcnNlZCB3aXRoIGBVcmxTZXJpYWxpemVyLmV4dHJhY3QoKWAuXHJcbiAgICAgKi9cclxuICAgIGV4dHJhY3RlZFVybDogVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGV4dHJhY3RlZCBVUkwgYWZ0ZXIgcmVkaXJlY3RzIGhhdmUgYmVlbiBhcHBsaWVkLlxyXG4gICAgICogVGhpcyBVUkwgbWF5IG5vdCBiZSBhdmFpbGFibGUgaW1tZWRpYXRlbHksIHRoZXJlZm9yZSB0aGlzIHByb3BlcnR5IGNhbiBiZSBgdW5kZWZpbmVkYC5cclxuICAgICAqIEl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgc2V0IGFmdGVyIHRoZSBgUm91dGVzUmVjb2duaXplZGAgZXZlbnQgZmlyZXMuXHJcbiAgICAgKi9cclxuICAgIGZpbmFsVXJsPzogVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBob3cgdGhpcyBuYXZpZ2F0aW9uIHdhcyB0cmlnZ2VyZWQuXHJcbiAgICAgKlxyXG4gICAgICogKiAnaW1wZXJhdGl2ZSctLVRyaWdnZXJlZCBieSBgcm91dGVyLm5hdmlnYXRlQnlVcmxgIG9yIGByb3V0ZXIubmF2aWdhdGVgLlxyXG4gICAgICogKiAncG9wc3RhdGUnLS1UcmlnZ2VyZWQgYnkgYSBwb3BzdGF0ZSBldmVudC5cclxuICAgICAqICogJ2hhc2hjaGFuZ2UnLS1UcmlnZ2VyZWQgYnkgYSBoYXNoY2hhbmdlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICB0cmlnZ2VyOiAnaW1wZXJhdGl2ZScgfCAncG9wc3RhdGUnIHwgJ2hhc2hjaGFuZ2UnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zIHRoYXQgY29udHJvbGxlZCB0aGUgc3RyYXRlZ3kgdXNlZCBmb3IgdGhpcyBuYXZpZ2F0aW9uLlxyXG4gICAgICogU2VlIGBOYXZpZ2F0aW9uRXh0cmFzYC5cclxuICAgICAqL1xyXG4gICAgZXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJldmlvdXNseSBzdWNjZXNzZnVsIGBOYXZpZ2F0aW9uYCBvYmplY3QuIE9ubHkgb25lIHByZXZpb3VzIG5hdmlnYXRpb25cclxuICAgICAqIGlzIGF2YWlsYWJsZSwgdGhlcmVmb3JlIHRoaXMgcHJldmlvdXMgYE5hdmlnYXRpb25gIG9iamVjdCBoYXMgYSBgbnVsbGAgdmFsdWVcclxuICAgICAqIGZvciBpdHMgb3duIGBwcmV2aW91c05hdmlnYXRpb25gLlxyXG4gICAgICovXHJcbiAgICBwcmV2aW91c05hdmlnYXRpb246IE5hdmlnYXRpb24gfCBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgbmF2aWdhdGlvbiBpcyBjYW5jZWxlZCwgZGlyZWN0bHkgb3IgaW5kaXJlY3RseS5cclxuICpcclxuICogVGhpcyBjYW4gaGFwcGVuIHdoZW4gYSBbcm91dGUgZ3VhcmRdKGd1aWRlL3JvdXRlciNtaWxlc3RvbmUtNS1yb3V0ZS1ndWFyZHMpXHJcbiAqIHJldHVybnMgYGZhbHNlYCBvciBpbml0aWF0ZXMgYSByZWRpcmVjdCBieSByZXR1cm5pbmcgYSBgVXJsVHJlZWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25DYW5jZWwgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcmVhc29uOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcmVhc29uOiBzdHJpbmcpO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgbmF2aWdhdGlvbiBlbmRzIHN1Y2Nlc3NmdWxseS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmF2aWdhdGlvbkVuZCBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcpO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCB3aGVuIGEgbmF2aWdhdGlvbiBmYWlscyBkdWUgdG8gYW4gdW5leHBlY3RlZCBlcnJvci5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmF2aWdhdGlvbkVycm9yIGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGVycm9yOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgZXJyb3I6IGFueSk7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE9wdGlvbnMgdGhhdCBtb2RpZnkgdGhlIG5hdmlnYXRpb24gc3RyYXRlZ3kuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBOYXZpZ2F0aW9uRXh0cmFzIHtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgcm9vdCBVUkkgdG8gdXNlIGZvciByZWxhdGl2ZSBuYXZpZ2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGUgZm9sbG93aW5nIHJvdXRlIGNvbmZpZ3VyYXRpb24gd2hlcmUgdGhlIHBhcmVudCByb3V0ZVxyXG4gICAgICogaGFzIHR3byBjaGlsZHJlbi5cclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIFt7XHJcbiAgICAqICAgcGF0aDogJ3BhcmVudCcsXHJcbiAgICAqICAgY29tcG9uZW50OiBQYXJlbnRDb21wb25lbnQsXHJcbiAgICAqICAgY2hpbGRyZW46IFt7XHJcbiAgICAqICAgICBwYXRoOiAnbGlzdCcsXHJcbiAgICAqICAgICBjb21wb25lbnQ6IExpc3RDb21wb25lbnRcclxuICAgICogICB9LHtcclxuICAgICogICAgIHBhdGg6ICdjaGlsZCcsXHJcbiAgICAqICAgICBjb21wb25lbnQ6IENoaWxkQ29tcG9uZW50XHJcbiAgICAqICAgfV1cclxuICAgICogfV1cclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqIFRoZSBmb2xsb3dpbmcgYGdvKClgIGZ1bmN0aW9uIG5hdmlnYXRlcyB0byB0aGUgYGxpc3RgIHJvdXRlIGJ5XHJcbiAgICAgKiBpbnRlcnByZXRpbmcgdGhlIGRlc3RpbmF0aW9uIFVSSSBhcyByZWxhdGl2ZSB0byB0aGUgYWN0aXZhdGVkIGBjaGlsZGAgIHJvdXRlXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAgQENvbXBvbmVudCh7Li4ufSlcclxuICAgICAqICBjbGFzcyBDaGlsZENvbXBvbmVudCB7XHJcbiAgICAqICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxyXG4gICAgKlxyXG4gICAgKiAgICBnbygpIHtcclxuICAgICogICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2xpc3QnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgKiAgICB9XHJcbiAgICAqICB9XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgcmVsYXRpdmVUbz86IEFjdGl2YXRlZFJvdXRlIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBxdWVyeSBwYXJhbWV0ZXJzIHRvIHRoZSBVUkwuXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAvLyBOYXZpZ2F0ZSB0byAvcmVzdWx0cz9wYWdlPTFcclxuICAgICAqIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc3VsdHMnXSwgeyBxdWVyeVBhcmFtczogeyBwYWdlOiAxIH0gfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgcXVlcnlQYXJhbXM/OiBQYXJhbXMgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBoYXNoIGZyYWdtZW50IGZvciB0aGUgVVJMLlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogLy8gTmF2aWdhdGUgdG8gL3Jlc3VsdHMjdG9wXHJcbiAgICAgKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXN1bHRzJ10sIHsgZnJhZ21lbnQ6ICd0b3AnIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIGZyYWdtZW50Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiAqKkRFUFJFQ0FURUQqKjogVXNlIGBxdWVyeVBhcmFtc0hhbmRsaW5nOiBcInByZXNlcnZlXCJgIGluc3RlYWQgdG8gcHJlc2VydmVcclxuICAgICAqIHF1ZXJ5IHBhcmFtZXRlcnMgZm9yIHRoZSBuZXh0IG5hdmlnYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdjRcclxuICAgICAqL1xyXG4gICAgcHJlc2VydmVRdWVyeVBhcmFtcz86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEhvdyB0byBoYW5kbGUgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgcm91dGVyIGxpbmsgZm9yIHRoZSBuZXh0IG5hdmlnYXRpb24uXHJcbiAgICAgKiBPbmUgb2Y6XHJcbiAgICAgKiAqIGBtZXJnZWAgOiBNZXJnZSBuZXcgd2l0aCBjdXJyZW50IHBhcmFtZXRlcnMuXHJcbiAgICAgKiAqIGBwcmVzZXJ2ZWAgOiBQcmVzZXJ2ZSBjdXJyZW50IHBhcmFtZXRlcnMuXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAvLyBmcm9tIC9yZXN1bHRzP3BhZ2U9MSB0byAvdmlldz9wYWdlPTEmcGFnZT0yXHJcbiAgICAgKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92aWV3J10sIHsgcXVlcnlQYXJhbXM6IHsgcGFnZTogMiB9LCAgcXVlcnlQYXJhbXNIYW5kbGluZzogXCJtZXJnZVwiIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc/OiBRdWVyeVBhcmFtc0hhbmRsaW5nIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0cnVlLCBwcmVzZXJ2ZXMgdGhlIFVSTCBmcmFnbWVudCBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogLy8gUHJlc2VydmUgZnJhZ21lbnQgZnJvbSAvcmVzdWx0cyN0b3AgdG8gL3ZpZXcjdG9wXHJcbiAgICAgKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92aWV3J10sIHsgcHJlc2VydmVGcmFnbWVudDogdHJ1ZSB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBwcmVzZXJ2ZUZyYWdtZW50PzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0cnVlLCBuYXZpZ2F0ZXMgd2l0aG91dCBwdXNoaW5nIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIE5hdmlnYXRlIHNpbGVudGx5IHRvIC92aWV3XHJcbiAgICAgKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92aWV3J10sIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHNraXBMb2NhdGlvbkNoYW5nZT86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdHJ1ZSwgbmF2aWdhdGVzIHdoaWxlIHJlcGxhY2luZyB0aGUgY3VycmVudCBzdGF0ZSBpbiBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogLy8gTmF2aWdhdGUgdG8gL3ZpZXdcclxuICAgICAqIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3ZpZXcnXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VVcmw/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXZlbG9wZXItZGVmaW5lZCBzdGF0ZSB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYW55IG5hdmlnYXRpb24uXHJcbiAgICAgKiBBY2Nlc3MgdGhpcyB2YWx1ZSB0aHJvdWdoIHRoZSBgTmF2aWdhdGlvbi5leHRyYXNgIG9iamVjdFxyXG4gICAgICogcmV0dXJuZWQgZnJvbSBgcm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKClgIHdoaWxlIGEgbmF2aWdhdGlvbiBpcyBleGVjdXRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQWZ0ZXIgYSBuYXZpZ2F0aW9uIGNvbXBsZXRlcywgdGhlIHJvdXRlciB3cml0ZXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhpc1xyXG4gICAgICogdmFsdWUgdG9nZXRoZXIgd2l0aCBhIGBuYXZpZ2F0aW9uSWRgIHRvIGBoaXN0b3J5LnN0YXRlYC5cclxuICAgICAqIFRoZSB2YWx1ZSBpcyB3cml0dGVuIHdoZW4gYGxvY2F0aW9uLmdvKClgIG9yIGBsb2NhdGlvbi5yZXBsYWNlU3RhdGUoKWBcclxuICAgICAqIGlzIGNhbGxlZCBiZWZvcmUgYWN0aXZhdGluZyB0aGlzIHJvdXRlLlxyXG4gICAgICpcclxuICAgICAqIE5vdGUgdGhhdCBgaGlzdG9yeS5zdGF0ZWAgZG9lcyBub3QgcGFzcyBhbiBvYmplY3QgZXF1YWxpdHkgdGVzdCBiZWNhdXNlXHJcbiAgICAgKiB0aGUgcm91dGVyIGFkZHMgdGhlIGBuYXZpZ2F0aW9uSWRgIG9uIGVhY2ggbmF2aWdhdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGU/OiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gc3RhcnRzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYXZpZ2F0aW9uU3RhcnQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgdGhlIGNhbGwgb3IgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIG5hdmlnYXRpb24uXHJcbiAgICAgKiBBbiBgaW1wZXJhdGl2ZWAgdHJpZ2dlciBpcyBhIGNhbGwgdG8gYHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKClgIG9yIGByb3V0ZXIubmF2aWdhdGUoKWAuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBuYXZpZ2F0aW9uVHJpZ2dlcj86ICdpbXBlcmF0aXZlJyB8ICdwb3BzdGF0ZScgfCAnaGFzaGNoYW5nZSc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYXZpZ2F0aW9uIHN0YXRlIHRoYXQgd2FzIHByZXZpb3VzbHkgc3VwcGxpZWQgdG8gdGhlIGBwdXNoU3RhdGVgIGNhbGwsXHJcbiAgICAgKiB3aGVuIHRoZSBuYXZpZ2F0aW9uIGlzIHRyaWdnZXJlZCBieSBhIGBwb3BzdGF0ZWAgZXZlbnQuIE90aGVyd2lzZSBudWxsLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBzdGF0ZSBvYmplY3QgaXMgZGVmaW5lZCBieSBgTmF2aWdhdGlvbkV4dHJhc2AsIGFuZCBjb250YWlucyBhbnlcclxuICAgICAqIGRldmVsb3Blci1kZWZpbmVkIHN0YXRlIHZhbHVlLCBhcyB3ZWxsIGFzIGEgdW5pcXVlIElEIHRoYXRcclxuICAgICAqIHRoZSByb3V0ZXIgYXNzaWducyB0byBldmVyeSByb3V0ZXIgdHJhbnNpdGlvbi9uYXZpZ2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEZyb20gdGhlIHBlcnNwZWN0aXZlIG9mIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgbmV2ZXIgXCJnb2VzIGJhY2tcIi5cclxuICAgICAqIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBiYWNrIGJ1dHRvbiBpbiB0aGUgYnJvd3NlcixcclxuICAgICAqIGEgbmV3IG5hdmlnYXRpb24gSUQgaXMgY3JlYXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBVc2UgdGhlIElEIGluIHRoaXMgcHJldmlvdXMtc3RhdGUgb2JqZWN0IHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBhIG5ld2x5IGNyZWF0ZWRcclxuICAgICAqIHN0YXRlIGFuZCBvbmUgcmV0dXJuZWQgdG8gYnkgYSBgcG9wc3RhdGVgIGV2ZW50LCBzbyB0aGF0IHlvdSBjYW4gcmVzdG9yZSBzb21lXHJcbiAgICAgKiByZW1lbWJlcmVkIHN0YXRlLCBzdWNoIGFzIHNjcm9sbCBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHJlc3RvcmVkU3RhdGU/OiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgICAgICBuYXZpZ2F0aW9uSWQ6IG51bWJlcjtcclxuICAgIH0gfCBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIG5hdmlnYXRpb25UcmlnZ2VyPzogJ2ltcGVyYXRpdmUnIHwgJ3BvcHN0YXRlJyB8ICdoYXNoY2hhbmdlJywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcmVzdG9yZWRTdGF0ZT86IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgICAgIG5hdmlnYXRpb25JZDogbnVtYmVyO1xyXG4gICAgfSB8IG51bGwpO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBQcm92aWRlcyBhIHByZWxvYWRpbmcgc3RyYXRlZ3kgdGhhdCBkb2VzIG5vdCBwcmVsb2FkIGFueSBtb2R1bGVzLlxyXG4gKlxyXG4gKiBUaGlzIHN0cmF0ZWd5IGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTm9QcmVsb2FkaW5nIGltcGxlbWVudHMgUHJlbG9hZGluZ1N0cmF0ZWd5IHtcclxuICAgIHByZWxvYWQocm91dGU6IFJvdXRlLCBmbjogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG4vKipcclxuICogU3RvcmUgY29udGV4dHVhbCBpbmZvcm1hdGlvbiBhYm91dCBhIGBSb3V0ZXJPdXRsZXRgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE91dGxldENvbnRleHQge1xyXG4gICAgb3V0bGV0OiBSb3V0ZXJPdXRsZXQgfCBudWxsO1xyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlIHwgbnVsbDtcclxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfCBudWxsO1xyXG4gICAgY2hpbGRyZW46IENoaWxkcmVuT3V0bGV0Q29udGV4dHM7XHJcbiAgICBhdHRhY2hSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgbWFwIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSByZXF1aXJlZCBhbmQgb3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gKiBzcGVjaWZpYyB0byBhIHJvdXRlLlxyXG4gKiBUaGUgbWFwIHN1cHBvcnRzIHJldHJpZXZpbmcgYSBzaW5nbGUgdmFsdWUgd2l0aCBgZ2V0KClgXHJcbiAqIG9yIG11bHRpcGxlIHZhbHVlcyB3aXRoIGBnZXRBbGwoKWAuXHJcbiAqXHJcbiAqIEBzZWUgW1VSTFNlYXJjaFBhcmFtc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1VSTFNlYXJjaFBhcmFtcylcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBhcmFtTWFwIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVwb3J0cyB3aGV0aGVyIHRoZSBtYXAgY29udGFpbnMgYSBnaXZlbiBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBtYXAgY29udGFpbnMgdGhlIGdpdmVuIHBhcmFtZXRlciwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICovXHJcbiAgICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgc2luZ2xlIHZhbHVlIGZvciBhIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBwYXJhbWV0ZXIgbmFtZS5cclxuICAgICAqIEByZXR1cm4gVGhlIHBhcmFtZXRlcidzIHNpbmdsZSB2YWx1ZSxcclxuICAgICAqIG9yIHRoZSBmaXJzdCB2YWx1ZSBpZiB0aGUgcGFyYW1ldGVyIGhhcyBtdWx0aXBsZSB2YWx1ZXMsXHJcbiAgICAgKiBvciBgbnVsbGAgd2hlbiB0aGVyZSBpcyBubyBzdWNoIHBhcmFtZXRlci5cclxuICAgICAqL1xyXG4gICAgZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBtdWx0aXBsZSB2YWx1ZXMgZm9yIGEgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIHBhcmFtZXRlciBuYW1lLlxyXG4gICAgICogQHJldHVybiBBbiBhcnJheSBjb250YWluaW5nIG9uZSBvciBtb3JlIHZhbHVlcyxcclxuICAgICAqIG9yIGFuIGVtcHR5IGFycmF5IGlmIHRoZXJlIGlzIG5vIHN1Y2ggcGFyYW1ldGVyLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0QWxsKG5hbWU6IHN0cmluZyk6IHN0cmluZ1tdO1xyXG4gICAgLyoqIE5hbWVzIG9mIHRoZSBwYXJhbWV0ZXJzIGluIHRoZSBtYXAuICovXHJcbiAgICByZWFkb25seSBrZXlzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29sbGVjdGlvbiBvZiBtYXRyaXggYW5kIHF1ZXJ5IFVSTCBwYXJhbWV0ZXJzLlxyXG4gKiBAc2VlIGBjb252ZXJ0VG9QYXJhbU1hcCgpYFxyXG4gKiBAc2VlIGBQYXJhbU1hcGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBQYXJhbXMgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFByb3ZpZGVzIGEgcHJlbG9hZGluZyBzdHJhdGVneSB0aGF0IHByZWxvYWRzIGFsbCBtb2R1bGVzIGFzIHF1aWNrbHkgYXMgcG9zc2libGUuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBSb3V0ZU1vZHVsZS5mb3JSb290KFJPVVRFUywge3ByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXN9KVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJlbG9hZEFsbE1vZHVsZXMgaW1wbGVtZW50cyBQcmVsb2FkaW5nU3RyYXRlZ3kge1xyXG4gICAgcHJlbG9hZChyb3V0ZTogUm91dGUsIGZuOiAoKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUHJvdmlkZXMgYSBwcmVsb2FkaW5nIHN0cmF0ZWd5LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBQcmVsb2FkaW5nU3RyYXRlZ3kge1xyXG4gICAgYWJzdHJhY3QgcHJlbG9hZChyb3V0ZTogUm91dGUsIGZuOiAoKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcHJpbWFyeSByb3V0aW5nIG91dGxldC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgUFJJTUFSWV9PVVRMRVQgPSBcInByaW1hcnlcIjtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgYSBbREkgcHJvdmlkZXJdKGd1aWRlL2dsb3NzYXJ5I3Byb3ZpZGVyKSBmb3IgYSBzZXQgb2Ygcm91dGVzLlxyXG4gKiBAcGFyYW0gcm91dGVzIFRoZSByb3V0ZSBjb25maWd1cmF0aW9uIHRvIHByb3ZpZGUuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoUk9VVEVTKV0sXHJcbiAqICAgcHJvdmlkZXJzOiBbcHJvdmlkZVJvdXRlcyhFWFRSQV9ST1VURVMpXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBNeU5nTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBwcm92aWRlUm91dGVzKHJvdXRlczogUm91dGVzKTogYW55O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEhvdyB0byBoYW5kbGUgcXVlcnkgcGFyYW1ldGVycyBpbiBhIHJvdXRlciBsaW5rLlxyXG4gKiBPbmUgb2Y6XHJcbiAqIC0gYG1lcmdlYCA6IE1lcmdlIG5ldyB3aXRoIGN1cnJlbnQgcGFyYW1ldGVycy5cclxuICogLSBgcHJlc2VydmVgIDogUHJlc2VydmUgY3VycmVudCBwYXJhbWV0ZXJzLlxyXG4gKlxyXG4gKiBAc2VlIGBOYXZpZ2F0aW9uRXh0cmFzI3F1ZXJ5UGFyYW1zSGFuZGxpbmdgXHJcbiAqIEBzZWUgYFJvdXRlckxpbmtgXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgUXVlcnlQYXJhbXNIYW5kbGluZyA9ICdtZXJnZScgfCAncHJlc2VydmUnIHwgJyc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGNsYXNzZXMgY2FuIGltcGxlbWVudCB0byBiZSBhIGRhdGEgcHJvdmlkZXIuXHJcbiAqIEEgZGF0YSBwcm92aWRlciBjbGFzcyBjYW4gYmUgdXNlZCB3aXRoIHRoZSByb3V0ZXIgdG8gcmVzb2x2ZSBkYXRhIGR1cmluZyBuYXZpZ2F0aW9uLlxyXG4gKiBUaGUgaW50ZXJmYWNlIGRlZmluZXMgYSBgcmVzb2x2ZSgpYCBtZXRob2QgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgbmF2aWdhdGlvbiBzdGFydHMuXHJcbiAqIFRoZSByb3V0ZXIgd2lsbCB0aGVuIHdhaXQgZm9yIHRoZSBkYXRhIHRvIGJlIHJlc29sdmVkIGJlZm9yZSB0aGUgcm91dGUgaXMgZmluYWxseSBhY3RpdmF0ZWQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG4gKiBleHBvcnQgY2xhc3MgSGVyb1Jlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxIZXJvPiB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBIZXJvU2VydmljZSkge31cclxuICpcclxuICogICByZXNvbHZlKFxyXG4gKiAgICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAqICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gKiAgICk6IE9ic2VydmFibGU8YW55PnxQcm9taXNlPGFueT58YW55IHtcclxuICogICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0SGVybyhyb3V0ZS5wYXJhbU1hcC5nZXQoJ2lkJykpO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcclxuICogICAgICAgICBjb21wb25lbnQ6IEhlcm9EZXRhaWxDb21wb25lbnQsXHJcbiAqICAgICAgICAgcmVzb2x2ZToge1xyXG4gKiAgICAgICAgICAgaGVybzogSGVyb1Jlc29sdmVyXHJcbiAqICAgICAgICAgfVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYHJlc29sdmVgIHNpZ25hdHVyZTpcclxuICpcclxuICogYGBgXHJcbiAqIGV4cG9ydCBjb25zdCBteUhlcm86IEhlcm8gPSB7XHJcbiAqICAgLy8gLi4uXHJcbiAqIH1cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAnZGV0YWlsLzppZCcsXHJcbiAqICAgICAgICAgY29tcG9uZW50OiBIZXJvQ29tcG9uZW50LFxyXG4gKiAgICAgICAgIHJlc29sdmU6IHtcclxuICogICAgICAgICAgIGhlcm86ICdoZXJvUmVzb2x2ZXInXHJcbiAqICAgICAgICAgfVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHByb3ZpZGU6ICdoZXJvUmVzb2x2ZXInLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4gbXlIZXJvXHJcbiAqICAgICB9XHJcbiAqICAgXVxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUmVzb2x2ZTxUPiB7XHJcbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8VD4gfCBQcm9taXNlPFQ+IHwgVDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgdGhlIHJlc29sdmVkIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGEgcGFydGljdWxhciByb3V0ZS5cclxuICpcclxuICogQHNlZSBgUm91dGUjcmVzb2x2ZWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgUmVzb2x2ZURhdGEgPSB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqIEBzZWUgYFJlc29sdmVTdGFydGAuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlc29sdmVFbmQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZztcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIHRoZSBzdGFydCBvZiB0aGUgUmVzb2x2ZSBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKlxyXG4gKiBSdW5zIGluIHRoZSBcInJlc29sdmVcIiBwaGFzZSB3aGV0aGVyIG9yIG5vdCB0aGVyZSBpcyBhbnl0aGluZyB0byByZXNvbHZlLlxyXG4gKiBJbiBmdXR1cmUsIG1heSBjaGFuZ2UgdG8gb25seSBydW4gd2hlbiB0aGVyZSBhcmUgdGhpbmdzIHRvIGJlIHJlc29sdmVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZXNvbHZlU3RhcnQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZztcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRoYXQgZGVmaW5lcyBhIHNpbmdsZSByb3V0ZS5cclxuICogQSBzZXQgb2Ygcm91dGVzIGFyZSBjb2xsZWN0ZWQgaW4gYSBgUm91dGVzYCBhcnJheSB0byBkZWZpbmUgYSBgUm91dGVyYCBjb25maWd1cmF0aW9uLlxyXG4gKiBUaGUgcm91dGVyIGF0dGVtcHRzIHRvIG1hdGNoIHNlZ21lbnRzIG9mIGEgZ2l2ZW4gVVJMIGFnYWluc3QgZWFjaCByb3V0ZSxcclxuICogdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBkZWZpbmVkIGluIHRoaXMgb2JqZWN0LlxyXG4gKlxyXG4gKiBTdXBwb3J0cyBzdGF0aWMsIHBhcmFtZXRlcml6ZWQsIHJlZGlyZWN0LCBhbmQgd2lsZGNhcmQgcm91dGVzLCBhcyB3ZWxsIGFzXHJcbiAqIGN1c3RvbSByb3V0ZSBkYXRhIGFuZCByZXNvbHZlIG1ldGhvZHMuXHJcbiAqXHJcbiAqIEZvciBkZXRhaWxlZCB1c2FnZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBbUm91dGluZyBHdWlkZV0oZ3VpZGUvcm91dGVyKS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIFNpbXBsZSBDb25maWd1cmF0aW9uXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgcm91dGUgc3BlY2lmaWVzIHRoYXQgd2hlbiBuYXZpZ2F0aW5nIHRvLCBmb3IgZXhhbXBsZSxcclxuICogYC90ZWFtLzExL3VzZXIvYm9iYCwgdGhlIHJvdXRlciBjcmVhdGVzIHRoZSAnVGVhbScgY29tcG9uZW50XHJcbiAqIHdpdGggdGhlICdVc2VyJyBjaGlsZCBjb21wb25lbnQgaW4gaXQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAgKiAgY29tcG9uZW50OiBUZWFtLFxyXG4gKiAgIGNoaWxkcmVuOiBbe1xyXG4gKiAgICAgcGF0aDogJ3VzZXIvOm5hbWUnLFxyXG4gKiAgICAgY29tcG9uZW50OiBVc2VyXHJcbiAqICAgfV1cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBNdWx0aXBsZSBPdXRsZXRzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgcm91dGUgY3JlYXRlcyBzaWJsaW5nIGNvbXBvbmVudHMgd2l0aCBtdWx0aXBsZSBvdXRsZXRzLlxyXG4gKiBXaGVuIG5hdmlnYXRpbmcgdG8gYC90ZWFtLzExKGF1eDpjaGF0L2ppbSlgLCB0aGUgcm91dGVyIGNyZWF0ZXMgdGhlICdUZWFtJyBjb21wb25lbnQgbmV4dCB0b1xyXG4gKiB0aGUgJ0NoYXQnIGNvbXBvbmVudC4gVGhlICdDaGF0JyBjb21wb25lbnQgaXMgcGxhY2VkIGludG8gdGhlICdhdXgnIG91dGxldC5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICBjb21wb25lbnQ6IFRlYW1cclxuICogfSwge1xyXG4gKiAgIHBhdGg6ICdjaGF0Lzp1c2VyJyxcclxuICogICBjb21wb25lbnQ6IENoYXRcclxuICogICBvdXRsZXQ6ICdhdXgnXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgV2lsZCBDYXJkc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHJvdXRlIHVzZXMgd2lsZC1jYXJkIG5vdGF0aW9uIHRvIHNwZWNpZnkgYSBjb21wb25lbnRcclxuICogdGhhdCBpcyBhbHdheXMgaW5zdGFudGlhdGVkIHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgeW91IG5hdmlnYXRlIHRvLlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAnKionLFxyXG4gKiAgIGNvbXBvbmVudDogV2lsZGNhcmRDb21wb25lbnRcclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBSZWRpcmVjdHNcclxuICpcclxuICogVGhlIGZvbGxvd2luZyByb3V0ZSB1c2VzIHRoZSBgcmVkaXJlY3RUb2AgcHJvcGVydHkgdG8gaWdub3JlIGEgc2VnbWVudCBvZlxyXG4gKiBhIGdpdmVuIFVSTCB3aGVuIGxvb2tpbmcgZm9yIGEgY2hpbGQgcGF0aC5cclxuICpcclxuICogV2hlbiBuYXZpZ2F0aW5nIHRvICcvdGVhbS8xMS9sZWdhY3kvdXNlci9qaW0nLCB0aGUgcm91dGVyIGNoYW5nZXMgdGhlIFVSTCBzZWdtZW50XHJcbiAqICcvdGVhbS8xMS9sZWdhY3kvdXNlci9qaW0nIHRvICcvdGVhbS8xMS91c2VyL2ppbScsIGFuZCB0aGVuIGluc3RhbnRpYXRlc1xyXG4gKiB0aGUgVGVhbSBjb21wb25lbnQgd2l0aCB0aGUgVXNlciBjaGlsZCBjb21wb25lbnQgaW4gaXQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgY29tcG9uZW50OiBUZWFtLFxyXG4gKiAgIGNoaWxkcmVuOiBbe1xyXG4gKiAgICAgcGF0aDogJ2xlZ2FjeS91c2VyLzpuYW1lJyxcclxuICogICAgIHJlZGlyZWN0VG86ICd1c2VyLzpuYW1lJ1xyXG4gKiAgIH0sIHtcclxuICogICAgIHBhdGg6ICd1c2VyLzpuYW1lJyxcclxuICogICAgIGNvbXBvbmVudDogVXNlclxyXG4gKiAgIH1dXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgcmVkaXJlY3QgcGF0aCBjYW4gYmUgcmVsYXRpdmUsIGFzIHNob3duIGluIHRoaXMgZXhhbXBsZSwgb3IgYWJzb2x1dGUuXHJcbiAqIElmIHdlIGNoYW5nZSB0aGUgYHJlZGlyZWN0VG9gIHZhbHVlIGluIHRoZSBleGFtcGxlIHRvIHRoZSBhYnNvbHV0ZSBVUkwgc2VnbWVudCAnL3VzZXIvOm5hbWUnLFxyXG4gKiB0aGUgcmVzdWx0IFVSTCBpcyBhbHNvIGFic29sdXRlLCAnL3VzZXIvamltJy5cclxuXHJcbiAqICMjIyBFbXB0eSBQYXRoXHJcbiAqXHJcbiAqIEVtcHR5LXBhdGggcm91dGUgY29uZmlndXJhdGlvbnMgY2FuIGJlIHVzZWQgdG8gaW5zdGFudGlhdGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCAnY29uc3VtZSdcclxuICogYW55IFVSTCBzZWdtZW50cy5cclxuICpcclxuICogSW4gdGhlIGZvbGxvd2luZyBjb25maWd1cmF0aW9uLCB3aGVuIG5hdmlnYXRpbmcgdG9cclxuICogYC90ZWFtLzExYCwgdGhlIHJvdXRlciBpbnN0YW50aWF0ZXMgdGhlICdBbGxVc2VycycgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgIGNvbXBvbmVudDogVGVhbSxcclxuICogICBjaGlsZHJlbjogW3tcclxuICogICAgIHBhdGg6ICcnLFxyXG4gKiAgICAgY29tcG9uZW50OiBBbGxVc2Vyc1xyXG4gKiAgIH0sIHtcclxuICogICAgIHBhdGg6ICd1c2VyLzpuYW1lJyxcclxuICogICAgIGNvbXBvbmVudDogVXNlclxyXG4gKiAgIH1dXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBFbXB0eS1wYXRoIHJvdXRlcyBjYW4gaGF2ZSBjaGlsZHJlbi4gSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCB3aGVuIG5hdmlnYXRpbmdcclxuICogdG8gYC90ZWFtLzExL3VzZXIvamltYCwgdGhlIHJvdXRlciBpbnN0YW50aWF0ZXMgdGhlIHdyYXBwZXIgY29tcG9uZW50IHdpdGhcclxuICogdGhlIHVzZXIgY29tcG9uZW50IGluIGl0LlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYW4gZW1wdHkgcGF0aCByb3V0ZSBpbmhlcml0cyBpdHMgcGFyZW50J3MgcGFyYW1ldGVycyBhbmQgZGF0YS5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICBjb21wb25lbnQ6IFRlYW0sXHJcbiAqICAgY2hpbGRyZW46IFt7XHJcbiAqICAgICBwYXRoOiAnJyxcclxuICogICAgIGNvbXBvbmVudDogV3JhcHBlckNtcCxcclxuICogICAgIGNoaWxkcmVuOiBbe1xyXG4gKiAgICAgICBwYXRoOiAndXNlci86bmFtZScsXHJcbiAqICAgICAgIGNvbXBvbmVudDogVXNlclxyXG4gKiAgICAgfV1cclxuICogICB9XVxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIE1hdGNoaW5nIFN0cmF0ZWd5XHJcbiAqXHJcbiAqIFRoZSBkZWZhdWx0IHBhdGgtbWF0Y2ggc3RyYXRlZ3kgaXMgJ3ByZWZpeCcsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHJvdXRlclxyXG4gKiBjaGVja3MgVVJMIGVsZW1lbnRzIGZyb20gdGhlIGxlZnQgdG8gc2VlIGlmIHRoZSBVUkwgbWF0Y2hlcyBhIHNwZWNpZmllZCBwYXRoLlxyXG4gKiBGb3IgZXhhbXBsZSwgJy90ZWFtLzExL3VzZXInIG1hdGNoZXMgJ3RlYW0vOmlkJy5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJycsXHJcbiAqICAgcGF0aE1hdGNoOiAncHJlZml4JywgLy9kZWZhdWx0XHJcbiAqICAgcmVkaXJlY3RUbzogJ21haW4nXHJcbiAqIH0sIHtcclxuICogICBwYXRoOiAnbWFpbicsXHJcbiAqICAgY29tcG9uZW50OiBNYWluXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIHNwZWNpZnkgdGhlIHBhdGgtbWF0Y2ggc3RyYXRlZ3kgJ2Z1bGwnIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBwYXRoXHJcbiAqIGNvdmVycyB0aGUgd2hvbGUgdW5jb25zdW1lZCBVUkwuIEl0IGlzIGltcG9ydGFudCB0byBkbyB0aGlzIHdoZW4gcmVkaXJlY3RpbmdcclxuICogZW1wdHktcGF0aCByb3V0ZXMuIE90aGVyd2lzZSwgYmVjYXVzZSBhbiBlbXB0eSBwYXRoIGlzIGEgcHJlZml4IG9mIGFueSBVUkwsXHJcbiAqIHRoZSByb3V0ZXIgd291bGQgYXBwbHkgdGhlIHJlZGlyZWN0IGV2ZW4gd2hlbiBuYXZpZ2F0aW5nIHRvIHRoZSByZWRpcmVjdCBkZXN0aW5hdGlvbixcclxuICogY3JlYXRpbmcgYW4gZW5kbGVzcyBsb29wLlxyXG4gKlxyXG4gKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsIHN1cHBseWluZyB0aGUgJ2Z1bGwnIGBwYXRoTWF0Y2hgIHN0cmF0ZWd5IGVuc3VyZXNcclxuICogdGhhdCB0aGUgcm91dGVyIGFwcGxpZXMgdGhlIHJlZGlyZWN0IGlmIGFuZCBvbmx5IGlmIG5hdmlnYXRpbmcgdG8gJy8nLlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAnJyxcclxuICogICBwYXRoTWF0Y2g6ICdmdWxsJyxcclxuICogICByZWRpcmVjdFRvOiAnbWFpbidcclxuICogfSwge1xyXG4gKiAgIHBhdGg6ICdtYWluJyxcclxuICogICBjb21wb25lbnQ6IE1haW5cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBDb21wb25lbnRsZXNzIFJvdXRlc1xyXG4gKlxyXG4gKiBZb3UgY2FuIHNoYXJlIHBhcmFtZXRlcnMgYmV0d2VlbiBzaWJsaW5nIGNvbXBvbmVudHMuXHJcbiAqIEZvciBleGFtcGxlLCBzdXBwb3NlIHRoYXQgdHdvIHNpYmxpbmcgY29tcG9uZW50cyBzaG91bGQgZ28gbmV4dCB0byBlYWNoIG90aGVyLFxyXG4gKiBhbmQgYm90aCBvZiB0aGVtIHJlcXVpcmUgYW4gSUQgcGFyYW1ldGVyLiBZb3UgY2FuIGFjY29tcGxpc2ggdGhpcyB1c2luZyBhIHJvdXRlXHJcbiAqIHRoYXQgZG9lcyBub3Qgc3BlY2lmeSBhIGNvbXBvbmVudCBhdCB0aGUgdG9wIGxldmVsLlxyXG4gKlxyXG4gKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsICdNYWluQ2hpbGQnIGFuZCAnQXV4Q2hpbGQnIGFyZSBzaWJsaW5ncy5cclxuICogV2hlbiBuYXZpZ2F0aW5nIHRvICdwYXJlbnQvMTAvKGEvL2F1eDpiKScsIHRoZSByb3V0ZSBpbnN0YW50aWF0ZXNcclxuICogdGhlIG1haW4gY2hpbGQgYW5kIGF1eCBjaGlsZCBjb21wb25lbnRzIG5leHQgdG8gZWFjaCBvdGhlci5cclxuICogRm9yIHRoaXMgdG8gd29yaywgdGhlIGFwcGxpY2F0aW9uIGNvbXBvbmVudCBtdXN0IGhhdmUgdGhlIHByaW1hcnkgYW5kIGF1eCBvdXRsZXRzIGRlZmluZWQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgICBwYXRoOiAncGFyZW50LzppZCcsXHJcbiAqICAgIGNoaWxkcmVuOiBbXHJcbiAqICAgICAgeyBwYXRoOiAnYScsIGNvbXBvbmVudDogTWFpbkNoaWxkIH0sXHJcbiAqICAgICAgeyBwYXRoOiAnYicsIGNvbXBvbmVudDogQXV4Q2hpbGQsIG91dGxldDogJ2F1eCcgfVxyXG4gKiAgICBdXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgcm91dGVyIG1lcmdlcyB0aGUgcGFyYW1ldGVycywgZGF0YSwgYW5kIHJlc29sdmUgb2YgdGhlIGNvbXBvbmVudGxlc3NcclxuICogcGFyZW50IGludG8gdGhlIHBhcmFtZXRlcnMsIGRhdGEsIGFuZCByZXNvbHZlIG9mIHRoZSBjaGlsZHJlbi5cclxuICpcclxuICogVGhpcyBpcyBlc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIGNoaWxkIGNvbXBvbmVudHMgYXJlIGRlZmluZWRcclxuICogd2l0aCBhbiBlbXB0eSBwYXRoIHN0cmluZywgYXMgaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLlxyXG4gKiBXaXRoIHRoaXMgY29uZmlndXJhdGlvbiwgbmF2aWdhdGluZyB0byAnL3BhcmVudC8xMCcgY3JlYXRlc1xyXG4gKiB0aGUgbWFpbiBjaGlsZCBhbmQgYXV4IGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgICBwYXRoOiAncGFyZW50LzppZCcsXHJcbiAqICAgIGNoaWxkcmVuOiBbXHJcbiAqICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBNYWluQ2hpbGQgfSxcclxuICogICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEF1eENoaWxkLCBvdXRsZXQ6ICdhdXgnIH1cclxuICogICAgXVxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIExhenkgTG9hZGluZ1xyXG4gKlxyXG4gKiBMYXp5IGxvYWRpbmcgc3BlZWRzIHVwIGFwcGxpY2F0aW9uIGxvYWQgdGltZSBieSBzcGxpdHRpbmcgdGhlIGFwcGxpY2F0aW9uXHJcbiAqIGludG8gbXVsdGlwbGUgYnVuZGxlcyBhbmQgbG9hZGluZyB0aGVtIG9uIGRlbWFuZC5cclxuICogVG8gdXNlIGxhenkgbG9hZGluZywgcHJvdmlkZSB0aGUgYGxvYWRDaGlsZHJlbmAgcHJvcGVydHkgIGluc3RlYWQgb2YgdGhlIGBjaGlsZHJlbmAgcHJvcGVydHkuXHJcbiAqXHJcbiAqIEdpdmVuIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSByb3V0ZSwgdGhlIHJvdXRlciB3aWxsIGxhenkgbG9hZFxyXG4gKiB0aGUgYXNzb2NpYXRlZCBtb2R1bGUgb24gZGVtYW5kIHVzaW5nIHRoZSBicm93c2VyIG5hdGl2ZSBpbXBvcnQgc3lzdGVtLlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAnbGF6eScsXHJcbiAqICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vbGF6eS1yb3V0ZS9sYXp5Lm1vZHVsZScpLnRoZW4obW9kID0+IG1vZC5MYXp5TW9kdWxlKSxcclxuICogfV07XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUm91dGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGF0aCB0byBtYXRjaCBhZ2FpbnN0LiBDYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIGEgY3VzdG9tIGBtYXRjaGVyYCBmdW5jdGlvbi5cclxuICAgICAqIEEgVVJMIHN0cmluZyB0aGF0IHVzZXMgcm91dGVyIG1hdGNoaW5nIG5vdGF0aW9uLlxyXG4gICAgICogQ2FuIGJlIGEgd2lsZCBjYXJkIChgKipgKSB0aGF0IG1hdGNoZXMgYW55IFVSTCAoc2VlIFVzYWdlIE5vdGVzIGJlbG93KS5cclxuICAgICAqIERlZmF1bHQgaXMgXCIvXCIgKHRoZSByb290IHBhdGgpLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcGF0aD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhdGgtbWF0Y2hpbmcgc3RyYXRlZ3ksIG9uZSBvZiAncHJlZml4JyBvciAnZnVsbCcuXHJcbiAgICAgKiBEZWZhdWx0IGlzICdwcmVmaXgnLlxyXG4gICAgICpcclxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSByb3V0ZXIgY2hlY2tzIFVSTCBlbGVtZW50cyBmcm9tIHRoZSBsZWZ0IHRvIHNlZSBpZiB0aGUgVVJMXHJcbiAgICAgKiBtYXRjaGVzIGEgZ2l2ZW4gIHBhdGgsIGFuZCBzdG9wcyB3aGVuIHRoZXJlIGlzIGEgbWF0Y2guIEZvciBleGFtcGxlLFxyXG4gICAgICogJy90ZWFtLzExL3VzZXInIG1hdGNoZXMgJ3RlYW0vOmlkJy5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgcGF0aC1tYXRjaCBzdHJhdGVneSAnZnVsbCcgbWF0Y2hlcyBhZ2FpbnN0IHRoZSBlbnRpcmUgVVJMLlxyXG4gICAgICogSXQgaXMgaW1wb3J0YW50IHRvIGRvIHRoaXMgd2hlbiByZWRpcmVjdGluZyBlbXB0eS1wYXRoIHJvdXRlcy5cclxuICAgICAqIE90aGVyd2lzZSwgYmVjYXVzZSBhbiBlbXB0eSBwYXRoIGlzIGEgcHJlZml4IG9mIGFueSBVUkwsXHJcbiAgICAgKiB0aGUgcm91dGVyIHdvdWxkIGFwcGx5IHRoZSByZWRpcmVjdCBldmVuIHdoZW4gbmF2aWdhdGluZ1xyXG4gICAgICogdG8gdGhlIHJlZGlyZWN0IGRlc3RpbmF0aW9uLCBjcmVhdGluZyBhbiBlbmRsZXNzIGxvb3AuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwYXRoTWF0Y2g/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEEgY3VzdG9tIFVSTC1tYXRjaGluZyBmdW5jdGlvbi4gQ2Fubm90IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBgcGF0aGAuXHJcbiAgICAgKi9cclxuICAgIG1hdGNoZXI/OiBVcmxNYXRjaGVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRvIGluc3RhbnRpYXRlIHdoZW4gdGhlIHBhdGggbWF0Y2hlcy5cclxuICAgICAqIENhbiBiZSBlbXB0eSBpZiBjaGlsZCByb3V0ZXMgc3BlY2lmeSBjb21wb25lbnRzLlxyXG4gICAgICovXHJcbiAgICBjb21wb25lbnQ/OiBUeXBlPGFueT47XHJcbiAgICAvKipcclxuICAgICAqIEEgVVJMIHRvIHdoaWNoIHRvIHJlZGlyZWN0IHdoZW4gYSB0aGUgcGF0aCBtYXRjaGVzLlxyXG4gICAgICogQWJzb2x1dGUgaWYgdGhlIFVSTCBiZWdpbnMgd2l0aCBhIHNsYXNoICgvKSwgb3RoZXJ3aXNlIHJlbGF0aXZlIHRvIHRoZSBwYXRoIFVSTC5cclxuICAgICAqIFdoZW4gbm90IHByZXNlbnQsIHJvdXRlciBkb2VzIG5vdCByZWRpcmVjdC5cclxuICAgICAqL1xyXG4gICAgcmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiBhIGBSb3V0ZXJPdXRsZXRgIG9iamVjdCB3aGVyZSB0aGUgY29tcG9uZW50IGNhbiBiZSBwbGFjZWRcclxuICAgICAqIHdoZW4gdGhlIHBhdGggbWF0Y2hlcy5cclxuICAgICAqL1xyXG4gICAgb3V0bGV0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBkZXBlbmRlbmN5LWluamVjdGlvbiB0b2tlbnMgdXNlZCB0byBsb29rIHVwIGBDYW5BY3RpdmF0ZSgpYFxyXG4gICAgICogaGFuZGxlcnMsIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFsbG93ZWQgdG9cclxuICAgICAqIGFjdGl2YXRlIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBhY3RpdmF0ZS5cclxuICAgICAqL1xyXG4gICAgY2FuQWN0aXZhdGU/OiBhbnlbXTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgREkgdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuQWN0aXZhdGVDaGlsZCgpYCBoYW5kbGVycyxcclxuICAgICAqIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFsbG93ZWQgdG8gYWN0aXZhdGVcclxuICAgICAqIGEgY2hpbGQgb2YgdGhlIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgYW55IHVzZXIgY2FuIGFjdGl2YXRlIGEgY2hpbGQuXHJcbiAgICAgKi9cclxuICAgIGNhbkFjdGl2YXRlQ2hpbGQ/OiBhbnlbXTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgREkgdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuRGVhY3RpdmF0ZSgpYFxyXG4gICAgICogaGFuZGxlcnMsIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFsbG93ZWQgdG9cclxuICAgICAqIGRlYWN0aXZhdGUgdGhlIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgYW55IHVzZXIgY2FuIGRlYWN0aXZhdGUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjYW5EZWFjdGl2YXRlPzogYW55W107XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIERJIHRva2VucyB1c2VkIHRvIGxvb2sgdXAgYENhbkxvYWQoKWBcclxuICAgICAqIGhhbmRsZXJzLCBpbiBvcmRlciB0byBkZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhbGxvd2VkIHRvXHJcbiAgICAgKiBsb2FkIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBsb2FkLlxyXG4gICAgICovXHJcbiAgICBjYW5Mb2FkPzogYW55W107XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgZGV2ZWxvcGVyLWRlZmluZWQgZGF0YSBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IHZpYVxyXG4gICAgICogYEFjdGl2YXRlZFJvdXRlYC4gQnkgZGVmYXVsdCwgbm8gYWRkaXRpb25hbCBkYXRhIGlzIHBhc3NlZC5cclxuICAgICAqL1xyXG4gICAgZGF0YT86IERhdGE7XHJcbiAgICAvKipcclxuICAgICAqIEEgbWFwIG9mIERJIHRva2VucyB1c2VkIHRvIGxvb2sgdXAgZGF0YSByZXNvbHZlcnMuIFNlZSBgUmVzb2x2ZWAuXHJcbiAgICAgKi9cclxuICAgIHJlc29sdmU/OiBSZXNvbHZlRGF0YTtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgY2hpbGQgYFJvdXRlYCBvYmplY3RzIHRoYXQgc3BlY2lmaWVzIGEgbmVzdGVkIHJvdXRlXHJcbiAgICAgKiBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbj86IFJvdXRlcztcclxuICAgIC8qKlxyXG4gICAgICogQSBgTG9hZENoaWxkcmVuYCBvYmplY3Qgc3BlY2lmeWluZyBsYXp5LWxvYWRlZCBjaGlsZCByb3V0ZXMuXHJcbiAgICAgKi9cclxuICAgIGxvYWRDaGlsZHJlbj86IExvYWRDaGlsZHJlbjtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGVuIGd1YXJkcyBhbmQgcmVzb2x2ZXJzIHdpbGwgYmUgcnVuLiBPbmUgb2ZcclxuICAgICAqIC0gYHBhcmFtc09yUXVlcnlQYXJhbXNDaGFuZ2VgIDogUnVuIHdoZW4gcXVlcnkgcGFyYW1ldGVycyBjaGFuZ2UuXHJcbiAgICAgKiAtIGBhbHdheXNgIDogUnVuIG9uIGV2ZXJ5IGV4ZWN1dGlvbi5cclxuICAgICAqIEJ5IGRlZmF1bHQsIGd1YXJkcyBhbmQgcmVzb2x2ZXJzIHJ1biBvbmx5IHdoZW4gdGhlIG1hdHJpeFxyXG4gICAgICogcGFyYW1ldGVycyBvZiB0aGUgcm91dGUgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBydW5HdWFyZHNBbmRSZXNvbHZlcnM/OiBSdW5HdWFyZHNBbmRSZXNvbHZlcnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIHJvdXRlIGhhcyBiZWVuIGxhenkgbG9hZGVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZUNvbmZpZ0xvYWRFbmQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJvdXRlOiBSb3V0ZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJvdXRlOiBSb3V0ZSk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYmVmb3JlIGxhenkgbG9hZGluZyBhIHJvdXRlIGNvbmZpZ3VyYXRpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlQ29uZmlnTG9hZFN0YXJ0IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZTogUm91dGU7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZTogUm91dGUpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEEgc2VydmljZSB0aGF0IHByb3ZpZGVzIG5hdmlnYXRpb24gYW5kIFVSTCBtYW5pcHVsYXRpb24gY2FwYWJpbGl0aWVzLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZWAuXHJcbiAqIEBzZWUgW1JvdXRpbmcgYW5kIE5hdmlnYXRpb24gR3VpZGVdKGd1aWRlL3JvdXRlcikuXHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBSb3V0ZXJNb2R1bGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyIHtcclxuICAgIHByaXZhdGUgcm9vdENvbXBvbmVudFR5cGU7XHJcbiAgICBwcml2YXRlIHVybFNlcmlhbGl6ZXI7XHJcbiAgICBwcml2YXRlIHJvb3RDb250ZXh0cztcclxuICAgIHByaXZhdGUgbG9jYXRpb247XHJcbiAgICBjb25maWc6IFJvdXRlcztcclxuICAgIHByaXZhdGUgY3VycmVudFVybFRyZWU7XHJcbiAgICBwcml2YXRlIHJhd1VybFRyZWU7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJVcmxUcmVlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFuc2l0aW9ucztcclxuICAgIHByaXZhdGUgbmF2aWdhdGlvbnM7XHJcbiAgICBwcml2YXRlIGxhc3RTdWNjZXNzZnVsTmF2aWdhdGlvbjtcclxuICAgIHByaXZhdGUgY3VycmVudE5hdmlnYXRpb247XHJcbiAgICBwcml2YXRlIGxvY2F0aW9uU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0aW9uSWQ7XHJcbiAgICBwcml2YXRlIGNvbmZpZ0xvYWRlcjtcclxuICAgIHByaXZhdGUgbmdNb2R1bGU7XHJcbiAgICBwcml2YXRlIGNvbnNvbGU7XHJcbiAgICBwcml2YXRlIGlzTmdab25lRW5hYmxlZDtcclxuICAgIC8qKlxyXG4gICAgICogQW4gZXZlbnQgc3RyZWFtIGZvciByb3V0aW5nIGV2ZW50cyBpbiB0aGlzIE5nTW9kdWxlLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBldmVudHM6IE9ic2VydmFibGU8RXZlbnQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiByb3V0aW5nIGluIHRoaXMgTmdNb2R1bGUuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciBuYXZpZ2F0aW9uIGVycm9ycyBpbiB0aGlzIE5nTW9kdWxlLlxyXG4gICAgICovXHJcbiAgICBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcjtcclxuICAgIC8qKlxyXG4gICAgICogQSBoYW5kbGVyIGZvciBlcnJvcnMgdGhyb3duIGJ5IGBSb3V0ZXIucGFyc2VVcmwodXJsKWBcclxuICAgICAqIHdoZW4gYHVybGAgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXIuXHJcbiAgICAgKiBUaGUgbW9zdCBjb21tb24gY2FzZSBpcyBhIGAlYCBzaWduXHJcbiAgICAgKiB0aGF0J3Mgbm90IGVuY29kZWQgYW5kIGlzIG5vdCBwYXJ0IG9mIGEgcGVyY2VudCBlbmNvZGVkIHNlcXVlbmNlLlxyXG4gICAgICovXHJcbiAgICBtYWxmb3JtZWRVcmlFcnJvckhhbmRsZXI6IChlcnJvcjogVVJJRXJyb3IsIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIHVybDogc3RyaW5nKSA9PiBVcmxUcmVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmIGF0IGxlYXN0IG9uZSBuYXZpZ2F0aW9uIGV2ZW50IGhhcyBvY2N1cnJlZCxcclxuICAgICAqIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xyXG4gICAgbmF2aWdhdGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBsYXN0U3VjY2Vzc2Z1bElkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0cmF0ZWd5IGZvciBleHRyYWN0aW5nIGFuZCBtZXJnaW5nIFVSTHMuXHJcbiAgICAgKiBVc2VkIGZvciBBbmd1bGFySlMgdG8gQW5ndWxhciBtaWdyYXRpb25zLlxyXG4gICAgICovXHJcbiAgICB1cmxIYW5kbGluZ1N0cmF0ZWd5OiBVcmxIYW5kbGluZ1N0cmF0ZWd5O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0cmF0ZWd5IGZvciByZS11c2luZyByb3V0ZXMuXHJcbiAgICAgKi9cclxuICAgIHJvdXRlUmV1c2VTdHJhdGVneTogUm91dGVSZXVzZVN0cmF0ZWd5O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgdG8gaGFuZGxlIGEgbmF2aWdhdGlvbiByZXF1ZXN0IHRvIHRoZSBjdXJyZW50IFVSTC4gT25lIG9mOlxyXG4gICAgICogLSBgJ2lnbm9yZSdgIDogIFRoZSByb3V0ZXIgaWdub3JlcyB0aGUgcmVxdWVzdC5cclxuICAgICAqIC0gYCdyZWxvYWQnYCA6IFRoZSByb3V0ZXIgcmVsb2FkcyB0aGUgVVJMLiBVc2UgdG8gaW1wbGVtZW50IGEgXCJyZWZyZXNoXCIgZmVhdHVyZS5cclxuICAgICAqL1xyXG4gICAgb25TYW1lVXJsTmF2aWdhdGlvbjogJ3JlbG9hZCcgfCAnaWdub3JlJztcclxuICAgIC8qKlxyXG4gICAgICogSG93IHRvIG1lcmdlIHBhcmFtZXRlcnMsIGRhdGEsIGFuZCByZXNvbHZlZCBkYXRhIGZyb20gcGFyZW50IHRvIGNoaWxkXHJcbiAgICAgKiByb3V0ZXMuIE9uZSBvZjpcclxuICAgICAqXHJcbiAgICAgKiAtIGAnZW1wdHlPbmx5J2AgOiBJbmhlcml0IHBhcmVudCBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZWQgZGF0YVxyXG4gICAgICogZm9yIHBhdGgtbGVzcyBvciBjb21wb25lbnQtbGVzcyByb3V0ZXMuXHJcbiAgICAgKiAtIGAnYWx3YXlzJ2AgOiBJbmhlcml0IHBhcmVudCBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZWQgZGF0YVxyXG4gICAgICogZm9yIGFsbCBjaGlsZCByb3V0ZXMuXHJcbiAgICAgKi9cclxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6ICdlbXB0eU9ubHknIHwgJ2Fsd2F5cyc7XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hlbiB0aGUgcm91dGVyIHVwZGF0ZXMgdGhlIGJyb3dzZXIgVVJMLlxyXG4gICAgICogQnkgZGVmYXVsdCAoYFwiZGVmZXJyZWRcImApLCB1cGRhdGVzIHRoZSBicm93c2VyIFVSTCBhZnRlciBuYXZpZ2F0aW9uIGhhcyBmaW5pc2hlZC5cclxuICAgICAqIFNldCB0byBgJ2VhZ2VyJ2AgdG8gdXBkYXRlIHRoZSBicm93c2VyIFVSTCBhdCB0aGUgYmVnaW5uaW5nIG9mIG5hdmlnYXRpb24uXHJcbiAgICAgKiBZb3UgY2FuIGNob29zZSB0byB1cGRhdGUgZWFybHkgc28gdGhhdCwgaWYgbmF2aWdhdGlvbiBmYWlscyxcclxuICAgICAqIHlvdSBjYW4gc2hvdyBhbiBlcnJvciBtZXNzYWdlIHdpdGggdGhlIFVSTCB0aGF0IGZhaWxlZC5cclxuICAgICAqL1xyXG4gICAgdXJsVXBkYXRlU3RyYXRlZ3k6ICdkZWZlcnJlZCcgfCAnZWFnZXInO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGVzIGEgYnVnIGZpeCB0aGF0IGNvcnJlY3RzIHJlbGF0aXZlIGxpbmsgcmVzb2x1dGlvbiBpbiBjb21wb25lbnRzIHdpdGggZW1wdHkgcGF0aHMuXHJcbiAgICAgKiBAc2VlIGBSb3V0ZXJNb2R1bGVgXHJcbiAgICAgKi9cclxuICAgIHJlbGF0aXZlTGlua1Jlc29sdXRpb246ICdsZWdhY3knIHwgJ2NvcnJlY3RlZCc7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHJvdXRlciBzZXJ2aWNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihyb290Q29tcG9uZW50VHlwZTogVHlwZTxhbnk+IHwgbnVsbCwgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgcm9vdENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogTG9jYXRpb24sIGluamVjdG9yOiBJbmplY3RvciwgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIGNvbXBpbGVyOiBDb21waWxlciwgY29uZmlnOiBSb3V0ZXMpO1xyXG4gICAgcHJpdmF0ZSBzZXR1cE5hdmlnYXRpb25zO1xyXG4gICAgcHJpdmF0ZSBnZXRUcmFuc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBzZXRUcmFuc2l0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIHRoZSBsb2NhdGlvbiBjaGFuZ2UgbGlzdGVuZXIgYW5kIHBlcmZvcm1zIHRoZSBpbml0aWFsIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxOYXZpZ2F0aW9uKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgdGhlIGxvY2F0aW9uIGNoYW5nZSBsaXN0ZW5lci5cclxuICAgICAqL1xyXG4gICAgc2V0VXBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKCk6IHZvaWQ7XHJcbiAgICAvKiogVGhlIGN1cnJlbnQgVVJMLiAqL1xyXG4gICAgZ2V0IHVybCgpOiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIGN1cnJlbnQgTmF2aWdhdGlvbiBvYmplY3QgaWYgb25lIGV4aXN0cyAqL1xyXG4gICAgZ2V0Q3VycmVudE5hdmlnYXRpb24oKTogTmF2aWdhdGlvbiB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0cyB0aGUgY29uZmlndXJhdGlvbiB1c2VkIGZvciBuYXZpZ2F0aW9uIGFuZCBnZW5lcmF0aW5nIGxpbmtzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb25maWcgVGhlIHJvdXRlIGFycmF5IGZvciB0aGUgbmV3IGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHJvdXRlci5yZXNldENvbmZpZyhbXHJcbiAgICAgKiAgeyBwYXRoOiAndGVhbS86aWQnLCBjb21wb25lbnQ6IFRlYW1DbXAsIGNoaWxkcmVuOiBbXHJcbiAgICAgKiAgICB7IHBhdGg6ICdzaW1wbGUnLCBjb21wb25lbnQ6IFNpbXBsZUNtcCB9LFxyXG4gICAgICogICAgeyBwYXRoOiAndXNlci86bmFtZScsIGNvbXBvbmVudDogVXNlckNtcCB9XHJcbiAgICAgKiAgXX1cclxuICAgICAqIF0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHJlc2V0Q29uZmlnKGNvbmZpZzogUm91dGVzKTogdm9pZDtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgLyoqIERpc3Bvc2VzIG9mIHRoZSByb3V0ZXIuICovXHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpZXMgYW4gYXJyYXkgb2YgY29tbWFuZHMgdG8gdGhlIGN1cnJlbnQgVVJMIHRyZWUgYW5kIGNyZWF0ZXMgYSBuZXcgVVJMIHRyZWUuXHJcbiAgICAgKlxyXG4gICAgICogV2hlbiBnaXZlbiBhbiBhY3RpdmF0ZWQgcm91dGUsIGFwcGxpZXMgdGhlIGdpdmVuIGNvbW1hbmRzIHN0YXJ0aW5nIGZyb20gdGhlIHJvdXRlLlxyXG4gICAgICogT3RoZXJ3aXNlLCBhcHBsaWVzIHRoZSBnaXZlbiBjb21tYW5kIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbW1hbmRzIEFuIGFycmF5IG9mIGNvbW1hbmRzIHRvIGFwcGx5LlxyXG4gICAgICogQHBhcmFtIG5hdmlnYXRpb25FeHRyYXMgT3B0aW9ucyB0aGF0IGNvbnRyb2wgdGhlIG5hdmlnYXRpb24gc3RyYXRlZ3kuIFRoaXMgZnVuY3Rpb25cclxuICAgICAqIG9ubHkgdXRpbGl6ZXMgcHJvcGVydGllcyBpbiBgTmF2aWdhdGlvbkV4dHJhc2AgdGhhdCB3b3VsZCBjaGFuZ2UgdGhlIHByb3ZpZGVkIFVSTC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBuZXcgVVJMIHRyZWUuXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIGNyZWF0ZSAvdGVhbS8zMy91c2VyLzExXHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy90ZWFtJywgMzMsICd1c2VyJywgMTFdKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBjcmVhdGUgL3RlYW0vMzM7ZXhwYW5kPXRydWUvdXNlci8xMVxyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWycvdGVhbScsIDMzLCB7ZXhwYW5kOiB0cnVlfSwgJ3VzZXInLCAxMV0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIHlvdSBjYW4gY29sbGFwc2Ugc3RhdGljIHNlZ21lbnRzIGxpa2UgdGhpcyAodGhpcyB3b3JrcyBvbmx5IHdpdGggdGhlIGZpcnN0IHBhc3NlZC1pbiB2YWx1ZSk6XHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy90ZWFtLzMzL3VzZXInLCB1c2VySWRdKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBJZiB0aGUgZmlyc3Qgc2VnbWVudCBjYW4gY29udGFpbiBzbGFzaGVzLCBhbmQgeW91IGRvIG5vdCB3YW50IHRoZSByb3V0ZXIgdG8gc3BsaXQgaXQsXHJcbiAgICAgKiAvLyB5b3UgY2FuIGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbe3NlZ21lbnRQYXRoOiAnL29uZS90d28nfV0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIGNyZWF0ZSAvdGVhbS8zMy8odXNlci8xMS8vcmlnaHQ6Y2hhdClcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnL3RlYW0nLCAzMywge291dGxldHM6IHtwcmltYXJ5OiAndXNlci8xMScsIHJpZ2h0OiAnY2hhdCd9fV0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIHJlbW92ZSB0aGUgcmlnaHQgc2Vjb25kYXJ5IG5vZGVcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnL3RlYW0nLCAzMywge291dGxldHM6IHtwcmltYXJ5OiAndXNlci8xMScsIHJpZ2h0OiBudWxsfX1dKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBhc3N1bWluZyB0aGUgY3VycmVudCB1cmwgaXMgYC90ZWFtLzMzL3VzZXIvMTFgIGFuZCB0aGUgcm91dGUgcG9pbnRzIHRvIGB1c2VyLzExYFxyXG4gICAgICpcclxuICAgICAqIC8vIG5hdmlnYXRlIHRvIC90ZWFtLzMzL3VzZXIvMTEvZGV0YWlsc1xyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWydkZXRhaWxzJ10sIHtyZWxhdGl2ZVRvOiByb3V0ZX0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIG5hdmlnYXRlIHRvIC90ZWFtLzMzL3VzZXIvMjJcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnLi4vMjInXSwge3JlbGF0aXZlVG86IHJvdXRlfSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gbmF2aWdhdGUgdG8gL3RlYW0vNDQvdXNlci8yMlxyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWycuLi8uLi90ZWFtLzQ0L3VzZXIvMjInXSwge3JlbGF0aXZlVG86IHJvdXRlfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgY3JlYXRlVXJsVHJlZShjb21tYW5kczogYW55W10sIG5hdmlnYXRpb25FeHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIFVSTCwgd2hpY2ggbXVzdCBiZSBhYnNvbHV0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsIEFuIGFic29sdXRlIFVSTC4gVGhlIGZ1bmN0aW9uIGRvZXMgbm90IGFwcGx5IGFueSBkZWx0YSB0byB0aGUgY3VycmVudCBVUkwuXHJcbiAgICAgKiBAcGFyYW0gZXh0cmFzIEFuIG9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgdGhhdCBtb2RpZnkgdGhlIG5hdmlnYXRpb24gc3RyYXRlZ3kuXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gaWdub3JlcyBhbnkgcHJvcGVydGllcyBpbiB0aGUgYE5hdmlnYXRpb25FeHRyYXNgIHRoYXQgd291bGQgY2hhbmdlIHRoZVxyXG4gICAgICogcHJvdmlkZWQgVVJMLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvICd0cnVlJyB3aGVuIG5hdmlnYXRpb24gc3VjY2VlZHMsXHJcbiAgICAgKiB0byAnZmFsc2UnIHdoZW4gbmF2aWdhdGlvbiBmYWlscywgb3IgaXMgcmVqZWN0ZWQgb24gZXJyb3IuXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RlYW0vMzMvdXNlci8xMVwiKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBOYXZpZ2F0ZSB3aXRob3V0IHVwZGF0aW5nIHRoZSBVUkxcclxuICAgICAqIHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RlYW0vMzMvdXNlci8xMVwiLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyB8IFVybFRyZWUsIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBOYXZpZ2F0ZSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYXJyYXkgb2YgY29tbWFuZHMgYW5kIGEgc3RhcnRpbmcgcG9pbnQuXHJcbiAgICAgKiBJZiBubyBzdGFydGluZyByb3V0ZSBpcyBwcm92aWRlZCwgdGhlIG5hdmlnYXRpb24gaXMgYWJzb2x1dGUuXHJcbiAgICAgKlxyXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdDpcclxuICAgICAqIC0gcmVzb2x2ZXMgdG8gJ3RydWUnIHdoZW4gbmF2aWdhdGlvbiBzdWNjZWVkcyxcclxuICAgICAqIC0gcmVzb2x2ZXMgdG8gJ2ZhbHNlJyB3aGVuIG5hdmlnYXRpb24gZmFpbHMsXHJcbiAgICAgKiAtIGlzIHJlamVjdGVkIHdoZW4gYW4gZXJyb3IgaGFwcGVucy5cclxuICAgICAqXHJcbiAgICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogcm91dGVyLm5hdmlnYXRlKFsndGVhbScsIDMzLCAndXNlcicsIDExXSwge3JlbGF0aXZlVG86IHJvdXRlfSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gTmF2aWdhdGUgd2l0aG91dCB1cGRhdGluZyB0aGUgVVJMXHJcbiAgICAgKiByb3V0ZXIubmF2aWdhdGUoWyd0ZWFtJywgMzMsICd1c2VyJywgMTFdLCB7cmVsYXRpdmVUbzogcm91dGUsIHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZX0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGZpcnN0IHBhcmFtZXRlciBvZiBgbmF2aWdhdGUoKWAgaXMgYSBkZWx0YSB0byBiZSBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IFVSTFxyXG4gICAgICogb3IgdGhlIG9uZSBwcm92aWRlZCBpbiB0aGUgYHJlbGF0aXZlVG9gIHByb3BlcnR5IG9mIHRoZSBzZWNvbmQgcGFyYW1ldGVyICh0aGVcclxuICAgICAqIGBOYXZpZ2F0aW9uRXh0cmFzYCkuXHJcbiAgICAgKlxyXG4gICAgICogSW4gb3JkZXIgdG8gYWZmZWN0IHRoaXMgYnJvd3NlcidzIGBoaXN0b3J5LnN0YXRlYCBlbnRyeSwgdGhlIGBzdGF0ZWBcclxuICAgICAqIHBhcmFtZXRlciBjYW4gYmUgcGFzc2VkLiBUaGlzIG11c3QgYmUgYW4gb2JqZWN0IGJlY2F1c2UgdGhlIHJvdXRlclxyXG4gICAgICogd2lsbCBhZGQgdGhlIGBuYXZpZ2F0aW9uSWRgIHByb3BlcnR5IHRvIHRoaXMgb2JqZWN0IGJlZm9yZSBjcmVhdGluZ1xyXG4gICAgICogdGhlIG5ldyBoaXN0b3J5IGl0ZW0uXHJcbiAgICAgKi9cclxuICAgIG5hdmlnYXRlKGNvbW1hbmRzOiBhbnlbXSwgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICAvKiogU2VyaWFsaXplcyBhIGBVcmxUcmVlYCBpbnRvIGEgc3RyaW5nICovXHJcbiAgICBzZXJpYWxpemVVcmwodXJsOiBVcmxUcmVlKTogc3RyaW5nO1xyXG4gICAgLyoqIFBhcnNlcyBhIHN0cmluZyBpbnRvIGEgYFVybFRyZWVgICovXHJcbiAgICBwYXJzZVVybCh1cmw6IHN0cmluZyk6IFVybFRyZWU7XHJcbiAgICAvKiogUmV0dXJucyB3aGV0aGVyIHRoZSB1cmwgaXMgYWN0aXZhdGVkICovXHJcbiAgICBpc0FjdGl2ZSh1cmw6IHN0cmluZyB8IFVybFRyZWUsIGV4YWN0OiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcmVtb3ZlRW1wdHlQcm9wcztcclxuICAgIHByaXZhdGUgcHJvY2Vzc05hdmlnYXRpb25zO1xyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZU5hdmlnYXRpb247XHJcbiAgICBwcml2YXRlIHNldEJyb3dzZXJVcmw7XHJcbiAgICBwcml2YXRlIHJlc2V0U3RhdGVBbmRVcmw7XHJcbiAgICBwcml2YXRlIHJlc2V0VXJsVG9DdXJyZW50VXJsVHJlZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgW0RJIHRva2VuXShndWlkZS9nbG9zc2FyeS8jZGktdG9rZW4pIGZvciB0aGUgcm91dGVyIHNlcnZpY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFJPVVRFUl9DT05GSUdVUkFUSU9OOiBJbmplY3Rpb25Ub2tlbjxFeHRyYU9wdGlvbnM+O1xyXG5cclxuLyoqXHJcbiAqIEEgW0RJIHRva2VuXShndWlkZS9nbG9zc2FyeS8jZGktdG9rZW4pIGZvciB0aGUgcm91dGVyIGluaXRpYWxpemVyIHRoYXRcclxuICogaXMgY2FsbGVkIGFmdGVyIHRoZSBhcHAgaXMgYm9vdHN0cmFwcGVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBST1VURVJfSU5JVElBTElaRVI6IEluamVjdGlvblRva2VuPChjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZD47XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFByb3ZpZGVzIGEgd2F5IHRvIGN1c3RvbWl6ZSB3aGVuIGFjdGl2YXRlZCByb3V0ZXMgZ2V0IHJldXNlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgUm91dGVSZXVzZVN0cmF0ZWd5IHtcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIHRoaXMgcm91dGUgKGFuZCBpdHMgc3VidHJlZSkgc2hvdWxkIGJlIGRldGFjaGVkIHRvIGJlIHJldXNlZCBsYXRlciAqL1xyXG4gICAgYWJzdHJhY3Qgc2hvdWxkRGV0YWNoKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBkZXRhY2hlZCByb3V0ZS5cclxuICAgICAqXHJcbiAgICAgKiBTdG9yaW5nIGEgYG51bGxgIHZhbHVlIHNob3VsZCBlcmFzZSB0aGUgcHJldmlvdXNseSBzdG9yZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHN0b3JlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBoYW5kbGU6IERldGFjaGVkUm91dGVIYW5kbGUgfCBudWxsKTogdm9pZDtcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIHRoaXMgcm91dGUgKGFuZCBpdHMgc3VidHJlZSkgc2hvdWxkIGJlIHJlYXR0YWNoZWQgKi9cclxuICAgIGFic3RyYWN0IHNob3VsZEF0dGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW47XHJcbiAgICAvKiogUmV0cmlldmVzIHRoZSBwcmV2aW91c2x5IHN0b3JlZCByb3V0ZSAqL1xyXG4gICAgYWJzdHJhY3QgcmV0cmlldmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBEZXRhY2hlZFJvdXRlSGFuZGxlIHwgbnVsbDtcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIGEgcm91dGUgc2hvdWxkIGJlIHJldXNlZCAqL1xyXG4gICAgYWJzdHJhY3Qgc2hvdWxkUmV1c2VSb3V0ZShmdXR1cmU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGN1cnI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBmb3IgZXZlbnRzIHRoZSByb3V0ZXIgZ29lcyB0aHJvdWdoLCBhcyBvcHBvc2VkIHRvIGV2ZW50cyB0aWVkIHRvIGEgc3BlY2lmaWNcclxuICogcm91dGUuIEZpcmVkIG9uZSB0aW1lIGZvciBhbnkgZ2l2ZW4gbmF2aWdhdGlvbi5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogYGBgdHNcclxuICogY2xhc3MgTXlTZXJ2aWNlIHtcclxuICogICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIGxvZ2dlcjogTG9nZ2VyKSB7XHJcbiAqICAgICByb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAqICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBSb3V0ZXJFdmVudClcclxuICogICAgICkuc3Vic2NyaWJlKGUgPT4ge1xyXG4gKiAgICAgICBsb2dnZXIubG9nKGUuaWQsIGUudXJsKTtcclxuICogICAgIH0pO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHNlZSBgRXZlbnRgXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBBIHVuaXF1ZSBJRCB0aGF0IHRoZSByb3V0ZXIgYXNzaWducyB0byBldmVyeSByb3V0ZXIgbmF2aWdhdGlvbi4gKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogVGhlIFVSTCB0aGF0IGlzIHRoZSBkZXN0aW5hdGlvbiBmb3IgdGhpcyBuYXZpZ2F0aW9uLiAqL1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBBIHVuaXF1ZSBJRCB0aGF0IHRoZSByb3V0ZXIgYXNzaWducyB0byBldmVyeSByb3V0ZXIgbmF2aWdhdGlvbi4gKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIFRoZSBVUkwgdGhhdCBpcyB0aGUgZGVzdGluYXRpb24gZm9yIHRoaXMgbmF2aWdhdGlvbi4gKi9cclxuICAgIHVybDogc3RyaW5nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBMZXRzIHlvdSBsaW5rIHRvIHNwZWNpZmljIHJvdXRlcyBpbiB5b3VyIGFwcC5cclxuICpcclxuICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZyByb3V0ZSBjb25maWd1cmF0aW9uOlxyXG4gKiBgW3sgcGF0aDogJ3VzZXIvOm5hbWUnLCBjb21wb25lbnQ6IFVzZXJDbXAgfV1gLlxyXG4gKiBXaGVuIGxpbmtpbmcgdG8gdGhpcyBgdXNlci86bmFtZWAgcm91dGUsIHlvdSB1c2UgdGhlIGBSb3V0ZXJMaW5rYCBkaXJlY3RpdmUuXHJcbiAqXHJcbiAqIElmIHRoZSBsaW5rIGlzIHN0YXRpYywgeW91IGNhbiB1c2UgdGhlIGRpcmVjdGl2ZSBhcyBmb2xsb3dzOlxyXG4gKiBgPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiPmxpbmsgdG8gdXNlciBjb21wb25lbnQ8L2E+YFxyXG4gKlxyXG4gKiBJZiB5b3UgdXNlIGR5bmFtaWMgdmFsdWVzIHRvIGdlbmVyYXRlIHRoZSBsaW5rLCB5b3UgY2FuIHBhc3MgYW4gYXJyYXkgb2YgcGF0aFxyXG4gKiBzZWdtZW50cywgZm9sbG93ZWQgYnkgdGhlIHBhcmFtcyBmb3IgZWFjaCBzZWdtZW50LlxyXG4gKlxyXG4gKiBGb3IgaW5zdGFuY2UgYFsnL3RlYW0nLCB0ZWFtSWQsICd1c2VyJywgdXNlck5hbWUsIHtkZXRhaWxzOiB0cnVlfV1gXHJcbiAqIG1lYW5zIHRoYXQgd2Ugd2FudCB0byBnZW5lcmF0ZSBhIGxpbmsgdG8gYC90ZWFtLzExL3VzZXIvYm9iO2RldGFpbHM9dHJ1ZWAuXHJcbiAqXHJcbiAqIE11bHRpcGxlIHN0YXRpYyBzZWdtZW50cyBjYW4gYmUgbWVyZ2VkIGludG8gb25lXHJcbiAqIChlLmcuLCBgWycvdGVhbS8xMS91c2VyJywgdXNlck5hbWUsIHtkZXRhaWxzOiB0cnVlfV1gKS5cclxuICpcclxuICogVGhlIGZpcnN0IHNlZ21lbnQgbmFtZSBjYW4gYmUgcHJlcGVuZGVkIHdpdGggYC9gLCBgLi9gLCBvciBgLi4vYDpcclxuICogKiBJZiB0aGUgZmlyc3Qgc2VnbWVudCBiZWdpbnMgd2l0aCBgL2AsIHRoZSByb3V0ZXIgd2lsbCBsb29rIHVwIHRoZSByb3V0ZSBmcm9tIHRoZSByb290IG9mIHRoZVxyXG4gKiAgIGFwcC5cclxuICogKiBJZiB0aGUgZmlyc3Qgc2VnbWVudCBiZWdpbnMgd2l0aCBgLi9gLCBvciBkb2Vzbid0IGJlZ2luIHdpdGggYSBzbGFzaCwgdGhlIHJvdXRlciB3aWxsXHJcbiAqICAgaW5zdGVhZCBsb29rIGluIHRoZSBjaGlsZHJlbiBvZiB0aGUgY3VycmVudCBhY3RpdmF0ZWQgcm91dGUuXHJcbiAqICogQW5kIGlmIHRoZSBmaXJzdCBzZWdtZW50IGJlZ2lucyB3aXRoIGAuLi9gLCB0aGUgcm91dGVyIHdpbGwgZ28gdXAgb25lIGxldmVsLlxyXG4gKlxyXG4gKiBZb3UgY2FuIHNldCBxdWVyeSBwYXJhbXMgYW5kIGZyYWdtZW50IGFzIGZvbGxvd3M6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy91c2VyL2JvYiddXCIgW3F1ZXJ5UGFyYW1zXT1cIntkZWJ1ZzogdHJ1ZX1cIiBmcmFnbWVudD1cImVkdWNhdGlvblwiPlxyXG4gKiAgIGxpbmsgdG8gdXNlciBjb21wb25lbnRcclxuICogPC9hPlxyXG4gKiBgYGBcclxuICogUm91dGVyTGluayB3aWxsIHVzZSB0aGVzZSB0byBnZW5lcmF0ZSB0aGlzIGxpbms6IGAvdXNlci9ib2IjZWR1Y2F0aW9uP2RlYnVnPXRydWVgLlxyXG4gKlxyXG4gKiAoRGVwcmVjYXRlZCBpbiB2NC4wLjAgdXNlIGBxdWVyeVBhcmFtc0hhbmRsaW5nYCBpbnN0ZWFkKSBZb3UgY2FuIGFsc28gdGVsbCB0aGVcclxuICogZGlyZWN0aXZlIHRvIHByZXNlcnZlIHRoZSBjdXJyZW50IHF1ZXJ5IHBhcmFtcyBhbmQgZnJhZ21lbnQ6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy91c2VyL2JvYiddXCIgcHJlc2VydmVRdWVyeVBhcmFtcyBwcmVzZXJ2ZUZyYWdtZW50PlxyXG4gKiAgIGxpbmsgdG8gdXNlciBjb21wb25lbnRcclxuICogPC9hPlxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiB0ZWxsIHRoZSBkaXJlY3RpdmUgaG93IHRvIGhhbmRsZSBxdWVyeVBhcmFtcy4gQXZhaWxhYmxlIG9wdGlvbnMgYXJlOlxyXG4gKiAgLSBgJ21lcmdlJ2A6IG1lcmdlIHRoZSBxdWVyeVBhcmFtcyBpbnRvIHRoZSBjdXJyZW50IHF1ZXJ5UGFyYW1zXHJcbiAqICAtIGAncHJlc2VydmUnYDogcHJlc2VydmUgdGhlIGN1cnJlbnQgcXVlcnlQYXJhbXNcclxuICogIC0gZGVmYXVsdC9gJydgOiB1c2UgdGhlIHF1ZXJ5UGFyYW1zIG9ubHlcclxuICpcclxuICogU2FtZSBvcHRpb25zIGZvciB7QGxpbmsgTmF2aWdhdGlvbkV4dHJhcyNxdWVyeVBhcmFtc0hhbmRsaW5nXHJcbiAqIE5hdmlnYXRpb25FeHRyYXMjcXVlcnlQYXJhbXNIYW5kbGluZ30uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy91c2VyL2JvYiddXCIgW3F1ZXJ5UGFyYW1zXT1cIntkZWJ1ZzogdHJ1ZX1cIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVwibWVyZ2VcIj5cclxuICogICBsaW5rIHRvIHVzZXIgY29tcG9uZW50XHJcbiAqIDwvYT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gcHJvdmlkZSBhIGBzdGF0ZWAgdmFsdWUgdG8gYmUgcGVyc2lzdGVkIHRvIHRoZSBicm93c2VyJ3MgSGlzdG9yeS5zdGF0ZVxyXG4gKiBwcm9wZXJ0eSAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5I1Byb3BlcnRpZXMpLiBJdCdzXHJcbiAqIHVzZWQgYXMgZm9sbG93czpcclxuICpcclxuICogYGBgXHJcbiAqIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3VzZXIvYm9iJ11cIiBbc3RhdGVdPVwie3RyYWNpbmdJZDogMTIzfVwiPlxyXG4gKiAgIGxpbmsgdG8gdXNlciBjb21wb25lbnRcclxuICogPC9hPlxyXG4gKiBgYGBcclxuICpcclxuICogQW5kIGxhdGVyIHRoZSB2YWx1ZSBjYW4gYmUgcmVhZCBmcm9tIHRoZSByb3V0ZXIgdGhyb3VnaCBgcm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uYC5cclxuICogRm9yIGV4YW1wbGUsIHRvIGNhcHR1cmUgdGhlIGB0cmFjaW5nSWRgIGFib3ZlIGR1cmluZyB0aGUgYE5hdmlnYXRpb25TdGFydGAgZXZlbnQ6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiAvLyBHZXQgTmF2aWdhdGlvblN0YXJ0IGV2ZW50c1xyXG4gKiByb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkpLnN1YnNjcmliZShlID0+IHtcclxuICogICBjb25zdCBuYXZpZ2F0aW9uID0gcm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk7XHJcbiAqICAgdHJhY2luZ1NlcnZpY2UudHJhY2Uoe2lkOiBuYXZpZ2F0aW9uLmV4dHJhcy5zdGF0ZS50cmFjaW5nSWR9KTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgcm91dGVyIGxpbmsgZGlyZWN0aXZlIGFsd2F5cyB0cmVhdHMgdGhlIHByb3ZpZGVkIGlucHV0IGFzIGEgZGVsdGEgdG8gdGhlIGN1cnJlbnQgdXJsLlxyXG4gKlxyXG4gKiBGb3IgaW5zdGFuY2UsIGlmIHRoZSBjdXJyZW50IHVybCBpcyBgL3VzZXIvKGJveC8vYXV4OnRlYW0pYC5cclxuICpcclxuICogVGhlbiB0aGUgZm9sbG93aW5nIGxpbmsgYDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3VzZXIvamltJ11cIj5KaW08L2E+YCB3aWxsIGdlbmVyYXRlIHRoZSBsaW5rXHJcbiAqIGAvdXNlci8oamltLy9hdXg6dGVhbSlgLlxyXG4gKlxyXG4gKiBTZWUge0BsaW5rIFJvdXRlciNjcmVhdGVVcmxUcmVlIGNyZWF0ZVVybFRyZWV9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgUm91dGVyTW9kdWxlXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlckxpbmsge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIHJvdXRlO1xyXG4gICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIGZyYWdtZW50OiBzdHJpbmc7XHJcbiAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiBRdWVyeVBhcmFtc0hhbmRsaW5nO1xyXG4gICAgcHJlc2VydmVGcmFnbWVudDogYm9vbGVhbjtcclxuICAgIHNraXBMb2NhdGlvbkNoYW5nZTogYm9vbGVhbjtcclxuICAgIHJlcGxhY2VVcmw6IGJvb2xlYW47XHJcbiAgICBzdGF0ZT86IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY29tbWFuZHM7XHJcbiAgICBwcml2YXRlIHByZXNlcnZlO1xyXG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdGFiSW5kZXg6IHN0cmluZywgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWw6IEVsZW1lbnRSZWYpO1xyXG4gICAgc2V0IHJvdXRlckxpbmsoY29tbWFuZHM6IGFueVtdIHwgc3RyaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgNC4wLjAgdXNlIGBxdWVyeVBhcmFtc0hhbmRsaW5nYCBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBzZXQgcHJlc2VydmVRdWVyeVBhcmFtcyh2YWx1ZTogYm9vbGVhbik7XHJcbiAgICBvbkNsaWNrKCk6IGJvb2xlYW47XHJcbiAgICBnZXQgdXJsVHJlZSgpOiBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIExldHMgeW91IGFkZCBhIENTUyBjbGFzcyB0byBhbiBlbGVtZW50IHdoZW4gdGhlIGxpbmsncyByb3V0ZSBiZWNvbWVzIGFjdGl2ZS5cclxuICpcclxuICogVGhpcyBkaXJlY3RpdmUgbGV0cyB5b3UgYWRkIGEgQ1NTIGNsYXNzIHRvIGFuIGVsZW1lbnQgd2hlbiB0aGUgbGluaydzIHJvdXRlXHJcbiAqIGJlY29tZXMgYWN0aXZlLlxyXG4gKlxyXG4gKiBDb25zaWRlciB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCI+Qm9iPC9hPlxyXG4gKiBgYGBcclxuICpcclxuICogV2hlbiB0aGUgdXJsIGlzIGVpdGhlciAnL3VzZXInIG9yICcvdXNlci9ib2InLCB0aGUgYWN0aXZlLWxpbmsgY2xhc3Mgd2lsbFxyXG4gKiBiZSBhZGRlZCB0byB0aGUgYGFgIHRhZy4gSWYgdGhlIHVybCBjaGFuZ2VzLCB0aGUgY2xhc3Mgd2lsbCBiZSByZW1vdmVkLlxyXG4gKlxyXG4gKiBZb3UgY2FuIHNldCBtb3JlIHRoYW4gb25lIGNsYXNzLCBhcyBmb2xsb3dzOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmU9XCJjbGFzczEgY2xhc3MyXCI+Qm9iPC9hPlxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgW3JvdXRlckxpbmtBY3RpdmVdPVwiWydjbGFzczEnLCAnY2xhc3MyJ11cIj5Cb2I8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGNvbmZpZ3VyZSBSb3V0ZXJMaW5rQWN0aXZlIGJ5IHBhc3NpbmcgYGV4YWN0OiB0cnVlYC4gVGhpcyB3aWxsIGFkZCB0aGUgY2xhc3Nlc1xyXG4gKiBvbmx5IHdoZW4gdGhlIHVybCBtYXRjaGVzIHRoZSBsaW5rIGV4YWN0bHkuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1saW5rXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDpcclxuICogdHJ1ZX1cIj5Cb2I8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGFzc2lnbiB0aGUgUm91dGVyTGlua0FjdGl2ZSBpbnN0YW5jZSB0byBhIHRlbXBsYXRlIHZhcmlhYmxlIGFuZCBkaXJlY3RseSBjaGVja1xyXG4gKiB0aGUgYGlzQWN0aXZlYCBzdGF0dXMuXHJcbiAqIGBgYFxyXG4gKiA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCIgcm91dGVyTGlua0FjdGl2ZSAjcmxhPVwicm91dGVyTGlua0FjdGl2ZVwiPlxyXG4gKiAgIEJvYiB7eyBybGEuaXNBY3RpdmUgPyAnKGFscmVhZHkgb3BlbiknIDogJyd9fVxyXG4gKiA8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGaW5hbGx5LCB5b3UgY2FuIGFwcGx5IHRoZSBSb3V0ZXJMaW5rQWN0aXZlIGRpcmVjdGl2ZSB0byBhbiBhbmNlc3RvciBvZiBhIFJvdXRlckxpbmsuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8ZGl2IHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7ZXhhY3Q6IHRydWV9XCI+XHJcbiAqICAgPGEgcm91dGVyTGluaz1cIi91c2VyL2ppbVwiPkppbTwvYT5cclxuICogICA8YSByb3V0ZXJMaW5rPVwiL3VzZXIvYm9iXCI+Qm9iPC9hPlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoaXMgd2lsbCBzZXQgdGhlIGFjdGl2ZS1saW5rIGNsYXNzIG9uIHRoZSBkaXYgdGFnIGlmIHRoZSB1cmwgaXMgZWl0aGVyICcvdXNlci9qaW0nIG9yXHJcbiAqICcvdXNlci9ib2InLlxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgUm91dGVyTW9kdWxlXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlckxpbmtBY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjtcclxuICAgIHByaXZhdGUgZWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIGxpbms/O1xyXG4gICAgcHJpdmF0ZSBsaW5rV2l0aEhyZWY/O1xyXG4gICAgbGlua3M6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rPjtcclxuICAgIGxpbmtzV2l0aEhyZWZzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcclxuICAgIHByaXZhdGUgY2xhc3NlcztcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xyXG4gICAgcmVhZG9ubHkgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICByb3V0ZXJMaW5rQWN0aXZlT3B0aW9uczoge1xyXG4gICAgICAgIGV4YWN0OiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBsaW5rPzogUm91dGVyTGluayB8IHVuZGVmaW5lZCwgbGlua1dpdGhIcmVmPzogUm91dGVyTGlua1dpdGhIcmVmIHwgdW5kZWZpbmVkKTtcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xyXG4gICAgc2V0IHJvdXRlckxpbmtBY3RpdmUoZGF0YTogc3RyaW5nW10gfCBzdHJpbmcpO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGU7XHJcbiAgICBwcml2YXRlIGlzTGlua0FjdGl2ZTtcclxuICAgIHByaXZhdGUgaGFzQWN0aXZlTGlua3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTGV0cyB5b3UgbGluayB0byBzcGVjaWZpYyByb3V0ZXMgaW4geW91ciBhcHAuXHJcbiAqXHJcbiAqIFNlZSBgUm91dGVyTGlua2AgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAqXHJcbiAqIEBuZ01vZHVsZSBSb3V0ZXJNb2R1bGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyTGlua1dpdGhIcmVmIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIHJvdXRlO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5O1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcbiAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgZnJhZ21lbnQ6IHN0cmluZztcclxuICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6IFF1ZXJ5UGFyYW1zSGFuZGxpbmc7XHJcbiAgICBwcmVzZXJ2ZUZyYWdtZW50OiBib29sZWFuO1xyXG4gICAgc2tpcExvY2F0aW9uQ2hhbmdlOiBib29sZWFuO1xyXG4gICAgcmVwbGFjZVVybDogYm9vbGVhbjtcclxuICAgIHN0YXRlPzoge1xyXG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBjb21tYW5kcztcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBwcmVzZXJ2ZTtcclxuICAgIGhyZWY6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCByb3V0ZTogQWN0aXZhdGVkUm91dGUsIGxvY2F0aW9uU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3kpO1xyXG4gICAgc2V0IHJvdXRlckxpbmsoY29tbWFuZHM6IGFueVtdIHwgc3RyaW5nKTtcclxuICAgIHNldCBwcmVzZXJ2ZVF1ZXJ5UGFyYW1zKHZhbHVlOiBib29sZWFuKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHt9KTogYW55O1xyXG4gICAgbmdPbkRlc3Ryb3koKTogYW55O1xyXG4gICAgb25DbGljayhidXR0b246IG51bWJlciwgY3RybEtleTogYm9vbGVhbiwgbWV0YUtleTogYm9vbGVhbiwgc2hpZnRLZXk6IGJvb2xlYW4pOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUYXJnZXRVcmxBbmRIcmVmO1xyXG4gICAgZ2V0IHVybFRyZWUoKTogVXJsVHJlZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIFJvdXRlck1vZHVsZSBjYW4gYmUgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXM6IG9uY2UgcGVyIGxhemlseS1sb2FkZWQgYnVuZGxlLlxyXG4gKiBTaW5jZSB0aGUgcm91dGVyIGRlYWxzIHdpdGggYSBnbG9iYWwgc2hhcmVkIHJlc291cmNlLS1sb2NhdGlvbiwgd2UgY2Fubm90IGhhdmVcclxuICogbW9yZSB0aGFuIG9uZSByb3V0ZXIgc2VydmljZSBhY3RpdmUuXHJcbiAqXHJcbiAqIFRoYXQgaXMgd2h5IHRoZXJlIGFyZSB0d28gd2F5cyB0byBjcmVhdGUgdGhlIG1vZHVsZTogYFJvdXRlck1vZHVsZS5mb3JSb290YCBhbmRcclxuICogYFJvdXRlck1vZHVsZS5mb3JDaGlsZGAuXHJcbiAqXHJcbiAqICogYGZvclJvb3RgIGNyZWF0ZXMgYSBtb2R1bGUgdGhhdCBjb250YWlucyBhbGwgdGhlIGRpcmVjdGl2ZXMsIHRoZSBnaXZlbiByb3V0ZXMsIGFuZCB0aGUgcm91dGVyXHJcbiAqICAgc2VydmljZSBpdHNlbGYuXHJcbiAqICogYGZvckNoaWxkYCBjcmVhdGVzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYWxsIHRoZSBkaXJlY3RpdmVzIGFuZCB0aGUgZ2l2ZW4gcm91dGVzLCBidXQgZG9lcyBub3RcclxuICogICBpbmNsdWRlIHRoZSByb3V0ZXIgc2VydmljZS5cclxuICpcclxuICogV2hlbiByZWdpc3RlcmVkIGF0IHRoZSByb290LCB0aGUgbW9kdWxlIHNob3VsZCBiZSB1c2VkIGFzIGZvbGxvd3NcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KFJPVVRFUyldXHJcbiAqIH0pXHJcbiAqIGNsYXNzIE15TmdNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIEZvciBzdWJtb2R1bGVzIGFuZCBsYXp5IGxvYWRlZCBzdWJtb2R1bGVzIHRoZSBtb2R1bGUgc2hvdWxkIGJlIHVzZWQgYXMgZm9sbG93czpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChST1VURVMpXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBNeU5nTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQWRkcyByb3V0ZXIgZGlyZWN0aXZlcyBhbmQgcHJvdmlkZXJzLlxyXG4gKlxyXG4gKiBNYW5hZ2luZyBzdGF0ZSB0cmFuc2l0aW9ucyBpcyBvbmUgb2YgdGhlIGhhcmRlc3QgcGFydHMgb2YgYnVpbGRpbmcgYXBwbGljYXRpb25zLiBUaGlzIGlzXHJcbiAqIGVzcGVjaWFsbHkgdHJ1ZSBvbiB0aGUgd2ViLCB3aGVyZSB5b3UgYWxzbyBuZWVkIHRvIGVuc3VyZSB0aGF0IHRoZSBzdGF0ZSBpcyByZWZsZWN0ZWQgaW4gdGhlIFVSTC5cclxuICogSW4gYWRkaXRpb24sIHdlIG9mdGVuIHdhbnQgdG8gc3BsaXQgYXBwbGljYXRpb25zIGludG8gbXVsdGlwbGUgYnVuZGxlcyBhbmQgbG9hZCB0aGVtIG9uIGRlbWFuZC5cclxuICogRG9pbmcgdGhpcyB0cmFuc3BhcmVudGx5IGlzIG5vdCB0cml2aWFsLlxyXG4gKlxyXG4gKiBUaGUgQW5ndWxhciByb3V0ZXIgc2VydmljZSBzb2x2ZXMgdGhlc2UgcHJvYmxlbXMuIFVzaW5nIHRoZSByb3V0ZXIsIHlvdSBjYW4gZGVjbGFyYXRpdmVseSBzcGVjaWZ5XHJcbiAqIGFwcGxpY2F0aW9uIHN0YXRlcywgbWFuYWdlIHN0YXRlIHRyYW5zaXRpb25zIHdoaWxlIHRha2luZyBjYXJlIG9mIHRoZSBVUkwsIGFuZCBsb2FkIGJ1bmRsZXMgb25cclxuICogZGVtYW5kLlxyXG4gKlxyXG4gKiBAc2VlIFtSb3V0aW5nIGFuZCBOYXZpZ2F0aW9uXShndWlkZS9yb3V0ZXIuaHRtbCkgZm9yIGFuXHJcbiAqIG92ZXJ2aWV3IG9mIGhvdyB0aGUgcm91dGVyIHNlcnZpY2Ugc2hvdWxkIGJlIHVzZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlck1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihndWFyZDogYW55LCByb3V0ZXI6IFJvdXRlcik7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW5kIGNvbmZpZ3VyZXMgYSBtb2R1bGUgd2l0aCBhbGwgdGhlIHJvdXRlciBwcm92aWRlcnMgYW5kIGRpcmVjdGl2ZXMuXHJcbiAgICAgKiBPcHRpb25hbGx5IHNldHMgdXAgYW4gYXBwbGljYXRpb24gbGlzdGVuZXIgdG8gcGVyZm9ybSBhbiBpbml0aWFsIG5hdmlnYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJvdXRlcyBBbiBhcnJheSBvZiBgUm91dGVgIG9iamVjdHMgdGhhdCBkZWZpbmUgdGhlIG5hdmlnYXRpb24gcGF0aHMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSBjb25maWcgQW4gYEV4dHJhT3B0aW9uc2AgY29uZmlndXJhdGlvbiBvYmplY3QgdGhhdCBjb250cm9scyBob3cgbmF2aWdhdGlvbiBpcyBwZXJmb3JtZWQuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBuZXcgcm91dGVyIG1vZHVsZS5cclxuICAgICovXHJcbiAgICBzdGF0aWMgZm9yUm9vdChyb3V0ZXM6IFJvdXRlcywgY29uZmlnPzogRXh0cmFPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSb3V0ZXJNb2R1bGU+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbW9kdWxlIHdpdGggYWxsIHRoZSByb3V0ZXIgZGlyZWN0aXZlcyBhbmQgYSBwcm92aWRlciByZWdpc3RlcmluZyByb3V0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JDaGlsZChyb3V0ZXM6IFJvdXRlcyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um91dGVyTW9kdWxlPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBY3RzIGFzIGEgcGxhY2Vob2xkZXIgdGhhdCBBbmd1bGFyIGR5bmFtaWNhbGx5IGZpbGxzIGJhc2VkIG9uIHRoZSBjdXJyZW50IHJvdXRlciBzdGF0ZS5cclxuICpcclxuICogRWFjaCBvdXRsZXQgY2FuIGhhdmUgYSB1bmlxdWUgbmFtZSwgZGV0ZXJtaW5lZCBieSB0aGUgb3B0aW9uYWwgYG5hbWVgIGF0dHJpYnV0ZS5cclxuICogVGhlIG5hbWUgY2Fubm90IGJlIHNldCBvciBjaGFuZ2VkIGR5bmFtaWNhbGx5LiBJZiBub3Qgc2V0LCBkZWZhdWx0IHZhbHVlIGlzIFwicHJpbWFyeVwiLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gKiA8cm91dGVyLW91dGxldCBuYW1lPSdsZWZ0Jz48L3JvdXRlci1vdXRsZXQ+XHJcbiAqIDxyb3V0ZXItb3V0bGV0IG5hbWU9J3JpZ2h0Jz48L3JvdXRlci1vdXRsZXQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBBIHJvdXRlciBvdXRsZXQgZW1pdHMgYW4gYWN0aXZhdGUgZXZlbnQgd2hlbiBhIG5ldyBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkLFxyXG4gKiBhbmQgYSBkZWFjdGl2YXRlIGV2ZW50IHdoZW4gYSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPHJvdXRlci1vdXRsZXRcclxuICogICAoYWN0aXZhdGUpPSdvbkFjdGl2YXRlKCRldmVudCknXHJcbiAqICAgKGRlYWN0aXZhdGUpPSdvbkRlYWN0aXZhdGUoJGV2ZW50KSc+PC9yb3V0ZXItb3V0bGV0PlxyXG4gKiBgYGBcclxuICogQG5nTW9kdWxlIFJvdXRlck1vZHVsZVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJPdXRsZXQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIHBhcmVudENvbnRleHRzO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjtcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI7XHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWQ7XHJcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTtcclxuICAgIHByaXZhdGUgbmFtZTtcclxuICAgIGFjdGl2YXRlRXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIGRlYWN0aXZhdGVFdmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50Q29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBuYW1lOiBzdHJpbmcsIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIGdldCBpc0FjdGl2YXRlZCgpOiBib29sZWFuO1xyXG4gICAgZ2V0IGNvbXBvbmVudCgpOiBPYmplY3Q7XHJcbiAgICBnZXQgYWN0aXZhdGVkUm91dGUoKTogQWN0aXZhdGVkUm91dGU7XHJcbiAgICBnZXQgYWN0aXZhdGVkUm91dGVEYXRhKCk6IERhdGE7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBgUm91dGVSZXVzZVN0cmF0ZWd5YCBpbnN0cnVjdHMgdG8gZGV0YWNoIHRoZSBzdWJ0cmVlXHJcbiAgICAgKi9cclxuICAgIGRldGFjaCgpOiBDb21wb25lbnRSZWY8YW55PjtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGBSb3V0ZVJldXNlU3RyYXRlZ3lgIGluc3RydWN0cyB0byByZS1hdHRhY2ggYSBwcmV2aW91c2x5IGRldGFjaGVkIHN1YnRyZWVcclxuICAgICAqL1xyXG4gICAgYXR0YWNoKHJlZjogQ29tcG9uZW50UmVmPGFueT4sIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHZvaWQ7XHJcbiAgICBkZWFjdGl2YXRlKCk6IHZvaWQ7XHJcbiAgICBhY3RpdmF0ZVdpdGgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHwgbnVsbCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcHJlbG9hZGVyIG9wdGltaXN0aWNhbGx5IGxvYWRzIGFsbCByb3V0ZXIgY29uZmlndXJhdGlvbnMgdG9cclxuICogbWFrZSBuYXZpZ2F0aW9ucyBpbnRvIGxhemlseS1sb2FkZWQgc2VjdGlvbnMgb2YgdGhlIGFwcGxpY2F0aW9uIGZhc3Rlci5cclxuICpcclxuICogVGhlIHByZWxvYWRlciBydW5zIGluIHRoZSBiYWNrZ3JvdW5kLiBXaGVuIHRoZSByb3V0ZXIgYm9vdHN0cmFwcywgdGhlIHByZWxvYWRlclxyXG4gKiBzdGFydHMgbGlzdGVuaW5nIHRvIGFsbCBuYXZpZ2F0aW9uIGV2ZW50cy4gQWZ0ZXIgZXZlcnkgc3VjaCBldmVudCwgdGhlIHByZWxvYWRlclxyXG4gKiB3aWxsIGNoZWNrIGlmIGFueSBjb25maWd1cmF0aW9ucyBjYW4gYmUgbG9hZGVkIGxhemlseS5cclxuICpcclxuICogSWYgYSByb3V0ZSBpcyBwcm90ZWN0ZWQgYnkgYGNhbkxvYWRgIGd1YXJkcywgdGhlIHByZWxvYWRlZCB3aWxsIG5vdCBsb2FkIGl0LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJQcmVsb2FkZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIGluamVjdG9yO1xyXG4gICAgcHJpdmF0ZSBwcmVsb2FkaW5nU3RyYXRlZ3k7XHJcbiAgICBwcml2YXRlIGxvYWRlcjtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xyXG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIG1vZHVsZUxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBjb21waWxlcjogQ29tcGlsZXIsIGluamVjdG9yOiBJbmplY3RvciwgcHJlbG9hZGluZ1N0cmF0ZWd5OiBQcmVsb2FkaW5nU3RyYXRlZ3kpO1xyXG4gICAgc2V0VXBQcmVsb2FkaW5nKCk6IHZvaWQ7XHJcbiAgICBwcmVsb2FkKCk6IE9ic2VydmFibGU8YW55PjtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIHByb2Nlc3NSb3V0ZXM7XHJcbiAgICBwcml2YXRlIHByZWxvYWRDb25maWc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiB0aGUgcm91dGVyIGFzIGEgdHJlZSBvZiBhY3RpdmF0ZWQgcm91dGVzLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBFdmVyeSBub2RlIGluIHRoZSByb3V0ZSB0cmVlIGlzIGFuIGBBY3RpdmF0ZWRSb3V0ZWAgaW5zdGFuY2VcclxuICogdGhhdCBrbm93cyBhYm91dCB0aGUgXCJjb25zdW1lZFwiIFVSTCBzZWdtZW50cywgdGhlIGV4dHJhY3RlZCBwYXJhbWV0ZXJzLFxyXG4gKiBhbmQgdGhlIHJlc29sdmVkIGRhdGEuXHJcbiAqIFVzZSB0aGUgYEFjdGl2YXRlZFJvdXRlYCBwcm9wZXJ0aWVzIHRvIHRyYXZlcnNlIHRoZSB0cmVlIGZyb20gYW55IG5vZGUuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZVVybDondGVtcGxhdGUuaHRtbCd9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcclxuICogICAgIGNvbnN0IHN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHJvdXRlci5yb3V0ZXJTdGF0ZTtcclxuICogICAgIGNvbnN0IHJvb3Q6IEFjdGl2YXRlZFJvdXRlID0gc3RhdGUucm9vdDtcclxuICogICAgIGNvbnN0IGNoaWxkID0gcm9vdC5maXJzdENoaWxkO1xyXG4gKiAgICAgY29uc3QgaWQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IGNoaWxkLnBhcmFtcy5tYXAocCA9PiBwLmlkKTtcclxuICogICAgIC8vLi4uXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAc2VlIGBBY3RpdmF0ZWRSb3V0ZWBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyU3RhdGUgZXh0ZW5kcyDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9tPEFjdGl2YXRlZFJvdXRlPiB7XHJcbiAgICAvKiogVGhlIGN1cnJlbnQgc25hcHNob3Qgb2YgdGhlIHJvdXRlciBzdGF0ZSAqL1xyXG4gICAgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVwcmVzZW50cyB0aGUgc3RhdGUgb2YgdGhlIHJvdXRlciBhdCBhIG1vbWVudCBpbiB0aW1lLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgdHJlZSBvZiBhY3RpdmF0ZWQgcm91dGUgc25hcHNob3RzLiBFdmVyeSBub2RlIGluIHRoaXMgdHJlZSBrbm93cyBhYm91dFxyXG4gKiB0aGUgXCJjb25zdW1lZFwiIFVSTCBzZWdtZW50cywgdGhlIGV4dHJhY3RlZCBwYXJhbWV0ZXJzLCBhbmQgdGhlIHJlc29sdmVkIGRhdGEuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZVVybDondGVtcGxhdGUuaHRtbCd9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcclxuICogICAgIGNvbnN0IHN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHJvdXRlci5yb3V0ZXJTdGF0ZTtcclxuICogICAgIGNvbnN0IHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90ID0gc3RhdGUuc25hcHNob3Q7XHJcbiAqICAgICBjb25zdCByb290OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gc25hcHNob3Qucm9vdDtcclxuICogICAgIGNvbnN0IGNoaWxkID0gcm9vdC5maXJzdENoaWxkO1xyXG4gKiAgICAgY29uc3QgaWQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IGNoaWxkLnBhcmFtcy5tYXAocCA9PiBwLmlkKTtcclxuICogICAgIC8vLi4uXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJTdGF0ZVNuYXBzaG90IGV4dGVuZHMgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90PiB7XHJcbiAgICAvKiogVGhlIHVybCBmcm9tIHdoaWNoIHRoaXMgc25hcHNob3Qgd2FzIGNyZWF0ZWQgKi9cclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkvI2RpLXRva2VuKSBmb3IgYSByb3V0ZXIgY29uZmlndXJhdGlvbi5cclxuICogQHNlZSBgUk9VVEVTYFxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBST1VURVM6IEluamVjdGlvblRva2VuPFJvdXRlW11bXT47XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJvdXRlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBSb3V0ZXIgc2VydmljZS5cclxuICogQW4gYXJyYXkgb2YgYFJvdXRlYCBvYmplY3RzLCB1c2VkIGluIGBSb3V0ZXIuY29uZmlnYCBhbmQgZm9yIG5lc3RlZCByb3V0ZSBjb25maWd1cmF0aW9uc1xyXG4gKiBpbiBgUm91dGUuY2hpbGRyZW5gLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZWBcclxuICogQHNlZSBgUm91dGVyYFxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFJvdXRlcyA9IFJvdXRlW107XHJcblxyXG4vKipcclxuICpBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiByb3V0ZXMgYXJlIHJlY29nbml6ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlc1JlY29nbml6ZWQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZztcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQSBwb2xpY3kgZm9yIHdoZW4gdG8gcnVuIGd1YXJkcyBhbmQgcmVzb2x2ZXJzIG9uIGEgcm91dGUuXHJcbiAqXHJcbiAqIEBzZWUgYFJvdXRlI3J1bkd1YXJkc0FuZFJlc29sdmVyc2BcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBSdW5HdWFyZHNBbmRSZXNvbHZlcnMgPSAncGF0aFBhcmFtc0NoYW5nZScgfCAncGF0aFBhcmFtc09yUXVlcnlQYXJhbXNDaGFuZ2UnIHwgJ3BhcmFtc0NoYW5nZScgfCAncGFyYW1zT3JRdWVyeVBhcmFtc0NoYW5nZScgfCAnYWx3YXlzJyB8ICgoZnJvbTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgdG86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpID0+IGJvb2xlYW4pO1xyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSBzY3JvbGxpbmcuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNjcm9sbCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcmVhZG9ubHkgcm91dGVyRXZlbnQ6IE5hdmlnYXRpb25FbmQ7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcmVhZG9ubHkgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYWRvbmx5IGFuY2hvcjogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJvdXRlckV2ZW50OiBOYXZpZ2F0aW9uRW5kLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSB8IG51bGwsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGFuY2hvcjogc3RyaW5nIHwgbnVsbCk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUHJvdmlkZXMgYSB3YXkgdG8gbWlncmF0ZSBBbmd1bGFySlMgYXBwbGljYXRpb25zIHRvIEFuZ3VsYXIuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFVybEhhbmRsaW5nU3RyYXRlZ3kge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB0aGUgcm91dGVyIGlmIHRoaXMgVVJMIHNob3VsZCBiZSBwcm9jZXNzZWQuXHJcbiAgICAgKlxyXG4gICAgICogV2hlbiBpdCByZXR1cm5zIHRydWUsIHRoZSByb3V0ZXIgd2lsbCBleGVjdXRlIHRoZSByZWd1bGFyIG5hdmlnYXRpb24uXHJcbiAgICAgKiBXaGVuIGl0IHJldHVybnMgZmFsc2UsIHRoZSByb3V0ZXIgd2lsbCBzZXQgdGhlIHJvdXRlciBzdGF0ZSB0byBhbiBlbXB0eSBzdGF0ZS5cclxuICAgICAqIEFzIGEgcmVzdWx0LCBhbGwgdGhlIGFjdGl2ZSBjb21wb25lbnRzIHdpbGwgYmUgZGVzdHJveWVkLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2hvdWxkUHJvY2Vzc1VybCh1cmw6IFVybFRyZWUpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0cyB0aGUgcGFydCBvZiB0aGUgVVJMIHRoYXQgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhlIHJvdXRlci5cclxuICAgICAqIFRoZSByZXN0IG9mIHRoZSBVUkwgd2lsbCByZW1haW4gdW50b3VjaGVkLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBleHRyYWN0KHVybDogVXJsVHJlZSk6IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIE1lcmdlcyB0aGUgVVJMIGZyYWdtZW50IHdpdGggdGhlIHJlc3Qgb2YgdGhlIFVSTC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgbWVyZ2UobmV3VXJsUGFydDogVXJsVHJlZSwgcmF3VXJsOiBVcmxUcmVlKTogVXJsVHJlZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZnVuY3Rpb24gZm9yIG1hdGNoaW5nIGEgcm91dGUgYWdhaW5zdCBVUkxzLiBJbXBsZW1lbnQgYSBjdXN0b20gVVJMIG1hdGNoZXJcclxuICogZm9yIGBSb3V0ZS5tYXRjaGVyYCB3aGVuIGEgY29tYmluYXRpb24gb2YgYHBhdGhgIGFuZCBgcGF0aE1hdGNoYFxyXG4gKiBpcyBub3QgZXhwcmVzc2l2ZSBlbm91Z2guIENhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggYHBhdGhgIGFuZCBgcGF0aE1hdGNoYC5cclxuICpcclxuICogQHBhcmFtIHNlZ21lbnRzIEFuIGFycmF5IG9mIFVSTCBzZWdtZW50cy5cclxuICogQHBhcmFtIGdyb3VwIEEgc2VnbWVudCBncm91cC5cclxuICogQHBhcmFtIHJvdXRlIFRoZSByb3V0ZSB0byBtYXRjaCBhZ2FpbnN0LlxyXG4gKiBAcmV0dXJucyBUaGUgbWF0Y2gtcmVzdWx0LlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIG1hdGNoZXIgbWF0Y2hlcyBIVE1MIGZpbGVzLlxyXG4gKlxyXG4gKiBgYGBcclxuICogZXhwb3J0IGZ1bmN0aW9uIGh0bWxGaWxlcyh1cmw6IFVybFNlZ21lbnRbXSkge1xyXG4gKiAgIHJldHVybiB1cmwubGVuZ3RoID09PSAxICYmIHVybFswXS5wYXRoLmVuZHNXaXRoKCcuaHRtbCcpID8gKHtjb25zdW1lZDogdXJsfSkgOiBudWxsO1xyXG4gKiB9XHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXMgPSBbeyBtYXRjaGVyOiBodG1sRmlsZXMsIGNvbXBvbmVudDogQW55Q29tcG9uZW50IH1dO1xyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBVcmxNYXRjaGVyID0gKHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIGdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHJvdXRlOiBSb3V0ZSkgPT4gVXJsTWF0Y2hSZXN1bHQ7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgcmVzdWx0IG9mIG1hdGNoaW5nIFVSTHMgd2l0aCBhIGN1c3RvbSBtYXRjaGluZyBmdW5jdGlvbi5cclxuICpcclxuICogKiBgY29uc3VtZWRgIGlzIGFuIGFycmF5IG9mIHRoZSBjb25zdW1lZCBVUkwgc2VnbWVudHMuXHJcbiAqICogYHBvc1BhcmFtc2AgaXMgYSBtYXAgb2YgcG9zaXRpb25hbCBwYXJhbWV0ZXJzLlxyXG4gKlxyXG4gKiBAc2VlIGBVcmxNYXRjaGVyKClgXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgVXJsTWF0Y2hSZXN1bHQgPSB7XHJcbiAgICBjb25zdW1lZDogVXJsU2VnbWVudFtdO1xyXG4gICAgcG9zUGFyYW1zPzoge1xyXG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBVcmxTZWdtZW50O1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBVUkwgc2VnbWVudC5cclxuICpcclxuICogQSBVcmxTZWdtZW50IGlzIGEgcGFydCBvZiBhIFVSTCBiZXR3ZWVuIHRoZSB0d28gc2xhc2hlcy4gSXQgY29udGFpbnMgYSBwYXRoIGFuZCB0aGUgbWF0cml4XHJcbiAqIHBhcmFtZXRlcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWdtZW50LlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKsKgIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgXHJcbiAqIEBDb21wb25lbnQoe3RlbXBsYXRlVXJsOid0ZW1wbGF0ZS5odG1sJ30pXHJcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcclxuICogICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xyXG4gKiAgICAgY29uc3QgdHJlZTogVXJsVHJlZSA9IHJvdXRlci5wYXJzZVVybCgnL3RlYW07aWQ9MzMnKTtcclxuICogICAgIGNvbnN0IGc6IFVybFNlZ21lbnRHcm91cCA9IHRyZWUucm9vdC5jaGlsZHJlbltQUklNQVJZX09VVExFVF07XHJcbiAqICAgICBjb25zdCBzOiBVcmxTZWdtZW50W10gPSBnLnNlZ21lbnRzO1xyXG4gKiAgICAgc1swXS5wYXRoOyAvLyByZXR1cm5zICd0ZWFtJ1xyXG4gKiAgICAgc1swXS5wYXJhbWV0ZXJzOyAvLyByZXR1cm5zIHtpZDogMzN9XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcmxTZWdtZW50IHtcclxuICAgIC8qKiBUaGUgcGF0aCBwYXJ0IG9mIGEgVVJMIHNlZ21lbnQgKi9cclxuICAgIHBhdGg6IHN0cmluZztcclxuICAgIC8qKiBUaGUgbWF0cml4IHBhcmFtZXRlcnMgYXNzb2NpYXRlZCB3aXRoIGEgc2VnbWVudCAqL1xyXG4gICAgcGFyYW1ldGVyczoge1xyXG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogVGhlIHBhdGggcGFydCBvZiBhIFVSTCBzZWdtZW50ICovXHJcbiAgICBwYXRoOiBzdHJpbmcsIFxyXG4gICAgLyoqIFRoZSBtYXRyaXggcGFyYW1ldGVycyBhc3NvY2lhdGVkIHdpdGggYSBzZWdtZW50ICovXHJcbiAgICBwYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgW25hbWU6IHN0cmluZ106IHN0cmluZztcclxuICAgIH0pO1xyXG4gICAgZ2V0IHBhcmFtZXRlck1hcCgpOiBQYXJhbU1hcDtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVwcmVzZW50cyB0aGUgcGFyc2VkIFVSTCBzZWdtZW50IGdyb3VwLlxyXG4gKlxyXG4gKiBTZWUgYFVybFRyZWVgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcmxTZWdtZW50R3JvdXAge1xyXG4gICAgLyoqIFRoZSBVUkwgc2VnbWVudHMgb2YgdGhpcyBncm91cC4gU2VlIGBVcmxTZWdtZW50YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiAqL1xyXG4gICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXTtcclxuICAgIC8qKiBUaGUgbGlzdCBvZiBjaGlsZHJlbiBvZiB0aGlzIGdyb3VwICovXHJcbiAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cDtcclxuICAgIH07XHJcbiAgICAvKiogVGhlIHBhcmVudCBub2RlIGluIHRoZSB1cmwgdHJlZSAqL1xyXG4gICAgcGFyZW50OiBVcmxTZWdtZW50R3JvdXAgfCBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogVGhlIFVSTCBzZWdtZW50cyBvZiB0aGlzIGdyb3VwLiBTZWUgYFVybFNlZ21lbnRgIGZvciBtb3JlIGluZm9ybWF0aW9uICovXHJcbiAgICBzZWdtZW50czogVXJsU2VnbWVudFtdLCBcclxuICAgIC8qKiBUaGUgbGlzdCBvZiBjaGlsZHJlbiBvZiB0aGlzIGdyb3VwICovXHJcbiAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cDtcclxuICAgIH0pO1xyXG4gICAgLyoqIFdoZXRoZXIgdGhlIHNlZ21lbnQgaGFzIGNoaWxkIHNlZ21lbnRzICovXHJcbiAgICBoYXNDaGlsZHJlbigpOiBib29sZWFuO1xyXG4gICAgLyoqIE51bWJlciBvZiBjaGlsZCBzZWdtZW50cyAqL1xyXG4gICAgZ2V0IG51bWJlck9mQ2hpbGRyZW4oKTogbnVtYmVyO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBTZXJpYWxpemVzIGFuZCBkZXNlcmlhbGl6ZXMgYSBVUkwgc3RyaW5nIGludG8gYSBVUkwgdHJlZS5cclxuICpcclxuICogVGhlIHVybCBzZXJpYWxpemF0aW9uIHN0cmF0ZWd5IGlzIGN1c3RvbWl6YWJsZS4gWW91IGNhblxyXG4gKiBtYWtlIGFsbCBVUkxzIGNhc2UgaW5zZW5zaXRpdmUgYnkgcHJvdmlkaW5nIGEgY3VzdG9tIFVybFNlcmlhbGl6ZXIuXHJcbiAqXHJcbiAqIFNlZSBgRGVmYXVsdFVybFNlcmlhbGl6ZXJgIGZvciBhbiBleGFtcGxlIG9mIGEgVVJMIHNlcmlhbGl6ZXIuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFVybFNlcmlhbGl6ZXIge1xyXG4gICAgLyoqIFBhcnNlIGEgdXJsIGludG8gYSBgVXJsVHJlZWAgKi9cclxuICAgIGFic3RyYWN0IHBhcnNlKHVybDogc3RyaW5nKTogVXJsVHJlZTtcclxuICAgIC8qKiBDb252ZXJ0cyBhIGBVcmxUcmVlYCBpbnRvIGEgdXJsICovXHJcbiAgICBhYnN0cmFjdCBzZXJpYWxpemUodHJlZTogVXJsVHJlZSk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBwYXJzZWQgVVJMLlxyXG4gKlxyXG4gKiBTaW5jZSBhIHJvdXRlciBzdGF0ZSBpcyBhIHRyZWUsIGFuZCB0aGUgVVJMIGlzIG5vdGhpbmcgYnV0IGEgc2VyaWFsaXplZCBzdGF0ZSwgdGhlIFVSTCBpcyBhXHJcbiAqIHNlcmlhbGl6ZWQgdHJlZS5cclxuICogVXJsVHJlZSBpcyBhIGRhdGEgc3RydWN0dXJlIHRoYXQgcHJvdmlkZXMgYSBsb3Qgb2YgYWZmb3JkYW5jZXMgaW4gZGVhbGluZyB3aXRoIFVSTHNcclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgXHJcbiAqIEBDb21wb25lbnQoe3RlbXBsYXRlVXJsOid0ZW1wbGF0ZS5odG1sJ30pXHJcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcclxuICogICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xyXG4gKiAgICAgY29uc3QgdHJlZTogVXJsVHJlZSA9XHJcbiAqICAgICAgIHJvdXRlci5wYXJzZVVybCgnL3RlYW0vMzMvKHVzZXIvdmljdG9yLy9zdXBwb3J0OmhlbHApP2RlYnVnPXRydWUjZnJhZ21lbnQnKTtcclxuICogICAgIGNvbnN0IGYgPSB0cmVlLmZyYWdtZW50OyAvLyByZXR1cm4gJ2ZyYWdtZW50J1xyXG4gKiAgICAgY29uc3QgcSA9IHRyZWUucXVlcnlQYXJhbXM7IC8vIHJldHVybnMge2RlYnVnOiAndHJ1ZSd9XHJcbiAqICAgICBjb25zdCBnOiBVcmxTZWdtZW50R3JvdXAgPSB0cmVlLnJvb3QuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdO1xyXG4gKiAgICAgY29uc3QgczogVXJsU2VnbWVudFtdID0gZy5zZWdtZW50czsgLy8gcmV0dXJucyAyIHNlZ21lbnRzICd0ZWFtJyBhbmQgJzMzJ1xyXG4gKiAgICAgZy5jaGlsZHJlbltQUklNQVJZX09VVExFVF0uc2VnbWVudHM7IC8vIHJldHVybnMgMiBzZWdtZW50cyAndXNlcicgYW5kICd2aWN0b3InXHJcbiAqICAgICBnLmNoaWxkcmVuWydzdXBwb3J0J10uc2VnbWVudHM7IC8vIHJldHVybiAxIHNlZ21lbnQgJ2hlbHAnXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcmxUcmVlIHtcclxuICAgIC8qKiBUaGUgcm9vdCBzZWdtZW50IGdyb3VwIG9mIHRoZSBVUkwgdHJlZSAqL1xyXG4gICAgcm9vdDogVXJsU2VnbWVudEdyb3VwO1xyXG4gICAgLyoqIFRoZSBxdWVyeSBwYXJhbXMgb2YgdGhlIFVSTCAqL1xyXG4gICAgcXVlcnlQYXJhbXM6IFBhcmFtcztcclxuICAgIC8qKiBUaGUgZnJhZ21lbnQgb2YgdGhlIFVSTCAqL1xyXG4gICAgZnJhZ21lbnQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBnZXQgcXVlcnlQYXJhbU1hcCgpOiBQYXJhbU1hcDtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBWRVJTSU9OOiBWZXJzaW9uO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzTm90UmVxdWlyZWRcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2E6IEluamVjdGlvblRva2VuPHZvaWQ+O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfYigpOiBOZ1Byb2JlVG9rZW47XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9jKHJvdXRlcjogUm91dGVyLCB2aWV3cG9ydFNjcm9sbGVyOiBWaWV3cG9ydFNjcm9sbGVyLCBjb25maWc6IEV4dHJhT3B0aW9ucyk6IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX287XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9kKHBsYXRmb3JtTG9jYXRpb25TdHJhdGVneTogUGxhdGZvcm1Mb2NhdGlvbiwgYmFzZUhyZWY6IHN0cmluZywgb3B0aW9ucz86IEV4dHJhT3B0aW9ucyk6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IHwgUGF0aExvY2F0aW9uU3RyYXRlZ3k7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9lKHJvdXRlcjogUm91dGVyKTogYW55O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfZih1cmxTZXJpYWxpemVyOiBVcmxTZXJpYWxpemVyLCBjb250ZXh0czogQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgbG9jYXRpb246IExvY2F0aW9uLCBpbmplY3RvcjogSW5qZWN0b3IsIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBjb21waWxlcjogQ29tcGlsZXIsIGNvbmZpZzogUm91dGVbXVtdLCBvcHRzPzogRXh0cmFPcHRpb25zLCB1cmxIYW5kbGluZ1N0cmF0ZWd5PzogVXJsSGFuZGxpbmdTdHJhdGVneSwgcm91dGVSZXVzZVN0cmF0ZWd5PzogUm91dGVSZXVzZVN0cmF0ZWd5KTogUm91dGVyO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfZyhyb3V0ZXI6IFJvdXRlcik6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuLyoqXHJcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbiByZXF1aXJlcyB0d28gc3RlcHM6XHJcbiAqXHJcbiAqIEZpcnN0LCB3ZSBzdGFydCB0aGUgbmF2aWdhdGlvbiBpbiBhIGBBUFBfSU5JVElBTElaRVJgIHRvIGJsb2NrIHRoZSBib290c3RyYXAgaWZcclxuICogYSByZXNvbHZlciBvciBhIGd1YXJkIGV4ZWN1dGVzIGFzeW5jaHJvbm91c2x5LlxyXG4gKlxyXG4gKiBOZXh0LCB3ZSBhY3R1YWxseSBydW4gYWN0aXZhdGlvbiBpbiBhIGBCT09UU1RSQVBfTElTVEVORVJgLCB1c2luZyB0aGVcclxuICogYGFmdGVyUHJlYWN0aXZhdGlvbmAgaG9vayBwcm92aWRlZCBieSB0aGUgcm91dGVyLlxyXG4gKiBUaGUgcm91dGVyIG5hdmlnYXRpb24gc3RhcnRzLCByZWFjaGVzIHRoZSBwb2ludCB3aGVuIHByZWFjdGl2YXRpb24gaXMgZG9uZSwgYW5kIHRoZW5cclxuICogcGF1c2VzLiBJdCB3YWl0cyBmb3IgdGhlIGhvb2sgdG8gYmUgcmVzb2x2ZWQuIFdlIHRoZW4gcmVzb2x2ZSBpdCBvbmx5IGluIGEgYm9vdHN0cmFwIGxpc3RlbmVyLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaCB7XHJcbiAgICBwcml2YXRlIGluamVjdG9yO1xyXG4gICAgcHJpdmF0ZSBpbml0TmF2aWdhdGlvbjtcclxuICAgIHByaXZhdGUgcmVzdWx0T2ZQcmVhY3RpdmF0aW9uRG9uZTtcclxuICAgIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcik7XHJcbiAgICBhcHBJbml0aWFsaXplcigpOiBQcm9taXNlPGFueT47XHJcbiAgICBib290c3RyYXBMaXN0ZW5lcihib290c3RyYXBwZWRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogdm9pZDtcclxuICAgIHByaXZhdGUgaXNMZWdhY3lFbmFibGVkO1xyXG4gICAgcHJpdmF0ZSBpc0xlZ2FjeURpc2FibGVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9pKHI6IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2gpOiAoKSA9PiBQcm9taXNlPGFueT47XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9qKHI6IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2gpOiAoYm9vdHN0cmFwcGVkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2soKTogKHR5cGVvZiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9oIHwge1xyXG4gICAgcHJvdmlkZTogSW5qZWN0aW9uVG9rZW48KCgpID0+IHZvaWQpW10+O1xyXG4gICAgbXVsdGk6IGJvb2xlYW47XHJcbiAgICB1c2VGYWN0b3J5OiB0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaTtcclxuICAgIGRlcHM6ICh0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaClbXTtcclxuICAgIHVzZUV4aXN0aW5nPzogdW5kZWZpbmVkO1xyXG59IHwge1xyXG4gICAgcHJvdmlkZTogSW5qZWN0aW9uVG9rZW48KGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB2b2lkPjtcclxuICAgIHVzZUZhY3Rvcnk6IHR5cGVvZiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9qO1xyXG4gICAgZGVwczogKHR5cGVvZiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9oKVtdO1xyXG4gICAgbXVsdGk/OiB1bmRlZmluZWQ7XHJcbiAgICB1c2VFeGlzdGluZz86IHVuZGVmaW5lZDtcclxufSB8IHtcclxuICAgIHByb3ZpZGU6IEluamVjdGlvblRva2VuPCgoY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQpW10+O1xyXG4gICAgbXVsdGk6IGJvb2xlYW47XHJcbiAgICB1c2VFeGlzdGluZzogSW5qZWN0aW9uVG9rZW48KGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB2b2lkPjtcclxuICAgIHVzZUZhY3Rvcnk/OiB1bmRlZmluZWQ7XHJcbiAgICBkZXBzPzogdW5kZWZpbmVkO1xyXG59KVtdO1xyXG5cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX208VD4ge1xyXG4gICAgY29uc3RydWN0b3Iocm9vdDogybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbjxUPik7XHJcbiAgICBnZXQgcm9vdCgpOiBUO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9uPFQ+IHtcclxuICAgIHZhbHVlOiBUO1xyXG4gICAgY2hpbGRyZW46IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX248VD5bXTtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBULCBjaGlsZHJlbjogybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbjxUPltdKTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovIHJlYWRvbmx5IHZpZXdwb3J0U2Nyb2xsZXI6IFZpZXdwb3J0U2Nyb2xsZXI7XHJcbiAgICBwcml2YXRlIG9wdGlvbnM7XHJcbiAgICBwcml2YXRlIHJvdXRlckV2ZW50c1N1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgc2Nyb2xsRXZlbnRzU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBsYXN0SWQ7XHJcbiAgICBwcml2YXRlIGxhc3RTb3VyY2U7XHJcbiAgICBwcml2YXRlIHJlc3RvcmVkSWQ7XHJcbiAgICBwcml2YXRlIHN0b3JlO1xyXG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi8gdmlld3BvcnRTY3JvbGxlcjogVmlld3BvcnRTY3JvbGxlciwgb3B0aW9ucz86IHtcclxuICAgICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uPzogJ2Rpc2FibGVkJyB8ICdlbmFibGVkJyB8ICd0b3AnO1xyXG4gICAgICAgIGFuY2hvclNjcm9sbGluZz86ICdkaXNhYmxlZCcgfCAnZW5hYmxlZCc7XHJcbiAgICB9KTtcclxuICAgIGluaXQoKTogdm9pZDtcclxuICAgIHByaXZhdGUgY3JlYXRlU2Nyb2xsRXZlbnRzO1xyXG4gICAgcHJpdmF0ZSBjb25zdW1lU2Nyb2xsRXZlbnRzO1xyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZVNjcm9sbEV2ZW50O1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIGludGVybmFsbHkgd2l0aGluIHRoZSByb3V0ZXIgdG8gYmUgYSBwbGFjZWhvbGRlciB3aGVuIGFuIGVtcHR5XHJcbiAqIHJvdXRlci1vdXRsZXQgaXMgbmVlZGVkLiBGb3IgZXhhbXBsZSwgd2l0aCBhIGNvbmZpZyBzdWNoIGFzOlxyXG4gKlxyXG4gKiBge3BhdGg6ICdwYXJlbnQnLCBvdXRsZXQ6ICduYXYnLCBjaGlsZHJlbjogWy4uLl19YFxyXG4gKlxyXG4gKiBJbiBvcmRlciB0byByZW5kZXIsIHRoZXJlIG5lZWRzIHRvIGJlIGEgY29tcG9uZW50IG9uIHRoaXMgY29uZmlnLCB3aGljaCB3aWxsIGRlZmF1bHRcclxuICogdG8gdGhpcyBgRW1wdHlPdXRsZXRDb21wb25lbnRgLlxyXG4gKi9cclxuZGVjbGFyZSBjbGFzcyDJtUVtcHR5T3V0bGV0Q29tcG9uZW50IHtcclxufVxyXG5leHBvcnQgeyDJtUVtcHR5T3V0bGV0Q29tcG9uZW50IH1cclxuZXhwb3J0IHsgybVFbXB0eU91dGxldENvbXBvbmVudCBhcyDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9sIH1cclxuXHJcbi8qKlxyXG4gKiBGbGF0dGVucyBzaW5nbGUtbGV2ZWwgbmVzdGVkIGFycmF5cy5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1ZmxhdHRlbjxUPihhcnI6IFRbXVtdKTogVFtdO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgybVST1VURVJfUFJPVklERVJTOiBQcm92aWRlcltdO1xyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=
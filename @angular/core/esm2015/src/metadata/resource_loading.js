/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/metadata/resource_loading.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to resolve resource URLs on `\@Component` when used with JIT compilation.
 *
 * Example:
 * ```
 * \@Component({
 *   selector: 'my-comp',
 *   templateUrl: 'my-comp.html', // This requires asynchronous resolution
 * })
 * class MyComponent{
 * }
 *
 * // Calling `renderComponent` will fail because `renderComponent` is a synchronous process
 * // and `MyComponent`'s `\@Component.templateUrl` needs to be resolved asynchronously.
 *
 * // Calling `resolveComponentResources()` will resolve `\@Component.templateUrl` into
 * // `\@Component.template`, which allows `renderComponent` to proceed in a synchronous manner.
 *
 * // Use browser's `fetch()` function as the default resource resolution strategy.
 * resolveComponentResources(fetch).then(() => {
 *   // After resolution all URLs have been converted into `template` strings.
 *   renderComponent(MyComponent);
 * });
 *
 * ```
 *
 * NOTE: In AOT the resolution happens during compilation, and so there should be no need
 * to call this method outside JIT mode.
 *
 * @param {?} resourceResolver a function which is responsible for returning a `Promise` to the
 * contents of the resolved URL. Browser's `fetch()` method is a good default implementation.
 * @return {?}
 */
export function resolveComponentResources(resourceResolver) {
    // Store all promises which are fetching the resources.
    /** @type {?} */
    const componentResolved = [];
    // Cache so that we don't fetch the same resource more than once.
    /** @type {?} */
    const urlMap = new Map();
    /**
     * @param {?} url
     * @return {?}
     */
    function cachedResourceResolve(url) {
        /** @type {?} */
        let promise = urlMap.get(url);
        if (!promise) {
            /** @type {?} */
            const resp = resourceResolver(url);
            urlMap.set(url, promise = resp.then(unwrapResponse));
        }
        return promise;
    }
    componentResourceResolutionQueue.forEach((/**
     * @param {?} component
     * @param {?} type
     * @return {?}
     */
    (component, type) => {
        /** @type {?} */
        const promises = [];
        if (component.templateUrl) {
            promises.push(cachedResourceResolve(component.templateUrl).then((/**
             * @param {?} template
             * @return {?}
             */
            (template) => {
                component.template = template;
            })));
        }
        /** @type {?} */
        const styleUrls = component.styleUrls;
        /** @type {?} */
        const styles = component.styles || (component.styles = []);
        /** @type {?} */
        const styleOffset = component.styles.length;
        styleUrls && styleUrls.forEach((/**
         * @param {?} styleUrl
         * @param {?} index
         * @return {?}
         */
        (styleUrl, index) => {
            styles.push(''); // pre-allocate array.
            promises.push(cachedResourceResolve(styleUrl).then((/**
             * @param {?} style
             * @return {?}
             */
            (style) => {
                styles[styleOffset + index] = style;
                styleUrls.splice(styleUrls.indexOf(styleUrl), 1);
                if (styleUrls.length == 0) {
                    component.styleUrls = undefined;
                }
            })));
        }));
        /** @type {?} */
        const fullyResolved = Promise.all(promises).then((/**
         * @return {?}
         */
        () => componentDefResolved(type)));
        componentResolved.push(fullyResolved);
    }));
    clearResolutionOfComponentResourcesQueue();
    return Promise.all(componentResolved).then((/**
     * @return {?}
     */
    () => undefined));
}
/** @type {?} */
let componentResourceResolutionQueue = new Map();
// Track when existing ɵcmp for a Type is waiting on resources.
/** @type {?} */
const componentDefPendingResolution = new Set();
/**
 * @param {?} type
 * @param {?} metadata
 * @return {?}
 */
export function maybeQueueResolutionOfComponentResources(type, metadata) {
    if (componentNeedsResolution(metadata)) {
        componentResourceResolutionQueue.set(type, metadata);
        componentDefPendingResolution.add(type);
    }
}
/**
 * @param {?} type
 * @return {?}
 */
export function isComponentDefPendingResolution(type) {
    return componentDefPendingResolution.has(type);
}
/**
 * @param {?} component
 * @return {?}
 */
export function componentNeedsResolution(component) {
    return !!((component.templateUrl && !component.hasOwnProperty('template')) ||
        component.styleUrls && component.styleUrls.length);
}
/**
 * @return {?}
 */
export function clearResolutionOfComponentResourcesQueue() {
    /** @type {?} */
    const old = componentResourceResolutionQueue;
    componentResourceResolutionQueue = new Map();
    return old;
}
/**
 * @param {?} queue
 * @return {?}
 */
export function restoreComponentResolutionQueue(queue) {
    componentDefPendingResolution.clear();
    queue.forEach((/**
     * @param {?} _
     * @param {?} type
     * @return {?}
     */
    (_, type) => componentDefPendingResolution.add(type)));
    componentResourceResolutionQueue = queue;
}
/**
 * @return {?}
 */
export function isComponentResourceResolutionQueueEmpty() {
    return componentResourceResolutionQueue.size === 0;
}
/**
 * @param {?} response
 * @return {?}
 */
function unwrapResponse(response) {
    return typeof response == 'string' ? response : response.text();
}
/**
 * @param {?} type
 * @return {?}
 */
function componentDefResolved(type) {
    componentDefPendingResolution.delete(type);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL21ldGFkYXRhL3Jlc291cmNlX2xvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBLE1BQU0sVUFBVSx5QkFBeUIsQ0FDckMsZ0JBQThFOzs7VUFFMUUsaUJBQWlCLEdBQW9CLEVBQUU7OztVQUd2QyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTJCOzs7OztJQUNqRCxTQUFTLHFCQUFxQixDQUFDLEdBQVc7O1lBQ3BDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFOztrQkFDTixJQUFJLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0NBQWdDLENBQUMsT0FBTzs7Ozs7SUFBQyxDQUFDLFNBQW9CLEVBQUUsSUFBZSxFQUFFLEVBQUU7O2NBQzNFLFFBQVEsR0FBb0IsRUFBRTtRQUNwQyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQzNFLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDTDs7Y0FDSyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVM7O2NBQy9CLE1BQU0sR0FBRyxT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QyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ3JELENBQUM7Ozs7O0FBRUQsU0FBUyxjQUFjLENBQUMsUUFBNEM7SUFDbEUsT0FBTyxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xFLENBQUM7Ozs7O0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxJQUFlO0lBQzNDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuXG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHJlc291cmNlIFVSTHMgb24gYEBDb21wb25lbnRgIHdoZW4gdXNlZCB3aXRoIEpJVCBjb21waWxhdGlvbi5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdteS1jb21wJyxcbiAqICAgdGVtcGxhdGVVcmw6ICdteS1jb21wLmh0bWwnLCAvLyBUaGlzIHJlcXVpcmVzIGFzeW5jaHJvbm91cyByZXNvbHV0aW9uXG4gKiB9KVxuICogY2xhc3MgTXlDb21wb25lbnR7XG4gKiB9XG4gKlxuICogLy8gQ2FsbGluZyBgcmVuZGVyQ29tcG9uZW50YCB3aWxsIGZhaWwgYmVjYXVzZSBgcmVuZGVyQ29tcG9uZW50YCBpcyBhIHN5bmNocm9ub3VzIHByb2Nlc3NcbiAqIC8vIGFuZCBgTXlDb21wb25lbnRgJ3MgYEBDb21wb25lbnQudGVtcGxhdGVVcmxgIG5lZWRzIHRvIGJlIHJlc29sdmVkIGFzeW5jaHJvbm91c2x5LlxuICpcbiAqIC8vIENhbGxpbmcgYHJlc29sdmVDb21wb25lbnRSZXNvdXJjZXMoKWAgd2lsbCByZXNvbHZlIGBAQ29tcG9uZW50LnRlbXBsYXRlVXJsYCBpbnRvXG4gKiAvLyBgQENvbXBvbmVudC50ZW1wbGF0ZWAsIHdoaWNoIGFsbG93cyBgcmVuZGVyQ29tcG9uZW50YCB0byBwcm9jZWVkIGluIGEgc3luY2hyb25vdXMgbWFubmVyLlxuICpcbiAqIC8vIFVzZSBicm93c2VyJ3MgYGZldGNoKClgIGZ1bmN0aW9uIGFzIHRoZSBkZWZhdWx0IHJlc291cmNlIHJlc29sdXRpb24gc3RyYXRlZ3kuXG4gKiByZXNvbHZlQ29tcG9uZW50UmVzb3VyY2VzKGZldGNoKS50aGVuKCgpID0+IHtcbiAqICAgLy8gQWZ0ZXIgcmVzb2x1dGlvbiBhbGwgVVJMcyBoYXZlIGJlZW4gY29udmVydGVkIGludG8gYHRlbXBsYXRlYCBzdHJpbmdzLlxuICogICByZW5kZXJDb21wb25lbnQoTXlDb21wb25lbnQpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKlxuICogTk9URTogSW4gQU9UIHRoZSByZXNvbHV0aW9uIGhhcHBlbnMgZHVyaW5nIGNvbXBpbGF0aW9uLCBhbmQgc28gdGhlcmUgc2hvdWxkIGJlIG5vIG5lZWRcbiAqIHRvIGNhbGwgdGhpcyBtZXRob2Qgb3V0c2lkZSBKSVQgbW9kZS5cbiAqXG4gKiBAcGFyYW0gcmVzb3VyY2VSZXNvbHZlciBhIGZ1bmN0aW9uIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmcgYSBgUHJvbWlzZWAgdG8gdGhlXG4gKiBjb250ZW50cyBvZiB0aGUgcmVzb2x2ZWQgVVJMLiBCcm93c2VyJ3MgYGZldGNoKClgIG1ldGhvZCBpcyBhIGdvb2QgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDb21wb25lbnRSZXNvdXJjZXMoXG4gICAgcmVzb3VyY2VSZXNvbHZlcjogKHVybDogc3RyaW5nKSA9PiAoUHJvbWlzZTxzdHJpbmd8e3RleHQoKTogUHJvbWlzZTxzdHJpbmc+fT4pKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFN0b3JlIGFsbCBwcm9taXNlcyB3aGljaCBhcmUgZmV0Y2hpbmcgdGhlIHJlc291cmNlcy5cbiAgY29uc3QgY29tcG9uZW50UmVzb2x2ZWQ6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gIC8vIENhY2hlIHNvIHRoYXQgd2UgZG9uJ3QgZmV0Y2ggdGhlIHNhbWUgcmVzb3VyY2UgbW9yZSB0aGFuIG9uY2UuXG4gIGNvbnN0IHVybE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPHN0cmluZz4+KCk7XG4gIGZ1bmN0aW9uIGNhY2hlZFJlc291cmNlUmVzb2x2ZSh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgbGV0IHByb21pc2UgPSB1cmxNYXAuZ2V0KHVybCk7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICBjb25zdCByZXNwID0gcmVzb3VyY2VSZXNvbHZlcih1cmwpO1xuICAgICAgdXJsTWFwLnNldCh1cmwsIHByb21pc2UgPSByZXNwLnRoZW4odW53cmFwUmVzcG9uc2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBjb21wb25lbnRSZXNvdXJjZVJlc29sdXRpb25RdWV1ZS5mb3JFYWNoKChjb21wb25lbnQ6IENvbXBvbmVudCwgdHlwZTogVHlwZTxhbnk+KSA9PiB7XG4gICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuICAgIGlmIChjb21wb25lbnQudGVtcGxhdGVVcmwpIHtcbiAgICAgIHByb21pc2VzLnB1c2goY2FjaGVkUmVzb3VyY2VSZXNvbHZlKGNvbXBvbmVudC50ZW1wbGF0ZVVybCkudGhlbigodGVtcGxhdGUpID0+IHtcbiAgICAgICAgY29tcG9uZW50LnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlVXJscyA9IGNvbXBvbmVudC5zdHlsZVVybHM7XG4gICAgY29uc3Qgc3R5bGVzID0gY29tcG9uZW50LnN0eWxlcyB8fCAoY29tcG9uZW50LnN0eWxlcyA9IFtdKTtcbiAgICBjb25zdCBzdHlsZU9mZnNldCA9IGNvbXBvbmVudC5zdHlsZXMubGVuZ3RoO1xuICAgIHN0eWxlVXJscyAmJiBzdHlsZVVybHMuZm9yRWFjaCgoc3R5bGVVcmwsIGluZGV4KSA9PiB7XG4gICAgICBzdHlsZXMucHVzaCgnJyk7ICAvLyBwcmUtYWxsb2NhdGUgYXJyYXkuXG4gICAgICBwcm9taXNlcy5wdXNoKGNhY2hlZFJlc291cmNlUmVzb2x2ZShzdHlsZVVybCkudGhlbigoc3R5bGUpID0+IHtcbiAgICAgICAgc3R5bGVzW3N0eWxlT2Zmc2V0ICsgaW5kZXhdID0gc3R5bGU7XG4gICAgICAgIHN0eWxlVXJscy5zcGxpY2Uoc3R5bGVVcmxzLmluZGV4T2Yoc3R5bGVVcmwpLCAxKTtcbiAgICAgICAgaWYgKHN0eWxlVXJscy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGNvbXBvbmVudC5zdHlsZVVybHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBjb25zdCBmdWxseVJlc29sdmVkID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4gY29tcG9uZW50RGVmUmVzb2x2ZWQodHlwZSkpO1xuICAgIGNvbXBvbmVudFJlc29sdmVkLnB1c2goZnVsbHlSZXNvbHZlZCk7XG4gIH0pO1xuICBjbGVhclJlc29sdXRpb25PZkNvbXBvbmVudFJlc291cmNlc1F1ZXVlKCk7XG4gIHJldHVybiBQcm9taXNlLmFsbChjb21wb25lbnRSZXNvbHZlZCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5sZXQgY29tcG9uZW50UmVzb3VyY2VSZXNvbHV0aW9uUXVldWUgPSBuZXcgTWFwPFR5cGU8YW55PiwgQ29tcG9uZW50PigpO1xuXG4vLyBUcmFjayB3aGVuIGV4aXN0aW5nIMm1Y21wIGZvciBhIFR5cGUgaXMgd2FpdGluZyBvbiByZXNvdXJjZXMuXG5jb25zdCBjb21wb25lbnREZWZQZW5kaW5nUmVzb2x1dGlvbiA9IG5ldyBTZXQ8VHlwZTxhbnk+PigpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVRdWV1ZVJlc29sdXRpb25PZkNvbXBvbmVudFJlc291cmNlcyh0eXBlOiBUeXBlPGFueT4sIG1ldGFkYXRhOiBDb21wb25lbnQpIHtcbiAgaWYgKGNvbXBvbmVudE5lZWRzUmVzb2x1dGlvbihtZXRhZGF0YSkpIHtcbiAgICBjb21wb25lbnRSZXNvdXJjZVJlc29sdXRpb25RdWV1ZS5zZXQodHlwZSwgbWV0YWRhdGEpO1xuICAgIGNvbXBvbmVudERlZlBlbmRpbmdSZXNvbHV0aW9uLmFkZCh0eXBlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnREZWZQZW5kaW5nUmVzb2x1dGlvbih0eXBlOiBUeXBlPGFueT4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvbXBvbmVudERlZlBlbmRpbmdSZXNvbHV0aW9uLmhhcyh0eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudE5lZWRzUmVzb2x1dGlvbihjb21wb25lbnQ6IENvbXBvbmVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gISEoXG4gICAgICAoY29tcG9uZW50LnRlbXBsYXRlVXJsICYmICFjb21wb25lbnQuaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlJykpIHx8XG4gICAgICBjb21wb25lbnQuc3R5bGVVcmxzICYmIGNvbXBvbmVudC5zdHlsZVVybHMubGVuZ3RoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlc29sdXRpb25PZkNvbXBvbmVudFJlc291cmNlc1F1ZXVlKCk6IE1hcDxUeXBlPGFueT4sIENvbXBvbmVudD4ge1xuICBjb25zdCBvbGQgPSBjb21wb25lbnRSZXNvdXJjZVJlc29sdXRpb25RdWV1ZTtcbiAgY29tcG9uZW50UmVzb3VyY2VSZXNvbHV0aW9uUXVldWUgPSBuZXcgTWFwKCk7XG4gIHJldHVybiBvbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlQ29tcG9uZW50UmVzb2x1dGlvblF1ZXVlKHF1ZXVlOiBNYXA8VHlwZTxhbnk+LCBDb21wb25lbnQ+KTogdm9pZCB7XG4gIGNvbXBvbmVudERlZlBlbmRpbmdSZXNvbHV0aW9uLmNsZWFyKCk7XG4gIHF1ZXVlLmZvckVhY2goKF8sIHR5cGUpID0+IGNvbXBvbmVudERlZlBlbmRpbmdSZXNvbHV0aW9uLmFkZCh0eXBlKSk7XG4gIGNvbXBvbmVudFJlc291cmNlUmVzb2x1dGlvblF1ZXVlID0gcXVldWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudFJlc291cmNlUmVzb2x1dGlvblF1ZXVlRW1wdHkoKSB7XG4gIHJldHVybiBjb21wb25lbnRSZXNvdXJjZVJlc29sdXRpb25RdWV1ZS5zaXplID09PSAwO1xufVxuXG5mdW5jdGlvbiB1bndyYXBSZXNwb25zZShyZXNwb25zZTogc3RyaW5nIHwge3RleHQoKTogUHJvbWlzZTxzdHJpbmc+fSk6IHN0cmluZ3xQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gdHlwZW9mIHJlc3BvbnNlID09ICdzdHJpbmcnID8gcmVzcG9uc2UgOiByZXNwb25zZS50ZXh0KCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudERlZlJlc29sdmVkKHR5cGU6IFR5cGU8YW55Pik6IHZvaWQge1xuICBjb21wb25lbnREZWZQZW5kaW5nUmVzb2x1dGlvbi5kZWxldGUodHlwZSk7XG59XG4iXX0=
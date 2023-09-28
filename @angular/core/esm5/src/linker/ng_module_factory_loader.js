/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModuleFactory as R3NgModuleFactory } from '../render3/ng_module_ref';
import { getRegisteredNgModuleType } from './ng_module_factory_registration';
/**
 * Used to load ng module factories.
 *
 * @publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated, and `NgModuleFactoryLoader` is
 * part of its implementation. See `LoadChildren` for more details.
 */
var NgModuleFactoryLoader = /** @class */ (function () {
    function NgModuleFactoryLoader() {
    }
    return NgModuleFactoryLoader;
}());
export { NgModuleFactoryLoader };
export function getModuleFactory__PRE_R3__(id) {
    var factory = getRegisteredNgModuleType(id);
    if (!factory)
        throw noModuleError(id);
    return factory;
}
export function getModuleFactory__POST_R3__(id) {
    var type = getRegisteredNgModuleType(id);
    if (!type)
        throw noModuleError(id);
    return new R3NgModuleFactory(type);
}
/**
 * Returns the NgModuleFactory with the given id, if it exists and has been loaded.
 * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
 * cannot be found.
 * @publicApi
 */
export var getModuleFactory = getModuleFactory__PRE_R3__;
function noModuleError(id) {
    return new Error("No module with ID " + id + " loaded");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2ZhY3RvcnlfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGlua2VyL25nX21vZHVsZV9mYWN0b3J5X2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsZUFBZSxJQUFJLGlCQUFpQixFQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFHNUYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFHM0U7Ozs7OztHQU1HO0FBQ0g7SUFBQTtJQUVBLENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxFQUFVO0lBQ25ELElBQU0sT0FBTyxHQUFHLHlCQUF5QixDQUFDLEVBQUUsQ0FBK0IsQ0FBQztJQUM1RSxJQUFJLENBQUMsT0FBTztRQUFFLE1BQU0sYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsRUFBVTtJQUNwRCxJQUFNLElBQUksR0FBRyx5QkFBeUIsQ0FBQyxFQUFFLENBQXdCLENBQUM7SUFDbEUsSUFBSSxDQUFDLElBQUk7UUFBRSxNQUFNLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxPQUFPLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQXlDLDBCQUEwQixDQUFDO0FBRWpHLFNBQVMsYUFBYSxDQUFDLEVBQVU7SUFDL0IsT0FBTyxJQUFJLEtBQUssQ0FBQyx1QkFBcUIsRUFBRSxZQUFTLENBQUMsQ0FBQztBQUNyRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlRmFjdG9yeSBhcyBSM05nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVUeXBlfSBmcm9tICcuLi9yZW5kZXIzL25nX21vZHVsZV9yZWYnO1xuXG5pbXBvcnQge05nTW9kdWxlRmFjdG9yeX0gZnJvbSAnLi9uZ19tb2R1bGVfZmFjdG9yeSc7XG5pbXBvcnQge2dldFJlZ2lzdGVyZWROZ01vZHVsZVR5cGV9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnlfcmVnaXN0cmF0aW9uJztcblxuXG4vKipcbiAqIFVzZWQgdG8gbG9hZCBuZyBtb2R1bGUgZmFjdG9yaWVzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXByZWNhdGVkIHRoZSBgc3RyaW5nYCBmb3JtIG9mIGBsb2FkQ2hpbGRyZW5gIGlzIGRlcHJlY2F0ZWQsIGFuZCBgTmdNb2R1bGVGYWN0b3J5TG9hZGVyYCBpc1xuICogcGFydCBvZiBpdHMgaW1wbGVtZW50YXRpb24uIFNlZSBgTG9hZENoaWxkcmVuYCBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIHtcbiAgYWJzdHJhY3QgbG9hZChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxhbnk+Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZUZhY3RvcnlfX1BSRV9SM19fKGlkOiBzdHJpbmcpOiBOZ01vZHVsZUZhY3Rvcnk8YW55PiB7XG4gIGNvbnN0IGZhY3RvcnkgPSBnZXRSZWdpc3RlcmVkTmdNb2R1bGVUeXBlKGlkKSBhcyBOZ01vZHVsZUZhY3Rvcnk8YW55PnwgbnVsbDtcbiAgaWYgKCFmYWN0b3J5KSB0aHJvdyBub01vZHVsZUVycm9yKGlkKTtcbiAgcmV0dXJuIGZhY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGVGYWN0b3J5X19QT1NUX1IzX18oaWQ6IHN0cmluZyk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+IHtcbiAgY29uc3QgdHlwZSA9IGdldFJlZ2lzdGVyZWROZ01vZHVsZVR5cGUoaWQpIGFzIE5nTW9kdWxlVHlwZSB8IG51bGw7XG4gIGlmICghdHlwZSkgdGhyb3cgbm9Nb2R1bGVFcnJvcihpZCk7XG4gIHJldHVybiBuZXcgUjNOZ01vZHVsZUZhY3RvcnkodHlwZSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgTmdNb2R1bGVGYWN0b3J5IHdpdGggdGhlIGdpdmVuIGlkLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBiZWVuIGxvYWRlZC5cbiAqIEZhY3RvcmllcyBmb3IgbW9kdWxlcyB0aGF0IGRvIG5vdCBzcGVjaWZ5IGFuIGBpZGAgY2Fubm90IGJlIHJldHJpZXZlZC4gVGhyb3dzIGlmIHRoZSBtb2R1bGVcbiAqIGNhbm5vdCBiZSBmb3VuZC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vZHVsZUZhY3Rvcnk6IChpZDogc3RyaW5nKSA9PiBOZ01vZHVsZUZhY3Rvcnk8YW55PiA9IGdldE1vZHVsZUZhY3RvcnlfX1BSRV9SM19fO1xuXG5mdW5jdGlvbiBub01vZHVsZUVycm9yKGlkOiBzdHJpbmcsICk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihgTm8gbW9kdWxlIHdpdGggSUQgJHtpZH0gbG9hZGVkYCk7XG59XG4iXX0=
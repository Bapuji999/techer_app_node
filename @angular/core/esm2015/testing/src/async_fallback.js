/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/async_fallback.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
const _global = (/** @type {?} */ ((typeof window === 'undefined' ? global : window)));
/**
 * Wraps a test function in an asynchronous test zone. The test will automatically
 * complete when all asynchronous calls within this zone are done. Can be used
 * to wrap an {\@link inject} call.
 *
 * Example:
 *
 * ```
 * it('...', async(inject([AClass], (object) => {
 *   object.doSomething.then(() => {
 *     expect(...);
 *   })
 * });
 * ```
 *
 *
 * @param {?} fn
 * @return {?}
 */
export function asyncFallback(fn) {
    // If we're running using the Jasmine test framework, adapt to call the 'done'
    // function when asynchronous activity is finished.
    if (_global.jasmine) {
        // Not using an arrow function to preserve context passed from call site
        return (/**
         * @this {?}
         * @param {?} done
         * @return {?}
         */
        function (done) {
            if (!done) {
                // if we run beforeEach in @angular/core/testing/testing_internal then we get no done
                // fake it here and assume sync.
                done = (/**
                 * @return {?}
                 */
                function () { });
                done.fail = (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { throw e; });
            }
            runInTestZone(fn, this, done, (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                if (typeof err === 'string') {
                    return done.fail(new Error(err));
                }
                else {
                    done.fail(err);
                }
            }));
        });
    }
    // Otherwise, return a promise which will resolve when asynchronous activity
    // is finished. This will be correctly consumed by the Mocha framework with
    // it('...', async(myFn)); or can be used in a custom framework.
    // Not using an arrow function to preserve context passed from call site
    return (/**
     * @this {?}
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} finishCallback
         * @param {?} failCallback
         * @return {?}
         */
        (finishCallback, failCallback) => {
            runInTestZone(fn, this, finishCallback, failCallback);
        }));
    });
}
/**
 * @param {?} fn
 * @param {?} context
 * @param {?} finishCallback
 * @param {?} failCallback
 * @return {?}
 */
function runInTestZone(fn, context, finishCallback, failCallback) {
    /** @type {?} */
    const currentZone = Zone.current;
    /** @type {?} */
    const AsyncTestZoneSpec = ((/** @type {?} */ (Zone)))['AsyncTestZoneSpec'];
    if (AsyncTestZoneSpec === undefined) {
        throw new Error('AsyncTestZoneSpec is needed for the async() test helper but could not be found. ' +
            'Please make sure that your environment includes zone.js/dist/async-test.js');
    }
    /** @type {?} */
    const ProxyZoneSpec = (/** @type {?} */ (((/** @type {?} */ (Zone)))['ProxyZoneSpec']));
    if (ProxyZoneSpec === undefined) {
        throw new Error('ProxyZoneSpec is needed for the async() test helper but could not be found. ' +
            'Please make sure that your environment includes zone.js/dist/proxy.js');
    }
    /** @type {?} */
    const proxyZoneSpec = ProxyZoneSpec.get();
    ProxyZoneSpec.assertPresent();
    // We need to create the AsyncTestZoneSpec outside the ProxyZone.
    // If we do it in ProxyZone then we will get to infinite recursion.
    /** @type {?} */
    const proxyZone = Zone.current.getZoneWith('ProxyZoneSpec');
    /** @type {?} */
    const previousDelegate = proxyZoneSpec.getDelegate();
    (/** @type {?} */ ((/** @type {?} */ (proxyZone)).parent)).run((/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const testZoneSpec = new AsyncTestZoneSpec((/**
         * @return {?}
         */
        () => {
            // Need to restore the original zone.
            currentZone.run((/**
             * @return {?}
             */
            () => {
                if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                    // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                    proxyZoneSpec.setDelegate(previousDelegate);
                }
                finishCallback();
            }));
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            // Need to restore the original zone.
            currentZone.run((/**
             * @return {?}
             */
            () => {
                if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                    // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                    proxyZoneSpec.setDelegate(previousDelegate);
                }
                failCallback(error);
            }));
        }), 'test');
        proxyZoneSpec.setDelegate(testZoneSpec);
    }));
    return Zone.current.runGuarded(fn, context);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfZmFsbGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2FzeW5jX2ZhbGxiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFjTSxPQUFPLEdBQUcsbUJBQUssQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ0RSxNQUFNLFVBQVUsYUFBYSxDQUFDLEVBQVk7SUFDeEMsOEVBQThFO0lBQzlFLG1EQUFtRDtJQUNuRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDbkIsd0VBQXdFO1FBQ3hFOzs7OztRQUFPLFVBQXdCLElBQVM7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxxRkFBcUY7Z0JBQ3JGLGdDQUFnQztnQkFDaEMsSUFBSTs7O2dCQUFHLGNBQVksQ0FBQyxDQUFBLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFHLFVBQVMsQ0FBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7YUFDM0M7WUFDRCxhQUFhLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJOzs7O1lBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDO0tBQ0g7SUFDRCw0RUFBNEU7SUFDNUUsMkVBQTJFO0lBQzNFLGdFQUFnRTtJQUNoRSx3RUFBd0U7SUFDeEU7Ozs7SUFBTztRQUNMLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFPLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxFQUFFO1lBQ3hELGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQ2xCLEVBQVksRUFBRSxPQUFZLEVBQUUsY0FBd0IsRUFBRSxZQUFzQjs7VUFDeEUsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPOztVQUMxQixpQkFBaUIsR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsbUJBQW1CLENBQUM7SUFDNUQsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FDWCxrRkFBa0Y7WUFDbEYsNEVBQTRFLENBQUMsQ0FBQztLQUNuRjs7VUFDSyxhQUFhLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUduRDtJQUNELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtRQUMvQixNQUFNLElBQUksS0FBSyxDQUNYLDhFQUE4RTtZQUM5RSx1RUFBdUUsQ0FBQyxDQUFDO0tBQzlFOztVQUNLLGFBQWEsR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQ3pDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7OztVQUd4QixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDOztVQUNyRCxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3BELG1CQUFBLG1CQUFBLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUc7OztJQUFDLEdBQUcsRUFBRTs7Y0FDdEIsWUFBWSxHQUFhLElBQUksaUJBQWlCOzs7UUFDaEQsR0FBRyxFQUFFO1lBQ0gscUNBQXFDO1lBQ3JDLFdBQVcsQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLFlBQVksRUFBRTtvQkFDL0MsNkVBQTZFO29CQUM3RSxhQUFhLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzdDO2dCQUNELGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQzs7OztRQUNELENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDYixxQ0FBcUM7WUFDckMsV0FBVyxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksWUFBWSxFQUFFO29CQUMvQyw2RUFBNkU7b0JBQzdFLGFBQWEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxHQUNELE1BQU0sQ0FBQztRQUNYLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIGFzeW5jIGhhcyBiZWVuIG1vdmVkIHRvIHpvbmUuanNcbiAqIHRoaXMgZmlsZSBpcyBmb3IgZmFsbGJhY2sgaW4gY2FzZSBvbGQgdmVyc2lvbiBvZiB6b25lLmpzIGlzIHVzZWRcbiAqL1xuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XG5cbmNvbnN0IF9nbG9iYWwgPSA8YW55Pih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyk7XG5cbi8qKlxuICogV3JhcHMgYSB0ZXN0IGZ1bmN0aW9uIGluIGFuIGFzeW5jaHJvbm91cyB0ZXN0IHpvbmUuIFRoZSB0ZXN0IHdpbGwgYXV0b21hdGljYWxseVxuICogY29tcGxldGUgd2hlbiBhbGwgYXN5bmNocm9ub3VzIGNhbGxzIHdpdGhpbiB0aGlzIHpvbmUgYXJlIGRvbmUuIENhbiBiZSB1c2VkXG4gKiB0byB3cmFwIGFuIHtAbGluayBpbmplY3R9IGNhbGwuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIGl0KCcuLi4nLCBhc3luYyhpbmplY3QoW0FDbGFzc10sIChvYmplY3QpID0+IHtcbiAqICAgb2JqZWN0LmRvU29tZXRoaW5nLnRoZW4oKCkgPT4ge1xuICogICAgIGV4cGVjdCguLi4pO1xuICogICB9KVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXN5bmNGYWxsYmFjayhmbjogRnVuY3Rpb24pOiAoZG9uZTogYW55KSA9PiBhbnkge1xuICAvLyBJZiB3ZSdyZSBydW5uaW5nIHVzaW5nIHRoZSBKYXNtaW5lIHRlc3QgZnJhbWV3b3JrLCBhZGFwdCB0byBjYWxsIHRoZSAnZG9uZSdcbiAgLy8gZnVuY3Rpb24gd2hlbiBhc3luY2hyb25vdXMgYWN0aXZpdHkgaXMgZmluaXNoZWQuXG4gIGlmIChfZ2xvYmFsLmphc21pbmUpIHtcbiAgICAvLyBOb3QgdXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dCBwYXNzZWQgZnJvbSBjYWxsIHNpdGVcbiAgICByZXR1cm4gZnVuY3Rpb24odGhpczogdW5rbm93biwgZG9uZTogYW55KSB7XG4gICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgLy8gaWYgd2UgcnVuIGJlZm9yZUVhY2ggaW4gQGFuZ3VsYXIvY29yZS90ZXN0aW5nL3Rlc3RpbmdfaW50ZXJuYWwgdGhlbiB3ZSBnZXQgbm8gZG9uZVxuICAgICAgICAvLyBmYWtlIGl0IGhlcmUgYW5kIGFzc3VtZSBzeW5jLlxuICAgICAgICBkb25lID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgZG9uZS5mYWlsID0gZnVuY3Rpb24oZTogYW55KSB7IHRocm93IGU7IH07XG4gICAgICB9XG4gICAgICBydW5JblRlc3Rab25lKGZuLCB0aGlzLCBkb25lLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBlcnIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbmUuZmFpbChuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9uZS5mYWlsKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gYSBwcm9taXNlIHdoaWNoIHdpbGwgcmVzb2x2ZSB3aGVuIGFzeW5jaHJvbm91cyBhY3Rpdml0eVxuICAvLyBpcyBmaW5pc2hlZC4gVGhpcyB3aWxsIGJlIGNvcnJlY3RseSBjb25zdW1lZCBieSB0aGUgTW9jaGEgZnJhbWV3b3JrIHdpdGhcbiAgLy8gaXQoJy4uLicsIGFzeW5jKG15Rm4pKTsgb3IgY2FuIGJlIHVzZWQgaW4gYSBjdXN0b20gZnJhbWV3b3JrLlxuICAvLyBOb3QgdXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dCBwYXNzZWQgZnJvbSBjYWxsIHNpdGVcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGZpbmlzaENhbGxiYWNrLCBmYWlsQ2FsbGJhY2spID0+IHtcbiAgICAgIHJ1bkluVGVzdFpvbmUoZm4sIHRoaXMsIGZpbmlzaENhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBydW5JblRlc3Rab25lKFxuICAgIGZuOiBGdW5jdGlvbiwgY29udGV4dDogYW55LCBmaW5pc2hDYWxsYmFjazogRnVuY3Rpb24sIGZhaWxDYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgY29uc3QgY3VycmVudFpvbmUgPSBab25lLmN1cnJlbnQ7XG4gIGNvbnN0IEFzeW5jVGVzdFpvbmVTcGVjID0gKFpvbmUgYXMgYW55KVsnQXN5bmNUZXN0Wm9uZVNwZWMnXTtcbiAgaWYgKEFzeW5jVGVzdFpvbmVTcGVjID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdBc3luY1Rlc3Rab25lU3BlYyBpcyBuZWVkZWQgZm9yIHRoZSBhc3luYygpIHRlc3QgaGVscGVyIGJ1dCBjb3VsZCBub3QgYmUgZm91bmQuICcgK1xuICAgICAgICAnUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgZW52aXJvbm1lbnQgaW5jbHVkZXMgem9uZS5qcy9kaXN0L2FzeW5jLXRlc3QuanMnKTtcbiAgfVxuICBjb25zdCBQcm94eVpvbmVTcGVjID0gKFpvbmUgYXMgYW55KVsnUHJveHlab25lU3BlYyddIGFzIHtcbiAgICBnZXQoKToge3NldERlbGVnYXRlKHNwZWM6IFpvbmVTcGVjKTogdm9pZDsgZ2V0RGVsZWdhdGUoKTogWm9uZVNwZWM7fTtcbiAgICBhc3NlcnRQcmVzZW50OiAoKSA9PiB2b2lkO1xuICB9O1xuICBpZiAoUHJveHlab25lU3BlYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUHJveHlab25lU3BlYyBpcyBuZWVkZWQgZm9yIHRoZSBhc3luYygpIHRlc3QgaGVscGVyIGJ1dCBjb3VsZCBub3QgYmUgZm91bmQuICcgK1xuICAgICAgICAnUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgZW52aXJvbm1lbnQgaW5jbHVkZXMgem9uZS5qcy9kaXN0L3Byb3h5LmpzJyk7XG4gIH1cbiAgY29uc3QgcHJveHlab25lU3BlYyA9IFByb3h5Wm9uZVNwZWMuZ2V0KCk7XG4gIFByb3h5Wm9uZVNwZWMuYXNzZXJ0UHJlc2VudCgpO1xuICAvLyBXZSBuZWVkIHRvIGNyZWF0ZSB0aGUgQXN5bmNUZXN0Wm9uZVNwZWMgb3V0c2lkZSB0aGUgUHJveHlab25lLlxuICAvLyBJZiB3ZSBkbyBpdCBpbiBQcm94eVpvbmUgdGhlbiB3ZSB3aWxsIGdldCB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gIGNvbnN0IHByb3h5Wm9uZSA9IFpvbmUuY3VycmVudC5nZXRab25lV2l0aCgnUHJveHlab25lU3BlYycpO1xuICBjb25zdCBwcmV2aW91c0RlbGVnYXRlID0gcHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpO1xuICBwcm94eVpvbmUgIS5wYXJlbnQgIS5ydW4oKCkgPT4ge1xuICAgIGNvbnN0IHRlc3Rab25lU3BlYzogWm9uZVNwZWMgPSBuZXcgQXN5bmNUZXN0Wm9uZVNwZWMoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBOZWVkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHpvbmUuXG4gICAgICAgICAgY3VycmVudFpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm94eVpvbmVTcGVjLmdldERlbGVnYXRlKCkgPT0gdGVzdFpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIHpvbmUgc3BlYyBpZiBpdCdzIHNpbGwgdGhpcyBvbmUuIE90aGVyd2lzZSwgYXNzdW1lIGl0J3MgT0suXG4gICAgICAgICAgICAgIHByb3h5Wm9uZVNwZWMuc2V0RGVsZWdhdGUocHJldmlvdXNEZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIE5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgem9uZS5cbiAgICAgICAgICBjdXJyZW50Wm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3h5Wm9uZVNwZWMuZ2V0RGVsZWdhdGUoKSA9PSB0ZXN0Wm9uZVNwZWMpIHtcbiAgICAgICAgICAgICAgLy8gT25seSByZXNldCB0aGUgem9uZSBzcGVjIGlmIGl0J3Mgc2lsbCB0aGlzIG9uZS4gT3RoZXJ3aXNlLCBhc3N1bWUgaXQncyBPSy5cbiAgICAgICAgICAgICAgcHJveHlab25lU3BlYy5zZXREZWxlZ2F0ZShwcmV2aW91c0RlbGVnYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZhaWxDYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgICd0ZXN0Jyk7XG4gICAgcHJveHlab25lU3BlYy5zZXREZWxlZ2F0ZSh0ZXN0Wm9uZVNwZWMpO1xuICB9KTtcbiAgcmV0dXJuIFpvbmUuY3VycmVudC5ydW5HdWFyZGVkKGZuLCBjb250ZXh0KTtcbn1cbiJdfQ==
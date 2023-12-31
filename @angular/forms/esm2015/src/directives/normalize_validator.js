/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives/normalize_validator.ts
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
 * @param {?} validator
 * @return {?}
 */
export function normalizeValidator(validator) {
    if (((/** @type {?} */ (validator))).validate) {
        return (/**
         * @param {?} c
         * @return {?}
         */
        (c) => ((/** @type {?} */ (validator))).validate(c));
    }
    else {
        return (/** @type {?} */ (validator));
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
export function normalizeAsyncValidator(validator) {
    if (((/** @type {?} */ (validator))).validate) {
        return (/**
         * @param {?} c
         * @return {?}
         */
        (c) => ((/** @type {?} */ (validator))).validate(c));
    }
    else {
        return (/** @type {?} */ (validator));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplX3ZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25vcm1hbGl6ZV92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxTQUFrQztJQUNuRSxJQUFJLENBQUMsbUJBQVcsU0FBUyxFQUFBLENBQUMsQ0FBQyxRQUFRLEVBQUU7UUFDbkM7Ozs7UUFBTyxDQUFDLENBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsbUJBQVcsU0FBUyxFQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUM7S0FDbkU7U0FBTTtRQUNMLE9BQU8sbUJBQWEsU0FBUyxFQUFBLENBQUM7S0FDL0I7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxTQUE0QztJQUVsRixJQUFJLENBQUMsbUJBQWdCLFNBQVMsRUFBQSxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQ3hDOzs7O1FBQU8sQ0FBQyxDQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLG1CQUFnQixTQUFTLEVBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQztLQUN4RTtTQUFNO1FBQ0wsT0FBTyxtQkFBa0IsU0FBUyxFQUFBLENBQUM7S0FDcEM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbGlkYXRvcih2YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yKTogVmFsaWRhdG9yRm4ge1xuICBpZiAoKDxWYWxpZGF0b3I+dmFsaWRhdG9yKS52YWxpZGF0ZSkge1xuICAgIHJldHVybiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiAoPFZhbGlkYXRvcj52YWxpZGF0b3IpLnZhbGlkYXRlKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8VmFsaWRhdG9yRm4+dmFsaWRhdG9yO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBc3luY1ZhbGlkYXRvcih2YWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvcik6XG4gICAgQXN5bmNWYWxpZGF0b3JGbiB7XG4gIGlmICgoPEFzeW5jVmFsaWRhdG9yPnZhbGlkYXRvcikudmFsaWRhdGUpIHtcbiAgICByZXR1cm4gKGM6IEFic3RyYWN0Q29udHJvbCkgPT4gKDxBc3luY1ZhbGlkYXRvcj52YWxpZGF0b3IpLnZhbGlkYXRlKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8QXN5bmNWYWxpZGF0b3JGbj52YWxpZGF0b3I7XG4gIH1cbn1cbiJdfQ==
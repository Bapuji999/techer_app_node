/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/node_manipulation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ViewEncapsulation } from '../metadata/view';
import { addToArray, removeFromArray } from '../util/array_utils';
import { assertDefined, assertDomNode, assertEqual, assertString } from '../util/assert';
import { assertLContainer, assertLView, assertTNodeForLView } from './assert';
import { attachPatchData } from './context_discovery';
import { ACTIVE_INDEX, CONTAINER_HEADER_OFFSET, MOVED_VIEWS, NATIVE, unusedValueExportToPlacateAjd as unused1 } from './interfaces/container';
import { NodeInjectorFactory } from './interfaces/injector';
import { unusedValueExportToPlacateAjd as unused2 } from './interfaces/node';
import { unusedValueExportToPlacateAjd as unused3 } from './interfaces/projection';
import { isProceduralRenderer, unusedValueExportToPlacateAjd as unused4 } from './interfaces/renderer';
import { isLContainer, isLView } from './interfaces/type_checks';
import { CHILD_HEAD, CLEANUP, DECLARATION_COMPONENT_VIEW, DECLARATION_LCONTAINER, FLAGS, HOST, NEXT, PARENT, QUERIES, RENDERER, TVIEW, T_HOST, unusedValueExportToPlacateAjd as unused5 } from './interfaces/view';
import { assertNodeOfPossibleTypes, assertNodeType } from './node_assert';
import { getLViewParent } from './util/view_traversal_utils';
import { getNativeByTNode, unwrapRNode } from './util/view_utils';
/** @type {?} */
const unusedValueToPlacateAjd = unused1 + unused2 + unused3 + unused4 + unused5;
/**
 * @param {?} tNode
 * @param {?} embeddedView
 * @return {?}
 */
export function getLContainer(tNode, embeddedView) {
    ngDevMode && assertLView(embeddedView);
    /** @type {?} */
    const container = (/** @type {?} */ (embeddedView[PARENT]));
    if (tNode.index === -1) {
        // This is a dynamically created view inside a dynamic container.
        // The parent isn't an LContainer if the embedded view hasn't been attached yet.
        return isLContainer(container) ? container : null;
    }
    else {
        ngDevMode && assertLContainer(container);
        // This is a inline view node (e.g. embeddedViewStart)
        return container;
    }
}
/**
 * Retrieves render parent for a given view.
 * Might be null if a view is not yet attached to any container.
 * @param {?} tViewNode
 * @param {?} view
 * @return {?}
 */
export function getContainerRenderParent(tViewNode, view) {
    /** @type {?} */
    const container = getLContainer(tViewNode, view);
    return container ? nativeParentNode(view[RENDERER], container[NATIVE]) : null;
}
/** @enum {number} */
const WalkTNodeTreeAction = {
    /** node create in the native environment. Run on initial creation. */
    Create: 0,
    /**
     * node insert in the native environment.
     * Run when existing node has been detached and needs to be re-attached.
     */
    Insert: 1,
    /** node detach from the native environment */
    Detach: 2,
    /** node destruction using the renderer's API */
    Destroy: 3,
};
/**
 * NOTE: for performance reasons, the possible actions are inlined within the function instead of
 * being passed as an argument.
 * @param {?} action
 * @param {?} renderer
 * @param {?} parent
 * @param {?} lNodeToHandle
 * @param {?=} beforeNode
 * @return {?}
 */
function applyToElementOrContainer(action, renderer, parent, lNodeToHandle, beforeNode) {
    // If this slot was allocated for a text node dynamically created by i18n, the text node itself
    // won't be created until i18nApply() in the update block, so this node should be skipped.
    // For more info, see "ICU expressions should work inside an ngTemplateOutlet inside an ngFor"
    // in `i18n_spec.ts`.
    if (lNodeToHandle != null) {
        /** @type {?} */
        let lContainer;
        /** @type {?} */
        let isComponent = false;
        // We are expecting an RNode, but in the case of a component or LContainer the `RNode` is
        // wrapped in an array which needs to be unwrapped. We need to know if it is a component and if
        // it has LContainer so that we can process all of those cases appropriately.
        if (isLContainer(lNodeToHandle)) {
            lContainer = lNodeToHandle;
        }
        else if (isLView(lNodeToHandle)) {
            isComponent = true;
            ngDevMode && assertDefined(lNodeToHandle[HOST], 'HOST must be defined for a component LView');
            lNodeToHandle = (/** @type {?} */ (lNodeToHandle[HOST]));
        }
        /** @type {?} */
        const rNode = unwrapRNode(lNodeToHandle);
        ngDevMode && !isProceduralRenderer(renderer) && assertDomNode(rNode);
        if (action === 0 /* Create */ && parent !== null) {
            if (beforeNode == null) {
                nativeAppendChild(renderer, parent, rNode);
            }
            else {
                nativeInsertBefore(renderer, parent, rNode, beforeNode || null);
            }
        }
        else if (action === 1 /* Insert */ && parent !== null) {
            nativeInsertBefore(renderer, parent, rNode, beforeNode || null);
        }
        else if (action === 2 /* Detach */) {
            nativeRemoveNode(renderer, rNode, isComponent);
        }
        else if (action === 3 /* Destroy */) {
            ngDevMode && ngDevMode.rendererDestroyNode++;
            (/** @type {?} */ (((/** @type {?} */ (renderer))).destroyNode))(rNode);
        }
        if (lContainer != null) {
            applyContainer(renderer, action, lContainer, parent, beforeNode);
        }
    }
}
/**
 * @param {?} value
 * @param {?} renderer
 * @return {?}
 */
export function createTextNode(value, renderer) {
    ngDevMode && ngDevMode.rendererCreateTextNode++;
    ngDevMode && ngDevMode.rendererSetText++;
    return isProceduralRenderer(renderer) ? renderer.createText(value) :
        renderer.createTextNode(value);
}
/**
 * @param {?} tView
 * @param {?} lView
 * @param {?} insertMode
 * @param {?} beforeNode
 * @return {?}
 */
export function addRemoveViewFromContainer(tView, lView, insertMode, beforeNode) {
    /** @type {?} */
    const renderParent = getContainerRenderParent((/** @type {?} */ (tView.node)), lView);
    ngDevMode && assertNodeType((/** @type {?} */ (tView.node)), 2 /* View */);
    if (renderParent) {
        /** @type {?} */
        const renderer = lView[RENDERER];
        /** @type {?} */
        const action = insertMode ? 1 /* Insert */ : 2 /* Detach */;
        applyView(tView, lView, renderer, action, renderParent, beforeNode);
    }
}
/**
 * Detach a `LView` from the DOM by detaching its nodes.
 *
 * @param {?} tView The `TView' of the `LView` to be detached
 * @param {?} lView the `LView` to be detached.
 * @return {?}
 */
export function renderDetachView(tView, lView) {
    applyView(tView, lView, lView[RENDERER], 2 /* Detach */, null, null);
}
/**
 * Traverses down and up the tree of views and containers to remove listeners and
 * call onDestroy callbacks.
 *
 * Notes:
 *  - Because it's used for onDestroy calls, it needs to be bottom-up.
 *  - Must process containers instead of their views to avoid splicing
 *  when views are destroyed and re-added.
 *  - Using a while loop because it's faster than recursion
 *  - Destroy only called on movement to sibling or movement to parent (laterally or up)
 *
 * @param {?} rootView The view to destroy
 * @return {?}
 */
export function destroyViewTree(rootView) {
    // If the view has no children, we can clean it up and return early.
    /** @type {?} */
    let lViewOrLContainer = rootView[CHILD_HEAD];
    if (!lViewOrLContainer) {
        return cleanUpView(rootView[TVIEW], rootView);
    }
    while (lViewOrLContainer) {
        /** @type {?} */
        let next = null;
        if (isLView(lViewOrLContainer)) {
            // If LView, traverse down to child.
            next = lViewOrLContainer[CHILD_HEAD];
        }
        else {
            ngDevMode && assertLContainer(lViewOrLContainer);
            // If container, traverse down to its first LView.
            /** @type {?} */
            const firstView = lViewOrLContainer[CONTAINER_HEADER_OFFSET];
            if (firstView)
                next = firstView;
        }
        if (!next) {
            // Only clean up view when moving to the side or up, as destroy hooks
            // should be called in order from the bottom up.
            while (lViewOrLContainer && !(/** @type {?} */ (lViewOrLContainer))[NEXT] && lViewOrLContainer !== rootView) {
                isLView(lViewOrLContainer) && cleanUpView(lViewOrLContainer[TVIEW], lViewOrLContainer);
                lViewOrLContainer = getParentState(lViewOrLContainer, rootView);
            }
            if (lViewOrLContainer === null)
                lViewOrLContainer = rootView;
            isLView(lViewOrLContainer) && cleanUpView(lViewOrLContainer[TVIEW], lViewOrLContainer);
            next = lViewOrLContainer && (/** @type {?} */ (lViewOrLContainer))[NEXT];
        }
        lViewOrLContainer = next;
    }
}
/**
 * Inserts a view into a container.
 *
 * This adds the view to the container's array of active views in the correct
 * position. It also adds the view's elements to the DOM if the container isn't a
 * root node of another view (in that case, the view's elements will be added when
 * the container's parent view is added later).
 *
 * @param {?} tView The `TView' of the `LView` to insert
 * @param {?} lView The view to insert
 * @param {?} lContainer The container into which the view should be inserted
 * @param {?} index Which index in the container to insert the child view into
 * @return {?}
 */
export function insertView(tView, lView, lContainer, index) {
    ngDevMode && assertLView(lView);
    ngDevMode && assertLContainer(lContainer);
    /** @type {?} */
    const indexInContainer = CONTAINER_HEADER_OFFSET + index;
    /** @type {?} */
    const containerLength = lContainer.length;
    if (index > 0) {
        // This is a new view, we need to add it to the children.
        lContainer[indexInContainer - 1][NEXT] = lView;
    }
    if (index < containerLength - CONTAINER_HEADER_OFFSET) {
        lView[NEXT] = lContainer[indexInContainer];
        addToArray(lContainer, CONTAINER_HEADER_OFFSET + index, lView);
    }
    else {
        lContainer.push(lView);
        lView[NEXT] = null;
    }
    lView[PARENT] = lContainer;
    // track views where declaration and insertion points are different
    /** @type {?} */
    const declarationLContainer = lView[DECLARATION_LCONTAINER];
    if (declarationLContainer !== null && lContainer !== declarationLContainer) {
        trackMovedView(declarationLContainer, lView);
    }
    // notify query that a new view has been added
    /** @type {?} */
    const lQueries = lView[QUERIES];
    if (lQueries !== null) {
        lQueries.insertView(tView);
    }
    // Sets the attached flag
    lView[FLAGS] |= 128 /* Attached */;
}
/**
 * Track views created from the declaration container (TemplateRef) and inserted into a
 * different LContainer.
 * @param {?} declarationContainer
 * @param {?} lView
 * @return {?}
 */
function trackMovedView(declarationContainer, lView) {
    ngDevMode && assertDefined(lView, 'LView required');
    ngDevMode && assertLContainer(declarationContainer);
    /** @type {?} */
    const movedViews = declarationContainer[MOVED_VIEWS];
    /** @type {?} */
    const insertedLContainer = (/** @type {?} */ (lView[PARENT]));
    ngDevMode && assertLContainer(insertedLContainer);
    /** @type {?} */
    const insertedComponentLView = (/** @type {?} */ (insertedLContainer[PARENT]))[DECLARATION_COMPONENT_VIEW];
    ngDevMode && assertDefined(insertedComponentLView, 'Missing insertedComponentLView');
    /** @type {?} */
    const insertedComponentIsOnPush = (insertedComponentLView[FLAGS] & 16 /* CheckAlways */) !== 16 /* CheckAlways */;
    if (insertedComponentIsOnPush) {
        /** @type {?} */
        const declaredComponentLView = lView[DECLARATION_COMPONENT_VIEW];
        ngDevMode && assertDefined(declaredComponentLView, 'Missing declaredComponentLView');
        if (declaredComponentLView !== insertedComponentLView) {
            // At this point the declaration-component is not same as insertion-component and we are in
            // on-push mode, this means that this is a transplanted view. Mark the declared lView as
            // having
            // transplanted views so that those views can participate in CD.
            declarationContainer[ACTIVE_INDEX] |= 1 /* HAS_TRANSPLANTED_VIEWS */;
        }
    }
    if (movedViews === null) {
        declarationContainer[MOVED_VIEWS] = [lView];
    }
    else {
        movedViews.push(lView);
    }
}
/**
 * @param {?} declarationContainer
 * @param {?} lView
 * @return {?}
 */
function detachMovedView(declarationContainer, lView) {
    ngDevMode && assertLContainer(declarationContainer);
    ngDevMode && assertDefined(declarationContainer[MOVED_VIEWS], 'A projected view should belong to a non-empty projected views collection');
    /** @type {?} */
    const movedViews = (/** @type {?} */ (declarationContainer[MOVED_VIEWS]));
    /** @type {?} */
    const declaredViewIndex = movedViews.indexOf(lView);
    movedViews.splice(declaredViewIndex, 1);
}
/**
 * Detaches a view from a container.
 *
 * This method removes the view from the container's array of active views. It also
 * removes the view's elements from the DOM.
 *
 * @param {?} lContainer The container from which to detach a view
 * @param {?} removeIndex The index of the view to detach
 * @return {?} Detached LView instance.
 */
export function detachView(lContainer, removeIndex) {
    if (lContainer.length <= CONTAINER_HEADER_OFFSET)
        return;
    /** @type {?} */
    const indexInContainer = CONTAINER_HEADER_OFFSET + removeIndex;
    /** @type {?} */
    const viewToDetach = lContainer[indexInContainer];
    if (viewToDetach) {
        /** @type {?} */
        const declarationLContainer = viewToDetach[DECLARATION_LCONTAINER];
        if (declarationLContainer !== null && declarationLContainer !== lContainer) {
            detachMovedView(declarationLContainer, viewToDetach);
        }
        if (removeIndex > 0) {
            lContainer[indexInContainer - 1][NEXT] = (/** @type {?} */ (viewToDetach[NEXT]));
        }
        /** @type {?} */
        const removedLView = removeFromArray(lContainer, CONTAINER_HEADER_OFFSET + removeIndex);
        addRemoveViewFromContainer(viewToDetach[TVIEW], viewToDetach, false, null);
        // notify query that a view has been removed
        /** @type {?} */
        const lQueries = removedLView[QUERIES];
        if (lQueries !== null) {
            lQueries.detachView(removedLView[TVIEW]);
        }
        viewToDetach[PARENT] = null;
        viewToDetach[NEXT] = null;
        // Unsets the attached flag
        viewToDetach[FLAGS] &= ~128 /* Attached */;
    }
    return viewToDetach;
}
/**
 * Removes a view from a container, i.e. detaches it and then destroys the underlying LView.
 *
 * @param {?} lContainer The container from which to remove a view
 * @param {?} removeIndex The index of the view to remove
 * @return {?}
 */
export function removeView(lContainer, removeIndex) {
    /** @type {?} */
    const detachedView = detachView(lContainer, removeIndex);
    detachedView && destroyLView(detachedView[TVIEW], detachedView);
}
/**
 * A standalone function which destroys an LView,
 * conducting clean up (e.g. removing listeners, calling onDestroys).
 *
 * @param {?} tView The `TView' of the `LView` to be destroyed
 * @param {?} lView The view to be destroyed.
 * @return {?}
 */
export function destroyLView(tView, lView) {
    if (!(lView[FLAGS] & 256 /* Destroyed */)) {
        /** @type {?} */
        const renderer = lView[RENDERER];
        if (isProceduralRenderer(renderer) && renderer.destroyNode) {
            applyView(tView, lView, renderer, 3 /* Destroy */, null, null);
        }
        destroyViewTree(lView);
    }
}
/**
 * Determines which LViewOrLContainer to jump to when traversing back up the
 * tree in destroyViewTree.
 *
 * Normally, the view's parent LView should be checked, but in the case of
 * embedded views, the container (which is the view node's parent, but not the
 * LView's parent) needs to be checked for a possible next property.
 *
 * @param {?} lViewOrLContainer The LViewOrLContainer for which we need a parent state
 * @param {?} rootView The rootView, so we don't propagate too far up the view tree
 * @return {?} The correct parent LViewOrLContainer
 */
export function getParentState(lViewOrLContainer, rootView) {
    /** @type {?} */
    let tNode;
    if (isLView(lViewOrLContainer) && (tNode = lViewOrLContainer[T_HOST]) &&
        tNode.type === 2 /* View */) {
        // if it's an embedded view, the state needs to go up to the container, in case the
        // container has a next
        return getLContainer((/** @type {?} */ (tNode)), lViewOrLContainer);
    }
    else {
        // otherwise, use parent view for containers or component views
        return lViewOrLContainer[PARENT] === rootView ? null : lViewOrLContainer[PARENT];
    }
}
/**
 * Calls onDestroys hooks for all directives and pipes in a given view and then removes all
 * listeners. Listeners are removed as the last step so events delivered in the onDestroys hooks
 * can be propagated to \@Output listeners.
 *
 * @param {?} tView `TView` for the `LView` to clean up.
 * @param {?} lView The LView to clean up
 * @return {?}
 */
function cleanUpView(tView, lView) {
    if (!(lView[FLAGS] & 256 /* Destroyed */)) {
        // Usually the Attached flag is removed when the view is detached from its parent, however
        // if it's a root view, the flag won't be unset hence why we're also removing on destroy.
        lView[FLAGS] &= ~128 /* Attached */;
        // Mark the LView as destroyed *before* executing the onDestroy hooks. An onDestroy hook
        // runs arbitrary user code, which could include its own `viewRef.destroy()` (or similar). If
        // We don't flag the view as destroyed before the hooks, this could lead to an infinite loop.
        // This also aligns with the ViewEngine behavior. It also means that the onDestroy hook is
        // really more of an "afterDestroy" hook if you think about it.
        lView[FLAGS] |= 256 /* Destroyed */;
        executeOnDestroys(tView, lView);
        removeListeners(tView, lView);
        /** @type {?} */
        const hostTNode = lView[T_HOST];
        // For component views only, the local renderer is destroyed as clean up time.
        if (hostTNode && hostTNode.type === 3 /* Element */ &&
            isProceduralRenderer(lView[RENDERER])) {
            ngDevMode && ngDevMode.rendererDestroy++;
            ((/** @type {?} */ (lView[RENDERER]))).destroy();
        }
        /** @type {?} */
        const declarationContainer = lView[DECLARATION_LCONTAINER];
        // we are dealing with an embedded view that is still inserted into a container
        if (declarationContainer !== null && isLContainer(lView[PARENT])) {
            // and this is a projected view
            if (declarationContainer !== lView[PARENT]) {
                detachMovedView(declarationContainer, lView);
            }
            // For embedded views still attached to a container: remove query result from this view.
            /** @type {?} */
            const lQueries = lView[QUERIES];
            if (lQueries !== null) {
                lQueries.detachView(tView);
            }
        }
    }
}
/**
 * Removes listeners and unsubscribes from output subscriptions
 * @param {?} tView
 * @param {?} lView
 * @return {?}
 */
function removeListeners(tView, lView) {
    /** @type {?} */
    const tCleanup = tView.cleanup;
    if (tCleanup !== null) {
        /** @type {?} */
        const lCleanup = (/** @type {?} */ (lView[CLEANUP]));
        for (let i = 0; i < tCleanup.length - 1; i += 2) {
            if (typeof tCleanup[i] === 'string') {
                // This is a native DOM listener
                /** @type {?} */
                const idxOrTargetGetter = tCleanup[i + 1];
                /** @type {?} */
                const target = typeof idxOrTargetGetter === 'function' ?
                    idxOrTargetGetter(lView) :
                    unwrapRNode(lView[idxOrTargetGetter]);
                /** @type {?} */
                const listener = lCleanup[tCleanup[i + 2]];
                /** @type {?} */
                const useCaptureOrSubIdx = tCleanup[i + 3];
                if (typeof useCaptureOrSubIdx === 'boolean') {
                    // native DOM listener registered with Renderer3
                    target.removeEventListener(tCleanup[i], listener, useCaptureOrSubIdx);
                }
                else {
                    if (useCaptureOrSubIdx >= 0) {
                        // unregister
                        lCleanup[useCaptureOrSubIdx]();
                    }
                    else {
                        // Subscription
                        lCleanup[-useCaptureOrSubIdx].unsubscribe();
                    }
                }
                i += 2;
            }
            else {
                // This is a cleanup function that is grouped with the index of its context
                /** @type {?} */
                const context = lCleanup[tCleanup[i + 1]];
                tCleanup[i].call(context);
            }
        }
        lView[CLEANUP] = null;
    }
}
/**
 * Calls onDestroy hooks for this view
 * @param {?} tView
 * @param {?} lView
 * @return {?}
 */
function executeOnDestroys(tView, lView) {
    /** @type {?} */
    let destroyHooks;
    if (tView != null && (destroyHooks = tView.destroyHooks) != null) {
        for (let i = 0; i < destroyHooks.length; i += 2) {
            /** @type {?} */
            const context = lView[(/** @type {?} */ (destroyHooks[i]))];
            // Only call the destroy hook if the context has been requested.
            if (!(context instanceof NodeInjectorFactory)) {
                ((/** @type {?} */ (destroyHooks[i + 1]))).call(context);
            }
        }
    }
}
/**
 * Returns a native element if a node can be inserted into the given parent.
 *
 * There are two reasons why we may not be able to insert a element immediately.
 * - Projection: When creating a child content element of a component, we have to skip the
 *   insertion because the content of a component will be projected.
 *   `<component><content>delayed due to projection</content></component>`
 * - Parent container is disconnected: This can happen when we are inserting a view into
 *   parent container, which itself is disconnected. For example the parent container is part
 *   of a View which has not be inserted or is made for projection but has not been inserted
 *   into destination.
 * @param {?} tView
 * @param {?} tNode
 * @param {?} currentView
 * @return {?}
 */
function getRenderParent(tView, tNode, currentView) {
    // Skip over element and ICU containers as those are represented by a comment node and
    // can't be used as a render parent.
    /** @type {?} */
    let parentTNode = tNode.parent;
    while (parentTNode != null && (parentTNode.type === 4 /* ElementContainer */ ||
        parentTNode.type === 5 /* IcuContainer */)) {
        tNode = parentTNode;
        parentTNode = tNode.parent;
    }
    // If the parent tNode is null, then we are inserting across views: either into an embedded view
    // or a component view.
    if (parentTNode == null) {
        /** @type {?} */
        const hostTNode = (/** @type {?} */ (currentView[T_HOST]));
        if (hostTNode.type === 2 /* View */) {
            // We are inserting a root element of an embedded view We might delay insertion of children
            // for a given view if it is disconnected. This might happen for 2 main reasons:
            // - view is not inserted into any container(view was created but not inserted yet)
            // - view is inserted into a container but the container itself is not inserted into the DOM
            // (container might be part of projection or child of a view that is not inserted yet).
            // In other words we can insert children of a given view if this view was inserted into a
            // container and the container itself has its render parent determined.
            return getContainerRenderParent((/** @type {?} */ (hostTNode)), currentView);
        }
        else {
            // We are inserting a root element of the component view into the component host element and
            // it should always be eager.
            ngDevMode && assertNodeOfPossibleTypes(hostTNode, 3 /* Element */);
            return currentView[HOST];
        }
    }
    else {
        /** @type {?} */
        const isIcuCase = tNode && tNode.type === 5 /* IcuContainer */;
        // If the parent of this node is an ICU container, then it is represented by comment node and we
        // need to use it as an anchor. If it is projected then it's direct parent node is the renderer.
        if (isIcuCase && tNode.flags & 4 /* isProjected */) {
            return (/** @type {?} */ (getNativeByTNode(tNode, currentView).parentNode));
        }
        ngDevMode && assertNodeType(parentTNode, 3 /* Element */);
        if (parentTNode.flags & 2 /* isComponentHost */) {
            /** @type {?} */
            const tData = tView.data;
            /** @type {?} */
            const tNode = (/** @type {?} */ (tData[parentTNode.index]));
            /** @type {?} */
            const encapsulation = ((/** @type {?} */ (tData[tNode.directiveStart]))).encapsulation;
            // We've got a parent which is an element in the current view. We just need to verify if the
            // parent element is not a component. Component's content nodes are not inserted immediately
            // because they will be projected, and so doing insert at this point would be wasteful.
            // Since the projection would then move it to its final destination. Note that we can't
            // make this assumption when using the Shadow DOM, because the native projection placeholders
            // (<content> or <slot>) have to be in place as elements are being inserted.
            if (encapsulation !== ViewEncapsulation.ShadowDom &&
                encapsulation !== ViewEncapsulation.Native) {
                return null;
            }
        }
        return (/** @type {?} */ (getNativeByTNode(parentTNode, currentView)));
    }
}
/**
 * Inserts a native node before another native node for a given parent using {\@link Renderer3}.
 * This is a utility function that can be used when native nodes were determined - it abstracts an
 * actual renderer being used.
 * @param {?} renderer
 * @param {?} parent
 * @param {?} child
 * @param {?} beforeNode
 * @return {?}
 */
export function nativeInsertBefore(renderer, parent, child, beforeNode) {
    ngDevMode && ngDevMode.rendererInsertBefore++;
    if (isProceduralRenderer(renderer)) {
        renderer.insertBefore(parent, child, beforeNode);
    }
    else {
        parent.insertBefore(child, beforeNode, true);
    }
}
/**
 * @param {?} renderer
 * @param {?} parent
 * @param {?} child
 * @return {?}
 */
function nativeAppendChild(renderer, parent, child) {
    ngDevMode && ngDevMode.rendererAppendChild++;
    ngDevMode && assertDefined(parent, 'parent node must be defined');
    if (isProceduralRenderer(renderer)) {
        renderer.appendChild(parent, child);
    }
    else {
        parent.appendChild(child);
    }
}
/**
 * @param {?} renderer
 * @param {?} parent
 * @param {?} child
 * @param {?} beforeNode
 * @return {?}
 */
function nativeAppendOrInsertBefore(renderer, parent, child, beforeNode) {
    if (beforeNode !== null) {
        nativeInsertBefore(renderer, parent, child, beforeNode);
    }
    else {
        nativeAppendChild(renderer, parent, child);
    }
}
/**
 * Removes a node from the DOM given its native parent.
 * @param {?} renderer
 * @param {?} parent
 * @param {?} child
 * @param {?=} isHostElement
 * @return {?}
 */
function nativeRemoveChild(renderer, parent, child, isHostElement) {
    if (isProceduralRenderer(renderer)) {
        renderer.removeChild(parent, child, isHostElement);
    }
    else {
        parent.removeChild(child);
    }
}
/**
 * Returns a native parent of a given native node.
 * @param {?} renderer
 * @param {?} node
 * @return {?}
 */
export function nativeParentNode(renderer, node) {
    return (/** @type {?} */ ((isProceduralRenderer(renderer) ? renderer.parentNode(node) : node.parentNode)));
}
/**
 * Returns a native sibling of a given native node.
 * @param {?} renderer
 * @param {?} node
 * @return {?}
 */
export function nativeNextSibling(renderer, node) {
    return isProceduralRenderer(renderer) ? renderer.nextSibling(node) : node.nextSibling;
}
/**
 * Finds a native "anchor" node for cases where we can't append a native child directly
 * (`appendChild`) and need to use a reference (anchor) node for the `insertBefore` operation.
 * @param {?} parentTNode
 * @param {?} lView
 * @return {?}
 */
function getNativeAnchorNode(parentTNode, lView) {
    if (parentTNode.type === 2 /* View */) {
        /** @type {?} */
        const lContainer = getLContainer((/** @type {?} */ (parentTNode)), lView);
        if (lContainer === null)
            return null;
        /** @type {?} */
        const index = lContainer.indexOf(lView, CONTAINER_HEADER_OFFSET) - CONTAINER_HEADER_OFFSET;
        return getBeforeNodeForView(index, lContainer);
    }
    else if (parentTNode.type === 4 /* ElementContainer */ ||
        parentTNode.type === 5 /* IcuContainer */) {
        return getNativeByTNode(parentTNode, lView);
    }
    return null;
}
/**
 * Appends the `child` native node (or a collection of nodes) to the `parent`.
 *
 * The element insertion might be delayed {\@link canInsertNativeNode}.
 *
 * @param {?} tView The `TView' to be appended
 * @param {?} lView The current LView
 * @param {?} childEl The native child (or children) that should be appended
 * @param {?} childTNode The TNode of the child element
 * @return {?} Whether or not the child was appended
 */
export function appendChild(tView, lView, childEl, childTNode) {
    /** @type {?} */
    const renderParent = getRenderParent(tView, childTNode, lView);
    if (renderParent != null) {
        /** @type {?} */
        const renderer = lView[RENDERER];
        /** @type {?} */
        const parentTNode = childTNode.parent || (/** @type {?} */ (lView[T_HOST]));
        /** @type {?} */
        const anchorNode = getNativeAnchorNode(parentTNode, lView);
        if (Array.isArray(childEl)) {
            for (let i = 0; i < childEl.length; i++) {
                nativeAppendOrInsertBefore(renderer, renderParent, childEl[i], anchorNode);
            }
        }
        else {
            nativeAppendOrInsertBefore(renderer, renderParent, childEl, anchorNode);
        }
    }
}
/**
 * Returns the first native node for a given LView, starting from the provided TNode.
 *
 * Native nodes are returned in the order in which those appear in the native tree (DOM).
 * @param {?} lView
 * @param {?} tNode
 * @return {?}
 */
function getFirstNativeNode(lView, tNode) {
    if (tNode !== null) {
        ngDevMode && assertNodeOfPossibleTypes(tNode, 3 /* Element */, 0 /* Container */, 4 /* ElementContainer */, 5 /* IcuContainer */, 1 /* Projection */);
        /** @type {?} */
        const tNodeType = tNode.type;
        if (tNodeType === 3 /* Element */) {
            return getNativeByTNode(tNode, lView);
        }
        else if (tNodeType === 0 /* Container */) {
            return getBeforeNodeForView(-1, lView[tNode.index]);
        }
        else if (tNodeType === 4 /* ElementContainer */ || tNodeType === 5 /* IcuContainer */) {
            /** @type {?} */
            const elIcuContainerChild = tNode.child;
            if (elIcuContainerChild !== null) {
                return getFirstNativeNode(lView, elIcuContainerChild);
            }
            else {
                /** @type {?} */
                const rNodeOrLContainer = lView[tNode.index];
                if (isLContainer(rNodeOrLContainer)) {
                    return getBeforeNodeForView(-1, rNodeOrLContainer);
                }
                else {
                    return unwrapRNode(rNodeOrLContainer);
                }
            }
        }
        else {
            /** @type {?} */
            const componentView = lView[DECLARATION_COMPONENT_VIEW];
            /** @type {?} */
            const componentHost = (/** @type {?} */ (componentView[T_HOST]));
            /** @type {?} */
            const parentView = getLViewParent(componentView);
            /** @type {?} */
            const firstProjectedTNode = ((/** @type {?} */ (componentHost.projection)))[(/** @type {?} */ (tNode.projection))];
            if (firstProjectedTNode != null) {
                return getFirstNativeNode((/** @type {?} */ (parentView)), firstProjectedTNode);
            }
            else {
                return getFirstNativeNode(lView, tNode.next);
            }
        }
    }
    return null;
}
/**
 * @param {?} viewIndexInContainer
 * @param {?} lContainer
 * @return {?}
 */
export function getBeforeNodeForView(viewIndexInContainer, lContainer) {
    /** @type {?} */
    const nextViewIndex = CONTAINER_HEADER_OFFSET + viewIndexInContainer + 1;
    if (nextViewIndex < lContainer.length) {
        /** @type {?} */
        const lView = (/** @type {?} */ (lContainer[nextViewIndex]));
        /** @type {?} */
        const firstTNodeOfView = lView[TVIEW].firstChild;
        if (firstTNodeOfView !== null) {
            return getFirstNativeNode(lView, firstTNodeOfView);
        }
    }
    return lContainer[NATIVE];
}
/**
 * Removes a native node itself using a given renderer. To remove the node we are looking up its
 * parent from the native tree as not all platforms / browsers support the equivalent of
 * node.remove().
 *
 * @param {?} renderer A renderer to be used
 * @param {?} rNode The native node that should be removed
 * @param {?=} isHostElement A flag indicating if a node to be removed is a host of a component.
 * @return {?}
 */
export function nativeRemoveNode(renderer, rNode, isHostElement) {
    /** @type {?} */
    const nativeParent = nativeParentNode(renderer, rNode);
    if (nativeParent) {
        nativeRemoveChild(renderer, nativeParent, rNode, isHostElement);
    }
}
/**
 * Performs the operation of `action` on the node. Typically this involves inserting or removing
 * nodes on the LView or projection boundary.
 * @param {?} renderer
 * @param {?} action
 * @param {?} tNode
 * @param {?} lView
 * @param {?} renderParent
 * @param {?} beforeNode
 * @param {?} isProjection
 * @return {?}
 */
function applyNodes(renderer, action, tNode, lView, renderParent, beforeNode, isProjection) {
    while (tNode != null) {
        ngDevMode && assertTNodeForLView(tNode, lView);
        ngDevMode && assertNodeOfPossibleTypes(tNode, 0 /* Container */, 3 /* Element */, 4 /* ElementContainer */, 1 /* Projection */, 1 /* Projection */, 5 /* IcuContainer */);
        /** @type {?} */
        const rawSlotValue = lView[tNode.index];
        /** @type {?} */
        const tNodeType = tNode.type;
        if (isProjection) {
            if (action === 0 /* Create */) {
                rawSlotValue && attachPatchData(unwrapRNode(rawSlotValue), lView);
                tNode.flags |= 4 /* isProjected */;
            }
        }
        if ((tNode.flags & 64 /* isDetached */) !== 64 /* isDetached */) {
            if (tNodeType === 4 /* ElementContainer */ || tNodeType === 5 /* IcuContainer */) {
                applyNodes(renderer, action, tNode.child, lView, renderParent, beforeNode, false);
                applyToElementOrContainer(action, renderer, renderParent, rawSlotValue, beforeNode);
            }
            else if (tNodeType === 1 /* Projection */) {
                applyProjectionRecursive(renderer, action, lView, (/** @type {?} */ (tNode)), renderParent, beforeNode);
            }
            else {
                ngDevMode && assertNodeOfPossibleTypes(tNode, 3 /* Element */, 0 /* Container */);
                applyToElementOrContainer(action, renderer, renderParent, rawSlotValue, beforeNode);
            }
        }
        tNode = isProjection ? tNode.projectionNext : tNode.next;
    }
}
/**
 * `applyView` performs operation on the view as specified in `action` (insert, detach, destroy)
 *
 * Inserting a view without projection or containers at top level is simple. Just iterate over the
 * root nodes of the View, and for each node perform the `action`.
 *
 * Things get more complicated with containers and projections. That is because coming across:
 * - Container: implies that we have to insert/remove/destroy the views of that container as well
 *              which in turn can have their own Containers at the View roots.
 * - Projection: implies that we have to insert/remove/destroy the nodes of the projection. The
 *               complication is that the nodes we are projecting can themselves have Containers
 *               or other Projections.
 *
 * As you can see this is a very recursive problem. Yes recursion is not most efficient but the
 * code is complicated enough that trying to implemented with recursion becomes unmaintainable.
 *
 * @param {?} tView The `TView' which needs to be inserted, detached, destroyed
 * @param {?} lView The LView which needs to be inserted, detached, destroyed.
 * @param {?} renderer Renderer to use
 * @param {?} action action to perform (insert, detach, destroy)
 * @param {?} renderParent parent DOM element for insertion/removal.
 * @param {?} beforeNode Before which node the insertions should happen.
 * @return {?}
 */
function applyView(tView, lView, renderer, action, renderParent, beforeNode) {
    ngDevMode && assertNodeType((/** @type {?} */ (tView.node)), 2 /* View */);
    /** @type {?} */
    const viewRootTNode = (/** @type {?} */ (tView.node)).child;
    applyNodes(renderer, action, viewRootTNode, lView, renderParent, beforeNode, false);
}
/**
 * `applyProjection` performs operation on the projection.
 *
 * Inserting a projection requires us to locate the projected nodes from the parent component. The
 * complication is that those nodes themselves could be re-projected from their parent component.
 *
 * @param {?} tView The `TView` of `LView` which needs to be inserted, detached, destroyed
 * @param {?} lView The `LView` which needs to be inserted, detached, destroyed.
 * @param {?} tProjectionNode node to project
 * @return {?}
 */
export function applyProjection(tView, lView, tProjectionNode) {
    /** @type {?} */
    const renderer = lView[RENDERER];
    /** @type {?} */
    const renderParent = getRenderParent(tView, tProjectionNode, lView);
    /** @type {?} */
    const parentTNode = tProjectionNode.parent || (/** @type {?} */ (lView[T_HOST]));
    /** @type {?} */
    let beforeNode = getNativeAnchorNode(parentTNode, lView);
    applyProjectionRecursive(renderer, 0 /* Create */, lView, tProjectionNode, renderParent, beforeNode);
}
/**
 * `applyProjectionRecursive` performs operation on the projection specified by `action` (insert,
 * detach, destroy)
 *
 * Inserting a projection requires us to locate the projected nodes from the parent component. The
 * complication is that those nodes themselves could be re-projected from their parent component.
 *
 * @param {?} renderer Render to use
 * @param {?} action action to perform (insert, detach, destroy)
 * @param {?} lView The LView which needs to be inserted, detached, destroyed.
 * @param {?} tProjectionNode node to project
 * @param {?} renderParent parent DOM element for insertion/removal.
 * @param {?} beforeNode Before which node the insertions should happen.
 * @return {?}
 */
function applyProjectionRecursive(renderer, action, lView, tProjectionNode, renderParent, beforeNode) {
    /** @type {?} */
    const componentLView = lView[DECLARATION_COMPONENT_VIEW];
    /** @type {?} */
    const componentNode = (/** @type {?} */ (componentLView[T_HOST]));
    ngDevMode &&
        assertEqual(typeof tProjectionNode.projection, 'number', 'expecting projection index');
    /** @type {?} */
    const nodeToProjectOrRNodes = (/** @type {?} */ ((/** @type {?} */ (componentNode.projection))[tProjectionNode.projection]));
    if (Array.isArray(nodeToProjectOrRNodes)) {
        // This should not exist, it is a bit of a hack. When we bootstrap a top level node and we
        // need to support passing projectable nodes, so we cheat and put them in the TNode
        // of the Host TView. (Yes we put instance info at the T Level). We can get away with it
        // because we know that that TView is not shared and therefore it will not be a problem.
        // This should be refactored and cleaned up.
        for (let i = 0; i < nodeToProjectOrRNodes.length; i++) {
            /** @type {?} */
            const rNode = nodeToProjectOrRNodes[i];
            applyToElementOrContainer(action, renderer, renderParent, rNode, beforeNode);
        }
    }
    else {
        /** @type {?} */
        let nodeToProject = nodeToProjectOrRNodes;
        /** @type {?} */
        const projectedComponentLView = (/** @type {?} */ (componentLView[PARENT]));
        applyNodes(renderer, action, nodeToProject, projectedComponentLView, renderParent, beforeNode, true);
    }
}
/**
 * `applyContainer` performs an operation on the container and its views as specified by
 * `action` (insert, detach, destroy)
 *
 * Inserting a Container is complicated by the fact that the container may have Views which
 * themselves have containers or projections.
 *
 * @param {?} renderer Renderer to use
 * @param {?} action action to perform (insert, detach, destroy)
 * @param {?} lContainer The LContainer which needs to be inserted, detached, destroyed.
 * @param {?} renderParent parent DOM element for insertion/removal.
 * @param {?} beforeNode Before which node the insertions should happen.
 * @return {?}
 */
function applyContainer(renderer, action, lContainer, renderParent, beforeNode) {
    ngDevMode && assertLContainer(lContainer);
    /** @type {?} */
    const anchor = lContainer[NATIVE];
    // LContainer has its own before node.
    /** @type {?} */
    const native = unwrapRNode(lContainer);
    // An LContainer can be created dynamically on any node by injecting ViewContainerRef.
    // Asking for a ViewContainerRef on an element will result in a creation of a separate anchor node
    // (comment in the DOM) that will be different from the LContainer's host node. In this particular
    // case we need to execute action on 2 nodes:
    // - container's host node (this is done in the executeActionOnElementOrContainer)
    // - container's host node (this is done here)
    if (anchor !== native) {
        // This is very strange to me (Misko). I would expect that the native is same as anchor. I don't
        // see a reason why they should be different, but they are.
        //
        // If they are we need to process the second anchor as well.
        applyToElementOrContainer(action, renderer, renderParent, anchor, beforeNode);
    }
    for (let i = CONTAINER_HEADER_OFFSET; i < lContainer.length; i++) {
        /** @type {?} */
        const lView = (/** @type {?} */ (lContainer[i]));
        applyView(lView[TVIEW], lView, renderer, action, renderParent, anchor);
    }
}
/**
 * Writes class/style to element.
 *
 * @param {?} renderer Renderer to use.
 * @param {?} isClassBased `true` if it should be written to `class` (`false` to write to `style`)
 * @param {?} rNode The Node to write to.
 * @param {?} prop Property to write to. This would be the class/style name.
 * @param {?} value Value to write. If `null`/`undefined`/`false` this is considered a remove (set/add
 *        otherwise).
 * @return {?}
 */
export function applyStyling(renderer, isClassBased, rNode, prop, value) {
    /** @type {?} */
    const isProcedural = isProceduralRenderer(renderer);
    if (isClassBased) {
        // We actually want JS true/false here because any truthy value should add the class
        if (!value) {
            ngDevMode && ngDevMode.rendererRemoveClass++;
            if (isProcedural) {
                ((/** @type {?} */ (renderer))).removeClass(rNode, prop);
            }
            else {
                ((/** @type {?} */ (rNode))).classList.remove(prop);
            }
        }
        else {
            ngDevMode && ngDevMode.rendererAddClass++;
            if (isProcedural) {
                ((/** @type {?} */ (renderer))).addClass(rNode, prop);
            }
            else {
                ngDevMode && assertDefined(((/** @type {?} */ (rNode))).classList, 'HTMLElement expected');
                ((/** @type {?} */ (rNode))).classList.add(prop);
            }
        }
    }
    else {
        // TODO(misko): Can't import RendererStyleFlags2.DashCase as it causes imports to be resolved in
        // different order which causes failures. Using direct constant as workaround for now.
        /** @type {?} */
        const flags = prop.indexOf('-') == -1 ? undefined : 2 /* RendererStyleFlags2.DashCase */;
        if (value == null /** || value === undefined */) {
            ngDevMode && ngDevMode.rendererRemoveStyle++;
            if (isProcedural) {
                ((/** @type {?} */ (renderer))).removeStyle(rNode, prop, flags);
            }
            else {
                ((/** @type {?} */ (rNode))).style.removeProperty(prop);
            }
        }
        else {
            ngDevMode && ngDevMode.rendererSetStyle++;
            if (isProcedural) {
                ((/** @type {?} */ (renderer))).setStyle(rNode, prop, value, flags);
            }
            else {
                ngDevMode && assertDefined(((/** @type {?} */ (rNode))).style, 'HTMLElement expected');
                ((/** @type {?} */ (rNode))).style.setProperty(prop, value);
            }
        }
    }
}
/**
 * Write `cssText` to `RElement`.
 *
 * This function does direct write without any reconciliation. Used for writing initial values, so
 * that static styling values do not pull in the style parser.
 *
 * @param {?} renderer Renderer to use
 * @param {?} element The element which needs to be updated.
 * @param {?} newValue The new class list to write.
 * @return {?}
 */
export function writeDirectStyle(renderer, element, newValue) {
    ngDevMode && assertString(newValue, '\'newValue\' should be a string');
    if (isProceduralRenderer(renderer)) {
        renderer.setAttribute(element, 'style', newValue);
    }
    else {
        ((/** @type {?} */ (element))).style.cssText = newValue;
    }
    ngDevMode && ngDevMode.rendererSetStyle++;
}
/**
 * Write `className` to `RElement`.
 *
 * This function does direct write without any reconciliation. Used for writing initial values, so
 * that static styling values do not pull in the style parser.
 *
 * @param {?} renderer Renderer to use
 * @param {?} element The element which needs to be updated.
 * @param {?} newValue The new class list to write.
 * @return {?}
 */
export function writeDirectClass(renderer, element, newValue) {
    ngDevMode && assertString(newValue, '\'newValue\' should be a string');
    if (isProceduralRenderer(renderer)) {
        if (newValue === '') {
            // There are tests in `google3` which expect `element.getAttribute('class')` to be `null`.
            renderer.removeAttribute(element, 'class');
        }
        else {
            renderer.setAttribute(element, 'class', newValue);
        }
    }
    else {
        element.className = newValue;
    }
    ngDevMode && ngDevMode.rendererSetClassName++;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZV9tYW5pcHVsYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL25vZGVfbWFuaXB1bGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxZQUFZLEVBQW1CLHVCQUF1QixFQUFjLFdBQVcsRUFBRSxNQUFNLEVBQUUsNkJBQTZCLElBQUksT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFekssT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUF5RSw2QkFBNkIsSUFBSSxPQUFPLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNuSixPQUFPLEVBQUMsNkJBQTZCLElBQUksT0FBTyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDakYsT0FBTyxFQUF5RCxvQkFBb0IsRUFBRSw2QkFBNkIsSUFBSSxPQUFPLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM3SixPQUFPLEVBQUMsWUFBWSxFQUFFLE9BQU8sRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLEtBQUssRUFBRSxJ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QUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0tBQ25EO0lBQ0QsU0FBUyxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzVDLENBQUM7Ozs7Ozs7Ozs7OztBQVlELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxRQUFtQixFQUFFLE9BQWlCLEVBQUUsUUFBZ0I7SUFDdkYsU0FBUyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUN2RSxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2xDLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUNuQiwwRkFBMEY7WUFDMUYsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNuRDtLQUNGO1NBQU07UUFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUM5QjtJQUNELFNBQVMsSUFBSSxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNoRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1JlbmRlcmVyMn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuLi9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7YWRkVG9BcnJheSwgcmVtb3ZlRnJvbUFycmF5fSBmcm9tICcuLi91dGlsL2FycmF5X3V0aWxzJztcbmltcG9ydCB7YXNzZXJ0RGVmaW5lZCwgYXNzZXJ0RG9tTm9kZSwgYXNzZXJ0RXF1YWwsIGFzc2VydFN0cmluZ30gZnJvbSAnLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHthc3NlcnRMQ29udGFpbmVyLCBhc3NlcnRMVmlldywgYXNzZXJ0VE5vZGVGb3JMVmlld30gZnJvbSAnLi9hc3NlcnQnO1xuaW1wb3J0IHthdHRhY2hQYXRjaERhdGF9IGZyb20gJy4vY29udGV4dF9kaXNjb3ZlcnknO1xuaW1wb3J0IHtBQ1RJVkVfSU5ERVgsIEFjdGl2ZUluZGV4RmxhZywgQ09OVEFJTkVSX0hFQURFUl9PRkZTRVQsIExDb250YWluZXIsIE1PVkVEX1ZJRVdTLCBOQVRJVkUsIHVudXNlZFZhbHVlRXhwb3J0VG9QbGFjYXRlQWpkIGFzIHVudXNlZDF9IGZyb20gJy4vaW50ZXJmYWNlcy9jb250YWluZXInO1xuaW1wb3J0IHtDb21wb25lbnREZWZ9IGZyb20gJy4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7Tm9kZUluamVjdG9yRmFjdG9yeX0gZnJvbSAnLi9pbnRlcmZhY2VzL2luamVjdG9yJztcbmltcG9ydCB7VEVsZW1lbnROb2RlLCBUTm9kZSwgVE5vZGVGbGFncywgVE5vZGVUeXBlLCBUUHJvamVjdGlvbk5vZGUsIFRWaWV3Tm9kZSwgdW51c2VkVmFsdWVFeHBvcnRUb1BsYWNhdGVBamQgYXMgdW51c2VkMn0gZnJvbSAnLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHt1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCBhcyB1bnVzZWQzfSBmcm9tICcuL2ludGVyZmFjZXMvcHJvamVjdGlvbic7XG5pbXBvcnQge1Byb2NlZHVyYWxSZW5kZXJlcjMsIFJFbGVtZW50LCBSTm9kZSwgUlRleHQsIFJlbmRlcmVyMywgaXNQcm9jZWR1cmFsUmVuZGVyZXIsIHVudXNlZFZhbHVlRXhwb3J0VG9QbGFjYXRlQWpkIGFzIHVudXNlZDR9IGZyb20gJy4vaW50ZXJmYWNlcy9yZW5kZXJlcic7XG5pbXBvcnQge2lzTENvbnRhaW5lciwgaXNMVmlld30gZnJvbSAnLi9pbnRlcmZhY2VzL3R5cGVfY2hlY2tzJztcbmltcG9ydCB7Q0hJTERfSEVBRCwgQ0xFQU5VUCwgREVDTEFSQVRJT05fQ09NUE9ORU5UX1ZJRVcsIERFQ0xBUkFUSU9OX0xDT05UQUlORVIsIEZMQUdTLCBIT1NULCBIb29rRGF0YSwgTFZpZXcsIExWaWV3RmxhZ3MsIE5FWFQsIFBBUkVOVCwgUVVFUklFUywgUkVOREVSRVIsIFRWSUVXLCBUVmlldywgVF9IT1NULCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCBhcyB1bnVzZWQ1fSBmcm9tICcuL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2Fzc2VydE5vZGVPZlBvc3NpYmxlVHlwZXMsIGFzc2VydE5vZGVUeXBlfSBmcm9tICcuL25vZGVfYXNzZXJ0JztcbmltcG9ydCB7Z2V0TFZpZXdQYXJlbnR9IGZyb20gJy4vdXRpbC92aWV3X3RyYXZlcnNhbF91dGlscyc7XG5pbXBvcnQge2dldE5hdGl2ZUJ5VE5vZGUsIHVud3JhcFJOb2RlfSBmcm9tICcuL3V0aWwvdmlld191dGlscyc7XG5cbmNvbnN0IHVudXNlZFZhbHVlVG9QbGFjYXRlQWpkID0gdW51c2VkMSArIHVudXNlZDIgKyB1bnVzZWQzICsgdW51c2VkNCArIHVudXNlZDU7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMQ29udGFpbmVyKHROb2RlOiBUVmlld05vZGUsIGVtYmVkZGVkVmlldzogTFZpZXcpOiBMQ29udGFpbmVyfG51bGwge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TFZpZXcoZW1iZWRkZWRWaWV3KTtcbiAgY29uc3QgY29udGFpbmVyID0gZW1iZWRkZWRWaWV3W1BBUkVOVF0gYXMgTENvbnRhaW5lcjtcbiAgaWYgKHROb2RlLmluZGV4ID09PSAtMSkge1xuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljYWxseSBjcmVhdGVkIHZpZXcgaW5zaWRlIGEgZHluYW1pYyBjb250YWluZXIuXG4gICAgLy8gVGhlIHBhcmVudCBpc24ndCBhbiBMQ29udGFpbmVyIGlmIHRoZSBlbWJlZGRlZCB2aWV3IGhhc24ndCBiZWVuIGF0dGFjaGVkIHlldC5cbiAgICByZXR1cm4gaXNMQ29udGFpbmVyKGNvbnRhaW5lcikgPyBjb250YWluZXIgOiBudWxsO1xuICB9IGVsc2Uge1xuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnRMQ29udGFpbmVyKGNvbnRhaW5lcik7XG4gICAgLy8gVGhpcyBpcyBhIGlubGluZSB2aWV3IG5vZGUgKGUuZy4gZW1iZWRkZWRWaWV3U3RhcnQpXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuXG5cbi8qKlxuICogUmV0cmlldmVzIHJlbmRlciBwYXJlbnQgZm9yIGEgZ2l2ZW4gdmlldy5cbiAqIE1pZ2h0IGJlIG51bGwgaWYgYSB2aWV3IGlzIG5vdCB5ZXQgYXR0YWNoZWQgdG8gYW55IGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRhaW5lclJlbmRlclBhcmVudCh0Vmlld05vZGU6IFRWaWV3Tm9kZSwgdmlldzogTFZpZXcpOiBSRWxlbWVudHxudWxsIHtcbiAgY29uc3QgY29udGFpbmVyID0gZ2V0TENvbnRhaW5lcih0Vmlld05vZGUsIHZpZXcpO1xuICByZXR1cm4gY29udGFpbmVyID8gbmF0aXZlUGFyZW50Tm9kZSh2aWV3W1JFTkRFUkVSXSwgY29udGFpbmVyW05BVElWRV0pIDogbnVsbDtcbn1cblxuY29uc3QgZW51bSBXYWxrVE5vZGVUcmVlQWN0aW9uIHtcbiAgLyoqIG5vZGUgY3JlYXRlIGluIHRoZSBuYXRpdmUgZW52aXJvbm1lbnQuIFJ1biBvbiBpbml0aWFsIGNyZWF0aW9uLiAqL1xuICBDcmVhdGUgPSAwLFxuXG4gIC8qKlxuICAgKiBub2RlIGluc2VydCBpbiB0aGUgbmF0aXZlIGVudmlyb25tZW50LlxuICAgKiBSdW4gd2hlbiBleGlzdGluZyBub2RlIGhhcyBiZWVuIGRldGFjaGVkIGFuZCBuZWVkcyB0byBiZSByZS1hdHRhY2hlZC5cbiAgICovXG4gIEluc2VydCA9IDEsXG5cbiAgLyoqIG5vZGUgZGV0YWNoIGZyb20gdGhlIG5hdGl2ZSBlbnZpcm9ubWVudCAqL1xuICBEZXRhY2ggPSAyLFxuXG4gIC8qKiBub2RlIGRlc3RydWN0aW9uIHVzaW5nIHRoZSByZW5kZXJlcidzIEFQSSAqL1xuICBEZXN0cm95ID0gMyxcbn1cblxuXG5cbi8qKlxuICogTk9URTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHRoZSBwb3NzaWJsZSBhY3Rpb25zIGFyZSBpbmxpbmVkIHdpdGhpbiB0aGUgZnVuY3Rpb24gaW5zdGVhZCBvZlxuICogYmVpbmcgcGFzc2VkIGFzIGFuIGFyZ3VtZW50LlxuICovXG5mdW5jdGlvbiBhcHBseVRvRWxlbWVudE9yQ29udGFpbmVyKFxuICAgIGFjdGlvbjogV2Fsa1ROb2RlVHJlZUFjdGlvbiwgcmVuZGVyZXI6IFJlbmRlcmVyMywgcGFyZW50OiBSRWxlbWVudCB8IG51bGwsXG4gICAgbE5vZGVUb0hhbmRsZTogUk5vZGUgfCBMQ29udGFpbmVyIHwgTFZpZXcsIGJlZm9yZU5vZGU/OiBSTm9kZSB8IG51bGwpIHtcbiAgLy8gSWYgdGhpcyBzbG90IHdhcyBhbGxvY2F0ZWQgZm9yIGEgdGV4dCBub2RlIGR5bmFtaWNhbGx5IGNyZWF0ZWQgYnkgaTE4biwgdGhlIHRleHQgbm9kZSBpdHNlbGZcbiAgLy8gd29uJ3QgYmUgY3JlYXRlZCB1bnRpbCBpMThuQXBwbHkoKSBpbiB0aGUgdXBkYXRlIGJsb2NrLCBzbyB0aGlzIG5vZGUgc2hvdWxkIGJlIHNraXBwZWQuXG4gIC8vIEZvciBtb3JlIGluZm8sIHNlZSBcIklDVSBleHByZXNzaW9ucyBzaG91bGQgd29yayBpbnNpZGUgYW4gbmdUZW1wbGF0ZU91dGxldCBpbnNpZGUgYW4gbmdGb3JcIlxuICAvLyBpbiBgaTE4bl9zcGVjLnRzYC5cbiAgaWYgKGxOb2RlVG9IYW5kbGUgIT0gbnVsbCkge1xuICAgIGxldCBsQ29udGFpbmVyOiBMQ29udGFpbmVyfHVuZGVmaW5lZDtcbiAgICBsZXQgaXNDb21wb25lbnQgPSBmYWxzZTtcbiAgICAvLyBXZSBhcmUgZXhwZWN0aW5nIGFuIFJOb2RlLCBidXQgaW4gdGhlIGNhc2Ugb2YgYSBjb21wb25lbnQgb3IgTENvbnRhaW5lciB0aGUgYFJOb2RlYCBpc1xuICAgIC8vIHdyYXBwZWQgaW4gYW4gYXJyYXkgd2hpY2ggbmVlZHMgdG8gYmUgdW53cmFwcGVkLiBXZSBuZWVkIHRvIGtub3cgaWYgaXQgaXMgYSBjb21wb25lbnQgYW5kIGlmXG4gICAgLy8gaXQgaGFzIExDb250YWluZXIgc28gdGhhdCB3ZSBjYW4gcHJvY2VzcyBhbGwgb2YgdGhvc2UgY2FzZXMgYXBwcm9wcmlhdGVseS5cbiAgICBpZiAoaXNMQ29udGFpbmVyKGxOb2RlVG9IYW5kbGUpKSB7XG4gICAgICBsQ29udGFpbmVyID0gbE5vZGVUb0hhbmRsZTtcbiAgICB9IGVsc2UgaWYgKGlzTFZpZXcobE5vZGVUb0hhbmRsZSkpIHtcbiAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgIG5nRGV2TW9kZSAmJiBhc3NlcnREZWZpbmVkKGxOb2RlVG9IYW5kbGVbSE9TVF0sICdIT1NUIG11c3QgYmUgZGVmaW5lZCBmb3IgYSBjb21wb25lbnQgTFZpZXcnKTtcbiAgICAgIGxOb2RlVG9IYW5kbGUgPSBsTm9kZVRvSGFuZGxlW0hPU1RdICE7XG4gICAgfVxuICAgIGNvbnN0IHJOb2RlOiBSTm9kZSA9IHVud3JhcFJOb2RlKGxOb2RlVG9IYW5kbGUpO1xuICAgIG5nRGV2TW9kZSAmJiAhaXNQcm9jZWR1cmFsUmVuZGVyZXIocmVuZGVyZXIpICYmIGFzc2VydERvbU5vZGUock5vZGUpO1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gV2Fsa1ROb2RlVHJlZUFjdGlvbi5DcmVhdGUgJiYgcGFyZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYmVmb3JlTm9kZSA9PSBudWxsKSB7XG4gICAgICAgIG5hdGl2ZUFwcGVuZENoaWxkKHJlbmRlcmVyLCBwYXJlbnQsIHJOb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdGl2ZUluc2VydEJlZm9yZShyZW5kZXJlciwgcGFyZW50LCByTm9kZSwgYmVmb3JlTm9kZSB8fCBudWxsKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gV2Fsa1ROb2RlVHJlZUFjdGlvbi5JbnNlcnQgJiYgcGFyZW50ICE9PSBudWxsKSB7XG4gICAgICBuYXRpdmVJbnNlcnRCZWZvcmUocmVuZGVyZXIsIHBhcmVudCwgck5vZGUsIGJlZm9yZU5vZGUgfHwgbnVsbCk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFdhbGtUTm9kZVRyZWVBY3Rpb24uRGV0YWNoKSB7XG4gICAgICBuYXRpdmVSZW1vdmVOb2RlKHJlbmRlcmVyLCByTm9kZSwgaXNDb21wb25lbnQpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBXYWxrVE5vZGVUcmVlQWN0aW9uLkRlc3Ryb3kpIHtcbiAgICAgIG5nRGV2TW9kZSAmJiBuZ0Rldk1vZGUucmVuZGVyZXJEZXN0cm95Tm9kZSsrO1xuICAgICAgKHJlbmRlcmVyIGFzIFByb2NlZHVyYWxSZW5kZXJlcjMpLmRlc3Ryb3lOb2RlICEock5vZGUpO1xuICAgIH1cbiAgICBpZiAobENvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBhcHBseUNvbnRhaW5lcihyZW5kZXJlciwgYWN0aW9uLCBsQ29udGFpbmVyLCBwYXJlbnQsIGJlZm9yZU5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUodmFsdWU6IHN0cmluZywgcmVuZGVyZXI6IFJlbmRlcmVyMyk6IFJUZXh0IHtcbiAgbmdEZXZNb2RlICYmIG5nRGV2TW9kZS5yZW5kZXJlckNyZWF0ZVRleHROb2RlKys7XG4gIG5nRGV2TW9kZSAmJiBuZ0Rldk1vZGUucmVuZGVyZXJTZXRUZXh0Kys7XG4gIHJldHVybiBpc1Byb2NlZHVyYWxSZW5kZXJlcihyZW5kZXJlcikgPyByZW5kZXJlci5jcmVhdGVUZXh0KHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQWRkcyBvciByZW1vdmVzIGFsbCBET00gZWxlbWVudHMgYXNzb2NpYXRlZCB3aXRoIGEgdmlldy5cbiAqXG4gKiBCZWNhdXNlIHNvbWUgcm9vdCBub2RlcyBvZiB0aGUgdmlldyBtYXkgYmUgY29udGFpbmVycywgd2Ugc29tZXRpbWVzIG5lZWRcbiAqIHRvIHByb3BhZ2F0ZSBkZWVwbHkgaW50byB0aGUgbmVzdGVkIGNvbnRhaW5lcnMgdG8gcmVtb3ZlIGFsbCBlbGVtZW50cyBpbiB0aGVcbiAqIHZpZXdzIGJlbmVhdGggaXQuXG4gKlxuICogQHBhcmFtIHRWaWV3IFRoZSBgVFZpZXcnIG9mIHRoZSBgTFZpZXdgIGZyb20gd2hpY2ggZWxlbWVudHMgc2hvdWxkIGJlIGFkZGVkIG9yIHJlbW92ZWRcbiAqIEBwYXJhbSBsVmlldyBUaGUgdmlldyBmcm9tIHdoaWNoIGVsZW1lbnRzIHNob3VsZCBiZSBhZGRlZCBvciByZW1vdmVkXG4gKiBAcGFyYW0gaW5zZXJ0TW9kZSBXaGV0aGVyIG9yIG5vdCBlbGVtZW50cyBzaG91bGQgYmUgYWRkZWQgKGlmIGZhbHNlLCByZW1vdmluZylcbiAqIEBwYXJhbSBiZWZvcmVOb2RlIFRoZSBub2RlIGJlZm9yZSB3aGljaCBlbGVtZW50cyBzaG91bGQgYmUgYWRkZWQsIGlmIGluc2VydCBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZW1vdmVWaWV3RnJvbUNvbnRhaW5lcihcbiAgICB0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldywgaW5zZXJ0TW9kZTogdHJ1ZSwgYmVmb3JlTm9kZTogUk5vZGUgfCBudWxsKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBhZGRSZW1vdmVWaWV3RnJvbUNvbnRhaW5lcihcbiAgICB0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldywgaW5zZXJ0TW9kZTogZmFsc2UsIGJlZm9yZU5vZGU6IG51bGwpOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlbW92ZVZpZXdGcm9tQ29udGFpbmVyKFxuICAgIHRWaWV3OiBUVmlldywgbFZpZXc6IExWaWV3LCBpbnNlcnRNb2RlOiBib29sZWFuLCBiZWZvcmVOb2RlOiBSTm9kZSB8IG51bGwpOiB2b2lkIHtcbiAgY29uc3QgcmVuZGVyUGFyZW50ID0gZ2V0Q29udGFpbmVyUmVuZGVyUGFyZW50KHRWaWV3Lm5vZGUgYXMgVFZpZXdOb2RlLCBsVmlldyk7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnROb2RlVHlwZSh0Vmlldy5ub2RlIGFzIFROb2RlLCBUTm9kZVR5cGUuVmlldyk7XG4gIGlmIChyZW5kZXJQYXJlbnQpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IGxWaWV3W1JFTkRFUkVSXTtcbiAgICBjb25zdCBhY3Rpb24gPSBpbnNlcnRNb2RlID8gV2Fsa1ROb2RlVHJlZUFjdGlvbi5JbnNlcnQgOiBXYWxrVE5vZGVUcmVlQWN0aW9uLkRldGFjaDtcbiAgICBhcHBseVZpZXcodFZpZXcsIGxWaWV3LCByZW5kZXJlciwgYWN0aW9uLCByZW5kZXJQYXJlbnQsIGJlZm9yZU5vZGUpO1xuICB9XG59XG5cbi8qKlxuICogRGV0YWNoIGEgYExWaWV3YCBmcm9tIHRoZSBET00gYnkgZGV0YWNoaW5nIGl0cyBub2Rlcy5cbiAqXG4gKiBAcGFyYW0gdFZpZXcgVGhlIGBUVmlldycgb2YgdGhlIGBMVmlld2AgdG8gYmUgZGV0YWNoZWRcbiAqIEBwYXJhbSBsVmlldyB0aGUgYExWaWV3YCB0byBiZSBkZXRhY2hlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRldGFjaFZpZXcodFZpZXc6IFRWaWV3LCBsVmlldzogTFZpZXcpIHtcbiAgYXBwbHlWaWV3KHRWaWV3LCBsVmlldywgbFZpZXdbUkVOREVSRVJdLCBXYWxrVE5vZGVUcmVlQWN0aW9uLkRldGFjaCwgbnVsbCwgbnVsbCk7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGRvd24gYW5kIHVwIHRoZSB0cmVlIG9mIHZpZXdzIGFuZCBjb250YWluZXJzIHRvIHJlbW92ZSBsaXN0ZW5lcnMgYW5kXG4gKiBjYWxsIG9uRGVzdHJveSBjYWxsYmFja3MuXG4gKlxuICogTm90ZXM6XG4gKiAgLSBCZWNhdXNlIGl0J3MgdXNlZCBmb3Igb25EZXN0cm95IGNhbGxzLCBpdCBuZWVkcyB0byBiZSBib3R0b20tdXAuXG4gKiAgLSBNdXN0IHByb2Nlc3MgY29udGFpbmVycyBpbnN0ZWFkIG9mIHRoZWlyIHZpZXdzIHRvIGF2b2lkIHNwbGljaW5nXG4gKiAgd2hlbiB2aWV3cyBhcmUgZGVzdHJveWVkIGFuZCByZS1hZGRlZC5cbiAqICAtIFVzaW5nIGEgd2hpbGUgbG9vcCBiZWNhdXNlIGl0J3MgZmFzdGVyIHRoYW4gcmVjdXJzaW9uXG4gKiAgLSBEZXN0cm95IG9ubHkgY2FsbGVkIG9uIG1vdmVtZW50IHRvIHNpYmxpbmcgb3IgbW92ZW1lbnQgdG8gcGFyZW50IChsYXRlcmFsbHkgb3IgdXApXG4gKlxuICogIEBwYXJhbSByb290VmlldyBUaGUgdmlldyB0byBkZXN0cm95XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95Vmlld1RyZWUocm9vdFZpZXc6IExWaWV3KTogdm9pZCB7XG4gIC8vIElmIHRoZSB2aWV3IGhhcyBubyBjaGlsZHJlbiwgd2UgY2FuIGNsZWFuIGl0IHVwIGFuZCByZXR1cm4gZWFybHkuXG4gIGxldCBsVmlld09yTENvbnRhaW5lciA9IHJvb3RWaWV3W0NISUxEX0hFQURdO1xuICBpZiAoIWxWaWV3T3JMQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGNsZWFuVXBWaWV3KHJvb3RWaWV3W1RWSUVXXSwgcm9vdFZpZXcpO1xuICB9XG5cbiAgd2hpbGUgKGxWaWV3T3JMQ29udGFpbmVyKSB7XG4gICAgbGV0IG5leHQ6IExWaWV3fExDb250YWluZXJ8bnVsbCA9IG51bGw7XG5cbiAgICBpZiAoaXNMVmlldyhsVmlld09yTENvbnRhaW5lcikpIHtcbiAgICAgIC8vIElmIExWaWV3LCB0cmF2ZXJzZSBkb3duIHRvIGNoaWxkLlxuICAgICAgbmV4dCA9IGxWaWV3T3JMQ29udGFpbmVyW0NISUxEX0hFQURdO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TENvbnRhaW5lcihsVmlld09yTENvbnRhaW5lcik7XG4gICAgICAvLyBJZiBjb250YWluZXIsIHRyYXZlcnNlIGRvd24gdG8gaXRzIGZpcnN0IExWaWV3LlxuICAgICAgY29uc3QgZmlyc3RWaWV3OiBMVmlld3x1bmRlZmluZWQgPSBsVmlld09yTENvbnRhaW5lcltDT05UQUlORVJfSEVBREVSX09GRlNFVF07XG4gICAgICBpZiAoZmlyc3RWaWV3KSBuZXh0ID0gZmlyc3RWaWV3O1xuICAgIH1cblxuICAgIGlmICghbmV4dCkge1xuICAgICAgLy8gT25seSBjbGVhbiB1cCB2aWV3IHdoZW4gbW92aW5nIHRvIHRoZSBzaWRlIG9yIHVwLCBhcyBkZXN0cm95IGhvb2tzXG4gICAgICAvLyBzaG91bGQgYmUgY2FsbGVkIGluIG9yZGVyIGZyb20gdGhlIGJvdHRvbSB1cC5cbiAgICAgIHdoaWxlIChsVmlld09yTENvbnRhaW5lciAmJiAhbFZpZXdPckxDb250YWluZXIgIVtORVhUXSAmJiBsVmlld09yTENvbnRhaW5lciAhPT0gcm9vdFZpZXcpIHtcbiAgICAgICAgaXNMVmlldyhsVmlld09yTENvbnRhaW5lcikgJiYgY2xlYW5VcFZpZXcobFZpZXdPckxDb250YWluZXJbVFZJRVddLCBsVmlld09yTENvbnRhaW5lcik7XG4gICAgICAgIGxWaWV3T3JMQ29udGFpbmVyID0gZ2V0UGFyZW50U3RhdGUobFZpZXdPckxDb250YWluZXIsIHJvb3RWaWV3KTtcbiAgICAgIH1cbiAgICAgIGlmIChsVmlld09yTENvbnRhaW5lciA9PT0gbnVsbCkgbFZpZXdPckxDb250YWluZXIgPSByb290VmlldztcbiAgICAgIGlzTFZpZXcobFZpZXdPckxDb250YWluZXIpICYmIGNsZWFuVXBWaWV3KGxWaWV3T3JMQ29udGFpbmVyW1RWSUVXXSwgbFZpZXdPckxDb250YWluZXIpO1xuICAgICAgbmV4dCA9IGxWaWV3T3JMQ29udGFpbmVyICYmIGxWaWV3T3JMQ29udGFpbmVyICFbTkVYVF07XG4gICAgfVxuICAgIGxWaWV3T3JMQ29udGFpbmVyID0gbmV4dDtcbiAgfVxufVxuXG4vKipcbiAqIEluc2VydHMgYSB2aWV3IGludG8gYSBjb250YWluZXIuXG4gKlxuICogVGhpcyBhZGRzIHRoZSB2aWV3IHRvIHRoZSBjb250YWluZXIncyBhcnJheSBvZiBhY3RpdmUgdmlld3MgaW4gdGhlIGNvcnJlY3RcbiAqIHBvc2l0aW9uLiBJdCBhbHNvIGFkZHMgdGhlIHZpZXcncyBlbGVtZW50cyB0byB0aGUgRE9NIGlmIHRoZSBjb250YWluZXIgaXNuJ3QgYVxuICogcm9vdCBub2RlIG9mIGFub3RoZXIgdmlldyAoaW4gdGhhdCBjYXNlLCB0aGUgdmlldydzIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgd2hlblxuICogdGhlIGNvbnRhaW5lcidzIHBhcmVudCB2aWV3IGlzIGFkZGVkIGxhdGVyKS5cbiAqXG4gKiBAcGFyYW0gdFZpZXcgVGhlIGBUVmlldycgb2YgdGhlIGBMVmlld2AgdG8gaW5zZXJ0XG4gKiBAcGFyYW0gbFZpZXcgVGhlIHZpZXcgdG8gaW5zZXJ0XG4gKiBAcGFyYW0gbENvbnRhaW5lciBUaGUgY29udGFpbmVyIGludG8gd2hpY2ggdGhlIHZpZXcgc2hvdWxkIGJlIGluc2VydGVkXG4gKiBAcGFyYW0gaW5kZXggV2hpY2ggaW5kZXggaW4gdGhlIGNvbnRhaW5lciB0byBpbnNlcnQgdGhlIGNoaWxkIHZpZXcgaW50b1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Vmlldyh0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldywgbENvbnRhaW5lcjogTENvbnRhaW5lciwgaW5kZXg6IG51bWJlcikge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TFZpZXcobFZpZXcpO1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TENvbnRhaW5lcihsQ29udGFpbmVyKTtcbiAgY29uc3QgaW5kZXhJbkNvbnRhaW5lciA9IENPTlRBSU5FUl9IRUFERVJfT0ZGU0VUICsgaW5kZXg7XG4gIGNvbnN0IGNvbnRhaW5lckxlbmd0aCA9IGxDb250YWluZXIubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA+IDApIHtcbiAgICAvLyBUaGlzIGlzIGEgbmV3IHZpZXcsIHdlIG5lZWQgdG8gYWRkIGl0IHRvIHRoZSBjaGlsZHJlbi5cbiAgICBsQ29udGFpbmVyW2luZGV4SW5Db250YWluZXIgLSAxXVtORVhUXSA9IGxWaWV3O1xuICB9XG4gIGlmIChpbmRleCA8IGNvbnRhaW5lckxlbmd0aCAtIENPTlRBSU5FUl9IRUFERVJfT0ZGU0VUKSB7XG4gICAgbFZpZXdbTkVYVF0gPSBsQ29udGFpbmVyW2luZGV4SW5Db250YWluZXJdO1xuICAgIGFkZFRvQXJyYXkobENvbnRhaW5lciwgQ09OVEFJTkVSX0hFQURFUl9PRkZTRVQgKyBpbmRleCwgbFZpZXcpO1xuICB9IGVsc2Uge1xuICAgIGxDb250YWluZXIucHVzaChsVmlldyk7XG4gICAgbFZpZXdbTkVYVF0gPSBudWxsO1xuICB9XG5cbiAgbFZpZXdbUEFSRU5UXSA9IGxDb250YWluZXI7XG5cbiAgLy8gdHJhY2sgdmlld3Mgd2hlcmUgZGVjbGFyYXRpb24gYW5kIGluc2VydGlvbiBwb2ludHMgYXJlIGRpZmZlcmVudFxuICBjb25zdCBkZWNsYXJhdGlvbkxDb250YWluZXIgPSBsVmlld1tERUNMQVJBVElPTl9MQ09OVEFJTkVSXTtcbiAgaWYgKGRlY2xhcmF0aW9uTENvbnRhaW5lciAhPT0gbnVsbCAmJiBsQ29udGFpbmVyICE9PSBkZWNsYXJhdGlvbkxDb250YWluZXIpIHtcbiAgICB0cmFja01vdmVkVmlldyhkZWNsYXJhdGlvbkxDb250YWluZXIsIGxWaWV3KTtcbiAgfVxuXG4gIC8vIG5vdGlmeSBxdWVyeSB0aGF0IGEgbmV3IHZpZXcgaGFzIGJlZW4gYWRkZWRcbiAgY29uc3QgbFF1ZXJpZXMgPSBsVmlld1tRVUVSSUVTXTtcbiAgaWYgKGxRdWVyaWVzICE9PSBudWxsKSB7XG4gICAgbFF1ZXJpZXMuaW5zZXJ0Vmlldyh0Vmlldyk7XG4gIH1cblxuICAvLyBTZXRzIHRoZSBhdHRhY2hlZCBmbGFnXG4gIGxWaWV3W0ZMQUdTXSB8PSBMVmlld0ZsYWdzLkF0dGFjaGVkO1xufVxuXG4vKipcbiAqIFRyYWNrIHZpZXdzIGNyZWF0ZWQgZnJvbSB0aGUgZGVjbGFyYXRpb24gY29udGFpbmVyIChUZW1wbGF0ZVJlZikgYW5kIGluc2VydGVkIGludG8gYVxuICogZGlmZmVyZW50IExDb250YWluZXIuXG4gKi9cbmZ1bmN0aW9uIHRyYWNrTW92ZWRWaWV3KGRlY2xhcmF0aW9uQ29udGFpbmVyOiBMQ29udGFpbmVyLCBsVmlldzogTFZpZXcpIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQobFZpZXcsICdMVmlldyByZXF1aXJlZCcpO1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0TENvbnRhaW5lcihkZWNsYXJhdGlvbkNvbnRhaW5lcik7XG4gIGNvbnN0IG1vdmVkVmlld3MgPSBkZWNsYXJhdGlvbkNvbnRhaW5lcltNT1ZFRF9WSUVXU107XG4gIGNvbnN0IGluc2VydGVkTENvbnRhaW5lciA9IGxWaWV3W1BBUkVOVF0gYXMgTENvbnRhaW5lcjtcbiAgbmdEZXZNb2RlICYmIGFzc2VydExDb250YWluZXIoaW5zZXJ0ZWRMQ29udGFpbmVyKTtcbiAgY29uc3QgaW5zZXJ0ZWRDb21wb25lbnRMVmlldyA9IGluc2VydGVkTENvbnRhaW5lcltQQVJFTlRdICFbREVDTEFSQVRJT05fQ09NUE9ORU5UX1ZJRVddO1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGVmaW5lZChpbnNlcnRlZENvbXBvbmVudExWaWV3LCAnTWlzc2luZyBpbnNlcnRlZENvbXBvbmVudExWaWV3Jyk7XG4gIGNvbnN0IGluc2VydGVkQ29tcG9uZW50SXNPblB1c2ggPVxuICAgICAgKGluc2VydGVkQ29tcG9uZW50TFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5DaGVja0Fsd2F5cykgIT09IExWaWV3RmxhZ3MuQ2hlY2tBbHdheXM7XG4gIGlmIChpbnNlcnRlZENvbXBvbmVudElzT25QdXNoKSB7XG4gICAgY29uc3QgZGVjbGFyZWRDb21wb25lbnRMVmlldyA9IGxWaWV3W0RFQ0xBUkFUSU9OX0NPTVBPTkVOVF9WSUVXXTtcbiAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGVmaW5lZChkZWNsYXJlZENvbXBvbmVudExWaWV3LCAnTWlzc2luZyBkZWNsYXJlZENvbXBvbmVudExWaWV3Jyk7XG4gICAgaWYgKGRlY2xhcmVkQ29tcG9uZW50TFZpZXcgIT09IGluc2VydGVkQ29tcG9uZW50TFZpZXcpIHtcbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIGRlY2xhcmF0aW9uLWNvbXBvbmVudCBpcyBub3Qgc2FtZSBhcyBpbnNlcnRpb24tY29tcG9uZW50IGFuZCB3ZSBhcmUgaW5cbiAgICAgIC8vIG9uLXB1c2ggbW9kZSwgdGhpcyBtZWFucyB0aGF0IHRoaXMgaXMgYSB0cmFuc3BsYW50ZWQgdmlldy4gTWFyayB0aGUgZGVjbGFyZWQgbFZpZXcgYXNcbiAgICAgIC8vIGhhdmluZ1xuICAgICAgLy8gdHJhbnNwbGFudGVkIHZpZXdzIHNvIHRoYXQgdGhvc2Ugdmlld3MgY2FuIHBhcnRpY2lwYXRlIGluIENELlxuICAgICAgZGVjbGFyYXRpb25Db250YWluZXJbQUNUSVZFX0lOREVYXSB8PSBBY3RpdmVJbmRleEZsYWcuSEFTX1RSQU5TUExBTlRFRF9WSUVXUztcbiAgICB9XG4gIH1cbiAgaWYgKG1vdmVkVmlld3MgPT09IG51bGwpIHtcbiAgICBkZWNsYXJhdGlvbkNvbnRhaW5lcltNT1ZFRF9WSUVXU10gPSBbbFZpZXddO1xuICB9IGVsc2Uge1xuICAgIG1vdmVkVmlld3MucHVzaChsVmlldyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoTW92ZWRWaWV3KGRlY2xhcmF0aW9uQ29udGFpbmVyOiBMQ29udGFpbmVyLCBsVmlldzogTFZpZXcpIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydExDb250YWluZXIoZGVjbGFyYXRpb25Db250YWluZXIpO1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGVmaW5lZChcbiAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNvbnRhaW5lcltNT1ZFRF9WSUVXU10sXG4gICAgICAgICAgICAgICAgICAgJ0EgcHJvamVjdGVkIHZpZXcgc2hvdWxkIGJlbG9uZyB0byBhIG5vbi1lbXB0eSBwcm9qZWN0ZWQgdmlld3MgY29sbGVjdGlvbicpO1xuICBjb25zdCBtb3ZlZFZpZXdzID0gZGVjbGFyYXRpb25Db250YWluZXJbTU9WRURfVklFV1NdICE7XG4gIGNvbnN0IGRlY2xhcmVkVmlld0luZGV4ID0gbW92ZWRWaWV3cy5pbmRleE9mKGxWaWV3KTtcbiAgbW92ZWRWaWV3cy5zcGxpY2UoZGVjbGFyZWRWaWV3SW5kZXgsIDEpO1xufVxuXG4vKipcbiAqIERldGFjaGVzIGEgdmlldyBmcm9tIGEgY29udGFpbmVyLlxuICpcbiAqIFRoaXMgbWV0aG9kIHJlbW92ZXMgdGhlIHZpZXcgZnJvbSB0aGUgY29udGFpbmVyJ3MgYXJyYXkgb2YgYWN0aXZlIHZpZXdzLiBJdCBhbHNvXG4gKiByZW1vdmVzIHRoZSB2aWV3J3MgZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSBsQ29udGFpbmVyIFRoZSBjb250YWluZXIgZnJvbSB3aGljaCB0byBkZXRhY2ggYSB2aWV3XG4gKiBAcGFyYW0gcmVtb3ZlSW5kZXggVGhlIGluZGV4IG9mIHRoZSB2aWV3IHRvIGRldGFjaFxuICogQHJldHVybnMgRGV0YWNoZWQgTFZpZXcgaW5zdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRhY2hWaWV3KGxDb250YWluZXI6IExDb250YWluZXIsIHJlbW92ZUluZGV4OiBudW1iZXIpOiBMVmlld3x1bmRlZmluZWQge1xuICBpZiAobENvbnRhaW5lci5sZW5ndGggPD0gQ09OVEFJTkVSX0hFQURFUl9PRkZTRVQpIHJldHVybjtcblxuICBjb25zdCBpbmRleEluQ29udGFpbmVyID0gQ09OVEFJTkVSX0hFQURFUl9PRkZTRVQgKyByZW1vdmVJbmRleDtcbiAgY29uc3Qgdmlld1RvRGV0YWNoID0gbENvbnRhaW5lcltpbmRleEluQ29udGFpbmVyXTtcblxuICBpZiAodmlld1RvRGV0YWNoKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25MQ29udGFpbmVyID0gdmlld1RvRGV0YWNoW0RFQ0xBUkFUSU9OX0xDT05UQUlORVJdO1xuICAgIGlmIChkZWNsYXJhdGlvbkxDb250YWluZXIgIT09IG51bGwgJiYgZGVjbGFyYXRpb25MQ29udGFpbmVyICE9PSBsQ29udGFpbmVyKSB7XG4gICAgICBkZXRhY2hNb3ZlZFZpZXcoZGVjbGFyYXRpb25MQ29udGFpbmVyLCB2aWV3VG9EZXRhY2gpO1xuICAgIH1cblxuXG4gICAgaWYgKHJlbW92ZUluZGV4ID4gMCkge1xuICAgICAgbENvbnRhaW5lcltpbmRleEluQ29udGFpbmVyIC0gMV1bTkVYVF0gPSB2aWV3VG9EZXRhY2hbTkVYVF0gYXMgTFZpZXc7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZWRMVmlldyA9IHJlbW92ZUZyb21BcnJheShsQ29udGFpbmVyLCBDT05UQUlORVJfSEVBREVSX09GRlNFVCArIHJlbW92ZUluZGV4KTtcbiAgICBhZGRSZW1vdmVWaWV3RnJvbUNvbnRhaW5lcih2aWV3VG9EZXRhY2hbVFZJRVddLCB2aWV3VG9EZXRhY2gsIGZhbHNlLCBudWxsKTtcblxuICAgIC8vIG5vdGlmeSBxdWVyeSB0aGF0IGEgdmlldyBoYXMgYmVlbiByZW1vdmVkXG4gICAgY29uc3QgbFF1ZXJpZXMgPSByZW1vdmVkTFZpZXdbUVVFUklFU107XG4gICAgaWYgKGxRdWVyaWVzICE9PSBudWxsKSB7XG4gICAgICBsUXVlcmllcy5kZXRhY2hWaWV3KHJlbW92ZWRMVmlld1tUVklFV10pO1xuICAgIH1cblxuICAgIHZpZXdUb0RldGFjaFtQQVJFTlRdID0gbnVsbDtcbiAgICB2aWV3VG9EZXRhY2hbTkVYVF0gPSBudWxsO1xuICAgIC8vIFVuc2V0cyB0aGUgYXR0YWNoZWQgZmxhZ1xuICAgIHZpZXdUb0RldGFjaFtGTEFHU10gJj0gfkxWaWV3RmxhZ3MuQXR0YWNoZWQ7XG4gIH1cbiAgcmV0dXJuIHZpZXdUb0RldGFjaDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgdmlldyBmcm9tIGEgY29udGFpbmVyLCBpLmUuIGRldGFjaGVzIGl0IGFuZCB0aGVuIGRlc3Ryb3lzIHRoZSB1bmRlcmx5aW5nIExWaWV3LlxuICpcbiAqIEBwYXJhbSBsQ29udGFpbmVyIFRoZSBjb250YWluZXIgZnJvbSB3aGljaCB0byByZW1vdmUgYSB2aWV3XG4gKiBAcGFyYW0gcmVtb3ZlSW5kZXggVGhlIGluZGV4IG9mIHRoZSB2aWV3IHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVmlldyhsQ29udGFpbmVyOiBMQ29udGFpbmVyLCByZW1vdmVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IGRldGFjaGVkVmlldyA9IGRldGFjaFZpZXcobENvbnRhaW5lciwgcmVtb3ZlSW5kZXgpO1xuICBkZXRhY2hlZFZpZXcgJiYgZGVzdHJveUxWaWV3KGRldGFjaGVkVmlld1tUVklFV10sIGRldGFjaGVkVmlldyk7XG59XG5cbi8qKlxuICogQSBzdGFuZGFsb25lIGZ1bmN0aW9uIHdoaWNoIGRlc3Ryb3lzIGFuIExWaWV3LFxuICogY29uZHVjdGluZyBjbGVhbiB1cCAoZS5nLiByZW1vdmluZyBsaXN0ZW5lcnMsIGNhbGxpbmcgb25EZXN0cm95cykuXG4gKlxuICogQHBhcmFtIHRWaWV3IFRoZSBgVFZpZXcnIG9mIHRoZSBgTFZpZXdgIHRvIGJlIGRlc3Ryb3llZFxuICogQHBhcmFtIGxWaWV3IFRoZSB2aWV3IHRvIGJlIGRlc3Ryb3llZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lMVmlldyh0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldykge1xuICBpZiAoIShsVmlld1tGTEFHU10gJiBMVmlld0ZsYWdzLkRlc3Ryb3llZCkpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IGxWaWV3W1JFTkRFUkVSXTtcbiAgICBpZiAoaXNQcm9jZWR1cmFsUmVuZGVyZXIocmVuZGVyZXIpICYmIHJlbmRlcmVyLmRlc3Ryb3lOb2RlKSB7XG4gICAgICBhcHBseVZpZXcodFZpZXcsIGxWaWV3LCByZW5kZXJlciwgV2Fsa1ROb2RlVHJlZUFjdGlvbi5EZXN0cm95LCBudWxsLCBudWxsKTtcbiAgICB9XG5cbiAgICBkZXN0cm95Vmlld1RyZWUobFZpZXcpO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGljaCBMVmlld09yTENvbnRhaW5lciB0byBqdW1wIHRvIHdoZW4gdHJhdmVyc2luZyBiYWNrIHVwIHRoZVxuICogdHJlZSBpbiBkZXN0cm95Vmlld1RyZWUuXG4gKlxuICogTm9ybWFsbHksIHRoZSB2aWV3J3MgcGFyZW50IExWaWV3IHNob3VsZCBiZSBjaGVja2VkLCBidXQgaW4gdGhlIGNhc2Ugb2ZcbiAqIGVtYmVkZGVkIHZpZXdzLCB0aGUgY29udGFpbmVyICh3aGljaCBpcyB0aGUgdmlldyBub2RlJ3MgcGFyZW50LCBidXQgbm90IHRoZVxuICogTFZpZXcncyBwYXJlbnQpIG5lZWRzIHRvIGJlIGNoZWNrZWQgZm9yIGEgcG9zc2libGUgbmV4dCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0gbFZpZXdPckxDb250YWluZXIgVGhlIExWaWV3T3JMQ29udGFpbmVyIGZvciB3aGljaCB3ZSBuZWVkIGEgcGFyZW50IHN0YXRlXG4gKiBAcGFyYW0gcm9vdFZpZXcgVGhlIHJvb3RWaWV3LCBzbyB3ZSBkb24ndCBwcm9wYWdhdGUgdG9vIGZhciB1cCB0aGUgdmlldyB0cmVlXG4gKiBAcmV0dXJucyBUaGUgY29ycmVjdCBwYXJlbnQgTFZpZXdPckxDb250YWluZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudFN0YXRlKGxWaWV3T3JMQ29udGFpbmVyOiBMVmlldyB8IExDb250YWluZXIsIHJvb3RWaWV3OiBMVmlldyk6IExWaWV3fFxuICAgIExDb250YWluZXJ8bnVsbCB7XG4gIGxldCB0Tm9kZTtcbiAgaWYgKGlzTFZpZXcobFZpZXdPckxDb250YWluZXIpICYmICh0Tm9kZSA9IGxWaWV3T3JMQ29udGFpbmVyW1RfSE9TVF0pICYmXG4gICAgICB0Tm9kZS50eXBlID09PSBUTm9kZVR5cGUuVmlldykge1xuICAgIC8vIGlmIGl0J3MgYW4gZW1iZWRkZWQgdmlldywgdGhlIHN0YXRlIG5lZWRzIHRvIGdvIHVwIHRvIHRoZSBjb250YWluZXIsIGluIGNhc2UgdGhlXG4gICAgLy8gY29udGFpbmVyIGhhcyBhIG5leHRcbiAgICByZXR1cm4gZ2V0TENvbnRhaW5lcih0Tm9kZSBhcyBUVmlld05vZGUsIGxWaWV3T3JMQ29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2UsIHVzZSBwYXJlbnQgdmlldyBmb3IgY29udGFpbmVycyBvciBjb21wb25lbnQgdmlld3NcbiAgICByZXR1cm4gbFZpZXdPckxDb250YWluZXJbUEFSRU5UXSA9PT0gcm9vdFZpZXcgPyBudWxsIDogbFZpZXdPckxDb250YWluZXJbUEFSRU5UXTtcbiAgfVxufVxuXG4vKipcbiAqIENhbGxzIG9uRGVzdHJveXMgaG9va3MgZm9yIGFsbCBkaXJlY3RpdmVzIGFuZCBwaXBlcyBpbiBhIGdpdmVuIHZpZXcgYW5kIHRoZW4gcmVtb3ZlcyBhbGxcbiAqIGxpc3RlbmVycy4gTGlzdGVuZXJzIGFyZSByZW1vdmVkIGFzIHRoZSBsYXN0IHN0ZXAgc28gZXZlbnRzIGRlbGl2ZXJlZCBpbiB0aGUgb25EZXN0cm95cyBob29rc1xuICogY2FuIGJlIHByb3BhZ2F0ZWQgdG8gQE91dHB1dCBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHRWaWV3IGBUVmlld2AgZm9yIHRoZSBgTFZpZXdgIHRvIGNsZWFuIHVwLlxuICogQHBhcmFtIGxWaWV3IFRoZSBMVmlldyB0byBjbGVhbiB1cFxuICovXG5mdW5jdGlvbiBjbGVhblVwVmlldyh0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldyk6IHZvaWQge1xuICBpZiAoIShsVmlld1tGTEFHU10gJiBMVmlld0ZsYWdzLkRlc3Ryb3llZCkpIHtcbiAgICAvLyBVc3VhbGx5IHRoZSBBdHRhY2hlZCBmbGFnIGlzIHJlbW92ZWQgd2hlbiB0aGUgdmlldyBpcyBkZXRhY2hlZCBmcm9tIGl0cyBwYXJlbnQsIGhvd2V2ZXJcbiAgICAvLyBpZiBpdCdzIGEgcm9vdCB2aWV3LCB0aGUgZmxhZyB3b24ndCBiZSB1bnNldCBoZW5jZSB3aHkgd2UncmUgYWxzbyByZW1vdmluZyBvbiBkZXN0cm95LlxuICAgIGxWaWV3W0ZMQUdTXSAmPSB+TFZpZXdGbGFncy5BdHRhY2hlZDtcblxuICAgIC8vIE1hcmsgdGhlIExWaWV3IGFzIGRlc3Ryb3llZCAqYmVmb3JlKiBleGVjdXRpbmcgdGhlIG9uRGVzdHJveSBob29rcy4gQW4gb25EZXN0cm95IGhvb2tcbiAgICAvLyBydW5zIGFyYml0cmFyeSB1c2VyIGNvZGUsIHdoaWNoIGNvdWxkIGluY2x1ZGUgaXRzIG93biBgdmlld1JlZi5kZXN0cm95KClgIChvciBzaW1pbGFyKS4gSWZcbiAgICAvLyBXZSBkb24ndCBmbGFnIHRoZSB2aWV3IGFzIGRlc3Ryb3llZCBiZWZvcmUgdGhlIGhvb2tzLCB0aGlzIGNvdWxkIGxlYWQgdG8gYW4gaW5maW5pdGUgbG9vcC5cbiAgICAvLyBUaGlzIGFsc28gYWxpZ25zIHdpdGggdGhlIFZpZXdFbmdpbmUgYmVoYXZpb3IuIEl0IGFsc28gbWVhbnMgdGhhdCB0aGUgb25EZXN0cm95IGhvb2sgaXNcbiAgICAvLyByZWFsbHkgbW9yZSBvZiBhbiBcImFmdGVyRGVzdHJveVwiIGhvb2sgaWYgeW91IHRoaW5rIGFib3V0IGl0LlxuICAgIGxWaWV3W0ZMQUdTXSB8PSBMVmlld0ZsYWdzLkRlc3Ryb3llZDtcblxuICAgIGV4ZWN1dGVPbkRlc3Ryb3lzKHRWaWV3LCBsVmlldyk7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKHRWaWV3LCBsVmlldyk7XG4gICAgY29uc3QgaG9zdFROb2RlID0gbFZpZXdbVF9IT1NUXTtcbiAgICAvLyBGb3IgY29tcG9uZW50IHZpZXdzIG9ubHksIHRoZSBsb2NhbCByZW5kZXJlciBpcyBkZXN0cm95ZWQgYXMgY2xlYW4gdXAgdGltZS5cbiAgICBpZiAoaG9zdFROb2RlICYmIGhvc3RUTm9kZS50eXBlID09PSBUTm9kZVR5cGUuRWxlbWVudCAmJlxuICAgICAgICBpc1Byb2NlZHVyYWxSZW5kZXJlcihsVmlld1tSRU5ERVJFUl0pKSB7XG4gICAgICBuZ0Rldk1vZGUgJiYgbmdEZXZNb2RlLnJlbmRlcmVyRGVzdHJveSsrO1xuICAgICAgKGxWaWV3W1JFTkRFUkVSXSBhcyBQcm9jZWR1cmFsUmVuZGVyZXIzKS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjbGFyYXRpb25Db250YWluZXIgPSBsVmlld1tERUNMQVJBVElPTl9MQ09OVEFJTkVSXTtcbiAgICAvLyB3ZSBhcmUgZGVhbGluZyB3aXRoIGFuIGVtYmVkZGVkIHZpZXcgdGhhdCBpcyBzdGlsbCBpbnNlcnRlZCBpbnRvIGEgY29udGFpbmVyXG4gICAgaWYgKGRlY2xhcmF0aW9uQ29udGFpbmVyICE9PSBudWxsICYmIGlzTENvbnRhaW5lcihsVmlld1tQQVJFTlRdKSkge1xuICAgICAgLy8gYW5kIHRoaXMgaXMgYSBwcm9qZWN0ZWQgdmlld1xuICAgICAgaWYgKGRlY2xhcmF0aW9uQ29udGFpbmVyICE9PSBsVmlld1tQQVJFTlRdKSB7XG4gICAgICAgIGRldGFjaE1vdmVkVmlldyhkZWNsYXJhdGlvbkNvbnRhaW5lciwgbFZpZXcpO1xuICAgICAgfVxuXG4gICAgICAvLyBGb3IgZW1iZWRkZWQgdmlld3Mgc3RpbGwgYXR0YWNoZWQgdG8gYSBjb250YWluZXI6IHJlbW92ZSBxdWVyeSByZXN1bHQgZnJvbSB0aGlzIHZpZXcuXG4gICAgICBjb25zdCBsUXVlcmllcyA9IGxWaWV3W1FVRVJJRVNdO1xuICAgICAgaWYgKGxRdWVyaWVzICE9PSBudWxsKSB7XG4gICAgICAgIGxRdWVyaWVzLmRldGFjaFZpZXcodFZpZXcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiogUmVtb3ZlcyBsaXN0ZW5lcnMgYW5kIHVuc3Vic2NyaWJlcyBmcm9tIG91dHB1dCBzdWJzY3JpcHRpb25zICovXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnModFZpZXc6IFRWaWV3LCBsVmlldzogTFZpZXcpOiB2b2lkIHtcbiAgY29uc3QgdENsZWFudXAgPSB0Vmlldy5jbGVhbnVwO1xuICBpZiAodENsZWFudXAgIT09IG51bGwpIHtcbiAgICBjb25zdCBsQ2xlYW51cCA9IGxWaWV3W0NMRUFOVVBdICE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0Q2xlYW51cC5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgIGlmICh0eXBlb2YgdENsZWFudXBbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYSBuYXRpdmUgRE9NIGxpc3RlbmVyXG4gICAgICAgIGNvbnN0IGlkeE9yVGFyZ2V0R2V0dGVyID0gdENsZWFudXBbaSArIDFdO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0eXBlb2YgaWR4T3JUYXJnZXRHZXR0ZXIgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgaWR4T3JUYXJnZXRHZXR0ZXIobFZpZXcpIDpcbiAgICAgICAgICAgIHVud3JhcFJOb2RlKGxWaWV3W2lkeE9yVGFyZ2V0R2V0dGVyXSk7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gbENsZWFudXBbdENsZWFudXBbaSArIDJdXTtcbiAgICAgICAgY29uc3QgdXNlQ2FwdHVyZU9yU3ViSWR4ID0gdENsZWFudXBbaSArIDNdO1xuICAgICAgICBpZiAodHlwZW9mIHVzZUNhcHR1cmVPclN1YklkeCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgLy8gbmF0aXZlIERPTSBsaXN0ZW5lciByZWdpc3RlcmVkIHdpdGggUmVuZGVyZXIzXG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodENsZWFudXBbaV0sIGxpc3RlbmVyLCB1c2VDYXB0dXJlT3JTdWJJZHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh1c2VDYXB0dXJlT3JTdWJJZHggPj0gMCkge1xuICAgICAgICAgICAgLy8gdW5yZWdpc3RlclxuICAgICAgICAgICAgbENsZWFudXBbdXNlQ2FwdHVyZU9yU3ViSWR4XSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTdWJzY3JpcHRpb25cbiAgICAgICAgICAgIGxDbGVhbnVwWy11c2VDYXB0dXJlT3JTdWJJZHhdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgaXMgZ3JvdXBlZCB3aXRoIHRoZSBpbmRleCBvZiBpdHMgY29udGV4dFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gbENsZWFudXBbdENsZWFudXBbaSArIDFdXTtcbiAgICAgICAgdENsZWFudXBbaV0uY2FsbChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbFZpZXdbQ0xFQU5VUF0gPSBudWxsO1xuICB9XG59XG5cbi8qKiBDYWxscyBvbkRlc3Ryb3kgaG9va3MgZm9yIHRoaXMgdmlldyAqL1xuZnVuY3Rpb24gZXhlY3V0ZU9uRGVzdHJveXModFZpZXc6IFRWaWV3LCBsVmlldzogTFZpZXcpOiB2b2lkIHtcbiAgbGV0IGRlc3Ryb3lIb29rczogSG9va0RhdGF8bnVsbDtcblxuICBpZiAodFZpZXcgIT0gbnVsbCAmJiAoZGVzdHJveUhvb2tzID0gdFZpZXcuZGVzdHJveUhvb2tzKSAhPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cm95SG9va3MubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBsVmlld1tkZXN0cm95SG9va3NbaV0gYXMgbnVtYmVyXTtcblxuICAgICAgLy8gT25seSBjYWxsIHRoZSBkZXN0cm95IGhvb2sgaWYgdGhlIGNvbnRleHQgaGFzIGJlZW4gcmVxdWVzdGVkLlxuICAgICAgaWYgKCEoY29udGV4dCBpbnN0YW5jZW9mIE5vZGVJbmplY3RvckZhY3RvcnkpKSB7XG4gICAgICAgIChkZXN0cm95SG9va3NbaSArIDFdIGFzKCkgPT4gdm9pZCkuY2FsbChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmF0aXZlIGVsZW1lbnQgaWYgYSBub2RlIGNhbiBiZSBpbnNlcnRlZCBpbnRvIHRoZSBnaXZlbiBwYXJlbnQuXG4gKlxuICogVGhlcmUgYXJlIHR3byByZWFzb25zIHdoeSB3ZSBtYXkgbm90IGJlIGFibGUgdG8gaW5zZXJ0IGEgZWxlbWVudCBpbW1lZGlhdGVseS5cbiAqIC0gUHJvamVjdGlvbjogV2hlbiBjcmVhdGluZyBhIGNoaWxkIGNvbnRlbnQgZWxlbWVudCBvZiBhIGNvbXBvbmVudCwgd2UgaGF2ZSB0byBza2lwIHRoZVxuICogICBpbnNlcnRpb24gYmVjYXVzZSB0aGUgY29udGVudCBvZiBhIGNvbXBvbmVudCB3aWxsIGJlIHByb2plY3RlZC5cbiAqICAgYDxjb21wb25lbnQ+PGNvbnRlbnQ+ZGVsYXllZCBkdWUgdG8gcHJvamVjdGlvbjwvY29udGVudD48L2NvbXBvbmVudD5gXG4gKiAtIFBhcmVudCBjb250YWluZXIgaXMgZGlzY29ubmVjdGVkOiBUaGlzIGNhbiBoYXBwZW4gd2hlbiB3ZSBhcmUgaW5zZXJ0aW5nIGEgdmlldyBpbnRvXG4gKiAgIHBhcmVudCBjb250YWluZXIsIHdoaWNoIGl0c2VsZiBpcyBkaXNjb25uZWN0ZWQuIEZvciBleGFtcGxlIHRoZSBwYXJlbnQgY29udGFpbmVyIGlzIHBhcnRcbiAqICAgb2YgYSBWaWV3IHdoaWNoIGhhcyBub3QgYmUgaW5zZXJ0ZWQgb3IgaXMgbWFkZSBmb3IgcHJvamVjdGlvbiBidXQgaGFzIG5vdCBiZWVuIGluc2VydGVkXG4gKiAgIGludG8gZGVzdGluYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldFJlbmRlclBhcmVudCh0VmlldzogVFZpZXcsIHROb2RlOiBUTm9kZSwgY3VycmVudFZpZXc6IExWaWV3KTogUkVsZW1lbnR8bnVsbCB7XG4gIC8vIFNraXAgb3ZlciBlbGVtZW50IGFuZCBJQ1UgY29udGFpbmVycyBhcyB0aG9zZSBhcmUgcmVwcmVzZW50ZWQgYnkgYSBjb21tZW50IG5vZGUgYW5kXG4gIC8vIGNhbid0IGJlIHVzZWQgYXMgYSByZW5kZXIgcGFyZW50LlxuICBsZXQgcGFyZW50VE5vZGUgPSB0Tm9kZS5wYXJlbnQ7XG4gIHdoaWxlIChwYXJlbnRUTm9kZSAhPSBudWxsICYmIChwYXJlbnRUTm9kZS50eXBlID09PSBUTm9kZVR5cGUuRWxlbWVudENvbnRhaW5lciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50VE5vZGUudHlwZSA9PT0gVE5vZGVUeXBlLkljdUNvbnRhaW5lcikpIHtcbiAgICB0Tm9kZSA9IHBhcmVudFROb2RlO1xuICAgIHBhcmVudFROb2RlID0gdE5vZGUucGFyZW50O1xuICB9XG5cbiAgLy8gSWYgdGhlIHBhcmVudCB0Tm9kZSBpcyBudWxsLCB0aGVuIHdlIGFyZSBpbnNlcnRpbmcgYWNyb3NzIHZpZXdzOiBlaXRoZXIgaW50byBhbiBlbWJlZGRlZCB2aWV3XG4gIC8vIG9yIGEgY29tcG9uZW50IHZpZXcuXG4gIGlmIChwYXJlbnRUTm9kZSA9PSBudWxsKSB7XG4gICAgY29uc3QgaG9zdFROb2RlID0gY3VycmVudFZpZXdbVF9IT1NUXSAhO1xuICAgIGlmIChob3N0VE5vZGUudHlwZSA9PT0gVE5vZGVUeXBlLlZpZXcpIHtcbiAgICAgIC8vIFdlIGFyZSBpbnNlcnRpbmcgYSByb290IGVsZW1lbnQgb2YgYW4gZW1iZWRkZWQgdmlldyBXZSBtaWdodCBkZWxheSBpbnNlcnRpb24gb2YgY2hpbGRyZW5cbiAgICAgIC8vIGZvciBhIGdpdmVuIHZpZXcgaWYgaXQgaXMgZGlzY29ubmVjdGVkLiBUaGlzIG1pZ2h0IGhhcHBlbiBmb3IgMiBtYWluIHJlYXNvbnM6XG4gICAgICAvLyAtIHZpZXcgaXMgbm90IGluc2VydGVkIGludG8gYW55IGNvbnRhaW5lcih2aWV3IHdhcyBjcmVhdGVkIGJ1dCBub3QgaW5zZXJ0ZWQgeWV0KVxuICAgICAgLy8gLSB2aWV3IGlzIGluc2VydGVkIGludG8gYSBjb250YWluZXIgYnV0IHRoZSBjb250YWluZXIgaXRzZWxmIGlzIG5vdCBpbnNlcnRlZCBpbnRvIHRoZSBET01cbiAgICAgIC8vIChjb250YWluZXIgbWlnaHQgYmUgcGFydCBvZiBwcm9qZWN0aW9uIG9yIGNoaWxkIG9mIGEgdmlldyB0aGF0IGlzIG5vdCBpbnNlcnRlZCB5ZXQpLlxuICAgICAgLy8gSW4gb3RoZXIgd29yZHMgd2UgY2FuIGluc2VydCBjaGlsZHJlbiBvZiBhIGdpdmVuIHZpZXcgaWYgdGhpcyB2aWV3IHdhcyBpbnNlcnRlZCBpbnRvIGFcbiAgICAgIC8vIGNvbnRhaW5lciBhbmQgdGhlIGNvbnRhaW5lciBpdHNlbGYgaGFzIGl0cyByZW5kZXIgcGFyZW50IGRldGVybWluZWQuXG4gICAgICByZXR1cm4gZ2V0Q29udGFpbmVyUmVuZGVyUGFyZW50KGhvc3RUTm9kZSBhcyBUVmlld05vZGUsIGN1cnJlbnRWaWV3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgYXJlIGluc2VydGluZyBhIHJvb3QgZWxlbWVudCBvZiB0aGUgY29tcG9uZW50IHZpZXcgaW50byB0aGUgY29tcG9uZW50IGhvc3QgZWxlbWVudCBhbmRcbiAgICAgIC8vIGl0IHNob3VsZCBhbHdheXMgYmUgZWFnZXIuXG4gICAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0Tm9kZU9mUG9zc2libGVUeXBlcyhob3N0VE5vZGUsIFROb2RlVHlwZS5FbGVtZW50KTtcbiAgICAgIHJldHVybiBjdXJyZW50Vmlld1tIT1NUXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaXNJY3VDYXNlID0gdE5vZGUgJiYgdE5vZGUudHlwZSA9PT0gVE5vZGVUeXBlLkljdUNvbnRhaW5lcjtcbiAgICAvLyBJZiB0aGUgcGFyZW50IG9mIHRoaXMgbm9kZSBpcyBhbiBJQ1UgY29udGFpbmVyLCB0aGVuIGl0IGlzIHJlcHJlc2VudGVkIGJ5IGNvbW1lbnQgbm9kZSBhbmQgd2VcbiAgICAvLyBuZWVkIHRvIHVzZSBpdCBhcyBhbiBhbmNob3IuIElmIGl0IGlzIHByb2plY3RlZCB0aGVuIGl0J3MgZGlyZWN0IHBhcmVudCBub2RlIGlzIHRoZSByZW5kZXJlci5cbiAgICBpZiAoaXNJY3VDYXNlICYmIHROb2RlLmZsYWdzICYgVE5vZGVGbGFncy5pc1Byb2plY3RlZCkge1xuICAgICAgcmV0dXJuIGdldE5hdGl2ZUJ5VE5vZGUodE5vZGUsIGN1cnJlbnRWaWV3KS5wYXJlbnROb2RlIGFzIFJFbGVtZW50O1xuICAgIH1cblxuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnROb2RlVHlwZShwYXJlbnRUTm9kZSwgVE5vZGVUeXBlLkVsZW1lbnQpO1xuICAgIGlmIChwYXJlbnRUTm9kZS5mbGFncyAmIFROb2RlRmxhZ3MuaXNDb21wb25lbnRIb3N0KSB7XG4gICAgICBjb25zdCB0RGF0YSA9IHRWaWV3LmRhdGE7XG4gICAgICBjb25zdCB0Tm9kZSA9IHREYXRhW3BhcmVudFROb2RlLmluZGV4XSBhcyBUTm9kZTtcbiAgICAgIGNvbnN0IGVuY2Fwc3VsYXRpb24gPSAodERhdGFbdE5vZGUuZGlyZWN0aXZlU3RhcnRdIGFzIENvbXBvbmVudERlZjxhbnk+KS5lbmNhcHN1bGF0aW9uO1xuXG4gICAgICAvLyBXZSd2ZSBnb3QgYSBwYXJlbnQgd2hpY2ggaXMgYW4gZWxlbWVudCBpbiB0aGUgY3VycmVudCB2aWV3LiBXZSBqdXN0IG5lZWQgdG8gdmVyaWZ5IGlmIHRoZVxuICAgICAgLy8gcGFyZW50IGVsZW1lbnQgaXMgbm90IGEgY29tcG9uZW50LiBDb21wb25lbnQncyBjb250ZW50IG5vZGVzIGFyZSBub3QgaW5zZXJ0ZWQgaW1tZWRpYXRlbHlcbiAgICAgIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIHByb2plY3RlZCwgYW5kIHNvIGRvaW5nIGluc2VydCBhdCB0aGlzIHBvaW50IHdvdWxkIGJlIHdhc3RlZnVsLlxuICAgICAgLy8gU2luY2UgdGhlIHByb2plY3Rpb24gd291bGQgdGhlbiBtb3ZlIGl0IHRvIGl0cyBmaW5hbCBkZXN0aW5hdGlvbi4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgICAvLyBtYWtlIHRoaXMgYXNzdW1wdGlvbiB3aGVuIHVzaW5nIHRoZSBTaGFkb3cgRE9NLCBiZWNhdXNlIHRoZSBuYXRpdmUgcHJvamVjdGlvbiBwbGFjZWhvbGRlcnNcbiAgICAgIC8vICg8Y29udGVudD4gb3IgPHNsb3Q+KSBoYXZlIHRvIGJlIGluIHBsYWNlIGFzIGVsZW1lbnRzIGFyZSBiZWluZyBpbnNlcnRlZC5cbiAgICAgIGlmIChlbmNhcHN1bGF0aW9uICE9PSBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20gJiZcbiAgICAgICAgICBlbmNhcHN1bGF0aW9uICE9PSBWaWV3RW5jYXBzdWxhdGlvbi5OYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE5hdGl2ZUJ5VE5vZGUocGFyZW50VE5vZGUsIGN1cnJlbnRWaWV3KSBhcyBSRWxlbWVudDtcbiAgfVxufVxuXG4vKipcbiAqIEluc2VydHMgYSBuYXRpdmUgbm9kZSBiZWZvcmUgYW5vdGhlciBuYXRpdmUgbm9kZSBmb3IgYSBnaXZlbiBwYXJlbnQgdXNpbmcge0BsaW5rIFJlbmRlcmVyM30uXG4gKiBUaGlzIGlzIGEgdXRpbGl0eSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHdoZW4gbmF0aXZlIG5vZGVzIHdlcmUgZGV0ZXJtaW5lZCAtIGl0IGFic3RyYWN0cyBhblxuICogYWN0dWFsIHJlbmRlcmVyIGJlaW5nIHVzZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXRpdmVJbnNlcnRCZWZvcmUoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMywgcGFyZW50OiBSRWxlbWVudCwgY2hpbGQ6IFJOb2RlLCBiZWZvcmVOb2RlOiBSTm9kZSB8IG51bGwpOiB2b2lkIHtcbiAgbmdEZXZNb2RlICYmIG5nRGV2TW9kZS5yZW5kZXJlckluc2VydEJlZm9yZSsrO1xuICBpZiAoaXNQcm9jZWR1cmFsUmVuZGVyZXIocmVuZGVyZXIpKSB7XG4gICAgcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHBhcmVudCwgY2hpbGQsIGJlZm9yZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIGJlZm9yZU5vZGUsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hdGl2ZUFwcGVuZENoaWxkKHJlbmRlcmVyOiBSZW5kZXJlcjMsIHBhcmVudDogUkVsZW1lbnQsIGNoaWxkOiBSTm9kZSk6IHZvaWQge1xuICBuZ0Rldk1vZGUgJiYgbmdEZXZNb2RlLnJlbmRlcmVyQXBwZW5kQ2hpbGQrKztcbiAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQocGFyZW50LCAncGFyZW50IG5vZGUgbXVzdCBiZSBkZWZpbmVkJyk7XG4gIGlmIChpc1Byb2NlZHVyYWxSZW5kZXJlcihyZW5kZXJlcikpIHtcbiAgICByZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hdGl2ZUFwcGVuZE9ySW5zZXJ0QmVmb3JlKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjMsIHBhcmVudDogUkVsZW1lbnQsIGNoaWxkOiBSTm9kZSwgYmVmb3JlTm9kZTogUk5vZGUgfCBudWxsKSB7XG4gIGlmIChiZWZvcmVOb2RlICE9PSBudWxsKSB7XG4gICAgbmF0aXZlSW5zZXJ0QmVmb3JlKHJlbmRlcmVyLCBwYXJlbnQsIGNoaWxkLCBiZWZvcmVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBuYXRpdmVBcHBlbmRDaGlsZChyZW5kZXJlciwgcGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuLyoqIFJlbW92ZXMgYSBub2RlIGZyb20gdGhlIERPTSBnaXZlbiBpdHMgbmF0aXZlIHBhcmVudC4gKi9cbmZ1bmN0aW9uIG5hdGl2ZVJlbW92ZUNoaWxkKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjMsIHBhcmVudDogUkVsZW1lbnQsIGNoaWxkOiBSTm9kZSwgaXNIb3N0RWxlbWVudD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKGlzUHJvY2VkdXJhbFJlbmRlcmVyKHJlbmRlcmVyKSkge1xuICAgIHJlbmRlcmVyLnJlbW92ZUNoaWxkKHBhcmVudCwgY2hpbGQsIGlzSG9zdEVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmF0aXZlIHBhcmVudCBvZiBhIGdpdmVuIG5hdGl2ZSBub2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmF0aXZlUGFyZW50Tm9kZShyZW5kZXJlcjogUmVuZGVyZXIzLCBub2RlOiBSTm9kZSk6IFJFbGVtZW50fG51bGwge1xuICByZXR1cm4gKGlzUHJvY2VkdXJhbFJlbmRlcmVyKHJlbmRlcmVyKSA/IHJlbmRlcmVyLnBhcmVudE5vZGUobm9kZSkgOiBub2RlLnBhcmVudE5vZGUpIGFzIFJFbGVtZW50O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBuYXRpdmUgc2libGluZyBvZiBhIGdpdmVuIG5hdGl2ZSBub2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmF0aXZlTmV4dFNpYmxpbmcocmVuZGVyZXI6IFJlbmRlcmVyMywgbm9kZTogUk5vZGUpOiBSTm9kZXxudWxsIHtcbiAgcmV0dXJuIGlzUHJvY2VkdXJhbFJlbmRlcmVyKHJlbmRlcmVyKSA/IHJlbmRlcmVyLm5leHRTaWJsaW5nKG5vZGUpIDogbm9kZS5uZXh0U2libGluZztcbn1cblxuLyoqXG4gKiBGaW5kcyBhIG5hdGl2ZSBcImFuY2hvclwiIG5vZGUgZm9yIGNhc2VzIHdoZXJlIHdlIGNhbid0IGFwcGVuZCBhIG5hdGl2ZSBjaGlsZCBkaXJlY3RseVxuICogKGBhcHBlbmRDaGlsZGApIGFuZCBuZWVkIHRvIHVzZSBhIHJlZmVyZW5jZSAoYW5jaG9yKSBub2RlIGZvciB0aGUgYGluc2VydEJlZm9yZWAgb3BlcmF0aW9uLlxuICogQHBhcmFtIHBhcmVudFROb2RlXG4gKiBAcGFyYW0gbFZpZXdcbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlQW5jaG9yTm9kZShwYXJlbnRUTm9kZTogVE5vZGUsIGxWaWV3OiBMVmlldyk6IFJOb2RlfG51bGwge1xuICBpZiAocGFyZW50VE5vZGUudHlwZSA9PT0gVE5vZGVUeXBlLlZpZXcpIHtcbiAgICBjb25zdCBsQ29udGFpbmVyID0gZ2V0TENvbnRhaW5lcihwYXJlbnRUTm9kZSBhcyBUVmlld05vZGUsIGxWaWV3KTtcbiAgICBpZiAobENvbnRhaW5lciA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgaW5kZXggPSBsQ29udGFpbmVyLmluZGV4T2YobFZpZXcsIENPTlRBSU5FUl9IRUFERVJfT0ZGU0VUKSAtIENPTlRBSU5FUl9IRUFERVJfT0ZGU0VUO1xuICAgIHJldHVybiBnZXRCZWZvcmVOb2RlRm9yVmlldyhpbmRleCwgbENvbnRhaW5lcik7XG4gIH0gZWxzZSBpZiAoXG4gICAgICBwYXJlbnRUTm9kZS50eXBlID09PSBUTm9kZVR5cGUuRWxlbWVudENvbnRhaW5lciB8fFxuICAgICAgcGFyZW50VE5vZGUudHlwZSA9PT0gVE5vZGVUeXBlLkljdUNvbnRhaW5lcikge1xuICAgIHJldHVybiBnZXROYXRpdmVCeVROb2RlKHBhcmVudFROb2RlLCBsVmlldyk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgYGNoaWxkYCBuYXRpdmUgbm9kZSAob3IgYSBjb2xsZWN0aW9uIG9mIG5vZGVzKSB0byB0aGUgYHBhcmVudGAuXG4gKlxuICogVGhlIGVsZW1lbnQgaW5zZXJ0aW9uIG1pZ2h0IGJlIGRlbGF5ZWQge0BsaW5rIGNhbkluc2VydE5hdGl2ZU5vZGV9LlxuICpcbiAqIEBwYXJhbSB0VmlldyBUaGUgYFRWaWV3JyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIGxWaWV3IFRoZSBjdXJyZW50IExWaWV3XG4gKiBAcGFyYW0gY2hpbGRFbCBUaGUgbmF0aXZlIGNoaWxkIChvciBjaGlsZHJlbikgdGhhdCBzaG91bGQgYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSBjaGlsZFROb2RlIFRoZSBUTm9kZSBvZiB0aGUgY2hpbGQgZWxlbWVudFxuICogQHJldHVybnMgV2hldGhlciBvciBub3QgdGhlIGNoaWxkIHdhcyBhcHBlbmRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGQoXG4gICAgdFZpZXc6IFRWaWV3LCBsVmlldzogTFZpZXcsIGNoaWxkRWw6IFJOb2RlIHwgUk5vZGVbXSwgY2hpbGRUTm9kZTogVE5vZGUpOiB2b2lkIHtcbiAgY29uc3QgcmVuZGVyUGFyZW50ID0gZ2V0UmVuZGVyUGFyZW50KHRWaWV3LCBjaGlsZFROb2RlLCBsVmlldyk7XG4gIGlmIChyZW5kZXJQYXJlbnQgIT0gbnVsbCkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbFZpZXdbUkVOREVSRVJdO1xuICAgIGNvbnN0IHBhcmVudFROb2RlOiBUTm9kZSA9IGNoaWxkVE5vZGUucGFyZW50IHx8IGxWaWV3W1RfSE9TVF0gITtcbiAgICBjb25zdCBhbmNob3JOb2RlID0gZ2V0TmF0aXZlQW5jaG9yTm9kZShwYXJlbnRUTm9kZSwgbFZpZXcpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkRWwpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmF0aXZlQXBwZW5kT3JJbnNlcnRCZWZvcmUocmVuZGVyZXIsIHJlbmRlclBhcmVudCwgY2hpbGRFbFtpXSwgYW5jaG9yTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdGl2ZUFwcGVuZE9ySW5zZXJ0QmVmb3JlKHJlbmRlcmVyLCByZW5kZXJQYXJlbnQsIGNoaWxkRWwsIGFuY2hvck5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IG5hdGl2ZSBub2RlIGZvciBhIGdpdmVuIExWaWV3LCBzdGFydGluZyBmcm9tIHRoZSBwcm92aWRlZCBUTm9kZS5cbiAqXG4gKiBOYXRpdmUgbm9kZXMgYXJlIHJldHVybmVkIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aG9zZSBhcHBlYXIgaW4gdGhlIG5hdGl2ZSB0cmVlIChET00pLlxuICovXG5mdW5jdGlvbiBnZXRGaXJzdE5hdGl2ZU5vZGUobFZpZXc6IExWaWV3LCB0Tm9kZTogVE5vZGUgfCBudWxsKTogUk5vZGV8bnVsbCB7XG4gIGlmICh0Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnROb2RlT2ZQb3NzaWJsZVR5cGVzKFxuICAgICAgICAgICAgICAgICAgICAgdE5vZGUsIFROb2RlVHlwZS5FbGVtZW50LCBUTm9kZVR5cGUuQ29udGFpbmVyLCBUTm9kZVR5cGUuRWxlbWVudENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgIFROb2RlVHlwZS5JY3VDb250YWluZXIsIFROb2RlVHlwZS5Qcm9qZWN0aW9uKTtcblxuICAgIGNvbnN0IHROb2RlVHlwZSA9IHROb2RlLnR5cGU7XG4gICAgaWYgKHROb2RlVHlwZSA9PT0gVE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBnZXROYXRpdmVCeVROb2RlKHROb2RlLCBsVmlldyk7XG4gICAgfSBlbHNlIGlmICh0Tm9kZVR5cGUgPT09IFROb2RlVHlwZS5Db250YWluZXIpIHtcbiAgICAgIHJldHVybiBnZXRCZWZvcmVOb2RlRm9yVmlldygtMSwgbFZpZXdbdE5vZGUuaW5kZXhdKTtcbiAgICB9IGVsc2UgaWYgKHROb2RlVHlwZSA9PT0gVE5vZGVUeXBlLkVsZW1lbnRDb250YWluZXIgfHwgdE5vZGVUeXBlID09PSBUTm9kZVR5cGUuSWN1Q29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbEljdUNvbnRhaW5lckNoaWxkID0gdE5vZGUuY2hpbGQ7XG4gICAgICBpZiAoZWxJY3VDb250YWluZXJDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZ2V0Rmlyc3ROYXRpdmVOb2RlKGxWaWV3LCBlbEljdUNvbnRhaW5lckNoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJOb2RlT3JMQ29udGFpbmVyID0gbFZpZXdbdE5vZGUuaW5kZXhdO1xuICAgICAgICBpZiAoaXNMQ29udGFpbmVyKHJOb2RlT3JMQ29udGFpbmVyKSkge1xuICAgICAgICAgIHJldHVybiBnZXRCZWZvcmVOb2RlRm9yVmlldygtMSwgck5vZGVPckxDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB1bndyYXBSTm9kZShyTm9kZU9yTENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tcG9uZW50VmlldyA9IGxWaWV3W0RFQ0xBUkFUSU9OX0NPTVBPTkVOVF9WSUVXXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEhvc3QgPSBjb21wb25lbnRWaWV3W1RfSE9TVF0gYXMgVEVsZW1lbnROb2RlO1xuICAgICAgY29uc3QgcGFyZW50VmlldyA9IGdldExWaWV3UGFyZW50KGNvbXBvbmVudFZpZXcpO1xuICAgICAgY29uc3QgZmlyc3RQcm9qZWN0ZWRUTm9kZTogVE5vZGV8bnVsbCA9XG4gICAgICAgICAgKGNvbXBvbmVudEhvc3QucHJvamVjdGlvbiBhcyhUTm9kZSB8IG51bGwpW10pW3ROb2RlLnByb2plY3Rpb24gYXMgbnVtYmVyXTtcblxuICAgICAgaWYgKGZpcnN0UHJvamVjdGVkVE5vZGUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZ2V0Rmlyc3ROYXRpdmVOb2RlKHBhcmVudFZpZXcgISwgZmlyc3RQcm9qZWN0ZWRUTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0Rmlyc3ROYXRpdmVOb2RlKGxWaWV3LCB0Tm9kZS5uZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlZm9yZU5vZGVGb3JWaWV3KHZpZXdJbmRleEluQ29udGFpbmVyOiBudW1iZXIsIGxDb250YWluZXI6IExDb250YWluZXIpOiBSTm9kZXxcbiAgICBudWxsIHtcbiAgY29uc3QgbmV4dFZpZXdJbmRleCA9IENPTlRBSU5FUl9IRUFERVJfT0ZGU0VUICsgdmlld0luZGV4SW5Db250YWluZXIgKyAxO1xuICBpZiAobmV4dFZpZXdJbmRleCA8IGxDb250YWluZXIubGVuZ3RoKSB7XG4gICAgY29uc3QgbFZpZXcgPSBsQ29udGFpbmVyW25leHRWaWV3SW5kZXhdIGFzIExWaWV3O1xuICAgIGNvbnN0IGZpcnN0VE5vZGVPZlZpZXcgPSBsVmlld1tUVklFV10uZmlyc3RDaGlsZDtcbiAgICBpZiAoZmlyc3RUTm9kZU9mVmlldyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGdldEZpcnN0TmF0aXZlTm9kZShsVmlldywgZmlyc3RUTm9kZU9mVmlldyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxDb250YWluZXJbTkFUSVZFXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgbmF0aXZlIG5vZGUgaXRzZWxmIHVzaW5nIGEgZ2l2ZW4gcmVuZGVyZXIuIFRvIHJlbW92ZSB0aGUgbm9kZSB3ZSBhcmUgbG9va2luZyB1cCBpdHNcbiAqIHBhcmVudCBmcm9tIHRoZSBuYXRpdmUgdHJlZSBhcyBub3QgYWxsIHBsYXRmb3JtcyAvIGJyb3dzZXJzIHN1cHBvcnQgdGhlIGVxdWl2YWxlbnQgb2ZcbiAqIG5vZGUucmVtb3ZlKCkuXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIEEgcmVuZGVyZXIgdG8gYmUgdXNlZFxuICogQHBhcmFtIHJOb2RlIFRoZSBuYXRpdmUgbm9kZSB0aGF0IHNob3VsZCBiZSByZW1vdmVkXG4gKiBAcGFyYW0gaXNIb3N0RWxlbWVudCBBIGZsYWcgaW5kaWNhdGluZyBpZiBhIG5vZGUgdG8gYmUgcmVtb3ZlZCBpcyBhIGhvc3Qgb2YgYSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXRpdmVSZW1vdmVOb2RlKHJlbmRlcmVyOiBSZW5kZXJlcjMsIHJOb2RlOiBSTm9kZSwgaXNIb3N0RWxlbWVudD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgY29uc3QgbmF0aXZlUGFyZW50ID0gbmF0aXZlUGFyZW50Tm9kZShyZW5kZXJlciwgck5vZGUpO1xuICBpZiAobmF0aXZlUGFyZW50KSB7XG4gICAgbmF0aXZlUmVtb3ZlQ2hpbGQocmVuZGVyZXIsIG5hdGl2ZVBhcmVudCwgck5vZGUsIGlzSG9zdEVsZW1lbnQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBQZXJmb3JtcyB0aGUgb3BlcmF0aW9uIG9mIGBhY3Rpb25gIG9uIHRoZSBub2RlLiBUeXBpY2FsbHkgdGhpcyBpbnZvbHZlcyBpbnNlcnRpbmcgb3IgcmVtb3ZpbmdcbiAqIG5vZGVzIG9uIHRoZSBMVmlldyBvciBwcm9qZWN0aW9uIGJvdW5kYXJ5LlxuICovXG5mdW5jdGlvbiBhcHBseU5vZGVzKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjMsIGFjdGlvbjogV2Fsa1ROb2RlVHJlZUFjdGlvbiwgdE5vZGU6IFROb2RlIHwgbnVsbCwgbFZpZXc6IExWaWV3LFxuICAgIHJlbmRlclBhcmVudDogUkVsZW1lbnQgfCBudWxsLCBiZWZvcmVOb2RlOiBSTm9kZSB8IG51bGwsIGlzUHJvamVjdGlvbjogYm9vbGVhbikge1xuICB3aGlsZSAodE5vZGUgIT0gbnVsbCkge1xuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnRUTm9kZUZvckxWaWV3KHROb2RlLCBsVmlldyk7XG4gICAgbmdEZXZNb2RlICYmIGFzc2VydE5vZGVPZlBvc3NpYmxlVHlwZXMoXG4gICAgICAgICAgICAgICAgICAgICB0Tm9kZSwgVE5vZGVUeXBlLkNvbnRhaW5lciwgVE5vZGVUeXBlLkVsZW1lbnQsIFROb2RlVHlwZS5FbGVtZW50Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgVE5vZGVUeXBlLlByb2plY3Rpb24sIFROb2RlVHlwZS5Qcm9qZWN0aW9uLCBUTm9kZVR5cGUuSWN1Q29udGFpbmVyKTtcbiAgICBjb25zdCByYXdTbG90VmFsdWUgPSBsVmlld1t0Tm9kZS5pbmRleF07XG4gICAgY29uc3QgdE5vZGVUeXBlID0gdE5vZGUudHlwZTtcbiAgICBpZiAoaXNQcm9qZWN0aW9uKSB7XG4gICAgICBpZiAoYWN0aW9uID09PSBXYWxrVE5vZGVUcmVlQWN0aW9uLkNyZWF0ZSkge1xuICAgICAgICByYXdTbG90VmFsdWUgJiYgYXR0YWNoUGF0Y2hEYXRhKHVud3JhcFJOb2RlKHJhd1Nsb3RWYWx1ZSksIGxWaWV3KTtcbiAgICAgICAgdE5vZGUuZmxhZ3MgfD0gVE5vZGVGbGFncy5pc1Byb2plY3RlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCh0Tm9kZS5mbGFncyAmIFROb2RlRmxhZ3MuaXNEZXRhY2hlZCkgIT09IFROb2RlRmxhZ3MuaXNEZXRhY2hlZCkge1xuICAgICAgaWYgKHROb2RlVHlwZSA9PT0gVE5vZGVUeXBlLkVsZW1lbnRDb250YWluZXIgfHwgdE5vZGVUeXBlID09PSBUTm9kZVR5cGUuSWN1Q29udGFpbmVyKSB7XG4gICAgICAgIGFwcGx5Tm9kZXMocmVuZGVyZXIsIGFjdGlvbiwgdE5vZGUuY2hpbGQsIGxWaWV3LCByZW5kZXJQYXJlbnQsIGJlZm9yZU5vZGUsIGZhbHNlKTtcbiAgICAgICAgYXBwbHlUb0VsZW1lbnRPckNvbnRhaW5lcihhY3Rpb24sIHJlbmRlcmVyLCByZW5kZXJQYXJlbnQsIHJhd1Nsb3RWYWx1ZSwgYmVmb3JlTm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKHROb2RlVHlwZSA9PT0gVE5vZGVUeXBlLlByb2plY3Rpb24pIHtcbiAgICAgICAgYXBwbHlQcm9qZWN0aW9uUmVjdXJzaXZlKFxuICAgICAgICAgICAgcmVuZGVyZXIsIGFjdGlvbiwgbFZpZXcsIHROb2RlIGFzIFRQcm9qZWN0aW9uTm9kZSwgcmVuZGVyUGFyZW50LCBiZWZvcmVOb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5nRGV2TW9kZSAmJiBhc3NlcnROb2RlT2ZQb3NzaWJsZVR5cGVzKHROb2RlLCBUTm9kZVR5cGUuRWxlbWVudCwgVE5vZGVUeXBlLkNvbnRhaW5lcik7XG4gICAgICAgIGFwcGx5VG9FbGVtZW50T3JDb250YWluZXIoYWN0aW9uLCByZW5kZXJlciwgcmVuZGVyUGFyZW50LCByYXdTbG90VmFsdWUsIGJlZm9yZU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0Tm9kZSA9IGlzUHJvamVjdGlvbiA/IHROb2RlLnByb2plY3Rpb25OZXh0IDogdE5vZGUubmV4dDtcbiAgfVxufVxuXG5cbi8qKlxuICogYGFwcGx5Vmlld2AgcGVyZm9ybXMgb3BlcmF0aW9uIG9uIHRoZSB2aWV3IGFzIHNwZWNpZmllZCBpbiBgYWN0aW9uYCAoaW5zZXJ0LCBkZXRhY2gsIGRlc3Ryb3kpXG4gKlxuICogSW5zZXJ0aW5nIGEgdmlldyB3aXRob3V0IHByb2plY3Rpb24gb3IgY29udGFpbmVycyBhdCB0b3AgbGV2ZWwgaXMgc2ltcGxlLiBKdXN0IGl0ZXJhdGUgb3ZlciB0aGVcbiAqIHJvb3Qgbm9kZXMgb2YgdGhlIFZpZXcsIGFuZCBmb3IgZWFjaCBub2RlIHBlcmZvcm0gdGhlIGBhY3Rpb25gLlxuICpcbiAqIFRoaW5ncyBnZXQgbW9yZSBjb21wbGljYXRlZCB3aXRoIGNvbnRhaW5lcnMgYW5kIHByb2plY3Rpb25zLiBUaGF0IGlzIGJlY2F1c2UgY29taW5nIGFjcm9zczpcbiAqIC0gQ29udGFpbmVyOiBpbXBsaWVzIHRoYXQgd2UgaGF2ZSB0byBpbnNlcnQvcmVtb3ZlL2Rlc3Ryb3kgdGhlIHZpZXdzIG9mIHRoYXQgY29udGFpbmVyIGFzIHdlbGxcbiAqICAgICAgICAgICAgICB3aGljaCBpbiB0dXJuIGNhbiBoYXZlIHRoZWlyIG93biBDb250YWluZXJzIGF0IHRoZSBWaWV3IHJvb3RzLlxuICogLSBQcm9qZWN0aW9uOiBpbXBsaWVzIHRoYXQgd2UgaGF2ZSB0byBpbnNlcnQvcmVtb3ZlL2Rlc3Ryb3kgdGhlIG5vZGVzIG9mIHRoZSBwcm9qZWN0aW9uLiBUaGVcbiAqICAgICAgICAgICAgICAgY29tcGxpY2F0aW9uIGlzIHRoYXQgdGhlIG5vZGVzIHdlIGFyZSBwcm9qZWN0aW5nIGNhbiB0aGVtc2VsdmVzIGhhdmUgQ29udGFpbmVyc1xuICogICAgICAgICAgICAgICBvciBvdGhlciBQcm9qZWN0aW9ucy5cbiAqXG4gKiBBcyB5b3UgY2FuIHNlZSB0aGlzIGlzIGEgdmVyeSByZWN1cnNpdmUgcHJvYmxlbS4gWWVzIHJlY3Vyc2lvbiBpcyBub3QgbW9zdCBlZmZpY2llbnQgYnV0IHRoZVxuICogY29kZSBpcyBjb21wbGljYXRlZCBlbm91Z2ggdGhhdCB0cnlpbmcgdG8gaW1wbGVtZW50ZWQgd2l0aCByZWN1cnNpb24gYmVjb21lcyB1bm1haW50YWluYWJsZS5cbiAqXG4gKiBAcGFyYW0gdFZpZXcgVGhlIGBUVmlldycgd2hpY2ggbmVlZHMgdG8gYmUgaW5zZXJ0ZWQsIGRldGFjaGVkLCBkZXN0cm95ZWRcbiAqIEBwYXJhbSBsVmlldyBUaGUgTFZpZXcgd2hpY2ggbmVlZHMgdG8gYmUgaW5zZXJ0ZWQsIGRldGFjaGVkLCBkZXN0cm95ZWQuXG4gKiBAcGFyYW0gcmVuZGVyZXIgUmVuZGVyZXIgdG8gdXNlXG4gKiBAcGFyYW0gYWN0aW9uIGFjdGlvbiB0byBwZXJmb3JtIChpbnNlcnQsIGRldGFjaCwgZGVzdHJveSlcbiAqIEBwYXJhbSByZW5kZXJQYXJlbnQgcGFyZW50IERPTSBlbGVtZW50IGZvciBpbnNlcnRpb24vcmVtb3ZhbC5cbiAqIEBwYXJhbSBiZWZvcmVOb2RlIEJlZm9yZSB3aGljaCBub2RlIHRoZSBpbnNlcnRpb25zIHNob3VsZCBoYXBwZW4uXG4gKi9cbmZ1bmN0aW9uIGFwcGx5VmlldyhcbiAgICB0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldywgcmVuZGVyZXI6IFJlbmRlcmVyMywgYWN0aW9uOiBXYWxrVE5vZGVUcmVlQWN0aW9uLFxuICAgIHJlbmRlclBhcmVudDogUkVsZW1lbnQgfCBudWxsLCBiZWZvcmVOb2RlOiBSTm9kZSB8IG51bGwpIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydE5vZGVUeXBlKHRWaWV3Lm5vZGUgISwgVE5vZGVUeXBlLlZpZXcpO1xuICBjb25zdCB2aWV3Um9vdFROb2RlOiBUTm9kZXxudWxsID0gdFZpZXcubm9kZSAhLmNoaWxkO1xuICBhcHBseU5vZGVzKHJlbmRlcmVyLCBhY3Rpb24sIHZpZXdSb290VE5vZGUsIGxWaWV3LCByZW5kZXJQYXJlbnQsIGJlZm9yZU5vZGUsIGZhbHNlKTtcbn1cblxuLyoqXG4gKiBgYXBwbHlQcm9qZWN0aW9uYCBwZXJmb3JtcyBvcGVyYXRpb24gb24gdGhlIHByb2plY3Rpb24uXG4gKlxuICogSW5zZXJ0aW5nIGEgcHJvamVjdGlvbiByZXF1aXJlcyB1cyB0byBsb2NhdGUgdGhlIHByb2plY3RlZCBub2RlcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LiBUaGVcbiAqIGNvbXBsaWNhdGlvbiBpcyB0aGF0IHRob3NlIG5vZGVzIHRoZW1zZWx2ZXMgY291bGQgYmUgcmUtcHJvamVjdGVkIGZyb20gdGhlaXIgcGFyZW50IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gdFZpZXcgVGhlIGBUVmlld2Agb2YgYExWaWV3YCB3aGljaCBuZWVkcyB0byBiZSBpbnNlcnRlZCwgZGV0YWNoZWQsIGRlc3Ryb3llZFxuICogQHBhcmFtIGxWaWV3IFRoZSBgTFZpZXdgIHdoaWNoIG5lZWRzIHRvIGJlIGluc2VydGVkLCBkZXRhY2hlZCwgZGVzdHJveWVkLlxuICogQHBhcmFtIHRQcm9qZWN0aW9uTm9kZSBub2RlIHRvIHByb2plY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UHJvamVjdGlvbih0VmlldzogVFZpZXcsIGxWaWV3OiBMVmlldywgdFByb2plY3Rpb25Ob2RlOiBUUHJvamVjdGlvbk5vZGUpIHtcbiAgY29uc3QgcmVuZGVyZXIgPSBsVmlld1tSRU5ERVJFUl07XG4gIGNvbnN0IHJlbmRlclBhcmVudCA9IGdldFJlbmRlclBhcmVudCh0VmlldywgdFByb2plY3Rpb25Ob2RlLCBsVmlldyk7XG4gIGNvbnN0IHBhcmVudFROb2RlID0gdFByb2plY3Rpb25Ob2RlLnBhcmVudCB8fCBsVmlld1tUX0hPU1RdICE7XG4gIGxldCBiZWZvcmVOb2RlID0gZ2V0TmF0aXZlQW5jaG9yTm9kZShwYXJlbnRUTm9kZSwgbFZpZXcpO1xuICBhcHBseVByb2plY3Rpb25SZWN1cnNpdmUoXG4gICAgICByZW5kZXJlciwgV2Fsa1ROb2RlVHJlZUFjdGlvbi5DcmVhdGUsIGxWaWV3LCB0UHJvamVjdGlvbk5vZGUsIHJlbmRlclBhcmVudCwgYmVmb3JlTm9kZSk7XG59XG5cbi8qKlxuICogYGFwcGx5UHJvamVjdGlvblJlY3Vyc2l2ZWAgcGVyZm9ybXMgb3BlcmF0aW9uIG9uIHRoZSBwcm9qZWN0aW9uIHNwZWNpZmllZCBieSBgYWN0aW9uYCAoaW5zZXJ0LFxuICogZGV0YWNoLCBkZXN0cm95KVxuICpcbiAqIEluc2VydGluZyBhIHByb2plY3Rpb24gcmVxdWlyZXMgdXMgdG8gbG9jYXRlIHRoZSBwcm9qZWN0ZWQgbm9kZXMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC4gVGhlXG4gKiBjb21wbGljYXRpb24gaXMgdGhhdCB0aG9zZSBub2RlcyB0aGVtc2VsdmVzIGNvdWxkIGJlIHJlLXByb2plY3RlZCBmcm9tIHRoZWlyIHBhcmVudCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIFJlbmRlciB0byB1c2VcbiAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIHRvIHBlcmZvcm0gKGluc2VydCwgZGV0YWNoLCBkZXN0cm95KVxuICogQHBhcmFtIGxWaWV3IFRoZSBMVmlldyB3aGljaCBuZWVkcyB0byBiZSBpbnNlcnRlZCwgZGV0YWNoZWQsIGRlc3Ryb3llZC5cbiAqIEBwYXJhbSB0UHJvamVjdGlvbk5vZGUgbm9kZSB0byBwcm9qZWN0XG4gKiBAcGFyYW0gcmVuZGVyUGFyZW50IHBhcmVudCBET00gZWxlbWVudCBmb3IgaW5zZXJ0aW9uL3JlbW92YWwuXG4gKiBAcGFyYW0gYmVmb3JlTm9kZSBCZWZvcmUgd2hpY2ggbm9kZSB0aGUgaW5zZXJ0aW9ucyBzaG91bGQgaGFwcGVuLlxuICovXG5mdW5jdGlvbiBhcHBseVByb2plY3Rpb25SZWN1cnNpdmUoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMywgYWN0aW9uOiBXYWxrVE5vZGVUcmVlQWN0aW9uLCBsVmlldzogTFZpZXcsXG4gICAgdFByb2plY3Rpb25Ob2RlOiBUUHJvamVjdGlvbk5vZGUsIHJlbmRlclBhcmVudDogUkVsZW1lbnQgfCBudWxsLCBiZWZvcmVOb2RlOiBSTm9kZSB8IG51bGwpIHtcbiAgY29uc3QgY29tcG9uZW50TFZpZXcgPSBsVmlld1tERUNMQVJBVElPTl9DT01QT05FTlRfVklFV107XG4gIGNvbnN0IGNvbXBvbmVudE5vZGUgPSBjb21wb25lbnRMVmlld1tUX0hPU1RdIGFzIFRFbGVtZW50Tm9kZTtcbiAgbmdEZXZNb2RlICYmXG4gICAgICBhc3NlcnRFcXVhbCh0eXBlb2YgdFByb2plY3Rpb25Ob2RlLnByb2plY3Rpb24sICdudW1iZXInLCAnZXhwZWN0aW5nIHByb2plY3Rpb24gaW5kZXgnKTtcbiAgY29uc3Qgbm9kZVRvUHJvamVjdE9yUk5vZGVzID0gY29tcG9uZW50Tm9kZS5wcm9qZWN0aW9uICFbdFByb2plY3Rpb25Ob2RlLnByb2plY3Rpb25dICE7XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGVUb1Byb2plY3RPclJOb2RlcykpIHtcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgZXhpc3QsIGl0IGlzIGEgYml0IG9mIGEgaGFjay4gV2hlbiB3ZSBib290c3RyYXAgYSB0b3AgbGV2ZWwgbm9kZSBhbmQgd2VcbiAgICAvLyBuZWVkIHRvIHN1cHBvcnQgcGFzc2luZyBwcm9qZWN0YWJsZSBub2Rlcywgc28gd2UgY2hlYXQgYW5kIHB1dCB0aGVtIGluIHRoZSBUTm9kZVxuICAgIC8vIG9mIHRoZSBIb3N0IFRWaWV3LiAoWWVzIHdlIHB1dCBpbnN0YW5jZSBpbmZvIGF0IHRoZSBUIExldmVsKS4gV2UgY2FuIGdldCBhd2F5IHdpdGggaXRcbiAgICAvLyBiZWNhdXNlIHdlIGtub3cgdGhhdCB0aGF0IFRWaWV3IGlzIG5vdCBzaGFyZWQgYW5kIHRoZXJlZm9yZSBpdCB3aWxsIG5vdCBiZSBhIHByb2JsZW0uXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgcmVmYWN0b3JlZCBhbmQgY2xlYW5lZCB1cC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVUb1Byb2plY3RPclJOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgck5vZGUgPSBub2RlVG9Qcm9qZWN0T3JSTm9kZXNbaV07XG4gICAgICBhcHBseVRvRWxlbWVudE9yQ29udGFpbmVyKGFjdGlvbiwgcmVuZGVyZXIsIHJlbmRlclBhcmVudCwgck5vZGUsIGJlZm9yZU5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9kZVRvUHJvamVjdDogVE5vZGV8bnVsbCA9IG5vZGVUb1Byb2plY3RPclJOb2RlcztcbiAgICBjb25zdCBwcm9qZWN0ZWRDb21wb25lbnRMVmlldyA9IGNvbXBvbmVudExWaWV3W1BBUkVOVF0gYXMgTFZpZXc7XG4gICAgYXBwbHlOb2RlcyhcbiAgICAgICAgcmVuZGVyZXIsIGFjdGlvbiwgbm9kZVRvUHJvamVjdCwgcHJvamVjdGVkQ29tcG9uZW50TFZpZXcsIHJlbmRlclBhcmVudCwgYmVmb3JlTm9kZSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIGBhcHBseUNvbnRhaW5lcmAgcGVyZm9ybXMgYW4gb3BlcmF0aW9uIG9uIHRoZSBjb250YWluZXIgYW5kIGl0cyB2aWV3cyBhcyBzcGVjaWZpZWQgYnlcbiAqIGBhY3Rpb25gIChpbnNlcnQsIGRldGFjaCwgZGVzdHJveSlcbiAqXG4gKiBJbnNlcnRpbmcgYSBDb250YWluZXIgaXMgY29tcGxpY2F0ZWQgYnkgdGhlIGZhY3QgdGhhdCB0aGUgY29udGFpbmVyIG1heSBoYXZlIFZpZXdzIHdoaWNoXG4gKiB0aGVtc2VsdmVzIGhhdmUgY29udGFpbmVycyBvciBwcm9qZWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIgUmVuZGVyZXIgdG8gdXNlXG4gKiBAcGFyYW0gYWN0aW9uIGFjdGlvbiB0byBwZXJmb3JtIChpbnNlcnQsIGRldGFjaCwgZGVzdHJveSlcbiAqIEBwYXJhbSBsQ29udGFpbmVyIFRoZSBMQ29udGFpbmVyIHdoaWNoIG5lZWRzIHRvIGJlIGluc2VydGVkLCBkZXRhY2hlZCwgZGVzdHJveWVkLlxuICogQHBhcmFtIHJlbmRlclBhcmVudCBwYXJlbnQgRE9NIGVsZW1lbnQgZm9yIGluc2VydGlvbi9yZW1vdmFsLlxuICogQHBhcmFtIGJlZm9yZU5vZGUgQmVmb3JlIHdoaWNoIG5vZGUgdGhlIGluc2VydGlvbnMgc2hvdWxkIGhhcHBlbi5cbiAqL1xuZnVuY3Rpb24gYXBwbHlDb250YWluZXIoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMywgYWN0aW9uOiBXYWxrVE5vZGVUcmVlQWN0aW9uLCBsQ29udGFpbmVyOiBMQ29udGFpbmVyLFxuICAgIHJlbmRlclBhcmVudDogUkVsZW1lbnQgfCBudWxsLCBiZWZvcmVOb2RlOiBSTm9kZSB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydExDb250YWluZXIobENvbnRhaW5lcik7XG4gIGNvbnN0IGFuY2hvciA9IGxDb250YWluZXJbTkFUSVZFXTsgIC8vIExDb250YWluZXIgaGFzIGl0cyBvd24gYmVmb3JlIG5vZGUuXG4gIGNvbnN0IG5hdGl2ZSA9IHVud3JhcFJOb2RlKGxDb250YWluZXIpO1xuICAvLyBBbiBMQ29udGFpbmVyIGNhbiBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IG9uIGFueSBub2RlIGJ5IGluamVjdGluZyBWaWV3Q29udGFpbmVyUmVmLlxuICAvLyBBc2tpbmcgZm9yIGEgVmlld0NvbnRhaW5lclJlZiBvbiBhbiBlbGVtZW50IHdpbGwgcmVzdWx0IGluIGEgY3JlYXRpb24gb2YgYSBzZXBhcmF0ZSBhbmNob3Igbm9kZVxuICAvLyAoY29tbWVudCBpbiB0aGUgRE9NKSB0aGF0IHdpbGwgYmUgZGlmZmVyZW50IGZyb20gdGhlIExDb250YWluZXIncyBob3N0IG5vZGUuIEluIHRoaXMgcGFydGljdWxhclxuICAvLyBjYXNlIHdlIG5lZWQgdG8gZXhlY3V0ZSBhY3Rpb24gb24gMiBub2RlczpcbiAgLy8gLSBjb250YWluZXIncyBob3N0IG5vZGUgKHRoaXMgaXMgZG9uZSBpbiB0aGUgZXhlY3V0ZUFjdGlvbk9uRWxlbWVudE9yQ29udGFpbmVyKVxuICAvLyAtIGNvbnRhaW5lcidzIGhvc3Qgbm9kZSAodGhpcyBpcyBkb25lIGhlcmUpXG4gIGlmIChhbmNob3IgIT09IG5hdGl2ZSkge1xuICAgIC8vIFRoaXMgaXMgdmVyeSBzdHJhbmdlIHRvIG1lIChNaXNrbykuIEkgd291bGQgZXhwZWN0IHRoYXQgdGhlIG5hdGl2ZSBpcyBzYW1lIGFzIGFuY2hvci4gSSBkb24ndFxuICAgIC8vIHNlZSBhIHJlYXNvbiB3aHkgdGhleSBzaG91bGQgYmUgZGlmZmVyZW50LCBidXQgdGhleSBhcmUuXG4gICAgLy9cbiAgICAvLyBJZiB0aGV5IGFyZSB3ZSBuZWVkIHRvIHByb2Nlc3MgdGhlIHNlY29uZCBhbmNob3IgYXMgd2VsbC5cbiAgICBhcHBseVRvRWxlbWVudE9yQ29udGFpbmVyKGFjdGlvbiwgcmVuZGVyZXIsIHJlbmRlclBhcmVudCwgYW5jaG9yLCBiZWZvcmVOb2RlKTtcbiAgfVxuICBmb3IgKGxldCBpID0gQ09OVEFJTkVSX0hFQURFUl9PRkZTRVQ7IGkgPCBsQ29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbFZpZXcgPSBsQ29udGFpbmVyW2ldIGFzIExWaWV3O1xuICAgIGFwcGx5VmlldyhsVmlld1tUVklFV10sIGxWaWV3LCByZW5kZXJlciwgYWN0aW9uLCByZW5kZXJQYXJlbnQsIGFuY2hvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBXcml0ZXMgY2xhc3Mvc3R5bGUgdG8gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIgUmVuZGVyZXIgdG8gdXNlLlxuICogQHBhcmFtIGlzQ2xhc3NCYXNlZCBgdHJ1ZWAgaWYgaXQgc2hvdWxkIGJlIHdyaXR0ZW4gdG8gYGNsYXNzYCAoYGZhbHNlYCB0byB3cml0ZSB0byBgc3R5bGVgKVxuICogQHBhcmFtIHJOb2RlIFRoZSBOb2RlIHRvIHdyaXRlIHRvLlxuICogQHBhcmFtIHByb3AgUHJvcGVydHkgdG8gd3JpdGUgdG8uIFRoaXMgd291bGQgYmUgdGhlIGNsYXNzL3N0eWxlIG5hbWUuXG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gd3JpdGUuIElmIGBudWxsYC9gdW5kZWZpbmVkYC9gZmFsc2VgIHRoaXMgaXMgY29uc2lkZXJlZCBhIHJlbW92ZSAoc2V0L2FkZFxuICogICAgICAgIG90aGVyd2lzZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0eWxpbmcoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMywgaXNDbGFzc0Jhc2VkOiBib29sZWFuLCByTm9kZTogUkVsZW1lbnQsIHByb3A6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICBjb25zdCBpc1Byb2NlZHVyYWwgPSBpc1Byb2NlZHVyYWxSZW5kZXJlcihyZW5kZXJlcik7XG4gIGlmIChpc0NsYXNzQmFzZWQpIHtcbiAgICAvLyBXZSBhY3R1YWxseSB3YW50IEpTIHRydWUvZmFsc2UgaGVyZSBiZWNhdXNlIGFueSB0cnV0aHkgdmFsdWUgc2hvdWxkIGFkZCB0aGUgY2xhc3NcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBuZ0Rldk1vZGUgJiYgbmdEZXZNb2RlLnJlbmRlcmVyUmVtb3ZlQ2xhc3MrKztcbiAgICAgIGlmIChpc1Byb2NlZHVyYWwpIHtcbiAgICAgICAgKHJlbmRlcmVyIGFzIFJlbmRlcmVyMikucmVtb3ZlQ2xhc3Mock5vZGUsIHByb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHJOb2RlIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKHByb3ApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZ0Rldk1vZGUgJiYgbmdEZXZNb2RlLnJlbmRlcmVyQWRkQ2xhc3MrKztcbiAgICAgIGlmIChpc1Byb2NlZHVyYWwpIHtcbiAgICAgICAgKHJlbmRlcmVyIGFzIFJlbmRlcmVyMikuYWRkQ2xhc3Mock5vZGUsIHByb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQoKHJOb2RlIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QsICdIVE1MRWxlbWVudCBleHBlY3RlZCcpO1xuICAgICAgICAock5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQocHJvcCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFRPRE8obWlza28pOiBDYW4ndCBpbXBvcnQgUmVuZGVyZXJTdHlsZUZsYWdzMi5EYXNoQ2FzZSBhcyBpdCBjYXVzZXMgaW1wb3J0cyB0byBiZSByZXNvbHZlZCBpblxuICAgIC8vIGRpZmZlcmVudCBvcmRlciB3aGljaCBjYXVzZXMgZmFpbHVyZXMuIFVzaW5nIGRpcmVjdCBjb25zdGFudCBhcyB3b3JrYXJvdW5kIGZvciBub3cuXG4gICAgY29uc3QgZmxhZ3MgPSBwcm9wLmluZGV4T2YoJy0nKSA9PSAtMSA/IHVuZGVmaW5lZCA6IDIgLyogUmVuZGVyZXJTdHlsZUZsYWdzMi5EYXNoQ2FzZSAqLztcbiAgICBpZiAodmFsdWUgPT0gbnVsbCAvKiogfHwgdmFsdWUgPT09IHVuZGVmaW5lZCAqLykge1xuICAgICAgbmdEZXZNb2RlICYmIG5nRGV2TW9kZS5yZW5kZXJlclJlbW92ZVN0eWxlKys7XG4gICAgICBpZiAoaXNQcm9jZWR1cmFsKSB7XG4gICAgICAgIChyZW5kZXJlciBhcyBSZW5kZXJlcjIpLnJlbW92ZVN0eWxlKHJOb2RlLCBwcm9wLCBmbGFncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAock5vZGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZ0Rldk1vZGUgJiYgbmdEZXZNb2RlLnJlbmRlcmVyU2V0U3R5bGUrKztcbiAgICAgIGlmIChpc1Byb2NlZHVyYWwpIHtcbiAgICAgICAgKHJlbmRlcmVyIGFzIFJlbmRlcmVyMikuc2V0U3R5bGUock5vZGUsIHByb3AsIHZhbHVlLCBmbGFncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGVmaW5lZCgock5vZGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLCAnSFRNTEVsZW1lbnQgZXhwZWN0ZWQnKTtcbiAgICAgICAgKHJOb2RlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBXcml0ZSBgY3NzVGV4dGAgdG8gYFJFbGVtZW50YC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgZGlyZWN0IHdyaXRlIHdpdGhvdXQgYW55IHJlY29uY2lsaWF0aW9uLiBVc2VkIGZvciB3cml0aW5nIGluaXRpYWwgdmFsdWVzLCBzb1xuICogdGhhdCBzdGF0aWMgc3R5bGluZyB2YWx1ZXMgZG8gbm90IHB1bGwgaW4gdGhlIHN0eWxlIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0gcmVuZGVyZXIgUmVuZGVyZXIgdG8gdXNlXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB3aGljaCBuZWVkcyB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIG5ld1ZhbHVlIFRoZSBuZXcgY2xhc3MgbGlzdCB0byB3cml0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRGlyZWN0U3R5bGUocmVuZGVyZXI6IFJlbmRlcmVyMywgZWxlbWVudDogUkVsZW1lbnQsIG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydFN0cmluZyhuZXdWYWx1ZSwgJ1xcJ25ld1ZhbHVlXFwnIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICBpZiAoaXNQcm9jZWR1cmFsUmVuZGVyZXIocmVuZGVyZXIpKSB7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsICdzdHlsZScsIG5ld1ZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuY3NzVGV4dCA9IG5ld1ZhbHVlO1xuICB9XG4gIG5nRGV2TW9kZSAmJiBuZ0Rldk1vZGUucmVuZGVyZXJTZXRTdHlsZSsrO1xufVxuXG4vKipcbiAqIFdyaXRlIGBjbGFzc05hbWVgIHRvIGBSRWxlbWVudGAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIGRpcmVjdCB3cml0ZSB3aXRob3V0IGFueSByZWNvbmNpbGlhdGlvbi4gVXNlZCBmb3Igd3JpdGluZyBpbml0aWFsIHZhbHVlcywgc29cbiAqIHRoYXQgc3RhdGljIHN0eWxpbmcgdmFsdWVzIGRvIG5vdCBwdWxsIGluIHRoZSBzdHlsZSBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHJlbmRlcmVyIFJlbmRlcmVyIHRvIHVzZVxuICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgd2hpY2ggbmVlZHMgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSBuZXdWYWx1ZSBUaGUgbmV3IGNsYXNzIGxpc3QgdG8gd3JpdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZURpcmVjdENsYXNzKHJlbmRlcmVyOiBSZW5kZXJlcjMsIGVsZW1lbnQ6IFJFbGVtZW50LCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRTdHJpbmcobmV3VmFsdWUsICdcXCduZXdWYWx1ZVxcJyBzaG91bGQgYmUgYSBzdHJpbmcnKTtcbiAgaWYgKGlzUHJvY2VkdXJhbFJlbmRlcmVyKHJlbmRlcmVyKSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gJycpIHtcbiAgICAgIC8vIFRoZXJlIGFyZSB0ZXN0cyBpbiBgZ29vZ2xlM2Agd2hpY2ggZXhwZWN0IGBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKWAgdG8gYmUgYG51bGxgLlxuICAgICAgcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGVsZW1lbnQsICdjbGFzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgJ2NsYXNzJywgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG5ld1ZhbHVlO1xuICB9XG4gIG5nRGV2TW9kZSAmJiBuZ0Rldk1vZGUucmVuZGVyZXJTZXRDbGFzc05hbWUrKztcbn0iXX0=
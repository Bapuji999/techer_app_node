/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/create_url_tree.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PRIMARY_OUTLET } from './shared';
import { UrlSegment, UrlSegmentGroup, UrlTree } from './url_tree';
import { forEach, last, shallowEqual } from './utils/collection';
/**
 * @param {?} route
 * @param {?} urlTree
 * @param {?} commands
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
export function createUrlTree(route, urlTree, commands, queryParams, fragment) {
    if (commands.length === 0) {
        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
    }
    /** @type {?} */
    const nav = computeNavigation(commands);
    if (nav.toRoot()) {
        return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
    }
    /** @type {?} */
    const startingPosition = findStartingPosition(nav, urlTree, route);
    /** @type {?} */
    const segmentGroup = startingPosition.processChildren ?
        updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) :
        updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
    return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
}
/**
 * @param {?} command
 * @return {?}
 */
function isMatrixParams(command) {
    return typeof command === 'object' && command != null && !command.outlets && !command.segmentPath;
}
/**
 * @param {?} oldSegmentGroup
 * @param {?} newSegmentGroup
 * @param {?} urlTree
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
    /** @type {?} */
    let qp = {};
    if (queryParams) {
        forEach(queryParams, (/**
         * @param {?} value
         * @param {?} name
         * @return {?}
         */
        (value, name) => {
            qp[name] = Array.isArray(value) ? value.map((/**
             * @param {?} v
             * @return {?}
             */
            (v) => `${v}`)) : `${value}`;
        }));
    }
    if (urlTree.root === oldSegmentGroup) {
        return new UrlTree(newSegmentGroup, qp, fragment);
    }
    return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), qp, fragment);
}
/**
 * @param {?} current
 * @param {?} oldSegment
 * @param {?} newSegment
 * @return {?}
 */
function replaceSegment(current, oldSegment, newSegment) {
    /** @type {?} */
    const children = {};
    forEach(current.children, (/**
     * @param {?} c
     * @param {?} outletName
     * @return {?}
     */
    (c, outletName) => {
        if (c === oldSegment) {
            children[outletName] = newSegment;
        }
        else {
            children[outletName] = replaceSegment(c, oldSegment, newSegment);
        }
    }));
    return new UrlSegmentGroup(current.segments, children);
}
class Navigation {
    /**
     * @param {?} isAbsolute
     * @param {?} numberOfDoubleDots
     * @param {?} commands
     */
    constructor(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
            throw new Error('Root segment cannot have matrix parameters');
        }
        /** @type {?} */
        const cmdWithOutlet = commands.find((/**
         * @param {?} c
         * @return {?}
         */
        c => typeof c === 'object' && c != null && c.outlets));
        if (cmdWithOutlet && cmdWithOutlet !== last(commands)) {
            throw new Error('{outlets:{}} has to be the last command');
        }
    }
    /**
     * @return {?}
     */
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
    }
}
if (false) {
    /** @type {?} */
    Navigation.prototype.isAbsolute;
    /** @type {?} */
    Navigation.prototype.numberOfDoubleDots;
    /** @type {?} */
    Navigation.prototype.commands;
}
/**
 * Transforms commands to a normalized `Navigation`
 * @param {?} commands
 * @return {?}
 */
function computeNavigation(commands) {
    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] === '/') {
        return new Navigation(true, 0, commands);
    }
    /** @type {?} */
    let numberOfDoubleDots = 0;
    /** @type {?} */
    let isAbsolute = false;
    /** @type {?} */
    const res = commands.reduce((/**
     * @param {?} res
     * @param {?} cmd
     * @param {?} cmdIdx
     * @return {?}
     */
    (res, cmd, cmdIdx) => {
        if (typeof cmd === 'object' && cmd != null) {
            if (cmd.outlets) {
                /** @type {?} */
                const outlets = {};
                forEach(cmd.outlets, (/**
                 * @param {?} commands
                 * @param {?} name
                 * @return {?}
                 */
                (commands, name) => {
                    outlets[name] = typeof commands === 'string' ? commands.split('/') : commands;
                }));
                return [...res, { outlets }];
            }
            if (cmd.segmentPath) {
                return [...res, cmd.segmentPath];
            }
        }
        if (!(typeof cmd === 'string')) {
            return [...res, cmd];
        }
        if (cmdIdx === 0) {
            cmd.split('/').forEach((/**
             * @param {?} urlPart
             * @param {?} partIndex
             * @return {?}
             */
            (urlPart, partIndex) => {
                if (partIndex == 0 && urlPart === '.') {
                    // skip './a'
                }
                else if (partIndex == 0 && urlPart === '') { //  '/a'
                    isAbsolute = true;
                }
                else if (urlPart === '..') { //  '../a'
                    numberOfDoubleDots++;
                }
                else if (urlPart != '') {
                    res.push(urlPart);
                }
            }));
            return res;
        }
        return [...res, cmd];
    }), []);
    return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
class Position {
    /**
     * @param {?} segmentGroup
     * @param {?} processChildren
     * @param {?} index
     */
    constructor(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    }
}
if (false) {
    /** @type {?} */
    Position.prototype.segmentGroup;
    /** @type {?} */
    Position.prototype.processChildren;
    /** @type {?} */
    Position.prototype.index;
}
/**
 * @param {?} nav
 * @param {?} tree
 * @param {?} route
 * @return {?}
 */
function findStartingPosition(nav, tree, route) {
    if (nav.isAbsolute) {
        return new Position(tree.root, true, 0);
    }
    if (route.snapshot._lastPathIndex === -1) {
        return new Position(route.snapshot._urlSegment, true, 0);
    }
    /** @type {?} */
    const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
    /** @type {?} */
    const index = route.snapshot._lastPathIndex + modifier;
    return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
}
/**
 * @param {?} group
 * @param {?} index
 * @param {?} numberOfDoubleDots
 * @return {?}
 */
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
    /** @type {?} */
    let g = group;
    /** @type {?} */
    let ci = index;
    /** @type {?} */
    let dd = numberOfDoubleDots;
    while (dd > ci) {
        dd -= ci;
        g = (/** @type {?} */ (g.parent));
        if (!g) {
            throw new Error('Invalid number of \'../\'');
        }
        ci = g.segments.length;
    }
    return new Position(g, false, ci - dd);
}
/**
 * @param {?} command
 * @return {?}
 */
function getPath(command) {
    if (typeof command === 'object' && command != null && command.outlets) {
        return command.outlets[PRIMARY_OUTLET];
    }
    return `${command}`;
}
/**
 * @param {?} commands
 * @return {?}
 */
function getOutlets(commands) {
    if (!(typeof commands[0] === 'object'))
        return { [PRIMARY_OUTLET]: commands };
    if (commands[0].outlets === undefined)
        return { [PRIMARY_OUTLET]: commands };
    return commands[0].outlets;
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroup(segmentGroup, startIndex, commands) {
    if (!segmentGroup) {
        segmentGroup = new UrlSegmentGroup([], {});
    }
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
        return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
    }
    /** @type {?} */
    const m = prefixedWith(segmentGroup, startIndex, commands);
    /** @type {?} */
    const slicedCommands = commands.slice(m.commandIndex);
    if (m.match && m.pathIndex < segmentGroup.segments.length) {
        /** @type {?} */
        const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
        g.children[PRIMARY_OUTLET] =
            new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
        return updateSegmentGroupChildren(g, 0, slicedCommands);
    }
    else if (m.match && slicedCommands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else if (m.match && !segmentGroup.hasChildren()) {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
    else if (m.match) {
        return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
    }
    else {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
    if (commands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else {
        /** @type {?} */
        const outlets = getOutlets(commands);
        /** @type {?} */
        const children = {};
        forEach(outlets, (/**
         * @param {?} commands
         * @param {?} outlet
         * @return {?}
         */
        (commands, outlet) => {
            if (commands !== null) {
                children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
            }
        }));
        forEach(segmentGroup.children, (/**
         * @param {?} child
         * @param {?} childOutlet
         * @return {?}
         */
        (child, childOutlet) => {
            if (outlets[childOutlet] === undefined) {
                children[childOutlet] = child;
            }
        }));
        return new UrlSegmentGroup(segmentGroup.segments, children);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function prefixedWith(segmentGroup, startIndex, commands) {
    /** @type {?} */
    let currentCommandIndex = 0;
    /** @type {?} */
    let currentPathIndex = startIndex;
    /** @type {?} */
    const noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
    while (currentPathIndex < segmentGroup.segments.length) {
        if (currentCommandIndex >= commands.length)
            return noMatch;
        /** @type {?} */
        const path = segmentGroup.segments[currentPathIndex];
        /** @type {?} */
        const curr = getPath(commands[currentCommandIndex]);
        /** @type {?} */
        const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
        if (currentPathIndex > 0 && curr === undefined)
            break;
        if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
            if (!compare(curr, next, path))
                return noMatch;
            currentCommandIndex += 2;
        }
        else {
            if (!compare(curr, {}, path))
                return noMatch;
            currentCommandIndex++;
        }
        currentPathIndex++;
    }
    return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
    /** @type {?} */
    const paths = segmentGroup.segments.slice(0, startIndex);
    /** @type {?} */
    let i = 0;
    while (i < commands.length) {
        if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
            /** @type {?} */
            const children = createNewSegmentChildren(commands[i].outlets);
            return new UrlSegmentGroup(paths, children);
        }
        // if we start with an object literal, we need to reuse the path part from the segment
        if (i === 0 && isMatrixParams(commands[0])) {
            /** @type {?} */
            const p = segmentGroup.segments[startIndex];
            paths.push(new UrlSegment(p.path, commands[0]));
            i++;
            continue;
        }
        /** @type {?} */
        const curr = getPath(commands[i]);
        /** @type {?} */
        const next = (i < commands.length - 1) ? commands[i + 1] : null;
        if (curr && next && isMatrixParams(next)) {
            paths.push(new UrlSegment(curr, stringify(next)));
            i += 2;
        }
        else {
            paths.push(new UrlSegment(curr, {}));
            i++;
        }
    }
    return new UrlSegmentGroup(paths, {});
}
/**
 * @param {?} outlets
 * @return {?}
 */
function createNewSegmentChildren(outlets) {
    /** @type {?} */
    const children = {};
    forEach(outlets, (/**
     * @param {?} commands
     * @param {?} outlet
     * @return {?}
     */
    (commands, outlet) => {
        if (commands !== null) {
            children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
        }
    }));
    return children;
}
/**
 * @param {?} params
 * @return {?}
 */
function stringify(params) {
    /** @type {?} */
    const res = {};
    forEach(params, (/**
     * @param {?} v
     * @param {?} k
     * @return {?}
     */
    (v, k) => res[k] = `${v}`));
    return res;
}
/**
 * @param {?} path
 * @param {?} params
 * @param {?} segment
 * @return {?}
 */
function compare(path, params, segment) {
    return path == segment.path && shallowEqual(params, segment.parameters);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX3VybF90cmVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9jcmVhdGVfdXJsX3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLGNBQWMsRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEUsT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7OztBQUUvRCxNQUFNLFVBQVUsYUFBYSxDQUN6QixLQUFxQixFQUFFLE9BQWdCLEVBQUUsUUFBZSxFQUFFLFdBQW1CLEVBQzdFLFFBQWdCO0lBQ2xCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDekU7O1VBRUssR0FBRyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztJQUV2QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3hGOztVQUVLLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDOztVQUU1RCxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkQsMEJBQTBCLENBQ3RCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxnQkFB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QyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQztJQUN4RCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLE9BQU8sQ0FBQyxJQUFZLEVBQUUsTUFBNEIsRUFBRSxPQUFtQjtJQUM5RSxPQUFPLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gJy4vcm91dGVyX3N0YXRlJztcbmltcG9ydCB7UFJJTUFSWV9PVVRMRVQsIFBhcmFtc30gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHtVcmxTZWdtZW50LCBVcmxTZWdtZW50R3JvdXAsIFVybFRyZWV9IGZyb20gJy4vdXJsX3RyZWUnO1xuaW1wb3J0IHtmb3JFYWNoLCBsYXN0LCBzaGFsbG93RXF1YWx9IGZyb20gJy4vdXRpbHMvY29sbGVjdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmxUcmVlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXJsVHJlZTogVXJsVHJlZSwgY29tbWFuZHM6IGFueVtdLCBxdWVyeVBhcmFtczogUGFyYW1zLFxuICAgIGZyYWdtZW50OiBzdHJpbmcpOiBVcmxUcmVlIHtcbiAgaWYgKGNvbW1hbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cmVlKHVybFRyZWUucm9vdCwgdXJsVHJlZS5yb290LCB1cmxUcmVlLCBxdWVyeVBhcmFtcywgZnJhZ21lbnQpO1xuICB9XG5cbiAgY29uc3QgbmF2ID0gY29tcHV0ZU5hdmlnYXRpb24oY29tbWFuZHMpO1xuXG4gIGlmIChuYXYudG9Sb290KCkpIHtcbiAgICByZXR1cm4gdHJlZSh1cmxUcmVlLnJvb3QsIG5ldyBVcmxTZWdtZW50R3JvdXAoW10sIHt9KSwgdXJsVHJlZSwgcXVlcnlQYXJhbXMsIGZyYWdtZW50KTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb24gPSBmaW5kU3RhcnRpbmdQb3NpdGlvbihuYXYsIHVybFRyZWUsIHJvdXRlKTtcblxuICBjb25zdCBzZWdtZW50R3JvdXAgPSBzdGFydGluZ1Bvc2l0aW9uLnByb2Nlc3NDaGlsZHJlbiA/XG4gICAgICB1cGRhdGVTZWdtZW50R3JvdXBDaGlsZHJlbihcbiAgICAgICAgICBzdGFydGluZ1Bvc2l0aW9uLnNlZ21lbnRHcm91cCwgc3RhcnRpbmdQb3NpdGlvbi5pbmRleCwgbmF2LmNvbW1hbmRzKSA6XG4gICAgICB1cGRhdGVTZWdtZW50R3JvdXAoc3RhcnRpbmdQb3NpdGlvbi5zZWdtZW50R3JvdXAsIHN0YXJ0aW5nUG9zaXRpb24uaW5kZXgsIG5hdi5jb21tYW5kcyk7XG4gIHJldHVybiB0cmVlKHN0YXJ0aW5nUG9zaXRpb24uc2VnbWVudEdyb3VwLCBzZWdtZW50R3JvdXAsIHVybFRyZWUsIHF1ZXJ5UGFyYW1zLCBmcmFnbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzTWF0cml4UGFyYW1zKGNvbW1hbmQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIGNvbW1hbmQgPT09ICdvYmplY3QnICYmIGNvbW1hbmQgIT0gbnVsbCAmJiAhY29tbWFuZC5vdXRsZXRzICYmICFjb21tYW5kLnNlZ21lbnRQYXRoO1xufVxuXG5mdW5jdGlvbiB0cmVlKFxuICAgIG9sZFNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBuZXdTZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgdXJsVHJlZTogVXJsVHJlZSxcbiAgICBxdWVyeVBhcmFtczogUGFyYW1zLCBmcmFnbWVudDogc3RyaW5nKTogVXJsVHJlZSB7XG4gIGxldCBxcDogYW55ID0ge307XG4gIGlmIChxdWVyeVBhcmFtcykge1xuICAgIGZvckVhY2gocXVlcnlQYXJhbXMsICh2YWx1ZTogYW55LCBuYW1lOiBhbnkpID0+IHtcbiAgICAgIHFwW25hbWVdID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAoKHY6IGFueSkgPT4gYCR7dn1gKSA6IGAke3ZhbHVlfWA7XG4gICAgfSk7XG4gIH1cblxuICBpZiAodXJsVHJlZS5yb290ID09PSBvbGRTZWdtZW50R3JvdXApIHtcbiAgICByZXR1cm4gbmV3IFVybFRyZWUobmV3U2VnbWVudEdyb3VwLCBxcCwgZnJhZ21lbnQpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVcmxUcmVlKHJlcGxhY2VTZWdtZW50KHVybFRyZWUucm9vdCwgb2xkU2VnbWVudEdyb3VwLCBuZXdTZWdtZW50R3JvdXApLCBxcCwgZnJhZ21lbnQpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlU2VnbWVudChcbiAgICBjdXJyZW50OiBVcmxTZWdtZW50R3JvdXAsIG9sZFNlZ21lbnQ6IFVybFNlZ21lbnRHcm91cCxcbiAgICBuZXdTZWdtZW50OiBVcmxTZWdtZW50R3JvdXApOiBVcmxTZWdtZW50R3JvdXAge1xuICBjb25zdCBjaGlsZHJlbjoge1trZXk6IHN0cmluZ106IFVybFNlZ21lbnRHcm91cH0gPSB7fTtcbiAgZm9yRWFjaChjdXJyZW50LmNoaWxkcmVuLCAoYzogVXJsU2VnbWVudEdyb3VwLCBvdXRsZXROYW1lOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoYyA9PT0gb2xkU2VnbWVudCkge1xuICAgICAgY2hpbGRyZW5bb3V0bGV0TmFtZV0gPSBuZXdTZWdtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbltvdXRsZXROYW1lXSA9IHJlcGxhY2VTZWdtZW50KGMsIG9sZFNlZ21lbnQsIG5ld1NlZ21lbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXcgVXJsU2VnbWVudEdyb3VwKGN1cnJlbnQuc2VnbWVudHMsIGNoaWxkcmVuKTtcbn1cblxuY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGlzQWJzb2x1dGU6IGJvb2xlYW4sIHB1YmxpYyBudW1iZXJPZkRvdWJsZURvdHM6IG51bWJlciwgcHVibGljIGNvbW1hbmRzOiBhbnlbXSkge1xuICAgIGlmIChpc0Fic29sdXRlICYmIGNvbW1hbmRzLmxlbmd0aCA+IDAgJiYgaXNNYXRyaXhQYXJhbXMoY29tbWFuZHNbMF0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jvb3Qgc2VnbWVudCBjYW5ub3QgaGF2ZSBtYXRyaXggcGFyYW1ldGVycycpO1xuICAgIH1cblxuICAgIGNvbnN0IGNtZFdpdGhPdXRsZXQgPSBjb21tYW5kcy5maW5kKGMgPT4gdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIGMgIT0gbnVsbCAmJiBjLm91dGxldHMpO1xuICAgIGlmIChjbWRXaXRoT3V0bGV0ICYmIGNtZFdpdGhPdXRsZXQgIT09IGxhc3QoY29tbWFuZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3tvdXRsZXRzOnt9fSBoYXMgdG8gYmUgdGhlIGxhc3QgY29tbWFuZCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b1Jvb3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBYnNvbHV0ZSAmJiB0aGlzLmNvbW1hbmRzLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmNvbW1hbmRzWzBdID09ICcvJztcbiAgfVxufVxuXG4vKiogVHJhbnNmb3JtcyBjb21tYW5kcyB0byBhIG5vcm1hbGl6ZWQgYE5hdmlnYXRpb25gICovXG5mdW5jdGlvbiBjb21wdXRlTmF2aWdhdGlvbihjb21tYW5kczogYW55W10pOiBOYXZpZ2F0aW9uIHtcbiAgaWYgKCh0eXBlb2YgY29tbWFuZHNbMF0gPT09ICdzdHJpbmcnKSAmJiBjb21tYW5kcy5sZW5ndGggPT09IDEgJiYgY29tbWFuZHNbMF0gPT09ICcvJykge1xuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbih0cnVlLCAwLCBjb21tYW5kcyk7XG4gIH1cblxuICBsZXQgbnVtYmVyT2ZEb3VibGVEb3RzID0gMDtcbiAgbGV0IGlzQWJzb2x1dGUgPSBmYWxzZTtcblxuICBjb25zdCByZXM6IGFueVtdID0gY29tbWFuZHMucmVkdWNlKChyZXMsIGNtZCwgY21kSWR4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjbWQgPT09ICdvYmplY3QnICYmIGNtZCAhPSBudWxsKSB7XG4gICAgICBpZiAoY21kLm91dGxldHMpIHtcbiAgICAgICAgY29uc3Qgb3V0bGV0czoge1trOiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgICAgIGZvckVhY2goY21kLm91dGxldHMsIChjb21tYW5kczogYW55LCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBvdXRsZXRzW25hbWVdID0gdHlwZW9mIGNvbW1hbmRzID09PSAnc3RyaW5nJyA/IGNvbW1hbmRzLnNwbGl0KCcvJykgOiBjb21tYW5kcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbLi4ucmVzLCB7b3V0bGV0c31dO1xuICAgICAgfVxuXG4gICAgICBpZiAoY21kLnNlZ21lbnRQYXRoKSB7XG4gICAgICAgIHJldHVybiBbLi4ucmVzLCBjbWQuc2VnbWVudFBhdGhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHR5cGVvZiBjbWQgPT09ICdzdHJpbmcnKSkge1xuICAgICAgcmV0dXJuIFsuLi5yZXMsIGNtZF07XG4gICAgfVxuXG4gICAgaWYgKGNtZElkeCA9PT0gMCkge1xuICAgICAgY21kLnNwbGl0KCcvJykuZm9yRWFjaCgodXJsUGFydCwgcGFydEluZGV4KSA9PiB7XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPT0gMCAmJiB1cmxQYXJ0ID09PSAnLicpIHtcbiAgICAgICAgICAvLyBza2lwICcuL2EnXG4gICAgICAgIH0gZWxzZSBpZiAocGFydEluZGV4ID09IDAgJiYgdXJsUGFydCA9PT0gJycpIHsgIC8vICAnL2EnXG4gICAgICAgICAgaXNBYnNvbHV0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsUGFydCA9PT0gJy4uJykgeyAgLy8gICcuLi9hJ1xuICAgICAgICAgIG51bWJlck9mRG91YmxlRG90cysrO1xuICAgICAgICB9IGVsc2UgaWYgKHVybFBhcnQgIT0gJycpIHtcbiAgICAgICAgICByZXMucHVzaCh1cmxQYXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi5yZXMsIGNtZF07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbmV3IE5hdmlnYXRpb24oaXNBYnNvbHV0ZSwgbnVtYmVyT2ZEb3VibGVEb3RzLCByZXMpO1xufVxuXG5jbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBwdWJsaWMgcHJvY2Vzc0NoaWxkcmVuOiBib29sZWFuLCBwdWJsaWMgaW5kZXg6IG51bWJlcikge1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRTdGFydGluZ1Bvc2l0aW9uKG5hdjogTmF2aWdhdGlvbiwgdHJlZTogVXJsVHJlZSwgcm91dGU6IEFjdGl2YXRlZFJvdXRlKTogUG9zaXRpb24ge1xuICBpZiAobmF2LmlzQWJzb2x1dGUpIHtcbiAgICByZXR1cm4gbmV3IFBvc2l0aW9uKHRyZWUucm9vdCwgdHJ1ZSwgMCk7XG4gIH1cblxuICBpZiAocm91dGUuc25hcHNob3QuX2xhc3RQYXRoSW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIG5ldyBQb3NpdGlvbihyb3V0ZS5zbmFwc2hvdC5fdXJsU2VnbWVudCwgdHJ1ZSwgMCk7XG4gIH1cblxuICBjb25zdCBtb2RpZmllciA9IGlzTWF0cml4UGFyYW1zKG5hdi5jb21tYW5kc1swXSkgPyAwIDogMTtcbiAgY29uc3QgaW5kZXggPSByb3V0ZS5zbmFwc2hvdC5fbGFzdFBhdGhJbmRleCArIG1vZGlmaWVyO1xuICByZXR1cm4gY3JlYXRlUG9zaXRpb25BcHBseWluZ0RvdWJsZURvdHMoXG4gICAgICByb3V0ZS5zbmFwc2hvdC5fdXJsU2VnbWVudCwgaW5kZXgsIG5hdi5udW1iZXJPZkRvdWJsZURvdHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3NpdGlvbkFwcGx5aW5nRG91YmxlRG90cyhcbiAgICBncm91cDogVXJsU2VnbWVudEdyb3VwLCBpbmRleDogbnVtYmVyLCBudW1iZXJPZkRvdWJsZURvdHM6IG51bWJlcik6IFBvc2l0aW9uIHtcbiAgbGV0IGcgPSBncm91cDtcbiAgbGV0IGNpID0gaW5kZXg7XG4gIGxldCBkZCA9IG51bWJlck9mRG91YmxlRG90cztcbiAgd2hpbGUgKGRkID4gY2kpIHtcbiAgICBkZCAtPSBjaTtcbiAgICBnID0gZy5wYXJlbnQgITtcbiAgICBpZiAoIWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBudW1iZXIgb2YgXFwnLi4vXFwnJyk7XG4gICAgfVxuICAgIGNpID0gZy5zZWdtZW50cy5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBQb3NpdGlvbihnLCBmYWxzZSwgY2kgLSBkZCk7XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgoY29tbWFuZDogYW55KTogYW55IHtcbiAgaWYgKHR5cGVvZiBjb21tYW5kID09PSAnb2JqZWN0JyAmJiBjb21tYW5kICE9IG51bGwgJiYgY29tbWFuZC5vdXRsZXRzKSB7XG4gICAgcmV0dXJuIGNvbW1hbmQub3V0bGV0c1tQUklNQVJZX09VVExFVF07XG4gIH1cbiAgcmV0dXJuIGAke2NvbW1hbmR9YDtcbn1cblxuZnVuY3Rpb24gZ2V0T3V0bGV0cyhjb21tYW5kczogYW55W10pOiB7W2s6IHN0cmluZ106IGFueVtdfSB7XG4gIGlmICghKHR5cGVvZiBjb21tYW5kc1swXSA9PT0gJ29iamVjdCcpKSByZXR1cm4ge1tQUklNQVJZX09VVExFVF06IGNvbW1hbmRzfTtcbiAgaWYgKGNvbW1hbmRzWzBdLm91dGxldHMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHtbUFJJTUFSWV9PVVRMRVRdOiBjb21tYW5kc307XG4gIHJldHVybiBjb21tYW5kc1swXS5vdXRsZXRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTZWdtZW50R3JvdXAoXG4gICAgc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsIHN0YXJ0SW5kZXg6IG51bWJlciwgY29tbWFuZHM6IGFueVtdKTogVXJsU2VnbWVudEdyb3VwIHtcbiAgaWYgKCFzZWdtZW50R3JvdXApIHtcbiAgICBzZWdtZW50R3JvdXAgPSBuZXcgVXJsU2VnbWVudEdyb3VwKFtdLCB7fSk7XG4gIH1cbiAgaWYgKHNlZ21lbnRHcm91cC5zZWdtZW50cy5sZW5ndGggPT09IDAgJiYgc2VnbWVudEdyb3VwLmhhc0NoaWxkcmVuKCkpIHtcbiAgICByZXR1cm4gdXBkYXRlU2VnbWVudEdyb3VwQ2hpbGRyZW4oc2VnbWVudEdyb3VwLCBzdGFydEluZGV4LCBjb21tYW5kcyk7XG4gIH1cblxuICBjb25zdCBtID0gcHJlZml4ZWRXaXRoKHNlZ21lbnRHcm91cCwgc3RhcnRJbmRleCwgY29tbWFuZHMpO1xuICBjb25zdCBzbGljZWRDb21tYW5kcyA9IGNvbW1hbmRzLnNsaWNlKG0uY29tbWFuZEluZGV4KTtcbiAgaWYgKG0ubWF0Y2ggJiYgbS5wYXRoSW5kZXggPCBzZWdtZW50R3JvdXAuc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgY29uc3QgZyA9IG5ldyBVcmxTZWdtZW50R3JvdXAoc2VnbWVudEdyb3VwLnNlZ21lbnRzLnNsaWNlKDAsIG0ucGF0aEluZGV4KSwge30pO1xuICAgIGcuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdID1cbiAgICAgICAgbmV3IFVybFNlZ21lbnRHcm91cChzZWdtZW50R3JvdXAuc2VnbWVudHMuc2xpY2UobS5wYXRoSW5kZXgpLCBzZWdtZW50R3JvdXAuY2hpbGRyZW4pO1xuICAgIHJldHVybiB1cGRhdGVTZWdtZW50R3JvdXBDaGlsZHJlbihnLCAwLCBzbGljZWRDb21tYW5kcyk7XG4gIH0gZWxzZSBpZiAobS5tYXRjaCAmJiBzbGljZWRDb21tYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IFVybFNlZ21lbnRHcm91cChzZWdtZW50R3JvdXAuc2VnbWVudHMsIHt9KTtcbiAgfSBlbHNlIGlmIChtLm1hdGNoICYmICFzZWdtZW50R3JvdXAuaGFzQ2hpbGRyZW4oKSkge1xuICAgIHJldHVybiBjcmVhdGVOZXdTZWdtZW50R3JvdXAoc2VnbWVudEdyb3VwLCBzdGFydEluZGV4LCBjb21tYW5kcyk7XG4gIH0gZWxzZSBpZiAobS5tYXRjaCkge1xuICAgIHJldHVybiB1cGRhdGVTZWdtZW50R3JvdXBDaGlsZHJlbihzZWdtZW50R3JvdXAsIDAsIHNsaWNlZENvbW1hbmRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlTmV3U2VnbWVudEdyb3VwKHNlZ21lbnRHcm91cCwgc3RhcnRJbmRleCwgY29tbWFuZHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNlZ21lbnRHcm91cENoaWxkcmVuKFxuICAgIHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzdGFydEluZGV4OiBudW1iZXIsIGNvbW1hbmRzOiBhbnlbXSk6IFVybFNlZ21lbnRHcm91cCB7XG4gIGlmIChjb21tYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IFVybFNlZ21lbnRHcm91cChzZWdtZW50R3JvdXAuc2VnbWVudHMsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvdXRsZXRzID0gZ2V0T3V0bGV0cyhjb21tYW5kcyk7XG4gICAgY29uc3QgY2hpbGRyZW46IHtba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9ID0ge307XG5cbiAgICBmb3JFYWNoKG91dGxldHMsIChjb21tYW5kczogYW55LCBvdXRsZXQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGNvbW1hbmRzICE9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkcmVuW291dGxldF0gPSB1cGRhdGVTZWdtZW50R3JvdXAoc2VnbWVudEdyb3VwLmNoaWxkcmVuW291dGxldF0sIHN0YXJ0SW5kZXgsIGNvbW1hbmRzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvckVhY2goc2VnbWVudEdyb3VwLmNoaWxkcmVuLCAoY2hpbGQ6IFVybFNlZ21lbnRHcm91cCwgY2hpbGRPdXRsZXQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKG91dGxldHNbY2hpbGRPdXRsZXRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hpbGRyZW5bY2hpbGRPdXRsZXRdID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBVcmxTZWdtZW50R3JvdXAoc2VnbWVudEdyb3VwLnNlZ21lbnRzLCBjaGlsZHJlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZml4ZWRXaXRoKHNlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLCBzdGFydEluZGV4OiBudW1iZXIsIGNvbW1hbmRzOiBhbnlbXSkge1xuICBsZXQgY3VycmVudENvbW1hbmRJbmRleCA9IDA7XG4gIGxldCBjdXJyZW50UGF0aEluZGV4ID0gc3RhcnRJbmRleDtcblxuICBjb25zdCBub01hdGNoID0ge21hdGNoOiBmYWxzZSwgcGF0aEluZGV4OiAwLCBjb21tYW5kSW5kZXg6IDB9O1xuICB3aGlsZSAoY3VycmVudFBhdGhJbmRleCA8IHNlZ21lbnRHcm91cC5zZWdtZW50cy5sZW5ndGgpIHtcbiAgICBpZiAoY3VycmVudENvbW1hbmRJbmRleCA+PSBjb21tYW5kcy5sZW5ndGgpIHJldHVybiBub01hdGNoO1xuICAgIGNvbnN0IHBhdGggPSBzZWdtZW50R3JvdXAuc2VnbWVudHNbY3VycmVudFBhdGhJbmRleF07XG4gICAgY29uc3QgY3VyciA9IGdldFBhdGgoY29tbWFuZHNbY3VycmVudENvbW1hbmRJbmRleF0pO1xuICAgIGNvbnN0IG5leHQgPVxuICAgICAgICBjdXJyZW50Q29tbWFuZEluZGV4IDwgY29tbWFuZHMubGVuZ3RoIC0gMSA/IGNvbW1hbmRzW2N1cnJlbnRDb21tYW5kSW5kZXggKyAxXSA6IG51bGw7XG5cbiAgICBpZiAoY3VycmVudFBhdGhJbmRleCA+IDAgJiYgY3VyciA9PT0gdW5kZWZpbmVkKSBicmVhaztcblxuICAgIGlmIChjdXJyICYmIG5leHQgJiYgKHR5cGVvZiBuZXh0ID09PSAnb2JqZWN0JykgJiYgbmV4dC5vdXRsZXRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghY29tcGFyZShjdXJyLCBuZXh0LCBwYXRoKSkgcmV0dXJuIG5vTWF0Y2g7XG4gICAgICBjdXJyZW50Q29tbWFuZEluZGV4ICs9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY29tcGFyZShjdXJyLCB7fSwgcGF0aCkpIHJldHVybiBub01hdGNoO1xuICAgICAgY3VycmVudENvbW1hbmRJbmRleCsrO1xuICAgIH1cbiAgICBjdXJyZW50UGF0aEluZGV4Kys7XG4gIH1cblxuICByZXR1cm4ge21hdGNoOiB0cnVlLCBwYXRoSW5kZXg6IGN1cnJlbnRQYXRoSW5kZXgsIGNvbW1hbmRJbmRleDogY3VycmVudENvbW1hbmRJbmRleH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1NlZ21lbnRHcm91cChcbiAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCwgc3RhcnRJbmRleDogbnVtYmVyLCBjb21tYW5kczogYW55W10pOiBVcmxTZWdtZW50R3JvdXAge1xuICBjb25zdCBwYXRocyA9IHNlZ21lbnRHcm91cC5zZWdtZW50cy5zbGljZSgwLCBzdGFydEluZGV4KTtcblxuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgaWYgKHR5cGVvZiBjb21tYW5kc1tpXSA9PT0gJ29iamVjdCcgJiYgY29tbWFuZHNbaV0ub3V0bGV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IGNyZWF0ZU5ld1NlZ21lbnRDaGlsZHJlbihjb21tYW5kc1tpXS5vdXRsZXRzKTtcbiAgICAgIHJldHVybiBuZXcgVXJsU2VnbWVudEdyb3VwKHBhdGhzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgLy8gaWYgd2Ugc3RhcnQgd2l0aCBhbiBvYmplY3QgbGl0ZXJhbCwgd2UgbmVlZCB0byByZXVzZSB0aGUgcGF0aCBwYXJ0IGZyb20gdGhlIHNlZ21lbnRcbiAgICBpZiAoaSA9PT0gMCAmJiBpc01hdHJpeFBhcmFtcyhjb21tYW5kc1swXSkpIHtcbiAgICAgIGNvbnN0IHAgPSBzZWdtZW50R3JvdXAuc2VnbWVudHNbc3RhcnRJbmRleF07XG4gICAgICBwYXRocy5wdXNoKG5ldyBVcmxTZWdtZW50KHAucGF0aCwgY29tbWFuZHNbMF0pKTtcbiAgICAgIGkrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnIgPSBnZXRQYXRoKGNvbW1hbmRzW2ldKTtcbiAgICBjb25zdCBuZXh0ID0gKGkgPCBjb21tYW5kcy5sZW5ndGggLSAxKSA/IGNvbW1hbmRzW2kgKyAxXSA6IG51bGw7XG4gICAgaWYgKGN1cnIgJiYgbmV4dCAmJiBpc01hdHJpeFBhcmFtcyhuZXh0KSkge1xuICAgICAgcGF0aHMucHVzaChuZXcgVXJsU2VnbWVudChjdXJyLCBzdHJpbmdpZnkobmV4dCkpKTtcbiAgICAgIGkgKz0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aHMucHVzaChuZXcgVXJsU2VnbWVudChjdXJyLCB7fSkpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFVybFNlZ21lbnRHcm91cChwYXRocywge30pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdTZWdtZW50Q2hpbGRyZW4ob3V0bGV0czoge1tuYW1lOiBzdHJpbmddOiBhbnl9KTogYW55IHtcbiAgY29uc3QgY2hpbGRyZW46IHtba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXB9ID0ge307XG4gIGZvckVhY2gob3V0bGV0cywgKGNvbW1hbmRzOiBhbnksIG91dGxldDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGNvbW1hbmRzICE9PSBudWxsKSB7XG4gICAgICBjaGlsZHJlbltvdXRsZXRdID0gY3JlYXRlTmV3U2VnbWVudEdyb3VwKG5ldyBVcmxTZWdtZW50R3JvdXAoW10sIHt9KSwgMCwgY29tbWFuZHMpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSB7XG4gIGNvbnN0IHJlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgZm9yRWFjaChwYXJhbXMsICh2OiBhbnksIGs6IHN0cmluZykgPT4gcmVzW2tdID0gYCR7dn1gKTtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gY29tcGFyZShwYXRoOiBzdHJpbmcsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0sIHNlZ21lbnQ6IFVybFNlZ21lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT0gc2VnbWVudC5wYXRoICYmIHNoYWxsb3dFcXVhbChwYXJhbXMsIHNlZ21lbnQucGFyYW1ldGVycyk7XG59XG4iXX0=
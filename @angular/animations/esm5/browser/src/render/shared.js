import { __read, __spread } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AUTO_STYLE, NoopAnimationPlayer, ɵAnimationGroupPlayer, ɵPRE_STYLE as PRE_STYLE } from '@angular/animations';
export function isBrowser() {
    return (typeof window !== 'undefined' && typeof window.document !== 'undefined');
}
export function isNode() {
    // Checking only for `process` isn't enough to identify whether or not we're in a Node
    // environment, because Webpack by default will polyfill the `process`. While we can discern
    // that Webpack polyfilled it by looking at `process.browser`, it's very Webpack-specific and
    // might not be future-proof. Instead we look at the stringified version of `process` which
    // is `[object process]` in Node and `[object Object]` when polyfilled.
    return typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
}
export function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new NoopAnimationPlayer();
        case 1:
            return players[0];
        default:
            return new ɵAnimationGroupPlayer(players);
    }
}
export function normalizeKeyframes(driver, normalizer, element, keyframes, preStyles, postStyles) {
    if (preStyles === void 0) { preStyles = {}; }
    if (postStyles === void 0) { postStyles = {}; }
    var errors = [];
    var normalizedKeyframes = [];
    var previousOffset = -1;
    var previousKeyframe = null;
    keyframes.forEach(function (kf) {
        var offset = kf['offset'];
        var isSameOffset = offset == previousOffset;
        var normalizedKeyframe = (isSameOffset && previousKeyframe) || {};
        Object.keys(kf).forEach(function (prop) {
            var normalizedProp = prop;
            var normalizedValue = kf[prop];
            if (prop !== 'offset') {
                normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
                switch (normalizedValue) {
                    case PRE_STYLE:
                        normalizedValue = preStyles[prop];
                        break;
                    case AUTO_STYLE:
                        normalizedValue = postStyles[prop];
                        break;
                    default:
                        normalizedValue =
                            normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
                        break;
                }
            }
            normalizedKeyframe[normalizedProp] = normalizedValue;
        });
        if (!isSameOffset) {
            normalizedKeyframes.push(normalizedKeyframe);
        }
        previousKeyframe = normalizedKeyframe;
        previousOffset = offset;
    });
    if (errors.length) {
        var LINE_START = '\n - ';
        throw new Error("Unable to animate due to the following errors:" + LINE_START + errors.join(LINE_START));
    }
    return normalizedKeyframes;
}
export function listenOnPlayer(player, eventName, event, callback) {
    switch (eventName) {
        case 'start':
            player.onStart(function () { return callback(event && copyAnimationEvent(event, 'start', player)); });
            break;
        case 'done':
            player.onDone(function () { return callback(event && copyAnimationEvent(event, 'done', player)); });
            break;
        case 'destroy':
            player.onDestroy(function () { return callback(event && copyAnimationEvent(event, 'destroy', player)); });
            break;
    }
}
export function copyAnimationEvent(e, phaseName, player) {
    var totalTime = player.totalTime;
    var disabled = player.disabled ? true : false;
    var event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == undefined ? e.totalTime : totalTime, disabled);
    var data = e['_data'];
    if (data != null) {
        event['_data'] = data;
    }
    return event;
}
export function makeAnimationEvent(element, triggerName, fromState, toState, phaseName, totalTime, disabled) {
    if (phaseName === void 0) { phaseName = ''; }
    if (totalTime === void 0) { totalTime = 0; }
    return { element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime, disabled: !!disabled };
}
export function getOrSetAsInMap(map, key, defaultValue) {
    var value;
    if (map instanceof Map) {
        value = map.get(key);
        if (!value) {
            map.set(key, value = defaultValue);
        }
    }
    else {
        value = map[key];
        if (!value) {
            value = map[key] = defaultValue;
        }
    }
    return value;
}
export function parseTimelineCommand(command) {
    var separatorPos = command.indexOf(':');
    var id = command.substring(1, separatorPos);
    var action = command.substr(separatorPos + 1);
    return [id, action];
}
var _contains = function (elm1, elm2) { return false; };
var ɵ0 = _contains;
var _matches = function (element, selector) {
    return false;
};
var ɵ1 = _matches;
var _query = function (element, selector, multi) {
    return [];
};
var ɵ2 = _query;
// Define utility methods for browsers and platform-server(domino) where Element
// and utility methods exist.
var _isNode = isNode();
if (_isNode || typeof Element !== 'undefined') {
    // this is well supported in all browsers
    _contains = function (elm1, elm2) { return elm1.contains(elm2); };
    _matches = (function () {
        if (_isNode || Element.prototype.matches) {
            return function (element, selector) { return element.matches(selector); };
        }
        else {
            var proto = Element.prototype;
            var fn_1 = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector ||
                proto.oMatchesSelector || proto.webkitMatchesSelector;
            if (fn_1) {
                return function (element, selector) { return fn_1.apply(element, [selector]); };
            }
            else {
                return _matches;
            }
        }
    })();
    _query = function (element, selector, multi) {
        var results = [];
        if (multi) {
            results.push.apply(results, __spread(element.querySelectorAll(selector)));
        }
        else {
            var elm = element.querySelector(selector);
            if (elm) {
                results.push(elm);
            }
        }
        return results;
    };
}
function containsVendorPrefix(prop) {
    // Webkit is the only real popular vendor prefix nowadays
    // cc: http://shouldiprefix.com/
    return prop.substring(1, 6) == 'ebkit'; // webkit or Webkit
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
export function validateStyleProperty(prop) {
    if (!_CACHED_BODY) {
        _CACHED_BODY = getBodyNode() || {};
        _IS_WEBKIT = _CACHED_BODY.style ? ('WebkitAppearance' in _CACHED_BODY.style) : false;
    }
    var result = true;
    if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
        result = prop in _CACHED_BODY.style;
        if (!result && _IS_WEBKIT) {
            var camelProp = 'Webkit' + prop.charAt(0).toUpperCase() + prop.substr(1);
            result = camelProp in _CACHED_BODY.style;
        }
    }
    return result;
}
export function getBodyNode() {
    if (typeof document != 'undefined') {
        return document.body;
    }
    return null;
}
export var matchesElement = _matches;
export var containsElement = _contains;
export var invokeQuery = _query;
export function hypenatePropsObject(object) {
    var newObj = {};
    Object.keys(object).forEach(function (prop) {
        var newProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2');
        newObj[newProp] = object[prop];
    });
    return newObj;
}
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsVUFBVSxFQUFtQyxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLElBQUksU0FBUyxFQUFhLE1BQU0scUJBQXFCLENBQUM7QUFVakssTUFBTSxVQUFVLFNBQVM7SUFDdkIsT0FBTyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUM7QUFDbkYsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNO0lBQ3BCLHNGQUFzRjtJQUN0Riw0RkFBNEY7SUFDNUYsNkZBQTZGO0lBQzdGLDJGQUEyRjtJQUMzRix1RUFBdUU7SUFDdkUsT0FBTyxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssa0JBQWtCLENBQUM7QUFDNUYsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxPQUEwQjtJQUM1RCxRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDdEIsS0FBSyxDQUFDO1lBQ0osT0FBTyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEI7WUFDRSxPQUFPLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0M7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUM5QixNQUF1QixFQUFFLFVBQW9DLEVBQUUsT0FBWSxFQUMzRSxTQUF1QixFQUFFLFNBQTBCLEVBQ25ELFVBQTJCO0lBREYsMEJBQUEsRUFBQSxjQUEwQjtJQUNuRCwyQkFBQSxFQUFBLGVBQTJCO0lBQzdCLElBQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFNLG1CQUFtQixHQUFpQixFQUFFLENBQUM7SUFDN0MsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsSUFBSSxnQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO0lBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1FBQ2xCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQVcsQ0FBQztRQUN0QyxJQUFNLFlBQVksR0FBRyxNQUFNLElBQUksY0FBYyxDQUFDO1FBQzlDLElBQU0sa0JBQWtCLEdBQWUsQ0FBQyxZQUFZLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQzFCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNyQixjQUFjLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDMUUsUUFBUSxlQUFlLEVBQUU7b0JBQ3ZCLEtBQUssU0FBUzt3QkFDWixlQUFlLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsQyxNQUFNO29CQUVSLEtBQUssVUFBVTt3QkFDYixlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNuQyxNQUFNO29CQUVSO3dCQUNFLGVBQWU7NEJBQ1gsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUNsRixNQUFNO2lCQUNUO2FBQ0Y7WUFDRCxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxlQUFlLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDdEMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUNILElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNqQixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FDWCxtREFBaUQsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFHLENBQUMsQ0FBQztLQUM5RjtJQUVELE9BQU8sbUJBQW1CLENBQUM7QUFDN0IsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzFCLE1BQXVCLEVBQUUsU0FBaUIsRUFBRSxLQUFpQyxFQUM3RSxRQUE2QjtJQUMvQixRQUFRLFNBQVMsRUFBRTtRQUNqQixLQUFLLE9BQU87WUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsS0FBSyxJQUFJLGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBN0QsQ0FBNkQsQ0FBQyxDQUFDO1lBQ3BGLE1BQU07UUFDUixLQUFLLE1BQU07WUFDVCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsS0FBSyxJQUFJLGtCQUFrQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBNUQsQ0FBNEQsQ0FBQyxDQUFDO1lBQ2xGLE1BQU07UUFDUixLQUFLLFNBQVM7WUFDWixNQUFNLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsS0FBSyxJQUFJLGtCQUFrQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDO1lBQ3hGLE1BQU07S0FDVDtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQzlCLENBQWlCLEVBQUUsU0FBaUIsRUFBRSxNQUF1QjtJQUMvRCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25DLElBQU0sUUFBUSxHQUFJLE1BQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pELElBQU0sS0FBSyxHQUFHLGtCQUFrQixDQUM1QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUMxRSxTQUFTLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsSUFBTSxJQUFJLEdBQUksQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNmLEtBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQzlCLE9BQVksRUFBRSxXQUFtQixFQUFFLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFNBQXNCLEVBQzdGLFNBQXFCLEVBQUUsUUFBa0I7SUFEOEIsMEJBQUEsRUFBQSxjQUFzQjtJQUM3RiwwQkFBQSxFQUFBLGFBQXFCO0lBQ3ZCLE9BQU8sRUFBQyxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDO0FBQ2hHLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUMzQixHQUF3QyxFQUFFLEdBQVEsRUFBRSxZQUFpQjtJQUN2RSxJQUFJLEtBQVUsQ0FBQztJQUNmLElBQUksR0FBRyxZQUFZLEdBQUcsRUFBRTtRQUN0QixLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDO1NBQ3BDO0tBQ0Y7U0FBTTtRQUNMLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDO1NBQ2pDO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsT0FBZTtJQUNsRCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELElBQUksU0FBUyxHQUFzQyxVQUFDLElBQVMsRUFBRSxJQUFTLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDOztBQUNuRixJQUFJLFFBQVEsR0FBZ0QsVUFBQyxPQUFZLEVBQUUsUUFBZ0I7SUFDdkYsT0FBQSxLQUFLO0FBQUwsQ0FBSyxDQUFDOztBQUNWLElBQUksTUFBTSxHQUNOLFVBQUMsT0FBWSxFQUFFLFFBQWdCLEVBQUUsS0FBYztJQUM3QyxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQzs7QUFFTixnRkFBZ0Y7QUFDaEYsNkJBQTZCO0FBQzdCLElBQU0sT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtJQUM3Qyx5Q0FBeUM7SUFDekMsU0FBUyxHQUFHLFVBQUMsSUFBUyxFQUFFLElBQVMsSUFBTyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakYsUUFBUSxHQUFHLENBQUM7UUFDVixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUN4QyxPQUFPLFVBQUMsT0FBWSxFQUFFLFFBQWdCLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUF6QixDQUF5QixDQUFDO1NBQ3RFO2FBQU07WUFDTCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBZ0IsQ0FBQztZQUN2QyxJQUFNLElBQUUsR0FBRyxLQUFLLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUMsaUJBQWlCO2dCQUNuRixLQUFLLENBQUMsZ0JBQWdCLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDO1lBQzFELElBQUksSUFBRSxFQUFFO2dCQUNOLE9BQU8sVUFBQyxPQUFZLEVBQUUsUUFBZ0IsSUFBSyxPQUFBLElBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQzthQUMxRTtpQkFBTTtnQkFDTCxPQUFPLFFBQVEsQ0FBQzthQUNqQjtTQUNGO0lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVMLE1BQU0sR0FBRyxVQUFDLE9BQVksRUFBRSxRQUFnQixFQUFFLEtBQWM7UUFDdEQsSUFBSSxPQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLFdBQVMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFFO1NBQ3JEO2FBQU07WUFDTCxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkI7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztDQUNIO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZO0lBQ3hDLHlEQUF5RDtJQUN6RCxnQ0FBZ0M7SUFDaEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBRSxtQkFBbUI7QUFDOUQsQ0FBQztBQUVELElBQUksWUFBWSxHQUFzQixJQUFJLENBQUM7QUFDM0MsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFZO0lBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsWUFBWSxHQUFHLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNuQyxVQUFVLEdBQUcsWUFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsSUFBSSxZQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUMxRjtJQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQixJQUFJLFlBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2RCxNQUFNLEdBQUcsSUFBSSxJQUFJLFlBQWMsQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDekIsSUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRSxNQUFNLEdBQUcsU0FBUyxJQUFJLFlBQWMsQ0FBQyxLQUFLLENBQUM7U0FDNUM7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN6QixJQUFJLE9BQU8sUUFBUSxJQUFJLFdBQVcsRUFBRTtRQUNsQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDdEI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDekMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQztBQUVsQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsTUFBNEI7SUFDOUQsSUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztJQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7UUFDOUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QVVUT19TVFlMRSwgQW5pbWF0aW9uRXZlbnQsIEFuaW1hdGlvblBsYXllciwgTm9vcEFuaW1hdGlvblBsYXllciwgybVBbmltYXRpb25Hcm91cFBsYXllciwgybVQUkVfU1RZTEUgYXMgUFJFX1NUWUxFLCDJtVN0eWxlRGF0YX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyfSBmcm9tICcuLi8uLi9zcmMvZHNsL3N0eWxlX25vcm1hbGl6YXRpb24vYW5pbWF0aW9uX3N0eWxlX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtBbmltYXRpb25Ecml2ZXJ9IGZyb20gJy4uLy4uL3NyYy9yZW5kZXIvYW5pbWF0aW9uX2RyaXZlcic7XG5cbi8vIFdlIGRvbid0IGluY2x1ZGUgYW1iaWVudCBub2RlIHR5cGVzIGhlcmUgc2luY2UgQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyXG4vLyBpcyBtZWFudCB0byB0YXJnZXQgdGhlIGJyb3dzZXIgc28gdGVjaG5pY2FsbHkgaXQgc2hvdWxkIG5vdCBkZXBlbmQgb24gbm9kZVxuLy8gdHlwZXMuIGBwcm9jZXNzYCBpcyBqdXN0IGRlY2xhcmVkIGxvY2FsbHkgaGVyZSBhcyBhIHJlc3VsdC5cbmRlY2xhcmUgY29uc3QgcHJvY2VzczogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpOiBib29sZWFuIHtcbiAgLy8gQ2hlY2tpbmcgb25seSBmb3IgYHByb2Nlc3NgIGlzbid0IGVub3VnaCB0byBpZGVudGlmeSB3aGV0aGVyIG9yIG5vdCB3ZSdyZSBpbiBhIE5vZGVcbiAgLy8gZW52aXJvbm1lbnQsIGJlY2F1c2UgV2VicGFjayBieSBkZWZhdWx0IHdpbGwgcG9seWZpbGwgdGhlIGBwcm9jZXNzYC4gV2hpbGUgd2UgY2FuIGRpc2Nlcm5cbiAgLy8gdGhhdCBXZWJwYWNrIHBvbHlmaWxsZWQgaXQgYnkgbG9va2luZyBhdCBgcHJvY2Vzcy5icm93c2VyYCwgaXQncyB2ZXJ5IFdlYnBhY2stc3BlY2lmaWMgYW5kXG4gIC8vIG1pZ2h0IG5vdCBiZSBmdXR1cmUtcHJvb2YuIEluc3RlYWQgd2UgbG9vayBhdCB0aGUgc3RyaW5naWZpZWQgdmVyc2lvbiBvZiBgcHJvY2Vzc2Agd2hpY2hcbiAgLy8gaXMgYFtvYmplY3QgcHJvY2Vzc11gIGluIE5vZGUgYW5kIGBbb2JqZWN0IE9iamVjdF1gIHdoZW4gcG9seWZpbGxlZC5cbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpbWl6ZUdyb3VwUGxheWVyKHBsYXllcnM6IEFuaW1hdGlvblBsYXllcltdKTogQW5pbWF0aW9uUGxheWVyIHtcbiAgc3dpdGNoIChwbGF5ZXJzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBuZXcgTm9vcEFuaW1hdGlvblBsYXllcigpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwbGF5ZXJzWzBdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IMm1QW5pbWF0aW9uR3JvdXBQbGF5ZXIocGxheWVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUtleWZyYW1lcyhcbiAgICBkcml2ZXI6IEFuaW1hdGlvbkRyaXZlciwgbm9ybWFsaXplcjogQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyLCBlbGVtZW50OiBhbnksXG4gICAga2V5ZnJhbWVzOiDJtVN0eWxlRGF0YVtdLCBwcmVTdHlsZXM6IMm1U3R5bGVEYXRhID0ge30sXG4gICAgcG9zdFN0eWxlczogybVTdHlsZURhdGEgPSB7fSk6IMm1U3R5bGVEYXRhW10ge1xuICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IG5vcm1hbGl6ZWRLZXlmcmFtZXM6IMm1U3R5bGVEYXRhW10gPSBbXTtcbiAgbGV0IHByZXZpb3VzT2Zmc2V0ID0gLTE7XG4gIGxldCBwcmV2aW91c0tleWZyYW1lOiDJtVN0eWxlRGF0YXxudWxsID0gbnVsbDtcbiAga2V5ZnJhbWVzLmZvckVhY2goa2YgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9IGtmWydvZmZzZXQnXSBhcyBudW1iZXI7XG4gICAgY29uc3QgaXNTYW1lT2Zmc2V0ID0gb2Zmc2V0ID09IHByZXZpb3VzT2Zmc2V0O1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRLZXlmcmFtZTogybVTdHlsZURhdGEgPSAoaXNTYW1lT2Zmc2V0ICYmIHByZXZpb3VzS2V5ZnJhbWUpIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKGtmKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgbGV0IG5vcm1hbGl6ZWRQcm9wID0gcHJvcDtcbiAgICAgIGxldCBub3JtYWxpemVkVmFsdWUgPSBrZltwcm9wXTtcbiAgICAgIGlmIChwcm9wICE9PSAnb2Zmc2V0Jykge1xuICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZXIubm9ybWFsaXplUHJvcGVydHlOYW1lKG5vcm1hbGl6ZWRQcm9wLCBlcnJvcnMpO1xuICAgICAgICBzd2l0Y2ggKG5vcm1hbGl6ZWRWYWx1ZSkge1xuICAgICAgICAgIGNhc2UgUFJFX1NUWUxFOlxuICAgICAgICAgICAgbm9ybWFsaXplZFZhbHVlID0gcHJlU3R5bGVzW3Byb3BdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIEFVVE9fU1RZTEU6XG4gICAgICAgICAgICBub3JtYWxpemVkVmFsdWUgPSBwb3N0U3R5bGVzW3Byb3BdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbm9ybWFsaXplZFZhbHVlID1cbiAgICAgICAgICAgICAgICBub3JtYWxpemVyLm5vcm1hbGl6ZVN0eWxlVmFsdWUocHJvcCwgbm9ybWFsaXplZFByb3AsIG5vcm1hbGl6ZWRWYWx1ZSwgZXJyb3JzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub3JtYWxpemVkS2V5ZnJhbWVbbm9ybWFsaXplZFByb3BdID0gbm9ybWFsaXplZFZhbHVlO1xuICAgIH0pO1xuICAgIGlmICghaXNTYW1lT2Zmc2V0KSB7XG4gICAgICBub3JtYWxpemVkS2V5ZnJhbWVzLnB1c2gobm9ybWFsaXplZEtleWZyYW1lKTtcbiAgICB9XG4gICAgcHJldmlvdXNLZXlmcmFtZSA9IG5vcm1hbGl6ZWRLZXlmcmFtZTtcbiAgICBwcmV2aW91c09mZnNldCA9IG9mZnNldDtcbiAgfSk7XG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgY29uc3QgTElORV9TVEFSVCA9ICdcXG4gLSAnO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuYWJsZSB0byBhbmltYXRlIGR1ZSB0byB0aGUgZm9sbG93aW5nIGVycm9yczoke0xJTkVfU1RBUlR9JHtlcnJvcnMuam9pbihMSU5FX1NUQVJUKX1gKTtcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemVkS2V5ZnJhbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuT25QbGF5ZXIoXG4gICAgcGxheWVyOiBBbmltYXRpb25QbGF5ZXIsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudDogQW5pbWF0aW9uRXZlbnQgfCB1bmRlZmluZWQsXG4gICAgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiBhbnkpIHtcbiAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgICBwbGF5ZXIub25TdGFydCgoKSA9PiBjYWxsYmFjayhldmVudCAmJiBjb3B5QW5pbWF0aW9uRXZlbnQoZXZlbnQsICdzdGFydCcsIHBsYXllcikpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgcGxheWVyLm9uRG9uZSgoKSA9PiBjYWxsYmFjayhldmVudCAmJiBjb3B5QW5pbWF0aW9uRXZlbnQoZXZlbnQsICdkb25lJywgcGxheWVyKSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGVzdHJveSc6XG4gICAgICBwbGF5ZXIub25EZXN0cm95KCgpID0+IGNhbGxiYWNrKGV2ZW50ICYmIGNvcHlBbmltYXRpb25FdmVudChldmVudCwgJ2Rlc3Ryb3knLCBwbGF5ZXIpKSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weUFuaW1hdGlvbkV2ZW50KFxuICAgIGU6IEFuaW1hdGlvbkV2ZW50LCBwaGFzZU5hbWU6IHN0cmluZywgcGxheWVyOiBBbmltYXRpb25QbGF5ZXIpOiBBbmltYXRpb25FdmVudCB7XG4gIGNvbnN0IHRvdGFsVGltZSA9IHBsYXllci50b3RhbFRpbWU7XG4gIGNvbnN0IGRpc2FibGVkID0gKHBsYXllciBhcyBhbnkpLmRpc2FibGVkID8gdHJ1ZSA6IGZhbHNlO1xuICBjb25zdCBldmVudCA9IG1ha2VBbmltYXRpb25FdmVudChcbiAgICAgIGUuZWxlbWVudCwgZS50cmlnZ2VyTmFtZSwgZS5mcm9tU3RhdGUsIGUudG9TdGF0ZSwgcGhhc2VOYW1lIHx8IGUucGhhc2VOYW1lLFxuICAgICAgdG90YWxUaW1lID09IHVuZGVmaW5lZCA/IGUudG90YWxUaW1lIDogdG90YWxUaW1lLCBkaXNhYmxlZCk7XG4gIGNvbnN0IGRhdGEgPSAoZSBhcyBhbnkpWydfZGF0YSddO1xuICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgKGV2ZW50IGFzIGFueSlbJ19kYXRhJ10gPSBkYXRhO1xuICB9XG4gIHJldHVybiBldmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBbmltYXRpb25FdmVudChcbiAgICBlbGVtZW50OiBhbnksIHRyaWdnZXJOYW1lOiBzdHJpbmcsIGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlOiBzdHJpbmcsIHBoYXNlTmFtZTogc3RyaW5nID0gJycsXG4gICAgdG90YWxUaW1lOiBudW1iZXIgPSAwLCBkaXNhYmxlZD86IGJvb2xlYW4pOiBBbmltYXRpb25FdmVudCB7XG4gIHJldHVybiB7ZWxlbWVudCwgdHJpZ2dlck5hbWUsIGZyb21TdGF0ZSwgdG9TdGF0ZSwgcGhhc2VOYW1lLCB0b3RhbFRpbWUsIGRpc2FibGVkOiAhIWRpc2FibGVkfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yU2V0QXNJbk1hcChcbiAgICBtYXA6IE1hcDxhbnksIGFueT58IHtba2V5OiBzdHJpbmddOiBhbnl9LCBrZXk6IGFueSwgZGVmYXVsdFZhbHVlOiBhbnkpIHtcbiAgbGV0IHZhbHVlOiBhbnk7XG4gIGlmIChtYXAgaW5zdGFuY2VvZiBNYXApIHtcbiAgICB2YWx1ZSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICBtYXAuc2V0KGtleSwgdmFsdWUgPSBkZWZhdWx0VmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IG1hcFtrZXldO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbWFwW2tleV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZWxpbmVDb21tYW5kKGNvbW1hbmQ6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xuICBjb25zdCBzZXBhcmF0b3JQb3MgPSBjb21tYW5kLmluZGV4T2YoJzonKTtcbiAgY29uc3QgaWQgPSBjb21tYW5kLnN1YnN0cmluZygxLCBzZXBhcmF0b3JQb3MpO1xuICBjb25zdCBhY3Rpb24gPSBjb21tYW5kLnN1YnN0cihzZXBhcmF0b3JQb3MgKyAxKTtcbiAgcmV0dXJuIFtpZCwgYWN0aW9uXTtcbn1cblxubGV0IF9jb250YWluczogKGVsbTE6IGFueSwgZWxtMjogYW55KSA9PiBib29sZWFuID0gKGVsbTE6IGFueSwgZWxtMjogYW55KSA9PiBmYWxzZTtcbmxldCBfbWF0Y2hlczogKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZykgPT4gYm9vbGVhbiA9IChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpID0+XG4gICAgZmFsc2U7XG5sZXQgX3F1ZXJ5OiAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbikgPT4gYW55W10gPVxuICAgIChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gW107XG4gICAgfTtcblxuLy8gRGVmaW5lIHV0aWxpdHkgbWV0aG9kcyBmb3IgYnJvd3NlcnMgYW5kIHBsYXRmb3JtLXNlcnZlcihkb21pbm8pIHdoZXJlIEVsZW1lbnRcbi8vIGFuZCB1dGlsaXR5IG1ldGhvZHMgZXhpc3QuXG5jb25zdCBfaXNOb2RlID0gaXNOb2RlKCk7XG5pZiAoX2lzTm9kZSB8fCB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gdGhpcyBpcyB3ZWxsIHN1cHBvcnRlZCBpbiBhbGwgYnJvd3NlcnNcbiAgX2NvbnRhaW5zID0gKGVsbTE6IGFueSwgZWxtMjogYW55KSA9PiB7IHJldHVybiBlbG0xLmNvbnRhaW5zKGVsbTIpIGFzIGJvb2xlYW47IH07XG5cbiAgX21hdGNoZXMgPSAoKCkgPT4ge1xuICAgIGlmIChfaXNOb2RlIHx8IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgIHJldHVybiAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlIGFzIGFueTtcbiAgICAgIGNvbnN0IGZuID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8IHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fCBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHJldHVybiAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBmbi5hcHBseShlbGVtZW50LCBbc2VsZWN0b3JdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBfbWF0Y2hlcztcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgX3F1ZXJ5ID0gKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pOiBhbnlbXSA9PiB7XG4gICAgbGV0IHJlc3VsdHM6IGFueVtdID0gW107XG4gICAgaWYgKG11bHRpKSB7XG4gICAgICByZXN1bHRzLnB1c2goLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsbSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICBpZiAoZWxtKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChlbG0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNWZW5kb3JQcmVmaXgocHJvcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIFdlYmtpdCBpcyB0aGUgb25seSByZWFsIHBvcHVsYXIgdmVuZG9yIHByZWZpeCBub3dhZGF5c1xuICAvLyBjYzogaHR0cDovL3Nob3VsZGlwcmVmaXguY29tL1xuICByZXR1cm4gcHJvcC5zdWJzdHJpbmcoMSwgNikgPT0gJ2Via2l0JzsgIC8vIHdlYmtpdCBvciBXZWJraXRcbn1cblxubGV0IF9DQUNIRURfQk9EWToge3N0eWxlOiBhbnl9fG51bGwgPSBudWxsO1xubGV0IF9JU19XRUJLSVQgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghX0NBQ0hFRF9CT0RZKSB7XG4gICAgX0NBQ0hFRF9CT0RZID0gZ2V0Qm9keU5vZGUoKSB8fCB7fTtcbiAgICBfSVNfV0VCS0lUID0gX0NBQ0hFRF9CT0RZICEuc3R5bGUgPyAoJ1dlYmtpdEFwcGVhcmFuY2UnIGluIF9DQUNIRURfQk9EWSAhLnN0eWxlKSA6IGZhbHNlO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHRydWU7XG4gIGlmIChfQ0FDSEVEX0JPRFkgIS5zdHlsZSAmJiAhY29udGFpbnNWZW5kb3JQcmVmaXgocHJvcCkpIHtcbiAgICByZXN1bHQgPSBwcm9wIGluIF9DQUNIRURfQk9EWSAhLnN0eWxlO1xuICAgIGlmICghcmVzdWx0ICYmIF9JU19XRUJLSVQpIHtcbiAgICAgIGNvbnN0IGNhbWVsUHJvcCA9ICdXZWJraXQnICsgcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc3Vic3RyKDEpO1xuICAgICAgcmVzdWx0ID0gY2FtZWxQcm9wIGluIF9DQUNIRURfQk9EWSAhLnN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2R5Tm9kZSgpOiBhbnl8bnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXNFbGVtZW50ID0gX21hdGNoZXM7XG5leHBvcnQgY29uc3QgY29udGFpbnNFbGVtZW50ID0gX2NvbnRhaW5zO1xuZXhwb3J0IGNvbnN0IGludm9rZVF1ZXJ5ID0gX3F1ZXJ5O1xuXG5leHBvcnQgZnVuY3Rpb24gaHlwZW5hdGVQcm9wc09iamVjdChvYmplY3Q6IHtba2V5OiBzdHJpbmddOiBhbnl9KToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICBjb25zdCBuZXdPYmo6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChwcm9wID0+IHtcbiAgICBjb25zdCBuZXdQcm9wID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKTtcbiAgICBuZXdPYmpbbmV3UHJvcF0gPSBvYmplY3RbcHJvcF07XG4gIH0pO1xuICByZXR1cm4gbmV3T2JqO1xufVxuIl19
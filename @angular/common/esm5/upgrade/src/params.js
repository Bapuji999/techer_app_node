/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding URL parts.
 *
 * @publicApi
 **/
var UrlCodec = /** @class */ (function () {
    function UrlCodec() {
    }
    return UrlCodec;
}());
export { UrlCodec };
/**
 * A `UrlCodec` that uses logic from AngularJS to serialize and parse URLs
 * and URL parameters.
 *
 * @publicApi
 */
var AngularJSUrlCodec = /** @class */ (function () {
    function AngularJSUrlCodec() {
    }
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L15
    AngularJSUrlCodec.prototype.encodePath = function (path) {
        var segments = path.split('/');
        var i = segments.length;
        while (i--) {
            // decode forward slashes to prevent them from being double encoded
            segments[i] = encodeUriSegment(segments[i].replace(/%2F/g, '/'));
        }
        path = segments.join('/');
        return _stripIndexHtml((path && path[0] !== '/' && '/' || '') + path);
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L42
    AngularJSUrlCodec.prototype.encodeSearch = function (search) {
        if (typeof search === 'string') {
            search = parseKeyValue(search);
        }
        search = toKeyValue(search);
        return search ? '?' + search : '';
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L44
    AngularJSUrlCodec.prototype.encodeHash = function (hash) {
        hash = encodeUriSegment(hash);
        return hash ? '#' + hash : '';
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L27
    AngularJSUrlCodec.prototype.decodePath = function (path, html5Mode) {
        if (html5Mode === void 0) { html5Mode = true; }
        var segments = path.split('/');
        var i = segments.length;
        while (i--) {
            segments[i] = decodeURIComponent(segments[i]);
            if (html5Mode) {
                // encode forward slashes to prevent them from being mistaken for path separators
                segments[i] = segments[i].replace(/\//g, '%2F');
            }
        }
        return segments.join('/');
    };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L72
    AngularJSUrlCodec.prototype.decodeSearch = function (search) { return parseKeyValue(search); };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/location.js#L73
    AngularJSUrlCodec.prototype.decodeHash = function (hash) {
        hash = decodeURIComponent(hash);
        return hash[0] === '#' ? hash.substring(1) : hash;
    };
    AngularJSUrlCodec.prototype.normalize = function (pathOrHref, search, hash, baseUrl) {
        if (arguments.length === 1) {
            var parsed = this.parse(pathOrHref, baseUrl);
            if (typeof parsed === 'string') {
                return parsed;
            }
            var serverUrl = parsed.protocol + "://" + parsed.hostname + (parsed.port ? ':' + parsed.port : '');
            return this.normalize(this.decodePath(parsed.pathname), this.decodeSearch(parsed.search), this.decodeHash(parsed.hash), serverUrl);
        }
        else {
            var encPath = this.encodePath(pathOrHref);
            var encSearch = search && this.encodeSearch(search) || '';
            var encHash = hash && this.encodeHash(hash) || '';
            var joinedPath = (baseUrl || '') + encPath;
            if (!joinedPath.length || joinedPath[0] !== '/') {
                joinedPath = '/' + joinedPath;
            }
            return joinedPath + encSearch + encHash;
        }
    };
    AngularJSUrlCodec.prototype.areEqual = function (valA, valB) { return this.normalize(valA) === this.normalize(valB); };
    // https://github.com/angular/angular.js/blob/864c7f0/src/ng/urlUtils.js#L60
    AngularJSUrlCodec.prototype.parse = function (url, base) {
        try {
            // Safari 12 throws an error when the URL constructor is called with an undefined base.
            var parsed = !base ? new URL(url) : new URL(url, base);
            return {
                href: parsed.href,
                protocol: parsed.protocol ? parsed.protocol.replace(/:$/, '') : '',
                host: parsed.host,
                search: parsed.search ? parsed.search.replace(/^\?/, '') : '',
                hash: parsed.hash ? parsed.hash.replace(/^#/, '') : '',
                hostname: parsed.hostname,
                port: parsed.port,
                pathname: (parsed.pathname.charAt(0) === '/') ? parsed.pathname : '/' + parsed.pathname
            };
        }
        catch (e) {
            throw new Error("Invalid URL (" + url + ") with base (" + base + ")");
        }
    };
    return AngularJSUrlCodec;
}());
export { AngularJSUrlCodec };
function _stripIndexHtml(url) {
    return url.replace(/\/index.html$/, '');
}
/**
 * Tries to decode the URI component without throwing an exception.
 *
 * @param str value potential URI component to check.
 * @returns the decoded URI if it can be decoded or else `undefined`.
 */
function tryDecodeURIComponent(value) {
    try {
        return decodeURIComponent(value);
    }
    catch (e) {
        // Ignore any invalid uri component.
        return undefined;
    }
}
/**
 * Parses an escaped url query string into key-value pairs. Logic taken from
 * https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1382
 */
function parseKeyValue(keyValue) {
    var obj = {};
    (keyValue || '').split('&').forEach(function (keyValue) {
        var splitPoint, key, val;
        if (keyValue) {
            key = keyValue = keyValue.replace(/\+/g, '%20');
            splitPoint = keyValue.indexOf('=');
            if (splitPoint !== -1) {
                key = keyValue.substring(0, splitPoint);
                val = keyValue.substring(splitPoint + 1);
            }
            key = tryDecodeURIComponent(key);
            if (typeof key !== 'undefined') {
                val = typeof val !== 'undefined' ? tryDecodeURIComponent(val) : true;
                if (!obj.hasOwnProperty(key)) {
                    obj[key] = val;
                }
                else if (Array.isArray(obj[key])) {
                    obj[key].push(val);
                }
                else {
                    obj[key] = [obj[key], val];
                }
            }
        }
    });
    return obj;
}
/**
 * Serializes into key-value pairs. Logic taken from
 * https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1409
 */
function toKeyValue(obj) {
    var parts = [];
    var _loop_1 = function (key) {
        var value = obj[key];
        if (Array.isArray(value)) {
            value.forEach(function (arrayValue) {
                parts.push(encodeUriQuery(key, true) +
                    (arrayValue === true ? '' : '=' + encodeUriQuery(arrayValue, true)));
            });
        }
        else {
            parts.push(encodeUriQuery(key, true) +
                (value === true ? '' : '=' + encodeUriQuery(value, true)));
        }
    };
    for (var key in obj) {
        _loop_1(key);
    }
    return parts.length ? parts.join('&') : '';
}
/**
 * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
 * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
 * segments:
 *    segment       = *pchar
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 *
 * Logic from https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1437
 */
function encodeUriSegment(val) {
    return encodeUriQuery(val, true)
        .replace(/%26/gi, '&')
        .replace(/%3D/gi, '=')
        .replace(/%2B/gi, '+');
}
/**
 * This method is intended for encoding *key* or *value* parts of query component. We need a custom
 * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
 * encoded per http://tools.ietf.org/html/rfc3986:
 *    query         = *( pchar / "/" / "?" )
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 *
 * Logic from https://github.com/angular/angular.js/blob/864c7f0/src/Angular.js#L1456
 */
function encodeUriQuery(val, pctEncodeSpaces) {
    if (pctEncodeSpaces === void 0) { pctEncodeSpaces = false; }
    return encodeURIComponent(val)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3VwZ3JhZGUvc3JjL3BhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztJQUlJO0FBQ0o7SUFBQTtJQXFGQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFyRkQsSUFxRkM7O0FBRUQ7Ozs7O0dBS0c7QUFDSDtJQUFBO0lBOEdBLENBQUM7SUE3R0MsNEVBQTRFO0lBQzVFLHNDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUV4QixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsbUVBQW1FO1lBQ25FLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxlQUFlLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSx3Q0FBWSxHQUFaLFVBQWEsTUFBcUM7UUFDaEQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztRQUVELE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFD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SCxTQUFTLGNBQWMsQ0FBQyxHQUFXLEVBQUUsZUFBZ0M7SUFBaEMsZ0NBQUEsRUFBQSx1QkFBZ0M7SUFDbkUsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7U0FDekIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDckIsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7U0FDcEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDckIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQSBjb2RlYyBmb3IgZW5jb2RpbmcgYW5kIGRlY29kaW5nIFVSTCBwYXJ0cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXJsQ29kZWMge1xuICAvKipcbiAgICogRW5jb2RlcyB0aGUgcGF0aCBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggc3RyaW5nXG4gICAqL1xuICBhYnN0cmFjdCBlbmNvZGVQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZztcblxuICAvKipcbiAgICogRGVjb2RlcyB0aGUgcGF0aCBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggc3RyaW5nXG4gICAqL1xuICBhYnN0cmFjdCBkZWNvZGVQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZztcblxuICAvKipcbiAgICogRW5jb2RlcyB0aGUgc2VhcmNoIHN0cmluZyBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmcgb3Igb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIHN0cmluZyBvciBvYmplY3RcbiAgICovXG4gIGFic3RyYWN0IGVuY29kZVNlYXJjaChzZWFyY2g6IHN0cmluZ3x7W2s6IHN0cmluZ106IHVua25vd259KTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWNvZGVzIHRoZSBzZWFyY2ggb2JqZWN0cyBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggc3RyaW5nXG4gICAqL1xuICBhYnN0cmFjdCBkZWNvZGVTZWFyY2goc2VhcmNoOiBzdHJpbmcpOiB7W2s6IHN0cmluZ106IHVua25vd259O1xuXG4gIC8qKlxuICAgKiBFbmNvZGVzIHRoZSBoYXNoIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgaGFzaCBzdHJpbmdcbiAgICovXG4gIGFic3RyYWN0IGVuY29kZUhhc2goaGFzaDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWNvZGVzIHRoZSBoYXNoIGZyb20gdGhlIHByb3ZpZGVkIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gcGF0aCBUaGUgaGFzaCBzdHJpbmdcbiAgICovXG4gIGFic3RyYWN0IGRlY29kZUhhc2goaGFzaDogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVzIHRoZSBVUkwgZnJvbSB0aGUgcHJvdmlkZWQgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFRoZSBVUkwgc3RyaW5nXG4gICAqL1xuICBhYnN0cmFjdCBub3JtYWxpemUoaHJlZjogc3RyaW5nKTogc3RyaW5nO1xuXG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZXMgdGhlIFVSTCBmcm9tIHRoZSBwcm92aWRlZCBzdHJpbmcsIHNlYXJjaCwgaGFzaCwgYW5kIGJhc2UgVVJMIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIFVSTCBwYXRoXG4gICAqIEBwYXJhbSBzZWFyY2ggVGhlIHNlYXJjaCBvYmplY3RcbiAgICogQHBhcmFtIGhhc2ggVGhlIGhhcyBzdHJpbmdcbiAgICogQHBhcmFtIGJhc2VVcmwgVGhlIGJhc2UgVVJMIGZvciB0aGUgVVJMXG4gICAqL1xuICBhYnN0cmFjdCBub3JtYWxpemUocGF0aDogc3RyaW5nLCBzZWFyY2g6IHtbazogc3RyaW5nXTogdW5rbm93bn0sIGhhc2g6IHN0cmluZywgYmFzZVVybD86IHN0cmluZyk6XG4gICAgICBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB0d28gc3RyaW5ncyBhcmUgZXF1YWxcbiAgICogQHBhcmFtIHZhbEEgRmlyc3Qgc3RyaW5nIGZvciBjb21wYXJpc29uXG4gICAqIEBwYXJhbSB2YWxCIFNlY29uZCBzdHJpbmcgZm9yIGNvbXBhcmlzb25cbiAgICovXG4gIGFic3RyYWN0IGFyZUVxdWFsKHZhbEE6IHN0cmluZywgdmFsQjogc3RyaW5nKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBVUkwgc3RyaW5nIGJhc2VkIG9uIHRoZSBiYXNlIFVSTFxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFRoZSBmdWxsIFVSTCBzdHJpbmdcbiAgICogQHBhcmFtIGJhc2UgVGhlIGJhc2UgZm9yIHRoZSBVUkxcbiAgICovXG4gIGFic3RyYWN0IHBhcnNlKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKToge1xuICAgIGhyZWY6IHN0cmluZyxcbiAgICBwcm90b2NvbDogc3RyaW5nLFxuICAgIGhvc3Q6IHN0cmluZyxcbiAgICBzZWFyY2g6IHN0cmluZyxcbiAgICBoYXNoOiBzdHJpbmcsXG4gICAgaG9zdG5hbWU6IHN0cmluZyxcbiAgICBwb3J0OiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZ1xuICB9O1xufVxuXG4vKipcbiAqIEEgYFVybENvZGVjYCB0aGF0IHVzZXMgbG9naWMgZnJvbSBBbmd1bGFySlMgdG8gc2VyaWFsaXplIGFuZCBwYXJzZSBVUkxzXG4gKiBhbmQgVVJMIHBhcmFtZXRlcnMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgQW5ndWxhckpTVXJsQ29kZWMgaW1wbGVtZW50cyBVcmxDb2RlYyB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi84NjRjN2YwL3NyYy9uZy9sb2NhdGlvbi5qcyNMMTVcbiAgZW5jb2RlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgIGxldCBpID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgLy8gZGVjb2RlIGZvcndhcmQgc2xhc2hlcyB0byBwcmV2ZW50IHRoZW0gZnJvbSBiZWluZyBkb3VibGUgZW5jb2RlZFxuICAgICAgc2VnbWVudHNbaV0gPSBlbmNvZGVVcmlTZWdtZW50KHNlZ21lbnRzW2ldLnJlcGxhY2UoLyUyRi9nLCAnLycpKTtcbiAgICB9XG5cbiAgICBwYXRoID0gc2VnbWVudHMuam9pbignLycpO1xuICAgIHJldHVybiBfc3RyaXBJbmRleEh0bWwoKHBhdGggJiYgcGF0aFswXSAhPT0gJy8nICYmICcvJyB8fCAnJykgKyBwYXRoKTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi84NjRjN2YwL3NyYy9uZy9sb2NhdGlvbi5qcyNMNDJcbiAgZW5jb2RlU2VhcmNoKHNlYXJjaDogc3RyaW5nfHtbazogc3RyaW5nXTogdW5rbm93bn0pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnc3RyaW5nJykge1xuICAgICAgc2VhcmNoID0gcGFyc2VLZXlWYWx1ZShzZWFyY2gpO1xuICAgIH1cblxuICAgIHNlYXJjaCA9IHRvS2V5VmFsdWUoc2VhcmNoKTtcbiAgICByZXR1cm4gc2VhcmNoID8gJz8nICsgc2VhcmNoIDogJyc7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvbmcvbG9jYXRpb24uanMjTDQ0XG4gIGVuY29kZUhhc2goaGFzaDogc3RyaW5nKSB7XG4gICAgaGFzaCA9IGVuY29kZVVyaVNlZ21lbnQoaGFzaCk7XG4gICAgcmV0dXJuIGhhc2ggPyAnIycgKyBoYXNoIDogJyc7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvbmcvbG9jYXRpb24uanMjTDI3XG4gIGRlY29kZVBhdGgocGF0aDogc3RyaW5nLCBodG1sNU1vZGUgPSB0cnVlKTogc3RyaW5nIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICBsZXQgaSA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHNlZ21lbnRzW2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KHNlZ21lbnRzW2ldKTtcbiAgICAgIGlmIChodG1sNU1vZGUpIHtcbiAgICAgICAgLy8gZW5jb2RlIGZvcndhcmQgc2xhc2hlcyB0byBwcmV2ZW50IHRoZW0gZnJvbSBiZWluZyBtaXN0YWtlbiBmb3IgcGF0aCBzZXBhcmF0b3JzXG4gICAgICAgIHNlZ21lbnRzW2ldID0gc2VnbWVudHNbaV0ucmVwbGFjZSgvXFwvL2csICclMkYnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VnbWVudHMuam9pbignLycpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iLzg2NGM3ZjAvc3JjL25nL2xvY2F0aW9uLmpzI0w3MlxuICBkZWNvZGVTZWFyY2goc2VhcmNoOiBzdHJpbmcpIHsgcmV0dXJuIHBhcnNlS2V5VmFsdWUoc2VhcmNoKTsgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi84NjRjN2YwL3NyYy9uZy9sb2NhdGlvbi5qcyNMNzNcbiAgZGVjb2RlSGFzaChoYXNoOiBzdHJpbmcpIHtcbiAgICBoYXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KGhhc2gpO1xuICAgIHJldHVybiBoYXNoWzBdID09PSAnIycgPyBoYXNoLnN1YnN0cmluZygxKSA6IGhhc2g7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvbmcvbG9jYXRpb24uanMjTDE0OVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvbmcvbG9jYXRpb24uanMjTDQyXG4gIG5vcm1hbGl6ZShocmVmOiBzdHJpbmcpOiBzdHJpbmc7XG4gIG5vcm1hbGl6ZShwYXRoOiBzdHJpbmcsIHNlYXJjaDoge1trOiBzdHJpbmddOiB1bmtub3dufSwgaGFzaDogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTogc3RyaW5nO1xuICBub3JtYWxpemUocGF0aE9ySHJlZjogc3RyaW5nLCBzZWFyY2g/OiB7W2s6IHN0cmluZ106IHVua25vd259LCBoYXNoPzogc3RyaW5nLCBiYXNlVXJsPzogc3RyaW5nKTpcbiAgICAgIHN0cmluZyB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2UocGF0aE9ySHJlZiwgYmFzZVVybCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyc2VkID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZXJ2ZXJVcmwgPVxuICAgICAgICAgIGAke3BhcnNlZC5wcm90b2NvbH06Ly8ke3BhcnNlZC5ob3N0bmFtZX0ke3BhcnNlZC5wb3J0ID8gJzonICsgcGFyc2VkLnBvcnQgOiAnJ31gO1xuXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoXG4gICAgICAgICAgdGhpcy5kZWNvZGVQYXRoKHBhcnNlZC5wYXRobmFtZSksIHRoaXMuZGVjb2RlU2VhcmNoKHBhcnNlZC5zZWFyY2gpLFxuICAgICAgICAgIHRoaXMuZGVjb2RlSGFzaChwYXJzZWQuaGFzaCksIHNlcnZlclVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuY1BhdGggPSB0aGlzLmVuY29kZVBhdGgocGF0aE9ySHJlZik7XG4gICAgICBjb25zdCBlbmNTZWFyY2ggPSBzZWFyY2ggJiYgdGhpcy5lbmNvZGVTZWFyY2goc2VhcmNoKSB8fCAnJztcbiAgICAgIGNvbnN0IGVuY0hhc2ggPSBoYXNoICYmIHRoaXMuZW5jb2RlSGFzaChoYXNoKSB8fCAnJztcblxuICAgICAgbGV0IGpvaW5lZFBhdGggPSAoYmFzZVVybCB8fCAnJykgKyBlbmNQYXRoO1xuXG4gICAgICBpZiAoIWpvaW5lZFBhdGgubGVuZ3RoIHx8IGpvaW5lZFBhdGhbMF0gIT09ICcvJykge1xuICAgICAgICBqb2luZWRQYXRoID0gJy8nICsgam9pbmVkUGF0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBqb2luZWRQYXRoICsgZW5jU2VhcmNoICsgZW5jSGFzaDtcbiAgICB9XG4gIH1cblxuICBhcmVFcXVhbCh2YWxBOiBzdHJpbmcsIHZhbEI6IHN0cmluZykgeyByZXR1cm4gdGhpcy5ub3JtYWxpemUodmFsQSkgPT09IHRoaXMubm9ybWFsaXplKHZhbEIpOyB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iLzg2NGM3ZjAvc3JjL25nL3VybFV0aWxzLmpzI0w2MFxuICBwYXJzZSh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAvLyBTYWZhcmkgMTIgdGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBjYWxsZWQgd2l0aCBhbiB1bmRlZmluZWQgYmFzZS5cbiAgICAgIGNvbnN0IHBhcnNlZCA9ICFiYXNlID8gbmV3IFVSTCh1cmwpIDogbmV3IFVSTCh1cmwsIGJhc2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogcGFyc2VkLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiBwYXJzZWQucHJvdG9jb2wgPyBwYXJzZWQucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogcGFyc2VkLmhvc3QsXG4gICAgICAgIHNlYXJjaDogcGFyc2VkLnNlYXJjaCA/IHBhcnNlZC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiBwYXJzZWQuaGFzaCA/IHBhcnNlZC5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiBwYXJzZWQuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHBhcnNlZC5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHBhcnNlZC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgPyBwYXJzZWQucGF0aG5hbWUgOiAnLycgKyBwYXJzZWQucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVSTCAoJHt1cmx9KSB3aXRoIGJhc2UgKCR7YmFzZX0pYCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9zdHJpcEluZGV4SHRtbCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwucmVwbGFjZSgvXFwvaW5kZXguaHRtbCQvLCAnJyk7XG59XG5cbi8qKlxuICogVHJpZXMgdG8gZGVjb2RlIHRoZSBVUkkgY29tcG9uZW50IHdpdGhvdXQgdGhyb3dpbmcgYW4gZXhjZXB0aW9uLlxuICpcbiAqIEBwYXJhbSBzdHIgdmFsdWUgcG90ZW50aWFsIFVSSSBjb21wb25lbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB0aGUgZGVjb2RlZCBVUkkgaWYgaXQgY2FuIGJlIGRlY29kZWQgb3IgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gdHJ5RGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZSBhbnkgaW52YWxpZCB1cmkgY29tcG9uZW50LlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG4vKipcbiAqIFBhcnNlcyBhbiBlc2NhcGVkIHVybCBxdWVyeSBzdHJpbmcgaW50byBrZXktdmFsdWUgcGFpcnMuIExvZ2ljIHRha2VuIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi84NjRjN2YwL3NyYy9Bbmd1bGFyLmpzI0wxMzgyXG4gKi9cbmZ1bmN0aW9uIHBhcnNlS2V5VmFsdWUoa2V5VmFsdWU6IHN0cmluZyk6IHtbazogc3RyaW5nXTogdW5rbm93bn0ge1xuICBjb25zdCBvYmo6IHtbazogc3RyaW5nXTogdW5rbm93bn0gPSB7fTtcbiAgKGtleVZhbHVlIHx8ICcnKS5zcGxpdCgnJicpLmZvckVhY2goKGtleVZhbHVlKSA9PiB7XG4gICAgbGV0IHNwbGl0UG9pbnQsIGtleSwgdmFsO1xuICAgIGlmIChrZXlWYWx1ZSkge1xuICAgICAga2V5ID0ga2V5VmFsdWUgPSBrZXlWYWx1ZS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpO1xuICAgICAgc3BsaXRQb2ludCA9IGtleVZhbHVlLmluZGV4T2YoJz0nKTtcbiAgICAgIGlmIChzcGxpdFBvaW50ICE9PSAtMSkge1xuICAgICAgICBrZXkgPSBrZXlWYWx1ZS5zdWJzdHJpbmcoMCwgc3BsaXRQb2ludCk7XG4gICAgICAgIHZhbCA9IGtleVZhbHVlLnN1YnN0cmluZyhzcGxpdFBvaW50ICsgMSk7XG4gICAgICB9XG4gICAgICBrZXkgPSB0cnlEZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWwgPSB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyA/IHRyeURlY29kZVVSSUNvbXBvbmVudCh2YWwpIDogdHJ1ZTtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tleV0pKSB7XG4gICAgICAgICAgKG9ialtrZXldIGFzIHVua25vd25bXSkucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtrZXldID0gW29ialtrZXldLCB2YWxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemVzIGludG8ga2V5LXZhbHVlIHBhaXJzLiBMb2dpYyB0YWtlbiBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvQW5ndWxhci5qcyNMMTQwOVxuICovXG5mdW5jdGlvbiB0b0tleVZhbHVlKG9iajoge1trOiBzdHJpbmddOiB1bmtub3dufSkge1xuICBjb25zdCBwYXJ0czogdW5rbm93bltdID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGxldCB2YWx1ZSA9IG9ialtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoYXJyYXlWYWx1ZSkgPT4ge1xuICAgICAgICBwYXJ0cy5wdXNoKFxuICAgICAgICAgICAgZW5jb2RlVXJpUXVlcnkoa2V5LCB0cnVlKSArXG4gICAgICAgICAgICAoYXJyYXlWYWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJz0nICsgZW5jb2RlVXJpUXVlcnkoYXJyYXlWYWx1ZSwgdHJ1ZSkpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0cy5wdXNoKFxuICAgICAgICAgIGVuY29kZVVyaVF1ZXJ5KGtleSwgdHJ1ZSkgK1xuICAgICAgICAgICh2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJz0nICsgZW5jb2RlVXJpUXVlcnkodmFsdWUgYXMgYW55LCB0cnVlKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHMubGVuZ3RoID8gcGFydHMuam9pbignJicpIDogJyc7XG59XG5cblxuLyoqXG4gKiBXZSBuZWVkIG91ciBjdXN0b20gbWV0aG9kIGJlY2F1c2UgZW5jb2RlVVJJQ29tcG9uZW50IGlzIHRvbyBhZ2dyZXNzaXZlIGFuZCBkb2Vzbid0IGZvbGxvd1xuICogaHR0cDovL3d3dy5pZXRmLm9yZy9yZmMvcmZjMzk4Ni50eHQgd2l0aCByZWdhcmRzIHRvIHRoZSBjaGFyYWN0ZXIgc2V0IChwY2hhcikgYWxsb3dlZCBpbiBwYXRoXG4gKiBzZWdtZW50czpcbiAqICAgIHNlZ21lbnQgICAgICAgPSAqcGNoYXJcbiAqICAgIHBjaGFyICAgICAgICAgPSB1bnJlc2VydmVkIC8gcGN0LWVuY29kZWQgLyBzdWItZGVsaW1zIC8gXCI6XCIgLyBcIkBcIlxuICogICAgcGN0LWVuY29kZWQgICA9IFwiJVwiIEhFWERJRyBIRVhESUdcbiAqICAgIHVucmVzZXJ2ZWQgICAgPSBBTFBIQSAvIERJR0lUIC8gXCItXCIgLyBcIi5cIiAvIFwiX1wiIC8gXCJ+XCJcbiAqICAgIHN1Yi1kZWxpbXMgICAgPSBcIiFcIiAvIFwiJFwiIC8gXCImXCIgLyBcIidcIiAvIFwiKFwiIC8gXCIpXCJcbiAqICAgICAgICAgICAgICAgICAgICAgLyBcIipcIiAvIFwiK1wiIC8gXCIsXCIgLyBcIjtcIiAvIFwiPVwiXG4gKlxuICogTG9naWMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvQW5ndWxhci5qcyNMMTQzN1xuICovXG5mdW5jdGlvbiBlbmNvZGVVcmlTZWdtZW50KHZhbDogc3RyaW5nKSB7XG4gIHJldHVybiBlbmNvZGVVcmlRdWVyeSh2YWwsIHRydWUpXG4gICAgICAucmVwbGFjZSgvJTI2L2dpLCAnJicpXG4gICAgICAucmVwbGFjZSgvJTNEL2dpLCAnPScpXG4gICAgICAucmVwbGFjZSgvJTJCL2dpLCAnKycpO1xufVxuXG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgaW50ZW5kZWQgZm9yIGVuY29kaW5nICprZXkqIG9yICp2YWx1ZSogcGFydHMgb2YgcXVlcnkgY29tcG9uZW50LiBXZSBuZWVkIGEgY3VzdG9tXG4gKiBtZXRob2QgYmVjYXVzZSBlbmNvZGVVUklDb21wb25lbnQgaXMgdG9vIGFnZ3Jlc3NpdmUgYW5kIGVuY29kZXMgc3R1ZmYgdGhhdCBkb2Vzbid0IGhhdmUgdG8gYmVcbiAqIGVuY29kZWQgcGVyIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODY6XG4gKiAgICBxdWVyeSAgICAgICAgID0gKiggcGNoYXIgLyBcIi9cIiAvIFwiP1wiIClcbiAqICAgIHBjaGFyICAgICAgICAgPSB1bnJlc2VydmVkIC8gcGN0LWVuY29kZWQgLyBzdWItZGVsaW1zIC8gXCI6XCIgLyBcIkBcIlxuICogICAgdW5yZXNlcnZlZCAgICA9IEFMUEhBIC8gRElHSVQgLyBcIi1cIiAvIFwiLlwiIC8gXCJfXCIgLyBcIn5cIlxuICogICAgcGN0LWVuY29kZWQgICA9IFwiJVwiIEhFWERJRyBIRVhESUdcbiAqICAgIHN1Yi1kZWxpbXMgICAgPSBcIiFcIiAvIFwiJFwiIC8gXCImXCIgLyBcIidcIiAvIFwiKFwiIC8gXCIpXCJcbiAqICAgICAgICAgICAgICAgICAgICAgLyBcIipcIiAvIFwiK1wiIC8gXCIsXCIgLyBcIjtcIiAvIFwiPVwiXG4gKlxuICogTG9naWMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvODY0YzdmMC9zcmMvQW5ndWxhci5qcyNMMTQ1NlxuICovXG5mdW5jdGlvbiBlbmNvZGVVcmlRdWVyeSh2YWw6IHN0cmluZywgcGN0RW5jb2RlU3BhY2VzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXG4gICAgICAucmVwbGFjZSgvJTQwL2dpLCAnQCcpXG4gICAgICAucmVwbGFjZSgvJTNBL2dpLCAnOicpXG4gICAgICAucmVwbGFjZSgvJTI0L2csICckJylcbiAgICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJylcbiAgICAgIC5yZXBsYWNlKC8lM0IvZ2ksICc7JylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgKHBjdEVuY29kZVNwYWNlcyA/ICclMjAnIDogJysnKSk7XG59XG4iXX0=
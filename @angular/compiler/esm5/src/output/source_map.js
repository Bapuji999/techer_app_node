/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { utf8Encode } from '../util';
// https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit
var VERSION = 3;
var JS_B64_PREFIX = '# sourceMappingURL=data:application/json;base64,';
var SourceMapGenerator = /** @class */ (function () {
    function SourceMapGenerator(file) {
        if (file === void 0) { file = null; }
        this.file = file;
        this.sourcesContent = new Map();
        this.lines = [];
        this.lastCol0 = 0;
        this.hasMappings = false;
    }
    // The content is `null` when the content is expected to be loaded using the URL
    SourceMapGenerator.prototype.addSource = function (url, content) {
        if (content === void 0) { content = null; }
        if (!this.sourcesContent.has(url)) {
            this.sourcesContent.set(url, content);
        }
        return this;
    };
    SourceMapGenerator.prototype.addLine = function () {
        this.lines.push([]);
        this.lastCol0 = 0;
        return this;
    };
    SourceMapGenerator.prototype.addMapping = function (col0, sourceUrl, sourceLine0, sourceCol0) {
        if (!this.currentLine) {
            throw new Error("A line must be added before mappings can be added");
        }
        if (sourceUrl != null && !this.sourcesContent.has(sourceUrl)) {
            throw new Error("Unknown source file \"" + sourceUrl + "\"");
        }
        if (col0 == null) {
            throw new Error("The column in the generated code must be provided");
        }
        if (col0 < this.lastCol0) {
            throw new Error("Mapping should be added in output order");
        }
        if (sourceUrl && (sourceLine0 == null || sourceCol0 == null)) {
            throw new Error("The source location must be provided when a source url is provided");
        }
        this.hasMappings = true;
        this.lastCol0 = col0;
        this.currentLine.push({ col0: col0, sourceUrl: sourceUrl, sourceLine0: sourceLine0, sourceCol0: sourceCol0 });
        return this;
    };
    Object.defineProperty(SourceMapGenerator.prototype, "currentLine", {
        /**
        * @internal strip this from published d.ts files due to
        * https://github.com/microsoft/TypeScript/issues/36216
        */
        get: function () { return this.lines.slice(-1)[0]; },
        enumerable: true,
        configurable: true
    });
    SourceMapGenerator.prototype.toJSON = function () {
        var _this = this;
        if (!this.hasMappings) {
            return null;
        }
        var sourcesIndex = new Map();
        var sources = [];
        var sourcesContent = [];
        Array.from(this.sourcesContent.keys()).forEach(function (url, i) {
            sourcesIndex.set(url, i);
            sources.push(url);
            sourcesContent.push(_this.sourcesContent.get(url) || null);
        });
        var mappings = '';
        var lastCol0 = 0;
        var lastSourceIndex = 0;
        var lastSourceLine0 = 0;
        var lastSourceCol0 = 0;
        this.lines.forEach(function (segments) {
            lastCol0 = 0;
            mappings += segments
                .map(function (segment) {
                // zero-based starting column of the line in the generated code
                var segAsStr = toBase64VLQ(segment.col0 - lastCol0);
                lastCol0 = segment.col0;
                if (segment.sourceUrl != null) {
                    // zero-based index into the “sources” list
                    segAsStr +=
                        toBase64VLQ(sourcesIndex.get(segment.sourceUrl) - lastSourceIndex);
                    lastSourceIndex = sourcesIndex.get(segment.sourceUrl);
                    // the zero-based starting line in the original source
                    segAsStr += toBase64VLQ(segment.sourceLine0 - lastSourceLine0);
                    lastSourceLine0 = segment.sourceLine0;
                    // the zero-based starting column in the original source
                    segAsStr += toBase64VLQ(segment.sourceCol0 - lastSourceCol0);
                    lastSourceCol0 = segment.sourceCol0;
                }
                return segAsStr;
            })
                .join(',');
            mappings += ';';
        });
        mappings = mappings.slice(0, -1);
        return {
            'file': this.file || '',
            'version': VERSION,
            'sourceRoot': '',
            'sources': sources,
            'sourcesContent': sourcesContent,
            'mappings': mappings,
        };
    };
    SourceMapGenerator.prototype.toJsComment = function () {
        return this.hasMappings ? '//' + JS_B64_PREFIX + toBase64String(JSON.stringify(this, null, 0)) :
            '';
    };
    return SourceMapGenerator;
}());
export { SourceMapGenerator };
export function toBase64String(value) {
    var b64 = '';
    value = utf8Encode(value);
    for (var i = 0; i < value.length;) {
        var i1 = value.charCodeAt(i++);
        var i2 = value.charCodeAt(i++);
        var i3 = value.charCodeAt(i++);
        b64 += toBase64Digit(i1 >> 2);
        b64 += toBase64Digit(((i1 & 3) << 4) | (isNaN(i2) ? 0 : i2 >> 4));
        b64 += isNaN(i2) ? '=' : toBase64Digit(((i2 & 15) << 2) | (i3 >> 6));
        b64 += isNaN(i2) || isNaN(i3) ? '=' : toBase64Digit(i3 & 63);
    }
    return b64;
}
function toBase64VLQ(value) {
    value = value < 0 ? ((-value) << 1) + 1 : value << 1;
    var out = '';
    do {
        var digit = value & 31;
        value = value >> 5;
        if (value > 0) {
            digit = digit | 32;
        }
        out += toBase64Digit(digit);
    } while (value > 0);
    return out;
}
var B64_DIGITS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function toBase64Digit(value) {
    if (value < 0 || value >= 64) {
        throw new Error("Can only encode value in the range [0, 63]");
    }
    return B64_DIGITS[value];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvc291cmNlX21hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRW5DLHVGQUF1RjtBQUN2RixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFbEIsSUFBTSxhQUFhLEdBQUcsa0RBQWtELENBQUM7QUFrQnpFO0lBTUUsNEJBQW9CLElBQXdCO1FBQXhCLHFCQUFBLEVBQUEsV0FBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFMcEMsbUJBQWMsR0FBNkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNyRCxVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUN4QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRW1CLENBQUM7SUFFaEQsZ0ZBQWdGO0lBQ2hGLHNDQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsT0FBMkI7UUFBM0Isd0JBQUEsRUFBQSxjQUEyQjtRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsU0FBa0Is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QyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDOUQ7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFhO0lBQ2hDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFFckQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsR0FBRztRQUNELElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDcEI7UUFDRCxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCLFFBQVEsS0FBSyxHQUFHLENBQUMsRUFBRTtJQUVwQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRyxrRUFBa0UsQ0FBQztBQUV0RixTQUFTLGFBQWEsQ0FBQyxLQUFhO0lBQ2xDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUMvRDtJQUVELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7dXRmOEVuY29kZX0gZnJvbSAnLi4vdXRpbCc7XG5cbi8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVUxUkdBZWhRd1J5cFVUb3ZGMUtSbHBpT0Z6ZTBiLV8yZ2M2ZkFIMEtZMGsvZWRpdFxuY29uc3QgVkVSU0lPTiA9IDM7XG5cbmNvbnN0IEpTX0I2NF9QUkVGSVggPSAnIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJztcblxudHlwZSBTZWdtZW50ID0ge1xuICBjb2wwOiBudW1iZXIsXG4gIHNvdXJjZVVybD86IHN0cmluZyxcbiAgc291cmNlTGluZTA/OiBudW1iZXIsXG4gIHNvdXJjZUNvbDA/OiBudW1iZXIsXG59O1xuXG5leHBvcnQgdHlwZSBTb3VyY2VNYXAgPSB7XG4gIHZlcnNpb246IG51bWJlcixcbiAgZmlsZT86IHN0cmluZyxcbiAgc291cmNlUm9vdDogc3RyaW5nLFxuICBzb3VyY2VzOiBzdHJpbmdbXSxcbiAgc291cmNlc0NvbnRlbnQ6IChzdHJpbmcgfCBudWxsKVtdLFxuICBtYXBwaW5nczogc3RyaW5nLFxufTtcblxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hcEdlbmVyYXRvciB7XG4gIHByaXZhdGUgc291cmNlc0NvbnRlbnQ6IE1hcDxzdHJpbmcsIHN0cmluZ3xudWxsPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBsaW5lczogU2VnbWVudFtdW10gPSBbXTtcbiAgcHJpdmF0ZSBsYXN0Q29sMDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBoYXNNYXBwaW5ncyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZTogc3RyaW5nfG51bGwgPSBudWxsKSB7fVxuXG4gIC8vIFRoZSBjb250ZW50IGlzIGBudWxsYCB3aGVuIHRoZSBjb250ZW50IGlzIGV4cGVjdGVkIHRvIGJlIGxvYWRlZCB1c2luZyB0aGUgVVJMXG4gIGFkZFNvdXJjZSh1cmw6IHN0cmluZywgY29udGVudDogc3RyaW5nfG51bGwgPSBudWxsKTogdGhpcyB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50Lmhhcyh1cmwpKSB7XG4gICAgICB0aGlzLnNvdXJjZXNDb250ZW50LnNldCh1cmwsIGNvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZExpbmUoKTogdGhpcyB7XG4gICAgdGhpcy5saW5lcy5wdXNoKFtdKTtcbiAgICB0aGlzLmxhc3RDb2wwID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZE1hcHBpbmcoY29sMDogbnVtYmVyLCBzb3VyY2VVcmw/OiBzdHJpbmcsIHNvdXJjZUxpbmUwPzogbnVtYmVyLCBzb3VyY2VDb2wwPzogbnVtYmVyKTogdGhpcyB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRMaW5lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgbGluZSBtdXN0IGJlIGFkZGVkIGJlZm9yZSBtYXBwaW5ncyBjYW4gYmUgYWRkZWRgKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZVVybCAhPSBudWxsICYmICF0aGlzLnNvdXJjZXNDb250ZW50Lmhhcyhzb3VyY2VVcmwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gc291cmNlIGZpbGUgXCIke3NvdXJjZVVybH1cImApO1xuICAgIH1cbiAgICBpZiAoY29sMCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb2x1bW4gaW4gdGhlIGdlbmVyYXRlZCBjb2RlIG11c3QgYmUgcHJvdmlkZWRgKTtcbiAgICB9XG4gICAgaWYgKGNvbDAgPCB0aGlzLmxhc3RDb2wwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1hcHBpbmcgc2hvdWxkIGJlIGFkZGVkIGluIG91dHB1dCBvcmRlcmApO1xuICAgIH1cbiAgICBpZiAoc291cmNlVXJsICYmIChzb3VyY2VMaW5lMCA9PSBudWxsIHx8IHNvdXJjZUNvbDAgPT0gbnVsbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHNvdXJjZSBsb2NhdGlvbiBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gYSBzb3VyY2UgdXJsIGlzIHByb3ZpZGVkYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNNYXBwaW5ncyA9IHRydWU7XG4gICAgdGhpcy5sYXN0Q29sMCA9IGNvbDA7XG4gICAgdGhpcy5jdXJyZW50TGluZS5wdXNoKHtjb2wwLCBzb3VyY2VVcmwsIHNvdXJjZUxpbmUwLCBzb3VyY2VDb2wwfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgKiBAaW50ZXJuYWwgc3RyaXAgdGhpcyBmcm9tIHB1Ymxpc2hlZCBkLnRzIGZpbGVzIGR1ZSB0b1xuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzYyMTZcbiAgKi9cbiAgcHJpdmF0ZSBnZXQgY3VycmVudExpbmUoKTogU2VnbWVudFtdfG51bGwgeyByZXR1cm4gdGhpcy5saW5lcy5zbGljZSgtMSlbMF07IH1cblxuICB0b0pTT04oKTogU291cmNlTWFwfG51bGwge1xuICAgIGlmICghdGhpcy5oYXNNYXBwaW5ncykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlc0luZGV4ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBjb25zdCBzb3VyY2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHNvdXJjZXNDb250ZW50OiAoc3RyaW5nIHwgbnVsbClbXSA9IFtdO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLnNvdXJjZXNDb250ZW50LmtleXMoKSkuZm9yRWFjaCgodXJsOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgICAgc291cmNlc0luZGV4LnNldCh1cmwsIGkpO1xuICAgICAgc291cmNlcy5wdXNoKHVybCk7XG4gICAgICBzb3VyY2VzQ29udGVudC5wdXNoKHRoaXMuc291cmNlc0NvbnRlbnQuZ2V0KHVybCkgfHwgbnVsbCk7XG4gICAgfSk7XG5cbiAgICBsZXQgbWFwcGluZ3M6IHN0cmluZyA9ICcnO1xuICAgIGxldCBsYXN0Q29sMDogbnVtYmVyID0gMDtcbiAgICBsZXQgbGFzdFNvdXJjZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBsYXN0U291cmNlTGluZTA6IG51bWJlciA9IDA7XG4gICAgbGV0IGxhc3RTb3VyY2VDb2wwOiBudW1iZXIgPSAwO1xuXG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKHNlZ21lbnRzID0+IHtcbiAgICAgIGxhc3RDb2wwID0gMDtcblxuICAgICAgbWFwcGluZ3MgKz0gc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKHNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gemVyby1iYXNlZCBzdGFydGluZyBjb2x1bW4gb2YgdGhlIGxpbmUgaW4gdGhlIGdlbmVyYXRlZCBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VnQXNTdHIgPSB0b0Jhc2U2NFZMUShzZWdtZW50LmNvbDAgLSBsYXN0Q29sMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q29sMCA9IHNlZ21lbnQuY29sMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQuc291cmNlVXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gemVyby1iYXNlZCBpbmRleCBpbnRvIHRoZSDigJxzb3VyY2Vz4oCdIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnQXNTdHIgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQmFzZTY0VkxRKHNvdXJjZXNJbmRleC5nZXQoc2VnbWVudC5zb3VyY2VVcmwpICEgLSBsYXN0U291cmNlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0U291cmNlSW5kZXggPSBzb3VyY2VzSW5kZXguZ2V0KHNlZ21lbnQuc291cmNlVXJsKSAhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgemVyby1iYXNlZCBzdGFydGluZyBsaW5lIGluIHRoZSBvcmlnaW5hbCBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnQXNTdHIgKz0gdG9CYXNlNjRWTFEoc2VnbWVudC5zb3VyY2VMaW5lMCAhIC0gbGFzdFNvdXJjZUxpbmUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNvdXJjZUxpbmUwID0gc2VnbWVudC5zb3VyY2VMaW5lMCAhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgemVyby1iYXNlZCBzdGFydGluZyBjb2x1bW4gaW4gdGhlIG9yaWdpbmFsIHNvdXJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdBc1N0ciArPSB0b0Jhc2U2NFZMUShzZWdtZW50LnNvdXJjZUNvbDAgISAtIGxhc3RTb3VyY2VDb2wwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNvdXJjZUNvbDAgPSBzZWdtZW50LnNvdXJjZUNvbDAgITtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlZ0FzU3RyO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywnKTtcbiAgICAgIG1hcHBpbmdzICs9ICc7JztcbiAgICB9KTtcblxuICAgIG1hcHBpbmdzID0gbWFwcGluZ3Muc2xpY2UoMCwgLTEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdmaWxlJzogdGhpcy5maWxlIHx8ICcnLFxuICAgICAgJ3ZlcnNpb24nOiBWRVJTSU9OLFxuICAgICAgJ3NvdXJjZVJvb3QnOiAnJyxcbiAgICAgICdzb3VyY2VzJzogc291cmNlcyxcbiAgICAgICdzb3VyY2VzQ29udGVudCc6IHNvdXJjZXNDb250ZW50LFxuICAgICAgJ21hcHBpbmdzJzogbWFwcGluZ3MsXG4gICAgfTtcbiAgfVxuXG4gIHRvSnNDb21tZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaGFzTWFwcGluZ3MgPyAnLy8nICsgSlNfQjY0X1BSRUZJWCArIHRvQmFzZTY0U3RyaW5nKEpTT04uc3RyaW5naWZ5KHRoaXMsIG51bGwsIDApKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9CYXNlNjRTdHJpbmcodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBiNjQgPSAnJztcbiAgdmFsdWUgPSB1dGY4RW5jb2RlKHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7KSB7XG4gICAgY29uc3QgaTEgPSB2YWx1ZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgY29uc3QgaTIgPSB2YWx1ZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgY29uc3QgaTMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkrKyk7XG4gICAgYjY0ICs9IHRvQmFzZTY0RGlnaXQoaTEgPj4gMik7XG4gICAgYjY0ICs9IHRvQmFzZTY0RGlnaXQoKChpMSAmIDMpIDw8IDQpIHwgKGlzTmFOKGkyKSA/IDAgOiBpMiA+PiA0KSk7XG4gICAgYjY0ICs9IGlzTmFOKGkyKSA/ICc9JyA6IHRvQmFzZTY0RGlnaXQoKChpMiAmIDE1KSA8PCAyKSB8IChpMyA+PiA2KSk7XG4gICAgYjY0ICs9IGlzTmFOKGkyKSB8fCBpc05hTihpMykgPyAnPScgOiB0b0Jhc2U2NERpZ2l0KGkzICYgNjMpO1xuICB9XG5cbiAgcmV0dXJuIGI2NDtcbn1cblxuZnVuY3Rpb24gdG9CYXNlNjRWTFEodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gIHZhbHVlID0gdmFsdWUgPCAwID8gKCgtdmFsdWUpIDw8IDEpICsgMSA6IHZhbHVlIDw8IDE7XG5cbiAgbGV0IG91dCA9ICcnO1xuICBkbyB7XG4gICAgbGV0IGRpZ2l0ID0gdmFsdWUgJiAzMTtcbiAgICB2YWx1ZSA9IHZhbHVlID4+IDU7XG4gICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgZGlnaXQgPSBkaWdpdCB8IDMyO1xuICAgIH1cbiAgICBvdXQgKz0gdG9CYXNlNjREaWdpdChkaWdpdCk7XG4gIH0gd2hpbGUgKHZhbHVlID4gMCk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuY29uc3QgQjY0X0RJR0lUUyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuZnVuY3Rpb24gdG9CYXNlNjREaWdpdCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+PSA2NCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG9ubHkgZW5jb2RlIHZhbHVlIGluIHRoZSByYW5nZSBbMCwgNjNdYCk7XG4gIH1cblxuICByZXR1cm4gQjY0X0RJR0lUU1t2YWx1ZV07XG59XG4iXX0=
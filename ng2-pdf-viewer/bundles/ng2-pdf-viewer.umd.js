(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng2-pdf-viewer', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ng2-pdf-viewer'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function _createEventBus(pdfJsViewer) {
        var globalEventBus = new pdfJsViewer.EventBus(true);
        attachDOMEventsToEventBus(globalEventBus);
        return globalEventBus;
    }
    function attachDOMEventsToEventBus(eventBus) {
        eventBus.on('documentload', function () {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('documentload', true, true, {});
            window.dispatchEvent(event);
        });
        eventBus.on('pagerendered', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('pagerendered', true, true, {
                pageNumber: evt.pageNumber,
                cssTransform: evt.cssTransform
            });
            evt.source.div.dispatchEvent(event);
        });
        eventBus.on('textlayerrendered', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('textlayerrendered', true, true, {
                pageNumber: evt.pageNumber
            });
            evt.source.textLayerDiv.dispatchEvent(event);
        });
        eventBus.on('pagechanging', function (evt) {
            var event = document.createEvent('UIEvents');
            event.initEvent('pagechanging', true, true);
            event['pageNumber'] = evt.pageNumber;
            evt.source.container.dispatchEvent(event);
        });
        eventBus.on('pagesinit', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('pagesinit', true, true, null);
            evt.source.container.dispatchEvent(event);
        });
        eventBus.on('pagesloaded', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('pagesloaded', true, true, {
                pagesCount: evt.pagesCount
            });
            evt.source.container.dispatchEvent(event);
        });
        eventBus.on('scalechange', function (evt) {
            var event = document.createEvent('UIEvents');
            event.initEvent('scalechange', true, true);
            event['scale'] = evt.scale;
            event['presetValue'] = evt.presetValue;
            evt.source.container.dispatchEvent(event);
        });
        eventBus.on('updateviewarea', function (evt) {
            var event = document.createEvent('UIEvents');
            event.initEvent('updateviewarea', true, true);
            event['location'] = evt.location;
            evt.source.container.dispatchEvent(event);
        });
        eventBus.on('find', function (evt) {
            if (evt.source === window) {
                return; // event comes from FirefoxCom, no need to replicate
            }
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('find' + evt.type, true, true, {
                query: evt.query,
                phraseSearch: evt.phraseSearch,
                caseSensitive: evt.caseSensitive,
                highlightAll: evt.highlightAll,
                findPrevious: evt.findPrevious
            });
            window.dispatchEvent(event);
        });
        eventBus.on('attachmentsloaded', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('attachmentsloaded', true, true, {
                attachmentsCount: evt.attachmentsCount
            });
            evt.source.container.dispatchEvent(event);
        });
        eventBus.on('sidebarviewchanged', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('sidebarviewchanged', true, true, {
                view: evt.view
            });
            evt.source.outerContainer.dispatchEvent(event);
        });
        eventBus.on('pagemode', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('pagemode', true, true, {
                mode: evt.mode
            });
            evt.source.pdfViewer.container.dispatchEvent(event);
        });
        eventBus.on('namedaction', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('namedaction', true, true, {
                action: evt.action
            });
            evt.source.pdfViewer.container.dispatchEvent(event);
        });
        eventBus.on('presentationmodechanged', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('presentationmodechanged', true, true, {
                active: evt.active,
                switchInProgress: evt.switchInProgress
            });
            window.dispatchEvent(event);
        });
        eventBus.on('outlineloaded', function (evt) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('outlineloaded', true, true, {
                outlineCount: evt.outlineCount
            });
            evt.source.container.dispatchEvent(event);
        });
    }
    var createEventBus = _createEventBus;

    var PDFJS;
    var PDFJSViewer;
    function isSSR() {
        return typeof window === 'undefined';
    }
    if (!isSSR()) {
        PDFJS = require('pdfjs-dist/build/pdf');
        PDFJSViewer = require('pdfjs-dist/web/pdf_viewer');
        PDFJS.verbosity = PDFJS.VerbosityLevel.ERRORS;
    }

    (function (RenderTextMode) {
        RenderTextMode[RenderTextMode["DISABLED"] = 0] = "DISABLED";
        RenderTextMode[RenderTextMode["ENABLED"] = 1] = "ENABLED";
        RenderTextMode[RenderTextMode["ENHANCED"] = 2] = "ENHANCED";
    })(exports.RenderTextMode || (exports.RenderTextMode = {}));
    var PdfViewerComponent = /** @class */ (function () {
        function PdfViewerComponent(element) {
            this.element = element;
            this.isVisible = false;
            this._cMapsUrl = typeof PDFJS !== 'undefined'
                ? "https://unpkg.com/pdfjs-dist@" + PDFJS.version + "/cmaps/"
                : null;
            this._renderText = true;
            this._renderTextMode = exports.RenderTextMode.ENABLED;
            this._stickToPage = false;
            this._originalSize = true;
            this._page = 1;
            this._zoom = 1;
            this._rotation = 0;
            this._showAll = true;
            this._canAutoResize = true;
            this._fitToPage = false;
            this._externalLinkTarget = 'blank';
            this._showBorders = false;
            this.isInitialized = false;
            this.afterLoadComplete = new core.EventEmitter();
            this.pageRendered = new core.EventEmitter();
            this.textLayerRendered = new core.EventEmitter();
            this.onError = new core.EventEmitter();
            this.onProgress = new core.EventEmitter();
            this.pageChange = new core.EventEmitter(true);
            if (isSSR()) {
                return;
            }
            var pdfWorkerSrc;
            if (window.hasOwnProperty('pdfWorkerSrc') &&
                typeof window.pdfWorkerSrc === 'string' &&
                window.pdfWorkerSrc) {
                pdfWorkerSrc = window.pdfWorkerSrc;
            }
            else {
                pdfWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + PDFJS.version + "/pdf.worker.min.js";
            }
            PDFJS.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
        }
        PdfViewerComponent_1 = PdfViewerComponent;
        Object.defineProperty(PdfViewerComponent.prototype, "cMapsUrl", {
            set: function (cMapsUrl) {
                this._cMapsUrl = cMapsUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "page", {
            set: function (_page) {
                _page = parseInt(_page, 10) || 1;
                var orginalPage = _page;
                if (this._pdf) {
                    _page = this.getValidPageNumber(_page);
                }
                this._page = _page;
                if (orginalPage !== _page) {
                    this.pageChange.emit(_page);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "renderText", {
            set: function (renderText) {
                this._renderText = renderText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "renderTextMode", {
            set: function (renderTextMode) {
                this._renderTextMode = renderTextMode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "originalSize", {
            set: function (originalSize) {
                this._originalSize = originalSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "showAll", {
            set: function (value) {
                this._showAll = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "stickToPage", {
            set: function (value) {
                this._stickToPage = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "zoom", {
            get: function () {
                return this._zoom;
            },
            set: function (value) {
                if (value <= 0) {
                    return;
                }
                this._zoom = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "rotation", {
            set: function (value) {
                if (!(typeof value === 'number' && value % 90 === 0)) {
                    console.warn('Invalid pages rotation angle.');
                    return;
                }
                this._rotation = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "externalLinkTarget", {
            set: function (value) {
                this._externalLinkTarget = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "autoresize", {
            set: function (value) {
                this._canAutoResize = Boolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "fitToPage", {
            set: function (value) {
                this._fitToPage = Boolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "showBorders", {
            set: function (value) {
                this._showBorders = Boolean(value);
            },
            enumerable: true,
            configurable: true
        });
        PdfViewerComponent.getLinkTarget = function (type) {
            switch (type) {
                case 'blank':
                    return PDFJS.LinkTarget.BLANK;
                case 'none':
                    return PDFJS.LinkTarget.NONE;
                case 'self':
                    return PDFJS.LinkTarget.SELF;
                case 'parent':
                    return PDFJS.LinkTarget.PARENT;
                case 'top':
                    return PDFJS.LinkTarget.TOP;
            }
            return null;
        };
        PdfViewerComponent.setExternalLinkTarget = function (type) {
            var linkTarget = PdfViewerComponent_1.getLinkTarget(type);
            if (linkTarget !== null) {
                PDFJS.externalLinkTarget = linkTarget;
            }
        };
        PdfViewerComponent.prototype.ngAfterViewChecked = function () {
            var _this = this;
            if (this.isInitialized) {
                return;
            }
            var offset = this.pdfViewerContainer.nativeElement.offsetParent;
            if (this.isVisible === true && offset == null) {
                this.isVisible = false;
                return;
            }
            if (this.isVisible === false && offset != null) {
                this.isVisible = true;
                setTimeout(function () {
                    _this.ngOnInit();
                    _this.ngOnChanges({ src: _this.src });
                });
            }
        };
        PdfViewerComponent.prototype.ngOnInit = function () {
            if (!isSSR() && this.isVisible) {
                this.isInitialized = true;
                this.setupMultiPageViewer();
                this.setupSinglePageViewer();
            }
        };
        PdfViewerComponent.prototype.ngOnDestroy = function () {
            if (this._pdf) {
                this._pdf.destroy();
            }
        };
        PdfViewerComponent.prototype.onPageResize = function () {
            var _this = this;
            if (!this._canAutoResize || !this._pdf) {
                return;
            }
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
            }
            this.resizeTimeout = setTimeout(function () {
                _this.updateSize();
            }, 100);
        };
        Object.defineProperty(PdfViewerComponent.prototype, "pdfLinkService", {
            get: function () {
                return this._showAll
                    ? this.pdfMultiPageLinkService
                    : this.pdfSinglePageLinkService;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "pdfViewer", {
            get: function () {
                return this.getCurrentViewer();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PdfViewerComponent.prototype, "pdfFindController", {
            get: function () {
                return this._showAll
                    ? this.pdfMultiPageFindController
                    : this.pdfSinglePageFindController;
            },
            enumerable: true,
            configurable: true
        });
        PdfViewerComponent.prototype.ngOnChanges = function (changes) {
            if (isSSR() || !this.isVisible) {
                return;
            }
            if ('src' in changes) {
                this.loadPDF();
            }
            else if (this._pdf) {
                if ('renderText' in changes) {
                    this.getCurrentViewer().textLayerMode = this._renderText
                        ? this._renderTextMode
                        : exports.RenderTextMode.DISABLED;
                    this.resetPdfDocument();
                }
                else if ('showAll' in changes) {
                    this.resetPdfDocument();
                }
                if ('page' in changes) {
                    if (changes['page'].currentValue === this._latestScrolledPage) {
                        return;
                    }
                    // New form of page changing: The viewer will now jump to the specified page when it is changed.
                    // This behavior is introducedby using the PDFSinglePageViewer
                    this.getCurrentViewer().scrollPageIntoView({ pageNumber: this._page });
                }
                this.update();
            }
        };
        PdfViewerComponent.prototype.updateSize = function () {
            var _this = this;
            var currentViewer = this.getCurrentViewer();
            this._pdf
                .getPage(currentViewer.currentPageNumber)
                .then(function (page) {
                var rotation = _this._rotation || page.rotate;
                var viewportWidth = page.getViewport({
                    scale: _this._zoom,
                    rotation: rotation
                }).width * PdfViewerComponent_1.CSS_UNITS;
                var scale = _this._zoom;
                var stickToPage = true;
                // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
                if (!_this._originalSize ||
                    (_this._fitToPage &&
                        viewportWidth > _this.pdfViewerContainer.nativeElement.clientWidth)) {
                    scale = _this.getScale(page.getViewport({ scale: 1, rotation: rotation })
                        .width);
                    stickToPage = !_this._stickToPage;
                }
                currentViewer._setScale(scale, stickToPage);
            });
        };
        PdfViewerComponent.prototype.clear = function () {
            if (this.loadingTask && !this.loadingTask.destroyed) {
                this.loadingTask.destroy();
            }
            if (this._pdf) {
                this._pdf.destroy();
                this._pdf = null;
                this.pdfMultiPageViewer.setDocument(null);
                this.pdfSinglePageViewer.setDocument(null);
                this.pdfMultiPageLinkService.setDocument(null, null);
                this.pdfSinglePageLinkService.setDocument(null, null);
                this.pdfMultiPageFindController.setDocument(null);
                this.pdfSinglePageFindController.setDocument(null);
            }
        };
        PdfViewerComponent.prototype.setupMultiPageViewer = function () {
            var _this = this;
            PDFJS.disableTextLayer = !this._renderText;
            PdfViewerComponent_1.setExternalLinkTarget(this._externalLinkTarget);
            var eventBus = createEventBus(PDFJSViewer);
            eventBus.on('pagerendered', function (e) {
                _this.pageRendered.emit(e);
            });
            eventBus.on('pagechanging', function (e) {
                if (_this.pageScrollTimeout) {
                    clearTimeout(_this.pageScrollTimeout);
                }
                _this.pageScrollTimeout = setTimeout(function () {
                    _this._latestScrolledPage = e.pageNumber;
                    _this.pageChange.emit(e.pageNumber);
                }, 100);
            });
            eventBus.on('textlayerrendered', function (e) {
                _this.textLayerRendered.emit(e);
            });
            this.pdfMultiPageLinkService = new PDFJSViewer.PDFLinkService({ eventBus: eventBus });
            this.pdfMultiPageFindController = new PDFJSViewer.PDFFindController({
                linkService: this.pdfMultiPageLinkService,
                eventBus: eventBus
            });
            var pdfOptions = {
                eventBus: eventBus,
                container: this.element.nativeElement.querySelector('div'),
                removePageBorders: !this._showBorders,
                linkService: this.pdfMultiPageLinkService,
                textLayerMode: this._renderText
                    ? this._renderTextMode
                    : exports.RenderTextMode.DISABLED,
                findController: this.pdfMultiPageFindController
            };
            this.pdfMultiPageViewer = new PDFJSViewer.PDFViewer(pdfOptions);
            this.pdfMultiPageLinkService.setViewer(this.pdfMultiPageViewer);
            this.pdfMultiPageFindController.setDocument(this._pdf);
        };
        PdfViewerComponent.prototype.setupSinglePageViewer = function () {
            var _this = this;
            PDFJS.disableTextLayer = !this._renderText;
            PdfViewerComponent_1.setExternalLinkTarget(this._externalLinkTarget);
            var eventBus = createEventBus(PDFJSViewer);
            eventBus.on('pagechanging', function (e) {
                if (e.pageNumber != _this._page) {
                    _this.page = e.pageNumber;
                }
            });
            eventBus.on('pagerendered', function (e) {
                _this.pageRendered.emit(e);
            });
            eventBus.on('textlayerrendered', function (e) {
                _this.textLayerRendered.emit(e);
            });
            this.pdfSinglePageLinkService = new PDFJSViewer.PDFLinkService({
                eventBus: eventBus
            });
            this.pdfSinglePageFindController = new PDFJSViewer.PDFFindController({
                linkService: this.pdfSinglePageLinkService,
                eventBus: eventBus
            });
            var pdfOptions = {
                eventBus: eventBus,
                container: this.element.nativeElement.querySelector('div'),
                removePageBorders: !this._showBorders,
                linkService: this.pdfSinglePageLinkService,
                textLayerMode: this._renderText
                    ? this._renderTextMode
                    : exports.RenderTextMode.DISABLED,
                findController: this.pdfSinglePageFindController
            };
            this.pdfSinglePageViewer = new PDFJSViewer.PDFSinglePageViewer(pdfOptions);
            this.pdfSinglePageLinkService.setViewer(this.pdfSinglePageViewer);
            this.pdfSinglePageFindController.setDocument(this._pdf);
            this.pdfSinglePageViewer._currentPageNumber = this._page;
        };
        PdfViewerComponent.prototype.getValidPageNumber = function (page) {
            if (page < 1) {
                return 1;
            }
            if (page > this._pdf.numPages) {
                return this._pdf.numPages;
            }
            return page;
        };
        PdfViewerComponent.prototype.getDocumentParams = function () {
            var srcType = typeof this.src;
            if (!this._cMapsUrl) {
                return this.src;
            }
            var params = {
                cMapUrl: this._cMapsUrl,
                cMapPacked: true
            };
            if (srcType === 'string') {
                params.url = this.src;
            }
            else if (srcType === 'object') {
                if (this.src.byteLength !== undefined) {
                    params.data = this.src;
                }
                else {
                    Object.assign(params, this.src);
                }
            }
            return params;
        };
        PdfViewerComponent.prototype.loadPDF = function () {
            var _this = this;
            if (!this.src) {
                return;
            }
            if (this.lastLoaded === this.src) {
                this.update();
                return;
            }
            this.clear();
            this.loadingTask = PDFJS.getDocument(this.getDocumentParams());
            this.loadingTask.onProgress = function (progressData) {
                _this.onProgress.emit(progressData);
            };
            var src = this.src;
            this.loadingTask.promise.then(function (pdf) {
                _this._pdf = pdf;
                _this.lastLoaded = src;
                _this.afterLoadComplete.emit(pdf);
                if (!_this.pdfMultiPageViewer) {
                    _this.setupMultiPageViewer();
                    _this.setupSinglePageViewer();
                }
                _this.resetPdfDocument();
                _this.update();
            }, function (error) {
                _this.onError.emit(error);
            });
        };
        PdfViewerComponent.prototype.update = function () {
            this.page = this._page;
            this.render();
        };
        PdfViewerComponent.prototype.render = function () {
            var _this = this;
            this._page = this.getValidPageNumber(this._page);
            var currentViewer = this.getCurrentViewer();
            if (this._rotation !== 0 ||
                currentViewer.pagesRotation !== this._rotation) {
                setTimeout(function () {
                    currentViewer.pagesRotation = _this._rotation;
                });
            }
            if (this._stickToPage) {
                setTimeout(function () {
                    currentViewer.currentPageNumber = _this._page;
                });
            }
            this.updateSize();
        };
        PdfViewerComponent.prototype.getScale = function (viewportWidth) {
            var pdfContainerWidth = this.pdfViewerContainer.nativeElement.clientWidth -
                (this._showBorders ? 2 * PdfViewerComponent_1.BORDER_WIDTH : 0);
            if (pdfContainerWidth === 0 || viewportWidth === 0) {
                return 1;
            }
            return ((this._zoom * (pdfContainerWidth / viewportWidth)) /
                PdfViewerComponent_1.CSS_UNITS);
        };
        PdfViewerComponent.prototype.getCurrentViewer = function () {
            return this._showAll ? this.pdfMultiPageViewer : this.pdfSinglePageViewer;
        };
        PdfViewerComponent.prototype.resetPdfDocument = function () {
            this.pdfFindController.setDocument(this._pdf);
            if (this._showAll) {
                this.pdfSinglePageViewer.setDocument(null);
                this.pdfSinglePageLinkService.setDocument(null);
                this.pdfMultiPageViewer.setDocument(this._pdf);
                this.pdfMultiPageLinkService.setDocument(this._pdf, null);
            }
            else {
                this.pdfMultiPageViewer.setDocument(null);
                this.pdfMultiPageLinkService.setDocument(null);
                this.pdfSinglePageViewer.setDocument(this._pdf);
                this.pdfSinglePageLinkService.setDocument(this._pdf, null);
            }
        };
        var PdfViewerComponent_1;
        PdfViewerComponent.CSS_UNITS = 96.0 / 72.0;
        PdfViewerComponent.BORDER_WIDTH = 9;
        PdfViewerComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.ViewChild('pdfViewerContainer')
        ], PdfViewerComponent.prototype, "pdfViewerContainer", void 0);
        __decorate([
            core.Output('after-load-complete')
        ], PdfViewerComponent.prototype, "afterLoadComplete", void 0);
        __decorate([
            core.Output('page-rendered')
        ], PdfViewerComponent.prototype, "pageRendered", void 0);
        __decorate([
            core.Output('text-layer-rendered')
        ], PdfViewerComponent.prototype, "textLayerRendered", void 0);
        __decorate([
            core.Output('error')
        ], PdfViewerComponent.prototype, "onError", void 0);
        __decorate([
            core.Output('on-progress')
        ], PdfViewerComponent.prototype, "onProgress", void 0);
        __decorate([
            core.Output()
        ], PdfViewerComponent.prototype, "pageChange", void 0);
        __decorate([
            core.Input()
        ], PdfViewerComponent.prototype, "src", void 0);
        __decorate([
            core.Input('c-maps-url')
        ], PdfViewerComponent.prototype, "cMapsUrl", null);
        __decorate([
            core.Input('page')
        ], PdfViewerComponent.prototype, "page", null);
        __decorate([
            core.Input('render-text')
        ], PdfViewerComponent.prototype, "renderText", null);
        __decorate([
            core.Input('render-text-mode')
        ], PdfViewerComponent.prototype, "renderTextMode", null);
        __decorate([
            core.Input('original-size')
        ], PdfViewerComponent.prototype, "originalSize", null);
        __decorate([
            core.Input('show-all')
        ], PdfViewerComponent.prototype, "showAll", null);
        __decorate([
            core.Input('stick-to-page')
        ], PdfViewerComponent.prototype, "stickToPage", null);
        __decorate([
            core.Input('zoom')
        ], PdfViewerComponent.prototype, "zoom", null);
        __decorate([
            core.Input('rotation')
        ], PdfViewerComponent.prototype, "rotation", null);
        __decorate([
            core.Input('external-link-target')
        ], PdfViewerComponent.prototype, "externalLinkTarget", null);
        __decorate([
            core.Input('autoresize')
        ], PdfViewerComponent.prototype, "autoresize", null);
        __decorate([
            core.Input('fit-to-page')
        ], PdfViewerComponent.prototype, "fitToPage", null);
        __decorate([
            core.Input('show-borders')
        ], PdfViewerComponent.prototype, "showBorders", null);
        __decorate([
            core.HostListener('window:resize', [])
        ], PdfViewerComponent.prototype, "onPageResize", null);
        PdfViewerComponent = PdfViewerComponent_1 = __decorate([
            core.Component({
                selector: 'pdf-viewer',
                template: "\n    <div #pdfViewerContainer class=\"ng2-pdf-viewer-container\">\n      <div class=\"pdfViewer\"></div>\n    </div>\n  ",
                styles: [".ng2-pdf-viewer-container{overflow-x:auto;position:relative;height:100%}:host ::ng-deep .textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}:host ::ng-deep .textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}:host ::ng-deep .textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}:host ::ng-deep .textLayer .highlight.begin{border-radius:4px 0 0 4px}:host ::ng-deep .textLayer .highlight.end{border-radius:0 4px 4px 0}:host ::ng-deep .textLayer .highlight.middle{border-radius:0}:host ::ng-deep .textLayer .highlight.selected{background-color:#006400}:host ::ng-deep .textLayer ::-moz-selection{background:#00f}:host ::ng-deep .textLayer ::-moz-selection,:host ::ng-deep .textLayer ::selection{background:#00f}:host ::ng-deep .textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .textLayer .endOfContent.active{top:0}:host ::ng-deep .annotationLayer section{position:absolute}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.pushButton>a,:host ::ng-deep .annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.pushButton>a:hover,:host ::ng-deep .annotationLayer .linkAnnotation>a:hover{opacity:.2;background:#ff0;box-shadow:0 2px 10px #ff0}:host ::ng-deep .annotationLayer .textAnnotation img{position:absolute;cursor:pointer}:host ::ng-deep .annotationLayer .textWidgetAnnotation input,:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;vertical-align:top;width:100%}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select option{padding:0}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}:host ::ng-deep .annotationLayer .textWidgetAnnotation input[disabled],:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}:host ::ng-deep .annotationLayer .textWidgetAnnotation input:hover,:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid #000}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select:hover{border:1px solid #000}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input:hover{border:1px solid #000}:host ::ng-deep .annotationLayer .textWidgetAnnotation input:focus,:host ::ng-deep .annotationLayer .textWidgetAnnotation textarea:focus{background:0 0;border:1px solid transparent}:host ::ng-deep .annotationLayer .choiceWidgetAnnotation select:focus{background:0 0;border:1px solid transparent}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{background-color:#000;content:\"\";display:block;position:absolute;height:80%;left:45%;width:1px}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:#000;content:\"\";display:block;position:absolute;border-radius:50%;height:50%;left:30%;top:20%;width:50%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}:host ::ng-deep .annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}:host ::ng-deep .annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.checkBox input,:host ::ng-deep .annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}:host ::ng-deep .annotationLayer .popupWrapper{position:absolute;width:20em}:host ::ng-deep .annotationLayer .popup{position:absolute;z-index:200;max-width:20em;background-color:#ff9;box-shadow:0 2px 5px #333;border-radius:2px;padding:.6em;margin-left:5px;cursor:pointer;font:message-box;word-wrap:break-word}:host ::ng-deep .annotationLayer .popup h1{font-size:1em;border-bottom:1px solid #000;margin:0;padding-bottom:.2em}:host ::ng-deep .annotationLayer .popup p{margin:0;padding-top:.2em}:host ::ng-deep .annotationLayer .circleAnnotation svg ellipse,:host ::ng-deep .annotationLayer .fileAttachmentAnnotation,:host ::ng-deep .annotationLayer .highlightAnnotation,:host ::ng-deep .annotationLayer .inkAnnotation svg polyline,:host ::ng-deep .annotationLayer .lineAnnotation svg line,:host ::ng-deep .annotationLayer .polygonAnnotation svg polygon,:host ::ng-deep .annotationLayer .polylineAnnotation svg polyline,:host ::ng-deep .annotationLayer .squareAnnotation svg rect,:host ::ng-deep .annotationLayer .squigglyAnnotation,:host ::ng-deep .annotationLayer .stampAnnotation,:host ::ng-deep .annotationLayer .strikeoutAnnotation,:host ::ng-deep .annotationLayer .underlineAnnotation{cursor:pointer}:host ::ng-deep .pdfViewer{padding-bottom:10px}:host ::ng-deep .pdfViewer .canvasWrapper{overflow:hidden}:host ::ng-deep .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid rgba(0,0,0,.01);background-clip:content-box;-o-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;-webkit-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;background-color:#fff}:host ::ng-deep .pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}:host ::ng-deep .pdfViewer.removePageBorders{padding-bottom:0}:host ::ng-deep .pdfViewer.singlePageView{display:inline-block}:host ::ng-deep .pdfViewer.singlePageView .page{margin:0;border:none}:host ::ng-deep .pdfViewer.scrollHorizontal,:host ::ng-deep .pdfViewer.scrollWrapped{margin-left:3.5px;margin-right:3.5px;text-align:center}:host ::ng-deep .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}:host ::ng-deep .pdfViewer.scrollHorizontal,:host ::ng-deep .spread{white-space:nowrap}:host ::ng-deep .pdfViewer.removePageBorders,:host ::ng-deep .pdfViewer.scrollHorizontal .spread,:host ::ng-deep .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}:host ::ng-deep .spread .page{display:inline-block;vertical-align:middle;margin-left:-3.5px;margin-right:-3.5px}:host ::ng-deep .pdfViewer.scrollHorizontal .page,:host ::ng-deep .pdfViewer.scrollHorizontal .spread,:host ::ng-deep .pdfViewer.scrollWrapped .page,:host ::ng-deep .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}:host ::ng-deep .pdfViewer.scrollHorizontal .page,:host ::ng-deep .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}:host ::ng-deep .pdfViewer.removePageBorders .spread .page,:host ::ng-deep .pdfViewer.removePageBorders.scrollHorizontal .page,:host ::ng-deep .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}:host ::ng-deep .pdfViewer .page canvas{margin:0;display:block}:host ::ng-deep .pdfViewer .page canvas[hidden]{display:none}:host ::ng-deep .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(data:image/gif;base64,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) center no-repeat}:host ::ng-deep .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}:host ::ng-deep .pdfPresentationMode .pdfViewer .page,:host ::ng-deep .pdfPresentationMode .pdfViewer .spread{display:block}:host ::ng-deep .pdfPresentationMode .pdfViewer .page,:host ::ng-deep .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}:host ::ng-deep .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}:host ::ng-deep .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}:host ::ng-deep .pdfPresentationMode:-moz-full-screen .pdfViewer .page,:host ::ng-deep .pdfPresentationMode:-webkit-full-screen .pdfViewer .page,:host ::ng-deep .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}"]
            })
        ], PdfViewerComponent);
        return PdfViewerComponent;
    }());

    var PdfViewerModule = /** @class */ (function () {
        function PdfViewerModule() {
        }
        PdfViewerModule = __decorate([
            core.NgModule({
                declarations: [PdfViewerComponent],
                exports: [PdfViewerComponent]
            })
        ], PdfViewerModule);
        return PdfViewerModule;
    }());

    exports.PdfViewerComponent = PdfViewerComponent;
    exports.PdfViewerModule = PdfViewerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-pdf-viewer.umd.js.map

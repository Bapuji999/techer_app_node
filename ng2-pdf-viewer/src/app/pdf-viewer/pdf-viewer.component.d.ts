/**
 * Created by vadimdez on 21/06/16.
 */
import { ElementRef, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { PDFDocumentProxy, PDFSource, PDFProgressData } from 'pdfjs-dist';
import * as ɵngcc0 from '@angular/core';
export declare enum RenderTextMode {
    DISABLED = 0,
    ENABLED = 1,
    ENHANCED = 2
}
export declare class PdfViewerComponent implements OnChanges, OnInit, OnDestroy, AfterViewChecked {
    private element;
    pdfViewerContainer: any;
    private isVisible;
    static CSS_UNITS: number;
    static BORDER_WIDTH: number;
    private pdfMultiPageViewer;
    private pdfMultiPageLinkService;
    private pdfMultiPageFindController;
    private pdfSinglePageViewer;
    private pdfSinglePageLinkService;
    private pdfSinglePageFindController;
    private _cMapsUrl;
    private _renderText;
    private _renderTextMode;
    private _stickToPage;
    private _originalSize;
    private _pdf;
    private _page;
    private _zoom;
    private _rotation;
    private _showAll;
    private _canAutoResize;
    private _fitToPage;
    private _externalLinkTarget;
    private _showBorders;
    private lastLoaded;
    private _latestScrolledPage;
    private resizeTimeout;
    private pageScrollTimeout;
    private isInitialized;
    private loadingTask;
    afterLoadComplete: EventEmitter<PDFDocumentProxy>;
    pageRendered: EventEmitter<CustomEvent<any>>;
    textLayerRendered: EventEmitter<CustomEvent<any>>;
    onError: EventEmitter<any>;
    onProgress: EventEmitter<PDFProgressData>;
    pageChange: EventEmitter<number>;
    src: string | Uint8Array | PDFSource;
    cMapsUrl: string;
    page: any;
    renderText: boolean;
    renderTextMode: RenderTextMode;
    originalSize: boolean;
    showAll: boolean;
    stickToPage: boolean;
    zoom: number;
    rotation: number;
    externalLinkTarget: string;
    autoresize: boolean;
    fitToPage: boolean;
    showBorders: boolean;
    static getLinkTarget(type: string): any;
    static setExternalLinkTarget(type: string): void;
    constructor(element: ElementRef);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onPageResize(): void;
    readonly pdfLinkService: any;
    readonly pdfViewer: any;
    readonly pdfFindController: any;
    ngOnChanges(changes: SimpleChanges): void;
    updateSize(): void;
    clear(): void;
    private setupMultiPageViewer;
    private setupSinglePageViewer;
    private getValidPageNumber;
    private getDocumentParams;
    private loadPDF;
    private update;
    private render;
    private getScale;
    private getCurrentViewer;
    private resetPdfDocument;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PdfViewerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PdfViewerComponent, "pdf-viewer", never, {
    "cMapsUrl": "c-maps-url";
    "page": "page";
    "renderText": "render-text";
    "renderTextMode": "render-text-mode";
    "originalSize": "original-size";
    "showAll": "show-all";
    "stickToPage": "stick-to-page";
    "zoom": "zoom";
    "rotation": "rotation";
    "externalLinkTarget": "external-link-target";
    "autoresize": "autoresize";
    "fitToPage": "fit-to-page";
    "showBorders": "show-borders";
    "src": "src";
}, {
    "afterLoadComplete": "after-load-complete";
    "pageRendered": "page-rendered";
    "textLayerRendered": "text-layer-rendered";
    "onError": "error";
    "onProgress": "on-progress";
    "pageChange": "pageChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicGRmLXZpZXdlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0ZBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHZhZGltZGV6IG9uIDIxLzA2LzE2LlxuICovXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBERkRvY3VtZW50UHJveHksIFBERlNvdXJjZSwgUERGUHJvZ3Jlc3NEYXRhIH0gZnJvbSAncGRmanMtZGlzdCc7XG5leHBvcnQgZGVjbGFyZSBlbnVtIFJlbmRlclRleHRNb2RlIHtcbiAgICBESVNBQkxFRCA9IDAsXG4gICAgRU5BQkxFRCA9IDEsXG4gICAgRU5IQU5DRUQgPSAyXG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQZGZWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcGRmVmlld2VyQ29udGFpbmVyOiBhbnk7XG4gICAgcHJpdmF0ZSBpc1Zpc2libGU7XG4gICAgc3RhdGljIENTU19VTklUUzogbnVtYmVyO1xuICAgIHN0YXRpYyBCT1JERVJfV0lEVEg6IG51bWJlcjtcbiAgICBwcml2YXRlIHBkZk11bHRpUGFnZVZpZXdlcjtcbiAgICBwcml2YXRlIHBkZk11bHRpUGFnZUxpbmtTZXJ2aWNlO1xuICAgIHByaXZhdGUgcGRmTXVsdGlQYWdlRmluZENvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSBwZGZTaW5nbGVQYWdlVmlld2VyO1xuICAgIHByaXZhdGUgcGRmU2luZ2xlUGFnZUxpbmtTZXJ2aWNlO1xuICAgIHByaXZhdGUgcGRmU2luZ2xlUGFnZUZpbmRDb250cm9sbGVyO1xuICAgIHByaXZhdGUgX2NNYXBzVXJsO1xuICAgIHByaXZhdGUgX3JlbmRlclRleHQ7XG4gICAgcHJpdmF0ZSBfcmVuZGVyVGV4dE1vZGU7XG4gICAgcHJpdmF0ZSBfc3RpY2tUb1BhZ2U7XG4gICAgcHJpdmF0ZSBfb3JpZ2luYWxTaXplO1xuICAgIHByaXZhdGUgX3BkZjtcbiAgICBwcml2YXRlIF9wYWdlO1xuICAgIHByaXZhdGUgX3pvb207XG4gICAgcHJpdmF0ZSBfcm90YXRpb247XG4gICAgcHJpdmF0ZSBfc2hvd0FsbDtcbiAgICBwcml2YXRlIF9jYW5BdXRvUmVzaXplO1xuICAgIHByaXZhdGUgX2ZpdFRvUGFnZTtcbiAgICBwcml2YXRlIF9leHRlcm5hbExpbmtUYXJnZXQ7XG4gICAgcHJpdmF0ZSBfc2hvd0JvcmRlcnM7XG4gICAgcHJpdmF0ZSBsYXN0TG9hZGVkO1xuICAgIHByaXZhdGUgX2xhdGVzdFNjcm9sbGVkUGFnZTtcbiAgICBwcml2YXRlIHJlc2l6ZVRpbWVvdXQ7XG4gICAgcHJpdmF0ZSBwYWdlU2Nyb2xsVGltZW91dDtcbiAgICBwcml2YXRlIGlzSW5pdGlhbGl6ZWQ7XG4gICAgcHJpdmF0ZSBsb2FkaW5nVGFzaztcbiAgICBhZnRlckxvYWRDb21wbGV0ZTogRXZlbnRFbWl0dGVyPFBERkRvY3VtZW50UHJveHk+O1xuICAgIHBhZ2VSZW5kZXJlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xuICAgIHRleHRMYXllclJlbmRlcmVkOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gICAgb25FcnJvcjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb25Qcm9ncmVzczogRXZlbnRFbWl0dGVyPFBERlByb2dyZXNzRGF0YT47XG4gICAgcGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgc3JjOiBzdHJpbmcgfCBVaW50OEFycmF5IHwgUERGU291cmNlO1xuICAgIGNNYXBzVXJsOiBzdHJpbmc7XG4gICAgcGFnZTogYW55O1xuICAgIHJlbmRlclRleHQ6IGJvb2xlYW47XG4gICAgcmVuZGVyVGV4dE1vZGU6IFJlbmRlclRleHRNb2RlO1xuICAgIG9yaWdpbmFsU2l6ZTogYm9vbGVhbjtcbiAgICBzaG93QWxsOiBib29sZWFuO1xuICAgIHN0aWNrVG9QYWdlOiBib29sZWFuO1xuICAgIHpvb206IG51bWJlcjtcbiAgICByb3RhdGlvbjogbnVtYmVyO1xuICAgIGV4dGVybmFsTGlua1RhcmdldDogc3RyaW5nO1xuICAgIGF1dG9yZXNpemU6IGJvb2xlYW47XG4gICAgZml0VG9QYWdlOiBib29sZWFuO1xuICAgIHNob3dCb3JkZXJzOiBib29sZWFuO1xuICAgIHN0YXRpYyBnZXRMaW5rVGFyZ2V0KHR5cGU6IHN0cmluZyk6IGFueTtcbiAgICBzdGF0aWMgc2V0RXh0ZXJuYWxMaW5rVGFyZ2V0KHR5cGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZik7XG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG9uUGFnZVJlc2l6ZSgpOiB2b2lkO1xuICAgIHJlYWRvbmx5IHBkZkxpbmtTZXJ2aWNlOiBhbnk7XG4gICAgcmVhZG9ubHkgcGRmVmlld2VyOiBhbnk7XG4gICAgcmVhZG9ubHkgcGRmRmluZENvbnRyb2xsZXI6IGFueTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICB1cGRhdGVTaXplKCk6IHZvaWQ7XG4gICAgY2xlYXIoKTogdm9pZDtcbiAgICBwcml2YXRlIHNldHVwTXVsdGlQYWdlVmlld2VyO1xuICAgIHByaXZhdGUgc2V0dXBTaW5nbGVQYWdlVmlld2VyO1xuICAgIHByaXZhdGUgZ2V0VmFsaWRQYWdlTnVtYmVyO1xuICAgIHByaXZhdGUgZ2V0RG9jdW1lbnRQYXJhbXM7XG4gICAgcHJpdmF0ZSBsb2FkUERGO1xuICAgIHByaXZhdGUgdXBkYXRlO1xuICAgIHByaXZhdGUgcmVuZGVyO1xuICAgIHByaXZhdGUgZ2V0U2NhbGU7XG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50Vmlld2VyO1xuICAgIHByaXZhdGUgcmVzZXRQZGZEb2N1bWVudDtcbn1cbiJdfQ==
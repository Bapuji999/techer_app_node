import { ElementRef, AfterViewInit, OnChanges, SimpleChanges } from "@angular/core";
import { INewCanvasWhiteboardShape } from "./canvas-whiteboard-shape.service";
import { CanvasWhiteboardShape } from "./canvas-whiteboard-shape";
import { CanvasWhiteboardShapeOptions } from "./canvas-whiteboard-shape-options";
import * as ɵngcc0 from '@angular/core';
export declare class CanvasWhiteboardShapePreviewComponent implements AfterViewInit, OnChanges {
    readonly shapeConstructor: INewCanvasWhiteboardShape<CanvasWhiteboardShape>;
    readonly shapeOptions: CanvasWhiteboardShapeOptions;
    canvas: ElementRef;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    drawShapePreview(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CanvasWhiteboardShapePreviewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CanvasWhiteboardShapePreviewComponent, "canvas-whiteboard-shape-preview", never, {
    "shapeConstructor": "shapeConstructor";
    "shapeOptions": "shapeOptions";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtcHJldmlldy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZSB9IGZyb20gXCIuL2NhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRTaGFwZSB9IGZyb20gXCIuL2NhbnZhcy13aGl0ZWJvYXJkLXNoYXBlXCI7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVPcHRpb25zIH0gZnJvbSBcIi4vY2FudmFzLXdoaXRlYm9hcmQtc2hhcGUtb3B0aW9uc1wiO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FudmFzV2hpdGVib2FyZFNoYXBlUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gICAgcmVhZG9ubHkgc2hhcGVDb25zdHJ1Y3RvcjogSU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZTxDYW52YXNXaGl0ZWJvYXJkU2hhcGU+O1xuICAgIHJlYWRvbmx5IHNoYXBlT3B0aW9uczogQ2FudmFzV2hpdGVib2FyZFNoYXBlT3B0aW9ucztcbiAgICBjYW52YXM6IEVsZW1lbnRSZWY7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgZHJhd1NoYXBlUHJldmlldygpOiB2b2lkO1xufVxuIl19
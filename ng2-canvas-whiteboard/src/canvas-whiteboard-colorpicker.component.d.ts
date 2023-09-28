import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CanvasWhiteboardColorPickerComponent implements OnInit {
    private _elementRef;
    previewText: string;
    readonly selectedColor: string;
    canvas: ElementRef;
    readonly showColorPicker: boolean;
    private _context;
    onToggleColorPicker: EventEmitter<boolean>;
    onColorSelected: EventEmitter<string>;
    onSecondaryColorSelected: EventEmitter<string>;
    constructor(_elementRef: ElementRef);
    /**
     * Initialize the canvas drawing context. If we have an aspect ratio set up, the canvas will resize
     * according to the aspect ratio.
     */
    ngOnInit(): void;
    createColorPalette(): void;
    closeOnExternalClick(event: any): void;
    toggleColorPicker(event: Event): void;
    determineColorFromCanvas(event: any): string;
    selectColor(color: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CanvasWhiteboardColorPickerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CanvasWhiteboardColorPickerComponent, "canvas-whiteboard-colorpicker", never, {
    "selectedColor": "selectedColor";
    "showColorPicker": "showColorPicker";
    "previewText": "previewText";
}, {
    "onToggleColorPicker": "onToggleColorPicker";
    "onColorSelected": "onColorSelected";
    "onSecondaryColorSelected": "onSecondaryColorSelected";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQtY29sb3JwaWNrZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhbnZhcy13aGl0ZWJvYXJkLWNvbG9ycGlja2VyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbnZhc1doaXRlYm9hcmRDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcmV2aWV3VGV4dDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlbGVjdGVkQ29sb3I6IHN0cmluZztcbiAgICBjYW52YXM6IEVsZW1lbnRSZWY7XG4gICAgcmVhZG9ubHkgc2hvd0NvbG9yUGlja2VyOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2NvbnRleHQ7XG4gICAgb25Ub2dnbGVDb2xvclBpY2tlcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIG9uQ29sb3JTZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgb25TZWNvbmRhcnlDb2xvclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZik7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgY2FudmFzIGRyYXdpbmcgY29udGV4dC4gSWYgd2UgaGF2ZSBhbiBhc3BlY3QgcmF0aW8gc2V0IHVwLCB0aGUgY2FudmFzIHdpbGwgcmVzaXplXG4gICAgICogYWNjb3JkaW5nIHRvIHRoZSBhc3BlY3QgcmF0aW8uXG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjcmVhdGVDb2xvclBhbGV0dGUoKTogdm9pZDtcbiAgICBjbG9zZU9uRXh0ZXJuYWxDbGljayhldmVudDogYW55KTogdm9pZDtcbiAgICB0b2dnbGVDb2xvclBpY2tlcihldmVudDogRXZlbnQpOiB2b2lkO1xuICAgIGRldGVybWluZUNvbG9yRnJvbUNhbnZhcyhldmVudDogYW55KTogc3RyaW5nO1xuICAgIHNlbGVjdENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19
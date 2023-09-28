import { EventEmitter, ElementRef, OnInit, OnChanges, OnDestroy, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CanvasWhiteboardUpdate } from "./canvas-whiteboard-update.model";
import { CanvasWhiteboardService } from "./canvas-whiteboard.service";
import { CanvasWhiteboardOptions } from "./canvas-whiteboard-options";
import { CanvasWhiteboardShape } from "./shapes/canvas-whiteboard-shape";
import { CanvasWhiteboardShapeService, INewCanvasWhiteboardShape } from "./shapes/canvas-whiteboard-shape.service";
import { CanvasWhiteboardShapeOptions } from "./shapes/canvas-whiteboard-shape-options";
import * as ɵngcc0 from '@angular/core';
export declare class CanvasWhiteboardComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private ngZone;
    private _changeDetector;
    private _canvasWhiteboardService;
    private _canvasWhiteboardShapeService;
    options: CanvasWhiteboardOptions;
    batchUpdateTimeoutDuration: number;
    private _imageUrl;
    set imageUrl(imageUrl: string);
    get imageUrl(): string;
    aspectRatio: number;
    drawButtonClass: string;
    clearButtonClass: string;
    undoButtonClass: string;
    redoButtonClass: string;
    saveDataButtonClass: string;
    drawButtonText: string;
    clearButtonText: string;
    undoButtonText: string;
    redoButtonText: string;
    saveDataButtonText: string;
    drawButtonEnabled: boolean;
    clearButtonEnabled: boolean;
    undoButtonEnabled: boolean;
    redoButtonEnabled: boolean;
    saveDataButtonEnabled: boolean;
    shouldDownloadDrawing: boolean;
    /** @deprecated. Replaced with strokeColorPickerEnabled and fillColorPickerEnabled inputs */
    colorPickerEnabled: boolean;
    strokeColorPickerEnabled: boolean;
    fillColorPickerEnabled: boolean;
    lineWidth: number;
    strokeColor: string;
    startingColor: string;
    scaleFactor: number;
    drawingEnabled: boolean;
    showStrokeColorPicker: boolean;
    showFillColorPicker: boolean;
    downloadedFileName: string;
    lineJoin: string;
    lineCap: string;
    shapeSelectorEnabled: boolean;
    showShapeSelector: boolean;
    fillColor: string;
    onClear: EventEmitter<any>;
    onUndo: EventEmitter<any>;
    onRedo: EventEmitter<any>;
    onBatchUpdate: EventEmitter<CanvasWhiteboardUpdate[]>;
    onImageLoaded: EventEmitter<any>;
    onSave: EventEmitter<string | Blob>;
    canvas: ElementRef;
    context: CanvasRenderingContext2D;
    private _incompleteShapesCanvas;
    private _incompleteShapesCanvasContext;
    private _incompleteShapesMap;
    private _imageElement;
    private _canDraw;
    private _clientDragging;
    private _updateHistory;
    private _lastUUID;
    private _shapesMap;
    private _undoStack;
    private _redoStack;
    private _batchUpdates;
    private _updatesNotDrawn;
    private _updateTimeout;
    private _canvasWhiteboardServiceSubscriptions;
    private _resizeSubscription;
    private _registeredShapesSubscription;
    selectedShapeConstructor: INewCanvasWhiteboardShape<CanvasWhiteboardShape>;
    canvasWhiteboardShapePreviewOptions: CanvasWhiteboardShapeOptions;
    constructor(ngZone: NgZone, _changeDetector: ChangeDetectorRef, _canvasWhiteboardService: CanvasWhiteboardService, _canvasWhiteboardShapeService: CanvasWhiteboardShapeService);
    /**
     * Initialize the canvas drawing context. If we have an aspect ratio set up, the canvas will resize
     * according to the aspect ratio.
     */
    ngOnInit(): void;
    /**
     * If an image exists and it's url changes, we need to redraw the new image on the canvas.
     */
    ngOnChanges(changes: any): void;
    /**
     * Recalculate the width and height of the canvas after the view has been fully initialized
     */
    ngAfterViewInit(): void;
    /**
     * This method reads the options which are helpful since they can be really long when specified in HTML
     * This method is also called everytime the options object changes
     * For security reasons we must check each item on its own since if we iterate the keys
     * we may be injected with malicious values
     *
     * @param options
     */
    private _initInputsFromOptions;
    private _isNullOrUndefined;
    /**
     * Init global window listeners like resize and keydown
     */
    private _initCanvasEventListeners;
    /**
     * Subscribes to new signals in the canvas whiteboard service and executes methods accordingly
     * Because of circular publishing and subscribing, the canvas methods do not use the service when
     * local actions are completed (Ex. clicking undo from the button inside this component)
     */
    private _initCanvasServiceObservables;
    /**
     * Calculate the canvas width and height from it's parent container width and height (use aspect ratio if needed)
     */
    private _calculateCanvasWidthAndHeight;
    /**
     * Load an image and draw it on the canvas (if an image exists)
     * @param callbackFn A function that is called after the image loading is finished
     * @return Emits a value when the image has been loaded.
     */
    private _loadImage;
    /**
     * Sends a notification after clearing the canvas
     * This method should only be called from the clear button in this component since it will emit an clear event
     * If the client calls this method he may create a circular clear action which may cause danger.
     */
    clearCanvasLocal(): void;
    /**
     * Clears all content on the canvas.
     */
    clearCanvas(): void;
    /**
     * This method resets the state of the canvas and redraws it.
     * It calls a callback function after redrawing
     * @param callbackFn
     */
    private _removeCanvasData;
    /**
     * Clears the canvas and redraws the image if the url exists.
     * @param callbackFn A function that is called after the background is redrawn
     * @return Emits a value when the clearing is finished
     */
    private _redrawBackground;
    private _drawStartingColor;
    /**
     * @deprecated Use getDrawingEnabled(): boolean
     */
    getShouldDraw(): boolean;
    /**
     * Returns a value of whether the user clicked the draw button on the canvas.
     */
    getDrawingEnabled(): boolean;
    /**
     * Toggles drawing on the canvas. It is called via the draw button on the canvas.
     */
    toggleDrawingEnabled(): void;
    /**
     * Set if drawing is enabled from the client using the canvas
     * @param drawingEnabled
     */
    setDrawingEnabled(drawingEnabled: boolean): void;
    /**
     * @deprecated Please use the changeStrokeColor(newStrokeColor: string): void method
     */
    changeColor(newStrokeColor: string): void;
    /**
     * Replaces the drawing color with a new color
     * The format should be ("#ffffff" or "rgb(r,g,b,a?)")
     * This method is public so that anyone can access the canvas and change the stroke color
     *
     * @param newStrokeColor The new stroke color
     */
    changeStrokeColor(newStrokeColor: string): void;
    /**
     * Replaces the fill color with a new color
     * The format should be ("#ffffff" or "rgb(r,g,b,a?)")
     * This method is public so that anyone can access the canvas and change the fill color
     *
     * @param newFillColor The new fill color
     */
    changeFillColor(newFillColor: string): void;
    /**
     * This method is invoked by the undo button on the canvas screen
     * It calls the global undo method and emits a notification after undoing.
     * This method should only be called from the undo button in this component since it will emit an undo event
     * If the client calls this method he may create a circular undo action which may cause danger.
     */
    undoLocal(): void;
    /**
     * This methods selects the last uuid prepares it for undoing (making the whole update sequence invisible)
     * This method can be called if the canvas component is a ViewChild of some other component.
     * This method will work even if the undo button has been disabled
     */
    undo(callbackFn?: Function): void;
    /**
     * This method takes an UUID for an update, and redraws the canvas by making all updates with that uuid invisible
     * @param updateUUID
     */
    private _undoCanvas;
    /**
     * This method is invoked by the redo button on the canvas screen
     * It calls the global redo method and emits a notification after redoing
     * This method should only be called from the redo button in this component since it will emit an redo event
     * If the client calls this method he may create a circular redo action which may cause danger.
     */
    redoLocal(): void;
    /**
     * This methods selects the last uuid prepares it for redoing (making the whole update sequence visible)
     * This method can be called if the canvas component is a ViewChild of some other component.
     * This method will work even if the redo button has been disabled
     */
    redo(callbackFn?: any): void;
    /**
     * This method takes an UUID for an update, and redraws the canvas by making all updates with that uuid visible
     * @param updateUUID
     */
    private _redoCanvas;
    /**
     * Catches the Mouse and Touch events made on the canvas.
     * If drawing is disabled (If an image exists but it's not loaded, or the user did not click Draw),
     * this function does nothing.
     *
     * If a "mousedown | touchstart" event is triggered, dragging will be set to true and an CanvasWhiteboardUpdate object
     * of type "start" will be drawn and then sent as an update to all receiving ends.
     *
     * If a "mousemove | touchmove" event is triggered and the client is dragging, an CanvasWhiteboardUpdate object
     * of type "drag" will be drawn and then sent as an update to all receiving ends.
     *
     * If a "mouseup, mouseout | touchend, touchcancel" event is triggered, dragging will be set to false and
     * an CanvasWhiteboardUpdate object of type "stop" will be drawn and then sent as an update to all receiving ends.
     *
     */
    canvasUserEvents(event: any): void;
    /**
     * Get the coordinates (x,y) from a given event
     * If it is a touch event, get the touch positions
     * If we released the touch, the position will be placed in the changedTouches object
     * If it is not a touch event, use the original mouse event received
     * @param eventData
     */
    private _getCanvasEventPosition;
    /**
     * The update coordinates on the canvas are mapped so that all receiving ends
     * can reverse the mapping and get the same position as the one that
     * was drawn on this update.
     *
     * @param update The CanvasWhiteboardUpdate object.
     */
    private _prepareToSendUpdate;
    /**
     * Catches the Key Up events made on the canvas.
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 90 (z), an undo action will be performed
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 89 (y), a redo action will be performed
     * If the ctrlKey or commandKey(macOS) was held and the keyCode is 83 (s) or 115(S), a save action will be performed
     *
     * @param event The event that occurred.
     */
    private _canvasKeyDown;
    /**
     * On window resize, recalculate the canvas dimensions and redraw the history
     */
    private _redrawCanvasOnResize;
    /**
     * Redraw the saved history after resetting the canvas state
     */
    private _redrawHistory;
    /**
     * Draws a CanvasWhiteboardUpdate object on the canvas.
     * The coordinates are first reverse mapped so that they can be drawn in the proper place. The update
     * is afterwards added to the undoStack so that it can be
     *
     * If the CanvasWhiteboardUpdate Type is "start", a new "selectedShape" is created.
     * If the CanvasWhiteboardUpdate Type is "drag", the shape is taken from the shapesMap and then it's updated.
     * Afterwards the context is used to draw the shape on the canvas.
     * This function saves the last X and Y coordinates that were drawn.
     *
     * @param update The update object.
     */
    private _draw;
    private _drawIncompleteShapes;
    private _swapCompletedShapeToActualCanvas;
    private _resetIncompleteShapeCanvas;
    /**
     * Delete everything from the screen, redraw the background, and then redraw all the shapes from the shapesMap
     */
    drawAllShapes(): void;
    private _addCurrentShapeDataToAnUpdate;
    generateShapePreviewOptions(): CanvasWhiteboardShapeOptions;
    /**
     * Sends the update to all receiving ends as an Event emit. This is done as a batch operation (meaning
     * multiple updates are sent at the same time). If this method is called, after 100 ms all updates
     * that were made at that time will be packed up together and sent to the receiver.
     *
     * @param update The update object.
     * @return Emits an Array of Updates when the batch.
     */
    private _prepareUpdateForBatchDispatch;
    /**
     * Draws an Array of Updates on the canvas.
     *
     * @param updates The array with Updates.
     */
    drawUpdates(updates: CanvasWhiteboardUpdate[]): void;
    /**
     * Draw any missing updates that were received before the image was loaded
     */
    private _drawMissingUpdates;
    /**
     * Draws an image on the canvas
     *
     * @param context The context used to draw the image on the canvas.
     * @param image The image to draw.
     * @param x The X coordinate for the starting draw position.
     * @param y The Y coordinate for the starting draw position.
     * @param width The width of the image that will be drawn.
     * @param height The height of the image that will be drawn.
     * @param offsetX The offsetX if the image size is larger than the canvas (aspect Ratio)
     * @param offsetY The offsetY if the image size is larger than the canvas (aspect Ratio)
     */
    private _drawImage;
    /**
     * The HTMLCanvasElement.toDataURL() method returns a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG).
     * The returned image is in a resolution of 96 dpi.
     * If the height or width of the canvas is 0, the string "data:," is returned.
     * If the requested type is not image/png, but the returned value starts with data:image/png, then the requested type is not supported.
     * Chrome also supports the image/webp type.
     *
     * @param returnedDataType A DOMString indicating the image format. The default format type is image/png.
     * @param returnedDataQuality A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.
     If this argument is anything else, the default value for image quality is used. The default value is 0.92. Other arguments are ignored.
     */
    generateCanvasDataUrl(returnedDataType?: string, returnedDataQuality?: number): string;
    /**
     * Generate a Blob object representing the content drawn on the canvas.
     * This file may be cached on the disk or stored in memory at the discretion of the user agent.
     * If type is not specified, the image type is image/png. The created image is in a resolution of 96dpi.
     * The third argument is used with image/jpeg images to specify the quality of the output.
     *
     * @param callbackFn The function that should be executed when the blob is created. Should accept a parameter Blob (for the result).
     * @param returnedDataType A DOMString indicating the image format. The default type is image/png.
     * @param returnedDataQuality A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.
     If this argument is anything else, the default value for image quality is used. Other arguments are ignored.
     */
    generateCanvasBlob(callbackFn: any, returnedDataType?: string, returnedDataQuality?: number): void;
    /**
     * Generate a canvas image representation and download it locally
     * The name of the image is canvas_drawing_ + the current local Date and Time the image was created
     * Methods for standalone creation of the images in this method are left here for backwards compatibility
     *
     * @param returnedDataType A DOMString indicating the image format. The default type is image/png.
     * @param downloadData? The created string or Blob (IE).
     * @param customFileName? The name of the file that should be downloaded
     */
    downloadCanvasImage(returnedDataType?: string, downloadData?: string | Blob, customFileName?: string): void;
    /**
     * Save the canvas blob (IE) locally
     * @param blob
     * @param returnedDataType
     */
    private _saveCanvasBlob;
    /**
     * This method generates a canvas url string or a canvas blob with the presented data type
     * A callback function is then invoked since the blob creation must be done via a callback
     *
     * @param callback
     * @param returnedDataType
     * @param returnedDataQuality
     */
    generateCanvasData(callback: any, returnedDataType?: string, returnedDataQuality?: number): void;
    /**
     * Local method to invoke saving of the canvas data when clicked on the canvas Save button
     * This method will emit the generated data with the specified Event Emitter
     *
     * @param returnedDataType
     */
    saveLocal(returnedDataType?: string): void;
    private _generateDataTypeString;
    /**
     * Toggles the color picker window, delegating the showColorPicker Input to the ColorPickerComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param value
     */
    toggleStrokeColorPicker(value: boolean): void;
    /**
     * Toggles the color picker window, delegating the showColorPicker Input to the ColorPickerComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param value
     */
    toggleFillColorPicker(value: boolean): void;
    /**
     * Toggles the shape selector window, delegating the showShapeSelector Input to the CanvasWhiteboardShapeSelectorComponent.
     * If no value is supplied (null/undefined) the current value will be negated and used.
     * @param value
     */
    toggleShapeSelector(value: boolean): void;
    selectShape(newShapeBlueprint: INewCanvasWhiteboardShape<CanvasWhiteboardShape>): void;
    /**
     * Returns a deep copy of the current drawing history for the canvas.
     * The deep copy is returned because we don't want anyone to mutate the current history
     */
    getDrawingHistory(): CanvasWhiteboardUpdate[];
    /**
     * Unsubscribe from a given subscription if it is active
     * @param subscription
     */
    private _unsubscribe;
    private _generateUUID;
    private _random4;
    /**
     * Unsubscribe from the service observables
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CanvasWhiteboardComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CanvasWhiteboardComponent, "canvas-whiteboard", never, {
    "batchUpdateTimeoutDuration": "batchUpdateTimeoutDuration";
    "drawButtonText": "drawButtonText";
    "clearButtonText": "clearButtonText";
    "undoButtonText": "undoButtonText";
    "redoButtonText": "redoButtonText";
    "saveDataButtonText": "saveDataButtonText";
    "drawButtonEnabled": "drawButtonEnabled";
    "clearButtonEnabled": "clearButtonEnabled";
    "undoButtonEnabled": "undoButtonEnabled";
    "redoButtonEnabled": "redoButtonEnabled";
    "saveDataButtonEnabled": "saveDataButtonEnabled";
    "shouldDownloadDrawing": "shouldDownloadDrawing";
    "colorPickerEnabled": "colorPickerEnabled";
    "strokeColorPickerEnabled": "strokeColorPickerEnabled";
    "fillColorPickerEnabled": "fillColorPickerEnabled";
    "lineWidth": "lineWidth";
    "strokeColor": "strokeColor";
    "startingColor": "startingColor";
    "scaleFactor": "scaleFactor";
    "drawingEnabled": "drawingEnabled";
    "showStrokeColorPicker": "showStrokeColorPicker";
    "showFillColorPicker": "showFillColorPicker";
    "lineJoin": "lineJoin";
    "lineCap": "lineCap";
    "shapeSelectorEnabled": "shapeSelectorEnabled";
    "showShapeSelector": "showShapeSelector";
    "fillColor": "fillColor";
    "imageUrl": "imageUrl";
    "aspectRatio": "aspectRatio";
    "drawButtonClass": "drawButtonClass";
    "clearButtonClass": "clearButtonClass";
    "undoButtonClass": "undoButtonClass";
    "redoButtonClass": "redoButtonClass";
    "saveDataButtonClass": "saveDataButtonClass";
    "downloadedFileName": "downloadedFileName";
    "options": "options";
}, {
    "onClear": "onClear";
    "onUndo": "onUndo";
    "onRedo": "onRedo";
    "onBatchUpdate": "onBatchUpdate";
    "onImageLoaded": "onImageLoaded";
    "onSave": "onSave";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhbnZhcy13aGl0ZWJvYXJkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNaQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSB9IGZyb20gXCIuL2NhbnZhcy13aGl0ZWJvYXJkLXVwZGF0ZS5tb2RlbFwiO1xuaW1wb3J0IHsgQ2FudmFzV2hpdGVib2FyZFNlcnZpY2UgfSBmcm9tIFwiLi9jYW52YXMtd2hpdGVib2FyZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkT3B0aW9ucyB9IGZyb20gXCIuL2NhbnZhcy13aGl0ZWJvYXJkLW9wdGlvbnNcIjtcbmltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRTaGFwZSB9IGZyb20gXCIuL3NoYXBlcy9jYW52YXMtd2hpdGVib2FyZC1zaGFwZVwiO1xuaW1wb3J0IHsgQ2FudmFzV2hpdGVib2FyZFNoYXBlU2VydmljZSwgSU5ld0NhbnZhc1doaXRlYm9hcmRTaGFwZSB9IGZyb20gXCIuL3NoYXBlcy9jYW52YXMtd2hpdGVib2FyZC1zaGFwZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYW52YXNXaGl0ZWJvYXJkU2hhcGVPcHRpb25zIH0gZnJvbSBcIi4vc2hhcGVzL2NhbnZhcy13aGl0ZWJvYXJkLXNoYXBlLW9wdGlvbnNcIjtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbnZhc1doaXRlYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG5nWm9uZTtcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjtcbiAgICBwcml2YXRlIF9jYW52YXNXaGl0ZWJvYXJkU2VydmljZTtcbiAgICBwcml2YXRlIF9jYW52YXNXaGl0ZWJvYXJkU2hhcGVTZXJ2aWNlO1xuICAgIG9wdGlvbnM6IENhbnZhc1doaXRlYm9hcmRPcHRpb25zO1xuICAgIGJhdGNoVXBkYXRlVGltZW91dER1cmF0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaW1hZ2VVcmw7XG4gICAgc2V0IGltYWdlVXJsKGltYWdlVXJsOiBzdHJpbmcpO1xuICAgIGdldCBpbWFnZVVybCgpOiBzdHJpbmc7XG4gICAgYXNwZWN0UmF0aW86IG51bWJlcjtcbiAgICBkcmF3QnV0dG9uQ2xhc3M6IHN0cmluZztcbiAgICBjbGVhckJ1dHRvbkNsYXNzOiBzdHJpbmc7XG4gICAgdW5kb0J1dHRvbkNsYXNzOiBzdHJpbmc7XG4gICAgcmVkb0J1dHRvbkNsYXNzOiBzdHJpbmc7XG4gICAgc2F2ZURhdGFCdXR0b25DbGFzczogc3RyaW5nO1xuICAgIGRyYXdCdXR0b25UZXh0OiBzdHJpbmc7XG4gICAgY2xlYXJCdXR0b25UZXh0OiBzdHJpbmc7XG4gICAgdW5kb0J1dHRvblRleHQ6IHN0cmluZztcbiAgICByZWRvQnV0dG9uVGV4dDogc3RyaW5nO1xuICAgIHNhdmVEYXRhQnV0dG9uVGV4dDogc3RyaW5nO1xuICAgIGRyYXdCdXR0b25FbmFibGVkOiBib29sZWFuO1xuICAgIGNsZWFyQnV0dG9uRW5hYmxlZDogYm9vbGVhbjtcbiAgICB1bmRvQnV0dG9uRW5hYmxlZDogYm9vbGVhbjtcbiAgICByZWRvQnV0dG9uRW5hYmxlZDogYm9vbGVhbjtcbiAgICBzYXZlRGF0YUJ1dHRvbkVuYWJsZWQ6IGJvb2xlYW47XG4gICAgc2hvdWxkRG93bmxvYWREcmF3aW5nOiBib29sZWFuO1xuICAgIC8qKiBAZGVwcmVjYXRlZC4gUmVwbGFjZWQgd2l0aCBzdHJva2VDb2xvclBpY2tlckVuYWJsZWQgYW5kIGZpbGxDb2xvclBpY2tlckVuYWJsZWQgaW5wdXRzICovXG4gICAgY29sb3JQaWNrZXJFbmFibGVkOiBib29sZWFuO1xuICAgIHN0cm9rZUNvbG9yUGlja2VyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBmaWxsQ29sb3JQaWNrZXJFbmFibGVkOiBib29sZWFuO1xuICAgIGxpbmVXaWR0aDogbnVtYmVyO1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gICAgc3RhcnRpbmdDb2xvcjogc3RyaW5nO1xuICAgIHNjYWxlRmFjdG9yOiBudW1iZXI7XG4gICAgZHJhd2luZ0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgc2hvd1N0cm9rZUNvbG9yUGlja2VyOiBib29sZWFuO1xuICAgIHNob3dGaWxsQ29sb3JQaWNrZXI6IGJvb2xlYW47XG4gICAgZG93bmxvYWRlZEZpbGVOYW1lOiBzdHJpbmc7XG4gICAgbGluZUpvaW46IHN0cmluZztcbiAgICBsaW5lQ2FwOiBzdHJpbmc7XG4gICAgc2hhcGVTZWxlY3RvckVuYWJsZWQ6IGJvb2xlYW47XG4gICAgc2hvd1NoYXBlU2VsZWN0b3I6IGJvb2xlYW47XG4gICAgZmlsbENvbG9yOiBzdHJpbmc7XG4gICAgb25DbGVhcjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb25VbmRvOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBvblJlZG86IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIG9uQmF0Y2hVcGRhdGU6IEV2ZW50RW1pdHRlcjxDYW52YXNXaGl0ZWJvYXJkVXBkYXRlW10+O1xuICAgIG9uSW1hZ2VMb2FkZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIG9uU2F2ZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IEJsb2I+O1xuICAgIGNhbnZhczogRWxlbWVudFJlZjtcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBfaW5jb21wbGV0ZVNoYXBlc0NhbnZhcztcbiAgICBwcml2YXRlIF9pbmNvbXBsZXRlU2hhcGVzQ2FudmFzQ29udGV4dDtcbiAgICBwcml2YXRlIF9pbmNvbXBsZXRlU2hhcGVzTWFwO1xuICAgIHByaXZhdGUgX2ltYWdlRWxlbWVudDtcbiAgICBwcml2YXRlIF9jYW5EcmF3O1xuICAgIHByaXZhdGUgX2NsaWVudERyYWdnaW5nO1xuICAgIHByaXZhdGUgX3VwZGF0ZUhpc3Rvcnk7XG4gICAgcHJpdmF0ZSBfbGFzdFVVSUQ7XG4gICAgcHJpdmF0ZSBfc2hhcGVzTWFwO1xuICAgIHByaXZhdGUgX3VuZG9TdGFjaztcbiAgICBwcml2YXRlIF9yZWRvU3RhY2s7XG4gICAgcHJpdmF0ZSBfYmF0Y2hVcGRhdGVzO1xuICAgIHByaXZhdGUgX3VwZGF0ZXNOb3REcmF3bjtcbiAgICBwcml2YXRlIF91cGRhdGVUaW1lb3V0O1xuICAgIHByaXZhdGUgX2NhbnZhc1doaXRlYm9hcmRTZXJ2aWNlU3Vic2NyaXB0aW9ucztcbiAgICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJlZFNoYXBlc1N1YnNjcmlwdGlvbjtcbiAgICBzZWxlY3RlZFNoYXBlQ29uc3RydWN0b3I6IElOZXdDYW52YXNXaGl0ZWJvYXJkU2hhcGU8Q2FudmFzV2hpdGVib2FyZFNoYXBlPjtcbiAgICBjYW52YXNXaGl0ZWJvYXJkU2hhcGVQcmV2aWV3T3B0aW9uczogQ2FudmFzV2hpdGVib2FyZFNoYXBlT3B0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihuZ1pvbmU6IE5nWm9uZSwgX2NoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgX2NhbnZhc1doaXRlYm9hcmRTZXJ2aWNlOiBDYW52YXNXaGl0ZWJvYXJkU2VydmljZSwgX2NhbnZhc1doaXRlYm9hcmRTaGFwZVNlcnZpY2U6IENhbnZhc1doaXRlYm9hcmRTaGFwZVNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIGNhbnZhcyBkcmF3aW5nIGNvbnRleHQuIElmIHdlIGhhdmUgYW4gYXNwZWN0IHJhdGlvIHNldCB1cCwgdGhlIGNhbnZhcyB3aWxsIHJlc2l6ZVxuICAgICAqIGFjY29yZGluZyB0byB0aGUgYXNwZWN0IHJhdGlvLlxuICAgICAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSWYgYW4gaW1hZ2UgZXhpc3RzIGFuZCBpdCdzIHVybCBjaGFuZ2VzLCB3ZSBuZWVkIHRvIHJlZHJhdyB0aGUgbmV3IGltYWdlIG9uIHRoZSBjYW52YXMuXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZWNhbGN1bGF0ZSB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgY2FudmFzIGFmdGVyIHRoZSB2aWV3IGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmVhZHMgdGhlIG9wdGlvbnMgd2hpY2ggYXJlIGhlbHBmdWwgc2luY2UgdGhleSBjYW4gYmUgcmVhbGx5IGxvbmcgd2hlbiBzcGVjaWZpZWQgaW4gSFRNTFxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFsc28gY2FsbGVkIGV2ZXJ5dGltZSB0aGUgb3B0aW9ucyBvYmplY3QgY2hhbmdlc1xuICAgICAqIEZvciBzZWN1cml0eSByZWFzb25zIHdlIG11c3QgY2hlY2sgZWFjaCBpdGVtIG9uIGl0cyBvd24gc2luY2UgaWYgd2UgaXRlcmF0ZSB0aGUga2V5c1xuICAgICAqIHdlIG1heSBiZSBpbmplY3RlZCB3aXRoIG1hbGljaW91cyB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdElucHV0c0Zyb21PcHRpb25zO1xuICAgIHByaXZhdGUgX2lzTnVsbE9yVW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEluaXQgZ2xvYmFsIHdpbmRvdyBsaXN0ZW5lcnMgbGlrZSByZXNpemUgYW5kIGtleWRvd25cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0Q2FudmFzRXZlbnRMaXN0ZW5lcnM7XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byBuZXcgc2lnbmFscyBpbiB0aGUgY2FudmFzIHdoaXRlYm9hcmQgc2VydmljZSBhbmQgZXhlY3V0ZXMgbWV0aG9kcyBhY2NvcmRpbmdseVxuICAgICAqIEJlY2F1c2Ugb2YgY2lyY3VsYXIgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcsIHRoZSBjYW52YXMgbWV0aG9kcyBkbyBub3QgdXNlIHRoZSBzZXJ2aWNlIHdoZW5cbiAgICAgKiBsb2NhbCBhY3Rpb25zIGFyZSBjb21wbGV0ZWQgKEV4LiBjbGlja2luZyB1bmRvIGZyb20gdGhlIGJ1dHRvbiBpbnNpZGUgdGhpcyBjb21wb25lbnQpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdENhbnZhc1NlcnZpY2VPYnNlcnZhYmxlcztcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGNhbnZhcyB3aWR0aCBhbmQgaGVpZ2h0IGZyb20gaXQncyBwYXJlbnQgY29udGFpbmVyIHdpZHRoIGFuZCBoZWlnaHQgKHVzZSBhc3BlY3QgcmF0aW8gaWYgbmVlZGVkKVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUNhbnZhc1dpZHRoQW5kSGVpZ2h0O1xuICAgIC8qKlxuICAgICAqIExvYWQgYW4gaW1hZ2UgYW5kIGRyYXcgaXQgb24gdGhlIGNhbnZhcyAoaWYgYW4gaW1hZ2UgZXhpc3RzKVxuICAgICAqIEBwYXJhbSBjYWxsYmFja0ZuIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGltYWdlIGxvYWRpbmcgaXMgZmluaXNoZWRcbiAgICAgKiBAcmV0dXJuIEVtaXRzIGEgdmFsdWUgd2hlbiB0aGUgaW1hZ2UgaGFzIGJlZW4gbG9hZGVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2xvYWRJbWFnZTtcbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG5vdGlmaWNhdGlvbiBhZnRlciBjbGVhcmluZyB0aGUgY2FudmFzXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGZyb20gdGhlIGNsZWFyIGJ1dHRvbiBpbiB0aGlzIGNvbXBvbmVudCBzaW5jZSBpdCB3aWxsIGVtaXQgYW4gY2xlYXIgZXZlbnRcbiAgICAgKiBJZiB0aGUgY2xpZW50IGNhbGxzIHRoaXMgbWV0aG9kIGhlIG1heSBjcmVhdGUgYSBjaXJjdWxhciBjbGVhciBhY3Rpb24gd2hpY2ggbWF5IGNhdXNlIGRhbmdlci5cbiAgICAgKi9cbiAgICBjbGVhckNhbnZhc0xvY2FsKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjb250ZW50IG9uIHRoZSBjYW52YXMuXG4gICAgICovXG4gICAgY2xlYXJDYW52YXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgdGhlIHN0YXRlIG9mIHRoZSBjYW52YXMgYW5kIHJlZHJhd3MgaXQuXG4gICAgICogSXQgY2FsbHMgYSBjYWxsYmFjayBmdW5jdGlvbiBhZnRlciByZWRyYXdpbmdcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tGblxuICAgICAqL1xuICAgIHByaXZhdGUgX3JlbW92ZUNhbnZhc0RhdGE7XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBjYW52YXMgYW5kIHJlZHJhd3MgdGhlIGltYWdlIGlmIHRoZSB1cmwgZXhpc3RzLlxuICAgICAqIEBwYXJhbSBjYWxsYmFja0ZuIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGJhY2tncm91bmQgaXMgcmVkcmF3blxuICAgICAqIEByZXR1cm4gRW1pdHMgYSB2YWx1ZSB3aGVuIHRoZSBjbGVhcmluZyBpcyBmaW5pc2hlZFxuICAgICAqL1xuICAgIHByaXZhdGUgX3JlZHJhd0JhY2tncm91bmQ7XG4gICAgcHJpdmF0ZSBfZHJhd1N0YXJ0aW5nQ29sb3I7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGdldERyYXdpbmdFbmFibGVkKCk6IGJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXRTaG91bGREcmF3KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHZhbHVlIG9mIHdoZXRoZXIgdGhlIHVzZXIgY2xpY2tlZCB0aGUgZHJhdyBidXR0b24gb24gdGhlIGNhbnZhcy5cbiAgICAgKi9cbiAgICBnZXREcmF3aW5nRW5hYmxlZCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgZHJhd2luZyBvbiB0aGUgY2FudmFzLiBJdCBpcyBjYWxsZWQgdmlhIHRoZSBkcmF3IGJ1dHRvbiBvbiB0aGUgY2FudmFzLlxuICAgICAqL1xuICAgIHRvZ2dsZURyYXdpbmdFbmFibGVkKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0IGlmIGRyYXdpbmcgaXMgZW5hYmxlZCBmcm9tIHRoZSBjbGllbnQgdXNpbmcgdGhlIGNhbnZhc1xuICAgICAqIEBwYXJhbSBkcmF3aW5nRW5hYmxlZFxuICAgICAqL1xuICAgIHNldERyYXdpbmdFbmFibGVkKGRyYXdpbmdFbmFibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIHRoZSBjaGFuZ2VTdHJva2VDb2xvcihuZXdTdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCBtZXRob2RcbiAgICAgKi9cbiAgICBjaGFuZ2VDb2xvcihuZXdTdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyB0aGUgZHJhd2luZyBjb2xvciB3aXRoIGEgbmV3IGNvbG9yXG4gICAgICogVGhlIGZvcm1hdCBzaG91bGQgYmUgKFwiI2ZmZmZmZlwiIG9yIFwicmdiKHIsZyxiLGE/KVwiKVxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHB1YmxpYyBzbyB0aGF0IGFueW9uZSBjYW4gYWNjZXNzIHRoZSBjYW52YXMgYW5kIGNoYW5nZSB0aGUgc3Ryb2tlIGNvbG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmV3U3Ryb2tlQ29sb3IgVGhlIG5ldyBzdHJva2UgY29sb3JcbiAgICAgKi9cbiAgICBjaGFuZ2VTdHJva2VDb2xvcihuZXdTdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyB0aGUgZmlsbCBjb2xvciB3aXRoIGEgbmV3IGNvbG9yXG4gICAgICogVGhlIGZvcm1hdCBzaG91bGQgYmUgKFwiI2ZmZmZmZlwiIG9yIFwicmdiKHIsZyxiLGE/KVwiKVxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHB1YmxpYyBzbyB0aGF0IGFueW9uZSBjYW4gYWNjZXNzIHRoZSBjYW52YXMgYW5kIGNoYW5nZSB0aGUgZmlsbCBjb2xvclxuICAgICAqXG4gICAgICogQHBhcmFtIG5ld0ZpbGxDb2xvciBUaGUgbmV3IGZpbGwgY29sb3JcbiAgICAgKi9cbiAgICBjaGFuZ2VGaWxsQ29sb3IobmV3RmlsbENvbG9yOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYnkgdGhlIHVuZG8gYnV0dG9uIG9uIHRoZSBjYW52YXMgc2NyZWVuXG4gICAgICogSXQgY2FsbHMgdGhlIGdsb2JhbCB1bmRvIG1ldGhvZCBhbmQgZW1pdHMgYSBub3RpZmljYXRpb24gYWZ0ZXIgdW5kb2luZy5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgZnJvbSB0aGUgdW5kbyBidXR0b24gaW4gdGhpcyBjb21wb25lbnQgc2luY2UgaXQgd2lsbCBlbWl0IGFuIHVuZG8gZXZlbnRcbiAgICAgKiBJZiB0aGUgY2xpZW50IGNhbGxzIHRoaXMgbWV0aG9kIGhlIG1heSBjcmVhdGUgYSBjaXJjdWxhciB1bmRvIGFjdGlvbiB3aGljaCBtYXkgY2F1c2UgZGFuZ2VyLlxuICAgICAqL1xuICAgIHVuZG9Mb2NhbCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kcyBzZWxlY3RzIHRoZSBsYXN0IHV1aWQgcHJlcGFyZXMgaXQgZm9yIHVuZG9pbmcgKG1ha2luZyB0aGUgd2hvbGUgdXBkYXRlIHNlcXVlbmNlIGludmlzaWJsZSlcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIGlmIHRoZSBjYW52YXMgY29tcG9uZW50IGlzIGEgVmlld0NoaWxkIG9mIHNvbWUgb3RoZXIgY29tcG9uZW50LlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgd29yayBldmVuIGlmIHRoZSB1bmRvIGJ1dHRvbiBoYXMgYmVlbiBkaXNhYmxlZFxuICAgICAqL1xuICAgIHVuZG8oY2FsbGJhY2tGbj86IEZ1bmN0aW9uKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB0YWtlcyBhbiBVVUlEIGZvciBhbiB1cGRhdGUsIGFuZCByZWRyYXdzIHRoZSBjYW52YXMgYnkgbWFraW5nIGFsbCB1cGRhdGVzIHdpdGggdGhhdCB1dWlkIGludmlzaWJsZVxuICAgICAqIEBwYXJhbSB1cGRhdGVVVUlEXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdW5kb0NhbnZhcztcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGJ5IHRoZSByZWRvIGJ1dHRvbiBvbiB0aGUgY2FudmFzIHNjcmVlblxuICAgICAqIEl0IGNhbGxzIHRoZSBnbG9iYWwgcmVkbyBtZXRob2QgYW5kIGVtaXRzIGEgbm90aWZpY2F0aW9uIGFmdGVyIHJlZG9pbmdcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgZnJvbSB0aGUgcmVkbyBidXR0b24gaW4gdGhpcyBjb21wb25lbnQgc2luY2UgaXQgd2lsbCBlbWl0IGFuIHJlZG8gZXZlbnRcbiAgICAgKiBJZiB0aGUgY2xpZW50IGNhbGxzIHRoaXMgbWV0aG9kIGhlIG1heSBjcmVhdGUgYSBjaXJjdWxhciByZWRvIGFjdGlvbiB3aGljaCBtYXkgY2F1c2UgZGFuZ2VyLlxuICAgICAqL1xuICAgIHJlZG9Mb2NhbCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kcyBzZWxlY3RzIHRoZSBsYXN0IHV1aWQgcHJlcGFyZXMgaXQgZm9yIHJlZG9pbmcgKG1ha2luZyB0aGUgd2hvbGUgdXBkYXRlIHNlcXVlbmNlIHZpc2libGUpXG4gICAgICogVGhpcyBtZXRob2QgY2FuIGJlIGNhbGxlZCBpZiB0aGUgY2FudmFzIGNvbXBvbmVudCBpcyBhIFZpZXdDaGlsZCBvZiBzb21lIG90aGVyIGNvbXBvbmVudC5cbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHdvcmsgZXZlbiBpZiB0aGUgcmVkbyBidXR0b24gaGFzIGJlZW4gZGlzYWJsZWRcbiAgICAgKi9cbiAgICByZWRvKGNhbGxiYWNrRm4/OiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHRha2VzIGFuIFVVSUQgZm9yIGFuIHVwZGF0ZSwgYW5kIHJlZHJhd3MgdGhlIGNhbnZhcyBieSBtYWtpbmcgYWxsIHVwZGF0ZXMgd2l0aCB0aGF0IHV1aWQgdmlzaWJsZVxuICAgICAqIEBwYXJhbSB1cGRhdGVVVUlEXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVkb0NhbnZhcztcbiAgICAvKipcbiAgICAgKiBDYXRjaGVzIHRoZSBNb3VzZSBhbmQgVG91Y2ggZXZlbnRzIG1hZGUgb24gdGhlIGNhbnZhcy5cbiAgICAgKiBJZiBkcmF3aW5nIGlzIGRpc2FibGVkIChJZiBhbiBpbWFnZSBleGlzdHMgYnV0IGl0J3Mgbm90IGxvYWRlZCwgb3IgdGhlIHVzZXIgZGlkIG5vdCBjbGljayBEcmF3KSxcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90aGluZy5cbiAgICAgKlxuICAgICAqIElmIGEgXCJtb3VzZWRvd24gfCB0b3VjaHN0YXJ0XCIgZXZlbnQgaXMgdHJpZ2dlcmVkLCBkcmFnZ2luZyB3aWxsIGJlIHNldCB0byB0cnVlIGFuZCBhbiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlIG9iamVjdFxuICAgICAqIG9mIHR5cGUgXCJzdGFydFwiIHdpbGwgYmUgZHJhd24gYW5kIHRoZW4gc2VudCBhcyBhbiB1cGRhdGUgdG8gYWxsIHJlY2VpdmluZyBlbmRzLlxuICAgICAqXG4gICAgICogSWYgYSBcIm1vdXNlbW92ZSB8IHRvdWNobW92ZVwiIGV2ZW50IGlzIHRyaWdnZXJlZCBhbmQgdGhlIGNsaWVudCBpcyBkcmFnZ2luZywgYW4gQ2FudmFzV2hpdGVib2FyZFVwZGF0ZSBvYmplY3RcbiAgICAgKiBvZiB0eXBlIFwiZHJhZ1wiIHdpbGwgYmUgZHJhd24gYW5kIHRoZW4gc2VudCBhcyBhbiB1cGRhdGUgdG8gYWxsIHJlY2VpdmluZyBlbmRzLlxuICAgICAqXG4gICAgICogSWYgYSBcIm1vdXNldXAsIG1vdXNlb3V0IHwgdG91Y2hlbmQsIHRvdWNoY2FuY2VsXCIgZXZlbnQgaXMgdHJpZ2dlcmVkLCBkcmFnZ2luZyB3aWxsIGJlIHNldCB0byBmYWxzZSBhbmRcbiAgICAgKiBhbiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlIG9iamVjdCBvZiB0eXBlIFwic3RvcFwiIHdpbGwgYmUgZHJhd24gYW5kIHRoZW4gc2VudCBhcyBhbiB1cGRhdGUgdG8gYWxsIHJlY2VpdmluZyBlbmRzLlxuICAgICAqXG4gICAgICovXG4gICAgY2FudmFzVXNlckV2ZW50cyhldmVudDogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvb3JkaW5hdGVzICh4LHkpIGZyb20gYSBnaXZlbiBldmVudFxuICAgICAqIElmIGl0IGlzIGEgdG91Y2ggZXZlbnQsIGdldCB0aGUgdG91Y2ggcG9zaXRpb25zXG4gICAgICogSWYgd2UgcmVsZWFzZWQgdGhlIHRvdWNoLCB0aGUgcG9zaXRpb24gd2lsbCBiZSBwbGFjZWQgaW4gdGhlIGNoYW5nZWRUb3VjaGVzIG9iamVjdFxuICAgICAqIElmIGl0IGlzIG5vdCBhIHRvdWNoIGV2ZW50LCB1c2UgdGhlIG9yaWdpbmFsIG1vdXNlIGV2ZW50IHJlY2VpdmVkXG4gICAgICogQHBhcmFtIGV2ZW50RGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldENhbnZhc0V2ZW50UG9zaXRpb247XG4gICAgLyoqXG4gICAgICogVGhlIHVwZGF0ZSBjb29yZGluYXRlcyBvbiB0aGUgY2FudmFzIGFyZSBtYXBwZWQgc28gdGhhdCBhbGwgcmVjZWl2aW5nIGVuZHNcbiAgICAgKiBjYW4gcmV2ZXJzZSB0aGUgbWFwcGluZyBhbmQgZ2V0IHRoZSBzYW1lIHBvc2l0aW9uIGFzIHRoZSBvbmUgdGhhdFxuICAgICAqIHdhcyBkcmF3biBvbiB0aGlzIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cGRhdGUgVGhlIENhbnZhc1doaXRlYm9hcmRVcGRhdGUgb2JqZWN0LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByZXBhcmVUb1NlbmRVcGRhdGU7XG4gICAgLyoqXG4gICAgICogQ2F0Y2hlcyB0aGUgS2V5IFVwIGV2ZW50cyBtYWRlIG9uIHRoZSBjYW52YXMuXG4gICAgICogSWYgdGhlIGN0cmxLZXkgb3IgY29tbWFuZEtleShtYWNPUykgd2FzIGhlbGQgYW5kIHRoZSBrZXlDb2RlIGlzIDkwICh6KSwgYW4gdW5kbyBhY3Rpb24gd2lsbCBiZSBwZXJmb3JtZWRcbiAgICAgKiBJZiB0aGUgY3RybEtleSBvciBjb21tYW5kS2V5KG1hY09TKSB3YXMgaGVsZCBhbmQgdGhlIGtleUNvZGUgaXMgODkgKHkpLCBhIHJlZG8gYWN0aW9uIHdpbGwgYmUgcGVyZm9ybWVkXG4gICAgICogSWYgdGhlIGN0cmxLZXkgb3IgY29tbWFuZEtleShtYWNPUykgd2FzIGhlbGQgYW5kIHRoZSBrZXlDb2RlIGlzIDgzIChzKSBvciAxMTUoUyksIGEgc2F2ZSBhY3Rpb24gd2lsbCBiZSBwZXJmb3JtZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdGhhdCBvY2N1cnJlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jYW52YXNLZXlEb3duO1xuICAgIC8qKlxuICAgICAqIE9uIHdpbmRvdyByZXNpemUsIHJlY2FsY3VsYXRlIHRoZSBjYW52YXMgZGltZW5zaW9ucyBhbmQgcmVkcmF3IHRoZSBoaXN0b3J5XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVkcmF3Q2FudmFzT25SZXNpemU7XG4gICAgLyoqXG4gICAgICogUmVkcmF3IHRoZSBzYXZlZCBoaXN0b3J5IGFmdGVyIHJlc2V0dGluZyB0aGUgY2FudmFzIHN0YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVkcmF3SGlzdG9yeTtcbiAgICAvKipcbiAgICAgKiBEcmF3cyBhIENhbnZhc1doaXRlYm9hcmRVcGRhdGUgb2JqZWN0IG9uIHRoZSBjYW52YXMuXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIGFyZSBmaXJzdCByZXZlcnNlIG1hcHBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIGRyYXduIGluIHRoZSBwcm9wZXIgcGxhY2UuIFRoZSB1cGRhdGVcbiAgICAgKiBpcyBhZnRlcndhcmRzIGFkZGVkIHRvIHRoZSB1bmRvU3RhY2sgc28gdGhhdCBpdCBjYW4gYmVcbiAgICAgKlxuICAgICAqIElmIHRoZSBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlIFR5cGUgaXMgXCJzdGFydFwiLCBhIG5ldyBcInNlbGVjdGVkU2hhcGVcIiBpcyBjcmVhdGVkLlxuICAgICAqIElmIHRoZSBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlIFR5cGUgaXMgXCJkcmFnXCIsIHRoZSBzaGFwZSBpcyB0YWtlbiBmcm9tIHRoZSBzaGFwZXNNYXAgYW5kIHRoZW4gaXQncyB1cGRhdGVkLlxuICAgICAqIEFmdGVyd2FyZHMgdGhlIGNvbnRleHQgaXMgdXNlZCB0byBkcmF3IHRoZSBzaGFwZSBvbiB0aGUgY2FudmFzLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gc2F2ZXMgdGhlIGxhc3QgWCBhbmQgWSBjb29yZGluYXRlcyB0aGF0IHdlcmUgZHJhd24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXBkYXRlIFRoZSB1cGRhdGUgb2JqZWN0LlxuICAgICAqL1xuICAgIHByaXZhdGUgX2RyYXc7XG4gICAgcHJpdmF0ZSBfZHJhd0luY29tcGxldGVTaGFwZXM7XG4gICAgcHJpdmF0ZSBfc3dhcENvbXBsZXRlZFNoYXBlVG9BY3R1YWxDYW52YXM7XG4gICAgcHJpdmF0ZSBfcmVzZXRJbmNvbXBsZXRlU2hhcGVDYW52YXM7XG4gICAgLyoqXG4gICAgICogRGVsZXRlIGV2ZXJ5dGhpbmcgZnJvbSB0aGUgc2NyZWVuLCByZWRyYXcgdGhlIGJhY2tncm91bmQsIGFuZCB0aGVuIHJlZHJhdyBhbGwgdGhlIHNoYXBlcyBmcm9tIHRoZSBzaGFwZXNNYXBcbiAgICAgKi9cbiAgICBkcmF3QWxsU2hhcGVzKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfYWRkQ3VycmVudFNoYXBlRGF0YVRvQW5VcGRhdGU7XG4gICAgZ2VuZXJhdGVTaGFwZVByZXZpZXdPcHRpb25zKCk6IENhbnZhc1doaXRlYm9hcmRTaGFwZU9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIHVwZGF0ZSB0byBhbGwgcmVjZWl2aW5nIGVuZHMgYXMgYW4gRXZlbnQgZW1pdC4gVGhpcyBpcyBkb25lIGFzIGEgYmF0Y2ggb3BlcmF0aW9uIChtZWFuaW5nXG4gICAgICogbXVsdGlwbGUgdXBkYXRlcyBhcmUgc2VudCBhdCB0aGUgc2FtZSB0aW1lKS4gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkLCBhZnRlciAxMDAgbXMgYWxsIHVwZGF0ZXNcbiAgICAgKiB0aGF0IHdlcmUgbWFkZSBhdCB0aGF0IHRpbWUgd2lsbCBiZSBwYWNrZWQgdXAgdG9nZXRoZXIgYW5kIHNlbnQgdG8gdGhlIHJlY2VpdmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVwZGF0ZSBUaGUgdXBkYXRlIG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIEVtaXRzIGFuIEFycmF5IG9mIFVwZGF0ZXMgd2hlbiB0aGUgYmF0Y2guXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJlcGFyZVVwZGF0ZUZvckJhdGNoRGlzcGF0Y2g7XG4gICAgLyoqXG4gICAgICogRHJhd3MgYW4gQXJyYXkgb2YgVXBkYXRlcyBvbiB0aGUgY2FudmFzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVwZGF0ZXMgVGhlIGFycmF5IHdpdGggVXBkYXRlcy5cbiAgICAgKi9cbiAgICBkcmF3VXBkYXRlcyh1cGRhdGVzOiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlW10pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIERyYXcgYW55IG1pc3NpbmcgdXBkYXRlcyB0aGF0IHdlcmUgcmVjZWl2ZWQgYmVmb3JlIHRoZSBpbWFnZSB3YXMgbG9hZGVkXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZHJhd01pc3NpbmdVcGRhdGVzO1xuICAgIC8qKlxuICAgICAqIERyYXdzIGFuIGltYWdlIG9uIHRoZSBjYW52YXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHVzZWQgdG8gZHJhdyB0aGUgaW1hZ2Ugb24gdGhlIGNhbnZhcy5cbiAgICAgKiBAcGFyYW0gaW1hZ2UgVGhlIGltYWdlIHRvIGRyYXcuXG4gICAgICogQHBhcmFtIHggVGhlIFggY29vcmRpbmF0ZSBmb3IgdGhlIHN0YXJ0aW5nIGRyYXcgcG9zaXRpb24uXG4gICAgICogQHBhcmFtIHkgVGhlIFkgY29vcmRpbmF0ZSBmb3IgdGhlIHN0YXJ0aW5nIGRyYXcgcG9zaXRpb24uXG4gICAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2UgdGhhdCB3aWxsIGJlIGRyYXduLlxuICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UgdGhhdCB3aWxsIGJlIGRyYXduLlxuICAgICAqIEBwYXJhbSBvZmZzZXRYIFRoZSBvZmZzZXRYIGlmIHRoZSBpbWFnZSBzaXplIGlzIGxhcmdlciB0aGFuIHRoZSBjYW52YXMgKGFzcGVjdCBSYXRpbylcbiAgICAgKiBAcGFyYW0gb2Zmc2V0WSBUaGUgb2Zmc2V0WSBpZiB0aGUgaW1hZ2Ugc2l6ZSBpcyBsYXJnZXIgdGhhbiB0aGUgY2FudmFzIChhc3BlY3QgUmF0aW8pXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZHJhd0ltYWdlO1xuICAgIC8qKlxuICAgICAqIFRoZSBIVE1MQ2FudmFzRWxlbWVudC50b0RhdGFVUkwoKSBtZXRob2QgcmV0dXJucyBhIGRhdGEgVVJJIGNvbnRhaW5pbmcgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW1hZ2UgaW4gdGhlIGZvcm1hdCBzcGVjaWZpZWQgYnkgdGhlIHR5cGUgcGFyYW1ldGVyIChkZWZhdWx0cyB0byBQTkcpLlxuICAgICAqIFRoZSByZXR1cm5lZCBpbWFnZSBpcyBpbiBhIHJlc29sdXRpb24gb2YgOTYgZHBpLlxuICAgICAqIElmIHRoZSBoZWlnaHQgb3Igd2lkdGggb2YgdGhlIGNhbnZhcyBpcyAwLCB0aGUgc3RyaW5nIFwiZGF0YTosXCIgaXMgcmV0dXJuZWQuXG4gICAgICogSWYgdGhlIHJlcXVlc3RlZCB0eXBlIGlzIG5vdCBpbWFnZS9wbmcsIGJ1dCB0aGUgcmV0dXJuZWQgdmFsdWUgc3RhcnRzIHdpdGggZGF0YTppbWFnZS9wbmcsIHRoZW4gdGhlIHJlcXVlc3RlZCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAgICogQ2hyb21lIGFsc28gc3VwcG9ydHMgdGhlIGltYWdlL3dlYnAgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXR1cm5lZERhdGFUeXBlIEEgRE9NU3RyaW5nIGluZGljYXRpbmcgdGhlIGltYWdlIGZvcm1hdC4gVGhlIGRlZmF1bHQgZm9ybWF0IHR5cGUgaXMgaW1hZ2UvcG5nLlxuICAgICAqIEBwYXJhbSByZXR1cm5lZERhdGFRdWFsaXR5IEEgTnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHkgaWYgdGhlIHJlcXVlc3RlZCB0eXBlIGlzIGltYWdlL2pwZWcgb3IgaW1hZ2Uvd2VicC5cbiAgICAgSWYgdGhpcyBhcmd1bWVudCBpcyBhbnl0aGluZyBlbHNlLCB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgaW1hZ2UgcXVhbGl0eSBpcyB1c2VkLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLjkyLiBPdGhlciBhcmd1bWVudHMgYXJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgZ2VuZXJhdGVDYW52YXNEYXRhVXJsKHJldHVybmVkRGF0YVR5cGU/OiBzdHJpbmcsIHJldHVybmVkRGF0YVF1YWxpdHk/OiBudW1iZXIpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSBCbG9iIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRlbnQgZHJhd24gb24gdGhlIGNhbnZhcy5cbiAgICAgKiBUaGlzIGZpbGUgbWF5IGJlIGNhY2hlZCBvbiB0aGUgZGlzayBvciBzdG9yZWQgaW4gbWVtb3J5IGF0IHRoZSBkaXNjcmV0aW9uIG9mIHRoZSB1c2VyIGFnZW50LlxuICAgICAqIElmIHR5cGUgaXMgbm90IHNwZWNpZmllZCwgdGhlIGltYWdlIHR5cGUgaXMgaW1hZ2UvcG5nLiBUaGUgY3JlYXRlZCBpbWFnZSBpcyBpbiBhIHJlc29sdXRpb24gb2YgOTZkcGkuXG4gICAgICogVGhlIHRoaXJkIGFyZ3VtZW50IGlzIHVzZWQgd2l0aCBpbWFnZS9qcGVnIGltYWdlcyB0byBzcGVjaWZ5IHRoZSBxdWFsaXR5IG9mIHRoZSBvdXRwdXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tGbiBUaGUgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgYmxvYiBpcyBjcmVhdGVkLiBTaG91bGQgYWNjZXB0IGEgcGFyYW1ldGVyIEJsb2IgKGZvciB0aGUgcmVzdWx0KS5cbiAgICAgKiBAcGFyYW0gcmV0dXJuZWREYXRhVHlwZSBBIERPTVN0cmluZyBpbmRpY2F0aW5nIHRoZSBpbWFnZSBmb3JtYXQuIFRoZSBkZWZhdWx0IHR5cGUgaXMgaW1hZ2UvcG5nLlxuICAgICAqIEBwYXJhbSByZXR1cm5lZERhdGFRdWFsaXR5IEEgTnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHkgaWYgdGhlIHJlcXVlc3RlZCB0eXBlIGlzIGltYWdlL2pwZWcgb3IgaW1hZ2Uvd2VicC5cbiAgICAgSWYgdGhpcyBhcmd1bWVudCBpcyBhbnl0aGluZyBlbHNlLCB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgaW1hZ2UgcXVhbGl0eSBpcyB1c2VkLiBPdGhlciBhcmd1bWVudHMgYXJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgZ2VuZXJhdGVDYW52YXNCbG9iKGNhbGxiYWNrRm46IGFueSwgcmV0dXJuZWREYXRhVHlwZT86IHN0cmluZywgcmV0dXJuZWREYXRhUXVhbGl0eT86IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSBjYW52YXMgaW1hZ2UgcmVwcmVzZW50YXRpb24gYW5kIGRvd25sb2FkIGl0IGxvY2FsbHlcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaW1hZ2UgaXMgY2FudmFzX2RyYXdpbmdfICsgdGhlIGN1cnJlbnQgbG9jYWwgRGF0ZSBhbmQgVGltZSB0aGUgaW1hZ2Ugd2FzIGNyZWF0ZWRcbiAgICAgKiBNZXRob2RzIGZvciBzdGFuZGFsb25lIGNyZWF0aW9uIG9mIHRoZSBpbWFnZXMgaW4gdGhpcyBtZXRob2QgYXJlIGxlZnQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXR1cm5lZERhdGFUeXBlIEEgRE9NU3RyaW5nIGluZGljYXRpbmcgdGhlIGltYWdlIGZvcm1hdC4gVGhlIGRlZmF1bHQgdHlwZSBpcyBpbWFnZS9wbmcuXG4gICAgICogQHBhcmFtIGRvd25sb2FkRGF0YT8gVGhlIGNyZWF0ZWQgc3RyaW5nIG9yIEJsb2IgKElFKS5cbiAgICAgKiBAcGFyYW0gY3VzdG9tRmlsZU5hbWU/IFRoZSBuYW1lIG9mIHRoZSBmaWxlIHRoYXQgc2hvdWxkIGJlIGRvd25sb2FkZWRcbiAgICAgKi9cbiAgICBkb3dubG9hZENhbnZhc0ltYWdlKHJldHVybmVkRGF0YVR5cGU/OiBzdHJpbmcsIGRvd25sb2FkRGF0YT86IHN0cmluZyB8IEJsb2IsIGN1c3RvbUZpbGVOYW1lPzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSBjYW52YXMgYmxvYiAoSUUpIGxvY2FsbHlcbiAgICAgKiBAcGFyYW0gYmxvYlxuICAgICAqIEBwYXJhbSByZXR1cm5lZERhdGFUeXBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2F2ZUNhbnZhc0Jsb2I7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgZ2VuZXJhdGVzIGEgY2FudmFzIHVybCBzdHJpbmcgb3IgYSBjYW52YXMgYmxvYiB3aXRoIHRoZSBwcmVzZW50ZWQgZGF0YSB0eXBlXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBpcyB0aGVuIGludm9rZWQgc2luY2UgdGhlIGJsb2IgY3JlYXRpb24gbXVzdCBiZSBkb25lIHZpYSBhIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gcmV0dXJuZWREYXRhVHlwZVxuICAgICAqIEBwYXJhbSByZXR1cm5lZERhdGFRdWFsaXR5XG4gICAgICovXG4gICAgZ2VuZXJhdGVDYW52YXNEYXRhKGNhbGxiYWNrOiBhbnksIHJldHVybmVkRGF0YVR5cGU/OiBzdHJpbmcsIHJldHVybmVkRGF0YVF1YWxpdHk/OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIExvY2FsIG1ldGhvZCB0byBpbnZva2Ugc2F2aW5nIG9mIHRoZSBjYW52YXMgZGF0YSB3aGVuIGNsaWNrZWQgb24gdGhlIGNhbnZhcyBTYXZlIGJ1dHRvblxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgZW1pdCB0aGUgZ2VuZXJhdGVkIGRhdGEgd2l0aCB0aGUgc3BlY2lmaWVkIEV2ZW50IEVtaXR0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXR1cm5lZERhdGFUeXBlXG4gICAgICovXG4gICAgc2F2ZUxvY2FsKHJldHVybmVkRGF0YVR5cGU/OiBzdHJpbmcpOiB2b2lkO1xuICAgIHByaXZhdGUgX2dlbmVyYXRlRGF0YVR5cGVTdHJpbmc7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgY29sb3IgcGlja2VyIHdpbmRvdywgZGVsZWdhdGluZyB0aGUgc2hvd0NvbG9yUGlja2VyIElucHV0IHRvIHRoZSBDb2xvclBpY2tlckNvbXBvbmVudC5cbiAgICAgKiBJZiBubyB2YWx1ZSBpcyBzdXBwbGllZCAobnVsbC91bmRlZmluZWQpIHRoZSBjdXJyZW50IHZhbHVlIHdpbGwgYmUgbmVnYXRlZCBhbmQgdXNlZC5cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICB0b2dnbGVTdHJva2VDb2xvclBpY2tlcih2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgY29sb3IgcGlja2VyIHdpbmRvdywgZGVsZWdhdGluZyB0aGUgc2hvd0NvbG9yUGlja2VyIElucHV0IHRvIHRoZSBDb2xvclBpY2tlckNvbXBvbmVudC5cbiAgICAgKiBJZiBubyB2YWx1ZSBpcyBzdXBwbGllZCAobnVsbC91bmRlZmluZWQpIHRoZSBjdXJyZW50IHZhbHVlIHdpbGwgYmUgbmVnYXRlZCBhbmQgdXNlZC5cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICB0b2dnbGVGaWxsQ29sb3JQaWNrZXIodmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIHNoYXBlIHNlbGVjdG9yIHdpbmRvdywgZGVsZWdhdGluZyB0aGUgc2hvd1NoYXBlU2VsZWN0b3IgSW5wdXQgdG8gdGhlIENhbnZhc1doaXRlYm9hcmRTaGFwZVNlbGVjdG9yQ29tcG9uZW50LlxuICAgICAqIElmIG5vIHZhbHVlIGlzIHN1cHBsaWVkIChudWxsL3VuZGVmaW5lZCkgdGhlIGN1cnJlbnQgdmFsdWUgd2lsbCBiZSBuZWdhdGVkIGFuZCB1c2VkLlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHRvZ2dsZVNoYXBlU2VsZWN0b3IodmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuICAgIHNlbGVjdFNoYXBlKG5ld1NoYXBlQmx1ZXByaW50OiBJTmV3Q2FudmFzV2hpdGVib2FyZFNoYXBlPENhbnZhc1doaXRlYm9hcmRTaGFwZT4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBkZWVwIGNvcHkgb2YgdGhlIGN1cnJlbnQgZHJhd2luZyBoaXN0b3J5IGZvciB0aGUgY2FudmFzLlxuICAgICAqIFRoZSBkZWVwIGNvcHkgaXMgcmV0dXJuZWQgYmVjYXVzZSB3ZSBkb24ndCB3YW50IGFueW9uZSB0byBtdXRhdGUgdGhlIGN1cnJlbnQgaGlzdG9yeVxuICAgICAqL1xuICAgIGdldERyYXdpbmdIaXN0b3J5KCk6IENhbnZhc1doaXRlYm9hcmRVcGRhdGVbXTtcbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIGEgZ2l2ZW4gc3Vic2NyaXB0aW9uIGlmIGl0IGlzIGFjdGl2ZVxuICAgICAqIEBwYXJhbSBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIF91bnN1YnNjcmliZTtcbiAgICBwcml2YXRlIF9nZW5lcmF0ZVVVSUQ7XG4gICAgcHJpdmF0ZSBfcmFuZG9tNDtcbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBzZXJ2aWNlIG9ic2VydmFibGVzXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==
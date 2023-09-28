import { CanvasWhiteboardUpdate } from "./canvas-whiteboard-update.model";
import { Observable } from "rxjs";
import * as ɵngcc0 from '@angular/core';
export declare class CanvasWhiteboardService {
    private _canvasDrawSubject;
    canvasDrawSubject$: Observable<CanvasWhiteboardUpdate[]>;
    private _canvasClearSubject;
    canvasClearSubject$: Observable<any>;
    private _canvasUndoSubject;
    canvasUndoSubject$: Observable<any>;
    private _canvasRedoSubject;
    canvasRedoSubject$: Observable<any>;
    drawCanvas(updates: CanvasWhiteboardUpdate[]): void;
    clearCanvas(): void;
    undoCanvas(updateUUD: string): void;
    redoCanvas(updateUUD: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CanvasWhiteboardService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CanvasWhiteboardService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXdoaXRlYm9hcmQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjYW52YXMtd2hpdGVib2FyZC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhc1doaXRlYm9hcmRVcGRhdGUgfSBmcm9tIFwiLi9jYW52YXMtd2hpdGVib2FyZC11cGRhdGUubW9kZWxcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FudmFzV2hpdGVib2FyZFNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2NhbnZhc0RyYXdTdWJqZWN0O1xuICAgIGNhbnZhc0RyYXdTdWJqZWN0JDogT2JzZXJ2YWJsZTxDYW52YXNXaGl0ZWJvYXJkVXBkYXRlW10+O1xuICAgIHByaXZhdGUgX2NhbnZhc0NsZWFyU3ViamVjdDtcbiAgICBjYW52YXNDbGVhclN1YmplY3QkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHJpdmF0ZSBfY2FudmFzVW5kb1N1YmplY3Q7XG4gICAgY2FudmFzVW5kb1N1YmplY3QkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHJpdmF0ZSBfY2FudmFzUmVkb1N1YmplY3Q7XG4gICAgY2FudmFzUmVkb1N1YmplY3QkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZHJhd0NhbnZhcyh1cGRhdGVzOiBDYW52YXNXaGl0ZWJvYXJkVXBkYXRlW10pOiB2b2lkO1xuICAgIGNsZWFyQ2FudmFzKCk6IHZvaWQ7XG4gICAgdW5kb0NhbnZhcyh1cGRhdGVVVUQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgcmVkb0NhbnZhcyh1cGRhdGVVVUQ6IHN0cmluZyk6IHZvaWQ7XG59XG4iXX0=
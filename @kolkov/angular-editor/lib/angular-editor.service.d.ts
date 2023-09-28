import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomClass } from './config';
import * as ɵngcc0 from '@angular/core';
export interface UploadResponse {
    imageUrl: string;
}
export declare class AngularEditorService {
    private http;
    private doc;
    savedSelection: Range | null;
    selectedText: string;
    uploadUrl: string;
    uploadWithCredentials: boolean;
    constructor(http: HttpClient, doc: any);
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param command string from triggerCommand
     */
    executeCommand(command: string): void;
    /**
     * Create URL link
     * @param url string from UI prompt
     */
    createLink(url: string): void;
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */
    insertColor(color: string, where: string): void;
    /**
     * Set font name
     * @param fontName string
     */
    setFontName(fontName: string): void;
    /**
     * Set font size
     * @param fontSize string
     */
    setFontSize(fontSize: string): void;
    /**
     * Create raw HTML
     * @param html HTML string
     */
    insertHtml(html: string): void;
    /**
     * save selection when the editor is focussed out
     */
    saveSelection: () => void;
    /**
     * restore selection when the editor is focused in
     *
     * saved selection when the editor is focused out
     */
    restoreSelection(): boolean;
    /**
     * setTimeout used for execute 'saveSelection' method in next event loop iteration
     */
    executeInNextQueueIteration(callbackFn: (...args: any[]) => any, timeout?: number): void;
    /** check any selection is made or not */
    private checkSelection;
    /**
     * Upload file to uploadUrl
     * @param file The file
     */
    uploadImage(file: File): Observable<HttpEvent<UploadResponse>>;
    /**
     * Insert image with Url
     * @param imageUrl The imageUrl.
     */
    insertImage(imageUrl: string): void;
    setDefaultParagraphSeparator(separator: string): void;
    createCustomClass(customClass: CustomClass): void;
    insertVideo(videoUrl: string): void;
    private insertYouTubeVideoTag;
    private insertVimeoVideoTag;
    nextNode(node: any): any;
    getRangeSelectedNodes(range: any, includePartiallySelectedContainers: any): any[];
    getSelectedNodes(): any[];
    replaceWithOwnChildren(el: any): void;
    removeSelectedElements(tagNames: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularEditorService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AngularEditorService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3Iuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhbmd1bGFyLWVkaXRvci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VzdG9tQ2xhc3MgfSBmcm9tICcuL2NvbmZpZyc7XG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZFJlc3BvbnNlIHtcbiAgICBpbWFnZVVybDogc3RyaW5nO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckVkaXRvclNlcnZpY2Uge1xuICAgIHByaXZhdGUgaHR0cDtcbiAgICBwcml2YXRlIGRvYztcbiAgICBzYXZlZFNlbGVjdGlvbjogUmFuZ2UgfCBudWxsO1xuICAgIHNlbGVjdGVkVGV4dDogc3RyaW5nO1xuICAgIHVwbG9hZFVybDogc3RyaW5nO1xuICAgIHVwbG9hZFdpdGhDcmVkZW50aWFsczogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBkb2M6IGFueSk7XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZWQgY29tbWFuZCBmcm9tIGVkaXRvciBoZWFkZXIgYnV0dG9ucyBleGNsdWRlIHRvZ2dsZUVkaXRvck1vZGVcbiAgICAgKiBAcGFyYW0gY29tbWFuZCBzdHJpbmcgZnJvbSB0cmlnZ2VyQ29tbWFuZFxuICAgICAqL1xuICAgIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIFVSTCBsaW5rXG4gICAgICogQHBhcmFtIHVybCBzdHJpbmcgZnJvbSBVSSBwcm9tcHRcbiAgICAgKi9cbiAgICBjcmVhdGVMaW5rKHVybDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBpbnNlcnQgY29sb3IgZWl0aGVyIGZvbnQgb3IgYmFja2dyb3VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbG9yIGNvbG9yIHRvIGJlIGluc2VydGVkXG4gICAgICogQHBhcmFtIHdoZXJlIHdoZXJlIHRoZSBjb2xvciBoYXMgdG8gYmUgaW5zZXJ0ZWQgZWl0aGVyIHRleHQvYmFja2dyb3VuZFxuICAgICAqL1xuICAgIGluc2VydENvbG9yKGNvbG9yOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBmb250IG5hbWVcbiAgICAgKiBAcGFyYW0gZm9udE5hbWUgc3RyaW5nXG4gICAgICovXG4gICAgc2V0Rm9udE5hbWUoZm9udE5hbWU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0IGZvbnQgc2l6ZVxuICAgICAqIEBwYXJhbSBmb250U2l6ZSBzdHJpbmdcbiAgICAgKi9cbiAgICBzZXRGb250U2l6ZShmb250U2l6ZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcmF3IEhUTUxcbiAgICAgKiBAcGFyYW0gaHRtbCBIVE1MIHN0cmluZ1xuICAgICAqL1xuICAgIGluc2VydEh0bWwoaHRtbDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBzYXZlIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgb3V0XG4gICAgICovXG4gICAgc2F2ZVNlbGVjdGlvbjogKCkgPT4gdm9pZDtcbiAgICAvKipcbiAgICAgKiByZXN0b3JlIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNlZCBpblxuICAgICAqXG4gICAgICogc2F2ZWQgc2VsZWN0aW9uIHdoZW4gdGhlIGVkaXRvciBpcyBmb2N1c2VkIG91dFxuICAgICAqL1xuICAgIHJlc3RvcmVTZWxlY3Rpb24oKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBzZXRUaW1lb3V0IHVzZWQgZm9yIGV4ZWN1dGUgJ3NhdmVTZWxlY3Rpb24nIG1ldGhvZCBpbiBuZXh0IGV2ZW50IGxvb3AgaXRlcmF0aW9uXG4gICAgICovXG4gICAgZXhlY3V0ZUluTmV4dFF1ZXVlSXRlcmF0aW9uKGNhbGxiYWNrRm46ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZDtcbiAgICAvKiogY2hlY2sgYW55IHNlbGVjdGlvbiBpcyBtYWRlIG9yIG5vdCAqL1xuICAgIHByaXZhdGUgY2hlY2tTZWxlY3Rpb247XG4gICAgLyoqXG4gICAgICogVXBsb2FkIGZpbGUgdG8gdXBsb2FkVXJsXG4gICAgICogQHBhcmFtIGZpbGUgVGhlIGZpbGVcbiAgICAgKi9cbiAgICB1cGxvYWRJbWFnZShmaWxlOiBGaWxlKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8VXBsb2FkUmVzcG9uc2U+PjtcbiAgICAvKipcbiAgICAgKiBJbnNlcnQgaW1hZ2Ugd2l0aCBVcmxcbiAgICAgKiBAcGFyYW0gaW1hZ2VVcmwgVGhlIGltYWdlVXJsLlxuICAgICAqL1xuICAgIGluc2VydEltYWdlKGltYWdlVXJsOiBzdHJpbmcpOiB2b2lkO1xuICAgIHNldERlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3Ioc2VwYXJhdG9yOiBzdHJpbmcpOiB2b2lkO1xuICAgIGNyZWF0ZUN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzOiBDdXN0b21DbGFzcyk6IHZvaWQ7XG4gICAgaW5zZXJ0VmlkZW8odmlkZW9Vcmw6IHN0cmluZyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBpbnNlcnRZb3VUdWJlVmlkZW9UYWc7XG4gICAgcHJpdmF0ZSBpbnNlcnRWaW1lb1ZpZGVvVGFnO1xuICAgIG5leHROb2RlKG5vZGU6IGFueSk6IGFueTtcbiAgICBnZXRSYW5nZVNlbGVjdGVkTm9kZXMocmFuZ2U6IGFueSwgaW5jbHVkZVBhcnRpYWxseVNlbGVjdGVkQ29udGFpbmVyczogYW55KTogYW55W107XG4gICAgZ2V0U2VsZWN0ZWROb2RlcygpOiBhbnlbXTtcbiAgICByZXBsYWNlV2l0aE93bkNoaWxkcmVuKGVsOiBhbnkpOiB2b2lkO1xuICAgIHJlbW92ZVNlbGVjdGVkRWxlbWVudHModGFnTmFtZXM6IGFueSk6IHZvaWQ7XG59XG4iXX0=
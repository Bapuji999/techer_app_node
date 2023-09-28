import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AngularEditorConfig } from './config';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { AngularEditorService } from './angular-editor.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class AngularEditorComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
    private r;
    private editorService;
    private doc;
    private sanitizer;
    private cdRef;
    private autoFocus;
    private onChange;
    private onTouched;
    modeVisual: boolean;
    showPlaceholder: boolean;
    disabled: boolean;
    focused: boolean;
    touched: boolean;
    changed: boolean;
    focusInstance: any;
    blurInstance: any;
    id: string;
    config: AngularEditorConfig;
    placeholder: string;
    tabIndex: number | null;
    html: any;
    textArea: ElementRef;
    editorWrapper: ElementRef;
    editorToolbar: AngularEditorToolbarComponent;
    viewMode: EventEmitter<boolean>;
    /** emits `blur` event when focused out from the textarea */
    blurEvent: EventEmitter<FocusEvent>;
    /** emits `focus` event when focused in to the textarea */
    focusEvent: EventEmitter<FocusEvent>;
    tabindex: number;
    onFocus(): void;
    constructor(r: Renderer2, editorService: AngularEditorService, doc: any, sanitizer: DomSanitizer, cdRef: ChangeDetectorRef, defaultTabIndex: string, autoFocus: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */
    executeCommand(command: string): void;
    /**
     * focus event
     */
    onTextAreaFocus(event: FocusEvent): void;
    /**
     * @description fires when cursor leaves textarea
     */
    onTextAreaMouseOut(event: MouseEvent): void;
    /**
     * blur event
     */
    onTextAreaBlur(event: FocusEvent): void;
    /**
     *  focus the text area when the editor is focused
     */
    focus(): void;
    /**
     * Executed from the contenteditable section while the input property changes
     * @param element html element from contenteditable
     */
    onContentChange(element: HTMLElement): void;
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    registerOnChange(fn: any): void;
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    registerOnTouched(fn: any): void;
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    writeValue(value: any): void;
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    refreshView(value: string): void;
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    togglePlaceholder(value: boolean): void;
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled Disabled flag
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */
    toggleEditorMode(bToSource: boolean): void;
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */
    exec(): void;
    private configure;
    getFonts(): {
        label: string;
        value: string;
    }[];
    getCustomTags(): string;
    ngOnDestroy(): void;
    filterStyles(html: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularEditorComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AngularEditorComponent, "angular-editor", never, {
    "id": "id";
    "config": "config";
    "placeholder": "placeholder";
    "tabIndex": "tabIndex";
}, {
    "viewMode": "viewMode";
    "blurEvent": "blur";
    "focusEvent": "focus";
    "html": "html";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFuZ3VsYXItZWRpdG9yLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUhBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbmd1bGFyRWRpdG9yQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXJFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByO1xuICAgIHByaXZhdGUgZWRpdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGRvYztcbiAgICBwcml2YXRlIHNhbml0aXplcjtcbiAgICBwcml2YXRlIGNkUmVmO1xuICAgIHByaXZhdGUgYXV0b0ZvY3VzO1xuICAgIHByaXZhdGUgb25DaGFuZ2U7XG4gICAgcHJpdmF0ZSBvblRvdWNoZWQ7XG4gICAgbW9kZVZpc3VhbDogYm9vbGVhbjtcbiAgICBzaG93UGxhY2Vob2xkZXI6IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgZm9jdXNlZDogYm9vbGVhbjtcbiAgICB0b3VjaGVkOiBib29sZWFuO1xuICAgIGNoYW5nZWQ6IGJvb2xlYW47XG4gICAgZm9jdXNJbnN0YW5jZTogYW55O1xuICAgIGJsdXJJbnN0YW5jZTogYW55O1xuICAgIGlkOiBzdHJpbmc7XG4gICAgY29uZmlnOiBBbmd1bGFyRWRpdG9yQ29uZmlnO1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgdGFiSW5kZXg6IG51bWJlciB8IG51bGw7XG4gICAgaHRtbDogYW55O1xuICAgIHRleHRBcmVhOiBFbGVtZW50UmVmO1xuICAgIGVkaXRvcldyYXBwZXI6IEVsZW1lbnRSZWY7XG4gICAgZWRpdG9yVG9vbGJhcjogQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQ7XG4gICAgdmlld01vZGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICAvKiogZW1pdHMgYGJsdXJgIGV2ZW50IHdoZW4gZm9jdXNlZCBvdXQgZnJvbSB0aGUgdGV4dGFyZWEgKi9cbiAgICBibHVyRXZlbnQ6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PjtcbiAgICAvKiogZW1pdHMgYGZvY3VzYCBldmVudCB3aGVuIGZvY3VzZWQgaW4gdG8gdGhlIHRleHRhcmVhICovXG4gICAgZm9jdXNFdmVudDogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+O1xuICAgIHRhYmluZGV4OiBudW1iZXI7XG4gICAgb25Gb2N1cygpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKHI6IFJlbmRlcmVyMiwgZWRpdG9yU2VydmljZTogQW5ndWxhckVkaXRvclNlcnZpY2UsIGRvYzogYW55LCBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBkZWZhdWx0VGFiSW5kZXg6IHN0cmluZywgYXV0b0ZvY3VzOiBhbnkpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZWQgY29tbWFuZCBmcm9tIGVkaXRvciBoZWFkZXIgYnV0dG9uc1xuICAgICAqIEBwYXJhbSBjb21tYW5kIHN0cmluZyBmcm9tIHRyaWdnZXJDb21tYW5kXG4gICAgICovXG4gICAgZXhlY3V0ZUNvbW1hbmQoY29tbWFuZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBmb2N1cyBldmVudFxuICAgICAqL1xuICAgIG9uVGV4dEFyZWFGb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIGZpcmVzIHdoZW4gY3Vyc29yIGxlYXZlcyB0ZXh0YXJlYVxuICAgICAqL1xuICAgIG9uVGV4dEFyZWFNb3VzZU91dChldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogYmx1ciBldmVudFxuICAgICAqL1xuICAgIG9uVGV4dEFyZWFCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiAgZm9jdXMgdGhlIHRleHQgYXJlYSB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNlZFxuICAgICAqL1xuICAgIGZvY3VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZWQgZnJvbSB0aGUgY29udGVudGVkaXRhYmxlIHNlY3Rpb24gd2hpbGUgdGhlIGlucHV0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBodG1sIGVsZW1lbnQgZnJvbSBjb250ZW50ZWRpdGFibGVcbiAgICAgKi9cbiAgICBvbkNvbnRlbnRDaGFuZ2UoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkXG4gICAgICogd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uXG4gICAgICovXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSB0b3VjaCBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uXG4gICAgICovXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogV3JpdGUgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBjb250ZW50ZWRpdGFibGVcbiAgICAgKi9cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHJlZnJlc2ggdmlldy9IVE1MIG9mIHRoZSBlZGl0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBodG1sIHN0cmluZyBmcm9tIHRoZSBlZGl0b3JcbiAgICAgKi9cbiAgICByZWZyZXNoVmlldyh2YWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiB0b2dnbGVzIHBsYWNlaG9sZGVyIGJhc2VkIG9uIGlucHV0IHN0cmluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIEEgSFRNTCBzdHJpbmcgZnJvbSB0aGUgZWRpdG9yXG4gICAgICovXG4gICAgdG9nZ2xlUGxhY2Vob2xkZXIodmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgZGlzYWJsZWQgc3RhdGUgZm9yIHRoaXMgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIGlzRGlzYWJsZWQgRGlzYWJsZWQgZmxhZ1xuICAgICAqL1xuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogdG9nZ2xlcyBlZGl0b3IgbW9kZSBiYXNlZCBvbiBiVG9Tb3VyY2UgYm9vbFxuICAgICAqXG4gICAgICogQHBhcmFtIGJUb1NvdXJjZSBBIGJvb2xlYW4gdmFsdWUgZnJvbSB0aGUgZWRpdG9yXG4gICAgICovXG4gICAgdG9nZ2xlRWRpdG9yTW9kZShiVG9Tb3VyY2U6IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHRvZ2dsZXMgZWRpdG9yIGJ1dHRvbnMgd2hlbiBjdXJzb3IgbW92ZWQgb3IgcG9zaXRpb25pbmdcbiAgICAgKlxuICAgICAqIFNlbmQgYSBub2RlIGFycmF5IGZyb20gdGhlIGNvbnRlbnRFZGl0YWJsZSBvZiB0aGUgZWRpdG9yXG4gICAgICovXG4gICAgZXhlYygpOiB2b2lkO1xuICAgIHByaXZhdGUgY29uZmlndXJlO1xuICAgIGdldEZvbnRzKCk6IHtcbiAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9W107XG4gICAgZ2V0Q3VzdG9tVGFncygpOiBzdHJpbmc7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBmaWx0ZXJTdHlsZXMoaHRtbDogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19
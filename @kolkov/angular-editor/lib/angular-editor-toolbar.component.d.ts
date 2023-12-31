import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { AngularEditorService } from './angular-editor.service';
import { CustomClass } from './config';
import { SelectOption } from './ae-select/ae-select.component';
import * as ɵngcc0 from '@angular/core';
export declare class AngularEditorToolbarComponent {
    private r;
    private editorService;
    private doc;
    htmlMode: boolean;
    linkSelected: boolean;
    block: string;
    fontName: string;
    fontSize: string;
    foreColour: any;
    backColor: any;
    headings: SelectOption[];
    fontSizes: SelectOption[];
    customClassId: string;
    _customClasses: CustomClass[];
    customClassList: SelectOption[];
    tagMap: {
        BLOCKQUOTE: string;
        A: string;
    };
    select: string[];
    buttons: string[];
    id: string;
    uploadUrl: string;
    showToolbar: boolean;
    fonts: SelectOption[];
    customClasses: CustomClass[];
    defaultFontName: string;
    defaultFontSize: string;
    hiddenButtons: string[][];
    execute: EventEmitter<string>;
    myInputFile: ElementRef;
    readonly isLinkButtonDisabled: boolean;
    constructor(r: Renderer2, editorService: AngularEditorService, doc: any);
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */
    triggerCommand(command: string): void;
    /**
     * highlight editor buttons when cursor moved or positioning
     */
    triggerButtons(): void;
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */
    triggerBlocks(nodes: Node[]): void;
    /**
     * insert URL link
     */
    insertUrl(): void;
    /**
     * insert Video link
     */
    insertVideo(): void;
    /** insert color */
    insertColor(color: string, where: string): void;
    /**
     * set font Name/family
     * @param foreColor string
     */
    setFontName(foreColor: string): void;
    /**
     * set font Size
     * @param fontSize string
     */
    setFontSize(fontSize: string): void;
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */
    setEditorMode(m: boolean): void;
    /**
     * Upload image when file is selected
     */
    onFileChanged(event: any): void;
    /**
     * Reset Input
     */
    fileReset(): void;
    /**
     * Set custom class
     */
    setCustomClass(classId: string): void;
    isButtonHidden(name: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularEditorToolbarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AngularEditorToolbarComponent, "angular-editor-toolbar", never, {
    "fonts": "fonts";
    "customClasses": "customClasses";
    "defaultFontName": "defaultFontName";
    "defaultFontSize": "defaultFontSize";
    "id": "id";
    "uploadUrl": "uploadUrl";
    "showToolbar": "showToolbar";
    "hiddenButtons": "hiddenButtons";
}, {
    "execute": "execute";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3ItdG9vbGJhci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYW5ndWxhci1lZGl0b3ItdG9vbGJhci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckVkaXRvclNlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tQ2xhc3MgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb24gfSBmcm9tICcuL2FlLXNlbGVjdC9hZS1zZWxlY3QuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHI7XG4gICAgcHJpdmF0ZSBlZGl0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgZG9jO1xuICAgIGh0bWxNb2RlOiBib29sZWFuO1xuICAgIGxpbmtTZWxlY3RlZDogYm9vbGVhbjtcbiAgICBibG9jazogc3RyaW5nO1xuICAgIGZvbnROYW1lOiBzdHJpbmc7XG4gICAgZm9udFNpemU6IHN0cmluZztcbiAgICBmb3JlQ29sb3VyOiBhbnk7XG4gICAgYmFja0NvbG9yOiBhbnk7XG4gICAgaGVhZGluZ3M6IFNlbGVjdE9wdGlvbltdO1xuICAgIGZvbnRTaXplczogU2VsZWN0T3B0aW9uW107XG4gICAgY3VzdG9tQ2xhc3NJZDogc3RyaW5nO1xuICAgIF9jdXN0b21DbGFzc2VzOiBDdXN0b21DbGFzc1tdO1xuICAgIGN1c3RvbUNsYXNzTGlzdDogU2VsZWN0T3B0aW9uW107XG4gICAgdGFnTWFwOiB7XG4gICAgICAgIEJMT0NLUVVPVEU6IHN0cmluZztcbiAgICAgICAgQTogc3RyaW5nO1xuICAgIH07XG4gICAgc2VsZWN0OiBzdHJpbmdbXTtcbiAgICBidXR0b25zOiBzdHJpbmdbXTtcbiAgICBpZDogc3RyaW5nO1xuICAgIHVwbG9hZFVybDogc3RyaW5nO1xuICAgIHNob3dUb29sYmFyOiBib29sZWFuO1xuICAgIGZvbnRzOiBTZWxlY3RPcHRpb25bXTtcbiAgICBjdXN0b21DbGFzc2VzOiBDdXN0b21DbGFzc1tdO1xuICAgIGRlZmF1bHRGb250TmFtZTogc3RyaW5nO1xuICAgIGRlZmF1bHRGb250U2l6ZTogc3RyaW5nO1xuICAgIGhpZGRlbkJ1dHRvbnM6IHN0cmluZ1tdW107XG4gICAgZXhlY3V0ZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgbXlJbnB1dEZpbGU6IEVsZW1lbnRSZWY7XG4gICAgcmVhZG9ubHkgaXNMaW5rQnV0dG9uRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IocjogUmVuZGVyZXIyLCBlZGl0b3JTZXJ2aWNlOiBBbmd1bGFyRWRpdG9yU2VydmljZSwgZG9jOiBhbnkpO1xuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgY29tbWFuZCBmcm9tIGVkaXRvciBoZWFkZXIgYnV0dG9uc1xuICAgICAqIEBwYXJhbSBjb21tYW5kIHN0cmluZyBmcm9tIHRvb2xiYXIgYnV0dG9uc1xuICAgICAqL1xuICAgIHRyaWdnZXJDb21tYW5kKGNvbW1hbmQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogaGlnaGxpZ2h0IGVkaXRvciBidXR0b25zIHdoZW4gY3Vyc29yIG1vdmVkIG9yIHBvc2l0aW9uaW5nXG4gICAgICovXG4gICAgdHJpZ2dlckJ1dHRvbnMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiB0cmlnZ2VyIGhpZ2hsaWdodCBlZGl0b3IgYnV0dG9ucyB3aGVuIGN1cnNvciBtb3ZlZCBvciBwb3NpdGlvbmluZyBpbiBibG9ja1xuICAgICAqL1xuICAgIHRyaWdnZXJCbG9ja3Mobm9kZXM6IE5vZGVbXSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogaW5zZXJ0IFVSTCBsaW5rXG4gICAgICovXG4gICAgaW5zZXJ0VXJsKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogaW5zZXJ0IFZpZGVvIGxpbmtcbiAgICAgKi9cbiAgICBpbnNlcnRWaWRlbygpOiB2b2lkO1xuICAgIC8qKiBpbnNlcnQgY29sb3IgKi9cbiAgICBpbnNlcnRDb2xvcihjb2xvcjogc3RyaW5nLCB3aGVyZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBzZXQgZm9udCBOYW1lL2ZhbWlseVxuICAgICAqIEBwYXJhbSBmb3JlQ29sb3Igc3RyaW5nXG4gICAgICovXG4gICAgc2V0Rm9udE5hbWUoZm9yZUNvbG9yOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHNldCBmb250IFNpemVcbiAgICAgKiBAcGFyYW0gZm9udFNpemUgc3RyaW5nXG4gICAgICovXG4gICAgc2V0Rm9udFNpemUoZm9udFNpemU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogdG9nZ2xlIGVkaXRvciBtb2RlIChXWVNJV1lHIG9yIFNPVVJDRSlcbiAgICAgKiBAcGFyYW0gbSBib29sZWFuXG4gICAgICovXG4gICAgc2V0RWRpdG9yTW9kZShtOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGxvYWQgaW1hZ2Ugd2hlbiBmaWxlIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgb25GaWxlQ2hhbmdlZChldmVudDogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXNldCBJbnB1dFxuICAgICAqL1xuICAgIGZpbGVSZXNldCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCBjdXN0b20gY2xhc3NcbiAgICAgKi9cbiAgICBzZXRDdXN0b21DbGFzcyhjbGFzc0lkOiBzdHJpbmcpOiB2b2lkO1xuICAgIGlzQnV0dG9uSGlkZGVuKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG59XG4iXX0=
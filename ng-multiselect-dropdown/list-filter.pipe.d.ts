import { PipeTransform } from '@angular/core';
import { ListItem } from './multiselect.model';
import * as ɵngcc0 from '@angular/core';
export declare class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: ListItem): ListItem[];
    applyFilter(item: ListItem, filter: ListItem): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ListFilterPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<ListFilterPipe, "multiSelectFilter">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIucGlwZS5kLnRzIiwic291cmNlcyI6WyJsaXN0LWZpbHRlci5waXBlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7OztBQUdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJy4vbXVsdGlzZWxlY3QubW9kZWwnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMaXN0RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKGl0ZW1zOiBMaXN0SXRlbVtdLCBmaWx0ZXI6IExpc3RJdGVtKTogTGlzdEl0ZW1bXTtcclxuICAgIGFwcGx5RmlsdGVyKGl0ZW06IExpc3RJdGVtLCBmaWx0ZXI6IExpc3RJdGVtKTogYm9vbGVhbjtcclxufVxyXG4iXX0=
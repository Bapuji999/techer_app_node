/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { AbstractLoaderDirective } from '../abstract.loader.directive';
var SkRotatingPlaneComponent = /** @class */ (function (_super) {
    __extends(SkRotatingPlaneComponent, _super);
    function SkRotatingPlaneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkRotatingPlaneComponent = __decorate([
        Component({
            selector: 'sk-rotating-plane',
            template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-rotating-plane colored-parent\" [style.background-color]='backgroundColor'></div>\n",
            styles: [".sk-rotating-plane{position:relative;top:50%;width:40px;height:40px;margin:auto;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]
        })
    ], SkRotatingPlaneComponent);
    return SkRotatingPlaneComponent;
}(AbstractLoaderDirective));
export { SkRotatingPlaneComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2stcm90YXRpbmctcGxhbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaHR0cC1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zay1yb3RhdGluZy1wbGFuZS9zay1yb3RhdGluZy1wbGFuZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBT3ZFO0lBQThDLDRDQUF1QjtJQUFyRTs7SUFDQSxDQUFDO0lBRFksd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0Isa3JDQUFpRDs7U0FFcEQsQ0FBQztPQUNXLHdCQUF3QixDQUNwQztJQUFELCtCQUFDO0NBQUEsQUFERCxDQUE4Qyx1QkFBdUIsR0FDcEU7U0FEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TG9hZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYWJzdHJhY3QubG9hZGVyLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2stcm90YXRpbmctcGxhbmUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zay1yb3RhdGluZy1wbGFuZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2stcm90YXRpbmctcGxhbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTa1JvdGF0aW5nUGxhbmVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExvYWRlckRpcmVjdGl2ZSB7XG59XG4iXX0=
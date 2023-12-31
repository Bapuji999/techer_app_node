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
var SkSpinnerPulseComponent = /** @class */ (function (_super) {
    __extends(SkSpinnerPulseComponent, _super);
    function SkSpinnerPulseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkSpinnerPulseComponent = __decorate([
        Component({
            selector: 'sk-spinner-pulse',
            template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-spinner sk-spinner-pulse colored-parent\" [style.background-color]='backgroundColor'></div>\n",
            styles: [".sk-spinner-pulse{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulseScaleOut;animation:1s ease-in-out infinite sk-pulseScaleOut}@-webkit-keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}"]
        })
    ], SkSpinnerPulseComponent);
    return SkSpinnerPulseComponent;
}(AbstractLoaderDirective));
export { SkSpinnerPulseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2stc3Bpbm5lci1wdWxzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1odHRwLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NrLXNwaW5uZXItcHVsc2Uvc2stc3Bpbm5lci1wdWxzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBT3ZFO0lBQTZDLDJDQUF1QjtJQUFwRTs7SUFDQSxDQUFDO0lBRFksdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsNHJDQUFnRDs7U0FFbkQsQ0FBQztPQUNXLHVCQUF1QixDQUNuQztJQUFELDhCQUFDO0NBQUEsQUFERCxDQUE2Qyx1QkFBdUIsR0FDbkU7U0FEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TG9hZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYWJzdHJhY3QubG9hZGVyLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2stc3Bpbm5lci1wdWxzZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NrLXNwaW5uZXItcHVsc2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NrLXNwaW5uZXItcHVsc2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTa1NwaW5uZXJQdWxzZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TG9hZGVyRGlyZWN0aXZlIHtcbn1cbiJdfQ==
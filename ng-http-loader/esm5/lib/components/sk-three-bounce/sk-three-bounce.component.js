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
var SkThreeBounceComponent = /** @class */ (function (_super) {
    __extends(SkThreeBounceComponent, _super);
    function SkThreeBounceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkThreeBounceComponent = __decorate([
        Component({
            selector: 'sk-three-bounce',
            template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n</div>\n",
            styles: [".sk-three-bounce{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce .sk-child{width:20px;height:20px;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-three-bounce;animation:1.4s ease-in-out infinite both sk-three-bounce}.sk-three-bounce .sk-bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce .sk-bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-three-bounce{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}"]
        })
    ], SkThreeBounceComponent);
    return SkThreeBounceComponent;
}(AbstractLoaderDirective));
export { SkThreeBounceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2stdGhyZWUtYm91bmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWh0dHAtbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2stdGhyZWUtYm91bmNlL3NrLXRocmVlLWJvdW5jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBT3ZFO0lBQTRDLDBDQUF1QjtJQUFuRTs7SUFDQSxDQUFDO0lBRFksc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsMjZDQUErQzs7U0FFbEQsQ0FBQztPQUNXLHNCQUFzQixDQUNsQztJQUFELDZCQUFDO0NBQUEsQUFERCxDQUE0Qyx1QkFBdUIsR0FDbEU7U0FEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4gKiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuICogQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TG9hZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYWJzdHJhY3QubG9hZGVyLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2stdGhyZWUtYm91bmNlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2stdGhyZWUtYm91bmNlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zay10aHJlZS1ib3VuY2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTa1RocmVlQm91bmNlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMb2FkZXJEaXJlY3RpdmUge1xufVxuIl19
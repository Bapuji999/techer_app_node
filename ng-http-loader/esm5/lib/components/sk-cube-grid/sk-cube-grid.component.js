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
var SkCubeGridComponent = /** @class */ (function (_super) {
    __extends(SkCubeGridComponent, _super);
    function SkCubeGridComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkCubeGridComponent = __decorate([
        Component({
            selector: 'sk-cube-grid',
            template: "<!--\nCopyright (c) 2015 Tobias Ahlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n-->\n\n<div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\">\n    <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n    <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n</div>\n",
            styles: [".sk-cube-grid{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid .sk-cube{width:33.33%;height:33.33%;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay;animation:1.3s ease-in-out infinite sk-cubeGridScaleDelay}.sk-cube-grid .sk-cube1{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube2{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube3{-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid .sk-cube4{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube5{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid .sk-cube6{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid .sk-cube7{-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid .sk-cube8{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid .sk-cube9{-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}@keyframes sk-cubeGridScaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}"]
        })
    ], SkCubeGridComponent);
    return SkCubeGridComponent;
}(AbstractLoaderDirective));
export { SkCubeGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2stY3ViZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWh0dHAtbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2stY3ViZS1ncmlkL3NrLWN1YmUtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBT3ZFO0lBQXlDLHVDQUF1QjtJQUFoRTs7SUFDQSxDQUFDO0lBRFksbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLHk2REFBNEM7O1NBRS9DLENBQUM7T0FDVyxtQkFBbUIsQ0FDL0I7SUFBRCwwQkFBQztDQUFBLEFBREQsQ0FBeUMsdUJBQXVCLEdBQy9EO1NBRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbiAqIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuICogSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbiAqIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExvYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uL2Fic3RyYWN0LmxvYWRlci5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NrLWN1YmUtZ3JpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NrLWN1YmUtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2stY3ViZS1ncmlkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2tDdWJlR3JpZENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TG9hZGVyRGlyZWN0aXZlIHtcbn1cbiJdfQ==
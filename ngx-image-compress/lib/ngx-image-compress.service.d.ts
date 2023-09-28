import { RendererFactory2 } from '@angular/core';
import { DOC_ORIENTATION } from './DOC_ORIENTATION';
import * as ɵngcc0 from '@angular/core';
export declare class NgxImageCompressService {
    private render;
    DOC_ORIENTATION: typeof DOC_ORIENTATION;
    constructor(rendererFactory: RendererFactory2);
    byteCount(image: any): number;
    uploadFile(): Promise<{
        image: string;
        orientation: DOC_ORIENTATION;
    }>;
    compressFile(image: any, orientation: any, ratio?: number, quality?: number): Promise<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxImageCompressService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgxImageCompressService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWltYWdlLWNvbXByZXNzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibmd4LWltYWdlLWNvbXByZXNzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DX09SSUVOVEFUSU9OIH0gZnJvbSAnLi9ET0NfT1JJRU5UQVRJT04nO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmd4SW1hZ2VDb21wcmVzc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVuZGVyO1xuICAgIERPQ19PUklFTlRBVElPTjogdHlwZW9mIERPQ19PUklFTlRBVElPTjtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIpO1xuICAgIGJ5dGVDb3VudChpbWFnZTogYW55KTogbnVtYmVyO1xuICAgIHVwbG9hZEZpbGUoKTogUHJvbWlzZTx7XG4gICAgICAgIGltYWdlOiBzdHJpbmc7XG4gICAgICAgIG9yaWVudGF0aW9uOiBET0NfT1JJRU5UQVRJT047XG4gICAgfT47XG4gICAgY29tcHJlc3NGaWxlKGltYWdlOiBhbnksIG9yaWVudGF0aW9uOiBhbnksIHJhdGlvPzogbnVtYmVyLCBxdWFsaXR5PzogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+O1xufVxuIl19
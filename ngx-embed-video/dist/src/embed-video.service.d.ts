import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class EmbedVideoService {
    private http;
    private sanitizer;
    private validYouTubeOptions;
    private validVimeoOptions;
    private validDailyMotionOptions;
    constructor(http: HttpClient, sanitizer: DomSanitizer);
    embed(url: any, options?: any): any;
    embed_youtube(id: string, options?: any): string;
    embed_vimeo(id: string, options?: any): string;
    embed_dailymotion(id: string, options?: any): string;
    embed_image(url: any, options?: any): any;
    private embed_youtube_image;
    private embed_vimeo_image;
    private embed_dailymotion_image;
    private parseOptions;
    private serializeQuery;
    private sanitize_iframe;
    private detectVimeo;
    private detectYoutube;
    private detectDailymotion;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EmbedVideoService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<EmbedVideoService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWQtdmlkZW8uc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJlbWJlZC12aWRlby5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEVtYmVkVmlkZW9TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGh0dHA7XG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI7XG4gICAgcHJpdmF0ZSB2YWxpZFlvdVR1YmVPcHRpb25zO1xuICAgIHByaXZhdGUgdmFsaWRWaW1lb09wdGlvbnM7XG4gICAgcHJpdmF0ZSB2YWxpZERhaWx5TW90aW9uT3B0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcik7XG4gICAgZW1iZWQodXJsOiBhbnksIG9wdGlvbnM/OiBhbnkpOiBhbnk7XG4gICAgZW1iZWRfeW91dHViZShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogc3RyaW5nO1xuICAgIGVtYmVkX3ZpbWVvKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmc7XG4gICAgZW1iZWRfZGFpbHltb3Rpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IHN0cmluZztcbiAgICBlbWJlZF9pbWFnZSh1cmw6IGFueSwgb3B0aW9ucz86IGFueSk6IGFueTtcbiAgICBwcml2YXRlIGVtYmVkX3lvdXR1YmVfaW1hZ2U7XG4gICAgcHJpdmF0ZSBlbWJlZF92aW1lb19pbWFnZTtcbiAgICBwcml2YXRlIGVtYmVkX2RhaWx5bW90aW9uX2ltYWdlO1xuICAgIHByaXZhdGUgcGFyc2VPcHRpb25zO1xuICAgIHByaXZhdGUgc2VyaWFsaXplUXVlcnk7XG4gICAgcHJpdmF0ZSBzYW5pdGl6ZV9pZnJhbWU7XG4gICAgcHJpdmF0ZSBkZXRlY3RWaW1lbztcbiAgICBwcml2YXRlIGRldGVjdFlvdXR1YmU7XG4gICAgcHJpdmF0ZSBkZXRlY3REYWlseW1vdGlvbjtcbn1cbiJdfQ==
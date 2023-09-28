import { ReTree } from './retree';
import * as ɵngcc0 from '@angular/core';
export interface DeviceInfo {
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
}
export declare class DeviceDetectorService {
    private platformId;
    ua: string;
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
    reTree: ReTree;
    constructor(platformId: any);
    /**
     * @author Ahsan Ayaz
     * @desc Sets the initial value of the device when the service is initiated.
     * This value is later accessible for usage
     */
    setDeviceInfo(ua?: string): void;
    /**
     * @author Ahsan Ayaz
     * @desc Returns the device information
     * @returns the device information object.
     */
    getDeviceInfo(): DeviceInfo;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the mobile devices to check
     * if the current device is a mobile and also check current device is tablet so it will return false.
     * @returns whether the current device is a mobile
     */
    isMobile(userAgent?: string): boolean;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the tablet devices to check
     * if the current device is a tablet.
     * @returns whether the current device is a tablet
     */
    isTablet(userAgent?: string): boolean;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the desktop devices to check
     * if the current device is a desktop device.
     * @returns whether the current device is a desktop device
     */
    isDesktop(userAgent?: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DeviceDetectorService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DeviceDetectorService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWRldGVjdG9yLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZGV2aWNlLWRldGVjdG9yLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVUcmVlIH0gZnJvbSAnLi9yZXRyZWUnO1xuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VJbmZvIHtcbiAgICB1c2VyQWdlbnQ6IHN0cmluZztcbiAgICBvczogc3RyaW5nO1xuICAgIGJyb3dzZXI6IHN0cmluZztcbiAgICBkZXZpY2U6IHN0cmluZztcbiAgICBvc192ZXJzaW9uOiBzdHJpbmc7XG4gICAgYnJvd3Nlcl92ZXJzaW9uOiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZXZpY2VEZXRlY3RvclNlcnZpY2Uge1xuICAgIHByaXZhdGUgcGxhdGZvcm1JZDtcbiAgICB1YTogc3RyaW5nO1xuICAgIHVzZXJBZ2VudDogc3RyaW5nO1xuICAgIG9zOiBzdHJpbmc7XG4gICAgYnJvd3Nlcjogc3RyaW5nO1xuICAgIGRldmljZTogc3RyaW5nO1xuICAgIG9zX3ZlcnNpb246IHN0cmluZztcbiAgICBicm93c2VyX3ZlcnNpb246IHN0cmluZztcbiAgICByZVRyZWU6IFJlVHJlZTtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkOiBhbnkpO1xuICAgIC8qKlxuICAgICAqIEBhdXRob3IgQWhzYW4gQXlhelxuICAgICAqIEBkZXNjIFNldHMgdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGRldmljZSB3aGVuIHRoZSBzZXJ2aWNlIGlzIGluaXRpYXRlZC5cbiAgICAgKiBUaGlzIHZhbHVlIGlzIGxhdGVyIGFjY2Vzc2libGUgZm9yIHVzYWdlXG4gICAgICovXG4gICAgc2V0RGV2aWNlSW5mbyh1YT86IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGF1dGhvciBBaHNhbiBBeWF6XG4gICAgICogQGRlc2MgUmV0dXJucyB0aGUgZGV2aWNlIGluZm9ybWF0aW9uXG4gICAgICogQHJldHVybnMgdGhlIGRldmljZSBpbmZvcm1hdGlvbiBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0RGV2aWNlSW5mbygpOiBEZXZpY2VJbmZvO1xuICAgIC8qKlxuICAgICAqIEBhdXRob3IgQWhzYW4gQXlhelxuICAgICAqIEBkZXNjIENvbXBhcmVzIHRoZSBjdXJyZW50IGRldmljZSBpbmZvIHdpdGggdGhlIG1vYmlsZSBkZXZpY2VzIHRvIGNoZWNrXG4gICAgICogaWYgdGhlIGN1cnJlbnQgZGV2aWNlIGlzIGEgbW9iaWxlIGFuZCBhbHNvIGNoZWNrIGN1cnJlbnQgZGV2aWNlIGlzIHRhYmxldCBzbyBpdCB3aWxsIHJldHVybiBmYWxzZS5cbiAgICAgKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBjdXJyZW50IGRldmljZSBpcyBhIG1vYmlsZVxuICAgICAqL1xuICAgIGlzTW9iaWxlKHVzZXJBZ2VudD86IHN0cmluZyk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGF1dGhvciBBaHNhbiBBeWF6XG4gICAgICogQGRlc2MgQ29tcGFyZXMgdGhlIGN1cnJlbnQgZGV2aWNlIGluZm8gd2l0aCB0aGUgdGFibGV0IGRldmljZXMgdG8gY2hlY2tcbiAgICAgKiBpZiB0aGUgY3VycmVudCBkZXZpY2UgaXMgYSB0YWJsZXQuXG4gICAgICogQHJldHVybnMgd2hldGhlciB0aGUgY3VycmVudCBkZXZpY2UgaXMgYSB0YWJsZXRcbiAgICAgKi9cbiAgICBpc1RhYmxldCh1c2VyQWdlbnQ/OiBzdHJpbmcpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBhdXRob3IgQWhzYW4gQXlhelxuICAgICAqIEBkZXNjIENvbXBhcmVzIHRoZSBjdXJyZW50IGRldmljZSBpbmZvIHdpdGggdGhlIGRlc2t0b3AgZGV2aWNlcyB0byBjaGVja1xuICAgICAqIGlmIHRoZSBjdXJyZW50IGRldmljZSBpcyBhIGRlc2t0b3AgZGV2aWNlLlxuICAgICAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIGN1cnJlbnQgZGV2aWNlIGlzIGEgZGVza3RvcCBkZXZpY2VcbiAgICAgKi9cbiAgICBpc0Rlc2t0b3AodXNlckFnZW50Pzogc3RyaW5nKTogYm9vbGVhbjtcbn1cbiJdfQ==
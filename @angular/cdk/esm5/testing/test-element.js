/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** An enum of non-text keys that can be used with the `sendKeys` method. */
// NOTE: This is a separate enum from `@angular/cdk/keycodes` because we don't necessarily want to
// support every possible keyCode. We also can't rely on Protractor's `Key` because we don't want a
// dependency on any particular testing framework here. Instead we'll just maintain this supported
// list of keys and let individual concrete `HarnessEnvironment` classes map them to whatever key
// representation is used in its respective testing framework.
// tslint:disable-next-line:prefer-const-enum Seems like this causes some issues with System.js
export var TestKey;
(function (TestKey) {
    TestKey[TestKey["BACKSPACE"] = 0] = "BACKSPACE";
    TestKey[TestKey["TAB"] = 1] = "TAB";
    TestKey[TestKey["ENTER"] = 2] = "ENTER";
    TestKey[TestKey["SHIFT"] = 3] = "SHIFT";
    TestKey[TestKey["CONTROL"] = 4] = "CONTROL";
    TestKey[TestKey["ALT"] = 5] = "ALT";
    TestKey[TestKey["ESCAPE"] = 6] = "ESCAPE";
    TestKey[TestKey["PAGE_UP"] = 7] = "PAGE_UP";
    TestKey[TestKey["PAGE_DOWN"] = 8] = "PAGE_DOWN";
    TestKey[TestKey["END"] = 9] = "END";
    TestKey[TestKey["HOME"] = 10] = "HOME";
    TestKey[TestKey["LEFT_ARROW"] = 11] = "LEFT_ARROW";
    TestKey[TestKey["UP_ARROW"] = 12] = "UP_ARROW";
    TestKey[TestKey["RIGHT_ARROW"] = 13] = "RIGHT_ARROW";
    TestKey[TestKey["DOWN_ARROW"] = 14] = "DOWN_ARROW";
    TestKey[TestKey["INSERT"] = 15] = "INSERT";
    TestKey[TestKey["DELETE"] = 16] = "DELETE";
    TestKey[TestKey["F1"] = 17] = "F1";
    TestKey[TestKey["F2"] = 18] = "F2";
    TestKey[TestKey["F3"] = 19] = "F3";
    TestKey[TestKey["F4"] = 20] = "F4";
    TestKey[TestKey["F5"] = 21] = "F5";
    TestKey[TestKey["F6"] = 22] = "F6";
    TestKey[TestKey["F7"] = 23] = "F7";
    TestKey[TestKey["F8"] = 24] = "F8";
    TestKey[TestKey["F9"] = 25] = "F9";
    TestKey[TestKey["F10"] = 26] = "F10";
    TestKey[TestKey["F11"] = 27] = "F11";
    TestKey[TestKey["F12"] = 28] = "F12";
    TestKey[TestKey["META"] = 29] = "META";
})(TestKey || (TestKey = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Rlc3QtZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFZSCw0RUFBNEU7QUFDNUUsa0dBQWtHO0FBQ2xHLG1HQUFtRztBQUNuRyxrR0FBa0c7QUFDbEcsaUdBQWlHO0FBQ2pHLDhEQUE4RDtBQUM5RCwrRkFBK0Y7QUFDL0YsTUFBTSxDQUFOLElBQVksT0ErQlg7QUEvQkQsV0FBWSxPQUFPO0lBQ2pCLCtDQUFTLENBQUE7SUFDVCxtQ0FBRyxDQUFBO0lBQ0gsdUNBQUssQ0FBQTtJQUNMLHVDQUFLLENBQUE7SUFDTCwyQ0FBTyxDQUFBO0lBQ1AsbUNBQUcsQ0FBQTtJQUNILHlDQUFNLENBQUE7SUFDTiwyQ0FBTyxDQUFBO0lBQ1AsK0NBQVMsQ0FBQTtJQUNULG1DQUFHLENBQUE7SUFDSCxzQ0FBSSxDQUFBO0lBQ0osa0RBQVUsQ0FBQTtJQUNWLDhDQUFRLENBQUE7SUFDUixvREFBVyxDQUFBO0lBQ1gsa0RBQVUsQ0FBQTtJQUNWLDBDQUFNLENBQUE7SUFDTiwwQ0FBTSxDQUFBO0lBQ04sa0NBQUUsQ0FBQTtJQUNGLGtDQUFFLENBQUE7SUFDRixrQ0FBRSxDQUFBO0lBQ0Ysa0NBQUUsQ0FBQTtJQUNGLGtDQUFFLENBQUE7SUFDRixrQ0FBRSxDQUFBO0lBQ0Ysa0NBQUUsQ0FBQTtJQUNGLGtDQUFFLENBQUE7SUFDRixrQ0FBRSxDQUFBO0lBQ0Ysb0NBQUcsQ0FBQTtJQUNILG9DQUFHLENBQUE7SUFDSCxvQ0FBRyxDQUFBO0lBQ0gsc0NBQUksQ0FBQTtBQUNOLENBQUMsRUEvQlcsT0FBTyxLQUFQLE9BQU8sUUErQmxCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RWxlbWVudERpbWVuc2lvbnN9IGZyb20gJy4vZWxlbWVudC1kaW1lbnNpb25zJztcblxuLyoqIE1vZGlmaWVyIGtleXMgdGhhdCBtYXkgYmUgaGVsZCB3aGlsZSB0eXBpbmcuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vZGlmaWVyS2V5cyB7XG4gIGNvbnRyb2w/OiBib29sZWFuO1xuICBhbHQ/OiBib29sZWFuO1xuICBzaGlmdD86IGJvb2xlYW47XG4gIG1ldGE/OiBib29sZWFuO1xufVxuXG4vKiogQW4gZW51bSBvZiBub24tdGV4dCBrZXlzIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCB0aGUgYHNlbmRLZXlzYCBtZXRob2QuICovXG4vLyBOT1RFOiBUaGlzIGlzIGEgc2VwYXJhdGUgZW51bSBmcm9tIGBAYW5ndWxhci9jZGsva2V5Y29kZXNgIGJlY2F1c2Ugd2UgZG9uJ3QgbmVjZXNzYXJpbHkgd2FudCB0b1xuLy8gc3VwcG9ydCBldmVyeSBwb3NzaWJsZSBrZXlDb2RlLiBXZSBhbHNvIGNhbid0IHJlbHkgb24gUHJvdHJhY3RvcidzIGBLZXlgIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhXG4vLyBkZXBlbmRlbmN5IG9uIGFueSBwYXJ0aWN1bGFyIHRlc3RpbmcgZnJhbWV3b3JrIGhlcmUuIEluc3RlYWQgd2UnbGwganVzdCBtYWludGFpbiB0aGlzIHN1cHBvcnRlZFxuLy8gbGlzdCBvZiBrZXlzIGFuZCBsZXQgaW5kaXZpZHVhbCBjb25jcmV0ZSBgSGFybmVzc0Vudmlyb25tZW50YCBjbGFzc2VzIG1hcCB0aGVtIHRvIHdoYXRldmVyIGtleVxuLy8gcmVwcmVzZW50YXRpb24gaXMgdXNlZCBpbiBpdHMgcmVzcGVjdGl2ZSB0ZXN0aW5nIGZyYW1ld29yay5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItY29uc3QtZW51bSBTZWVtcyBsaWtlIHRoaXMgY2F1c2VzIHNvbWUgaXNzdWVzIHdpdGggU3lzdGVtLmpzXG5leHBvcnQgZW51bSBUZXN0S2V5IHtcbiAgQkFDS1NQQUNFLFxuICBUQUIsXG4gIEVOVEVSLFxuICBTSElGVCxcbiAgQ09OVFJPTCxcbiAgQUxULFxuICBFU0NBUEUsXG4gIFBBR0VfVVAsXG4gIFBBR0VfRE9XTixcbiAgRU5ELFxuICBIT01FLFxuICBMRUZUX0FSUk9XLFxuICBVUF9BUlJPVyxcbiAgUklHSFRfQVJST1csXG4gIERPV05fQVJST1csXG4gIElOU0VSVCxcbiAgREVMRVRFLFxuICBGMSxcbiAgRjIsXG4gIEYzLFxuICBGNCxcbiAgRjUsXG4gIEY2LFxuICBGNyxcbiAgRjgsXG4gIEY5LFxuICBGMTAsXG4gIEYxMSxcbiAgRjEyLFxuICBNRVRBXG59XG5cbi8qKlxuICogVGhpcyBhY3RzIGFzIGEgY29tbW9uIGludGVyZmFjZSBmb3IgRE9NIGVsZW1lbnRzIGFjcm9zcyBib3RoIHVuaXQgYW5kIGUyZSB0ZXN0cy4gSXQgaXMgdGhlXG4gKiBpbnRlcmZhY2UgdGhyb3VnaCB3aGljaCB0aGUgQ29tcG9uZW50SGFybmVzcyBpbnRlcmFjdHMgd2l0aCB0aGUgY29tcG9uZW50J3MgRE9NLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RFbGVtZW50IHtcbiAgLyoqIEJsdXIgdGhlIGVsZW1lbnQuICovXG4gIGJsdXIoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKiogQ2xlYXIgdGhlIGVsZW1lbnQncyBpbnB1dCAoZm9yIGlucHV0IGFuZCB0ZXh0YXJlYSBlbGVtZW50cyBvbmx5KS4gKi9cbiAgY2xlYXIoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQ2xpY2sgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSByZWxhdGl2ZVggQ29vcmRpbmF0ZSB3aXRoaW4gdGhlIGVsZW1lbnQsIGFsb25nIHRoZSBYLWF4aXMgYXQgd2hpY2ggdG8gY2xpY2suXG4gICAqIEBwYXJhbSByZWxhdGl2ZVkgQ29vcmRpbmF0ZSB3aXRoaW4gdGhlIGVsZW1lbnQsIGFsb25nIHRoZSBZLWF4aXMgYXQgd2hpY2ggdG8gY2xpY2suXG4gICAqL1xuICBjbGljayhyZWxhdGl2ZVg/OiBudW1iZXIsIHJlbGF0aXZlWT86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqIEZvY3VzIHRoZSBlbGVtZW50LiAqL1xuICBmb2N1cygpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKiBHZXQgdGhlIGNvbXB1dGVkIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgZm9yIHRoZSBlbGVtZW50LiAqL1xuICBnZXRDc3NWYWx1ZShwcm9wZXJ0eTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xuXG4gIC8qKiBIb3ZlcnMgdGhlIG1vdXNlIG92ZXIgdGhlIGVsZW1lbnQuICovXG4gIGhvdmVyKCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIFNlbmRzIHRoZSBnaXZlbiBzdHJpbmcgdG8gdGhlIGlucHV0IGFzIGEgc2VyaWVzIG9mIGtleSBwcmVzc2VzLiBBbHNvIGZpcmVzIGlucHV0IGV2ZW50c1xuICAgKiBhbmQgYXR0ZW1wdHMgdG8gYWRkIHRoZSBzdHJpbmcgdG8gdGhlIEVsZW1lbnQncyB2YWx1ZS5cbiAgICovXG4gIHNlbmRLZXlzKC4uLmtleXM6IChzdHJpbmcgfCBUZXN0S2V5KVtdKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogU2VuZHMgdGhlIGdpdmVuIHN0cmluZyB0byB0aGUgaW5wdXQgYXMgYSBzZXJpZXMgb2Yga2V5IHByZXNzZXMuIEFsc28gZmlyZXMgaW5wdXQgZXZlbnRzXG4gICAqIGFuZCBhdHRlbXB0cyB0byBhZGQgdGhlIHN0cmluZyB0byB0aGUgRWxlbWVudCdzIHZhbHVlLlxuICAgKi9cbiAgc2VuZEtleXMobW9kaWZpZXJzOiBNb2RpZmllcktleXMsIC4uLmtleXM6IChzdHJpbmcgfCBUZXN0S2V5KVtdKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKiogR2V0cyB0aGUgdGV4dCBmcm9tIHRoZSBlbGVtZW50LiAqL1xuICB0ZXh0KCk6IFByb21pc2U8c3RyaW5nPjtcblxuICAvKiogR2V0cyB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgZnJvbSB0aGUgZWxlbWVudC4gKi9cbiAgZ2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBlbGVtZW50IGhhcyB0aGUgZ2l2ZW4gY2xhc3MuICovXG4gIGhhc0NsYXNzKG5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgLyoqIEdldHMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnQuICovXG4gIGdldERpbWVuc2lvbnMoKTogUHJvbWlzZTxFbGVtZW50RGltZW5zaW9ucz47XG5cbiAgLyoqIEdldHMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgYW4gZWxlbWVudC4gKi9cbiAgZ2V0UHJvcGVydHkobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuXG4gIC8qKiBDaGVja3Mgd2hldGhlciB0aGlzIGVsZW1lbnQgbWF0Y2hlcyB0aGUgZ2l2ZW4gc2VsZWN0b3IuICovXG4gIG1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcblxuICAvKiogQ2hlY2tzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZm9jdXNlZC4gKi9cbiAgaXNGb2N1c2VkKCk6IFByb21pc2U8Ym9vbGVhbj47XG59XG4iXX0=
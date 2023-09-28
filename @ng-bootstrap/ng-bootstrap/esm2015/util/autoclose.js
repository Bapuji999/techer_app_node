import { fromEvent, race } from 'rxjs';
import { delay, filter, map, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { Key } from './key';
import { closest } from './util';
const isContainedIn = (element, array) => array ? array.some(item => item.contains(element)) : false;
const ɵ0 = isContainedIn;
const matchesSelectorIfAny = (element, selector) => !selector || closest(element, selector) != null;
const ɵ1 = matchesSelectorIfAny;
const ɵ2 = () => {
    const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    const isAndroid = () => /Android/.test(navigator.userAgent);
    return typeof navigator !== 'undefined' ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
};
// we have to add a more significant delay to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
const isMobile = (ɵ2)();
// setting 'ngbAutoClose' synchronously on mobile results in immediate popup closing
// when tapping on the triggering element
const wrapAsyncForMobile = fn => isMobile ? () => setTimeout(() => fn(), 100) : fn;
const ɵ3 = wrapAsyncForMobile;
export function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
    // closing on ESC and outside clicks
    if (type) {
        zone.runOutsideAngular(wrapAsyncForMobile(() => {
            const shouldCloseOnClick = (event) => {
                const element = event.target;
                if (event.button === 2 || isContainedIn(element, ignoreElements)) {
                    return false;
                }
                if (type === 'inside') {
                    return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
                }
                else if (type === 'outside') {
                    return !isContainedIn(element, insideElements);
                }
                else /* if (type === true) */ {
                    return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
                }
            };
            const escapes$ = fromEvent(document, 'keydown')
                .pipe(takeUntil(closed$), 
            // tslint:disable-next-line:deprecation
            filter(e => e.which === Key.Escape), tap(e => e.preventDefault()));
            // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown',
            // because on 'mouseup' DOM nodes might be detached
            const mouseDowns$ = fromEvent(document, 'mousedown').pipe(map(shouldCloseOnClick), takeUntil(closed$));
            const closeableClicks$ = fromEvent(document, 'mouseup')
                .pipe(withLatestFrom(mouseDowns$), filter(([_, shouldClose]) => shouldClose), delay(0), takeUntil(closed$));
            race([escapes$, closeableClicks$]).subscribe(() => zone.run(close));
        }));
    }
}
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2Nsb3NlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvIiwic291cmNlcyI6WyJ1dGlsL2F1dG9jbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFjLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRixPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFL0IsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFvQixFQUFFLEtBQXFCLEVBQUUsRUFBRSxDQUNsRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFL0QsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE9BQW9CLEVBQUUsUUFBaUIsRUFBRSxFQUFFLENBQ3JFLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDOztXQUlsQyxHQUFHLEVBQUU7SUFDckIsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDNUQsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEcsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFF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QyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNMO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Tmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCByYWNlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVsYXksIGZpbHRlciwgbWFwLCB0YWtlVW50aWwsIHRhcCwgd2l0aExhdGVzdEZyb219IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7S2V5fSBmcm9tICcuL2tleSc7XG5pbXBvcnQge2Nsb3Nlc3R9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGlzQ29udGFpbmVkSW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFycmF5PzogSFRNTEVsZW1lbnRbXSkgPT5cbiAgICBhcnJheSA/IGFycmF5LnNvbWUoaXRlbSA9PiBpdGVtLmNvbnRhaW5zKGVsZW1lbnQpKSA6IGZhbHNlO1xuXG5jb25zdCBtYXRjaGVzU2VsZWN0b3JJZkFueSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I/OiBzdHJpbmcpID0+XG4gICAgIXNlbGVjdG9yIHx8IGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpICE9IG51bGw7XG5cbi8vIHdlIGhhdmUgdG8gYWRkIGEgbW9yZSBzaWduaWZpY2FudCBkZWxheSB0byBhdm9pZCByZS1vcGVuaW5nIHdoZW4gaGFuZGxpbmcgKGNsaWNrKSBvbiBhIHRvZ2dsaW5nIGVsZW1lbnRcbi8vIFRPRE86IHVzZSBwcm9wZXIgQW5ndWxhciBwbGF0Zm9ybSBkZXRlY3Rpb24gd2hlbiBOZ2JBdXRvQ2xvc2UgYmVjb21lcyBhIHNlcnZpY2UgYW5kIHdlIGNhbiBpbmplY3QgUExBVEZPUk1fSURcbmNvbnN0IGlzTW9iaWxlID0gKCgpID0+IHtcbiAgY29uc3QgaXNJT1MgPSAoKSA9PiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fFxuICAgICAgKC9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDIpO1xuICBjb25zdCBpc0FuZHJvaWQgPSAoKSA9PiAvQW5kcm9pZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICByZXR1cm4gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgPyAhIW5hdmlnYXRvci51c2VyQWdlbnQgJiYgKGlzSU9TKCkgfHwgaXNBbmRyb2lkKCkpIDogZmFsc2U7XG59KSgpO1xuXG4vLyBzZXR0aW5nICduZ2JBdXRvQ2xvc2UnIHN5bmNocm9ub3VzbHkgb24gbW9iaWxlIHJlc3VsdHMgaW4gaW1tZWRpYXRlIHBvcHVwIGNsb3Npbmdcbi8vIHdoZW4gdGFwcGluZyBvbiB0aGUgdHJpZ2dlcmluZyBlbGVtZW50XG5jb25zdCB3cmFwQXN5bmNGb3JNb2JpbGUgPSBmbiA9PiBpc01vYmlsZSA/ICgpID0+IHNldFRpbWVvdXQoKCkgPT4gZm4oKSwgMTAwKSA6IGZuO1xuXG5leHBvcnQgZnVuY3Rpb24gbmdiQXV0b0Nsb3NlKFxuICAgIHpvbmU6IE5nWm9uZSwgZG9jdW1lbnQ6IGFueSwgdHlwZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnLCBjbG9zZTogKCkgPT4gdm9pZCwgY2xvc2VkJDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIGluc2lkZUVsZW1lbnRzOiBIVE1MRWxlbWVudFtdLCBpZ25vcmVFbGVtZW50cz86IEhUTUxFbGVtZW50W10sIGluc2lkZVNlbGVjdG9yPzogc3RyaW5nKSB7XG4gIC8vIGNsb3Npbmcgb24gRVNDIGFuZCBvdXRzaWRlIGNsaWNrc1xuICBpZiAodHlwZSkge1xuICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIod3JhcEFzeW5jRm9yTW9iaWxlKCgpID0+IHtcblxuICAgICAgY29uc3Qgc2hvdWxkQ2xvc2VPbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIgfHwgaXNDb250YWluZWRJbihlbGVtZW50LCBpZ25vcmVFbGVtZW50cykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdpbnNpZGUnKSB7XG4gICAgICAgICAgcmV0dXJuIGlzQ29udGFpbmVkSW4oZWxlbWVudCwgaW5zaWRlRWxlbWVudHMpICYmIG1hdGNoZXNTZWxlY3RvcklmQW55KGVsZW1lbnQsIGluc2lkZVNlbGVjdG9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnb3V0c2lkZScpIHtcbiAgICAgICAgICByZXR1cm4gIWlzQ29udGFpbmVkSW4oZWxlbWVudCwgaW5zaWRlRWxlbWVudHMpO1xuICAgICAgICB9IGVsc2UgLyogaWYgKHR5cGUgPT09IHRydWUpICovIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlc1NlbGVjdG9ySWZBbnkoZWxlbWVudCwgaW5zaWRlU2VsZWN0b3IpIHx8ICFpc0NvbnRhaW5lZEluKGVsZW1lbnQsIGluc2lkZUVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgZXNjYXBlcyQgPSBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4oZG9jdW1lbnQsICdrZXlkb3duJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VVbnRpbChjbG9zZWQkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoZSA9PiBlLndoaWNoID09PSBLZXkuRXNjYXBlKSwgdGFwKGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKSk7XG5cblxuICAgICAgLy8gd2UgaGF2ZSB0byBwcmUtY2FsY3VsYXRlICdzaG91bGRDbG9zZU9uQ2xpY2snIG9uICdtb3VzZWRvd24nLFxuICAgICAgLy8gYmVjYXVzZSBvbiAnbW91c2V1cCcgRE9NIG5vZGVzIG1pZ2h0IGJlIGRldGFjaGVkXG4gICAgICBjb25zdCBtb3VzZURvd25zJCA9XG4gICAgICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGRvY3VtZW50LCAnbW91c2Vkb3duJykucGlwZShtYXAoc2hvdWxkQ2xvc2VPbkNsaWNrKSwgdGFrZVVudGlsKGNsb3NlZCQpKTtcblxuICAgICAgY29uc3QgY2xvc2VhYmxlQ2xpY2tzJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ21vdXNldXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKG1vdXNlRG93bnMkKSwgZmlsdGVyKChbXywgc2hvdWxkQ2xvc2VdKSA9PiBzaG91bGRDbG9zZSksIGRlbGF5KDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZVVudGlsKGNsb3NlZCQpKSBhcyBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xuXG5cbiAgICAgIHJhY2U8RXZlbnQ+KFtlc2NhcGVzJCwgY2xvc2VhYmxlQ2xpY2tzJF0pLnN1YnNjcmliZSgoKSA9PiB6b25lLnJ1bihjbG9zZSkpO1xuICAgIH0pKTtcbiAgfVxufVxuIl19
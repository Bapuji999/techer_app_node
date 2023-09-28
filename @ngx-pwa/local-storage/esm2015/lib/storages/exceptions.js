/**
 * Exception message when a value is not valid against the JSON schema
 */
export const VALIDATION_ERROR = `Data stored is not valid against the provided JSON schema.
Check your JSON schema, otherwise it means data has been corrupted.`;
/**
 * Exception raised when a value is not valid against the JSON schema
 */
export class ValidationError extends Error {
    constructor() {
        super(...arguments);
        this.message = VALIDATION_ERROR;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtcHdhL2xvY2FsLXN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc3RvcmFnZXMvZXhjZXB0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO29FQUNvQyxDQUFDO0FBRXJFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsS0FBSztJQUExQzs7UUFDRSxZQUFPLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0IsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFeGNlcHRpb24gbWVzc2FnZSB3aGVuIGEgdmFsdWUgaXMgbm90IHZhbGlkIGFnYWluc3QgdGhlIEpTT04gc2NoZW1hXG4gKi9cbmV4cG9ydCBjb25zdCBWQUxJREFUSU9OX0VSUk9SID0gYERhdGEgc3RvcmVkIGlzIG5vdCB2YWxpZCBhZ2FpbnN0IHRoZSBwcm92aWRlZCBKU09OIHNjaGVtYS5cbkNoZWNrIHlvdXIgSlNPTiBzY2hlbWEsIG90aGVyd2lzZSBpdCBtZWFucyBkYXRhIGhhcyBiZWVuIGNvcnJ1cHRlZC5gO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiByYWlzZWQgd2hlbiBhIHZhbHVlIGlzIG5vdCB2YWxpZCBhZ2FpbnN0IHRoZSBKU09OIHNjaGVtYVxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBtZXNzYWdlID0gVkFMSURBVElPTl9FUlJPUjtcbn1cbiJdfQ==
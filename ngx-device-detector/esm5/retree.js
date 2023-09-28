/**
 * Created by ahsanayaz on 08/11/2016.
 */
var ReTree = /** @class */ (function () {
    function ReTree() {
    }
    ReTree.prototype.test = function (string, regex) {
        var self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.test(string);
        }
        else if (regex && Array.isArray(regex.and)) {
            return regex.and.every(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && Array.isArray(regex.or)) {
            return regex.or.some(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && regex.not) {
            return !self.test(string, regex.not);
        }
        else {
            return false;
        }
    };
    ReTree.prototype.exec = function (string, regex) {
        var self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.exec(string);
        }
        else if (regex && Array.isArray(regex)) {
            return regex.reduce(function (res, item) {
                return (!!res) ? res : self.exec(string, item);
            }, null);
        }
        else {
            return null;
        }
    };
    return ReTree;
}());
export { ReTree };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRldmljZS1kZXRlY3Rvci8iLCJzb3VyY2VzIjpbInJldHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVIO0lBRUk7SUFFQSxDQUFDO0lBRU0scUJBQUksR0FBWCxVQUFZLE1BQWMsRUFBRyxLQUFVO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQVM7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFTO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVNLHFCQUFJLEdBQVgsVUFBWSxNQUFjLEVBQUUsS0FBVTtRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBUSxFQUFFLElBQVM7Z0JBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgYWhzYW5heWF6IG9uIDA4LzExLzIwMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFJlVHJlZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyB0ZXN0KHN0cmluZzogc3RyaW5nICwgcmVnZXg6IGFueSk6IGFueSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiByZWdleCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVnZXggJiYgQXJyYXkuaXNBcnJheShyZWdleC5hbmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXguYW5kLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50ZXN0KHN0cmluZywgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWdleCAmJiBBcnJheS5pc0FycmF5KHJlZ2V4Lm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2V4Lm9yLnNvbWUoZnVuY3Rpb24gKGl0ZW06IGFueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRlc3Qoc3RyaW5nLCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlZ2V4ICYmIHJlZ2V4Lm5vdCkge1xuICAgICAgICAgICAgcmV0dXJuICFzZWxmLnRlc3Qoc3RyaW5nLCByZWdleC5ub3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGV4ZWMoc3RyaW5nOiBzdHJpbmcsIHJlZ2V4OiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2YgcmVnZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAocmVnZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXguZXhlYyhzdHJpbmcpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlZ2V4ICYmIEFycmF5LmlzQXJyYXkocmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVnZXgucmVkdWNlKGZ1bmN0aW9uIChyZXM6IGFueSwgaXRlbTogYW55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICghIXJlcykgPyByZXMgOiBzZWxmLmV4ZWMoc3RyaW5nLCBpdGVtKTtcbiAgICAgICAgICAgIH0sIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
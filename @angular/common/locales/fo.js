/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/fo", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'fo',
        [['AM', 'PM'], u, u],
        u,
        [
            ['S', 'M', 'T', 'M', 'H', 'F', 'L'],
            ['sun.', 'mán.', 'týs.', 'mik.', 'hós.', 'frí.', 'ley.'],
            [
                'sunnudagur', 'mánadagur', 'týsdagur', 'mikudagur', 'hósdagur', 'fríggjadagur',
                'leygardagur'
            ],
            ['su.', 'má.', 'tý.', 'mi.', 'hó.', 'fr.', 'le.']
        ],
        [
            ['S', 'M', 'T', 'M', 'H', 'F', 'L'], ['sun', 'mán', 'týs', 'mik', 'hós', 'frí', 'ley'],
            [
                'sunnudagur', 'mánadagur', 'týsdagur', 'mikudagur', 'hósdagur', 'fríggjadagur',
                'leygardagur'
            ],
            ['su', 'má', 'tý', 'mi', 'hó', 'fr', 'le']
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['jan.', 'feb.', 'mar.', 'apr.', 'mai', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
            [
                'januar', 'februar', 'mars', 'apríl', 'mai', 'juni', 'juli', 'august', 'september',
                'oktober', 'november', 'desember'
            ]
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
            [
                'januar', 'februar', 'mars', 'apríl', 'mai', 'juni', 'juli', 'august', 'september',
                'oktober', 'november', 'desember'
            ]
        ],
        [['fKr', 'eKr'], ['f.Kr.', 'e.Kr.'], ['fyri Krist', 'eftir Krist']],
        1,
        [6, 0],
        ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, '{1} \'kl\'. {0}', u],
        [',', '.', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'DKK',
        'kr',
        'donsk króna',
        { 'DKK': ['kr'], 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNuQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUN4RDtnQkFDRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWM7Z0JBQzlFLGFBQWE7YUFDZDtZQUNELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ2xEO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RGO2dCQUNFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYztnQkFDOUUsYUFBYTthQUNkO1lBQ0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUMvRjtnQkFDRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVc7Z0JBQ2xGLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVTthQUNsQztTQUNGO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXO2dCQUNsRixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7YUFDbEM7U0FDRjtRQUNELENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUM7UUFDdkQsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7UUFDcEQsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBQzdDLEtBQUs7UUFDTCxJQUFJO1FBQ0osYUFBYTtRQUNiLEVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBQztRQUN6RCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobiA9PT0gMSkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdmbycsXG4gIFtbJ0FNJywgJ1BNJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydTJywgJ00nLCAnVCcsICdNJywgJ0gnLCAnRicsICdMJ10sXG4gICAgWydzdW4uJywgJ23DoW4uJywgJ3TDvXMuJywgJ21pay4nLCAnaMOzcy4nLCAnZnLDrS4nLCAnbGV5LiddLFxuICAgIFtcbiAgICAgICdzdW5udWRhZ3VyJywgJ23DoW5hZGFndXInLCAndMO9c2RhZ3VyJywgJ21pa3VkYWd1cicsICdow7NzZGFndXInLCAnZnLDrWdnamFkYWd1cicsXG4gICAgICAnbGV5Z2FyZGFndXInXG4gICAgXSxcbiAgICBbJ3N1LicsICdtw6EuJywgJ3TDvS4nLCAnbWkuJywgJ2jDsy4nLCAnZnIuJywgJ2xlLiddXG4gIF0sXG4gIFtcbiAgICBbJ1MnLCAnTScsICdUJywgJ00nLCAnSCcsICdGJywgJ0wnXSwgWydzdW4nLCAnbcOhbicsICd0w71zJywgJ21paycsICdow7NzJywgJ2Zyw60nLCAnbGV5J10sXG4gICAgW1xuICAgICAgJ3N1bm51ZGFndXInLCAnbcOhbmFkYWd1cicsICd0w71zZGFndXInLCAnbWlrdWRhZ3VyJywgJ2jDs3NkYWd1cicsICdmcsOtZ2dqYWRhZ3VyJyxcbiAgICAgICdsZXlnYXJkYWd1cidcbiAgICBdLFxuICAgIFsnc3UnLCAnbcOhJywgJ3TDvScsICdtaScsICdow7MnLCAnZnInLCAnbGUnXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFsnamFuLicsICdmZWIuJywgJ21hci4nLCAnYXByLicsICdtYWknLCAnanVuLicsICdqdWwuJywgJ2F1Zy4nLCAnc2VwLicsICdva3QuJywgJ25vdi4nLCAnZGVzLiddLFxuICAgIFtcbiAgICAgICdqYW51YXInLCAnZmVicnVhcicsICdtYXJzJywgJ2FwcsOtbCcsICdtYWknLCAnanVuaScsICdqdWxpJywgJ2F1Z3VzdCcsICdzZXB0ZW1iZXInLFxuICAgICAgJ29rdG9iZXInLCAnbm92ZW1iZXInLCAnZGVzZW1iZXInXG4gICAgXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ21haScsICdqdW4nLCAnanVsJywgJ2F1ZycsICdzZXAnLCAnb2t0JywgJ25vdicsICdkZXMnXSxcbiAgICBbXG4gICAgICAnamFudWFyJywgJ2ZlYnJ1YXInLCAnbWFycycsICdhcHLDrWwnLCAnbWFpJywgJ2p1bmknLCAnanVsaScsICdhdWd1c3QnLCAnc2VwdGVtYmVyJyxcbiAgICAgICdva3RvYmVyJywgJ25vdmVtYmVyJywgJ2Rlc2VtYmVyJ1xuICAgIF1cbiAgXSxcbiAgW1snZktyJywgJ2VLciddLCBbJ2YuS3IuJywgJ2UuS3IuJ10sIFsnZnlyaSBLcmlzdCcsICdlZnRpciBLcmlzdCddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2RkLk1NLnl5JywgJ2RkLk1NLnknLCAnZC4gTU1NTSB5JywgJ0VFRUUsIGQuIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSwgezB9JywgdSwgJ3sxfSBcXCdrbFxcJy4gezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJ+KIkicsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnREtLJyxcbiAgJ2tyJyxcbiAgJ2RvbnNrIGtyw7NuYScsXG4gIHsnREtLJzogWydrciddLCAnSlBZJzogWydKUMKlJywgJ8KlJ10sICdVU0QnOiBbJ1VTJCcsICckJ119LFxuICBwbHVyYWxcbl07XG4iXX0=
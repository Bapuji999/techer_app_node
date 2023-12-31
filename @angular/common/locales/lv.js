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
        define("@angular/common/locales/lv", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
            v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
            return 0;
        if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
            !(v === 2) && f % 10 === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'lv',
        [['priekšp.', 'pēcp.'], u, ['priekšpusdienā', 'pēcpusdienā']],
        [['priekšp.', 'pēcpusd.'], u, ['priekšpusdiena', 'pēcpusdiena']],
        [
            ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
            ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
            ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena'],
            ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se']
        ],
        [
            ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
            ['Svētd.', 'Pirmd.', 'Otrd.', 'Trešd.', 'Ceturtd.', 'Piektd.', 'Sestd.'],
            ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena'],
            ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se']
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
                'janv.', 'febr.', 'marts', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.',
                'dec.'
            ],
            [
                'janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts',
                'septembris', 'oktobris', 'novembris', 'decembris'
            ]
        ],
        u,
        [['p.m.ē.', 'm.ē.'], u, ['pirms mūsu ēras', 'mūsu ērā']],
        1,
        [6, 0],
        ['dd.MM.yy', 'y. \'gada\' d. MMM', 'y. \'gada\' d. MMMM', 'EEEE, y. \'gada\' d. MMMM'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NS', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'eiro',
        { 'AUD': ['AU$', '$'], 'LVL': ['Ls'], 'THB': ['฿'], 'TWD': ['NT$'] },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9sdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUNoRCxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFO1lBQ2pGLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFDOUUsT0FBTyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FB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QUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7UUFDN0QsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDNUMsS0FBSztRQUNMLEdBQUc7UUFDSCxNQUFNO1FBQ04sRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDbEUsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGgsXG4gICAgICBmID0gcGFyc2VJbnQobi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuICBpZiAobiAlIDEwID09PSAwIHx8IG4gJSAxMDAgPT09IE1hdGguZmxvb3IobiAlIDEwMCkgJiYgbiAlIDEwMCA+PSAxMSAmJiBuICUgMTAwIDw9IDE5IHx8XG4gICAgICB2ID09PSAyICYmIGYgJSAxMDAgPT09IE1hdGguZmxvb3IoZiAlIDEwMCkgJiYgZiAlIDEwMCA+PSAxMSAmJiBmICUgMTAwIDw9IDE5KVxuICAgIHJldHVybiAwO1xuICBpZiAobiAlIDEwID09PSAxICYmICEobiAlIDEwMCA9PT0gMTEpIHx8IHYgPT09IDIgJiYgZiAlIDEwID09PSAxICYmICEoZiAlIDEwMCA9PT0gMTEpIHx8XG4gICAgICAhKHYgPT09IDIpICYmIGYgJSAxMCA9PT0gMSlcbiAgICByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2x2JyxcbiAgW1sncHJpZWvFoXAuJywgJ3DEk2NwLiddLCB1LCBbJ3ByaWVrxaFwdXNkaWVuxIEnLCAncMSTY3B1c2RpZW7EgSddXSxcbiAgW1sncHJpZWvFoXAuJywgJ3DEk2NwdXNkLiddLCB1LCBbJ3ByaWVrxaFwdXNkaWVuYScsICdwxJNjcHVzZGllbmEnXV0sXG4gIFtcbiAgICBbJ1MnLCAnUCcsICdPJywgJ1QnLCAnQycsICdQJywgJ1MnXSxcbiAgICBbJ3N2xJN0ZC4nLCAncGlybWQuJywgJ290cmQuJywgJ3RyZcWhZC4nLCAnY2V0dXJ0ZC4nLCAncGlla3RkLicsICdzZXN0ZC4nXSxcbiAgICBbJ3N2xJN0ZGllbmEnLCAncGlybWRpZW5hJywgJ290cmRpZW5hJywgJ3RyZcWhZGllbmEnLCAnY2V0dXJ0ZGllbmEnLCAncGlla3RkaWVuYScsICdzZXN0ZGllbmEnXSxcbiAgICBbJ1N2JywgJ1ByJywgJ090JywgJ1RyJywgJ0NlJywgJ1BrJywgJ1NlJ11cbiAgXSxcbiAgW1xuICAgIFsnUycsICdQJywgJ08nLCAnVCcsICdDJywgJ1AnLCAnUyddLFxuICAgIFsnU3bEk3RkLicsICdQaXJtZC4nLCAnT3RyZC4nLCAnVHJlxaFkLicsICdDZXR1cnRkLicsICdQaWVrdGQuJywgJ1Nlc3RkLiddLFxuICAgIFsnU3bEk3RkaWVuYScsICdQaXJtZGllbmEnLCAnT3RyZGllbmEnLCAnVHJlxaFkaWVuYScsICdDZXR1cnRkaWVuYScsICdQaWVrdGRpZW5hJywgJ1Nlc3RkaWVuYSddLFxuICAgIFsnU3YnLCAnUHInLCAnT3QnLCAnVHInLCAnQ2UnLCAnUGsnLCAnU2UnXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFtcbiAgICAgICdqYW52LicsICdmZWJyLicsICdtYXJ0cycsICdhcHIuJywgJ21haWpzJywgJ2rFq24uJywgJ2rFq2wuJywgJ2F1Zy4nLCAnc2VwdC4nLCAnb2t0LicsICdub3YuJyxcbiAgICAgICdkZWMuJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ2phbnbEgXJpcycsICdmZWJydcSBcmlzJywgJ21hcnRzJywgJ2FwcsSrbGlzJywgJ21haWpzJywgJ2rFq25panMnLCAnasWrbGlqcycsICdhdWd1c3RzJyxcbiAgICAgICdzZXB0ZW1icmlzJywgJ29rdG9icmlzJywgJ25vdmVtYnJpcycsICdkZWNlbWJyaXMnXG4gICAgXVxuICBdLFxuICB1LFxuICBbWydwLm0uxJMuJywgJ20uxJMuJ10sIHUsIFsncGlybXMgbcWrc3UgxJNyYXMnLCAnbcWrc3UgxJNyxIEnXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC5NTS55eScsICd5LiBcXCdnYWRhXFwnIGQuIE1NTScsICd5LiBcXCdnYWRhXFwnIGQuIE1NTU0nLCAnRUVFRSwgeS4gXFwnZ2FkYVxcJyBkLiBNTU1NJ10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sXG4gIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTlMnLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnRVVSJyxcbiAgJ+KCrCcsXG4gICdlaXJvJyxcbiAgeydBVUQnOiBbJ0FVJCcsICckJ10sICdMVkwnOiBbJ0xzJ10sICdUSEInOiBbJ+C4vyddLCAnVFdEJzogWydOVCQnXX0sXG4gIHBsdXJhbFxuXTtcbiJdfQ==
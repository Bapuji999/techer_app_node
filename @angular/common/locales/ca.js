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
        define("@angular/common/locales/ca", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'ca',
        [['a. m.', 'p. m.'], u, u],
        u,
        [
            ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'], ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'],
            ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
            ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.']
        ],
        u,
        [
            ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
            [
                'de gen.', 'de febr.', 'de març', 'd’abr.', 'de maig', 'de juny', 'de jul.', 'd’ag.',
                'de set.', 'd’oct.', 'de nov.', 'de des.'
            ],
            [
                'de gener', 'de febrer', 'de març', 'd’abril', 'de maig', 'de juny', 'de juliol',
                'd’agost', 'de setembre', 'd’octubre', 'de novembre', 'de desembre'
            ]
        ],
        [
            ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
            [
                'gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.',
                'des.'
            ],
            [
                'gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre',
                'novembre', 'desembre'
            ]
        ],
        [['aC', 'dC'], u, ['abans de Crist', 'després de Crist']],
        1,
        [6, 0],
        ['d/M/yy', 'd MMM y', 'd MMMM \'de\' y', 'EEEE, d MMMM \'de\' y'],
        ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', '{1} \'a\' \'les\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        {
            'AUD': ['AU$', '$'],
            'BRL': [u, 'R$'],
            'CAD': [u, '$'],
            'CNY': [u, '¥'],
            'ESP': ['₧'],
            'MXN': [u, '$'],
            'THB': ['฿'],
            'USD': [u, '$'],
            'VEF': [u, 'Bs F'],
            'XCD': [u, '$'],
            'XXX': []
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2EuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9jYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUM3RixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxF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biAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdjYScsXG4gIFtbJ2EuwqBtLicsICdwLsKgbS4nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ2RnJywgJ2RsJywgJ2R0JywgJ2RjJywgJ2RqJywgJ2R2JywgJ2RzJ10sIFsnZGcuJywgJ2RsLicsICdkdC4nLCAnZGMuJywgJ2RqLicsICdkdi4nLCAnZHMuJ10sXG4gICAgWydkaXVtZW5nZScsICdkaWxsdW5zJywgJ2RpbWFydHMnLCAnZGltZWNyZXMnLCAnZGlqb3VzJywgJ2RpdmVuZHJlcycsICdkaXNzYWJ0ZSddLFxuICAgIFsnZGcuJywgJ2RsLicsICdkdC4nLCAnZGMuJywgJ2RqLicsICdkdi4nLCAnZHMuJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnR04nLCAnRkInLCAnTcOHJywgJ0FCJywgJ01HJywgJ0pOJywgJ0pMJywgJ0FHJywgJ1NUJywgJ09DJywgJ05WJywgJ0RTJ10sXG4gICAgW1xuICAgICAgJ2RlIGdlbi4nLCAnZGUgZmVici4nLCAnZGUgbWFyw6cnLCAnZOKAmWFici4nLCAnZGUgbWFpZycsICdkZSBqdW55JywgJ2RlIGp1bC4nLCAnZOKAmWFnLicsXG4gICAgICAnZGUgc2V0LicsICdk4oCZb2N0LicsICdkZSBub3YuJywgJ2RlIGRlcy4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnZGUgZ2VuZXInLCAnZGUgZmVicmVyJywgJ2RlIG1hcsOnJywgJ2TigJlhYnJpbCcsICdkZSBtYWlnJywgJ2RlIGp1bnknLCAnZGUganVsaW9sJyxcbiAgICAgICdk4oCZYWdvc3QnLCAnZGUgc2V0ZW1icmUnLCAnZOKAmW9jdHVicmUnLCAnZGUgbm92ZW1icmUnLCAnZGUgZGVzZW1icmUnXG4gICAgXVxuICBdLFxuICBbXG4gICAgWydHTicsICdGQicsICdNw4cnLCAnQUInLCAnTUcnLCAnSk4nLCAnSkwnLCAnQUcnLCAnU1QnLCAnT0MnLCAnTlYnLCAnRFMnXSxcbiAgICBbXG4gICAgICAnZ2VuLicsICdmZWJyLicsICdtYXLDpycsICdhYnIuJywgJ21haWcnLCAnanVueScsICdqdWwuJywgJ2FnLicsICdzZXQuJywgJ29jdC4nLCAnbm92LicsXG4gICAgICAnZGVzLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdnZW5lcicsICdmZWJyZXInLCAnbWFyw6cnLCAnYWJyaWwnLCAnbWFpZycsICdqdW55JywgJ2p1bGlvbCcsICdhZ29zdCcsICdzZXRlbWJyZScsICdvY3R1YnJlJyxcbiAgICAgICdub3ZlbWJyZScsICdkZXNlbWJyZSdcbiAgICBdXG4gIF0sXG4gIFtbJ2FDJywgJ2RDJ10sIHUsIFsnYWJhbnMgZGUgQ3Jpc3QnLCAnZGVzcHLDqXMgZGUgQ3Jpc3QnXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkL00veXknLCAnZCBNTU0geScsICdkIE1NTU0gXFwnZGVcXCcgeScsICdFRUVFLCBkIE1NTU0gXFwnZGVcXCcgeSddLFxuICBbJ0g6bW0nLCAnSDptbTpzcycsICdIOm1tOnNzIHonLCAnSDptbTpzcyB6enp6J10sXG4gIFsnezF9IHswfScsICd7MX0sIHswfScsICd7MX0gXFwnYVxcJyBcXCdsZXNcXCcgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sXG4gICdFVVInLFxuICAn4oKsJyxcbiAgJ2V1cm8nLFxuICB7XG4gICAgJ0FVRCc6IFsnQVUkJywgJyQnXSxcbiAgICAnQlJMJzogW3UsICdSJCddLFxuICAgICdDQUQnOiBbdSwgJyQnXSxcbiAgICAnQ05ZJzogW3UsICfCpSddLFxuICAgICdFU1AnOiBbJ+KCpyddLFxuICAgICdNWE4nOiBbdSwgJyQnXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVVNEJzogW3UsICckJ10sXG4gICAgJ1ZFRic6IFt1LCAnQnMgRiddLFxuICAgICdYQ0QnOiBbdSwgJyQnXSxcbiAgICAnWFhYJzogW11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19
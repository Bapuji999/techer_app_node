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
        define("@angular/common/locales/fi", ["require", "exports"], factory);
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
        'fi',
        [['ap.', 'ip.'], u, u],
        u,
        [
            ['S', 'M', 'T', 'K', 'T', 'P', 'L'], ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
            [
                'sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina',
                'lauantaina'
            ],
            ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
        ],
        [
            ['S', 'M', 'T', 'K', 'T', 'P', 'L'], ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
            ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
            ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
        ],
        [
            ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
            [
                'tammik.', 'helmik.', 'maalisk.', 'huhtik.', 'toukok.', 'kesäk.', 'heinäk.', 'elok.',
                'syysk.', 'lokak.', 'marrask.', 'jouluk.'
            ],
            [
                'tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta',
                'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'
            ]
        ],
        [
            ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
            [
                'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka',
                'marras', 'joulu'
            ],
            [
                'tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu',
                'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'
            ]
        ],
        [
            ['eKr', 'jKr'], ['eKr.', 'jKr.'],
            ['ennen Kristuksen syntymää', 'jälkeen Kristuksen syntymän']
        ],
        1,
        [6, 0],
        ['d.M.y', u, 'd. MMMM y', 'cccc d. MMMM y'],
        ['H.mm', 'H.mm.ss', 'H.mm.ss z', 'H.mm.ss zzzz'],
        ['{1} {0}', '{1} \'klo\' {0}', u, u],
        [',', ' ', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'epäluku', '.'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        {
            'AOA': [],
            'ARS': [],
            'AUD': [],
            'BAM': [],
            'BBD': [],
            'BDT': [],
            'BMD': [],
            'BND': [],
            'BOB': [],
            'BRL': [],
            'BSD': [],
            'BWP': [],
            'BYN': [],
            'BZD': [],
            'CAD': [],
            'CLP': [],
            'CNY': [],
            'COP': [],
            'CRC': [],
            'CUC': [],
            'CUP': [],
            'CZK': [],
            'DKK': [],
            'DOP': [],
            'EGP': [],
            'ESP': [],
            'FIM': ['mk'],
            'FJD': [],
            'FKP': [],
            'GEL': [],
            'GIP': [],
            'GNF': [],
            'GTQ': [],
            'GYD': [],
            'HKD': [],
            'HNL': [],
            'HRK': [],
            'HUF': [],
            'IDR': [],
            'ILS': [],
            'INR': [],
            'ISK': [],
            'JMD': [],
            'KHR': [],
            'KMF': [],
            'KPW': [],
            'KRW': [],
            'KYD': [],
            'KZT': [],
            'LAK': [],
            'LBP': [],
            'LKR': [],
            'LRD': [],
            'LTL': [],
            'LVL': [],
            'MGA': [],
            'MMK': [],
            'MNT': [],
            'MUR': [],
            'MXN': [],
            'MYR': [],
            'NAD': [],
            'NGN': [],
            'NIO': [],
            'NOK': [],
            'NPR': [],
            'NZD': [],
            'PHP': [],
            'PKR': [],
            'PLN': [],
            'PYG': [],
            'RON': [],
            'RUR': [],
            'RWF': [],
            'SBD': [],
            'SEK': [],
            'SGD': [],
            'SHP': [],
            'SRD': [],
            'SSP': [],
            'STN': [u, 'STD'],
            'SYP': [],
            'THB': [],
            'TOP': [],
            'TRY': [],
            'TTD': [],
            'TWD': [],
            'UAH': [],
            'UYU': [],
            'VEF': [],
            'VND': [],
            'XCD': [],
            'XPF': [],
            'XXX': [],
            'ZAR': [],
            'ZMW': []
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9maS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMvRTtnQkFDRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGFBQWE7Z0JBQ3RGLFlBQVk7YUFDYjtZQUNELENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQy9FLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO1lBQ3hGLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVEO2dCQUNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPO2dCQUNwRixRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTO2FBQzFDO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXO2dCQUNsRixZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVk7YUFDaEY7U0FDRjtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNO2dCQUNwRixRQUFRLEVBQUUsT0FBTzthQUNsQjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVU7Z0JBQ2xGLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVO2FBQ3hEO1NBQ0Y7UUFDRDtZQUNFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUNoQyxDQUFDLDJCQUEyQixFQUFFLDZCQUE2QixDQUFDO1NBQzdEO1FBQ0QsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7UUFDM0MsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUM7UUFDaEQsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO1FBQ2xFLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBQzdDLEtBQUs7UUFDTCxHQUFHO1FBQ0gsTUFBTTtRQUNOO1lBQ0UsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUNiLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdmaScsXG4gIFtbJ2FwLicsICdpcC4nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ1MnLCAnTScsICdUJywgJ0snLCAnVCcsICdQJywgJ0wnXSwgWydzdScsICdtYScsICd0aScsICdrZScsICd0bycsICdwZScsICdsYSddLFxuICAgIFtcbiAgICAgICdzdW5udW50YWluYScsICdtYWFuYW50YWluYScsICd0aWlzdGFpbmEnLCAna2Vza2l2aWlra29uYScsICd0b3JzdGFpbmEnLCAncGVyamFudGFpbmEnLFxuICAgICAgJ2xhdWFudGFpbmEnXG4gICAgXSxcbiAgICBbJ3N1JywgJ21hJywgJ3RpJywgJ2tlJywgJ3RvJywgJ3BlJywgJ2xhJ11cbiAgXSxcbiAgW1xuICAgIFsnUycsICdNJywgJ1QnLCAnSycsICdUJywgJ1AnLCAnTCddLCBbJ3N1JywgJ21hJywgJ3RpJywgJ2tlJywgJ3RvJywgJ3BlJywgJ2xhJ10sXG4gICAgWydzdW5udW50YWknLCAnbWFhbmFudGFpJywgJ3RpaXN0YWknLCAna2Vza2l2aWlra28nLCAndG9yc3RhaScsICdwZXJqYW50YWknLCAnbGF1YW50YWknXSxcbiAgICBbJ3N1JywgJ21hJywgJ3RpJywgJ2tlJywgJ3RvJywgJ3BlJywgJ2xhJ11cbiAgXSxcbiAgW1xuICAgIFsnVCcsICdIJywgJ00nLCAnSCcsICdUJywgJ0snLCAnSCcsICdFJywgJ1MnLCAnTCcsICdNJywgJ0onXSxcbiAgICBbXG4gICAgICAndGFtbWlrLicsICdoZWxtaWsuJywgJ21hYWxpc2suJywgJ2h1aHRpay4nLCAndG91a29rLicsICdrZXPDpGsuJywgJ2hlaW7DpGsuJywgJ2Vsb2suJyxcbiAgICAgICdzeXlzay4nLCAnbG9rYWsuJywgJ21hcnJhc2suJywgJ2pvdWx1ay4nXG4gICAgXSxcbiAgICBbXG4gICAgICAndGFtbWlrdXV0YScsICdoZWxtaWt1dXRhJywgJ21hYWxpc2t1dXRhJywgJ2h1aHRpa3V1dGEnLCAndG91a29rdXV0YScsICdrZXPDpGt1dXRhJyxcbiAgICAgICdoZWluw6RrdXV0YScsICdlbG9rdXV0YScsICdzeXlza3V1dGEnLCAnbG9rYWt1dXRhJywgJ21hcnJhc2t1dXRhJywgJ2pvdWx1a3V1dGEnXG4gICAgXVxuICBdLFxuICBbXG4gICAgWydUJywgJ0gnLCAnTScsICdIJywgJ1QnLCAnSycsICdIJywgJ0UnLCAnUycsICdMJywgJ00nLCAnSiddLFxuICAgIFtcbiAgICAgICd0YW1taScsICdoZWxtaScsICdtYWFsaXMnLCAnaHVodGknLCAndG91a28nLCAna2Vzw6QnLCAnaGVpbsOkJywgJ2VsbycsICdzeXlzJywgJ2xva2EnLFxuICAgICAgJ21hcnJhcycsICdqb3VsdSdcbiAgICBdLFxuICAgIFtcbiAgICAgICd0YW1taWt1dScsICdoZWxtaWt1dScsICdtYWFsaXNrdXUnLCAnaHVodGlrdXUnLCAndG91a29rdXUnLCAna2Vzw6RrdXUnLCAnaGVpbsOka3V1JyxcbiAgICAgICdlbG9rdXUnLCAnc3l5c2t1dScsICdsb2tha3V1JywgJ21hcnJhc2t1dScsICdqb3VsdWt1dSdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ2VLcicsICdqS3InXSwgWydlS3IuJywgJ2pLci4nXSxcbiAgICBbJ2VubmVuIEtyaXN0dWtzZW4gc3ludHltw6TDpCcsICdqw6Rsa2VlbiBLcmlzdHVrc2VuIHN5bnR5bcOkbiddXG4gIF0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkLk0ueScsIHUsICdkLiBNTU1NIHknLCAnY2NjYyBkLiBNTU1NIHknXSxcbiAgWydILm1tJywgJ0gubW0uc3MnLCAnSC5tbS5zcyB6JywgJ0gubW0uc3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCAnezF9IFxcJ2tsb1xcJyB7MH0nLCB1LCB1XSxcbiAgWycsJywgJ8KgJywgJzsnLCAnJScsICcrJywgJ+KIkicsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnZXDDpGx1a3UnLCAnLiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMMKgJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sXG4gICdFVVInLFxuICAn4oKsJyxcbiAgJ2V1cm8nLFxuICB7XG4gICAgJ0FPQSc6IFtdLFxuICAgICdBUlMnOiBbXSxcbiAgICAnQVVEJzogW10sXG4gICAgJ0JBTSc6IFtdLFxuICAgICdCQkQnOiBbXSxcbiAgICAnQkRUJzogW10sXG4gICAgJ0JNRCc6IFtdLFxuICAgICdCTkQnOiBbXSxcbiAgICAnQk9CJzogW10sXG4gICAgJ0JSTCc6IFtdLFxuICAgICdCU0QnOiBbXSxcbiAgICAnQldQJzogW10sXG4gICAgJ0JZTic6IFtdLFxuICAgICdCWkQnOiBbXSxcbiAgICAnQ0FEJzogW10sXG4gICAgJ0NMUCc6IFtdLFxuICAgICdDTlknOiBbXSxcbiAgICAnQ09QJzogW10sXG4gICAgJ0NSQyc6IFtdLFxuICAgICdDVUMnOiBbXSxcbiAgICAnQ1VQJzogW10sXG4gICAgJ0NaSyc6IFtdLFxuICAgICdES0snOiBbXSxcbiAgICAnRE9QJzogW10sXG4gICAgJ0VHUCc6IFtdLFxuICAgICdFU1AnOiBbXSxcbiAgICAnRklNJzogWydtayddLFxuICAgICdGSkQnOiBbXSxcbiAgICAnRktQJzogW10sXG4gICAgJ0dFTCc6IFtdLFxuICAgICdHSVAnOiBbXSxcbiAgICAnR05GJzogW10sXG4gICAgJ0dUUSc6IFtdLFxuICAgICdHWUQnOiBbXSxcbiAgICAnSEtEJzogW10sXG4gICAgJ0hOTCc6IFtdLFxuICAgICdIUksnOiBbXSxcbiAgICAnSFVGJzogW10sXG4gICAgJ0lEUic6IFtdLFxuICAgICdJTFMnOiBbXSxcbiAgICAnSU5SJzogW10sXG4gICAgJ0lTSyc6IFtdLFxuICAgICdKTUQnOiBbXSxcbiAgICAnS0hSJzogW10sXG4gICAgJ0tNRic6IFtdLFxuICAgICdLUFcnOiBbXSxcbiAgICAnS1JXJzogW10sXG4gICAgJ0tZRCc6IFtdLFxuICAgICdLWlQnOiBbXSxcbiAgICAnTEFLJzogW10sXG4gICAgJ0xCUCc6IFtdLFxuICAgICdMS1InOiBbXSxcbiAgICAnTFJEJzogW10sXG4gICAgJ0xUTCc6IFtdLFxuICAgICdMVkwnOiBbXSxcbiAgICAnTUdBJzogW10sXG4gICAgJ01NSyc6IFtdLFxuICAgICdNTlQnOiBbXSxcbiAgICAnTVVSJzogW10sXG4gICAgJ01YTic6IFtdLFxuICAgICdNWVInOiBbXSxcbiAgICAnTkFEJzogW10sXG4gICAgJ05HTic6IFtdLFxuICAgICdOSU8nOiBbXSxcbiAgICAnTk9LJzogW10sXG4gICAgJ05QUic6IFtdLFxuICAgICdOWkQnOiBbXSxcbiAgICAnUEhQJzogW10sXG4gICAgJ1BLUic6IFtdLFxuICAgICdQTE4nOiBbXSxcbiAgICAnUFlHJzogW10sXG4gICAgJ1JPTic6IFtdLFxuICAgICdSVVInOiBbXSxcbiAgICAnUldGJzogW10sXG4gICAgJ1NCRCc6IFtdLFxuICAgICdTRUsnOiBbXSxcbiAgICAnU0dEJzogW10sXG4gICAgJ1NIUCc6IFtdLFxuICAgICdTUkQnOiBbXSxcbiAgICAnU1NQJzogW10sXG4gICAgJ1NUTic6IFt1LCAnU1REJ10sXG4gICAgJ1NZUCc6IFtdLFxuICAgICdUSEInOiBbXSxcbiAgICAnVE9QJzogW10sXG4gICAgJ1RSWSc6IFtdLFxuICAgICdUVEQnOiBbXSxcbiAgICAnVFdEJzogW10sXG4gICAgJ1VBSCc6IFtdLFxuICAgICdVWVUnOiBbXSxcbiAgICAnVkVGJzogW10sXG4gICAgJ1ZORCc6IFtdLFxuICAgICdYQ0QnOiBbXSxcbiAgICAnWFBGJzogW10sXG4gICAgJ1hYWCc6IFtdLFxuICAgICdaQVInOiBbXSxcbiAgICAnWk1XJzogW11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19
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
        define("@angular/common/locales/si", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (n === 0 || n === 1 || i === 0 && f === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'si',
        [['පෙ', 'ප'], ['පෙ.ව.', 'ප.ව.'], u],
        [['පෙ.ව.', 'ප.ව.'], u, u],
        [
            ['ඉ', 'ස', 'අ', 'බ', 'බ්\u200dර', 'සි', 'සෙ'],
            [
                'ඉරිදා', 'සඳුදා', 'අඟහ', 'බදාදා',
                'බ්\u200dරහස්', 'සිකු', 'සෙන'
            ],
            [
                'ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා',
                'බ්\u200dරහස්පතින්දා', 'සිකුරාදා',
                'සෙනසුරාදා'
            ],
            [
                'ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්\u200dරහ', 'සිකු',
                'සෙන'
            ]
        ],
        u,
        [
            [
                'ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ',
                'නෙ', 'දෙ'
            ],
            [
                'ජන', 'පෙබ', 'මාර්තු', 'අප්\u200dරේල්', 'මැයි',
                'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ',
                'දෙසැ'
            ],
            [
                'ජනවාරි', 'පෙබරවාරි', 'මාර්තු',
                'අප්\u200dරේල්', 'මැයි', 'ජූනි', 'ජූලි',
                'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්',
                'නොවැම්බර්', 'දෙසැම්බර්'
            ]
        ],
        [
            [
                'ජ', 'පෙ', 'මා', 'අ', 'මැ', 'ජූ', 'ජූ', 'අ', 'සැ', 'ඔ',
                'නෙ', 'දෙ'
            ],
            [
                'ජන', 'පෙබ', 'මාර්', 'අප්\u200dරේල්', 'මැයි',
                'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ',
                'දෙසැ'
            ],
            [
                'ජනවාරි', 'පෙබරවාරි', 'මාර්තු',
                'අප්\u200dරේල්', 'මැයි', 'ජූනි', 'ජූලි',
                'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්',
                'නොවැම්බර්', 'දෙසැම්බර්'
            ]
        ],
        [
            ['ක්\u200dරි.පූ.', 'ක්\u200dරි.ව.'], u,
            [
                'ක්\u200dරිස්තු පූර්ව',
                'ක්\u200dරිස්තු වර්ෂ'
            ]
        ],
        1,
        [6, 0],
        ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
        ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', '.'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#'],
        'LKR',
        'රු.',
        'ශ්\u200dරී ලංකා රුපියල',
        {
            'JPY': ['JP¥', '¥'],
            'LKR': ['රු.'],
            'THB': ['฿'],
            'TWD': ['NT$'],
            'USD': ['US$', '$'],
            'XOF': ['සිෆ්එ']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9zaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QjtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzdDO2dCQUNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU87Z0JBQ2hDLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSzthQUM5QjtZQUNEO2dC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ZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIGYgPSBwYXJzZUludChuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKSwgMTApIHx8IDA7XG4gIGlmIChuID09PSAwIHx8IG4gPT09IDEgfHwgaSA9PT0gMCAmJiBmID09PSAxKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ3NpJyxcbiAgW1sn4La04LeZJywgJ+C2tCddLCBbJ+C2tOC3mS7gt4AuJywgJ+C2tC7gt4AuJ10sIHVdLFxuICBbWyfgtrTgt5ku4LeALicsICfgtrQu4LeALiddLCB1LCB1XSxcbiAgW1xuICAgIFsn4LaJJywgJ+C3gycsICfgtoUnLCAn4La2JywgJ+C2tuC3ilxcdTIwMGTgtrsnLCAn4LeD4LeSJywgJ+C3g+C3mSddLFxuICAgIFtcbiAgICAgICfgtongtrvgt5Lgtq/gt48nLCAn4LeD4Laz4LeU4Lav4LePJywgJ+C2heC2n+C3hCcsICfgtrbgtq/gt4/gtq/gt48nLFxuICAgICAgJ+C2tuC3ilxcdTIwMGTgtrvgt4Tgt4Pgt4onLCAn4LeD4LeS4Laa4LeUJywgJ+C3g+C3meC2sSdcbiAgICBdLFxuICAgIFtcbiAgICAgICfgtongtrvgt5Lgtq/gt48nLCAn4LeD4Laz4LeU4Lav4LePJywgJ+C2heC2n+C3hOC2u+C3lOC3gOC3j+C2r+C3jycsICfgtrbgtq/gt4/gtq/gt48nLFxuICAgICAgJ+C2tuC3ilxcdTIwMGTgtrvgt4Tgt4Pgt4rgtrTgtq3gt5LgtrHgt4rgtq/gt48nLCAn4LeD4LeS4Laa4LeU4La74LeP4Lav4LePJyxcbiAgICAgICfgt4Pgt5ngtrHgt4Pgt5Tgtrvgt4/gtq/gt48nXG4gICAgXSxcbiAgICBbXG4gICAgICAn4LaJ4La74LeSJywgJ+C3g+C2s+C3lCcsICfgtoXgtp8nLCAn4La24Lav4LePJywgJ+C2tuC3ilxcdTIwMGTgtrvgt4QnLCAn4LeD4LeS4Laa4LeUJyxcbiAgICAgICfgt4Pgt5ngtrEnXG4gICAgXVxuICBdLFxuICB1LFxuICBbXG4gICAgW1xuICAgICAgJ+C2oicsICfgtrTgt5knLCAn4La44LePJywgJ+C2hScsICfgtrjgt5AnLCAn4Lai4LeWJywgJ+C2ouC3licsICfgtoUnLCAn4LeD4LeQJywgJ+C2lCcsXG4gICAgICAn4Lax4LeZJywgJ+C2r+C3mSdcbiAgICBdLFxuICAgIFtcbiAgICAgICfgtqLgtrEnLCAn4La04LeZ4La2JywgJ+C2uOC3j+C2u+C3iuC2reC3lCcsICfgtoXgtrTgt4pcXHUyMDBk4La74Lea4La94LeKJywgJ+C2uOC3kOC2uuC3kicsXG4gICAgICAn4Lai4LeW4Lax4LeSJywgJ+C2ouC3luC2veC3kicsICfgtoXgtpzgt50nLCAn4LeD4LeQ4La04LeKJywgJ+C2lOC2muC3iicsICfgtrHgt5zgt4Dgt5AnLFxuICAgICAgJ+C2r+C3meC3g+C3kCdcbiAgICBdLFxuICAgIFtcbiAgICAgICfgtqLgtrHgt4Dgt4/gtrvgt5InLCAn4La04LeZ4La24La74LeA4LeP4La74LeSJywgJ+C2uOC3j+C2u+C3iuC2reC3lCcsXG4gICAgICAn4LaF4La04LeKXFx1MjAwZOC2u+C3muC2veC3iicsICfgtrjgt5Dgtrrgt5InLCAn4Lai4LeW4Lax4LeSJywgJ+C2ouC3luC2veC3kicsXG4gICAgICAn4LaF4Lac4Led4LeD4LeK4Lat4LeUJywgJ+C3g+C3kOC2tOC3iuC2reC3kOC2uOC3iuC2tuC2u+C3iicsICfgtpTgtprgt4rgtq3gt53gtrbgtrvgt4onLFxuICAgICAgJ+C2seC3nOC3gOC3kOC2uOC3iuC2tuC2u+C3iicsICfgtq/gt5ngt4Pgt5Dgtrjgt4rgtrbgtrvgt4onXG4gICAgXVxuICBdLFxuICBbXG4gICAgW1xuICAgICAgJ+C2oicsICfgtrTgt5knLCAn4La44LePJywgJ+C2hScsICfgtrjgt5AnLCAn4Lai4LeWJywgJ+C2ouC3licsICfgtoUnLCAn4LeD4LeQJywgJ+C2lCcsXG4gICAgICAn4Lax4LeZJywgJ+C2r+C3mSdcbiAgICBdLFxuICAgIFtcbiAgICAgICfgtqLgtrEnLCAn4La04LeZ4La2JywgJ+C2uOC3j+C2u+C3iicsICfgtoXgtrTgt4pcXHUyMDBk4La74Lea4La94LeKJywgJ+C2uOC3kOC2uuC3kicsXG4gICAgICAn4Lai4LeW4Lax4LeSJywgJ+C2ouC3luC2veC3kicsICfgtoXgtpzgt50nLCAn4LeD4LeQ4La04LeKJywgJ+C2lOC2muC3iicsICfgtrHgt5zgt4Dgt5AnLFxuICAgICAgJ+C2r+C3meC3g+C3kCdcbiAgICBdLFxuICAgIFtcbiAgICAgICfgtqLgtrHgt4Dgt4/gtrvgt5InLCAn4La04LeZ4La24La74LeA4LeP4La74LeSJywgJ+C2uOC3j+C2u+C3iuC2reC3lCcsXG4gICAgICAn4LaF4La04LeKXFx1MjAwZOC2u+C3muC2veC3iicsICfgtrjgt5Dgtrrgt5InLCAn4Lai4LeW4Lax4LeSJywgJ+C2ouC3luC2veC3kicsXG4gICAgICAn4LaF4Lac4Led4LeD4LeK4Lat4LeUJywgJ+C3g+C3kOC2tOC3iuC2reC3kOC2uOC3iuC2tuC2u+C3iicsICfgtpTgtprgt4rgtq3gt53gtrbgtrvgt4onLFxuICAgICAgJ+C2seC3nOC3gOC3kOC2uOC3iuC2tuC2u+C3iicsICfgtq/gt5ngt4Pgt5Dgtrjgt4rgtrbgtrvgt4onXG4gICAgXVxuICBdLFxuICBbXG4gICAgWyfgtprgt4pcXHUyMDBk4La74LeSLuC2tOC3li4nLCAn4Laa4LeKXFx1MjAwZOC2u+C3ki7gt4AuJ10sIHUsXG4gICAgW1xuICAgICAgJ+C2muC3ilxcdTIwMGTgtrvgt5Lgt4Pgt4rgtq3gt5Qg4La04LeW4La74LeK4LeAJyxcbiAgICAgICfgtprgt4pcXHUyMDBk4La74LeS4LeD4LeK4Lat4LeUIOC3gOC2u+C3iuC3gidcbiAgICBdXG4gIF0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWyd5LU1NLWRkJywgJ3kgTU1NIGQnLCAneSBNTU1NIGQnLCAneSBNTU1NIGQsIEVFRUUnXSxcbiAgWydISC5tbScsICdISC5tbS5zcycsICdISC5tbS5zcyB6JywgJ0hILm1tLnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgdSwgdSwgdV0sXG4gIFsnLicsICcsJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICcuJ10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICfCpCMsIyMwLjAwJywgJyMnXSxcbiAgJ0xLUicsXG4gICfgtrvgt5QuJyxcbiAgJ+C3geC3ilxcdTIwMGTgtrvgt5Mg4La94LaC4Laa4LePIOC2u+C3lOC2tOC3kuC2uuC2vScsXG4gIHtcbiAgICAnSlBZJzogWydKUMKlJywgJ8KlJ10sXG4gICAgJ0xLUic6IFsn4La74LeULiddLFxuICAgICdUSEInOiBbJ+C4vyddLFxuICAgICdUV0QnOiBbJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCcsICckJ10sXG4gICAgJ1hPRic6IFsn4LeD4LeS4LeG4LeK4LaRJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19
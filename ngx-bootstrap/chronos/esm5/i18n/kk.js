/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// ! moment.js locale configuration
// ! locale : Kazakh [kk]
// ! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
/** @type {?} */
var suffixes = {
    0: '-ші',
    1: '-ші',
    2: '-ші',
    3: '-ші',
    4: '-ші',
    5: '-ші',
    6: '-шы',
    7: '-ші',
    8: '-ші',
    9: '-шы',
    10: '-шы',
    20: '-шы',
    30: '-шы',
    40: '-шы',
    50: '-ші',
    60: '-шы',
    70: '-ші',
    80: '-ші',
    90: '-шы',
    100: '-ші'
};
/** @type {?} */
export var kkLocale = {
    abbr: 'kk',
    months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
    weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Бүгін сағат] LT',
        nextDay: '[Ертең сағат] LT',
        nextWeek: 'dddd [сағат] LT',
        lastDay: '[Кеше сағат] LT',
        lastWeek: '[Өткен аптаның] dddd [сағат] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s ішінде',
        past: '%s бұрын',
        s: 'бірнеше секунд',
        ss: '%d секунд',
        m: 'бір минут',
        mm: '%d минут',
        h: 'бір сағат',
        hh: '%d сағат',
        d: 'бір күн',
        dd: '%d күн',
        M: 'бір ай',
        MM: '%d ай',
        y: 'бір жыл',
        yy: '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var a = _num % 10;
        /** @type {?} */
        var b = _num >= 100 ? 100 : null;
        return _num + (suffixes[_num] || suffixes[a] || suffixes[b]);
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2trLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBTU0sUUFBUSxHQUFHO0lBQ2YsQ0FBQyxFQUFFLEtBQUs7SUFDUixDQUFDLEVBQUUsS0FBSztJQUNSLENBQUMsRUFBRSxLQUFLO0lBQ1IsQ0FBQyxFQUFFLEtBQUs7SUFDUixDQUFDLEVBQUUsS0FBSztJQUNSLENBQUMsRUFBRSxLQUFLO0lBQ1IsQ0FBQyxFQUFFLEtBQUs7SUFDUixDQUFDLEVBQUUsS0FBSztJQUNSLENBQUMsRUFBRSxLQUFLO0lBQ1IsQ0FBQyxFQUFFLEtBQUs7SUFDUixFQUFFLEVBQUUsS0FBSztJQUNULEVBQUUsRUFBRSxLQUFLO0lBQ1QsRUFBRSxFQUFFLEtBQUs7SUFDVCxFQUFFLEVBQUUsS0FBSztJQUNULEVBQUUsRUFBRSxLQUFLO0lBQ1QsRUFBRSxFQUFFLEtBQUs7SUFDVCxFQUFFLEVBQUUsS0FBSztJQUNULEVBQUUsRUFBRSxLQUFLO0lBQ1QsRUFBRSxFQUFFLEtBQUs7SUFDVCxHQUFHLEVBQUUsS0FBSztDQUNYOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsb0ZBQW9GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RyxXQUFXLEVBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUcseURBQXlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRSxhQUFhLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7UUFDekIsSUFBSSxFQUFHLHlCQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxrQkFBa0I7UUFDNUIsT0FBTyxFQUFHLGtCQUFrQjtRQUM1QixRQUFRLEVBQUcsaUJBQWlCO1FBQzVCLE9BQU8sRUFBRyxpQkFBaUI7UUFDM0IsUUFBUSxFQUFHLGlDQUFpQztRQUM1QyxRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFdBQVc7UUFDcEIsSUFBSSxFQUFHLFVBQVU7UUFDakIsQ0FBQyxFQUFHLGdCQUFnQjtRQUNwQixFQUFFLEVBQUcsV0FBVztRQUNoQixDQUFDLEVBQUcsV0FBVztRQUNmLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLFdBQVc7UUFDZixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFFBQVE7UUFDYixDQUFDLEVBQUcsUUFBUTtRQUNaLEVBQUUsRUFBRyxPQUFPO1FBQ1osQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsUUFBUTtLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsaUJBQWlCO0lBQ3pDLE9BQU87Ozs7SUFBUCxVQUFRLElBQVk7O1lBQ1osQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFOztZQUNiLENBQUMsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFbEMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxJQUFJLEVBQUc7UUFDTCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQyxDQUFFLGdFQUFnRTtLQUMxRTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vICEgbG9jYWxlIDogS2F6YWtoIFtra11cbi8vICEgYXV0aG9ycyA6IE51cmxhbiBSYWtoaW16aGFub3YgOiBodHRwczovL2dpdGh1Yi5jb20vbnVybGFuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLic7XG5cbmNvbnN0IHN1ZmZpeGVzID0ge1xuICAwOiAnLdGI0ZYnLFxuICAxOiAnLdGI0ZYnLFxuICAyOiAnLdGI0ZYnLFxuICAzOiAnLdGI0ZYnLFxuICA0OiAnLdGI0ZYnLFxuICA1OiAnLdGI0ZYnLFxuICA2OiAnLdGI0YsnLFxuICA3OiAnLdGI0ZYnLFxuICA4OiAnLdGI0ZYnLFxuICA5OiAnLdGI0YsnLFxuICAxMDogJy3RiNGLJyxcbiAgMjA6ICct0YjRiycsXG4gIDMwOiAnLdGI0YsnLFxuICA0MDogJy3RiNGLJyxcbiAgNTA6ICct0YjRlicsXG4gIDYwOiAnLdGI0YsnLFxuICA3MDogJy3RiNGWJyxcbiAgODA6ICct0YjRlicsXG4gIDkwOiAnLdGI0YsnLFxuICAxMDA6ICct0YjRlidcbn07XG5cbmV4cG9ydCBjb25zdCBra0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2trJyxcbiAgbW9udGhzIDogJ9Kb0LDSo9GC0LDRgF/QsNKb0L/QsNC9X9C90LDRg9GA0YvQt1/RgdOZ0YPRltGAX9C80LDQvNGL0YBf0LzQsNGD0YHRi9C8X9GI0ZbQu9C00LVf0YLQsNC80YvQt1/Sm9GL0YDQutKv0LnQtdC6X9Kb0LDQt9Cw0L1f0pvQsNGA0LDRiNCwX9C20LXQu9GC0L7Sm9GB0LDQvScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAn0pvQsNKjX9Cw0pvQv1/QvdCw0YNf0YHTmdGDX9C80LDQvF/QvNCw0YNf0YjRltC7X9GC0LDQvF/Sm9GL0YBf0pvQsNC3X9Kb0LDRgF/QttC10LsnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ9C20LXQutGB0LXQvdCx0ZZf0LTSr9C50YHQtdC90LHRll/RgdC10LnRgdC10L3QsdGWX9GB05nRgNGB0LXQvdCx0ZZf0LHQtdC50YHQtdC90LHRll/QttKx0LzQsF/RgdC10L3QsdGWJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ9C20LXQul/QtNKv0Llf0YHQtdC5X9GB05nRgF/QsdC10Llf0LbSsdC8X9GB0LXQvScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAn0LbQul/QtNC5X9GB0Llf0YHRgF/QsdC5X9C20Lxf0YHQvScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdERC5NTS5ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1vQkdKv0LPRltC9INGB0LDSk9Cw0YJdIExUJyxcbiAgICBuZXh0RGF5IDogJ1vQldGA0YLQtdKjINGB0LDSk9Cw0YJdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFvRgdCw0pPQsNGCXSBMVCcsXG4gICAgbGFzdERheSA6ICdb0JrQtdGI0LUg0YHQsNKT0LDRgl0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1vTqNGC0LrQtdC9INCw0L/RgtCw0L3Ri9KjXSBkZGRkIFvRgdCw0pPQsNGCXSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICclcyDRltGI0ZbQvdC00LUnLFxuICAgIHBhc3QgOiAnJXMg0LHSsdGA0YvQvScsXG4gICAgcyA6ICfQsdGW0YDQvdC10YjQtSDRgdC10LrRg9C90LQnLFxuICAgIHNzIDogJyVkINGB0LXQutGD0L3QtCcsXG4gICAgbSA6ICfQsdGW0YAg0LzQuNC90YPRgicsXG4gICAgbW0gOiAnJWQg0LzQuNC90YPRgicsXG4gICAgaCA6ICfQsdGW0YAg0YHQsNKT0LDRgicsXG4gICAgaGggOiAnJWQg0YHQsNKT0LDRgicsXG4gICAgZCA6ICfQsdGW0YAg0LrSr9C9JyxcbiAgICBkZCA6ICclZCDQutKv0L0nLFxuICAgIE0gOiAn0LHRltGAINCw0LknLFxuICAgIE1NIDogJyVkINCw0LknLFxuICAgIHkgOiAn0LHRltGAINC20YvQuycsXG4gICAgeXkgOiAnJWQg0LbRi9C7J1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKNGI0ZZ80YjRiykvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgYSA9IF9udW0gJSAxMDtcbiAgICBjb25zdCBiID0gX251bSA+PSAxMDAgPyAxMDAgOiBudWxsO1xuXG4gICAgcmV0dXJuIF9udW0gKyAoc3VmZml4ZXNbX251bV0gfHwgc3VmZml4ZXNbYV0gfHwgc3VmZml4ZXNbYl0pO1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDd0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiJdfQ==
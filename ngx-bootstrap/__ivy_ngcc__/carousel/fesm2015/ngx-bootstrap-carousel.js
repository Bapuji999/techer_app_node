import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, NgZone, Input, Output, HostBinding, NgModule } from '@angular/core';
import { LinkedList, isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CarouselComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 7);
    ɵngcc0.ɵɵlistener("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const i_r5 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.selectSlide(i_r5); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("active", slide_r4.active === true);
} }
function CarouselComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ol", 5);
    ɵngcc0.ɵɵtemplate(1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.indicatorsSlides());
} }
function CarouselComponent_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtext(1, "Previous");
    ɵngcc0.ɵɵelementEnd();
} }
function CarouselComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 8);
    ɵngcc0.ɵɵlistener("click", function CarouselComponent_a_4_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.previousSlide(); });
    ɵngcc0.ɵɵelement(1, "span", 9);
    ɵngcc0.ɵɵtemplate(2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.isBs4);
} }
function CarouselComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 12);
    ɵngcc0.ɵɵlistener("click", function CarouselComponent_a_5_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.nextSlide(); });
    ɵngcc0.ɵɵelement(1, "span", 13);
    ɵngcc0.ɵɵelementStart(2, "span", 11);
    ɵngcc0.ɵɵtext(3, "Next");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
} }
const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = ["*"];
class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
/** @nocollapse */ CarouselConfig.ɵprov = ɵɵdefineInjectable({ factory: function CarouselConfig_Factory() { return new CarouselConfig(); }, token: CarouselConfig, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    CarouselConfig.prototype.interval;
    /** @type {?} */
    CarouselConfig.prototype.noPause;
    /** @type {?} */
    CarouselConfig.prototype.noWrap;
    /** @type {?} */
    CarouselConfig.prototype.showIndicators;
    /** @type {?} */
    CarouselConfig.prototype.pauseOnFocus;
    /** @type {?} */
    CarouselConfig.prototype.indicatorsByChunk;
    /** @type {?} */
    CarouselConfig.prototype.itemsPerSlide;
    /** @type {?} */
    CarouselConfig.prototype.singleSlideOffset;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    const out = [];
    /** @type {?} */
    const n = Math.ceil((array.length) / size);
    /** @type {?} */
    let i = 0;
    while (i < n) {
        /** @type {?} */
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Turn on/off animation. Animation doesn't work for multilist carousel
         */
        this.isAnimated = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new EventEmitter();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new LinkedList();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active);
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        (slides) => {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            (slide, index) => slide.item.order = index));
        });
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this.isAnimated) {
            slide.isAnimated = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._select(nextSlideIndex);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            () => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }), 0);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    move(direction, force = false) {
        /** @type {?} */
        const firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        const lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    keydownPress(event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    isFirst(index) {
        return index === 0;
    }
    /**
     * @return {?}
     */
    indicatorsSlides() {
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0));
    }
    /**
     * @private
     * @return {?}
     */
    selectInitialSlides() {
        /** @type {?} */
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * @private
     * @return {?}
     */
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => {
            return {
                index,
                item: slide
            };
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectRangeByNestedIndex(index) {
        /** @type {?} */
        const selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        (slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        (slidesList) => {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.index === index)) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => {
            slide.item.active = true;
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexInRange(index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            const visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    /**
     * @private
     * @return {?}
     */
    hideSlides() {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active = false));
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListLast() {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveSliderByOneItem(direction) {
        /** @type {?} */
        let firstVisibleIndex;
        /** @type {?} */
        let lastVisibleIndex;
        /** @type {?} */
        let indexToHide;
        /** @type {?} */
        let indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            const slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            let displayedIndex;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }, ...this._slidesWithIndexes];
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index)));
        }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveMultilist(direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibleIndexes() {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        /** @type {?} */
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return setInterval((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    }
    /**
     * @return {?}
     */
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(ɵngcc0.ɵɵdirectiveInject(CarouselConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CarouselComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["carousel"]], inputs: { indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", startFromIndex: "startFromIndex", activeSlide: "activeSlide", interval: "interval", noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
        ɵngcc0.ɵɵtemplate(1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
        ɵngcc0.ɵɵtemplate(5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showIndicators && ctx.slides.length > 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c0, ctx.multilist ? "flex" : "block"));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.slides.length > 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.slides.length > 1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgForOf], encapsulation: 2 });
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: NgZone }
];
CarouselComponent.propDecorators = {
    noWrap: [{ type: Input }],
    noPause: [{ type: Input }],
    showIndicators: [{ type: Input }],
    pauseOnFocus: [{ type: Input }],
    indicatorsByChunk: [{ type: Input }],
    itemsPerSlide: [{ type: Input }],
    singleSlideOffset: [{ type: Input }],
    isAnimated: [{ type: Input }],
    activeSlideChange: [{ type: Output }],
    slideRangeChange: [{ type: Output }],
    activeSlide: [{ type: Input }],
    startFromIndex: [{ type: Input }],
    interval: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }]
    }], function () { return [{ type: CarouselConfig }, { type: ɵngcc0.NgZone }]; }, { indicatorsByChunk: [{
            type: Input
        }], itemsPerSlide: [{
            type: Input
        }], singleSlideOffset: [{
            type: Input
        }], isAnimated: [{
            type: Input
        }], activeSlideChange: [{
            type: Output
        }], slideRangeChange: [{
            type: Output
        }], startFromIndex: [{
            type: Input
        }], activeSlide: [{
            type: Input
        }], interval: [{
            type: Input
        }], noWrap: [{
            type: Input
        }], noPause: [{
            type: Input
        }], showIndicators: [{
            type: Input
        }], pauseOnFocus: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.noWrap;
    /** @type {?} */
    CarouselComponent.prototype.noPause;
    /** @type {?} */
    CarouselComponent.prototype.showIndicators;
    /** @type {?} */
    CarouselComponent.prototype.pauseOnFocus;
    /** @type {?} */
    CarouselComponent.prototype.indicatorsByChunk;
    /** @type {?} */
    CarouselComponent.prototype.itemsPerSlide;
    /** @type {?} */
    CarouselComponent.prototype.singleSlideOffset;
    /**
     * Turn on/off animation. Animation doesn't work for multilist carousel
     * @type {?}
     */
    CarouselComponent.prototype.isAnimated;
    /**
     * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
     * @type {?}
     */
    CarouselComponent.prototype.activeSlideChange;
    /**
     * Will be emitted when active slides has been changed in multilist mode
     * @type {?}
     */
    CarouselComponent.prototype.slideRangeChange;
    /** @type {?} */
    CarouselComponent.prototype.startFromIndex;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.currentInterval;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._currentActiveSlide;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._interval;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._slides;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._chunkedSlides;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._slidesWithIndexes;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._currentVisibleSlidesIndex;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.isPlaying;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.destroyed;
    /** @type {?} */
    CarouselComponent.prototype.getActive;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.makeSlidesConsistent;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(ɵngcc0.ɵɵdirectiveInject(CarouselComponent)); };
SlideComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-hidden", !ctx.active);
        ɵngcc0.ɵɵstyleProp("width", ctx.itemWidth)("order", ctx.order);
        ɵngcc0.ɵɵclassProp("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
    } }, inputs: { active: "active" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.active);
    } }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
SlideComponent.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
    itemWidth: [{ type: HostBinding, args: ['style.width',] }],
    order: [{ type: HostBinding, args: ['style.order',] }],
    isAnimated: [{ type: HostBinding, args: ['class.carousel-animation',] }],
    addClass: [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SlideComponent, [{
        type: Component,
        args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[attr.aria-hidden]': '!active'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  `]
            }]
    }], function () { return [{ type: CarouselComponent }]; }, { itemWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], order: [{
            type: HostBinding,
            args: ['style.order']
        }], addClass: [{
            type: HostBinding,
            args: ['class.item']
        }, {
            type: HostBinding,
            args: ['class.carousel-item']
        }], active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }], isAnimated: [{
            type: HostBinding,
            args: ['class.carousel-animation']
        }] }); })();
if (false) {
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /** @type {?} */
    SlideComponent.prototype.itemWidth;
    /** @type {?} */
    SlideComponent.prototype.order;
    /** @type {?} */
    SlideComponent.prototype.isAnimated;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.addClass;
    /**
     * Link to Parent(container-collection) component
     * @type {?}
     * @protected
     */
    SlideComponent.prototype.carousel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CarouselModule });
CarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CarouselModule, { declarations: function () { return [SlideComponent,
        CarouselComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SlideComponent,
        CarouselComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CarouselComponent, CarouselConfig, CarouselModule, SlideComponent };

//# sourceMappingURL=ngx-bootstrap-carousel.js.map
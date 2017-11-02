webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/$$_gendir/app/app.module.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_dialog_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/dialog/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gendir_node_modules_angular_material_datepicker_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/datepicker/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gendir_node_modules_angular_material_tooltip_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/tooltip/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_snack_bar_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/snack-bar/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_modal_container_paws_modals_paws_modal_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/footer/modal-container/paws-modals/paws-modal.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__root_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/root.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_animations_browser__ = __webpack_require__("../../../animations/@angular/animations/browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_page_scroll_src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_sort__ = __webpack_require__("../../../material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_panel_list_panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_footer_modal_container_paws_modals_paws_modal_service__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_page_scroll_src_ng2_page_scroll_module__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_cdk_stepper__ = __webpack_require__("../../../cdk/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__app_ng_material_base_ng_material_base_module__ = __webpack_require__("../../../../../src/app/ng-material-base/ng-material-base.module.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */






























































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_root_component__["a" /* RootComponent */]], function (_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_dialog_typings_index_ngfactory__["a" /* MatDialogContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_4__gendir_node_modules_angular_material_datepicker_typings_index_ngfactory__["a" /* MatDatepickerContentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__gendir_node_modules_angular_material_tooltip_typings_index_ngfactory__["a" /* TooltipComponentNgFactory */],
                    __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_snack_bar_typings_index_ngfactory__["a" /* MatSnackBarContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_snack_bar_typings_index_ngfactory__["b" /* SimpleSnackBarNgFactory */], __WEBPACK_IMPORTED_MODULE_7__footer_modal_container_paws_modals_paws_modal_component_ngfactory__["a" /* PawsModalComponentNgFactory */],
                    __WEBPACK_IMPORTED_MODULE_8__root_component_ngfactory__["a" /* RootComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModuleRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* LOCALE_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵm */], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* LOCALE_ID */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common__["l" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* LOCALE_ID */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵf */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵk */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["t" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Sanitizer */], null, [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["f" /* GestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p1_0, p2_0, p2_1) {
            return [new __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["l" /* ɵDomEventsPlugin */](p0_0), new __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["p" /* ɵKeyEventsPlugin */](p1_0),
                new __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["o" /* ɵHammerGesturesPlugin */](p2_0, p2_1)];
        }, [__WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["e" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["n" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["n" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["m" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["m" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["e" /* EventManager */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["n" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_12__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["d" /* ɵc */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_12__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_12__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_12__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_12__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["m" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_12__angular_animations_browser__["b" /* ɵAnimationEngine */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["q" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["n" /* ɵDomSharedStylesHost */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["h" /* Meta */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["h" /* Meta */], [__WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["j" /* Title */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["j" /* Title */], [__WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_14_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], __WEBPACK_IMPORTED_MODULE_14_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15__angular_animations__["b" /* AnimationBuilder */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* RendererFactory2 */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["b" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_bidi__["b" /* DIR_DOCUMENT */], null, [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["b" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_bidi__["c" /* Directionality */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_bidi__["c" /* Directionality */], [[2, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_bidi__["b" /* DIR_DOCUMENT */]]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["c" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["c" /* ScrollDispatcher */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["f" /* ViewportRuler */]], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["c" /* ScrollDispatcher */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["f" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["f" /* ScrollStrategyOptions */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["c" /* ScrollDispatcher */],
            __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["f" /* ViewportRuler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["d" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["i" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["d" /* OverlayContainer */]]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["l" /* ɵf */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["l" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["f" /* ViewportRuler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["f" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["d" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["l" /* ɵf */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["j" /* ɵc */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["k" /* ɵd */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_20__angular_material_autocomplete__["a" /* MAT_AUTOCOMPLETE_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_20__angular_material_autocomplete__["b" /* MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["l" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["l" /* InteractivityChecker */], [__WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["k" /* FocusTrapFactory */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["k" /* FocusTrapFactory */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["l" /* InteractivityChecker */],
            __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](136192, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["e" /* AriaDescriber */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["c" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["e" /* AriaDescriber */]], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["p" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["o" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["p" /* LiveAnnouncer */]], [2, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["m" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]],
            __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["i" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["g" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["i" /* FocusMonitor */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_collections__["d" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_23__angular_cdk_observers__["a" /* MatMutationObserverFactory */], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_observers__["a" /* MatMutationObserverFactory */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["d" /* MatDialog */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], [2, __WEBPACK_IMPORTED_MODULE_9__angular_common__["f" /* Location */]],
            __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["d" /* MatDialog */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__["d" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__["a" /* ICON_REGISTRY_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__["d" /* MatIconRegistry */]],
            [2, __WEBPACK_IMPORTED_MODULE_26__angular_http__["a" /* Http */]], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_27__angular_material_datepicker__["g" /* MatDatepickerIntl */], __WEBPACK_IMPORTED_MODULE_27__angular_material_datepicker__["g" /* MatDatepickerIntl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_27__angular_material_datepicker__["a" /* MAT_DATEPICKER_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_27__angular_material_datepicker__["b" /* MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["e" /* ErrorStateMatcher */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["e" /* ErrorStateMatcher */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__["b" /* MAT_MENU_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__["d" /* ɵc22 */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["i" /* MAT_DATE_LOCALE */], null, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* LOCALE_ID */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["d" /* DateAdapter */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["z" /* NativeDateAdapter */], [[2, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["i" /* MAT_DATE_LOCALE */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_29__angular_material_select__["a" /* MAT_SELECT_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_29__angular_material_select__["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_30__angular_material_tooltip__["a" /* MAT_TOOLTIP_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_30__angular_material_tooltip__["b" /* MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_31__angular_material_paginator__["a" /* MatPaginatorIntl */], __WEBPACK_IMPORTED_MODULE_31__angular_material_paginator__["a" /* MatPaginatorIntl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_32__angular_material_snack_bar__["b" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_32__angular_material_snack_bar__["b" /* MatSnackBar */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["b" /* Overlay */],
            __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["p" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], [3, __WEBPACK_IMPORTED_MODULE_32__angular_material_snack_bar__["b" /* MatSnackBar */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_33__angular_material_sort__["a" /* MatSortHeaderIntl */], __WEBPACK_IMPORTED_MODULE_33__angular_material_sort__["a" /* MatSortHeaderIntl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_34__angular_material_stepper__["a" /* MatStepperIntl */], __WEBPACK_IMPORTED_MODULE_34__angular_material_stepper__["a" /* MatStepperIntl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_35__angular_forms__["j" /* ɵi */], __WEBPACK_IMPORTED_MODULE_35__angular_forms__["j" /* ɵi */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_36__app_panel_list_panel_service__["a" /* PanelService */], __WEBPACK_IMPORTED_MODULE_36__app_panel_list_panel_service__["a" /* PanelService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_37__app_footer_modal_container_paws_modals_paws_modal_service__["a" /* PawsModalService */], __WEBPACK_IMPORTED_MODULE_37__app_footer_modal_container_paws_modals_paws_modal_service__["a" /* PawsModalService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["r" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], function (p0_0, p0_1) {
            return [__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["s" /* ɵc */](p0_0, p0_1)];
        }, [[2, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["i" /* NgProbeToken */]], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgProbeToken */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵe */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵConsole */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](2048, __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], null, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */]]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_38_ng2_page_scroll_src_ng2_page_scroll_module__["a" /* Ng2PageScrollModule */], __WEBPACK_IMPORTED_MODULE_38_ng2_page_scroll_src_ng2_page_scroll_module__["a" /* Ng2PageScrollModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["c" /* CompatibilityModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["c" /* CompatibilityModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_bidi__["a" /* BidiModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["g" /* MATERIAL_SANITY_CHECKS */], true, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["m" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["m" /* MatCommonModule */], [[2, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["g" /* MATERIAL_SANITY_CHECKS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["b" /* PlatformModule */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_platform__["b" /* PlatformModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["y" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["y" /* MatRippleModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["w" /* MatPseudoCheckboxModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["w" /* MatPseudoCheckboxModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["t" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["t" /* MatOptionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_39__angular_cdk_portal__["f" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_39__angular_cdk_portal__["f" /* PortalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["e" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_overlay__["e" /* OverlayModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_material_autocomplete__["c" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material_autocomplete__["c" /* MatAutocompleteModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["a" /* A11yModule */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_a11y__["a" /* A11yModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_40__angular_material_button__["d" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_40__angular_material_button__["d" /* MatButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_41__angular_material_button_toggle__["a" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_41__angular_material_button_toggle__["a" /* MatButtonToggleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_42__angular_material_card__["d" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material_card__["d" /* MatCardModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_23__angular_cdk_observers__["c" /* ObserversModule */], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_observers__["c" /* ObserversModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_43__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_43__angular_material_checkbox__["a" /* MatCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_44__angular_material_chips__["a" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_44__angular_material_chips__["a" /* MatChipsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["i" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_24__angular_material_dialog__["i" /* MatDialogModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__["c" /* MatIconModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_27__angular_material_datepicker__["h" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_27__angular_material_datepicker__["h" /* MatDatepickerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_45__angular_material_expansion__["c" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_45__angular_material_expansion__["c" /* MatExpansionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["o" /* MatLineModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["o" /* MatLineModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_46__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_46__angular_material_grid_list__["a" /* MatGridListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_47__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_47__angular_material_form_field__["c" /* MatFormFieldModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_48__angular_material_input__["a" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_48__angular_material_input__["a" /* MatInputModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_49__angular_material_list__["c" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_49__angular_material_list__["c" /* MatListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__["c" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__["c" /* MatMenuModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["A" /* NativeDateModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["A" /* NativeDateModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["q" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["q" /* MatNativeDateModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_29__angular_material_select__["c" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material_select__["c" /* MatSelectModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_30__angular_material_tooltip__["c" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_30__angular_material_tooltip__["c" /* MatTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_31__angular_material_paginator__["b" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material_paginator__["b" /* MatPaginatorModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_50__angular_material_progress_bar__["a" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_50__angular_material_progress_bar__["a" /* MatProgressBarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_51__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_51__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_52__angular_material_radio__["a" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_52__angular_material_radio__["a" /* MatRadioModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_53__angular_material_sidenav__["a" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_53__angular_material_sidenav__["a" /* MatSidenavModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_54__angular_material_slider__["a" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_54__angular_material_slider__["a" /* MatSliderModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_55__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_55__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_32__angular_material_snack_bar__["d" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_32__angular_material_snack_bar__["d" /* MatSnackBarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_33__angular_material_sort__["b" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_33__angular_material_sort__["b" /* MatSortModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_56__angular_cdk_table__["m" /* CdkTableModule */], __WEBPACK_IMPORTED_MODULE_56__angular_cdk_table__["m" /* CdkTableModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_57__angular_material_table__["a" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_57__angular_material_table__["a" /* MatTableModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_58__angular_material_tabs__["h" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_58__angular_material_tabs__["h" /* MatTabsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_59__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_59__angular_material_toolbar__["a" /* MatToolbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_60__angular_cdk_stepper__["d" /* CdkStepperModule */], __WEBPACK_IMPORTED_MODULE_60__angular_cdk_stepper__["d" /* CdkStepperModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_34__angular_material_stepper__["b" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_34__angular_material_stepper__["b" /* MatStepperModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_61__app_ng_material_base_ng_material_base_module__["a" /* NgMaterialBaseModule */], __WEBPACK_IMPORTED_MODULE_61__app_ng_material_base_ng_material_base_module__["a" /* NgMaterialBaseModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_35__angular_forms__["i" /* ɵba */], __WEBPACK_IMPORTED_MODULE_35__angular_forms__["i" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_35__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_35__angular_forms__["c" /* FormsModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__["a" /* MAT_MENU_DEFAULT_OPTIONS */], { overlapTrigger: true, xPosition: 'after', yPosition: 'below' }, []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["h" /* MAT_DATE_FORMATS */], __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["j" /* MAT_NATIVE_DATE_FORMATS */], [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
//# sourceMappingURL=app.module.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/footer/footer.component.css.shim.ngstyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var styles = ['.paws-footer[_ngcontent-%COMP%] {\r\n    min-height: 21.5%;\r\n    background-color: cornflowerblue;\r\n    color: white;\r\n    font-size: 11px;\r\n}\r\n\r\n.paws-footer-links[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.additionalInfo[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=footer.component.css.shim.ngstyle.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/footer/footer.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FooterComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FooterComponent_0;
/* unused harmony export View_FooterComponent_Host_0 */
/* unused harmony export FooterComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/$$_gendir/app/footer/footer.component.css.shim.ngstyle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_container_modal_container_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/footer/modal-container/modal-container.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_footer_modal_container_modal_container_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */






var styles_FooterComponent = [__WEBPACK_IMPORTED_MODULE_0__footer_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_FooterComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0,
    styles: styles_FooterComponent, data: {} });
function View_FooterComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 73, 'footer', [['clas',
                'footer'], ['class', 'paws-footer']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](2, 0, null, null, 70, 'div', [['class', 'container']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, null, 58, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](6, 0, null, null, 28, 'div', [['class', 'col-sm-4']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, null, 1, 'h3', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Contact'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](11, 0, null, null, 22, 'div', [['class', 'contact-div']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](14, 0, null, null, 3, 'a', [['class', 'paws-footer-links'], ['href', 'https://www.google.com/maps/dir/?api=1&destination=31+South+Second+Street+Warrenton%20+Virginia&travelmode=driving']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                        31 S. Second Street '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](16, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                        Warrenton, Va 20187\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, [' '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](19, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](21, 0, null, null, 1, 'a', [['class', 'paws-footer-links'],
            ['href', 'tel:5403471482']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Tel: (540)-347-1482'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, [' '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](24, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](26, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Fax: (866)-876-2295'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, [' '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](29, 0, null, null, 0, 'br', [], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](31, 0, null, null, 1, 'a', [['class', 'paws-footer-links'], ['href',
                'mailto:pwoodward@patwoodwardlawoffice.com'], ['target', '_top']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['pwoodward@patwoodwardlawoffice.com'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](36, 0, null, null, 15, 'div', [['class', 'col-sm-5']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](38, 0, null, null, 1, 'h3', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Business Hours'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](42, 0, null, null, 8, 'div', [['class', 'business-hours-div']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](44, 0, null, null, 3, 'span', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](45, 0, null, null, 1, 'strong', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Mon - Fri'])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, [' 8:00am - 12:00pm, 1:00pm - 4:30pm'])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, [' '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](49, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](53, 0, null, null, 8, 'div', [['class', 'col-sm-3']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](56, 0, null, null, 4, 'div', [['class', 'additionalInfo']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](58, 0, null, null, 1, 'paws-modal-container', [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__modal_container_modal_container_component_ngfactory__["b" /* View_ModalContainerComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__modal_container_modal_container_component_ngfactory__["a" /* RenderType_ModalContainerComponent */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](59, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__app_footer_modal_container_modal_container_component__["a" /* ModalContainerComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["d" /* MatDialog */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](64, 0, null, null, 7, 'div', [['class', 'row'], ['style',
                    'text-align: center;']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](66, 0, null, null, 4, 'div', [['class', 'col-sm-12']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](68, 0, null, null, 1, 'sub', [['style', 'font-size: 9px;']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['@2017 Patricia A. Woodward - All Rights Reserved.'])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n']))], null, null);
}
function View_FooterComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'footer-component', [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_footer_footer_component__["a" /* FooterComponent */], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
var FooterComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]('footer-component', __WEBPACK_IMPORTED_MODULE_5__app_footer_footer_component__["a" /* FooterComponent */], View_FooterComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzLkZvb3RlckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxmb290ZXIgY2xhcz1cImZvb3RlclwiIGNsYXNzPVwicGF3cy1mb290ZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvbnRhY3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBUT0RPOiBtYWtlIHN1cmUgdGhpcyB3b3JrcyBpbiBtb2JpbGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYXdzLWZvb3Rlci1saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvP2FwaT0xJmRlc3RpbmF0aW9uPTMxK1NvdXRoK1NlY29uZCtTdHJlZXQrV2FycmVudG9uJTIwK1ZpcmdpbmlhJnRyYXZlbG1vZGU9ZHJpdmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMSBTLiBTZWNvbmQgU3RyZWV0IDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2FycmVudG9uLCBWYSAyMDE4N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDxicj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhd3MtZm9vdGVyLWxpbmtzXCIgaHJlZj1cInRlbDo1NDAzNDcxNDgyXCI+VGVsOiAoNTQwKS0zNDctMTQ4MjwvYT4gPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkZheDogKDg2NiktODc2LTIyOTU8L3NwYW4+IDxicj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhd3MtZm9vdGVyLWxpbmtzXCIgaHJlZj1cIm1haWx0bzpwd29vZHdhcmRAcGF0d29vZHdhcmRsYXdvZmZpY2UuY29tXCIgdGFyZ2V0PVwiX3RvcFwiPnB3b29kd2FyZEBwYXR3b29kd2FyZGxhd29mZmljZS5jb208L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkJ1c2luZXNzIEhvdXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDwhLS0gVE9ETzogbWF5YmUgbWFrZSB0aGlzIHJlZmxlY3QgY3VycmVudCB0aW1lPyAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1ob3Vycy1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPk1vbiAtIEZyaTwvc3Ryb25nPiA4OjAwYW0gLSAxMjowMHBtLCAxOjAwcG0gLSA0OjMwcG08L3NwYW4+IDxicj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIFRPRE86IG1ha2UgdGhlc2UgbG9vayBwcmV0dGllciAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRpdGlvbmFsSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXdzLW1vZGFsLWNvbnRhaW5lcj48L3Bhd3MtbW9kYWwtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHN1YiBzdHlsZT1cImZvbnQtc2l6ZTogOXB4O1wiPkAyMDE3IFBhdHJpY2lhIEEuIFdvb2R3YXJkIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3N1Yj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9mb290ZXI+IiwiPGZvb3Rlci1jb21wb25lbnQ+PC9mb290ZXItY29tcG9uZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQUEsOEJBQTBDO01BQ3RDO1VBQUE7TUFBdUIsa0RBQ25CO1VBQUE7VUFBQSw4QkFBaUI7TUFDYjtVQUFBO01BQXNCLDBEQUNsQjtVQUFBO1VBQUEsNENBQUk7VUFBQSxjQUFZO01BQ2hCO1VBQUE7TUFBeUIsOERBQ3dCO1VBQUEsMkNBQzdDO1VBQUE7VUFBQTtNQUM2SDtNQUNyRztVQUFBLDBEQUFJO1VBQUE7TUFFcEIseUNBQUM7VUFBQTtVQUFBLDhCQUFJO01BQ2I7VUFBQTtVQUFBLGdCQUFtRDtNQUF1Qix5Q0FBQztVQUFBO1VBQUEsOEJBQUk7TUFDL0U7VUFBQSwwREFBTTtVQUFBLHdDQUEwQjtVQUFBLFFBQUM7VUFBQTtNQUFJLDhEQUNyQztVQUFBO2NBQUE7VUFBQSwwREFBNEY7VUFBQSx1REFBc0M7VUFBQSx1Q0FDaEk7VUFBQSxxQkFDSjtNQUNOO1VBQUE7TUFBc0IsMERBQ2xCO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLHFCQUFtQjtNQUM2QiwwREFDcEQ7VUFBQTtVQUFBLDBEQUFnQztVQUFBLDJDQUM1QjtVQUFBO1VBQUEsOEJBQU07VUFBQTtVQUFBLGdCQUFRLGlEQUFrQjtpQkFBQSwyREFBeUM7aUJBQUEsMEJBQUM7VUFBQTtVQUFBLGdCQUFJO01BQzVFLHNEQUNKO1VBQUEscUJBQ047VUFBQTtVQUFBLGdCQUFzQjtNQUNxQiwwREFDdkM7VUFBQTtVQUFBLDBEQUE0QjtVQUFBLDJDQUN4QjtVQUFBO1VBQUE7YUFBQTtVQUFBLGVBQTZDO01BQzNDLHNEQUNKO1VBQUEsaUJBQ0osa0RBQ047aUJBQUE7Y0FBQTtjQUFBLGdCQUE2QztNQUN6QztVQUFBO01BQXVCLDBEQUNuQjtVQUFBO1VBQUEsMERBQTZCO1VBQUEsc0VBQXVEO2lCQUFBLHVDQUNsRjtVQUFBLGlCQUNKLDhDQUNKO1VBQUE7OztvQkNwQ1Y7TUFBQTtnQ0FBQSxVQUFBO01BQUE7SUFBQTs7OzsifQ==
//# sourceMappingURL=footer.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/footer/modal-container/modal-container.component.css.shim.ngstyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var styles = ['button[_ngcontent-%COMP%] {\r\n    color: cornflowerblue;\r\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=modal-container.component.css.shim.ngstyle.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/footer/modal-container/modal-container.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ModalContainerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ModalContainerComponent_0;
/* unused harmony export View_ModalContainerComponent_Host_0 */
/* unused harmony export ModalContainerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_container_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/$$_gendir/app/footer/modal-container/modal-container.component.css.shim.ngstyle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_footer_modal_container_modal_container_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/button/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */









var styles_ModalContainerComponent = [__WEBPACK_IMPORTED_MODULE_0__modal_container_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ModalContainerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0,
    styles: styles_ModalContainerComponent, data: {} });
function View_ModalContainerComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 4, 'button', [['class',
                'mat-raised-button'], ['mat-raised-button', '']], [[8, 'disabled', 0]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.openDialog('faqModal') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['F.A.Q.'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](6, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, [' '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](10, 0, null, null, 4, 'button', [['class', 'mat-raised-button'], ['mat-raised-button', '']], [[8,
                'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.openDialog('disclaimerModal') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](12, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['Disclaimer'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](16, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, [' '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](18, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](20, 0, null, null, 4, 'button', [['class', 'mat-raised-button'],
            ['mat-raised-button', '']], [[8, 'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.openDialog('privacyModal') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_3__gendir_node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](21, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](22, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['Privacy Statement'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n']))], null, function (_ck, _v) {
        var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 2).disabled || null);
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 12).disabled || null);
        _ck(_v, 10, 0, currVal_1);
        var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 22).disabled || null);
        _ck(_v, 20, 0, currVal_2);
    });
}
function View_ModalContainerComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'paws-modal-container', [], null, null, null, View_ModalContainerComponent_0, RenderType_ModalContainerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_footer_modal_container_modal_container_component__["a" /* ModalContainerComponent */], [__WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["d" /* MatDialog */]], null, null)], null, null);
}
var ModalContainerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]('paws-modal-container', __WEBPACK_IMPORTED_MODULE_2__app_footer_modal_container_modal_container_component__["a" /* ModalContainerComponent */], View_ModalContainerComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvZm9vdGVyL21vZGFsLWNvbnRhaW5lci9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC50cy5Nb2RhbENvbnRhaW5lckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coJ2ZhcU1vZGFsJylcIj5GLkEuUS48L2J1dHRvbj5cclxuPGJyPiA8YnI+XHJcbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coJ2Rpc2NsYWltZXJNb2RhbCcpXCI+RGlzY2xhaW1lcjwvYnV0dG9uPlxyXG48YnI+IDxicj5cclxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygncHJpdmFjeU1vZGFsJylcIj5Qcml2YWN5IFN0YXRlbWVudDwvYnV0dG9uPlxyXG4iLCI8cGF3cy1tb2RhbC1jb250YWluZXI+PC9wYXdzLW1vZGFsLWNvbnRhaW5lcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUEwQjtNQUFBO01BQUE7SUFBQTtJQUExQjtFQUFBLHVEQUFBOzJCQUFBLGtEQUFBO01BQUE7TUFBQSxvQ0FBQTtNQUFBLDJDQUEyRDtNQUFlLDBDQUMxRTtVQUFBO1VBQUEsOEJBQUkseUNBQUM7aUJBQUE7Y0FBQSwwREFBSTtVQUFBLHVCQUNUO1VBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBMEI7Y0FBQTtjQUFBO1lBQUE7WUFBMUI7VUFBQSx1REFBQTtVQUFBLHlFQUFBO1VBQUE7NkJBQUEsc0NBQUE7VUFBQTtNQUFrRSxzQ0FBbUI7TUFDckY7VUFBQSwwREFBSTtVQUFBLHNCQUFDO1VBQUE7VUFBQSxnQkFBSSwwQ0FDVDtVQUFBO2NBQUE7VUFBQTtZQUFBO1lBQUE7WUFBMEI7Y0FBQTtjQUFBO1lBQUE7WUFBMUI7VUFBQSx1REFBQTtVQUFBLHlFQUFBO1VBQUE7NkJBQUEsc0NBQUE7VUFBQTtNQUErRCw2Q0FBMEI7VUFBQTtJQUp6RjtJQUFBLFdBQUEsU0FBQTtJQUVBO0lBQUEsWUFBQSxTQUFBO0lBRUE7SUFBQSxZQUFBLFNBQUE7Ozs7b0JDSkE7TUFBQTt3Q0FBQSxVQUFBO01BQUE7OzsifQ==
//# sourceMappingURL=modal-container.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/footer/modal-container/paws-modals/paws-modal.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_PawsModalComponent */
/* unused harmony export View_PawsModalComponent_0 */
/* unused harmony export View_PawsModalComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsModalComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/expansion/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/button/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_footer_modal_container_paws_modals_paws_modal_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_footer_modal_container_paws_modals_paws_modal_service__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */













var styles_PawsModalComponent = [];
var RenderType_PawsModalComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2,
    styles: styles_PawsModalComponent, data: {} });
function View_PawsModalComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](1, null, ['\n        ', '\n    ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.modal.content;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_PawsModalComponent_3(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 9, 'mat-expansion-panel', [['class', 'mat-expansion-panel']], [[2, 'mat-expanded', null], [2, 'mat-expansion-panel-spacing',
                null]], null, null, __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["a" /* AccordionItem */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["d" /* MatExpansionPanel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["d" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["b" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, 1, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](4, 0, null, 0, 4, 'mat-expansion-panel-header', [['class', 'mat-expansion-panel-header'],
            ['role', 'button']], [[1, 'tabindex', 0], [1, 'aria-controls', 0], [1, 'aria-expanded',
                0], [1, 'aria-disabled', 0], [2, 'mat-expanded', null], [40, '@expansionHeight',
                0]], [[null, 'click'], [null, 'keyup']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5)._toggle() !== false);
                ad = (pd_0 && ad);
            }
            if (('keyup' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5)._keyup($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["e" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["d" /* MatExpansionPanel */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["i" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵpod */](6, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵpod */](7, { value: 0, params: 1 }),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](8, 2, ['\n                ', '\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](9, 1, ['\n                ', '\n        ']))], null, function (_ck, _v) {
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 2).expanded;
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 2)._hasSpacing();
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5).panel.disabled ? (0 - 1) : 0);
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5)._getPanelId();
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5)._isExpanded();
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5).panel.disabled;
        var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5)._isExpanded();
        var currVal_7 = _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5)._getExpandedState(), _ck(_v, 6, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5).collapsedHeight, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 5).expandedHeight));
        _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        var currVal_8 = _v.context.$implicit.header;
        _ck(_v, 8, 0, currVal_8);
        var currVal_9 = _v.context.$implicit.innerContent;
        _ck(_v, 9, 0, currVal_9);
    });
}
function View_PawsModalComponent_2(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](1, 0, null, null, 5, 'mat-accordion', [['class', 'mat-accordion']], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_expansion__["b" /* MatAccordion */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵand */](16777216, null, null, 1, null, View_PawsModalComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* IterableDiffers */]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.modal.content;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
function View_PawsModalComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 2, 'h1', [['class',
                'mat-dialog-title'], ['mat-dialog-title', '']], [[8, 'id', 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["k" /* MatDialogTitle */], [[2, __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["g" /* MatDialogContainer */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](2, null, ['', ''])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](4, 0, null, null, 5, 'div', [['class', 'mat-dialog-content'], ['mat-dialog-content',
                '']], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["h" /* MatDialogContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵand */](16777216, null, null, 1, null, View_PawsModalComponent_1)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](11, 0, null, null, 12, 'div', [['class', 'mat-dialog-actions'],
                ['mat-dialog-actions', '']], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["e" /* MatDialogActions */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](15, 0, null, null, 0, 'span', [['style', 'flex: 1 1 auto;']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](17, 0, null, null, 5, 'button', [['class', 'mat-raised-button'], ['mat-dialog-close', ''], ['mat-raised-button',
                ''], ['tabindex', '2'], ['type', 'button']], [[1, 'aria-label', 0], [8, 'disabled',
                0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 19).dialogRef.close(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 19).dialogResult) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](19, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["f" /* MatDialogClose */], [__WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["j" /* MatDialogRef */]], { dialogResult: [0,
                'dialogResult'] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](20, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](21, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, 0, ['Close'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n\n'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵand */](0, [['faqModal', 2]], null, 0, null, View_PawsModalComponent_2))], function (_ck, _v) {
        var _co = _v.component;
        _ck(_v, 1, 0);
        var currVal_2 = _co.isBaseModal;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 25);
        _ck(_v, 8, 0, currVal_2, currVal_3);
        var currVal_6 = '';
        _ck(_v, 19, 0, currVal_6);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 1).id;
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = _co.modal.title;
        _ck(_v, 2, 0, currVal_1);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 19).ariaLabel;
        var currVal_5 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 20).disabled || null);
        _ck(_v, 17, 0, currVal_4, currVal_5);
    });
}
function View_PawsModalComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'paws-modal', [], null, null, null, View_PawsModalComponent_0, RenderType_PawsModalComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__app_footer_modal_container_paws_modals_paws_modal_component__["a" /* PawsModalComponent */], [__WEBPACK_IMPORTED_MODULE_12__app_footer_modal_container_paws_modals_paws_modal_service__["a" /* PawsModalService */], __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["j" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["a" /* MAT_DIALOG_DATA */]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
var PawsModalComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵccf */]('paws-modal', __WEBPACK_IMPORTED_MODULE_11__app_footer_modal_container_paws_modals_paws_modal_component__["a" /* PawsModalComponent */], View_PawsModalComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvcGF3cy1tb2RhbHMvcGF3cy1tb2RhbC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvcGF3cy1tb2RhbHMvcGF3cy1tb2RhbC5jb21wb25lbnQudHMiLCJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvZm9vdGVyL21vZGFsLWNvbnRhaW5lci9wYXdzLW1vZGFscy9wYXdzLW1vZGFsLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL2Zvb3Rlci9tb2RhbC1jb250YWluZXIvcGF3cy1tb2RhbHMvcGF3cy1tb2RhbC5jb21wb25lbnQudHMuUGF3c01vZGFsQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+e3sgbW9kYWwudGl0bGUgfX08L2gxPlxyXG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cclxuICAgIDxwICpuZ0lmPVwiaXNCYXNlTW9kYWwgZWxzZSBmYXFNb2RhbFwiPlxyXG4gICAgICAgIHt7IG1vZGFsLmNvbnRlbnQgfX1cclxuICAgIDwvcD5cclxuPC9kaXY+XHJcbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxyXG4gIDwhLS0gZmxvYXRzIGNsb3NlIGJ1dHRvbiB0byB0aGUgcmlnaHQgLS0+XHJcbiAgPHNwYW4gc3R5bGU9XCJmbGV4OiAxIDEgYXV0bztcIj48L3NwYW4+XHJcbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIHRhYmluZGV4PVwiMlwiPkNsb3NlPC9idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNmYXFNb2RhbD5cclxuICAgIDxtYXQtYWNjb3JkaW9uPlxyXG4gICAgICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsICpuZ0Zvcj1cImxldCBhY2NvcmRpb25QYW5lbCBvZiBtb2RhbC5jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cclxuICAgICAgICAgICAgICAgIHt7IGFjY29yZGlvblBhbmVsLmhlYWRlcn19XHJcbiAgICAgICAgICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICB7eyBhY2NvcmRpb25QYW5lbC5pbm5lckNvbnRlbnR9fVxyXG4gICAgICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cclxuICAgIDwvbWF0LWFjY29yZGlvbj5cclxuPC9uZy10ZW1wbGF0ZT4iLCI8cGF3cy1tb2RhbD48L3Bhd3MtbW9kYWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFSTtNQUFBLHdFQUFxQzthQUFBOztJQUFBO0lBQUE7Ozs7b0JBWWpDO01BQUE7VUFBQTtxQ0FBQTtNQUFBLDZDQUFBO01BQUE7TUFBQSxlQUFrRSwwQ0FDOUQ7TUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUE7YUFBQTs0REFBQTthQUFBO01BQTRCLDhEQUVDO1VBQUE7SUFIakM7SUFBQTtJQUFBLFdBQUEsbUJBQUE7SUFDSTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7ZUFBQTtJQUFBLFdBQUEsMkRBQUE7SUFBNEI7SUFBQTtJQUVDO0lBQUE7Ozs7b0JBTGxCLDhDQUNuQjtNQUFBO01BQUEsK0VBQUE7TUFBQTtNQUFlLGtEQUNYO1VBQUEsaUVBQUE7VUFBQTtVQUFBLHVDQUtzQjtVQUFBLGFBQ1Y7O0lBTlM7SUFBckIsV0FBcUIsU0FBckI7Ozs7b0JBZFI7TUFBQTtNQUFBLHFDQUFBO01BQUEseURBQXFCO01BQUEsVUFBc0IsMENBQzNDO01BQUE7VUFBQTthQUFBO1VBQUEsZUFBd0IsOENBQ3BCO1VBQUE7YUFBQTtVQUFBLHlEQUVJO1VBQUEsdUJBQ0YsMENBQ047aUJBQUE7Y0FBQTtjQUFBLHFDQUFBO1VBQUEsMkNBQXdCO1VBQUEsV0FDbUIsNENBQ3pDO1VBQUE7VUFBQSwwREFBcUM7VUFBQSx5QkFDckM7VUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1REFBQTtVQUFBLHlFQUFBO1VBQUE7Y0FBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSwyQ0FBd0Q7TUFBYywwQ0FDbEU7TUFFTjs7O1FBWkE7UUFFTztRQUFBO1FBQUgsV0FBRyxtQkFBSDtRQU93QjtRQUExQixZQUEwQixTQUExQjs7O1FBVEY7UUFBQSxXQUFBLFNBQUE7UUFBcUI7UUFBQTtRQVNuQjtRQUFBO1FBQUEsWUFBQSxVQUFBLFNBQUE7Ozs7b0JDVEY7TUFBQTttQ0FBQSxVQUFBO01BQUE7O1FBQUE7Ozs7In0=
//# sourceMappingURL=paws-modal.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/navbar/nav-bar.component.css.ngstyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var styles = ['.paws-brand-container {\r\n    height: 100%;\r\n    padding: 3px;\r\n}\r\n\r\n.responsive-paws-logo {\r\n    height: auto;\r\n    width: auto;\r\n    min-height: 79px;\r\n}\r\n\r\n#float-navbar-right {\r\n    margin-top: 15px;\r\n    float: right;\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n    .responsive-paws-logo {\r\n        width: 270px;\r\n    }\r\n\r\n    .navbar > .container .navbar-brand {\r\n        margin-left: -16px;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 114px !important; \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 992px) {\r\n    .responsive-paws-logo {\r\n        width: auto;\r\n        margin-left: -15px;\r\n    }\r\n\r\n    .navbar > .container .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    \r\n    .mat-tab-label {\r\n        min-width: 145px !important; \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .responsive-paws-logo {\r\n        width: auto;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 160px !important; \r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1450px) {\r\n    #float-navbar-right {\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 160px !important; \r\n    }\r\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL25hdmJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9uYXZiYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=nav-bar.component.css.ngstyle.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/navbar/nav-bar.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_NavBarComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_NavBarComponent_0;
/* unused harmony export View_NavBarComponent_Host_0 */
/* unused harmony export NavBarComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_bar_component_css_ngstyle__ = __webpack_require__("../../../../../src/$$_gendir/app/navbar/nav-bar.component.css.ngstyle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_navbar_nav_bar_component__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_directives_navbar_enlarge_directive__ = __webpack_require__("../../../../../src/app/shared/directives/navbar-enlarge.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_shared_directives_scroll_spy_directive__ = __webpack_require__("../../../../../src/app/shared/directives/scroll-spy.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_shared_directives_paws_mat_tab_scroll_to_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-mat-tab-scroll-to.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/tabs/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */












var styles_NavBarComponent = [__WEBPACK_IMPORTED_MODULE_0__nav_bar_component_css_ngstyle__["a" /* styles */]];
var RenderType_NavBarComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2,
    styles: styles_NavBarComponent, data: {} });
function View_NavBarComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 58, 'nav', [['class',
                'navbar navbar-default navbar-fixed-top paws-navbar'], ['id', 'mainNavBar'], ['pawsNavbarEnlarge',
                ''], ['pawsScrollSpy', ''], ['role', 'navigation']], null, [[null,
                'newActiveTab'], ['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 1).onScroll() !== false);
                ad = (pd_0 && ad);
            }
            if (('window:scroll' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 2).onwindowScroll($event) !== false);
                ad = (pd_1 && ad);
            }
            if (('newActiveTab' === en)) {
                var pd_2 = (_co.changeCurrentTabIndex($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_3__app_shared_directives_navbar_enlarge_directive__["a" /* NavbarEnlargeDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["d" /* MatDialog */]], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_6__app_shared_directives_scroll_spy_directive__["a" /* ScrollSpyDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { isDisabled: [0, 'isDisabled'] }, { newActiveTab: 'newActiveTab' }),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, null, 52, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](6, 0, null, null, 18, 'div', [['class',
                'navbar-header page-scroll']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n      '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, null, 10, 'button', [['aria-expanded',
                'false'], ['class', 'navbar-toggle collapsed'], ['data-target', '#navbar-collapse'],
            ['data-toggle', 'collapse'], ['type', 'button']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](10, 0, null, null, 1, 'span', [['class', 'sr-only']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Toggle navigation'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](13, 0, null, null, 0, 'span', [['class', 'icon-bar']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](15, 0, null, null, 0, 'span', [['class', 'icon-bar']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](17, 0, null, null, 0, 'span', [['class', 'icon-bar']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](20, 0, null, null, 3, 'div', [['class', 'navbar-brand paws-brand-container']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](22, 0, null, null, 0, 'img', [['class', 'responsive-paws-logo'], ['src', '../../assets/images/PawsLogo.png']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](26, 0, null, null, 28, 'div', [['class', 'collapse navbar-collapse'],
            ['id', 'navbar-collapse'], ['pawsScrollTo', '']], null, [[null,
                'nowScrollingEvent']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('nowScrollingEvent' === en)) {
                var pd_0 = ((_co.currentlyScrolling = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](27, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_7__app_shared_directives_paws_mat_tab_scroll_to_directive__["a" /* PawsScrollTo */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */]], null, { nowScrollingEvent: 'nowScrollingEvent' }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](29, 0, null, null, 24, 'mat-tab-group', [['class', 'nav navbar-nav mat-tab-group'], ['id', 'float-navbar-right']], [[2,
                'mat-tab-group-dynamic-height', null], [2, 'mat-tab-group-inverted-header',
                null]], null, null, __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["c" /* View_MatTabGroup_0 */], __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["b" /* RenderType_MatTabGroup */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](30, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](31, 11714560, null, 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["d" /* MatTabGroup */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], { selectedIndex: [0, 'selectedIndex'] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵqud */](603979776, 1, { _tabs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](34, 16777216, null, null, 3, 'mat-tab', [['label', 'Home']], null, null, null, __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](35, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](36, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, 'textLabel'] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵqud */](335544320, 2, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](39, 16777216, null, null, 3, 'mat-tab', [['label', 'About']], null, null, null, __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](41, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, 'textLabel'] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵqud */](335544320, 3, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](44, 16777216, null, null, 3, 'mat-tab', [['label', 'Services']], null, null, null, __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](45, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](46, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, 'textLabel'] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵqud */](335544320, 4, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](49, 16777216, null, null, 3, 'mat-tab', [['label', 'Resources']], null, null, null, __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](50, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](51, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, 'textLabel'] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵqud */](335544320, 5, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        _ck(_v, 1, 0);
        var currVal_0 = _co.currentlyScrolling;
        _ck(_v, 2, 0, currVal_0);
        _ck(_v, 27, 0);
        var currVal_3 = _co.currentTabIndex;
        _ck(_v, 31, 0, currVal_3);
        var currVal_4 = 'Home';
        _ck(_v, 36, 0, currVal_4);
        var currVal_5 = 'About';
        _ck(_v, 41, 0, currVal_5);
        var currVal_6 = 'Services';
        _ck(_v, 46, 0, currVal_6);
        var currVal_7 = 'Resources';
        _ck(_v, 51, 0, currVal_7);
    }, function (_ck, _v) {
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 31).dynamicHeight;
        var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 31).headerPosition === 'below');
        _ck(_v, 29, 0, currVal_1, currVal_2);
    });
}
function View_NavBarComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'nav-bar', [], null, null, null, View_NavBarComponent_0, RenderType_NavBarComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 4243456, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_navbar_nav_bar_component__["a" /* NavBarComponent */], [], null, null)], null, null);
}
var NavBarComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]('nav-bar', __WEBPACK_IMPORTED_MODULE_2__app_navbar_nav_bar_component__["a" /* NavBarComponent */], View_NavBarComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL25hdmJhci9uYXYtYmFyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvbmF2YmFyL25hdi1iYXIuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL25hdmJhci9uYXYtYmFyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL25hdmJhci9uYXYtYmFyLmNvbXBvbmVudC50cy5OYXZCYXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3AgcGF3cy1uYXZiYXJcIiBpZD1cIm1haW5OYXZCYXJcIiByb2xlPVwibmF2aWdhdGlvblwiIHBhd3NOYXZiYXJFbmxhcmdlIHBhd3NTY3JvbGxTcHkgW2Rpc2FibGVXaGVuXT1cImN1cnJlbnRseVNjcm9sbGluZ1wiIChuZXdBY3RpdmVUYWIpPVwiY2hhbmdlQ3VycmVudFRhYkluZGV4KCRldmVudClcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlciBwYWdlLXNjcm9sbFwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGUgY29sbGFwc2VkXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhci1jb2xsYXBzZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZCBwYXdzLWJyYW5kLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJyZXNwb25zaXZlLXBhd3MtbG9nb1wiIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvUGF3c0xvZ28ucG5nXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyLWNvbGxhcHNlXCIgcGF3c1Njcm9sbFRvIChub3dTY3JvbGxpbmdFdmVudCk9XCJjdXJyZW50bHlTY3JvbGxpbmcgPSAkZXZlbnRcIj5cclxuICAgICAgPG1hdC10YWItZ3JvdXAgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiIGlkPVwiZmxvYXQtbmF2YmFyLXJpZ2h0XCIgW3NlbGVjdGVkSW5kZXhdPVwiY3VycmVudFRhYkluZGV4XCI+XHJcbiAgICAgICAgPG1hdC10YWIgbGFiZWw9XCJIb21lXCI+PC9tYXQtdGFiPlxyXG4gICAgICAgIDxtYXQtdGFiIGxhYmVsPVwiQWJvdXRcIj48L21hdC10YWI+XHJcbiAgICAgICAgPG1hdC10YWIgbGFiZWw9XCJTZXJ2aWNlc1wiPjwvbWF0LXRhYj5cclxuICAgICAgICA8bWF0LXRhYiBsYWJlbD1cIlJlc291cmNlc1wiPjwvbWF0LXRhYj5cclxuICAgICAgPC9tYXQtdGFiLWdyb3VwPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC8ubmF2YmFyLWNvbGxhcHNlIC0tPlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gLy5jb250YWluZXIgLS0+XHJcbjwvbmF2PiIsIjxuYXYtYmFyPjwvbmF2LWJhcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFxSztNQUFBO01BQUE7SUFBQTtJQUFySztFQUFBLHVDQUFBO01BQUE7YUFBQTtzQkFBQTtNQUFvTiw0Q0FDbE47VUFBQTtVQUFBLDRDQUF1QjtVQUFBLGFBQ3JCO1VBQUE7VUFBQSw4QkFBdUM7TUFDckM7VUFBQTtVQUFBO1VBQUEsNENBQWtJO1VBQUEsaUJBQ2hJO1VBQUE7VUFBQSxnQkFBc0I7TUFBd0Isa0RBQzlDO1VBQUE7VUFBQSw0Q0FBOEI7VUFBQSxpQkFDOUI7VUFBQTtVQUFBLGdCQUE4QixrREFDOUI7aUJBQUE7Y0FBQTtNQUE4QixnREFDdkI7VUFBQSxlQUNUO1VBQUE7VUFBQSw0Q0FBK0M7VUFBQSxpQkFDN0M7VUFBQTtVQUFBO01BQXlFLGdEQUNyRTtVQUFBLGFBQ0YsZ0RBRU47VUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQXdFO2NBQUE7Y0FBQTtZQUFBO1lBQXhFO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHlDQUEwSDtVQUFBLGVBQ3hIO1VBQUE7Y0FBQTtjQUFBO2FBQUE7VUFBQSxzQkFBQTs0Q0FBQTtVQUFBLDhDQUFnRztVQUFBLGlCQUM5RjtVQUFBOytDQUFBLFVBQUE7Z0NBQUEsa0RBQUE7VUFBQTtVQUFBLHNEQUFnQztVQUFBLCtCQUNoQztVQUFBO1VBQUEsNkRBQUE7VUFBQSwwRUFBQTtVQUFBO1VBQUEsc0RBQWlDO1VBQUEsK0JBQ2pDO1VBQUE7VUFBQSw2REFBQTtVQUFBLDBFQUFBO1VBQUE7VUFBQSxzREFBb0M7VUFBQSwrQkFDcEM7VUFBQTtVQUFBLDZEQUFBO1VBQUEsMEVBQUE7VUFBQTtVQUFBLHNEQUFxQztVQUFBLDZCQUN2QjtNQUNaLDhDQUNvQjtVQUFBLFdBQ3RCLDRDQUNjO1VBQUE7O0lBeEJ0QjtJQUFrSTtJQUFsSSxXQUFrSSxTQUFsSTtJQWNJO0lBQ2dFO0lBQTlELFlBQThELFNBQTlEO0lBQ1c7SUFBVCxZQUFTLFNBQVQ7SUFDUztJQUFULFlBQVMsU0FBVDtJQUNTO0lBQVQsWUFBUyxTQUFUO0lBQ1M7SUFBVCxZQUFTLFNBQVQ7O0lBSkY7SUFBQTtJQUFBLFlBQUEsbUJBQUE7Ozs7b0JDZk47TUFBQTthQUFBO1VBQUE7OzsifQ==
//# sourceMappingURL=nav-bar.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/panel-list/panel-list.component.css.shim.ngstyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var styles = ['#home[_ngcontent-%COMP%] {\r\n    background: url(top.c1b2611d87b6ce08661d.jpg) no-repeat 50% 50% fixed;\r\n    background-size: cover;\r\n    -webkit-background-size: cover;\r\n    height: 100%;\r\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWwtbGlzdC5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9wYW5lbC1saXN0L3BhbmVsLWxpc3QuY29tcG9uZW50LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7In0=
//# sourceMappingURL=panel-list.component.css.shim.ngstyle.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/panel-list/panel-list.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_PanelList; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_PanelList_0;
/* unused harmony export View_PanelList_Host_0 */
/* unused harmony export PanelListNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__panel_list_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/$$_gendir/app/panel-list/panel-list.component.css.shim.ngstyle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panels_about_panel_about_panel_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/panel-list/panels/about-panel/about-panel.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_panel_list_panels_about_panel_about_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panels_services_panel_services_panel_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/panel-list/panels/services-panel/services-panel.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_panel_list_panels_services_panel_services_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__panels_resources_panel_resources_panel_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/panel-list/panels/resources-panel/resources-panel.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_panel_list_panels_resources_panel_resources_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_directive__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_page_scroll_src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_panel_list_panel_list_component__ = __webpack_require__("../../../../../src/app/panel-list/panel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_panel_list_panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */














var styles_PanelList = [__WEBPACK_IMPORTED_MODULE_0__panel_list_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_PanelList = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0, styles: styles_PanelList,
    data: {} });
function View_PanelList_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](1, 0, null, null, 1, 'section', [['class', 'panel'], ['id', 'home']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, null, 1, 'paws-about-panel', [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__panels_about_panel_about_panel_component_ngfactory__["b" /* View_AboutPanelComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__panels_about_panel_about_panel_component_ngfactory__["a" /* RenderType_AboutPanelComponent */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](5, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__app_panel_list_panels_about_panel_about_panel_component__["a" /* AboutPanelComponent */], [], { shouldHaveSeparator: [0,
                'shouldHaveSeparator'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](7, 0, null, null, 1, 'paws-services-panel', [], null, null, null, __WEBPACK_IMPORTED_MODULE_4__panels_services_panel_services_panel_component_ngfactory__["b" /* View_ServicesPanelComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__panels_services_panel_services_panel_component_ngfactory__["a" /* RenderType_ServicesPanelComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](8, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_panel_list_panels_services_panel_services_panel_component__["a" /* ServicesPanelComponent */], [], { shouldHaveSeparator: [0, 'shouldHaveSeparator'] }, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](10, 0, null, null, 1, 'paws-resources-panel', [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__panels_resources_panel_resources_panel_component_ngfactory__["b" /* View_ResourcesPanelComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__panels_resources_panel_resources_panel_component_ngfactory__["a" /* RenderType_ResourcesPanelComponent */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](11, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__app_panel_list_panels_resources_panel_resources_panel_component__["a" /* ResourcesPanelComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](13, 0, null, null, 1, 'a', [['class', 'page-scroll glyphicon glyphicon-arrow-up reset-scroll'],
            ['href', '#home'], ['pageScroll', ''], ['title', 'Return to top']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 14).handleClick($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](14, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_directive__["a" /* PageScroll */], [__WEBPACK_IMPORTED_MODULE_9_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], [2, __WEBPACK_IMPORTED_MODULE_10__angular_router__["d" /* Router */]], __WEBPACK_IMPORTED_MODULE_11__angular_common__["c" /* DOCUMENT */]], { href: [0, 'href'], pageScroll: [1,
                'pageScroll'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n']))], function (_ck, _v) {
        var currVal_0 = true;
        _ck(_v, 5, 0, currVal_0);
        var currVal_1 = true;
        _ck(_v, 8, 0, currVal_1);
        _ck(_v, 11, 0);
        var currVal_2 = '#home';
        var currVal_3 = '';
        _ck(_v, 14, 0, currVal_2, currVal_3);
    }, null);
}
function View_PanelList_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'panel-list', [], null, null, null, View_PanelList_0, RenderType_PanelList)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_12__app_panel_list_panel_list_component__["a" /* PanelList */], [__WEBPACK_IMPORTED_MODULE_13__app_panel_list_panel_service__["a" /* PanelService */]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
var PanelListNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]('panel-list', __WEBPACK_IMPORTED_MODULE_12__app_panel_list_panel_list_component__["a" /* PanelList */], View_PanelList_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWwtbGlzdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWwtbGlzdC5jb21wb25lbnQudHMiLCJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvcGFuZWwtbGlzdC9wYW5lbC1saXN0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWwtbGlzdC5jb21wb25lbnQudHMuUGFuZWxMaXN0X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPCEtLSBJbnRybyBTZWN0aW9uIC0tPlxyXG48c2VjdGlvbiBpZD1cImhvbWVcIiBjbGFzcz1cInBhbmVsXCI+XHJcbjwvc2VjdGlvbj5cclxuXHJcbjxwYXdzLWFib3V0LXBhbmVsIFtzaG91bGRIYXZlU2VwYXJhdG9yXT1cInRydWVcIj48L3Bhd3MtYWJvdXQtcGFuZWw+XHJcbjxwYXdzLXNlcnZpY2VzLXBhbmVsIFtzaG91bGRIYXZlU2VwYXJhdG9yXT1cInRydWVcIj48L3Bhd3Mtc2VydmljZXMtcGFuZWw+XHJcbjxwYXdzLXJlc291cmNlcy1wYW5lbD48L3Bhd3MtcmVzb3VyY2VzLXBhbmVsPlxyXG5cclxuPGEgY2xhc3M9XCJwYWdlLXNjcm9sbCBnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwIHJlc2V0LXNjcm9sbFwiIGhyZWY9XCIjaG9tZVwiIHBhZ2VTY3JvbGwgdGl0bGU9XCJSZXR1cm4gdG8gdG9wXCI+PC9hPlxyXG4iLCI8cGFuZWwtbGlzdD48L3BhbmVsLWxpc3Q+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQXNCLDBDQUN0QjtNQUFBO01BQUEsMERBQWlDO01BQUEsdUJBQ3ZCLDRDQUVWO01BQUE7TUFBQTthQUFBO1VBQUEsdUNBQWtFO1VBQUEsU0FDbEU7VUFBQTs4Q0FBQSxVQUFBO1VBQUE7TUFBd0UsMENBQ3hFO1VBQUE7VUFBQTthQUFBO1VBQUEsZUFBNkMsNENBRTdDO1VBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtjQUFBLDhCQUFtSDs7UUFKakc7UUFBbEIsV0FBa0IsU0FBbEI7UUFDcUI7UUFBckIsV0FBcUIsU0FBckI7UUFDQTtRQUVpRTtRQUFhO1FBQTlFLFlBQWlFLFVBQWEsU0FBOUU7Ozs7b0JDUkE7TUFBQTthQUFBO1VBQUE7SUFBQTs7OzsifQ==
//# sourceMappingURL=panel-list.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/panel-list/panels/about-panel/about-panel.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_AboutPanelComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_AboutPanelComponent_0;
/* unused harmony export View_AboutPanelComponent_Host_0 */
/* unused harmony export AboutPanelComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/card/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_directives_paws_animate_on_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_panel_list_panels_about_panel_about_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */






var styles_AboutPanelComponent = [];
var RenderType_AboutPanelComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2,
    styles: styles_AboutPanelComponent, data: {} });
function View_AboutPanelComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 71, 'mat-card', [['class', 'custom-panel mat-card'], ['id', 'about']], [[2, 'bottom-separator', null]], null, null, __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_1__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, 0, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](4, 0, null, 0, 66, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](6, 0, null, null, 63, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](8, 0, null, null, 60, 'div', [['class', 'col-xs-12']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](10, 0, null, null, 2, 'div', [['class', 'mat-display-3'],
            ['fadeFrom', 'right'], ['pawsAnimateOnScroll', '']], null, [['window',
                'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 11).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](11, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['About'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](14, 0, null, null, 53, 'div', [['class', 'panel-text']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](16, 0, null, null, 2, 'p', [['class', 'mat-body-2'], ['fadeFrom',
                'left'], ['pawsAnimateOnScroll', ''], ['trigger', 'partial']], null, [['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 17).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](17, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'], trigger: [1, 'trigger'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                        Ms. Woodward received her law degree from the Washington & Lee University School of Law in Lexington, Virginia. She received\n                        a B.A. from Williams College in Williamstown, Massachusetts, and prior to that, she received an A.A.\n                        from Hartford College for Women in Hartford, Connecticut. She was admitted to the Virginia State\n                        Bar in 1980. In 2012, she had the honor of being appointed the Assistant Commissioner of Accounts\n                        for Fauquier County. Ms. Woodward and her husband have lived in Fauquier County for almost thirty\n                        years.\n                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](20, 0, null, null, 0, 'hr', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](22, 0, null, null, 44, 'div', [['fadeFrom', 'right'], ['pawsAnimateOnScroll', ''], ['trigger', 'partial']], null, [['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵnov */](_v, 23).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](23, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'], trigger: [1, 'trigger'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](25, 0, null, null, 1, 'p', [['class', 'mat-body-2']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            Since moving to the county, she has been active in many community groups. Some of the groups with which she has been involved\n                            include the following:\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](28, 0, null, null, 37, 'ul', [['class', 'mat-body-2'], ['style', 'list-style: none;']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](30, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Altrusa International, Inc. [International service organization]'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](33, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Fauquier Health Foundation'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](36, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Piedmont Symphony Orchestra'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](39, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Safe & SANE Task Force'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](42, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- SAVVI'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](45, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Blue Ridge Dance Theatre'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](48, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Fauquier Community Action Committee (local Head Start agency)'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](51, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Fauquier County Bar Association'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](54, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Fauquier County Chamber of Commerce'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](57, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Fauquier Courthouse NSDAR'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](60, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Literacy Volunteers of Fauquier County'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](63, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['- Warrenton Presbyterian Church'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, 0, ['\n']))], function (_ck, _v) {
        var currVal_1 = 'right';
        _ck(_v, 11, 0, currVal_1);
        var currVal_2 = 'left';
        var currVal_3 = 'partial';
        _ck(_v, 17, 0, currVal_2, currVal_3);
        var currVal_4 = 'right';
        var currVal_5 = 'partial';
        _ck(_v, 23, 0, currVal_4, currVal_5);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.shouldHaveSeparator;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_AboutPanelComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'paws-about-panel', [], null, null, null, View_AboutPanelComponent_0, RenderType_AboutPanelComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_panel_list_panels_about_panel_about_panel_component__["a" /* AboutPanelComponent */], [], null, null)], null, null);
}
var AboutPanelComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵccf */]('paws-about-panel', __WEBPACK_IMPORTED_MODULE_5__app_panel_list_panels_about_panel_about_panel_component__["a" /* AboutPanelComponent */], View_AboutPanelComponent_Host_0, { shouldHaveSeparator: 'shouldHaveSeparator' }, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL2Fib3V0LXBhbmVsL2Fib3V0LXBhbmVsLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvcGFuZWwtbGlzdC9wYW5lbHMvYWJvdXQtcGFuZWwvYWJvdXQtcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL2Fib3V0LXBhbmVsL2Fib3V0LXBhbmVsLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL2Fib3V0LXBhbmVsL2Fib3V0LXBhbmVsLmNvbXBvbmVudC50cy5BYm91dFBhbmVsQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPG1hdC1jYXJkIGlkPVwiYWJvdXRcIiBjbGFzcz1cImN1c3RvbS1wYW5lbFwiIFtjbGFzcy5ib3R0b20tc2VwYXJhdG9yXT1cInNob3VsZEhhdmVTZXBhcmF0b3JcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtZGlzcGxheS0zXCIgcGF3c0FuaW1hdGVPblNjcm9sbCBmYWRlRnJvbT1cInJpZ2h0XCI+QWJvdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgcGF3c0FuaW1hdGVPblNjcm9sbCBmYWRlRnJvbT1cImxlZnRcIiB0cmlnZ2VyPVwicGFydGlhbFwiIGNsYXNzPVwibWF0LWJvZHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNcy4gV29vZHdhcmQgcmVjZWl2ZWQgaGVyIGxhdyBkZWdyZWUgZnJvbSB0aGUgV2FzaGluZ3RvbiAmIExlZSBVbml2ZXJzaXR5IFNjaG9vbCBvZiBMYXcgaW4gTGV4aW5ndG9uLCBWaXJnaW5pYS4gU2hlIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgQi5BLiBmcm9tIFdpbGxpYW1zIENvbGxlZ2UgaW4gV2lsbGlhbXN0b3duLCBNYXNzYWNodXNldHRzLCBhbmQgcHJpb3IgdG8gdGhhdCwgc2hlIHJlY2VpdmVkIGFuIEEuQS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBIYXJ0Zm9yZCBDb2xsZWdlIGZvciBXb21lbiBpbiBIYXJ0Zm9yZCwgQ29ubmVjdGljdXQuIFNoZSB3YXMgYWRtaXR0ZWQgdG8gdGhlIFZpcmdpbmlhIFN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhciBpbiAxOTgwLiBJbiAyMDEyLCBzaGUgaGFkIHRoZSBob25vciBvZiBiZWluZyBhcHBvaW50ZWQgdGhlIEFzc2lzdGFudCBDb21taXNzaW9uZXIgb2YgQWNjb3VudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIEZhdXF1aWVyIENvdW50eS4gTXMuIFdvb2R3YXJkIGFuZCBoZXIgaHVzYmFuZCBoYXZlIGxpdmVkIGluIEZhdXF1aWVyIENvdW50eSBmb3IgYWxtb3N0IHRoaXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcGF3c0FuaW1hdGVPblNjcm9sbCBmYWRlRnJvbT1cInJpZ2h0XCIgdHJpZ2dlcj1cInBhcnRpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXQtYm9keS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5jZSBtb3ZpbmcgdG8gdGhlIGNvdW50eSwgc2hlIGhhcyBiZWVuIGFjdGl2ZSBpbiBtYW55IGNvbW11bml0eSBncm91cHMuIFNvbWUgb2YgdGhlIGdyb3VwcyB3aXRoIHdoaWNoIHNoZSBoYXMgYmVlbiBpbnZvbHZlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCIgY2xhc3M9XCJtYXQtYm9keS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBBbHRydXNhIEludGVybmF0aW9uYWwsIEluYy4gW0ludGVybmF0aW9uYWwgc2VydmljZSBvcmdhbml6YXRpb25dPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIEZhdXF1aWVyIEhlYWx0aCBGb3VuZGF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIFBpZWRtb250IFN5bXBob255IE9yY2hlc3RyYTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBTYWZlICYgU0FORSBUYXNrIEZvcmNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIFNBVlZJPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIEJsdWUgUmlkZ2UgRGFuY2UgVGhlYXRyZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBGYXVxdWllciBDb21tdW5pdHkgQWN0aW9uIENvbW1pdHRlZSAobG9jYWwgSGVhZCBTdGFydCBhZ2VuY3kpPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIEZhdXF1aWVyIENvdW50eSBCYXIgQXNzb2NpYXRpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gRmF1cXVpZXIgQ291bnR5IENoYW1iZXIgb2YgQ29tbWVyY2U8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gRmF1cXVpZXIgQ291cnRob3VzZSBOU0RBUjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBMaXRlcmFjeSBWb2x1bnRlZXJzIG9mIEZhdXF1aWVyIENvdW50eTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBXYXJyZW50b24gUHJlc2J5dGVyaWFuIENodXJjaDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9tYXQtY2FyZD4iLCI8cGF3cy1hYm91dC1wYW5lbD48L3Bhd3MtYWJvdXQtcGFuZWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7TUFBQSw2RUFBQTtNQUFBO2FBQUE7TUFBeUYsa0NBQ3JGO1VBQUE7VUFBQSxnQkFBdUIsa0RBQ25CO2lCQUFBO2NBQUEsMERBQWlCO1VBQUEsbUNBQ2I7VUFBQTtVQUFBLDhCQUF1QjtNQUNuQjtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBLHNFQUFnRTtpQkFBQSw4QkFBVztNQUMzRTtVQUFBO01BQXdCLDhEQUNwQjtVQUFBO2NBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUE0RTtNQU94RSw4REFDSjtVQUFBO1VBQUEsNENBQUk7VUFBQSw2QkFDSjtVQUFBO1VBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBNEQ7TUFDeEQ7VUFBQTtNQUFzQjtNQUdsQixrRUFDSjtVQUFBO1VBQUE7TUFBaUQsc0VBQzdDO2lCQUFBO2NBQUEsMERBQUk7VUFBQTtNQUF1RSxzRUFDM0U7aUJBQUE7Y0FBQSwwREFBSTtVQUFBLGlEQUFpQztVQUFBLHFDQUNyQztVQUFBO1VBQUEsOEJBQUk7TUFBa0Msc0VBQ3RDO2lCQUFBO2NBQUEsMERBQUk7VUFBQSw2Q0FBNkI7VUFBQSxxQ0FDakM7VUFBQTtVQUFBLDhCQUFJO01BQVksc0VBQ2hCO2lCQUFBO2NBQUEsMERBQUk7VUFBQSwrQ0FBK0I7VUFBQSxxQ0FDbkM7VUFBQTtVQUFBLDhCQUFJO01BQW9FLHNFQUN4RTtpQkFBQTtjQUFBLDBEQUFJO1VBQUEsc0RBQXNDO1VBQUEsbURBQzFDO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLDRDQUEwQztVQUFBLHFDQUM5QztVQUFBO1VBQUEsOEJBQUk7TUFBZ0Msc0VBQ3BDO2lCQUFBO2NBQUEsMERBQUk7VUFBQSw2REFBNkM7VUFBQSxtREFDakQ7VUFBQTtVQUFBLDRDQUFJO1VBQUEsc0NBQW9DO01BQ3ZDLDhEQUNIO1VBQUEsdUNBQ0o7VUFBQSxxQkFDSixrREFDSjtpQkFBQSwrQkFDSjs7SUFsQ3FEO0lBQS9DLFlBQStDLFNBQS9DO0lBRTJCO0lBQWdCO0lBQXZDLFlBQXVCLFVBQWdCLFNBQXZDO0lBU3lCO0lBQWlCO0lBQTFDLFlBQXlCLFVBQWlCLFNBQTFDOzs7SUFmc0I7SUFBMUMsV0FBMEMsU0FBMUM7Ozs7b0JDQUE7TUFBQTtvQ0FBQSxVQUFBO01BQUE7Ozs7In0=
//# sourceMappingURL=about-panel.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/panel-list/panels/resources-panel/resources-panel.component.css.shim.ngstyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var styles = ['#resources[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n\r\n\r\n@media screen and (max-width: 767px) {    \r\n    #resources[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n        margin-top: 5px;\r\n    }\r\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3Jlc291cmNlcy1wYW5lbC9yZXNvdXJjZXMtcGFuZWwuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvcGFuZWwtbGlzdC9wYW5lbHMvcmVzb3VyY2VzLXBhbmVsL3Jlc291cmNlcy1wYW5lbC5jb21wb25lbnQuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=resources-panel.component.css.shim.ngstyle.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/panel-list/panels/resources-panel/resources-panel.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ResourcesPanelComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ResourcesPanelComponent_0;
/* unused harmony export View_ResourcesPanelComponent_Host_0 */
/* unused harmony export ResourcesPanelComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources_panel_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/$$_gendir/app/panel-list/panels/resources-panel/resources-panel.component.css.shim.ngstyle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_list_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/list/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gendir_node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/icon/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/expansion/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/card/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_shared_directives_paws_animate_on_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_panel_list_panels_resources_panel_resources_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
















var styles_ResourcesPanelComponent = [__WEBPACK_IMPORTED_MODULE_0__resources_panel_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ResourcesPanelComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0,
    styles: styles_ResourcesPanelComponent, data: {} });
function View_ResourcesPanelComponent_2(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 11, 'a', [['class',
                'mat-list-item'], ['mat-list-item', ''], ['role', 'listitem'], ['target', '_blank']], [[1, 'href', 4]], [[null, 'focus'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('focus' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 1)._handleFocus() !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 1)._handleBlur() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_list_typings_index_ngfactory__["c" /* View_MatListItem_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_list_typings_index_ngfactory__["b" /* RenderType_MatListItem */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 1097728, null, 2, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["b" /* MatListItem */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["a" /* MatList */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["e" /* MatNavListCssMatStyler */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵqud */](603979776, 1, { _lines: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵqud */](335544320, 2, { _hasAvatar: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](4, 2, ['\n                                    ',
            '\n                                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](5, 0, null, 2, 0, 'span', [['style', 'flex: 1 1 auto']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 2, ['\n                                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](7, 0, null, 2, 3, 'mat-icon', [['class', 'mat-icon'], ['role',
                'img'], ['style', 'position: relative; left: 5px;']], null, null, null, __WEBPACK_IMPORTED_MODULE_4__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_4__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](9, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["d" /* MatIconRegistry */],
            [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['link'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 2, ['\n                                ']))], function (_ck, _v) {
        _ck(_v, 9, 0);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.linkDest;
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.linkText;
        _ck(_v, 4, 0, currVal_1);
    });
}
function View_ResourcesPanelComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 21, 'mat-expansion-panel', [['class', 'mat-expansion-panel']], [[2, 'mat-expanded', null], [2, 'mat-expansion-panel-spacing',
                null]], null, null, __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* AccordionItem */], null, [__WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["d" /* MatExpansionPanel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["d" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["b" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_9__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 1, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, 0, 7, 'mat-expansion-panel-header', [['class', 'mat-expansion-panel-header'],
                ['role', 'button']], [[1, 'tabindex', 0], [1, 'aria-controls', 0], [1, 'aria-expanded',
                    0], [1, 'aria-disabled', 0], [2, 'mat-expanded', null], [40, '@expansionHeight',
                    0]], [[null, 'click'], [null, 'keyup']], function (_v, en, $event) {
                var ad = true;
                if (('click' === en)) {
                    var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5)._toggle() !== false);
                    ad = (pd_0 && ad);
                }
                if (('keyup' === en)) {
                    var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5)._keyup($event) !== false);
                    ad = (pd_1 && ad);
                }
                return ad;
            }, __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_7__gendir_node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](5, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["e" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["d" /* MatExpansionPanel */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_a11y__["i" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵpod */](6, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵpod */](7, { value: 0, params: 1 }),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 2, ['\n                                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](9, 0, null, 2, 1, 'span', [['style', 'font-size: 18px;']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](10, null, [' ', ''])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 2, ['\n                            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 1, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](13, 0, null, 1, 7, 'mat-nav-list', [['class', 'mat-nav-list'], ['role', 'list']], null, null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_list_typings_index_ngfactory__["d" /* View_MatList_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_list_typings_index_ngfactory__["a" /* RenderType_MatList */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](14, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](15, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["a" /* MatList */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["e" /* MatNavListCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* ɵand */](16777216, null, 0, 1, null, View_ResourcesPanelComponent_2)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](19, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* IterableDiffers */]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 1, ['\n                        ']))], function (_ck, _v) {
        var currVal_9 = _v.context.$implicit.innerContent;
        _ck(_v, 19, 0, currVal_9);
    }, function (_ck, _v) {
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 2).expanded;
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 2)._hasSpacing();
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5).panel.disabled ? (0 - 1) : 0);
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5)._getPanelId();
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5)._isExpanded();
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5).panel.disabled;
        var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5)._isExpanded();
        var currVal_7 = _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5)._getExpandedState(), _ck(_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 5).expandedHeight));
        _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        var currVal_8 = _v.context.$implicit.header;
        _ck(_v, 10, 0, currVal_8);
    });
}
function View_ResourcesPanelComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 27, 'mat-card', [['class', 'custom-panel mat-card'], ['id', 'resources']], null, null, null, __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCard */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, 0, 22, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](6, 0, null, null, 19, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, null, 16, 'div', [['class', 'col-xs-12']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](10, 0, null, null, 2, 'div', [['class', 'mat-display-3'],
            ['fadeFrom', 'right'], ['pawsAnimateOnScroll', '']], null, [['window',
                'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 11).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](11, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_14__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Resources'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](14, 0, null, null, 9, 'div', [['class', 'panel-text'], ['fadeFrom', 'left'], ['pawsAnimateOnScroll',
                '']], null, [['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 15).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](15, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_14__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](17, 0, null, null, 5, 'mat-accordion', [['class', 'mat-accordion']], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["b" /* MatAccordion */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* ɵand */](16777216, null, null, 1, null, View_ResourcesPanelComponent_1)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](21, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* IterableDiffers */]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'right';
        _ck(_v, 11, 0, currVal_0);
        var currVal_1 = 'left';
        _ck(_v, 15, 0, currVal_1);
        var currVal_2 = _co.accordionPanels;
        _ck(_v, 21, 0, currVal_2);
    }, null);
}
function View_ResourcesPanelComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'paws-resources-panel', [], null, null, null, View_ResourcesPanelComponent_0, RenderType_ResourcesPanelComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_15__app_panel_list_panels_resources_panel_resources_panel_component__["a" /* ResourcesPanelComponent */], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
var ResourcesPanelComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]('paws-resources-panel', __WEBPACK_IMPORTED_MODULE_15__app_panel_list_panels_resources_panel_resources_panel_component__["a" /* ResourcesPanelComponent */], View_ResourcesPanelComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3Jlc291cmNlcy1wYW5lbC9yZXNvdXJjZXMtcGFuZWwuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9wYW5lbC1saXN0L3BhbmVscy9yZXNvdXJjZXMtcGFuZWwvcmVzb3VyY2VzLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9wYW5lbC1saXN0L3BhbmVscy9yZXNvdXJjZXMtcGFuZWwvcmVzb3VyY2VzLXBhbmVsLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3Jlc291cmNlcy1wYW5lbC9yZXNvdXJjZXMtcGFuZWwuY29tcG9uZW50LnRzLlJlc291cmNlc1BhbmVsQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPG1hdC1jYXJkIGlkPVwicmVzb3VyY2VzXCIgY2xhc3M9XCJjdXN0b20tcGFuZWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtZGlzcGxheS0zXCIgcGF3c0FuaW1hdGVPblNjcm9sbCBmYWRlRnJvbT1cInJpZ2h0XCI+UmVzb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtdGV4dFwiIHBhd3NBbmltYXRlT25TY3JvbGwgZmFkZUZyb209XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1hY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsICpuZ0Zvcj1cImxldCBhY2NvcmRpb25QYW5lbCBvZiBhY2NvcmRpb25QYW5lbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDtcIj4ge3thY2NvcmRpb25QYW5lbC5oZWFkZXJ9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW5hdi1saXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG1hdC1saXN0LWl0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHJlc291cmNlTGluayBvZiBhY2NvcmRpb25QYW5lbC5pbm5lckNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmhyZWZdPVwicmVzb3VyY2VMaW5rLmxpbmtEZXN0XCIgdGFyZ2V0PV9ibGFuaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZUxpbmsubGlua1RleHR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZsZXg6IDEgMSBhdXRvXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGxlZnQ6IDVweDtcIj5saW5rPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L21hdC1jYXJkPiIsIjxwYXdzLXJlc291cmNlcy1wYW5lbD48L3Bhd3MtcmVzb3VyY2VzLXBhbmVsPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDWWdDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsMkRBQUE7TUFBQTtNQUFBO01BQUEsa0JBRWtEO01BQUEsNENBRTlDO01BQUE7TUFBQSw4QkFBb0M7TUFDcEM7VUFBQTtVQUFBLCtEQUFBO1VBQUE7YUFBQTtVQUFBLGdEQUFpRDtNQUFlO0lBQWhFOztJQUhKO0lBRkEsV0FFQSxTQUZBO0lBRWtEO0lBQUE7Ozs7b0JBUDFEO01BQUE7VUFBQTtxQ0FBQTtNQUFBLDZDQUFBO01BQUE7TUFBQSxlQUFvRSwwREFDaEU7YUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUE7YUFBQTs2REFBQTthQUFBO01BQTRCLDhEQUN4QjtVQUFBO1VBQUEsMERBQStCO1VBQUEseUJBQWlDO01BQ3ZDLDBEQUM3QjtVQUFBO1VBQUE7YUFBQTtVQUFBLHNCQUFBO1VBQUEsb0NBQUE7VUFBQSwyQ0FBYztNQUNWO2FBQUE7NEJBQUEseUNBTUk7VUFBQSx1Q0FDTzs7UUFOWDtRQURBLFlBQ0EsU0FEQTs7UUFMUjtRQUFBO1FBQUEsV0FBQSxtQkFBQTtRQUNJO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtZQUFBO1FBQUEsV0FBQSwyREFBQTtRQUNtQztRQUFBOzs7O29CQVQvRDtNQUFBO01BQUEsaUVBQUE7TUFBQSx5RUFBQTtNQUFBO01BQThDLGtDQUMxQztVQUFBO1VBQUEsZ0JBQXVCLGtEQUNuQjtpQkFBQTtjQUFBLDBEQUFpQjtVQUFBLG1DQUNiO1VBQUE7VUFBQSw4QkFBdUI7TUFDbkI7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7VUFBQSxzRUFBZ0U7aUJBQUEsa0NBQWU7VUFBQSx5QkFDL0U7VUFBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQSxzRUFBNEQ7aUJBQUEsK0NBQ3hEO1VBQUE7VUFBQTthQUFBO1VBQUEsZUFBZTtNQUNYO2FBQUE7NEJBQUEseUNBYXNCO1VBQUEsMkNBQ1Y7VUFBQSx5QkFDZDtNQUNKLGtEQUNKO1VBQUEsYUFDSjs7SUFyQnFEO0lBQS9DLFlBQStDLFNBQS9DO0lBQzRDO0lBQTVDLFlBQTRDLFNBQTVDO0lBRTZCO0lBQXJCLFlBQXFCLFNBQXJCOzs7O29CQ1B4QjtNQUFBO3dDQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9
//# sourceMappingURL=resources-panel.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/panel-list/panels/services-panel/services-panel.component.css.shim.ngstyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var styles = ['.responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: auto;\r\n    font-size: 50px;\r\n}\r\n\r\n#BusinessCard[_ngcontent-%COMP%], #RealEstateCard[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n    .responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 75px;\r\n    }\r\n\r\n    #BusinessCard[_ngcontent-%COMP%], #RealEstateCard[_ngcontent-%COMP%] {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 992px) {\r\n    .responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 75px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1170px) {\r\n    .responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 100px;\r\n    }\r\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3NlcnZpY2VzLXBhbmVsL3NlcnZpY2VzLXBhbmVsLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3NlcnZpY2VzLXBhbmVsL3NlcnZpY2VzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=services-panel.component.css.shim.ngstyle.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/panel-list/panels/services-panel/services-panel.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ServicesPanelComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ServicesPanelComponent_0;
/* unused harmony export View_ServicesPanelComponent_Host_0 */
/* unused harmony export ServicesPanelComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_panel_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/$$_gendir/app/panel-list/panels/services-panel/services-panel.component.css.shim.ngstyle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/card/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_shared_directives_paws_animate_on_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/node_modules/@angular/material/icon/typings/index.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_panel_list_panels_services_panel_services_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */









var styles_ServicesPanelComponent = [__WEBPACK_IMPORTED_MODULE_0__services_panel_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ServicesPanelComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0,
    styles: styles_ServicesPanelComponent, data: {} });
function View_ServicesPanelComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 140, 'mat-card', [['class', 'custom-panel mat-card'], ['id', 'services']], [[2, 'bottom-separator',
                null]], null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, 0, 135, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](6, 0, null, null, 53, 'div', [['class', 'row responsive-service-cards']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, null, 2, 'div', [['class', 'mat-display-3'],
            ['fadeFrom', 'left'], ['pawsAnimateOnScroll', '']], null, [['window',
                'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 9).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](9, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Services'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](12, 0, null, null, 22, 'div', [['class', 'col-sm-6'], ['fadeFrom', 'right'], ['pawsAnimateOnScroll',
                '']], null, [['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 13).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](13, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](15, 0, null, null, 18, 'mat-card', [['class', 'mat-card']], null, null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](17, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCard */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](19, 0, null, 0, 3, 'mat-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](21, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["d" /* MatIconRegistry */],
            [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['attach_money'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](24, 0, null, 0, 0, 'hr', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](26, 0, null, 0, 6, 'mat-card-content', [['class', 'mat-card-content']], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](27, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](30, 0, null, null, 1, 'span', [['class', 'mat-title']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Estate Planning'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](36, 0, null, null, 22, 'div', [['class', 'col-sm-6'], ['fadeFrom', 'left'], ['id', 'RealEstateCard'],
            ['pawsAnimateOnScroll', '']], null, [['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 37).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](37, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](39, 0, null, null, 18, 'mat-card', [['class', 'mat-card']], null, null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](41, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCard */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](43, 0, null, 0, 3, 'mat-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](44, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](45, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["d" /* MatIconRegistry */],
            [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['home'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](48, 0, null, 0, 0, 'hr', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](50, 0, null, 0, 6, 'mat-card-content', [['class', 'mat-card-content']], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](51, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](52, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](54, 0, null, null, 1, 'span', [['class', 'mat-title']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Real Estate'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](61, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](63, 0, null, null, 50, 'div', [['class', 'row responsive-service-cards']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](65, 0, null, null, 23, 'div', [['class', 'col-sm-6'], ['fadeFrom', 'right'], ['pawsAnimateOnScroll',
                '']], null, [['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 66).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](66, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](68, 0, null, null, 19, 'mat-card', [['class', 'mat-card']], null, null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](69, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](70, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCard */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](73, 0, null, 0, 3, 'mat-icon', [['class', 'mat-icon'], ['role',
                'img']], null, null, null, __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](74, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](75, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['child_friendly'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](78, 0, null, 0, 0, 'hr', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](80, 0, null, 0, 6, 'mat-card-content', [['class', 'mat-card-content']], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](81, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](82, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                           '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](84, 0, null, null, 1, 'span', [['class', 'mat-title']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Guardianships'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](90, 0, null, null, 22, 'div', [['class', 'col-sm-6'], ['fadeFrom', 'left'], ['id', 'BusinessCard'], ['pawsAnimateOnScroll',
                '']], null, [['window', 'scroll']], function (_v, en, $event) {
            var ad = true;
            if (('window:scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 91).onwindowScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](91, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](93, 0, null, null, 18, 'mat-card', [['class', 'mat-card']], null, null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](94, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](95, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCard */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](97, 0, null, 0, 3, 'mat-icon', [['class', 'mat-icon'], ['role', 'img']], null, null, null, __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](98, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](99, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["d" /* MatIconRegistry */],
            [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['business'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](102, 0, null, 0, 0, 'hr', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](104, 0, null, 0, 6, 'mat-card-content', [['class', 'mat-card-content']], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](105, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](106, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](108, 0, null, null, 1, 'span', [['class', 'mat-title']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['Business Affairs'])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](115, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](117, 0, null, null, 21, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](119, 0, null, null, 18, 'div', [['class', 'col-xs-12'],
                ['fadeFrom', 'right'], ['pawsAnimateOnScroll', '']], null, [['window',
                    'scroll']], function (_v, en, $event) {
                var ad = true;
                if (('window:scroll' === en)) {
                    var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](_v, 120).onwindowScroll($event) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](120, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_5__app_shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, 'fadeFrom'] }, null), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](122, 0, null, null, 14, 'mat-card', [['class', 'mat-card']], null, null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](123, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](124, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCard */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](126, 0, null, 0, 9, 'span', [['class', 'mat-subheading-2'], ['style', 'font-size: 15px;']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                        For Business, Litigation and Family Law, contact\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](128, 0, null, null, 6, 'a', [['href', 'http://www.csadlawyers.com/'],
            ['target', '_blank']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                            Culin, Sharp, Autry & Day\n                            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](130, 0, null, null, 3, 'mat-icon', [['class', 'mat-icon'],
            ['role', 'img'], ['style', 'position: relative; top: 7px;']], null, null, null, __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_6__gendir_node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](131, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_core__["u" /* MatPrefixRejector */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](132, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["d" /* MatIconRegistry */],
            [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['link'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵted */](-1, 0, ['\n']))], function (_ck, _v) {
        var currVal_1 = 'left';
        _ck(_v, 9, 0, currVal_1);
        var currVal_2 = 'right';
        _ck(_v, 13, 0, currVal_2);
        _ck(_v, 21, 0);
        var currVal_3 = 'left';
        _ck(_v, 37, 0, currVal_3);
        _ck(_v, 45, 0);
        var currVal_4 = 'right';
        _ck(_v, 66, 0, currVal_4);
        _ck(_v, 75, 0);
        var currVal_5 = 'left';
        _ck(_v, 91, 0, currVal_5);
        _ck(_v, 99, 0);
        var currVal_6 = 'right';
        _ck(_v, 120, 0, currVal_6);
        _ck(_v, 132, 0);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.shouldHaveSeparator;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_ServicesPanelComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'paws-services-panel', [], null, null, null, View_ServicesPanelComponent_0, RenderType_ServicesPanelComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_8__app_panel_list_panels_services_panel_services_panel_component__["a" /* ServicesPanelComponent */], [], null, null)], null, null);
}
var ServicesPanelComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]('paws-services-panel', __WEBPACK_IMPORTED_MODULE_8__app_panel_list_panels_services_panel_services_panel_component__["a" /* ServicesPanelComponent */], View_ServicesPanelComponent_Host_0, { shouldHaveSeparator: 'shouldHaveSeparator' }, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3NlcnZpY2VzLXBhbmVsL3NlcnZpY2VzLXBhbmVsLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvcGFuZWwtbGlzdC9wYW5lbHMvc2VydmljZXMtcGFuZWwvc2VydmljZXMtcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3NlcnZpY2VzLXBhbmVsL3NlcnZpY2VzLXBhbmVsLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3BhbmVsLWxpc3QvcGFuZWxzL3NlcnZpY2VzLXBhbmVsL3NlcnZpY2VzLXBhbmVsLmNvbXBvbmVudC50cy5TZXJ2aWNlc1BhbmVsQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPG1hdC1jYXJkIGlkPVwic2VydmljZXNcIiBjbGFzcz1cImN1c3RvbS1wYW5lbFwiIFtjbGFzcy5ib3R0b20tc2VwYXJhdG9yXT1cInNob3VsZEhhdmVTZXBhcmF0b3JcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJlc3BvbnNpdmUtc2VydmljZS1jYXJkc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0LWRpc3BsYXktM1wiIHBhd3NBbmltYXRlT25TY3JvbGwgZmFkZUZyb209XCJsZWZ0XCI+U2VydmljZXM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgcGF3c0FuaW1hdGVPblNjcm9sbCBmYWRlRnJvbT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmF0dGFjaF9tb25leTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdC10aXRsZVwiPkVzdGF0ZSBQbGFubmluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgcGF3c0FuaW1hdGVPblNjcm9sbCBmYWRlRnJvbT1cImxlZnRcIiBpZD1cIlJlYWxFc3RhdGVDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmhvbWU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXQtdGl0bGVcIj5SZWFsIEVzdGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyByZXNwb25zaXZlLXNlcnZpY2UtY2FyZHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCIgcGF3c0FuaW1hdGVPblNjcm9sbCBmYWRlRnJvbT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBUT0RPOiBtYXliZSBuZWVkIGJldHRlciBpY29uIGZvciB0aGlzPyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hpbGRfZnJpZW5kbHk8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXQtdGl0bGVcIj5HdWFyZGlhbnNoaXBzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiBwYXdzQW5pbWF0ZU9uU2Nyb2xsIGZhZGVGcm9tPVwibGVmdFwiIGlkPVwiQnVzaW5lc3NDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmJ1c2luZXNzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdC10aXRsZVwiPkJ1c2luZXNzIEFmZmFpcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiIHBhd3NBbmltYXRlT25TY3JvbGwgZmFkZUZyb209XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0LXN1YmhlYWRpbmctMlwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3IgQnVzaW5lc3MsIExpdGlnYXRpb24gYW5kIEZhbWlseSBMYXcsIGNvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY3NhZGxhd3llcnMuY29tL1wiIHRhcmdldD1fYmxhbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdWxpbiwgU2hhcnAsIEF1dHJ5ICYgRGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogN3B4O1wiPmxpbms8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L21hdC1jYXJkPiIsIjxwYXdzLXNlcnZpY2VzLXBhbmVsPjwvcGF3cy1zZXJ2aWNlcy1wYW5lbD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtVQUFBO2FBQUE7VUFBQSxzQkFBQTtVQUFBLDZCQUE0RixrQ0FDeEY7VUFBQTtVQUFBLDRDQUF1QjtVQUFBLGlCQUNuQjtVQUFBO1VBQUEsOEJBQTBDO01BQ3RDO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO1VBQUEsc0VBQStEO2lCQUFBLGlDQUFjO1VBQUEscUJBQzdFO1VBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUEsc0VBQTJEO2lCQUFBLDJDQUN2RDtVQUFBO1VBQUEsK0RBQUE7VUFBQTthQUFBO01BQVUsa0RBQ047VUFBQTtVQUFBLCtEQUFBO1VBQUE7YUFBQTtVQUFBLGdEQUFVO01BQXVCLGtEQUNqQztVQUFBO1VBQUEsZ0JBQUksa0RBQ0o7aUJBQUE7Y0FBQTthQUFBO1VBQUEsc0JBQUE7VUFBQSw2QkFBa0I7TUFDZDtVQUFBO01BQXdCLHVEQUFzQjtVQUFBLDZCQUMvQjtNQUNaLHNEQUNUO1VBQUEscUJBQ047VUFBQTtjQUFBO3VCQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQSxzRUFBOEU7aUJBQUEsMkNBQzFFO1VBQUE7VUFBQSwrREFBQTtVQUFBO2FBQUE7TUFBVSxrREFDTjtVQUFBO1VBQUEsK0RBQUE7VUFBQTthQUFBO1VBQUEsZ0RBQVU7TUFBZSxrREFDekI7VUFBQTtVQUFBLGdCQUFJLGtEQUNKO2lCQUFBO2NBQUE7YUFBQTtVQUFBLHNCQUFBO1VBQUEsNkJBQWtCO01BQ2Q7VUFBQTtNQUF3QixtREFBa0I7VUFBQSw2QkFDM0I7TUFDWixzREFDVDtVQUFBLGlCQUNKLGtEQUNOO2lCQUFBO2NBQUEsMERBQUk7VUFBQSwrQkFDSjtVQUFBO1VBQUEsNENBQTBDO1VBQUEscUJBQ3RDO1VBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUEsc0VBQTJEO2lCQUFBLDJDQUN2RDtVQUFBO1VBQUEsK0RBQUE7VUFBQTthQUFBO01BQVUsa0RBQ3lDO01BQy9DO1VBQUE7YUFBQTtVQUFBLHNCQUFBOzJDQUFBO01BQVUsMENBQXlCO01BQ25DO1VBQUEsNENBQUk7TUFDSjtVQUFBO2FBQUE7VUFBQSxzQkFBQTtVQUFBLDZCQUFrQjtNQUNYO1VBQUE7TUFBd0IscURBQW9CO1VBQUEsNkJBQ2hDO01BQ1osc0RBQ1Q7VUFBQSxxQkFDTjtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBLHNFQUE0RTtpQkFBQSwyQ0FDeEU7VUFBQTtVQUFBLCtEQUFBO1VBQUE7YUFBQTtNQUFVLGtEQUNOO1VBQUE7VUFBQSwrREFBQTtVQUFBO2FBQUE7VUFBQSxnREFBVTtNQUFtQixrREFDN0I7VUFBQTtVQUFBLGdCQUFJLGtEQUNKO2lCQUFBO2NBQUE7YUFBQTtVQUFBLHNCQUFBO1VBQUEsNkJBQWtCO01BQ1Y7VUFBQTtNQUF3Qix3REFBdUI7VUFBQSw2QkFDcEM7TUFDWixzREFDVDtVQUFBLGlCQUNKLGtEQUNOO2lCQUFBO2NBQUEsMERBQUk7VUFBQSwrQkFDSjtVQUFBO1VBQUEsZ0JBQWlCLHNEQUNiO2lCQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUEsc0VBQTREO2lCQUFBLDJDQUN4RDtVQUFBO1VBQUEsNkVBQUE7VUFBQTthQUFBO01BQVUsa0RBQ047VUFBQTtVQUFBLDBEQUF3RDtVQUFBO01BRXBEO1VBQUE7VUFBQSxnQkFBb0Q7TUFFaEQ7VUFBQTtVQUFBLDZFQUFBO1VBQUE7YUFBQTtVQUFBLGdEQUFnRDtNQUFlLGtFQUMvRDtVQUFBLHVDQUNMO01BQ0ksc0RBQ1Q7VUFBQSxpQkFDSiw4Q0FDSjtVQUFBO0lBeERpRDtJQUEvQyxXQUErQyxTQUEvQztJQUMwQztJQUExQyxZQUEwQyxTQUExQztJQUVRO0lBT2tDO0lBQTFDLFlBQTBDLFNBQTFDO0lBRVE7SUFVa0M7SUFBMUMsWUFBMEMsU0FBMUM7SUFHUTtJQU9rQztJQUExQyxZQUEwQyxTQUExQztJQUVRO0lBVW1DO0lBQTNDLGFBQTJDLFNBQTNDO0lBTWdCOzs7SUFyRGlCO0lBQTdDLFdBQTZDLFNBQTdDOzs7O29CQ0FBO01BQUE7dUNBQUEsVUFBQTtNQUFBOzs7OyJ9
//# sourceMappingURL=services-panel.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/app/root.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RootComponent */
/* unused harmony export View_RootComponent_0 */
/* unused harmony export View_RootComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_nav_bar_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/navbar/nav-bar.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_navbar_nav_bar_component__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel_list_panel_list_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/panel-list/panel-list.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_panel_list_panel_list_component__ = __webpack_require__("../../../../../src/app/panel-list/panel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_panel_list_panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/footer/footer.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */









var styles_RootComponent = [];
var RenderType_RootComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2,
    styles: styles_RootComponent, data: {} });
function View_RootComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](1, 0, null, null, 1, 'nav-bar', [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__navbar_nav_bar_component_ngfactory__["b" /* View_NavBarComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__navbar_nav_bar_component_ngfactory__["a" /* RenderType_NavBarComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 4243456, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_navbar_nav_bar_component__["a" /* NavBarComponent */], [], null, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](4, 0, null, null, 2, 'panel-list', [], null, null, null, __WEBPACK_IMPORTED_MODULE_3__panel_list_panel_list_component_ngfactory__["b" /* View_PanelList_0 */], __WEBPACK_IMPORTED_MODULE_3__panel_list_panel_list_component_ngfactory__["a" /* RenderType_PanelList */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__app_panel_list_panel_list_component__["a" /* PanelList */], [__WEBPACK_IMPORTED_MODULE_5__app_panel_list_panel_service__["a" /* PanelService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['Loading...'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](8, 0, null, null, 1, 'footer-component', [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__footer_footer_component_ngfactory__["b" /* View_FooterComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component_ngfactory__["a" /* RenderType_FooterComponent */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](9, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__app_footer_footer_component__["a" /* FooterComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵted */](-1, null, ['\n  ']))], function (_ck, _v) {
        _ck(_v, 5, 0);
        _ck(_v, 9, 0);
    }, null);
}
function View_RootComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, 'root-component', [], null, null, null, View_RootComponent_0, RenderType_RootComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_8__app_root_component__["a" /* RootComponent */], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
var RootComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵccf */]('root-component', __WEBPACK_IMPORTED_MODULE_8__app_root_component__["a" /* RootComponent */], View_RootComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovUHJvZ3JhbW1pbmcvR2l0SHViL1Bhd3NXZWJzaXRlUmVkZXNpZ25lZC9zcmMvYXBwL3Jvb3QuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9yb290LmNvbXBvbmVudC50cyIsIm5nOi8vL0Q6L1Byb2dyYW1taW5nL0dpdEh1Yi9QYXdzV2Vic2l0ZVJlZGVzaWduZWQvc3JjL2FwcC9yb290LmNvbXBvbmVudC50cy5Sb290Q29tcG9uZW50Lmh0bWwiLCJuZzovLy9EOi9Qcm9ncmFtbWluZy9HaXRIdWIvUGF3c1dlYnNpdGVSZWRlc2lnbmVkL3NyYy9hcHAvcm9vdC5jb21wb25lbnQudHMuUm9vdENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgIDxuYXYtYmFyPjwvbmF2LWJhcj5cbiAgICA8cGFuZWwtbGlzdD5Mb2FkaW5nLi4uPC9wYW5lbC1saXN0PlxuICAgIDxmb290ZXItY29tcG9uZW50PjwvZm9vdGVyLWNvbXBvbmVudD5cbiAgIiwiPHJvb3QtY29tcG9uZW50Pjwvcm9vdC1jb21wb25lbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBLDhDQUNJO01BQUE7TUFBQSwrRUFBQTtNQUFBO01BQW1CLDhDQUNuQjtVQUFBO3FEQUFBLFVBQUE7VUFBQSw4REFBWTtVQUFBLCtCQUF1QjtNQUNuQztVQUFBO2FBQUE7VUFBQSxlQUFxQztJQURyQztJQUNBOzs7O29CQ0hKO01BQUE7OEJBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7In0=
//# sourceMappingURL=root.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
// TODO: modularise this app
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/modal-container/modal-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paws_modals_paws_modal_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ts");


var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(matDialog) {
        this.matDialog = matDialog;
    }
    ModalContainerComponent.prototype.openDialog = function (dialogName) {
        var dialogRef;
        if (dialogName) {
            dialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_1__paws_modals_paws_modal_component__["a" /* PawsModalComponent */], {
                height: 'auto',
                width: 'auto',
                data: { modalName: dialogName }
            });
        }
    };
    ModalContainerComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatDialog */] }]; };
    return ModalContainerComponent;
}());

//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/modal-container/paws-modals/paws-modal-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsModalType; });
var PawsModalType;
(function (PawsModalType) {
    PawsModalType[PawsModalType["BASE"] = 0] = "BASE";
    PawsModalType[PawsModalType["FAQ"] = 1] = "FAQ";
})(PawsModalType || (PawsModalType = {}));
//# sourceMappingURL=paws-modal-type.enum.js.map

/***/ }),

/***/ "../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paws_modal_service__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paws_modal_type_enum__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal-type.enum.ts");




var PawsModalComponent = /** @class */ (function () {
    function PawsModalComponent(modalDataService, dialogRef, data) {
        this.modalDataService = modalDataService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PawsModalComponent.prototype.ngOnInit = function () {
        var modalTitle = this.data.modalName;
        this.modal = this.modalDataService.getModal(modalTitle);
        this.isBaseModal = (this.modal.type === __WEBPACK_IMPORTED_MODULE_3__paws_modal_type_enum__["a" /* PawsModalType */].BASE) ? true : false;
    };
    PawsModalComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_2__paws_modal_service__["a" /* PawsModalService */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */] }, { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */]] }] }]; };
    return PawsModalComponent;
}());

//# sourceMappingURL=paws-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/modal-container/paws-modals/paws-modal.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsModal; });
var PawsModal = /** @class */ (function () {
    function PawsModal(type, title, content) {
        this.type = type;
        this.title = title;
        this.content = content;
    }
    return PawsModal;
}());

//# sourceMappingURL=paws-modal.model.js.map

/***/ }),

/***/ "../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paws_modal_model__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paws_modal_type_enum__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal-type.enum.ts");


var PawsModalService = /** @class */ (function () {
    function PawsModalService() {
    }
    PawsModalService.prototype.getModal = function (_modalName) {
        if (_modalName === "disclaimerModal") {
            return new __WEBPACK_IMPORTED_MODULE_0__paws_modal_model__["a" /* PawsModal */](__WEBPACK_IMPORTED_MODULE_1__paws_modal_type_enum__["a" /* PawsModalType */].BASE, 'Disclaimer', this.getDisclaimerModalText());
        }
        else if (_modalName === "privacyModal") {
            return new __WEBPACK_IMPORTED_MODULE_0__paws_modal_model__["a" /* PawsModal */](__WEBPACK_IMPORTED_MODULE_1__paws_modal_type_enum__["a" /* PawsModalType */].BASE, 'Privacy Statement', this.getPrivacyModalText());
        }
        else if (_modalName === "faqModal") {
            return new __WEBPACK_IMPORTED_MODULE_0__paws_modal_model__["a" /* PawsModal */](__WEBPACK_IMPORTED_MODULE_1__paws_modal_type_enum__["a" /* PawsModalType */].FAQ, 'Frequently Asked Questions', this.getFaqModalText());
        }
    };
    PawsModalService.prototype.getDisclaimerModalText = function () {
        return "\n        The information contained in the website of Patricia A. Woodward, Attorney at Law, is provided for informational purposes only, and should not be construed as legal advice on any subject matter. Any information contained herein is not intended to be a substitute for legal counsel on any subject matter. No recipients of content from this site, clients or otherwise, should act or refrain from acting on the basis of any content included in the site without seeking the appropriate legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed in the recipient's state. The content of this website contains general information and may not reflect current legal developments, verdicts or settlements. Patricia A. Woodward expressly disclaims all liability in respect to actions taken or not taken base on any or all the contents of this site. Any information sent to Patricia A. Woodard via Internet e-mail or through this website is not secure and is done so on a non-confidential basis. Please do not convey any confidential information to this office until a formal lawyer-client relationship has been otherwise established. As is the case with all communications, whether by phone, fax, letter or otherwise, the transmission of the website, in part or in whole, and/or the communication with Patricia A. Woodward via Internet e-mail or through this website does not constitute or create an attorney-client relationship between Patricia A. Woodward and any senders and/or recipient. This Law Office does not necessarily endorse, and is not responsible for, any third-party content that may be accessed through this website. The hypertext links herein are not under the control of Patricia A Woodward. Patricia A. Woodward expressly disclaims all liability in respect to actions taken or not taken based on any or all the contents of any third-party sites. These materials may be considered advertising in certain states.\n        ";
    };
    PawsModalService.prototype.getPrivacyModalText = function () {
        return "\n        This Privacy Policy describes Patricia A. Woodward's collection of information from her website. Information may be provided directly by you or may be derived mechanically from your browser when you visit this website. This website does not share, rent, or sell any information about visitors to the website to any third parties. This website collects and stores on an aggregate basis only the following information about the website visitors: the browser and its associated version number, the date and time of your visit, the IP address from where you accessed the site, the protocol which you used to access the site, the amount of data transferred to you, and the Internet address of the website from which you were redirected to us (if you linked directly to our site from another one). This information is used to measure the number of visitors to the site, all as part of an effort to improve the site for visitors. As you may know, a \"cookie\" is an element of data that websites can send to your browser which may then be stored on your system. This website does not use \"cookies\" to collect any information about visitors to this site. This website may contain links to other sites. Ms. Woodward is not responsible for the content or privacy policies of those websites.\n        ";
    };
    PawsModalService.prototype.getFaqModalText = function () {
        var FAQPanels = [
            {
                header: "Do you allow walk-ins?",
                innerContent: "\n                        No.  In order to allocate sufficient time for each client, it is necessary to work by appointment only. Please do not arrive at the office expecting to see Ms. Woodward without an appointment. When you call for an appointment, please give your name, the nature of your problem, and your telephone number, other information may also be requested\n                        "
            },
            {
                header: "How do I schedule a consultation?",
                innerContent: "\n                        Call 540-347-1482 and... TODO: need PAWS help for this (if we want this question)\n                        "
            },
            {
                header: "What if I can't make it to an appointment?",
                innerContent: "\n                        If you cannot keep an appointment, please give her office reasonable notice. Your courtesy will enable her to make time available for another client. \n                        "
            },
            {
                header: "How do I inquire about my case?",
                innerContent: "\n                        Please give the necessary information to Ms. Woodward's secretary. In many instances she will be familiar with your case. If she cannot answer your questions, she will confer with Ms. Woodward and will return your call as soon as possible.  When calling the office to inquire about your case or ask questions, conserve your time and that of the secretary by consolidating your questions for one call, rather than calling the office on each different question. \n                        "
            },
            {
                header: "What if I need speak to Ms. Woodward immediately?",
                innerContent: "\n                        When you call the office it may not be possible to speak to Ms. Woodward immediately. If she is in conference with a client, she will not interrupt it to take calls. Ms. Woodward is often out of the office doing research or attending court, so it is not always possible for her to return telephone calls immediately.\n                        "
            }
        ];
        return FAQPanels;
    };
    PawsModalService.prototype.getDisclaimerModalTitle = function () {
        return 'Disclaimer';
    };
    PawsModalService.prototype.getPrivacyModalTitle = function () {
        return 'Privacy Statement';
    };
    return PawsModalService;
}());

//# sourceMappingURL=paws-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        //set image min-height in pixels, good to have this hard coded here so we can reference it later
        this.minImgHeight = 79;
        this.currentTabIndex = 0;
        //stores whether the click-triggered scroll has finished or not.
        this.currentlyScrolling = true;
    }
    NavBarComponent.prototype.ngAfterViewInit = function () {
        //ng2-page-scroll configuration
        //can't use elementRef.nativeElement.offsetHeight 
        //because it changes for some reason
        __WEBPACK_IMPORTED_MODULE_0_ng2_page_scroll__["a" /* PageScrollConfig */].defaultScrollOffset = this.minImgHeight;
        __WEBPACK_IMPORTED_MODULE_0_ng2_page_scroll__["a" /* PageScrollConfig */].defaultDuration = 700;
        __WEBPACK_IMPORTED_MODULE_0_ng2_page_scroll__["a" /* PageScrollConfig */].defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing provided from https://github.com/Nolanus/ng2-page-scroll
                // willwsharp did not write this logic
                if (t === 0)
                    return b;
                if (t === d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    };
    NavBarComponent.prototype.changeCurrentTabIndex = function (newIndex) {
        this.currentTabIndex = newIndex;
    };
    return NavBarComponent;
}());

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng-material-base/ng-material-base.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgMaterialBaseModule; });
var NgMaterialBaseModule = /** @class */ (function () {
    function NgMaterialBaseModule() {
    }
    return NgMaterialBaseModule;
}());

//# sourceMappingURL=ng-material-base.module.js.map

/***/ }),

/***/ "../../../../../src/app/panel-list/panel-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");

var PanelList = /** @class */ (function () {
    function PanelList(panelService) {
        this.panelService = panelService;
    }
    PanelList.prototype.ngOnInit = function () {
    };
    PanelList.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__panel_service__["a" /* PanelService */] }]; };
    return PanelList;
}());

//# sourceMappingURL=panel-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/panel-list/panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelService; });
var PanelService = /** @class */ (function () {
    function PanelService() {
    }
    PanelService.prototype.createPanels = function () {
        var panels = [
            {
                title: 'About',
                cssId: 'about',
                summary: "\n                Ms. Woodward received her law degree from the Washington & Lee University School of Law in Lexington,\n                Virginia. She received a B.A. from Williams College in Williamstown, Massachusetts, \n                and prior to that, she received an A.A. from Hartford College for Women in Hartford, \n                Connecticut. She was admitted to the Virginia State Bar in 1980. In 2012, she had the \n                honor of being appointed the Assistant Commissioner of Accounts for Fauquier County. \n                Ms. Woodward and her husband have lived in Fauquier County for almost thirty years.            \n                ",
                moreDetails: "\n                Since moving to the county, she has been active in many community groups. Some \n                of the groups with which she has been involved include the following: \n                <ul>\n                    <li>Altrusa International, Inc. [International service organization]</li>\n                    <li>Fauquier Health Foundation</li>\n                    <li>Piedmont Symphony Orchestra</li>\n                    <li>Safe & SANE Task Force</li>\n                    <li>SAVVI</li>\n                    <li>Blue Ridge Dance Theatre</li>\n                    <li>Fauquier Community Action Committee (local Head Start agency)</li>\n                    <li>Fauquier County Bar Association</li>\n                    <li>Fauquier County Chamber of Commerce</li>\n                    <li>Fauquier Courthouse NSDAR</li>\n                    <li>Literacy Volunteers of Fauquier County</li>\n                    <li>Warrenton Presbyterian Church</li>\n                </ul>\n                "
            },
            {
                title: 'Services',
                cssId: 'services',
                moreDetails: '',
                summary: "\n                Ms. Woodward is engaged in a general practice of law. Her areas of practice include:\n                <ul>\n                    <li>Estate Planning</li>\n                    <li>Estate Administration</li>\n                    <li>Real Estate matters including sales, purchases and refinances</li>\n                    <li>Real Estate Partition Actions</li>\n                    <li>Guardianships and Conservatorships</li>\n                    <li>Creation of corporations, limited liability companies, partnerships and other business matters</li>\n                </ul>\n\n                For Business, Lititgation, and Family Law contact <a href=\"http://www.csadlawyers.com/\" target=\"_blank\">Culin, Sharp, Autry & Day</a>\n                "
            },
            {
                title: 'Resources',
                cssId: 'resources',
                moreDetails: '',
                summary: "\n\n                "
            }
        ];
        return panels;
    };
    return PanelService;
}());

//# sourceMappingURL=panel.service.js.map

/***/ }),

/***/ "../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPanelComponent; });
var AboutPanelComponent = /** @class */ (function () {
    function AboutPanelComponent() {
    }
    return AboutPanelComponent;
}());

//# sourceMappingURL=about-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesPanelComponent; });
var ResourcesPanelComponent = /** @class */ (function () {
    function ResourcesPanelComponent() {
    }
    ResourcesPanelComponent.prototype.ngOnInit = function () {
        this.createAccordion();
    };
    ResourcesPanelComponent.prototype.createAccordion = function () {
        this.accordionPanels = [
            {
                header: 'General',
                innerContent: [
                    {
                        linkText: 'Virginia Code',
                        linkDest: 'http://lis.virginia.gov/000/src.htm'
                    },
                    {
                        linkText: 'Virginia Courts',
                        linkDest: 'http://www.courts.state.va.us/'
                    },
                    {
                        linkText: 'Fauquier County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.fauquiercounty.gov/government/departments/circuitcourt/'
                    },
                    {
                        linkText: 'Fairfax County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.fairfaxcounty.gov/courts/circuit/'
                    },
                    {
                        linkText: 'Loudoun County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.loudoun.gov/index.aspx?NID=98'
                    },
                    {
                        linkText: 'Prince William County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.pwcgov.org/government/courts/circuit/Pages/default.aspx'
                    },
                    {
                        linkText: 'Piedmont Dispute Resolution',
                        linkDest: 'http://www.piedmontdisputeresolution.org/'
                    },
                    {
                        linkText: 'Virginia State Bar',
                        linkDest: 'http://www.vsb.org'
                    },
                    {
                        linkText: 'So You\'re 18',
                        linkDest: 'http://www.vsb.org/docs/SY18_2013.pdf'
                    },
                    {
                        linkText: 'Senior Citizen\'s Handbook',
                        linkDest: 'http://www.vsb.org/site/publications/senior-citizens-handbook'
                    },
                    {
                        linkText: 'Seniors & adults with disabilities',
                        linkDest: 'http://www.easyaccess.virginia.gov'
                    },
                    {
                        linkText: 'Veteran Resources',
                        linkDest: 'http://warriorcare.dodlive.mil/benefits/compensation-and-benefits/'
                    },
                    {
                        linkText: 'American Bar Association',
                        linkDest: 'http://www.americanbar.org/aba.html'
                    }
                ]
            },
            {
                header: 'Estate Planning',
                innerContent: [
                    {
                        linkText: 'FAQs Wills in Virginia',
                        linkDest: 'http://www.vsb.org/site/publications/wills-in-virginia/'
                    },
                    {
                        linkText: 'FAQs Health Care Decisions',
                        linkDest: 'http://www.vsb.org/site/public/healthcare-decisions-day/#FAQ'
                    },
                    {
                        linkText: 'Registry for Advance Medical Directives',
                        linkDest: 'http://www.virginiaregistry.org/'
                    },
                    {
                        linkText: ' Aging Together\'s Senior Resources',
                        linkDest: 'http://www.agingtogether.org/'
                    },
                    {
                        linkText: 'National Academy of Elder Law Attorneys',
                        linkDest: 'http://www.naela.org/'
                    }
                ]
            },
            {
                header: 'Probate',
                innerContent: [
                    {
                        linkText: ' Virginia Bar Association Guide to Administration of Decedents\' Estate in Virginia',
                        linkDest: 'http://vba.affiniscape.com/associations/11069/files/adminguide.pdf'
                    },
                    {
                        linkText: 'Fauquier County Commisioner of Account Instructions',
                        linkDest: 'http://www.fauquiercounty.gov/forms/departments/circuitcourt/pdf/Commiss_of_Accounts_Instructs.pdf'
                    },
                    {
                        linkText: 'Fauquier County Circuit Court Clerk\'s Office - Wills and Estates',
                        linkDest: 'http://www.fauquiercounty.gov/government/departments/circuitcourt/index.cfm?action=willsandestates'
                    },
                    {
                        linkText: 'Fairfax County Commissioner of Accounts website',
                        linkDest: 'http://www.fairfaxcommissionerofaccounts.org/open/page.page?shortname=resource.home'
                    },
                    {
                        linkText: 'Fairfax County Circuit Court Clerk\'s Office - Administration of Estates',
                        linkDest: 'http://www.fairfaxcounty.gov/courts/circuit/estates_info.htm'
                    },
                    {
                        linkText: 'Loudoun Commissioner of Accounts website',
                        linkDest: 'http://www.loudoun.gov/index.aspx?NID=2143'
                    },
                    {
                        linkText: 'Loudoun Circuit Court Clerk\'s Office - Probate Department',
                        linkDest: 'http://www.loudoun.gov/index.aspx?NID=1815'
                    },
                    {
                        linkText: 'Prince William Commissioner of Accounts',
                        linkDest: 'http://www.pwcgov.org/government/courts/circuit/Pages/Commissioner-of-Accounts.aspx'
                    },
                    {
                        linkText: 'Prince William County Circuit Court Clerk\'s Office - Probate/Qualify/Wills',
                        linkDest: 'http://www.pwcgov.org/government/courts/circuit/Pages/Probate-Qualify-Wills.aspx'
                    },
                    {
                        linkText: 'Virginia Circuit Court Fiduciary Forms',
                        linkDest: 'http://www.courts.state.va.us/forms/circuit/fiduciary.html'
                    }
                ]
            },
            {
                header: 'Guardianship',
                innerContent: [
                    {
                        linkText: 'Virginia Guardianship Association',
                        linkDest: 'http://vgavirginia.org/'
                    },
                    {
                        linkText: 'Guardianship & Conservatorship In Virginia booklet',
                        linkDest: 'http://www.vda.virginia.gov/pdfdocs/guardbook.pdf'
                    },
                    {
                        linkText: 'Guardianship & Conservatorship Proceedings Regarding Incapacitated Adults',
                        linkDest: 'http://www.courts.state.va.us/courtadmin/aoc/cip/programs/gal/adult/guardian_conserv_proceedings.pdf'
                    },
                    {
                        linkText: 'Adult Guardianship & Conservatorship',
                        linkDest: 'http://www.valegalaid.org/resource/adult-guardianship-and-conservatorship?ref=VfVNc'
                    },
                    {
                        linkText: 'Rappahannock-Rapidan Community Services (RRCS)',
                        linkDest: 'http://www.rrcsb.org/'
                    },
                    {
                        linkText: 'The Arc\'s Guardianship program F.A.Q.',
                        linkDest: 'http://www.thearcofnova.org/programs/info-referral/guardianship/guardianship-f-a-q/'
                    },
                    {
                        linkText: 'Virginia Circuit Court Fiduciary Forms',
                        linkDest: 'http://www.courts.state.va.us/forms/circuit/fiduciary.html'
                    }
                ]
            },
            {
                header: 'Business',
                innerContent: [
                    {
                        linkText: 'State Corporation Commission',
                        linkDest: 'http://www.scc.virginia.gov/clk/index.aspx'
                    },
                    {
                        linkText: 'Business Entities',
                        linkDest: 'https://www.scc.virginia.gov/clk/busdef.aspx'
                    },
                    {
                        linkText: 'Starting a Business - Small Business Administration',
                        linkDest: 'http://www.sba.gov/category/navigation-structure/starting-managing-business/starting-business'
                    },
                    {
                        linkText: 'Register Your Business Name',
                        linkDest: 'http://www.sba.gov/content/register-your-fictitious-or-doing-business-dba-name'
                    }
                ]
            },
            {
                header: 'Real Estate',
                innerContent: [
                    {
                        linkText: 'Picking a real estate agent',
                        linkDest: 'http://money.cnn.com/magazines/moneymag/money101/lesson8/index4.htm'
                    },
                    {
                        linkText: 'How to Choose a REALTOR',
                        linkDest: 'http://www.realtor.com/basics/buy/looking/realtor.asp?source=web'
                    },
                    {
                        linkText: 'Residential Property Disclosures',
                        linkDest: 'http://www.dpor.virginia.gov/News/Residential_Property_Disclosures/'
                    },
                    {
                        linkText: 'Northern Virginia Association of Realtors',
                        linkDest: 'https://nvar.com/'
                    }
                ]
            }
            // {
            //     header: 'Mobile Apps',
            //     innerContent: [
            //         {
            //             linkText: '"My Health Care Wishes" Lite - Apple',
            //             linkDest: 'https://itunes.apple.com/us/app/my-health-care-wishes-lite/id853612365?mt=8'
            //         },
            //         {
            //             linkText: '"My Health Care Wishes" Lite - Google Play',
            //             linkDest: 'https://play.google.com/store/apps/details?id=com.AmericanBar.MyHeralthCareWishesLite'
            //         }
            //     ]
            // }
        ];
    };
    return ResourcesPanelComponent;
}());

//# sourceMappingURL=resources-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPanelComponent; });
var ServicesPanelComponent = /** @class */ (function () {
    function ServicesPanelComponent() {
    }
    return ServicesPanelComponent;
}());

//# sourceMappingURL=services-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent.ctorParameters = function () { return []; };
    return RootComponent;
}());

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/navbar-enlarge.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarEnlargeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");



var NavbarEnlargeDirective = /** @class */ (function () {
    function NavbarEnlargeDirective(renderer, elem, document, matDialog) {
        this.renderer = renderer;
        this.elem = elem;
        this.document = document;
        this.matDialog = matDialog;
    }
    NavbarEnlargeDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.matDialog.afterOpen.subscribe(function () {
            _this.isModalOpen = true;
        });
        this.matDialog.afterAllClosed.subscribe(function () {
            _this.isModalOpen = false;
        });
    };
    NavbarEnlargeDirective.prototype.onScroll = function () {
        var collapseOffset = 50;
        var currentOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        //don't do anything with the navbar if a modal is open
        if (!this.isModalOpen) {
            if (currentOffset > collapseOffset) {
                this.renderer.addClass(this.elem.nativeElement, 'navbar-reduced');
            }
            else {
                this.renderer.removeClass(this.elem.nativeElement, 'navbar-reduced');
            }
        }
    };
    NavbarEnlargeDirective.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */] }, { type: Document, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */]] }] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */] }]; };
    return NavbarEnlargeDirective;
}());

//# sourceMappingURL=navbar-enlarge.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsAnimateOnScroll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var PawsAnimateOnScroll = /** @class */ (function () {
    function PawsAnimateOnScroll(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.alreadyAnimated = false;
        this.fadeFrom = 'right';
        this.trigger = 'full';
    }
    PawsAnimateOnScroll.prototype.ngOnInit = function () {
        this.renderer.addClass(this.elem.nativeElement, 'fade-from-' + this.fadeFrom);
        if (this.shouldAnimate()) {
            this.animate();
        }
    };
    PawsAnimateOnScroll.prototype.shouldAnimate = function () {
        var result = false;
        var boundary = this.elem.nativeElement.getBoundingClientRect();
        var top = boundary.top;
        var bottom = boundary.bottom;
        var height = boundary.height;
        var isFullyVisible = ((top >= 0) && (bottom <= (window.innerHeight + 125)));
        if (this.trigger === 'partial' &&
            (((height / 2) + window.innerHeight >= bottom))) {
            result = true;
        }
        else if (this.trigger === 'full' &&
            ((top >= 0) && (bottom <= (window.innerHeight - 50)))) {
            result = true;
        }
        return result;
    };
    PawsAnimateOnScroll.prototype.animate = function () {
        this.renderer.addClass(this.elem.nativeElement, 'scroll-animated');
        this.alreadyAnimated = true;
    };
    PawsAnimateOnScroll.prototype.onwindowScroll = function () {
        if (!this.alreadyAnimated && this.shouldAnimate()) {
            this.animate();
        }
    };
    PawsAnimateOnScroll.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */] }]; };
    return PawsAnimateOnScroll;
}());

//# sourceMappingURL=paws-animate-on-scroll.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/paws-mat-tab-scroll-to.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsScrollTo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");



var PawsScrollTo = /** @class */ (function () {
    function PawsScrollTo(renderer, elem, pageScrollService, document) {
        this.renderer = renderer;
        this.elem = elem;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.elements = [];
        this.nowScrolling = false;
        this.hasScrollFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.nowScrollingEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    PawsScrollTo.prototype.ngDoCheck = function () {
        if (this.elements.length < 4) {
            this.collectTabElements();
        }
    };
    PawsScrollTo.prototype.collectTabElements = function () {
        var _this = this;
        this.elements = this.elem.nativeElement.querySelectorAll('div.mat-tab-label');
        //this is super janky... but it does work... take that angular material 2 team!
        this.elements.forEach(function (elem) {
            _this.renderer.listen(elem, "click", function (event) {
                var dest = '#' + elem.innerText.toLowerCase();
                var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].newInstance({
                    document: _this.document,
                    scrollTarget: dest,
                    pageScrollOffset: 79,
                    pageScrollFinishListener: _this.hasScrollFinished
                });
                _this.hasScrollFinished.subscribe(function (scrollComplete) {
                    if (!scrollComplete) {
                        console.warn('Scroll did not complete');
                    }
                    _this.nowScrollingEvent.emit(false);
                });
                _this.nowScrollingEvent.emit(true);
                _this.pageScrollService.start(pageScrollInstance);
            });
        });
    };
    PawsScrollTo.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */] }, { type: __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollService */] }, { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */]] }] }]; };
    return PawsScrollTo;
}());

//# sourceMappingURL=paws-mat-tab-scroll-to.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/scroll-spy.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollSpyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");


var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(document, el, renderer2) {
        this.document = document;
        this.el = el;
        this.renderer2 = renderer2;
        this.elements = [];
        this.isDoneLoading = false;
        this.currentTabIndex = 0;
        this.newActiveTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        //input property to be used to determine when we should not work
        this.isDisabled = false;
    }
    ScrollSpyDirective.prototype.ngDoCheck = function () {
        if (!this.isDoneLoading) {
            this.collectIds();
        }
    };
    ScrollSpyDirective.prototype.onwindowScroll = function ($event) {
        var _this = this;
        if (!this.isDisabled) {
            this.elements.forEach(function (elem, index) {
                var top = elem.destination.getBoundingClientRect().top;
                if (top >= 0 && top <= 100) {
                    _this.newActiveTab.emit(index);
                    return;
                }
            });
        }
    };
    ScrollSpyDirective.prototype.collectIds = function () {
        var _this = this;
        if (this.elements.length >= 4) {
            this.isDoneLoading = true;
        }
        var elements = this.el.nativeElement.querySelectorAll('div.mat-tab-label');
        if (!this.currentActiveLink) {
            this.currentActiveLink = elements[0];
        }
        elements.forEach(function (elem) {
            var id = ScrollSpyDirective.createId(elem);
            if (id) {
                var destination = _this.resolveDestination(id);
                if (destination) {
                    var isUnique = _this.elements.some(function (element) {
                        return element.id === id;
                    });
                    if (!isUnique) {
                        _this.elements.push({
                            id: id,
                            link: elem,
                            destination: destination
                        });
                    }
                }
            }
        });
    };
    ScrollSpyDirective.prototype.resolveDestination = function (id) {
        var destination = this.document.getElementById(id);
        if (!destination) {
            return null;
        }
        return destination;
    };
    //for the time being, I am constrained to using the label for the mat-tab until I find
    //a more custom way of setting the target... this will have to do
    ScrollSpyDirective.createId = function (elem) {
        var label = elem.innerText;
        if (!label) {
            return null;
        }
        return label.replace('#', '').toLowerCase();
    };
    ScrollSpyDirective.ctorParameters = function () { return [{ type: Document, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */]] }] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */] }]; };
    return ScrollSpyDirective;
}());

//# sourceMappingURL=scroll-spy.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gendir_app_app_module_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/app/app.module.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["k" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
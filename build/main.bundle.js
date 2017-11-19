webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_dialog_typings_index_ngfactory__ = __webpack_require__("../../../material/dialog/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_datepicker_typings_index_ngfactory__ = __webpack_require__("../../../material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_tooltip_typings_index_ngfactory__ = __webpack_require__("../../../material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_snack_bar_typings_index_ngfactory__ = __webpack_require__("../../../material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_modal_container_paws_modals_paws_modal_component_ngfactory__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__side_nav_side_nav_component_ngfactory__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__root_component_ngfactory__ = __webpack_require__("../../../../../src/app/root.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__ = __webpack_require__("../../../animations/esm5/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_page_scroll_src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material_sort__ = __webpack_require__("../../../material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__panel_list_panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__footer_modal_container_paws_modals_paws_modal_service__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_page_scroll_src_ng2_page_scroll_module__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_cdk_accordion__ = __webpack_require__("../../../cdk/esm5/accordion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__angular_cdk_stepper__ = __webpack_require__("../../../cdk/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ng_material_base_ng_material_base_module__ = __webpack_require__("../../../../../src/app/ng-material-base/ng-material-base.module.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 

































































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__root_component__["a" /* RootComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_dialog_typings_index_ngfactory__["a" /* MatDialogContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_datepicker_typings_index_ngfactory__["a" /* MatDatepickerContentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_tooltip_typings_index_ngfactory__["a" /* TooltipComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_snack_bar_typings_index_ngfactory__["a" /* MatSnackBarContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_snack_bar_typings_index_ngfactory__["b" /* SimpleSnackBarNgFactory */], __WEBPACK_IMPORTED_MODULE_7__footer_modal_container_paws_modals_paws_modal_component_ngfactory__["a" /* PawsModalComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__side_nav_side_nav_component_ngfactory__["a" /* SideNavComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__root_component_ngfactory__["a" /* RootComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModuleRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* LOCALE_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵm */], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* LOCALE_ID */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_10__angular_common__["l" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["k" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* LOCALE_ID */], [2, __WEBPACK_IMPORTED_MODULE_10__angular_common__["s" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵf */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵk */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["r" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Sanitizer */], null, [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["e" /* GestureConfig */], [[2, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["m" /* MatCommonModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["o" /* ɵKeyEventsPlugin */](p1_0), new __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["e" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["d" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_13__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["p" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["h" /* Meta */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["h" /* Meta */], [__WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["i" /* Title */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["i" /* Title */], [__WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], __WEBPACK_IMPORTED_MODULE_15_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_animations__["b" /* AnimationBuilder */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["b" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["b" /* DIR_DOCUMENT */], null, [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["b" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["c" /* Directionality */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["c" /* Directionality */], [[2, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["b" /* DIR_DOCUMENT */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["c" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["c" /* ScrollDispatcher */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["f" /* ViewportRuler */]], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["f" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["f" /* ScrollStrategyOptions */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["c" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["d" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["i" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["d" /* OverlayContainer */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["l" /* ɵf */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["l" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["f" /* ViewportRuler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["m" /* ɵg */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["n" /* ɵh */], [[3, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["m" /* ɵg */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["f" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["d" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["l" /* ɵf */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["m" /* ɵg */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["j" /* ɵc */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["k" /* ɵd */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_21__angular_material_autocomplete__["a" /* MAT_AUTOCOMPLETE_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_21__angular_material_autocomplete__["b" /* MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["l" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["l" /* InteractivityChecker */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["k" /* FocusTrapFactory */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["k" /* FocusTrapFactory */], [__WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["l" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](136192, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["e" /* AriaDescriber */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["c" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["e" /* AriaDescriber */]], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["p" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["o" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["p" /* LiveAnnouncer */]], [2, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["m" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["i" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["g" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["i" /* FocusMonitor */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_23__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_collections__["d" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_23__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_observers__["b" /* MutationObserverFactory */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_observers__["b" /* MutationObserverFactory */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["d" /* MatDialog */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], [2, __WEBPACK_IMPORTED_MODULE_10__angular_common__["f" /* Location */]], __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["d" /* MatDialog */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_26__angular_material_icon__["d" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_26__angular_material_icon__["a" /* ICON_REGISTRY_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_26__angular_material_icon__["d" /* MatIconRegistry */]], [2, __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["a" /* HttpClient */]], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["g" /* MatDatepickerIntl */], __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["g" /* MatDatepickerIntl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["a" /* MAT_DATEPICKER_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["b" /* MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["d" /* ErrorStateMatcher */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["d" /* ErrorStateMatcher */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__["b" /* MAT_MENU_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__["d" /* ɵc21 */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["h" /* MAT_DATE_LOCALE */], null, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* LOCALE_ID */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["c" /* DateAdapter */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["y" /* NativeDateAdapter */], [[2, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["h" /* MAT_DATE_LOCALE */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_30__angular_material_select__["a" /* MAT_SELECT_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_30__angular_material_select__["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_31__angular_material_tooltip__["a" /* MAT_TOOLTIP_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_31__angular_material_tooltip__["b" /* MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__["b" /* MatPaginatorIntl */], __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__["a" /* MAT_PAGINATOR_INTL_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__["b" /* MatPaginatorIntl */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["d" /* MediaMatcher */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["a" /* BreakpointObserver */], __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["a" /* BreakpointObserver */], [__WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_34__angular_material_snack_bar__["b" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_34__angular_material_snack_bar__["b" /* MatSnackBar */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["b" /* Overlay */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["p" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["a" /* BreakpointObserver */], [3, __WEBPACK_IMPORTED_MODULE_34__angular_material_snack_bar__["b" /* MatSnackBar */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_35__angular_material_sort__["b" /* MatSortHeaderIntl */], __WEBPACK_IMPORTED_MODULE_35__angular_material_sort__["a" /* MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_35__angular_material_sort__["b" /* MatSortHeaderIntl */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__["a" /* MatStepperIntl */], __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__["a" /* MatStepperIntl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["j" /* ɵi */], __WEBPACK_IMPORTED_MODULE_37__angular_forms__["j" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_38__panel_list_panel_service__["a" /* PanelService */], __WEBPACK_IMPORTED_MODULE_38__panel_list_panel_service__["a" /* PanelService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_39__footer_modal_container_paws_modals_paws_modal_service__["a" /* PawsModalService */], __WEBPACK_IMPORTED_MODULE_39__footer_modal_container_paws_modals_paws_modal_service__["a" /* PawsModalService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["q" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], function (p0_0) { return [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["t" /* ɵh */](p0_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgProbeToken */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵConsole */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_40_ng2_page_scroll_src_ng2_page_scroll_module__["a" /* Ng2PageScrollModule */], __WEBPACK_IMPORTED_MODULE_40_ng2_page_scroll_src_ng2_page_scroll_module__["a" /* Ng2PageScrollModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["a" /* BidiModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */], true, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["m" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["m" /* MatCommonModule */], [[2, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["b" /* PlatformModule */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["b" /* PlatformModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["x" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["x" /* MatRippleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["v" /* MatPseudoCheckboxModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["v" /* MatPseudoCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["t" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["t" /* MatOptionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_41__angular_cdk_portal__["g" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_41__angular_cdk_portal__["g" /* PortalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["e" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_overlay__["e" /* OverlayModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_21__angular_material_autocomplete__["c" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_21__angular_material_autocomplete__["c" /* MatAutocompleteModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["a" /* A11yModule */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_a11y__["a" /* A11yModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_42__angular_material_button__["d" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material_button__["d" /* MatButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_43__angular_material_button_toggle__["a" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_43__angular_material_button_toggle__["a" /* MatButtonToggleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_44__angular_material_card__["d" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_44__angular_material_card__["d" /* MatCardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_observers__["c" /* ObserversModule */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_observers__["c" /* ObserversModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_45__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_45__angular_material_checkbox__["a" /* MatCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_46__angular_material_chips__["a" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_46__angular_material_chips__["a" /* MatChipsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["i" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["i" /* MatDialogModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_26__angular_material_icon__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_26__angular_material_icon__["c" /* MatIconModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["h" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_datepicker__["h" /* MatDatepickerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_47__angular_cdk_accordion__["c" /* CdkAccordionModule */], __WEBPACK_IMPORTED_MODULE_47__angular_cdk_accordion__["c" /* CdkAccordionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_48__angular_material_expansion__["b" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_48__angular_material_expansion__["b" /* MatExpansionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["o" /* MatLineModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["o" /* MatLineModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_49__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_49__angular_material_grid_list__["a" /* MatGridListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_50__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_50__angular_material_form_field__["c" /* MatFormFieldModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_51__angular_material_input__["a" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_51__angular_material_input__["a" /* MatInputModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_52__angular_material_list__["d" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_52__angular_material_list__["d" /* MatListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__["c" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__["c" /* MatMenuModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["z" /* NativeDateModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["z" /* NativeDateModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["q" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["q" /* MatNativeDateModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_30__angular_material_select__["c" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_30__angular_material_select__["c" /* MatSelectModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_31__angular_material_tooltip__["c" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material_tooltip__["c" /* MatTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__["c" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_32__angular_material_paginator__["c" /* MatPaginatorModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_53__angular_material_progress_bar__["a" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_53__angular_material_progress_bar__["a" /* MatProgressBarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_54__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_54__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_55__angular_material_radio__["a" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_55__angular_material_radio__["a" /* MatRadioModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_56__angular_material_sidenav__["a" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_56__angular_material_sidenav__["a" /* MatSidenavModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_57__angular_material_slider__["a" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_57__angular_material_slider__["a" /* MatSliderModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_58__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_58__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["c" /* LayoutModule */], __WEBPACK_IMPORTED_MODULE_33__angular_cdk_layout__["c" /* LayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_34__angular_material_snack_bar__["d" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_34__angular_material_snack_bar__["d" /* MatSnackBarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_35__angular_material_sort__["c" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_35__angular_material_sort__["c" /* MatSortModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_59__angular_cdk_table__["m" /* CdkTableModule */], __WEBPACK_IMPORTED_MODULE_59__angular_cdk_table__["m" /* CdkTableModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_60__angular_material_table__["a" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_60__angular_material_table__["a" /* MatTableModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_61__angular_material_tabs__["h" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_61__angular_material_tabs__["h" /* MatTabsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_62__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_62__angular_material_toolbar__["a" /* MatToolbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_63__angular_cdk_stepper__["d" /* CdkStepperModule */], __WEBPACK_IMPORTED_MODULE_63__angular_cdk_stepper__["d" /* CdkStepperModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__["b" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_36__angular_material_stepper__["b" /* MatStepperModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_64__ng_material_base_ng_material_base_module__["a" /* NgMaterialBaseModule */], __WEBPACK_IMPORTED_MODULE_64__ng_material_base_ng_material_base_module__["a" /* NgMaterialBaseModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["i" /* ɵba */], __WEBPACK_IMPORTED_MODULE_37__angular_forms__["i" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_37__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_37__angular_forms__["c" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_29__angular_material_menu__["a" /* MAT_MENU_DEFAULT_OPTIONS */], { overlapTrigger: true, xPosition: "after", yPosition: "below" }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["g" /* MAT_DATE_FORMATS */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["i" /* MAT_NATIVE_DATE_FORMATS */], [])]); });



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_nav_bar_component__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_modal_container_modal_container_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_directives_navbar_enlarge_directive__ = __webpack_require__("../../../../../src/app/shared/directives/navbar-enlarge.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_directives_scroll_spy_directive__ = __webpack_require__("../../../../../src/app/shared/directives/scroll-spy.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_material_base_ng_material_base_module__ = __webpack_require__("../../../../../src/app/ng-material-base/ng-material-base.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_modal_container_paws_modals_paws_modal_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_modal_container_paws_modals_paws_modal_service__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__panel_list_panel_list_component__ = __webpack_require__("../../../../../src/app/panel-list/panel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__panel_list_panels_about_panel_about_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__panel_list_panels_services_panel_services_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__panel_list_panels_resources_panel_resources_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__panel_list_panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_directives_paws_mat_tab_scroll_to_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-mat-tab-scroll-to.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_directives_paws_animate_on_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__navbar_mobile_navbar_mobile_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// TODO: modularise this app
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_material_base_ng_material_base_module__["a" /* NgMaterialBaseModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__root_component__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_13__panel_list_panel_list_component__["a" /* PanelList */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_directives_navbar_enlarge_directive__["a" /* NavbarEnlargeDirective */],
                __WEBPACK_IMPORTED_MODULE_9__shared_directives_scroll_spy_directive__["a" /* ScrollSpyDirective */],
                __WEBPACK_IMPORTED_MODULE_19__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */],
                __WEBPACK_IMPORTED_MODULE_18__shared_directives_paws_mat_tab_scroll_to_directive__["a" /* PawsScrollTo */],
                __WEBPACK_IMPORTED_MODULE_7__footer_modal_container_modal_container_component__["a" /* ModalContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_modal_container_paws_modals_paws_modal_component__["a" /* PawsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__panel_list_panels_about_panel_about_panel_component__["a" /* AboutPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_15__panel_list_panels_services_panel_services_panel_component__["a" /* ServicesPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_16__panel_list_panels_resources_panel_resources_panel_component__["a" /* ResourcesPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_20__navbar_mobile_navbar_mobile_navbar_component__["a" /* MobileNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__side_nav_side_nav_component__["a" /* SideNavComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__panel_list_panel_service__["a" /* PanelService */],
                __WEBPACK_IMPORTED_MODULE_12__footer_modal_container_paws_modals_paws_modal_service__["a" /* PawsModalService */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["d" /* PageScrollService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__root_component__["a" /* RootComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__footer_modal_container_paws_modals_paws_modal_component__["a" /* PawsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__side_nav_side_nav_component__["a" /* SideNavComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".paws-footer[_ngcontent-%COMP%] {\r\n    min-height: 21.5%;\r\n    background-color: cornflowerblue;\r\n    color: white;\r\n    font-size: 11px;\r\n}\r\n\r\n.paws-footer-links[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.additionalInfo[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FooterComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FooterComponent_0;
/* unused harmony export View_FooterComponent_Host_0 */
/* unused harmony export FooterComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/footer/footer.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_container_modal_container_component_ngfactory__ = __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_container_modal_container_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_FooterComponent = [__WEBPACK_IMPORTED_MODULE_0__footer_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_FooterComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 73, "footer", [["clas", "footer"], ["class", "paws-footer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](2, 0, null, null, 70, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](4, 0, null, null, 58, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](6, 0, null, null, 28, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Contact"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](11, 0, null, null, 22, "div", [["class", "contact-div"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](14, 0, null, null, 3, "a", [["class", "paws-footer-links"], ["href", "https://www.google.com/maps/dir/?api=1&destination=31+South+Second+Street+Warrenton%20+Virginia&travelmode=driving"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                        31 S. Second Street "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                        Warrenton, Va 20187\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](21, 0, null, null, 1, "a", [["class", "paws-footer-links"], ["href", "tel:5403471482"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Tel: (540)-347-1482"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](26, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Fax: (866)-876-2295"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](29, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](31, 0, null, null, 1, "a", [["class", "paws-footer-links"], ["href", "mailto:pwoodward@patwoodwardlawoffice.com"], ["target", "_top"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["pwoodward@patwoodwardlawoffice.com"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](36, 0, null, null, 15, "div", [["class", "col-sm-5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](38, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Business Hours"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](42, 0, null, null, 8, "div", [["class", "business-hours-div"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](44, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](45, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Mon - Fri"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, [" 8:00am - 12:00pm, 1:00pm - 4:30pm"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](49, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](53, 0, null, null, 8, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](56, 0, null, null, 4, "div", [["class", "additionalInfo"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](58, 0, null, null, 1, "paws-modal-container", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__modal_container_modal_container_component_ngfactory__["b" /* View_ModalContainerComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__modal_container_modal_container_component_ngfactory__["a" /* RenderType_ModalContainerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](59, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__modal_container_modal_container_component__["a" /* ModalContainerComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["d" /* MatDialog */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](64, 0, null, null, 7, "div", [["class", "row"], ["style", "text-align: center;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](66, 0, null, null, 4, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](68, 0, null, null, 1, "sub", [["style", "font-size: 9px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["@2017 Patricia A. Woodward - All Rights Reserved."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"]))], null, null); }
function View_FooterComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "footer-component", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__footer_component__["a" /* FooterComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]("footer-component", __WEBPACK_IMPORTED_MODULE_5__footer_component__["a" /* FooterComponent */], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            moduleId: module.i,
            selector: 'footer-component',
            templateUrl: 'footer.component.html',
            styleUrls: [
                './footer.component.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/modal-container/modal-container.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["button[_ngcontent-%COMP%] {\r\n    color: cornflowerblue;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/footer/modal-container/modal-container.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ModalContainerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ModalContainerComponent_0;
/* unused harmony export View_ModalContainerComponent_Host_0 */
/* unused harmony export ModalContainerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_container_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_container_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 








var styles_ModalContainerComponent = [__WEBPACK_IMPORTED_MODULE_0__modal_container_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ModalContainerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0, styles: styles_ModalContainerComponent, data: {} });

function View_ModalContainerComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 3, "button", [["class", "mat-raised-button"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openDialog("faqModal") !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["F.A.Q."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](9, 0, null, null, 3, "button", [["class", "mat-raised-button"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openDialog("disclaimerModal") !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](10, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["Disclaimer"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](18, 0, null, null, 3, "button", [["class", "mat-raised-button"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openDialog("privacyModal") !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](19, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["Privacy Statement"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); var currVal_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 10).disabled || null); _ck(_v, 9, 0, currVal_1); var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 19).disabled || null); _ck(_v, 18, 0, currVal_2); }); }
function View_ModalContainerComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "paws-modal-container", [], null, null, null, View_ModalContainerComponent_0, RenderType_ModalContainerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_6__modal_container_component__["a" /* ModalContainerComponent */], [__WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["d" /* MatDialog */]], null, null)], null, null); }
var ModalContainerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]("paws-modal-container", __WEBPACK_IMPORTED_MODULE_6__modal_container_component__["a" /* ModalContainerComponent */], View_ModalContainerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/footer/modal-container/modal-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paws_modals_paws_modal_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(matDialog) {
        this.matDialog = matDialog;
    }
    ModalContainerComponent.prototype.openDialog = function (dialogName) {
        var dialogRef;
        if (dialogName) {
            dialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__paws_modals_paws_modal_component__["a" /* PawsModalComponent */], {
                height: 'auto',
                width: 'auto',
                data: { modalName: dialogName }
            });
        }
    };
    ModalContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'paws-modal-container',
            templateUrl: './modal-container.component.html',
            styleUrls: ['./modal-container.component.css']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



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


/***/ }),

/***/ "../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_PawsModalComponent */
/* unused harmony export View_PawsModalComponent_0 */
/* unused harmony export View_PawsModalComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsModalComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_expansion_typings_index_ngfactory__ = __webpack_require__("../../../material/expansion/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__paws_modal_component__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__paws_modal_service__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 













var styles_PawsModalComponent = [];
var RenderType_PawsModalComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2, styles: styles_PawsModalComponent, data: {} });

function View_PawsModalComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](1, null, ["\n        ", "\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.modal.content; _ck(_v, 1, 0, currVal_0); }); }
function View_PawsModalComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 9, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["E" /* mixinDisabled */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["c" /* MatExpansionPanel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["c" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, 1, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](4, 0, null, 0, 4, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keyup"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5)._keyup($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["e" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["i" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵpod */](6, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵpod */](7, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](8, 2, ["\n                ", "\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](9, 1, ["\n                ", "\n        "]))], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 2).expanded; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 2)._hasSpacing(); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5).panel.disabled ? (0 - 1) : 0); var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5)._getPanelId(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5)._isExpanded(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5).panel.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5)._isExpanded(); var currVal_7 = _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5)._getExpandedState(), _ck(_v, 6, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5).collapsedHeight, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 5).expandedHeight)); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _v.context.$implicit.header; _ck(_v, 8, 0, currVal_8); var currVal_9 = _v.context.$implicit.innerContent; _ck(_v, 9, 0, currVal_9); }); }
function View_PawsModalComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](1, 0, null, null, 5, "mat-accordion", [["class", "mat-accordion"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatAccordion */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵand */](16777216, null, null, 1, null, View_PawsModalComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.modal.content; _ck(_v, 5, 0, currVal_0); }, null); }
function View_PawsModalComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 2, "h1", [["class", "mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["k" /* MatDialogTitle */], [[2, __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["g" /* MatDialogContainer */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](2, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](4, 0, null, null, 5, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["h" /* MatDialogContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵand */](16777216, null, null, 1, null, View_PawsModalComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](11, 0, null, null, 11, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["e" /* MatDialogActions */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](15, 0, null, null, 0, "span", [["style", "flex: 1 1 auto;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](17, 0, null, null, 4, "button", [["class", "mat-raised-button"], ["mat-dialog-close", ""], ["mat-raised-button", ""], ["tabindex", "2"], ["type", "button"]], [[1, "aria-label", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 18).dialogRef.close(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 18).dialogResult) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](18, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["f" /* MatDialogClose */], [__WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["j" /* MatDialogRef */]], { dialogResult: [0, "dialogResult"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](19, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["f" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, 0, ["Close"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵand */](0, [["faqModal", 2]], null, 0, null, View_PawsModalComponent_2))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_2 = _co.isBaseModal; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 24); _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_6 = ""; _ck(_v, 18, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.modal.title; _ck(_v, 2, 0, currVal_1); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 18).ariaLabel; var currVal_5 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19).disabled || null); _ck(_v, 17, 0, currVal_4, currVal_5); }); }
function View_PawsModalComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "paws-modal", [], null, null, null, View_PawsModalComponent_0, RenderType_PawsModalComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__paws_modal_component__["a" /* PawsModalComponent */], [__WEBPACK_IMPORTED_MODULE_12__paws_modal_service__["a" /* PawsModalService */], __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["j" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["a" /* MAT_DIALOG_DATA */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PawsModalComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵccf */]("paws-modal", __WEBPACK_IMPORTED_MODULE_11__paws_modal_component__["a" /* PawsModalComponent */], View_PawsModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paws_modal_service__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paws_modal_type_enum__ = __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal-type.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




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
    PawsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            moduleId: module.i,
            selector: 'paws-modal',
            templateUrl: 'paws-modal.component.html'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__paws_modal_service__["a" /* PawsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], PawsModalComponent);
    return PawsModalComponent;
}());



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



/***/ }),

/***/ "../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_MobileNavbarComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_MobileNavbarComponent_0;
/* unused harmony export View_MobileNavbarComponent_Host_0 */
/* unused harmony export MobileNavbarComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mobile_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll_src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 











var styles_MobileNavbarComponent = [];
var RenderType_MobileNavbarComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2, styles: styles_MobileNavbarComponent, data: {} });

function View_MobileNavbarComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 7, "button", [["aria-expanded", "false"], ["class", "navbar-toggle collapsed mat-icon-button"], ["mat-icon-button", ""], ["style", "float: left; margin-left: 10px; top: 25px;"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSideNav() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_button__["e" /* MatIconButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](4, 0, null, 0, 2, "mat-icon", [["class", "md-24 mat-icon"], ["role", "img"], ["style", "position: relative; font-size: 30px; right: 3px;"]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, 0, ["\n        menu\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); }); }
function View_MobileNavbarComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "paws-mobile-navbar", [], null, null, null, View_MobileNavbarComponent_0, RenderType_MobileNavbarComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__mobile_navbar_component__["a" /* MobileNavbarComponent */], [__WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["b" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */]], null, null)], null, null); }
var MobileNavbarComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵccf */]("paws-mobile-navbar", __WEBPACK_IMPORTED_MODULE_7__mobile_navbar_component__["a" /* MobileNavbarComponent */], View_MobileNavbarComponent_Host_0, { currentIndex: "currentIndex" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__side_nav_side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MobileNavbarComponent = /** @class */ (function () {
    function MobileNavbarComponent(matDialog, document, pageScrollService) {
        this.matDialog = matDialog;
        this.document = document;
        this.pageScrollService = pageScrollService;
        this.currentIndex = 0;
    }
    MobileNavbarComponent.prototype.openSideNav = function () {
        var _this = this;
        var dialogRef = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__side_nav_side_nav_component__["a" /* SideNavComponent */], {
            height: 'auto',
            width: 'auto',
            panelClass: 'side-nav-menu',
            data: this.currentIndex
        });
        dialogRef.afterClosed().subscribe(function (dest) {
            if (dest) {
                dest = '#' + dest.toLowerCase();
                var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["c" /* PageScrollInstance */].newInstance({
                    document: _this.document,
                    scrollTarget: dest,
                    pageScrollOffset: 79,
                });
                _this.pageScrollService.start(pageScrollInstance);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], MobileNavbarComponent.prototype, "currentIndex", void 0);
    MobileNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'paws-mobile-navbar',
            templateUrl: './mobile-navbar.component.html'
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */], Object, __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["d" /* PageScrollService */]])
    ], MobileNavbarComponent);
    return MobileNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.css.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".paws-brand-container {\r\n    height: 100%;\r\n    padding: 3px;\r\n}\r\n\r\n.responsive-paws-logo {\r\n    height: auto;\r\n    width: auto;\r\n    min-height: 79px;\r\n    width: 95%;\r\n}\r\n\r\n#float-navbar-right {\r\n    margin-top: 15px;\r\n    float: right;\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n    .responsive-paws-logo {\r\n        width: 270px;\r\n    }\r\n\r\n    .navbar > .container .navbar-brand {\r\n        margin-left: -16px;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 114px !important; \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 992px) {\r\n    .responsive-paws-logo {\r\n        width: auto;\r\n        margin-left: -15px;\r\n    }\r\n\r\n    .navbar > .container .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    \r\n    .mat-tab-label {\r\n        min-width: 145px !important; \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .responsive-paws-logo {\r\n        width: auto;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 160px !important; \r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1450px) {\r\n    #float-navbar-right {\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 160px !important; \r\n    }\r\n}"];



/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_NavBarComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_NavBarComponent_0;
/* unused harmony export View_NavBarComponent_Host_0 */
/* unused harmony export NavBarComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_bar_component_css_ngstyle__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.css.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_directives_navbar_enlarge_directive__ = __webpack_require__("../../../../../src/app/shared/directives/navbar-enlarge.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_directives_scroll_spy_directive__ = __webpack_require__("../../../../../src/app/shared/directives/scroll-spy.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobile_navbar_mobile_navbar_component_ngfactory__ = __webpack_require__("../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mobile_navbar_mobile_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_directives_paws_mat_tab_scroll_to_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-mat-tab-scroll-to.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__ = __webpack_require__("../../../material/tabs/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_bar_component__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 













var styles_NavBarComponent = [__WEBPACK_IMPORTED_MODULE_0__nav_bar_component_css_ngstyle__["a" /* styles */]];
var RenderType_NavBarComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2, styles: styles_NavBarComponent, data: {} });

function View_NavBarComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 44, "nav", [["class", "navbar navbar-default navbar-fixed-top paws-navbar"], ["id", "mainNavBar"], ["pawsNavbarEnlarge", ""], ["pawsScrollSpy", ""], ["role", "navigation"], ["style", "z-index: 1000 !important;"]], null, [[null, "newActiveTab"], ["window", "scroll"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).onScroll() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 2).onwindowScroll($event) !== false);
        ad = (pd_1 && ad);
    } if (("newActiveTab" === en)) {
        var pd_2 = (_co.changeCurrentTabIndex($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_directives_navbar_enlarge_directive__["a" /* NavbarEnlargeDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["d" /* MatDialog */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__shared_directives_scroll_spy_directive__["a" /* ScrollSpyDirective */], [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { isDisabled: [0, "isDisabled"] }, { newActiveTab: "newActiveTab" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](4, 0, null, null, 38, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](6, 0, null, null, 9, "div", [["class", "navbar-header page-scroll"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](8, 0, null, null, 1, "paws-mobile-navbar", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__mobile_navbar_mobile_navbar_component_ngfactory__["b" /* View_MobileNavbarComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__mobile_navbar_mobile_navbar_component_ngfactory__["a" /* RenderType_MobileNavbarComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](9, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__mobile_navbar_mobile_navbar_component__["a" /* MobileNavbarComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_material_dialog__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */]], { currentIndex: [0, "currentIndex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](11, 0, null, null, 3, "div", [["class", "navbar-brand paws-brand-container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](13, 0, null, null, 0, "img", [["class", "responsive-paws-logo"], ["src", "../../assets/images/PawsLogo.png"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](17, 0, null, null, 23, "div", [["class", "collapse navbar-collapse"], ["id", "navbar-collapse"], ["pawsScrollTo", ""]], null, [[null, "nowScrollingEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("nowScrollingEvent" === en)) {
        var pd_0 = ((_co.currentlyScrolling = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](18, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_directives_paws_mat_tab_scroll_to_directive__["a" /* PawsScrollTo */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */]], { querySelector: [0, "querySelector"] }, { nowScrollingEvent: "nowScrollingEvent" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](20, 0, null, null, 19, "mat-tab-group", [["class", "nav navbar-nav mat-tab-group"], ["id", "float-navbar-right"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["c" /* View_MatTabGroup_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["b" /* RenderType_MatTabGroup */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](21, 3325952, null, 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["d" /* MatTabGroup */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], { selectedIndex: [0, "selectedIndex"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](603979776, 1, { _tabs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](24, 16777216, null, null, 2, "mat-tab", [["label", "Home"]], null, null, null, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](25, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, "textLabel"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](335544320, 2, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](28, 16777216, null, null, 2, "mat-tab", [["label", "About"]], null, null, null, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](29, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, "textLabel"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](335544320, 3, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](32, 16777216, null, null, 2, "mat-tab", [["label", "Services"]], null, null, null, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](33, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, "textLabel"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](335544320, 4, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](36, 16777216, null, null, 2, "mat-tab", [["label", "Resources"]], null, null, null, __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["d" /* View_MatTab_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_angular_material_tabs_typings_index_ngfactory__["a" /* RenderType_MatTab */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](37, 770048, [[1, 4]], 1, __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["b" /* MatTab */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { textLabel: [0, "textLabel"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](335544320, 5, { templateLabel: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = _co.currentlyScrolling; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.currentTabIndex; _ck(_v, 9, 0, currVal_1); var currVal_2 = "div.mat-tab-label"; _ck(_v, 18, 0, currVal_2); var currVal_5 = _co.currentTabIndex; _ck(_v, 21, 0, currVal_5); var currVal_6 = "Home"; _ck(_v, 25, 0, currVal_6); var currVal_7 = "About"; _ck(_v, 29, 0, currVal_7); var currVal_8 = "Services"; _ck(_v, 33, 0, currVal_8); var currVal_9 = "Resources"; _ck(_v, 37, 0, currVal_9); }, function (_ck, _v) { var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 21).dynamicHeight; var currVal_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 21).headerPosition === "below"); _ck(_v, 20, 0, currVal_3, currVal_4); }); }
function View_NavBarComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "nav-bar", [], null, null, null, View_NavBarComponent_0, RenderType_NavBarComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 4243456, null, 0, __WEBPACK_IMPORTED_MODULE_12__nav_bar_component__["a" /* NavBarComponent */], [], null, null)], null, null); }
var NavBarComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]("nav-bar", __WEBPACK_IMPORTED_MODULE_12__nav_bar_component__["a" /* NavBarComponent */], View_NavBarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        //set image min-height in pixels, good to have this hard coded here so we can reference it later
        this.minImgHeight = 79;
        this.currentTabIndex = 0;
        //stores whether the click-triggered scroll has finished or not.
        this.currentlyScrolling = false;
    }
    NavBarComponent.prototype.ngAfterViewInit = function () {
        //ng2-page-scroll configuration
        //can't use elementRef.nativeElement.offsetHeight 
        //because it changes for some reason
        __WEBPACK_IMPORTED_MODULE_1_ng2_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = this.minImgHeight;
        __WEBPACK_IMPORTED_MODULE_1_ng2_page_scroll__["b" /* PageScrollConfig */].defaultDuration = 700;
        __WEBPACK_IMPORTED_MODULE_1_ng2_page_scroll__["b" /* PageScrollConfig */].defaultEasingLogic = {
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
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            moduleId: module.i,
            selector: 'nav-bar',
            templateUrl: 'nav-bar.component.html',
            styleUrls: [
                './nav-bar.component.css'
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ng-material-base/ng-material-base.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgMaterialBaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgMaterialBaseModule = /** @class */ (function () {
    function NgMaterialBaseModule() {
    }
    NgMaterialBaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatStepperModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatStepperModule */],
            ]
        })
    ], NgMaterialBaseModule);
    return NgMaterialBaseModule;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panel-list.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["#home[_ngcontent-%COMP%] {\r\n    background: url(top.c1b2611d87b6ce08661d.jpg) no-repeat 50% 50% fixed;\r\n    background-size: cover;\r\n    -webkit-background-size: cover;\r\n    height: 100%;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/panel-list/panel-list.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_PanelList; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_PanelList_0;
/* unused harmony export View_PanelList_Host_0 */
/* unused harmony export PanelListNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__panel_list_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/panel-list/panel-list.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panels_about_panel_about_panel_component_ngfactory__ = __webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panels_about_panel_about_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panels_services_panel_services_panel_component_ngfactory__ = __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__panels_services_panel_services_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__panels_resources_panel_resources_panel_component_ngfactory__ = __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__panels_resources_panel_resources_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_directive__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_page_scroll_src_ng2_page_scroll_service__ = __webpack_require__("../../../../ng2-page-scroll/src/ng2-page-scroll.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__panel_list_component__ = __webpack_require__("../../../../../src/app/panel-list/panel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 














var styles_PanelList = [__WEBPACK_IMPORTED_MODULE_0__panel_list_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_PanelList = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0, styles: styles_PanelList, data: {} });

function View_PanelList_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](1, 0, null, null, 1, "section", [["class", "panel"], ["id", "home"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](4, 0, null, null, 1, "paws-about-panel", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__panels_about_panel_about_panel_component_ngfactory__["b" /* View_AboutPanelComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__panels_about_panel_about_panel_component_ngfactory__["a" /* RenderType_AboutPanelComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](5, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__panels_about_panel_about_panel_component__["a" /* AboutPanelComponent */], [], { shouldHaveSeparator: [0, "shouldHaveSeparator"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](7, 0, null, null, 1, "paws-services-panel", [], null, null, null, __WEBPACK_IMPORTED_MODULE_4__panels_services_panel_services_panel_component_ngfactory__["b" /* View_ServicesPanelComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__panels_services_panel_services_panel_component_ngfactory__["a" /* RenderType_ServicesPanelComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](8, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__panels_services_panel_services_panel_component__["a" /* ServicesPanelComponent */], [], { shouldHaveSeparator: [0, "shouldHaveSeparator"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](10, 0, null, null, 1, "paws-resources-panel", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__panels_resources_panel_resources_panel_component_ngfactory__["b" /* View_ResourcesPanelComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__panels_resources_panel_resources_panel_component_ngfactory__["a" /* RenderType_ResourcesPanelComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](11, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__panels_resources_panel_resources_panel_component__["a" /* ResourcesPanelComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](13, 0, null, null, 1, "a", [["class", "page-scroll glyphicon glyphicon-arrow-up reset-scroll"], ["href", "#home"], ["pageScroll", ""], ["title", "Return to top"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 14).handleClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](14, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll_src_ng2_page_scroll_directive__["a" /* PageScroll */], [__WEBPACK_IMPORTED_MODULE_9_ng2_page_scroll_src_ng2_page_scroll_service__["b" /* PageScrollService */], [2, __WEBPACK_IMPORTED_MODULE_10__angular_router__["d" /* Router */]], __WEBPACK_IMPORTED_MODULE_11__angular_common__["c" /* DOCUMENT */]], { href: [0, "href"], pageScroll: [1, "pageScroll"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = true; _ck(_v, 5, 0, currVal_0); var currVal_1 = true; _ck(_v, 8, 0, currVal_1); _ck(_v, 11, 0); var currVal_2 = "#home"; var currVal_3 = ""; _ck(_v, 14, 0, currVal_2, currVal_3); }, null); }
function View_PanelList_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "panel-list", [], null, null, null, View_PanelList_0, RenderType_PanelList)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_12__panel_list_component__["a" /* PanelList */], [__WEBPACK_IMPORTED_MODULE_13__panel_service__["a" /* PanelService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PanelListNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]("panel-list", __WEBPACK_IMPORTED_MODULE_12__panel_list_component__["a" /* PanelList */], View_PanelList_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/panel-list/panel-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelList = /** @class */ (function () {
    function PanelList(panelService) {
        this.panelService = panelService;
    }
    PanelList.prototype.ngOnInit = function () {
    };
    PanelList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            moduleId: module.i,
            selector: 'panel-list',
            templateUrl: 'panel-list.component.html',
            styleUrls: [
                './panel-list.component.css'
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__panel_service__["a" /* PanelService */]])
    ], PanelList);
    return PanelList;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    PanelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])()
    ], PanelService);
    return PanelService;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_AboutPanelComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_AboutPanelComponent_0;
/* unused harmony export View_AboutPanelComponent_Host_0 */
/* unused harmony export AboutPanelComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_directives_paws_animate_on_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 





var styles_AboutPanelComponent = [];
var RenderType_AboutPanelComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2, styles: styles_AboutPanelComponent, data: {} });

function View_AboutPanelComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 70, "mat-card", [["class", "custom-panel mat-card"], ["id", "about"]], [[2, "bottom-separator", null]], null, null, __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](3, 0, null, 0, 66, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](5, 0, null, null, 63, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](7, 0, null, null, 60, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](9, 0, null, null, 2, "div", [["class", "mat-display-3"], ["fadeFrom", "right"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 10).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](10, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["About"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](13, 0, null, null, 53, "div", [["class", "panel-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](15, 0, null, null, 2, "p", [["class", "mat-body-2"], ["fadeFrom", "left"], ["pawsAnimateOnScroll", ""], ["trigger", "partial"]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 16).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"], trigger: [1, "trigger"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                        Ms. Woodward received her law degree from the Washington & Lee University School of Law in Lexington, Virginia. She received\n                        a B.A. from Williams College in Williamstown, Massachusetts, and prior to that, she received an A.A.\n                        from Hartford College for Women in Hartford, Connecticut. She was admitted to the Virginia State\n                        Bar in 1980. In 2012, she had the honor of being appointed the Assistant Commissioner of Accounts\n                        for Fauquier County. Ms. Woodward and her husband have lived in Fauquier County for almost thirty\n                        years.\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](19, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](21, 0, null, null, 44, "div", [["fadeFrom", "right"], ["pawsAnimateOnScroll", ""], ["trigger", "partial"]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 22).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](22, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"], trigger: [1, "trigger"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](24, 0, null, null, 1, "p", [["class", "mat-body-2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            Since moving to the county, she has been active in many community groups. Some of the groups with which she has been involved\n                            include the following:\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](27, 0, null, null, 37, "ul", [["class", "mat-body-2"], ["style", "list-style: none;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](29, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Altrusa International, Inc. [International service organization]"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](32, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Fauquier Health Foundation"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](35, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Piedmont Symphony Orchestra"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](38, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Safe & SANE Task Force"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](41, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- SAVVI"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](44, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Blue Ridge Dance Theatre"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](47, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Fauquier Community Action Committee (local Head Start agency)"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](50, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Fauquier County Bar Association"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](53, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Fauquier County Chamber of Commerce"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](56, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Fauquier Courthouse NSDAR"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](59, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Literacy Volunteers of Fauquier County"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](62, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["- Warrenton Presbyterian Church"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { var currVal_1 = "right"; _ck(_v, 10, 0, currVal_1); var currVal_2 = "left"; var currVal_3 = "partial"; _ck(_v, 16, 0, currVal_2, currVal_3); var currVal_4 = "right"; var currVal_5 = "partial"; _ck(_v, 22, 0, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shouldHaveSeparator; _ck(_v, 0, 0, currVal_0); }); }
function View_AboutPanelComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "paws-about-panel", [], null, null, null, View_AboutPanelComponent_0, RenderType_AboutPanelComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__about_panel_component__["a" /* AboutPanelComponent */], [], null, null)], null, null); }
var AboutPanelComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵccf */]("paws-about-panel", __WEBPACK_IMPORTED_MODULE_4__about_panel_component__["a" /* AboutPanelComponent */], View_AboutPanelComponent_Host_0, { shouldHaveSeparator: "shouldHaveSeparator" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/about-panel/about-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPanelComponent = /** @class */ (function () {
    function AboutPanelComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AboutPanelComponent.prototype, "shouldHaveSeparator", void 0);
    AboutPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'paws-about-panel',
            templateUrl: './about-panel.component.html'
        })
    ], AboutPanelComponent);
    return AboutPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["#resources[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n\r\n\r\n@media screen and (max-width: 767px) {    \r\n    #resources[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n        margin-top: 5px;\r\n    }\r\n}"];



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ResourcesPanelComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ResourcesPanelComponent_0;
/* unused harmony export View_ResourcesPanelComponent_Host_0 */
/* unused harmony export ResourcesPanelComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources_panel_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_list_typings_index_ngfactory__ = __webpack_require__("../../../material/list/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_expansion_typings_index_ngfactory__ = __webpack_require__("../../../material/expansion/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_directives_paws_animate_on_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resources_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
















var styles_ResourcesPanelComponent = [__WEBPACK_IMPORTED_MODULE_0__resources_panel_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ResourcesPanelComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0, styles: styles_ResourcesPanelComponent, data: {} });

function View_ResourcesPanelComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 10, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["role", "listitem"], ["target", "_blank"]], [[1, "href", 4]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_list_typings_index_ngfactory__["c" /* View_MatListItem_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_list_typings_index_ngfactory__["b" /* RenderType_MatListItem */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 1097728, null, 2, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["c" /* MatListItem */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["a" /* MatList */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["f" /* MatNavListCssMatStyler */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](603979776, 1, { _lines: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](335544320, 2, { _hasAvatar: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](4, 2, ["\n                                    ", "\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](5, 0, null, 2, 0, "span", [["style", "flex: 1 1 auto"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 2, ["\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](7, 0, null, 2, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"], ["style", "position: relative; left: 5px; top: 2px;"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](8, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                                        link\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 2, ["\n                                "]))], function (_ck, _v) { _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.linkDest; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.linkText; _ck(_v, 4, 0, currVal_1); }); }
function View_ResourcesPanelComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 20, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["E" /* mixinDisabled */], null, [__WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["c" /* MatExpansionPanel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](2, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["c" /* MatExpansionPanel */], [[2, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatAccordion */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_9__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 1, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](4, 0, null, 0, 7, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keyup"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5)._keyup($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](5, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["e" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_a11y__["i" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵpod */](6, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵpod */](7, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 2, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](9, 0, null, 2, 1, "span", [["style", "font-size: 18px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](10, null, [" ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 2, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 1, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](13, 0, null, 1, 6, "mat-nav-list", [["class", "mat-nav-list"], ["role", "list"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_list_typings_index_ngfactory__["d" /* View_MatList_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_list_typings_index_ngfactory__["a" /* RenderType_MatList */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](14, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["a" /* MatList */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["f" /* MatNavListCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* ɵand */](16777216, null, 0, 1, null, View_ResourcesPanelComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](18, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 1, ["\n                        "]))], function (_ck, _v) { var currVal_9 = _v.context.$implicit.innerContent; _ck(_v, 18, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 2).expanded; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 2)._hasSpacing(); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5).panel.disabled ? (0 - 1) : 0); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5)._getPanelId(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5)._isExpanded(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5).panel.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5)._isExpanded(); var currVal_7 = _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5)._getExpandedState(), _ck(_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 5).expandedHeight)); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _v.context.$implicit.header; _ck(_v, 10, 0, currVal_8); }); }
function View_ResourcesPanelComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 26, "mat-card", [["class", "custom-panel mat-card"], ["id", "resources"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](3, 0, null, 0, 22, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](5, 0, null, null, 19, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](7, 0, null, null, 16, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](9, 0, null, null, 2, "div", [["class", "mat-display-3"], ["fadeFrom", "right"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 10).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](10, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_14__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Resources"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](13, 0, null, null, 9, "div", [["class", "panel-text"], ["fadeFrom", "left"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 14).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](14, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_14__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](16, 0, null, null, 5, "mat-accordion", [["class", "mat-accordion"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatAccordion */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* ɵand */](16777216, null, null, 1, null, View_ResourcesPanelComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](20, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "right"; _ck(_v, 10, 0, currVal_0); var currVal_1 = "left"; _ck(_v, 14, 0, currVal_1); var currVal_2 = _co.accordionPanels; _ck(_v, 20, 0, currVal_2); }, null); }
function View_ResourcesPanelComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "paws-resources-panel", [], null, null, null, View_ResourcesPanelComponent_0, RenderType_ResourcesPanelComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_15__resources_panel_component__["a" /* ResourcesPanelComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ResourcesPanelComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]("paws-resources-panel", __WEBPACK_IMPORTED_MODULE_15__resources_panel_component__["a" /* ResourcesPanelComponent */], View_ResourcesPanelComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    ResourcesPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'paws-resources-panel',
            templateUrl: './resources-panel.component.html',
            styleUrls: [
                './resources-panel.component.css'
            ]
        })
    ], ResourcesPanelComponent);
    return ResourcesPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/services-panel/services-panel.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: auto;\r\n    font-size: 50px;\r\n}\r\n\r\n#BusinessCard[_ngcontent-%COMP%], #RealEstateCard[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n@media screen and (min-width: 767px) {\r\n    .responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 75px;\r\n    }\r\n\r\n    #BusinessCard[_ngcontent-%COMP%], #RealEstateCard[_ngcontent-%COMP%] {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 992px) {\r\n    .responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 75px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1170px) {\r\n    .responsive-service-cards[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 100px;\r\n    }\r\n}"];



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ServicesPanelComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ServicesPanelComponent_0;
/* unused harmony export View_ServicesPanelComponent_Host_0 */
/* unused harmony export ServicesPanelComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_panel_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_directives_paws_animate_on_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_panel_component__ = __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 








var styles_ServicesPanelComponent = [__WEBPACK_IMPORTED_MODULE_0__services_panel_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ServicesPanelComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0, styles: styles_ServicesPanelComponent, data: {} });

function View_ServicesPanelComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 125, "mat-card", [["class", "custom-panel mat-card"], ["id", "services"]], [[2, "bottom-separator", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](3, 0, null, 0, 121, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](5, 0, null, null, 47, "div", [["class", "row responsive-service-cards"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](7, 0, null, null, 2, "div", [["class", "mat-display-3"], ["fadeFrom", "left"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 8).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](8, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Services"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](11, 0, null, null, 19, "div", [["class", "col-sm-6"], ["fadeFrom", "right"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 12).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](12, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](14, 0, null, null, 15, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](15, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](17, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](18, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["attach_money"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](21, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](23, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](24, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](26, 0, null, null, 1, "span", [["class", "mat-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Estate Planning"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](32, 0, null, null, 19, "div", [["class", "col-sm-6"], ["fadeFrom", "left"], ["id", "RealEstateCard"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 33).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](33, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](35, 0, null, null, 15, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](36, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](38, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](39, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["home"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](42, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](44, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](45, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](47, 0, null, null, 1, "span", [["class", "mat-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Real Estate"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](54, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](56, 0, null, null, 44, "div", [["class", "row responsive-service-cards"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](58, 0, null, null, 20, "div", [["class", "col-sm-6"], ["fadeFrom", "right"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 59).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](59, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](61, 0, null, null, 16, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](62, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](65, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](66, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["child_friendly"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](69, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](71, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](72, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                           "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](74, 0, null, null, 1, "span", [["class", "mat-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Guardianships"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](80, 0, null, null, 19, "div", [["class", "col-sm-6"], ["fadeFrom", "left"], ["id", "BusinessCard"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 81).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](81, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](83, 0, null, null, 15, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](84, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](86, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](87, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["business"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](90, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](92, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](93, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["b" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](95, 0, null, null, 1, "span", [["class", "mat-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Business Affairs"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](102, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](104, 0, null, null, 19, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](106, 0, null, null, 16, "div", [["class", "col-xs-12"], ["fadeFrom", "right"], ["pawsAnimateOnScroll", ""]], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 107).onwindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](107, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_4__shared_directives_paws_animate_on_scroll_directive__["a" /* PawsAnimateOnScroll */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { fadeFrom: [0, "fadeFrom"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](109, 0, null, null, 12, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](110, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](112, 0, null, 0, 8, "span", [["class", "mat-subheading-2"], ["style", "font-size: 15px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                        For Business, Litigation and Family Law, contact\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](114, 0, null, null, 5, "a", [["href", "http://www.csadlawyers.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                            Culin, Sharp, Autry & Day\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](116, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"], ["style", "position: relative; top: 7px;"]], null, null, null, __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](117, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["link"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { var currVal_1 = "left"; _ck(_v, 8, 0, currVal_1); var currVal_2 = "right"; _ck(_v, 12, 0, currVal_2); _ck(_v, 18, 0); var currVal_3 = "left"; _ck(_v, 33, 0, currVal_3); _ck(_v, 39, 0); var currVal_4 = "right"; _ck(_v, 59, 0, currVal_4); _ck(_v, 66, 0); var currVal_5 = "left"; _ck(_v, 81, 0, currVal_5); _ck(_v, 87, 0); var currVal_6 = "right"; _ck(_v, 107, 0, currVal_6); _ck(_v, 117, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shouldHaveSeparator; _ck(_v, 0, 0, currVal_0); }); }
function View_ServicesPanelComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "paws-services-panel", [], null, null, null, View_ServicesPanelComponent_0, RenderType_ServicesPanelComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_7__services_panel_component__["a" /* ServicesPanelComponent */], [], null, null)], null, null); }
var ServicesPanelComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]("paws-services-panel", __WEBPACK_IMPORTED_MODULE_7__services_panel_component__["a" /* ServicesPanelComponent */], View_ServicesPanelComponent_Host_0, { shouldHaveSeparator: "shouldHaveSeparator" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/services-panel/services-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesPanelComponent = /** @class */ (function () {
    function ServicesPanelComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ServicesPanelComponent.prototype, "shouldHaveSeparator", void 0);
    ServicesPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'paws-services-panel',
            templateUrl: './services-panel.component.html',
            styleUrls: ['./services-panel.component.css']
        })
    ], ServicesPanelComponent);
    return ServicesPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RootComponent */
/* unused harmony export View_RootComponent_0 */
/* unused harmony export View_RootComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_nav_bar_component_ngfactory__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_nav_bar_component__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel_list_panel_list_component_ngfactory__ = __webpack_require__("../../../../../src/app/panel-list/panel-list.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panel_list_panel_list_component__ = __webpack_require__("../../../../../src/app/panel-list/panel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__panel_list_panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component_ngfactory__ = __webpack_require__("../../../../../src/app/footer/footer.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 









var styles_RootComponent = [];
var RenderType_RootComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcrt */]({ encapsulation: 2, styles: styles_RootComponent, data: {} });

function View_RootComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](1, 0, null, null, 1, "nav-bar", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__navbar_nav_bar_component_ngfactory__["b" /* View_NavBarComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__navbar_nav_bar_component_ngfactory__["a" /* RenderType_NavBarComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](2, 4243456, null, 0, __WEBPACK_IMPORTED_MODULE_2__navbar_nav_bar_component__["a" /* NavBarComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](4, 0, null, null, 2, "panel-list", [], null, null, null, __WEBPACK_IMPORTED_MODULE_3__panel_list_panel_list_component_ngfactory__["b" /* View_PanelList_0 */], __WEBPACK_IMPORTED_MODULE_3__panel_list_panel_list_component_ngfactory__["a" /* RenderType_PanelList */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](5, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__panel_list_panel_list_component__["a" /* PanelList */], [__WEBPACK_IMPORTED_MODULE_5__panel_list_panel_service__["a" /* PanelService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["Loading..."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](8, 0, null, null, 1, "footer-component", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__footer_footer_component_ngfactory__["b" /* View_FooterComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component_ngfactory__["a" /* RenderType_FooterComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](9, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { _ck(_v, 5, 0); _ck(_v, 9, 0); }, null); }
function View_RootComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "root-component", [], null, null, null, View_RootComponent_0, RenderType_RootComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_8__root_component__["a" /* RootComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RootComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵccf */]("root-component", __WEBPACK_IMPORTED_MODULE_8__root_component__["a" /* RootComponent */], View_RootComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            moduleId: module.i,
            selector: 'root-component',
            template: "\n    <nav-bar></nav-bar>\n    <panel-list>Loading...</panel-list>\n    <footer-component></footer-component>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/navbar-enlarge.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarEnlargeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])("window:scroll"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarEnlargeDirective.prototype, "onScroll", null);
    NavbarEnlargeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */])({
            selector: '[pawsNavbarEnlarge]'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */],
            Document,
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], NavbarEnlargeDirective);
    return NavbarEnlargeDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/paws-animate-on-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsAnimateOnScroll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], PawsAnimateOnScroll.prototype, "fadeFrom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], PawsAnimateOnScroll.prototype, "trigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PawsAnimateOnScroll.prototype, "onwindowScroll", null);
    PawsAnimateOnScroll = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */])({
            selector: '[pawsAnimateOnScroll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]])
    ], PawsAnimateOnScroll);
    return PawsAnimateOnScroll;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/paws-mat-tab-scroll-to.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PawsScrollTo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PawsScrollTo = /** @class */ (function () {
    function PawsScrollTo(renderer, elem, pageScrollService, document) {
        this.renderer = renderer;
        this.elem = elem;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.elements = [];
        this.nowScrolling = false;
        this.hasScrollFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.querySelector = 'div';
        this.nowScrollingEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    PawsScrollTo.prototype.ngDoCheck = function () {
        if (this.elements.length < 4) {
            this.collectTabElements();
        }
    };
    PawsScrollTo.prototype.collectTabElements = function () {
        var _this = this;
        this.elements = this.elem.nativeElement.querySelectorAll(this.querySelector);
        //this is super janky... but it does work... take that angular material 2 team!
        this.elements.forEach(function (elem) {
            _this.renderer.listen(elem, "click", function (event) {
                var dest = '#' + elem.innerText.toLowerCase();
                var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollInstance */].newInstance({
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])('querySelector'),
        __metadata("design:type", String)
    ], PawsScrollTo.prototype, "querySelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PawsScrollTo.prototype, "nowScrollingEvent", void 0);
    PawsScrollTo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */])({
            selector: '[pawsScrollTo]'
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["d" /* PageScrollService */], Object])
    ], PawsScrollTo);
    return PawsScrollTo;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/scroll-spy.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollSpyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(document, el, renderer2) {
        this.document = document;
        this.el = el;
        this.renderer2 = renderer2;
        this.elements = [];
        this.isDoneLoading = false;
        this.currentTabIndex = 0;
        this.newActiveTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        //input property to be used to determine when we should not work
        this.isDisabled = false;
    }
    ScrollSpyDirective_1 = ScrollSpyDirective;
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
            var id = ScrollSpyDirective_1.createId(elem);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ScrollSpyDirective.prototype, "newActiveTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])('disableWhen'),
        __metadata("design:type", Boolean)
    ], ScrollSpyDirective.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollSpyDirective.prototype, "onwindowScroll", null);
    ScrollSpyDirective = ScrollSpyDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */])({
            selector: '[pawsScrollSpy]',
            outputs: ['newActiveTab']
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Document,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]])
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
    var ScrollSpyDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".active-item[_ngcontent-%COMP%] {\r\n    background-color: gainsboro;\r\n    color: cornflowerblue;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_SideNavComponent */
/* unused harmony export View_SideNavComponent_0 */
/* unused harmony export View_SideNavComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__side_nav_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_nav_component__ = __webpack_require__("../../../../../src/app/side-nav/side-nav.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 












var styles_SideNavComponent = [__WEBPACK_IMPORTED_MODULE_0__side_nav_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_SideNavComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵcrt */]({ encapsulation: 0, styles: styles_SideNavComponent, data: {} });

function View_SideNavComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 13, "button", [["class", "mat-button"], ["mat-button", ""], ["style", "text-align: left; width: 100%; font-size: 16px;"], ["tabindex", "-1"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectPanel(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵpod */](2, { "active-item": 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](3, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_a11y__["i" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](6, 0, null, 0, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](7, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](9, 0, null, 0, 3, "mat-icon", [["class", "mat-icon mat-list-icon"], ["matListIcon", ""], ["role", "img"], ["style", "float: right; position: relative; top: 7px;"]], null, null, null, __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](10, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_list__["b" /* MatListIconCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n                keyboard_arrow_right\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, 0, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 2, 0, _co.isActive(_v.context.index)); _ck(_v, 1, 0, currVal_1); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 3).disabled || null); _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.context.$implicit; _ck(_v, 7, 0, currVal_2); }); }
function View_SideNavComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 2, "h1", [["class", "mat-dialog-title"], ["mat-dialog-title", ""], ["style", "text-align: center; position: relative; top: 8px;"]], [[8, "id", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 81920, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["k" /* MatDialogTitle */], [[2, __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["g" /* MatDialogContainer */]]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["Menu"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](4, 0, null, null, 8, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["h" /* MatDialogContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](7, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* ɵand */](16777216, null, null, 1, null, View_SideNavComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](10, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_1 = _co.navigationList; _ck(_v, 10, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_SideNavComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵeld */](0, 0, null, null, 1, "paws-side-nav", [], null, null, null, View_SideNavComponent_0, RenderType_SideNavComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__side_nav_component__["a" /* SideNavComponent */], [__WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["j" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_10__angular_material_dialog__["a" /* MAT_DIALOG_DATA */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SideNavComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵccf */]("paws-side-nav", __WEBPACK_IMPORTED_MODULE_11__side_nav_component__["a" /* SideNavComponent */], View_SideNavComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(dialogRef, currentIndex) {
        this.dialogRef = dialogRef;
        this.currentIndex = currentIndex;
        this.navigationList = [];
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.navigationList.push('Home');
        this.navigationList.push('About');
        this.navigationList.push('Services');
        this.navigationList.push('Resources');
    };
    SideNavComponent.prototype.selectPanel = function (dest) {
        var _this = this;
        setTimeout(function () {
            _this.dialogRef.close(dest);
        }, 25);
    };
    SideNavComponent.prototype.isActive = function (index) {
        return index === this.currentIndex;
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'paws-side-nav',
            templateUrl: './side-nav.component.html',
            styleUrls: [
                './side-nav.component.css'
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Number])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__ = __webpack_require__("../../../../../src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["j" /* platformBrowser */]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__["a" /* AppModuleNgFactory */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
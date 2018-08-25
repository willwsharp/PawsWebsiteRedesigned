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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_app_util_service__ = __webpack_require__("../../../../../src/app/shared/services/app-util.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["d" /* PageScrollService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_app_util_service__["a" /* AppUtil */]
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

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paws-footer {\r\n    min-height: 21.5%;\r\n    background-color: cornflowerblue;\r\n    color: white;\r\n    font-size: 14px;\r\n}\r\n\r\n.paws-footer-links {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.additionalInfo {\r\n    margin-top: 20px;\r\n}\r\n\r\n.mobile-footer-icon {\r\n    font-size: 36px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    h2 {\r\n        margin-bottom: 10px;\r\n        font-size: 30px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer clas=\"footer\" class=\"paws-footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <h2>Contact</h2>\r\n                <div class=\"contact-div\">\r\n                    <!-- TODO: make sure this works in mobile -->\r\n                    <a class=\"paws-footer-links\" href=\"https://www.google.com/maps/dir/?api=1&destination=31+South+Second+Street+Warrenton%20+Virginia&travelmode=driving\">\r\n                        <ng-container *ngIf=\"appUtil.onMobileDevice(); then addressIcon else fullAddress\"></ng-container>\r\n                        <ng-template #addressIcon>\r\n                            <mat-icon class=\"mobile-footer-icon\">\r\n                                directions\r\n                            </mat-icon>\r\n                        </ng-template>\r\n                        <ng-template #fullAddress>\r\n                            <span>\r\n                                31 S. Second Street\r\n                                <br> \r\n                                Warrenton, Va 20187\r\n                            </span>\r\n                            <br>\r\n                        </ng-template>\r\n                    </a>\r\n                    <a class=\"paws-footer-links\" href=\"tel:5403471482\">\r\n                        <ng-container *ngIf=\"appUtil.onMobileDevice(); then telephoneIcon else fullTele\"></ng-container>\r\n                        <ng-template #telephoneIcon>\r\n                            <mat-icon class=\"mobile-footer-icon\" style=\"margin-left: 15px;\">\r\n                                call\r\n                            </mat-icon>\r\n                        </ng-template>\r\n                        <ng-template #fullTele>\r\n                            Tel: (540)-347-1482\r\n                        </ng-template>\r\n                    </a>\r\n                    <a class=\"paws-footer-links\" style=\"font-size: 13px;\" href=\"mailto:pwoodward@patwoodwardlawoffice.com\" target=\"_top\">\r\n                        <ng-container *ngIf=\"appUtil.onMobileDevice(); then mailIcon else fullMailAddr\"></ng-container>\r\n                        <ng-template #mailIcon>\r\n                            <mat-icon class=\"mobile-footer-icon\" style=\"margin-left: 15px;\">\r\n                                email\r\n                            </mat-icon>\r\n                        </ng-template>\r\n                        <ng-template #fullMailAddr>\r\n                            pwoodward@patwoodwardlawoffice.com\r\n                        </ng-template>\r\n                    </a>\r\n                    <br>\r\n                    <span>Fax: (866)-876-2295</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-5\" style=\"font-size: 13px;\">\r\n                <h2>Business Hours</h2>\r\n                <!-- TODO: maybe make this reflect current time? -->\r\n                <div class=\"business-hours-div\">\r\n                    <span>\r\n                        <strong>Mon - Fri:</strong> 8:00am - 12:00pm, 1:00pm - 4:30pm</span>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <!-- TODO: make these look prettier -->\r\n                <div class=\"additionalInfo\">\r\n                    <paws-modal-container></paws-modal-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"text-align: center;\">\r\n            <div class=\"col-sm-12\">\r\n                <sub style=\"font-size: 9px;\">@2017 Patricia A. Woodward - All Rights Reserved.</sub>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_app_util_service__ = __webpack_require__("../../../../../src/app/shared/services/app-util.service.ts");
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
    function FooterComponent(appUtil) {
        this.appUtil = appUtil;
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'footer-component',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_app_util_service__["a" /* AppUtil */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/modal-container/modal-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    color: cornflowerblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/modal-container/modal-container.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"openDialog('faqModal')\">F.A.Q.</button>\r\n<br> <br>\r\n<button mat-raised-button (click)=\"openDialog('disclaimerModal')\">Disclaimer</button>\r\n<br> <br>\r\n<button mat-raised-button (click)=\"openDialog('privacyModal')\">Privacy Statement</button>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paws-modal-container',
            template: __webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/modal-container/modal-container.component.css")]
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

/***/ "../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ modal.title }}</h1>\r\n<div mat-dialog-content>\r\n    <p *ngIf=\"isBaseModal else faqModal\">\r\n        {{ modal.content }}\r\n    </p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <!-- floats close button to the right -->\r\n  <span style=\"flex: 1 1 auto;\"></span>\r\n  <button mat-raised-button mat-dialog-close tabindex=\"2\">Close</button>\r\n</div>\r\n\r\n<ng-template #faqModal>\r\n    <mat-accordion>\r\n        <mat-expansion-panel *ngFor=\"let accordionPanel of modal.content\">\r\n            <mat-expansion-panel-header>\r\n                {{ accordionPanel.header}}\r\n            </mat-expansion-panel-header>\r\n                {{ accordionPanel.innerContent}}\r\n        </mat-expansion-panel>\r\n    </mat-accordion>\r\n</ng-template>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'paws-modal',
            template: __webpack_require__("../../../../../src/app/footer/modal-container/paws-modals/paws-modal.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
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

/***/ "../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n    float: left;\r\n    margin-left: 10px;\r\n    top: 5px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {    \r\n    button {\r\n        top: 25px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<button \r\n    mat-icon-button\r\n    (click)=\"openSideNav()\"\r\n    class=\"navbar-toggle collapsed\"\r\n    aria-expanded=\"false\">\r\n    <mat-icon class=\"md-24\" style=\"position: relative; font-size: 30px; right: 3px;\">\r\n        menu\r\n    </mat-icon>\r\n</button>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_app_util_service__ = __webpack_require__("../../../../../src/app/shared/services/app-util.service.ts");
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
    function MobileNavbarComponent(matDialog, document, pageScrollService, appUtil) {
        this.matDialog = matDialog;
        this.document = document;
        this.pageScrollService = pageScrollService;
        this.appUtil = appUtil;
        this.currentIndex = 0;
    }
    MobileNavbarComponent.prototype.openSideNav = function () {
        var _this = this;
        if (this.appUtil.onMobileDevice()) {
            this.pageScrollOffset = 50;
        }
        else {
            this.pageScrollOffset = 85;
        }
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
                    pageScrollOffset: _this.pageScrollOffset,
                });
                _this.pageScrollService.start(pageScrollInstance);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], MobileNavbarComponent.prototype, "currentIndex", void 0);
    MobileNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paws-mobile-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/mobile-navbar/mobile-navbar.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */], Object, __WEBPACK_IMPORTED_MODULE_3_ng2_page_scroll__["d" /* PageScrollService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_app_util_service__["a" /* AppUtil */]])
    ], MobileNavbarComponent);
    return MobileNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paws-navbar-header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.paws-brand-container {\r\n    display: none;\r\n}\r\n\r\n.responsive-paws-logo {\r\n    height: auto;\r\n    min-height: 79px;\r\n    width: 100%;\r\n}\r\n\r\n#float-navbar-right {\r\n    margin-top: 15px;\r\n    float: right;\r\n}\r\n\r\n#navbar-collapse {\r\n    display: none !important;\r\n}\r\n\r\n.paws-navbar {\r\n    border-color: transparent;\r\n}\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n\r\n    .paws-navbar {\r\n        background: white;\r\n        border-bottom: 1px solid #d3d8de;\r\n    }    \r\n\r\n    .paws-brand-container {\r\n        height: 100%;\r\n        padding: 3px;\r\n        -webkit-box-flex: 1;\r\n            -ms-flex-positive: 1;\r\n                flex-grow: 1;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n\r\n    .responsive-paws-logo {\r\n        width: auto;\r\n    }\r\n\r\n    .navbar > .container .navbar-brand {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 114px !important; \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 992px) {\r\n    .responsive-paws-logo {\r\n        width: auto;\r\n        margin-left: none;\r\n    }\r\n\r\n    .navbar > .container .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    \r\n    .mat-tab-label {\r\n        min-width: 145px !important; \r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .responsive-paws-logo {\r\n        width: auto;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 160px !important; \r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1450px) {\r\n    \r\n    #float-navbar-right {\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .paws-navbar-header {\r\n        width: 40%;\r\n    }\r\n\r\n    .mat-tab-label {\r\n        min-width: 160px !important; \r\n    }\r\n\r\n    #navbar-collapse {\r\n        display: block !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav \r\n  class=\"navbar navbar-default navbar-fixed-top paws-navbar\"\r\n  style=\"z-index: 1000 !important;\"\r\n  id=\"mainNavBar\" \r\n  role=\"navigation\"\r\n  pawsNavbarEnlarge \r\n  pawsScrollSpy \r\n  [disableWhen]=\"currentlyScrolling\" \r\n  (newActiveTab)=\"changeCurrentTabIndex($event)\"\r\n>\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header page-scroll paws-navbar-header\">\r\n      <div class=\"navbar-brand paws-brand-container\">\r\n        <img class=\"responsive-paws-logo\" src=\"../../assets/images/PawsLogo.png\">\r\n      </div>\r\n      <paws-mobile-navbar [currentIndex]=\"currentTabIndex\"></paws-mobile-navbar>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\" \r\n    pawsScrollTo \r\n    [querySelector]=\"'div.mat-tab-label'\"\r\n    (nowScrollingEvent)=\"currentlyScrolling = $event\">\r\n      <mat-tab-group class=\"nav navbar-nav\" id=\"float-navbar-right\" \r\n      [selectedIndex]=\"currentTabIndex\">\r\n        <mat-tab label=\"Home\"></mat-tab>\r\n        <mat-tab label=\"About\"></mat-tab>\r\n        <mat-tab label=\"Services\"></mat-tab>\r\n        <mat-tab label=\"Resources\"></mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </div>\r\n  <!-- /.container -->\r\n</nav>"

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
        //set image min-height in pixels, should have this hard-coded somewhere else
        this.minImgHeight = 96;
        this.currentTabIndex = 0;
        //stores whether the click-triggered scroll has finished or not.
        this.currentlyScrolling = false;
    }
    NavBarComponent.prototype.ngAfterViewInit = function () {
        // ng2-page-scroll configuration
        // can't use elementRef.nativeElement.offsetHeight 
        // because it changes for some reason
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'nav-bar',
            template: __webpack_require__("../../../../../src/app/navbar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/nav-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
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

/***/ "../../../../../src/app/panel-list/panel-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paws-hero-img {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/top.jpg") + ");\r\n    background-repeat: no-repeat;\r\n    background-position: 50%;\r\n    background-size: cover;\r\n    background-attachment: static;\r\n    height: 100vh;\r\n    transition: height 999999s;\r\n}\r\n\r\n.panel-brand-container {\r\n    position: relative;\r\n    top: 80px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.paws-brand-img {\r\n    width: 90%;\r\n}\r\n\r\n#home {\r\n    min-height: 0%;\r\n    height: 55%;\r\n    background: cornflowerblue;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n\r\n@media screen and (min-height: 400px) {    \r\n    #home {\r\n        height: 42%;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 500px) {    \r\n    #home {\r\n        height: 36%;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 550px) {    \r\n    #home {\r\n        height: 33%;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 560px) {    \r\n    #home {\r\n        height: 30%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 404px) {    \r\n    .paws-brand-img {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 768px) {    \r\n    .paws-hero-img {\r\n        background-attachment: fixed;\r\n        height: 100%;\r\n    }\r\n\r\n    #home {\r\n        height: 100%; \r\n        margin: 0px;\r\n        display: block;\r\n        background: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panel-list/panel-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Intro Section -->\r\n<div id=\"home\" class=\"custom-panel\">\r\n    <ng-container *ngIf=\"appUtil.onMobileDevice(); then brandImg else heroImg\"></ng-container>\r\n    <ng-template #heroImg>\r\n        <div class=\"paws-hero-img\"></div>\r\n    </ng-template>\r\n    <ng-template #brandImg>\r\n        <div class=\"panel-brand-container\">\r\n            <img class=\"paws-brand-img\" src=\"../../assets/images/PawsLogo-white-out.png\">\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n\r\n<paws-about-panel [shouldHaveSeparator]=\"true\"></paws-about-panel>\r\n<paws-services-panel [shouldHaveSeparator]=\"true\"></paws-services-panel>\r\n<paws-resources-panel></paws-resources-panel>"

/***/ }),

/***/ "../../../../../src/app/panel-list/panel-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panel_service__ = __webpack_require__("../../../../../src/app/panel-list/panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_app_util_service__ = __webpack_require__("../../../../../src/app/shared/services/app-util.service.ts");
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
    function PanelList(panelService, appUtil) {
        this.panelService = panelService;
        this.appUtil = appUtil;
    }
    PanelList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'panel-list',
            template: __webpack_require__("../../../../../src/app/panel-list/panel-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panel-list/panel-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__panel_service__["a" /* PanelService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_app_util_service__["a" /* AppUtil */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], PanelService);
    return PanelService;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/about-panel/about-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-display-3 {\r\n    margin-bottom: 5px;\r\n    font-size: 32px;\r\n}\r\n\r\n.mat-body-1 {\r\n    font-size: 16px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .mat-body-1 {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .mat-display-3 {\r\n        font-size: 56px;\r\n        margin-bottom: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panel-list/panels/about-panel/about-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"custom-panel\" [class.bottom-separator]=\"shouldHaveSeparator\">\r\n    <div class=\"container\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <div class=\"mat-display-3\" pawsAnimateOnScroll fadeFrom=\"right\">About</div>\r\n                <div class=\"row\" style=\"position: relative; top: 15px;\">\r\n                    <div class=\"col-xs-12\">\r\n                        <div class=\"panel-text\">\r\n                            <p pawsAnimateOnScroll fadeFrom=\"left\" trigger=\"partial\" class=\"mat-body-1\">\r\n                                Ms. Woodward received her law degree from the Washington & Lee University School of Law in Lexington, Virginia. She received\r\n                                a B.A. from Williams College in Williamstown, Massachusetts, and prior to that, she received\r\n                                an A.A. from Hartford College for Women in Hartford, Connecticut. She was admitted to the\r\n                                Virginia State Bar in 1980. In 2012, she had the honor of being appointed the Assistant Commissioner\r\n                                of Accounts for Fauquier County.  In 2014, she also had the honor of\r\n                                being appointed the Assistant Commissioner of Accounts for Rappahannock County. Ms. Woodward and her husband have lived in Fauquier County\r\n                                for more than thirty years.\r\n                            </p>\r\n                            <!-- <hr> -->\r\n                            <div pawsAnimateOnScroll fadeFrom=\"right\" trigger=\"partial\">\r\n                                <p class=\"mat-body-1\">\r\n                                    Since moving to the county, she has been active in many community groups. Some of the groups with which she has been involved\r\n                                    include the following:\r\n                                </p>\r\n                                <ul style=\"list-style: none;\" class=\"mat-body-1\">\r\n                                    <li>Altrusa International, Inc. [International service organization]</li>\r\n                                    <li>Fauquier Excellence in Education Foundation (FEIEF)</li>\r\n                                    <li>PATH Foundation</li>\r\n                                    <li>Piedmont Symphony Orchestra</li>\r\n                                    <li>Safe & SANE Task Force</li>\r\n                                    <li>SAVVI</li>\r\n                                    <li>Blue Ridge Dance Theatre</li>\r\n                                    <li>Fauquier Community Action Committee (local Head Start agency)</li>\r\n                                    <li>Fauquier County Bar Association</li>\r\n                                    <li>Fauquier County Chamber of Commerce</li>\r\n                                    <li>Fauquier Courthouse NSDAR</li>\r\n                                    <li>Literacy Volunteers of Fauquier County</li>\r\n                                    <li>Warrenton Presbyterian Church</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n    </div>\r\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AboutPanelComponent.prototype, "shouldHaveSeparator", void 0);
    AboutPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paws-about-panel',
            template: __webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panel-list/panels/about-panel/about-panel.component.css")]
        })
    ], AboutPanelComponent);
    return AboutPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#resources .mat-nav-list {\r\n    text-align: left;\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {    \r\n    #resources .mat-list-item {\r\n        font-size: 12px;\r\n        margin-top: 5px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"resources\" class=\"custom-panel\">\r\n    <div class=\"container\">\r\n        <mat-card style=\"margin-top: 15px;\">\r\n            <mat-card-content>\r\n                <div class=\"mat-display-3\" pawsAnimateOnScroll fadeFrom=\"right\">Resources</div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <div class=\"panel-text\" pawsAnimateOnScroll fadeFrom=\"left\">\r\n                            <mat-accordion>\r\n                                <mat-expansion-panel *ngFor=\"let accordionPanel of accordionPanels\">\r\n                                    <mat-expansion-panel-header>\r\n                                        <span style=\"font-size: 18px;\"> {{accordionPanel.header}}</span>\r\n                                    </mat-expansion-panel-header>\r\n                                    <mat-nav-list>\r\n                                        <a mat-list-item *ngFor=\"let resourceLink of accordionPanel.innerContent\" [attr.href]=\"resourceLink.linkDest\" target=_blank>\r\n                                            <span style=\"font-size: 16px\">{{resourceLink.linkText}}</span>\r\n                                            <span style=\"flex: 1 1 auto\"></span>\r\n                                            <mat-icon style=\"position: relative; left: 5px; top: 2px;\">\r\n                                                link\r\n                                            </mat-icon>\r\n                                        </a>\r\n                                    </mat-nav-list>\r\n                                </mat-expansion-panel>\r\n                            </mat-accordion>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n    </div>\r\n</div>"

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
                        linkDest: 'http://www.fauquiercounty.gov/government/departments-a-g/circuit-court-clerk'
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
                        linkDest: 'http://www.vsb.org/site/publications/sy18'
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
                        linkDest: 'https://www.va.gov/'
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
                        linkDest: 'http://www.fauquiercounty.gov/government/departments-a-g/circuit-court-clerk'
                    },
                    {
                        linkText: 'Fauquier County Circuit Court Clerk\'s Office - Wills and Estates',
                        linkDest: 'http://www.fauquiercounty.gov/government/departments-a-g/circuit-court-clerk/wills-and-estates'
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
                        linkText: 'Loudoun Circuit Court Clerk\'s Office - Probate Division',
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
                        linkText: 'Buying a home: Buying a home in 10 steps',
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
        ];
    };
    ResourcesPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paws-resources-panel',
            template: __webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panel-list/panels/resources-panel/resources-panel.component.css")]
        })
    ], ResourcesPanelComponent);
    return ResourcesPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panel-list/panels/services-panel/services-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".responsive-service-cards {\r\n    display: block;\r\n}\r\n\r\n.responsive-service-cards mat-icon {\r\n    height: auto;\r\n    width: auto;\r\n    font-size: 50px;\r\n}\r\n\r\n#BusinessCard, #RealEstateCard {\r\n    margin-top: 20px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .responsive-service-cards {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n\r\n    .responsive-service-cards mat-icon {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 75px;\r\n    }\r\n\r\n    #BusinessCard, #RealEstateCard {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 992px) {\r\n    .responsive-service-cards mat-icon {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 75px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1170px) {\r\n    .responsive-service-cards mat-icon {\r\n        height: auto;\r\n        width: auto;\r\n        font-size: 100px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panel-list/panels/services-panel/services-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"services\" class=\"custom-panel\" [class.bottom-separator]=\"shouldHaveSeparator\">\r\n    <div class=\"container\">\r\n        <mat-card style=\"margin-top: 15px;\">\r\n            <mat-card-content>\r\n                <div class=\"mat-display-3\" pawsAnimateOnScroll fadeFrom=\"left\">Services</div>\r\n                <div class=\"row responsive-service-cards\">\r\n                    <div class=\"col-sm-6\" pawsAnimateOnScroll fadeFrom=\"right\">\r\n                        <mat-card>\r\n                            <mat-icon>attach_money</mat-icon>\r\n                            <hr>\r\n                            <mat-card-content>\r\n                                <span class=\"mat-title\">Estate Planning</span>\r\n                            </mat-card-content>\r\n                        </mat-card>\r\n                    </div>\r\n                    <div class=\"col-sm-6\" pawsAnimateOnScroll fadeFrom=\"left\" id=\"RealEstateCard\">\r\n                        <mat-card>\r\n                            <mat-icon>home</mat-icon>\r\n                            <hr>\r\n                            <mat-card-content>\r\n                                <span class=\"mat-title\">Real Estate</span>\r\n                            </mat-card-content>\r\n                        </mat-card>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row responsive-service-cards\">\r\n                    <div class=\"col-sm-6\" pawsAnimateOnScroll fadeFrom=\"right\">\r\n                        <mat-card>\r\n                            <!-- TODO: maybe need better icon for this? -->\r\n                            <mat-icon>person</mat-icon>\r\n                            <hr>\r\n                            <mat-card-content>\r\n                                <span class=\"mat-title\">Guardianships</span>\r\n                            </mat-card-content>\r\n                        </mat-card>\r\n                    </div>\r\n                    <div class=\"col-sm-6\" pawsAnimateOnScroll fadeFrom=\"left\" id=\"BusinessCard\">\r\n                        <mat-card>\r\n                            <mat-icon>business</mat-icon>\r\n                            <hr>\r\n                            <mat-card-content>\r\n                                <span class=\"mat-title\">Business</span>\r\n                            </mat-card-content>\r\n                        </mat-card>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\" pawsAnimateOnScroll fadeFrom=\"right\">\r\n                        <mat-card>\r\n                            <div class=\"mat-subheading-2\" style=\"font-size: 16px;\">\r\n                                For Business, Litigation and Family Law, contact\r\n                                <a href=\"http://www.csadlawyers.com/\" target=_blank>\r\n                                    Culin, Sharp, Autry & Day\r\n                                    <mat-icon style=\"position: relative; top: 5px;\">link</mat-icon>\r\n                                </a>\r\n                            </div>\r\n                        </mat-card>\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ServicesPanelComponent.prototype, "shouldHaveSeparator", void 0);
    ServicesPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paws-services-panel',
            template: __webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panel-list/panels/services-panel/services-panel.component.css")]
        })
    ], ServicesPanelComponent);
    return ServicesPanelComponent;
}());



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
        // don't use singleton service because this number isn't the same as the others
        var onMobileDevice = window.innerWidth < 765;
        // don't do anything with the navbar if a modal is open or we're on a mobile device
        if (!this.isModalOpen && !onMobileDevice) {
            if (currentOffset > collapseOffset) {
                this.renderer.addClass(this.elem.nativeElement, 'navbar-reduced');
            }
            else {
                this.renderer.removeClass(this.elem.nativeElement, 'navbar-reduced');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarEnlargeDirective.prototype, "onScroll", null);
    NavbarEnlargeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pawsNavbarEnlarge]'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PawsAnimateOnScroll.prototype, "fadeFrom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PawsAnimateOnScroll.prototype, "trigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PawsAnimateOnScroll.prototype, "onwindowScroll", null);
    PawsAnimateOnScroll = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pawsAnimateOnScroll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
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
        this.hasScrollFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.querySelector = 'div';
        this.nowScrollingEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
                    pageScrollOffset: 96,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('querySelector'),
        __metadata("design:type", String)
    ], PawsScrollTo.prototype, "querySelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PawsScrollTo.prototype, "nowScrollingEvent", void 0);
    PawsScrollTo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pawsScrollTo]'
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
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
        this.newActiveTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ScrollSpyDirective.prototype, "newActiveTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('disableWhen'),
        __metadata("design:type", Boolean)
    ], ScrollSpyDirective.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollSpyDirective.prototype, "onwindowScroll", null);
    ScrollSpyDirective = ScrollSpyDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pawsScrollSpy]',
            outputs: ['newActiveTab']
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Document,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
    var ScrollSpyDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/app-util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppUtil = /** @class */ (function () {
    function AppUtil() {
    }
    AppUtil.prototype.onMobileDevice = function () {
        return window.innerWidth < 768;
    };
    AppUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], AppUtil);
    return AppUtil;
}());



/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active-item {\r\n    background-color: gainsboro;\r\n    color: cornflowerblue;\r\n}\r\n\r\n.menu-list-item {\r\n    text-align: left; \r\n    width: 100%;\r\n    font-size: 24px;\r\n    margin-top: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align: center; position: relative; top: 8px;\">Menu</h1>\r\n<div mat-dialog-content>\r\n    <div>\r\n        <button\r\n            mat-button\r\n            tabindex=\"-1\"\r\n            *ngFor=\"let nav of navigationList; let index = index;\" \r\n            (click)=\"selectPanel(nav)\" \r\n            [ngClass]=\"{'active-item': isActive(index)}\"\r\n            class=\"menu-list-item\"\r\n        >\r\n            <strong style=\"flex-grow: 1;\">{{nav}}</strong>\r\n            <mat-icon \r\n                matListIcon \r\n                style=\"float: right; position: relative; top: 7px;\"\r\n            >\r\n                keyboard_arrow_right\r\n            </mat-icon>\r\n        </button>\r\n    </div>\r\n</div>"

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
        this.dialogRef.close(dest);
    };
    SideNavComponent.prototype.isActive = function (index) {
        return index === this.currentIndex;
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paws-side-nav',
            template: __webpack_require__("../../../../../src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-nav/side-nav.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Number])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/top.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "top.c1b2611d87b6ce08661d.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
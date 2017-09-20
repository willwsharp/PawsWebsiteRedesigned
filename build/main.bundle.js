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

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panel_panel_service__ = __webpack_require__("../../../../../src/app/panel/panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_scroll_scroll_service__ = __webpack_require__("../../../../../src/app/custom-scroll/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_modal_data_service__ = __webpack_require__("../../../../../src/app/modals/modal-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_FAQ_modal_FAQ_modal_service__ = __webpack_require__("../../../../../src/app/modals/FAQ-modal/FAQ-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__panel_panel_list_component__ = __webpack_require__("../../../../../src/app/panel/panel-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__panel_panel_component__ = __webpack_require__("../../../../../src/app/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_nav_bar_component__ = __webpack_require__("../../../../../src/app/navbar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_modal_component__ = __webpack_require__("../../../../../src/app/modals/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_FAQ_modal_FAQ_modal_component__ = __webpack_require__("../../../../../src/app/modals/FAQ-modal/FAQ-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// TODO: modularise this app
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_8__panel_panel_list_component__["a" /* PanelList */],
            __WEBPACK_IMPORTED_MODULE_9__panel_panel_component__["a" /* PanelComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modals_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__modals_FAQ_modal_FAQ_modal_component__["a" /* FAQModalComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__panel_panel_service__["a" /* PanelService */],
            __WEBPACK_IMPORTED_MODULE_5__custom_scroll_scroll_service__["a" /* ScrollService */],
            __WEBPACK_IMPORTED_MODULE_6__modals_modal_data_service__["a" /* ModalDataService */],
            __WEBPACK_IMPORTED_MODULE_7__modals_FAQ_modal_FAQ_modal_service__["a" /* FAQModalService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__root_component__["a" /* RootComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/custom-scroll/scroll.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollService = (function () {
    function ScrollService() {
        //  jQuery to collapse the navbar on scroll
        $(window).scroll(function () {
            var backToTopOffset = 200;
            var backToTop = $('.reset-scroll');
            if ($('.navbar').offset().top > 50) {
                $('.navbar-fixed-top').addClass('top-nav-collapse');
            }
            else {
                $('.navbar-fixed-top').removeClass('top-nav-collapse');
            }
            if ($(this).scrollTop() > backToTopOffset) {
                backToTop.addClass('show');
            }
            else {
                backToTop.removeClass('show');
            }
        });
    }
    //  jQuery for page scrolling feature - requires jQuery Easing plugin
    ScrollService.prototype.initSmoothScroll = function () {
        $('a.page-scroll').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            var navBarHeight = $("#mainNavBar").height();
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - navBarHeight
                }, 700, 'easeInOutExpo');
            }
        });
    };
    return ScrollService;
}());
ScrollService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ScrollService);

//# sourceMappingURL=scroll.service.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer clas=\"footer\" class=\"paws-footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <h3>Contact</h3>\r\n                <div class=\"contact-div\">\r\n                    <span>31 S. Second Street</span> <br>\r\n                    <span>Warrenton, Va 20187</span> <br>\r\n                    <!-- TODO: make sure this works on mobile -->\r\n                    <a class=\"paws-footer-links\" href=\"tel:5403471482\">Tel: (540)-347-1482</a> <br>\r\n                    <span>Fax: (866)-876-2295</span> <br>\r\n                    <!-- TODO: make sure this works on mobile -->\r\n                    <a class=\"paws-footer-links\" href=\"mailto:pwoodward@patwoodwardlawoffice.com\" target=\"_top\">pwoodward@patwoodwardlawoffice.com</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n                <h3>Business Hours</h3>\r\n                <!-- TODO: maybe make this reflect current time? -->\r\n                <div class=\"business-hours-div\">\r\n                    <span><strong>Mon - Fri</strong> 8:00am - 12:00pm, 1:00pm - 4:30pm</span> <br>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <!-- TODO: design this section better -->\r\n                <div class=\"additionalInfo\">\r\n                    <modal modalName=\"disclaimerModal\"></modal> <br>\r\n                    <modal modalName=\"privacyModal\"></modal> <br>\r\n                    <FAQ-modal></FAQ-modal>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br> <br>\r\n        <div class=\"row\" style=\"text-align: center;\">\r\n            <div class=\"col-sm-12\">\r\n                <sub style=\"font-size: 9px;\">@2017 Patricia A. Woodward - All Rights Reserved.</sub>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'footer-component',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html")
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/FAQ-modal/FAQ-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#FAQModal\" id=\"FAQModalBtn\">\r\n    F.A.Q\r\n</button>\r\n\r\n<div id=\"FAQModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" style=\"margin-top: 10px;\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h3 class=\"modal-title\">Frequently Asked Questions</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"panel-group\" id=\"faq-accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                    \r\n                    <!-- TODO: style these panels! -->\r\n                    <div *ngFor=\"let faqPanel of getFAQPanels(); let i = index;\" \r\n                        class=\"panel panel-default\" \r\n                        role=\"button\" \r\n                        data-toggle=\"collapse\" \r\n                        data-parent=\"#faq-accordion\" \r\n                        [attr.href]=\"'#collapse' + i\" \r\n                        aria-expanded=\"true\" \r\n                        [attr.aria-controls]=\"'collapse' + i\">\r\n                        <div class=\"panel-heading\" role=\"tab\" id=\"heading + i\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <span>\r\n                                        {{faqPanel.question}}\r\n                                    </span>\r\n                                </h4>\r\n                            </div>\r\n                            <div [id]=\"'collapse' + i\" \r\n                                class=\"panel-collapse collapse\"\r\n                                [ngClass] = \"{'in' : i === 0}\"\r\n                                role=\"tabpanel\" \r\n                                [attr.aria-labelledby]=\"'heading' + i\">\r\n                                <div class=\"panel-body\">\r\n                                    {{faqPanel.answer}}\r\n                                </div>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/FAQ-modal/FAQ-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FAQ_modal_service__ = __webpack_require__("../../../../../src/app/modals/FAQ-modal/FAQ-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FAQModalComponent = (function () {
    function FAQModalComponent(faqModalService) {
        this.faqModalService = faqModalService;
    }
    FAQModalComponent.prototype.ngOnInit = function () {
        this.faqPanels = this.faqModalService.getFAQPanels();
    };
    FAQModalComponent.prototype.getFAQPanels = function () {
        return this.faqPanels;
    };
    return FAQModalComponent;
}());
FAQModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'FAQ-modal',
        template: __webpack_require__("../../../../../src/app/modals/FAQ-modal/FAQ-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__FAQ_modal_service__["a" /* FAQModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__FAQ_modal_service__["a" /* FAQModalService */]) === "function" && _a || Object])
], FAQModalComponent);

var _a;
//# sourceMappingURL=FAQ-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/FAQ-modal/FAQ-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FAQModalService = (function () {
    function FAQModalService() {
    }
    FAQModalService.prototype.getFAQPanels = function () {
        var FAQPanels = [
            {
                question: "Do you allow walk-ins?",
                answer: "\n                        No.  In order to allocate sufficient time for each client, it is necessary to work by appointment only. Please do not arrive at the office expecting to see Ms. Woodward without an appointment. When you call for an appointment, please give your name, the nature of your problem, and your telephone number, other information may also be requested\n                        "
            },
            {
                question: "How do I schedule a consultation?",
                answer: "\n                        Call 540-347-1482 and... TODO: need PAWS help for this (if we want this question)\n                        "
            },
            {
                question: "What if I can't make it to an appointment?",
                answer: "\n                        If you cannot keep an appointment, please give her office reasonable notice. Your courtesy will enable her to make time available for another client. \n                        "
            },
            {
                question: "How do I inquire about my case?",
                answer: "\n                        Please give the necessary information to Ms. Woodward's secretary. In many instances she will be familiar with your case. If she cannot answer your questions, she will confer with Ms. Woodward and will return your call as soon as possible.  When calling the office to inquire about your case or ask questions, conserve your time and that of the secretary by consolidating your questions for one call, rather than calling the office on each different question. \n                        "
            },
            {
                question: "What if I need speak to Ms. Woodward immediately?",
                answer: "\n                        When you call the office it may not be possible to speak to Ms. Woodward immediately. If she is in conference with a client, she will not interrupt it to take calls. Ms. Woodward is often out of the office doing research or attending court, so it is not always possible for her to return telephone calls immediately.\n                        "
            }
        ];
        return FAQPanels;
    };
    return FAQModalService;
}());
FAQModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], FAQModalService);

//# sourceMappingURL=FAQ-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/modal-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDataService = (function () {
    function ModalDataService() {
    }
    ModalDataService.prototype.getModalTitle = function (_modalName) {
        if (_modalName === "disclaimerModal") {
            return this.getDisclaimerModalTitle();
        }
        else if (_modalName === "privacyModal") {
            return this.getPrivacyModalTitle();
        }
    };
    ModalDataService.prototype.getModalText = function (_modalName) {
        if (_modalName === "disclaimerModal") {
            return this.getDisclaimerModalText();
        }
        else if (_modalName === "privacyModal") {
            return this.getPrivacyModalText();
        }
    };
    ModalDataService.prototype.getDisclaimerModalText = function () {
        return "\n        The information contained in the website of Patricia A. Woodward, Attorney at Law, is provided for informational purposes only, and should not be construed as legal advice on any subject matter. Any information contained herein is not intended to be a substitute for legal counsel on any subject matter. No recipients of content from this site, clients or otherwise, should act or refrain from acting on the basis of any content included in the site without seeking the appropriate legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed in the recipient's state. The content of this website contains general information and may not reflect current legal developments, verdicts or settlements. Patricia A. Woodward expressly disclaims all liability in respect to actions taken or not taken base on any or all the contents of this site. Any information sent to Patricia A. Woodard via Internet e-mail or through this website is not secure and is done so on a non-confidential basis. Please do not convey any confidential information to this office until a formal lawyer-client relationship has been otherwise established. As is the case with all communications, whether by phone, fax, letter or otherwise, the transmission of the website, in part or in whole, and/or the communication with Patricia A. Woodward via Internet e-mail or through this website does not constitute or create an attorney-client relationship between Patricia A. Woodward and any senders and/or recipient. This Law Office does not necessarily endorse, and is not responsible for, any third-party content that may be accessed through this website. The hypertext links herein are not under the control of Patricia A Woodward. Patricia A. Woodward expressly disclaims all liability in respect to actions taken or not taken based on any or all the contents of any third-party sites. These materials may be considered advertising in certain states.\n        ";
    };
    ModalDataService.prototype.getPrivacyModalText = function () {
        return "\n        This Privacy Policy describes Patricia A. Woodward's collection of information from her website. Information may be provided directly by you or may be derived mechanically from your browser when you visit this website. This website does not share, rent, or sell any information about visitors to the website to any third parties. This website collects and stores on an aggregate basis only the following information about the website visitors: the browser and its associated version number, the date and time of your visit, the IP address from where you accessed the site, the protocol which you used to access the site, the amount of data transferred to you, and the Internet address of the website from which you were redirected to us (if you linked directly to our site from another one). This information is used to measure the number of visitors to the site, all as part of an effort to improve the site for visitors. As you may know, a \"cookie\" is an element of data that websites can send to your browser which may then be stored on your system. This website does not use \"cookies\" to collect any information about visitors to this site. This website may contain links to other sites. Ms. Woodward is not responsible for the content or privacy policies of those websites.\n        ";
    };
    ModalDataService.prototype.getDisclaimerModalTitle = function () {
        return 'Disclaimer';
    };
    ModalDataService.prototype.getPrivacyModalTitle = function () {
        return 'Privacy Statement';
    };
    return ModalDataService;
}());
ModalDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModalDataService);

//# sourceMappingURL=modal-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" data-toggle=\"modal\" [attr.data-target]=\"'#'+modalName\" \r\n    [id]=\"modalName+'Btn'\">\r\n        {{modalTitle}}\r\n</button>\r\n\r\n<div [id]=\"modalName\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" style=\"margin-top: 10px;\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                    <h3 class=\"modal-title\">{{modalTitle}}</h3>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <span>\r\n                    {{modalText}}\r\n                </span>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_data_service__ = __webpack_require__("../../../../../src/app/modals/modal-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalDataService) {
        this.modalDataService = modalDataService;
        this.modalTitle = '';
        this.modalText = '';
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.modalText = this.modalDataService.getModalText(this.modalName);
        this.modalTitle = this.modalDataService.getModalTitle(this.modalName);
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalName", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'modal',
        template: __webpack_require__("../../../../../src/app/modals/modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modal_data_service__["a" /* ModalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_data_service__["a" /* ModalDataService */]) === "function" && _a || Object])
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" id=\"mainNavBar\" role=\"navigation\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header page-scroll\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <div class=\"navbar-brand paws-logo\">\r\n        <img src=\"../../assets/images/PawsLogo.png\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- TODO: this nav will probably look better if more in vertical center -->\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\" id=\"float-navbar-right\">\r\n        <li class=\"active\">\r\n          <a class=\"page-scroll\" href=\"#top\">Home</a>\r\n        </li>\r\n        <li>\r\n          <a class=\"page-scroll\" href=\"#about\">About</a>\r\n        </li>\r\n        <li>\r\n          <a class=\"page-scroll\" href=\"#services\">Services</a>\r\n        </li>\r\n        <li>\r\n          <a class=\"page-scroll\" href=\"#resources\">Resources</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </div>\r\n  <!-- /.container -->\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'nav-bar',
        template: __webpack_require__("../../../../../src/app/navbar/nav-bar.component.html")
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/panel/panel-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Intro Section -->\r\n<section id=\"top\" class=\"panel\">\r\n</section>\r\n\r\n<panel-component *ngFor=\"let panel of getPanelList(); let i = index\" \r\n    [panel]=\"panel\" \r\n    [shouldHaveSeparator]=\"i < getPanelList().length-1\">\r\n</panel-component>\r\n<a class=\"page-scroll glyphicon glyphicon-arrow-up reset-scroll\" href=\"#top\" title=\"Return to top\"></a>\r\n"

/***/ }),

/***/ "../../../../../src/app/panel/panel-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panel_service__ = __webpack_require__("../../../../../src/app/panel/panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelList = (function () {
    function PanelList(panelService) {
        this.panelService = panelService;
    }
    PanelList.prototype.ngOnInit = function () {
        this.createPanels();
    };
    PanelList.prototype.createPanels = function () {
        this._panels = this.panelService.createPanels();
    };
    PanelList.prototype.getPanelList = function () {
        return this._panels;
    };
    return PanelList;
}());
PanelList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'panel-list',
        template: __webpack_require__("../../../../../src/app/panel/panel-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__panel_service__["a" /* PanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__panel_service__["a" /* PanelService */]) === "function" && _a || Object])
], PanelList);

var _a;
//# sourceMappingURL=panel-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id={{panel.cssId}} class=\"custom-panel\" [class.bottom-separator]=\"shouldHaveSeparator\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1>{{panel.title}}</h1>\r\n                <p class=\"panel-text\" [innerHtml]=\"panelSummary\"></p>\r\n                <p *ngIf=\"moreDetailsToggled\" [innerHtml]=\"panelMoreDetails\"\r\n                [ngClass]=\"{\r\n                    'fade-in' : moreDetailsToggled,\r\n                    'fade-out': !moreDetailsToggled}\"\r\n                class=\"panel-text more-details\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a *ngIf=\"hasMoreDetails\" [ngClass]=\"{\r\n        'invert-element-up': moreDetailsToggled,\r\n        'invert-element-down': !moreDetailsToggled}\"\r\n    class=\"glyphicon glyphicon-menu-up toggle-more-details\"\r\n    [attr.title]=\"moreDetailsToggled ? 'Read less' : 'Read more'\"\r\n    my-invert-element\r\n    (click)=\"toggleMoreDetails()\"></a>\r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panel_panel__ = __webpack_require__("../../../../../src/app/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_scroll_scroll_service__ = __webpack_require__("../../../../../src/app/custom-scroll/scroll.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PanelComponent = (function () {
    function PanelComponent(scrollService) {
        this.scrollService = scrollService;
        this.shouldHaveSeparator = true;
        this.moreDetailsToggled = false;
        this.hasMoreDetails = false;
    }
    PanelComponent.prototype.ngOnInit = function () {
        this.scrollService.initSmoothScroll();
        this.panelSummary = this.panel.summary;
        if (this.panel.moreDetails) {
            this.hasMoreDetails = true;
        }
        this.panelMoreDetails = this.panel.moreDetails;
    };
    PanelComponent.prototype.toggleMoreDetails = function () {
        this.moreDetailsToggled = !this.moreDetailsToggled;
    };
    return PanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], PanelComponent.prototype, "shouldHaveSeparator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__panel_panel__["a" /* Panel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__panel_panel__["a" /* Panel */]) === "function" && _a || Object)
], PanelComponent.prototype, "panel", void 0);
PanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'panel-component',
        template: __webpack_require__("../../../../../src/app/panel/panel.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__custom_scroll_scroll_service__["a" /* ScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_scroll_scroll_service__["a" /* ScrollService */]) === "function" && _b || Object])
], PanelComponent);

var _a, _b;
//# sourceMappingURL=panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/panel/panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelService = (function () {
    function PanelService() {
        this._genericSummary = "\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin diam\n    at erat consectetur, placerat tristique lacus commodo. Nunc sed augue at odio fermentum suscipit. Etiam\n    et sapien eros. Maecenas pulvinar iaculis velit, in varius sem bibendum in. Cras accumsan massa enim,\n    in pretium ante sollicitudin nec. Morbi nunc purus, condimentum ut metus eget, dapibus pharetra eros.\n    Morbi faucibus arcu vel diam rutrum commodo. Nam mi sapien, laoreet et egestas ac, pellentesque nec erat.\n    Vivamus suscipit auctor molestie. Quisque et tincidunt elit. Nullam lorem tellus, mollis sit amet rutrum\n    sed, egestas a magna. Integer venenatis varius felis, quis iaculis augue efficitur sed. Nullam orci mi,\n    tristique eget mi non, fermentum egestas nisi. Vivamus eget nisi risus.\n    ";
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
                summary: this._genericSummary,
                moreDetails: this._genericSummary
            }
        ];
        return panels;
    };
    return PanelService;
}());
PanelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], PanelService);

//# sourceMappingURL=panel.service.js.map

/***/ }),

/***/ "../../../../../src/app/panel/panel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Panel; });
var Panel = (function () {
    function Panel() {
    }
    return Panel;
}());

//# sourceMappingURL=panel.js.map

/***/ }),

/***/ "../../../../../src/app/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    return RootComponent;
}());
RootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'root-component',
        template: "\n    <nav-bar></nav-bar>\n    <panel-list>Loading...</panel-list>\n    <footer-component></footer-component>\n  "
    })
], RootComponent);

//# sourceMappingURL=root.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
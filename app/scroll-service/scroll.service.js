"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScrollService = (function () {
    function ScrollService() {
        //  jQuery to collapse the navbar on scroll
        $(window).scroll(function () {
            var backToTopOffset = 200;
            var backToTop = $('.reset-scroll');
            var disclaimerModalOpened = ($('#disclaimerModal').data('bs.modal') || {}).isShown;
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
    ScrollService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ScrollService);
    return ScrollService;
}());
exports.ScrollService = ScrollService;
//# sourceMappingURL=scroll.service.js.map
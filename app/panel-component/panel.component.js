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
var panel_1 = require("../panel/panel");
var scroll_service_1 = require("../scroll-service/scroll.service");
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PanelComponent.prototype, "shouldHaveSeparator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", panel_1.Panel)
    ], PanelComponent.prototype, "panel", void 0);
    PanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panel-component',
            templateUrl: 'panel.component.html'
        }),
        __metadata("design:paramtypes", [scroll_service_1.ScrollService])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map
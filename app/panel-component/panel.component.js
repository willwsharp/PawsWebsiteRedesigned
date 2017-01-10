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
var core_1 = require('@angular/core');
var panel_1 = require('../panel/panel');
var PanelComponent = (function () {
    function PanelComponent() {
        this.shouldHaveSeparator = true;
        this.moreDetailsToggled = false;
    }
    PanelComponent.prototype.ngOnInit = function () {
        //This is called after the component is loaded,
        //it is a global function found in scrolling-nav.js
        initSmoothScroll();
        this.fullPanelTxt = this.panel.summary;
    };
    PanelComponent.prototype.toggleMoreDetails = function () {
        if (this.moreDetailsToggled) {
            this.fullPanelTxt = this.panel.moreDetails;
        }
        else {
            this.fullPanelTxt += this.panel.moreDetails;
        }
        this.moreDetailsToggled = !this.moreDetailsToggled;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PanelComponent.prototype, "shouldHaveSeparator", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', panel_1.Panel)
    ], PanelComponent.prototype, "panel", void 0);
    PanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panel-component',
            templateUrl: 'panel.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map
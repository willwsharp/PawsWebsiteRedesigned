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
var panel_service_1 = require('../panel-service/panel.service');
var PanelListComponent = (function () {
    function PanelListComponent(panelService) {
        this.panelService = panelService;
    }
    PanelListComponent.prototype.ngOnInit = function () {
        this.createPanels();
    };
    PanelListComponent.prototype.createPanels = function () {
        this._panels = this.panelService.getPanels();
    };
    PanelListComponent.prototype.getPanelList = function () {
        return this._panels;
    };
    PanelListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panel-list',
            templateUrl: 'panel-list.component.html'
        }), 
        __metadata('design:paramtypes', [panel_service_1.PanelService])
    ], PanelListComponent);
    return PanelListComponent;
}());
exports.PanelListComponent = PanelListComponent;
//# sourceMappingURL=panel-list.component.js.map
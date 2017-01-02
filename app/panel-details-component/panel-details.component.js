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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var panel_service_1 = require('../panel-service/panel.service');
var PanelDetailsComponent = (function () {
    function PanelDetailsComponent(route, router, panelService) {
        this.route = route;
        this.router = router;
        this.panelService = panelService;
    }
    PanelDetailsComponent.prototype.ngOnInit = function () {
        var panelName = this.route.snapshot.params['name'];
        this.panel = this.panelService.getPanel(panelName);
    };
    PanelDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panel-more-details',
            templateUrl: 'panel-more-details.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, panel_service_1.PanelService])
    ], PanelDetailsComponent);
    return PanelDetailsComponent;
}());
exports.PanelDetailsComponent = PanelDetailsComponent;
//# sourceMappingURL=panel-details.component.js.map
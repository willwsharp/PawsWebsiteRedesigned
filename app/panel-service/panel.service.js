"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PanelService = (function () {
    function PanelService() {
        this._genericSummary = "\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin diam\n    at erat consectetur, placerat tristique lacus commodo. Nunc sed augue at odio fermentum suscipit. Etiam\n    et sapien eros. Maecenas pulvinar iaculis velit, in varius sem bibendum in. Cras accumsan massa enim,\n    in pretium ante sollicitudin nec. Morbi nunc purus, condimentum ut metus eget, dapibus pharetra eros.\n    Morbi faucibus arcu vel diam rutrum commodo. Nam mi sapien, laoreet et egestas ac, pellentesque nec erat.\n    Vivamus suscipit auctor molestie. Quisque et tincidunt elit. Nullam lorem tellus, mollis sit amet rutrum\n    sed, egestas a magna. Integer venenatis varius felis, quis iaculis augue efficitur sed. Nullam orci mi,\n    tristique eget mi non, fermentum egestas nisi. Vivamus eget nisi risus.\n    ";
    }
    PanelService.prototype.createPanels = function () {
        var panels = [
            {
                title: 'About',
                cssId: 'about',
                summary: this._genericSummary,
                moreDetails: this._genericSummary
            },
            {
                title: 'Services',
                cssId: 'services',
                summary: this._genericSummary,
                moreDetails: this._genericSummary
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
    core_1.Injectable()
], PanelService);
exports.PanelService = PanelService;
//# sourceMappingURL=panel.service.js.map
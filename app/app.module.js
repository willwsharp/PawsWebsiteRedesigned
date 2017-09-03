"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var root_component_1 = require("./root-component");
var panel_service_1 = require("./panel-service/panel.service");
var panel_list_component_1 = require("./panel-list/panel-list.component");
var panel_component_1 = require("./panel-component/panel.component");
var nav_bar_component_1 = require("./nav-bar-component/nav-bar.component");
var footer_component_1 = require("./footer-component/footer.component");
var disclaimer_modal_component_1 = require("./modal-components/disclaimer-modal-component/disclaimer-modal.component");
// modularise this app
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
            ],
            declarations: [
                root_component_1.RootComponent,
                panel_list_component_1.PanelList,
                panel_component_1.PanelComponent,
                nav_bar_component_1.NavBarComponent,
                footer_component_1.FooterComponent,
                disclaimer_modal_component_1.DisclaimerModalComponent
            ],
            providers: [panel_service_1.PanelService],
            bootstrap: [root_component_1.RootComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
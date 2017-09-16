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
var modal_data_service_1 = require("../../modal-data-service/modal-data.service");
var DisclaimerModalComponent = (function () {
    function DisclaimerModalComponent(modalDataService) {
        this.modalDataService = modalDataService;
        this.modalText = '';
        this.modalTitle = '';
        this.modalName = modalDataService.getModalTitle(this.modalName);
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DisclaimerModalComponent.prototype, "modalName", void 0);
    DisclaimerModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'disclaimer-modal',
            templateUrl: 'disclaimer-modal.component.html'
        }),
        __metadata("design:paramtypes", [modal_data_service_1.ModalDataService])
    ], DisclaimerModalComponent);
    return DisclaimerModalComponent;
}());
exports.DisclaimerModalComponent = DisclaimerModalComponent;
//# sourceMappingURL=disclaimer-modal.component.js.map
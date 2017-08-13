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
                summary: "\n                Ms. Woodward received her law degree from the Washington & Lee University School of Law in Lexington,\n                Virginia. She received a B.A. from Williams College in Williamstown, Massachusetts, \n                and prior to that, she received an A.A. from Hartford College for Women in Hartford, \n                Connecticut. She was admitted to the Virginia State Bar in 1980. In 2012, she had the \n                honor of being appointed the Assistant Commissioner of Accounts for Fauquier County. \n                Ms. Woodward and her husband have lived in Fauquier County for almost thirty years.            \n                ",
                moreDetails: "\n                Since moving to the county, she has been active in many community groups. Some \n                of the groups with which she has been involved include the following: \n                <ul>\n                    <li>Altrusa International, Inc. [International service organization]</li>\n                    <li>Fauquier Health Foundation</li>\n                    <li>Piedmont Symphony Orchestra</li>\n                    <li>Safe & SANE Task Force</li>\n                    <li>SAVVI</li>\n                    <li>Blue Ridge Dance Theatre</li>\n                    <li>Fauquier Community Action Committee (local Head Start agency)</li>\n                    <li>Fauquier County Bar Association</li>\n                    <li>Fauquier County Chamber of Commerce</li>\n                    <li>Fauquier Courthouse NSDAR</li>\n                    <li>Literacy Volunteers of Fauquier County</li>\n                    <li>Warrenton Presbyterian Church</li>\n                </ul>\n                "
            },
            {
                title: 'Services',
                cssId: 'services',
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
    core_1.Injectable()
], PanelService);
exports.PanelService = PanelService;
//# sourceMappingURL=panel.service.js.map
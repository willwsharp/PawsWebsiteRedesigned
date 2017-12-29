import { Component, EventEmitter, Output, Input, Inject } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SideNavComponent } from "../../side-nav/side-nav.component";
import { PageScrollInstance, PageScrollService } from "ng2-page-scroll";
import { DOCUMENT } from "@angular/platform-browser";
import { AppUtil } from "../../shared/services/app-util.service";

@Component({
    selector: 'paws-mobile-navbar',
    templateUrl: './mobile-navbar.component.html',
    styleUrls: [
        './mobile-navbar.component.css'
    ]
})
export class MobileNavbarComponent {

    @Input() currentIndex: number = 0;

    pageScrollOffset: number;

    constructor(private matDialog: MatDialog,
        @Inject(DOCUMENT) private document: any,
        private pageScrollService: PageScrollService,
        private appUtil: AppUtil) { }

    public openSideNav() {

        if (this.appUtil.onMobileDevice()) {
            this.pageScrollOffset = 50;
        } else {
            this.pageScrollOffset = 85;
        }

        let dialogRef = this.matDialog.open(SideNavComponent, {
            height: 'auto',
            width: 'auto',
            panelClass: 'side-nav-menu',
            data: this.currentIndex
        });

        dialogRef.afterClosed().subscribe((dest: string) => {
            if (dest) {
                dest = '#' + dest.toLowerCase();
                let pageScrollInstance: PageScrollInstance =
                    PageScrollInstance.newInstance({
                        document: this.document,
                        scrollTarget: dest,
                        pageScrollOffset: this.pageScrollOffset,
                    });

                this.pageScrollService.start(pageScrollInstance);
            }
        })
    }
}
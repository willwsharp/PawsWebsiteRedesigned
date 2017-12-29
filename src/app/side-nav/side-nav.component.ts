import { Component, Input, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'paws-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: [
        './side-nav.component.css'
    ]
})
export class SideNavComponent {

    public navigationList: string[] = [];

    constructor(public dialogRef: MatDialogRef<SideNavComponent>,
                @Inject(MAT_DIALOG_DATA) public currentIndex: number) {}

    ngOnInit() {
        this.navigationList.push('Home');
        this.navigationList.push('About');
        this.navigationList.push('Services');
        this.navigationList.push('Resources');
    }

    public selectPanel(dest: string) {
        this.dialogRef.close(dest);
    }

    public isActive(index: number) {
        return index === this.currentIndex;
    }
}
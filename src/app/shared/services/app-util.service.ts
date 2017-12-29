import { Injectable } from "@angular/core";

@Injectable()
export class AppUtil {
    public onMobileDevice(): boolean {
        return window.innerWidth < 768;
    }
}
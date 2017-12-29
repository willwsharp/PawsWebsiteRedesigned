import { PawsModalType } from "./paws-modal-type.enum";

export class PawsModal {
    constructor (public type: PawsModalType,
                 public title: string, 
                 public content: any) {}
}
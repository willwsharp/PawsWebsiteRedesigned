import { ResourceLink } from "./resource-link.model";
import { BaseAccordionElement } from "../../../shared/models/base-accordion-element.model";

export class ResourceAccordion implements BaseAccordionElement {
    public header: string;
    public innerContent: ResourceLink[];
}
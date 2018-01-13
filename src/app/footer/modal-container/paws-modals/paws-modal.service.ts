import { Injectable } from '@angular/core';
import { PawsModal } from './paws-modal.model';
import { PawsModalType } from './paws-modal-type.enum';
import { BaseAccordionElement } from '../../../shared/models/base-accordion-element.model';


export class PawsModalService {
    getModal(_modalName: string): PawsModal {
        if (_modalName === "disclaimerModal") {
            return new PawsModal(PawsModalType.BASE,'Disclaimer', this.getDisclaimerModalText());
        } else if (_modalName === "privacyModal") {
            return new PawsModal(PawsModalType.BASE,'Privacy Statement', this.getPrivacyModalText());
        } else if (_modalName === "faqModal") {
            return new PawsModal(PawsModalType.FAQ,'Frequently Asked Questions', this.getFaqModalText());
        }
    }

    private getDisclaimerModalText(): string {
        return `
        The information contained in the website of Patricia A. Woodward, Attorney at Law, is provided for informational purposes only, and should not be construed as legal advice on any subject matter. Any information contained herein is not intended to be a substitute for legal counsel on any subject matter. No recipients of content from this site, clients or otherwise, should act or refrain from acting on the basis of any content included in the site without seeking the appropriate legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed in the recipient's state. The content of this website contains general information and may not reflect current legal developments, verdicts or settlements. Patricia A. Woodward expressly disclaims all liability in respect to actions taken or not taken base on any or all the contents of this site. Any information sent to Patricia A. Woodard via Internet e-mail or through this website is not secure and is done so on a non-confidential basis. Please do not convey any confidential information to this office until a formal lawyer-client relationship has been otherwise established. As is the case with all communications, whether by phone, fax, letter or otherwise, the transmission of the website, in part or in whole, and/or the communication with Patricia A. Woodward via Internet e-mail or through this website does not constitute or create an attorney-client relationship between Patricia A. Woodward and any senders and/or recipient. This Law Office does not necessarily endorse, and is not responsible for, any third-party content that may be accessed through this website. The hypertext links herein are not under the control of Patricia A Woodward. Patricia A. Woodward expressly disclaims all liability in respect to actions taken or not taken based on any or all the contents of any third-party sites. These materials may be considered advertising in certain states.
        `;
    }

    private getPrivacyModalText(): string {
        return `
        This Privacy Policy describes Patricia A. Woodward's collection of information from her website. Information may be provided directly by you or may be derived mechanically from your browser when you visit this website. This website does not share, rent, or sell any information about visitors to the website to any third parties. This website collects and stores on an aggregate basis only the following information about the website visitors: the browser and its associated version number, the date and time of your visit, the IP address from where you accessed the site, the protocol which you used to access the site, the amount of data transferred to you, and the Internet address of the website from which you were redirected to us (if you linked directly to our site from another one). This information is used to measure the number of visitors to the site, all as part of an effort to improve the site for visitors. As you may know, a "cookie" is an element of data that websites can send to your browser which may then be stored on your system. This website does not use "cookies" to collect any information about visitors to this site. This website may contain links to other sites. Ms. Woodward is not responsible for the content or privacy policies of those websites.
        `;
    }

    private getFaqModalText(): BaseAccordionElement[] {
        let FAQPanels: BaseAccordionElement[] = [
            {
                header: "Do you allow walk-ins?",
                innerContent: `
                        No.  In order to allocate sufficient time for each client, it is necessary to work by appointment only. Please do not arrive at the office expecting to see Ms. Woodward without an appointment. When you call for an appointment, please give your name, the nature of your problem, and your telephone number, other information may also be requested
                        `
            },
            {
                header: "How do I schedule a consultation?",
                innerContent: `
                        Call 540-347-1482 to schedule an appointment.
                        `
            },
            {
                header: "What if I can't make it to an appointment?",
                innerContent: `
                        If you cannot keep an appointment, please give her office reasonable notice. Your courtesy will enable her to make time available for another client. 
                        `
            },
            {
                header: "How do I inquire about my case?",
                innerContent: `
                        Please give the necessary information to Ms. Woodward's secretary. In many instances she will be familiar with your case. If she cannot answer your questions, she will confer with Ms. Woodward and will return your call as soon as possible.  When calling the office to inquire about your case or ask questions, conserve your time and that of the secretary by consolidating your questions for one call, rather than calling the office on each different question. 
                        `
            },
            {
                header: "What if I need speak to Ms. Woodward immediately?",
                innerContent: `
                        When you call the office it may not be possible to speak to Ms. Woodward immediately. If she is in conference with a client, she will not interrupt it to take calls. Ms. Woodward is often out of the office doing research or attending court, so it is not always possible for her to return telephone calls immediately.
                        `
            }
        ];

        return FAQPanels;
    }

    private getDisclaimerModalTitle(): string {
        return 'Disclaimer';
    }

    private getPrivacyModalTitle(): string {
        return 'Privacy Statement';
    }
}
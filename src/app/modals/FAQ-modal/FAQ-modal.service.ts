import { Injectable } from '@angular/core';
import { FAQPanel } from './FAQPanel.model';

@Injectable()
export class FAQModalService {

    getFAQPanels(): FAQPanel[] {
        let FAQPanels: FAQPanel[] = [
            {
                question: "Do you allow walk-ins?",
                answer: `
                        No.  In order to allocate sufficient time for each client, it is necessary to work by appointment only. Please do not arrive at the office expecting to see Ms. Woodward without an appointment. When you call for an appointment, please give your name, the nature of your problem, and your telephone number, other information may also be requested
                        `
            },
            {
                question: "How do I schedule a consultation?",
                answer: `
                        Call 540-347-1482 and... TODO: need PAWS help for this (if we want this question)
                        `
            },
            {
                question: "What if I can't make it to an appointment?",
                answer: `
                        If you cannot keep an appointment, please give her office reasonable notice. Your courtesy will enable her to make time available for another client. 
                        `
            },
            {
                question: "How do I inquire about my case?",
                answer: `
                        Please give the necessary information to Ms. Woodward's secretary. In many instances she will be familiar with your case. If she cannot answer your questions, she will confer with Ms. Woodward and will return your call as soon as possible.  When calling the office to inquire about your case or ask questions, conserve your time and that of the secretary by consolidating your questions for one call, rather than calling the office on each different question. 
                        `
            },
            {
                question: "What if I need speak to Ms. Woodward immediately?",
                answer: `
                        When you call the office it may not be possible to speak to Ms. Woodward immediately. If she is in conference with a client, she will not interrupt it to take calls. Ms. Woodward is often out of the office doing research or attending court, so it is not always possible for her to return telephone calls immediately.
                        `
            }
        ];

        return FAQPanels;
    }

}
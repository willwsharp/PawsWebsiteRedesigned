import { Component, OnInit } from '@angular/core';
import { ResourceAccordion } from './resource-accordion.model';


@Component({
    selector: 'paws-resources-panel',
    templateUrl: './resources-panel.component.html',
    styleUrls: [
        './resources-panel.component.css'
    ]
})
export class ResourcesPanelComponent implements OnInit {
    public accordionPanels: ResourceAccordion[];

    ngOnInit() {
        this.createAccordion();
    }

    private createAccordion(): void {
        this.accordionPanels = [
            {
                header: 'General',
                innerContent: [
                    {
                        linkText: 'Virginia Code',
                        linkDest: 'http://lis.virginia.gov/000/src.htm'
                    },
                    {
                        linkText: 'Virginia Courts',
                        linkDest: 'http://www.courts.state.va.us/'
                    },
                    {
                        linkText: 'Fauquier County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.fauquiercounty.gov/government/departments-a-g/circuit-court-clerk'
                    },
                    {
                        linkText: 'Fairfax County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.fairfaxcounty.gov/courts/circuit/'
                    },
                    {
                        linkText: 'Loudoun County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.loudoun.gov/index.aspx?NID=98'
                    },
                    {
                        linkText: 'Prince William County Circuit Court Clerk\'s Office',
                        linkDest: 'http://www.pwcgov.org/government/courts/circuit/Pages/default.aspx'
                    },
                    {
                        linkText: 'Piedmont Dispute Resolution',
                        linkDest: 'http://www.piedmontdisputeresolution.org/'
                    },
                    {
                        linkText: 'Virginia State Bar',
                        linkDest: 'http://www.vsb.org'
                    },
                    {
                        linkText: 'So You\'re 18',
                        linkDest: 'http://www.vsb.org/site/publications/sy18'
                    },
                    {
                        linkText: 'Senior Citizen\'s Handbook',
                        linkDest: 'http://www.vsb.org/site/publications/senior-citizens-handbook'
                    },
                    {
                        linkText: 'Seniors & adults with disabilities',
                        linkDest: 'http://www.easyaccess.virginia.gov'
                    },
                    {
                        linkText: 'Veteran Resources',
                        linkDest: 'https://www.va.gov/'
                    },
                    {
                        linkText: 'American Bar Association',
                        linkDest: 'http://www.americanbar.org/aba.html'
                    }
                ]
            },
            {
                header: 'Estate Planning',
                innerContent: [
                    {
                        linkText: 'FAQs Wills in Virginia',
                        linkDest: 'http://www.vsb.org/site/publications/wills-in-virginia/'
                    },
                    {
                        linkText: 'FAQs Health Care Decisions',
                        linkDest: 'http://www.vsb.org/site/public/healthcare-decisions-day/#FAQ'
                    },
                    {
                        linkText: 'Registry for Advance Medical Directives',
                        linkDest: 'https://connectvirginia.org/adr/'
                    },
                    {
                        linkText: ' Aging Together\'s Senior Resources',
                        linkDest: 'http://www.agingtogether.org/'
                    },
                    {
                        linkText: 'National Academy of Elder Law Attorneys',
                        linkDest: 'http://www.naela.org/'
                    }
                ]
            },
            {
                header: 'Probate',
                innerContent: [
                    {
                        linkText: ' Virginia Bar Association Guide to Administration of Decedents\' Estate in Virginia',
                        linkDest: 'https://www.vba.org/page/guide_estates'
                    },
                    {
                        linkText: 'Fauquier County Commisioner of Account Instructions',
                        linkDest: 'http://www.fauquiercounty.gov/government/departments-a-g/circuit-court-clerk'
                    },
                    {
                        linkText: 'Fauquier County Circuit Court Clerk\'s Office - Wills and Estates',
                        linkDest: 'http://www.fauquiercounty.gov/government/departments-a-g/circuit-court-clerk/wills-and-estates'
                    },
                    {
                        linkText: 'Fairfax County Commissioner of Accounts website',
                        linkDest: 'http://www.fairfaxcommissionerofaccounts.org/open/page.page?shortname=resource.home'
                    },
                    {
                        linkText: 'Fairfax County Circuit Court Clerk\'s Office - Administration of Estates',
                        linkDest: 'http://www.fairfaxcounty.gov/courts/circuit/estates_info.htm'
                    },
                    {
                        linkText: 'Loudoun Commissioner of Accounts website',
                        linkDest: 'http://www.loudoun.gov/index.aspx?NID=2143'
                    },
                    {
                        linkText: 'Loudoun Circuit Court Clerk\'s Office - Probate Division',
                        linkDest: 'http://www.loudoun.gov/index.aspx?NID=1815'
                    },
                    {
                        linkText: 'Prince William Commissioner of Accounts',
                        linkDest: 'http://www.pwcgov.org/government/courts/circuit/Pages/Commissioner-of-Accounts.aspx'
                    },
                    {
                        linkText: 'Prince William County Circuit Court Clerk\'s Office - Probate/Qualify/Wills',
                        linkDest: 'http://www.pwcgov.org/government/courts/circuit/Pages/Probate-Qualify-Wills.aspx'
                    },
                    {
                        linkText: 'Virginia Circuit Court Fiduciary Forms',
                        linkDest: 'http://www.courts.state.va.us/forms/circuit/fiduciary.html'
                    }
                ]
            },
            {
                header: 'Guardianship',
                innerContent: [
                    {
                        linkText: 'Guardianship & Conservatorship Proceedings Regarding Incapacitated Adults',
                        linkDest: 'http://www.courts.state.va.us/courtadmin/aoc/cip/programs/gal/adult/guardian_conserv_proceedings.pdf'
                    },
                    {
                        linkText: 'Adult Guardianship & Conservatorship',
                        linkDest: 'http://www.valegalaid.org/resource/adult-guardianship-and-conservatorship?ref=VfVNc'
                    },
                    {
                        linkText: 'Rappahannock-Rapidan Community Services (RRCS)',
                        linkDest: 'http://www.rrcsb.org/'
                    },
                    {
                        linkText: 'The Arc\'s Guardianship program F.A.Q.',
                        linkDest: 'http://www.thearcofnova.org/programs/info-referral/guardianship/guardianship-f-a-q/'
                    },
                    {
                        linkText: 'Virginia Circuit Court Fiduciary Forms',
                        linkDest: 'http://www.courts.state.va.us/forms/circuit/fiduciary.html'
                    }
                ]
            },
            {
                header: 'Business',
                innerContent: [
                    {
                        linkText: 'State Corporation Commission',
                        linkDest: 'http://www.scc.virginia.gov/clk/index.aspx'
                    },
                    {
                        linkText: 'Business Entities',
                        linkDest: 'https://www.scc.virginia.gov/clk/busdef.aspx'
                    },
                    {
                        linkText: 'Starting a Business - Small Business Administration',
                        linkDest: 'http://www.sba.gov/category/navigation-structure/starting-managing-business/starting-business'
                    },
                    {
                        linkText: 'Register Your Business Name',
                        linkDest: 'http://www.sba.gov/content/register-your-fictitious-or-doing-business-dba-name'
                    }
                ]
            },
            {
                header: 'Real Estate',
                innerContent: [
                    {
                        linkText: 'Buying a home: Buying a home in 10 steps',
                        linkDest: 'http://money.cnn.com/magazines/moneymag/money101/lesson8/index4.htm'
                    },
                    {
                        linkText: 'How to Choose a REALTOR',
                        linkDest: 'http://www.realtor.com/basics/buy/looking/realtor.asp?source=web'
                    },
                    {
                        linkText: 'Residential Property Disclosures',
                        linkDest: 'http://www.dpor.virginia.gov/News/Residential_Property_Disclosures/'
                    },
                    {
                        linkText: 'Northern Virginia Association of Realtors',
                        linkDest: 'https://nvar.com/'
                    }
                ]
            }
        ];
    }
}

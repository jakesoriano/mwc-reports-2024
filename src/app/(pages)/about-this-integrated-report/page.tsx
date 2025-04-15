import AppLayoutNoSubnav from '@/app/_components/AppLayoutNoSubnav';
import { navItems } from '@/app/_constants/navItems';
import Link from 'next/link';

function AboutThisIntegratedReport() {
  return (
    <AppLayoutNoSubnav
      heroTitle='About this Integrated Report'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/about-this-integrated-report-banner.jpg'
      navItems={navItems}
    >
      <section>
        {/* <h1>About this Integrated Report</h1> */}
        <p className='mb-4'>
        This Integrated Report presents the Company’s previous year’s
performance of the operating business units and a thorough
account of its strategy and governance.
        </p>
        <p className='mb-4'>
          <strong>Note on forward-looking statements</strong><br/>Certain statements and illustrations contained in this report
may constitute “forward-looking statements” within the
meaning of applicable securities laws and regulations. These
statements and illustrations include information that does
not relate solely to historical or current facts. These can
be identified through the use of “may,” “believe,” “expect,”
“anticipate,” “assume,” “estimate,” “plan” or “continue,” and similar
expressions, or by future or conditional verbs such as “should”,
“would” and “could.”
        </p>
        <p className='mb-4'>Such statements are based on current expectations of future
events, estimates and certain assumptions of our management.
These are, therefore, subject to certain risk factors and
uncertainties, some of which are beyond our control. Moreover,
these may cause the actual results, the financial situation, the
development, or the performance to differ materially from the
estimates or performance implied in these forward-looking
statements. We do not assume any obligation to update these
forward-looking statements to reflect actual results, changes
in assumptions, or changes in other factors affecting such
statements.
        </p>
        <p className='mb-4'><strong>Reporting standards</strong><br/>
This report covers all financial information, as well as economic,
environmental, social and governance performance of all
of Manila Water operating subsidiaries, namely the Parent
Company (East Zone Concession), Manila Water Philippine
Ventures (MWPV), and Manila Water Asia Pacific (MWAP).
        </p>
        <p className='mb-4'>This report was prepared with reference to the Integrated
Report &laquo;IR&raquo; Framework by the International Integrated
Reporting Council (IIRC), Global Reporting Initiative (GRI)
Standards, Sustainability Accounting Standards Board (SASB)
Standards, Recommendations of the Task Force for Climaterelated
Financial Disclosures (TCFD), and Recommendations of
the Task Force for Nature-related Financial Disclosures (TNFD).
The GRI, SASB, TCFD, and TNFD disclosures that have been
referred to are in the <Link className='link' href='/downloads/Sustainability-Content-Index.pdf' target='_blank'>Sustainability Content Index</Link>.
The information contained in this report covers the period from
January 1 to December 31, 2024.
        </p>
        <p className='mb-4'><strong>On our financial statements</strong><br/>
SyCip Gorres Velayo & Co. (SGV & Co.) is the external auditor
of the Company’s financial statements, with Djole S. Garcia as
the lead engagement partner given the required audit partner
rotation every five years. More information about our audit
process can be found <Link className='link' href='/our-business-review/corporate-governance'>here</Link>, while our financial statements
are found <Link className='link' href='/downloads/2024-Financial-Report.pdf' target='_blank'>here</Link>.
        </p>
        <p className='mb-4'><strong>On our sustainability performance</strong><br/>
Senior management appointed BSI Group Philippines Inc.,
a third-party multi-disciplinary professional services firm, to
perform assurance based on AccountAbility AA1000 Type
2 Moderate Level Assurance on the figures and information
pertaining to our sustainability performance. This is the
first time we contracted the services of BSI for this type of
engagement.
        </p>
        <p className='mb-4'>The <Link className='link' href='/downloads/Independent-Assurance-Opinion-Statement.pdf' target='_blank'>Independent Assurance Statement</Link> validates that the
report is in reference to the GRI and SASB Standards, as well
the TCFD Recommendations. It guarantees the shareholders
and readers of the reliability of the reviewed data, claims, and
information contained in this report.
        </p>
        <p className='mb-4'><strong>Feedback</strong><br/>We welcome inquiries and feedback on this report. For investor concerns, you may e-mail invrel@manilawater.com. Meanwhile, for sustainability concerns, you may e-mail sustainability@manilawater.com.
        </p>
      </section>
    </AppLayoutNoSubnav>
  );
}

export default AboutThisIntegratedReport;

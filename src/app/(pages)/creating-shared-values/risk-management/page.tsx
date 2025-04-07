import {
  navItems,
  columns,
  riskData,
  meetingColumns,
  meetingData,
} from '@/app/_constants/sharedValues';
import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
import React from 'react';
import DashedTable from '@/app/_components/DashedTable';
import DataTable from '@/app/_components/DataTable';

function RiskManagement() {
  return (
    <AppLayout
      heroTitle='Creating Shared Values'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/creating-shared-value-banner.jpg'
    >
      <section>
        <h1>Enterprise Risk Management (ERM) in Manila Water</h1>
        <p className='mb-4'>
          We operate in a regulated and dynamic business environment where
          uncertainties abound. We are accountable to our regulators,
          shareholders, employees, and customers, among others, even as
          profitability, sustainable development, and corporate social
          responsibility are expected to be continuously enhanced. To achieve
          our corporate objectives, we recognized the need for the active
          identification and management of risks inherent in our business.
        </p>
        <p className='mb-4'>
          We continue to implement the Enterprise Risk Management (ERM) Program
          based on a globally accepted approach, the ISO 31000:2018, which has
          been cascaded Manila Water 2024 Integrated Report 27 across the
          Company including subsidiaries in the Non-East Zone Philippines and
          International businesses to ensure the attainment of our objectives.
        </p>
        <p className='mb-4'>
        The ERM Program operationalizes our Manual of Corporate
Governance which mandates the Board of Directors (BOD) to
ensure the presence of organizational and procedural controls.
This should be supported by an effective management
information system and risk management reporting system.
        </p>
        <p className='mb-4'>
        In addition, our Board Risk Oversight Committee (BROC)
provides oversight to management functions relating
to strategic, financial, operational, compliance, legal,
environmental, social, and other risks facing the company.
This involves the periodic disclosure of significant risk
exposures and related risk management activities.
        </p>
        <Image
          src='/images/shared-values/risk-management/erp-img-1.jpg'
          alt='Outlook and Strategy'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full'
        />
      </section>
      <section>
        <p className='mb-4 mt-10'>
          In its Report to the BOD for the year ended December 31, 2024, the
          BROC confirmed that it had discussed significant risk exposures,
          related risk-mitigation efforts and initiatives, and the status of the
          identified mitigation plans. The report indicates that the review of
          the BROC was conducted in the context that Management is primarily
          responsible for the risk management process. The BROC meets quarterly
          to discuss matters related to risks, i.e., risk analysis and
          mitigation, as well as a discussion of top and emerging risks.
        </p>
        <p className='mb-4'>
          The President is the comprehensive risk executive and is ultimately
          responsible for ERM priorities, strategies, tolerances, and policies.
          He chairs the Enterprise Risk Management Executive Committee (ERMEC)
          composed of Senior Leadership Team (SLT) members including the Chief
          Risk Officer (CRO).
        </p>

        {/* <h3 className='font-bold mb-10 mt-20 text-lg'>
        Framework and Process
        </h3> */}
        <div className='flex flex-col md:flex-row gap-6 mb-10 mt-10'>
          <div className='flex-1'>
            <Image
              src='/images/shared-values/risk-management/erp-img-2.svg'
              alt='ERM Structure'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full'
            />
          </div>
          <div className='flex-1'>
            <Image
              src='/images/shared-values/risk-management/erp-img-3.svg'
              alt='ERM Structure'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full'
            />
          </div>
        </div>
        <p className='mb-4'>
          The ERMEC was established to oversee and ensure the efficient and
          effective management of our enterprise risks while the leadership team
          of each strategic business unit (SBUs) provides oversight and input to
          the President and to the Board on all relevant information regarding
          risks. This is to enable the formulation of better and more informed
          decisions.
        </p>
        <p className='mb-4'>
          The success of the ERM program depends heavily on the framework which
          will provide the core principles and processes to meet the needs of
          the business.
        </p>
        <p className='mb-4 font-bold mt-10'>FRAMEWORK AND PROCESS</p>
        <p className='mb-4'>
        The ERM Framework is grounded in a strong and
sustained commitment of senior management to
risk management and is facilitated by defining risk
management policies and objectives. This helps ensure
legal and regulatory compliance by providing the
necessary allocation of resources to risk management
and by communicating the benefits of risk management
to all stakeholders. Correspondingly, the ERM process
is designed to be an integral part of our management,
practices, and culture.
        </p>
      </section>
      <section>
        <p className='mb-4 font-bold mt-10'>ERM STRUCTURE</p>
        <div className='overflow-x-auto'>
          <Image
            src='/images/shared-values/risk-management/erp-img-4.svg'
            alt='ERM Structure'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full min-w-[700px] md:min-w-[unset] '
          />
        </div>
        <p className='mb-4 font-bold mt-10 uppercase'>MANAGEMENT OF TOP ENTERPRISE RISKS</p>
        <p className='mb-4'>
          The ERMEC determines the most significant risks facing the Company.
          The Senior Leadership Team (SLT) together with the CRO convene as the
          ERMEC. The SLT consists of: 1) President and CEO; 2) Chief
          Administrative Officer and Chief Operating Officer (COO) for Non-East
          Zone (NEZ) International Business; 3) Chief Regulatory Officer; 4) COO
          for East Zone (EZ); 5) COO for NEZ in the Philippines; 6) Chief
          Finance Officer and 7) Chief Legal Counsel and Chief Compliance
          Officer.
        </p>
        <p className='mb-4'>
          For both Manila Water EZ and NEZ businesses, risks are being managed
          by the strategic business units’ (SBUs) respective Leadership Teams
          (LT), headed by their COOs. They oversee the effective risk management
          in each respective business unit within the SBU. They are responsible
          for establishing, maintaining, and reviewing procedures at management
          and tactical levels to identify, assess and measure, and mitigate
          risks in accordance with the Company’s enterprise risk management
          policy.
        </p>
        <p className='mb-4'>
          The management of top enterprise risks is cascaded down to the
          department level and delegated to respective Risk Owners. Risk Owners
          formulate and commit to a risk management plan, monitored by the ERM
          department, which defines specific action points, accountability,
          milestones and timeline. The status of the Top Enterprise Risks is
          regularly discussed at the ERMEC and the respective SBU LTs. Finally,
          the findings are reported to the BROC.
        </p>
        <h3 className='font-bold mb-4 mt-4'>The Chief Risk Officer</h3>
        <p>
        The CRO oversees the entire risk management function and
leads the development, implementation, maintenance,
and continuous improvement of the ERM program, processes,
and tools. The CRO is the Vice Chairman of the ERMEC.
She also leads the Enterprise Risk Management (ERM)
Department in facilitating the ERM process. This involves
collecting and analyzing key business risk information for
reporting to the ERMEC and the BROC.
        </p>
        <h3 className='font-bold mb-4 mt-4'>Enterprise Risk Management Department</h3>
        <p>
        The ERM Department is responsible for the development of
risk management tools, methodologies and processes, as well
as the sustained implementation of the ERM Program across
the company. It acts as the primary driver of developing a
risk-aware culture and ensures that key risks are identified and
managed by respective risk owners. With the ERM mindset
continuously being assimilated into our culture and practices,
ERM has been embedded in key decision-making processes.
        </p>
        <h3 className='font-bold mb-4 mt-4'>2024 RISK ASSESSMENT</h3>
        <p>
        The Risk Assessment was conducted using both top-down and
bottom-up approaches to determine the top enterprise risks for
2024. A year-end reassessment was also implemented to gauge
the effectiveness of mitigation methods and strategies.
        </p>
      </section>
      <section className='pb-10'>
        <h3 className='font-bold mb-5 mt-20 text-lg'>
          Top Risks Discussion (Risks and Mitigating Measures)
        </h3>
        <DataTable columns={columns} data={riskData} />
      </section>
      <section className='py-10'>
        <h2 className='text-2xl text-secondary font-bold mb-4'>
          Report of the Board Risk Oversight Committee to the Board of Directors
        </h2>
        <p className='font-bold mb-4'>For the year ended December 31, 2024</p>
        <p className='mb-4'>
        The Board Risk Oversight Committee (“Risk Committee”) was established by the Board of Directors at its August 11, 2015 meeting
to help in fulfilling the Board’s oversight responsibilities in relation to risk governance in Manila Water. The Risk Committee’s roles,
responsibilities and authorities are defined in the Risk Committee Charter approved by the Board of Directors during its November
26, 2015 meeting.
        </p>
        <p className='mb-4'>
          In compliance with the Risk Committee Charter, the Committee confirms
          that:
        </p>
        <ul className='styled-list styled-list-primary'>
          <li>
          An independent director chairs the Risk Committee. The Committee has three out of four members who are
          independent directors.
          </li>
          <li>
          The Committee had 4 meetings in 2024 attended by all directors.
          </li>
        {/* </ul>
        <div className='max-w-[100%] overflow-x-auto'>
          <div className='min-w-[500px]'>
            <DataTable
              columns={meetingColumns}
              data={meetingData}
              hideBorders
            />
          </div>
        </div>
        <ul className='styled-list styled-list-primary'> */}
          <li>
          The Committee discussed with Management significant risk exposures, the related risk-mitigation efforts and
          initiatives, and the status of the mitigation plans.
          </li>
          <li>
          The review was undertaken in the context that Management is primarily responsible for the risk management process.
          </li>
          <li>
          The Committee reviewed the Enterprise Risk Management Process in Manila Water Company, Inc. and is satisfied that
sufficient risk management systems are in place. Year-end reassessment of top risks was also performed to gauge the
effectiveness of the Company's mitigation methods and strategies.
          </li>
          <li>
          Initiatives such as risk awareness campaigns, conducting risk management sessions for new hires onboarding and
cadetship program and risk management workshops were conducted to continuously strengthen the risk culture
of the organization.
          </li>
        </ul>
        <div className='relative py-1'>
          <div className='w-fit mx-auto text-center'>
            <div className='max-w-[100px] mx-auto absolute top-2 left-1/2 transform -translate-x-1/2'>
              <Image
                src='/images/shared-values/risk-management/erm-sig_1.png'
                alt='ekr-sig-blk'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <div className='mt-12'>
              <p className='uppercase font-bold'>CESAR A. BUENAVENTURA</p>
              <p>Chairperson, Board Risk Oversight Committee</p>
            </div>
          </div>
        </div>
        <div className='mt-6 flex flex-col md:flex-row gap-y-6 text-center'>
          <div className='flex-1 relative'>
            <div className='max-w-[60px] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2'>
              <Image
                src='/images/shared-values/risk-management/erm-sig_2.png'
                alt='ekr-sig-blk'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <div className='mt-12'>
              <p className='uppercase font-bold'>DONATO C. ALMEDA</p>
              <p>Director</p>
            </div>
          </div>
          <div className='flex-1 relative'>
            <div className='max-w-[120px] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2'>
              <Image
                src='/images/shared-values/risk-management/erm-sig_3.png'
                alt='ekr-sig-blk'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <div className='mt-12'>
              <p className='uppercase font-bold'>SHERISA P. NUESA</p>
              <p>Independent Director</p>
            </div>
          </div>
          <div className='flex-1 relative'>
            <div className='max-w-[95px] mx-auto absolute top-0 left-1/2 transform -translate-x-1/2'>
              <Image
                src='/images/shared-values/risk-management/erm-sig_4.png'
                alt='ekr-sig-blk'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <div className='mt-12'>
              <p className='uppercase font-bold'>ERIC RAMON O. RECTO</p>
              <p>Independent Director</p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default RiskManagement;

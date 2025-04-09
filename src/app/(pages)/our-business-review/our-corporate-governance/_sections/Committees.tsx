import DataTable from '@/app/_components/DataTable';
import {
  cgCommitteeData,
  cgCommitteeCols,
  auditData,
  auditCols,
  governanceData,
  governanceCols,
  boardData,
  boardCols,
  relatedData,
  relatedCols,
  nomationData,
  nomationCols,
  talentData,
  talentCols,
  esgData,
  esgCols,
  proxyData,
  proxyCols,
} from '@/app/_constants/businessReview';

function Committees() {
  return (
    <section className='py-10'>
      <div className='overflow-x-auto'>
        <div className='min-w-[500px]'>
          <DataTable data={cgCommitteeData} columns={cgCommitteeCols} />
        </div>
      </div>
      <p className='my-4'>
        All members of the Audit Committee are required to possess adequate
        understanding of accounting and auditing principles in general and of
        the Company’s financial management systems and environment, in
        particular. Ms. Sherisa P. Nuesa, the Lead Independent Director and
        Chairperson of the Audit Committee, is a Certified Public Accountant.
        The Audit Committee meets at least every quarter and before the
        quarterly Board meetings and when needed.
      </p>
      <p className='mb-4'>
        On June 3, 2021, the Charter of the Audit Committee was amended to
        reduce the minimum number of non-executive directors who may be elected
        as members of the Committee. On November 9, 2021, the Audit Committee
        approved and the revision to their charter to include the Audit
        Committee’s responsibility in assessing the independence, adequacy of
        resources, professional qualifications, and competence of the external
        auditor and ensuring that the rotation or change of external auditors
        and key engagement partners is in accordance with the requirements
        prescribed by applicable laws and regulations and that the required
        disclosure will be made in case of resignation, dismissal, or cessation
        from service of the external auditor. Moreover, the rules and procedures
        governing the Audit Committee in the conduct of its meetings and the
        Audit Committee remuneration is also included in this revision. These
        changes were ratified by the Board of Directors on November 18, 2021.
      </p>
      <p className='mb-4'>
        The Committee held four (4) regular meetings and one (1) special meeting
        in 2024.
      </p>
      <div className='flex flex-col md:flex-row gap-7'>
        <div className='flex-1'>
          <div className='overflow-x-auto mb-8'>
            <div className='min-w-[500px]'>
              <DataTable data={auditData} columns={auditCols} />
            </div>
          </div>
          <p className='font-bold italic mb-3'>
            The Corporate Governance Committee
          </p>
          <p className='mb-4'>
            4 independent directors including the Chairman3 . The CG Committee
            is tasked with ensuring compliance with and proper observance of
            corporate governance principles and practices duties and functions
            include, among others functions as may be delegated by the Board
            from time to time:
          </p>
          <ul className='pl-6 mb-4'>
            <li className='mb-2'>
              a. Oversees the implementation of the corporate governance
              framework and periodically reviews the said framework to ensure
              that it remains appropriate in light of material changes to the
              Company’s size, complexity, and business strategy, as well as its
              business and regulatory environments;
            </li>
            <li className='mb-2'>
              b. Oversees the periodic performance evaluation of the Board and
              its committees as well as executive management, and conducts an
              annual self-evaluation of its performance;
            </li>
            <li className='mb-2'>
              c. Ensures that the results of the Board evaluation are shared,
              discussed, and that concrete action plans are developed and
              implemented to address the identified areas for improvement;
            </li>
            <li className='mb-2'>
              d. Develops and recommends continuing education and training
              programs for directors, and assignment of tasks/projects to Board
              committees;
            </li>
          </ul>
          <p className='mb-4'>
            On June 3, 2021, the Board of Directors approved the proposal to
            amend the required number of directors from 3 to at least 3 members,
            all of whom shall be independent directors.
          </p>
          <p>
            The Chief Compliance Officer, in coordination with the Corporate
            Secretary, shall support the Committee in the performance of its
            functions. The Corporate Governance Committee held 1 meeting in
            2024.
          </p>
        </div>
        <div className='flex-1'>
          <div className='overflow-x-auto mb-8'>
            <div className='min-w-[500px]'>
              <DataTable data={governanceData} columns={governanceCols} />
            </div>
          </div>
          <p className='font-bold italic mb-3'>
            The Board Risk Oversight Committee
          </p>
          <p className='mb-4'>
            The Board Risk Oversight Committee (BROC) is composed of 4 members,
            majority of whom are independent directors, and is chaired by an
            independent director4. In accordance with the BROC charter, Mr.
            Buenaventura, who chairs the Committee, does not sit as the chairman
            of the Board or of any other committee. The Board Risk Oversight
            Committee was established separately from the Audit Committee in
            order to further enhance governance on risk matters and align with
            the best practices in risk management and supported by the
            Enterprise Risk Management Department in the performance of its
            functions.
          </p>
          <p className='mb-4'>
            This committee is tasked to provide assistance in fulfilling the
            Board’s oversight responsibilities in relation to risk governance in
            Manila Water, which includes ensuring that the Management maintains
            a sound and responsive risk management system across the
            organization; promote an open discussion regarding risks faced by
            the Company, as well as risks faced by its subsidiaries that may
            have potential impact on the Company’s operations, and ensure that
            risk awareness culture is pervasive throughout the organization.
          </p>
          <p className='mb-4'>
            On February 11, 2021, the Charter of the Board Risk Oversight
            Committee was amended to add additional roles and responsibilities
            and further define its governance and oversight function. The
            amendment was ratified by the Board of Directors during their
            meeting on February 24, 2021.
          </p>
          <p className='mb-4'>
            On June 3, 2021, the Board of Directors approved the proposal to
            amend the required number of members of the Committee from four (4)
            to at least three (3), majority of whom shall be independent
            directors of the Company.
          </p>
          <p>
            The Board Risk Oversight Committee held four (4) meetings in 2024.
            From the year 2020, the BROC meets every quarter as compared to the
            semi-annual frequency in previous years. The Board Risk Oversight
            Committee held four (4) meetings in 2024. From the year 2020, the
            BROC meets every quarter as compared to the semi-annual frequency in
            previous years.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-7 mt-8'>
        <div className='flex-1'>
          <div className='overflow-x-auto mb-8'>
            <div className='min-w-[500px]'>
              <DataTable data={boardData} columns={boardCols} />
            </div>
          </div>
          <p className='font-bold italic mb-3'>
            The Related Party Transactions Committee
          </p>
          <p className='mb-4'>
            The Related Party Transactions Committee (RPT) Committee is composed
            of 4 non-executive directors5, majority of whom are independent
            directors . In accordance with the RPT Committee Charter, Mr. Recto,
            who is an independent director, is the Chairman of the Committee.
          </p>
          <p className='mb-4'>
            This committee is primarily tasked with the duty of enforcing and
            implementing the Related Party Transactions Policy of the Company.
            The Committee also ensures that material RPT shall have terms and
            conditions that are fair and equitable to the Company; the approval,
            award, processing and payment of RPT shall follow the same
            procedures as the other transactions and contracts of the Company,
            and therefore, no unusual privilege or special treatment shall be
            afforded a Related Party; and in case of doubt on the nature of a
            transaction subject of investigation or review pursuant to the RPT
            Policy, the Office of the Compliance Officer, in consultation with
            the RPT Committee, shall determine whether the transaction or
            relationship constitutes a RPT, and whether the same shall be
            pursued taking into consideration the cost and benefit to the
            Company.
          </p>
          <p className='mb-4'>
            On October 28, 2019, the Related Party Transactions Committee
            approved the amendments to the Company’s Policy on Related Party
            Transactions in order to comply with the provisions of the Rules on
            Material Party Transactions for Publicly Listed Companies of the
            SEC. The amendments to the Company’s Policy were ratified by the
            Board of Directors during its Regular Meeting on November 26, 2019.
          </p>
          <p className='mb-4'>
            TOn June 3, 2021, the Charter of the RPT Committee was amended to
            reduce the minimum number of committee members from four (4) to at
            least three (3), and at least two (2) members shall be independent
            directors of the Company.
          </p>
          <p className='mb-2'>The RPT Committee held 3 meetings in 2024.</p>
          <div className='overflow-x-auto'>
            <div className='min-w-[500px]'>
              <DataTable data={relatedData} columns={relatedCols} />
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <p className='font-bold italic mb-3'>The Nomination Committee</p>
          <p className='mb-4'>
            The Nomination Committee is composed of at least 3 directors10,
            majority of whom are independent directors, and under its Charter is
            required to be chaired by an independent director<sup>6</sup> .
          </p>
          <p className='mb-4'>
            This committee is tasked to install and maintain an evaluation
            process to ensure that all directors to be nominated to the Board
            during the annual stockholders’ meeting have all the qualifications
            and none of the disqualifications stated in the Manual, the Charter
            of the Board and the Committees, and under existing laws and
            regulations undertakes the process of identifying the quality of
            directors consistent with the Company’s strategic directions, and to
            ensure that the directors have the competence and professional
            background that will enable them to perform their duties as
            directors of Manila Water.
          </p>
          <p className='mb-4'>
            The Nomination Committee is also responsible for evaluating the
            qualifications of all officers nominated to positions in the Company
            which are appointed, or required to be appointed, by the Board and
            provides guidance and advice as necessary for the appointment of
            persons nominated to other positions. It also reviews and revises,
            if necessary, the succession plans for members of the Board and
            officers with ranks from Group Directors to the President and CEO.
          </p>
          <p className='mb-3'>
            The Nomination Committee met four (4) times in 2024.
          </p>
          <div className='overflow-x-auto mb-8'>
            <div className='min-w-[500px]'>
              <DataTable data={nomationData} columns={nomationCols} />
            </div>
          </div>
          <p className='font-bold italic mb-3'>
            The Talent and Remuneration Committee
          </p>
          <p className='mb-4'>
            The Talent and Remuneration Committee is composed of 4 members, and
            in accordance with its Charter, is chaired by an independent
            director<sup>7</sup>.
          </p>
          <p className='mb-4'>
            As of December 31, 2023, two of the Company’s independent directors
            serve as members of the Committee.
          </p>
          <p>
            The Committee is tasked with the duty to determine and approve all
            matters and policies relating to the remuneration and benefits of
            the Company’s directors and key officers; to establish a formal and
            transparent procedure for developing a policy on remuneration of
            directors and officers to ensure that their compensation is
            consistent with the Company’s culture, strategy and the business
            environment in which it operates; to determine and approve all
            matters relating to the
          </p>
        </div>
      </div>
      <p className='text-xs italic mt-4'>
        <sup>4</sup> Section 1.1 of the Charter of the Related Party
        Transactions Committee states that the Committee shall be composed of at
        least three (3) non-executive directors as members, two (2) of whom
        shall be independent.
      </p>
      <p className='text-xs italic'>
        <sup>5</sup> Section 1.1 of the Charter of the Related Party
        Transactions Committee states that the Committee shall be composed of at
        least three (3) non-executive directors as members, two (2) of whom
        shall be independent.
      </p>
      <div className='flex flex-col md:flex-row gap-7 mt-8'>
        <div className='flex-1'>
          <p className='mb-4'>
            remuneration and benefits of the Board and the Company’s officers;
            to evaluate and recommend for Board approval the pertinent
            guidelines on executive compensation, including non-monetary
            remuneration; and to periodically review and evaluate the policy on
            remuneration in order that it be in a sufficient level to attract
            and retain directors and officers of the Company.
          </p>
          <p className='mb-4'>
            On November 14, 2019, the Talent and Remuneration Committee approved
            the addition of the following in its scope of powers, duties, and
            responsibilities: a) total rewards, merit increases, salary, and
            retirement and benefits plan, b) senior management and executive
            promotions, c) overall succession landscape, d) tracking of key
            talents, e) talent management and risk updates. The amendments were
            ratified by the Board of Directors during its regular meeting held
            on November 26, 2019.
          </p>
          <p className='mb-4'>
            On June 3, 2021, the Talent and Remuneration Committee Charter was
            amended, removing the requirement that majority of the members of
            the Committee are independent directors.
          </p>
          <p className='mb-4'>
            The Talent and Remuneration Committee held one (1) meeting in 2024.
          </p>
          <div className='overflow-x-auto mb-8'>
            <div className='min-w-[500px]'>
              <DataTable data={talentData} columns={talentCols} />
            </div>
          </div>
          <p className='font-bold italic mb-3'>
            The Environment, Social, and Governance Committee
          </p>
          <p className='mb-4'>
            The Board of Directors established the ESG Committee on February 24,
            2022 to accord focus on the integration of economic, environmental,
            social and governance (EESG) principles in the formulation and
            implementation of the Company’s plans and strategies. The Committee
            is supported by the Sustainability Officer and is composed of 5
            members of the Board, with all independent directors of the Company
            serving as members. The President and Chief Executive Officer of the
            Company serves as the Chairman of the Committee. The ESG Committee
            held 3 meetings in 2024.
          </p>
        </div>
        <div className='flex-1'>
          <div className='overflow-x-auto mb-8'>
            <div className='min-w-[500px]'>
              <DataTable data={esgData} columns={esgCols} />
            </div>
          </div>
          <p className='font-bold italic mb-3'>
            The Committee of Inspectors of Ballots and Proxies
          </p>
          <p className='mb-4'>
            Membership consists of the Chief Audit Executive as Chairperson, the
            Assistant Corporate Secretary, and a representative of the external
            auditor of the Company as members.
          </p>
          <p className='mb-4'>
            Membership consists of the Chief Audit Executive as Chairperson, the
            Assistant Corporate Secretary, and a representative of the external
            auditor of the Company as members.
          </p>
          <p className='mb-3'>The Committee held one (1) meeting in 2024.</p>
          <div className='overflow-x-auto mb-8'>
            <div className='min-w-[500px]'>
              <DataTable data={proxyData} columns={proxyCols} />
            </div>
          </div>
          <p className='font-bold mb-3'>
            Corporate Orientation and Corporate Governance Trainings for
            Directors
          </p>
          <p className='mb-4'>
            The members of the Board are required to regularly attend seminars
            and conferences to continuously update themselves on the
            developments in policy, regulations, and standards on good corporate
            governance. Under the Company’s Manual, the members of the Board are
            also provided with such resources, trainings, and continuing
            education to enable each member to actively, independently, and
            judiciously participate in Board and Committee meetings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Committees;

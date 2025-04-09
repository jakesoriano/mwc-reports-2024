import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import DataTable from '@/app/_components/DataTable';
import Committees from './_sections/Committees';
import Link from 'next/link';
import {
  navItems,
  programsCols,
  programsData,
  stockholdersCol,
  stockholdersCol2,
  stockholdersData,
  stockholdersData2,
} from '@/app/_constants/businessReview';
import BoardMeetings from './_sections/BoardMeetings';
import BoardCompliance from './_sections/BoardCompliance';
import {
  stakeholderCols,
  stakeholdersData,
} from '@/app/_constants/sharedValues';

function CorporateGovernance() {
  return (
    <AppLayout
      heroTitle='Our Business Review'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-business-review/corporate-governance/corp-gov-img-1.jpg'
    >
      <section>
        <h1>Corporate Governance</h1>
        <h2 className='text-2xl text-secondary font-bold mb-4'>
          Overall Governance Structure
        </h2>
        <p className='mb-8'>
          Manila Water is dedicated to observing the highest standards of
          corporate governance to serve the best interests of the investing
          public. The Board, the Management and the employees of the Company are
          one in the conviction that sound and effective governance is
          fundamental to the Company’s continued success and stability and will
          enable it to create and sustain increased value for its shareholders.
          Maintaining this strong foundation of good governance becomes more
          essential as Manila Water grows, both in its existing space and in the
          new markets it enters.
        </p>
        <Image
          src='/images/our-business-review/corporate-governance/corp-gov-img-2.jpg'
          alt='Overall Governance Structure'
          height={0}
          width={0}
          className='w-full h-auto'
        />
        <div className='flex flex-col md:flex-row gap-x-7 mt-10'>
          <div className='flex-1'>
            <h3 className='text-lg font-bold mb-4'>
              Compliance with Leading Practices On Corporate Governance
            </h3>
            <p className='font-bold mb-2'>Board of Directors</p>
            <p>
              The Company prides itself with its Board of Directors (the
              "Board"), composed of highly competent individuals with a
              collective working knowledge, experience or expertise that is
              relevant to the Company’s industry or sector. The Board provides a
              clear vision towards the formulation of sound corporate
              strategies, and oversees the systemization, improvement and
              upholding of transparency in governance. The Board provides
              guidance in achieving fairness and accountability in all major
              dealings of the Company, with the objective of protecting the
              interests of its stakeholders. In this connection, the Board
              fulfills certain key functions, including: reviewing and guiding
              corporate strategy, major plans of action, risk policy, annual
              budgets and business plans, setting performance objectives,
              monitoring implementation and corporate performance, and
              overseeing and approving major capital expenditures, acquisitions
              and divestitures, monitoring the effectiveness of our governance
              practices and making changes as needed, selecting, compensating, monitoring and, when
              necessary, replacing key executives and overseeing succession
              planning, aligning key executive and board remuneration with the
              longer term interests of the Company and its stakeholders,
              ensuring a formal and transparent board nomination and election
              process, and monitoring and managing potential conflicts of
              interest of management, board members, stockholders and
              stakeholders, including misuse of corporate assets and abuse in
              related party transactions.
            </p>
          </div>
          <div className='flex-1'>
            <p className='mb-4'>
              
            </p>
            <p className='font-bold mb-2'>Board Composition</p>
            <p className='mb-4'>
              The Board has eleven (9) members who are elected by the
              stockholders during the annual stockholders’ meeting ("ASM"). The
              Board should have at least three (3) independent directors, or
              such number as to constitute at least one-third of the member of
              the Board, whichever is higher. All nominations to the Board are
              undertaken in accordance with the Manual of Corporate Governance
              (the "Manual"), By-laws, the Charter of the Board, and the
              existing rules and regulations. Upon receipt of all nominations,
              the Nomination Committee convenes to evaluate the qualifications
              of nominees for election to the Board. In evaluating the nominations, the Nomination Committee
              adheres to the criteria for selection and the qualifications and
              disqualifications of directors set forth in the Manual, the
              Charter of the Board, the Charter of the Board Committees, the
              Securities Regulations Code (SRC), and those under existing laws,
              rules, and regulations. After deliberation, the Nomination
              Committee and the Board issue a resolution endorsing the election
              of the qualified nominees at the Annual Stockholders’ Meeting
              (ASM). The members of the Board so elected at the ASM hold office
              for one year, and until their successors have been elected and
              qualified in accordance with the By-laws. The elected members of
              the Board are mandated to oversee the management of the Company,
              and, in the performance of their duties, must exercise their best
              and unbiased judgment to protect and promote the interest of the
              Company and its stakeholders. The inputs and opinions of each
              Director are valued; it is ensured that a Director shall not be
              discriminated upon by reason of gender, age, ethnicity, political,
              religious, or cultural beliefs. Towards this end, the Board has
              adopted a policy of diversity in gender, age, and ethnicity, as
              well as religious, political, or cultural background. Through this
              policy, the Board encourages the stockholders to nominate and
              select individuals who will promote diversity in the membership of
              the Board.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-x-7 mt-8'>
          <div className='flex-1'>
            <p className='font-bold mb-2'>Independent Directors</p>
            <p className='mb-4'>
              In compliance with the requirements of the law, the Company’s
              Manual, and the rules and regulations of the SEC, the Company has
              4 independent directors as members of the Board. Under the Manual,
              a director is considered independent if he or she holds no
              interests or relationships with the Company that may hinder his or
              her independence from the Company or its Management which would
              interfere with the exercise of independent judgment in fulfilling
              the responsibilities of a director. The Company also subscribes to
              the requirements of independence under existing laws, rules, and
              regulations. As required in our legislative franchise under
              Republic Act No. 11601, an Independent Director shall have at
              least 3 years of management or supervisory experience in the
              professional fields of water security, water science policy and
              management, environmental science, or any similar field.
              Furthermore, we ensure that our independent directors have all the
              qualifications and none of the disqualifications specified in SEC
              Memorandum Circular No. 16 Series of 2002. As required in the
              legislative franchise of the Company under Republic Act No. 11601,
              an Independent Director shall have at least three (3) years of
              management or supervisory experience in the professional fields of
              water security, water science policy and management, environmental
              science, or any similar field.
            </p>
          <p className='italic text-xs mt-4 mb-8'>
            <sup>1</sup> Ms. Sherisa P. Nuesa, Mr. Cesar A. Buenaventura, Mr. Octavio Victor R.
            Espiritu, and Mr. Eric Ramon O. Recto are the incumbent independent
            directors of the Company.
          </p>
            <p className='font-bold mb-2'>Board Committees</p>
            <p className='mb-4'>
              The Board is supported by several committees, namely: Executive
              Committee, Audit Committee, Corporate Governance Committee, Board
              Risk Oversight Committee, ESG Committee, Related Party Transactions Committee, Nomination Committee,
and the Talent and Remuneration Committee. These Board
Committees are required to report to the Board a summary
of the actions taken on matters submitted to them for
consideration at subsequent meetings of the Board. Each of the
Board Committees has its own charter that provides guidance
on the manner by which its members and the committees
should exercise their functions and mandates.
            </p>
          </div>
          <div className='flex-1'>
            <p className='font-bold mb-2'>The Executive Committee</p>
            <p className='mb-4'>
              The Executive Committee of the Company is composed of five (5)
              directors, with 1 member as Chairman of the Executive Committee.
              The Executive Committee acts by majority vote of all its members
              and is authorized to act and shall act on matters within the
              competence of the Board, except those with respect to:
            </p>
            <ul className='pl-6'>
              <li className='mb-3'>
                a. the approval of any action for which stockholders’ approval
                is also required;
              </li>
              <li className='mb-3'>
                b. the filling of vacancies in the Board;
              </li>
              <li className='mb-3'>
                c. the amendment or repeal of the By-laws or the adoption of new
                By-laws;
              </li>
              <li className='mb-3'>
                d. the amendment or repeal of any resolution of the Board, which
                by its express terms is not so amendable or repealable;
              </li>
              <li className='mb-3'>
                e. the distribution of cash dividends to stockholders;
              </li>
              <li className='mb-3'>
                f. the exercise of powers delegated by the Board exclusively to
                other committees, if any.
              </li>
            </ul>
            <p className='mb-8'>
              The Executive Committee meets as needed and performs such other
              functions as may be properly delegated to it by the Board. The
              Executive Committee did not hold a meeting in 2024.
            </p>
            <p className='font-bold italic mb-4'>The Audit Committee</p>
            <p className='mb-4'>
              majority of whom are independent directors, and is chaired by an
              independent director.<sup>2</sup>
            </p>
            <p>
              The Audit Committee is expected to support the corporate
              governance process through the provision of checks and balances,
              which are expected to bring positive results in supervising and
              supporting the management of the Company. It is responsible for
              ensuring the development of, compliance with, and periodic review
              of financial reporting policies and practices of the Company. The
              Audit Committee also oversees the activities of the Internal
              Audit. Moreover, the Audit Committee also recommends and/or
              concurs to the appointment, replacement, re-assignment and removal
              ordismissal of the Chief Audit Executive to ensure that the
              external and internal auditors will function and operate
              independently of the management as required of their function.
            </p>
          <p className='italic text-xs mt-4 mb-8'>
            <sup>2</sup> In accordance with Part C of the Charter of the Audit Committee, the Committee shall be composed of at least three (3) non-executive directors as members, majority of
            whom shall be independent directors, and shall be chaired by an independent director.
          </p>
          </div>
        </div>
      </section>
      <Committees />
      <section>
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
        <p className='mb-4'>
          Newly elected members of the Board undergo orientation programs for
          them to have a working knowledge of the statutory and regulatory
          requirements affecting the Company. They are also required to keep
          abreast with industry developments and business trends in order that
          they may promote the Company’s competitiveness and sustainability.
          Attendance in a corporate governance seminar conducted by a duly
          recognized private or governmental institution is also a mandatory
          requirement prior to their assumption of office and during their term
          of office.
        </p>
        <p className='mb-4'>
          The Company also provides general access to training courses to its
          directors as a matter of continuous professional education as well as
          to enhance their skills as directors and keep them updated in their
          knowledge and understanding of the Company’s business. The Board and
          Board Committees are also allowed to hire independent legal counsel,
          accountants, or other consultants to advise them when necessary.
        </p>
        <p className='mb-4'>
          At every board meeting, directors are provided with a management
          update on the operational and financial status of, and other relevant
          matters, about the Company to ensure that the directors are
          continuously informed of new developments and the performance of the
          Company.
        </p>
        <p className='mb-4'>
          Upon assumption of office, a director appointed for the first time
          undergoes a corporate orientation program conducted by the Office of
          the Corporate Secretary. The corporate orientation program includes
          modules on the operations of the Company, as well as relevant
          contracts of the Company. The orientation also covers existing
          policies, rules, and regulations of the Company. The curriculum of the
          orientation program may be revised as often as necessary to include
          other relevant subjects and matters relating to the Company. In
          addition to the corporate orientation program for new directors, the
          Office of the Corporate Secretary informs the Board of any updates on
          the matters covered by the orientation program. The corporate
          orientation program and updates are usually given during the regular
          meetings of the Board.
        </p>
        <p className='mb-8'>
          These programs notwithstanding, Manila Water encourages its directors
          to attend external trainings, courses or continuing professional
          education programs on corporate governance. The Directors are required
          to inform the Office of the Corporate Secretary of the trainings or
          courses attended for record and disclosure purposes.
        </p>
        <h3 className='text-lg font-bold mb-3'>
          Corporate Governance Programs Attended by the Board of Directors in
          2024
        </h3>
        <div className='overflow-x-auto'>
          <div className='min-w-[500px]'>
            <DataTable
              data={programsData}
              columns={programsCols}
              equalColumnsWidth
            />
          </div>
        </div>
      </section>
      <BoardMeetings />
      <BoardCompliance />
      <section>
        <h3 className='font-bold text-lg mb-3 mt-10'>
          Summary of Legal and Beneficial Ownership of the Board, Key Officers,
          and Major Stockholders
        </h3>
        <div className='overflow-x-auto'>
          <div className='min-w-[500px]'>
            <div className='grid grid-cols-5 bg-primary text-white font-bold'>
              <div className='px-4 py-2 text-center'>Name</div>
              <div className='px-4 py-2 text-center'>December 31, 2024</div>
              <div className='px-4 py-2 text-center'>Class of Shares</div>
              <div className='px-4 py-2 text-center'>December 31, 2023</div>
              <div className='px-4 py-2 text-center'>Class of Shares</div>
            </div>
            <DataTable
              data={stockholdersData}
              columns={stockholdersCol}
              equalColumnsWidth
            />
            <DataTable
              data={stockholdersData2}
              columns={stockholdersCol2}
              equalColumnsWidth
            />

            <table className='table mt-8'>
              <thead className='bg-blue'>
                <tr>
                  <th colSpan={5} align='center'>
                    MAJOR STOCKHOLDERS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>December 31, 2024</td>
                  <td>Class of Shares</td>
                  <td>December 31, 2023</td>
                  <td>Class of Shares</td>
                </tr>
                <tr>
                  <td>Trident Water Company, Inc.*</td>
                  <td>1,478,049,627</td>
                  <td>Common</td>
                  <td>900,052,160</td>
                  <td>Common</td>
                </tr>
                <tr>
                  <td>Philwater Holdings Company, Inc.</td>
                  <td>3,563,756,068*</td>
                  <td>Participating Preferred</td>
                  <td>3,563,756,068*</td>
                  <td>Participating Preferred</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className='w-1/2 italic text-xs'>
          *Philwater remains the stockholder of record and retains economic
          ownership of 3,563,756,068 preferred shares until full payment of the
          purchase price by Trident but the voting rights on these have been
          transferred to Trident by virtue of proxies (such that Trident has a
          total of 81% voting rights over all outstanding common and preferred
          shares).
        </p>
        <div className='flex flex-col md:flex-row gap-7 mt-8'>
          <div className='flex-1'>
            <h3 className='text-lg font-bold mb-3'>Company Website</h3>
            <p className='mb-4'>
              In the pursuit of the Company’s thrust to continuously improve
              awareness of best practices in the conduct of its business and
              operations especially in corporate governance across the
              organization, including dealings with its business partners and
              customers, Manila Water constantly updates its website,
              www.manilawater.com with a section dedicated to corporate
              governance and investor relations. The Corporate Governance
              section of the website contains all disclosures made by the
              Company to the PSE and SEC, as well as its Manual, the Code, the
              Charters of the Board and its Committees, the various corporate
              governance policies and other matters and information of relevance
              to the stockholders and all stakeholders. The Company discloses
              its corporate governance practices, corporate events calendar, and
              other material information on its website in a timely manner.
            </p>
            <p>
              The Investor Relations section houses all information that may be
              required by the investors, stockholders, and stakeholders. The
              site has been enhanced to be user friendly and is always
              accessible to the public.
            </p>
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-bold mb-3'>
              Corporate Governance Recognition and Awards
            </h3>
            <p className='mb-4'>
              The Company’s commitment to uphold the highest standards of good
              corporate governance has again been confirmed and recognized
              through the prestigious awards it has received. On September 28,
              2023, the Company received a 3-golden arrow award from the
              Institute of Corporate Directors (ICD) for its performance rating
              against the 2022 ASEAN Corporate Governance Scorecard (ACGS).
            </p>
            <p>
              On January 20, 2023, the Company received its first 4-golden arrow
              recognition from the ICD for its performance rating against the
              2021 ACGS. Previously, the Company received 3-golden arrow
              recognition for its rating against the 2019 and 2018 ACGS. In
              2018, it was also named as one of ASEAN’s Top 50 Publicly Listed
              Companies on Corporate Governance at the 2018 ASEAN Corporate
              Governance Awards, Top 10 Philippine Publicly Listed Companies,
              and Top 5 Industry Sector by the Institute of Corporate Directors,
              and Platinum Awardee for Excellence in Environmental, Social and
              Governance Practices by the Asset.
            </p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default CorporateGovernance;

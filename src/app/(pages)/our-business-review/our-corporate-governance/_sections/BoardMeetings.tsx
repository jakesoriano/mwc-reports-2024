import DataTable from '@/app/_components/DataTable';
import {
  attendanceBoardData,
  attendanceBoardCols,
  attendanceMemberData,
  attendanceMemberCols,
  renumerationData,
  renumerationCols,
} from '@/app/_constants/businessReview';
import Link from 'next/link';
import React from 'react';

function BoardMeetings() {
  return (
    <section className='py-10'>
      <h3 className='text-lg font-bold mb-3'>Board Meetings</h3>
      <p className='mb-4'>
        Under the Charter of the Board, the Board institutionalized a policy of
        holding at least six (6) meetings in a year. These include the
        organizational meeting of the Board which is held immediately after the
        annual stockholders’ meeting. Under the By-laws, special meetings may be
        called by the Chairman, Vice Chairman, President or at the instance of a
        majority of the members of the Board.
      </p>
      <p className='mb-4'>
        The Board has a policy of requiring the presence of at least one
        independent director in all its meetings.
      </p>
      <h3 className='text-lg font-bold mb-3'>Quorum in Board Meetings</h3>
      <p className='mb-4'>
        Under the By-Laws of the Company, at least two-thirds (2/3) of the
        members of Board (as fixed in the Articles of Incorporation) shall
        constitute a quorum for the transaction of corporate business, and every
        decision of at least a majority of the directors present at a meeting at
        which there is a quorum shall be valid as a corporate act, except when a
        higher quorum is required in contracts binding on the Company.
      </p>
      <p className='mb-4'>
        In the absence of a quorum, a majority of the directors present may
        adjourn any meeting from time to time until a quorum is obtained.
      </p>
      <h3 className='text-lg font-bold mb-3'>
        Attendance of Directors in Board Meetings
      </h3>
      <p className='mb-4'>
        In 2024, a total of 11 meetings were held by the Board as follows:
      </p>
      <div className='overflow-x-auto mb-4'>
        <div className='min-w-[500px]'>
          <DataTable data={attendanceBoardData} columns={attendanceBoardCols} />
        </div>
      </div>
      <p className='mb-4'>
        The Non-Executive Directors’ (NED) Meeting was held on November 14,
        2024.
      </p>
      <p className='mb-4'>
        Mr. Enrique K. Razon, Jr., Mr. Jose Victor Emmanuel A. de Dios, the
        Company’s President and Chief Executive Director, Mr. Donato C. Almeda,
        the Company’s Chief Regulatory Officer, and Mr. Sandy Alipio were not a
        party to the meeting of the Non-Executive Directors.
      </p>
      <p className='mb-3'>
        The attendance of each member of the Board of Directors is listed below:
      </p>
      <div className='overflow-x-auto mb-4'>
        <div className='min-w-[500px]'>
          <DataTable
            data={attendanceMemberData}
            columns={attendanceMemberCols}
          />
        </div>
      </div>
      <p className='mb-4'>
        During the 2024 Annual Stockholders’ Meeting (ASM) held on April 25,
        2024, and conducted virtually via{' '}
        <Link className='link' href='https://conveneagm.com/' target='_blank'>
          https://conveneagm.com/
        </Link>
        <span className='italic'>ph/MWCI2024ASM</span>, the Chairman of the
        Board of Directors, President and CEO of the Company, and the Chairman
        of the Audit Committee along with the other directors and executive
        officers of the Company, were in attendance. Their attendance was duly
        recorded in the minutes of the said meeting. The minutes of the ASM may
        be viewed on our website.
      </p>

      <h3 className='text-lg font-bold mb-4'>Board Remuneration</h3>
      <p className='mb-4'>
        The Board determines a level of remuneration for directors that shall be
        sufficient to attract and retain directors and compensate them for
        attendance at meetings of the Board and Board Committees and their
        performance of numerous responsibilities of a Board member. The Talent
        and Remuneration Committee is responsible for recommending to the Board
        the fees and other compensation for directors. In fulfilling this duty,
        the Talent and Remuneration Committee is guided by the objective of
        ensuring that the proposed fees should fairly compensate the directors
        for the work required consistent with the Company’s size and industry.
      </p>
      <p className='mb-4'>
        In a special meeting held on April 11, 2011, the Board approved an
        increase in the Board remuneration. The approved remuneration for each
        member of the Board consists of Php500,000.00 as a fixed annual retainer
        fee, Php200,000.00 for each meeting of the Board actually attended, and
        Php50,000.00 for each Committee meeting actually attended. This Board
        remuneration structure was approved by the stockholders in its ASM held
        on April 11, 2011. In the same annual meeting, the stockholders approved
        the amendment of the By-laws, giving the Board of Directors the
        authority to determine the amount, form, and structure of the fees and
        other compensation of the directors.
      </p>
      <p className='mb-4'>
        On November 18, 2021, the Board resolved that Executive Directors shall
        not receive per diem remuneration for their participation and attendance
        in the meetings of the Board and Board Committees. On February 24, 2022,
        the Board approved to discontinue the payment of per diems of directors
        for their attendance and participation in special meetings of the Board
        and Board Committees conducted asynchronously.
      </p>
      <p className='mb-4'>
        None of the non-executive and independent directors who are paid fees as
        set forth above isengaged and compensated by the Company for services
        other than those provided as a director.
      </p>
      <p className='mb-4'>
        The Company has no other arrangement as regards the remuneration of its
        existing non-executive and independent directors aside from the
        compensation received as herein stated.
      </p>
      <p className='mb-4'>
        The directors of the Board received the following gross per diem
        remuneration for attending the meetings of the Board of Directors, the
        meeting of the Non-Executive Directors, the annual stockholders’
        meeting, and their respective Committee Meetings in 2024:
      </p>
      <div className='overflow-x-auto mb-4'>
        <div className='min-w-[500px]'>
          <DataTable
            data={renumerationData}
            columns={renumerationCols}
            equalColumnsWidth
          />
        </div>
      </div>
      <p className='text-xs italic'>
        Inclusive of the remuneration for the NED Meeting
      </p>
      <p className='text-xs italic'>
        As executive directors, Messrs. de Dios, Almeda, and Alipio do not
        receive remuneration for attending Board and Board Committee Meetings.
      </p>
      <p className='text-xs italic'>**Independent Director</p>
    </section>
  );
}

export default BoardMeetings;

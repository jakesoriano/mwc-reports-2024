import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/ourReport';

function BoardOfDirectors() {
  return (
    <AppLayout
      heroTitle='our report'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-report-banner.jpg'
      navItems={navItems}
    >
      <section>
        <h1>Members of the Board of Directors</h1>

        <div className='overscroll-auto md:overscroll-contain'>
          <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position/Board Committee Membership</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Enrique K. Razon Jr.</td>
                    <td>Chairperson of the Board<br/>Chairperson of the Executive Committee</td>
                </tr>
                <tr>
                    <td>Jose Victor Emmanuel A. de Dios</td>
                    <td>President and Chief Executive Officer<br/>
Chairman of the Environment, Social, and Governance Committee<br/>
Member of the Executive Committee<br/>
Member of the Talent and Remuneration Committee</td>
                </tr>
                <tr>
                    <td>Donato C. Almeda</td>
                    <td>Chief Regulatory Officer<br/>
Member of the Executive Committee<br/>
Member of the Board Risk Oversight Committee<br/>
Member of the Nomination Committee</td>
                </tr>
                <tr>
                    <td>Katrina Maria S. Razon</td>
                    <td>Member of the Board of Directors</td>
                </tr>
                <tr>
                    <td>Sandy A. Alipio, CPA, CIA</td>
                    <td>Member of the Board of Directors</td>
                </tr>
                <tr>
                    <td>Sherisa P. Nuesa</td>
                    <td>Lead Independent Director<br/>
Chairperson of the Audit Committee<br/>
Member of the Board Risk Oversight Committee<br/>
Member of the Corporate Governance Committee<br/>
Member of the Nomination Committee<br/>
Member of the Environment, Social, and Governance Committee</td>
                </tr>
                <tr>
                    <td>Cesar A. Buenaventura, O.B.E.</td>
                    <td>Chairman of the Board Risk Oversight Committee<br/>
Member of the Audit Committee<br/>
Member of the Corporate Governance Committee<br/>
Member of the Related Party Transactions Committee<br/>
Member of the Nomination Committee<br/>
Member of the Environment, Social, and Governance Committee
                    </td>
                </tr>
                <tr>
                    <td>Octavio Victor R. Espiritu</td>
                    <td>Chairman of the Corporate Governance Committee<br/>
Chairman of the Talent and Remuneration Committee<br/>
Chairman of the Nomination Committee<br/>
Member of the Audit Committee<br/>
Member of the Related Party Transactions Committee<br/>
Member of the Environment, Social, and Governance Committee</td>
                </tr>
                <tr>
                    <td>Eric Ramon T. Recto</td>
                    <td>Chairman of the Related Party Transactions Committee<br/>
Member of the Board Risk Oversight Committee<br/>
Member of the Corporate Governance Committee<br/>
Member of the Talent and Remuneration Committee<br/>
Member of the Environment, Social, and Governance Committee</td>
                </tr>
            </tbody>
          </table>
        </div>

      </section>
    </AppLayout>
  );
}

export default BoardOfDirectors;

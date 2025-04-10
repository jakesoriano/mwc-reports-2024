import AppLayoutNoSubnav from '@/app/_components/AppLayoutNoSubnav';
import { navItems } from '@/app/_constants/navItems';
import Link from 'next/link';

function ContactUs() {
  return (
    <AppLayoutNoSubnav
      heroTitle='Contact Us'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/about-this-integrated-report-banner.jpg'
      navItems={navItems}
    >
      <section>
        {/* <h1>About this Integrated Report</h1> */}
        
        <p className='mb-4'>MWSS Administration Building<br/>
        489 Katipunan Road, Balara<br/>
        Quezon City, 1105 Philippines<br/>
        <strong>Tel.:</strong> +63(2) 7917 5900<br/>
        <Link className="d-inline-block" href="https://www.manilawater.com"
                target="_blank" rel="noopener noreferrer">www.manilawater.com</Link>
        </p>

        <p className='mb-4'><strong>CUSTOMER SERVICE</strong><br/>
        Customer Service Hotline: 1627 (Open 24 hours)<br/>
        <strong>Tel.:</strong> +63(2) 7917 5900 local 1520<br/>
        <strong>Facebook:</strong> <Link className="d-inline-block" href="https://www.facebook.com/manilawater"
                        target="_blank" rel="noopener noreferrer">www.facebook.com/manilawater</Link><br/>
        <strong>Twitter:</strong> <Link className="d-inline-block" href="https://www.twitter.com/ManilaWaterPH"
                        target="_blank" rel="noopener noreferrer">www.twitter.com/ManilaWaterPH</Link></p>

        <p className='mb-4'><strong>INQUIRIES</strong><br/>
        For inquiries or concerns from analysts,<br/>
        institutional investors, the financial community,<br/>
        and the general public, please contact:<br/>
        <strong>Investors:</strong> <Link className="d-inline-block"
                        href="mailto:invrel@manilawater.com">invrel(at)manilawater.com</Link><br/>
        <strong>Governance:</strong> <Link className="d-inline-block"
                        href="mailto:corpgov@manilawater.com">corpgov(at)manilawater.com</Link><br/>
        <strong>Sustainability:</strong> <Link className="d-inline-block"
                                href="mailto:sustainability@manilawater.com">sustainability(at)manilawater.com</Link><br/>
        <strong>Media:</strong> <Link className="d-inline-block"
                        href="mailto:corpcomm@manilawater.com">corpcomm(at)manilawater.com</Link></p>

        <p className='mb-4'><strong>SHAREHOLDER SERVICES AND ASSISTANCE</strong><br/>
        For inquiries regarding dividend payments,<br/>
        change of address and account status,<br/>
        lost or damaged stock certificates, please contact:<br/>
        BPI Stock Transfer Office<br/>
        16F BPI Building<br/>
        6768 Ayala Avenue corner Paseo de Roxas<br/>
        Makati City, 1226 Philippines<br/>
        <strong>Tel.:</strong> +63(2) 8580-4693 to 95</p>
      </section>
    </AppLayoutNoSubnav>
  );
}

export default ContactUs;

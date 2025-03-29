import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/ourReport';

function ExecutiveBoardStatementOfResonsibility() {
  return (
    <AppLayout
      heroTitle='our report'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-report/our-report-banner.jpg'
      navItems={navItems}
    >
      <section>
        <h1>Statement of Responsibility from the Board of Directors</h1>
        <p className='mb-4'>
          The Board of Directors ensures the integrity of Manila Water’s 2024
          Integrated Report, which reflects the Company’s performance from
          January 1 to December 31, 2024. This responsibility is carried out
          through the Board’s high-level supervision of the teams responsible
          for the production, review, and validation of the report, ensuring
          adherence to internationally recognized frameworks for Integrated
          Reporting.
        </p>
        <p className='mb-4'>
          The Board confirms that management has thoroughly reviewed the
          disclosures and subjected them to an external assurance audit to
          ensure completeness, accuracy, and transparency. Manila Water engaged
          BSI Group Philippines, Inc. (BSI), an external assurance provider, to
          validate the report's key economic, environmental, social, and
          governance disclosures. This assurance process affirms that the data
          and narratives presented in the report objectively and accurately
          represent the Company’s business practices.
        </p>
        <div className='flex flex-col md:flex-row justify-center gap-4 mt-10 text-center'>
          <div className='flex-1'>
            <div className='max-w-[140px] mx-auto'>
              <Image
                src='/images/ekr-sig-blk.png'
                alt='ekr-sig-blk'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <p className='uppercase font-bold'>Enrique K. Razon, Jr.</p>
            <p>Chairman</p>
          </div>
          <div className='flex-1'>
            <div className='max-w-[140px] mx-auto'>
              <Image
                src='/images/jvedd-sig-blk.png'
                alt='ekr-sig-blk'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <p className='uppercase font-bold'>
              Jose Victor Emmanuel A. DE DIOS
            </p>
            <p>President and CEO, and ESG Committee Chairperson</p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default ExecutiveBoardStatementOfResonsibility;

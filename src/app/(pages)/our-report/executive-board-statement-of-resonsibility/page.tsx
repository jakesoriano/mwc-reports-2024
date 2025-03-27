import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/ourReport';

function ExecutiveBoardStatementOfResonsibility() {
  return (
    <AppLayout
      heroTitle='our report'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='https://wallpapers.com/images/hd/j-cole-long-hair-vwbbh0h1f21fi2uc.jpg'
      navItems={navItems}
    >
      <section>
        <h1>Statement of Responsibility from the Board of Directors</h1>
        <p className='mb-4'>
          The Board ensures the integrity of the Manila Water 2023 Integrated
          Report by exercising oversight over its production, review, and
          validation processes.
        </p>
        <p className='mb-4'>
          The Board confirms that management has reviewed the disclosures and
          has undergone an external assurance audit for completeness, accuracy,
          and transparency. Manila Water engaged external assurance party, SyCip
          Gorres Velayo & Company (SGV & Co.), to validate the financial,
          environmental, social, and governance disclosures and to affirm that
          the data and narrative paint an objective and accurate picture of the
          company’s business practices.
        </p>
        <p className='mb-4'>
          Furthermore, the Board attests that the report is presented in
          reference to the IR Framewok, GRI and SASB Standards, as well as the
          TCFD Recommendations.
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
            <p className='uppercase'>Enrique K. Razon, Jr.</p>
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
            <p className='uppercase'>Jose Victor Emmanuel A. DE DIOS</p>
            <p>President and CEO, and ESG Committee Chairperson</p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default ExecutiveBoardStatementOfResonsibility;

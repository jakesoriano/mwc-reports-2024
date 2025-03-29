import AppLayout from '@/app/_components/AppLayout';
import ImageTextCard from '@/app/_components/ImageTextCard';
import { navItems, introItems, coreValues } from '@/app/_constants/ourReport';

function PurposeMissionVisionCoreValue() {
  return (
    <AppLayout
      heroTitle='our report'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-report/mission-vision-banner.jpg'
      navItems={navItems}
    >
      <section>
        <h1>Purpose, Vision, Mission and Core Values</h1>
        <div className='flex flex-col lg:flex-row gap-10 mb-6'>
          {introItems.map((item) => (
            <div className='flex-1' key={item.title}>
              <ImageTextCard
                title={item.title}
                text={item.text}
                titleClass='text-2xl font-medium'
              />
            </div>
          ))}
        </div>
        {/* <Image
          src='/images/our-report/mission-vision.jpg'
          alt='mission-vision'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto'
        /> */}
      </section>
      <section className='pt-12'>
        <h3 className='text-2xl font-medium'>Core Values</h3>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 mb-6'>
          {coreValues.map((item) => (
            <div key={item.title} className='h-full'>
              <ImageTextCard
                title={item.title}
                text={item.text}
                imageUrl={item.imageUrl}
                imageHeight={100}
                imageWidth={100}
                titleClass='font-bold'
                textClass='text-sm'
              />
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}

export default PurposeMissionVisionCoreValue;

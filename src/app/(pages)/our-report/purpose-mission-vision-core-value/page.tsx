import AppLayout from '@/app/_components/AppLayout';
import ImageTextCard from '@/app/_components/ImageTextCard';
import Image from 'next/image';
import { navItems } from '@/app/_constants/ourReport';

function PurposeMissionVisionCoreValue() {
  const introItems = [
    {
      title: 'Purpose',
      text: 'Better lives and resilient economies through critical infrastructure',
    },
    {
      title: 'Vision',
      text: 'A global leader in providing quality water and environmental services supportive of sustainable development',
    },
    {
      title: 'Mission',
      text: 'Deliver world-class services tailored to the needs of the communities we serve, through sustainable solutions and purpose-driven, empowered, innovative teams',
    },
  ];

  const coreValues = [
    {
      imageUrl: '/images/our-report/purpose-mission-vision-values/care.png',
      title: 'Care <span class="font-normal italic">(Malasakit)</span>',
      text: 'We demonstrate our innate Filipino value of genuine compassion and ownership to fulfill our mission to our employees, customers, the environment, and our nation.',
    },
    {
      imageUrl:
        '/images/our-report/purpose-mission-vision-values/excellence.png',
      title: 'Excellence <span class="font-normal italic">(Kahusayan)</span>',
      text: 'We create meaningful value and deliver high returns for all our stakeholders by delivering the highest quality products and services, investing in projects that improve quality of life while upholding the welfare of our employees.',
    },
    {
      imageUrl: '/images/our-report/purpose-mission-vision-values/tenacity.png',
      title: 'Tenacity <span class="font-normal italic">(Katatagan)</span>',
      text: 'We bravely face challenges head-on with a ‘can do, must do’ attitude and we follow through on our promises with maximum effort and persistence. We quickly embrace change and ensure competent completion of every job we commit to.',
    },
    {
      imageUrl:
        '/images/our-report/purpose-mission-vision-values/collaboration.png',
      title:
        'Collaboration <span class="font-normal italic">(Bayanihan)</span>',
      text: 'We live and breathe the work that we do, and we seek out colleagues and partners that share the same commitment to utilize our diverse strengths and work together in synergy towards our purpose.',
    },
    {
      imageUrl:
        '/images/our-report/purpose-mission-vision-values/integrity.png',
      title: 'Integrity <span class="font-normal italic">(Integridad)</span>',
      text: 'We are ethical, fair, and transparent in our business practices at every level of our organization. We always choose to do what’s right and take accountability for our actions.',
    },
    {
      imageUrl:
        '/images/our-report/purpose-mission-vision-values/pioneering.png',
      title: 'Pioneering <span class="font-normal italic">(Tagapanguna)</span>',
      text: 'We apply new approaches, explore new methods and ideas, in order to create innovative solutions and deliver lasting impact for the communities in which we operate.',
    },
  ];
  return (
    <AppLayout
      heroTitle='our report'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='https://wallpapers.com/images/hd/j-cole-long-hair-vwbbh0h1f21fi2uc.jpg'
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
        <Image
          src='/images/our-report/mission-vision.jpg'
          alt='mission-vision'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto'
        />
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

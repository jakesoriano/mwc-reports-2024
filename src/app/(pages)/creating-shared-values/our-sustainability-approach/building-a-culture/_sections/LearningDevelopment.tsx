import Image from 'next/image';

function LearningDevelopment() {
  return (
    <section>
      <h2 className='text-2xl font-bold text-secondary mb-3'>
        Learning and Development
      </h2>
      <p className='text-xs mb-5'>GRI 2016:404-1, 404-2, 404-3</p>
      <p className='mb-4'>
        Manila Water is committed to employee welfare and strives to be an
        employer of choice by offering competitive and equitable benefits. We
        ensure fair treatment based on performance, and our rank-and-file wages
        exceed the minimum wage.
      </p>
      <p className='mb-4'>
        Our full-time employees receive benefits exceeding those mandated by
        Philippine law. These include, but are not limited to, insurance
        coverage, medical and dental benefits, guaranteed bonuses, merit
        increases, corporate incentives, and paid leave. To further support
        employee well-being, we offer flexible work arrangements, allowing
        employees to work from alternate locations at least once a week.
      </p>

      <table className='bg-[#BFE7F2] w-full mb-7'>
        <thead>
          <tr className='border-b-2 border-blue'>
            <th align='left' className='py-1 px-4'>
              Training data by gender
            </th>
            <th align='left' className='py-1 px-4'>
              Count of trained employees
            </th>
            <th align='left' className='py-1 px-4'>
              Training hours
            </th>
            <th align='left' className='py-1 px-4'>
              Ave. training hours/ employee
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Male
            </td>
            <td align='left' className='py-1 px-4'>
              1,849
            </td>
            <td align='left' className='py-1 px-4'>
              46,784
            </td>
            <td align='left' className='py-1 px-4'>
              30
            </td>
          </tr>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Female
            </td>
            <td align='left' className='py-1 px-4'>
              970
            </td>
            <td align='left' className='py-1 px-4'>
              25,771
            </td>
            <td align='left' className='py-1 px-4'>
              32
            </td>
          </tr>
        </tbody>
      </table>

      <table className='bg-[#BFE7F2] w-full mb-7'>
        <thead>
          <tr className='border-b-2 border-blue'>
            <th align='left' className='py-1 px-4'>
              Training data by rank
            </th>
            <th align='left' className='py-1 px-4'>
              Count of trained employees
            </th>
            <th align='left' className='py-1 px-4'>
              Training hours
            </th>
            <th align='left' className='py-1 px-4'>
              Ave. training hours/ employee
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Senior Management
            </td>
            <td align='left' className='py-1 px-4'>
              244
            </td>
            <td align='left' className='py-1 px-4'>
              8,389
            </td>
            <td align='left' className='py-1 px-4'>
              39
            </td>
          </tr>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Middle Management
            </td>
            <td align='left' className='py-1 px-4'>
              1,955
            </td>
            <td align='left' className='py-1 px-4'>
              56,613
            </td>
            <td align='left' className='py-1 px-4'>
              36
            </td>
          </tr>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Rank-and-file
            </td>
            <td align='left' className='py-1 px-4'>
              620
            </td>
            <td align='left' className='py-1 px-4'>
              7,553
            </td>
            <td align='left' className='py-1 px-4'>
              13
            </td>
          </tr>
        </tbody>
      </table>
      <p className='text-xs italic mb-5'>
        In 2024, Manila Water’s total training data reached 72,555 training
        hours, accumulated by 2,819 trained employees, averaging 30 training
        hours per employee.
      </p>
      <p className='mb-4'>
        Manila Water’s learning and development programs are integral to our
        recruitment and retention strategy, ensuring a skilled and engaged
        workforce. Each employee’s training is guided by their Individual
        Development Plan (IDP), where they define personal goals and
        aspirations. IDP accomplishment constitutes 10% of the total annual
        performance assessment. In 2024, 100% of employees, including regular
        and probationary hired as of September 30, 2024, received a regular
        performance and career development review.
      </p>

      <div>
        <figure>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-9.jpg'
            alt='banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </figure>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1 border rounded-b-lg border-t-0 border-black p-4'>
            <p className='font-bold mb-3'>Core and Leadership Development</p>
            <p>
              Foundational courses on core values, including new hire
              onboarding, &quot;Living the Values&quot; workshop, Leadership Academy
              Yielding Accelerated Growth Program (LAYAG), and online learning
              platform, MW Stream.
            </p>
          </div>
          <div className='flex-1 border rounded-b-lg border-t-0 border-black p-4'>
            <p className='font-bold mb-3'>Technical Capability Development</p>
            <p>
              Developing operational expertise for technical teams through the
              Manila Water Institute of Technology (MIT), compliance training,
              and professional certification opportunities.
            </p>
          </div>
          <div className='flex-1 border rounded-b-lg border-t-0 border-black p-4'>
            <p className='font-bold mb-3'>Manila Water School</p>
            <p>
              Initiatives addressing current and future leadership needs with
              specialized management training programs, including Cadetship
              Training Program, Territory Management Schooling, and Business
              Zone Leadership Schooling.
            </p>
          </div>
          <div className='flex-1 border rounded-b-lg border-t-0 border-black p-4'>
            <p className='font-bold mb-3'>Group-Initiated Training</p>
            <p>
              Targeted programs and upskilling opportunities designed to meet
              the specific needs of individual teams.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-[#D9F0F7] py-12 px-22 my-10'>
        <figure className='mb-5'>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-10.jpg'
            alt='gabay program'
            width={0}
            height={0}
            className='w-full h-auto'
          />
          <figcaption className='mt-4 italic text-sm'>
            Empowering the next generation of leaders with the 2nd batch of
            Gabay Program.
          </figcaption>
        </figure>
        <p>
          The Gabay (Guide) Business and Technical Mentoring program pairs
          emerging next-generation leaders with our Senior Leadership Team,
          providing valuable mentorship and support. For the second year, 17
          emerging leaders participated in this program.
        </p>
      </div>
      <div>
        <h3 className='text-lg font-bold mb-3'>Employee engagement</h3>
        <div className='flex flex-col md:flex-row gap-7'>
          <div className='flex-1'>
            <h4 className='font-bold mb-3'>Employee Volunterism</h4>
            <p className='mb-4'>
              Engagement is key to strong and responsible organization. Pasibol:
              Puno ng Pag-asa (&quot;Tree of Hope&quot; and &quot;Full of Hope&quot;) is an employee
              volunteer-driven program that focuses on watershed and tree
              nurturing. In 2024, Pasibol saw strong participation, with 14 tree
              planting activities, 427 employee volunteers contributing 1,692
              hours, 22 external partners, 8,500 seedlings planted, and 16
              hectares covered.
            </p>
            <p>
              Through Pasibol, we are on track to meet our biodiversity and
              water quality targets by 2025. Progress includes reforesting
              approximately 975 hectares of watershed area and planting and
              nurturing 442,008 trees since 2022 and maintaining 100% compliance
              with national drinking water standards.
            </p>
          </div>
          <div className='flex-1'>
            <figure className='mb-5'>
              <Image
                src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-11.jpg'
                alt='Pasibol'
                width={0}
                height={0}
                className='w-full h-auto'
              />
              <figcaption className='mt-4 italic text-sm'>
                Sustainability is a team effort. Pasibol engages employees from
                across Manila Water in contributing to our environmental
                initiatives.
              </figcaption>
            </figure>
          </div>
        </div>
        <div>
          <h4 className='font-bold mb-3'>Total Wellness</h4>
          <p>
            #MahalagaKa (You Matter) is our total wellness program that aims to
            nurture our team – mind, body, and spirit – fostering belonging,
            purpose, and shared values. This initiative involves educational
            talks and workshops on emotional, financial, physical, and mental
            wellness, as well as safety initiatives to ensure a secure
            environment. Beyond individual well-being, #MahalagaKa cultivates a
            strong company culture through donation drives to support colleagues
            and communities affected by calamities.
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <h3 className='text-lg font-bold mb-8'>Diversity, Equity, and Inclusion</h3>
        <figure className='mb-5 md:px-20'>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-12.jpg'
            alt='Empowerment Principles Awards'
            width={0}
            height={0}
            className='w-full h-auto'
          />
          <figcaption className='mt-4 italic text-sm'>
            Manila Water’s DEI efforts recognized at the 2024 Philippines UN
            Women’s Empowerment Principles Awards – Manila Water Foundation
            earned the Community Engagement and Partnerships Champion, while
            President and CEO Jocot de Dios was the first runner-up for
            Leadership Commitment.
          </figcaption>
        </figure>
      </div>
      <div className='md:columns-2 mt-8 gap-6'>
        <p className='mb-4'>
          Manila Water’s commitment to holistic well-being extends to a strong
          focus on diversity, equity, and inclusion (DEI), driven by our #ToDEI
          Counts initiative. Since 2003, we’ve actively utilized our
          communication platforms to promote education and awareness about
          disability rights, and we continue to champion mental well-being
          through our Professional Friend Program. Gender-sensitivity training
          is part of our annual mandatory training, ensuring our employees are
          equipped with the knowledge and understanding to create an inclusive
          workplace.
        </p>
        <h4 className='font-bold mb-4'>Women empowerment</h4>
        <p className='mb-4'>
          With women representing 34% of our workforce, our #WomenMakingWaves
          celebration showcased the diverse and inspiring stories of Katubig
          women excelling as leaders, workers, mothers, and athletes,
          demonstrating the multifaceted nature of female empowerment. This
          commitment to gender equality is extended in our community efforts
          through
        </p>
        <p className='mb-4'>
          Integrated WASH Program. This program delivers tailored, women-led
          solutions to enhance water access and sanitation infrastructure,
          strengthen water and sanitation management knowledge, and forge
          partnerships that advance UN SDG 6 (Clean Water and Sanitation) and
          SDG 5 (Gender Equality).
        </p>
        <h4 className='font-bold mb-4'>Employee Communication Channels</h4>
        <p className='mb-4'>
          To maintain strong engagement, we leverage a variety of communication
          platforms to keep everyone informed and connected. These include
          Balita on Wednesdays, sharing company news and updates; Kwentong
          Katubig: Stories of Sustainability, Tips and Innovation; and My HR
          Pahayag, focusing on HR-related announcements and information. All
          content and developments for these platforms are prepared by Katubig
          members for their fellow Katubig colleagues, fostering a sense of
          community and shared ownership.
        </p>
      </div>
    </section>
  );
}

export default LearningDevelopment;

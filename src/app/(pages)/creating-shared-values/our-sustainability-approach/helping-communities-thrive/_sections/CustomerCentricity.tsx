import Image from 'next/image';

function CustomerCentricity() {
  return (
    <section className='pt-12' id='customer-centricity'>
      <h2 className='text-2xl font-bold text-secondary mb-3 mt-10'>
      Customer-centricity
      </h2>
      <div>
        <h3 className='text-lg font-bold mb-4'>Customer concerns</h3>
        <table className='bg-[#BFE7F2] w-full'>
          <thead>
            <tr className='border-b-2 border-blue'>
              <th align='left' className='py-1 px-4'>
              Customer Concerns
              </th>
              <th align='left' className='py-1 px-4'>
                2022
              </th>
              <th align='left' className='py-1 px-4'>
                2023
              </th>
              <th align='left' className='py-1 px-4'>
                2024
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2 border-blue'>
              <td align='left' className='py-1 px-4'>
                Customer concerns received, count
              </td>
              <td align='left' className='py-1 px-4'>
                175,992
              </td>
              <td align='left' className='py-1 px-4'>
                161,146
              </td>
              <td align='left' className='py-1 px-4'>
                167,603
              </td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td className='py-1 px-4'>
                Customer concern resolution rate within SLA<sup>2</sup>, count
              </td>
              <td className='py-1 px-4'>99%</td>
              <td className='py-1 px-4'>100%</td>
              <td className='py-1 px-4'>99%</td>
            </tr>
          </tbody>
        </table>
        <div className='flex flex-col md:flex-row mt-8 gap-x-12 gap-y-8'>
          <div className='flex-1'>
            <p className='mb-4'>
              Manila Water is committed to continuously improving service for
              its growing customer base by offering a range of convenient
              options for managing water accounts. The Manila Water App allows
              East Zone customers to check current bills, view payment history,
              and settle accounts online or through mobile wallets. Real-time
              service advisories and interruption notices are delivered via push
              notifications, and service-related concerns or inquiries can be
              submitted through the M.W. C.A.R.E.S. platform. We also maintain
              active communication with our customers through regular updates on
              social media, providing information about ongoing projects, water
              interruptions, and program activities.
            </p>
            <p className='mb-4'>
              Efficient and reliable customer service is a key performance
              indicator for Manila Water managers. Customer requests and
              complaints are promptly referred to Territory Managers for
              immediate action. To foster stronger community engagement, we hold
              quarterly gatherings with local neighborhood leaders, known as
              kasanggas. These meetings provide company updates and gather
              valuable feedback. The kasanggas act as an extension of Manila
              Water, disseminating information to their communities, clarifying
              issues, and acting as intermediaries for customers with specific
              concerns.
            </p>
            <p className='mb-8'>
              In 2024, Manila Water received 167,603 customer concerns related
              to billing and service, and we resolved 99% of these within
              established turnaround times based on service level agreements.
            </p>

            <p className='text-xs italic'><sup>2</sup> SLA = Service level agreement</p>
          </div>

          <figure className='flex-1 pl-8'>
            <Image
              src='/2024/images/shared-values/our-sustainability-approach/helping-communities-thrive/hct-img-8.jpg'
              alt='helping communities thrive banner'
              width={0}
              height={0}
              className='w-full md:w-[65%] h-auto mx-auto'
            />
            <figcaption className='mt-4 italic text-sm'>
            Manila Water App is our customer’s one-stop shop to
check current water bill, view bill history, and receive
service advisories.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default CustomerCentricity;

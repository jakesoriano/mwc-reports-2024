import AppLayout from '@/app/_components/AppLayout';
import DataTable from '@/app/_components/DataTable';
import {
  boardOfDirectorsCol,
  boardOfDirectorsData,
  navItems,
} from '@/app/_constants/ourReport';

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
          <DataTable
            columns={boardOfDirectorsCol}
            data={boardOfDirectorsData}
          />
        </div>
      </section>
    </AppLayout>
  );
}

export default BoardOfDirectors;

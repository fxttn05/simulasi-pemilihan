import React, { Suspense } from 'react';
import Navbar from '../components/navbar';

const PieChart = React.lazy(() => import('../components/pieChart'));

const Hasil = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center py-10">Loading chart...</div>}>
        <PieChart />
      </Suspense>
    </>
  );
};

export default Hasil;

import React from 'react';
import { SectionProps } from '../landing.view-model';

interface ColumnCardProps {
  title: string
}

const ColumnCard = ({ children, title }: React.PropsWithChildren & ColumnCardProps) => {
  return (
    <div className='bg-white w-3/4 md:w-1/2 h-52 shadow-md rounded-md p-6'>
      <div className="text-primary-400 text-xs font-semibold">{title}</div>
      <div className="text-md mt-4">
        {children}
      </div>
    </div>
  )
}

export const CoursesSection = ({ sectionId }: SectionProps) => {
  return (
    <section id={sectionId}>
      <div className="py-20 overflow-hidden radius-for-skewed">
        <div className="mt-8 mb-10 max-w-lg text-center mx-auto">
          <span className="text-primary-400 font-bold">Courses</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold font-head">What we can teach you</h2>
        </div>
        <div className="bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 py-4">
          <div className="w-full flex flex-col items-center lg:items-end pt-12 gap-y-8">
            <ColumnCard title='GENERAL TRADING'>
              Expand your trading knowledge from knowledgeable educators. Courses range from beginner to advanced.
            </ColumnCard>
            <ColumnCard title='CRYPTO'>
              Understand how the crypto markets work and how to manage your wallets effectively. Courses range from
              beginner to advanced.
            </ColumnCard>
          </div>
          <div className="w-full flex flex-col items-center lg:items-start gap-y-8">
            <ColumnCard title='STOCKS'>
              Get tips and tricks on stock investing. Courses range from beginner to advanced.
            </ColumnCard>
            <ColumnCard title='FOREX'>
              Get educated on how the forex markets work and how to beat the market maker. Courses range from beginner
              to advanced.
            </ColumnCard>
          </div>
        </div>
      </div>
    </section>
  );
};

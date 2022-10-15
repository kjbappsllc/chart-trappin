import React from 'react';
import { SectionProps } from '../landing.view-model';
import CryptoImg from '../../../assets/crypto-illustration.png'
import BizSuccess from '../../../assets/business-success.png'
import StockGraph from '../../../assets/stockGraph.png'
import Exchange from '../../../assets/exchange.png'

interface ColumnCardProps {
  title: string;
  image?: string;
  attribution?: string;
}


const ColumnCard = ({ children, title, image, attribution }: React.PropsWithChildren & ColumnCardProps) => {
  return (
    <div className='bg-white w-3/4 md:w-1/2 shadow-md rounded-md p-6 flex flex-col'>
      <div className="text-primary-400 text-xs font-semibold">{title}</div>
      <div className="flex flex-col flex-grow text-md mt-4">
        <div className='h-40'>
          {children}
        </div>
        {image && attribution && (
          <div className='h-40 flex items-center w-full justify-center'>
            <img alt='Crypto Illustration' title={attribution} className='w-full h-full object-contain' src={image} />
          </div>
        )}
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
            <ColumnCard title='GENERAL TRADING' image={BizSuccess} attribution="https://iconscout.com/illustration/business-success-3985662 by IconScout Store">
              Expand your trading knowledge from knowledgeable educators. Courses range from beginner to advanced.
            </ColumnCard>
            <ColumnCard title='CRYPTO' image={CryptoImg} attribution="https://iconscout.com/illustrations/investing-in-bitcoin by Robin's Pixel">
              Understand how the crypto markets work and how to manage your wallets effectively. Courses range from
              beginner to advanced.
            </ColumnCard>
          </div>
          <div className="w-full flex flex-col items-center lg:items-start gap-y-8">
            <ColumnCard title='STOCKS' image={StockGraph} attribution="https://iconscout.com/illustration/graph-3035662 by IRA Design">
              Get tips and tricks on stock investing. Courses range from beginner to advanced.
            </ColumnCard>
            <ColumnCard title='FOREX' image={Exchange} attribution="https://iconscout.com/icon/exchange-5045082 by Mada Creative">
              Get educated on how the forex markets work and how to beat the market maker. Courses range from beginner
              to advanced.
            </ColumnCard>
          </div>
        </div>
      </div>
    </section>
  );
};

import StatisticsChart from '@/components/chart/StatisticsChart'
import React from 'react'

const CompanyStatisticsChunk = () => {
  return (
    <div className='bg-white rounded-lg p-4 sm:p-8 drop-shadow-[0_0px_2px_#00000040]'>
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="">
                <h1 className='text-xl md:text-2xl font-semibold mb-2'>Job Statistics</h1>
                <p>Showing Job Statistics  Jul 19-25</p>
            </div>
            <div className="">
            </div>
        </div>
        <StatisticsChart />
    </div>
  )
}

export default CompanyStatisticsChunk
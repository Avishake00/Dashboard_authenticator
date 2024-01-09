'use client'

import MetricsCard from '@/components/auth/MetricsCard';
import FirstBarChart from '@/components/auth/firstbarchart';
import SecondBarChart from '@/components/auth/secondchart';
import { Button } from '@/components/ui/button';
import { MdOutlineLogout } from "react-icons/md";

import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router=useRouter();

    const handleonclick=()=>{
        router.push('/')
    }
  return (
    <div className='flex flex-col items-center'>
      <div className="card1 row p-6  ">
      <div className="flex justify-end">
      <Button className='bg-emerald-600 text-white rounded hover:bg-emerald-700' onClick={handleonclick}>
        Logout
        <MdOutlineLogout className='ml-2' />
      </Button>
    </div>
    <p className='text-xl font-sans font-semibold'>Company Metrics</p>
        <div className='flex row-md-4 my-2 mt-4 gap-3'>
          <MetricsCard data={'$406,411.29'} heading={'Total Revenue'} textcolor={'emerald-500'} />
          <MetricsCard data={'$620'} heading={'Total Jobs Avg'} textcolor={'black'} />
          <MetricsCard data={'655'} heading={'Tickets Created'} textcolor={'black'} />
          <MetricsCard data={'735'} heading={'Tickets Scheduled'} textcolor={'black'}/>
        </div>
        <div className='flex row-md-4 my-2 gap-3'>
          <MetricsCard data={'$110,448.8'} heading={'Outstanding Amount'} textcolor={'red-500'} />
          <MetricsCard data={'105'} heading={'Memberships Sold'} textcolor={'black'}/>
          <MetricsCard data={'436'} heading={'Jobs Completed'} textcolor={'black'}/>
          <MetricsCard data={'65'} heading={'Total Canceled'} textcolor={'black'}/>
        </div>
      </div>
      <div className="card2 flex row mt-6 gap-5 text-xl font-sans font-semibold">
        <div className="col">
            <p className='p-2'>Revenue By Job Location</p>
        <FirstBarChart/>
        </div>
        
        <div className="col">
            <p className='p-2'>Revenue By Job Type</p>
        <SecondBarChart/>
        </div>
      </div>
    </div>
  );
}

export default Page;

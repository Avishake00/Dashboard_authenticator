import React from 'react';

const MetricsCard = ({ data, heading, textcolor }) => {
  const textColorClass = textcolor ? `text-${textcolor}` : 'text-emerald-500'; // Conditionally apply the text color class

  return (
    <div className='card flex gap-4 border border-black w-72 h-20'>
      <div className="col bg-emerald-500 w-2"></div>
      <div className="col">
        <div className={`row text-sm font-semibold ${textColorClass} mt-2`}>{data}</div>
        <div className="row text-sm font-serif mt-5">{heading}</div>
      </div>
    </div>
  );
};

export default MetricsCard;

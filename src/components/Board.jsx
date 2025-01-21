import InnerCart from './InnerCart';

const Board = () => {
  return (
    <div className='border bg-white w-full rounded-lg flex'>
      <div className='grow mt-[32px] mx-[32px] flex justify-between'>
        <div>
          <p className='text-[19px] font-bold mb-1'>Today's Render</p>
          <span className='text-[--grey] text-[12px]  '>as of 25 May 2019, 09:41 PM</span>
        </div>
        <div className='flex gap-2 mt-9'>
          <span className='block w-[16px] h-[2px] rounded-md bg-[--blue] mt-[8px] '></span>
          <p className='text-[12px] text-[--grey] font-semibold mr-[32px] '>Today</p>
          <span className='block w-[16px] h-[2px] rounded-md bg-[--grey] mt-[8px] '></span>
          <p className='text-[12px] text-[--grey] font-semibold '>Yesterday</p>
        </div>
      </div>

      <div className={`min-w-[342px] border-l `}>
        <InnerCart cartTitle={'Resolved'} qunatitiy={'449'} />
        <InnerCart cartTitle={'Received'} qunatitiy={'426'} />
        <InnerCart cartTitle={'Average first response time'} qunatitiy={'33m'} />
        <InnerCart cartTitle={'Average response time'} qunatitiy={'3h 8m'} />
        <InnerCart cartTitle={'Resolution within SLA'} qunatitiy={'94%'} />
      </div>
    </div>
  );
};

export default Board;

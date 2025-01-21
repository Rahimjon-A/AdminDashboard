const Title = ({ title }) => {
  return (
    <div className='flex justify-between items-center mb-[55px] '>
      <span className=' text-[--black] text-[24px]  font-bold '> {title} </span>
      <div className='flex items-center '>
        <ul className='flex gap-[26px] pr-[33px] text-4 border-r-[2px] text-[--grey] '>
          <li>
            <i className='fa-solid fa-bell'></i>
          </li>
        </ul>

        <p className=' ml-[33px] mr-[14px] text-[14px] font-semibold '>Jones Ferdinand</p>

        <div className='border-[2px] border-[--grey]  p-[2px] rounded-full'>
          <div className=" rounded-full   w-[43px] h-[43px]  overflow-hidden bg-[url('../../public/assets/images/header-img.png')] bg-cover bg-center bg-no-repeat "></div>
        </div>
      </div>
    </div>
  );
};

export default Title;

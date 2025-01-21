import { useState } from 'react';
import Sidebar from '../container/Sidebar';
import Title from '../components/Title';
import Carts from '../components/Carts';
import Board from '../components/Board';
import Status from '../components/Status';

const Overview = () => {
  const [selectedCart, setSelectedCart] = useState('Unresolved');

  return (
    <div className='flex min-h-[100vh] '>
      <Sidebar />
      <div className=' py-[36px] px-[30px] bg-[--bg-white] w-full '>
        <Title title={'Overview'} />

        <div className='flex justify-between gap-[30px] mb-[30px] '>
          <Carts
            cartTitle={'Unresolved'}
            qunatitiy={'60'}
            isSelected={selectedCart === 'Unresolved'}
            onSelect={() => setSelectedCart('Unresolved')}
          />
          <Carts cartTitle={'Overdue'} qunatitiy={'16'} isSelected={selectedCart === 'Overdue'} onSelect={() => setSelectedCart('Overdue')} />
          <Carts cartTitle={'Open'} qunatitiy={'43'} isSelected={selectedCart === 'Open'} onSelect={() => setSelectedCart('Open')} />
          <Carts cartTitle={'On hold'} qunatitiy={'64'} isSelected={selectedCart === 'On hold'} onSelect={() => setSelectedCart('On hold')} />
        </div>

        <Board />

        <div className='flex mt-[30px] justify-between items-center gap-[30px] '>
          <Status />
          <Status />
        </div>
      </div>
    </div>
  );
};

export default Overview;

import ContactTable from '../components/ContactTable';
import Title from '../components/Title';
import Sidebar from '../container/Sidebar';

const Contacts = () => {
  return (
    <div className=' flex min-h-[100vh] '>
      <Sidebar />
      <div className=' py-[36px] px-[30px] bg-[--bg-white] w-full '>
        <Title title={'Contacts'} />
        <ContactTable />
      </div>
    </div>
  );
};

export default Contacts;

import Sidebar from "./Sidebar/Sidebar";
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Sidebar />
      <div className='content'>
        {children}
      </div>
    </div>
  );
}

export default Layout;

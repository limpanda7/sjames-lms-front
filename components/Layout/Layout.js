import Header from "@/components/Layout/Header/Header";
import styles from './Layout.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Layout = ({ children }) => {
  return (
    <div className={cx('Layout')}>
      <Header />
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );
}

export default Layout;

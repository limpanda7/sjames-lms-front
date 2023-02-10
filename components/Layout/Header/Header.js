import Link from "next/link";
import styles from './Header.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Header = () => {
  return (
    <div className={cx('Header')}>
      <div className={cx('menu')}>
        <Link href='/'>메인</Link>
      </div>

      <div className={cx('menu')}>
        <Link href='/lecture-list'>강의목록</Link>
      </div>

      <div className={cx('menu')}>
        <Link href='/sign-in'>로그인</Link>
      </div>
    </div>
  );
}

export default Header;

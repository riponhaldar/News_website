import Link from 'next/link';
import styles from './Navbar.module.scss';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function NavHeader() {
  return (
    <>
      <div className={styles.nav__header}>
        <ul>
          <li>
            <Link href='https://www.facebook.com/riponhaldar.0/'>
              <a>
                <FaTwitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.facebook.com/riponhaldar.0/'>
              <a>
                <FaInstagram />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.facebook.com/riponhaldar.0/'>
              <a>
                <FaLinkedinIn />
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <p>MIKUNEWS</p>
        </div>
      </div>
    </>
  );
}

export default NavHeader;

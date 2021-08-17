import Link from 'next/link';
import styles from './Navbar.module.scss';
import NavHeader from './NavHeader';
import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';
const Nav = styled.div``;
function navbar() {
  return (
    <>
      <div className={styles.nav__container}>
        <NavHeader />
        <Nav className={styles.nav}>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  All News <BiChevronDown className={styles.icon} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Play</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  Blogs <BiChevronDown className={styles.icon} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/demo'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </Nav>
      </div>
    </>
  );
}

export default navbar;

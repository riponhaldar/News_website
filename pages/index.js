// import Head from 'next/head';
// import Image from 'next/image';
import TrendingNews from '../component/HomeComponent/TrendingNews';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <TrendingNews />
      </div>
    </>
  );
}

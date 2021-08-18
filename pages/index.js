import TrendingNews from '../component/HomeComponent/TrendingNews';
import styles from '../styles/Home.module.scss';

export default function Home({ news }) {
  return (
    <>
      <div className={styles.container}>
        <TrendingNews news={news} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=in&trending s&apiKey=d336925b61944efab39b1314d3e7dfb0'
  );
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}

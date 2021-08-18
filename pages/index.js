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
    'https://newsapi.org/v2/top-headlines?country=in&trending s&apiKey={api}'
  );
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}

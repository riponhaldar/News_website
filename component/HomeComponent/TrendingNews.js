import styles from './trending.module.scss';
import Image from 'next/image';
import Link from 'next/link';
function TrendingNews({ news }) {
  return (
    <>
      <div className={styles.trending_container}>
        <div className={`${styles.title} ${styles.title1}`}>
          <div className={styles.time}>
            <p>0.20.0202</p>
            <span></span>
          </div>
          <p className={styles.heading}></p>
          <div className={styles.content}>
            <p>{news.articles[7].description}</p>
          </div>
        </div>
        {/* midile content */}
        <div className={`${styles.title} ${styles.title2}`}>
          {/*  ----------------fast content  --------------- */}
          <div className={`${styles.content_m} ${styles.content_m1}`}>
            <div className={styles.time}>
              <p> {news.articles[0].publishedAt}</p>
              <span></span>
            </div>
            <Link href={`${news.articles[0].url}`}>
              <a>
                <p className={styles.heading}>{news.articles[0].title}</p>
              </a>
            </Link>
            <p className={styles.tranding_news}>
              {news.articles[0].description}
            </p>
          </div>
          {/*  --------------- img content   --------------- */}
          <Link href={`${news.articles[0].url}`}>
            <a>
              <div className={`${styles.content_m} ${styles.content_m2}`}>
                <img
                  src={`${news.articles[0].urlToImage}`}
                  alt='Picture of the author'
                />
                <p className={styles.heading}>{news.articles[0].title}</p>
              </div>
            </a>
          </Link>
          {/* ---------------last content ---------------  */}
          <div className={`${styles.content_m} ${styles.content_m3}`}>
            <Link href={`${news.articles[0].url}`}>
              <a>
                <p className={styles.heading}>{news.articles[1].title}</p>
              </a>
            </Link>
            <p className={styles.tranding_news}>
              {news.articles[1].description}
            </p>
          </div>
        </div>
        <div className={`${styles.title} ${styles.title3}`}>
          <div className={styles.content2}>
            <p>{news.articles[3].description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingNews;

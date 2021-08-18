import styles from './trending.module.scss';
import Image from 'next/image';
function TrendingNews() {
  return (
    <>
      <div className={styles.trending_container}>
        <div className={`${styles.title} ${styles.title1}`}>
          <div className={styles.time}>
            <p>0.20.0202</p>
            <span></span>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, aaaa aaaaa aaaaco nsectetur
              adipisicing dorer is ba name off
            </p>
          </div>
        </div>
        {/* midile content */}
        <div className={`${styles.title} ${styles.title2}`}>
          {/*fast content  */}
          <div className={`${styles.content_m} ${styles.content_m1}`}>
            <div className={styles.time}>
              <p>0.20.0202</p>
              <span></span>
            </div>
            <p className={styles.heading}>Lorem ipsum dolor 3030 sit amet</p>
            <p className={styles.tranding_news}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              delectus fugit minus harum provident dolores tempora excepturi
              voluptatem ad eaque?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Optio delectus fugit minus harum provident
              dolores tempora excepturi voluptatem ad eaque?
            </p>
          </div>
          {/*img content  */}
          <div className={`${styles.content_m} ${styles.content_m2}`}>
            <img
              src='https://picsum.photos/400/250?grayscale'
              alt='Picture of the author'
            />
            <p className={styles.heading}>Lorem ipsum dolor 3030 </p>
          </div>
          {/*last content  */}
          <div className={`${styles.content_m} ${styles.content_m3}`}>
            <div className={styles.time}>
              <p>0.20.0202</p>
              <span></span>
            </div>
            <p className={styles.heading}>Lorem ipsum dolor 3030 sit amet</p>
            <p className={styles.tranding_news}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              delectus fugit minus harum provident dolores tempora excepturi
              voluptatem ad eaque?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Optio delectus fugit minus harum provident
              dolores tempora excepturi voluptatem ad eaque?
            </p>
          </div>
        </div>
        <div className={`${styles.title} ${styles.title3}`}>
          <div className={styles.content2}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos cupiditate libero modi veritatis voluptatum eaque a
              aperiam possimus, obcaecati amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingNews;

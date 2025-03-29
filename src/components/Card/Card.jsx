
import star from '../../img/icons/star.svg'
import styles from './Card.module.scss'

export default function Card({ location, desc, rating, price, dates, img}) {
    const imgUrl = new URL(`../../img/objects/${img}`, import.meta.url).href

    return (
        <div className={styles.card}>
            <div className={styles.image}>
            <img className={styles.img} 
                src={imgUrl}
                alt={location}
            />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.title}>{location}</p>
                    <span className={styles.stars}>
                        <img className={styles.star} src={star} alt="star" />
                        <p className={styles.rating}>{rating}</p>
                    </span>
                </div>
                <div className={styles.views}>{desc}</div>
                <div className={styles.date}>{dates}</div>
                <div className={styles.price}>
                    <p className={styles.amount}>{ '$ ' + price}</p>
                    <p className={styles.text}>night</p>
                </div>
            </div>
        </div>  

    )
}
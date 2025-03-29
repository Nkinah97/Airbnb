import styles from './Footer.module.scss'
import flag from '../../img/icons/globe-black.svg'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerLeft}>
                    <ul className={styles.footerList}>
                        <li><a href="#">© 2023 Airbnb, Inc.</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Your Privacy Choices</a></li>
                    </ul>
                </div>
                <div className={styles.footerRight}>
                    <ul className={styles.footerList}>
                        <li>
                            <span className={styles.footerItem}>
                                <img src={flag} alt="flag" />
                                    <p>English (US)</p>
                            </span>
                        </li>
                        <li>
                            <span className={styles.footerDolar}>
                                $ USD
                            </span>
                            
                        </li>
                        <li><a href="#">Support & resources</a></li>

                    </ul>
                        
                </div>
            </div>
        </footer>
    )
}

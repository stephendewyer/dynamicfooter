import styles from './Footer.module.css';
import Image from 'next/image';
import SpoonbridgeAndCherry from '../../public/images/spoon_and_cherry_02.jpg'

const Footer = () => {
    return (
        <div 
            className={styles.footer}
        >
            <div className={styles.footer_about_section}>
                <h2 className={styles.footer_heading} >
                    footer
                </h2>
                <div className={styles.footer_paragraph_container}>
                    <p className={styles.footer_paragraph}>
                        image:<br />
                        Coosje van Bruggen, Claes Oldenburg<br />
                        <span className={styles.italicize}>
                            Spoonbridge and Cherry
                        </span><br />
                        1985-1988<br />
                        Minneapolis Sculpture Garden
                    </p>         
                </div>        
            </div>
            <div className={styles.footer_image}>
                <Image src={SpoonbridgeAndCherry} layout="responsive" alt="external link icon"/>
            </div>
        </div>
    )
}

export default Footer;
import Link from "next/link";
import React from "react";
import styles from './cta-section.module.scss'

interface ButtonProps{
  text: string;
  link: string;
}

interface CTASectionProps{
    title: string;
    body: string;
    button: ButtonProps;
    bottomText: string;
}

const CtaSection: React.FC<CTASectionProps> = ({title, body, button, bottomText}) =>{
    return (
        <div className={styles.ctaSection}>
          <div className={styles.ctaSectionContainer}>
            {title &&<h1>{title}</h1>}
            {body && <p>{body}</p>}
            <div className={styles.ctaSectionButtonContainer}>
              {button &&<Link href={`/${button.link}`}>{button.text}</Link>}
            </div>
            {bottomText && <small>{bottomText}</small>}
          </div>
        </div>
      );
};

export default CtaSection;
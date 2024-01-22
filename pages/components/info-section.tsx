import React from "react";
import { urlFor } from "../../sanity/sanity-utils";
import styles from './info-section.module.scss'

interface InfoSectionProps {
    title: string;
    body: string;
    image: {
      _type: string;
      alt: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  }


const InfoSection: React.FC<InfoSectionProps> = ({title, body, image}) =>{
    const imageUrl = image && urlFor(image).toString();

    return (
        <div className={styles.infoSection}>
            <div className={styles.infoSectionContainer}>
                <div className={styles.infoSectionText}>
                    {title && <h1>{title}</h1>}
                    {body && <p>{body}</p>}
                </div>
                <div className={styles.infoSectionImage}>
                {image && <img src={imageUrl} alt={image.alt} width={300} height={200} />}
                </div>
            </div>
        </div>
      );
};

export default InfoSection;
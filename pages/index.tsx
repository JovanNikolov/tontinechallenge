import {getProjects} from '../sanity/sanity-utils'
import CtaSection from './components/cta-section'
import InfoSection from './components/info-section'
import styles from './index.module.scss'

const HomePage: React.FC<{ data: any }> = ({ data }) => {
  const sortedSections = data[0]?.sections?.sort((a, b) => a.order - b.order);

  return (
    <div className={styles.homePage}>
      <div className={styles.indexSectionWrapper}>
        {sortedSections?.map((section: any) => (
          <div key={section._id} className={styles.section}>
            {section._type==="ctaSection" && <CtaSection title={section.title} body={section.body} button={section.button} bottomText={section.bottom}/>}
            {section._type==="infoSection" && <InfoSection title={section.title} body={section.body} image={section.image}/>}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getProjects();
  return {
    props: { data },
    revalidate: 1,
  };
}

export default HomePage;
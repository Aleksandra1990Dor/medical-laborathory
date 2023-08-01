import styles from './AnalysPage.module.css';

const AboutAnalysItem = ({ element }) => {
  return <small className={styles.aboutElement}>{`- ${element}`}</small>;
};
export default AboutAnalysItem;

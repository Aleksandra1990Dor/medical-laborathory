import styles from './Analys.module.css';

const AboutAnalysItem = ({ element }) => {
  return <div className={styles.aboutElement}>{`- ${element}`}</div>;
};
export default AboutAnalysItem;

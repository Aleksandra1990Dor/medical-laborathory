import { useEffect } from 'react';
import QualityControlTitleSection from './TitleSection/QualityControlTitleSection';
import QualityControlSteps from './StepsSection/QualityControlSteps';
import QualityControlSectionCup from './SectionCup/QualityControlSectionCup';
import BackLink from '../../Utils/BackLink';
import styles from './QualityControl.module.css';

const QualityControl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.wrapper}>
      <BackLink />
      <QualityControlTitleSection />
      <QualityControlSteps />
      <section className={styles.info}>
        Внешняя оценка качества (ВОК) — это система объективной оценки
        результатов исследований, проводимых в разных лабораториях с целью
        обеспечения сравнимости данных.
      </section>
      <QualityControlSectionCup />
      <section className={styles.after}>
        * Для стандартизации результатов количественных показателей качества
        VICTORIA использует методологию «Шесть сигм» — универсальную систему
        оценки аналитической эффективности и усовершенствования процессов.
        Расчет количества сигм для каждого аналита позволяет делать вывод о
        достигнутом уровне аналитического качества.
      </section>
    </main>
  );
};
export default QualityControl;

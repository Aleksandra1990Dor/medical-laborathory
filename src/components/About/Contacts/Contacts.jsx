import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FaRegHospital } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineApartment, AiOutlineSolution } from 'react-icons/ai';
import ContactItem from './ContactItem';
import BackLink from '../../Utils/BackLink';
import styles from './Contacts.module.css';

const Contacts = () => {
  const mainRef = useRef(null);
  // scrolling to top after render
  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, []);
  // contacts information from state
  const contacts = useSelector((state) => state.frontPageReduser.contacts);
  // icons
  const icons = [
    <TfiHeadphoneAlt className={styles.title_icon} />,
    <RiTeamLine className={styles.title_icon} />,
    <FaRegHospital className={styles.title_icon} />,
    <AiOutlineSolution className={styles.title_icon} />,
    <AiOutlineApartment className={styles.title_icon} />,
  ];
  return (
    <main
      className={styles.wrapper}
      ref={mainRef}
    >
      <BackLink />
      <h1 className={styles.title}>Контакты</h1>
      <section className={styles.contacts_wrapper}>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            icon={icons[contact.id - 1]}
          />
        ))}
      </section>
    </main>
  );
};

export default Contacts;

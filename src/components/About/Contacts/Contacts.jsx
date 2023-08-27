import styles from './Contacts.module.css';
import ContactItem from './ContactItem';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FaRegHospital } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineApartment, AiOutlineSolution } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector((state) => state.frontPageReduser.contacts);
  const iconsArray = [
    <TfiHeadphoneAlt className={styles.title_icon} />,
    <RiTeamLine className={styles.title_icon} />,
    <FaRegHospital className={styles.title_icon} />,
    <AiOutlineSolution className={styles.title_icon} />,
    <AiOutlineApartment className={styles.title_icon} />,
  ];
  return (
    <main className={styles.wrapper}>
      <h1>Контакты</h1>
      <div className={styles.contacts_wrapper}>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            icon={iconsArray[contact.id - 1]}
          />
        ))}
      </div>
    </main>
  );
};

export default Contacts;

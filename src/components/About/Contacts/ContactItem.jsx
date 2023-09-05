import { BsEnvelope, BsTelephone } from 'react-icons/bs';
import styles from './Contacts.module.css';

const ContactItem = ({ contact, icon }) => {
  return (
    <div className={styles.contact_wrapper}>
      <h2 className={styles.contact_title}>
        {contact.title}
        {icon}
      </h2>
      <ul className={styles.list}>
        {contact.contactFor.map((c, i) => (
          <li
            key={i}
            className={styles.list_item}
          >
            {c}
          </li>
        ))}
      </ul>
      <div className={styles.contacts}>
        <div>
          <BsTelephone className={styles.icon} />
          {contact.phone}
        </div>
        <div>
          <BsEnvelope className={styles.icon} />
          {contact.email}
        </div>
      </div>
    </div>
  );
};
export default ContactItem;

import styles from './Contacts.module.css';
import { BsEnvelope, BsTelephone } from 'react-icons/bs';

const ContactItem = ({ contact, icon }) => {
  return (
    <div className={styles.contact_wrapper}>
      <h2 className={styles.contact_title}>
        {contact.title}
        {icon}
      </h2>
      <ul>
        {contact.contactFor.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <div className={styles.contacts}>
        <div>
          <BsTelephone />
          {contact.phone}
        </div>
        <div>
          <BsEnvelope />
          {contact.email}
        </div>
      </div>
    </div>
  );
};
export default ContactItem;

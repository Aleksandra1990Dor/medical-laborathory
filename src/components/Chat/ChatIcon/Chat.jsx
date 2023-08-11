import { BsChatRightTextFill } from 'react-icons/bs';
import styles from './Chat.module.css';
const Chat = ({ showDialog }) => {
  return (
    <div
      className={styles.chat}
      onClick={showDialog}
    >
      <BsChatRightTextFill className={styles.chat_icon} />
    </div>
  );
};
export default Chat;

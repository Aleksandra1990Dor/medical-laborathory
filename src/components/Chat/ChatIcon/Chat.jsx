import { BsChatRightTextFill } from 'react-icons/bs';
import styles from './Chat.module.css';
import { useNavigate } from 'react-router-dom';
const Chat = ({ showDialog }) => {
  const navigate = useNavigate();
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

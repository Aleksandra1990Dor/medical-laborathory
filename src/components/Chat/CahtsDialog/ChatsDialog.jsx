import { AiOutlineClose } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import ChatMessage from './message/ChatMessage';
import styles from './ChatsDialog.module.css';

const ChatsDialog = ({
  toggleClass,
  showDialog,
  addVisiterMessage,
  allMessages,
  chatParent,
  setValue,
  value,
}) => {
  return (
    <div className={toggleClass}>
      <div className={styles.dialog_window}>
        <div className={styles.dialogs_header}>
          Онлайн консультант
          <AiOutlineClose
            className={styles.closeIcon}
            onClick={showDialog}
          />
        </div>

        <div className={styles.messages_main_container}>
          <div
            className={styles.messages_main_wrapper}
            ref={chatParent}
          >
            {allMessages?.allDialog.map((message, index) => (
              <ChatMessage
                text={message}
                key={index}
                toggleclass={
                  allMessages.visiterMessages.includes(message)
                    ? styles.message_wrapper_rght
                    : styles.message_wrapper_lft
                }
              />
            ))}
          </div>
        </div>
        <div className={styles.create_message_wrapper}>
          <div>
            <textarea
              placeholder="Задайте вопрос"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={styles.create_message_textarea}
            />
          </div>
          <div className={styles.create_message_icon_wrapper}>
            <BsFillSendFill
              className={styles.create_message_icon}
              onClick={addVisiterMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatsDialog;

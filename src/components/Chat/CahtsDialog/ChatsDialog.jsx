import { AiOutlineClose } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import { useState } from 'react';
import styles from './ChatsDialog.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAdminMessageAC,
  addVisiterMessageAC,
} from '../../store/dialogsReduser';

const ChatsDialog = ({ toggleClass, showDialog }) => {
  const allMessages = useSelector((state) => state.dialogsReduser);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const navigate = useNavigate();
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
          <div className={styles.messages_main_wrapper}>
            {/* <ChatMessage
            text="first ytre is a big text of the first message for tesst"
            toggleclass={styles.message_wrapper_lft}
          /> */}
            {allMessages.allDialog.map((message, index) => (
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
              onClick={() => {
                if (value) {
                  dispatch(addVisiterMessageAC(value));
                  setValue('');
                  if (allMessages.visiterMessages.length < 1) {
                    setTimeout(
                      () =>
                        dispatch(
                          addAdminMessageAC(
                            'Благодарим за обращение, вам ответит первый освободившийся оператор.'
                          )
                        ),
                      500
                    );
                    setTimeout(
                      () =>
                        dispatch(
                          addAdminMessageAC(
                            'К сожалению сейчас все операторы заняты... Попробуйте связаться с нами позже.'
                          )
                        ),
                      25000
                    );
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const ChatMessage = ({ text, toggleclass }) => {
  return <div className={toggleclass}>{text}</div>;
};
export default ChatsDialog;

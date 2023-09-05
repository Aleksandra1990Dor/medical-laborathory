import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAdminMessageAC,
  addVisiterMessageAC,
} from '../../../store/dialogsReduser';
import ChatsDialog from './ChatsDialog';

const ChatsDialogContainer = ({ toggleClass, showDialog }) => {
  const chatParent = useRef(null);
  const allMessages = useSelector((state) => state.dialogsReduser);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  useEffect(() => {
    if (allMessages?.visiterMessages.length > 0) {
      chatParent.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, [chatParent, allMessages]);
  useEffect(() => {
    if (
      allMessages?.visiterMessages.length === 1 &&
      allMessages?.adminMessages.length === 0
    ) {
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
  }, [allMessages, dispatch]);
  const addVisiterMessage = () => {
    if (value) {
      dispatch(addVisiterMessageAC(value));
      setValue('');
    }
  };
  return (
    <ChatsDialog
      toggleClass={toggleClass}
      showDialog={showDialog}
      addVisiterMessage={addVisiterMessage}
      allMessages={allMessages}
      chatParent={chatParent}
      setValue={setValue}
      value={value}
    />
  );
};
export default ChatsDialogContainer;

const ChatMessage = ({ text, toggleclass }) => {
  return <div className={toggleclass}>{text}</div>;
};
export default ChatMessage;

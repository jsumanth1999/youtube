import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomText } from "../utils/helper";

const LiveChat = () => {
  const [listMessages, setListMessages] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomText(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.length &&
          chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
      </div>
      <form
        className="w-full p-2 m-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Sumanth",
            message: listMessages
          }))
          setListMessages("");
        }}
      >
        <input
          className="px-2 m-2"
          value={listMessages}
          type="text"
          onChange={(e) => {
            setListMessages(e.target.value);
          }}
        />
        <button className="bg-green-100 px-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

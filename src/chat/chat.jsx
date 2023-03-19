import BottomInput from "./BottomInput";
import TopProfile from "./TopProfile";
import ChatBody from "./chatBody";
import { useSelector } from "react-redux";

export default function Chat() {
  const selected = useSelector((state) => state);

  return (
    <div className="Chat" maxWidth="xs">
      <TopProfile username={selected.user.userName} />
      <ChatBody tableName={selected.pairedContact.chatListBody} />
      <BottomInput info={selected} />
    </div>
  );
}

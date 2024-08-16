import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

  const [searchParams] = useSearchParams();
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="mx-5">
      <div className="flex">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="ml-2 p-2 bg-slate-100 border border-black w-1/4">
        <LiveChat />
      </div>
      </div>
      <CommentContainer />
    </div>
    
  );
};

export default WatchPage;

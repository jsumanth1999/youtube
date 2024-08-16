import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const searchvideos = useSelector(store => store.videos.searchVideos);
  
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  
  
  return (
    <div className="flex flex-wrap">
  {(!searchvideos.length) ? (
    (videos || []).map((video) => (
      <Link key={video.id} to={"/watch?v=" + video.id }>
        <VideoCard info={video} />
      </Link>
    ))
  ) : (
    searchvideos.map((video) => (
      <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
        <VideoCard info={video} />
      </Link>
    ))
  )}
</div>

  );
};

export default VideoContainer;

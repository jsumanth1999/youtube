

const VideoCard = ({info}) => {
    
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;
    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                {statistics?.viewCount && <li>{statistics.viewCount} Views</li>}
            </ul>
        </div>
    )
};

export default VideoCard;

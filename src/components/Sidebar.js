import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const toggleMenu = useSelector(store => store.app.isOpenMenu);

    if(!toggleMenu) return;

    return (
        <div className="shadow-lg pl-4 w-48">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li> Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <h1 className="font-bold mt-5">You</h1>
            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
            </ul>
            <h1 className="font-bold mt-5">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>Sports</li>
                <li>Courses</li>
                <li>Podcasts</li>
            </ul>
        </div>
    )
};

export default Sidebar;

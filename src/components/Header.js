import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH,
  YOUTUBE_SEARCH_URL,
} from "../utils/constants";
import { searchResults } from "../utils/searchSlice";
import { addVideos, removeVideos } from "../utils/videoSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const handleToggleMenu = () => {
    dispatch(toogleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        changeSearchText();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchResults = async () => {
    dispatch(removeVideos());
    const data = await fetch(
      YOUTUBE_SEARCH + searchText + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  const changeSearchText = async () => {
    const data = await fetch(YOUTUBE_SEARCH_URL + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(searchResults({ [searchText]: json[1] }));
  };

  const handleClick = (s) => {
    console.log("value of search "+s);
    
    setSearchText(s);
    setShowSuggestions(false);
  }

  return (
    <div className="grid grid-flow-col shadow-lg m-2">
      <div className="flex col-span-1 my-2 h-7">
        <img
          className="mx-2 cursor-pointer"
          onClick={() => handleToggleMenu()}
          alt="hamburger"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
        />
        <img
          className="mx-2"
          alt="youtubelogo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 p-2 rounded-l-full border border-gray-400"
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
        />

        <button
          className=" rounded-r-full py-2 px-5 border border-gray-400 bg-gray-200"
          onClick={() => {
            getSearchResults();
          }}
        >
          🔍
        </button>
        {showSuggestions && (
          <div className="fixed ml-[250px] bg-white w-[34rem] px-2 py-2 shadow-lg border border-gray-100" onClick={() => {
            console.log("click on div")
          }}>
            <ul>
              {suggestions.map((s,ind) => {
                return  <li
                    className="text-left px-2 py-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                    key={s+"_"+ind}
                    onClick={() => {
                      handleClick(s)
                    }} 
                    >
                  {s}
                </li>
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="flex my-2 col-span-1 h-8">
        <img
          className="mx-2"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;

import AllPost from "./allPost";
import FavoritePost from "./favoritePost";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost, setFavoritePost } from "../../store/slice/post";

export default function Post() {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_ENDPOINT_URL}/posts`);
      const responseData = response.data;
      dispatch(setPost(responseData));
      const isFavorite = responseData.filter((post) => post.id % 2 === 0);
      dispatch(setFavoritePost(isFavorite));
      console.log(responseData);
      console.log(isFavorite);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };
  
  fetchData();
  return (
    <div>
      <AllPost />
      <FavoritePost />
    </div>
  );
}
import { useDispatch, useSelector } from "react-redux";
import { setFavoritePost } from "../../store/slice/post";

export default function FavoritePost() {
  const favoritePost = useSelector((state) => state.post.favoritePost);
  
  return(
    <div className=" bg-slate-400">
      <h1>Favorite Post</h1>
      <ul>
        {favoritePost.map((favoritePost, idx) => (
          <li key={idx}>
            <h2 className="font-bold text-xl">{favoritePost.title}</h2>
            <p>{favoritePost.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
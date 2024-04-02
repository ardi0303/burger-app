import { useSelector } from "react-redux";

export default function AllPost() {
  const post = useSelector((state) => state?.post.post);

  return (
    <div>
      <h1>Post</h1>
      <ul>
        {post.map((post, idx) => (
          <li key={idx}>
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
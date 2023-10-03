import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Gwen Stacy",
      userId: 1,
      profilePic:
        "https://c4.wallpaperflare.com/wallpaper/57/285/74/emma-stone-actress-women-wallpaper-preview.jpg",
      desc: "I hope everyone is fine and doing good in their life.",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Hande Ercel",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Nothing shines brighter than a good smile and a good heart.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
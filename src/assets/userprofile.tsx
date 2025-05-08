import { useParams } from 'react-router-dom';
import posts from './data'; 

function UserProfile() {
  const { userId } = useParams();
  const userPosts = posts.filter(post => post.username === userId);
  const totalLikes = userPosts.reduce((acc, post) => acc + post.likes, 0);

  if (userPosts.length === 0) return <h2>User not found 😿</h2>;

  return (
    <div className='user-profile' style={{ backgroundColor: "#f0f0f0",padding: "2rem", borderRadius: "10px", maxWidth: "600px", margin: "auto" }}>
    <div style={{ padding: "1rem" }}>
      <div style={{ textAlign: "center" }}>
        <img
          src={userPosts[0].avatar}
          alt="avatar"
          style={{ width: "100px", borderRadius: "50%" }}
        />
      
        <h2>@{userId}</h2> 
         <h6> {userPosts[0]?.bio || "No bio available"} </h6>
        <p>📝 {userPosts.length} Posts | ❤️ {totalLikes} Likes</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          marginTop: "2rem"
        }}
      >
        {userPosts.map(post => (
          <div key={post.id} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem" }}>
            <img src={post.image} alt="post" style={{ width: "100%", borderRadius: "8px" }} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
 </div> );
}

export default UserProfile;

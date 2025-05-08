import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './homepage.css'; 
import posts, { timeSince } from './data';
import { Link } from 'react-router-dom';

    function Homepage() {
        const location = useLocation();
        const username = location.state?.username || 'Guest'; 
      
        const [visiblePosts, setVisiblePosts] = useState(6); // Initial number to show
  const [isFetching, setIsFetching] = useState(false);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

      if (bottom && !isFetching) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  // Load more posts when at bottom
  useEffect(() => {
    if (!isFetching) return;

    const moreToShow = visiblePosts + 3;
    if (moreToShow <= posts.length) {
      setTimeout(() => {
        setVisiblePosts(moreToShow);
        setIsFetching(false);
      }, 500); // Simulate network delay
    } else {
      setIsFetching(false); // Stop if all posts shown
    }
  }, [isFetching, visiblePosts]);

        return (
          <>
        
         
           
            {/* rest of your homepage content */}
          
<div className="header-page">
   <h1 >Welcome, {username}!</h1>

        </div>
        <div className='page'>
<div className="feed">


<div className="profile-card">
<img 
  src="https://toppng.com/uploads/preview/cute-cat-looking-11548527118mizm53jrhm.png" 
  alt="profile" 
  className="profile-pic"
/> 
    
<p style={{fontFamily: "cursive"}}>@{username}</p>




</div>

<h3 style={{fontWeight:"bold", marginBottom:"0.1rem" , backgroundColor:" rgb(255, 255, 255)", height:"55%", width:"85%", borderRadius:"3px", boxShadow:"0 4px 15px rgba(0, 0, 0, 0.3)", color:"rgb(68, 29, 167)"}}>Latest Cat Moments</h3>

{posts.map(post => (
        <PostCard 
          key={post.id} 
          post={{
            ...post,
            comments: post.comments.map(c => typeof c === 'string' ? c : c.text)
          }} 
        />
      ))}
     </div>
     </div>
</>  );
      }
      

      interface Post {
        avatar: string;
        username: string;
        image: string;
        likes: number;
        caption: string;
        comments: string[];
        createdAt: Date;
      }

      function PostCard({ post }: { post: Post }) {

        
        const [likes, setLikes] = useState<number>(post.likes);
        const [liked, setLiked] = useState(false);
        const [comments, setComments] = useState<{ text: string; createdAt: Date }[]>(
          post.comments.map(c => (typeof c === 'string' ? { text: c, createdAt: new Date() } : c))
        );
        const [showAllComments, setShowAllComments] = useState(false);
        const [comment, setComment] = useState<string>("");
        
        const displayedComments = showAllComments ? comments : comments.slice(0, 2);

        const handleLike = () => {
          setLiked(!liked);
          setLikes((prev: number) => liked ? prev - 1 : prev + 1);
        };
      
        const handleComment = () => {
          if (comment.trim()) {
            const newComment = {
              text: comment,
              createdAt: new Date(),
            };
            setComments(prev => [newComment, ...prev]);

            setComment("");
          }
     };
        
      
        return (
            <>
            
            <div className="post-card">
            
            <div>
        
      <Link to={`/profile/${post.username}`}>
              <img src={post.avatar} alt="avatar" style={{ width : "44px", height : "44px", borderRadius: "50%", objectFit : "cover", boxShadow : "0 2px 5px rgba(0, 0, 0, 0.2)" }} />
              <strong style={{ marginLeft: "10px" , fontFamily:"cursive" }}>@{post.username}</strong>
           </Link> 
           </div>
            


            <p style={{marginTop:"10px"}}>{post.caption}</p>
            <img src={post.image} alt="post" style={{ width: "100%", marginTop: "10px", borderRadius: "8px", marginBottom : "1rem",  boxShadow : "0 2px 5px rgba(0, 0, 0, 0.2)" }} />
            <p onClick={handleLike} style={{ cursor: "pointer" }}>
              {liked ? "❤️" : "🤍"} {likes} likes
            </p>
            
            <div>
            {displayedComments.map((c, i) => (
        <p key={i}>💬 {c.text} - <small>{timeSince(new Date(c.createdAt))}</small></p>
      ))}

            
              {comments.length > 2 && (
        <p 
        style={{ color: "#888", cursor: "pointer" }}
        onClick={() => setShowAllComments(prev => !prev)}
        >
        {showAllComments ? "Hide comments" : "View all comments"}
        </p>
      )}

              <input style={{ width: "80%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc"}}
              type="text" 
              placeholder="Add a comment..." 
              value={comment} 
              onChange={e => setComment(e.target.value)} 
              />
              <button className='post-btn' onClick={handleComment}>Post</button>
            </div>
            <small>{timeSince(new Date(post.createdAt))}</small>

      </div>
           
            </>
        
      );
        }
      
export default Homepage;
export { PostCard };
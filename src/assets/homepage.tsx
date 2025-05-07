import { useLocation } from 'react-router-dom';
import './homepage.css'; // Import your CSS file for styling

    function Homepage() {
        const location = useLocation();
        const username = location.state?.username || 'Guest'; // fallback if empty
      
        return (
          <>
          <div className='all-page'>
            <h1>Welcome, {username}!</h1>
            {/* rest of your homepage content */}
          

<div className="profile-card">
<img 
  src="https://cdn-icons-png.flaticon.com/512/616/616408.png" 
  alt="profile" 
  className="profile-pic"
/>
<p>@{username}</p>
</div>

<div className="feed">
<h3>Latest Cat Moments 🐾</h3>
<div className="post-card">
  <img src="https://placekitten.com/300/200" alt="cat post" />
  <p>Fluffy just took a nap 😴</p>
</div>
</div>
</div>
       </> );
      }
      
export default Homepage;
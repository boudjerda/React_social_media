import Share from '../share/Share';
import Post from '../post/Post';
import {posts, users} from '../../data';
import './feed.css';

export default function Feed() {
  return (
   <div className='feed'>
    
      <div className='feedWrapper'>
        <Share/>
        {
          posts.map((e)=>{return(<Post key={e.id} date={e.date} like={e.like} comment={e.comment} desc={e.desc} photo={e.photo} userName={users[e.userId].userName} profilepic={users[e.userId].profilePicture} />)})
        }
      </div>
   </div>
  );
}

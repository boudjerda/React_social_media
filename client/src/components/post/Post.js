import  './post.css';
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
  <div className='post'>
    <div className='postWrapper'>
        <div className='postTop'>
        <div className='postTopLeft'>
        <img src='/assets/person/person1.jpg' alt='' className='postProfilePicture'/>
        <span className='postUserName'>Boudjerda djamel</span>
        <span className='postTime'>10 minute ago</span>
        </div>
        <div className='postTopRight'>
            <MoreVert/>

        </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>hey les amis vous alez bien ?</span>
            <img src='/assets/person/person1.jpg' alt='' className='postImage'/>
        </div>
        <div className='postBottom'>
        <div className='postBottomLeft'>
        <img src='/assets/post/like.png' alt='' className='likejdrIcond'/>
        <img src='/assets/post/jdr.jpg' alt='' className='likejdrIcond'/>
        <span className='postLikCount'>50 peoples like it</span>
        </div>
        <div className='postBottomRight'>
            <span className='postComentText'>20 commentaires</span>
        </div>
        </div>
    </div>
  </div>
  );
}

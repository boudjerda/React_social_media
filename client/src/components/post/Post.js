import  './post.css';
import {MoreVert} from "@mui/icons-material"
import { useState } from 'react';

export default function Post(props) {
const[like,setLike]= useState(props.like)
const[likboul,setLikeboul]=useState(false)
  const updateLike =()=>{
  likboul ? setLike(like-1):setLike(like+1)
  setLikeboul(!likboul)
  

  }
  const updateJdr =()=>{
    likboul ? setLike(like-1):setLike(like+1)
  setLikeboul(!likboul)
  }
  return (
  <div className='post'>
    <div className='postWrapper'>
        <div className='postTop'>
        <div className='postTopLeft'>
        <img src={props.profilepic} alt='' className='postProfilePicture'/>
        <span className='postUserName'>{props.userName}</span>
        <span className='postTime'>{props.date}</span>
        </div>
        <div className='postTopRight'>
            <MoreVert/>

        </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>{props?.desc}</span>
            <img src={props.photo} alt='' className='postImage'/>
        </div>
        <div className='postBottom'>
        <div className='postBottomLeft'>
        <img src='/assets/post/like.png' onClick={updateLike}  alt='' className='likejdrIcond'/>
        <img src='/assets/post/jdr.jpg' onClick={updateJdr} alt='' className='likejdrIcond'/>
        <span className='postLikCount'>{like} peoples like it</span>
        </div>
        <div className='postBottomRight'>
            <span className='postComentText'>{props.comment} commentaires</span>
        </div>
        </div>
    </div>
  </div>
  );
}

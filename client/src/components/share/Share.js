import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"
import  './share.css';

export default function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='sharetop'>
            <img src='/assets/person/person1.jpg' alt='' className='shareProfilePicture'/>
            <input className='shareInput' placeholder="what's in your mind"></input>
            </div>  
            <hr className='shareHr'></hr>
            <div className='sharebottom'>
              <div className='shareOptions'>
                  <div className='shareOption'>
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                     <span className='shareOptionText' >Photo/video</span>
                 </div>
                 <div className='shareOption'>
                    <Label  htmlColor="blue" className="shareIcon"/>
                     <span className='shareOptionText' >Tag</span>
                 </div>
                 <div className='shareOption'>
                    <Room htmlColor="green" className="shareIcon"/>
                     <span className='shareOptionText' >Location</span>
                 </div>
                 <div className='shareOption'>
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                     <span className='shareOptionText' >Feelings</span>
                 </div>
              </div>
              <button className="publishButon">Share</button>
            </div>
        </div>
    </div>
  );
}

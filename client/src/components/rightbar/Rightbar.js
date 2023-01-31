import './rightbar.css';
import {users} from '../../data';
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightBarWrapper'>
          <div className='birthdayContainer'>
             <img src='/assets/post/birthday.jpg' alt='' className='birthdayImage'/>
             <span className='birthdayText'> <b> amine </b> and <b> 2 more</b> have birthday today</span>
          </div>
          <img src='/assets/post/fete.jpg' alt='' className='rightbarAd'/>
          <h4 className='rigtbarTitle'>Online Friends</h4>
          <ui className="rightbarFriendsList">
            {
              users.map((u)=>{return (
                <li className='rightbarFriend' key={u.id}>
                <div className='rightbarProfileImageContainer'>
                  <img src={u.profilePicture} alt='' className='rightbarProfileImage'/>
                  <span className='rightbarEnligne'></span>
                </div>
                <span className='rightbarUsers'>{u.userName}</span>
              </li>
              )})
            }
           
           
          </ui>

      </div>
    </div>
  );
}

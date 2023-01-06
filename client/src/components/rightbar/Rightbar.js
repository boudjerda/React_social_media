import './rightbar.css';

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
            <li className='rightbarFriend'>
              <div className='rightbarProfileImageContainer'>
                <img src='/assets/person/person2.jpg' alt='' className='rightbarProfileImage'/>
                <span className='rightbarEnligne'></span>
              </div>
              <span className='rightbarUsers'>Ramzi zizou</span>
            </li>
            <li className='rightbarFriend'>
              <div className='rightbarProfileImageContainer'>
                <img src='/assets/person/person2.jpg' alt='' className='rightbarProfileImage'/>
                <span className='rightbarEnligne'></span>
              </div>
              <span className='rightbarUsers'>djamel boudj</span>
            </li>
            <li className='rightbarFriend'>
              <div className='rightbarProfileImageContainer'>
                <img src='/assets/person/person3.jpg' alt='' className='rightbarProfileImage'/>
                <span className='rightbarEnligne'></span>
              </div>
              <span className='rightbarUsers'>Kamel dif</span>
            </li>
            <li className='rightbarFriend'>
              <div className='rightbarProfileImageContainer'>
                <img src='/assets/person/person4.jpg' alt='' className='rightbarProfileImage'/>
                <span className='rightbarEnligne'></span>
              </div>
              <span className='rightbarUsers'>Amel Jhon</span>
            </li>
            <li className='rightbarFriend'>
              <div className='rightbarProfileImageContainer'>
                <img src='/assets/person/person2.jpg' alt='' className='rightbarProfileImage'/>
                <span className='rightbarEnligne'></span>
              </div>
              <span className='rightbarUsers'>Amira mira</span>
            </li>
          </ui>

      </div>
    </div>
  );
}

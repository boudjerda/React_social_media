import  './sidebar.css';
import {RssFeed, Bookmark, HelpOutline,WorkOutline,Event, School} from "@mui/icons-material"
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <ul className='sidebarList'> 
            <li className='sidebarListItem'>
              <RssFeed className='sidebarIcon' />
              <spain className='sidebarListItemText'>Feed</spain>
            </li>
            <li className='sidebarListItem'>
              <Bookmark className='sidebarIcon' />
              <spain className='sidebarListItemText'>Bookmark</spain>
            </li>
            <li className='sidebarListItem'>
              <HelpOutline className='sidebarIcon' />
              <spain className='sidebarListItemText'>HelpOutline</spain>
            </li>
            <li className='sidebarListItem'>
              <WorkOutline className='sidebarIcon' />
              <spain className='sidebarListItemText'>WorkOutline</spain>
            </li>
            <li className='sidebarListItem'>
              <Event className='sidebarIcon' />
              <spain className='sidebarListItemText'>Event</spain>
            </li>
            <li className='sidebarListItem'>
              <School className='sidebarIcon' />
              <spain className='sidebarListItemText'>School</spain>
            </li>
            </ul>
            <button className='sidebarButton'>
               Show more 
            </button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFriendList'>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFrienImg' src='/assets/person/person1.jpg' alt=''></img>
                    <span className='sidebarFrienName'>amine</span>
                </li>
            </ul>
        </div>
    </div>
  );
}

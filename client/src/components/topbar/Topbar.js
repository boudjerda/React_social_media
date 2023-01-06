import './topbar.css';
import {Search,Person, Chat,Notifications} from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className='topbarContainer'>
         <div className='topbarLeft'> 
            <span className='logo'> djamelSocial</span>
         </div>
         <div className='topbarCenter'>
             <div className='searchbar'>
               <Search className='searchIcon' />
               <input className='searchInput' placeholder='seach for friend, post ...'/>
             </div>
         </div>
         <div className='topbarRight'> 
           <div className='topbarLinks'>
               <span className='topbarLink'>Home page</span>
               <span className='topbarLink'>Timeline</span>
           </div>
           <div className='topbarIcons'>
               <div className='topbarIconsItem'>
                   <Person/>
                   <span className='topbarIconBadge'>1</span>
               </div>
           </div>
           <div className='topbarIcons'>
               <div className='topbarIconsItem'>
                   <Chat/>
                   <span className='topbarIconBadge'>1</span>
               </div>
           </div>
           <div className='topbarIcons'>
               <div className='topbarIconsItem'>
                   <Notifications/>
                   <span className='topbarIconBadge'>1</span>
               </div>
           </div>
           <img src='/assets/person/person1.jpg' alt='' className='topbarImage'/>
         </div>
    </div>
  );
}

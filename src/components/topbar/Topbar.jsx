import "./topbar.css"
import { Search,Person,Chat,Notifications} from "@material-ui/icons"

function Topbar() {
    return (
        <div className="topbarContainer">
           <div className="topbarLeft">
                <span className="logo">lamasocial</span>
        </div>
           <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="search for friends,post,video" className="searchInput" />
                 </div>
            </div>
           <div className="topbarRight">
                    <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timepage</span>

                            
                    </div>
                    <div className="topbarIcon">
                        <div className="topbarIconitem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconitem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconitem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>

                    
                    </div>
                    <img src="https://i.pinimg.com/originals/50/ee/09/50ee09b614ebfbeb84705fbd9067155c.jpg"  alt="img dispalyed" className="topbarImg" />
                    
             </div>
        
           
        </div>
    )
}

export default Topbar

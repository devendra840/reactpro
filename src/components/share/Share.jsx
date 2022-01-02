import "./share.css"
import {PermMedia,Room,Label,EmojiEmotions} from "@material-ui/icons"

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="https://www.filmibeat.com/wimg/desktop/2019/08/shraddha-kapoor_15.jpg" alt="" className="shareProfileImg" />
                    <input placeholder="what's in  your mind Dev ?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia  htmlColor="tomato" className="shareIcon"/>

                            <span className="shareOptionText">Photo or Video</span>

                        </div>
                        <div className="shareOption">
                            <Room  htmlColor="blue"
                            className="shareIcon"/>

                            <span className="shareOptionText">Tag</span>

                        </div>
                        <div className="shareOption">
                            <Label  htmlColor="green" className="shareIcon"/>

                            <span className="shareOptionText">Location</span>

                        </div>
                        <div className="shareOption">
                            <EmojiEmotions  htmlColor="goldenrod" className="shareIcon"/>

                            <span className="shareOptionText">Feeling</span>

                        </div>
                        
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
           
        </div>
    )
}

export default Share

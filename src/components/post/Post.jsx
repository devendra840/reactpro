import './post.css'
import {MoreVert} from "@material-ui/icons";

export default function Post({post}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                       <img src="https://i.pinimg.com/550x/4e/27/4a/4e274ade6be7a591fc3a684c5a467e3a.jpg" alt="pic" className="postProfileImg" />
                           <span className="postUserName">Devendra Upadhyay</span>
                           <span className="postDate">{post.date}</span>
                           
                                
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src="https://i.pinimg.com/564x/ec/3a/fd/ec3afd640f9de1631f7f323ba527e014.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321ca743d4a.jpg"  alt="like" className="likeIcon" />
                        <img src="https://png.pngtree.com/png-clipart/20201216/original/pngtree-red-3d-heart-png-image_5727383.png" alt="heart" className="likeIcon" />
                        <span className="postLikeCounter">{post.like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}


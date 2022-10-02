import CommentLists from "./CommentLists"

function Comments({comments}){
    //console.log(comments)
    return (
        <div>
            <h2> {comments.length} Comments </h2>
            <div> { comments.map (
                    comment => ( <CommentLists key={comment.id} comment={comment}/>)
                )}
            </div>
        </div>
    )
}

export default Comments;
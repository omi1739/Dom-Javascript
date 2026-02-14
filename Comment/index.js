
const btn = document.getElementById('comment-id').addEventListener('click', ()=>{
   
    const comment = document.getElementById('comment-text');
    const userCommentText = comment.value;
   
    const newComment = document.createElement('p');
    newComment.innerText = userCommentText;

    newComment.classList.add('comment');
    
    document.getElementById('comment-box').appendChild(newComment);

    
})
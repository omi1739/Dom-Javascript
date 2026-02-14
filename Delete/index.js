
 document.getElementById('input-area').addEventListener('keyup', (event)=>{
   const text = event.target.value;
   const deleteButton = document.getElementById('delete-text');
   console.log(text);
   
    if(text === 'Delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
       deleteButton.setAttribute('disabled', true);
    }
})

document.getElementById('delete-text').addEventListener('click', ()=>{
    document.getElementById('input-area').value = '';
})

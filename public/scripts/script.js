const deleteBttn = document.querySelectorAll('.btn-delete');

if (deleteBttn) {
  deleteBttn.forEach( el => {
    el.addEventListener('click',(evt)=> {
      const id = evt.target.dataset.id
      console.log(evt.target.dataset.id);
      fetch(`/posts/${id}`,{
        method:'DELETE'
      })
    })
  });
}
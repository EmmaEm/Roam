
showEditView = () => document.querySelector('.edit').style.zIndex = '1'

showModal = () => document.querySelector('.modal').style.display = 'block'

document.querySelectorAll('.edit-profile').forEach( button => {
  button.addEventListener('click', showEditView )
})

document.querySelector('.new-post-button').addEventListener('click', showModal )


showEditView = () => {
  const edit = document.querySelector('.edit')
  edit.style.zIndex = '1'

}

document.querySelectorAll('.edit-profile').forEach( button => {
  button.addEventListener('click', showEditView )
})

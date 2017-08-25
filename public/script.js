
toggleEditView = () => {
  const edit = document.querySelector('.edit')
  if (edit.style.zIndex === '1') edit.style.zIndex = '-1'
  else edit.style.zIndex = '1'

}

document.querySelectorAll('.edit-profile').forEach( button => {
  button.addEventListener('click', toggleEditView )
})

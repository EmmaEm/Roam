
showEditView = () => {
  document.querySelector('.edit').style.zIndex = '1'
}

document.querySelectorAll('.edit-profile').forEach( button => {
  button.addEventListener('click', showEditView )
})

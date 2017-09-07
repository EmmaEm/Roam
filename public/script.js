
showEditView = () => document.querySelector('.edit').style.zIndex = '1'

showModal = () => document.querySelector('.modal').style.display = 'block'
hideModal = () => document.querySelector('.modal').style.display = 'none'

document.querySelectorAll('.edit-profile').forEach( button => {
  button.addEventListener('click', showEditView )
})

document.querySelector('.show-post-modal').addEventListener('click', showModal )
document.querySelector('.hide-post-modal').addEventListener('click', hideModal )

// const  multiWidget = uploadcare.MultipeWidget('[role=uploadcare-uploader][data-multiple]')

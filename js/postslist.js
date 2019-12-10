var modal;
function deleteModal(elementId) {
    modal = document.getElementById('delete-modal')
    modal.style.display = 'block';
    document.getElementsByClassName('yes-btn')[0].id = elementId;
}

function deletePost(postid) {
    var finalid = "post" + postid;
    document.getElementById(`${finalid}`).style.display = 'none';
    modal.style.display = 'none';
}

function closeDeleteModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
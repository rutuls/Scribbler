var modal;
function signupModal(fromsigninmodal = undefined) {
    if (fromsigninmodal) {
        modal = document.getElementById('signinmodal');
        modal.style.display = 'none';        
    }
    modal = document.getElementById('signupmodal');
    modal.style.display = 'block';
}

function signinModal() {
    modal = document.getElementById('signinmodal');
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function createPostModal() {
    modal = document.getElementById('createpostmodal');
    modal.style.display = 'block';
}

function changeinputHeight() {
    document.getElementById('postcontent').style.height = '100px';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
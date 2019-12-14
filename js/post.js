window.onload = function() {
    var title = localStorage.getItem('title');
    var desc = localStorage.getItem('description');
    var author = localStorage.getItem('author');
    document.getElementById('post-title').innerHTML = `<h3>${title}</h3>`;
    document.getElementById('post-auth').innerHTML = `<h4>${author}</h4>`+`<button type="button" class="post-btn" id="edit-btn" onclick="makeContentEditable();">Edit <i class="fas fa-edit"></i></button>`;
    document.getElementById('post-desc').innerHTML = `<p>${desc}</p>`;
}

function makeContentEditable() {
    document.getElementById('post-title').contentEditable = "true";
    document.getElementById('post-title').style.border = "1px solid #d11d53";
    document.getElementById('post-desc').contentEditable = "true";
    document.getElementById('post-desc').style.border = "1px solid #d11d53";
    var author = localStorage.getItem('author');
    document.getElementById('post-auth').innerHTML = 
        `<h4>${author}</h4>`+`<button type="button" class="post-btn" id="save-btn" onclick="saveContent();">Save <i class="fas fa-save"></i></button>`;
}

function saveContent() {
    var author = localStorage.getItem('author');
    document.getElementById('post-auth').innerHTML = 
        `<h4>${author}</h4>`+`<button type="button" id="edit-btn" class="post-btn" onclick="makeContentEditable();">Edit <i class="fas fa-edit"></i></button>`;
    document.getElementById('post-title').contentEditable = "false";
    document.getElementById('post-desc').contentEditable = "false";
    document.getElementById('post-desc').style.border = "none";
    document.getElementById('post-title').style.border = "none";       

}

var count = 0;
function increaseLike() {
    count++;
    if (count === 1) {
        document.getElementById('like-section').innerHTML =
    `<button type="button" id="like-btn" class="post-btn" onclick="increaseLike()"><i class="fas fa-thumbs-up"></i> Liked</button>`+
    `<p id="like-text" style="font-family: monospace;">${count} person likes this!</p>`;
    } else if (count > 1) {
        document.getElementById('like-section').innerHTML =
    `<button type="button" id="like-btn" class="post-btn" onclick="increaseLike()"><i class="fas fa-thumbs-up"></i> Liked</button>`+
    `<p id="like-text" style="font-family: monospace;">${count} people like this!</p>`;
    }
    
}

function addComment() {
    var comment = document.getElementById('comment-textarea').value;
    if (comment !== '') {
        document.getElementById('all-comments').innerHTML += `<p class="comment">${comment}</p>`;
        document.getElementById('comment-textarea').value='';
    }
}
window.onload = function() {
    var title = localStorage.getItem('title');
    var desc = localStorage.getItem('description');
    var author = localStorage.getItem('author');
    console.log(title);
    document.getElementById('post-title').innerHTML = `<h3>${title}</h3>`;
    document.getElementById('post-auth').innerHTML = `<h4>${author}</h4>`+`<button type="button" id="edit-btn" onclick="makeContentEditable();">Edit <i class="fas fa-edit"></i></button>`;
    document.getElementById('post-desc').innerHTML = `<p>${desc}</p>`;
}

function makeContentEditable() {
    document.getElementById('post-title').contentEditable = "true";
    document.getElementById('post-title').style.border = "1px solid #d11d53";
    document.getElementById('post-desc').contentEditable = "true";
    document.getElementById('post-desc').style.border = "1px solid #d11d53";
    var author = localStorage.getItem('author');
    document.getElementById('post-auth').innerHTML = 
        `<h4>${author}</h4>`+`<button type="button" id="save-btn" onclick="saveContent();">Save <i class="fas fa-save"></i></button>`;
}

function saveContent() {
    var author = localStorage.getItem('author');
    document.getElementById('post-auth').innerHTML = 
        `<h4>${author}</h4>`+`<button type="button" id="edit-btn" onclick="makeContentEditable();">Edit <i class="fas fa-edit"></i></button>`;
    document.getElementById('post-title').contentEditable = "false";
    document.getElementById('post-desc').contentEditable = "false";
    document.getElementById('post-desc').style.border = "none";
    document.getElementById('post-title').style.border = "none";       

}
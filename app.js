const form = document.querySelector('#add')

form.addEventListener('submit',function(e) {
    const textValue = document.getElementById('add-input').value;
    const list = document.getElementById('list');
    const li = document.createElement('li');
    li.innerHTML = `<p> ${textValue} </p> <p> <i class="fa fa-pencil-square-o"></i> <i class="fa fa-times"></i> </p> <input type="text" class="edit-note">` 
    list.appendChild(li)
    e.preventDefault()

})



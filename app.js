const btn = document.getElementById('btn');
const inputField = document.getElementById('text-input');

btn.addEventListener('click', function(){
   const copyText =  navigator.clipboard.writeText(inputField.value);
   generateToastMessage(`${inputField.value} coppied!`)
   inputField.value = '';
   console.log(copyText)
})
function generateToastMessage(msz){
    const div = document.createElement('div');
    div.className = 'toast-message'
    div.innerText = msz;
    document.body.appendChild(div);

    div.addEventListener('click', function(){
        document.querySelector('.toast-message').style.display = "none";
        
    })
    
}


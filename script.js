function nav (){
    var sidebar = document.querySelector('#list');
    var sidebar2 = document.querySelector('#x')

    sidebar.addEventListener('click',()=>{
        document.querySelector('.ipad-list').style.top='0%';
        sidebar.style.display='none';
        sidebar2.style.display='block';
    })

    sidebar2.addEventListener('click',()=>{
        document.querySelector('.ipad-list').style.top='-60%';
        sidebar2.style.display='none';
        sidebar.style.display='block';
    });
}
nav()

function validation(){
    var input1 = document.querySelector('.inputname').value;
    var input2 = document.querySelector('.inputsubject').value;
    var input3 = document.querySelector('.inputemail').value;
    var input4 = document.querySelector('.inputphone').value;
    var input5 = document.querySelector('.textarea').value;
    var  input4int = parseInt(input4);
    
    if(input1.trim() ==""){
        alert('Input Your Name')
        return false;
    }else if(input3.trim() ==""){
        alert('Input Your Email')
        return false;
    }else if(input4.trim() ==""){
        alert('Input Phone Number')
        return false;
    } else if(input5.trim() ==""){
        alert('Write a Message')
        return false;
    }else if(isNaN(input4int)){
        alert('Input a valid number')
        return false;
    }else{
        alert('message sent successfully')  
    }
}

// dom manipulation with scroll addeventlistener function
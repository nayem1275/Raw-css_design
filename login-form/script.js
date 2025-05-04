let signup=document.getElementById('signup');
     let signin=document.getElementById('signin');
     let nameinput=document.getElementById('nameinput');
     let title=document.getElementById('title');


        signin.onclick=function(){
                        nameinput.style.maxHeight='0';
                        title.innerHTML='Sign in';
                        signup.classList.add('disable');
                        signin.classList.remove('disable');
        }

        signup.onclick=function(){
            nameinput.style.maxHeight='65px';
            title.innerHTML='Sign up';
            signup.classList.remove('disable');
            signin.classList.add('disable');
}
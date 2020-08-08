let gitUser = new Github();
let ui = new UI();
document.querySelector("#search-input").addEventListener("keyup" , (e)=>{
    e.preventDefault();
    let username = e.target.value;
   if(username !==""){
       gitUser.getUser(username).then(data =>{
           if(!data.user.message){
               //show profile
                ui.showProfile(data.user);
                ui.showRepos(data.repos)
           }else{
               ui.showAlert('User not found ...' , 'alert alert-danger')
           }
       })
   }else{
       ui.delUi()
   }
})
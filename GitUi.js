class UI{
    constructor(){
        this.profile = document.querySelector(".profile");
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mt-4">
        <div class="row">
          <div class="col-4">
              <img src="${user.avatar_url}" alt="profile picture" class="img-fluid" >
              <a href="${user.html_url}" class="btn btn-dark btn-block mt-2" target="_blank">View Profile</a>
          </div>
          <div class="col-8">
              <span class="badge badge-secondary">Profile Repos : ${user.public_repos} </span>
              <span class="badge badge-primary">Profile Gists : ${user.public_gists} </span>
              <span class="badge badge-success">Profile Followers : ${user.followers}</span>
              <span class="badge badge-info">Profile Following : ${user.following} </span>
             
              <ul class="list-group mt-5">
                  <li class="list-group-item">Company : ${user.company} </li>
                  <li class="list-group-item">Website / Blog : ${user.blog}</li>
                  <li class="list-group-item">Location : ${user.location}</li>
                  <li class="list-group-item">Member Since : ${user.created_at}</li>
              </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading my-3">Latest Repose</h3>
      <div id="repos"></div>
        
        `;

    }

    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body mt-3">
            <div class="row">
                <div class="col-12">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="float-left">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </span>
                            <div class="float-right">
                                <span class="badge badge-primary">All watchers : ${repo.watchers_count}</span>
                                <span class="badge badge-success">All Forks : ${repo.forks_count}</span>
                                <span class="badge badge-danger">Stars : ${repo.stargazers_count}</span>

                            </div>
                        </li>
                    </ul>
                </div>
               
            </div>
            </div>
            
            
            `;
        });
        document.querySelector('#repos').innerHTML = output;
        
    }

    delUi(){
        this.profile.innerHTML= '';
    }

    showAlert(msg , className){
        this.delAlert();
        let alert = document.createElement("div");
        alert.className = className ; 
        alert.textContent = msg;
        document.querySelector('.message').appendChild(alert);

        setTimeout(() => {
            this.delAlert()
        }, 2000);
    }

    delAlert(){
        let alert = document.querySelector('.alert-danger');
        if(alert){
            alert.remove()
        }
    }
}
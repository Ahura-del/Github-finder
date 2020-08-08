class Github{
    constructor(){
        this.client_id ="Iv1.02dcce1f8510c8ac";
        this.client_secret = "43efa73a0056eeb24c055fef6507ea11482d4b9f";
        this.repos_count = 5;
        this.repos_sort = "created : acs"

    }

    async getUser(username){
        let response = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let getRepos = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let user = await response.json();
        let repos = await getRepos.json()
        return {
            user,
            repos
        }
    }
}
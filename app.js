
const APIURL= "https://api.github.com/users/";
var getuser=async(usrename)=>{
  const responce=await fetch(APIURL+usrename)
  const data=await responce.json()
  const card=`
  <div class="card">
  <div>
      <img src="${data.avatar_url}" class="avatar" alt="#">
  </div>
  <div class="user-info">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <BR>
          <p><strong>Followers :</strong>${data.followers}</p>
          <p><strong>Following :</strong>${data.following}</p>
          <p><strong>Repositroies :</strong>${data.public_repos}</p>
  
  </div>
</div>`

main.innerHTML=card;
  }
const formsubmit=()=>{
    const searchBox=document.querySelector("#search");
    if(searchBox.value!=" "){
        getuser(searchBox.value)
        searchBox.value=""
    }
    return false;
}






















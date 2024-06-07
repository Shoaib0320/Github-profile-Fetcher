var getInp = document.querySelector('#inp')

function search(){
    fetch(`https://api.github.com/users/${getInp.value}`)
    .then(function(data){
       return data.json()
    })

    .then(function(data){
        var getDiv = document.getElementById('show')

            getDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${data.avatar_url ? data.avatar_url : 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <h5 class="card-title">Followers: ${data.followers}</h5>
    <h5 class="card-title">Following: ${data.following}</h5>
    <p class="card-text">BIO: ${data.bio}</p>
  </div>
  <div class="card-body">
    <a href=${data.html_url} class="card-link">Go To Profile</a>
  </div>
</div>`
    
    })
    .catch(function(err){
        console.log(err)
    })
}

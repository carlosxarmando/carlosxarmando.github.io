const url = 'https://axie-infinity.p.rapidapi.com/get-update/0xb8e3241baa38561ef17d25163c463836ba85a411?rapidapi-key=17d6190dbamsh05f02d76fc2d887p1598f5jsncc031b4a4a3f'

fetch(url)
.then(response => response.json() )
.then(data => {
  
  let element = document.getElementById('elem')
  element.innerHTML = `<p>${data.leaderboard.elo}</p>`
  
  console.log(data)
})
.catch(err=>console.log(err))
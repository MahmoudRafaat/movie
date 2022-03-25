async function search(event){
  event.preventDefault()
  const Mydata=new FormData(event.target)
  const name=Mydata.get("q")
  const url="https://ahmed-movie-app.herokuapp.com/api/movies/"+name+"/1"
  const responce = await fetch(url)
  const data= await responce.json()    
  console.log(data);
  if(data.Response==="False"){
      document.getElementById("d").innerText=data.Error
  }
  else{
      document.getElementById("d").innerText="About "+data.totalResults+" searchs"
      let yr=""
  data.Search.forEach((movie) => {
      yr += `<div class="card" style="width: 18rem;">
                    <img src="${movie.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${movie.Title}</h5>
                      <p class="card-text">type : ${movie.Type}, year : ${movie.Year}</p>
                      <a href="https://www.imdb.com/title/${movie.imdbID}/" class="btn btn-primary">Go to imbdo</a>
                    </div>
                  </div>`

      
  });
  document.getElementById("all").innerHTML=yr
  }

  
  }
  document.getElementById("myform").addEventListener('submit',search)
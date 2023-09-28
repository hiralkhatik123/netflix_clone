let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

const row = document.getElementById('row');

row.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
    currentTranslate = getTranslateX(row);
    row.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const currentPosition = e.clientX;
        const deltaX = currentPosition - startPosition;
        const translate = currentTranslate + deltaX;
        setTranslateX(row, translate);
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        row.style.transition = '';
    }
});

function getTranslateX(element) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}

function setTranslateX(element, value) {
    element.style.transform = `translateX(${value}px)`;
}


    const apikey="d7d12213e57a9c38050ebceb7e944c29";
    const apiEndpoint = "https://api.themoviedb.org/3"
    const imagepath = "https://image.tmdb.org/t/p/original"

    const apiPaths = {
        fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
        fetchMoviesList: (id)=>`${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
        fetchPopular: `${apiEndpoint}/movie/popular?api_key=${apikey}&language=en-US`,
        fetchTopRated: `${apiEndpoint}/movie/top_rated?api_key=${apikey}&language=en-US`,
        fetchNowPlaying: `${apiEndpoint}/movie/now_playing?api_key=${apikey}&language=en-US`,
        fetchUpcoming: `${apiEndpoint}/movie/upcoming?api_key=${apikey}&language=en-US`,
        fetchYoutubeapi: (query)=> `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}the weeknd&key=AIzaSyCNoXXiydAMxlfAZGAQfm5aFKbCj-srcTQ`
    }

    function init(){
        fetchAndBuildmovieSection(apiPaths.fetchUpcoming,"Upcoming")
        fetchAndBuildmovieSection(apiPaths.fetchPopular,"Popular")
        fetchAndBuildmovieSection(apiPaths.fetchTopRated,"Top rated")
        fetchAndBuildmovieSection(apiPaths.fetchNowPlaying,"Now Playing")
        fetchAndBuildAllSection();
    }

    function fetchAndBuildAllSection(){
        fetch(apiPaths.fetchAllCategories)
        .then(res=>res.json())
        .then(res=>{
            const categories = res.genres;
            if(Array.isArray(categories) && categories.length){
                categories.slice(0,2).forEach(category=>{
                    fetchAndBuildmovieSection(
                        apiPaths.fetchMoviesList(category.id),
                        category.name
                    );
                });
            }
        })
        .catch(err=>console.error(err));
    }
    function fetchAndBuildmovieSection(fetchUrl,categoryName){
        console.log(fetchUrl,categoryName);
        fetch(fetchUrl)
        .then(res=>res.json())
        .then(res=>{
            //console.table(res.results);
            const movies = res.results;
            if(Array.isArray(movies) && movies.length){
                buildMovieSecton(movies.slice(0.6), categoryName)
            }
        })
        .catch(err=>console.error(err))
    }
    function buildMovieSecton(list, categoryName){
        console.log(list, categoryName)
        const movieCont = document.getElementById('container-movie');

        const moviesListHTML = list.map(iteam=>{
            return `
            <img class="iteam" id="iteam" src="${imagepath}${iteam.backdrop_path}" alt="${iteam.title}" onclick="searchMovieTrailer('${iteam.title}')" draggable="false"
            >
            
            `;
        }).join('')

        const moviesSectionHTML = `
        
        <h2 class="Train">${categoryName}<span></span></h2>
        <div class="row">${moviesListHTML}</div>
        `

        const div = document.createElement('div');
        div.className = 'container-movie'
        div.innerHTML = moviesSectionHTML;
        movieCont.append(div);

        }
        play.addEventListener('click',()=>{
            //UC0c8UMy3H2aOdJO4cqnKilg
            const vidio_Id= "2fDzCWNS3ig";
            const youtubeUrl = `https://www.youtube.com/watch?v=${vidio_Id}`;
            console.log(youtubeUrl);
            window.open(youtubeUrl,'blank');
        });

        function searchMovieTrailer(movieName){
            if(!movieName) return;

            fetch(apiPaths.fetchYoutubeapi(movieName))
            .then(res=>res.json())
            .then(res=>{
                const bestResult = res.items[0];
                const youtubeUrl = `https://www.youtube.com/watch?v=${bestResult.id.videoId}`;
                console.log(youtubeUrl);
                window.open(youtubeUrl,'blank');
            })
            .catch(err=>console.log(err));
        }
        window.addEventListener('load',function(){
        init();
    })
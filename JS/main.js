
const API_KEY="test"

$(document).ready(() =>{
    $('#searchForm').on('submit', (e)=>{
        e.preventDefault();
        let searchText = $('#searchText').val()
        getMovies(searchText)
    })
})

const getMovies = (searchText) =>{
    console.log(searchText, API_KEY)
    console.log(`http://www.omdapi.com?s=${searchText}+apikey=${API_KEY}`);
    // axios.get(`http://www.omdapi.com?s=${searchText}&apikey=${API_KEY}`)
}
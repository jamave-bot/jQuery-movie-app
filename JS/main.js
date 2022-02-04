import 'dotenv/config'

$(document).ready(() =>{
    $('#searchForm').on('submit', (e)=>{
        e.preventDefault();
        let searchText = $('#searchText').val()
        getMovies(searchText)
    })
})

const getMovies = (searchText) =>{
    console.log(`http://www.omdapi.com?s=${searchText}+apikey=${process.env.API_KEY}`);
    // axios.get(`http://www.omdapi.com?s=${searchText}&apikey=${process.env.API_KEY}`)
}
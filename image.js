const searchform=document.getElementById("search-form")
const searchbox=document.getElementById("search-box")
const searchresult=document.getElementById("search-result")
const showmorebutton=document.getElementById("show-more")

// continue at 22:04
let keyword="";
let page=1;
let clientid="wbe-R6JpY1P6dz5RBU-WTYJ3NzA7RXiE3ybR9IO8YZA"
async function searchimages() {
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${clientid}`;
    
    const response= await fetch (url);
    const data= await response.json();

    console.log(data);
    
    
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimages();
})
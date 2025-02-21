const searchform=document.getElementById("search-form")
const searchbox=document.getElementById("search-box")
const searchresult=document.getElementById("search-result")
const showmorebutton=document.getElementById("show-more")

// continue at 30:30
let keyword="";
let page=1;
let clientid="wbe-R6JpY1P6dz5RBU-WTYJ3NzA7RXiE3ybR9IO8YZA"
async function searchimages() {
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clientid}&per_page=12`;
    
    const response= await fetch (url);
    const data= await response.json();

    if(page == 1){
        searchresult.innerHTML=""
    }
    const result= data.results;
    console.log(result)
    result.map((result)=>{
        const image=document.createElement("img")
        image.src=result.urls.small
        const imagelik=document.createElement("a")
        imagelik.href=result.links.html
        imagelik.target="_blank";

        imagelik.appendChild(image);
        searchresult.appendChild(imagelik);
    })

    showmorebutton.style.display="block";

    
    
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimages();
})

showmorebutton.addEventListener("click",()=>{
    page++
    searchimages();
})



//variables
const generalBtn=document.getElementById("general");
const bussinessBtn=document.getElementById("bussiness");
const sportsBtn=document.getElementById("sports");
const entertainmentBtn=document.getElementById("entertainment");
const technologyBtn=document.getElementById("technology");
const searchBtn=document.getElementById("searchBtn");
const newsQuery=document.getElementById("newsQuery");
const newstype=document.getElementById("newstype");
const newsdetails=document.getElementById("newsdetails");


//Array==

var newsDataArr=[];

//API ===
const API_KEY="a4a24cf73da14576bd33b1d45867fd00";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";



window.onload=function(){
    newstype.innerHTML="<h4>Headlines<h4>";
    fetchHeadlines();
};



generalBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>General<h4>";
    fetchGeneralNews();

});

 bussinessBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>Bussiness<h4>";
    fetchBussinessNews();

});

sportsBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>Sports<h4>";
    fetchSportsNews();

});

entertainmentBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>Entertainment<h4>";
    fetchEntertainmentNews();

});

technologyBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>Technology<h4>";
    fetchTechnologyNews();

});

searchBtn.addEventListener("click",function(){
    newstype.innerHTML="<h4>Search:" +newsQuery.value+"<h4>";
    fetchQueryNews();

});



const fetchHeadlines=async()=>{
    const response=await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr=[];
    if (response.status >=200 && response.status<300){
        const myJson=await response.json();
        newsDataArr=myJson.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText);
    }
displayNews();

}

const fetchGeneralNews=async()=>{
    const response=await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr=[];
    if (response.status >=200 && response.status<300){
        const myJson=await response.json();
        newsDataArr=myJson.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText);
    }
displayNews();

}

const fetchBussinessNews=async()=>{
    const response=await fetch(BUSSINESS_NEWS+API_KEY);
    newsDataArr=[];
    if (response.status >=200 && response.status<300){
        const myJson=await response.json();
        newsDataArr=myJson.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText);

    }
displayNews();

}

const fetchSportsNews=async()=>{
    const response=await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr=[];
    if (response.status >=200 && response.status<300){
        const myJson=await response.json();
        newsDataArr=myJson.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText);

    }
displayNews();

}

const fetchEntertainmentNews=async()=>{
    const response=await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr=[];
    if (response.status >=200 && response.status<300){
        const myJson=await response.json();
        newsDataArr=myJson.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText);

    }
displayNews();

}

const fetchTechnologyNews=async()=>{
    const response=await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr=[];
    if (response.status >=200 && response.status<300){
        const myJson=await response.json();
        newsDataArr=myJson.articles;

    }else{
        //handle error
        console.log(response.status,response.statusText);

    }
displayNews();

}



const fetchQueryNews=async()=>{
if(newsQuery.value==null)
return;

const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr=[];
    if (response.status >=200 && response.status<300){
        const myJson=await response.json();
        console.log(myJson);
        newsDataArr=myJson.articles;

    }else{
        //handle error
        console.log(response.status, response.statusText);
        // newsdetails.innerHTML = "<h5>No data found.</h5>"
        // return;

    }
displayNews();

}




function displayNews(){
    newsdetails.innerHTML="";
    if(newsDataArr.length==0){
newsdetails.innerHTML="<h5> No data found </h5>"
return;
    }
    newsDataArr.forEach(news=>{
 var data=news.publishedAt.split("T");

        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p2 card";

        var card =document.createElement('div')
        card.className="p-2";

        var image=document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

var cardBody=document.createElement('div');

 var newsHeading=document.createElement('h5');
 newsHeading.className="card-title";
 newsHeading.innerHTML=news.title;


 var dataHeading=document.createElement('h6');
 dataHeading.className="text-primary";
 dataHeading.innerHTML=data[0];


 var discription=document.createElement('p');
 discription.className="text-muted";
 discription.innerHTML=news.discription;



 var link=document.createElement('a');
 link.className="btn btn-dark";
 link.setAttribute("target" , "_blank");
 link.href=news.url;
 link.innerHTML="Read more";
        

card.appendChild(newsHeading);
card.appendChild(dataHeading);
card.appendChild(discription);
card.appendChild(link);


card.appendChild(image);
card.appendChild(cardBody);

col.appendChild(card);

newsdetails.appendChild(col);

    });
}


// e22d852023a44fc1a776a536e80bf1ca

let newsAcc= document.getElementById("newsAccord");

let source='techcrunch';
let apiKey='e22d852023a44fc1a776a536e80bf1ca';
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e22d852023a44fc1a776a536e80bf1ca


//creating a get request

const xhr=new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

xhr.onload=function(){
    if (this.status === 200) {
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
         
        let newsHtml="";
        articles.forEach(function(element) {

         let news=`<div class="card">
         <div class="card-header" id="headingOne">
           <h5 class="mb-0">
             <button
               class="btn btn-link"
               data-toggle="collapse"
               data-target="#collapseOne"
               aria-expanded="true"
               aria-controls="collapseOne">
               ${element["title"]}
             </button>
           </h5>
         </div>
         
         <div
           id="collapseOne"
           class="collapse show"
           aria-labelledby="headingOne"
           data-parent="#accordion"
         >
           <div class="card-body">
           ${element["content"]}
           </div>
         </div>
         </div>`;
         newsHtml += news;

        });
        
        newsAcc.innerHTML = newsHtml;
    }

    else{
        console.log("ERORR")
    }

}
xhr.send()



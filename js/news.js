const handleCategory =async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    console.log(data.data);
    mainCategory = data.data.news_category
    displayeCategory (mainCategory)
}

const displayeCategory = (mainCategory) =>{
//    get id
const tabContainer = document.getElementById('tab-container');
        
         mainCategory.slice(0, 3).forEach(newsCategory=>{
         const createDiv = document.createElement('div');

         createDiv.innerHTML = `
         <a onclick = "handleOnclick('${newsCategory.category_id}') " role="tab" class="tab text-2xl font-semibold  my-10 ">${newsCategory.category_name}</a>
         
         `
            console.log(newsCategory);
            // apeand container
            tabContainer.appendChild(createDiv)
            
     } )
    
}
// handle onclick function
const handleOnclick = async(categoryId) =>{
 const res= await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
 const data = await res.json();
 const dataNewsCard = data.data;
//  console.log(newsCard);
//  get card container id
const singleCardContainer = document.getElementById('single-card-container');
// clear before data

singleCardContainer.textContent= '';

  dataNewsCard?.forEach(singleCard =>{

    console.log(singleCard);
    const createNewsCard = document.createElement('div');
    createNewsCard.innerHTML = `
    
    <div class="card w-96 bg-gray-200 shadow-xl">
    <figure><img src="${singleCard?.image_url}" /></figure>
    <div class="card-body">
      <h2 class="card-title">
       ${singleCard.title.slice(0,30)}
        <div class="badge badge-secondary px-4 py-4 rounded">${singleCard.rating.badge}</div>
      </h2>
      <p>${singleCard?.details.slice(0,60)}</p>
      <p>Total View : ${singleCard?.total_view}</p> 
  
      <div class="card-actions justify-between">
        <!-- <div class="badge badge-outline">Fashion</div>  -->
        <div class="flex justify-start ">
          <img class="w-12 rounded-3xl mx-auto h-12" src="${singleCard.author.img}" alt="">
        <div>
          <h2 class="">${singleCard?.author.name}</h2> 
          <p>2022-08-24</p>
           
        </div>
        </div>
        <div class="badge badge-primary p-5 rounded  ">Details</div>
      </div>
    </div>
  </div>
    
    `
    singleCardContainer.appendChild(createNewsCard)
        
  })
    
}

// call function
handleCategory()

handleOnclick("01");
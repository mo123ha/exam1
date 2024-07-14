


$(document).ready(()=>{


   $('.loadingScreen').fadeOut(2000,function () {
      $('body').css('overflow','visible')
   })

})

let move;
let list;
let close;
list=document.querySelector(".fa-list ");
close=document.querySelector(".fa-xmark ");
$(".close").on("click",function () {
    move=$(".side-nav").innerWidth();
   console.log(move);

   if ($('.side').css('left')=='0px') {
    $('.side').css('left',-move)
    $('.nav-mov').css('left','0px')    
    for (let i = 0; i < 5; i++) {
      $('ul li a').eq(i).animate({
          top: 0
      }, (i + 5) * 100)
  }




    list.classList.remove('d-none')
   list.classList.add('d-inline-block')
   close.classList.remove('d-inline-block')
   close.classList.add('d-none')  
   }
 else {
    $('.side').css('left','0px')
    $('.nav-mov').css('left','74%')
    list.classList.add('d-none')
    list.classList.remove('d-inline-block')
    close.classList.add('d-inline-block')
    close.classList.remove('d-none')  
 }
    
})



   



let area=document.getElementById('Area')
area.addEventListener("click",function () {

   $(document).ready(()=>{
      $('.loadingScreen').fadein(200)
   })
   getArea()
 
   $('.nav-mov').css('left','0px')
   $('.side').css('left','-75%')
   list.classList.remove('d-none')
   list.classList.add('d-inline-block')
   close.classList.remove('d-inline-block')
   close.classList.add('d-none')
  
   $(document).ready(()=>{
      $('.loadingScreen').fadout(200)
   })
})

async function getArea() {
   let data= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
   let response=await data.json()
 
   console.log(response.meals);

   console.log("heloo");
   displayArea(response.meals)
}


function displayArea(areaMeals) {
console.log(areaMeals);
   temp=''
   for( let i=0; i<areaMeals.length; i++){
      temp +=`
        <div class="col-md-3">
             <div class="text-center text-white mouse"  onclick="getAreameals('${areaMeals[i].strArea}') ">
               <i class="fa-solid fa-house-laptop fa-4x"></i>
                      
                        <p class="fs-5 fw-bold">${areaMeals[i].strArea}</p>
                     </div>
                 </div>
                 
             </div> 
      `
      
   }
document.getElementById('data').innerHTML=temp;
document.getElementById('searchContent').innerHTML='';

}


// get inge

 


 let Ingredients=document.getElementById('Ingredients')
 Ingredients.addEventListener("click",function () {
   getIngredients()
   $('.side').css('left','-75%')
   $('.nav-mov').css('left','0px')
   list.classList.remove('d-none')
   list.classList.add('d-inline-block')
   close.classList.remove('d-inline-block')
   close.classList.add('d-none')
})

async function getIngredients() {
   let data= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
   let response=await data.json()
   let Ingredient=response.meals.slice(0,20)
 
   displayIngredients(Ingredient)
}


function displayIngredients(Ingredient) {
console.log(Ingredient);
   temp=''
   for( let i=0; i<Ingredient.length; i++){
      temp +=`
        <div class="col-md-3">
             <div class="text-center text-white mouse" onclick="displayIngredientsMeals('${Ingredient[i].
   strIngredient}')">
                         <i class="fa-solid fa-drumstick-bite fa-4x"></i>
 <h3>${Ingredient[i].
   strIngredient}</h3> 
                        <p class="">${Ingredient[i].
                           strDescription.split(" ").slice(0,20).join(" ")
                           }</p>
                     </div>
                 </div>
                 
             </div> 
      `
      
   }
document.getElementById('data').innerHTML=temp;
document.getElementById('searchContent').innerHTML='';

}


// search

let contant=document.getElementById('Contant Us')
contant.addEventListener("click",()=>{
   createContant()
   $('.side').css('left','-75%')
   $('.nav-mov').css('left','0px')
   list.classList.remove('d-none')
   list.classList.add('d-inline-block')
   close.classList.remove('d-inline-block')
   close.classList.add('d-none')
})



function createContant() {
   temp=` <div class="go d-flex justify-content-center align-items-center">
    <div class="container   ">
        <div class="row  g-4      ">
            <div class="col-md-6 ">
     
                <input onkeyup="validallInput()"          type="text" placeholder="enter Your Name" class="form-control" id="name">
                  <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
        
            </div>
            <div class="col-md-6">
                <input         type="email" placeholder="enter Your email" class="form-control" id="email" onkeyup="validallInput()" >
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
        
            </div>
            <div class="col-md-6">
                <input  onkeyup="validallInput()"          type="text" placeholder="enter Your Phone" class="form-control" id="phone">
          <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
             <div class="col-md-6">
                <input onkeyup="validallInput()"                type="number" placeholder="enter Your age" class="form-control" id="age" >
        <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  onkeyup="validallInput()"            type="password" placeholder="enter Your password" class="form-control" id="password">
        <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div><div class="col-md-6">
                <input  onkeyup="validallInput()"                type="password" placeholder="enter Your repassword" class="form-control" id="repassword">
                                
        <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
           
        </div>
        <div class="d-flex align-items-center justify-content-center mt-3">
            <button id"btnSubmit"        class="btn btn-outline-danger text-center" disabled  >submit</button>
        </div>
       

</div>
</div>`
document.getElementById('searchContent').innerHTML=temp;
   
}
















function validName(){
   let regex=/^[a-zA-Z]{1,20}$/
   let name=document.getElementById("name")
   if(regex.test(name.value)){

       return true
   }else{

     return false
 }

}
function validemail() {
   let regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   let email=document.getElementById("email")
   if(regex.test(email.value)){

       return true
   }else{

     return false
 }

}


function validPhone() {
   let regex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
   let phone=document.getElementById("phone")
   if(regex.test(phone.value)){

       return true
   }else{

     return false
 }

}

function validage() {
   let regex=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
   let age=document.getElementById("age")
   if(regex.test(age.value)){

       return true
   }else{

     return false
 }

}
function vaildPassword() {
   let regex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
   let password=document.getElementById("password")
   if(regex.test(password.value)){

       return true
   }else{

     return false
 }

}
function vaildRePassword() {
   let regex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
   let repassword=document.getElementById("repassword")
   if(regex.test(repassword.value)){

       return true
   }else{

     return false
 }

}





let btnSubmit=document.getElementById("btnSubmit")


if(document.getElementById("name")!=null){
document.getElementById("name").addEventListener("focus", () => {
   nameInput = true
   console.log("helooo");
})
}
if (document.getElementById("email")!=null) {
   document.getElementById("email").addEventListener("focus", () => {
      emailInput = true
   })
}

if (document.getElementById("phone")!=null) {
   document.getElementById("phone").addEventListener("focus", () => {
      ohoneInput = true
   })
}
if (document.getElementById("age")!=null) {
   document.getElementById("age").addEventListener("focus", () => {
      ageInput = true
   })
}

if(document.getElementById("password")!=null){
   document.getElementById("password").addEventListener("focus", () => {
      passwordInout = true
   })
}

if (document.getElementById("repassword")!=null) {
   document.getElementById("repassword").addEventListener("focus", () => {
      repasswordInput = true
   })
}

let nameInput = false;
let emailInput = false;
let phoneInput = false;
let ageInput = false;
let passwordInput = false;
let repasswordInput= false;


function validallInput() {
  
   if (nameInput==true) {
      if ( validName()==true) {
          document.getElementById("nameAlert").classList.replace("d-block", "d-none")
          console.log("helloo");

      } else {
          document.getElementById("nameAlert").classList.replace("d-none", "d-block")
          console.log("ok");

      }
  }
  if (emailInput==true) {

      if ( validemail()==true) {
          document.getElementById("emailAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("emailAlert").classList.replace("d-none", "d-block")
console.log("ok");
      }
  }

  if (phoneInput==true) {
      if ( validPhone()==true) {
          document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
          console.log("ok");
      }
  }

  if (ageInput==true) {
      if (validage()==true) {
          document.getElementById("ageAlert").classList.replace("d-block", "d-none")
          console.log("hello");
      } else {
          document.getElementById("ageAlert").classList.replace("d-none", "d-block")
          console.log("ok");

      }
  }

  if (passwordInput==true) {
      if (vaildPassword()==true) {
          document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
          console.log("hello");
      } else {
          document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
          console.log("ok");

      }
  }
  if (repasswordInput==true) {
      if (vaildRePassword()==true) {
          document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

      }
  }


  if (validName()&&validemail()&&validPhone()&&validage()&&vaildPassword&&vaildRePassword()) {
   btnSubmit.removeAttribute("disabled")
   

}
   
  }
   





































































// search

let sear=document.getElementById('Search')
sear.addEventListener('click',()=>{
   createSearchinput()
   $('.side').css('left','-75%')
   $('.nav-mov').css('left','0px')
   list.classList.remove('d-none')
   list.classList.add('d-inline-block')
   close.classList.remove('d-inline-block')
   close.classList.add('d-none')
})


function createSearchinput() {

temp=

`   <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <input            onkeyup="byName(this.value)"               type="text"      name="Search By Name" placeholder="Search By Name" class="w-100 form-control"  id="SearchName">
                </div>
                <div class="col-md-6">
             
                    <input  onkeyup= "searchByletter(this.value)"                 type="text" name="Search By Name" placeholder="Search By first Letter"        class="w-100 form-control"  id="SearchFirstLetter">
                </div>
            </div>
         </div>`
         document.getElementById('searchContent').innerHTML=temp;
         document.getElementById('data').innerHTML='';
   
}






async function byName(val) {
   
   let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
   let resq= await data.json()
   console.log(resq);
   diplaybyname(resq.meals)
   
}

function diplaybyname(b) {

   temp=''
   for(let i=0;i<b.length;i++){
    
         temp +=`
         <div class="col-md-3">
              <div class="layer position-relative mouse "   onclick="getIdcategery('${b[i].idMeal}')" >
                      <img src="${b[i].
                         strMealThumb
                         }" class="w-100 object-fit-fill rounded-3" alt="">
                      <div class="layer1  rounded-3  d-flex align-items-center ">
                         <p class="fs-5 fw-bold ">${b[i].strMeal}</p>
                     
                       </p>
                      </div>
                  </div>
                  
              </div> 
       `
       
    }
 document.getElementById('data').innerHTML=temp;

         
      }
   


byName("s")

async function searchByletter(val) {


   

   let name= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`)
let res=await name.json()
console.log(res);
console.log(res.meals);
 displaysearchByletter(res.meals)
   console.log(val);
   
}


function displaysearchByletter(meal) {
 
   temp=''
   for( let i=0; i<meal.length; i++){
      temp +=`
        <div class="col-md-3">
             <div class="layer position-relative mouse " onclick="getIdcategery('${meal[i].idMeal}')">
                     <img src="${meal[i].
                        strMealThumb
                        }" class="w-100 object-fit-fill rounded-3" alt="">
                     <div class="layer1  rounded-3  d-flex align-items-center ">
                        <p class="fs-5 fw-bold ">${meal[i].strMeal}</p>
                    
                      </p>
                     </div>
                 </div>
                 
             </div> 
      `
      
   }
document.getElementById('data').innerHTML=temp;
}


 async function getAreameals(country) {
   console.log(country);
   let countryapi= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
   let countryName= await countryapi.json()
   console.log(countryName);
   displayAreaMeals(countryName.meals)
   
}
function displayAreaMeals(a) {
   
   temp=''
   for( let i=0; i<a.length; i++){
      temp +=`
        <div class="col-md-3">
             <div class="layer position-relative mouse "  onclick="getIdcategery(${a[i].idMeal})">
                     <img src="${a[i].
                        strMealThumb
                        }" class="w-100 object-fit-fill rounded-3" alt="">
                     <div class="layer1  rounded-3  d-flex align-items-center ">
                        <p class="fs-5 fw-bold ">${a[i].strMeal}</p>
                    
                      </p>
                     </div>
                 </div>
                 
             </div> 
      `
      
   }
document.getElementById('data').innerHTML=temp;
}













let catelink=document.getElementById("Categeory");
catelink.addEventListener("click",function (params) {
   getcategery() 
   $('.side').css('left','-75%')
   $('.nav-mov').css('left','0px')
   list.classList.remove('d-none')
   list.classList.add('d-inline-block')
   close.classList.remove('d-inline-block')
   close.classList.add('d-none')
})


async function getcategery(params) {
   let cate= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
   let dataCate= await cate.json()
   
      diplaycate(dataCate.
         categories)
}

function diplaycate(a) {
   temp=''
   for(let i=0 ;i<a.length;i++){
      temp+=`     <div class="col-md-3">
             <div class="layer position-relative mouse "  onclick= getmealscategery('${a[i].strCategory   
                        }')>
                     <img src="${a[i].
                        strCategoryThumb

                        }" class="w-100 object-fit-fill rounded-3" alt="">
                     <div class="layer1  rounded-3  d-flex align-items-center ">
                        <p class="fs-5 fw-bold ">${a[i].strCategory
                        }</p>
                    
                      </p>
                     </div>
                 </div>
                 
             </div> `
   }
   document.getElementById('data').innerHTML=temp;
   
}



// 

async function getmealscategery(nameMeal) {

   let name=await    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameMeal}`)
   let data= await name.json()
   console.log("heloooo");
   console.log(data);

   diplaygetmealscategery(data.meals)
   console.log(data.meals);
}

// diplaygetmealscategery
function diplaygetmealscategery(e) {
   temp=''
   for(let i=0 ;i<e.length;i++){
      temp+=`     <div class="col-md-3">
             <div class="layer position-relative mouse " onclick="getIdcategery(${e[i].idMeal})">
                     <img src="${e[i].strMealThumb}" class="w-100 object-fit-fill rounded-3" alt="">
                     <div class="layer1  rounded-3  d-flex align-items-center ">
                        <p class="fs-5 fw-bold ">${e[i].strMeal
                        }</p>
                    
                      </p>
                     </div>
                 </div>
                 
             </div> `
   }
   document.getElementById('data').innerHTML=temp;
   
}
   












// displayIngredientsMeals
 async function displayIngredientsMeals(w) {
let nameIngerdient= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${w}`)
let a=await nameIngerdient.json()
// console.log(datiels);   
console.log(a.meals);
diplaygetmealIngerdient(a.meals)
}
function diplaygetmealIngerdient(w) {
   
   temp=''
   for(let i=0 ;i<w.length;i++){
      temp+=`     <div class="col-md-3">
             <div class="layer position-relative mouse " 
                        onclick="getIdcategery('${w[i].
                           idMeal}')"               )>
                     <img src="${w[i].strMealThumb}" class="w-100 object-fit-fill rounded-3" alt="">
                     <div class="layer1  rounded-3  d-flex align-items-center ">
                        <p class="fs-5 fw-bold ">${w[i].strMeal
                        }</p>
                    
                      </p>
                     </div>
                 </div>
                 
             </div> `
   }
   document.getElementById('data').innerHTML=temp
}





 async function getIdcategery(idMeal) {

   let meal= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
   let id= await meal.json()
console.log(id);
 console.log(id.meals);
 displayMealDetails(id.meals)
   
}




function  displayMealDetails (meal) {
   
 



   tem=`  <div class="col-md-4"> 
 <img src="${meal[0].
   strMealThumb
   }"  class="w-100 rounded-4"             alt="">
         
            <h5 class="fw-bold text-white mt-3">${meal[0].strMeal}</h5>
        </div>

        <div class="col-md-8 ">
            <div class="text-white">
                <h1 >Instructions</h1>
            <p class="fw-light fs-5">${meal[0].strInstructions}</p>
             <h3><span class="fw-bolder">Area : </span>${meal[0].strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal[0].strCategory}</h3>
                <h3>Recipes :</h3>
<ul class="list-unstyled d-flex">
   <li class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient1}</li>
   <li  class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient2}</li>
   <li  class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient3}</li>
   <li class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient4}</li>
   <li  class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient4}</li>
   <li class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient5}</li>
  
  
 
    
</ul>


   

<ul class="list-unstyled d-flex">
 <li class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient6}</li>
   <li  class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient7}</li>
   <li  class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient8}</li>
   <li class="alert alert-info m-2 p-1" > ${meal[0]. strIngredient9}</li>
   <li  class="alert alert-info m-2 p-1"> ${meal[0]. strIngredient1}</li>
</ul>



<h3>Tages:</h3>
<h3>${meal[0]. 
   strTags
   }</h3>

        <a  class="btn btn-success p-2"        href="${meal[0].strSource}"  target="_blank"         >Source</a>
        <a  class="btn btn-danger p-2"        href="${meal[0].strYoutube}"  target="_blank"         >Source</a>
          

            
           
            </div>



        </div>`
        
        
        document.getElementById('data').innerHTML=tem;
        document.getElementById('searchContent').innerHTML='';

   // console.log(meal);
   // console.log(meal[0].
   //    strArea
   //    );
   // console.log(meal[0].strMeal);
}






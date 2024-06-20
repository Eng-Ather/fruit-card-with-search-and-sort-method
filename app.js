var fruits = [
  {
    name: "Mango",
    desc: "Mangoes are not only delicious but also nutritious, offering a range of health benefits for your body and mind.",
    image:
      "https://th.bing.com/th/id/R.3b93c8f4be6d43a325e68d0e4ff9b0f9?rik=5d6CjvWFfb2%2fYQ&pid=ImgRaw&r=0",
  },
  {
    name: "Watermelon",
    desc: "Watermelon full of benefits it help you stay hydrated and provide various nutrients and antioxidants",
    image:
      "https://th.bing.com/th/id/OIF.BzwqqtcTcWCwgNA89puqLw?rs=1&pid=ImgDetMain",
  },
  {
    name: "Peach",
    desc: "Peach offer many health benefits, such as improved digestion, heart health, and skin protection",
    image:
      "https://www.cabofinefoods.com/wp-content/uploads/2020/10/Fresh-Produce-Peaches.jpg",
  },
  {
    name: "Cherry",
    desc: "cherries contain anti-inflammatory and antioxidant which help to relieve muscle pain, damage, and inflammation ",
    image:
      "https://th.bing.com/th/id/R.453c46bb90c681a2b036d4979fdb57ff?rik=vixTvH7BIzICfQ&pid=ImgRaw&r=0",
  },
  {
    name: "Strawberry",
    desc: "The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture",
    image:
      "https://th.bing.com/th/id/R.e4f082b30e91d437faedfb70a097eeb3?rik=i4gh%2bs4882rACQ&pid=ImgRaw&r=0",
  },
  {
    name: "Apple",
    desc: "Apples are nutritious fruits that may lower your risk of cancer, diabetes, heart disease, and more. ",
    image:
      "https://th.bing.com/th/id/R.526e70d953f3f2475e36fc146027cc62?rik=xWkkLo%2fNxrIS5Q&riu=http%3a%2f%2fshine-fruit.com%2fwp-content%2fuploads%2f2021%2f09%2fa01.jpg&ehk=tbrZfDC4kbagpq9GMmHU2WMSB9DA8YqTDecYflI2%2bJE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Grape",
    desc: "Grapes lower blood pressure, cholesterol, and blood sugar, as well as protect against cancer and oxidative stress",
    image:
      "https://barakatfresh.ae/media/catalog/product/cache/3660a992f2fa7b903faee280631091b9/g/r/green-grapes-seedless.jpg",
  },
  {
    name: "Guava",
    desc: "Guava is a tropical fruit with high vitamin C, fiber, and antioxidants it also improve digestion and boost immune system",
    image:
      "https://thumbs.dreamstime.com/b/guava-white-background-135749515.jpg",
  },
  {
    name: "Banana",
    desc: "Bananas can boost your heart health, digestion, diabetes management, weight control, and more.",
    image:
      "https://th.bing.com/th/id/OIP._IAzDqkmlHRW7rygoqXZagHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
  },
  {
    name: "kiwi",
    desc: "Kiwis are nutritious fruits that are high in vitamin C, fiber, and plant compounds with antioxidant and anti-inflammatory effects",
    image:
      "https://th.bing.com/th/id/OIP.Go8YNQjh4LJaB0bek8C4DQHaHa?rs=1&pid=ImgDetMain",
  },

  {
    name: "Muskmelon",
    desc: "Muskmelon is a super fruit that is rich in water, vitamin C, potassium and folate. It helps in weight loss, diabetes, hypertension, vision, immunity, skin, hair",
    image: "https://static.toiimg.com/photo/78075710.cms",
  },
  {
    name: "Papaya",
    desc: "Papaya has many benefits, including protection against heart disease, reduced inflammation, aid in digestion, and boosting your immune system.",
    image:
      "https://thumbs.dreamstime.com/b/papaya-isolated-white-background-29901233.jpg",
  },
];

var display_box = document.getElementById("display_box"); //getting display box

creat_card(fruits); //calling function to diplay cards



//********************( create_card function with for each loop )********************* */
function creat_card(fruits) {
  fruits.forEach(function (data, ind) {
    console.log(fruits);

    var card = `

<div class="rounded overflow-hidden shadow-lg card_size ">
<img class=" text-center img-size" src="${data.image}" alt="Mountain">
<div class="px-6 py-4">
  <div class="font-bold text-lg mb-2">${data.name.toUpperCase()}</div>
    <p class=" text-base" style=" font-size: 15px;">${data.desc}</p>
</div>
<div class="px-6 pt-4 pb-2">
<button class="bg-gray-300 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded" onclick="update(this)">
<i class="fa-solid fa-pencil"></i>
</button>

<button class="bg-gray-300 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded" onclick="del(${ind})">
<i class="fa-solid fa-trash-can"></i>
</button>

</div>
</div>`;

    display_box.innerHTML += card; //displaying newly created
  });
} //end of create_card() function


//*******************************( New Feeds function )***************************
// function new_feed(){

// var new_image= document.getElementById("new_image")
// var new_heading = document.getElementById("new_heading")
// var new_desc = document.getElementById("new_desc")

//   console.log(new_image);
//   console.log(new_heading.value);
//   console.log(new_desc.value);

//   var nwe_Object={}
//   fruits.push(nwe_Object)

//   console.log(fruits.length());
//     // nwe_Object.name = new_heading.value,

//   display_box.innerHTML = " ";
//  creat_card();
  
// }

//*******************************( description update function )***************************
function update(ele) {
  console.log(ele);

  //getting the decsription which is the 2nd child of grand parent of element
  var update_description =  ele.parentElement.parentElement.children[1].children[1];

  update_description.innerText = prompt("Desc");  //updating inner text
}

//*******************************( elment delete function )*******************************
function del(ele) {
  console.log(ele); // here we gate the direct index number of slected element(object)

  fruits.splice(ele, 1); //removing the user seleted element(object) through array.slice()

  console.log("element in array" + fruits);

  display_box.innerHTML = "";                //empty the display box to display updated array
  creat_card(fruits);                 // calling aggaing create_card() to update U.I
}                                           //end of delete function

function filter_with_name(){
  
  var name_search_field = document.getElementById('name_search_field')
  console.log(name_search_field.value);

if(name_search_field.value){
  var search_with_Name = fruits.filter((data,index)=>data.name.toLocaleLowerCase() == name_search_field.value.toLocaleLowerCase() )
  console.log(search_with_Name);

  display_box.innerHTML = '';    //deleting perivous data
  creat_card(search_with_Name); //calling function to diplay cards
}
else{
  alert('title feild is empty')
}
}

function sort_atoz(){
  const atoz = fruits.sort((a,b)=>a.name > b.name ? 1:-1);
  console.log(atoz);
  display_box.innerHTML = '';    //deleting perivous data
  creat_card(atoz); //calling function to diplay cards in alphabatic order
}

function sort_ztoa(){
  const ztoa = fruits.sort((a,b)=>a.name < b.name ? 1:-1);
  console.log(ztoa);
  display_box.innerHTML = '';    //deleting perivous data
  creat_card(ztoa); //calling function to diplay cards in revers alphabatic order
}

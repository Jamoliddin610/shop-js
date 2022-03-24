let pizzaArray = [{
  imgUrl: 'https://us.123rf.com/450wm/robertsre/robertsre1807/robertsre180700016/112647562-hot-dog-with-lettuce-and-fried-onion-on-white.jpg?ver=6',
  name: 'hotdog',
  price: 0.70,
  id: 1
},
{
  imgUrl: 'https://nevafood.ru/wp-content/uploads/2017/07/2120097.jpg',
  name: 'gambuger',
  price: 2.23,
  id: 2
},
{
  imgUrl: 'https://www.sevimli-lavash.uz/media/cdn/product/2021/06/03/IMG_20190824_123041_497.jpg.600x500_q85_crop.jpg',
  name: 'donar',
  price: 4.52,
  id: 3
},
{
  imgUrl: 'https://w7.pngwing.com/pngs/756/160/png-transparent-new-york-style-pizza-italian-cuisine-take-out-pasta-pizza.png',
  name: 'pizza',
  price: 10.78,
  id: 4
}
]
const menuList = document.querySelector(".menu-list");
const cartList = document.querySelector(".carts-list");
const subtotal = document.querySelector("#sub");
const taxPrise = document.querySelector("#tax");
const totalPrise = document.querySelector('#total');
let newPizzaArray = [];
let total = 0;
let tax = 0;
let overal = 0;

pizzaArray.forEach((item) => {
  let li = document.createElement("li");
  li.className = 'menu-items';
  li.innerHTML = `<div class="img-wrapper"><img src='${item.imgUrl}' alt="hotdog"></div>
              <div class="text-wrapper">
                <p class="item-name">
                  ${item.name}
                </p>
                <p class="item-price">$${item.price}</p>
            <button onclick='addItemArray(${item.id} )' > add to cart</button>
              </div>`
  menuList.appendChild(li)

});

function addItemArray(listId) {
  newPizzaArray.push(pizzaArray.filter((item) => item.id === listId)[0]);
  addCart(newPizzaArray);
}

function addCart(cartPizzaArray) {
  let arr = cartPizzaArray;
  let topArr = [];

  arr.forEach((item) => {
    if (arr != "") topArr.push(arr[0]);
    arr = arr.filter((el) => {
      return arr[0].id != el.id;
    });
  });

  let li = 0;
  let listArr = [];
  total = 0;
  tax = 0;
  overal = 0

  topArr.forEach((item) => {
    let count = cartPizzaArray.filter((element) => {
      return element.id == item.id;
    });
    li = `
    <li class="carts-items">
      <div class="img-wrapper"><img src='${item.imgUrl}' alt="hotdog"></div>
               <div class="text-wrapper">
                   <button class="counter">${count.length}</button>
                   <h3 class="item-name">${item.name}</h3>
                   <p class="item-price">$ ${item.price}</p>
                  <div class="btns-box">
                   <button onclick = "remove(${item.id})" class="btn-c">Remove</button>
                   <button   class="btn-c" onclick="addItemArray(${item.id})">Add</button>
                   </div>
               </div>
    </li>
    `;

    listArr.push(li);
    cartList.innerHTML = listArr.join("");
  });

  cartPizzaArray.forEach((item) => {
    total += item.price;
    tax = total/10
    overal = total + tax
  });

  subtotal.innerHTML = total.toFixed(2);
  taxPrise.innerHTML = tax.toFixed(2)
  totalPrise.innerHTML = overal.toFixed(2)
}

function remove(elId) {
  let count = 0;
  let a = [];

  newPizzaArray.forEach((element) => {
    if (element.id === elId && count === 0) {
      count++;
    } else {
      a.push(element);
    }
  });

  newPizzaArray = a;
  if (newPizzaArray.length === 0) {
    cartList.innerHTML = "";
  }
  addCart(newPizzaArray);
}

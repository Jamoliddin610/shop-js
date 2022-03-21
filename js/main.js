let arr = [{
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
let menulist = document.querySelector('.menu-list');
let cartList = document.querySelector(".carts-list");
let elSubTotal = document.querySelector("#sub");
let eltax = document.querySelector('#tax');
let elTotal = document.querySelector('#total');
let elbox = document.querySelector('.box__carts');
let elcounter = document.querySelector('#counter')

let total = 0;
let totalPers = 0;


for (let j = 0; j < arr.length; j++) {
  let li = document.createElement('li')
  li.className = 'menu-items';
  li.innerHTML = `<div class="img-wrapper"><img src='${arr[j].imgUrl}' alt="hotdog"></div>
              <div class="text-wrapper">
                <p class="item-name">
                  ${arr[j].name}
                </p>
                <p class="item-price">$${arr[j].price}</p>
            <button onclick='Add(${arr[j].id} )' > add to cart</button>
              </div>`
  menulist.appendChild(li)

}

let newPizzasArr = [];
function addItem(id) {
  for (let i = 0; i < arr.length; i++) {
    if (id == arr[i].id) {
      return arr[i]
    }

  }
}

function filterArr(e) {
  if (!newPizzasArr.length) {
    let newItem = e
    newItem.count = 1
    return newPizzasArr.push(newItem)
  }
  for (let k = 0; k < newPizzasArr.length; k++) {
    if (e.id === newPizzasArr[k].id) {
      return newPizzasArr[k].count = newPizzasArr[k].count + 1

    }

  }
  let newItem = e
  newItem.count = 1

  newPizzasArr.push(newItem)
}

function removeItems(e) {
  let newArr = [];
  for (let l = 0; l < newPizzasArr.length; l++) {
    if (e === newPizzasArr[l].id) {
      if (newPizzasArr[l].count > 1) {
        let food = newPizzasArr[l]
        food.count = food.count - 1
        newArr.push(food)
      }
    } else {
      newArr.push(newPizzasArr[l])
    }

  }
  newPizzasArr = newArr

  cardItems()
}
function Add(id) {
  let searchFood = addItem(id)

  filterArr(searchFood)

  sortItems();
}

function sortItems() {
  cartList.innerHTML = '';
  let totalPrice = 0;


  for (let i = 0; i < newPizzasArr.length; i++) {
    let li = document.createElement("li");
    li.className = "carts-items";
    li.innerHTML = `
    <div class="img-wrapper"><img src='${newPizzasArr[i].imgUrl}' alt="hotdog"></div>
              <div class="text-wrapper">
                  <button class="counter">${newPizzasArr[i].count}</button>
                  <h3 class="item-name">${newPizzasArr[i].name}</h3>
                  <p class="item-price">$ ${newPizzasArr[i].price}</p>
                  <div class="btns-box">
                  <button onclick = "removeItem(${i})"  class="btn-c">Remove</button>
                  <button   class="btn-c" onclick="addButton(${i})">Add</button>
                  </div>
              </div>
      `

    totalPrice += newPizzasArr[i].count * newPizzasArr[i].price
    cartList.appendChild(li);

  }

  totalPers= totalPrice /10 
  total = totalPrice +  totalPers

  eltax.textContent = totalPers.toFixed(2);
  elTotal.textContent = total.toFixed(2);
  elSubTotal.textContent = totalPrice.toFixed(2);


}



function addButton(e) {
  newPizzasArr[e].count = newPizzasArr[e].count + 1

  sortItems()
}

function removeItem(e) {
  let searchFood = newPizzasArr[e]
  if (searchFood.count > 1) {
    searchFood.count = searchFood.count - 1
    return sortItems()
  }

  let newArr = []

  for (let i = 0; i < newPizzasArr.length; i++) {
    if (newPizzasArr[i].id !== searchFood.id) {
      newArr.push(newPizzasArr[i])
    }
  }

  newPizzasArr = newArr

  sortItems()
}

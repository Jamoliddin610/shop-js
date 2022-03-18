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

let totalPrice = 0;
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
            <button onclick='addItem(${arr[j].id} )' > add to cart</button>
              </div>`
  menulist.appendChild(li)

}

let newPizzasArr = [];
function addItem(id) {
  for (let i = 0; i < arr.length; i++) {
    if (id == arr[i].id) {
      newPizzasArr.push(arr[i]);

      sortItems(newPizzasArr)


    }
  }


  elbox.classList.add('scrl')

  for (let i = 0; i < newPizzasArr.length; i++) {
    if (i == newPizzasArr.length - 1) {
      let li = document.createElement("li");
      li.className = "carts-items";
      li.innerHTML = `
      <div class="img-wrapper"><img src='${newPizzasArr[i].imgUrl}' alt="hotdog"></div>
              <div class="text-wrapper">
                <p class="item-name">
                  ${newPizzasArr[i].name}
                </p>
                <p class="item-price">$${newPizzasArr[i].price}</p>
            <button class="delate" id="${newPizzasArr[i].id}" onclick='removeItem(${i})' >-</button>
            <span class="counter" id="counter">0</span>

              </div>
    `;
      totalPrice += newPizzasArr[i].price;
      totalPers = totalPrice / 10
      total = totalPrice + totalPers
      elSubTotal.textContent = totalPrice.toFixed(2);
      eltax.textContent = totalPers.toFixed(2)
      elTotal.textContent = total.toFixed(2);
      cartList.appendChild(li);
    }
  }
}

function sortItems(e) {
  let b = [];
  let c = e.length
  for (let i = 0; i < c; i++) {
    let k = [];
    let f = [];
    for (let j = 0; j < e.length; j++) {
      if (e[0].id == e[j].id) {
        k.push(e[j]);
      } else {
        f.push(e[j])
      }
    }
    e = f;
    if (k != "") {
      b.push(k)
    }
  }
  console.log(b);
  for (let i = 0; i < newPizzasArr.length; i++) {
    for (let h = 0; h < b.length; h++) {
      if (newPizzasArr[i].id == b[h][h].id) {
        elcounter.innerHTML=b[h].length;
      }else{
        console.log('not');
      }
    }
  } 
}
function removeItem(index) {
  let newArrRemove = [];

  for (let i = 0; i < newPizzasArr.length; i++) {
    if (index != i) {
      newArrRemove.push(newPizzasArr[i]);
    }
  }

  newPizzasArr = newArrRemove;

  cartList.innerHTML = "";
  totalPrice = 0;
  totalPers = 0;
  total = 0;

  for (let i = 0; i < newPizzasArr.length; i++) {
    let li = document.createElement("li");
    li.className = "carts-items";
    li.innerHTML = `
      <div class="img-wrapper"><img src='${newPizzasArr[i].imgUrl}' alt="hotdog"></div>
              <div class="text-wrapper">
                <p class="item-name">
                  ${newPizzasArr[i].name}
                </p>
                <p class="item-price">$${newPizzasArr[i].price}</p>
            <button class="delate" id="${newPizzasArr[i].id}" onclick='removeItem(${i})'>-</button>
              </div>
    `;
    totalPrice += newPizzasArr[i].price;
    totalPers = totalPrice / 10
    total = totalPrice + totalPers
    elSubTotal.textContent = totalPrice.toFixed(2);
    eltax.textContent = totalPers.toFixed(2)
    elTotal.textContent = total.toFixed(2);
    cartList.appendChild(li);
  }
  if (newPizzasArr.length == 0) {
    totalPrice = 0;
    totalPers = 0;
    total = 0;
    elSubTotal.textContent = totalPrice.toFixed(2);
    eltax.textContent = totalPers.toFixed(2)
    elTotal.textContent = total.toFixed(2);

  }
}
console.log(newPizzasArr);



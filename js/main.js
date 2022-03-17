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
let menu = document.querySelector('.menu-list')
let newArr = []

for (let j = 0; j < arr.length; j++) {
    let li = document.createElement('li')
    li.className = 'menu-items';
    li.innerHTML = `<div class="img-wrapper"><img src='${arr[j].imgUrl}' alt="hotdog"></div>
              <div class="text-wrapper">
                <p class="item-name">
                  ${arr[j].name}
                </p>
                <p class="item-price">$${arr[j].price}</p>
            <button id="${arr[j].id}" > add to cart</button>

              </div>`
    menu.appendChild(li)
}

let btns = document.querySelectorAll('button')
let cartlist = document.querySelector('.carts-list')
let box_carts = document.querySelector('.box__carts') 
let sub = document.getElementById('sub');
let tax = document.getElementById('tax');
let total = document.getElementById('total')
let count = 0;
let pers =  0;
let totalprice = 0;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let li = document.createElement('li')
        li.className = 'carts-items';
        li.innerHTML = `<div class="img-wrapper"><img src='${arr[i].imgUrl}' alt="hotdog"></div>
          <div class="text-wrapper">
            <p class="item-name">
              ${arr[i].name}
            </p>
            <p class="item-price">$${arr[i].price}</p>
          </div>  
          <button id="delate" class='del'>-</button>`
        cartlist.appendChild(li)
        box_carts.classList.add('scrl');
        newArr.push(arr[i])
        count+=arr[i].price
        pers=count/10
        totalprice= count+pers
        sub.textContent=count.toFixed(2)
        tax.textContent=pers.toFixed(2)
        total.textContent=totalprice.toFixed(2)
    })
}

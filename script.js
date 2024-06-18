// products carousel start

/* -- Carousel Navigation start -- */

let activeIndex = 0;

let height =  '600';
let imageHeight = '';
let titleHeight = ''

let currentSlide = '';

// changing height of the col based on the article

const productContainer = document.querySelector('#productItems')

function resize() {
  productContainer.style.height = height + 'px';
}



const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  imageHeight =  nextSlide.getElementsByClassName('article-image-section')[0].offsetHeight;
  titleHeight = nextSlide.getElementsByClassName('article-title-section')[0].offsetHeight;
  height = imageHeight + titleHeight;
  console.log(height)
  resize();
  currentSlide.dataset.status = "inactive";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    imageHeight = nextSlide.getElementsByClassName('article-image-section')[0].offsetHeight;
    titleHeight = nextSlide.getElementsByClassName('article-title-section')[0].offsetHeight;
    console.log(nextSlide)
    
    height = imageHeight + titleHeight;
    console.log(height)
    resize();
  currentSlide.dataset.status = "inactive";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

// carousel navigation end

// objects start
const productItems = [
  {
    productName: "Wooden Airplane",
    age: "Toddlers",
    biography:
      'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.',
    dataIndex: "0",
    status: "active",
    carousel: `<div id="carouselExampleOne" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="products/airplane/planeOne.png" class="d-block w-100 img-fluid"/>
    </div>
    <div class="carousel-item">
      <img src="products/airplane/planeTwo.png" class="d-block w-100 img-fluid" />
    </div>
    <div class="carousel-item">
      <img src="products/airplane/planeThree.png" class="d-block w-100 img-fluid"/>
    </div>
  </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleOne" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleOne" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>`
    ,
    price: "$18.99",
  },
  {
    productName: "Wooden Train Set",
    age: "3+",
    biography:
      "Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.",
    dataIndex: "1",
    status: "inactive",
    carousel: `<div id="carouselExampleTwo" class="carousel slide">
    <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="products/train/trainOne.png" class="d-block w-100 img-fluid" />
                  </div>
                  <div class="carousel-item">
                    <img src="products/train/trainTwo.png" class="d-block w-100 img-fluid" />
                  </div>
                  <div class="carousel-item">
                    <img src="products/train/trainThree.png" class="d-block w-100 img-fluid"/>
                  </div>
                  <div class="carousel-item">
                    <img src="products/train/trainFour.png" class="d-block w-100 img-fluid"/>
                  </div>
                  <div class="carousel-item">
                    <img src="products/train/trainFive.png" class="d-block w-100 img-fluid"/>
                  </div>
                  <div class="carousel-item">
                    <img src="products/train/trainSix.png" class="d-block w-100 img-fluid"/>
                  </div>
                  <div class="carousel-item">
                    <img src="products/train/trainSeven.png" class="d-block w-100 img-fluid"/>
                  </div>
                </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleTwo" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleTwo" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>`,
    price: "$29.99",
  },
  {
    productName: "Wooden Boat",
    age: "All Ages",
    biography:
      ' Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.',
    dataIndex: "2",
    status: "inactive",
    carousel: `<div id="carouselExampleThree" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="products/boat/boatOne.png" class="d-block w-100 img-fluid"/>
    </div>
    <div class="carousel-item">
      <img src="products/boat/boatTwo.png" class="d-block w-100 img-fluid" />
    </div>
  </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleThree" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleThree" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>`,
    price: "$14.99",
  },
  {
    productName: "Wooden Block Set",
    age: "3+",
    biography:
      "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).",
    dataIndex: "3",
    status: "inactive",
    carousel: `<div id="carouselExampleFour" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="products/block/blockOne.png" class="d-block w-100 img-fluid"/>
    </div>
    <div class="carousel-item">
      <img src="products/block/blockTwo.png" class="d-block w-100 img-fluid" />
    </div>
    <div class="carousel-item">
      <img src="products/block/blockFive.png" class="d-block w-100 img-fluid" />
    </div>
  </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFour" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFour" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>`,
    price: "$29.99",
  },
  {
    productName: "Wooden Car",
    age: "All Ages",
    biography:
      "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.",
    dataIndex: "4",
    status: "inactive",
    carousel: `<div id="carouselExampleFive" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="products/car/carOne.png" class="d-block w-100 img-fluid"/>
    </div>
    <div class="carousel-item">
      <img src="products/car/carTwo.png" class="d-block w-100 img-fluid" />
    </div>
    <div class="carousel-item">
      <img src="products/car/carThree.png" class="d-block w-100 img-fluid" />
    </div>
    <div class="carousel-item">
      <img src="products/car/carFour.png" class="d-block w-100 img-fluid" />
    </div>
  </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFive" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFive" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
   </div>`,
    price: "$19.99",
  },
];

function generateProductItems() {
  const productContainer = document.querySelector("#productItems");

  productItems.forEach((product) => {
    const products = document.createElement("article");
    products.classList.add("skibidi");
    products.dataset.index = product.dataIndex;
    products.dataset.status = product.status;
    products.innerHTML = `
    <div class="article-image-section article-section first-image">
    ${product.carousel}
            </div>
            <div class="article-description-section article-section geliat">
             <p class="text-center m-2 font-sizeee">${product.biography} <br> ${product.price}</p>
             <div class="row d-flex align-items-center justify-content-center">
             <div class="cont d-flex justify-content-center align-items-center">
               <div class="col-4 d-flex justify-content-center align-items-center w-100">
                 <button class="products-btn border-radius-2 geliat text-center addToCartBtn">
                   BUY NOW
                 </button>
               </div>
             </div>
           </div>
         </div>
            </div>
            <div class="article-title-section article-section inaptly">
              <h2>${product.productName}<h2>
            </div>
            <div class="article-nav-section article-section">
              <div class="row">
                <button class="article-nav-button col-6" type="button" onclick="handleLeftClick()">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO2UTUtCQRSGH1oU9mEkhiWiRZBprfrTblqVCiJiX4uoqAgiog8pK+pXFAPvwOFyQZi5S9/dfRbPmTn3nIFpMs48cADsJ3gF6ADlWPkA+APugRnxKvAi3gqV54C+JD9Aw8hfxa+BQoh8Ttf38qZ4DXgTvwJWQuXtFPkGMBI/B/Kx8l8j3wY+xc+ApRD5LHBk5LvideBL/DRr+Y6RnwCLofJDI98Td1PzLd7TVJHF6ZspBY5DT2+LdFJmvp5oUVD/fXJma8fAlpmgcewE2adhKNkHsGl2IHrBfBbUDid7l9xvcfQT4ZMHLiR7Ni9mVd+O3wDFmCLLwKVkT8C6+BrwIH4HrMYUKQC3knUNdzd6FHc7FJWiJP5f+JRUNMmnYWL+AX8/XQeFser+AAAAAElFTkSuQmCC">
                </button>
                <button class="article-nav-button col-6" type="button" onclick="handleRightClick()">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nO3VXSsEYRjG8V9O2F1aJFtCZK3yduBLO3FEhPWShCQ5EErylvcvsZq61batk5nZs70O/9P8r3memfsZukmRMWxivIWvYA1FGbOKBh4wGawH18H3s5aUcRayF8wEn8Vb8COUspachuy1peQ9eB2FLCXJEx42lVSD15pKdvMoOQjZJ+Y7UVLEXsi+sBB8Dh/Bd9CXtaQesm8sdaKkFxsh+8Fym5LtLCWF2O/WVdTyWEWxaYuS97AYvJrHZ1v650tKpvwp+HHawSvjpM0sTOAxeHK9P88jYzzOqUZM+0Aa+SDOQ/KM6eAV3Aa/xFAaeXLTRUjum47tUdwEv8KwlFkPyV38G/6ylYc8yVTIKm14Uj6SRd6N1vwC8yldCRVxg7QAAAAASUVORK5CYII=" />
                </button>
              </div>
            </div> `;

    productContainer.appendChild(products);
  });
}

function getSlideItems() {
  currentSlide = document.querySelector(`[data-index="0"]`)
 imageHeight = currentSlide.getElementsByClassName('first-image')[0].offsetHeight;
 console.log(imageHeight)
 titleHeight = currentSlide.getElementsByClassName('article-title-section')[0].offsetHeight;
 console.log(titleHeight)
 height = titleHeight + imageHeight;
 resize();
}


// objects end

//cart

document.addEventListener("DOMContentLoaded", function () {
  generateProductItems();
  ready();
  loadCartItems();
  setTimeout(() => {
    getSlideItems()
  }, 100);
});

let ul = document.querySelector('#list');
let cartItemsHTML = localStorage.getItem('cartItems');

function loadCartItems() {
  if (cartItemsHTML) {
      ul.innerHTML = cartItemsHTML;

      // Reattach event listeners to new remove buttons
      let removeFromCartBtns = document.getElementsByClassName("remove");
      for (let i = 0; i < removeFromCartBtns.length; i++) {
          let button = removeFromCartBtns[i];
          button.addEventListener("click", removeFromCart);
      }

      let quantityInputs = document.getElementsByClassName("cart-quantity-input");
      for (let i = 0; i < quantityInputs.length; i++) {
          let input = quantityInputs[i];
          input.addEventListener("change", quantityChanged);
      }

      updateCartTotal(); // Update cart total after loading items
      console.log('Loaded cart items from localStorage:', cartItemsHTML);
  } else {
    console.log('you got nothing jit')
  }
}


const cartBtn = document.querySelector("#cart-btn");
const cartMenu = document.querySelector("#cart-menu");
const closeBtn = document.querySelector("#close-icon");
function showCart() {
  cartMenu.classList.add("show");
}

function hideCart() {
  cartMenu.classList.remove("show");
}
closeBtn.addEventListener("click", hideCart);
cartBtn.addEventListener("click", showCart);



function ready() {
  let addToCartButtons = document.getElementsByClassName("addToCartBtn");

  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  let removeFromCartBtns = document.getElementsByClassName("remove");

  for (let i = 0; i < removeFromCartBtns.length; i++) {
    let button = removeFromCartBtns[i];
    button.addEventListener("click", removeFromCart);
  }

  let quantityInputs = document.getElementsByClassName("cart-quantity-input");

  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.closest(".skibidi");
  let productNumber = shopItem.dataset.index;
  let product = productItems[productNumber];

  addToCart(product);
  localStorage.setItem('cartItems', ul.innerHTML);
}

function addToCart(product) {
  let cartList = document.querySelector("#list");
  console.log(cartList);

  let cartItem = document.createElement("li");
  let cartItemsNames = document.getElementsByClassName('cart-item-title');
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == product.productName ) {
      alert('This item is already in your cart.')
      return
    }
  }
  cartItem.innerHTML = ` <div class="item-details">
    <h5 class="m-0 cart-item-title">${product.productName}</h5>
    <input class="cart-quantity-input" type="number" value="1" min="1" max="99">
    <box-icon name='x' class="x-icon remove"></box-icon>
  </div>
  <div class="item-price">
    <p>${product.price}</p>
  </div> `;

  cartList.appendChild(cartItem);
  cartItem
    .getElementsByClassName("remove")[0]
    .addEventListener("click", removeFromCart);
    cartItem
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("click", quantityChanged);
  updateCartTotal();
}

function quantityChanged(event) {
  console.log('changed')
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1 
  }
  input.setAttribute('value', input.value);
  updateCartTotal();
  localStorage.setItem('cartItems', ul.innerHTML);
}

function removeFromCart() {
  let button = event.target;
  let parent = button.closest("li");
  parent.remove();
  updateCartTotal();
  localStorage.setItem('cartItems', ul.innerHTML);
}

function updateCartTotal() {
  let cartItemContainer = document.querySelector('#list');
  let cartItems = cartItemContainer.getElementsByTagName('li');
  let total = 0;
  console.log(cartItems)
  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i];
    console.log(cartItem)
    let priceElement = cartItem.querySelectorAll('.item-price')[0];
    let quantityElement = cartItem.querySelectorAll('.cart-quantity-input')[0];
    console.log(priceElement)
    let price = parseFloat(priceElement.getElementsByTagName('p')[0].innerText.replace("$", ''));
    let quantity = quantityElement.value;
    total = total + (price* quantity)
  }
  total = Math.round(total * 100) / 100
  document.querySelector('.price-total').innerText = '$' + total;
}


// products carousel end

// testimonials start

let testimonialsArray = ["Little Bird Toy Company makes the most charming wooden toys! Each piece feels crafted with love and attention to detail. My kids absolutely adore their toys. — Oprah Winfrey",

"I love supporting local businesses, especially when their products are as wonderful as those from Little Bird Toy Company. The wooden toys are not only beautiful but also durable. — Lebron James",

"Shopping at Little Bird Toy Company is always a delightful experience. The staff is friendly and knowledgeable, and they genuinely care about their customers. — Elon Musk",

"As a parent, safety is my top concern when choosing toys for my children. Little Bird Toy Company's products are made from high-quality wood and are completely safe for my little ones. — Michelle Obama",

"Little Bird Toy Company has become my go-to for gifts. Whether it's a birthday or holiday, I know I can find a unique and special toy that will bring joy to any child. — Serena Williams",

"I appreciate the eco-friendly approach of Little Bird Toy Company. Their commitment to using sustainable materials makes me feel good about purchasing their toys. — Emma Watson",

"The craftsmanship of Little Bird Toy Company's toys is outstanding. You can tell each piece is made with precision and care. — Theo Von"];

let randomNumber = Math.floor(Math.random()*testimonialsArray.length); //generates a random integer for how many quotes put and assigning it to the variable random number

document.getElementById('testimonial').textContent = '“' + testimonialsArray[randomNumber].split(' — ')[0] + ' ” ' + testimonialsArray[randomNumber].split(' — ')[1];

// testimonials end
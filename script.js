// products carousel start

/* -- Carousel Navigation start -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "inactive";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "inactive";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}


// carousel navigation end

// objects start
const productItems = [
  {
    productName: 'Wooden Airplane',
    age: 'Toddlers',
    biography: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.' ,
    dataIndex: '0',
    status: 'active'
  } , 
  {
    productName: 'Wooden Train Set',
    age: '3+', 
    biography: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.' , 
    dataIndex: '1',
    status: 'inactive'
  } ,
  {
    productName: 'Wooden Boat',
    age: 'All Ages' ,
    biography: ' Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.' ,
    dataIndex: '2',
    status: 'inactive'
  } ,
  {
    productName: 'Wooden Block Set',
    age: '3+',
    biography: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).' ,
    dataIndex: '3',
    status: 'inactive'
  } ,
  {
    productName: 'Wooden Car',
    age: 'All Ages',
    biography: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.', 
    dataIndex: '4',
    status: 'inactive'
  }
]

function generateProductItems() {
  const productContainer = document.querySelector('#productItems')

  productItems.forEach(product => {
    const products = document.createElement('article')
    products.dataset.index = product.dataIndex;
    products.dataset.status = product.status
    products.innerHTML = `
    <div class="article-image-section article-section">
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="..." class="d-block w-100 img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100 img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100 img-fluid" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="article-description-section article-section geliat">
              ${product.biography}
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
            </div>
    
    `

    productContainer.appendChild(products);

  })
}



// objects end

// products carousel end

window.onload = generateProductItems;
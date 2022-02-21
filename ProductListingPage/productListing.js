const shirtDataList = [
  {
    productImg:
      "https://www.stockvault.net/data/2010/11/30/116322/preview16.jpg",
    price: 599,
    productName: "HighLighter",
  },
  {
    productImg:
      "https://www.stockvault.net/data/2008/07/06/105811/preview16.jpg",
    price: 599,
    productName: "HighLighter",
  },
  {
    productImg:
      "https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911330_960_720.jpg",
    price: 599,
    productName: "HighLighter",
  },
  {
    productImg:
      "https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg",
    price: 599,
    productName: "HighLighter",
  },
];

const tshirtDataList = [
  {
    productImg:
      "https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 599,
    productName: "HighLighter",
  },
  {
    productImg:
      "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 599,
    productName: "HighLighter",
  },
  {
    productImg:
      "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 599,
    productName: "HighLighter",
  },
  {
    productImg:
      "https://www.stockvault.net/data/2010/11/30/116322/preview16.jpg",
    price: 599,
    productName: "HighLighter",
  },
];
const jeansDataList = [
    {
      productImg:
        "../images/jean1.jpg",
      price: 599,
      productName: "HighLighter",
    },
    {
      productImg:
        "../images/jean2.jpg",
      price: 599,
      productName: "HighLighter",
    },
    {
      productImg:
        "../images/jean3.jpg",
      price: 599,
      productName: "HighLighter",
    },
    {
        productImg:
          "../images/jean4.png",
        price: 599,
        productName: "HighLighter",
      },
      {
        productImg:
          "../images/jean5.jpg",
        price: 599,
        productName: "HighLighter",
      },
      {
        productImg:
          "../images/jean6.jpg",
        price: 599,
        productName: "HighLighter",
      },
      {
        productImg:
          "../images/jean7.jpg",
        price: 599,
        productName: "HighLighter",
      },
      {
        productImg:
          "../images/jean8.jpg",
        price: 599,
        productName: "HighLighter",
      },
];
const trouserDataList = [
    {
      productImg:
        "../images/tro1.jpeg",
      price: 599,
      productName: "HighLighter",
    },
    {
      productImg:
        "../images/tro2.jpg",
      price: 599,
      productName: "HighLighter",
    },
    {
      productImg:
        "../images/tro3.jpg",
      price: 599,
      productName: "HighLighter",
    },
    {
        productImg:
          "../images/tro4.jpeg",
        price: 599,
        productName: "HighLighter",
      },
      {
        productImg:
          "../images/tro5.jpeg",
        price: 599,
        productName: "HighLighter",
      },
      {
        productImg:
          "../images/tro6jpg.jpg",
        price: 599,
        productName: "HighLighter",
      },
      {
        productImg:
          "../images/tro7.jpg",
        price: 599,
        productName: "HighLighter",
      },
];
var productList = [];

function buildProductItem(productItem) {
  return `<div class="card">
      <div class="img-div">
        <img src=${productItem.productImg} style="height:100%;object-fit: fill;"/>
        <button id="info-icon" class="btn-icon btn-info">
          <i><span class="material-icons-outlined"> info </span></i>
        </button>
        <div id="overlay-info" class="overlay-info">
          <h3>Text Overlay</h3>
        </div>
        <div>
          <button id="btn-fav-card" class="btn-fav-card">
            <svg>
              <use xlink:href="#Layer_1" />
            </svg>
          </button>
        </div>
      </div>
      <div class="bottom-div">
        <div class="pdt-name-price">
          <h3 class="pdt-name">${productItem.productName}</h3>
          <p class="price">${productItem.price}</p>
        </div>
        <div class="add-to-cart">
          <button class="btn-icon btn-cart">
            <i
              ><span class="material-icons-outlined" id="cart-icon">
                add_shopping_cart
              </span></i
            >
          </button>
        </div>
      </div>
    </div>`;
}

window.onload = function () {
    var url = document.location.href;
    category = url.split('?')[1].split('=')[1];
    // category = params[0];
    switch (category) {
        case "shirts":
          productList = shirtDataList;
          break;
        case "tshirts":
          productList = tshirtDataList;
          break;
        case "jeans":
            productList = jeansDataList;
          break;
        case "shorts":
            productList = trouserDataList;
          break;
        default:
            productList = [...shirtDataList, ...tshirtDataList, ...jeansDataList,...trouserDataList]
          break;
      }
  var productListComponent = document.getElementById("product-list");
  productListComponent.innerHTML = "";
  productList.forEach(
    (productItem, index) =>
      (productListComponent.innerHTML += buildProductItem(productItem))
  );
};
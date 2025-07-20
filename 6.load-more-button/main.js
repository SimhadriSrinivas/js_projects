const productContainer = document.querySelector(".product-container");
const loadMoreButton = document.querySelector(".load-more-button");

let currentStep = 0;

async function fetchProducts(getCurrentStep) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        getCurrentStep === 0 ? 0 : getCurrentStep * 10
      }`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log(result);
    if (result && result.products) displayProducts(result.products);
  } catch (e) {
    console.error("Error fetching products:", e);
  }
}

function displayProducts(productsList) {
  console.log(productsList);
  productsList.forEach((productitem) => {
    const productItemWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("p");

    productTitle.textContent = productitem.title;
    productDescription.textContent = productitem.description;
    productThumbnail.src = productitem.thumbnail;
    productPrice.textContent = productitem.price;

    productItemWrapper.appendChild(productThumbnail);
    productItemWrapper.appendChild(productTitle);
    productItemWrapper.appendChild(productPrice);
    productItemWrapper.appendChild(productDescription);
  });

  if (productContainer.children.length === 100) {
    loadMoreButton.SetAttribute("disabled", "true");
  }
  console.log(productContainer.children.length);
}

fetchProducts(currentStep);

loadMoreButton.addEventListener("click", () => {
    currentStep += 1
  fetchProducts(currentStep);
});

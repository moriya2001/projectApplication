const listProductHTML = document.querySelector('.listProduct');
let productSelect = JSON.parse(localStorage.getItem('productSelect')) || [];

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const productName = params.get('name');
    const productPrice = params.get('price');
    const productImage = params.get('image');
    const productTitle = params.get('title');

    console.log(productImage)

    const selectItem = document.getElementById('product-info');
    selectItem.innerHTML = `
<div class="card" style="width: 18rem;">
<a href="#">
    <img src="${productImage}" class="card-img-top" alt="${productName}">
</a>
<div class="card-footer bg-light">
   <div class="card-body text-center">
    <h10 class="card-title">
        <a href="#" class="text-dark">${productName}</a>
    </h10>
    <p class="card-text">${productTitle}</p>
    <p class="card-text">$${productPrice}</p>
    </div>
</div>
<button><a href="./HTMLPage1.html?id=${productId}&name=${encodeURIComponent(productName)}&price=${productPrice}&image=${productImage}&quantity=${1}">הוסף לסל</a></button>
</div>
`;

    document.body.appendChild(selectItem)
    const purchaseButton = document.getElementById('purchaseButton');


});

let myArray = JSON.parse(localStorage.getItem('myArray')) || [];


document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const productName = params.get('name');
    const productPrice = params.get('price');
    const productImage = params.get('image');
    const productQuantity = params.get('quantity');

    console.log(productQuantity)
   
    addToCart(productName, parseFloat(productPrice), productImage, productQuantity);
})


function addToCart(item, price, image, quantity) {
    console.log("item", item)
    let retrievedArray = JSON.parse(localStorage.getItem('myArray'));
    var itemIndex = retrievedArray.findIndex(cartItem => cartItem.name === item);
    if (itemIndex !== -1) {
        retrievedArray[itemIndex].quantity++;
    } else {
        myArray.push({ name: item, price: price, quantity: quantity, image: image });
        localStorage.setItem('myArray', JSON.stringify(myArray));
    }
    renderCart();
}

function removeFromCart(index) {
    myArray.splice(index, 1);
    localStorage.setItem('myArray', JSON.stringify(myArray));
    renderCart();
}

function changeQuantity(index, newQuantity) {
    myArray[index].quantity = newQuantity;
    renderCart();
}

function calculateTotal() {
    var total = 0;
    myArray.forEach(function (item) {
        total += item.price * item.quantity;
        console.log("item.quantity", item)
    });
    return total;
}




function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function submitDetails() {
    var name = document.getElementById("name").value;
    var creditCard = document.getElementById("creditCard").value;
    var tokef = document.getElementById("tokef").value;
    var tokef2 = document.getElementById("tokef2").value;
    var idown = document.getElementById("idown").value;

    if (name !== "" && creditCard !== "" && tokef !== "" && tokef2 !== "" && idown !== "") {
        alert("The pay is success");
        closeModal();
        document.getElementById("name").value = "";
        document.getElementById("creditCard").value = "";
        document.getElementById("tokef").value = "";
        document.getElementById("tokef2").value = "";
        document.getElementById("idown").value = "";

    } else {
        alert("pleas full all the details.");
    }
}



function renderCart() {
    document.getElementById("rend").style.display = "none";
    document.getElementById("topay").style.display = "inline";
    var cartDiv = document.getElementById('cart');
    var totalDiv = document.getElementById('total');
    cartDiv.innerHTML = '';
    totalDiv.textContent = '';
    if (myArray.length === 0) {
        cartDiv.innerHTML = 'אין מוצרים להצגה ';
    } else {
        myArray.forEach(function (item, index) {
            var itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            var itemImg = document.createElement('img');
            // itemImg.src = item.image;
            itemImg.src = `${item.image}`
            console.log("item.image", item.image)
            itemDiv.appendChild(itemImg);
            var itemName = document.createElement('span');
            itemName.textContent = item.name;
            itemDiv.appendChild(itemName);
            var itemPrice = document.createElement('span');
            itemPrice.textContent = 'price: ' + item.price + '$';
            itemDiv.appendChild(itemPrice);
            var quantityDiv = document.createElement('div');
            quantityDiv.classList.add('quantity');
            var quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = item.quantity;
            quantityInput.min = '1';
            quantityInput.addEventListener('input', function () {
                changeQuantity(index, parseInt(this.value));
            });
            quantityDiv.appendChild(quantityInput);
            var removeButton = document.createElement('button');
            removeButton.textContent = 'remove';
            removeButton.addEventListener('click', function () {
                removeFromCart(index);
            });
            quantityDiv.appendChild(removeButton);
            itemDiv.appendChild(quantityDiv);
            cartDiv.appendChild(itemDiv);
        });
        var totalAmount = calculateTotal();
        totalDiv.textContent = 'sum: ' + totalAmount + '$';
    }
}

function validateName() {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    if (!isNaN(parseInt(name))) {
        nameError.innerText = "this filed contains only letters";
    } else {
        nameError.innerText = "";
    }
}
function validatecreditCard() {
    var creditCard = document.getElementById("creditCard").value;
    var creditCardError = document.getElementById("creditCardError");
    if (typeof creditCard === 'string') {
        creditCardError.innerText = "this filed contains only nums";
    } else {
        creditCardError.innerText = "";
    }
}
function validatetokef() {
    var tokef = document.getElementById("tokef").value;
    var tokefError = document.getElementById("tokefError");
    if (typeof tokef === 'string') {
        tokefError.innerText = "this filed contains only nums";
    } else {
        tokefError.innerText = "";
    }
}
function validatetokef2() {
    var tokef2 = document.getElementById("tokef2").value;
    var tokef2Error = document.getElementById("tokef2Error");
    if (typeof tokef2 === 'string') {
        tokef2Error.innerText = "this filed contains only nums";
    } else {
        tokef2Error.innerText = "";
    }
}
function validateidown() {
    var idown = document.getElementById("idown").value;
    var idownError = document.getElementById("idownError");
    if (typeof idown === 'string') {
        idownError.innerText = "this filed contains only nums";
    } else {
        idownError.innerText = "";
    }
}
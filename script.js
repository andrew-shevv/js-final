const productsGrid = document.querySelector('.products');

const productsData = JSON.parse(dataProducts);

for (let i = 0; i < productsData.length; i++) {
    const product = document.createElement('div');
    product.classList.add('product');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.src = productsData[i].image.src;
    productImg.setAttribute('alt', productsData[i].image.alt);
    
    const productCart = document.createElement('div');
    productCart.classList.add('product__cart', 'disable');

    const productButton = document.createElement('button');
    productButton.classList.add('product__button', 'button', 'flex');
    productButton.type = 'button';

    const buttonImg = document.createElement('img');
    buttonImg.classList.add('button__img');
    buttonImg.src = 'img/Cart.svg';
    buttonImg.setAttribute('alt', 'Cart');

    const buttonSpan = document.createElement('span');
    buttonSpan.classList.add('button__span');
    buttonSpan.textContent = 'Add to Cart';

    const productContent = document.createElement('div');
    productContent.classList.add('product__content');

    const productName = document.createElement('a');
    productName.classList.add('product__name');
    productName.href = '#';
    productName.textContent = productsData[i].title;

    const productDescription = document.createElement('p');
    productDescription.classList.add('product__description');
    productDescription.textContent = productsData[i].description;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = `$${productsData[i].price}`;

    productsGrid.appendChild(product);
    product.appendChild(productImg);
    product.appendChild(productCart);
    productCart.appendChild(productButton);
    productButton.appendChild(buttonImg);
    productButton.appendChild(buttonSpan);
    product.appendChild(productContent);
    productContent.appendChild(productName);
    productContent.appendChild(productDescription);
    productContent.appendChild(productPrice);
}

const product = document.querySelectorAll('.product');
product.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.querySelector('.product__cart').classList.remove('disable');
    });
    item.addEventListener('mouseout', function() {
        this.querySelector('.product__cart').classList.add('disable');
    });
});

const buttonAddToCart = document.querySelectorAll('.product__button');
buttonAddToCart.forEach((button, i) => {
    button.addEventListener('click', function() {
        const cartGrid = document.querySelector('.items');
        cartGrid.closest('.cart').classList.remove('disable');

        button.disabled = true;
        button.querySelector('span').textContent = 'Added to Cart!';

        const item = document.createElement('div');
        item.classList.add('item', 'flex');

        const itemImg = document.createElement('img');
        itemImg.classList.add('item__img');
        itemImg.src = productsData[i].image.src;
        itemImg.setAttribute('alt', productsData[i].image.alt);

        const itemContent = document.createElement('div');
        itemContent.classList.add('item__content', 'flex');

        const itemName = document.createElement('a');
        itemName.classList.add('item__name');
        itemName.href = '#';
        itemName.textContent = productsData[i].title;

        const itemPrice = document.createElement('p');
        const itemVal = document.createElement('span');
        itemPrice.classList.add('item__price');
        itemVal.classList.add('item__value');
        itemPrice.textContent = `Price: `;
        itemVal.textContent = `$${productsData[i].price}`;

        const itemQuantityTxt = document.createElement('span');
        itemQuantityTxt.classList.add('item__quantity-txt');
        itemQuantityTxt.textContent = 'Quantity: ';

        const itemQuantity = document.createElement('input');
        itemQuantity.classList.add('item__quantity');
        itemQuantity.type = 'number';
        itemQuantity.min = '1';
        itemQuantity.value = '1';

        const itemCross = document.createElement('img');
        itemCross.classList.add('item__cross');
        itemCross.src = 'img/cross.svg';
        itemCross.setAttribute('alt', 'cross');

        cartGrid.appendChild(item);
        item.appendChild(itemImg);
        item.appendChild(itemContent);
        itemContent.appendChild(itemName);
        itemContent.appendChild(itemPrice);
        itemPrice.appendChild(itemVal);
        itemContent.appendChild(itemQuantityTxt);
        itemQuantityTxt.appendChild(itemQuantity);
        item.appendChild(itemCross);

        itemCross.addEventListener('click', function() {
            item.remove();
            button.disabled = false;
            button.querySelector('span').textContent = 'Add to Cart';
            if (cartGrid.childElementCount == 0) {
                cartGrid.closest('.cart').classList.add('disable');
            }
        });
    });
});


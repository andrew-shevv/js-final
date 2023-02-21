const productsGrid = document.querySelector('.products');

const productsData = JSON.parse(dataProducts);

for (let i = 0; i < productsData.length; i++) {
    const product = document.createElement('div');
    product.classList.add('product');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.src = productsData[i].image.src;
    productImg.setAttribute('alt', productsData[i].image.alt);

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
    product.appendChild(productContent);
    productContent.appendChild(productName);
    productContent.appendChild(productDescription);
    productContent.appendChild(productPrice);
}

// const product = document.createElement('div');
// product.classList.add('product');

// const productImg = document.createElement('img');
// productImg.classList.add('product__img');
// productImg.src = productsData[0].image.src;
// productImg.setAttribute('alt', productsData[0].image.alt);

// const productContent = document.createElement('div');
// productContent.classList.add('product__content');

// const productName = document.createElement('a');
// productName.classList.add('product__name');
// productName.href = '#';
// productName.textContent = productsData[0].title;

// const productDescription = document.createElement('p');
// productDescription.classList.add('product__description');
// productDescription.textContent = productsData[0].description;

// const productPrice = document.createElement('p');
// productPrice.classList.add('product__price');
// productPrice.textContent = `$${productsData[0].price}`;

// productsGrid.appendChild(product);
// product.appendChild(productImg);
// product.appendChild(productContent);
// productContent.appendChild(productName);
// productContent.appendChild(productDescription);
// productContent.appendChild(productPrice);
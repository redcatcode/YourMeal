const radioBtnBurgersElement = document.querySelector('[data-js-input-burger]')
const radioBtnSnacksElement  = document.querySelector('[data-js-input-snack]')
const radioBtnHotdogsElement = document.querySelector('[data-js-input-hotdog]')

const burgerWindowElement = document.querySelector('[data-js-burger-window]')
const snackWindowElement = document.querySelector('[data-js-snack-window]')
const hotdogWindowElement = document.querySelector('[data-js-hotdog-window]')

const burgerListElement = document.querySelector('[data-js-burger-list]')
const snackListElement = document.querySelector('[data-js-snack-list]')
const hotdogListElement = document.querySelector('[data-js-hotdog-list]')

const cartList = document.querySelector('[data-js-cart-list]')

const generalQuaProducts = document.querySelector('[data-js-general-quantity]')

// const priceProducts = document.querySelectorAll('[data-js-prise-product]')
const generalSumProducts = document.querySelector('[data-js-general-sum-products]')

const placeAnOrderBtn = document.querySelector('[data-js-place-an-order]')
const modelOrderWindow = document.querySelector('[data-js-model-order]')
const blackBack = document.querySelector('[data-js-black-back]')
const closeModelBtn = document.querySelector('[data-js-close-model-btn]')

const radioPickup = document.querySelector('[data-js-radio-pickup]')
const labelDelivery = document.querySelector('[data-js-label-delivery]')

// __________________________________________

snackWindowElement.classList.toggle('none')
hotdogWindowElement.classList.toggle('none')

modelOrderWindow.classList.toggle('none')
blackBack.classList.toggle('none')

function resetList() {
    burgerWindowElement.classList.remove('none')
    snackWindowElement.classList.remove('none')
    hotdogWindowElement.classList.remove('none')
}

radioBtnBurgersElement.addEventListener("change", () => {
    if (radioBtnBurgersElement.checked) {
        resetList()

        snackWindowElement.classList.toggle('none')
        hotdogWindowElement.classList.toggle('none')
    }
});

radioBtnSnacksElement.addEventListener("change", () => {
    if (radioBtnSnacksElement.checked) {
        resetList()

        burgerWindowElement.classList.toggle('none')
        hotdogWindowElement.classList.toggle('none')
    }
});

radioBtnHotdogsElement.addEventListener("change", () => {
    if (radioBtnHotdogsElement.checked) {
        resetList()

        burgerWindowElement.classList.toggle('none')
        snackWindowElement.classList.toggle('none')
    }
});

// __________________________________________

let cartArray = {}

const checkNewProduct = (title) => {
    const keys = Object.keys(cartArray)
    for (let el of keys) {
        if (el === title) {
            return false
        }
    }
}

burgerListElement.addEventListener("click", (event) => {
    if (event.target.matches('[data-js-add-product-btn]')) {
        const addProductBtn = event.target
        const objOfProduct = {
            title: addProductBtn.previousElementSibling.previousElementSibling.innerHTML,
            weight: addProductBtn.previousElementSibling.innerHTML,
            price:  addProductBtn.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
        } 
        const {title, weight, price} = objOfProduct


        
        if (checkNewProduct(title) === undefined) {
            let newProduct = document.createElement('li')
            newProduct.classList.add('list__product')
            newProduct.innerHTML = `    <img class="product__img" src="img/${title}.png" alt="${title}">
                                        <div class="product__description description">
                                            <p class="description__title">${title}</p>
                                            <p class="description__weight">${weight}</p>
                                            <span class="description__price" data-js-prise-product>${price}</span>
                                        </div>
                                        <div class="product__quantity quantity">
                                            <button class="quantity__minus-btn" data-js-minus-btn>-</button>
                                            <p class="quantity__value" data-js-quantity-product>1</p>
                                            <button class="quantity__plus-btn" data-js-plus-btn>+</button>
                                        </div>
                                        <div class="cart__line"></div>`
            cartList.appendChild(newProduct)
            cartArray[title] = newProduct

            generalQuaProducts.innerText = cartList.childElementCount

            let sum = 0

            const arrCartChild = cartList.children
            for (let el of arrCartChild) {
                sum += Number.parseInt(el.querySelector('[data-js-prise-product]').innerText) * parseInt(el.querySelector('[data-js-quantity-product]').innerText)
            }
            generalSumProducts.innerText = String(sum)
            
            
            
        } else {
            let qua = cartArray[title].querySelector('[data-js-quantity-product]').innerText
            let parsQua = Number(qua)
            parsQua += 1
            cartArray[title].querySelector('[data-js-quantity-product]').innerText = String(parsQua)
        }
    }
});

// __________________________________________

hotdogListElement.addEventListener("click", (event) => {
    if (event.target.matches('[data-js-add-product-btn]')) {
        const addProductBtn = event.target
        objOfProduct = {
            title: addProductBtn.previousElementSibling.previousElementSibling.innerHTML,
            weight: addProductBtn.previousElementSibling.innerHTML,
            price:  addProductBtn.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
        }
        const {title, weight, price} = objOfProduct

        
        
        if (checkNewProduct(title) === undefined) {
            let newProduct = document.createElement('li')
            newProduct.classList.add('list__product')
            newProduct.innerHTML = `    <img class="product__img" src="img/${title}.png" alt="${title}">
                                        <div class="product__description description">
                                            <p class="description__title">${title}</p>
                                            <p class="description__weight">${weight}</p>
                                            <span class="description__price" data-js-prise-product>${price}</span>
                                        </div>
                                        <div class="product__quantity quantity">
                                            <button class="quantity__minus-btn" data-js-minus-btn>-</button>
                                            <p class="quantity__value" data-js-quantity-product>1</p>
                                            <button class="quantity__plus-btn" data-js-plus-btn>+</button>
                                        </div>
                                        <div class="cart__line"></div>`
            cartList.appendChild(newProduct)
            cartArray[title] = newProduct

            generalQuaProducts.innerText = cartList.childElementCount

            let sum = 0

            const arrCartChild = cartList.children
            for (el of arrCartChild) {
                sum += parseInt(el.querySelector('[data-js-prise-product]').innerText) * parseInt(el.querySelector('[data-js-quantity-product]').innerText)
            }
            generalSumProducts.innerText = String(sum)

        } else {
            let qua = cartArray[title].querySelector('[data-js-quantity-product]').innerText
            parsQua = Number(qua)
            parsQua += 1
            cartArray[title].querySelector('[data-js-quantity-product]').innerText = String(parsQua)
        }
    }
});

// __________________________________________

snackListElement.addEventListener("click", (event) => {
    if (event.target.matches('[data-js-add-product-btn]')) {
        const addProductBtn = event.target
        objOfProduct = {
            title: addProductBtn.previousElementSibling.previousElementSibling.innerHTML,
            weight: addProductBtn.previousElementSibling.innerHTML,
            price:  addProductBtn.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
        }
        const {title, weight, price} = objOfProduct


        
        if (checkNewProduct(title) === undefined) {
            let newProduct = document.createElement('li')
            newProduct.classList.add('list__product')
            newProduct.innerHTML = `    <img class="product__img" src="img/${title}.png" alt="${title}">
                                        <div class="product__description description">
                                            <p class="description__title">${title}</p>
                                            <p class="description__weight">${weight}</p>
                                            <span class="description__price" data-js-prise-product>${price}</span>
                                        </div>
                                        <div class="product__quantity quantity">
                                            <button class="quantity__minus-btn" data-js-minus-btn>-</button>
                                            <p class="quantity__value" data-js-quantity-product>1</p>
                                            <button class="quantity__plus-btn" data-js-plus-btn>+</button>
                                        </div>
                                        <div class="cart__line"></div>`
            cartList.appendChild(newProduct)
            cartArray[title] = newProduct

            generalQuaProducts.innerText = cartList.childElementCount

            let sum = 0

            const arrCartChild = cartList.children
            for (el of arrCartChild) {
                sum += parseInt(el.querySelector('[data-js-prise-product]').innerText) * parseInt(el.querySelector('[data-js-quantity-product]').innerText)
            }
            generalSumProducts.innerText = String(sum)
            
        } else {
            let qua = cartArray[title].querySelector('[data-js-quantity-product]').innerText
            parsQua = Number(qua)
            parsQua += 1
            cartArray[title].querySelector('[data-js-quantity-product]').innerText = String(parsQua)
        }
    }
});

// __________________________________________

cartList.addEventListener('click', (event) => {
    if (event.target.matches('[data-js-minus-btn]')) {
            let qua = event.target.nextElementSibling.innerText
            parsQua = Number(qua)
            if (parsQua > 0) {
                parsQua -= 1
                event.target.nextElementSibling.innerText = String(parsQua)
            }
    }

    if (event.target.matches('[data-js-plus-btn]')) {
            let qua = event.target.previousElementSibling.innerText
            parsQua = Number(qua)
            if (parsQua < 10) {
            parsQua += 1
            event.target.previousElementSibling.innerText = String(parsQua)
            }
    }
})

// __________________________________________

placeAnOrderBtn.addEventListener('click', () => {
    modelOrderWindow.classList.remove('none')
    blackBack.classList.remove('none')
})

closeModelBtn.addEventListener('click', () => {
    modelOrderWindow.classList.toggle('none')
    blackBack.classList.toggle('none')
})

radioPickup.addEventListener('change', () => {
    labelDelivery.classList.toggle('none')
})

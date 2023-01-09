let foodName = null;
let foodPrice = null;
let drinkName = null;
let drinkPrice = null;
let dessertName = null;
let dessertPrice = null;

function foodSelect(foodSelected){
    var selectedContainer = document.querySelector('.food .select');

    if (selectedContainer !== null) {
        selectedContainer.classList.remove('select')
    }

    foodSelected.classList.add('select');

    let currentFood = document.querySelector('.food .select');
    foodName = currentFood.querySelector('.optionName').innerHTML.trim()
    foodPrice = currentFood.querySelector('.food-price').innerHTML
    foodPrice = foodPrice.replace(",", ".")

    verifyInfo()
    // sendWppMsg();
    // verifyInfo();

}

function drinkSelect(drinkSelected){
    var selectedContainer = document.querySelector('.drink .select');

    if (selectedContainer !== null) {
        selectedContainer.classList.remove('select')
    }

    drinkSelected.classList.add('select');

    let currentDrink = document.querySelector('.drink .select');
    drinkName = currentDrink.querySelector('.optionName').innerHTML.trim()
    drinkPrice = currentDrink.querySelector('.optionPrice').querySelector('.drink-price')
    drinkPrice = drinkPrice.innerHTML
    drinkPrice = drinkPrice.replace(",", ".")

    verifyInfo()
    // sendWppMsg();
    // verifyInfo();

}

function dessertSelect(dessertSelected){
    var selectedContainer = document.querySelector('.dessert .select');

    if (selectedContainer !== null) {
        selectedContainer.classList.remove('select')
    }

    dessertSelected.classList.add('select');

    let currentDessert = document.querySelector('.dessert .select');
    dessertName = currentDessert.querySelector('.optionName').innerHTML.trim()
    dessertPrice = currentDessert.querySelector('.optionPrice').querySelector('.dessert-price')
    dessertPrice = dessertPrice.innerHTML
    dessertPrice = dessertPrice.replace(",", ".")

    verifyInfo()
    // sendWppMsg();
    // verifyInfo();

}

function sendWppMsg(){
    if (foodPrice && drinkPrice && dessertPrice) {
        var finalPrice = Number(foodPrice) + Number(drinkPrice) + Number(dessertPrice)
        finalPrice = finalPrice.toFixed(2)
        finalPrice = finalPrice.toString()
        finalPrice = finalPrice.replace(".", ",")
        
        const message = 'Olá, gostaria de fazer o pedido: \n\nPrato: '+ foodName + '\nBebida: ' + drinkName + '\nSobremesa: ' + dessertName + '\n\n *Total: R$ ' + finalPrice + '*'
        const sendOrder = "https://wa.me/5516997385959?text=" + encodeURI(message);
        window.open(sendOrder)
    }

}

function verifyInfo() {
    if(foodName && drinkName && dessertName) {
        document.getElementsByClassName('confirmOrderBtn')[0].classList.remove('hide')
        

        
    }
}
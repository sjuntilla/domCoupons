//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...
const getBrand = document.getElementsByClassName('brand');
const getItem = document.getElementsByClassName('item');
const getPrice = document.getElementsByClassName('price');
const discountButtons = document.getElementsByClassName('discount');
const itemImg = document.getElementsByTagName('img');
const blockTwo = document.getElementsByClassName('block2');

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow:
let finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'
const getDisclaimer = document.getElementById('disclaimer');
getDisclaimer.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
let brandOne = 'Nabisco';
const getBrand1 = document.getElementById('brand1');
getBrand1.innerHTML = brandOne;

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
let reallyGross = 'Cheeseburger Oreos';
const getItem1 = document.getElementById('item1');
getItem1.innerHTML = reallyGross;

//4. Target the div element with the id of 'price1' and update the content to $8.99.
let newPrice = '$8.99';
const getPrice1 = document.getElementById('price1');
getPrice1.innerHTML = newPrice;

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
let discountOne = 'Free fries with purchase!';
const getDiscount1 = document.getElementById('discount1');
getDiscount1.innerHTML = discountOne;

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
let itemTwo = "Hendrick's Gin";
const getItem2 = document.createElement('div');
getItem2.innerHTML = itemTwo;

const brandTwo = document.getElementById('brand2');
brandTwo.appendChild(getItem2);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
let priceTwo = '$34.99';
const getPrice2 = document.createElement('div');
getPrice2.innerHTML = priceTwo;

getItem2.appendChild(getPrice2);
//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
let discountThree = '50% OFF Axe Body Soap!';
const getDiscount3 = document.createElement('button');
getDiscount3.className = 'discount';
getDiscount3.innerHTML = discountThree;

const blockThree = document.getElementsByClassName('block3');
blockThree[0].appendChild(getDiscount3);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
let orangeChicken = 'Orange Chicken';
getItem[0].innerHTML = orangeChicken;

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
let discountButtonContent = 'Free T-shirt and fortune cookie with purchase!';
let buttonOne = document.createElement('button');
buttonOne.className = 'discount';
buttonOne.innerHTML = discountButtonContent;

let blockOne = document.getElementsByClassName('block1');
blockOne[1].appendChild(buttonOne);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
let hoodieBrand = 'Uniqlo';
let hoodieItem = 'The Red Hoodie';
getItem[1].innerHTML = hoodieItem;
getBrand[1].innerHTML = hoodieBrand;
//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
let tooMuch = '$10,000';
getPrice[1].innerHTML = tooMuch;
//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
let headPhones = 'Hifiman Shangri-La';
const makeBrand = document.createElement('div');
makeBrand.className = 'brand';
makeBrand.innerHTML = headPhones;
blockThree[1].appendChild(makeBrand);
//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
let headphonesTwo = 'Electronstatic Headphones';
const makeItem = document.createElement('div');
makeItem.className = 'item';
makeItem.innerHTML = headphonesTwo;
blockThree[1].appendChild(makeItem);
//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
let headphonesThree = '$18,000';
const makePrice = document.createElement('div');
makePrice.className = 'price';
makePrice.innerHTML = headphonesThree;
blockThree[1].appendChild(makePrice);
//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
let headphonesDiscount = 'Free Barry Manilow CD with purchase!';
const headphonesButton = document.createElement('button');
headphonesButton.className = 'discount';
headphonesButton.innerHTML = headphonesDiscount;
blockThree[1].appendChild(headphonesButton);
//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

let unicornBrand = 'H&M';
let unicornItem = 'Unicorn-Head Slippers';
let unicornPrice = '$21.99';
let unicornButton = 'Free knee-high tube socks with purchase!';
getBrand[3].innerHTML = unicornBrand;
getItem[3].innerHTML = unicornItem;
getPrice[3].innerHTML = unicornPrice;
discountButtons[4].innerHTML = unicornButton;

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
let fritoBrand = 'Frito Lay';
let fritoItem = "Poppin' Jalapeno Doritos";
let fritoPrice = '$7.77';
let fritoButton = '33% OFF any 6 pack Budweiser or Bud Light.';
getBrand[4].innerHTML = fritoBrand;
getItem[4].innerHTML = fritoItem;
getPrice[4].innerHTML = fritoPrice;
discountButtons[5].innerHTML = fritoButton;

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
getBrand[5].innerHTML = 'Any Dog Breeder';
getItem[5].innerHTML = 'Baby Puggy';
getPrice[5].innerHTML = 'Priceless';
discountButtons[6].innerHTML = 'No Discounts.This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.

// First Item
itemImg[10].src = 'https://i.imgur.com/VQjFyIY.jpg';
getBrand[6].innerHTML = "SJ's";
getItem[6].innerHTML = 'Unfinished Painting';
getPrice[6].innerHTML = 'Your sanity & peace of mind';
discountButtons[7].innerHTML = "75% off if you're already a procrastinator!";

// Second Item
itemImg[11].src = 'https://i.imgur.com/7GVyqhd.jpg';
const brandDiv = document.createElement('div');
brandDiv.className = 'brand';
brandDiv.innerHTML = "SJ's"
blockTwo[3].appendChild(brandDiv);

const itemDiv = document.createElement('div');
itemDiv.className = 'item';
itemDiv.innerHTML = 'Other Unfinished Painting';
blockTwo[3].appendChild(itemDiv);

const priceDiv = document.createElement('div');
priceDiv.className = 'price';
priceDiv.innerHTML = 'Any sense of accomplishment you may have had';
blockTwo[3].appendChild(priceDiv);

const customButton = document.createElement('button');
customButton.className = 'discount';
customButton.innerHTML = 'No discounts. Only pain.';
blockTwo[3].appendChild(customButton);

// Third (and FINAL) Item
itemImg[12].src = 'https://i.imgur.com/Hl9f4Tr.png';
const brandDiv2 = document.createElement('div');
brandDiv2.className = 'brand';
brandDiv2.innerHTML = "SJ's"
blockThree[3].appendChild(brandDiv2);

const itemDiv2 = document.createElement('div');
itemDiv2.className = 'item';
itemDiv2.innerHTML = 'Sunny Disposition';
blockThree[3].appendChild(itemDiv2);

const priceDiv2 = document.createElement('div');
priceDiv2.className = 'price';
priceDiv2.innerHTML = 'The low low price of your bad vibes';
blockThree[3].appendChild(priceDiv2);

const customButton2 = document.createElement('button');
customButton2.className = 'discount';
customButton2.innerHTML = 'For free! Click here!';
blockThree[3].appendChild(customButton2);
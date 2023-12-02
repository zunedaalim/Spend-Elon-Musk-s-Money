const main = document.querySelector("main");
const sticky = document.getElementById("sticky");
const photo = document.getElementById("photo");

const data = [
  {
    image: "./Pictures/big-mac-meal-230.webp",

    text: "Big Mac Meal",
    price: "$6",
  },
  {
    image: "./Pictures/flip-flops.webp",
    text: "Flip-Flops",
    price: "$15",
  },
  {
    image: "./Pictures/Jordan-Expert-Deep-Clean-Toothbrush-315.webp",
    text: "ToothBrush",
    price: "$3",
  },
  {
    image: "./Pictures/spotify.png",
    text: "Spotify",
    price: "$10",
  },
  {
    image: "./Pictures/netflix-logo-text-emblem-31.png",
    text: "Netflix (1 Month)",
    price: "$12",
  },
  {
    image: "./Pictures/milk.webp",
    text: "Milk (1ltr)",
    price: "$2",
  },
  {
    image: "./Pictures/hercules-rf-15610.webp",
    text: "Hercules Bicycle",
    price: "$150",
  },
  {
    image: "./Pictures/airpods-3rd-gen.webp",
    text: "Airpods 3rd Gen",
    price: "$179",
  },
  {
    image: "./Pictures/hero-splendor-plus-left-side-view3-64470.webp",
    text: "Hero Splendor Plus",
    price: "$800",
  },
  {
    image: "./Pictures/pvr-380.avif",
    text: "PVR Ticket",
    price: "$10",
  },
  {
    image: "./Pictures/titan-999.webp",
    text: "Titan Watch",
    price: "$50",
  },
  {
    image: "./Pictures/smarttv.webp",
    text: "Smart TV (55 inch)",
    price: "$500",
  },
  {
    image: "./Pictures/air-jordans.webp",
    text: "Air Jordan",
    price: "$120",
  },
  {
    image: "./Pictures/Yellow-Tail-2295.webp",
    text: "Yellow Tail Wine",
    price: "$12",
  },
  {
    image: "./Pictures/ps5.webp",
    text: "PS-5",
    price: "$500",
  },
  {
    image: "./Pictures/concert.avif",
    text: "Justin Bieber Concert Ticket",
    price: "$200",
  },
  {
    image: "./Pictures/Air-India-77,199.webp",
    text: "Flight To London (Economy)",
    price: "$600",
  },
  {
    image: "./Pictures/right-front-three-quarter1.webp",
    text: "Alto 800",
    price: "$6,000",
  },
  {
    image: "./Pictures/rolex-air-king-608000.webp",
    text: "Rolex Air King",
    price: "$10,000",
  },
  {
    image: "./Pictures/iphone-15-pro-max.webp",
    text: "Iphone 15 pro max",
    price: "$1,199",
  },
  {
    image: "./Pictures/ktm-209555.webp",
    text: "KTM",
    price: "$5,000",
  },
  {
    image: "./Pictures/macbook-m3.webp",
    text: "Macbook pro (M3)",
    price: "$ 1,299",
  },

  {
    image: "./Pictures/apple-vr.webp",
    text: "Apple Vision Pro Headset",
    price: "$3,499",
  },
  {
    image: "./Pictures/Thar-15-lakh.webp",
    text: "Thar",
    price: "$20,000",
  },
  {
    image: "./Pictures/maharaja-express-7,94,640.webp",
    text: "Maharaja Express Travel",
    price: "$4,890",
  },

  {
    image: "./Pictures/2019-mac-pro-side-and-front.webp",
    text: "Apple Mac Pro",
    price: "$5,999",
  },
  {
    image: "./Pictures/Audi-A8.webp",
    text: "Audi A8",
    price: "$95,000",
  },
  {
    image: "./Pictures/teslabot.webp",
    text: "Teslabot",
    price: "$20,000",
  },
  {
    image: "./Pictures/pc.webp",
    text: "Orion X's Gaming PC",
    price: "$2,999",
  },

  {
    image: "./Pictures/kawasaki-ninja-h2r-1-69-lakh.webp",
    text: "Ninja H2R",
    price: "$55,000",
  },
  {
    image: "./Pictures/gold-bar.webp",
    text: "Gold Bar (1KG)",
    price: "$50,000",
  },

  {
    image: "./Pictures/diamond-ring-251036.webp",
    text: "Diamond Ring",
    price: "$6,500",
  },
  {
    image: "./Pictures/avantador-5cr.webp",
    text: "Lamborghini Avantador",
    price: "$825,000",
  },
  {
    image: "./Pictures/new-york-mets-flag.webp",
    text: "The New York Mets",
    price: "$334,230,000",
  },

  {
    image: "./Pictures/Buggati-Centodieci-9million.webp",
    text: "Buggati Centodieci",
    price: "$9,000,000",
  },
  {
    image: "./Pictures/Nike-Air-Force-1-Low-Louis-Vuitton.webp",
    text: "Nike Air Force 1 Louis Vuitton",
    price: "$2750",
  },
  {
    image: "./Pictures/rambagh-palace-average-30000.webp",
    text: "Rambagh Palace (1- Night)",
    price: "$5,000",
  },

  {
    image: "./Pictures/koenisegg.webp",
    text: "Koenisegg One:1",
    price: "$2,000,000",
  },
  {
    image: "./Pictures/space-6cr.webp",
    text: "Space Trip",
    price: "$500,000",
  },
  {
    image: "./Pictures/H145 Airbus helicopter-85cr.webp",
    text: "H145 Airbus Helicopter",
    price: "$7,925,000",
  },
  {
    image: "./Pictures/Mansion-52million.webp",
    text: "Mansion",
    price: "$5,000,000",
  },
  {
    image: "./Pictures/3-BHK-Luxury-flat-in-south-bombay-3.89cr.webp",
    text: "Luxury Flat in New-York (3-BHK)",
    price: "$8,000,000",
  },
  {
    image: "./Pictures/Jet-Gulfstream-G450-8,000,000.webp",
    text: " Jet Gulfstream",
    price: "$37,000,000",
  },
  {
    image: "./Pictures/samsung-micro-led-display-the-wall-12crore.webp",
    text: "Samsung Micro LED Display",
    price: "$1,38,000",
  },
  {
    image: "./Pictures/cyberdog-1,18,213.webp",
    text: "Cyberdog",
    price: "$2,0000",
  },
  {
    image: "./Pictures/formula1-700mil.webp",
    text: "Formula-1 Team (Average)",
    price: "$1,880,000,000",
  },
  {
    image: "./Pictures/emirates-first-class-5,02,876.webp",
    text: "Emirates First Class",
    price: "$10,000",
  },
  {
    image: "./Pictures/bombay-saphore-200000.webp",
    text: "Bombay Sapphire Revelation Drink",
    price: "$200,000",
  },
  {
    image: "./Pictures/palm-jumera-1cr-15lakh.webp",
    text: "The Casa Del Sole (villa)",
    price: "$82,000,000",
  },

  {
    image: "./Pictures/Jacob_Co_-_The_Billionaire_Watch_-18_million1.webp",
    text: "The Billionaire Watch",
    price: "$20,000,000",
  },
  {
    image: "./Pictures/mona-lisa.webp",
    text: "Monalisa",
    price: "$860,000,000",
  },
  {
    image: "./Pictures/painting.webp",
    text: "Les Femmes d’Alger by Picasso",
    price: "$179,000,000",
  },
  {
    image: "./Pictures/produce-90mil.webp",
    text: "Produce Hollywood Movie",
    price: "$100,000,000",
  },
  {
    image: "./Pictures/perfect-pink-diamond-35million.webp",
    text: "Perfect Cut Pink Diamond",
    price: "$3,300,000",
  },
  {
    image: "./Pictures/graff hallucination watch-55-million.webp",
    text: "Graff Hallucination Watch",
    price: "$55,000,000",
  },
  {
    image: "./Pictures/toilet-30000.webp",
    text: " Golden Toilet",
    price: "$1,000,000",
  },
  {
    image: "./Pictures/jeff-house-165million.webp",
    text: "Jeff Bezos Mansion",
    price: "$165,000,000",
  },

  {
    image: "./Pictures/island.webp",
    text: "Private Island, Central America",
    price: "$$1,500,000",
  },

  {
    image: "./Pictures/startup.webp",
    text: "Start Your Own Startup",
    price: "$1,000,000",
  },
  {
    image:
      "./Pictures/indian_army_jetpack_getty_2-sixteen_nine-400,000dollar.webp",
    text: "Jetpack",
    price: "$340,000",
  },

  {
    image: "./Pictures/formula-1-car.webp",
    text: "Formula-1",
    price: "$15,000,000",
  },
  {
    image: "./Pictures/history-supreme-yacht-4.5billion.webp",
    text: "History Supreme Yacht",
    price: "$4,800,000,000",
  },
  {
    image: "./Pictures/apache-helicopter.webp",
    text: "Apache Helicopter",
    price: "$ 13,900,000",
  },
  {
    image: "./Pictures/boeing-747.webp",
    text: "Boeing-747",
    price: "$420,000,000",
  },
  {
    image: "./Pictures/Rolls-Royce-Boat-Tail-768x411-28milliondolla.webp",
    text: "Rolls Royce Boat Tail",
    price: "$28,000,000",
  },

  {
    image: "./Pictures/antilia-15000.webp",
    text: "Antilia",
    price: "$ 2,000,000,000",
  },
  {
    image: "./Pictures/cruise-ship.webp",
    text: " Royal Caribbean's Allure of the Seas",
    price: "$1,430,000,000 ",
  },
];

function convertAmountToUSDSystem(amount) {
  const billion = Math.floor(amount / 1000000000);
  const million = Math.floor((amount % 1000000000) / 1000000);
  const thousand = Math.floor((amount % 1000000) / 1000);
  const remainder = amount % 1000;

  let result = "";

  if (billion > 0) {
    result += billion.toLocaleString() + " billion ";
  }

  if (million > 0) {
    result += million.toLocaleString() + " million ";
  }

  if (thousand > 0) {
    result += thousand.toLocaleString() + " thousand ";
  }

  if (remainder > 0) {
    result +=
      remainder.toLocaleString(undefined, { maximumFractionDigits: 2 }) +
      " dollars";
  } else {
    // Append "dollars" if there is no remainder
    result += "dollars";
  }

  return result.trim();
}

data.forEach(createBox);
function createBox(item) {
  const box = document.createElement("div");
  const { image, text, price } = item; //item.image=image  item.text item.price
  box.classList.add("box");
  box.innerHTML = `
   <div class ="item-wrapper">
<div class= "overflow">
<img src= "${image}" alt =${text} /> </div> 
<label class= "item-name">${text}</label>
<div class= "item-cost">${price}</div>
<div class="item-controls">
<button  class="button-64 sell"  role="button"><span class="text">Sell</span></button>

<input label="quantity" name="quantity" type="number" class="item-input" value ="0">
<button  class="button-64 buy"   role="button"><span class="text">Buy</span></button>
</div>
</div>

   `;
  main.appendChild(box);
}

const reciept = document.querySelector(".reciept");
const total = document.querySelector(".sticky");
const itemwrappers = document.getElementsByClassName("item-wrapper");
const itemControls = document.getElementsByClassName("item-controls");

const obj = document.querySelector(".sticky");
var previousname = 0;
var receiptList = document.getElementById("items");
var totalCostElement = receiptList.querySelector(".total-cost");
// Helper function to remove non-numeric characters from a string
function extractNumericValue(value) {
  return Number(value.replace(/[^\d.-]+/g, ""));
}

let finalvalue = 220000000000;
let previous = 220000000000;
var totalCost = 0;
// Event listeners for each item input
for (let i = 0; i < itemwrappers.length; i++) {
  const itemwrapper = itemwrappers[i];
  const itemprice = itemwrapper.getElementsByClassName("item-cost")[0];
  const itemControl = itemControls[i];
  const sellButton = itemControl.getElementsByClassName("sell")[0];
  const buyButton = itemControl.getElementsByClassName("buy")[0];
  const quantityInput = itemControl.getElementsByClassName("item-input")[0];
  const itemname = itemwrapper.getElementsByClassName("item-name")[0];

  let previousValue = 0; // Track the previous input value
  let hasInitialValue = true; // Flag to track if the input has the initial value

  let previousvalue3 = 0;

  if (quantityInput.value === "0") {
    sellButton.disabled = true;
  }

  //sell
  sellButton.addEventListener("click", function () {
    const inputValue = parseFloat(quantityInput.value);

    if (inputValue > 0) {
      previous = finalvalue;
      finalvalue = finalvalue + extractNumericValue(itemprice.innerText);
      quantityInput.value = parseInt(quantityInput.value) - 1;

      totalCost = formatUSDCurrency(220000000000 - finalvalue);
      totalCostElement.innerHTML = `<hr><h3> Total Cost : ${totalCost}  ( ${convertAmountToUSDSystem(
        220000000000 - finalvalue
      )} )</h3>`;

      previousValue = quantityInput.value;

      previousvalue3 = previousValue;

      animateValue(obj, previous, finalvalue, 1600);
      if (
        Math.floor(finalvalue / extractNumericValue(itemprice.innerText)) >= 1
      ) {
        buyButton.disabled = false;
      } else buyButton.disabled = true;

      if (quantityInput.value === "0") {
        sellButton.disabled = true;
      } else {
        sellButton.disabled = false;
      }
    }
    function decreaseItem() {
      var itemName = itemname.innerText;
      var quantityValue = inputValue;
      var receiptList = document.getElementById("items");
      var existingItems = receiptList.getElementsByClassName("name");
      var itemIndex = -1;

      for (var i = 0; i < existingItems.length; i++) {
        if (existingItems[i].innerText === itemName) {
          itemIndex = i;
          break; // Exit the loop since the item is found
        }
      }

      if (quantityValue === 1 && existingItems.length === 1) {
        // Remove the heading "Receipt" if there is only one item and the quantity becomes zero
        var heading = receiptList.querySelector("h2");
        if (heading) {
          heading.parentNode.removeChild(heading);
        }
      }

      if (
        existingItems.length === 1 &&
        totalCostElement &&
        quantityValue === 1
      ) {
        totalCostElement.parentNode.removeChild(totalCostElement);
        totalCostElement = null;
      }

      if (itemIndex !== -1) {
        var quantityElement = existingItems[itemIndex].nextElementSibling;
        var currentQuantity = parseInt(quantityElement.innerText);

        if (currentQuantity > 1) {
          // Decrease the quantity by 1
          var updatedQuantity = currentQuantity - 1;
          quantityElement.innerText = updatedQuantity;
        } else {
          // Remove the child element from the receipt list
          var itemElement = existingItems[itemIndex].parentNode;
          receiptList.removeChild(itemElement);
        }
      }
    }

    decreaseItem();
  });

  quantityInput.addEventListener("input", function () {
    if (quantityInput.value == "") {
      quantityInput.value = 0;
    }

    let inputValue = parseFloat(quantityInput.value);

    if (quantityInput.value == "") {
      quantityInput.value = 0;
    }

    if (isNaN(inputValue)) {
      quantityInput.value = "0";
      previousValue = 0;
      hasInitialValue = true;
    } else {
      if (hasInitialValue) {
        hasInitialValue = false;
      }
      quantityInput.value = inputValue.toString();

      let diffValue = inputValue - previousValue;

      previousValue = inputValue;
      previous = finalvalue;
      finalvalue =
        finalvalue - diffValue * extractNumericValue(itemprice.innerText);

      if (finalvalue < 0) {
        quantityInput.value =
          previousvalue3 +
          Math.floor(previous / extractNumericValue(itemprice.innerText));

        inputValue = parseFloat(quantityInput.value);
        quantityInput.value = inputValue.toString();

        diffValue = inputValue - previousValue;

        previousValue = inputValue;

        finalvalue =
          finalvalue - diffValue * extractNumericValue(itemprice.innerText);
        buyButton.disabled = true;
      } else buyButton.disabled = false;
      previousvalue3 = previousValue;
      animateValue(obj, previous, finalvalue, 1600);
    }

    if (quantityInput.value === "0") {
      sellButton.disabled = true;
    } else {
      sellButton.disabled = false;
    }
    var quantityValue = inputValue;
    var existingItems = receiptList.getElementsByClassName("name");

    var costElements = receiptList.getElementsByClassName("cost");

    totalCost = formatUSDCurrency(220000000000 - finalvalue);

    if (totalCostElement && totalCostElement != null) {
      totalCostElement.parentNode.removeChild(totalCostElement);
      totalCostElement = document.createElement("div");
      totalCostElement.classList = "total-cost";
      totalCostElement.innerHTML = `<hr><h3> Total Cost : ${totalCost}  ( ${convertAmountToUSDSystem(
        220000000000 - finalvalue
      )} )</h3>`;

      reciept.appendChild(totalCostElement);
    } else if (existingItems.length === 0 && quantityValue !== 0) {
      totalCostElement = document.createElement("div");
      totalCostElement.classList = "total-cost";
      totalCostElement.innerHTML = `<hr><h3> Total Cost : ${totalCost}  ( ${convertAmountToUSDSystem(
        220000000000 - finalvalue
      )} )</h3>`;

      reciept.appendChild(totalCostElement);
    }
    if (existingItems.length === 1 && quantityValue === 0) {
      totalCostElement.parentNode.removeChild(totalCostElement);
      totalCostElement = null;
    }

    function updateItemFromInput() {
      var itemName = itemname.innerText;
      var quantityInput = document.getElementById("quantityInput");
      var quantityValue = inputValue;
      var receiptList = document.getElementById("items");
      var existingItems = receiptList.getElementsByClassName("name");
      var itemIndex = -1;

      for (var i = 0; i < existingItems.length; i++) {
        if (existingItems[i].innerText === itemName) {
          itemIndex = i;
          break; // Exit the loop since the item is found
        }
      }

      if (existingItems.length === 0 && quantityValue !== 0) {
        // Add the heading "Receipt" if there are no items and the quantity is not zero
        var heading = document.createElement("h2");
        heading.innerHTML = `Your Reciept  `;
        receiptList.appendChild(heading);
      } else if (existingItems.length === 1 && quantityValue === 0) {
        // Remove the heading "Receipt" if there is only one item and the quantity becomes zero
        var heading = receiptList.querySelector("h2");
        if (heading) {
          heading.parentNode.removeChild(heading);
        }
      }

      if (itemIndex !== -1) {
        var quantityElement = existingItems[itemIndex].nextElementSibling;
        var currentQuantity = parseInt(quantityElement.innerText);

        if (quantityValue === 0) {
          // Remove the child element from the receipt list
          var itemElement = existingItems[itemIndex].parentNode;
          receiptList.removeChild(itemElement);
        } else {
          // Update the quantity with the input field value
          quantityElement.innerText = quantityValue;
        }
      } else if (quantityValue !== 0) {
        // Item doesn't exist in the receipt list, add a new item with the input field value
        var details = document.createElement("div");
        details.classList = "appended-div";
        details.innerHTML = `
        <div class="name">${itemName}</div>
        <div class="number">${quantityValue}</div>
        <div class="cost">${itemprice.innerText}</div>
      `;
        receiptList.appendChild(details);
      }
    }
    updateItemFromInput();
  });

  //Buy

  const obj = document.querySelector(".sticky");

  buyButton.addEventListener("click", function () {
    hasInitialValue = false;
    const inputValue = parseFloat(quantityInput.value);
    if (
      Math.floor(finalvalue / extractNumericValue(itemprice.innerText)) >= 1
    ) {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    }

    previousValue = quantityInput.value;

    previous = finalvalue;
    if (
      Math.floor(finalvalue / extractNumericValue(itemprice.innerText)) >= 1
    ) {
      buyButton.disabled = false;
    } else buyButton.disabled = true;

    if (
      Math.floor(finalvalue / extractNumericValue(itemprice.innerText)) >= 1
    ) {
      finalvalue = finalvalue - extractNumericValue(itemprice.innerText);
    }

    if (quantityInput.value === "0") {
      sellButton.disabled = true;
    } else {
      sellButton.disabled = false;
    }

    function addItem() {
      var itemName = itemname.innerText;

      var itemlist = document.getElementById("items");
      var existingItems = receiptList.getElementsByClassName("name");
      var isItemExists = false;

      for (var i = 0; i < existingItems.length; i++) {
        if (existingItems[i].innerText === itemName) {
          // Item already exists in the receipt list, update the quantity by 1
          var quantityElement = existingItems[i].nextElementSibling;
          var currentQuantity = parseInt(quantityElement.innerText);
          var quantityValue = inputValue;
          var updatedQuantity = currentQuantity + 1;
          quantityElement.innerText = updatedQuantity;
          isItemExists = true;
          break; // Exit the loop since the item is found
        }
      }
      if (existingItems.length === 0 && quantityValue !== 0) {
        // Add the heading "Receipt" if there are no items and the quantity is not zero
        var heading = document.createElement("h2");
        heading.innerText = "Your Receipt";
        receiptList.appendChild(heading);
      } else if (existingItems.length === 1 && quantityValue === 0) {
        // Remove the heading "Receipt" if there is only one item and the quantity becomes zero
        var heading = receiptList.querySelector("h2");
        if (heading) {
          heading.parentNode.removeChild(heading);
        }
      }

      if (!isItemExists) {
        // Item doesn't exist in the receipt list, add a new item with quantity 1
        var details = document.createElement("div");
        details.classList = "appended-div";
        details.innerHTML = `
        <div class="name">${itemName}</div>
        <div class="number">1</div>
        <div class="cost">${itemprice.innerText}</div>
      `;

        receiptList.appendChild(details);
      }

      // Check if the receipt list is empty and add/remove the heading "Receipt" accordingly
      var heading = receiptList.querySelector("h2");

      var costElements = receiptList.getElementsByClassName("cost");

      totalCost = formatUSDCurrency(220000000000 - finalvalue);

      if (totalCostElement && totalCostElement != null) {
        totalCostElement.parentNode.removeChild(totalCostElement);
        totalCostElement = document.createElement("div");
        totalCostElement.classList = "total-cost";
        totalCostElement.innerHTML = `<hr><h3> Total Cost : ${totalCost}  ( ${convertAmountToUSDSystem(
          220000000000 - finalvalue
        )} )</h3>`;

        reciept.appendChild(totalCostElement);
      } else {
        totalCostElement = document.createElement("div");
        totalCostElement.classList = "total-cost";
        totalCostElement.innerHTML = `<hr><h3> Total Cost : ${totalCost}  ( ${convertAmountToUSDSystem(
          220000000000 - finalvalue
        )} )</h3>`;

        reciept.appendChild(totalCostElement);
      }

      // Remove the total cost element if there are no child items
      if (existingItems.length === 0 && totalCostElement) {
        totalCostElement.parentNode.removeChild(totalCostElement);
      }
    }

    addItem();

    animateValue(obj, previous, finalvalue, 1600);
  });

  itemwrapper.addEventListener("click", function () {
    if (
      Math.floor(finalvalue / extractNumericValue(itemprice.innerText)) >= 1
    ) {
      buyButton.disabled = false;
    } else buyButton.disabled = true;
  });
}

const formatUSDCurrency = (value) => {
  value = value.toString();
  var lastThree = value.substring(value.length - 3);
  var otherNumbers = value.substring(0, value.length - 3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  var formattedValue =
    otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
  return "$" + formattedValue;
};

let animationFrameId = null; // Variable to store the animation frame ID

function animateValue(obj, start, end, duration) {
  // console.log("start", start);
  // console.log("End", end);
  if (animationFrameId) {
    // Cancel the ongoing animation if exists
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  const range = end - start;
  const frames = Math.ceil(duration / 16); // Calculate the total number of frames
  const increment = range / frames;

  let currentValue = start;
  let frameCount = 0;

  function updateValue() {
    currentValue += increment;
    frameCount++;

    obj.innerHTML = formatUSDCurrency(Math.round(currentValue));

    if (frameCount < frames) {
      animationFrameId = window.requestAnimationFrame(updateValue);
    } else {
      obj.innerHTML = formatUSDCurrency(end);
      animationFrameId = null;
    }
  }

  // Start the animation
  animationFrameId = window.requestAnimationFrame(updateValue);
}

function scrollToBottom() {
  var element = document.getElementById("bottom");
  element.scrollIntoView();
}
var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  // Get values from form elements
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("userInput").value;

  // Create email body
  var body =
    "name: " + name + "<br/> email: " + email + "<br/> Message: " + message;

  // Send email
  Email.send({
    SecureToken: "1891bdf1-4580-4afb-a252-f0a503716c7d",
    To: "imileke0@gmail.com",
    From: `info@spendelonmoney.shop`,
    Subject: "Hello ",
    Body: body,
  }).then((message) => {
    // Alert user
    alert(message);

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("userInput").value = "";
  });
});

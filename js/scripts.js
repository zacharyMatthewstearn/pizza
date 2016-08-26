// Back-End

function Pizza(){
  this.size = "";
  this.toppings = [];
  this.price = 0;
  this.toppingBasePrice = 0;
}

Pizza.prototype.setSize = function(_size){
  this.size = _size;
};

Pizza.prototype.addTopping = function(_topping){
  this.toppings.push(_topping);
};

Pizza.prototype.calculatePrice = function(){
  switch(this.size){
    case "personal":
      this.price = 10;
      this.toppingBasePrice = 0.5;
      break;
    case "small":
      this.price = 15;
      this.toppingBasePrice = 0.75;
      break;
    case "medium":
      this.price = 20;
      this.toppingBasePrice = 1;
      break;
    case "large":
      this.price = 25;
      this.toppingBasePrice = 1.25;
      break;
    case "extra-large":
      this.price = 30;
      this.toppingBasePrice = 1.5;
      break;
    default:
      break;
  }
  for(var i = 0; i < this.toppings.length; i++){
    console.log("Array.isArray(this.toppings): " + Array.isArray(this.toppings));
    if(this.toppings[i] === "Pepperoni" || this.toppings[i] === "Sausage"){
      this.price += (this.toppingBasePrice * 2);
    }
    else {
      this.price += this.toppingBasePrice;
    }
  }
};



// Front-End

function displayOutput(_pizza){
  $("span#outputSize").text(_pizza.size);
  if(_pizza.toppings.length === 0){
    $("span#outputCheese").show();
    $("span#outputToppings").hide();
  }
  else {
    $("span#outputCheese").hide();
    $("span#outputToppings").show();
    $("ul#outputToppingsUL").html("");
    _pizza.toppings.forEach(function(topping){
      $("ul#outputToppingsUL").append("<li>"+topping+"</li>");
    });
  }
  _pizza.calculatePrice();
  $("span#outputPrice").text(_pizza.price.toFixed(2));
  $("div#outputModal").modal();
}

$("form#inputForm").submit(function(event){
  event.preventDefault();
  var pizza = new Pizza();
  pizza.setSize($("select#inputSize").val());
  $("input:checkbox:checked").each(function(){
    pizza.addTopping($(this).val());
  });
  displayOutput(pizza);
});

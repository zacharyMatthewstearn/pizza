// Back-End

function Pizza(){
  this.size = "";
  this.toppings = [];
}

Pizza.prototype.setSize = function(_size){
  this.size = _size;
};

Pizza.prototype.addTopping = function(_topping){
  this.toppings.push(_topping);
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
    _pizza.toppings.forEach(function(topping){
      $("ul#outputToppingsUL").append("<li>"+topping+"</li>");
    });
  }
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

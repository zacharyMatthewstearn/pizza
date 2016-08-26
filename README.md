# Pizza Ordering App

#### Pizza Ordering App Exercise for Epicodus, 8/26/2016

#### By Zachary Matthewstearn

## Description

A interactive website consisting of a single page whereupon a user may select a pizza to order, specifying a size and the toppings they would like, according to the following specs:

* Size options:
  * Personal
  * Small
  * Medium
  * Large
  * Extra-Large

* Available Toppings:
  * Pepperoni (meat)
  * Sausage (meat)
  * Mushrooms
  * Olives
  * Onions
  * Spinach
  * Sun-dried tomatoes
  * Roasted red peppers
  * Pickled jalapenos

* Final pricing scheme:
  * Personal:
    * no toppings: $10.00
    * addition per non-meat topping: $0.50
    * addition per meat topping: $1.00
  * Small:
    * no toppings: $15.00
    * addition per non-meat topping: $0.75
    * addition per meat topping: $1.50
  * Medium:
    * no toppings: $20.00
    * addition per non-meat topping: $1.00
    * addition per meat topping: $2.00
  * Large:
    * no toppings: $25.00
    * addition per non-meat topping: $1.25
    * addition per meat topping: $2.50
  * Extra-Large:
    * no toppings: $30.00
    * addition per non-meat topping: $1.50
    * addition per meat topping: $3.00

* _SPECS:_
  * _**Spec:** Create a single pizza for which the user may specify size (no toppings)_
    * _**Example Input:** "Personal"_
    * _**Example Output:** "Personal"_
  * _**Spec:** Allow the user to add a single topping to their pizza_
    * _**Example Input:** "Small", "Pepperoni"_
    * _**Example Output:** "Small", "Pepperoni"_
  * _**Spec:** Allow the user to add a single topping from amongst an array of topping choices_
    * _**Example Input:** "Medium", "Sausage" (NOT Pepperoni, although that remains an option; 1/2 choices selected)_
    * _**Example Output:** "Medium", "Sausage"_
  * _**Spec:** allow the user to add multiple toppings from amongst an array of choices_
    * _**Example Input:** "Large", ["Pepperoni", "Sausage"]_
    * _**Example Output:** "Large", ["Pepperoni", "Sausage"]_
  * _**Spec:** return a price to the user based solely upon the size of the pizza_
    * _**Example Input:** "Extra-Large", "Olives"_
    * _**Example Output:** "Extra-Large", "Olives", "$30.00"_
  * _**Spec:** add a fixed amount to the price of the pizza per topping_
    * _**Example Input:** "Personal", "Pepperoni"_
    * _**Example Output:** "Personal", "Pepperoni", $10.50 ($10 base + flat rate of $0.50)_
  * _**Spec:** add varying amounts to the price of the pizza per topping based upon the size of the pizza_
    * _**Example Input:**  "Small", "Olives"_
    * _**Example Output:** "Small", "Olives", "$15.75"_
  * _**Spec:** building upon the variation in price per topping from the previous spec, further double the price for meat (and only meat) toppings_
    * _**Example Input:** "Medium", ["Sausage", "Mushrooms"]_
    * _**Example Output:** "Medium", ["Sausage", "Mushrooms"], "$23.00"_

## Setup/Installation Requirements

* _Clone this repository_
* _Open with text editor of your choice_

_OR_

* _View on GitHub Pages at: https://zacharymatthewstearn.github.io/pizza/_

### License

Copyright (c) 2016 Zachary Matthewstearn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

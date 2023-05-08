<!DOCTYPE html>
<html>
<head>
	<title>Car Dealership</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		$(document).ready(function(){
			var cars = [
				{name: "Tesla Model S", price: 75000},
				{name: "Ford Mustang", price: 50000},
				{name: "Toyota Camry", price: 30000}
			];

			cars.forEach(function(car){
				var car_html = `
					<div class="car">
						<h2>${car.name}</h2>
						<p>Price: $${car.price.toLocaleString()}</p>
						<button class="add-to-cart" data-name="${car.name}" data-price="${car.price}">Add to Cart</button>
					</div>
				`;
				$("#car-list").append(car_html);
			});

			var cart = [];

			$("#car-list").on("click", ".add-to-cart", function(){
				var name = $(this).data("name");
				var price = $(this).data("price");
				cart.push({name: name, price: price});
				$("#cart-count").text(cart.length);
			});

			$("#view-cart").click(function(){
				var total = 0;
				var cart_html = "<h2>Shopping Cart</h2>";
				cart.forEach(function(item){
					total += item.price;
					cart_html += `
						<div class="cart-item">
							<h3>${item.name}</h3>
							<p>Price: $${item.price.toLocaleString()}</p>
						</div>
					`;
				});
				cart_html += `<p>Total: $${total.toLocaleString()}</p>`;
				$("#cart").html(cart_html);
			});
		});
	</script>
	<style>
		.car {
			border: 1px solid black;
			padding: 10px;
			margin-bottom: 10px;
		}
		.add-to-cart {
			background-color: green;
			color: white;
			border: none;
			padding: 5px;
			margin-top: 10px;
			cursor: pointer;
		}
		.cart-item {
			border: 1px solid black;
			padding: 10px;
			margin-bottom: 10px;
		}
	</style>
</head>
<body>
	<h1>Car Dealership</h1>
	<div id="car-list"></div>
	<p><button id="view-cart">View Cart (<span id="cart-count">0</span>)</button></p>
	<div id="cart"></div>
</body>
</html>

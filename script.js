document.getElementById('btn').addEventListener('click', function(){
	const mostrar = document.getElementById('mostrar').innerHTML = `
		Mi correo electronico es elias@gmail.com mi numero de telefono es
		03874647346
		`
	let btn = document.getElementById('btn').addEventListener('click', function(){
		const boton = document.getElementById('btn').innerHTML = `
			<style>
			#btn{
				background: transparent;
				color: transparent;
				display: none;
			}
			</style>
		`
	})
})

document.getElementById('display-more').addEventListener('click', function(){
	const display = document.getElementById('display').innerHTML = `
		<div id="container">
<center>
<section id="productos">
	<img src="imagen7.jpg">
	<h3>Zapatos
		<p>epicos</p>|| 15$</h3>
	<a href=""><img src="whatsapp-fill.svg" id="logo"></a>
	<p><button type="submit" id="add-car" onclick="alert('Agregaste otro elemento al carrito')">Agregar al carrito</button></p>
</section>
</center>
<center>
<section id="productos">
	<img src="imagen8.jpg">
	<h3>Zapatos
		<p>epicos</p>|| 15$</h3>
	<a href=""><img src="whatsapp-fill.svg" id="logo"></a>
	<p><button type="submit" id="add-car" onclick="alert('Agregaste otro elemento al carrito')">Agregar al carrito</button></p>
</section>
</center>
</div>
<div id="container">
<center>
<section id="productos">
	<img src="imagen9.jpg">
	<h3>Honor
		<p>X8B</p>|| 15$</h3>
	<a href=""><img src="whatsapp-fill.svg" id="logo"></a>
	<p><button type="submit" id="add-car" onclick="alert('Agregaste otro elemento al carrito')">Agregar al carrito</button></p>
</section>
</center>
<center>
<section id="productos">
	<img src="imagen10.jpg">
	<h3>Honor
		<p>X8a</p>|| 15$</h3>
	<a href=""><img src="whatsapp-fill.svg" id="logo"></a>
	<p><button type="submit" id="add-car" onclick="alert('Agregaste otro elemento al carrito')">Agregar al carrito</button></p>
</section>
</center>
</div>
<div id="container">
<center>
<section id="productos">
	<img src="imagen11.jpg">
	<h3>Samsung
		<p>Galaxy</p>|| 15$</h3>
	<a href=""><img src="whatsapp-fill.svg" id="logo"></a>
	<p><button type="submit" id="add-car" onclick="alert('Agregaste otro elemento al carrito')">Agregar al carrito</button></p>
</section>
</center>
<center>
<section id="productos">
	<img src="imagen12.jpg">
	<h3>Galaxy
		<p>Z</p>|| 15$</h3>
	<a href=""><img src="whatsapp-fill.svg" id="logo"></a>
	<p><button type="submit" id="add-car" onclick="alert('Agregaste otro elemento al carrito')">Agregar al carrito</button></p>
</section>
</center>
</div>
	`
})
document.getElementById('display-more').addEventListener('click', function(){
	const btn1 = document.getElementById('display-more').innerHTML = `
		<style>
		#display-more{
			background: transparent;
			color: transparent;
			display: none;
		}
		</style>
	`
})
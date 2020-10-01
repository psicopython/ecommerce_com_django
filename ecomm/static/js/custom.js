$(document).ready(function(){
	var main = new Vue({
		el: "#main",
		delimiters: ["[%","%]"],
		data: {
			carrinho: [],
			produtos: [
				{id: "1", nome: "camisa 1", preco: 19.90, img:"static/img/camisa1.jpeg"},
				{id: "2", nome: "camisa 2", preco: 19.90, img:"static/img/camisa2.jpeg"},
				{id: "3", nome: "camisa 3", preco: 19.90, img:"static/img/camisa3.jpeg"},
				{id: "4", nome: "calça 1", preco: 59.90,  img:"static/img/calca1.jpeg"},
				{id: "5", nome: "calça 2", preco: 89.90,  img:"static/img/calca2.jpeg"},
				{id: "6", nome: "calça 3", preco: 99.90,   img:"static/img/calca3.jpeg"},
				{id: "7", nome: "tenis 1", preco: 49.90,  img:"static/img/tenis1.jpeg"},
				{id: "8", nome: "tenis 2", preco: 69.90,  img:"static/img/tenis2.jpeg"},
				{id: "9", nome: "tenis 3", preco: 59.90,   img:"static/img/tenis3.jpeg"},
				{id: "10", nome: "blusa 1", preco: 119.90, img:"static/img/blusa1.jpeg"},
				{id: "11", nome: "blusa 2", preco: 119.90, img:"static/img/blusa2.jpeg"},
				{id: "11", nome: "blusa 3", preco: 119.90, img:"static/img/blusa3.jpeg"}
			]
		},
		methods: {
			select: function(opt) {
				if( opt == 'i') {
					$("#nav-inicio").addClass("select");
					$("#nav-produtos").removeClass("select");
					$("#nav-carrinho").removeClass("select");
				} else if( opt == 'p') {
					$("#nav-produtos").addClass("select");
					$("#nav-inicio").removeClass("select");
					$("#nav-carrinho").removeClass("select");
				
				} else if( opt == 'c') {
					$("#nav-carrinho").addClass("select");
					$("#nav-inicio").removeClass("select");
					$("#nav-produtos").removeClass("select");
				}
			},
			addCart: function(item) {
				this.carrinho.push(item)
			}, 
			remCart: function(item){
				var posi = this.carrinho.indexOf(item)
				if (posi >= 0){
					this.carrinho.splice(posi,1);
				}
			},
			cartLen: function() {
				return this.carrinho.length
			},
			inCart: function(item){
				var ok = false;
				if(this.carrinho.indexOf(item) >= 0) ok = true;
				else ok = false;
				return ok
			},
			totalCart: function() {
				var tot = 0;
				if (this.carrinho.length > 0) {
					for (var i =0 ; i < this.carrinho.length;i++){
						tot += this.carrinho[i]['preco'];
					}
				}
				return tot.toFixed(2)
			},
			searchBox: function() {
				$("#search-box").toggle();
			},
			showHide: function(arg) {
				$(arg).toggle();
			},
			show: function(arg) {
				$(arg).show();
			},
			hide: function(arg) {
				$(arg).hide();
			},
			menu: function(arg = false){
				if($('#menu').css("display") == "none") {
					$("#btnMenu").text('X')
				} else {
					$("#btnMenu").text('MENU')
				}
				if (arg) {
					$('#menu').toggle()
				}
			},
			showInicio: function() {
				$('#produtos').hide();
				$('#carrinho').hide();
				$('#finalizar').hide();
				$('#inicio').show();
				this.select('i');
			},
			showProdutos: function() {
				$('#inicio').hide();
				$('#carrinho').hide();
				$('#finalizar').hide();
				$('#produtos').show();
				this.select('p');
			},
			showCarrinho: function() {
				$('#inicio').hide();
				$('#produtos').hide();
				$('#finalizar').hide();
				$('#carrinho').show();
				this.select('c')
			},
			showFinalizar: function(){
				$('#inicio').hide();
				$('#produtos').hide();
				$('#carrinho').hide();
				$('#finalizar').show();
				
			},
			showBoleto: function(){
				$("#metodoCredito").hide()
				$("#metodoDebito").hide()
				$("#metodoMercadoPago").hide()
				$("#metodoBoleto").show()
			},
			showCredito: function(){
				$("#metodoBoleto").hide()
				$("#metodoDebito").hide()
				$("#metodoMercadoPago").hide()
				$("#metodoCredito").show()
			},
			showDebito: function(){
				$("#metodoBoleto").hide()
				$("#metodoCredito").hide()
				$("#metodoMercadoPago").hide()
				$("#metodoDebito").show()
			},
			showMercadoPago: function(){
				$("#metodoBoleto").hide()
				$("#metodoCredito").hide()
				$("#metodoDebito").hide()
				$("#metodoMercadoPago").show()
			},
		}
	})
	function sleep(mili) {
		var inicio = new Date().getTime();
		for (var i=0; i >= mili; i++) {
			if ((new Date().getTime() - inicio) > mili) {
				break;
			}
		}
	}
})

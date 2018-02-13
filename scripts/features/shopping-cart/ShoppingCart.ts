interface ShoppingCartItemList {
	[id: string]: number;
}

class ShoppingCart implements dcore.Module {

	cart: HTMLElement;
	items: ShoppingCartItemList = {};

	constructor(public sandbox: dcore.Sandbox) {
	}

	init(props) {
		this.cart = props.root.querySelector("ul");
	}

	moduleWillSubscribe(): string[] {
		return ['product-added'];
	}

	destroy() {
	}

	moduleDidReceiveMessage(msg: dcore.Message) {
		const product: Product = msg["product"];
		this.sandbox.success(`Product added: ${product.name}`);

		let entry = document.querySelector('#cart-' + product.id + ' .quantity');
		if (entry) {
			entry.innerHTML = (parseInt(entry.innerHTML) + 1).toString();
			this.items[product.id]++;
			return;
		}

		entry = document.createElement('li');
		entry.id = 'cart-' + product.id;
		entry.className = 'cart_entry';

		let name = document.createElement('span');
		name.className = 'product_name';
		name.textContent = product.name;
		let quantity = document.createElement('span');
		quantity.className = 'quantity';
		quantity.textContent = '1';
		let price = document.createElement('span');
		price.className = 'price';
		price.textContent = '$' + product.price.toFixed(2);

		entry.appendChild(name);
		entry.appendChild(quantity);
		entry.appendChild(price);
		this.cart.appendChild(entry);

		this.items[product.id] = 1;
	}
}
interface ProductsView {
	reset(): this;
	filter(name: string): this;
	search(query: string): this;
	addProduct(product: Product): this;
}

class Presenter {

	constructor(
		public sb: dcore.Sandbox,
		public view: ProductsView,
		public model: Product[] = []) {
	}

	changeFilter(name: string) {
		this.view
			.reset()
			.filter(name);
	}

	search(query: string) {
		this.view
			.reset()
			.search(query);
	}

	addToCart(id: number) {
		let product = this.model.filter(p => p.id === id)[0];
		if (product) {
			this.sb.publishAsync({
				type: 'product-added',
				product: product
			});
		}
	}

	reset() {
		this.view.reset();
	}

	addProducts(products: Product[]) {
		this.model = this.model.concat(products);
		products.forEach(product => this.view.addProduct(product));
	}

	destroy(): void {
		// destroy view
	}
}
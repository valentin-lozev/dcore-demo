class Filter implements dcore.Module {

	constructor(public sandbox: dcore.Sandbox) {
		this.filterProducts = this.filterProducts.bind(this);
	}

	init(): void {
		let filters = this.sandbox.root.querySelectorAll('button');
		for (let i = 0; i < filters.length; i++) {
			filters[i].addEventListener('click', this.filterProducts);
		}

	}

	destroy(): void {
		let filters = this.root.querySelectorAll('button');
		for (let i = 0; i < filters.length; i++) {
			filters[i].removeEventListener('click', this.filterProducts);
		}
	}

	filterProducts(ev: Event): void {
		const button = ev.currentTarget as HTMLButtonElement;
		this.sandbox.publishAsync({
			type: 'change-filter',
			filter: button.textContent
		});
	}
}
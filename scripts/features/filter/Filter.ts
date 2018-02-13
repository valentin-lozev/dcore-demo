class Filter implements dcore.Module {

	private view: FilterView;

	constructor(public sandbox: dcore.Sandbox) {
		this.filterProducts = this.filterProducts.bind(this);
	}

	init(): void {
		this.view = this.sandbox.mountView(FilterView, {
			filterProducts: this.filterProducts
		});
		this.view.changeFilters([
			"ALL",
			"RED"
		]);
	}

	destroy(): void {
	}

	filterProducts(filter: string): void {
		this.sandbox.publishAsync({
			type: 'change-filter',
			filter: filter
		});
	}

	changeFilters(): void {
		this.view.changeFilters([
			"ALL",
			"BLUE"
		]);
	}
}
class Search implements dcore.Module {

	root: HTMLElement;
	input: HTMLInputElement;

	constructor(public sandbox: dcore.Sandbox) {
		this.handleSearch = this.handleSearch.bind(this);
	}

	init(props): void {
		this.root = props.root;
		this.input = <HTMLInputElement>this.root.querySelector('#search_input');
		this.input.addEventListener('input', this.handleSearch);
	}

	destroy(): void {
		this.input.removeEventListener("input", this.handleSearch);
	}

	handleSearch(): void {
		const query = this.input.value;
		if (query.trim().length === 0) {
			this.sandbox.publishAsync({
				type: "search-reset"
			});
		} else {
			this.sandbox.publishAsync({
				type: "search-performed",
				query: query
			});
		}
	}
}
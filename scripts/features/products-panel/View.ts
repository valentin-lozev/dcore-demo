class View implements ProductsView {

	presenter: Presenter;

	constructor(private root: HTMLElement) {
	}

	addProduct(product) {
		let productElement = document.createElement("div");
		productElement.innerHTML = '' +
			`<div id="${product.id}" data-keyword="${product.name}" data-click="addToCart" class="product w3-third w3-container w3-margin-bottom">
				<img src="${product.imgSource}" class="w3-hover-opacity">
                <p>${product.name}</p>
            </div>`;

		productElement.firstElementChild.addEventListener("click", ev => this.addToCart(ev));

		this.root.appendChild(productElement.firstElementChild);
		return this;
	}

	filter(name) {
		this.eachProduct(product => {
			if (name !== "ALL" && product.dataset.keyword.toLowerCase().indexOf(name.toLowerCase()) < 0) {
				product.style.opacity = "0.2";
			}
		});
		return this;
	}

	search(query: string) {
		query = query.toLowerCase();
		this.eachProduct(product => {
			if (product.getElementsByTagName("p")[0].innerHTML.toLowerCase().indexOf(query) < 0) {
				product.style.opacity = "0.2";
			}
		});
		return this;
	}

	reset() {
		this.eachProduct(product => product.style.opacity = "1");
		return this;
	}

	addToCart(ev: Event) {
		let target = <HTMLElement>ev.target;
		this.presenter.addToCart(parseInt(target.parentElement.id));
	}

	private eachProduct(action) {
		let productElements = this.root.querySelectorAll(".product");
		for (let i = 0, len = productElements.length; i < len; i++) {
			action(productElements[i]);
		}
	}
}
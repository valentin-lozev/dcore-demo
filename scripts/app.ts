declare namespace dcore {
	const DCore: dcore.CoreClass;
	const app: dcore.Core;
}

const startAll = () => {
	[].forEach.call(
		document.querySelectorAll("[data-module]"),
		(element: HTMLElement) => {
			const id = element.getAttribute("data-module");
			app.startModule(id, {
				instanceId: element.getAttribute("data-instance"),
				props: {
					root: element
				}
			});
		}
	);
}

const app = new dcore.DCore();
app.use([
	moduleQuery(),
	notifier(),
	moduleView()
]);

app.init(() => {
	app.addModule("search", sandbox => new Search(sandbox));
	app.addModule("filter", sandbox => new Filter(sandbox));
	app.addModule("products-panel", sandbox => new ProductsPanel(sandbox));
	app.addModule("shopping-cart", sandbox => new ShoppingCart(sandbox));

	startAll();
});



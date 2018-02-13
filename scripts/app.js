var startAll = function () {
    [].forEach.call(document.querySelectorAll("[data-module]"), function (element) {
        var id = element.getAttribute("data-module");
        app.startModule(id, {
            instanceId: element.getAttribute("data-instance"),
            props: {
                root: element
            }
        });
    });
};
var app = new dcore.DCore();
app.use([
    moduleQuery(),
    notifier(),
    moduleView()
]);
app.init(function () {
    app.addModule("search", function (sandbox) { return new Search(sandbox); });
    app.addModule("filter", function (sandbox) { return new Filter(sandbox); });
    app.addModule("products-panel", function (sandbox) { return new ProductsPanel(sandbox); });
    app.addModule("shopping-cart", function (sandbox) { return new ShoppingCart(sandbox); });
    startAll();
});

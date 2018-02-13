var Presenter = /** @class */ (function () {
    function Presenter(sb, view, model) {
        if (model === void 0) { model = []; }
        this.sb = sb;
        this.view = view;
        this.model = model;
    }
    Presenter.prototype.changeFilter = function (name) {
        this.view
            .reset()
            .filter(name);
    };
    Presenter.prototype.search = function (query) {
        this.view
            .reset()
            .search(query);
    };
    Presenter.prototype.addToCart = function (id) {
        var product = this.model.filter(function (p) { return p.id === id; })[0];
        if (product) {
            this.sb.publishAsync({
                type: 'product-added',
                product: product
            });
        }
    };
    Presenter.prototype.reset = function () {
        this.view.reset();
    };
    Presenter.prototype.addProducts = function (products) {
        var _this = this;
        this.model = this.model.concat(products);
        products.forEach(function (product) { return _this.view.addProduct(product); });
    };
    Presenter.prototype.destroy = function () {
        // destroy view
    };
    return Presenter;
}());

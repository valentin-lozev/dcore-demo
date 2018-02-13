var ProductsPanel = /** @class */ (function () {
    function ProductsPanel(sandbox) {
        this.sandbox = sandbox;
        this.presenter = null;
    }
    ProductsPanel.prototype.init = function () {
        var model = [
            new Product(1, 'Red', 'http://www.technopolis.bg/medias/sys_master/hff/he8/9594025213982.jpg'),
            new Product(2, 'Blue', 'http://www.technopolis.bg/medias/sys_master/h50/h6e/9575018463262.jpg'),
            new Product(3, 'Mobile', 'http://www.technopolis.bg/medias/sys_master/h8e/h79/9480002502686.jpg'),
            new Product(4, 'Accessory', 'http://www.technopolis.bg/medias/sys_master/h04/h70/9360957112350.jpg'),
            new Product(5, 'Red Mobile', 'http://www.technopolis.bg/medias/sys_master/h3f/hcb/9462608330782.jpg'),
            new Product(6, 'Blue Mobile', 'http://www.technopolis.bg/medias/sys_master/hcb/he1/9133450461214.jpg'),
            new Product(7, 'Red Accessory', 'http://www.technopolis.bg/medias/sys_master/h29/h71/9602758967326.jpg'),
            new Product(8, 'Blue Accessory', 'http://www.technopolis.bg/medias/sys_master/ha3/h98/8815351463966.jpg'),
            new Product(9, 'Red Blue', 'http://www.technopolis.bg/medias/sys_master/hb3/ha5/9603644751902.jpg'),
            new Product(10, 'Mobile Accessory', 'http://www.technopolis.bg/medias/sys_master/he1/he1/9525280571422.jpg')
        ];
        var view = new View(this.sandbox.root);
        this.presenter = new Presenter(this.sandbox, view);
        view.presenter = this.presenter;
        this.presenter.addProducts(model);
    };
    ProductsPanel.prototype.moduleWillSubscribe = function () {
        return [
            "change-filter",
            "search-performed",
            "search-reset"
        ];
    };
    ProductsPanel.prototype.destroy = function () {
        this.presenter.destroy();
    };
    ProductsPanel.prototype.moduleDidReceiveMessage = function (msg) {
        switch (msg.type) {
            case "change-filter":
                this.presenter.changeFilter(msg["filter"]);
                break;
            case "search-performed":
                this.presenter.search(msg["query"]);
                break;
            case "search-reset":
                this.presenter.reset();
                break;
        }
    };
    return ProductsPanel;
}());

var Filter = /** @class */ (function () {
    function Filter(sandbox) {
        this.sandbox = sandbox;
        this.filterProducts = this.filterProducts.bind(this);
    }
    Filter.prototype.init = function () {
        this.view = this.sandbox.mountView(FilterView, {
            filterProducts: this.filterProducts
        });
        this.view.changeFilters([
            "ALL",
            "RED"
        ]);
    };
    Filter.prototype.destroy = function () {
    };
    Filter.prototype.filterProducts = function (filter) {
        this.sandbox.publishAsync({
            type: 'change-filter',
            filter: filter
        });
    };
    Filter.prototype.changeFilters = function () {
        this.view.changeFilters([
            "ALL",
            "BLUE"
        ]);
    };
    return Filter;
}());

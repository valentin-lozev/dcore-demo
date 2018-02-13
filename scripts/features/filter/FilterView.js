var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FilterView = /** @class */ (function (_super) {
    __extends(FilterView, _super);
    function FilterView(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFilterClick = _this.handleFilterClick.bind(_this);
        _this.state = {
            filters: []
        };
        return _this;
    }
    FilterView.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "w3-margin-right" }, "Filter:"),
            this.state.filters.map(function (x) { return (React.createElement("button", { key: x, onClick: _this.handleFilterClick, className: "w3-btn" }, x)); })));
    };
    FilterView.prototype.changeFilters = function (filters) {
        this.setState({
            filters: filters
        });
    };
    FilterView.prototype.handleFilterClick = function (ev) {
        this.props.filterProducts(ev.currentTarget.textContent);
    };
    return FilterView;
}(React.Component));

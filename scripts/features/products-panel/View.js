var View = /** @class */ (function () {
    function View(root) {
        this.root = root;
    }
    View.prototype.addProduct = function (product) {
        var _this = this;
        var productElement = document.createElement("div");
        productElement.innerHTML = '' +
            ("<div id=\"" + product.id + "\" data-keyword=\"" + product.name + "\" data-click=\"addToCart\" class=\"product w3-third w3-container w3-margin-bottom\">\n\t\t\t\t<img src=\"" + product.imgSource + "\" class=\"w3-hover-opacity\">\n                <p>" + product.name + "</p>\n            </div>");
        productElement.firstElementChild.addEventListener("click", function (ev) { return _this.addToCart(ev); });
        this.root.appendChild(productElement.firstElementChild);
        return this;
    };
    View.prototype.filter = function (name) {
        this.eachProduct(function (product) {
            if (name !== "ALL" && product.dataset.keyword.toLowerCase().indexOf(name.toLowerCase()) < 0) {
                product.style.opacity = "0.2";
            }
        });
        return this;
    };
    View.prototype.search = function (query) {
        query = query.toLowerCase();
        this.eachProduct(function (product) {
            if (product.getElementsByTagName("p")[0].innerHTML.toLowerCase().indexOf(query) < 0) {
                product.style.opacity = "0.2";
            }
        });
        return this;
    };
    View.prototype.reset = function () {
        this.eachProduct(function (product) { return product.style.opacity = "1"; });
        return this;
    };
    View.prototype.addToCart = function (ev) {
        var target = ev.target;
        this.presenter.addToCart(parseInt(target.parentElement.id));
    };
    View.prototype.eachProduct = function (action) {
        var productElements = this.root.querySelectorAll(".product");
        for (var i = 0, len = productElements.length; i < len; i++) {
            action(productElements[i]);
        }
    };
    return View;
}());

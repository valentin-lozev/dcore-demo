var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(sandbox) {
        this.sandbox = sandbox;
        this.items = {};
    }
    ShoppingCart.prototype.init = function (props) {
        this.cart = props.root.querySelector("ul");
    };
    ShoppingCart.prototype.moduleWillSubscribe = function () {
        return ['product-added'];
    };
    ShoppingCart.prototype.destroy = function () {
    };
    ShoppingCart.prototype.moduleDidReceiveMessage = function (msg) {
        var product = msg["product"];
        this.sandbox.success("Product added: " + product.name);
        var entry = document.querySelector('#cart-' + product.id + ' .quantity');
        if (entry) {
            entry.innerHTML = (parseInt(entry.innerHTML) + 1).toString();
            this.items[product.id]++;
            return;
        }
        entry = document.createElement('li');
        entry.id = 'cart-' + product.id;
        entry.className = 'cart_entry';
        var name = document.createElement('span');
        name.className = 'product_name';
        name.textContent = product.name;
        var quantity = document.createElement('span');
        quantity.className = 'quantity';
        quantity.textContent = '1';
        var price = document.createElement('span');
        price.className = 'price';
        price.textContent = '$' + product.price.toFixed(2);
        entry.appendChild(name);
        entry.appendChild(quantity);
        entry.appendChild(price);
        this.cart.appendChild(entry);
        this.items[product.id] = 1;
    };
    return ShoppingCart;
}());

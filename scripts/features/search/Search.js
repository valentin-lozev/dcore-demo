var Search = /** @class */ (function () {
    function Search(sandbox) {
        this.sandbox = sandbox;
        this.handleSearch = this.handleSearch.bind(this);
    }
    Search.prototype.init = function (props) {
        this.root = props.root;
        this.input = this.root.querySelector('#search_input');
        this.input.addEventListener('input', this.handleSearch);
    };
    Search.prototype.destroy = function () {
        this.input.removeEventListener("input", this.handleSearch);
    };
    Search.prototype.handleSearch = function () {
        var query = this.input.value;
        if (query.trim().length === 0) {
            this.sandbox.publishAsync({
                type: "search-reset"
            });
        }
        else {
            this.sandbox.publishAsync({
                type: "search-performed",
                query: query
            });
        }
    };
    return Search;
}());

var moduleQuery = function () {
    return {
        name: 'module-query',
        install: function (dcore) {
            dcore.Sandbox.prototype.query = function (selector) {
                return this.root.querySelector(selector);
            };
            return {
                onModuleInit: function (next, props) {
                    this.sandbox.root = props.root;
                    next();
                }
            };
        }
    };
};

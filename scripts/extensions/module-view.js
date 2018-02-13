var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var moduleView = function () {
    return {
        name: "module-view",
        install: function (dcore) {
            dcore.Sandbox.prototype.mountView = function (View, props) {
                return ReactDOM.render(React.createElement(View, __assign({}, props)), this.root);
            };
            return {
                onModuleDestroy: function () {
                    ReactDOM.unmountComponentAtNode(this.sandbox.root);
                }
            };
        }
    };
};

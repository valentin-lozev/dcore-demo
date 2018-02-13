declare namespace dcore {
	interface Sandbox {
		mountView?<TProps, TView>(
			view: React.ComponentClass<TProps>,
			props: TProps): TView;
	}
}

const moduleView = () => {
	return {
		name: "module-view",
		install: dcore => {

			dcore.Sandbox.prototype.mountView = function (
				this: dcore.Sandbox,
				View: React.ComponentClass,
				props: Record<string, any>): any {
				return ReactDOM.render(<View {...props} />, this.root);
			};

			return {
				onModuleDestroy: function (this: dcore.Module): void {
					ReactDOM.unmountComponentAtNode(this.sandbox.root);
				}
			};
		}
	} as dcore.Extension;
}
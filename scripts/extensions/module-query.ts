declare namespace dcore {
	interface Sandbox {
		root?: HTMLElement;
		query?(selector: string): HTMLElement;
	}
}

const moduleQuery = function () {

	return <dcore.Extension>{
		name: 'module-query',
		install: function (dcore) {

			dcore.Sandbox.prototype.query = function (this: dcore.Sandbox, selector: string): HTMLElement {
				return this.root.querySelector(selector) as HTMLElement;
			};

			return {
				onModuleInit: function (this: dcore.Module, next: () => void, props: Record<string, any>): void {
					this.sandbox.root = props.root;
					next();
				}
			};
		}
	};
};
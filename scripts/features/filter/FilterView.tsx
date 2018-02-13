interface Props {
	filterProducts(filter: string): void;
}

interface State {
	filters: string[];
}

class FilterView extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.handleFilterClick = this.handleFilterClick.bind(this);
		this.state = {
			filters: []
		};
	}

	render(): React.ReactNode {
		return (
			<React.Fragment>
				<span className="w3-margin-right">Filter:</span>
				{this.state.filters.map(x => (
					<button
						key={x}
						onClick={this.handleFilterClick}
						className="w3-btn">{x}</button>
				))}
			</React.Fragment>
		);
	}

	changeFilters(filters: string[]): void {
		this.setState({
			filters: filters
		});
	}

	private handleFilterClick(ev: React.MouseEvent<HTMLButtonElement>): void {
		this.props.filterProducts(ev.currentTarget.textContent);
	}
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterGroups } from '../../actions/filterActions';

class SearchBlock extends Component {
	constructor() {
		super();
		this.state = {
			textFilter: ''
		};

		this.searchGroupsMatch = this.searchGroupsMatch.bind(this)
	}

	searchGroupsMatch(e) {
		const searchText = e.target.value;
		this.props.filterGroups(searchText)
	}

	render() {
		return (
			<div className="search__block isActive">
				<input name="search" onInput={this.searchGroupsMatch}/>
				<i className="fas fa-search active"> </i>
			</div>
		);
	}
}

SearchBlock.propTypes = {
	filterGroups: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	textFilter: state.textFilter
});

export default connect(mapStateToProps, { filterGroups })(SearchBlock);

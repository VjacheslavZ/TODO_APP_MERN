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

		this.handleSearchGroup = this.handleSearchGroup.bind(this)
	}

	handleSearchGroup(e) {
		const { value } = e.target;
		this.props.filterGroups(value)
	}

	render() {
		return (
			<div className="search__block isActive">
				<input name="search" onInput={this.handleSearchGroup} placeholder='todo placeHolder'/>
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

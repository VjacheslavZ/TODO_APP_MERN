import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from "classnames";
import { toggleNavBar } from '../../actions/sideNavActions';

class SideNavBtn extends Component {
	constructor() {
		super();

		this.state = { isActiveNavBar: false };
	}

	onToggleNavBar() {
		const { isActiveNavBar }=  this.state;

		this.props.toggleNavBar(isActiveNavBar)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			isActiveNavBar: nextProps.navBar.isActiveNavBar
		})
	}

	render() {
		return (
			<button className={classnames('hamburger hamburger--spin js-hamburger ', {'is-active' : this.state.isActiveNavBar})}
			        type="button"
			        onClick={() => this.onToggleNavBar()}>
				<span className="hamburger-box">
					<span className="hamburger-inner"> </span>
				</span>
			</button>
		);
	}
}

SideNavBtn.propTypes = {
	navBar: PropTypes.object.isRequired,
	toggleNavBar: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	navBar: state.navBar,
});

export default connect(mapStateToProps, {toggleNavBar})(SideNavBtn);

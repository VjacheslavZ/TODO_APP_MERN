import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router';
import PropTypes from 'prop-types';
import classnames from "classnames";
import { toggleNavBar } from '../../actions/sideNavActions';

class SideNavBtn extends Component {
	constructor() {
		super();

		this.state = { 
			isActiveNavBar: false,
			isDisabled: false
		};
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			isActiveNavBar: nextProps.navBar.isActiveNavBar
		})
	}

	handleClick() {
		if(this.props.onClosePage) {
			this.props.history.push('/groups');
			return
		}

		const { isActiveNavBar }=  this.state;
		this.props.toggleNavBar(isActiveNavBar);
	}

	render() {
		return (
			<button className={classnames('hamburger hamburger--spin js-hamburger ',
					{'is-active' : this.state.isActiveNavBar || this.props.isDisabled})}
					type="button"
					onClick={() => this.handleClick()}>
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

export default connect(mapStateToProps, {toggleNavBar})(withRouter (SideNavBtn));

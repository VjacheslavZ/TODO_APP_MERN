import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import PropTypes from 'prop-types';

import SideNav from '../sideNav/SideNav'
import { toggleNavBar } from '../../actions/sideNavActions';

class Groups extends Component {
	constructor() {
		super();

		this.state = { isActiveNavBar: false }
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
			<Fragment>
				<SideNav isActiveNavBar={this.state.isActiveNavBar}/>

				<div className="groups">
					<div className="page__title_small">
						<div className="nav__block">

							<button className={classnames('hamburger hamburger--spin js-hamburger ', {'is-active' : this.state.isActiveNavBar})}
							        type="button"
							        onClick={() => this.onToggleNavBar()}>
								<span className="hamburger-box">
									<span className="hamburger-inner"> </span>
								</span>
							</button>

							<div className="search__block isActive">
								<input name="search"/><i className="fas fa-search active"></i>
							</div>
						</div>
						<h1>My Groups</h1>
					</div>
					<div className="groups__categories">
						<ul>
							<li className="groups__item">
								<a href="list.href">
									<span className="group__name">Shop</span>
									<span className="group__count">25 items</span>
								<span className="group__color"> </span>
								</a>
							</li>

							<li className="groups__item">
								<a href="list.href">
									<span className="group__name">Shop</span>
									<span className="group__count">25 items</span>
									<span className="group__color"> </span>
								</a>
							</li>

							<li className="groups__item">
								<a href="list.href">
									<span className="group__name">Shop</span>
									<span className="group__count">25 items</span>
									<span className="group__color"> </span>
								</a>
							</li>

						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

Groups.propTypes = {};

const mapStateToProps = (state) => ({
	navBar: state.navBar,
});

export default connect(mapStateToProps, {toggleNavBar})(Groups);

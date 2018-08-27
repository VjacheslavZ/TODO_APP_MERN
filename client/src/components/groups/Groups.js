import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Groups extends Component {
	render() {
		return (
			<Fragment>
				<div className="bg_nav active">
					<div className="sidenav">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="register.html">register</a></li>
							<li><a href="login.html">login</a></li>
							<li><a href="create.html">create</a></li>
							<li><a href="groups.html">groups</a></li>
							<li><a href="list.html">list</a></li>
							<li><a href="time_line.html">time line</a></li>
						</ul>
					</div>
				</div>

				<div className="groups">
					<div className="page__title_small">
						<div className="nav__block">
							<button className="hamburger hamburger--spin js-hamburger is-active" type="button"><span
								className="hamburger-box"><span className="hamburger-inner"></span></span></button>
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

export default Groups;

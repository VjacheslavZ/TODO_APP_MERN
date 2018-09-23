import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideNavBtn from "../common/SideNavBtn";

import { addNewTask } from "../../actions/addNewTaskAction";

import TextFieldCroup from '../common/TextFieldGroup';
import BtnAdd from '../common/BtnAdd';

class AddNewTask extends Component {
	constructor() {
		super();

		this.state = {
			task_short_desc: '',
			location: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		
		const newTaskData = {
			task_short_desc: this.state.task_short_desc,
			from: this.state.from,
			to: this.state.to,
			location: this.state.location,
		};
		this.props.addNewTask(newTaskData, this.props.history)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}

	render() {
		const { errors } = this.state;
		console.log(errors)
		const subUrl = this.props.match.params.subGroup;

		return (
			<div className='create'>
				<div className="page__title_small">
					<div className="nav__block">
						<SideNavBtn isDisabled={true} onClosePage={true}/>
					</div>
					<h1 className='create__title'>{subUrl}</h1>
				</div>

				<div className="create__data">
					<form onSubmit={this.onSubmit}>
						<div className="create__description">
							<TextFieldCroup
								className="create__input"
								type="text"
								placeholder="Short description"
								name="task_short_desc"
								onChange={this.onChange}
								error={errors.task_short_desc}
							/>
						</div>

						<div className="create__duration">
							<span>From</span>
							<TextFieldCroup
								className="create__input"
								type="date"
								name="from"
								required="required"
								onChange={this.onChange}
								error={errors.from}
							/>
						</div>

						<div className="create__duration">
							<span>To</span>
							<TextFieldCroup
								className="create__input"
								type="date"
								name="to"
								required="required"
								onChange={this.onChange}
								error={errors.to}
							/>
						</div>

						<div className="create__description">
							<TextFieldCroup
								className="create__input"
								type="text"
								name="location"
								placeholder='Location'
								onChange={this.onChange}
								error={errors.location}
							/>
						</div>

						<BtnAdd type="submit"/>
					</form>
				</div>
			</div>
		);
	}
}

// AddNewTask.js.propTypes = {};

const mapStateToProps = (state) => ({
	errors: state.errors
});

export default connect(mapStateToProps, {addNewTask})(AddNewTask) ;

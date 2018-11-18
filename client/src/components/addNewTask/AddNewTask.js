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
			taskName: '',
			taskDescpiption: '',
			errors: {}
		};
		this.inputsData = {};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		// this.setState({ [e.target.name]: e.target.value});
		this.inputsData[e.target.name]= e.target.value;
	}

	onSubmit(e) {
		e.preventDefault();
		/*const newTaskData = {
			id: Date.now(),
			taskName: this.state.taskName,
			from: this.state.from,
			to: this.state.to,
			taskDescpiption: this.state.taskDescpiption,
		};*/
		const newTaskData = this.inputsData;
		const groupId =  this.props.match.params.subGroup;
		const history =  this.props.history;

		this.props.addNewTask(newTaskData, groupId, history);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}

	render() {
		const { errors } = this.state;
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
								name="taskName"
								onChange={this.onChange}
								error={errors.taskName}
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
								name="taskDescpiption"
								placeholder='taskDescpiption'
								onChange={this.onChange}
								error={errors.taskDescpiption}
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

export default connect(mapStateToProps, { addNewTask })(AddNewTask) ;

import React, { Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldCroup = ({
	name,
	placeholder,
	value,
	type,
	onChange,
	required,
	className,
    disabled,
	error,
	}) => {
	return (
		<Fragment>
			<input name={name}
			       placeholder={placeholder}
			       value={value}
			       type={type}
			       onChange={onChange}
			       required={required}
			       className={className}
			       disabled={disabled}
			/>

			{error && (<div className="invalid-feedback">{error}</div>)}
		</Fragment>
	)
};

TextFieldCroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	required: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.string,
	error: PropTypes.string,

};

export default TextFieldCroup;
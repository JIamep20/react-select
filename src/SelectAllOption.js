import React from 'react';
import Option from './Option';

class SelectAllOption extends Option {
	handleMouseDown (event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.toggleAllSelection(this.props.option, event);
	}
}

export default SelectAllOption;

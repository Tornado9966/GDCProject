import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

export class EngCheckbox extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        index: PropTypes.number, 
        delay: PropTypes.number,
        checked: PropTypes.bool, 
        disabled: PropTypes.bool, 
        onChange: PropTypes.func
    };

    static defaultProps = {
        delay: 200, 
        index: 0,
        checked: true, 
        disabled: true, 
        onChange: () => {}
    };

    state = {
        isVisible: false
    };
   
    componentDidMount() {
        const { delay, index } = this.props;
        const timeout = index * delay;
        return setTimeout(() => this.setState({ isVisible: true }), timeout);
    }

    render() {
        const { checked, disabled, label, onChange } = this.props;
        const {isVisible } = this.state;
        const checkboxClass = classnames('modal-checkbox', {
            visible: isVisible,
            hidden: !isVisible
        });
        return(
            <Checkbox
                checked={checked}
                disabled={disabled}
                className={checkboxClass}
                label={label}
                onChange={() => onChange(label)}
            />
        );
    }
}


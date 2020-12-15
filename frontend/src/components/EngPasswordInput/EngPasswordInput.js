import React, { Component } from 'react';
import {
    Button, Form, Icon
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class EngPasswordInput extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        error: PropTypes.bool, 
        fluid: PropTypes.bool,
        value: PropTypes.string, 
        message: PropTypes.string,  
        placeholder: PropTypes.string,
        iconvisible: PropTypes.string,
        iconunvisible: PropTypes.string, 
        password: PropTypes.string, 
        text: PropTypes.string,
        icon: PropTypes.string, 
        iconPosition: PropTypes.string, 
        onChange: PropTypes.func
    };

    static defaultProps = {
        error: false,
        fluid: true, 
        value: '', 
        message: '',
        placeholder: '', 
        iconvisible: 'eye', 
        iconunvisible: 'eye slash',
        password: 'password', 
        text: 'text', 
        icon: 'lock',
        iconPosition: 'left',
        onChange: () => {}
    };

    state = {
        visible: false
    };

    changeVisibility = () => {
        return this.setState(prevState => {
            return {visible: !prevState.visible};
        });
    };

    render() {
        const { 
            iconvisible, 
            iconunvisible, 
            text, 
            password
        } = this.props;

        const { visible } = this.state;
    
        return(
            <Form.Input
                action={
                    <Button icon onClick={this.changeVisibility}>
                        <Icon 
                            name={visible ? iconvisible : iconunvisible}  
                        />
                    </Button>
                }
                type={visible ? text : password}
                {...this.props}
            />
        );
    }
}

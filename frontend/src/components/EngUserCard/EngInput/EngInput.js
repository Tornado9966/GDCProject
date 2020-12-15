import React, { Component, Fragment } from 'react';
import {
    Input, Button, Label, Placeholder
} from 'semantic-ui-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { done, exit } from 'constants/text-constants';
import { isInvalid } from 'components/utils/isInvalid';

import './styles.scss';

export class EngInput extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired, 
        initialValue: PropTypes.object,
        value: PropTypes.string, 
        iconPosition: PropTypes.string,
        error: PropTypes.string, 
        icon: PropTypes.string, 
        handleSave: PropTypes.func
    };

    static defaultProps = {
        value: null,
        initialValue: null, 
        error: '',
        icon: 'user', 
        iconPosition: 'left',
        handleSave: () => {}
    };

    state = {
        editing: false,
        error: this.props.error,
        value: this.props.value
    };

    componentDidUpdate(prevProps) {
        const {value, error} = this.props;
        if (value !== prevProps.value) {
          return this.updateValue({value});
        }
        else if(error !== prevProps.error) {
            return this.updateValue({error});
        }
    }

    updateValue = value => this.setState(value);

    handleClick = () => this.setState({editing: true});

    handleExit = () => this.setState({editing: false});
       
    handleSave = () => {
        const { value } = this.state;
        const { name, value: prevValue, initialValue } = this.props;
        if(value !== prevValue) {
           this.setState({value: initialValue});
           this.props.handleSave(name, value);
        }
        return this.handleExit();
    }; 

    handleChange = ({target: { value }}) => {
        const { name } = this.props;
        const error = isInvalid(value, name);
        return this.setState({value, error});
    };

    render() {
        const { icon, iconPosition, initialValue } = this.props; 
        const { editing, error, value } = this.state;
        const inputClasses = classnames('profile-input', {
            'hidden-border': !editing, 
            'error': error, 
            'visible-border': !error && editing
        });
        return(
            <Fragment>
                {value !== initialValue ? 
                    <Fragment>
                        {
                            error && (
                                <Label 
                                    pointing='below' 
                                    className='error-label'
                                >
                                    {error}
                                </Label>
                            )
                        }
                        <div className='input-wrapper'>
                            <Input 
                                fluid
                                icon={icon}
                                iconPosition={iconPosition}
                                className={inputClasses}
                                value={editing ? this.state.value : this.props.value}
                                onClick={this.handleClick}
                                onChange={this.handleChange}
                            />
                            {
                                editing && (
                                    <Button.Group>
                                        <Button 
                                            className='done' 
                                            disabled={Boolean(error)} 
                                            onClick={this.handleSave}
                                        >
                                            {done}
                                        </Button>
                                        <Button.Or />
                                        <Button 
                                            className='exit' 
                                            onClick={this.handleExit}
                                        >
                                            {exit}
                                        </Button>
                                    </Button.Group>
                                )
                            }
                        </div>
                    </Fragment> 
                    : 
                    <Placeholder className='profile-placeholder'>
                            <Placeholder.Line />
                    </Placeholder>
                }
            </Fragment>
        );
    }
}

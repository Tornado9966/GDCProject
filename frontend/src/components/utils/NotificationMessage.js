import React from 'react';
import propTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import { errorText } from 'constants/text-constants';

class NotificationMessage extends React.Component {
    render() {
        return (
            this.props.success ?
                (<Message success>
                    <Message.Header>{this.props.headerText}</Message.Header>
                    <p>{this.props.thanksText}</p>
                    {this.props.children}
                 </Message>) :
                (<Message error>
                    <Message.Header>{this.props.errorText}</Message.Header>
                 </Message>)
        );
    }
}

NotificationMessage.propTypes = {
    errorText: propTypes.string,
    headerText: propTypes.string,
    thanksText: propTypes.string
};

NotificationMessage.defaultProps = {
    errorText: errorText,
    headerText: '',
    thanksText: ''
};

export default NotificationMessage;
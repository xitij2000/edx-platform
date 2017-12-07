import React from 'react';
import Modal from '@edx/paragon/src/Modal/index';
import PropTypes from 'prop-types';

class ModalWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

        this.state = { open: false };
    }

    openModal() {
        this.setState({ open: true });
    }

    resetModalWrapperState() {
        this.setState({ open: false });
        this.button.focus();
    }

    render() {
        return (
        <div>
            <Modal
            open={this.state.open}
            title={this.props.title}
            body={this.props.body}
            onClose={this.resetModalWrapperState}
            />
            <Button
            onClick={this.openModal}
            label="Click me to open a modal!"
            buttonType="light"
            inputRef={(input) => { this.button = input; }}
            />
        </div>
        );
    }
}
ModalWrapper.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
  
ModalWrapper.defaultProps = {
    open: false,
};


export class Modalx extends React.Component{
    render(){
        return (
            <ModalWrapper
                title="Matt's Modal"
                body="This is Matt's Bio"
            />
        )
    }
}
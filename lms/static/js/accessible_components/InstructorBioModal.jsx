import React from 'react';
import Modal from '@edx/paragon/src/Modal/index';
import PropTypes from 'prop-types';

export class InstructorBioModal extends React.Component {
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
            <button className="btn btn-primary" onClick={this.openModal} ref={(button)=>{this.button=button}}>
                {gettext('View Bio')}
            </button>
        </div>
        );
    }
}
InstructorBioModal.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
  
InstructorBioModal.defaultProps = {
    open: false,
};

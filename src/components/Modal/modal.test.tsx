import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './index';
import '@testing-library/jest-dom';

describe('Modal component', () => {
  it('renders nothing when isOpen is false', () => {
    const { container } = render(<Modal isOpen={false}>Content</Modal>);
    expect(container.firstChild).toBeNull();
  });

  it('renders the modal content when isOpen is true', () => {
    const { getByText } = render(<Modal isOpen={true}>Content</Modal>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('calls onClose when the overlay is clicked', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        Content
      </Modal>
    );

    fireEvent.click(getByTestId('modal-overlay'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not call onClose when the modal content is clicked', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(<Modal isOpen={true}>Content</Modal>);
    fireEvent.click(getByTestId('modal-overlay'));
    expect(handleClose).not.toHaveBeenCalled();
  });
});

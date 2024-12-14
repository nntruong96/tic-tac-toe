import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cell from './Cell';
import { CellPlayer } from '@/types/enum';
import '@testing-library/jest-dom';

describe('Cell component', () => {
  const onClickMock = jest.fn();

  it('renders without crashing', () => {
    const { container } = render(<Cell cell={null} isHighlighted={false} onClick={onClickMock} />);
    expect(container).toBeInTheDocument();
  });

  it('renders XIcon when cell is CellPlayer.X', () => {
    const { getByTestId } = render(
      <Cell cell={CellPlayer.X} isHighlighted={false} onClick={onClickMock} />
    );
    expect(getByTestId('cell-x-icon')).toBeInTheDocument();
  });

  it('renders OIcon when cell is CellPlayer.O', () => {
    const { getByTestId } = render(
      <Cell cell={CellPlayer.O} isHighlighted={false} onClick={onClickMock} />
    );
    expect(getByTestId('cell-o-icon')).toBeInTheDocument();
  });

  it('applies highlighted styles when isHighlighted is true', () => {
    const { container } = render(
      <Cell cell={CellPlayer.X} isHighlighted={true} onClick={onClickMock} />
    );
    expect(container.firstChild).toHaveClass('bg-teal-400');
  });

  it('applies non-highlighted styles when isHighlighted is false', () => {
    const { container } = render(
      <Cell cell={CellPlayer.X} isHighlighted={false} onClick={onClickMock} />
    );
    expect(container.firstChild).toHaveClass('bg-navy-400');
  });

  it('calls onClick when clicked and not disabled', () => {
    const { container } = render(<Cell cell={null} isHighlighted={false} onClick={onClickMock} />);
    expect(container.firstChild).toHaveClass('bg-navy-400');
    fireEvent.click(container.firstChild!);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('does not call onClick when clicked and disabled', () => {
    const { container } = render(
      <Cell cell={CellPlayer.X} isHighlighted={false} onClick={onClickMock} disabled={true} />
    );
    expect(container.firstChild).toHaveClass('bg-navy-400');
    fireEvent.click(container.firstChild!);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});

/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';
import { Button } from ".";

const fn = jest.fn();

describe('<Button />', () => {
  it('should render ther button with the text "Load more posts"', () => {
    render(<Button text="Load more posts" onClick={fn} />);

    const button = screen.getByRole('button', { text: 'Load more posts' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'button');
  });

  it('should call function on button click', () => {
    render(<Button text="Load more posts" onClick={fn} />);

    const button = screen.getByRole('button', { text: 'Load more posts' });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more posts" onClick={fn} />);

    const button = screen.getByRole('button', { text: 'Load more posts' });

    expect(button).not.toBeDisabled();
  });
});

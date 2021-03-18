import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe('<Button />', () => {
    it('should render ther button with the text "Load more posts"', () => {
        render(<Button text="Load more posts" />);

        const button = screen.getByRole('button', { text: 'Load more posts' });

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('class', 'button');
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more posts" onClick={fn} />);

        const button = screen.getByRole('button', { text: 'Load more posts' });
        
        fireEvent.click(button);
        fireEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more posts" />);

        const button = screen.getByRole('button', { text: 'Load more posts' });

        expect(button).not.toBeDisabled();
    });
});
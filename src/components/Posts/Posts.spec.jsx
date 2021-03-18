import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import { Posts } from '.';

const mock = [
    { id: 1, title: 'Title', body: 'Body' }
]

describe('<Post />', () => {
    it('should render Post correctly', () => {
        render(<Posts posts={mock} />);
        expect(screen.getByRole('heading', { name: mock[0].title })).toBeInTheDocument();
    });
});
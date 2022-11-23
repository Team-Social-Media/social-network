import { render, screen } from '@testing-library/react';
import Home from '../pages';
import '@testing-library/jest-dom';

describe('Home', ()=> {
  it('renders heading', () => {
    render(<Home/>)

    const headingLeftBar = screen.getByRole('heading', {
      name: 'Browse Media',
    });

    const headingRightBar = screen.getByRole('heading', {
      name: 'Recommended',
    });

    const button = screen.getByRole('button', {
      name: 'Movies',
    });

    const img = screen.getByRole('img', {
      name: 'Black Panther: Wakanda Forever',
    });

    const link = screen.getByRole('link', {
      name: 'Kris',
    });

    expect(headingLeftBar).toBeInTheDocument();
    expect(headingRightBar).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(link).toBeInTheDocument();

  });
});
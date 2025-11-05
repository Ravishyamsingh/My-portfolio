import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the portfolio call to action', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/explore projects/i)).toBeInTheDocument();
  });
});

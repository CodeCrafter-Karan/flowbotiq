import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../pages/Home';

describe('Home Component', () => {
  it('renders the home page', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </HelmetProvider>
    );
    
    // Check for main heading
    const heading = screen.getByText(/Let's build the digital backbone/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the pain points section', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </HelmetProvider>
    );
    
    // Check for pain points heading
    const painPointsHeading = screen.getByText(/Your actual problem/i);
    expect(painPointsHeading).toBeInTheDocument();
  });

  it('renders services section', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </HelmetProvider>
    );
    
    // Check for at least one service
    const serviceHeading = screen.queryByText(/Your Business, Online & Selling 24\/7/i);
    expect(serviceHeading).toBeInTheDocument();
  });
});

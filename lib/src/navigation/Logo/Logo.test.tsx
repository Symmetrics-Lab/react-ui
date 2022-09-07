import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('LogoNav', () => {
  test('it should render without crashing', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" />);
    expect(screen.getAllByRole('img')).toBeDefined();
  });
  test('it should have a alt property', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" alt="Hello" />);
    const logo = screen.getAllByRole('img')[1];
    expect(logo.getAttribute('alt')).equal('Hello');
  });

  test('it should have a large classname property', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" alt="Hello" />);
    const logo = screen.getAllByRole('link')[1];
    expect(logo.className).includes('sym-logo-lg');
  });
  test('it should allow custom className for desktop', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" className="testClass" alt="Hello" />);
    const logo = screen.getAllByRole('link')[1];
    expect(logo.className).includes('testClass');
  });

  test('it should allow custom className for desktop', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" className="testClass" alt="Hello" />);
    const logo = screen.getAllByRole('link')[1];
    expect(logo.className).includes('testClass');
  });

  test('it should allow a link for the logo', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" href="/testing" />);
    const logo = screen.getAllByRole('link')[1];
    expect(logo.getAttribute('href')).equal('/testing');
  });
});

describe('LogoNav Mobile', () => {
  test('it should have a altMobile property', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" altMobile="Hello Mov" />);
    const logo = screen.getAllByRole('img')[0];
    expect(logo.getAttribute('alt')).equal('Hello Mov');
  });

  test('it should have a sm classname property', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" alt="Hello" />);
    const logo = screen.getAllByRole('link')[0];
    expect(logo.className).includes('sym-logo-sm');
  });
  test('it should allow custom className for mobile', () => {
    render(
      <Logo src="https://symlab.io/foot-icon.svg" classNameMobile="testClassMob" alt="Hello" />
    );
    const logo = screen.getAllByRole('link')[0];
    expect(logo.className).includes('testClassMob');
  });

  test('it should allow a link for the logo mobile', () => {
    render(<Logo src="https://symlab.io/foot-icon.svg" href="/testing" />);
    const logo = screen.getAllByRole('link')[0];
    expect(logo.getAttribute('href')).equal('/testing');
  });
});

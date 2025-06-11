import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

// 1. Mock de react-dom/client
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn().mockReturnValue({
    render: vi.fn(),
  }),
}));

// 2. Mock del componente App
vi.mock('./App', () => ({
  default: () => <div>Mocked App</div>,
}));

vi.mock('@styles/main.scss', () => ({}));

describe('Application Root', () => {
  let rootContainer: HTMLElement;

  beforeEach(() => {
    rootContainer = document.createElement('div');
    rootContainer.id = 'root';
    document.body.appendChild(rootContainer);
    vi.resetModules();
  });

  it('renders App inside StrictMode', async () => {
    await import('./main.tsx');

    expect(createRoot).toHaveBeenCalledWith(rootContainer);

    const mockRoot = createRoot(rootContainer);
    expect(mockRoot.render).toHaveBeenCalledWith(
      <StrictMode>
        <App />
      </StrictMode>
    );

    expect(mockRoot.render).toHaveBeenCalled();
  });
});

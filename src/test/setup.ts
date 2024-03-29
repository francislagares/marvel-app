import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';

import { server } from '@/mocks/server';

// Mock next/navigation module
// Establish API mocking before all tests.
// Mocking methods which are not implemented in JSDOM
beforeAll(() => {
  vi.mock('next/navigation', async () => {
    const actual = await vi.importActual('next/navigation');
    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
      })),
      useSearchParams: vi.fn(() => ({})),
      usePathname: vi.fn(),
    };
  });

  server.listen();

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

// Reset any request handlers that we may add during the tests, so they don't affect other tests.
// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

// Clean up after the tests are finished.
afterAll(() => {
  server.close();
});

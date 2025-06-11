// src/test/setup.ts
import '@testing-library/jest-dom';
import { beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';

beforeEach(() => {
  cleanup();
});

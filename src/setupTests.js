import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mock Firebase
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
  getApps: vi.fn(() => []),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(() => Promise.resolve({ exists: () => false })),
  setDoc: vi.fn(),
  increment: vi.fn(),
}));

// Mock Global Fetch for Gemini
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      candidates: [{ content: { parts: [{ text: "Mock AI Response" }] } }]
    }),
  })
);

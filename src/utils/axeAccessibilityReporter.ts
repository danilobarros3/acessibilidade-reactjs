export async function axeAccessibilityReporter() {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const axe = await import('@axe-core/react');
    const React = await import('react');
    const ReactDOM = await import('react-dom');

    axe.default(React, ReactDOM, 1000);
  }
}

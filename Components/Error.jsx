import React from 'react';

export default function Error() {
  return (
    <>
      <h1>Unexpected Application Error!</h1>

      <h3>404 Not Found</h3>

      <h5>Hey developer</h5>
      <p>You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.</p>
    </>
  );
}

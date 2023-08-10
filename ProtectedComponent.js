import React from 'react';

function ProtectedComponent() {
  return (
    <div>
      <h2>Protected Content</h2>
      <p>This is protected content that only authenticated users can access.</p>
    </div>
  );
}

export default ProtectedComponent;

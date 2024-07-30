import React from 'react';

const TestComponent: React.FC = () => {
  const cartItems = 5; // Static value for testing

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View cart</span>
        <span className="h-6 w-6 bg-gray-500">Cart</span>
        {cartItems > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 rounded-full">
            {cartItems}
          </span>
        )}
      </button>
    </div>
  );
};

export default TestComponent;

'use client';

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Billing</h1>
      <div className="space-y-6">
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-lg font-medium">Current Plan</h3>
          <p className="text-gray-400">You are currently on the <span className="text-accent">Free</span> plan.</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-lg font-medium">Payment Method</h3>
          <p className="text-gray-400">No payment method on file.</p>
          <button className="mt-4 px-4 py-2 text-white bg-accent rounded-md hover:bg-accent-dark">
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}

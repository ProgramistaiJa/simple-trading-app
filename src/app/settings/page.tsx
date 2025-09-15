'use client';

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center">Settings</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Manage your account settings and preferences.
        </p>
        {/* Add settings content here */}
      </div>
    </div>
  );
}

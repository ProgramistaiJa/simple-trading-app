'use client';

import { useState } from "react";

export default function NotificationsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Email Notifications</h3>
            <p className="text-gray-400">Receive notifications via email.</p>
          </div>
          <button
            onClick={() => setEmailNotifications(!emailNotifications)}
            className={`${emailNotifications ? 'bg-accent' : 'bg-gray-600'} relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className={`${emailNotifications ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Push Notifications</h3>
            <p className="text-gray-400">Receive push notifications in your browser.</p>
          </div>
          <button
            onClick={() => setPushNotifications(!pushNotifications)}
            className={`${pushNotifications ? 'bg-accent' : 'bg-gray-600'} relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className={`${pushNotifications ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useAuth } from "@/app/AuthContext";
import { useState } from "react";

export default function ProfilePage() {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Display Name:", displayName, "Email:", email);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <form onSubmit={handleProfileUpdate} className="space-y-6">
        <div>
          <label htmlFor="displayName" className="block text-sm font-medium text-gray-300">Display Name</label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="block w-full px-3 py-2 mt-1 bg-primary border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 mt-1 bg-primary border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            disabled
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex justify-center px-4 py-2 text-sm font-medium text-white bg-accent border border-transparent rounded-md shadow-sm hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

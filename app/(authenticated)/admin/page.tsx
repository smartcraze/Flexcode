import React from 'react';

import { UserButton } from '@clerk/nextjs';

function Admin() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-500">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          
          <UserButton />
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-600">Manage user accounts, permissions, and settings.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Go to User Management
          </button>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Project Management</h2>
          <p className="text-gray-600">Create, edit, and monitor projects.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Go to Project Management
          </button>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p className="text-gray-600">View project statistics and user activity.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            View Analytics
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-600">Adjust application settings and preferences.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Go to Settings
          </button>
        </div>
      </section>
    </div>
  );
}

export default Admin;

import React, {useState} from "react";

const AccountSettings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [privacy, setPrivacy] = useState("Public");
  const [notifications, setNotifications] = useState("Email");
  const [linkedAccounts, setLinkedAccounts] = useState(["Facebook", "Google"]);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Two-Factor Authentication */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Two-Factor Authentication
        </h2>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
            className="form-checkbox"
          />
          <span className="ml-2">Enable 2FA</span>
        </label>
      </div>

      {/* Privacy Settings */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
        <select
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>Public</option>
          <option>Private</option>
        </select>
      </div>

      {/* Notification Preferences */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <select
          value={notifications}
          onChange={(e) => setNotifications(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>Email</option>
          <option>SMS</option>
          <option>Push Notifications</option>
        </select>
      </div>

      {/* Linked Accounts */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Linked Accounts</h2>
        <ul>
          {linkedAccounts.map((account) => (
            <li key={account} className="mb-2">
              {account}
            </li>
          ))}
        </ul>
      </div>

      {/* Account Deletion */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-red-500">
          Delete Account
        </h2>
        <p className="text-gray-600 mb-4">
          This action will permanently delete your account. This cannot be
          undone.
        </p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300">
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;

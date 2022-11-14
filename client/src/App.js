
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// private routes
import PrivateRoute from "./components/general/PrivateRoute";
// layouts
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import SettingsLayout from "./layouts/SettingsLayout";

// pages
import Home from "./pages/single/Home";
import Register from "./pages/single/Register";
import Login from "./pages/single/Login";
import Explore from "./pages/single/Explore";
import Suggested from "./pages/single/Suggested";
import Notifications from "./pages/single/Notifications";
import Messages from "./pages/single/Messages";
import NotFound from "./pages/single/NotFound";

// profile pages
import ProfileSaved from "./pages/profile/ProfileSaved";
import ProfileTagged from "./pages/profile/ProfileTagged";
import ProfilePosts from "./pages/profile/ProfilePosts";

// settings pages
import LoginActivity from "./pages/settings/LoginActivity";
import ChangePassword from "./pages/settings/ChangePassword";
import EditProfile from "./pages/settings/EditProfile";
import Account from "./pages/settings/Account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="suggested" element={<Suggested />} />
            <Route path="" element={<SettingsLayout />} >
              <Route path="settings/edit_profile" element={<EditProfile />} />
              <Route path="settings/change_password" element={<ChangePassword />} />
              <Route path="settings/login_activity" element={<LoginActivity />} />
              <Route path="settings/account" element={<Account />} />
            </Route>

            <Route path="profile/:username" element={<ProfileLayout />}>
              <Route index element={<ProfilePosts />} />
              <Route path="saved" element={<ProfileSaved />} />
              <Route path="tagged" element={<ProfileTagged />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

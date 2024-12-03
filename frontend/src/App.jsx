import { BrowserRouter, Navigate, Route,  Routes } from "react-router-dom";
import Home from "./ui/Home";
import store from "./state/store";
import { Provider } from "react-redux";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import CalendarTool from './pages/CalendarTool';
import ClassRegistration from './pages/ClassRegistration';
import StudyAbroadPlanner from './pages/StudyAbroadPlanner';
import Settings from "./pages/Settings";
import Links from "./pages/Links";
import Profile from "./pages/Profile";


function App() {
  console.log("HISHDAIUSHDIUASHDIU");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="calendar" element={<CalendarTool />}/>
            <Route path="registration" element={<ClassRegistration />}/>
            <Route path="links" element={<Links />}/>
            <Route path="studyabroadplanner" element={<StudyAbroadPlanner />}/>
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>    
        </Routes>
    </BrowserRouter>
  </Provider>
  )
 
}

export default App

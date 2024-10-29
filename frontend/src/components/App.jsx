import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Courses from "./Courses";
import Leaderboard from "./Leaderboard";
import CourseDetail from "./CourseDetail";
import LessonPage from "./LessonPage";
import QuizPage from "./QuizPage";
import ProfilePage from "./Profile";
import Login from "./Auth/Login";
import SignUp from "./Auth/Signup";
import AboutUs from "./About";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Courses" element={<Courses />} />
                <Route path="/Course/:id" element={<CourseDetail />} />
                <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
                <Route path="/courses/:courseId/quiz" element={<QuizPage />} />
                <Route path="/Leaderboard" element={<Leaderboard />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Profile" element={<ProfilePage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App;
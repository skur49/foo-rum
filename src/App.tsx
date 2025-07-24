// libraries
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import { Loader } from "./components/atoms/Loader";
import { NotFound } from "./components/atoms/NotFound";
import { Layout } from "./components/molecules/Layout";

// hooks
import { useAuth } from "./hooks/useAuth";

// pages
const Auth = lazy(() => import(/* webpackChunkName: 'Auth' */ "./pages/Auth"));
const Home = lazy(() => import(/* webpackChunkName: 'Home' */ "./pages/Home"));

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Auth />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

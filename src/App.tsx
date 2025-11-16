import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ui";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AuthGuard from "@/components/auth/AuthGuard";
import { Home } from "@/pages";
import { Pin, Setup, ForgotPasscode } from "./pages/auth";
import { CreditCards, IdNumbers, Dashboard, Password, AddPassword, EditPassword, Profile, PrivateNotes, AddNote, EditNote, ViewNote, SecretUrls, AddUrl, EditUrl } from "./pages/main";
import NotFound from "./pages/not-found";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/page-transition";

export default function App() {
  const location = useLocation();
  return (
    <>
      <AuthGuard />
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/pin"
            element={
              <PageTransition>
                <Pin />
              </PageTransition>
            }
          />
          <Route
            path="/setup"
            element={
              <PageTransition>
                <Setup />
              </PageTransition>
            }
          />
          <Route
            path="/forgot-passcode"
            element={
              <PageTransition>
                <ForgotPasscode />
              </PageTransition>
            }
          />
          <Route
            path="/app"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/credentials"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <Password />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/credentials/add"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <AddPassword />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/credentials/edit/:id"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <EditPassword />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/id-numbers"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <IdNumbers />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/credit-cards"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <CreditCards />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/profile"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/notes"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <PrivateNotes />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/notes/add"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <AddNote />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/notes/edit/:id"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <EditNote />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/notes/view/:id"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <ViewNote />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/secret-urls"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <SecretUrls />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/secret-urls/add"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <AddUrl />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="/app/secret-urls/edit/:id"
            element={
              <PageTransition>
                <ProtectedRoute>
                  <EditUrl />
                </ProtectedRoute>
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { AmbientBackground } from './components/fx/AmbientBackground'
import { NeonCursor } from './components/fx/NeonCursor'
import { PageTransition } from './components/fx/PageTransition'
import { Home } from './pages/Home'
import { useDirection } from './hooks/useDirection'

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Teams = lazy(() => import('./pages/Teams').then((m) => ({ default: m.Teams })))
const Team = lazy(() => import('./pages/Team').then((m) => ({ default: m.Team })))
const Roles = lazy(() => import('./pages/Roles').then((m) => ({ default: m.Roles })))
const Role = lazy(() => import('./pages/Role').then((m) => ({ default: m.Role })))
const OpenCall = lazy(() => import('./pages/OpenCall').then((m) => ({ default: m.OpenCall })))
const GitWorkflow = lazy(() => import('./pages/GitWorkflow').then((m) => ({ default: m.GitWorkflow })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

function AppContent() {
  useDirection()
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Suspense fallback={<Loading />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/:teamId" element={<Team />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/roles/:roleSlug" element={<Role />} />
              <Route path="/open-call" element={<OpenCall />} />
              <Route path="/git-workflow" element={<GitWorkflow />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-500" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AmbientBackground />
      <NeonCursor />
      <AppContent />
    </BrowserRouter>
  )
}

export default App

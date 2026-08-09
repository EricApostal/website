import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { Resume } from './pages/Resume'
import { useScrollToHash } from './lib/useScrollToHash'

const EmberBackground = lazy(() =>
  import('./three/EmberBackground').then((m) => ({ default: m.EmberBackground })),
)

// soon :tm:
const EMBER_BACKGROUND_ENABLED = false

function AppRoutes() {
  useScrollToHash()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      {EMBER_BACKGROUND_ENABLED && (
        <Suspense fallback={null}>
          <EmberBackground />
        </Suspense>
      )}
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

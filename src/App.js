import './index.css';
import { lazy, Suspense } from "react"
import { Login } from './components/Views/Login';
import { Tasks } from './components/Views/Tasks/Tasks';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
// import { Register } from './components/Register';

//importación dinámica con lazy
const Error404 = lazy(() => import('./components/Views/Error404/Error404'))


const RequireAuth = ({ children }) => {
  if(!localStorage.getItem("logged")){
    return <Navigate to="/login" replace={true} />
  }
    return children;
}

const pageTransition = {
  in: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [ 0.6, 0.05, 0.01, 0.99 ]
    }
  },
  out: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: [ 0.6, 0.05, 0.01, 0.99 ],    
    }
  }
}

export const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/tasks" element={
          <RequireAuth>
            <motion.div
              className='page'
              initial="out"
              animate="animate"
              exit="out"
              variants={pageTransition}  
            >
              <Tasks />
            </motion.div>
            </RequireAuth>
          } />
        <Route path="/login" element={
          <motion.div
            className='page'
            initial="out"
            animate="animate"
            exit="out"
            variants={pageTransition}  
          >
            <Login />
          </motion.div>
        } />
        <Route path="/*" element={
          <motion.div
            className='page'
            initial="out"
            animate="animate"
            exit="out"
            variants={pageTransition}  
          >
            <Suspense fallback={<>...</>}>
              <Error404 />
            </Suspense>
          </motion.div>  
        } />
        
      </Routes>
    </AnimatePresence>
  )

}

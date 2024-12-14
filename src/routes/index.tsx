import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard-layout'
import AllCases from '../pages/all-cases'
import RejectedCases from '../pages/rejected-cases'
import PendingCases from '../pages/pending-cases'
import AcceptedCases from '../pages/accepted-cases'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="all-cases" />} />
          <Route path="all-cases" element={<AllCases />} />
          <Route path="rejected-cases" element={<RejectedCases />} />
          <Route path="pending-cases" element={<PendingCases />} />
          <Route path="accepted-cases" element={<AcceptedCases />} />
        </Route>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes

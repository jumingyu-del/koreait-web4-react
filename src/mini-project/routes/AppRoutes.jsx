import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 부모 Route안에 MainLayout 안에 Outlet에 자식 Route들이 렌더링 */}
      <Route element={<MainLayout />}>
        {PUBLIC_ROUTES.map((route) => {
          return <Route 
            key={route.id}
            path={route.path}
            element={route.element}
          />
        })}
      </Route>
    </Routes>
  )
}

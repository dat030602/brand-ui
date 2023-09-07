import { Fragment, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from '~/routes';
import { DefaultLayout } from '~/layouts/layout';
import { getCookie } from './utils/cookies';
import PageNotFoundPage from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.publicRoutes.login.map((route, index) => {
            const Page = route.components;
            let Layout = DefaultLayout;
            if (route.layout) Layout = route.layout;
            else if (route.layout === null) Layout = Fragment;
            return <Route key={index} path={route.path} element={<Layout page={Page}></Layout>} />;
          })}
          {getCookie('Username') !== 'Admin' &&
            routes.publicRoutes.guest.map((route, index) => {
              const Page = route.components;
              let Layout = DefaultLayout;
              if (route.layout) Layout = route.layout;
              else if (route.layout === null) Layout = Fragment;
              return <Route key={index} path={route.path} element={<Layout page={Page}></Layout>} />;
            })}
          {getCookie('Username') !== null &&
            getCookie('Username') !== 'Admin' &&
            routes.publicRoutes.user.map((route, index) => {
              const Page = route.components;
              let Layout = DefaultLayout;
              if (route.layout) Layout = route.layout;
              else if (route.layout === null) Layout = Fragment;
              return <Route key={index} path={route.path} element={<Layout page={Page}></Layout>} />;
            })}
          {getCookie('Username') === 'Admin' &&
            routes.privateRoutes.map((route, index) => {
              const Page = route.components;
              let Layout = DefaultLayout;
              if (route.layout) Layout = route.layout;
              else if (route.layout === null) Layout = Fragment;
              return <Route key={index} path={route.path} element={<Layout page={Page}></Layout>} />;
            })}
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

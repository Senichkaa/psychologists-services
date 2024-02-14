import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import { Main } from './Layout.styled';
import Header from 'components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;

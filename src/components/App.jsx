import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Container from './Container/Container';
import s from './views/styles.module.css';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';
import Loader from './Loader/Loader';

const HomeView = lazy(() => import('./views/HomeView'));
const Contacts = lazy(() => import('./views/Contacts'));
const Registration = lazy(() => import('./views/Registration'));
const Login = lazy(() => import('./views/Login'));

export const App = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  console.log('isLoggedIn', isLoggedIn);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <div className={s.navContainer}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <NavLink to="/">Main</NavLink>
            </li>
            <li className={s.navItem}>
              {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </li>
          </ul>
          {!isLoggedIn ? (
            <ul className={s.navList}>
              <li className={s.navItem}>
                <NavLink to="/registration">Registration</NavLink>
              </li>
              <li className={s.navItem}>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          ) : (
            <ul className={s.navList}>
              <li className={s.navItem}>Welcome, {userName}</li>
              <li className={s.navItem}>
                <button
                  className={s.navButton}
                  onClick={() => dispatch(authOperations.logOut())}
                >
                  Log out
                </button>
              </li>
            </ul>
          )}
        </div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/contacts"
              element={isLoggedIn ? <Contacts /> : <Login />}
            ></Route>
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/login"
              element={!isLoggedIn ? <Login /> : <HomeView />}
            />
          </Routes>
        </Suspense>
      </Container>
    )
  );
};

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './routes/Home';
import Login from './routes/Login';
import RequireAuth from './context/RequireAuth';
import SignUp from './routes/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Support from './pages/Support/Support';
import TransactionPage from './pages/Transaction/Transaction';
import AdminLayout from './layout/AdminLayout';
import Users from './admin-pages/users/Users';
import SecondHome from './admin-pages/home/SecondHome';
import User from './admin-pages/user/User';
import AdminLogin from './admin-pages/login/AdminLogin';
import Transfer from './admin-pages/transfer/Transfer';
import Package from './pages/Packages/Package';
import { RegistrationProvider } from './context/RegistrationProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='admin' element={<AdminLogin />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='home' element={<SecondHome />} />
        <Route path='users' element={<Users />} />
        <Route path='transfer' element={<Transfer />} />
        <Route path='profile' element={<User />} />
      </Route>
      <Route>
        <Route
          path='dashboard'
          element={
            <RequireAuth>
              <RegistrationProvider>
                <Dashboard />
              </RegistrationProvider>
            </RequireAuth>
          }
        />
        <Route
          path='transactions'
          element={
            <RequireAuth>
              <RegistrationProvider>
                <TransactionPage />
              </RegistrationProvider>
            </RequireAuth>
          }
        />
        <Route
          path='support'
          element={
            <RequireAuth>
              <RegistrationProvider>
                <Support />
              </RegistrationProvider>
            </RequireAuth>
          }
        />
        <Route
          path='packages'
          element={
            <RequireAuth>
              <RegistrationProvider>
                <Package />
              </RegistrationProvider>
            </RequireAuth>
          }
        />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default App;

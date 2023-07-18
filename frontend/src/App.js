import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './components/List';
import { RoutesWithNotFound } from './components/NotFound/RoutesWithNotFound';
import { PublicRoutes } from './models/routes';
import Product from './pages/Product';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './helpers/snackbar-manager';
import MenuHeader from './components/MenuHeader';

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigutator />
      <BrowserRouter>
        <MenuHeader />
        <RoutesWithNotFound>
          <Route exact path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.LIST_OF_PRODUCTS} element={<List />} />
          <Route path={PublicRoutes.PRODUCT_DETAIL_WITH_ID} element={<Product />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;

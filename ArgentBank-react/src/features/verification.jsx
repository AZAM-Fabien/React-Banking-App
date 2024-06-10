import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isConnected, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isConnected ? (
        <Component {...props} />
      ) : (
        <Redirect to="/error" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
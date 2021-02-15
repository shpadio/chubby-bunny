import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRouter = ({ Component, path, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
      <Route path={path} {...rest}>
          {isAuth ? <Component/> : <Redirect to='/login'/>}
      </Route>
  );
};
export default ProtectedRouter;

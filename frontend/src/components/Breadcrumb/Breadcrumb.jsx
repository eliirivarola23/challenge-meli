import { memo, Fragment } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Breadcrumb.module.css';
import { PublicRoutes } from '../../models/routes';

const Breadcrumb = ({ crumbs }) => {
  const { pathname, state } = useLocation();

  return (
    <div className={styles.container_breadcrumb}>
      <div>
        <nav>
          <NavLink to={PublicRoutes.HOME}>Home</NavLink>
          {state?.pathname && (
            <>
              {' > '}
              <NavLink to={`${state.pathname}${state.search || ''}`}>{state.label || ''} </NavLink>
            </>
          )}
          {crumbs?.map(({ path, label }, index) => {
            const active = [pathname].includes(path) ? 'active' : '';
            return (
              <Fragment key={index}>
                {' > '}
                <NavLink to={path} className={styles[active]}>
                  {label}
                </NavLink>
              </Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default memo(Breadcrumb);

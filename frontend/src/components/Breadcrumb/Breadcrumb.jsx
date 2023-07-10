import { memo, Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ crumbs }) => {
  const { pathname } = useLocation();
  if (!Array.isArray(crumbs)) return null;

  return (
    <div className={styles.container_breadcrumb}>
      <div>
        <nav>
          {crumbs.map(({ path, label }, index) => {
            const active = [pathname].includes(path) ? "active" : "";
            return (
              <Fragment key={index}>
                {index !== 0 && <span> {">"} </span>}
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

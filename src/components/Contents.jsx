import { Outlet, Link } from "react-router-dom";

function Contents({ data }) {
  return (
    <div>
      {data.map((e, i) => (
        <Link key={i} to={`${e}`}>
          {e}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}

export default Contents;

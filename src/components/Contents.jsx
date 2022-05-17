import { Outlet, Link } from "react-router-dom";

function Contents({ data }) {
  const style = {
    textDecoration: "none",
    marginLeft: "20px",
    color: "black",
    backgroundColor: "pink",
    margin: "0",
    height: "90vh"
  }
  const leftStyle = {
    
  }
  return (
    <div  className="row m-auto">
      <ul className="col-2" style={style}>
      {data.map((e, i) => (
        <Link key={i} to={`${e}`} className="col-1 m-1" style={leftStyle}>
          <li style={{ color: "black", textDecoration: "none", listStyleType:"none"}}>{e}</li>
        </Link>
      ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Contents;

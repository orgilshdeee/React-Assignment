function Content({ data }) {
  return (
    <div className="col-9 m-3">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <img src={data.img} alt="" className="w-50"/>
    </div>
  );
}

export default Content;

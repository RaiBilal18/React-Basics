function UpdateTime() {
  let Time=new Date;
  return (
    <div className="current" id="DateTime">
      <p>This Is The Curren Time: {Time.toLocaleDateString()} - {Time.toLocaleTimeString()}</p>
    </div>
  );
}
export default UpdateTime;

function AddItem1() {
  return (
    <div className="mainContent">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" name="Date" id="DOB" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddItem1;

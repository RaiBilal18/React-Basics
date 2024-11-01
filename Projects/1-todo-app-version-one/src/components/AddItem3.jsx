function AddItem3(){
  let Name='Go To College';
  let Date='4/10/2023';
   return <div className="mainContent">
   <div className="row kg-row">
     <div className="col-4">{Name}</div>
     <div className="col-4">{Date}</div>
     <div className="col-2">
       <button type="button" className="btn btn-danger kg-button">
         Delete
       </button>
     </div>
   </div>
 </div>
}
export default AddItem3;
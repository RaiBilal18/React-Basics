function Hello(){
  let myName="Rai Bilal";
  let MessageNo=456;
  let fullName=()=>{
    return "Rai bilal Khral";
  }
  return <p>
    Message No: {MessageNo} & calling {fullName()}
  </p>
}
export default Hello;
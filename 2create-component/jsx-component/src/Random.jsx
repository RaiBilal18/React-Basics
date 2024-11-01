
function Random(){
  let Number=Math.random()*100;

  return <h1 style={{"backgroundColor":"blue"}}>The Random Number Is :{Math.round(Number)} </h1>
}
export default Random;
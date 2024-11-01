import {Inputbox} from "./Kgbutton";
import {KgButton} from "./Kgbutton";
import Hello from "./Hello";
import Random from "./Random";

export default function newApp(){
  return <div>
    <h1>This is new heading</h1>
     <Hello></Hello>
     {/* self closing tag */}
     <Random />
     <Random></Random>
     <Random></Random>
     <Random></Random>
     <Random></Random>
     <Random></Random>
  </div>
}
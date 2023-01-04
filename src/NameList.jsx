import { render } from "@testing-library/react";
import react from "react";
import NameListItem from  './NameListItem';

function NameList(){

  return(
    <div>

        <NameListItem Name="Hasidu" Deg="Software"/>
        <NameListItem Name="Pinsara"  Deg="Data science"/>
        <NameListItem Name="Praboda"  Deg="IT"/>
        <NameListItem Name="Malidu"  Deg="Business"/>
        
    </div>



  )




}
export default NameList;
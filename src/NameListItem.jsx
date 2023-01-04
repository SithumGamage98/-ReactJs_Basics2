import react from "react";
import NameList from "./NameList";

function NameListItem(Props){

    return(
        <div>

        <ul>

        <p>Name :  {Props.Name} , Degree : {Props.Deg} </p>
        </ul>



        </div>



    )


}export default NameListItem;
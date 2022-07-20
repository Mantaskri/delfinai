import rand from "../../Functions/rand" ;

function Kosmosas({colour, sideSpace, bgc}) {

    return (
    <>
    <div style={
        {
            color: colour, 
            backgroundColor: bgc,
            fontSize: rand(30, 100) + 'px',
            padding: sideSpace 
            }
            }>MAR-SAS</div> 
    <div>KOS-MOS</div>
    </>
    //<></> tuscias <div/> tagas<div><div/>, kuris nesiraso i html faila
// JS rasosi vienoj eilute su {} be ;
    );
//()skliaustai leidzia veikt funkcijai keliose eilutese
}

export default Kosmosas;
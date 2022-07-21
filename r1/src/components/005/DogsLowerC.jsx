function DogsLowerC({name}){
    return <div>{name[0]===name[0].toUpperCase()?null:name}</div>
}
export default DogsLowerC;
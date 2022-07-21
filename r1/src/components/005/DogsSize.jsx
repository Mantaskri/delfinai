function DogsSize({name}){
    return <div style={name.length>6? {color: 'green'}: {color: 'red'}}>{name.length}</div>
}
export default DogsSize;
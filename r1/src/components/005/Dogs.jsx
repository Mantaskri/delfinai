function Dogs({name, nr, kv1, rn1}){
    return <div style={nr%2===0?kv1:rn1}>{name}</div>
}
export default Dogs;
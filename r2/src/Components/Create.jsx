import { useState } from "react";
import { useContext } from "react";
import AnimalsContext from "./AnimalsContext";

function Create() {

    const { animalsTypes } = useContext(AnimalsContext);
    const [type, setType] = useState('1');
    const [weight, setWeight] = useState (``);

    return (
        <div className="card">
            <h5 className="card-header">Add new Animal</h5>
            <div className="card-body">
                <div class="form-group">
                    <label>Animal Type:</label>
                    <select className="form-control" value={type} onChange={e => setType (e.target.value)}>
                        {
                            animalsTypes.map(a => <option key={a.id} value={a.id}>{a.type}</option>)
                        }
                    </select>
                </div>
                <div class="form-group">
                    <label>How much does it weight? (kg) {animalsTypes.find(a => a.id == type).type}?</label>
                    <input type="text" className="form-control" value={weight} onChange={e => setWeight (e.target.value)}/>
                    <small className="form-text text-muted">enter animal weight here</small>
                </div>
                <button type="button" class="btn btn-outline-info m-2">Info</button>
            </div>
        </div>
    )
};

export default Create;
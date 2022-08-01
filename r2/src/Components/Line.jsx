function Line({ data }) {
    return (

        <li className="List-group-item">An Item
            <div className="line">
                <div className="line_content">
                    <span className="line_content_title">
                        {animalsTypes.find(a => a.id == data.type).type}
                    </span>
                    <span className="line_content_w">
                        {data.weight} KG
                        <div className="line_buttons">
                            <button type="button" className="btn btn-outline-success m2">Edit</button>
                            <button type="button" className="btn btn-outline-danger m2">Delete</button>
                        </div>
                    </span>
                </div>
                <div className="line-buttons">



                </div>

            </div>

        </li>
    )
}

export default Line;
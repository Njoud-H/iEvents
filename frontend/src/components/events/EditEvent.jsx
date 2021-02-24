/* import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API_URL from '../../utility/apiConfig'
import axios from "axios";

export default function EditEvent(props) {
    const history = useHistory();
    const [editEvent, setEditEvent] = useState({}); // Even info
    const { _id } = props.auth.currentUser;


    //to add the input inside user */
/*     const onChangeInput = ({ target: { name, value } }) => {
        setEditEvent({ ...editEvent, [name]: value });
    }; */

/*     // to add the user info to database
    const onSubmit = (event) => {
        event.preventDefault();
        axios.put(`${API_URL}/api/events/editEvent/${_id}`, editEvent)
            .then((res) => {
                console.log(editEvent)
                history.push(`/AllEvents/${_id}`);
            })
            .catch((err) => console.log(err));

    };
 */

   /*  return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input name="name" type="text" onChange={onChangeInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="location">location</label>
                    <input name="location" type="location" onChange={onChangeInput} />
                </div>


                <div className="form-group">
                    <label htmlFor="eventType">eventType</label>
                    <select name="eventType" id="eventType" form="carform" onChange={onChangeInput}>
                        <option value="Conferences">Conferences</option>
                        <option value="Workshops">Workshops</option>
                        <option value="Festival">Festival</option>
                    </select><label for="start">Start date:</label>
                </div>

                <div className="form-group">
                    <label for="startDate">From:</label>
                    <input type="date" id="startDate" name="startDate"
                        value="" onChange={onChangeInput} />
                </div>

                <div className="form-group">
                    <label for="endDate">To:</label>
                    <input type="date" id="endDate" name="endDate"
                        value="" onChange={onChangeInput} />
                </div>
 *//* 
                <div className="form-group">
                    <label for="startTime">startTime:</label>
                    <input type="time" id="startTime" name="startTime" onChange={onChangeInput} />
                </div>

                <div className="form-group">
                    <label for="endTime">endTime:</label>
                    <input type="time" id="endTime" name="endTime" onChange={onChangeInput} />
                </div>


                <div className="form-group">
                    <label htmlFor="description">description</label>
                    <textarea name="description" type="description" onChange={onChangeInput} />
                </div>

                <div className="form-group">
                    <button
                        type="submit"
                        onClick={(e) => onSubmit(e)}
                    >
                        Submit
                      </button>
                </div>
            </form> */
/* 
        </>
    )
} */
 
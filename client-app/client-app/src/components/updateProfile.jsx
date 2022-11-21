import { useState } from "react";
import axios from "axios";

export function UpdateProfile({ _id, handleClose, handleEdited }) {
    const [data, setData] = useState({ name: "", description: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ _id }, { data });

        axios
            .put(`http://localhost:8000/api/profile/${_id}`, data)
            .then((res) => {
                setData({ name: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update profile");
                console.log(err.message);
            });
    }

    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                handleSubmit(e);
                handleClose();
            }}
        >
            <label htmlFor="name" className="label">
                Name
            </label>
            <input
                type="text"
                name="name"
                className="input"
                onChange={handleChange}
            />
            <label htmlFor="description" className="label">
                Description
            </label>
            <input
                type="text"
                name="description"
                className="input"
                onChange={handleChange}
            />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
}

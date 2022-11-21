import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UpdateProfile } from "./updateProfile"
import { Lightbox } from 'react-image-lightbox';

function ProfileCard({data, handleEdit, handleDelete}) {
    const {_id, name, description} = data;
    return (
        <li key={_id}>
            <div className="name-description">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="button-container">
                {/* <button className="button" name={_id} onClick={handleEdit}>edit</button> */}
                <button className="button" name={_id} onClick={handleDelete}>delete</button>
            </div>
        </li>
    );
}

export function ShowProfileList() {
    const [profile, setProfile] = useState([]);
    const [open, setOpen] = useState(false); 
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);
    console.log("*************************");
    useEffect(
        function () {
            axios
                .get("http://localhost:8000/api/profile")
                .then((res) => {
                    console.log(res.data);
                    setProfile(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        [update]
    );

    function handleEdit(e) {
        setId(e.target.name); 
        setOpen(true);
    }

    function handleUpdate() {
        console.log("update:", update, !update);
        setUpdate(!update);
    }

    function handleDelete(e) {
        axios.delete(`http://localhost:8000/api/profile/${e.target.name}`);

        setProfile((data) => {
            return data.filter((profile) => profile._id !== e.target.name);
        });
    }

    function handleClose() {
        setId("");
        setOpen(false);
    }

    return (
        <section className="container">

                <div>
                    <Link to="/create-profile" className="button-new">
                        <button className="button">New</button>
                    </Link>
                    <section className="contents">

                        <h1>Profile</h1>
                        <ul className="list-container">
                            {profile.map((data) => (
                                <ProfileCard
                                    key={data._id}
                                    data={data}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </ul>
                    </section>
                    {open ? (
                        <section className="update-container">
                            <div className="update-contents">
                                <p onClick={handleClose} className="close">
                                    &times;
                                </p>

                                <UpdateProfile
                                    _id={id}
                                    handleClose={handleClose}
                                    handleUpdate={handleUpdate}
                                />
                            </div>
                        </section>
                    ) : (
                        ""
                    )}
                </div>
        </section>
    );
}

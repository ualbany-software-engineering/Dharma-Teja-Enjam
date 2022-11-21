import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect } from 'react';

export function CreateProfile() {
    const [data, setData] = useState({name:"", description:""});
    const [selectedImage, setSelectedImage] = useState(null);

    // useEffect(() => {
    //     if(!selectedImage){
    //         handleFile();
    //     }
    // }, [selectedImage]);

    const handleFile = event => {
        console.log("asdfasdf");
        const formData = new FormData();
        formData.append("fileupload", event.target.files[0]);

        fetch("http://localhost:8000/api/profile/upload", {
            method: 'POST',

            body: formData,
            dataType: "jsonp"
        })
    };

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const profile = {
            name: data.name,
            description: data.description,
        };

        console.log({profile});
        axios
            .post("http://localhost:8000/api/profile", data)
            .then((res)  => {
                setData({name: "", description: ""});
                console.log(res.data.message);
            });
    }

    return (
        <section className="container">
            <Link to="/" className="button-back">
                <button type="button" className="button">
                    back
                </button>
            </Link>
            <section className="contents">
            <div style={{display:"flex", flexDirection:"row"}}>
                <div>
                    {selectedImage && (
                        <div>
                            <img alt="not found" width={"300px"} height = {"300px"} src={URL.createObjectURL(selectedImage)} />
                            <br />
                            <button onClick={()=>setSelectedImage(null)}>Remove</button>
                        </div>
                    )}
                    <input
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                            handleFile(event);
                        }}
                    />
                </div>
                <div style={{width:'100%'}}>
                    <form
                        onSubmit={handleSubmit}
                        className="form-container"
                        noValidate
                        style={{width:'100%'}}
                    >
                        <div style={{width:'100%'}}>
                            <label className="label" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className="input"
                                style={{width:'100%'}}
                            />
                        </div>
                        <div>
                            <div>
                            <label className="label" htmlFor="description">
                                Description
                            </label>
                            </div>
                            <div>
                            <textarea
                                type="text"
                                name="description"
                                value={data.description}
                                onChange={handleChange}
                                className="input"
                                style={{width:'100%', height:'200px'}}
                            />
                            
                            <div>
                            <button type="submit" className="button">
                                create profile
                            </button>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </section>
        </section>
    );
}
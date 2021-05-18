import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    // const [info, setInfo] = useState({});
    // const [file, setFile] = useState(null);
    // const handleBlur = e => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
    // }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    // const handleSubmit = () => {
    //     const formData = new FormData()
    //     console.log(info);
    //     formData.append('file', file);
    //     formData.append('name', info.name);
    //     formData.append('email', info.email);

    //     fetch('https://limitless-stream-56304.herokuapp.com/products', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://afternoon-eyrie-74810.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response', res))
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '7123a9c031eff784f23c2974240f5522')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response){
            setImageURL(response.data.data.display_url)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Product</h5>

                <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="New Product" ref={register} />
                <br />
                <input name="price" defaultValue="price" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />

                <input type="submit" />
            </form>

                {/* <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter product" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input type="text" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input type="file" onChange={handleImageUpload} className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form> */}

            </div>
        </section>
    );
};

export default AddProducts;
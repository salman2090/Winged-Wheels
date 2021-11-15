import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://guarded-chamber-73024.herokuapp.com/addProducts", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h1 className="text-center mt-5 mb-3">Please Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name")} placeholder="Name" className="p-2 m-2 w-25"/>
                <br />

                <input {...register("description")} placeholder="Description" className="p-2 m-2 w-25"/>
                <br />

                <input {...register("image", { required: true})} placeholder="Image Link" className="p-2 m-2 w-25"/>
                <br />

                <input {...register("price", { required: true})} placeholder="Price"  className="p-2 m-2 w-25"/>
                <br />
                
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Add" className="btn btn-success mb-5"/>
            </form>
        </div>
    );
};

export default AddProduct;
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        fetch("https://guarded-chamber-73024.herokuapp.com/addReviews", {
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
            <h2 className="fw-bold my-5">Share Your Experience With Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name")} placeholder="Name" className="p-2 m-2 w-25"/>
                <br />

                <input {...register("description")} placeholder="Review" className="p-2 m-2 w-25"/>
                <br />

                <input type="number" {...register("rating")} placeholder="Input Your Rating"  className="p-2 m-2 w-25"/>
                <br />
                
                <input type="submit" value="Add" className="btn btn-success mb-5"/>
            </form>
        </div>
    );
};

export default AddReview;
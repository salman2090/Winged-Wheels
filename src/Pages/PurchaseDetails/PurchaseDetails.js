import React, { useEffect, useState } from 'react';
import './PurchaseDetails.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PurchaseDetails = () => {
    const {user} = useAuth();
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch(`https://guarded-chamber-73024.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    console.log(product);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.status = "pending";

        fetch("https://guarded-chamber-73024.herokuapp.com/addPurchase", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));

    }

    return (
        <div>
        <h1 className="text-center mt-5 mb-3">Please Book</h1>
        <div className="purchase-container mt-5 mb-5">
            <div>
                <img className="w-75 mb-3" src={product?.image} alt="" />
                <h2>{product?.name}</h2>
                <p>{product?.description}</p>
                <h3>Cost: {product?.price}</h3>
            </div>

            <div>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">Product Details</h3>
                    <input {...register("name", { required: true})} defaultValue={product?.name} className="p-2 m-2 w-50"/>
                    <br />

                    <input {...register("description", { required: true})} defaultValue={product?.description} className="p-2 m-2 w-50"/>
                    <br />

                    <input {...register("price", { required: true})} defaultValue={product?.price}  className="p-2 m-2 w-50"/>

                    <input {...register("image", { required: true})} defaultValue={product?.image}  className="p-2 m-2 w-50"/>
                    <br />

                    <h3>Client Details</h3>

                    <input {...register("clientName", { required: true})} defaultValue={user.displayName}  className="p-2 m-2 w-50"/>
                    <br />
                    <input {...register("email", { required: true})} defaultValue={user.email}  className="p-2 m-2 w-50"/>
                    <br />
                    <input {...register("address", { required: true})}  placeholder="Enter Your Address" className="p-2 m-2 w-50"/>
                    <br />
                    <input {...register("phone", { required: true})} placeholder="Enter Phone Number"  className="p-2 m-2 w-50"/>
                    <br />
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit" value="Order Now" className="btn btn-success mb-5"/>
                </form>
            </div>
        </div>
    </div>
        
    );
};

export default PurchaseDetails;
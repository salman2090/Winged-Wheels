import React, { useEffect, useState } from 'react';
import './MyPurchases.css';
import { Button, Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyPurchases = () => {
    const [purchases, setPurchases] = useState([]);
    const email = sessionStorage.getItem("email");
    const [control, setControl] = useState(false);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myPurchase/${email}`)
            .then(res => res.json())
            .then(data => setPurchases(data))
    },[control])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount) {
                    setControl(!control);
                }
            });
    }

    useEffect(() => {
        fetch(`http://localhost:5000/purchases?email=${user.email}`,{
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data =>setPurchases(data))
    }, [control])
    return (
        <div>
           <h2 className="mt-5">My Purchases</h2>
            <div className="purchases-container">
                {purchases?.map((purchase) =>(
                    <div>
                        <Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                            <Card.Img className="pt-3" variant="top" src={purchase?.image}/>
                            <Card.Body>
                                <h3>{purchase?.name}</h3>
                                <p>{purchase?.description}</p>
                                <p>Cost: {purchase?.price}</p>
                            <Button onClick={() => handleDelete(purchase._id)} className=" mt-3" variant="outline-danger">Cancel</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPurchases;
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [control]);

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
        console.log(id);
    }

    console.log(products)
    return (
        <div>
        <div>
            <h1 className="mt-5 mb-3">Manage Products</h1>
            <Table striped border hover>
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Service Title</th>
                        <th>Description</th>
                        <th>Image Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {products?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <td>
                            <Button
                                onClick = {() => handleDelete(pd._id)}
                                className= "btn btn-danger p-2"
                            >
                                Delete
                            </Button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
            
        </div>
    </div>
    );
};

export default ManageProducts;
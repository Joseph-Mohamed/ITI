import React, { useState } from 'react'

export default function Send() {
    let prodArray = [
        { id: 1, prodName: `Samsung`, price: 3000, onSale: false, desc: `Samsung Mobile Phone`, quantity: 0 },
        { id: 2, prodName: `Oppo`, price: 5000, onSale: false, desc: `Oppo Mobile Phone`, quantity: 0 },
        { id: 3, prodName: `TV`, price: 15000, onSale: true, desc: `Smart TV`, quantity: 0 },
        { id: 4, prodName: `PC`, price: 12000, onSale: true, desc: `HighEnd PC`, quantity: 0 },
        { id: 5, prodName: `Camera`, price: 10000, onSale: false, desc: `DSLR Camera`, quantity: 0 },
        { id: 6, prodName: `iPad`, price: 15000, onSale: true, desc: `Apple iPad`, quantity: 0 },
        { id: 7, prodName: `Tab`, price: 4000, onSale: false, desc: `Android Tab`, quantity: 0 },
    ];
    let [products, setProducts] = useState(prodArray);

    function deleteProduct(prodId) {
        setProducts(products.filter((product) => product.id !== prodId));
    }

    return (
        <>
            <div className="container py-4">
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm border-0 position-relative p-3 rounded-4">
                                {product.onSale && (
                                    <span className="badge bg-danger p-2 position-absolute top-0 end-0 m-3 rounded-pill">
                                        On Sale
                                    </span>
                                )}
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="h4 fw-bold text-dark">{product.prodName}</h3>
                                        <p className="text-muted small mb-2">{product.desc}</p>
                                        <h4 className="text-success fw-semibold mb-3">{product.price} EGP</h4>
                                        <p className="text-secondary small">Quantity: {product.quantity}</p>
                                    </div>
                                    <div className="d-flex gap-2 mt-3">
                                        <button
                                            className="btn btn-outline-danger flex-grow-1"
                                            onClick={() => deleteProduct(product.id)}
                                        >
                                            Delete
                                        </button>
                                        <button className="btn btn-outline-primary flex-grow-1">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

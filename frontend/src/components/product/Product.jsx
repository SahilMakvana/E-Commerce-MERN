import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
    return (
        <Card>
            <a href={`/product/${product._id}`}>
                <Card.Img src="../../data/images/airpods.jpg" variant="top" />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;

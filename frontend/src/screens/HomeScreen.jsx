import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../data/products";
import Product from "../components/product/Product";

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default HomeScreen;
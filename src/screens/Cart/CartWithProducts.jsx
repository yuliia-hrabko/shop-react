import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";

import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";
import {
    addProductToCart,
    minusProducFromCart,
    removeProductFromCart,
} from "../../store/slices/cart";

const CartWithProducts = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeProductFromCart(item));
    };

    const handleMinusProductInCart = (item) => {
        dispatch(minusProducFromCart(item));
    };

    const handlePlusProductInCart = (item) => {
        dispatch(
            addProductToCart({
                product: item,
                quantity: 1,
            })
        );
    };

    return (
        <div className="cart-item mb-4">
            <div className="d-flex align-items-start  mb-1">
                <NavLink to={`/product/${item.id}`}
                    className="col-8 d-flex link">
                    <div className="col-5 cursor-pointer">
                        <Image
                            width="200"
                            height="125"
                            src={item.thumbnail}
                            alt={item.title}
                        />
                    </div>
                    <div className="fs-4 col-7 cursor-pointer">
                        {item.title}
                    </div>
                </NavLink>
                <div className="fs-4 col-2 cart-product-quantity d-flex align-items-center">
                    <button className="cursor-pointer" onClick={() => handleMinusProductInCart(item)}>
                        -
                    </button>
                    <div className="fs-5 count">{item.cartQuantity}</div>
                    <button className="cursor-pointer" onClick={() => handlePlusProductInCart(item)}>
                        +
                    </button>
                </div>
                <div className="col-1 cursor-pointer">
                    <span className="text-muted text-decoration-line-through mx-1 fs-6">
                        ${item.price * item.cartQuantity}
                    </span>
                    <span className="text-danger d-flex flex-nowrap fs-5">
                        ${Math.round(item.price - item.price * (item.discountPercentage / 100)) * item.cartQuantity}
                    </span>
                </div>
                <div className="d-flex justify-content-end col-1 cursor-pointer remove-icon opacity-50">
                    <RemoveIcon
                        onClick={() => handleRemoveFromCart(item)}
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartWithProducts;

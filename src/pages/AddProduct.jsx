import { string, object } from 'yup';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { addProduct } from "../api/productApi";

const productSchema = object({
    title: string()
        .required("Title is required.")
        .min(5, "Title must be at least 3 characters long.")
        .max(50, "Title must be at most 50 characters long.")
});

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(productSchema),
    });

    const onSubmit = async (data) => {
        const response = await addProduct(data);

        if (response) {
            alert("Product added successfully");
        } else {
            alert("Failed to add product");
        }
    }

    return (
        <div>
            <div className="flex ">
                <h1 className="">Add Product</h1>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-col" >
                <input {...register("title")} />

                {errors.title && <span>{errors.title?.message}</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default AddProduct;
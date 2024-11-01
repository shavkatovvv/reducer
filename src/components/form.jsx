import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
export const Form = () => {
    const { handleSubmit, reset, register } = useForm();
    const dispatch = useDispatch();
    const users = useSelector((state) => state?.user);

    const submit = (data) => {
        dispatch({ type: "add", value: { ...data, id: nanoid() } });
        reset();
    };

    const deleteItem = (id) => {
        dispatch({ type: "delete", id });
    };

    const editItem = (id) => {
        let e = prompt("edit");
        dispatch({ type: "editItem", id, value: { username: e } });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(submit)}>
                <input
                    className="bg-cyan-300 p-[15px] rounded-[15px] mt-[50px] text-black font-bold text-[20px]"
                    {...register("username")}
                    type="text"
                    placeholder="type"
                />
                <button
                    className="ml-[10px] bg-red-500 rounded-[10px] py-[16px] px-[10px]"
                    type="submit"
                >
                    send
                </button>

                <div className="pt-[50px]">
                    {users?.userList?.map((item) => {
                        return (
                            <div
                                className="w-[400px] bg-cyan-500 p-[30px] text-[black] text-[20px] font-medium rounded-[20px] mb-[20px]"
                                key={item.id}
                            >
                                {item.username}
                                <button
                                    onClick={() => deleteItem(item.id)}
                                    className="ml-[10px] rounded-[10px] p-[8px] bg-red-500 text-black text-[20px] font-medium"
                                >
                                    delete
                                </button>
                                <button
                                    onClick={() => editItem(item.id)}
                                    className="ml-[10px] rounded-[10px] p-[8px] bg-green-500 text-black text-[20px] font-medium"
                                >
                                    editItem
                                </button>
                            </div>
                        );
                    })}
                </div>
            </form>
        </div>
    );
};

"use client";
import React from "react"

    interface Props {
        children: JSX.Element;
    }

    export const RemoveUser = ({ children}: Props) => {
        

        return (
            <div>
                --
                {children}
            </div>
        );
}
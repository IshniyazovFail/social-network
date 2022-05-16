
import React from "react";

type MessageType = {
    message: string
}

export const Message = (p:MessageType) => {
    return (
        <div>{p.message}</div>
    )
}
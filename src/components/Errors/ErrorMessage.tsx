import React from "react"
import { Message } from "."

function ErrorMessage({message}: {message:string}) {
    return (
      <>
        <Message>{message}</Message>
      </>
    )
}

export default ErrorMessage
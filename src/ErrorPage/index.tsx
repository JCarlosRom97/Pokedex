import React from "react";
import Pikachu from "../Images/404.jpg"
import { Image } from "../Styles";
import { ErrorText } from "./Styles";

const ErrorPage = () => {
    return(
        <div>
            <Image src={Pikachu} width={700} paddingtop={150}/>
            <ErrorText>Whoops! 404 Page Not Found</ErrorText>
            
        </div>
    )
}

export default ErrorPage;
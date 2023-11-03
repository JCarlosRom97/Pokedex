import React, {useEffect, useState} from "react";
import { ProgressBarContainer, ProgressBarStyled, TextProgressBar } from "./Styles";
const ProgressBar = ({bgcolor, completed}:{bgcolor:string, completed:number}) => {
    
    const [completedState, setCompleted] = useState(0);

    useEffect(() => {
        setTimeout(() => setCompleted(completed), 500);
    }, [completed]);

    return (
        <ProgressBarContainer>
        <ProgressBarStyled completed={completedState} backgroundcolor={bgcolor}>
            <TextProgressBar>{`${completedState}`}</TextProgressBar>
        </ProgressBarStyled>
        </ProgressBarContainer>
    );
};

export default ProgressBar;

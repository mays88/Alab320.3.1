import { useState } from "react";
import "./App.css";
import { learners } from "./data/learner";
import Learner from "./components/Learner/Learner";
import styled from "styled-components";

const Container = styled.div`
    margin: auto;
    width: 30rem;
`;

function App() {
    const [learnerState, setLearnerState] = useState(learners);

    return (
        <Container>
            <Learner learner={learnerState} />
        </Container>
    );
}

export default App;

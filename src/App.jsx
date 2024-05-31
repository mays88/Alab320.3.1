import { useState } from "react";
import "./App.css";
import { learners } from "./data/learner";
import Learner from "./components/Learner/Learner";
import styled from "styled-components";
import CreateLearner from "./components/Learner/CreateLearner";

const Container = styled.div`
    margin: auto;
    width: 30rem;
`;
function App() {
    const [learnerState, setLearnerState] = useState(learners);

    const addLearner = (newLearner) => {
        setLearnerState([...learnerState, newLearner]);
    };

    return (
        <Container>
            <CreateLearner addLearner={addLearner} />
            <Learner learner={learnerState} />
        </Container>
    );
}

export default App;

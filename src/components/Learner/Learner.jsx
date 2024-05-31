import Score from "../Score/Score";
import styled from "styled-components";
/* eslint-disable react/prop-types */

const LearnerContainer = styled.div`
    border: 3px solid #00d9ff;
    padding: 1em;
    margin: 1em;
    background-color: aliceblue;
    h1 {
        text-align: center;
    }
    p {
        padding-bottom: 0.6em;
    }
`;
function Learner({ learner }) {
    return (
        <div>
            {learner.map((l) => {
                // console.log(l.scores);
                return (
                    <LearnerContainer key={l.id}>
                        <h1>{l.name}</h1>
                        <p>{l.bio}</p>
                        <Score score={l.scores} id={l.id} />
                    </LearnerContainer>
                );
            })}
        </div>
    );
}
export default Learner;

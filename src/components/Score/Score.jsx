/* eslint-disable react/prop-types */
import styled from "styled-components";
const ScoreMainStyles = styled.div`
    h4 {
        text-align: center;
        margin: 0.3em 0;
        text-decoration: underline;
    }
`;
const ScoreContainer = styled.div`
    display: flex;
    gap: 0.4em;
    justify-content: center;
`;
function Score({ score, id }) {
    console.log(id);
    return (
        <ScoreMainStyles key={id}>
            <hr />
            <h4>Scores</h4>
            {score.map((s) => {
                return (
                    <>
                        <ScoreContainer>
                            <p>{s.date} -</p>
                            <p>{s.score}</p>
                        </ScoreContainer>
                    </>
                );
            })}
        </ScoreMainStyles>
    );
}
export default Score;

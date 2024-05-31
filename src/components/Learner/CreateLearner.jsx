/* eslint-disable react/prop-types */
function CreateLearner({ addLearner }) {
    const newLearner = {
        id: (Math.random() + 1) * 10,
        name: "Wes Mungia",
        bio: "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?",
        scores: [
            {
                date: "2018-10-11",
                score: 62,
            },
            {
                date: "2018-11-24",
                score: 74,
            },
            {
                date: "2018-12-19",
                score: 85,
            },
        ],
    };

    return (
        <div>
            <button onClick={() => addLearner(newLearner)}>Create</button>
        </div>
    );
}
export default CreateLearner;

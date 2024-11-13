import Answer from "./Answer";

const Answers = ({answers}) => {
    return (
        <div className="answers-list">
            {Array.from(answers).map(answer => {
                return <Answer key={answer.id} answer={answer} />
            })}
        </div>
    );
}

export default Answers;
const Answer = ({answer}) => {
    const className = 'answer-item' + (answer.found ? ' answer-found' : '');

    return (
        <div className={className}>
            <span>{answer.score}</span>
            <span>{answer.answer}</span>
        </div>
    );
}

export default Answer;
const Score = ({score, goalScore}) => {
    return (
        <hgroup>
            <h1>{score}</h1>
            <h2>Reach {goalScore} to get your gift ! :)</h2>
        </hgroup>
    );
}

export default Score;
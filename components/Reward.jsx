const Reward = ({currentScore, goalScore, onButtonClicked}) => {
    if (goalScore > currentScore) {
        return (
            <button disabled>Not available yet ! You need {goalScore - currentScore} more points !</button>
        );
    }

    return (
        <button onClick={onButtonClicked}>Get reward !!</button>
    )
};

export default Reward;
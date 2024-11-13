const Reward = ({currentScore, goalScore}) => {
    if (goalScore > currentScore) {
        return (
            <button disabled>Not available yet ! You need {goalScore - currentScore} more points !</button>
        );
    }

    return (
        <button>Get reward !!</button>
    )
};

export default Reward;
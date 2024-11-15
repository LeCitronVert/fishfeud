const AllClear = ({currentScore, maxScore}) => {
    if (currentScore !== maxScore) {
        return;
    }

    return (
        <h3>
            Woah ! You cleared all spaces ! I hope you liked that little game, friend !!
        </h3>
    );
}

export default AllClear;
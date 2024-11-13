import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import "@sweetalert2/theme-dark/dark.css"

const Answer = ({answer}) => {
    const className = 'answer-item' + (answer.found ? ' answer-found' : '');

    const clickHandler = () => {
        if (answer.found) {
            return;
        }

        
        withReactContent(Swal).fire({
            title: answer.tip.img,
            html: `<strong>${answer.tip.text}</strong>`,
        });
    };

    return (
        <div className={className} onClick={clickHandler}>
            <span>{answer.score}</span>
            <span>{answer.answer}</span>
        </div>
    );
}

export default Answer;
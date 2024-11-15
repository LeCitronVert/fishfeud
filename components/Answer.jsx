import Swal from "sweetalert2/src/sweetalert2.js"
import withReactContent from 'sweetalert2-react-content'
import "@sweetalert2/theme-dark/dark.css";

const Answer = ({answer}) => {
    const className = 'answer-item' + (answer.found ? ' answer-found' : '');

    const clickHandler = () => {
        if (answer.found) {
            return;
        }

        delete window.aftercheck;

        if (answer.aftercheck) {
            window.aftercheck = answer.aftercheck;
        }

        withReactContent(Swal).fire({
            title: answer.tip.img,
            html: `<strong>${answer.tip.text}</strong>`,
        });
    };

    return (
        <div className={className} onClick={clickHandler}>
            <span className='score'>{answer.score}</span>
            <span className='answer'>{answer.answer}</span>
        </div>
    );
}

export default Answer;
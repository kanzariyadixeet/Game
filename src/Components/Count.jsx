import React, { useContext } from 'react';
import { Context } from '../ContextApi';

export default function Count() {
    const { count, setcount, setCountdown, setSkip } = useContext(Context);

    const next = () => {
        setCountdown(false)
        setSkip(p => p + 1)
        setcount(p => p + 1)
    }

    return (
        <footer className="footer">
            <div className="modal_controls">
                <p className="progress-current">{count} / 10</p>
                <button
                    className="modal__btn btn--enabled"
                    onClick={() => next()}
                >
                    Next
                </button>
            </div>
        </footer>
    );
}

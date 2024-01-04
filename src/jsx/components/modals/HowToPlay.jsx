import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

import Word from "../grid/Word";

export default function HowToPlay({modalOpen, closeModal}) {
    return (<Modal closeTimeoutMS={250} className={"info-modal"} overlayClassName={"info-overlay"} isOpen={modalOpen} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}>
    <div className="info-content">
    <div className="info-top-bar">
            <p>How To Play</p>
            <button className="right-edge-button"><img src="/assets/x-circle.svg" onClick={closeModal}/></button>
        </div>
        <div className="tutorial-section">
            <p>Guess the word in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <div className="tutorial-step">
                <Word className="tutorial-word" status={"inprogress"} word={"WHALE"} answer={"WZZZZ"} reveal={true} tut={[0, 3]}/>
                <p className="tutorial-text">The letter W is in the word and in the correct spot.</p>
            </div>
            <div className="tutorial-step">
                <Word className="tutorial-word" status={"inprogress"} word={"PEACH"} answer={"AZZZZ"} reveal={true} tut={[2, 2]}/>
                <p className="tutorial-text">The letter A is in the word but in the wrong spot.</p>
            </div>
            <div className="tutorial-step">
                <Word className="tutorial-word" status={"inprogress"} word={"WORKS"} answer={"ZZZZZ"} reveal={true} tut={[3, 1]}/>
                <p className="tutorial-text">The letter K is not in the word in any spot.</p>
            </div>
        </div>

    </div>
    
    <div className="links">
        <Link className="link" onClick={() => window.location.href = "https://notaroomba.dev"}>Website</Link>
        <p>•</p>
        <p>NotARoomba</p>
        <p>•</p>
        <Link className="link" onClick={() => window.location.href = "https://github.com/NotARoomba/Wordle"}>GitHub</Link>
    </div>
    </Modal>)
}
import './style.css';
import { useState } from 'react';

export default function GenericForm({ sendPrompt }) {

    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() === '') { setInput(''); return; }
        sendPrompt(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="GenericForm">
            <label htmlFor="name"><b>Type a prompt</b> for the language model</label>
            <textarea id="prompt" value={input} placeholder="Hello, AI" onChange={(event) => setInput(event.target.value)}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

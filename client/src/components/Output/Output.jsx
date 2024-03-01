import './style.css';

export default function Output({ output }) {
    return (
        <div className="Output">
            <p>{output && output}</p>
        </div>
    );
}
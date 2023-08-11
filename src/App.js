import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
	const [advice, setAdvice] = useState("");
	const [count, setCount] = useState(0);
	const getAdvice = async () => {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		console.log(data.slip.advice);
		setAdvice(data.slip.advice);
		setCount((count) => count + 1);
	};

	useEffect(() => {
		getAdvice();
	}, []);

	return (
		<div className="App">
			<h1>Hello world</h1>
			<h1>{advice}</h1>
			<button onClick={getAdvice}>Get Advice</button>
			<p>You have read {count} pieces of advice</p>
		</div>
	);
}

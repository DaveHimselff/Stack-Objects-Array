import { useState } from "react";

function Controlled() {
    const [state, setState] = useState("");
	
	function handleChange(event) {
		setState(event.target.value);
	}

	return(
		<div>
            <input 
				onChange={handleChange}
				type="text" />
			<br/>
			{state}
		</div>
	)
}

export default Controlled;

import React from 'react';
import List from './List';
import pokken from './../download2.jpg'
import refreshIcon from './../refreshIcon.webp'
export default function Main() {
	const [numberOfParticipants, setNumberOfParticipants] = React.useState(0);
	const [renderList, setRenderList] = React.useState(false);

	function checkPwrOf2(n){
		
		return (n & (n - 1)) === 0 ;
	}
	function handleSubmit(e){
			e.preventDefault()
			if(checkPwrOf2(numberOfParticipants) && numberOfParticipants >= 2){
				setRenderList(true);
				const alert = document.querySelector(".alert");
				alert.innerHTML = ""
				
			} else {
				const alert = document.querySelector(".alert");
				alert.innerHTML = "Enter a power of 2 >= 2"
			}
			
	}

	function handleChangeForm(e){
		setNumberOfParticipants(e.target.value);
	}

	return (
		<main>
			
			<h3 className="alert"> </h3>
			{ !renderList && <form onSubmit={handleSubmit} className = "mainForm">
				<h2 className="form--head"> Enter Tournament size: </h2>
				<input 
				placeholder="enter number" 
				name="numberOfParticipants" 
				value={numberOfParticipants} 
				onChange={handleChangeForm} />
				<button > Enter </button>

			</form> }
			<button className="refreshButton" onClick= {() => window.location.reload()} > <img className="refreshImg" src={refreshIcon} /> </button>
			{ !renderList && <img className="pokken" src={pokken} /> }
			{ renderList && <List num = {numberOfParticipants} />}

		</main>

		)
}
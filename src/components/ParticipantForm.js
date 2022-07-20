import React from 'react';

export default function List(props){

	const [renderList, setRenderList] = React.useState(false);
	const [participant, setParticipant] = React.useState("");
	const [img, setImg] = React.useState("");
	const [show, setShow] = React.useState(false);
	async function handleSubmit(e){
			e.preventDefault();
			//fetch pokemon
			props.setParticipant(props.index,participant);
			const url = 'https://pokeapi.co/api/v2/pokemon/' +  participant;
			const res = await fetch(url);
			const data = await res.json();
			setImg(data.sprites.front_default);
			setShow(true);
			props.setStat(props.index, data.stats[0].base_stat);
			console.log(data.sprites.front_default)
			props.setImg(props.index,data.sprites.front_default);

	}

	function handleChangeForm(e){
		e.preventDefault();
		// console.log(e.target.value)
		setParticipant(e.target.value)

		// console.log(props.participant)
	}

	return (
		<main>
			<form onSubmit={handleSubmit} className="participantForm">
				<input 
				className = "participant--input"
				placeholder="enter participant name" 
				name="participant" 
				value = {participant}
				onChange={handleChangeForm} />
				<button > Register </button>
				{ show && <p> {props.participant} </p>}
				{ show && <img src = {img} /> }
				
			</form>

		</main>

		)
}
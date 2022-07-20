import React from 'react'


export default function Fight(props){
	let buttons = [];
	let buttonBools = [];
	const n = (Math.log2(props.num));
	console.log(n)
	for(let i=0;i < n;i++){
		buttons[i] = i;
		buttonBools[i] = false;
	}
	
	

	let arr = [];
	for(let i=0;i<props.num;i++){
		const obj = {
			name : props.pokemonList[i],
			stat : props.pokemonStats[i],
			img  : props.pokemonImgs[i]
		}

		arr[i] = obj;
	}
	const [fightArr, setFightArr] = React.useState( arr );
	const [buttonBool, setButtonBool] = React.useState( buttonBools );
	const [count, setCount] = React.useState( "button0" );
	const [congo, setCongo] = React.useState( false );
	

	const dispMons = fightArr.map( mon => {
		return (
			<div>
			<p> {mon.name} </p>
			<img src = {mon.img} />
			</div>

			)
	})


	const dispButtons = buttons.map(i => {
		return (
				<button name= {`button${i}`} className='activeButton' onClick = {handleClick} > {`Round ${i+1}`} </button>
			)
	})


	React.useEffect(()=>{
		const tourney = document.querySelector(".tourney");
		const div = document.createElement("div");
		const roundInfo = document.createElement("div");
		const title = document.createElement("p");
		roundInfo.classList.add('roundInfo');
		const r = parseInt(count[count.length-1])+1
		if(fightArr.length !== 1){
			title.innerHTML = `Round ${r}`;
		} else {
			title.innerHTML = `Winner`;
		}
		
		roundInfo.appendChild(title)
		div.classList.add("round");
			for(let i=0;i<fightArr.length;i++){
				const elem = document.createElement("div");
				const p =document.createElement("p");
				const p1 =document.createElement("p");
				p.innerHTML = fightArr[i].name;
				p1.innerHTML = "Participant "+ (parseInt(i)+1);
				const image = document.createElement("img");
				image.src = fightArr[i].img;
				elem.appendChild(p1);
				elem.appendChild(p);
				elem.appendChild(image);

				div.appendChild(elem)
			}

			roundInfo.appendChild(div)
			tourney.appendChild(roundInfo);

			if(fightArr.length == 1){	
				setCongo(true);
			}

	}, [fightArr])

	function handleClick(e){
		console.log(e.target.name)
		if(fightArr.length !== 1 && count === e.target.name){

			setFightArr( (oldArr) => {
				let newArr= [];
				console.log(oldArr)
				for(let i=0;i < oldArr.length-1;i=i+2){
					console.log(oldArr[i].stat)
					if(oldArr[i].stat >= oldArr[i+1].stat ){
						newArr.push(oldArr[i]);
					} else {
							newArr.push(oldArr[i+1]);
					}
				}
				console.log(newArr)
				return newArr;
			})

			
			e.target.classList.add("inactiveButton")

			setCount( (oldButton) => {
				const c = parseInt(oldButton[oldButton.length-1]) + 1;
				const newButton = `button${c}`
				
				return newButton;
			})
		} 

		
	}

	return ( 
		<div>
			<h1>Fight!!!</h1>
			<div className="buttons">
				{dispButtons}
			</div>
			<div className = "tourney">
				
			</div>
			
			{congo && <button onClick= {() => window.location.reload()} className="restartButton"> Finish </button> }
		</div>
		)
}
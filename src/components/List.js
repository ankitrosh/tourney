import React from 'react';
import ParticipantForm from './ParticipantForm'
import Fight from './Fight'
export default function List(props){
	let n = props.num;
	let forms = []; 
	for(let i=0;i<n;i++){
		forms[i] = "";
	}
	const [participantList, setParticipantList] = React.useState(forms);
	const [participantStats, setParticipantStats] = React.useState(forms);
	const [participantImgs, setParticipantImgs] = React.useState(forms);
	const [showFight, setShowFight] = React.useState("false");
	React.useEffect(()=>{
		let flag = true;
		for(let i=0;i<n;i++){
			if(participantStats[i] === ""){
				flag = false;
				break;
			}
		}
		console.log(flag)
		setShowFight(flag);

	},[participantStats])

	function setImgs(i,img){
		setParticipantImgs(oldImgs => {
			const newImgs = [...oldImgs];
			newImgs[i] = img;
			console.log(newImgs);
			return ( newImgs );
		})
	}

	function setStats(i,stats){
		setParticipantStats(oldStats => {
			const newStats = [...oldStats];
			newStats[i] = stats;
			
			return ( newStats );
		})
	}
	function setParticipant(i,pname){

		setParticipantList(oldList => {
			const newList = [...oldList];
			newList[i] = pname;
			
			return ( newList );
		})
		
	}
	const dispForms = participantList.map((form,i)=> {
		return (
			<ParticipantForm 
			index = {i}
			participant = {participantList[i]}
			setParticipant = {setParticipant}
			setStat = {setStats}
			setImg = {setImgs}
			
			/>
			)
	})
	return (
		<div>
			<div className="listForms">
				{ !showFight && dispForms}

				
			</div>

			{ showFight && <Fight 
					num = {n}
					pokemonList = {participantList}
					pokemonStats = {participantStats}
					pokemonImgs = {participantImgs}
				/>}
		</div>
		)
}
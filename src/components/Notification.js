import { useState, useEffect, useRef } from 'react';
import { useIsOnline } from '../hooks/useIsOnline'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLink, faUnlink } from "@fortawesome/free-solid-svg-icons";

export default function Notification(){
	const isOnline = useIsOnline();
	const [className, setClassName] = useState("notification hide");
	const [label, setLabel] = useState();
	const [icon, setIcon] = useState();
	const [initialRender, setInititalRender] = useState(true);
	useEffect(() => {
		if(initialRender) {
			setInititalRender(false);
		} else {
			setLabel(isOnline ? "You're back online" : "You're disconnected");
			setIcon(isOnline ? faLink : faUnlink);
			setClassName("notification");
			setTimeout(()=>{
				setClassName("notification hide");
			}, 3000);	
		}
	}, [isOnline])
	return (
		<div className={className}>
			<p><FontAwesomeIcon icon={icon} /> &nbsp;&nbsp; {label}</p>
		</div>
	)
}
import {useState, useEffect} from 'react';

export function useIsOnline() {
	const [isOnline, setIsOnline] = useState(true);
	useEffect(()=>{
		console.log("Hook being called");
		const handleOnline = () => {
			setIsOnline(true);
		}
		const handleOffline = () => {
			setIsOnline(false);
		}
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		return ()=> {
			window.addEventListener("online", handleOnline);
			window.addEventListener("offline", handleOffline);
		}
	}, []);
	return isOnline;
}
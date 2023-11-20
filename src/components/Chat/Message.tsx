import React from 'react';

//types for props
interface MessageProps {
	message: string;
}

export default function Message(props: MessageProps) {

	return <div className="Message">{props.message}</div>;
}


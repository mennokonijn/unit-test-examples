import React from 'react';

const Answer = ( props ) => {
	const { id, text } = props;

	// test

	return (
		<li className="oracle__answer">
			Answer { id }: <em>{ text }</em>
		</li>
	);
};

export default Answer;

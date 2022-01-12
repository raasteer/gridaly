import React from 'react';

import styled from 'styled-components';

export const Box = (props) => {
	const [color, setColor] = React.useState(props.defaultColor);
	const timer = React.useRef(null);

	const handleOnClick = async () => {
		clearTimeout(timer.current);

		try {
			const result = await(await fetch('https://app.gridaly-sandbox.com/api/v1/color')).json();

			if (result.status === 'success') {
				setColor(result.data)
			} else {
				setColor(props.defaultColor)
				result.status === 'error' ? console.error(result.message.title) : console.error('Wystąpił nieznany błąd!');
			}
		} catch (e) {
			console.log(e);
		}

		timer.current = setTimeout(() => {
			setColor(() => props.defaultColor);
		}, 2000);
	}

	return (
		<StyledBox
			onClick={handleOnClick}
			color={color}
		/>
	);
}

const StyledBox = styled.div`
  background-color: ${props => props.color};
  position: relative;
  width: 50%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  
  &:hover {
    filter: brightness(85%);
  }
`

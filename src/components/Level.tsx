import React from 'react';
import { LevelSelect } from './Level.styles';

type props = {
	levels: string[]
	handleClick: any
	disabled: boolean
}

export const Level: React.FC<props> = ({ levels, handleClick, disabled }) => {
	return (
		<LevelSelect>
			<select defaultValue={levels[0]} onChange={(e) => handleClick(e.target.value)} disabled={disabled} >
				{levels.map((level: string) => <option key={level} value={level} >{level}</option>)}
			</select>
		</LevelSelect>
	)
}

import React from 'react'

type props = {
	handleChange:any,
	value:number
	disabled:boolean
}

export const NumberOfQuestions: React.FC<props> = ({ value, handleChange,disabled }) => {
	return (
		<form  >
			<input  type="number" min="1" max="50" value={value} onChange={handleChange} disabled={disabled}/>
		</form>
	)
}

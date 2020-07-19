import React from 'react'
import { AnswerObject } from '../helpers/types'

type Props = {
	question: string;
	answers: string[];
	userAnswer: AnswerObject | undefined;
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	questionNumber: number;
	totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions
}) => (
		<div>
			<p className="number">
				Question:{questionNumber}/{totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div>
				{
					answers.map((answer) => (
						<div key={answer}>
							<button disabled={!!userAnswer} onClick={callback} value={answer}>
								<span dangerouslySetInnerHTML={{ __html: answer }} />
							</button>
						</div>
					))
				}
			</div>
		</div>
	);

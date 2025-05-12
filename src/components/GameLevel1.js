import React, { useState } from 'react';
import './GameLevel1.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function LevelProgress({ currentStage, totalStages }) {
	const stages = Array.from({ length: totalStages }, (_, i) => i + 1);

	return (
		<div className="level-progress">
			{stages.map((stage, index) => (
				<div key={stage} className="progress-item">
					<div className={`square ${currentStage === stage ? 'active' : ''}`}>
						{stage}
					</div>
					{index < totalStages - 1 && <div className="line" />}
				</div>
			))}
		</div>
	);
}

function GameBackground({ currentStage }) {
    return (<div className={`background bg-stage-${currentStage}`}></div>);
}

function GameLevel1() {
	const [stage, setStage] = useState(1);
	const totalStages = 5;

	return (
		<div className="game-level">
			<GameBackground currentStage={stage} />

			<div className="game-content">
				<LevelProgress currentStage={stage} totalStages={totalStages} />
				<h2 className="chain-style-level">Niveau {stage}</h2>

				<button
					className="next-button"
					onClick={() => setStage(stage + 1)}
					disabled={stage === totalStages}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default GameLevel1;

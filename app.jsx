var PLAYERS = [
	{
		id: 1,
		name: "Kapil Viren Ahuja",
		score: 25,
	},
	{
		id: 2,
		name: "Shafali Rana",
		score: 50,
	},
	{
		id: 3,
		name: "Gita Chhibber",
		score: 100,
	},
	{
		id: 4,
		name: "Gorav Goyal",
		score: 125,
	},
	{
		id: 5,
		name: "Rahul Mohindra",
		score: 150,
	},
]

function Header (props) {
	return (
    	<div className="header">
    		<h1>{props.title}</h1>
    	</div>
	);
}

Application.propTypes = {
	title: React.PropTypes.string.isRequired,
};


function Player (props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<Counter score={props.score} />
			</div>
		</div>
    )
}

Application.propTypes = {
	name: React.PropTypes.string.isRequied,
	score: React.PropTypes.number.isRequired,
};


function Counter (props) {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<div className="counter-score"> {props.score} </div> 
			<button className="counter-action increment"> + </button>
		</div>
	)
}

Application.propTypes = {
	score: React.PropTypes.number.isRequired,
};


function Application (props) {
  return (
    <div className="scoreboard">
    	<Header title={props.title} />

    	<div className="players">
    		{props.players.map(function(player) {
    			return <Player name={player.name} score={player.score} key={player.id} />
    		})}
    	</div>
    </div>
  );
}

Application.propTypes = {
	title: React.PropTypes.string,
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
	})).isRequired,
};

Application.defaultProps = {
	title: "Scoreboard",
};

ReactDOM.render(<Application title="Learning react | Scoreboard" players={PLAYERS}/>, document.getElementById('container'));


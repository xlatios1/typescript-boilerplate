export const matchPlayersAndTrainers = (
	players: number[],
	trainers: number[]
): number => {
	let res = 0
	players.sort((a, b) => b - a)
	trainers.sort((a, b) => b - a)
	let p = 0,
		t = 0

	while (p < players.length && t < trainers.length) {
		while (players[p] > trainers[t]) {
			p++
		}
		if (trainers[t] >= players[p]) {
			res++
		}
		p++
		t++
	}
	return res
}

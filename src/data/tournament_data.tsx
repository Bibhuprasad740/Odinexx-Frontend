// Sample tournament data
const tournament = {
    name: "Odinexx Championship",
    date: "March 15-20, 2025",
    prize: "$100,000",
    teams: [
        { id: 1, name: "Phoenix Elite", seed: 1, logo: "🔥" },
        { id: 2, name: "Dragon Warriors", seed: 2, logo: "🐉" },
        { id: 3, name: "Cyber Knights", seed: 3, logo: "⚔️" },
        { id: 4, name: "Shadow Strikers", seed: 4, logo: "👁️" },
        { id: 5, name: "Thubder Bird", seed: 1, logo: "🔥" },
        { id: 6, name: "Soul Reaper", seed: 2, logo: "🐉" },
        { id: 7, name: "Death Rider", seed: 3, logo: "⚔️" },
        { id: 8, name: "King of Kings", seed: 4, logo: "👁️" },
    ],
    matches: [
        // Round 1 (Quarterfinals)
        {
            round: 1,
            matches: [
                { id: 1, team1: 1, team2: 4, winner: 1, score: "2-0" },
                { id: 2, team1: 2, team2: 3, winner: 2, score: "2-1" },
                { id: 3, team1: 5, team2: 8, winner: 8, score: "2-1" },
                { id: 4, team1: 6, team2: 7, winner: 7, score: "2-1" },
            ]
        },
        // Round 2 (Semi Finals)
        {
            round: 2,
            matches: [
                { id: 5, team1: 1, team2: 2, winner: 1, score: "3-2" },
                { id: 6, team1: 8, team2: 7, winner: 7, score: "3-2" },
            ]
        },
        // Round 3 (Finals)
        {
            round: 3,
            matches: [
                { id: 7, team1: 1, team2: 7, winner: 7, score: "3-2" },
            ]
        },
        // Round 4 (Champion)
        {
            round: 4,
            matches: [
                { id: 8, team1: 7, winner: 7 }
            ]
        }
    ]
};

export default tournament;
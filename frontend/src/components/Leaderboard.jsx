import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/api/leaderboard');
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
          <h1 className="text-4xl font-extrabold text-indigo-600 text-center mb-8">
            Leaderboard
          </h1>

          <table className="min-w-full table-auto rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-indigo-600 text-white text-lg ">
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((player, index) => (
                <tr
                  key={player.id}
                  className={`text-center ${
                    index === 0 ? "bg-yellow-100" : "bg-white"
                  } hover:bg-gray-100 transition-all duration-300`}
                >
                  <td
                    className={`px-6 py-4 border-b border-gray-200 font-medium ${
                      index === 0 ? "text-indigo-700 font-bold" : "text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`px-6 py-4 border-b border-gray-200 font-medium ${
                      index === 0 ? "text-indigo-700 font-bold" : "text-gray-700"
                    }`}
                  >
                    {player.name}
                  </td>
                  <td
                    className={`px-6 py-4 border-b border-gray-200 font-medium ${
                      index === 0 ? "text-indigo-700 font-bold" : "text-gray-700"
                    }`}
                  >
                    {player.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;

import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editName = <span className="player-name">{playerName}</span>;

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }
  if (isEditingName) {
    editName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {editName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditingName(!isEditingName)}>
        {isEditingName ? "Save" : "Edit"}
      </button>
    </li>
  );
}

import React from "react";

// Componente singolo Tile
const Tile = ({ name, description, onDelete }) => {
  const entries = Object.entries(description || {}).filter(
    ([key, value]) => value && value !== name
  );

  return (
    <div className="tile-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="tile-title">{name}</p>
        <button
          onClick={onDelete}
          aria-label="delete"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ✕
        </button>
      </div>

      {entries.map(([key, value], index) => (
        <p key={index} className="tile">
          <strong>{key}:</strong> {value}
        </p>
      ))}
    </div>
  );
};

// Componente TileList che mostra un array di tile
export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          name={tile.name}
          description={tile.description}
          onDelete={tile.onDelete}
        />
      ))}
    </div>
  );
};
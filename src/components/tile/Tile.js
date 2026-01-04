import React from "react";

export const Tile = ({ name, description, onDelete }) => {
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
            fontWeight: "bold"
          }}
        >
          ✕
        </button>
      </div>

      {description
        .filter(value => value !== name)
        .map((value, index) => (
          <p key={index} className="tile">
            {value}
          </p>
        ))}
    </div>
  );
};
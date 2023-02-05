import React, { useState } from 'react';
import Organicos from "./organicos.jpg"
import Metales from "./metales.jpg";
import Vidrios from "./vidrios.jpg";
import Papeles from "./papeles.jpg"
import Plasticos from "./plasticos.jpg"
import Banana from "./Banana.png"
import Can from "./Can.jpg"
import Glass from "./Glass.png"
import Paper from "./Paper.png"
import Plastic from "./Plastic.png"

const types = {
    Organico: Banana,
    Plástico: Plastic,
    Vidrio: Glass,
    Papel: Paper,
    Metal: Can
}

function Game() {
    const [points, setPoints] = useState(0);
    const [trashType, setTrashType] = useState(getRandomTrashType());

    function handleTrashBinClick(selectedTrashType) {
        if (selectedTrashType === trashType) {
            setPoints(points + 1);
        } else {
            setPoints(points - 1);
        }
        setTrashType(getRandomTrashType());
    }

    return (
        <div>
            <h1>Puntos: {points}</h1>
            <Trash type={trashType} />
            <div class="bin-row">
                <TrashBin type="Plástico" onClick={() => handleTrashBinClick('Plástico')} imageUrl={Plasticos} />
                <TrashBin type="Papel" onClick={() => handleTrashBinClick('Papel')} imageUrl={Papeles} />
                <TrashBin type="Vidrio" onClick={() => handleTrashBinClick('Vidrio')} imageUrl={Vidrios} />
                <TrashBin type="Metal" onClick={() => handleTrashBinClick('Metal')} imageUrl={Metales} />
                <TrashBin type="Organico" onClick={() => handleTrashBinClick('Organico')} imageUrl={Organicos} />
            </div>
        </div>
    );
}

const TrashBin = ({ type, onClick, imageUrl }) => (
    <div onClick={onClick}>
        <p>{type}</p>
        <img src={imageUrl} alt={`${type} trash bin`} />
    </div>
);

function Trash({ type }) {
    return (
        <div>
            <img src={types[type]} alt={`${type} trash`} />
        </div>
    );
}

function getRandomTrashType() {
    const trashTypes = ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Organico'];
    return trashTypes[Math.floor(Math.random() * trashTypes.length)];
}

export default Game;

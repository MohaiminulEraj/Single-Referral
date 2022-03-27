import React, { useState } from 'react';
import SRCard from 'react-tinder-card';
import styles from '@/styles/Card.module.css';
import db from '../../data/user.json';

const Simple = () => {
    const characters = db
    const [lastDirection, setLastDirection] = useState()
    const [imgVal, setImgVal] = useState(1)
    const [characterId, setCharacterId] = useState(characters.length)
    const swiped = (direction, nameToDelete) => {
        if (direction === 'right' || direction === 'left') {
            imgVal++;
            if (imgVal > 4) {
                imgVal = 1;
            }
        } else {
            imgVal = 1;
            characterId--;
        }
        setCharacterId(characterId)
        setImgVal(imgVal);
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen! ' + imgVal)
    }

    return (
        <div>
            {/* <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' /> */}
            <h1>React SR Card</h1>
            <div className={styles.cardContainer}>
                {characters.map((character) =>
                    <SRCard className={styles.swipe} key={lastDirection === 'left' || lastDirection === 'right' ? character['img' + imgVal] : character.id} onSwipe={(dir) => swiped(dir, characterId)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        {imgVal}
                        <div style={{ backgroundImage: `url(${character['img' + imgVal]})` }} className={styles.card}>
                            <h3 style={{ color: 'black' }}>
                                {character.name} {character.id} {characterId}
                            </h3>
                        </div>
                    </SRCard>
                )}
            </div>
            {lastDirection ? <h2 className={styles.infoText + ' my-4'}>You swiped {lastDirection}</h2> : <h2 className={styles.infoText} />}
        </div >
    )
}

export default Simple;
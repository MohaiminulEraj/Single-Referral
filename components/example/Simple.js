import React, { useState } from 'react';
import SRCard from 'react-tinder-card';
import styles from '@/styles/Card.module.css';
import db from '../../data/user.json';

const Simple = () => {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div>
            {/* <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' /> */}
            <h1>React SR Card</h1>
            <div className={styles.cardContainer}>
                {characters.map((character) =>
                    <SRCard className={styles.swipe} key={character.frist_name} onSwipe={(dir) => swiped(dir, character.frist_name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.img + ')' }} className={styles.card}>
                            <h3 style={{ color: 'black' }}>{character.first_name}</h3>
                        </div>
                    </SRCard>
                )}
            </div>
            {lastDirection ? <h2 className={styles.infoText + ' my-4'}>You swiped {lastDirection}</h2> : <h2 className={styles.infoText} />}
        </div>
    )
}

export default Simple;
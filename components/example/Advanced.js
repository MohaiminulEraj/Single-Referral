import React, { useState, useMemo, useRef } from 'react'
import SRCard from 'react-tinder-card'
import styles from '@/styles/Card.module.css';
import db from '../../data/user.json';

const Advanced = () => {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < db.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    return (
        <div>
            <h1>React SR Card</h1>
            <div className={styles.buttons}>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('down')}>Swipe down!</button>
                <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('up')}>Swipe up!</button>
            </div>
            <div className={styles.cardContainer}>
                {db.map((character, index) => (
                    <SRCard
                        ref={childRefs[index]}
                        className={styles.swipe}
                        key={character.frist_name}
                        onSwipe={(dir) => swiped(dir, character.frist_name, index)}
                        onCardLeftScreen={() => outOfFrame(character.frist_name, index)}
                    >
                        <div
                            style={{ backgroundImage: 'url(' + character.img + ')' }}
                            className={styles.card}
                        >
                            <h3>{character.frist_name}</h3>
                        </div>
                    </SRCard>
                ))}
            </div>
            <div className={styles.buttons}>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
                <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
            </div>
            {lastDirection ? (
                <h2 key={lastDirection} className={styles.infoText}>
                    You swiped {lastDirection}
                </h2>
            ) : (
                <h2 className={styles.infoText}>
                    Swipe a card or press a button to get Restore Card button visible!
                </h2>
            )}
        </div>
    )
}

export default Advanced;
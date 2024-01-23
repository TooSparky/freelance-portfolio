import { useState } from 'react'
import { motion } from 'framer-motion'

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip () {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
    return(
        <div>CardFlip</div>
    )
}

export default CardFlip;
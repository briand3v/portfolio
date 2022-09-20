import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

type BoxProps = {
    mockup: string,
    revert: boolean
}

const Box: React.FC<BoxProps> = ({ mockup, revert }) => {
    const control = useAnimation()
    const [ref, inView] = useInView()
    const initial = revert ? { x: '100%' } : { x: '-50%' }

    useEffect(() => {
        if (inView) {
            if (revert) {
                control.start({
                    x: "0%",
                    transition: { duration: 1 }
                })
            } else {
                control.start({
                    x: "5%",
                    transition: { duration: 1 }
                })
            }
        } else {
            // control.start('hidden')
        }
    }, [control, inView, revert])

    return (
        <motion.div
            ref={ref}
            // variants={boxVariant}
            className="box"
            animate={control}
            initial={initial}
        >
            <picture>
                <img alt={mockup} src={require(`../../assets/mockups/${mockup}.webp`)} width={550} />
            </picture>
        </motion.div>
    )
}

export default Box
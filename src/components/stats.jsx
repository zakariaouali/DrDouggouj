import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { FadeIn } from '../motion';

export default function Stats() {
    const [hasCounted, setHasCounted] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        onChange: (inView) => {
            if (inView) setHasCounted(true);
        },
    });

    return (
        <motion.div 
        variants={FadeIn("down",0)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.5}}
        className="stats">
            <div className="stat" ref={ref}>
                {hasCounted && (
                    <div className="instat">
                        <span>
                        <CountUp start={0} end={5000} delay={0.5} duration={4} />
                            +</span>
                        <h2>Patients Soignés</h2>
                    </div>
                )}
            </div>
            <div className="stat" ref={ref}>
                {hasCounted && (
                    <div className="instat">
                        <span>
                        <CountUp start={0} end={20} delay={0.5} duration={4} />
                            +</span>
                        <h2>Années d'Expérience</h2>
                    </div>
                )}
            </div>
            <div className="stat" ref={ref}>
                {hasCounted && (
                    <div className="instat">
                        <span>
                        <CountUp start={0} end={8} delay={0.5} duration={4} />
                            +</span>
                        <h2>Spécialités Offertes</h2>
                    </div>
                )}
            </div>
            <div className="stat" ref={ref}>
                {hasCounted && (
                    <div className="instat">
                        <span>
                        <CountUp start={0} end={97} delay={0.5} duration={4} />
                            %</span>
                        <h2>Avis Positifs</h2>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

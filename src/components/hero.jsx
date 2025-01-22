import '../styles/heroStyle.css';
import { motion } from 'framer-motion';
import { FadeIn } from '../motion';

export default function Hero() {
    return (
        <div
        className="hero">
            <motion.aside 
            variants={FadeIn("right",0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once:false,amount:0.3}}
            >
                <h1>Bienvenue chez Dr. Jihane Douggouj
                <div className="roles">
                    <span className='role'>Omnipraticienne</span>
                    <span className='role'>Diabétologue</span>
                    <span className='role'>Nutritionniste</span>
                    <span className='role'>Homéopathe</span>
                    <span className='role'>Cupping thérapie</span>
                    <span className='role'>Acupuncture</span>
                    <span className='role'>Esthéstique</span>
                    <span className='role'>Amincissement</span> 
                </div>
                </h1>
                <div className="description">
                    <p>Dr. Jihane Douggouj,
                        médecin généraliste, vous offre des soins personnalisés
                        en omnipratique,
                        diabétologie, cupping thérapie, esthétique, et bien plus.
                        Découvrez ses services et prenez rendez-vous
                        pour une santé entre de bonnes mains </p>
                </div>
                <div className="buttons">
                    <a href="#rendez-vous"><button  id='rv'>Rendez-vous</button></a>
                    <a href="#services"><button id='sr'>Services</button></a>
                </div>
            </motion.aside>
            <motion.article
            variants={FadeIn("left",0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once:false,amount:0.3}}>
                <img src={`${process.env.PUBLIC_URL}/images/welcome.png`} alt="Logo" />

            </motion.article>
        </div>
    );
}

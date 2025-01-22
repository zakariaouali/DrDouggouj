import "../styles/aboutStyle.css"
import Stats from "./stats"
import { motion } from 'framer-motion';
import { FadeIn } from '../motion';
export default function About(){
    return(
        <div className="about-section" id="home">

          <div className="about">
            <motion.div
             variants={FadeIn("up",0)}
             initial='hidden'
             whileInView={"show"}
             viewport={{once:false,amount:0.3}}
             className="aboutImg">
                <img src={`${process.env.PUBLIC_URL}/images/doctor.jpeg`} alt="Logo" />
            </motion.div>
            <motion.div 
             variants={FadeIn("down",0)}
             initial='hidden'
             whileInView={"show"}
             viewport={{once:false,amount:0.3}}
            className="intro">
                <h1>Pourquoi Choisir Dr. Jihane Douggouj ?</h1>
                <p>
                Dr. Jihane Douggouj est bien plus qu'un simple
                médecin généraliste. Elle combine une approche 
                holistique et des techniques modernes pour vous offrir 
                des soins de santé complets, personnalisés et de haute qualité. 
                Voici pourquoi vous pouvez lui faire confiance :
                </p>
                <div className="soft">
                        <h2 id="h2">Les Valeurs Fondamentales de Dr. Jihane</h2>
                    <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/images/check-mark.png`} alt="Logo" />
                        <p>
                           <strong>Approche Personnalisée :</strong> 
                            Chaque patient est unique. Dr. Jihane s'engage
                            à adapter ses soins à vos besoins spécifiques,
                            en offrant un suivi individualisé.
                        </p>
                    </div>
                    <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/images/check-mark.png`} alt="Logo" />

                        <p>
                           <strong>Compétence Multi-Disciplinaire :</strong> 
                           Avec une expertise dans de nombreuses 
                           spécialités médicales, Dr. Jihane offre une 
                           prise en charge globale, sans jamais sacrifier la qualité.                       
                        </p>
                    </div>
                    <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/images/check-mark.png`} alt="Logo" />

                        <p>
                           <strong>Méthodes Modernes et Naturelles :</strong> 
                           Que ce soit pour traiter des troubles médicaux 
                           ou améliorer votre bien-être, elle combine des 
                           méthodes conventionnelles et naturelles pour vous offrir 
                           le meilleur des deux mondes.                        
                        </p>
                    </div>
                    <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/images/check-mark.png`} alt="Logo" />

                        <p>
                           <strong>Écoute et Confiance : </strong> 
                           Dr. Jihane prend le temps de comprendre vos 
                           préoccupations et de bâtir une relation de confiance 
                           avec chaque patient.                    
                        </p>
                    </div>
                    
                </div>
               
                </motion.div>
            </div>
            {/*<div className="certificate">
                <h2> II - Les Diplômes et Certifications de Dr. Jihane </h2>
                <div className="cert-loop">
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Diplôme d'État de Médecin</h2>
                        <p>délivré par une faculté de médecine au Maroc est 
                            requis pour exercer en tant que médecin généraliste. 
                            Ce diplôme permet à Dr. Jihane de pratiquer la 
                            médecine omnipratique.
                        </p>
                    </div>
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Diplôme en Diabétologie</h2>
                        <p>obtenant ainsi une certification en diabétologie. Cela lui permet 
                            de traiter les patients diabétiques de manière spécialisée.
                        </p>
                    </div>
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Diplôme en Nutrition</h2>
                        <p>Ce diplôme permet à Dr. Jihane de fournir des conseils 
                            professionnels en matière de 
                            nutrition, d'alimentation et de régimes spécifiques.
                        </p>
                    </div>
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Certification en Homéopathie</h2>
                        <p>Ce diplôme certifie ses compétences dans 
                            les soins basés sur les principes de l'homéopathie.
                        </p>
                    </div>
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Formation en Cupping Thérapie</h2>
                        <p>La cupping thérapie ou thérapie par ventouses nécessite une formation spécialisée
                        </p>
                    </div>
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Diplôme en Acupuncture</h2>
                       
                    </div>
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Diplôme en Médecine Esthétique</h2>
                        <p>apprend à effectuer des traitements non invasifs de rajeunissement de la peau.
                        </p>
                    </div>
                    <div className="cert">
                        <img src="/images/graduation.png" alt=""/>
                        <h2>Certification en Amincissement</h2>
                        <p>permettant d'accompagner les patients dans leur démarche de perte de poids.
                        </p>
                    </div>
                </div>
            </div>
            */}
            <Stats/>

        </div>
    )
}
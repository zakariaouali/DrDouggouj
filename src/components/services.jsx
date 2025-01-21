import { useState } from "react";
import "../styles/servicesStyle.css";
import { motion } from 'framer-motion';
import { FadeIn } from '../motion';

export default function Services() {
    const services = [
        { id: 7, name: "Amincissement", description: "Programmes personnalisés pour la gestion du poids et l'amélioration de la silhouette, adaptés à vos objectifs.", categorie: "Beauté", photo: "images/services/aminicissement.jpg" },
        { id: 2, name: "Diabétologue", description: "Prise en charge spécialisée des troubles liés au diabète, avec un suivi personnalisé pour chaque patient.", categorie: "Médical", photo: "images/services/diabétologue.jpg" },
        { id: 3, name: "Nutritionniste", description: "Conseils nutritionnels adaptés à votre mode de vie et à vos besoins spécifiques pour une santé optimale.", categorie: "Santé", photo: "images/services/nutritionniste.webp" },
        { id: 1, name: "Omnipraticienne", description: "Consultation générale pour tous vos besoins de santé. Dr. Jihane assure un suivi complet de votre bien-être.", categorie: "Médical", photo: "images/services/Omnipraticienne.jpeg" },
        { id: 4, name: "Cupping thérapie", description: "Thérapie par ventouses visant à soulager les tensions musculaires et améliorer la circulation sanguine", categorie: "Thérapie", photo: "images/services/cup.webp" },
        { id: 5, name: "Acupuncture", description: "Traitement basé sur la médecine traditionnelle chinoise pour soulager la douleur et rééquilibrer le corps", categorie: "Thérapie", photo: "images/services/cupping.webp" },
        { id: 9, name: "Homéopathe", description: "Traitement homéopathique pour une approche douce et naturelle des troubles de santé variés.", categorie: "Thérapie", photo: "images/services/Homéopathe.jpg" },
        { id: 6, name: "Esthéstique", description: "Soins de beauté, traitements de la peau, et conseils esthétiques pour améliorer votre apparence et votre bien-être.", categorie: "Beauté", photo: "images/services/esthetique.jpg" },
        { id: 8, name: "Agréé pour le permis de conduire", description: "Évaluation médicale pour l’obtention ou le renouvellement du permis de conduire.", categorie: "Autres", photo: "images/services/permis.jpg" },
    ];

    const [visibleCount, setVisibleCount] = useState(3);
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    const filteredServices = selectedCategory === "Tous"
        ? services
        : services.filter((service) => service.categorie === selectedCategory);

    return (
        <main id="services">
            <motion.h1
                variants={FadeIn("right", 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
            >
               <h4> Explorez les Services de Dr. Jihane</h4>
            </motion.h1>

            <motion.div 
            variants={FadeIn("down", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} 
            className="categories">
                {["Tous", "Beauté", "Médical", "Santé", "Thérapie", "Autres"].map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => {
                            setSelectedCategory(category);
                            setVisibleCount(3); 
                        }}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            <motion.div
                variants={FadeIn("down", 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="services"
            >
                {filteredServices.slice(0, visibleCount).map((service, index) => (
                    <div className="service" key={index}>
                        <div className="photo">
                            <img src={service.photo} alt="" />
                        </div>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <button> Voir plus</button>
                    </div>
                ))}
                {visibleCount < filteredServices.length && (
                    <button className="load-more" onClick={loadMore}>Voir plus de Services</button>
                )}
            </motion.div>
        </main>
    );
}

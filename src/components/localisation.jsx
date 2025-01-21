import "../styles/localisation.css"
import { motion } from 'framer-motion';
import { FadeIn } from '../motion';
export default function Localisation(){
    return(
        <div className="localisation" id="localisation">
            <motion.div 
             variants={FadeIn("up",0)}
             initial='hidden'
             whileInView={"show"}
             viewport={{once:false,amount:0.3}}

            className="local">
            <h1>Cabinet Dr.Jihane Douggouj </h1>
            <p>Av Allal El Fassi Op Boustane Ii, Imm A, Appt 5 au 1er étage 
                (ascenseur présent et fonctionnel), Entre Service Des M.I.N.E.S Et 
                Marjane, Au Dessus De Pharmacie Al Boustane, 
                40000, Marrakech, Maroc</p>
            <h2>Houraire</h2>
            <ul>
                <li><b> Lundi :</b> <> 9h.00 – 4h.00 </></li>
                <li><b>Mardi :</b> <>9h.00 – 4h.00</></li>
                <li><b>Mercredi :</b> <>9h.00 – 4h.00</></li>
                <li><b>Jeudi :</b> <>9h.00 – 4h.00</></li>
                <li><b>Vendredi :</b> <>9h.00 – 4h.00</></li>
                <li><b id="cls">Samedi :</b> <>Fermé</></li>
                <li><b id="cls">Dimanche :</b> <>Fermé</></li>
            </ul>
            </motion.div>
            <motion.iframe 
             variants={FadeIn("down",0.6)}
             initial='hidden'
             whileInView={"show"}
             viewport={{once:false,amount:0.3}}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6791.962221043133!2d-8.007326008127778!3d31.66173653812577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafec2df6287cf1%3A0x43db5ad995df8d1b!2sdocteur%20jihane%20DOUGGOUJ!5e0!3m2!1sen!2sma!4v1737328228492!5m2!1sen!2sma" 
  width="1000" 
  height="500" 
  style={{ border: '0' }} 
  allowFullScreen="true" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
    )
}
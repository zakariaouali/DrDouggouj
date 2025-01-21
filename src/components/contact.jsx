import "../styles/contact.css"
import { motion } from 'framer-motion';
import { FadeIn } from '../motion';
export default function Contact(){
    return(
        <div className="contact" id="contact">
            <motion.div 
             variants={FadeIn("right",0.3)}
             initial='hidden'
             whileInView={"show"}
             viewport={{once:false,amount:0.3}}

            className="cImg">
                <img src="/images/doctorPhone.jpg" alt="photo"/>
            </motion.div>
            <motion.div 
             variants={FadeIn("left",0)}
             initial='hidden'
             whileInView={"show"}
             viewport={{once:false,amount:0.3}}
            className="contactInfo">
                <h1>Contacter Dr.Jihane</h1>
                <div className="contactItem">
                    <img src="/images/icons/location.png" alt="location"/>
                    <h2>Rue Al Antaqui, Marrakech 40000</h2>
                </div>
                <div className="contactItem">
                    <img src="/images/icons/call.png" alt="phone number"/>
                    <a href="tel:05243-02036"><h2>05243-02036</h2></a>
                </div>
                <div className="contactItem">
                    <img src="/images/icons/email.png" alt="email"/>
                    <a href="mailto:jihanedouggouj@gmail.com"><h2>jihanedouggouj@gmail.com</h2></a>
                </div>
                <div className="socialmedia">
                    <motion.a 
                     variants={FadeIn("down",0.7)}
                     initial='hidden'
                     whileInView={"show"}
                     viewport={{once:false,amount:0.3}}
                    href="https://www.facebook.com/Dr.douggouj/"><img src="/images/icons/facebook.png" alt="facebook" /></motion.a>
                    <motion.a 
                     variants={FadeIn("down",1.1)}
                     initial='hidden'
                     whileInView={"show"}
                     viewport={{once:false,amount:0.3}}
                    href="https://www.instagram.com/cabinet_dr_douggouj/"><img src="/images/icons/instagram.png" alt="instagram" /></motion.a>
                    <motion.a 
                     variants={FadeIn("down",1.7)}
                     initial='hidden'
                     whileInView={"show"}
                     viewport={{once:false,amount:0.3}}
                    href="https://www.linkedin.com/in/jihane-douggouj-5a7625aa/?originalSubdomain=ma"><img src="/images/icons/linkedin.png" alt="linkedin" /></motion.a>
                </div>
            </motion.div>
        </div>
    )
}
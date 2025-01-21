import "../styles/rende-vous.css"
import { useState } from "react";
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';
import { FadeIn } from '../motion';

export default function Rendezvous() {

    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f7480995-3278-4ead-b632-54fadbf9281b");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          Swal.fire({
            title: "Votre demande a bien été envoyée",
            text: "Nous avons bien reçu votre demande de rendez-vous. Un assistant vous contactera dans les plus brefs délais pour confirmer votre rendez-vous",
            icon: "success"
          });
        } else {
            setResult(data.message);
        }
      };



    const [date, setDate] = useState("");
    const [time, setTime] = useState("09:00");

    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value);
        const dayOfWeek = selectedDate.getUTCDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            Swal.fire({
                icon: "error",
                title: "Date Invalide",
                text: "Les rendez-vous ne sont pas disponibles le week-end. Veuillez sélectionner un jour de la semaine (du lundi au vendredi).",
              });
            setDate("");
            return;
        }

        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        const selectedTime = event.target.value;
        const [hours, minutes] = selectedTime.split(":").map(Number);

        if (hours < 9 || (hours === 18 && minutes > 0) || hours > 18) {
            Swal.fire({
                icon: "error",
                title: "Heure Invalide",
                text: "Les horaires disponibles sont entre 9h00 et 18h00. Veuillez sélectionner une heure dans cette plage.",
              });
            setTime("09:00"); 
            return;
        }

        setTime(selectedTime);
    };

    return (
        <motion.div 
        variants={FadeIn("down",0)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}

        className="rendez-vous" id="rendez-vous">
            <h1>Prendre un Rendez-vous</h1>
            <form action="#" method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input type="text" id="name" name="name" placeholder="Nom et prénom"required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input type="email" id="email" name="email" placeholder="nomemail@gmail.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input type="number" id="phone" name="phone"  placeholder="06 00 00 00 00 "required />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date souhaitée</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Heure souhaitée</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={time}
                        onChange={handleTimeChange}
                        min="09:00"
                        max="18:00"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="specialty">Spécialité</label>
                    <select id="specialty" name="specialty" required>
                        <option value="omnipractice">Omnipractice</option>
                        <option value="diabetology">Diabetology</option>
                        <option value="nutrition">Nutrition</option>
                        <option value="Omnipraticienne">Omnipraticienne</option>
                        <option value="Cupping thérapie">Cupping thérapie</option>
                        <option value="Acupuncture">Acupuncture</option>
                        <option value="homeopathy">Homeopathy</option>
                        <option value="Esthéstique">Esthéstique</option>
                        <option value="permis de conduire">permis de conduire</option>
                        <option value="Autre">Autre</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Commentaires supplémentaires</label>
                    <textarea id="notes" name="notes" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="button">Confirmer le Rendez-Vous</button>
            </form>
        </motion.div>
    );
}

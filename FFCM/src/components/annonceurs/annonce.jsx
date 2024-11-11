import React, { useState } from 'react';
import '@css/annonceurs/Annonce.css';
import Carte_annonce from '@components/annonceurs/carte_annonce';
import Carousel from '@components/annonceurs/carrousel';

const contents = [
    {
        content: [<Carte_annonce entreprise="Association de Propriétaires Loueurs de Meublés"
        type="Bagnoles de l'Orne"
        mail="contact@meublesbagnoles.com"
        phone="06 67 95 40 60"
        adresse="La Gaudinière 3518 Route de Perrou - 61700 Domfront en Poiraie"/>]
    },
    {
        content: [<Carte_annonce entreprise="Syndicat des Loueurs de Meublés"
        type="Royat-Chamelières"
        mail="royatchamaliereslocation@orange.fr"
        phone="06 88 26 19 24"
        adresse="18bis Boulevard Barrieu – 63130 Royat"/>]
    },
    {
        content: [<Carte_annonce entreprise="Hôtel de Russie"
        type="Le Mont-Doré"
        mail="contact@lerussie.com"
        phone="04 73 65 05 97"
        adresse="3 rue Favart - 63240 Le Mont-Doré"/>,
        <Carte_annonce entreprise="Le Laurent 1er"
        type="Bar, Brasserie et Restaurant"
        mail="sas.sn@orange.fr"
        phone="04 73 65 02 59"
        adresse="5 rue Meynadier - 63240 Le Mont-Doré"/>,
        <Carte_annonce entreprise="La Louve Dore"
        type="Cordonnier pour randonnée"
        mail="la.louve.dore@hotmail"
        phone="06 58 80 33 11"
        adresse="7 rue Favart - 63240 Le Mont-Doré"/>,
        <Carte_annonce entreprise="Immobilier Gergovia"
        type="Location et Ventes de Meublés"
        mail="immogergovia.montdore@wanadoo.fr"
        phone="04 73 65 21 07"
        adresse="19 place Charles de Gaulle - 63240 Le Mont-Doré"/>
        ]
    },
    {
        content: [<Carte_annonce entreprise="Logeadax"
        type="Agence immobilière"
        mail="contact@logeadax.com"
        phone="05 58 90 41 29"
        adresse="66 cours du Maréchal Joffre - 40100 Dax"/>,
        <Carte_annonce entreprise="Landes Esprit Micro"
        type="Cybercafé"
        mail="contact@landesespritmicro.com"
        phone="09 53 05 99 87"
        adresse="45 Avenue Georges Clemenceau - 40100 Dax"/>,
        <Carte_annonce entreprise="Le Bascat"
        type="Camping"
        mail="infolebascat@orange.fr"
        phone="05 58 56 16 68"
        adresse="Rue de Jouandin - 40100 Dax"/>,
        <Carte_annonce entreprise="Copytel"
        type="Ateliers d'impression"
        mail="copytel.dax@copytel.fr"
        phone="05 58 90 09 00"
        adresse="23 Avenue Saint Vincent de Paul - 40100 Dax"/>
        ]
    },
    {
        content: [<Carte_annonce entreprise="L'Opticienne"
        type="Châtel-Guyon"
        mail="Lopticienne63@gmail.com"
        phone="09 78 81 00 25"
        adresse="2 avenue des Etats-Unis - 63140 Châtel-Guyon"/>,
        <Carte_annonce entreprise="Le Bellevue"
        type="Hôtel Restaurant"
        mail="accueil@hotel-bellevue-sas.fr"
        phone="04 73 86 07 62"
        adresse="07 rue alfred Punett - 63140 Châtel-Guyon"/>,
        <Carte_annonce entreprise="HippoLits"
        type="Meublés de tourisme à thème"
        mail="bienvenu@hippolits.fr"
        phone="06 27 77 53 84"
        adresse="21 rue Saint Jean Saint Hippolyte - 63140 Châtel-Guyon"/>,
        <Carte_annonce entreprise="Papillons!"
        type="Pâtisserie et confiserie artisanales"
        mail="contact@papillons-patisserie.com"
        phone="07 78 61 78 28"
        adresse="36 rue de l'Hôtel de ville - 63140 Châtel-Guyon"/>
        ]
    },
    {
        content: [<Carte_annonce entreprise="Lac & Volcan"
        type="Vêtements de Montagne"
        mail="lacetvolcan@gmail.com"
        phone="04 15 61 02 38"
        adresse="95 BD Georges Clemenceau - 63150 La Bourboule"/>,
        <Carte_annonce entreprise="Librairie Rémy"
        type="Librairie, Carterie et Papeterie"
        mail="librairie-remy@orange.fr"
        phone="04 73 81 02 22"
        adresse="273 bd Clémenceau - 63150 La Bourboule"/>,
        <Carte_annonce entreprise="Quai 28"
        type="Salon de Coiffure"
        mail="quai28coiffure@orange.fr"
        phone="04 73 65 55 70"
        adresse="28 Quai de l’Hôtel de Ville - 63150 La Bourboule"/>
        ]
    },
];

const Annonce = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(2); // Index initial de l'image centrale

    const handleImageChange = (newCentralImageIndex) => {
        setCurrentImageIndex(newCentralImageIndex);
    };

    return (
        <div className='annonce_container'>
            <div className='annonce_title'>
                <h1>Nos annonceurs</h1>
            </div>
            <div className='annonce_carousel'>
                <Carousel onImageChange={handleImageChange} />
            </div>
            <div className='annonce_cards'>
                {contents[currentImageIndex] && contents[currentImageIndex].content.map((card, index) => (
                    <div className='annonce_item' key={index}>
                        {card}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Annonce;

import React, { useState } from 'react';
import Newsletter from '@components/actualites/newsletter';
import Onglet from '@components/actualites/onglet';
import Article from '@components/actualites/article';
import ButtonStay from '@components/buttonStay';
import '@css/actualites/Elem_actu.css'

const articles = [
    {
        title: "Le Covid 19 au sein du Thermalisme",
        type: "Évènements",
        text: "Nous recevons beaucoup d’appels de curistes légitimement inquiets du développement de l’épidémie. Le Covid-19 peut affecter gravement les + de 60 ans, surtout quand leur organisme est déjà fragile. Il infecte principalement les cellules pulmonaires, mais aussi rénales ou intestinales et s’y multiplie. La contagiosité du virus est très élevée et elle est possible 2 jours avant l’apparition des symptômes."
    },
    {
        title: "Résultats du Conseil d'État",
        type: "Réunions",
        text: "Fidèle à la défense des intérêts des curistes, la FFCM avait fait son devoir en déposant un recours devant le Conseil d'État en mars 2018, pour tenter d'annuler certaines dispositions introduites par la Convention Thermale (CNT) en février 2018 (restriction du linge, reste à charge thermal, absence des usagers et restriction sur la communication des comptes-rendus de la Commission Paritaire du thermalisme, rôle insuffisant des usagers dans l'élaboration de la Charte du curiste). "
    },
    {
        title: "La FFCM a saisi le Conseil d’État",
        type: "Réunions",
        text: "Alors que le Ministère de la Santé a approuvé la nouvelle Convention Nationale Thermale (CNT), qui régira les rapports entre l'Assurance maladie et les établissements thermaux de 2018 à 2022, la FFCM a saisi le Conseil d'État pour tenter entre autres de faire annuler ou rectifier les dispositions relatives : A la possibilité de réduire drastiquement le linge de cure, ce qui pourrait induire un risque de mise en danger de la santé, et/ou d'atteinte à la dignité, et/ou d'une rupture d'égalité en fonction des niveaux de ressources; "
    },
    {
        title: "Venez rencontrer la FFCM cet été",
        type: "Évènements",
        text: "Madame, Monsieur, chers curistes et amis du thermalisme social et médicalisé. Voici la liste des réunions que la FFCM propose cet été pour vous informer et échanger avec vous. Les sujets locaux et nationaux seront traités et nous répondrons à vos questions. A l'avance, merci pour votre présence et à bientôt."
    },
    {
        title: "6e Congrès National de la FFCM",
        type: "Évènements",
        text: "Nous invitons les amis du thermalisme social et médicalisé à participer au 6° congrès des curistes et aux 18 ans de la FFCM Qui se tiendront : Les 12 et 13 septembre au Mont-Dore (63) Pour toutes précisions, merci de nous contacter : 06 83 27 22 80 - ffcm@libertysurf.fr"
    },
    {
        title: "Lettre ouverte à la Ministre de la Santé",
        type: "Réunions",
        text: "Madame la Ministre de la Santé et des Solidarités, Vous avez déclaré à plusieurs reprises depuis le début de votre mandat que vous étiez très attachée à la démocratie sanitaire. En vertu de ce concept, les droits des usagers du système de santé doivent être renforcés, connus de tous et pleinement exercés. Mais il implique aussi que la parole des usagers, comme celle de l’ensemble des acteurs du système de santé, soit pleinement entendue et respectée pour permettre une véritable co‐construction du système de santé par ses ..."
    },
    {
        title: "Réunion de France Assos Santé",
        type: "Réunions",
        text: "Chers amis du thermalisme social et médicalisé. Nous avons le plaisir de vous inviter à participer aux réunions d’information en accès libre et gratuit organisées en juin par la Fédération Française des Curistes Médicalisés (FFCM) et par l’Association des Curistes de Capvern-les-Bains (ACCB, affiliée à la FFCM)"
    },
    {
        title: "Réunion au Mont Doré",
        type: "Réunions",
        text: ""
    },
];

const Elem_actu = () => {
    const [activeTab, setActiveTab] = useState(0); // État pour l'onglet actif

    // Fonction pour changer l'onglet actif
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    // Filtrer les articles en fonction de l'onglet actif
    const filteredArticles = articles.filter((article) => {
        if (activeTab === 0) return true; // Tous
        return activeTab === 1 ? article.type === "Évènements" : article.type === "Réunions"; // Évènements ou Réunions
    });

    return (
        <>
            <div className='actu_container'>
                <div className='onglet_itself'>
                    <Onglet onTabChange={handleTabChange} /> {/* Passer la fonction au composant Onglet */}
                    <div className='actu_articles'>
                        {filteredArticles.map((article, index) => (
                            <Article 
                                key={index}
                                title={article.title}
                                type={article.type}
                                text={article.text}
                            />
                        ))}
                    </div>
                </div>
                <div className='newsletter_itself'>
                    <Newsletter />
                </div>
                <div className='button_stay'>
                    <ButtonStay texte="S'abonner à la Newsletter"/>
                </div>
            </div>
        </>
    );
};

export default Elem_actu;

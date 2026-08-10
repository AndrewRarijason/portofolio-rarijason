export interface LocalizedText {
  en: string;
  fr: string;
}

export interface ProjectImage {
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  explanation?: LocalizedText;
}

export interface ProjectData {
  slug: string;
  title: LocalizedText;
  description?: LocalizedText;
  description_gm: LocalizedText;
  stack?: string;
  imagebg?: { src: string; alt: LocalizedText };
  images: ProjectImage[];
  github?: string;
  overlayOpacity?: string;
}

export const projectsData: ProjectData[] = [
  /* 1 */
  {
    slug: "crm",
    title: {
      en: "Custom Relationship Management",
      fr: "Gestion de la relation client (CRM)",
    },
    description: {
      en: "A CRM solution tailored for small businesses to manage clients and sales efficiently.",
      fr: "Une solution CRM conçue pour les petites entreprises afin de gérer efficacement clients et ventes.",
    },
    description_gm: {
      en: "It was a CRM application developed in Java using GitHub. I mastered it, added important features, and created REST APIs that will be consumed by another application written in C#."
        + " I'll show some essential features below.",
      fr: "Il s'agit d'une application CRM développée en Java, gérée avec GitHub. Je l'ai prise en main, y ai ajouté des fonctionnalités importantes, et créé des APIs REST destinées à être consommées par une autre application écrite en C#."
        + " Je présente quelques fonctionnalités essentielles ci-dessous.",
    },
    stack: "Java, Spring Boot, Hibernate, Thymeleaf, C#, Mysql.",
    imagebg: {
      src: "/CRM/crm_analytics.png",
      alt: { en: "Custom Relationship Management Background", fr: "Arrière-plan du CRM" },
    },
    images: [
      {
        src: "/CRM/java-data_importation.png",
        alt: { en: "Data importation", fr: "Importation de données" },
        caption: { en: "Data file importation into database", fr: "Importation de fichiers dans la base de données" },
        explanation: {
          en: "Section for importing the list of clients, budgets and expenses into the Mysql database with exception handling.",
          fr: "Section permettant d'importer la liste des clients, budgets et dépenses dans la base de données Mysql, avec gestion des exceptions.",
        },
      },
      {
        src: "/CRM/java-user_list.png",
        alt: { en: "User list", fr: "Liste des utilisateurs" },
        caption: { en: "User list", fr: "Liste des utilisateurs" },
        explanation: {
          en: "With the manager role, you can view the list of users with their roles (manager, employee, customer) and CRUD operations.",
          fr: "Avec le rôle de manager, on peut consulter la liste des utilisateurs avec leurs rôles (manager, employé, client) et effectuer les opérations CRUD.",
        },
      },
      {
        src: "/CRM/java-customer_list.png",
        alt: { en: "Customer list", fr: "Liste des clients" },
        caption: { en: "Customer list", fr: "Liste des clients" },
        explanation: {
          en: "We also have a list for customer information with a CSV export function.",
          fr: "On dispose également d'une liste des informations clients avec une fonction d'export CSV.",
        },
      },
      {
        src: "/CRM/dotnet-budget_statistics.png",
        alt: { en: "Budget statistics", fr: "Statistiques budgétaires" },
        caption: { en: "Budget statistics", fr: "Statistiques budgétaires" },
        explanation: {
          en: "The C# section will be used to display the statistics. Here we have the budget statistics, showing the top 10 budget-expenditure allocation.",
          fr: "La partie C# est utilisée pour afficher les statistiques. Ici, les statistiques budgétaires montrent le top 10 de la répartition budget-dépenses.",
        },
      },
      {
        src: "/CRM/dotnet-distribution_of_expenses.png",
        alt: { en: "Distribution of expenses", fr: "Répartition des dépenses" },
        caption: { en: "Distribution of expenses", fr: "Répartition des dépenses" },
        explanation: {
          en: "We also have the breakdown of expenses, which includes the total leads and tickets.",
          fr: "On a également la répartition des dépenses, incluant le total des leads et des tickets.",
        },
      },
      {
        src: "/CRM/dotnet-importation.png",
        alt: { en: "CSV file importation in C#", fr: "Importation de fichier CSV en C#" },
        caption: { en: "CSV file importation in C#", fr: "Importation de fichier CSV en C#" },
        explanation: {
          en: "We have a customer import section where the customer data will be inserted into the database used by the Java application. If there is a duplicate customer, then the customer name will be preceded by \"copy_\".",
          fr: "Il y a une section d'importation de clients où les données seront insérées dans la base de données utilisée par l'application Java. En cas de doublon, le nom du client sera précédé de \"copy_\".",
        },
      },
      {
        src: "/CRM/dotnet-budget_list.png",
        alt: { en: "Budget list", fr: "Liste des budgets" },
        caption: { en: "Budget list", fr: "Liste des budgets" },
        explanation: {
          en: "In the statistics section, you can view lists of budgets, expenses, tickets, and leads by clicking on the graph. Here's an example of the budget list.",
          fr: "Dans la section statistiques, on peut consulter les listes de budgets, dépenses, tickets et leads en cliquant sur le graphique. Voici un exemple de liste de budgets.",
        },
      },
    ],
    github: "https://github.com/AndrewRarijason/CRM",
    overlayOpacity: "bg-black/70",
  },

  /* 2 */
  {
    slug: "internship",
    title: {
      en: "Processing tool of a foreign currency account closing",
      fr: "Outil de traitement de clôture de comptes en devises",
    },
    description: {
      en: "Tool developed during an internship to automate the closing of foreign currency accounts.",
      fr: "Outil développé lors d'un stage pour automatiser la clôture des comptes en devises étrangères.",
    },
    description_gm: {
      en: "I developed this web application from the design phase to the delivery phase during my internship at BMOI Madagascar."
        + " It's a foreign currency account closing process system. Due to a confidentiality agreement, I won't go into too much detail about the project."
        + " The goal is to generate a CSV file containing the accounting entries for each currency account (credit/debit interest, overdraft charges, VAT,...). The generated file will be used by the Core Banking system for account accounting."
        + " There is also the generation of PDF files that will be emailed to the client to inform them of the amount debited from their account.",
      fr: "J'ai développé cette application web, de la conception jusqu'à la livraison, durant mon stage à la BMOI Madagascar."
        + " C'est un système de traitement de clôture de comptes en devises étrangères. En raison d'un accord de confidentialité, je ne rentrerai pas trop dans les détails du projet."
        + " L'objectif est de générer un fichier CSV contenant les écritures comptables de chaque compte en devise (intérêts créditeurs/débiteurs, frais de découvert, TVA, ...). Le fichier généré est ensuite utilisé par le système Core Banking pour la comptabilisation des comptes."
        + " Il y a également la génération de fichiers PDF envoyés par email au client pour l'informer du montant débité de son compte.",
    },
    stack: "Java, Spring Boot, React TypeScript, Tailwind CSS, Oracle Database.",
    imagebg: {
      src: "/internship/account_closing.png",
      alt: { en: "Processing Tool Background", fr: "Arrière-plan de l'outil de traitement" },
    },
    images: [
      {
        src: "/internship/login_page.png",
        alt: { en: "Login page", fr: "Page de connexion" },
        caption: { en: "Login page", fr: "Page de connexion" },
        explanation: {
          en: "The login page is managed using tokens with JWT, which verifies the role of each identifier and the session duration.",
          fr: "La page de connexion est gérée par des tokens JWT, qui vérifient le rôle de chaque identifiant ainsi que la durée de session.",
        },
      },
      {
        src: "/internship/users.png",
        alt: { en: "Users management", fr: "Gestion des utilisateurs" },
        caption: { en: "Users management", fr: "Gestion des utilisateurs" },
        explanation: {
          en: "Here we have the management of users and their roles.",
          fr: "On a ici la gestion des utilisateurs et de leurs rôles.",
        },
      },
      {
        src: "/internship/import-section.png",
        alt: { en: "Data extraction and import section", fr: "Section d'extraction et d'import de données" },
        caption: { en: "Data extraction and import section", fr: "Section d'extraction et d'import de données" },
        explanation: {
          en: " The configuration section will be used to extract data from the production database with joins between multiple tables based on the conditions (dates) defined by the operator to ultimately have 3 tables for processing."
            + " The imports will serve as additional configurations.",
          fr: " La section de configuration permet d'extraire les données de la base de production via des jointures entre plusieurs tables, selon les conditions (dates) définies par l'opérateur, pour aboutir à 3 tables destinées au traitement."
            + " Les imports serviront de configurations complémentaires.",
        },
      },
      {
        src: "/internship/account-verification.png",
        alt: { en: "Account verification process", fr: "Processus de vérification des comptes" },
        caption: { en: "Account verification process", fr: "Processus de vérification des comptes" },
        explanation: {
          en: "Account verification is the most critical step because it involves the calculation and writing process to the system's database. For a few thousand foreign currency accounts, the old tool developed in Excel VBA took over 6 hours to process. Here, I used parallel programming via multithreading, and the process currently takes 28 minutes with 4 CPUs running simultaneously with Entity Manager."
            + " The export section will be used to export a PDF file to inform the client.",
          fr: "La vérification des comptes est l'étape la plus critique, car elle implique le calcul et l'écriture dans la base de données du système. Pour quelques milliers de comptes en devises, l'ancien outil développé en Excel VBA prenait plus de 6 heures. Ici, j'ai utilisé la programmation parallèle via le multithreading, et le traitement prend désormais 28 minutes avec 4 CPU fonctionnant simultanément avec Entity Manager."
            + " La section export permet de générer un fichier PDF pour informer le client.",
        },
      },
      {
        src: "/internship/dashboard.png",
        alt: { en: "Dashboard", fr: "Tableau de bord" },
        caption: { en: "Dashboard", fr: "Tableau de bord" },
        explanation: {
          en: "We have a dashboard page to see the treatment summary and statistics.",
          fr: "Une page de tableau de bord permet de visualiser le résumé du traitement et les statistiques.",
        },
      },
      {
        src: "/internship/stats.png",
        alt: { en: "Statistics", fr: "Statistiques" },
        caption: { en: "Statistics", fr: "Statistiques" },
        explanation: {
          en: "Here is an example of statistics showing the distribution of the 3 largest overdraft charges with their respective currencies.",
          fr: "Voici un exemple de statistiques montrant la répartition des 3 plus gros frais de découvert avec leurs devises respectives.",
        },
      },
      {
        src: "/internship/history.png",
        alt: { en: "Account closing history", fr: "Historique de clôture des comptes" },
        caption: { en: "Account closing history", fr: "Historique de clôture des comptes" },
        explanation: {
          en: "Then we have the closing history for each account for each selected period. It will display the calculation traces made by each account.",
          fr: "On a ensuite l'historique de clôture pour chaque compte, par période sélectionnée. Il affiche les traces de calcul effectuées pour chaque compte.",
        },
      },
      {
        src: "/internship/pdf-generation.png",
        alt: { en: "Generated PDF for the client", fr: "PDF généré pour le client" },
        caption: { en: "Generated PDF for the client", fr: "PDF généré pour le client" },
        explanation: {
          en: "Here is an example of a PDF that will be emailed to the client in question.",
          fr: "Voici un exemple de PDF qui sera envoyé par email au client concerné.",
        },
      },
    ],
    overlayOpacity: "bg-black/60",
  },

  /* 3 */
  {
    slug: "crypto",
    title: {
      en: "Cryptocurrency Mobile Application",
      fr: "Application mobile de cryptomonnaie",
    },
    description: {
      en: "Android 8+ application for user wallet tracking, buy/sell operations, and real-time cryptocurrency prices.",
      fr: "Application Android 8+ pour le suivi du portefeuille utilisateur, les opérations d'achat/vente et les prix des cryptomonnaies en temps réel.",
    },
    description_gm: {
      en: "Android application developed with React Native and deployed with EAS Hosting."
        + " The back-end uses Firebase for authentication and Firestore as a real-time database."
        + " This is a simulation and is linked to a web version.",
      fr: "Application Android développée avec React Native et déployée avec EAS Hosting."
        + " Le back-end utilise Firebase pour l'authentification et Firestore comme base de données en temps réel."
        + " Il s'agit d'une simulation, liée à une version web.",
    },
    stack: "React Native, TypeScript, Firestore.",
    imagebg: {
      src: "/Crypto/crypto.png",
      alt: { en: "Cryptocurrency Mobile Application Background", fr: "Arrière-plan de l'application crypto" },
    },
    images: [
      {
        src: "/Crypto/crypto_list.png",
        alt: { en: "Cryptocurrency Mobile Application", fr: "Application mobile de cryptomonnaie" },
        caption: { en: "List of cryptocurrencies on the server", fr: "Liste des cryptomonnaies sur le serveur" },
        explanation: {
          en: "List of cryptocurrencies available on the application with their defined prices and a favorites feature.",
          fr: "Liste des cryptomonnaies disponibles sur l'application avec leurs prix définis et une fonctionnalité de favoris.",
        },
      },
      {
        src: "/Crypto/crypto_variation.png",
        alt: { en: "Transactions", fr: "Transactions" },
        caption: { en: "Cryptocurrencies variation", fr: "Variation des cryptomonnaies" },
        explanation: {
          en: "Price variation every 5 seconds for each cryptocurrency.",
          fr: "Variation de prix toutes les 5 secondes pour chaque cryptomonnaie.",
        },
      },
      {
        src: "/Crypto/deposit-withdrawal.png",
        alt: { en: "deposit-withdrawal", fr: "dépôt-retrait" },
        caption: { en: "Deposit/withdrawal", fr: "Dépôt / retrait" },
        explanation: {
          en: "Deposit and withdrawal screen to simulate funding and withdrawing from the wallet.",
          fr: "Écran de dépôt et de retrait pour simuler l'approvisionnement et le retrait du portefeuille.",
        },
      },
      {
        src: "/Crypto/personal-wallet.png",
        alt: { en: "Personal-wallet", fr: "Portefeuille personnel" },
        caption: { en: "Personal wallet", fr: "Portefeuille personnel" },
        explanation: {
          en: "Wallet to view balances and transaction histories.",
          fr: "Portefeuille permettant de consulter les soldes et l'historique des transactions.",
        },
      },
      {
        src: "/Crypto/profile-update.png",
        alt: { en: "Profile update", fr: "Mise à jour du profil" },
        caption: { en: "Profile update", fr: "Mise à jour du profil" },
        explanation: {
          en: "Profile update with photo upload functionality.",
          fr: "Mise à jour du profil avec fonctionnalité de téléversement de photo.",
        },
      },
    ],
    github: "https://github.com/Yoannah05/Cryptomonnaie-mobile/tree/Andrew2.0",
    overlayOpacity: "bg-black/60",
  },

  /* 4 */
  {
    slug: "framework",
    title: {
      en: "Custom Java Framework",
      fr: "Framework Java personnalisé",
    },
    description: {
      en: "Spring-inspired framework for facilitating web development in Java using the FrontController pattern.",
      fr: "Framework inspiré de Spring, facilitant le développement web en Java via le pattern FrontController.",
    },
    description_gm: {
      en: "The project implements a web framework based on the MVC (Model-View-Controller) pattern in Java, allowing for a clear separation of business logic, view management, and HTTP request control.",
      fr: "Le projet implémente un framework web basé sur le pattern MVC (Modèle-Vue-Contrôleur) en Java, permettant une séparation claire entre la logique métier, la gestion des vues et le contrôle des requêtes HTTP.",
    },
    stack: "Java, Servlet.",
    imagebg: {
      src: "/Framework/framework.png",
      alt: { en: "Custom Java Framework Background", fr: "Arrière-plan du framework Java" },
    },
    images: [
      {
        src: "/Framework/FrontController-ProcessRequest.png",
        alt: { en: "REST support and data export", fr: "Support REST et export de données" },
        caption: { en: "REST support and data export", fr: "Support REST et export de données" },
        explanation: {
          en: "Support for REST APIs with automatic serialization to JSON, as well as data export in CSV and PDF formats via dedicated Export objects, making the framework versatile for different application needs.",
          fr: "Support des APIs REST avec sérialisation automatique en JSON, ainsi que l'export de données en CSV et PDF via des objets Export dédiés, rendant le framework polyvalent selon les besoins de l'application.",
        },
      },
      {
        src: "/Framework/FrontController-ValidationException.png",
        alt: { en: "Centralized validation and error management", fr: "Validation et gestion d'erreurs centralisées" },
        caption: { en: "Centralized validation and error management", fr: "Validation et gestion d'erreurs centralisées" },
        explanation: {
          en: "Robust system for validating user input with centralized exception handling (ValidationException, ResourceNotFound), allowing clear error messages to be displayed and the user to be redirected in case of a problem.",
          fr: "Système robuste de validation des entrées utilisateur avec gestion centralisée des exceptions (ValidationException, ResourceNotFound), permettant d'afficher des messages d'erreur clairs et de rediriger l'utilisateur en cas de problème.",
        },
      },
      {
        src: "/Framework/Utils-GetArgs.png",
        alt: { en: "Automatic parameter injection", fr: "Injection automatique des paramètres" },
        caption: { en: "Automatic parameter injections", fr: "Injection automatique des paramètres" },
        explanation: {
          en: "HTTP request parameters are automatically injected into controller methods, including handling of complex objects and uploaded files.",
          fr: "Les paramètres des requêtes HTTP sont automatiquement injectés dans les méthodes du contrôleur, y compris la gestion d'objets complexes et de fichiers téléversés.",
        },
      },
      {
        src: "/Framework/FrontController-init.png",
        alt: { en: "Automatic controller discovery", fr: "Découverte automatique des contrôleurs" },
        caption: { en: "Automatic controller discovery", fr: "Découverte automatique des contrôleurs" },
        explanation: {
          en: "The framework dynamically scans the specified package to detect all classes annotated with @Controller, making it easy to add new controllers without manual configuration.",
          fr: "Le framework scanne dynamiquement le package spécifié pour détecter toutes les classes annotées @Controller, facilitant l'ajout de nouveaux contrôleurs sans configuration manuelle.",
        },
      },
      {
        src: "/Framework/FrontController-PR-response.png",
        alt: { en: "Unified Response Management", fr: "Gestion unifiée des réponses" },
        caption: { en: "Unified Response Management", fr: "Gestion unifiée des réponses" },
        explanation: {
          en: "The FrontController handles different types of responses: JSP views, redirects, file uploads (CSV/PDF), or REST API (JSON), depending on the return type of the controller method.",
          fr: "Le FrontController gère différents types de réponses : vues JSP, redirections, téléversement de fichiers (CSV/PDF), ou API REST (JSON), selon le type de retour de la méthode du contrôleur.",
        },
      },
    ],
    github: "https://github.com/AndrewRarijason/Projet_framework",
    overlayOpacity: "bg-black/50",
  },

  /* 5 */
  {
    slug: "parcflow",
    title: {
      en: "Parcflow - Vehicle fleet management system",
      fr: "Parcflow - Système de gestion de flotte de véhicules",
    },
    description: {
      en: "Smart monitoring and management of vehicles and their maintenance.",
      fr: "Suivi et gestion intelligente des véhicules et de leur maintenance.",
    },
    description_gm: {
      en: "A solution for managing your vehicle fleet, featuring maintenance tracking, automated alerts, and mileage management. Below, I'll outline some key features.",
      fr: "Une solution pour gérer votre flotte de véhicules, avec suivi de la maintenance, alertes automatisées et gestion du kilométrage. Je présente ci-dessous quelques fonctionnalités clés.",
    },
    stack: "Node.js, Express.js, Prisma, Next TypeScript, Tailwind CSS, PostgreSQL",
    imagebg: {
      src: "/parcflow/parcflow.jpg",
      alt: { en: "Parcflow Website Background", fr: "Arrière-plan du site Parcflow" },
    },
    images: [
      {
        src: "/parcflow/kpi-global.png",
        alt: { en: "Parcflow - KPI global", fr: "Parcflow - KPI global" },
        caption: { en: "KPI Global", fr: "KPI global" },
        explanation: {
          en: "There's the vehicle fleet and the maintenance dashboard.",
          fr: "On y trouve la flotte de véhicules ainsi que le tableau de bord de maintenance.",
        },
      },
      {
        src: "/parcflow/courbe-duree-intervention.png",
        alt: { en: "Parcflow - Duration maintenance tasks", fr: "Parcflow - Durée des tâches de maintenance" },
        caption: { en: "Duration maintenance tasks", fr: "Durée des tâches de maintenance" },
        explanation: {
          en: "Duration curve for the longest maintenance tasks so we can determine which step takes the longest.",
          fr: "Courbe de durée des tâches de maintenance les plus longues, permettant d'identifier l'étape la plus chronophage.",
        },
      },
      {
        src: "/parcflow/suivi-demandes.png",
        alt: { en: "Parcflow - Tracking vehicle in maintenance", fr: "Parcflow - Suivi d'un véhicule en maintenance" },
        caption: { en: "Vehicle tracking during maintenance", fr: "Suivi du véhicule pendant la maintenance" },
        explanation: {
          en: "Monitoring your vehicle during maintenance work to track progress step by step.",
          fr: "Suivi du véhicule pendant les travaux de maintenance, étape par étape.",
        },
      },
      {
        src: "/parcflow/my-vehicle.png",
        alt: { en: "Parcflow - My Vehicle", fr: "Parcflow - Mon véhicule" },
        caption: { en: "My Vehicle", fr: "Mon véhicule" },
        explanation: {
          en: "View your vehicle's information and maintenance history. There could also be an alert that pops up for preventive maintenance, indicating the approximate mileage remaining before a part that has been replaced will be completely worn out.",
          fr: "Consultez les informations de votre véhicule et son historique de maintenance. Une alerte de maintenance préventive peut également apparaître, indiquant le kilométrage restant approximatif avant l'usure complète d'une pièce remplacée.",
        },
      },
      {
        src: "/parcflow/controle-vehicule.png",
        alt: { en: "Parcflow - Vehicle inspection", fr: "Parcflow - Inspection du véhicule" },
        caption: { en: "Vehicle inspection", fr: "Inspection du véhicule" },
        explanation: {
          en: "Inspection form used to thoroughly check vehicle components that require attention. At the end of the process, a PDF file will be generated.",
          fr: "Formulaire d'inspection permettant de vérifier en détail les composants du véhicule nécessitant une attention particulière. À la fin du processus, un fichier PDF est généré.",
        },
      },
      {
        src: "/parcflow/fiche-controle.png",
        alt: { en: "Parcflow - Vehicle checklist", fr: "Parcflow - Fiche de contrôle du véhicule" },
        caption: { en: "Vehicle checklist", fr: "Fiche de contrôle du véhicule" },
        explanation: {
          en: "Checklist for Vehicle Inspection and Fuel Level. At the end of the process, a PDF file will be generated.",
          fr: "Fiche de contrôle du véhicule et du niveau de carburant. À la fin du processus, un fichier PDF est généré.",
        },
      },
      {
        src: "/parcflow/historique-ravitaillement.png",
        alt: { en: "Parcflow - Fuel history", fr: "Parcflow - Historique de ravitaillement" },
        caption: { en: "Fuel history", fr: "Historique de ravitaillement" },
        explanation: {
          en: "History of fuel refills for one vehicle. For security reasons, all changes made by a user of the app are tracked.",
          fr: "Historique des ravitaillements en carburant pour un véhicule. Pour des raisons de sécurité, toutes les modifications effectuées par un utilisateur de l'application sont tracées.",
        },
      },
      {
        src: "/parcflow/tdb-ravitaillement.png",
        alt: { en: "Parcflow - Dashboard refueling", fr: "Parcflow - Tableau de bord ravitaillement" },
        caption: { en: "Dashboard refueling", fr: "Tableau de bord ravitaillement" },
        explanation: {
          en: "A dashboard dedicated to fuel purchases that helps identify the largest expenses. A currency converter from the ariary to the euro has been added.",
          fr: "Un tableau de bord dédié aux achats de carburant, permettant d'identifier les plus grosses dépenses. Un convertisseur de devise ariary-euro a été ajouté.",
        },
      },
      {
        src: "/parcflow/mail-kilometrage.png",
        alt: { en: "Parcflow - Email alert", fr: "Parcflow - Alerte par email" },
        caption: { en: "Email alert", fr: "Alerte par email" },
        explanation: {
          en: "The app sends an email to the relevant user and manager at each stage of the process, for documents due, and other alerts.",
          fr: "L'application envoie un email à l'utilisateur et au manager concernés à chaque étape du processus, pour les documents à échéance, et autres alertes.",
        },
      },
    ],
    overlayOpacity: "bg-black/60",
  },

  /* 6 */
  {
    slug: "manafides",
    title: {
      en: "Website development",
      fr: "Développement de site web",
    },
    description: {
      en: "Showcase website presenting services, products and articles.",
      fr: "Site vitrine présentant services, produits et articles.",
    },
    description_gm: {
      en: "Website developed using WordPress. It includes a product and services page, a blog section, and a contact form.",
      fr: "Site web développé avec WordPress. Il comprend une page produits et services, une section blog, et un formulaire de contact.",
    },
    stack: "WordPress, PHP, Mysql.",
    imagebg: {
      src: "/manafides/website.png",
      alt: { en: "Manafides Website Background", fr: "Arrière-plan du site Manafides" },
    },
    images: [
      {
        src: "/manafides/website-mobile.png",
        alt: { en: "Mobile version", fr: "Version mobile" },
        caption: { en: "Mobile version", fr: "Version mobile" },
        explanation: {
          en: "This is the mobile version of the site where you can find the homepage.",
          fr: "Voici la version mobile du site, avec la page d'accueil.",
        },
      },
      {
        src: "/manafides/website-bilingue.png",
        alt: { en: "Bilingual website", fr: "Site bilingue" },
        caption: { en: "Bilingual website", fr: "Site bilingue" },
        explanation: {
          en: "The website is bilingual (French and English)",
          fr: "Le site est bilingue (français et anglais).",
        },
      },
      {
        src: "/manafides/website-hosting.png",
        alt: { en: "Website hosting", fr: "Hébergement du site" },
        caption: { en: "Website hosting", fr: "Hébergement du site" },
        explanation: {
          en: "Website hosting on a server. Installation of the SSL certificate, configuration of database, creation and configuration of the website email addresses.",
          fr: "Hébergement du site sur un serveur. Installation du certificat SSL, configuration de la base de données, création et configuration des adresses email du site.",
        },
      },
    ],
    overlayOpacity: "bg-black/60",
  },
];
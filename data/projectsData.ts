export interface ProjectData {
  slug: string;
  title: string;
  description?: string;
  description_gm: string;
  stack?: string;
  imagebg?: { src: string; alt: string };
  images: { src: string; alt: string; caption?: string; explanation?: string }[];
  github?: string;
  overlayOpacity?: string;
}

export const projectsData: ProjectData[] = [
  /* 1 */
  {
    slug: "crm",
    title: "Custom Relationship Management",
    description: "A CRM solution tailored for small businesses to manage clients and sales efficiently.",
    description_gm: "It was a CRM application developed in Java using GitHub. I mastered it, added important features, and created REST APIs that will be consumed by another application written in C#."
      + " I'll show some essential features below.",
    stack: "Java, Spring Boot, Hibernate, Thymeleaf, C#, Mysql.",
    imagebg: { src: "/Crm/crm_analytics.png", alt: "Custom Relationship Management Background" },
    images: [
      {
        src: "/Crm/java-data_importation.png",
        alt: "Data importation",
        caption: "Data file importation into database",
        explanation: "Section for importing the list of clients, budgets and expenses into the Mysql database with exception handling."
      },
      {
        src: "/Crm/java-user_list.png",
        alt: "User list",
        caption: "User list",
        explanation: "With the manager role, you can view the list of users with their roles (manager, employee, customer) and CRUD operations."
      },
      {
        src: "/Crm/java-customer_list.png",
        alt: "Customer list",
        caption: "Customer list",
        explanation: "We also have a list for customer information with a CSV export function."
      },
      {
        src: "/Crm/dotnet-budget_statistics.png",
        alt: "Budget statistics",
        caption: "Budget statistics",
        explanation: "The C# section will be used to display the statistics. Here we have the budget statistics, showing the top 10 budget-expenditure allocation."
      }, {
        src: "/Crm/dotnet-distribution_of_expenses.png",
        alt: "Distribution of expenses",
        caption: "Distribution of expenses",
        explanation: "We also have the breakdown of expenses, which includes the total leads and tickets."
      },
      {
        src: "/Crm/dotnet-importation.png",
        alt: "CSV file importation in C#",
        caption: "CSV file importation in C#",
        explanation: "We have a customer import section where the customer data will be inserted into the database used by the Java application. If there is a duplicate customer, then the customer name will be preceded by \"copy_\"."
      },
      {
        src: "/Crm/dotnet-budget_list.png",
        alt: "Budget list",
        caption: "Budget list",
        explanation: "In the statistics section, you can view lists of budgets, expenses, tickets, and leads by clicking on the graph. Here's an example of the budget list."
      }
    ],
    github: "https://github.com/AndrewRarijason/CRM",
    overlayOpacity: "bg-black/70"
  },
  /* 2 */
  {
    slug: "internship",
    title: "Processing tool of a foreign currency account closing",
    description: "Tool developed during an internship to automate the closing of foreign currency accounts.",
    description_gm: "I developed this web application from the design phase to the delivery phase during my internship at BMOI Madagascar."
      + " It's a foreign currency account closing process system. Due to a confidentiality agreement, I won't go into too much detail about the project."
      + " The goal is to generate a CSV file containing the accounting entries for each currency account (credit/debit interest, overdraft charges, VAT,...). The generated file will be used by the Core Banking system for account accounting."

      + " There is also the generation of PDF files that will be emailed to the client to inform them of the amount debited from their account.",
    stack: "Java, Spring Boot, React TypeScript, Tailwind CSS, Oracle Database.",
    imagebg: { src: "/internship/account_closing.png", alt: "Processing Tool Background" },
    images: [
      {
        src: "/internship/login_page.png",
        alt: "Login page",
        caption: "Login page",
        explanation: "The login page is managed using tokens with JWT, which verifies the role of each identifier and the session duration."
      },
      {
        src: "/internship/users.png",
        alt: "Users management",
        caption: "Users management",
        explanation: "Here we have the management of users and their roles."
      },
      {
        src: "/internship/import-section.png",
        alt: "Data extraction and import section",
        caption: "Data extraction and import section",
        explanation: " The configuration section will be used to extract data from the production database with joins between multiple tables based on the conditions (dates) defined by the operator to ultimately have 3 tables for processing."
          + " The imports will serve as additional configurations."
      },
      {
        src: "/internship/account-verification.png",
        alt: "Account verification process",
        caption: "Account verification process",
        explanation: "Account verification is the most critical step because it involves the calculation and writing process to the system's database. For a few thousand foreign currency accounts, the old tool developed in Excel VBA took over 6 hours to process. Here, I used parallel programming via multithreading, and the process currently takes 28 minutes with 4 CPUs running simultaneously with Entity Manager."
          + " The export section will be used to export a PDF file to inform the client."
      },
      {
        src: "/internship/dashboard.png",
        alt: "Dashboard",
        caption: "Dashboard",
        explanation: "We have a dashboard page to see the treatment summary and statistics."
      },
      {
        src: "/internship/stats.png",
        alt: "Statistics",
        caption: "Statistics",
        explanation: "Here is an example of statistics showing the distribution of the 3 largest overdraft charges with their respective currencies."
      },
      {
        src: "/internship/history.png",
        alt: "Account closing history",
        caption: "Account closing history",
        explanation: "Then we have the closing history for each account for each selected period. It will display the calculation traces made by each account."
      },
      {
        src: "/internship/pdf-generation.png",
        alt: "Generated PDF for the client",
        caption: "Generated PDF for the client",
        explanation: "Here is an example of a PDF that will be emailed to the client in question."
      }
    ],
    overlayOpacity: "bg-black/60"
  },

  /* 3 */
  {
    slug: "crypto",
    title: "Cryptocurrency Mobile Application",
    description: "Android 8+ application for user wallet tracking, buy/sell operations, and real-time cryptocurrency prices.",
    description_gm: "Android application developed with React Native and deployed with EAS Hosting."
      + " The back-end uses Firebase for authentication and Firestore as a real-time database."
      + " This is a simulation and is linked to a web version.",
    stack: "React Native, TypeScript, Firestore.",
    imagebg: { src: "/Crypto/crypto.png", alt: "Cryptocurrency Mobile Application Background" },
    images: [
      {
        src: "/Crypto/crypto_list.png",
        alt: "Cryptocurrency Mobile Application",
        caption: "List of cryptocurrencies on the server",
        explanation: "List of cryptocurrencies available on the application with their defined prices and a favorites feature."
      },
      {
        src: "/Crypto/crypto_variation.png",
        alt: "Transactions",
        caption: "Cryptocurrencies variation",
        explanation: "Price variation every 5 seconds for each cryptocurrency."
      },
      {
        src: "/Crypto/deposit-withdrawal.png",
        alt: "deposit-withdrawal",
        caption: "Deposit/withdrawal",
        explanation: "Deposit and withdrawal feature in local currency (MGA) with notification on the web version of the application."
      },
      {
        src: "/Crypto/personal-wallet.png",
        alt: "Personal-wallet",
        caption: "Personal wallet",
        explanation: "Wallet to view balances and transaction histories."
      },
      {
        src: "/Crypto/profile-update.png",
        alt: "Profile update",
        caption: "Profile update",
        explanation: "Profile update with photo upload functionality."
      }
    ],
    github: "https://github.com/Yoannah05/Cryptomonnaie-mobile/tree/Andrew2.0",
    overlayOpacity: "bg-black/60"
  },

  /* 4 */
  {
    slug: "framework",
    title: "Custom Java Framework",
    description: "Spring-inspired framework for facilitating web development in Java using the FrontController pattern.",
    description_gm: "The project implements a web framework based on the MVC (Model-View-Controller) pattern in Java, allowing for a clear separation of business logic, view management, and HTTP request control.",
    stack: "Java, Servlet.",
    imagebg: { src: "/Framework/framework.png", alt: "Custom Java Framework Background" },
    images: [
      {
        src: "/Framework/FrontController-ProcessRequest.png",
        alt: "REST support and data export",
        caption: "REST support and data export",
        explanation: "Support for REST APIs with automatic serialization to JSON, as well as data export in CSV and PDF formats via dedicated Export objects, making the framework versatile for different application needs."
      },
      {
        src: "/Framework/FrontController-ValidationException.png",
        alt: "Centralized validation and error management",
        caption: "Centralized validation and error management",
        explanation: "Robust system for validating user input with centralized exception handling (ValidationException, ResourceNotFound), allowing clear error messages to be displayed and the user to be redirected in case of a problem."
      },
      {
        src: "/Framework/Utils-GetArgs.png",
        alt: "Automatic parameter injection",
        caption: "Automatic parameter injections",
        explanation: "HTTP request parameters are automatically injected into controller methods, including handling of complex objects and uploaded files."
      },
      {
        src: "/Framework/FrontController-init.png",
        alt: "Automatic controller discovery",
        caption: "Automatic controller discovery",
        explanation: "The framework dynamically scans the specified package to detect all classes annotated with @Controller, making it easy to add new controllers without manual configuration."
      },
      {
        src: "/Framework/FrontController-PR-response.png",
        alt: "Unified Response Management",
        caption: "Unified Response Management",
        explanation: "The FrontController handles different types of responses: JSP views, redirects, file uploads (CSV/PDF), or REST API (JSON), depending on the return type of the controller method."
      }
    ],
    github: "https://github.com/AndrewRarijason/Projet_framework",
    overlayOpacity: "bg-black/50"
  },


  /* 5 */
  {
    slug: "manafides",
    title: "Website development",
    description: "Showcase website presenting services, products and articles.",
    description_gm: "Website developed using WordPress. It includes a product and services page, a blog section, and a contact form.",
    stack: "WordPress, PHP, Mysql.",
    imagebg: { src: "/manafides/website.png", alt: "Manafides Website Background" },
    images: [
      {
        src: "/manafides/website-mobile.png",
        alt: "Mobile version",
        caption: "Mobile version",
        explanation: "This is the mobile version of the site where you can find the homepage."
      },
      {
        src: "/manafides/website-bilingue.png",
        alt: "Bilingual website",
        caption: "Bilingual website",
        explanation: "The website is bilingual (French and English)"
      },
      {
        src: "/manafides/website-hosting.png",
        alt: "Website hosting",
        caption: "Website hosting",
        explanation: "Website hosting on a server. Installation of the SSL certificate, configuration of database, creation and configuration of the website email addresses."
      }
    ],
    overlayOpacity: "bg-black/60"
  }
];
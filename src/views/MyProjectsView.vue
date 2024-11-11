<template>
    <div class="projects-container">
        <h1 class="projects-title">My projects</h1>

        <p class="projects-description">
            Här kommer en lista över olika projekt som jag har arbetat med och slutfört de senaste månaderna. Genom
            dessa
            projekt har jag utvecklat min kompetens och fördjupat mina kunskaper inom olika tekniker och ramverk. Varje
            projekt har bidragit till min förståelse och har stärkt min erfarenhet som utvecklare.
        </p>

        <h2 class="projects-list-title">List</h2>

        <ul class="projects-list">
            <li v-for="project in projects" :key="project.name">
                <router-link :to="project.path" class="project-link">{{ project.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { name: "FizzBuzz", path: "/fizzBuzzView" },
                { name: "MVC Portfolio", path: "/mvcPortfolioView" },
                { name: "Träningsdagbok", path: "/träningsdagbokView" },
                { name: "TIcTacToe", path: "/ticTacToeView" },
                { name: "Företagssida", path: "/företagssidaView" },
                { name: "Receptsida", path: "/receptsidaView" },
                { name: "Bloggplattform med SQL", path: "/bloggplattformView" },
                { name: "Träningsdagbok med SQL", path: "/träningsdagbokSQLView" },
                { name: "Bloggplattform API", path: "/bloggplattformAPIView" },
                { name: "CV / Portfolio med Handlebars", path: "/cVPortfolioHbsView" },
                { name: "Receptlista med Handlebars", path: "/receptlistaHbsView" },
                { name: "Restaurangsida med Vue JS", path: "/restaurangsidaVueJSView" },
                { name: "Blogg med Vue JS", path: "/bloggVueJSView" },
                { name: "Todo-lista med Vue JS", path: "/todoListaVueJSView" },
                { name: "Webbutik med Vue JS", path: "/webbutikVueJSView" },
                { name: "CRUD för Loans", path: "/cRUDLoansView" },
                { name: "CRUD för Blogg", path: "/cRUDBloggView" },
                { name: "Frontend för Blogg", path: "/frontendBloggView" },
                { name: "Todo-lista frontend & backend", path: "/todoListaFrontendBackendView" }
            ]
        };
    }
};
</script>

<style>
.code-screenshots {
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    background-color: #6A7BCE;
    padding: 10px 15px;
    margin: 20px 0;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 1);
}

.small-image {
    width: 395px;
    height: auto;
    transition: transform 0.3s ease;
    margin: 10px;
    cursor: pointer;
}

.small-image:hover {
    transform: scale(2.8);
}

.projects-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.projects-title {
    font-family: 'Arial', sans-serif;
    font-size: 2rem;
    color: #454444;
    margin-bottom: 15px;
}

.projects-description {
    font-family: 'Georgia', serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 20px;
}

.projects-list-title {
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    color: #444;
    margin-bottom: 10px;
}

.projects-list {
    list-style-type: none;
    padding: 0;
}

.projects-list p {
    margin-bottom: 10px;
}

.project-link {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s;
}

.project-link:hover {
    color: #0056b3;
}

.projects-list li { margin-bottom: 10px; }
</style>
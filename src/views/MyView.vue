<template>
  <h1>Välkommen till min Självbeskrivning</h1>
  <div class="profile-container">
      <img src="../assets/makis.jpg" alt="Makis picture" class="profile-image" />
      <div class="profile-text">
          <p>Hej! Jag är Chrysostomos Chrysostomou, en passionerad utvecklare med fokus på att skapa användarvänliga
              och effektiva webbapplikationer. Jag har erfarenhet inom både frontend och backend och älskar att arbeta
              med databaser för att optimera användarupplevelsen.</p>
          <p>Jag har fördjupad kunskap inom C#, HTML, JavaScript, .NET Core WebAPI/MVC, Entity Framework, Node.js,
              Vue.js, SQL-databaser och MongoDB.</p>
          <p>Jag ser fram emot att bidra med mina kunskaper och att arbeta i en kreativ miljö där innovation
              uppmuntras.</p>
      </div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Georgia, Roboto, Merriweather;
}

.profile-image {
  width: 200px;
  margin-right: 15px;
  border-radius: 8px;
}

.profile-text p {
  margin: 0;
  line-height: 2;
}
</style>
<template>
  <section id="about">
    <h1>About Me</h1>
    <p>
      Hello! I'm Kevin Kipkemboi, a passionate Software engineer with a strong
      interest in software engineering and project management.
    </p>
    <p>
      I have 2 years of experience in Software develppment, specializing in
      frontend development.
    </p>
    <p>
      Here are some of my key skills and qualifications:
    </p>
    <ul>
      <li>Vanilla Javascript</li>
      <li>REST APIs</li>
      <li>React Js</li>
    </ul>
        <!-- Table Example -->
    <h2>Education</h2>
    <table id="education">
      <tr>
        <th>Degree</th>
        <th>Institution</th>
        <th>Year</th>
      </tr>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.degree }}</td>
          <td>{{ project.institution }}</td>
          <td>
            {{ project.year }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      projects: [
        {
          id: 1,
          degree: "Diploma in IT",
          institution: "Deakin University",
          year: 2023
        },
        {
          id: 2,
          degree: "Certificate in IT",
          institution: "University of Nairobi",
          year: 2021
        },
        {
          id: 2,
          degree: "O-levels",
          institution: "Mufasa High school",
          year: 2017
        },
      ]
    };
  }
};
</script>

<style scoped>
#about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

li {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>

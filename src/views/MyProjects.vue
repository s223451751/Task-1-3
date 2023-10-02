<template>
  <section id="projects">
    <h1>My Projects</h1>
    <p> I have been able to develop a number of projects. Both at a professional level and others for purposes of
    enhancing my skills is frontend development using various frameworks.
    <br>
    However, I have majored in consuming APIs using Vue JS
    </p>
    <table id="education">
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Github Link</th>
      </tr>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.title }}</td>
          <td>{{ project.description }}</td>
          <td>
            <a :href="project.githubLink" target="_blank">GitHub Repository</a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "MyProjects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "Description of Project 1.",
          githubLink: "https://github.com/your-username/project1"
        },
        {
          id: 2,
          title: "Project 2",
          description: "Description of Project 2.",
          githubLink: "https://github.com/your-username/project2"
        },
        {
          id: 2,
          title: "Project 3",
          description: "Description of Project 3.",
          githubLink: "https://github.com/your-username/project2"
        },
      ]
    };
  }
};
</script>

<style scoped>
#projects {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.project {
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: #0074d9;
}
</style>

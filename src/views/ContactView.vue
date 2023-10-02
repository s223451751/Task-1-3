<template>
  <section id="contact">
    <h1>Contact Me</h1>
    <p>
      Feel free to get in touch with me through the following contact options:
    </p>
    <ul>
      <li>
        Email: <a href="mailto:your.email@example.com">kevin@example.com</a>
      </li>
      <li>
        LinkedIn: <a href="https://www.linkedin.com/in/your-profile">My LinkedIn Profile</a>
      </li>
      <li>
        GitHub: <a href="https://github.com/your-username">My GitHub Profile</a>
      </li>
    </ul>

    <h2>Contact Me</h2>
    <form>
      <div class="mb-2">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div class="mb-2">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="mb-2">
        <label for="message">Message:</label>
        <textarea type="message" id="message" v-model="message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactView",
  // Add any component-specific logic here if needed
};
</script>

<style scoped>
#contact {
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

a {
  text-decoration: none;
  color: #0074d9;
}
</style>

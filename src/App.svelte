<script>
  export let name;
</script>

<main>
  <form class="signup">
    <label for="email">Email</label>
    <input type="email" name="email" />
    <label for="password">Password:</label>
    <input type="password" name="password" />
    <button>Signup</button>
  </form>
  <h2>Login</h2>
  <form class="login">
    <label for="email">Email</label>
    <input type="email" name="email" />
    <label for="password" name="password">Password</label>
    <input type="password" name="password" />
    <button>Login</button>
  </form>
  <button class="logout">Logout</button>
</main>

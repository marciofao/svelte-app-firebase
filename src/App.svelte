<script>
  export let name;
  export let signUpMessage;
  export let loginMessage;
</script>

<main>
  <form class="signup">
    <label for="email">Email</label>
    <input type="email" name="email" />
    <label for="password">Password:</label>
    <input type="password" name="password" />
    <button>Signup</button>
    <div class="message">
      {#if signUpMessage}
        {signUpMessage}
      {/if}
    </div>
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

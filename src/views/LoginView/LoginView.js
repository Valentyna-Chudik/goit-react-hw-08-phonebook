export default function LoginView() {
  return (
    <div>
      <h1>Sign in Page</h1>
      <form autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

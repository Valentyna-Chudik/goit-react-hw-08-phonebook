export default function RegisterView() {
  return (
    <div>
      <h1>Sign up Page</h1>
      <form autoComplete="off">
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

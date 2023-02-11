
export default function Uncontrolled() {

  function handleSubmit(e){
    e.preventDefault();
    console.log('Username', e.target.username.value)
    console.log('Password', e.target.password.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username:
        <input
          name="username"
          type="text"
          />
        <br/>
        Password:
        <input
          name="password"
          type="password"
          />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
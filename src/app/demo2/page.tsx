export default function Page() {

  async function handleSubmit(formData:FormData) {
    "use server"

    console.log(formData.get("name"))
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
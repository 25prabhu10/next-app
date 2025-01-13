export default async function Home() {
  // add 5 sec delay
  await new Promise((resolve) => setTimeout(resolve, 5000))
  console.log("Hello, Next in line")
  return <h1>Hello, Next in line</h1>
}

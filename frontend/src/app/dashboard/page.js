import Navbar from "../(Shared Components)/Navbar"
import Gauge from "./Gauge"
import Heading from "./Heading"
import NamazSelect from "./(NamazSelection)/NamazSelect"

function page() {
  return (
    <div>
        <Navbar />
        <Heading />
        <Gauge />
        <NamazSelect />
    </div>
  )
}

export default page
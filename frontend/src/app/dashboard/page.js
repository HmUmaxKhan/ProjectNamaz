import Navbar from "../(Shared Components)/Navbar"
import Gauge from "./Gauge"
import Heading from "./Heading"
import NamazSelect from "./(NamazSelection)/NamazSelect"
import QuranSelect from "./(QuranSection)/QuranSelect"

function page() {
  return (
    <div>
        <Navbar />
        <Heading />
        <Gauge />
        <NamazSelect />
        <QuranSelect />
    </div>
  )
}

export default page
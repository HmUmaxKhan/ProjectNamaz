
import Gaugemeter from "./(GaugeMeter)/Gaugemeter"

function Gauge() {
  return (
    <div style={{height:"30%" , marginTop:'70px', background:'#212529'}}>
    <h2 className="m-2 text-center pt-2">Statistics of your virtues</h2>
    <div className="d-flex justify-content-evenly container ">
    <Gaugemeter virtue={'Namaz'} percent={70} instruc={"It is based on Prayers which you have prayed in Masjid"}/>
    <Gaugemeter virtue={'Quran'} percent={50} instruc={"It is based on Quran read with tafseer, doesn't matter how much"}/>
    <Gaugemeter virtue={'Control'} percent={20} instruc={"It is based on how many days you have controlled porn addiction"}/>
    </div>
    </div>
  )
}

export default Gauge
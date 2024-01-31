"use client"
import ReadingQuran from './ReadingQuran'
import CurrentDate from '@/app/(Shared Components)/CurrentDate'

const QuranSelect = () => {
  return (
    <div style={{height:"30%" , marginTop:'120px', background:'#212529'}}>
    <h2 className="m-2 text-center pt-2">Reading Quran</h2>
        <CurrentDate />
        <ReadingQuran />
    </div>
  )
}

export default QuranSelect

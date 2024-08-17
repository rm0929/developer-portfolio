import { BallCanvas } from "./canvas" 
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants" //technologies that i have mentioned can be found here

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (     // mapping technologies from technologies in constants
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/> {/* all the technology icons will be shown here by BallCanvas */}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");
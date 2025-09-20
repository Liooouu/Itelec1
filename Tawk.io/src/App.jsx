import Silk from "../Background/Silk"
import ChromaGrid from "../Components/ChromaGrid";
import TrueFocus from "../Components/TrueFocus";

export const App = () => {
  return(
    <div className="relative w-full h-screen">
      <Silk/>

      <div className="absolute inset-0 flex flex-col items-center text-white">
        <TrueFocus/>
         <h1 className="text-2xl font-bold">Welcome suit yourselves</h1>
         <p>All time silk made clothing at your best</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center mt-50">
      <ChromaGrid/>
      </div>
    </div>
    
    
  )
}

export default App;
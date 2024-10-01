import { ChangeEvent, useRef } from "react";
import { useBoggle } from '../../context/BoggleContext';

export function LoadLibrary() {

  const { updateValidWords, validWords } = useBoggle();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseTextString = (jsonInput: string) => {
      //Expects json {"words":["aa","bad", etc]}
      const libraryJson = JSON.parse(jsonInput)
      const words = libraryJson["words"] as string[]
      updateValidWords(words)
  }
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  
  const loadWordLibrary = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const result = reader.result as string;
        parseTextString(result)
      }, { once: true })
      // TODO set a better size limit, check for valid file types
      if (file.size < 100000) {
        reader.readAsText(file);//Annoying that this jumps back, make inline?
        event.target.files = null
      } else {
        console.error("File is to large")
      }
      //Reset the input
      if (event.target) {
        event.target.value = "";
        event.target.type = "text";
        event.target.type = "file";
      }
    }
  };


  return (
    <div className={"container"}>
      <div>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={loadWordLibrary}          
        />
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleButtonClick}>
            Load Boggle Library: {validWords.length}
        </button>
      </div>
    </div>
  );
}

import { ChangeEvent, useRef } from "react";
import { useBoggle } from '../../context/BoggleContext';

export function LoadTilesElement() {
  const { updateLetters } = useBoggle();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseTextString = (jsonInput: string) => {
      //Expects json {"letters":[["a"x4],["b"x4], ["c"x4], ["d"x4]]}
      const lettersJson = JSON.parse(jsonInput)
      const arrayLetters = lettersJson["letters"]
      updateLetters(arrayLetters)
  }
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const loadLettersJson = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      
      //TODO add error handling and messages for incorrect file format etc
      reader.onload = function fileReadCompleted() {
        // when the reader is done, the content is in reader.result.
        const result = reader.result as string;
        parseTextString(result)
      };
      // Keep the size very small
      if (file.size < 1000) {
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
          onChange={loadLettersJson}
          
        />
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleButtonClick}>
            Load new board
        </button>
      </div>
    </div>
  );
}

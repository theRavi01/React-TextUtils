// rfc for template 
import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    const [textColor,setTextColor]= useState('black');

    // convert text in uppercase
    const  handleUpClick=()=>{
        let newText =text.toUpperCase();
        setText(newText);
        console.log("handleUpClick");
    };
    
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        console.log("handleLowClick");
    };

// for re edit text area
    const  handleOnChange=(event)=>{
        console.log("handleOnChange");
        setText(event.target.value);
    };

//  count the words
    const countWords=(text)=>{
    if(text.trim()===""){
        return 0;
    }
    else{
        return text.trim().split(" ").length;
    }
    };

//  change the color of text 
    const changeTextColor=()=>{
        // let newColor = textColor==='black'?'blue'?'pink'?'green'?'yellow'?'black';
        let newColor;
        if(textColor==='black'){
           newColor='red'; 
        }
        else if(textColor==='red'){
            newColor='green';
        }
        else if(textColor==='green'){
            newColor='orange';
        }
        else if(textColor==='orange'){
            newColor='pink';
        }
        else if(textColor==='pink'){
            newColor='black';
        }
        setTextColor(newColor);
    };

// count the vowels and consonants
   const countVowelsConsonants=(text)=>{
   let lowerCaseStr = text.toLowerCase();
   let vowels='aeiou';
   let vowelsCount=0;
   let consonantsCount=0;
    for(let char of lowerCaseStr){
       if(char >='a' && char <='z' && !vowels.includes(char)){
         consonantsCount++;
       }
       else{
        vowelsCount++;
       }
    }
    return {vowels:vowelsCount, consonants:consonantsCount};
   };
   const {vowels,consonants} = countVowelsConsonants(text);
   
// clear the text
   const clearText=()=>{
    setText("");
   };
  return (
    <>
    <div className="container">
<h1>{props.heading}</h1>
<div className="mb-3">
      <textarea className="form-control" onChange={handleOnChange} style={{color:textColor}}
       id="exampleFormControlTextarea1" rows="10" value={text}></textarea>
</div>
<button className='btn btn-primary mx-2' disabled={!text} onClick={clearText}>clearText</button>
<button className="btn btn-primary mx-2" disabled={!text} onClick={handleUpClick}>Convert to Upper</button>
<button className="btn btn-primary mx-2" disabled={!text} onClick={handleLowClick}>Convert to Lower</button>
<button className='btn btn-primary mx-2' disabled={!text} onClick={changeTextColor}>Change Text Color</button>
<h1 className='mx-2'>Your Text Summary</h1>
        <p>{countWords(text)} Words and {text.length} Characters</p>
        <p>{0.008* text.trim().split("").length} Minutes read time.</p>
        <p>{vowels}: Vowels and {consonants}: Consonants </p>
        <h1>Preview</h1>
        <h4 style={{color:textColor}}>{text}</h4>
    </div>
    <div className='container mx-2'>
       
    </div>
    </>
  )
}



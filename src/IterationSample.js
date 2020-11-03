import React, { useState } from "react";

const IterationSample = () => {
  /*컴포넌트에서 useState를 사용하여 상태를 설정하자*/
  // 1. 데이터 배열 상태를 사용

  const [names, setName] = useState([
      { id : 1, text : "눈사람1"},
      { id : 2, text : "눈사람2"},
      { id : 3, text : "눈사람3"},
      { id : 4, text : "눈사람4"},
])
  

  // 2. 텍스트를 입력할 수 있는 input의 상태
const [inputText, setInputText]  = useState("");

  // 3. 테이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태
const [nextId , setNextId] = useState(5);

const onChange = e => setInputText(e.target.value)
// onClick 함수에서 배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열을 만들자.
  // concat함수는 배열에 새 항목을 추가할 때 새로운 배열을 만들어 준다

const onClick = ()=>{
    const nextName = names.concat({
        id : nextId,
        text : inputText
    })
    //nextId 값에 1을 더해준다
    setNextId(nextId + 1);
    
      //setNames를 통해 상태 업뎃, names 값을 업데이트한다
    setName(nextName);
    
  // map함수를 사용할 때 key값을 index대신 name.id 값으로 지정
  //inputText를 비운다.
    setInputText("");
};

const onRemove = id =>{
    const nextNames = names.filter(name => name.id !== id)
    setName(nextNames);
}

const namesList = names.map(name =>
    <li key={name.id} onDoubleClick={()=>
    onRemove(name.id)
    }>{name.text}</li>
    );

return(
    <>
    <input value={inputText} onChange={onChange} />
    <button onClick={onClick}>추가</button>
    {namesList}
    </>
)    

};

export default IterationSample;

import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
// console.log(res)
//   let count = 0;
const handleClick = () => {
console.log("I was called");
// count += 1;
setCount(count + 1)
console.log(count);
  };

  useEffect(() =>{
    alert(`Current value count is ${count}`)
  
  }, [count]);


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>count: {count}</p>
      <button
        onClick={handleClick}
        // onClick={() => handleClick()}
        className="bg-emerald-600 shadow p-2 text-white rounded-md text-2xl"
      >
        Click me
      </button>
      <button
        onClick={handleClick}
        // onClick={() => handleClick()}
        className="bg-emerald-600 shadow p-2 text-white rounded-md text-2xl mt-6"
      >
        Show name
      </button>
    </div>
  );
};

export default Counter;

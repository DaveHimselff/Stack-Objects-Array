import { useState } from 'react';

function App() {
  const [stack, setStack] = useState([]);

  const handlePush = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const ticketNumber = e.target.elements.ticketNumber.value;
    setStack((prevStack) => [...prevStack, { name, ticketNumber }]);
    e.target.elements.name.value = '';
    e.target.elements.ticketNumber.value = '';
  };

  const handlePop = () => {
    setStack((prevStack) => {
      const newStack = [...prevStack];
      newStack.pop();
      return newStack;
    });
  };

  return (
    <div className="container mx-auto my-8 p-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-4">Current Stack</h2>
      <div className="flex items-center mb-4">
        <div className="flex-1 border border-gray-300 px-4 py-2 flex justify-between">
          <div className="flex">
            {stack.map((item, index) => (
              <div key={index} className="border border-gray-300 px-2 py-1">
                [{item.name}, {item.ticketNumber}]
              </div>
            ))}
          </div>
        </div>
      </div>
      <form className="flex items-center mb-4" onSubmit={handlePush}>
        <input type="text" name="name" className="border border-gray-300 px-4 py-2 mr-4" placeholder="Enter a Name" autoComplete="off" />
        <input type="text" name="ticketNumber" className="border border-gray-300 px-4 py-2" placeholder="Enter a Ticket Number" autoComplete="off" />
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-4 hover:bg-blue-700">
          Push
        </button>
      </form>
      <button onClick={handlePop} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
        Pop
      </button>
    </div>
  );
}

export default App;

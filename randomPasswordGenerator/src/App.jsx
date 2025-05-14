import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="mx-auto max-w-md w-full px-4 py-3 my-8 bg-gray-400 rounded-md">
      <h1 className="text-center my-2 text-xl font-bold">Password Generator</h1>
      <div className="text-center">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          className="outline-double p-1 rounded-md"
          readOnly
        />
        <button
          className="bg-blue-500 text-white mx-4 px-4 py-1 rounded-md"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className="justify-center flex my-5 flex-wrap">
        <div className="mx-2 flex items-center">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="ml-2">Length: {length}</label>
        </div>
        <div className="mx-2 flex items-center">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="ml-2">Numbers</label>
        </div>
        <div className="mx-2 flex items-center">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label className="ml-2">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

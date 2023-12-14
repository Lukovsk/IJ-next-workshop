import { useState } from "react";

export default function MyButton() {
  const [contador, setContador] = useState(0);

  function incrementar(contador) {
    setContador(contador + 1);
  }

  return (
    <div>
      <button onClick={() => incrementar(contador)}>Me pressione</button>
      <h1>{contador}</h1>
    </div>
  );
}

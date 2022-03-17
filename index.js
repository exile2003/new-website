import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
    const [count, setCount] = useState(1);

    return (
      <>
      <h1>Количество нажатий {count}</h1>
          <button onClick = {setCount(count - 1)}>Уменьшить</button>
          <button onClick = {setCount(count + 1)}>Увеличить</button>
      </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
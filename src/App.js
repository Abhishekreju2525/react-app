
import './App.css'
import Header from './components/Header'
function App() {
  const data = " this is Abhishek's react app "
  return (
    <div>
      <Header data={data} />

      <p>This is sample {data}</p>
      
    </div>
  );
}

export default App;


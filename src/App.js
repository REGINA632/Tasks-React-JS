import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import Task from "./Components/Task/Task";

function App() {
  // Task 5
  const arr = [1, 2, 3, 4, 5];

  const getNumber = (num) => {
    console.log(num + 2);
  };

  return (
    <div className="App">
      <Task getNumber={getNumber} name="Rega" age={22} />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;

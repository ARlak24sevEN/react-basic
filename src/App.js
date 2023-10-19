import Header from "./components/Header";
import StrudentList from "./components/StudentList";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <StrudentList />
        </main>
      </div>
    </>
  );
}

export default App;

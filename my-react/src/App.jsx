
import List from './List.jsx'

function App() {
  const fruits = [{id: 1, name: "apple", calories: 80}, 
                  {id: 2, name: "banana", calories: 100},
                  {id: 3, name: "ananas", calories: 95},
                  {id: 4, name: "pie", calories: 70}, 
                  {id: 5, name: "kiwi", calories: 65},
                  {id: 6, name: "dates", calories: 165}, 
                  {id: 7, name: "mango", calories: 90}];

  const vegetables = [{id: 8, name: "spinach", calories: 80}, 
                      {id: 9, name: "carot", calories: 30},
                      {id: 10, name: "radish", calories: 195},
                      {id: 11, name: "ginger", calories: 70},  
                      {id: 12, name: "limongrass", calories: 90}];                  
  return(
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>

    </>
  );
}

export default App

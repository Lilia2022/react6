import { useLayoutEffect } from "react";


function List(props){
    // const fruits = [{id: 1, name: "apple", calories: 80}, 
    //                 {id: 2, name: "banana", calories: 100},
    //                 {id: 3, name: "ananas", calories: 95},
    //                 {id: 4, name: "pie", calories: 70}, 
    //                 {id: 5, name: "kiwi", calories: 65},
    //                 {id: 6, name: "dates", calories: 165}, 
    //                 {id: 7, name: "mango", calories: 90}];


    // sorting method
    //fruits.sort();

    //ALPHABETICAL SORTING
    //fruits.sort((a, b) => a.name.localeCompare(b.name));

    //REVERSE ORDER ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name));
    
    //sorting by calories , increasing order
    //fruits.sort((a, b) => a.calories -b.calories);

    //sorting by calories , decreasing order
    //fruits.sort((a, b) => b.calories -a.calories);

    //filter based on some criteria
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    const category = props.category;

    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                        {item.name} : &nbsp;
                        <b>{item.calories}</b>
                        </li>);
    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>    
            </>);
}

export default List
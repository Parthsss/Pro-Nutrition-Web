import { Component } from "react";
import "./App.css";
import FoodData from "./resources/FoodData";
import FoodBox from "./Components/FoodBox";
import "./Components/FoodBox.css"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredData: [...FoodData],
    };
  }

  render() {
    let handleChange = (event) => {
      let searchText = event.target.value.toLowerCase();

      let searchResults = FoodData.filter((element) => {
        return element.name.includes(searchText);
      });

      this.setState({
        filteredData: searchResults,
      });
    };
    return (
      <>
        <div className="inputt">
          <input
            type="text"
            placeholder="Search Here"
            onChange={handleChange}
          />
        </div>
        {this.state.filteredData.map((element, i) => (
           <FoodBox foodItem={element} key={i} />
        ))
        }
      </>
    );
  }
}

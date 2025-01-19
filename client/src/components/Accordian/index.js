import { useState } from "react";
import "./styles.css";
import data from "./data";
import { Link } from "react-router-dom";

export default function Accordian() {
  const [selected, setSelected] = useState([]);

  function handleSelection(currentId) {
    //console.log("selected is", selected);
    const index = selected.indexOf(currentId);
    //console.log("Index is", index);
    index === - 1 ? 
        setSelected((previousValue) => {
            //console.log("processinfg is", [...previousValue, currentId]);
            return [...previousValue, currentId]
        })
    : setSelected(previousValue => previousValue.splice(index));
    //console.log("Updated value is", selected);
  }

  return (
    <div className="accordian-container">
      <div className="accordian-inner">
      An Accordion component is a UI element that allows users to toggle between showing and hiding sections of content. It organizes information into collapsible panels or sections, where typically only one or a few sections are expanded at a time, making it a great choice for managing space and providing an intuitive user experience.
      </div>
      <div className="accordian-inner">
        {data && data.length ? (
          data.map((dataItem) => (
            <div className="accordian-item">
              <div
                onClick={() => handleSelection(dataItem.id)}
                className="accordian-title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected.includes(dataItem.id) ? (
                <div className="accordian-content">
                  {dataItem.answer}
                  <div>
                    <Link to={dataItem.links[0]}><button>View Demo</button></Link>{" "}
                    <Link to={`/hint/${dataItem.links[1]}`}><button>Get Hint</button></Link>{" "}
                    <Link to={dataItem.links[2]}><button>View Code</button></Link>{" "}
                  </div>
                </div>
              ) : null}
              
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
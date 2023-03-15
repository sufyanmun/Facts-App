function CategoriesSidebar() {
  return (
    <aside>
      <ul>
        <li>
          {" "}
          <button className="btn all-Btn">All</button>{" "}
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">Technology</button>
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">News</button>
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">Science</button>
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">Entertainment</button>
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">Society</button>
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">Finance</button>
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">History</button>
        </li>
        <li className="category">
          {" "}
          <button className="btn category-Btn">Health</button>
        </li>
      </ul>
    </aside>
  );
}

export default CategoriesSidebar;

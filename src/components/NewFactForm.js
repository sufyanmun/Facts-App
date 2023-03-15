function NewFactForm() {
  return (
    <section>
      <form className="fact-Form" action="">
        <input type="text" placeholder="Share a fact with us!" />
        <span className="word-Count-Span">200</span>
        <input type="text" placeholder="Trustworthy Source " />
        <select>
          <option value="" disabled selected>
            Choose category:
          </option>
          <option value="Technology">Technology</option>
          <option value="News">News</option>
          <option value="Science">Science</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Society">Society</option>
          <option value="Finance">Finance</option>
          <option value="History">History</option>
          <option value="Health">Health</option>
        </select>
        <button className="btn main-Btn">Post</button>
      </form>
    </section>
  );
}

export default NewFactForm;

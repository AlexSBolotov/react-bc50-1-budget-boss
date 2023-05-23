const AddTransaction = () => {
  return (
    <div>
      <form>
        <input type="date" name="date" />
        <input type="text" name="text" />
        <select name="categories">
          <option value="products">Products</option>
          <option value="alcohol">Alcohol</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="transport">Transport</option>
          <option value="housing">Housing</option>
          <option value="hobbies">Sports, hobbies</option>
          <option value="technique">Technique</option>
          <option value="communal">Communal, communication</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
        <input type="number" placeholder="0.00" />
        <button type="submit">Input</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
};

export default AddTransaction;

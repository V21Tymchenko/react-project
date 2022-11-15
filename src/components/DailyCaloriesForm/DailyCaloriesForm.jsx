const DaileCaloriesForm = () => {
  return (
    <>
      <form>
        <div>
          <input type="height" name="height" placeholder="Height *" />
        </div>
        <div>
          <input type="age" name="age" placeholder="Age *" />
        </div>
        <div>
          <input
            type="currentWeight"
            name="currentWeight"
            placeholder="Current Weight *"
          />
        </div>
        <div>
          <input
            type="desiredWeight"
            name="desiredWeight"
            placeholder="Desired Weight *"
          />
        </div>
        <div>
          <div>Blood type *</div>
          <div role="group" aria-labelledby="blood-group">
            <label>
              1
              <input type="radio" name="bloodType" value="1" />
            </label>
            <label>
              2
              <input type="radio" name="bloodType" value="2" />
              <span></span>
            </label>
            <label>
              3
              <input type="radio" name="bloodType" value="3" />
              <span></span>
            </label>
            <label>
              4
              <input type="radio" name="bloodType" value="4" />
              <span></span>
            </label>
          </div>
        </div>

        <button type="submit">Start losing weight</button>
      </form>
    </>
  );
};
export default DaileCaloriesForm;

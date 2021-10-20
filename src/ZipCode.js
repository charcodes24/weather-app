import { useState } from "react";

export default function ZipCode() {
    const [zipcode, setZipcode] = useState("")

    function handleInput(e) {
        setZipcode(e.target.value)
    }

    console.log(zipcode)

    return (
      <div>
        <form className="zipcode">
          <input
            onChange={handleInput}
            type="text"
            pattern="[0-9]"
            name="zipcode"
            value={zipcode}
            maxlength="5"
            placeholder="Enter a 5-digit zipcode..."
          />
          <button type="submit">Get the weather!</button>
        </form>
      </div>
    );
}
import { useState } from "react";

export default function ZipCode() {
    const [zipcode, setZipcode] = useState("")

    function handleInput(e) {
        setZipcode(e.target.value)
    }

    console.log(zipcode)

    return (
        <div>
            <form>
                <input onChange={handleInput} type="text" name="zipcode" value={zipcode} placeholder="Enter a 5-digit zipcode..." />
                <button type="submit">Get the weather!</button>
            </form>
        </div>
    )
}
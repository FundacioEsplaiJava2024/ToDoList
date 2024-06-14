import { useState } from "react";

export function AddButton() {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Add +</button>
            {showPopup && <PopUp onClose={handleClosePopup} />}
        </div>
    );
}

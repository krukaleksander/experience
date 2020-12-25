import React from 'react';

const Buttons = ({ jobs, value, setValue }) => {
    return <div className="btn-container">
        {
            jobs.map((item, index) => {
                return <button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
                    {item.company}
                </button>
            })
        }

    </div>
}

export default Buttons;
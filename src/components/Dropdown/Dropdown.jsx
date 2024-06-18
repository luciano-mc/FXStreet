import './Dropdown.css';
import { useState } from 'react';
import { HideIcon, AssetsIcon, DotsIcon, BackArrowIcon } from '@/assets/Icons.jsx';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const options = [
    { icon: <HideIcon />, label: 'Hide' },
    { icon: <AssetsIcon />, label: 'Improve my feed', hasSubmenu: true },
  ];

  const moreOptions = [
    { label: `I'm not interested in this author`, value: 'option1' },
    { label: `I'm not interested in this topic`, value: 'option2' },
    { label: `I've seen too many post on this topic`, value: 'option3' },
    { label: `The information is incorrect`, value: 'option4' },
    { label: `I've seen this post before`, value: 'option5' },
    { label: `Other reasons`, value: 'option6' },
  ];

  const handleOptionClick = (option) => {
    if (option.hasSubmenu) {
      setShowMoreOptions(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleBackClick = () => {
    setShowMoreOptions(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <DotsIcon />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {!showMoreOptions ? (
            options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)} className="option">
                {option.icon} {option.label}
              </li>
            ))
          ) : (
            <>
              <li onClick={handleBackClick} className="option">
                <BackArrowIcon /> 
                Tell us why:
              </li>
              {moreOptions.map((option, index) => (
                <li key={index}>
                  <label className="option-label">
                    <input
                      type="radio"
                      name="moreOptions"
                      value={option.value}
                    />
                    {option.icon} {option.label}
                  </label>
                </li> 
              ))}
              <li className="option"><input type="text" placeHolder="Hide content" className="dropdown-submenu__input" /></li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

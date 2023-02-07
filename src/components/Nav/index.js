import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import '../../index.css';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    aboutSelected,
    resumeSelected,
    currentCategory,
    setAboutSelected,
    setResumeSelected,
  } = props;

  useEffect(() => {
    document.title = "Derek Portfolio " + capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Derek's Portfolio <space>:</space>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">

        <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(true);
              setResumeSelected(false);
              setCurrentCategory({ name: 'default', description: ''});
            }}>
              About Me
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-2 ${currentCategory.name === category.name && !aboutSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setAboutSelected(false);
                  setResumeSelected(false)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {
              setResumeSelected(true);
              setAboutSelected(false);
              setCurrentCategory({ name: 'default', description: ''});
            }}>
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

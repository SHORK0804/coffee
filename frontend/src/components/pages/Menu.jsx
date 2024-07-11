import React, { useState } from 'react';
import BakeryCard from '../Card/BakeryCard';
import CoffeeCard from '../Card/CoffeeCard';
import TeaCard from '../Card/TeaCard';

import styles from './style.module.css';


function Menu() {
  const [selectedFilters, setSelectedFilters] = useState([]); // State for selected filters
  const sections = ['Ăn nhẹ', 'Cà phê','Trà']; // Array of section names

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      setSelectedFilters([...selectedFilters, name]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== name));
    }
  };

  const filteredSections = () => {
    // Filter sections based on selected filters, considering default behavior
    if (selectedFilters.length === 0) {
      // No filters selected, show all sections
      return sections;
    }

    return sections.filter((section) => selectedFilters.includes(section));
  };


  const filter = {
    margin: '50px',
    padding: '10px',
  };

  return (
    <div className='menucontainer'>
      <div className="row">
        <div className="col-xl-2 col-md-3" style={filter}>
          <h4>Lọc món</h4>
          {sections.map((section) => (
            <label key={section} className={styles.labelstyles}>
              <input
                type="checkbox"
                style={{
                  marginRight: '5px'
                }}
                name={section}
                checked={selectedFilters.includes(section)}
                onChange={handleFilterChange}
              >
              </input>
              {section}
            </label>
          ))}
        </div>
        <div className="col-xl-8 col-md-6">
          {filteredSections().map((section) => {
            switch (section) {
              case 'Ăn nhẹ':
                return (
                  <section className="bakery" key="bakery">
                    <h3 className={styles.titlestyles}>
                      {section}
                    </h3>
                    <BakeryCard />
                  </section>
                );
              case 'Cà phê':
                return (
                  <section className="coffee" key="coffee">
                    <h3 className={styles.titlestyles}>
                      {section}
                    </h3>
                    <CoffeeCard />
                  </section>
                );
                case 'Trà':
                  return (
                    <section className="tea" key="tea">
                      <h3 className={styles.titlestyles}>
                        {section}
                      </h3>
                      <TeaCard />
                    </section>
                  );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;

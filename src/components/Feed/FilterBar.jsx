import { FilterIcon } from '@/assets/Icons.jsx';

function FilterBar({ activeTab, setActiveTab }) {
  return (
    <div className="bar">
      <ul className="sort-filters-container">
        <li>
          <button onClick={() => setActiveTab(1)} className={`sort-filter ${activeTab === 1 ? 'active' : ''}`}>
            Latest
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab(2)} className={`sort-filter ${activeTab === 2 ? 'active' : ''}`}>
            Popular
          </button>
        </li>
      </ul>
      <div className="filters">
        <div>
          <div className="filter__mobile">
            <FilterIcon />
          </div>
          <div className="filter__desktop">
            <span>Show:</span>
            <select className="filter__desktop-select">
              <option value="">All</option>
              <option value="Latest" onClick={() => setActiveTab(1)}>Latest</option>
              <option value="Popular" onClick={() => setActiveTab(2)}>Popular</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar;
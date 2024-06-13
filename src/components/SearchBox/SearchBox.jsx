import css from './SearchBox.module.css'
export default function SearchBox({ value, onSearching }) {
    return <div className={css.searchingBlock}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearching(e.target.value)}
        className={css.searchInput}
      />
    </div>
}

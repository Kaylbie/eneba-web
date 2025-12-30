import SearchBarDropdownItem from "../header/SearchBarDropdownItem";

type SearchResult = {
    id: string;
    title: string;
    imageSrc: string;
    price: number;
    discount:number;

};
type SearchResultsListProps = {
  searchResults: SearchResult[]
}

const SearchResultsList = ({ searchResults}: SearchResultsListProps) => {
    return (
        <>

            <div className="absolute top-full left-0 mt-0.5 w-full bg-background shadow-lg max-h-[70vh] overflow-y-auto">
      {searchResults.map(result => (
        <SearchBarDropdownItem
          key={result.id}
          title={result.title}
          image={result.imageSrc}
          price={result.price}
          discount={result.discount}
        />
      ))}
    </div>
        </>
    );
};
export default SearchResultsList;
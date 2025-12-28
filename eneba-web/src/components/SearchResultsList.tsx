import SearchListItem from "./SearchListItem";
import { Button } from "./ui/button";

type SearchResult = { 
    id: string;
    title: string;
    imageSrc: string
    price: number

};

const SearchResultsList = ({ searchResults }: { searchResults: SearchResult[] }) => {
    return (
        <>
            {searchResults.length > 0 && (
                <div className="absolute left-0 top-full z-10 border overflow-y-scroll w-full bg-background">
                    {searchResults.map((result) => (
                        <div key={result.id}>
                            <SearchListItem 
                            title={result.title}
                            image={result.imageSrc}
                            price={result.price}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
        );
};
export default SearchResultsList;
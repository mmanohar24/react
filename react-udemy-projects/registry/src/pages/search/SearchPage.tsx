//import type { PackageSummary } from '../../api/types/packageSummary';
import type { SearchLoaderResult } from './searchLoader';
import { useLoaderData} from 'react-router-dom'
import PackageListItem from '../../components/PackageListItem';

export default function SearchPage()
{
    const {searchResults} = useLoaderData() as SearchLoaderResult;

    const rendedredResults = searchResults.map( (result) =>
    {
        return <PackageListItem key = {result.name} pack = {result} />
    });
    
    return (
        <div>
            <h1 className = "text-2xl font-bold my-6"> Search Results </h1>

            <div className = "space-y-4 mt-4">
                {rendedredResults}
            </div>
        </div>
    )
}
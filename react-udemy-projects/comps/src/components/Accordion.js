import {useState} from 'react';
import { GoChevronDown, GoChevronLeft} from 'react-icons/go'

function Accordion({items})
{
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // By writing the event handler outside the map function, index is not available. So, we need to use Hybrid approach of both inline and outside event handler.
    // Here, we are hard coding the argument to the handleClick function. Generally, handleClick function is passed with the event as the first argument
    const handleClick = (nextIndex) =>
        {
            setExpandedIndex( (currentExpandedIndex) =>
            {
                if(currentExpandedIndex === nextIndex)
                {
                    return -1;
                }
                else
                {
                    return nextIndex;
                }
            });
            // if(expandedIndex === nextIndex)
            // {
            //     setExpandedIndex(-1);
            // }
            // else
            // {
            //     setExpandedIndex(nextIndex);
            // }
        }

    const renderedItems = items.map( (item, index) =>
    {
        const isExpanded = index === expandedIndex;

        const icon = 
        <span className = "text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        // OUTSIDE EVENT HANDLER
        // Whenever the onClick event is called, the handleClick function is called with the index of the item that was clicked.
        // we're calling the handleClick function manually and passing the index of the item as a first argument.
        return (
            <div key = {item.id}>
                <div className = "flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick = {() => handleClick(index)} >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className = "border-b p-5" >{item.content}</div>}
            </div>
        )

        // INLINE EVENT HANDLER
        // return (
        //     <div key = {item.id}>
        //         <div onClick = { () => setExpandedIndex(index) }>
        //             {item.label}
        //         </div>
        //         {isExpanded && <div>{item.content}</div>}
        //     </div>
        // )
    })

    return (
        <div className = "border-x border-t rounded">
            {renderedItems}
        </div>
    )
}

export default Accordion;
import './SearchBar.css';
import {useState} from 'react';

function SearchBar({onSubmit})
{
    //1. Creating a new piece of state to keep track and collec the value of the input element.
    const [term, setTerm] = useState('');

    const handleFormSunmit = (event) =>
    {
        //Prevent the default behavior of the form element (Network Request when user submits the form using Submit Button or clicks enter), which is to submit the form and refresh the page.
        event.preventDefault();
       
        //Passing the input value
        onSubmit(term);

        /*
        NEVER EVER EVER DO THIS
        onSubmit(documet.querySelector('input').value);
        */

        //console.log('I need to tell the parent component that I was submitted');
    }

    /*
    2. Whenever the user types something, changes the value of the input element, cut or paste, etc. This function will be called.
    3. Whenver the onChange event fires, we need to get the value of input. 
    4. Then take the value from the input state and update the state with it.
    */

    const handleChange = (event) =>
    {
        setTerm(event.target.value);
        //console.log(event.target.value);
    };

    return (
        //FORM -> When we place a input element inside a form element, the form element will automatically submit when the user presses the enter key and it automatically triggers the submit event. 
        //5. Passing the state value to the input element.
        <div className = "search-bar">
            <form onSubmit = {handleFormSunmit}>
                <label> Enter Search Term </label>
                <input value = {term} onChange = {handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { term, fetch } from '../actions/stateAction.js';
import { Field, reduxForm } from 'redux-form';

// const Search = (props) => {
//   return (
//     <div>
//       <p>search component starts here (reference)</p>
//       <form>
//         <label>
//           Search Location:
//           <br></br>
//           <input type='text' name='search-field' placeholder='Search Location...' value='search' />
//           <button id='button-1'>Search</button>
//         </label>
//       </form>
//     </div>
//   );
// };

let Search = (props) => {

console.log(`these are props : `,props);
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(this.term)}>
      <div>
        <label htmlFor='search'>Search:</label>
          <Field name='search' component='input' type='text'/>
      </div>
      <button type='submit'>Search</button>
    </form>
  )
};

Search = reduxForm({
  form: 'search'
})(Search)

export default Search;

import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class Search extends Component {

  state = {
    searchKeyWord : '',
    url: 'https://pixabay.com/api/',
    apikey: '6722548-00090bbf0e323b9c0eaf43797',
    images:[]
  }


  render(){
    return(
      // <TextField
      //   name= "Search images"
      //   value={this.searchKeyWord}
      //   onChange={this.onTextchange}
      //
      //   floatingLabelText="Enter Image name you want to search"
      //   fullWidth={true}
      // />
      <SelectField
               floatingLabelText="Frequency"
               value={this.state.value}
               onChange={this.handleChange}
             >
               <MenuItem value={1} primaryText="Never" />
               <MenuItem value={2} primaryText="Every Night" />
               <MenuItem value={3} primaryText="Weeknights" />
               <MenuItem value={4} primaryText="Weekends" />
               <MenuItem value={5} primaryText="Weekly" />
             </SelectField>
  );
  }

}
export default Search;

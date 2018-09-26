import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

export default class CreatableInputOnly extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      value: [],
    };
  }
  
  handleChange = (value, actionMeta) => {
    console.group('Value Changed');
    console.log(value);
    console.groupEnd();
    this.setState({ value });
  };
  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };
  handleKeyDown = (event) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
      this.setState({
        inputValue: '',
        value: [...value, createOption(inputValue)],
      },()=>this.props.language(this.state.value));
        event.preventDefault();
    }
  };
  render() {
    const { inputValue, value } = this.state;
    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder=""
        value={value}
      />
    );
  }
}
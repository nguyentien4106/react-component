import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: props.searchValue
        }
    }
    onClearFilterClick = () => {
        this.inputText.value = "";
        this.onFilterChange();
        this.setState({searchValue: ""});
    }

    onFilterChange = () => {
        if (this.filterDelayId > 0) {
            clearTimeout(this.filterDelayId);
        }

        this.inputText.value = this.inputText.value.replaceAll("\n", this.props.isAbleToCopyPaste ? ", " : " ") 

        this.filterDelayId = setTimeout(() => {
            this.filterDelayId = 0;
            this.props.onFilterChange(this.inputText.value);
        }, this.props.filterDelay * 1000);

        this.setState({searchValue:this.inputText.value});
    }

    onFilterKeyDown = event => {
        if (event.key === "Enter") {
            event.preventDefault()
        }
    }

    render() {
        return (
            <div className="ddft" style={{width: this.props.width}}>
                <textarea className='ddft__input ddft__input--textarea' 
                    placeholder='Filter' 
                    autoFocus 
                    rows={1}
                    onChange={this.onFilterChange} 
                    ref={inputText => { this.inputText = inputText}}
                    value={this.state.searchValue}
                    onKeyDown={this.onFilterKeyDown}
                />
                <div className='ddft__clear' onClick={this.onClearFilterClick}>×</div>
            </div>
        );
    }
};
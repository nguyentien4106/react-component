React-Dropdown-Checklist-Component
=========================
## Demo [react-Dropdown-checklist-demo](https://google.com)

## Basic Usage
```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { DropdownCheckList } from '@la-components/react-dropdown-tree-select';
import '@la-components/react-dropdown-tree-select/dist/dropdown-checklist.css';
import '@la-components/react-dropdown-tree-select/dist/dropdown-checklist.custom.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedMobileIds: ''
        };
    }

    onCheckFilterItemsChanged(checkedItems){
        const checkedMobileIds = checkedItems.selectedItems.map(r => r.data.mobileId);
        this.setState({selectedMobileIds: checkedMobileIds.join(',')})
    }

    render() {
        return (
            <div>
                <DropdownCheckList
                        dropdownName="mobile-filter"
                        dataSource={data}
                        idName="MobileId"
                        parentIdName="ParentId"
                        displayName="MobileName"
                        height={370}
                        width={200}
                        expandAll={true}
                        selectAll={true}
                        selectAllText="All mobiles"
                        multipleSelectedText="{0} selected mobile(s)"
                        onCheckItemsChanged={onCheckFilterItemsChanged} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
```

### Dropdown Checklist with CheckBox (1 level)
```javascript
render() {
	return (
		<DropdownCheckList
			dropdownName="brand-option"
			dataSource={[{ "Code": "A", "Name": "Apple" }, { "Code": "S", "Name": "SamSung" }, { "Code": "N", "Name": "Nokia" }, { "Code": "O", "Name": "Oppo" }, { "Code": "H", "Name": "Huawei" }]}
			selectAll={true}
			selectAllText="All brands"
			multipleSelectedText="{0} selected product(s)"
			displayName="Name"
			showFilter={true}
			width={300} 
			onCheckItemsChanged={this.onCheckItemsChanged} />
	);
}
```

### Dropdown Checklist with CheckBox (2 level)
```javascript
render() {
	const data = [{"MobileId":1,"MobileName":"Apple","ParentId":0},{"MobileId":9,"MobileName":"SamSung","ParentId":0},{"MobileId":11,"MobileName":"Nokia","ParentId":0},{"MobileId":98,"MobileName":"Oppo","ParentId":0},{"MobileId":999,"MobileName":"Huawei","ParentId":0},{"MobileId":14,"MobileName":"Iphone5","ParentId":1},{"MobileId":15,"MobileName":"Iphone6s","ParentId":1},{"MobileId":17,"MobileName":"Iphone6s plus","ParentId":1},{"MobileId":19,"MobileName":"Iphone 7","ParentId":1},{"MobileId":20,"MobileName":"Iphone 8","ParentId":1},{"MobileId":23,"MobileName":"Iphone x","ParentId":1},{"MobileId":24,"MobileName":"Sam sung s9","ParentId":9},{"MobileId":31,"MobileName":"Sam sung j7 pro","ParentId":9},{"MobileId":34,"MobileName":"Nokia 1280","ParentId":11},{"MobileId":35,"MobileName":"Nokia 3310","ParentId":11},{"MobileId":36,"MobileName":"Nokia 7 plus","ParentId":11},{"MobileId":16,"MobileName":"Oppo f3","ParentId":98},{"MobileId":22,"MobileName":"Oppo f5","ParentId":98},{"MobileId":26,"MobileName":"Oppo f7","ParentId":98},{"MobileId":25,"MobileName":"Huawei nova 3e","ParentId":999},{"MobileId":30,"MobileName":"Huawei nova 2i","ParentId":999}];

	return(
		<DropdownCheckList
			dropdownName="mobile-control-select"
			dataSource={data}
			idName = "MobileId"
			parentIdName = "ParentId"
			displayName = "MobileName"
			height = {370}
			width = {350}
			expandAll = {true}
			selectAll = {false}
			selectAllText = "All mobiles"
			multipleSelectedText = "{0} selected mobile(s)"
			onCheckItemsChanged={this.onCheckItemsChanged} />
	);
}
```


### Dropdown Checklist with CheckBox (2 level) support copy/paste
### usage: type item's name into filter. If there are matched exactly (do not count uppercase letter) each other, item will be chosen. You can type multiple item separate by comma (","). If item is parent, children will be chosen and contrary.

```javascript
render() {
	const data = [{"MobileId":1,"MobileName":"Apple","ParentId":0},{"MobileId":9,"MobileName":"SamSung","ParentId":0},{"MobileId":11,"MobileName":"Nokia","ParentId":0},{"MobileId":98,"MobileName":"Oppo","ParentId":0},{"MobileId":999,"MobileName":"Huawei","ParentId":0},{"MobileId":14,"MobileName":"Iphone5","ParentId":1},{"MobileId":15,"MobileName":"Iphone6s","ParentId":1},{"MobileId":17,"MobileName":"Iphone6s plus","ParentId":1},{"MobileId":19,"MobileName":"Iphone 7","ParentId":1},{"MobileId":20,"MobileName":"Iphone 8","ParentId":1},{"MobileId":23,"MobileName":"Iphone x","ParentId":1},{"MobileId":24,"MobileName":"Sam sung s9","ParentId":9},{"MobileId":31,"MobileName":"Sam sung j7 pro","ParentId":9},{"MobileId":34,"MobileName":"Nokia 1280","ParentId":11},{"MobileId":35,"MobileName":"Nokia 3310","ParentId":11},{"MobileId":36,"MobileName":"Nokia 7 plus","ParentId":11},{"MobileId":16,"MobileName":"Oppo f3","ParentId":98},{"MobileId":22,"MobileName":"Oppo f5","ParentId":98},{"MobileId":26,"MobileName":"Oppo f7","ParentId":98},{"MobileId":25,"MobileName":"Huawei nova 3e","ParentId":999},{"MobileId":30,"MobileName":"Huawei nova 2i","ParentId":999}];

	return(
		<DropdownCheckList
			dropdownName="mobile-control-select"
			dataSource={data}
			idName = "MobileId"
			parentIdName = "ParentId"
			displayName = "MobileName"
			height = {370}
			width = {350}
			expandAll = {true}
			selectAll = {false}
			selectAllText = "All mobiles"
			multipleSelectedText = "{0} selected mobile(s)"
			onCheckItemsChanged={this.onCheckItemsChanged}
			isAbleToCopyPaste={true}
		/>
	);
}
```

### Dropdown Checklist with Radio by Group
```javascript
render() {
	const data = [{"MobileId":1,"MobileName":"Apple","ParentId":0},{"MobileId":9,"MobileName":"SamSung","ParentId":0},{"MobileId":11,"MobileName":"Nokia","ParentId":0},{"MobileId":98,"MobileName":"Oppo","ParentId":0},{"MobileId":999,"MobileName":"Huawei","ParentId":0},{"MobileId":14,"MobileName":"Iphone5","ParentId":1},{"MobileId":15,"MobileName":"Iphone6s","ParentId":1},{"MobileId":17,"MobileName":"Iphone6s plus","ParentId":1},{"MobileId":19,"MobileName":"Iphone 7","ParentId":1},{"MobileId":20,"MobileName":"Iphone 8","ParentId":1},{"MobileId":23,"MobileName":"Iphone x","ParentId":1},{"MobileId":24,"MobileName":"Sam sung s9","ParentId":9},{"MobileId":31,"MobileName":"Sam sung j7 pro","ParentId":9},{"MobileId":34,"MobileName":"Nokia 1280","ParentId":11},{"MobileId":35,"MobileName":"Nokia 3310","ParentId":11},{"MobileId":36,"MobileName":"Nokia 7 plus","ParentId":11},{"MobileId":16,"MobileName":"Oppo f3","ParentId":98},{"MobileId":22,"MobileName":"Oppo f5","ParentId":98},{"MobileId":26,"MobileName":"Oppo f7","ParentId":98},{"MobileId":25,"MobileName":"Huawei nova 3e","ParentId":999},{"MobileId":30,"MobileName":"Huawei nova 2i","ParentId":999}];
	
	return (
		<div>
			<h4>Radio by Group</h4>
			<DropdownCheckList
				dropdownName="mobile-filter"
				dataSource={data}
				height = {400}
				width = {210}
				selectAll = {false}
				expandAll = {true}
				parentIdName = "ParentId"
				idName = "MobileId"
				displayName = "MobileName"
				singleSelect = {2}
				cssClass = "highlight-mobile"
				showRoot = {false}
				onCheckItemsChanged={this.onCheckItemsChanged} />
		</div> 
	);
}
```

### Dropdown Checklist with Radio have multiple Checkboxes
```javascript
render() {
	const data = [{"BrandTypeId":1,"BrandTypeName":"Iphone","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Iphone 5"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6 plus"},{"BrandTypeId":0,"BrandTypeName":"Iphone 7"}]},{"BrandTypeId":3,"BrandTypeName":"SamSung","BrandTypeInfos":[]},{"BrandTypeId":4,"BrandTypeName":"Nokia","BrandTypeInfos":[]},{"BrandTypeId":5,"BrandTypeName":"Oppo","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Oppo f3"}]},{"BrandTypeId":6,"BrandTypeName":"Huawei","BrandTypeInfos":[]}];
	
	return (
		<div>
			<h4>Radio have multiple checkbox</h4>
			<DropdownCheckList
				dropdownName="ddl-brands-type"
				dataSource={data}
				selectAll = {false}
				expandAll = {true}
				childName = 'BrandTypeInfos'
				displayName = 'BrandTypeName'
				noSelectedText = 'Please Select One'
				showFilter = {false}
				showRoot = {false}
				singleSelect = {1}
				onCheckItemsChanged={this.onCheckItemsChanged} />
		</div> 
	);
}
```

### Dropdown Checklist with Radio have multiple Checkboxes with support copy/paste
### Usage: Type the item's name into filter area. The item will be chosen if they are matched exactly each other (case insensitive). 
### If there are multiple item separated by comma (",") the first item will be chosen.

```javascript
render() {
	const data = [{"BrandTypeId":1,"BrandTypeName":"Iphone","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Iphone 5"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6 plus"},{"BrandTypeId":0,"BrandTypeName":"Iphone 7"}]},{"BrandTypeId":3,"BrandTypeName":"SamSung","BrandTypeInfos":[]},{"BrandTypeId":4,"BrandTypeName":"Nokia","BrandTypeInfos":[]},{"BrandTypeId":5,"BrandTypeName":"Oppo","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Oppo f3"}]},{"BrandTypeId":6,"BrandTypeName":"Huawei","BrandTypeInfos":[]}];
	
	return (
		<div>
			<h4>Radio have multiple checkbox</h4>
			<DropdownCheckList
				dropdownName="ddl-brands-type"
				dataSource={data}
				selectAll = {false}
				expandAll = {true}
				childName = 'BrandTypeInfos'
				displayName = 'BrandTypeName'
				noSelectedText = 'Please Select One'
				showRoot = {false}
				singleSelect = {1}
				onCheckItemsChanged={this.onCheckItemsChanged} 
				isAbleToCopyPaste={true}
				/>
		</div> 
	);
}
```

## Props
```javascript
DropdownCheckListPropTypes = {
    dropdownName: PropTypes.string.isRequired,
    dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
    isActive: PropTypes.bool,
    selectAll: PropTypes.bool,
    selectAllText: PropTypes.string,
    expandAll: PropTypes.bool,
    noSelectedText: PropTypes.string,
    rootText: PropTypes.string,
    filterText: PropTypes.string,
    multipleSelectedText: PropTypes.string,
    displayName: PropTypes.string,
    childName: PropTypes.string,
    checkedName: PropTypes.string,
    expandedName: PropTypes.string,
    showRoot: PropTypes.bool,
    showFilter: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    filterDelay: PropTypes.number,
    parentIdName: PropTypes.any,
    idName: PropTypes.any,
    singleSelect: PropTypes.any,
    selectableLevel: PropTypes.number,
    cssClass: PropTypes.string,
    mode: PropTypes.string,
    autoCheck: PropTypes.bool,
    countLevel: PropTypes.number,
    onCheckItemsChanged: PropTypes.func.isRequired,
	isAbleToCopyPaste: PropTypes.bool
 }
```

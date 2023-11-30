import React from 'react'
import { DropdownCheckList } from '@la-components/react-dropdown-tree-select';
import '@la-components/react-dropdown-tree-select/dist/dropdown-checklist.css';
import '@la-components/react-dropdown-tree-select/dist/dropdown-checklist.custom.css';
import { useState } from 'react';

function App() {
	const data = [{"BrandTypeId":1,"BrandTypeName":"Iphone","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Iphone 5"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6 plus"},{"BrandTypeId":0,"BrandTypeName":"Iphone 7"}]},{"BrandTypeId":3,"BrandTypeName":"SamSung","BrandTypeInfos":[]},{"BrandTypeId":4,"BrandTypeName":"Nokia","BrandTypeInfos":[]},{"BrandTypeId":5,"BrandTypeName":"Oppo","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Oppo f3"}]},{"BrandTypeId":6,"BrandTypeName":"Huawei","BrandTypeInfos":[]}];
  
  const onCheckItemsChanged = (items) => {
      console.log(items);
  }

  return (
    <div >
        <div className="float-left" style={{float: "left", width: 400}}>
          <h4>Check all + CheckBox (1 level)</h4>
          <DropdownCheckList
              dropdownName="brand-option"
              dataSource={[{ "Code": "A", "Name": "Apple" }, { "Code": "S", "Name": "SamSung" }, { "Code": "N", "Name": "Nokia" }, { "Code": "O", "Name": "Oppo" }, { "Code": "H", "Name": "Huawei" }]}
              selectAll={true}
              selectAllText="All brands"
              multipleSelectedText="{0} selected product(s)"
              displayName="Name"
              showFilter={true}
              width={300} 
              onCheckItemsChanged={onCheckItemsChanged}/>
        </div>
        <div className="float-left" style={{float: "left", width: 400}}>
          <h4>Check all + CheckBox (2 level)</h4>
          <DropdownCheckList
              dropdownName="mobile-control-select"
              dataSource={[{"MobileId":1,"MobileName":"Apple","ParentId":0},{"MobileId":9,"MobileName":"SamSung","ParentId":0},{"MobileId":11,"MobileName":"Nokia","ParentId":0},{"MobileId":98,"MobileName":"Oppo","ParentId":0},{"MobileId":999,"MobileName":"Huawei","ParentId":0},{"MobileId":14,"MobileName":"Iphone5","ParentId":1},{"MobileId":15,"MobileName":"Iphone6s","ParentId":1},{"MobileId":17,"MobileName":"Iphone6s plus","ParentId":1},{"MobileId":19,"MobileName":"Iphone 7","ParentId":1},{"MobileId":20,"MobileName":"Iphone 8","ParentId":1},{"MobileId":23,"MobileName":"Iphone x","ParentId":1},{"MobileId":24,"MobileName":"Sam sung s9","ParentId":9},{"MobileId":31,"MobileName":"Sam sung j7 pro","ParentId":9},{"MobileId":34,"MobileName":"Nokia 1280","ParentId":11},{"MobileId":35,"MobileName":"Nokia 3310","ParentId":11},{"MobileId":36,"MobileName":"Nokia 7 plus","ParentId":11},{"MobileId":16,"MobileName":"Oppo f3","ParentId":98},{"MobileId":22,"MobileName":"Oppo f5","ParentId":98},{"MobileId":26,"MobileName":"Oppo f7","ParentId":98},{"MobileId":25,"MobileName":"Huawei nova 3e","ParentId":999},{"MobileId":30,"MobileName":"Huawei nova 2i","ParentId":999}]}
              idName = "MobileId"
              parentIdName = "ParentId"
              displayName = "MobileName"
              height = {370}
              width = {350}
              expandAll = {true}
              selectAll = {false}
              selectAllText = "All mobiles"
              multipleSelectedText = "{0} selected mobile(s)"
              onCheckItemsChanged={onCheckItemsChanged}/>
        </div>
        <div className="float-left" style={{float: "left", width: 400}}>
          <h4>Check all + CheckBox (2 level) support copy/paste</h4>
          <DropdownCheckList
              dropdownName="mobile-control-select"
              dataSource={[{"MobileId":1,"MobileName":"Apple","ParentId":0},{"MobileId":9,"MobileName":"SamSung","ParentId":0},{"MobileId":11,"MobileName":"Nokia","ParentId":0},{"MobileId":98,"MobileName":"Oppo","ParentId":0},{"MobileId":999,"MobileName":"Huawei","ParentId":0},{"MobileId":14,"MobileName":"Iphone5","ParentId":1},{"MobileId":15,"MobileName":"Iphone6s","ParentId":1},{"MobileId":17,"MobileName":"Iphone6s plus","ParentId":1},{"MobileId":19,"MobileName":"Iphone 7","ParentId":1},{"MobileId":20,"MobileName":"Iphone 8","ParentId":1},{"MobileId":23,"MobileName":"Iphone x","ParentId":1},{"MobileId":24,"MobileName":"Sam sung s9","ParentId":9},{"MobileId":31,"MobileName":"Sam sung j7 pro","ParentId":9},{"MobileId":34,"MobileName":"Nokia 1280","ParentId":11},{"MobileId":35,"MobileName":"Nokia 3310","ParentId":11},{"MobileId":36,"MobileName":"Nokia 7 plus","ParentId":11},{"MobileId":16,"MobileName":"Oppo f3","ParentId":98},{"MobileId":22,"MobileName":"Oppo f5","ParentId":98},{"MobileId":26,"MobileName":"Oppo f7","ParentId":98},{"MobileId":25,"MobileName":"Huawei nova 3e","ParentId":999},{"MobileId":30,"MobileName":"Huawei nova 2i","ParentId":999}]}
              idName = "MobileId"
              parentIdName = "ParentId"
              displayName = "MobileName"
              height = {370}
              width = {350}
              expandAll = {true}
              selectAll = {false}
              selectAllText = "All mobiles"
              multipleSelectedText = "{0} selected mobile(s)"
              onCheckItemsChanged={onCheckItemsChanged}
              isAbleToCopyPaste = {true}/>
        </div>
        <div className="float-left" style={{float: "left", width: 400}}>
        <h4>Radio by Group</h4>
                <DropdownCheckList
                    dropdownName="mobile-filter"
                    dataSource={[{"MobileId":1,"MobileName":"Apple","ParentId":0},{"MobileId":9,"MobileName":"SamSung","ParentId":0},{"MobileId":11,"MobileName":"Nokia","ParentId":0},{"MobileId":98,"MobileName":"Oppo","ParentId":0},{"MobileId":999,"MobileName":"Huawei","ParentId":0},{"MobileId":14,"MobileName":"Iphone5","ParentId":1},{"MobileId":15,"MobileName":"Iphone6s","ParentId":1},{"MobileId":17,"MobileName":"Iphone6s plus","ParentId":1},{"MobileId":19,"MobileName":"Iphone 7","ParentId":1},{"MobileId":20,"MobileName":"Iphone 8","ParentId":1},{"MobileId":23,"MobileName":"Iphone x","ParentId":1},{"MobileId":24,"MobileName":"Sam sung s9","ParentId":9},{"MobileId":31,"MobileName":"Sam sung j7 pro","ParentId":9},{"MobileId":34,"MobileName":"Nokia 1280","ParentId":11},{"MobileId":35,"MobileName":"Nokia 3310","ParentId":11},{"MobileId":36,"MobileName":"Nokia 7 plus","ParentId":11},{"MobileId":16,"MobileName":"Oppo f3","ParentId":98},{"MobileId":22,"MobileName":"Oppo f5","ParentId":98},{"MobileId":26,"MobileName":"Oppo f7","ParentId":98},{"MobileId":25,"MobileName":"Huawei nova 3e","ParentId":999},{"MobileId":30,"MobileName":"Huawei nova 2i","ParentId":999}]}
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
                    onCheckItemsChanged={onCheckItemsChanged}/>
        </div>
        <div className="float-left" style={{float: "left", width: 400}}>
          <h4>Radio have multiple checkbox</h4>
          <DropdownCheckList
              dropdownName="ddl-brands-type"
              dataSource={[{"BrandTypeId":1,"BrandTypeName":"Iphone","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Iphone 5"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6 plus"},{"BrandTypeId":0,"BrandTypeName":"Iphone 7"}]},{"BrandTypeId":3,"BrandTypeName":"SamSung","BrandTypeInfos":[]},{"BrandTypeId":4,"BrandTypeName":"Nokia","BrandTypeInfos":[]},{"BrandTypeId":5,"BrandTypeName":"Oppo","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Oppo f3"}]},{"BrandTypeId":6,"BrandTypeName":"Huawei","BrandTypeInfos":[]}]}
              selectAll = {false}
              expandAll = {true}
              childName = 'BrandTypeInfos'
              displayName = 'BrandTypeName'
              noSelectedText = 'Please Select One'
              showFilter = {false}
              showRoot = {false}
              singleSelect = {1}
              onCheckItemsChanged={onCheckItemsChanged}/>
      </div> 
      <div className="float-left" style={{float: "left", width: 400}}>
          <h4>Radio have multiple checkbox support copy/paste</h4>
          <DropdownCheckList
              dropdownName="ddl-brands-type"
              dataSource={[{"BrandTypeId":1,"BrandTypeName":"Iphone","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Iphone 5"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6"},{"BrandTypeId":0,"BrandTypeName":"Iphone 6 plus"},{"BrandTypeId":0,"BrandTypeName":"Iphone 7"}]},{"BrandTypeId":3,"BrandTypeName":"SamSung","BrandTypeInfos":[]},{"BrandTypeId":4,"BrandTypeName":"Nokia","BrandTypeInfos":[]},{"BrandTypeId":5,"BrandTypeName":"Oppo","BrandTypeInfos":[{"BrandTypeId":0,"BrandTypeName":"Oppo f3"}]},{"BrandTypeId":6,"BrandTypeName":"Huawei","BrandTypeInfos":[]}]}
              selectAll = {false}
              expandAll = {true}
              childName = 'BrandTypeInfos'
              displayName = 'BrandTypeName'
              noSelectedText = 'Please Select One'
              showRoot = {false}
              singleSelect = {1}
              onCheckItemsChanged={onCheckItemsChanged}
              isAbleToCopyPaste={true}/>
      </div> 
    </div>
        
  );
}

export default App;

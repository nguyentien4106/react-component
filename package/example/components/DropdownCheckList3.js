import React, { Component } from 'react'

import { DropdownCheckList } from '../../src/index'

export default class DropdownCheckList3 extends Component {
    onCheckItemsChanged(items) {
        console.log(items);
    }

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
}

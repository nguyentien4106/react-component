import * as Constants from './Constants';

export function addRootNode(normalizedData, flatItems, options) {
    const { rootText, selectAll, singleSelect } = options;

    let root = {
        text: rootText,
        items: normalizedData,
        expanded: true,
        level: 0,
        checked: selectAll && !singleSelect,
        data: [],
        ADNCode: "0.1",
        isDisplay: true
    };
    root[Constants.DATA_KEYNAME] = 0;
    flatItems[0] = root;
    return [root];
}

export function autoChecks(data) {
    let isChecked = true;

    for (let dataItem of data) {
        if (dataItem.items.length) {
            dataItem.checked = autoChecks(dataItem.items);
        }

        isChecked = isChecked && dataItem.checked;
    }

    return isChecked;
}

export function findMaxlevel(items) {
    let max = 0;
    for (let item of items) {
        if (item && max < item.level) {
            max = item.level;
        }
    }

    return max;
}

export function getSelectedText(options, maxLevel, flatItems) {
    const { selectAllText, noSelectedText, multipleSelectedText, singleSelect } = options;

    let text = "";
    let checkInfo = getCheckInfo(singleSelect, flatItems);
    let selectedItems = checkInfo.selectedItems;
    let selectedCount = selectedItems.length;
    let isSelectAll = checkInfo.total === selectedCount;

    if (isSelectAll) {
        text = selectAllText;
    } else if (!selectedCount) {
        text = noSelectedText;
    } else {
        // only count item at specific level
        selectedItems = selectedItems.filter((item) => {
            if (item.level >= maxLevel)
                return item;
        });
        selectedCount = selectedItems.length;

        // show item text if less than 3 item selected
        text = (selectedCount < 3)
            ? selectedItems.map((item) => { return item.text; }).join(", ")
            : multipleSelectedText.replace(/\{0\}/g, selectedCount);
    }

    return text;
}

export function getCheckInfo(singleSelect, flatItems) {
    let selectedItems = [];

    for (let item of flatItems) {
        if (item && item.checked && (!singleSelect || singleSelect === item.level) && item.level != 0) {
            selectedItems.push(item);

            if (singleSelect) {
                break;
            }
        }
    }

    return {
        total: flatItems.length - 1,
        selectedItems: selectedItems
    };
}

export function getItemByKey(dataKeyValue, flatItems) {
    return flatItems.find((item) => item && item[Constants.DATA_KEYNAME] == dataKeyValue);
}

export function filter(keyword, flatItems, { isAbleToCopyPaste, singleSelect }){
    if (keyword) {
        setDisplayItems(false, flatItems);
        const singleKeywordLower = keyword.toLowerCase();

        const filterByKeyWord = (key) => {
            let itemsFiltered = flatItems.filter(item => item && item.text.toLowerCase().includes(key));
    
            itemsFiltered.forEach(item => {
                item.isDisplay = true;
    
                if (isAbleToCopyPaste && item.text.toLowerCase() === key && !item.checked) {
                    singleSelect ? toggleSingleChangeStatus(item, true, flatItems, singleSelect) : toggleChangeStatus(item, true, flatItems);
                }
    
                setDisplayItems(true, getParentListItemsByKey(item[Constants.DATA_KEYNAME], flatItems));
            });
    
        }

        if (!isAbleToCopyPaste) {
            filterByKeyWord(singleKeywordLower);
            return;
        }

        const multiKeywordLower = singleKeywordLower.split(",").map(item => item.trim());

        if (singleSelect) {
            multiKeywordLower.reverse();
        }
        
        multiKeywordLower.forEach(filterByKeyWord);
    } else {
        setDisplayItems(true, flatItems);
    }
}

//#region change status for radio button (single select)
export function toggleSingleChangeStatus(itemData, checkedStatus, flatItems, singleSelect){
    //Step 1: uncheck prev checked item (force value false)
    let prevCheckedItem = getCheckInfo(singleSelect, flatItems).selectedItems[0];
    let currItemIschildrenOfPrevItem = prevCheckedItem && itemData.ADNCode.indexOf(prevCheckedItem.ADNCode + ".") != -1;
    if (checkedStatus && prevCheckedItem && !currItemIschildrenOfPrevItem) {
        setSingleCheck(prevCheckedItem, false, flatItems);
    }

    /* Step 2.1: Equals level ->  setSingleCheck (force value true) */
    if (itemData.level === singleSelect) {
        setSingleCheck(itemData, true, flatItems);
    } /* Step 2.2: Is not Equals level -> itself, its childrens, its parents */
    else {
        itemData.checked = checkedStatus;
        setChildrenCheckedStatus(itemData, checkedStatus, flatItems);
        setParentSingleCheckedStatus(itemData, flatItems);
    }
}

function setSingleCheck(itemData, checkedStatus, flatItems){
    itemData.checked = checkedStatus;
    setChildrenCheckedStatus(itemData, checkedStatus, flatItems);
}

function setChildrenCheckedStatus(itemData, checkedStatus, flatItems){
    let parent = flatItems.find((item) => item && item[Constants.DATA_KEYNAME] == itemData[Constants.DATA_KEYNAME]);
    let childItems = flatItems.filter((item) => item && item.ADNCode.indexOf(parent.ADNCode + ".") != -1);

    for (let item of childItems) {
        item.checked = checkedStatus;
    }
}
    
function setParentSingleCheckedStatus(itemData, flatItems){
    //Step 1: get all parents
    let parentListItems = getParentListItemsByKey(itemData[Constants.DATA_KEYNAME], flatItems);

    //Step 2: loop, (every parent, check exists at least one item checked => toggle checked status)
    while (parentListItems.length > 0) {
        let parentElement = parentListItems.shift();
        let checkedItem = flatItems.find((item) => item && item.ADNCode.indexOf(parentElement.ADNCode + ".") != -1 && item.checked);

        parentElement.checked = !!checkedItem;

        if (checkedItem) {
            break;
        }
    }

    for (let item of parentListItems) {
        item.checked = true;
    }
}
//#endregion change status for radio button (single select)

//#region change status for check box (multiple select)
export function toggleChangeStatus(itemData, checkedStatus, flatItems){
    itemData.checked = checkedStatus;
    setChildrenCheckedStatus(itemData, checkedStatus, flatItems);
    setParentCheckedStatus(itemData, checkedStatus, flatItems);
}

function setParentCheckedStatus(itemData, checkedStatus, flatItems){
    //Step 1: get all parents
    let parentListItems = getParentListItemsByKey(itemData[Constants.DATA_KEYNAME], flatItems);

    //Step 2: loop, (every parent, check exists at least one item checked => toggle checked status)
    while (checkedStatus && parentListItems.length > 0) {
        let parentElement = parentListItems.shift();
        let nonCheckedItem = flatItems.find((item) => item && item.ADNCode.indexOf(parentElement.ADNCode + ".") != -1 && !item.checked);

        if (nonCheckedItem) {
            checkedStatus = false;
        } else {
            parentElement.checked = checkedStatus;
        }
    }

    for (let item of parentListItems) {
        item.checked = false;
    }
}
//#endregion change status for check box (multiple select)

function getParentListItemsByKey(key, flatItems){
    let childItem = flatItems.find((item) => item && item[Constants.DATA_KEYNAME] == key);
    let lastDotPosition = childItem.ADNCode.lastIndexOf(".");
    let ADNCodeToFind = childItem.ADNCode.substring(0, lastDotPosition);
    let existsAtLeastOneParent = true;

    let parentListItems = [];
    while (existsAtLeastOneParent) {
        let parent = flatItems.find((item) => item && item.ADNCode == ADNCodeToFind);
        if (parent) {
            parentListItems.push(parent);
            lastDotPosition = parent.ADNCode.lastIndexOf(".");
            ADNCodeToFind = parent.ADNCode.substring(0, lastDotPosition);
        } else {
            existsAtLeastOneParent = false;
        }
    }
    return parentListItems;
}

function setDisplayItems(isDisplay, items){
    for (let item of items) {
        if(item)
            item.isDisplay = isDisplay;
    }
}
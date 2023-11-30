import * as Constants from './Constants';

export function normalizeData(dataSource, flatItems, options, level = 1, parentADNCode = "0.1") {
    const { displayName, checkedName, selectAll, expandedName, expandAll, childName } = options;

    let collection = [];

    for (let itemData of dataSource) {
        let newItemData = {
            items: [],
            data: itemData,
            level: level,
            text: itemData[displayName],
            checked: (itemData[checkedName] || selectAll),
            expanded: (itemData[expandedName] || expandAll),
            ADNCode: parentADNCode + "." + flatItems.length,
            isDisplay: true
        };

        // generate key
        newItemData[Constants.DATA_KEYNAME] = itemData[Constants.DATA_KEYNAME] = flatItems.length;

        flatItems.push(newItemData);
        collection.push(newItemData);

        if (itemData[childName]) {
            newItemData.items = normalizeData(itemData[childName], flatItems, options, level + 1, newItemData.ADNCode);
        }
    }

    return collection;
}
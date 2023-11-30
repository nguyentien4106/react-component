import * as Constants from './Constants';

export function buildHierarchyCollection(dataSource, flatItems, options) {
    const { parentIdName, idName, displayName, checkedName, selectAll, expandedName, expandAll } = options;

    let collection = [];
    let hashtable = {};
    let newItemData, id;
    let resolveParentMissing = function (item) {
        if (item.data[parentIdName] === id) {
            newItemData.items.push(item);
        }
    };

    let parentADNCode = "0.1";

    for (let itemData of dataSource) {
        id = itemData[idName];

        let parentId = itemData[parentIdName];
        newItemData = {
            items: [],
            data: itemData,
            text: itemData[displayName],
            checked: (itemData[checkedName] || selectAll),
            expanded: (itemData[expandedName] || expandAll),
            ADNCode: parentADNCode + "." + flatItems.length,
            isDisplay: true
        };

        hashtable[id] = newItemData;

        // generate key
        newItemData[Constants.DATA_KEYNAME] = itemData[Constants.DATA_KEYNAME] = flatItems.length;
        flatItems.push(newItemData);

        // if there is no parent then add to collection as root item
        if (!parentId) {
            collection.push(newItemData);
        }
            // if parent is found, then add to parent's items
        else if (hashtable[parentId]) {
            let parent = hashtable[parentId];
            newItemData.ADNCode = parent.ADNCode + "." + newItemData[Constants.DATA_KEYNAME];
            parent.items.push(newItemData);
        }

        // resolve parent missing
        for(let item in hashtable) {
            resolveParentMissing(hashtable[item]);
        }
    }

    resolveItemLevel(collection, 1);
    return collection;
}

function resolveItemLevel(items, level) {
    items.map((item, index) => {
        item.level = level;
        resolveItemLevel(item.items, level + 1);
    });
}
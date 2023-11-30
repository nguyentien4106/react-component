﻿import PropTypes from 'prop-types';

export const DropdownCheckListPropTypes = {
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
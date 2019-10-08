import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { makeSelectCategories } from 'containers/App/selectors';
import {
  requestIncidents,
  incidentSelected as onIncidentSelected,
} from 'signals/incident-management/containers/IncidentOverviewPage/actions';
import {
  makeSelectEditFilter,
  makeSelectDataLists,
} from 'signals/incident-management/selectors';
import FilterForm from 'signals/incident-management/components/FilterForm';
import * as types from 'shared/types';

import {
  applyFilter,
  filterEditCanceled,
  filterSaved as onSaveFilter,
  filterUpdated as onUpdateFilter,
  filterCleared as onClearFilter,
} from 'signals/incident-management/actions';

export const FilterContainerComponent = ({
  categories,
  dataLists,
  onApplyFilter,
  onCancel,
  onFilterEditCancel,
  onSubmit,
  onRequestIncidents,
  ...rest
}) => {
  const onFormSubmit = (event, filter) => {
    onApplyFilter(filter);
    onRequestIncidents({ filter });
    onSubmit(event);
  };

  const onEditCancel = () => {
    onFilterEditCancel();
    onCancel();
  };

  return (
    <FilterForm
      {...rest}
      onCancel={onEditCancel}
      categories={categories}
      dataLists={dataLists}
      onSubmit={onFormSubmit}
    />
  );
};

FilterContainerComponent.propTypes = {
  categories: types.categoriesType.isRequired,
  dataLists: types.dataListsType.isRequired,
  filter: types.filterType.isRequired,
  onApplyFilter: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
  onFilterEditCancel: PropTypes.func.isRequired,
  onRequestIncidents: PropTypes.func.isRequired,
  onSaveFilter: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUpdateFilter: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    categories: makeSelectCategories(),
    dataLists: makeSelectDataLists,
    filter: makeSelectEditFilter,
  });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onApplyFilter: applyFilter,
      onClearFilter,
      onFilterEditCancel: filterEditCanceled,
      onIncidentSelected,
      onRequestIncidents: requestIncidents,
      onSaveFilter,
      onUpdateFilter,
    },
    dispatch,
  );

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FilterContainerComponent);

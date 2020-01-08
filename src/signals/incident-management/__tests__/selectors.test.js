import { fromJS } from 'immutable';
import * as definitions from 'signals/incident-management/definitions';
import {
  makeSelectFilterParams,
  makeSelectDataLists,
  makeSelectAllFilters,
  makeSelectActiveFilter,
  makeSelectEditFilter,
  makeSelectPage,
  makeSelectOrdering,
} from '../selectors';
import { FILTER_PAGE_SIZE } from '../constants';

import { initialState } from '../reducer';

const filters = [
  {
    _links: {
      self: {
        href: 'https://signals/v1/private/me/filters/219',
      },
    },
    id: 219,
    options: {
      maincategory_slug: ['afval'],
    },
    name: 'Foo Bar',
  },
  {
    _links: {
      self: {
        href: 'https://signals/v1/private/me/filters/220',
      },
    },
    id: 220,
    options: {
      stadsdeel: ['B', 'E'],
    },
    name: 'Foo Bar',
  },
  {
    _links: {
      self: {
        href: 'https://signals/v1/private/me/filters/221',
      },
    },
    id: 221,
    options: {
      status: ['m'],
    },
    name: 'Foo Bar',
  },
];

describe('signals/incident-management/selectors', () => {
  it('should select data lists', () => {
    const dataLists = makeSelectDataLists();
    expect(dataLists).toEqual({
      priority: definitions.priorityList,
      stadsdeel: definitions.stadsdeelList,
      status: definitions.statusList,
      feedback: definitions.feedbackList,
      source: definitions.sourceList,
    });
  });

  it('should select all filters', () => {
    const state = fromJS({
      incidentManagement: { ...initialState.toJS(), filters },
    });
    const allFilters = makeSelectAllFilters(state);

    expect(allFilters.length).toEqual(filters.length);
    expect(allFilters[0].options.maincategory_slug).not.toEqual(
      filters[0].options.maincategory_slug,
    );
  });

  it('should select active filter', () => {
    const emptState = fromJS({
      incidentManagement: { ...initialState.toJS() },
    });
    expect(makeSelectActiveFilter(emptState)).toEqual(initialState.toJS().activeFilter);

    const state = fromJS({
      incidentManagement: { ...initialState.toJS(), activeFilter: filters[0] },
    });

    expect(makeSelectActiveFilter(state).id).toEqual(filters[0].id);
  });

  it('should select edit filter', () => {
    const emptState = fromJS({
      incidentManagement: { ...initialState.toJS() },
    });
    expect(makeSelectEditFilter(emptState)).toEqual(initialState.toJS().editFilter);

    const state = fromJS({
      incidentManagement: { ...initialState.toJS(), editFilter: filters[2] },
    });

    expect(makeSelectEditFilter(state).id).toEqual(filters[2].id);
  });

  it('should select page', () => {
    const emptState = fromJS({
      incidentManagement: { ...initialState.toJS() },
    });
    expect(makeSelectPage(emptState)).toEqual(initialState.toJS().page);

    const state = fromJS({
      incidentManagement: { ...initialState.toJS(), page: 100 },
    });

    expect(makeSelectPage(state)).toEqual(100);
  });

  it('should select ordering', () => {
    const emptState = fromJS({
      incidentManagement: { ...initialState.toJS() },
    });
    expect(makeSelectOrdering(emptState)).toEqual(initialState.toJS().ordering);

    const state = fromJS({
      incidentManagement: { ...initialState.toJS(), ordering: 'some-ordering-type' },
    });

    expect(makeSelectOrdering(state)).toEqual('some-ordering-type');
  });

  it('should select incidents', () => {

  });

  describe('makeSelectFilterParams', () => {
    it('should select filter params', () => {
      const emptyState = fromJS({
        incidentManagement: { ...initialState.toJS(), editFilter: filters[1], searchQuery: '' },
      });

      expect(makeSelectFilterParams(emptyState)).toEqual({
        ordering: '-created_at',
        page: 1,
        page_size: FILTER_PAGE_SIZE,
      });

      const state = fromJS({
        incidentManagement: { ...initialState.toJS(), activeFilter: filters[1] },
      });

      expect(makeSelectFilterParams(state)).toEqual({
        ordering: '-created_at',
        page: 1,
        stadsdeel: ['B', 'E'],
        page_size: FILTER_PAGE_SIZE,
      });
    });

    it('should reformat days_open', () => {
      const state1 = fromJS({
        incidentManagement: { ...initialState.toJS(), ordering: 'days_open' },
      });

      expect(makeSelectFilterParams(state1)).toEqual({
        ordering: '-created_at',
        page: 1,
        page_size: FILTER_PAGE_SIZE,
      });

      const state2 = fromJS({
        incidentManagement: { ...initialState.toJS(), ordering: '-days_open' },
      });

      expect(makeSelectFilterParams(state2)).toEqual({
        ordering: 'created_at',
        page: 1,
        page_size: FILTER_PAGE_SIZE,
      });
    });
  });
});

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import reducer from './reducer';
import Item from './Item';
import {
  explosiveStatusChange,
  melleStatusChange,
  gunsStatusChange,
  throwingStatusChange,
} from './actions';
import {
  makeSelectExplosiveStatus,
  makeSelectMelleStatus,
  makeSelectThrowingStatus,
  makeSelectGunsStatus,
} from './selectors';

const key = 'durability';

export function DurabilityTable({
  currentItem,
  explosiveStatus,
  gunsStatus,
  melleStatus,
  throwingStatus,
  onCurrentExplosiveStatusChanged,
  onCurrentGunsStatusChanged,
  onCurrentMelleStatusChanged,
  onCurrentThrowingStatusChanged,
}) {
  useInjectReducer({ key, reducer });
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            <button
              type="button"
              onClick={() => onCurrentExplosiveStatusChanged()}
            >
              Explosive
            </button>
          </td>
          <td>
            <button type="button" onClick={() => onCurrentGunsStatusChanged()}>
              Guns
            </button>
          </td>
          <td>
            <button type="button" onClick={() => onCurrentMelleStatusChanged()}>
              Melle
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={() => onCurrentThrowingStatusChanged()}
            >
              Throwing Attacks
            </button>
          </td>
        </tr>
        <tr className="center">
          <th>Tool</th>
          <th>Quantity</th>
          <th>Time</th>
          <th>Fuel</th>
          <th>Sulfur</th>
        </tr>
        {explosiveStatus && <Item currentItem={currentItem.explosive} />}
        {gunsStatus && <Item currentItem={currentItem.guns} />}
        {melleStatus && <Item currentItem={currentItem.melle} />}
        {throwingStatus && <Item currentItem={currentItem.throwing} />}
      </tbody>
    </Table>
  );
}

DurabilityTable.propTypes = {
  currentItem: PropTypes.object,
  explosiveStatus: PropTypes.bool,
  gunsStatus: PropTypes.bool,
  melleStatus: PropTypes.bool,
  throwingStatus: PropTypes.bool,
  onCurrentThrowingStatusChanged: PropTypes.func,
  onCurrentGunsStatusChanged: PropTypes.func,
  onCurrentMelleStatusChanged: PropTypes.func,
  onCurrentExplosiveStatusChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  explosiveStatus: makeSelectExplosiveStatus(),
  gunsStatus: makeSelectGunsStatus(),
  throwingStatus: makeSelectThrowingStatus(),
  melleStatus: makeSelectMelleStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentExplosiveStatusChanged: explosiveStatus =>
      dispatch(explosiveStatusChange(explosiveStatus)),
    onCurrentGunsStatusChanged: gunsStatus =>
      dispatch(gunsStatusChange(gunsStatus)),
    onCurrentMelleStatusChanged: melleStatus =>
      dispatch(melleStatusChange(melleStatus)),
    onCurrentThrowingStatusChanged: throwingStatus =>
      dispatch(throwingStatusChange(throwingStatus)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DurabilityTable);

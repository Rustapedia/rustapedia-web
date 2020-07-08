import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import Table from 'components/Table/Table';
import Button from 'components/Button';
import reducer from './reducer';
import Item from './Item';
import {
  explosiveStatusChange,
  melleStatusChange,
  gunsStatusChange,
  throwingStatusChange,
  samStatusChange,
} from './actions';
import {
  makeSelectExplosiveStatus,
  makeSelectMelleStatus,
  makeSelectThrowingStatus,
  makeSelectGunsStatus,
  makeSelectSamStatus,
} from './selectors';

const key = 'durability';

export function DurabilityTable({
  currentItem,
  explosiveStatus,
  gunsStatus,
  melleStatus,
  throwingStatus,
  samStatus,
  onCurrentExplosiveStatusChanged,
  onCurrentGunsStatusChanged,
  onCurrentMelleStatusChanged,
  onCurrentThrowingStatusChanged,
  onCurrentSamStatusChanged,
}) {
  useInjectReducer({ key, reducer });
  return (
    <Table>
      <tbody>
        <tr>
          <td className="durability">
            {currentItem.explosive.length > 0 && (
              <Button
                type="button"
                className={explosiveStatus ? 'durability white' : 'durability'}
                onClick={() => onCurrentExplosiveStatusChanged()}
              >
                Explosive
              </Button>
            )}
            {currentItem.guns.length > 0 && (
              <Button
                type="button"
                className={gunsStatus ? 'durability white' : 'durability'}
                onClick={() => onCurrentGunsStatusChanged()}
              >
                Guns
              </Button>
            )}
            {currentItem.melle.length > 0 && (
              <Button
                type="button"
                className={melleStatus ? 'durability white' : 'durability'}
                onClick={() => onCurrentMelleStatusChanged()}
              >
                Melle
              </Button>
            )}
            {currentItem.throwing.length > 0 && (
              <Button
                type="button"
                className={throwingStatus ? 'durability white' : 'durability'}
                onClick={() => onCurrentThrowingStatusChanged()}
              >
                Throwing Attacks
              </Button>
            )}
            {currentItem.sam.length > 0 && (
              <Button
                type="button"
                className={samStatus ? 'durability white' : 'durability'}
                onClick={() => onCurrentSamStatusChanged()}
              >
                SAM Site
              </Button>
            )}
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
        {samStatus && <Item currentItem={currentItem.sam} />}
      </tbody>
    </Table>
  );
}

DurabilityTable.propTypes = {
  currentItem: PropTypes.object,
  explosiveStatus: PropTypes.bool,
  gunsStatus: PropTypes.bool,
  samStatus: PropTypes.bool,
  melleStatus: PropTypes.bool,
  throwingStatus: PropTypes.bool,
  onCurrentThrowingStatusChanged: PropTypes.func,
  onCurrentGunsStatusChanged: PropTypes.func,
  onCurrentMelleStatusChanged: PropTypes.func,
  onCurrentExplosiveStatusChanged: PropTypes.func,
  onCurrentSamStatusChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  explosiveStatus: makeSelectExplosiveStatus(),
  gunsStatus: makeSelectGunsStatus(),
  throwingStatus: makeSelectThrowingStatus(),
  melleStatus: makeSelectMelleStatus(),
  samStatus: makeSelectSamStatus(),
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
    onCurrentSamStatusChanged: samStatus =>
      dispatch(samStatusChange(samStatus)),
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

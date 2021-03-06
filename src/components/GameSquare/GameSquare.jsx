import { observer } from 'mobx-react-lite';
import { computed } from 'mobx';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Square = observer(({ getGame, x, y, onClick }) => {
  const isDisabled = computed(() => getGame().squareIsDisabled(x, y)).get();
  return (
    <rect
      x={(x + 1) * 40}
      y={(y + 1) * 40}
      height="40"
      width="40"
      onClick={() => !isDisabled && onClick()}
      className={clsx('square', isDisabled && 'disabled')}
    />
  );
});

Square.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  getGame: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

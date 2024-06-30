import { FilterStateType } from '../todoList/TodoList.tsx';
import { BaseButton } from '../../../../../shared';

const setColor = (filterState: FilterStateType, state: FilterStateType) => {
  return filterState === state;
};

interface Props {
  setFilterState: (filterState: FilterStateType) => void;
  filterState: FilterStateType;
}

const listButton: FilterStateType[] = ['All', 'Active', 'Closed'];

export const FilterBlock = (props: Props) => {
  const { filterState, setFilterState } = props;
  return (
    <div>
      {listButton.map((btn) => (
        <BaseButton
          variant={setColor(filterState, btn) ? 'outline' : 'primary'}
          onClick={() => setFilterState(btn)}
        >
          {btn}
        </BaseButton>
      ))}
    </div>
  );
};

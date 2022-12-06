import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const filterDropdownYear = (event) => {
        props.onFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter By Year</label>
                <select value={ props.selected } onChange={ filterDropdownYear }>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
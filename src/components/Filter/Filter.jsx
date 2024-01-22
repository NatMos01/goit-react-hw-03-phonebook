import { Component } from 'react';
import css from './Filter.module.css';
import { nanoid } from 'nanoid';

export class Filter extends Component {
  render() {
    const { value, onChangeFilter } = this.props;
    return (
      <label htmlFor={nanoid()} className={css.filterLabel}>
        Find contacts by name
        <input
          value={value}
          className={css.filterInput}
          type="text"
          placeholder="find contact"
          onChange={onChangeFilter}
        />
      </label>
    );
  }
}
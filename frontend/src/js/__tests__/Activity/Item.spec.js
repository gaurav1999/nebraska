import {render} from '@testing-library/react';
import React from 'react';
import Item from '../../components/Activity/Item.react';

describe('Activity Item', () => {
  it('should render acitivity item correctly', () => {
    const minProps = {
      entry: {
        application_name: 'ABC',
        channel_name: 'beta',
        class: 6,
        created_ts: '2020-05-13T20:26:03.837688+05:30',
        group_name: 'DEF',
        instance_id: null,
        severity: 2,
        version: '0.0.0'
      }
    };
    const {getByText} = render(<Item {...minProps}/>);
    expect(getByText(minProps.entry.application_name)).toBeInTheDocument();
  });
});

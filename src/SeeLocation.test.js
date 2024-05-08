import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SeeLocation from './SeeLocation';

const location = {
    id: 2,
    name: "test name",
    dimension: "a dimension",
    type: "foggy",
    residents: [1, 2]
}

test('shows more details on character', () => {
    render(<SeeLocation location={location} />);
    const openMoreDetailsBtn = screen.getByTestId("moreDetails");
    fireEvent.click(openMoreDetailsBtn);
    const modal = screen.getByTestId("modal");
    const style = window.getComputedStyle(modal)
    expect(style.display).toBe("block")
});
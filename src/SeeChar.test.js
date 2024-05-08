import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SeeChar from './SeeChar';

const char = {
    id: 2,
    image: "",
    name: "test name",
    species: "human",
    gender: "male",
    status: "alive",
    location: {
        name: "earth"
    }
}

test('shows more details on character', () => {
    render(<SeeChar char={char} />);
    const openMoreDetailsBtn = screen.getByTestId("moreDetails");
    fireEvent.click(openMoreDetailsBtn);
    const modal = screen.getByTestId("modal");
    const style = window.getComputedStyle(modal)
    expect(style.display).toBe("block")
});
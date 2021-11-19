import {render, screen} from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('Initial conditions', () =>{
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', {name: /confirm order/i});
    expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', ()=> {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    const confrimButton = screen.getByRole('button', {name: /confirm order/i});

    userEvent.click(checkbox);
    expect(confrimButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confrimButton).toBeDisabled();
});
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('order phases for happy path', async () => {
    //render app
    render(<App/>);

    //add icream scoops and toppings
    const vanillaInput = await screen.findByRole('spinbutton', {
        name: 'Vanilla',
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');

    const chocolateInput = await screen.findByRole('spinbutton', {
        name:'Chocolate',
    });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');

    const cherriesCheckbox = await screen.findByRole('checkbox', {
        name: 'Cherries',
    });
    userEvent.click(cherriesCheckbox);

    //find and click order button
    const orderSummaryButton = screen.getByRole('button', {
        name: /order sundae/i,
    });
    userEvent.click(orderSummaryButton);

    //check summary information based on order
    const summaryHeading = screen.getByRole('heading', {name: 'Order Summary'});
    expect(summaryHeading).toBeInTheDocument();
    
    const scoopsHeading = screen.getByRole('heading', {name: 'Scoops: $6.00'});
    expect(summaryHeading).toBeInTheDocument();
    //Lecture 78 1.12
    //accept terms and conditions and click button to confirm order

    //confirm order number on confirmation page

    //click "new order" button on confirmation page

    //check that scoops and toppings subtotals have been reset

    // do we need to await anything to avoid test errors?
})

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';
import List from './List.js';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const key = 12;
        const header = 'List Header';
        const cards = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'c', title: 'Third card', content: 'lorem ipsum' }
        ];
        const tree = renderer
          .create(<List 
            key={key}
            header={header} 
            cards={cards} 
            />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});

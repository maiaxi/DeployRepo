// ShoppingListLandingPage.tsx
import React from 'react';
import { ReactTogether } from 'react-together';
import { useStateTogether } from 'react-together';
import ShoppingList from './ShoppingList';

interface List {
  id: number;
  name: string;
}

interface ShoppingListLandingPageProps {
  sessionName: string;
  sessionPassword: string;
}

const ShoppingListLandingPage: React.FC<ShoppingListLandingPageProps> = ({ sessionName, sessionPassword }) => {
  const [lists, setLists] = useStateTogether<List[]>('sharedLists', []);
  const [newListName, setNewListName] = React.useState('');

  const addList = () => {
    if (newListName.trim() !== '') {
      const newList: List = {
        id: Date.now(),
        name: newListName,
      };
      setLists([...lists, newList]);
      setNewListName('');
    }
  };

  const deleteList = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <ReactTogether sessionParams={{ appId: 'dev.reacttogether.neeti1',
                                    apiKey: '2XpVVAOQynrrQDVb1hAxPOVptIf3Lsb747hRcRSRn4',
                                    name: sessionName, 
                                    password: sessionPassword }}>
      <div>
        <h1>Shopping List</h1>
        <h1>{sessionName}{sessionPassword}</h1>
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="Enter list name"
        />
        <button onClick={addList}>Add List</button>
        <div>
          {lists.map((list) => (
            <div key={list.id}>
              <ShoppingList id={list.id} name={list.name} onDelete={() => deleteList(list.id)} />
            </div>
          ))}
        </div>
      </div>
    </ReactTogether>
  );
};

export default ShoppingListLandingPage;

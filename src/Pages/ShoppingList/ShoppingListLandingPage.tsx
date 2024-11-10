import React, { useEffect, useState } from 'react';
import { ReactTogether, useStateTogether } from 'react-together';
import ShoppingList from './ShoppingList';
import styles from '../../styles/ShoppingList/ShoppingListLandingPage.module.scss'; // Import the SCSS module

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
  const [newListName, setNewListName] = useState('');

  useEffect(() => {
    console.log("Initializing session with name:", sessionName, "and password:", sessionPassword);
  }, [sessionName, sessionPassword]);

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
    <ReactTogether sessionParams={{
      appId: 'dev.reacttogether.neeti1',
      apiKey: '2XpVVAOQynrrQDVb1hAxPOVptIf3Lsb747hRcRSRn4',
      name: sessionName,
      password: sessionPassword
    }}>
      <div className={styles['app-container']}>
        <nav className={styles['navbar']}>
          <h1>Our Shopping List</h1>
        </nav>

        <div className={styles['create-list-section']}>
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Enter list name"
            className={styles['input']}
          />
          <button onClick={addList} className={`${styles['roundedButton']} p-button-text p-button-sm`}>
            Add List
          </button>
        </div>

        <div className={styles['lists-container']}>
          {lists.map((list) => (
            <div key={list.id} className={styles['list-card']}>
              <ShoppingList id={list.id} name={list.name} onDelete={() => deleteList(list.id)} />
            </div>
          ))}
        </div>
      </div>
    </ReactTogether>
  );
};

export default ShoppingListLandingPage;

import { useEffect, useState } from 'react';
import Card from './components/card';
import { fetchData, postData, deleteData } from './api/apiClient';
import styles from './products.module.scss';

const Products: React.FC = () => {
    const [cards, setCards] = useState<any[]>([]);
    const [newCard, setNewCard] = useState({ title: '', price: 0, image: '' });
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      fetchCards();
    }, [sortOrder, searchQuery]);
  
    const fetchCards = async () => {
      try {
        const data = await fetchData('cards');
        
        const sortedData = data.sort((a, b) => {
          const priceA = a.price;
          const priceB = b.price;
          return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
        });
  
        const filteredData = sortedData.filter((card) => {
          const lowerCaseQuery = searchQuery.toLowerCase();
          return (
            card.title.toLowerCase().includes(lowerCaseQuery) ||
            String(card.price).includes(lowerCaseQuery) ||
            card.image.toLowerCase().includes(lowerCaseQuery)
          );
        });
  
        setCards(filteredData);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
  
    const handleAddCard = async () => {
      try {
        await postData('cards', newCard);
        setNewCard({ title: '', price: 0, image: '' });
        fetchCards();
      } catch (error) {
        console.error('Error adding card:', error);
      }
    };
  
    const handleDeleteCard = async (id: string) => {
      try {
        await deleteData('cards', id);
        fetchCards();
      } catch (error) {
        console.error('Error deleting card:', error);
      }
    };
  
    return (
        <div className={styles.productsPage}>
        <div className={styles.productsSectionWrapper}>
            <h1>Cards Page</h1>
            <div className={styles.productsOrderBar}>
            <div className={styles.productsSearchInput}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                </div>
                <div className={styles.productsSortButtons}>
                    <p>Order by price:</p>
                    <button onClick={() => setSortOrder('asc')}>Lowest first</button>
                    <button onClick={() => setSortOrder('desc')}>Highest first</button>
                </div>
            </div>
            <div className={styles.productsCardContainer}>
            {cards.map((card) => (
                <div key={card.id}  className={styles.productsCard}>
                <Card {...card} />
                <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
                </div>
            ))}
            </div>
            <div className={styles.addCardForm}>
            <h2>Add New Card</h2>
            <label>
                Title:
                <input
                type="text"
                value={newCard.title}
                onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                />
            </label>
            <label>
                Price:
                <input
                type="number"
                value={newCard.price}
                onChange={(e) => setNewCard({ ...newCard, price: parseFloat(e.target.value) })}
                />
            </label>
            <label>
                Image URL:
                <input
                type="text"
                value={newCard.image}
                onChange={(e) => setNewCard({ ...newCard, image: e.target.value })}
                />
            </label>
            <button onClick={handleAddCard}>Add Card</button>
            </div>
        </div>
      </div>
    );
  };
  

export default Products;
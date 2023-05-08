import CategoriesMenu from './categories-menu/categories-menu.component';

const App = () => {
    const categories = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1424&q=80"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://images.unsplash.com/photo-1517938889432-a2ac9241a486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2368&q=80"
        }
    ];

    return (
        <CategoriesMenu categories={categories} />
    );
}

export default App;

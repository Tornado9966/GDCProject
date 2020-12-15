export const menu = {
    title: 'Menu',
    dishOnPage: 5,
    path: '/menu',
    showMoreButton: 'Show More',
    showLessButton: 'Show Less',
    defaultFilter: 'All',
    filter: [
        {id: 1, name: 'All', icon: 'fas fa-utensils'},
        {id: 2, name: 'Brekfast', icon: 'fas fa-mug-hot'},
        {id: 3, name: 'Lunch', icon: 'fas fa-drumstick-bite'},
        {id: 4, name: 'Snacks', icon: 'fas fa-cookie'},
        {id: 5, name: 'Pizza', icon: 'fas fa-pizza-slice'}
    ],
    sorting: [
        {text: 'by Rating hight to low', value: 'rating'},
        {text: 'by Price min to max', value: 'minPrice'},
        {text: 'by Price max to min', value: 'maxPrice'},
        {text: 'by Name A to Z', value: 'nameASC'},
        {text: 'by Name Z to A', value: 'nameDESC'}

    ]
};

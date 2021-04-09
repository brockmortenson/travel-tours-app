SELECT * FROM cart_items
JOIN cart_items ON cart_items.cart_items_id = tour.tour_id
WHERE user_id = $1;

-- join cart items on tour
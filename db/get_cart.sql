-- SELECT cart.user_id, cart.cart_id, users.email FROM cart
-- JOIN users ON cart.user_id = users.user_id
-- WHERE user_id = $1;

SELECT * FROM cart_items
JOIN cart ON cart_items.cart_id = cart.cart_id
JOIN tour ON cart_items.tour_id = tour.tour_id
WHERE cart.cart_id = $2 AND cart.user_id = $1;

-- SELECT * FROM tour
-- JOIN cart_items ON tour.tour_id = cart_items.tour_id
-- WHERE tour_id = $1;

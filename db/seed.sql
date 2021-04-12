CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  hash VARCHAR(3000)
);

CREATE TABLE cart (
  cart_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE tour (
  tour_id SERIAL PRIMARY KEY,
  price NUMERIC,
  tour_tier INTEGER,
  title TEXT,
  summary TEXT,
  description TEXT
);

CREATE TABLE cart_items (
  cart_items_id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES cart(cart_id),
  tour_id INTEGER REFERENCES tour(tour_id)
);

-- insert into tour with tour info

INSERT INTO tour
(price, tour_tier, title, summary, description)
VALUES
(299, 1, 'Basic Tour of Paris', 'Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus ultrices purus, volutpat', 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.'),
(399, 2, 'Full Tour of Paris', 'Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus ultrices purus, volutpat.', 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.'),
(599, 3, 'All-Inclusive Tour of Paris', 'Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus ultrices purus, volutpat.', 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor quis nostrud. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.'),
(299, 1, 'Basic Tour of Italy', 'Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus ultrices purus, volutpat.', 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.'),
(449, 2, 'Full Tour of Italy', 'Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus ultrices purus, volutpat.', 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.'),
(649, 3, 'All-Inclusive Tour of Italy', 'Lorem ipsum dolor sit amet, consectetur elit. Nulla rhoncus ultrices purus, volutpat.', 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor quis nostrud. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.');

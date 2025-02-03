import { render, screen } from "@testing-library/react";
import WishList from "../components/WishList";
import { Provider } from "react-redux";
import store from "../redux/store";

test("renders wishlist component", () => {
  render(
    <Provider store={store}>
      <WishList />
    </Provider>
  );
  expect(screen.getByText(/Your Wishlist/i)).toBeInTheDocument();
});

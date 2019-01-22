import React from "react";
import CoinbaseCommerceButton from "./index";

test("it renders and matches its snapshot", () => {
  const wrapper = shallow(<CoinbaseCommerceButton checkoutId={"aaaa"} />);
  expect(
    wrapper
      .children()
      .first()
      .find("IFrame").length
  ).toEqual(0);
  expect(wrapper).toMatchSnapshot();
});

test("it opens up an iframe when its button is clicked", () => {
  const wrapper = shallow(<CoinbaseCommerceButton checkoutId={"aaaa"} />);
  expect(wrapper).toMatchSnapshot();
});

export const defaultFetch = async (query, variables = {}) => {
  try {
    const res = await fetch("http://localhost:1337/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        variables,
        query,
      }),
    });

    return res.json();
  } catch (err) {
    throw err;
  }
};

export const login = async (provider, product_order) => {
  const log = await fetch("http://localhost:1337/product-orders/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ provider, product_order }),
  }).then((res) => res.json());

  return log;
};

export const validate = async (
  provider,
  product_order,
  start,
  end,
  reception_zone,
  promise_date
) => {
  const res = await fetch("http://localhost:1337/schedules/isExist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider,
      product_order,
      start,
      end,
      reception_zone,
      promise_date,
    }),
  });
  return res.json();
};

export const getProviders = async (query) => {
  const res = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  return res.json();
};

export const getSchedules = async (query, variables = {}) => {
  const res = await fetch(`http://localhost:1337/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return res.json();
};

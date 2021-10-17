export const defaultFetch = async (query, variables = {}) => {
  try {
    const res = await fetch(process.env.SERVER_LOCAL + "/graphql", {
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
    console.log("LA")
    const log = await fetch(
      process.env.SERVER_LOCAL + "/product-orders/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ provider, product_order }),
      }
    ).then((res) => res.json());
      console.log({log})
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
  const res = await fetch(process.env.SERVER_LOCAL + "/schedules/isExist", {
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
  const res = await fetch(process.env.SERVER_LOCAL + "/graphql", {
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
  const res = await fetch(process.env.SERVER_LOCAL + `/graphql`, {
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

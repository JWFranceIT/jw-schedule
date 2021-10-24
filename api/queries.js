export const GET_ALL_SCHEDULES = `
{
    schedules{
        start,
        end,
        provider{
            name,
            vendor_reference,
            product_orders{
                number
            }
        },
        reception_zone{
            name,
            adresses
        }
        full_day
    }
}`;

export const GET_SCHEDULES_BY_ZONE = `
query($reception_zone: String!){
    schedules(where: {reception_zone: $reception_zone}){
        start
        end
        provider{
        id
        name
        vendor_reference
        reception_zones(where: {id: $reception_zone}){
            id
            name
            adresse
            start
            end
            entity
            }
        }
        product_order
        promise_date
        full_day
        }
  }`;

export const SAVE_BOOKING = `
mutation createSchedule($start: DateTime!, $end: DateTime!, $provider: ID!, $product_order: String!, $reception_zone: ID!, $promise_date: DateTime!) {
    createSchedule(input: {data: { start: $start, end: $end, provider: $provider, product_order: $product_order, reception_zone: $reception_zone, promise_date: $promise_date }}) {
        schedule{
            start
            end
            provider{id}
            product_order
            reception_zone{id}
            promise_date
        }
    }
}
`;

export const GET_SUPPLIERS_PO = `{
    providers{
        name,
        time
        product_orders{
            number
        }
    }
}`;

export const GET_LOGIN = `{
    productOrders(where: {number : $number}) {
        provider{name number}
    }
}`;

export const GET_PROVIDERS = `{
    providers{
        name
    }
}`;

export const GET_PLANNING_HOURS = `
query($reception_zone: ID!){
    receptionZone(id: $reception_zone){
        start
        end
    }
}`;

export const DELETE_SCHEDULE = `mutation deleteSchedule($variables: deleteScheduleInput ) {
    deleteSchedule(input:$variables) {
      schedule {
       id
      }
    }
  }`;

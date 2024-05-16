import { forEach } from "lodash";
import { ENV, authFetch } from "@/utils";

export class Cart {
  add(clothId) {
    const clothes = this.getAll();
    const objIndex = clothes.findIndex((cloth) => cloth.id === clothId);

    if (objIndex < 0) {
      clothes.push({ id: clothId, quantity: 1 });
    } else {
      const cloth = clothes[objIndex];
      clothes[objIndex].quantity = cloth.quantity + 1;
    }

    localStorage.setItem(ENV.CART, JSON.stringify(clothes));
  }

  getAll() {
    const response = localStorage.getItem(ENV.CART);

    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  count() {
    const response = this.getAll();
    let count = 0;

    forEach(response, (item) => {
      count += item.quantity;
    });

    return count;
  }

  changeQuantity(clothId, quantity) {
    const clothes = this.getAll();
    const objIndex = clothes.findIndex((cloth) => cloth.id === clothId);

    clothes[objIndex].quantity = quantity;

    localStorage.setItem(ENV.CART, JSON.stringify(clothes));
  }

  delete(clothId) {
    const clothes = this.getAll();
    const updateClothes = clothes.filter((cloth) => cloth.id !== clothId);

    localStorage.setItem(ENV.CART, JSON.stringify(updateClothes));
  }

  deleteAll() {
    localStorage.removeItem(ENV.CART);
  }

  async paymentCart(token, products, idUser, address) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          products,
          idUser,
          addressShipping: address,
        }),
      };

      const response = await authFetch(url, params);

      return response;
    } catch (error) {
      throw error;
    }
  }
}

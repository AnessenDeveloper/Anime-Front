import { ENV } from "@/utils";

export class Cloth {
  async getLastPublished() {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLOTH}?${sort}&${pagination}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, categoryId = null }) {
    try {
      const filterCloth =
        categoryId && `filters[category][id][$eq]=${categoryId}`;
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort[0]=publishedAt:desc`;
      const populate = `populate=*`;
      const urlParams = `${sort}&${paginationLimit}&${filterCloth}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLOTH}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      // console.log(result.data[0].attributes.discount);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getClothesByCategorySlug(slug, page) {
    try {
      const filters = `filters[category][slug][$eq]=${slug}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLOTH}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async searchClothes(text, page) {
    try {
      const filters = `filters[title][$contains]=${text}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLOTH}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug) {
    try {
      const filter = `filters[slug][$eq]=${slug}`;

      const populateCloth =
        "populate[0]=wallpaper&populate[1]=cover&populate[2]=screenshots&populate[3]=category";
      const populateCategory = "populate[4]=category.icon";
      const populates = `${populateCloth}&${populateCategory}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLOTH}?${filter}&${populates}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }

  async getClothById(id) {
    try {
      const populate = `populate[0]=cover&populate[1]=category`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLOTH}/${id}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getSize() {
    try {
      // const sort = "sort=publishedAt:desc";
      // const pagination = "pagination[limit]=1";
      const populate = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CLOTH}?${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
  
}

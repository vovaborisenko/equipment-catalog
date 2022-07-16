import http from "@/api/http-common";

class EquipmentDataService {
  getCategoryList() {
    return http.get('users')
      .then(({data}) => data.map(({name, ...rest}) => ({...rest, title: name})));
  }

  getSubcategoryList(categoryId) {
    return http.get(`users/${categoryId}/albums`)
      .then(({data}) => data.map(({title, ...rest}) => ({...rest, title: title.slice(0, 40)})));
  }

  getEquipmentList(subcategoryId) {
    return http.get(`albums/${subcategoryId}/photos`)
      .then(({data}) => data.map(({title, ...rest}) => ({...rest, title: title.slice(0, 40)})));
  }
}

export default new EquipmentDataService();

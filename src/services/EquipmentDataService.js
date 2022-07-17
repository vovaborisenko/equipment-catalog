import http from "@/api/http-common";

class EquipmentDataService {
  getCategoryList() {
    return http.get('users')
      .then(({data}) => data.map(({name, ...rest}) => ({...rest, title: name})));
  }

  createCategory(params) {
    return http.post('users', params)
  }

  updateCategory({id, ...params}) {
    return http.put(`users/${id}`, params)
  }

  getSubcategoryList(categoryId) {
    return http.get(`users/${categoryId}/albums`)
      .then(({data}) => data.map(({title, ...rest}) => ({...rest, title: title.slice(0, 40).firstCharToUpperCase()})));
  }

  createSubcategory(params) {
    return http.post('albums', params)
  }

  updateSubcategory({id, ...params}) {
    return http.put(`albums/${id}`, params)
  }

  getEquipmentList(subcategoryId) {
    return http.get(`albums/${subcategoryId}/photos`)
      .then(({data}) => data.map(({title, ...rest}) => ({...rest, title: title.slice(0, 40).firstCharToUpperCase()})));
  }

  createEquipment(params) {
    return http.post('photos', params)
  }
}

export default new EquipmentDataService();
